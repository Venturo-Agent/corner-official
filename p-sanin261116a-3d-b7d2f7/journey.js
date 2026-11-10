(()=>{var Bf=2;var Yu=0,Ku=1,ot=2,ci=0;var Zu=2;var zf=5,Wn=100,O1=101,k1=102;var Ga=200,H1=201,F1=202,B1=203,Rh=204,Ch=205,Nc=206,z1=207,Oc=208,G1=209,V1=210,W1=211,j1=212,X1=213,q1=214,Y1=0,K1=1,Z1=2,J1=3,Q1=4,$1=5,eb=6,tb=7;var Gf=1,Vf=2,Wf=3,jf=4;var Xf=6,kc=7,mp="attached",nb="detached",qf=300,Ia=301,La=302,Ph=303,Ih=304,Hc=306,_n=1e3,kr=1001,Es=1002,on=1003,Ju=1004;var wa=1005;var On=1006,vs=1007;var Di=1008;var yi=1009,Yf=1010,Kf=1011,Ts=1012,Qu=1013,Hr=1014,oi=1015,Zn=1016,$u=1017,ed=1018,cr=1020,Zf=35902,Jf=1021,Qf=1022,kn=1023,$f=1024,em=1025,Ss=1026,lr=1027,td=1028,nd=1029,tm=1030,id=1031;var rd=1033,Jo=33776,Qo=33777,$o=33778,ec=33779,Lh=35840,Dh=35841,Uh=35842,Nh=35843,Oh=36196,kh=37492,Hh=37496,Fh=37808,Bh=37809,zh=37810,Gh=37811,Vh=37812,Wh=37813,jh=37814,Xh=37815,qh=37816,Yh=37817,Kh=37818,Zh=37819,Jh=37820,Qh=37821,tc=36492,$h=36494,eu=36495,nm=36283,tu=36284,nu=36285,iu=36286;var Da=2300,Ua=2301,jl=2302,gp=2400,bp=2401,vp=2402;var im=0,Fc=1,zs=2;var Sa="",Ct="srgb",mn="srgb-linear",Bc="linear",dt="srgb";var ua=7680;var ib=512,rb=513,ab=514,sb=515,ob=516,cb=517,lb=518,hb=519,ru=35044;var xp="300 es",Na=2e3,nc=2001,hr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yp=1234567,Ra=Math.PI/180,Oa=180/Math.PI;function jn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ln[255&i]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[255&e]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[63&t|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[255&n]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function au(i,e){return(i%e+e)%e}function xs(i,e,t){return(1-t)*i+t*e}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var zc={DEG2RAD:Ra,RAD2DEG:Oa,generateUUID:jn,clamp:Bt,euclideanModulo:au,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:xs,damp:function(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(au(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(yp=i);let e=yp+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Ra},radToDeg:function(i){return i*Oa},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),h=s((e+n)/2),u=a((e-n)/2),d=s((e-n)/2),p=a((n-e)/2),f=s((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:gt,denormalize:si},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,r,a,s,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],b=r[0],g=r[3],x=r[6],v=r[1],m=r[4],y=r[7],M=r[2],_=r[5],T=r[8];return a[0]=s*b+o*v+c*M,a[3]=s*g+o*m+c*_,a[6]=s*x+o*y+c*T,a[1]=l*b+h*v+u*M,a[4]=l*g+h*m+u*_,a[7]=l*x+h*y+u*T,a[2]=d*b+p*v+f*M,a[5]=d*g+p*m+f*_,a[8]=d*x+p*y+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*a*h+n*o*c+r*a*l-r*s*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*a,p=l*a-s*c,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/f;return e[0]=u*b,e[1]=(r*l-h*n)*b,e[2]=(o*n-r*s)*b,e[3]=d*b,e[4]=(h*t-r*c)*b,e[5]=(r*a-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(s*t-n*a)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new We;function rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ub(){let i=ws("canvas");return i.style.display="block",i}var _p={};function bs(i){i in _p||(_p[i]=!0,console.warn(i))}var $e={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===dt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=Ca(i.r),i.g=Ca(i.g),i.b=Ca(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sa?Bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ui(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Ca(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Mp=[.64,.33,.3,.6,.15,.06],Ep=[.2126,.7152,.0722],Tp=[.3127,.329],Sp=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wp=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),da;$e.define({[mn]:{primaries:Mp,whitePoint:Tp,transfer:Bc,toXYZ:Sp,fromXYZ:wp,luminanceCoefficients:Ep,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Mp,whitePoint:Tp,transfer:dt,toXYZ:Sp,fromXYZ:wp,luminanceCoefficients:Ep,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});var su=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{da===void 0&&(da=ws("canvas")),da.width=e.width,da.height=e.height;let n=da.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=da}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=255*Ui(a[s]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Ui(t[n]/255)):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},db=0,ic=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ql(r[s].image)):a.push(ql(r[s]))}else a=ql(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pb=0,$t=class i extends hr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,a=1006,s=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=jn(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=qf,$t.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],b=c[2],g=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(f+g)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(l+1)/2,y=(p+1)/2,M=(x+1)/2,_=(h+d)/4,T=(u+b)/4,S=(f+g)/4;return m>y&&m>M?m<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(m),r=_/n,a=T/n):y>M?y<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),n=_/r,a=S/r):M<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),n=T/a,r=S/a),this.set(n,r,a,t),this}let v=Math.sqrt((g-f)*(g-f)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-f)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ou=class extends hr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let a=new $t(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];let s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rc=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cu=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=a[s+0],p=a[s+1],f=a[s+2],b=a[s+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=b);if(u!==b||c!==d||l!==p||h!==f){let g=1-o,x=c*d+l*p+h*f+u*b,v=x>=0?1:-1,m=1-x*x;if(m>Number.EPSILON){let M=Math.sqrt(m),_=Math.atan2(M,x*v);g=Math.sin(g*_)/M,o=Math.sin(o*_)/M}let y=o*v;if(c=c*g+d*y,l=l*g+p*y,h=h*g+f*y,u=u*g+b*y,g===1-o){let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,s){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=a[s],d=a[s+1],p=a[s+2],f=a[s+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(a/2),d=c(n/2),p=c(r/2),f=c(a/2);switch(s){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+r*l-a*c,this._y=r*h+s*c+a*o-n*l,this._z=a*h+s*l+n*c-r*o,this._w=s*h-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,a=this._z,s=this._w,o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),h=2*(o*t-a*r),u=2*(a*n-s*t);return this.x=t+c*l+s*u-o*h,this.y=n+c*h+o*l-a*u,this.z=r+c*u+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new E,Ap=new dn,en=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ii):ii.fromBufferAttribute(a,s),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),vo.subVectors(this.max,os),pa.subVectors(e.a,os),fa.subVectors(e.b,os),ma.subVectors(e.c,os),Qi.subVectors(fa,pa),$i.subVectors(ma,fa),Pr.subVectors(pa,ma);let t=[0,-Qi.z,Qi.y,0,-$i.z,$i.y,0,-Pr.z,Pr.y,Qi.z,0,-Qi.x,$i.z,0,-$i.x,Pr.z,0,-Pr.x,-Qi.y,Qi.x,0,-$i.y,$i.x,0,-Pr.y,Pr.x,0];return!!Kl(t,pa,fa,ma,vo)&&(t=[1,0,0,0,1,0,0,0,1],!!Kl(t,pa,fa,ma,vo)&&(xo.crossVectors(Qi,$i),t=[xo.x,xo.y,xo.z],Kl(t,pa,fa,ma,vo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ii).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new E,new E,new E,new E,new E,new E,new E,new E],ii=new E,bo=new en,pa=new E,fa=new E,ma=new E,Qi=new E,$i=new E,Pr=new E,os=new E,vo=new E,xo=new E,Ir=new E;function Kl(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Ir.fromArray(i,a);let o=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),c=e.dot(Ir),l=t.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var fb=new en,cs=new E,Zl=new E,An=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fb.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);let t=cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(cs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Zl)),this.expandByPoint(cs.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new E,Jl=new E,yo=new E,er=new E,Ql=new E,_o=new E,$l=new E,Fr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jl.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Jl);let a=.5*e.distanceTo(t),s=-this.direction.dot(yo),o=er.dot(this.direction),c=-er.dot(yo),l=er.lengthSq(),h=Math.abs(1-s*s),u,d,p,f;if(h>0)if(u=s*c-o,d=s*o-c,f=a*h,u>=0)if(d>=-f)if(d<=f){let b=1/h;u*=b,d*=b,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jl).addScaledVector(yo,d),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||a>r?null:((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,r,a){Ql.subVectors(t,e),_o.subVectors(n,e),$l.crossVectors(Ql,_o);let s,o=this.direction.dot($l);if(o>0){if(r)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}er.subVectors(this.origin,e);let c=s*this.direction.dot(_o.crossVectors(er,_o));if(c<0)return null;let l=s*this.direction.dot(Ql.cross(er));if(l<0||c+l>o)return null;let h=-s*er.dot($l);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class i{constructor(e,t,n,r,a,s,o,c,l,h,u,d,p,f,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,h,u,d,p,f,b,g)}set(e,t,n,r,a,s,o,c,l,h,u,d,p,f,b,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=s,x[9]=o,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=f,x[11]=b,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ga.setFromMatrixColumn(e,0).length(),a=1/ga.setFromMatrixColumn(e,1).length(),s=1/ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=s*h,p=s*u,f=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=f+p*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,b=l*u;t[0]=d+b*o,t[4]=f*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-f,t[6]=b+d*o,t[10]=s*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,b=l*u;t[0]=d-b*o,t[4]=-s*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=s*h,t[9]=b-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let d=s*h,p=s*u,f=o*h,b=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,p=s*l,f=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=f*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-b*u}else if(e.order==="XZY"){let d=s*c,p=s*l,f=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=s*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mb,e,gb)}lookAt(e,t,n){let r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),tr.crossVectors(n,Un),tr.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),tr.crossVectors(n,Un)),tr.normalize(),Mo.crossVectors(Un,tr),r[0]=tr.x,r[4]=Mo.x,r[8]=Un.x,r[1]=tr.y,r[5]=Mo.y,r[9]=Un.y,r[2]=tr.z,r[6]=Mo.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],b=n[6],g=n[10],x=n[14],v=n[3],m=n[7],y=n[11],M=n[15],_=r[0],T=r[4],S=r[8],w=r[12],P=r[1],I=r[5],U=r[9],z=r[13],V=r[2],Q=r[6],$=r[10],W=r[14],Y=r[3],ee=r[7],ie=r[11],X=r[15];return a[0]=s*_+o*P+c*V+l*Y,a[4]=s*T+o*I+c*Q+l*ee,a[8]=s*S+o*U+c*$+l*ie,a[12]=s*w+o*z+c*W+l*X,a[1]=h*_+u*P+d*V+p*Y,a[5]=h*T+u*I+d*Q+p*ee,a[9]=h*S+u*U+d*$+p*ie,a[13]=h*w+u*z+d*W+p*X,a[2]=f*_+b*P+g*V+x*Y,a[6]=f*T+b*I+g*Q+x*ee,a[10]=f*S+b*U+g*$+x*ie,a[14]=f*w+b*z+g*W+x*X,a[3]=v*_+m*P+y*V+M*Y,a[7]=v*T+m*I+y*Q+M*ee,a[11]=v*S+m*U+y*$+M*ie,a[15]=v*w+m*z+y*W+M*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*c*u-r*l*u-a*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+a*s*d-r*s*p+r*l*h-a*c*h)+e[11]*(+t*l*u-t*o*p-a*s*u+n*s*p+a*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*s*u-n*s*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],b=e[13],g=e[14],x=e[15],v=u*g*l-b*d*l+b*c*p-o*g*p-u*c*x+o*d*x,m=f*d*l-h*g*l-f*c*p+s*g*p+h*c*x-s*d*x,y=h*b*l-f*u*l+f*o*p-s*b*p-h*o*x+s*u*x,M=f*u*c-h*b*c-f*o*d+s*b*d+h*o*g-s*u*g,_=t*v+n*m+r*y+a*M;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/_;return e[0]=v*T,e[1]=(b*d*a-u*g*a-b*r*p+n*g*p+u*r*x-n*d*x)*T,e[2]=(o*g*a-b*c*a+b*r*l-n*g*l-o*r*x+n*c*x)*T,e[3]=(u*c*a-o*d*a-u*r*l+n*d*l+o*r*p-n*c*p)*T,e[4]=m*T,e[5]=(h*g*a-f*d*a+f*r*p-t*g*p-h*r*x+t*d*x)*T,e[6]=(f*c*a-s*g*a-f*r*l+t*g*l+s*r*x-t*c*x)*T,e[7]=(s*d*a-h*c*a+h*r*l-t*d*l-s*r*p+t*c*p)*T,e[8]=y*T,e[9]=(f*u*a-h*b*a-f*n*p+t*b*p+h*n*x-t*u*x)*T,e[10]=(s*b*a-f*o*a+f*n*l-t*b*l-s*n*x+t*o*x)*T,e[11]=(h*o*a-s*u*a-h*n*l+t*u*l+s*n*p-t*o*p)*T,e[12]=M*T,e[13]=(h*b*r-f*u*r+f*n*d-t*b*d-h*n*g+t*u*g)*T,e[14]=(f*o*r-s*b*r-f*n*c+t*b*c+s*n*g-t*o*g)*T,e[15]=(s*u*r-h*o*r+h*n*c-t*u*c-s*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*s,0,l*c-r*o,h*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,u=o+o,d=a*l,p=a*h,f=a*u,b=s*h,g=s*u,x=o*u,v=c*l,m=c*h,y=c*u,M=n.x,_=n.y,T=n.z;return r[0]=(1-(b+x))*M,r[1]=(p+y)*M,r[2]=(f-m)*M,r[3]=0,r[4]=(p-y)*_,r[5]=(1-(d+x))*_,r[6]=(g+v)*_,r[7]=0,r[8]=(f+m)*T,r[9]=(g-v)*T,r[10]=(1-(d+b))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,a=ga.set(r[0],r[1],r[2]).length(),s=ga.set(r[4],r[5],r[6]).length(),o=ga.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let c=1/a,l=1/s,h=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=l,ri.elements[5]*=l,ri.elements[6]*=l,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=2e3){let c=this.elements,l=2*a/(t-e),h=2*a/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===Na)p=-(s+a)/(s-a),f=-2*s*a/(s-a);else{if(o!==nc)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),f=-s*a/(s-a)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-r),u=1/(s-a),d=(t+e)*l,p=(n+r)*h,f,b;if(o===Na)f=(s+a)*u,b=-2*u;else{if(o!==nc)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=a*u,b=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ga=new E,ri=new Ae,mb=new E(0,0,0),gb=new E(1,1,1),tr=new E,Mo=new E,Un=new E,Rp=new Ae,Cp=new dn,qn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},bb=0,Pp=new E,ba=new dn,Ri=new Ae,Eo=new E,ls=new E,vb=new E,xb=new dn,Ip=new E(1,0,0),Lp=new E(0,1,0),Dp=new E(0,0,1),Up={type:"added"},yb={type:"removed"},va={type:"childadded",child:null},eh={type:"childremoved",child:null},ut=class i extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new qn,n=new dn,r=new E(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new We}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ba.setFromAxisAngle(e,t),this.quaternion.multiply(ba),this}rotateOnWorldAxis(e,t){return ba.setFromAxisAngle(e,t),this.quaternion.premultiply(ba),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ls,Eo,this.up):Ri.lookAt(Eo,ls,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),ba.setFromRotationMatrix(Ri),this.quaternion.premultiply(ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Up),va.child=e,this.dispatchEvent(va),va.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yb),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Up),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,xb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),f=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function s(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};ut.DEFAULT_UP=new E(0,1,0),ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new E,Ci=new E,th=new E,Pi=new E,xa=new E,ya=new E,Np=new E,nh=new E,ih=new E,rh=new E,ah=new ht,sh=new ht,oh=new ht,rr=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ai.subVectors(e,t),r.cross(ai);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){ai.subVectors(r,t),Ci.subVectors(n,t),th.subVectors(e,t);let s=ai.dot(ai),o=ai.dot(Ci),c=ai.dot(th),l=Ci.dot(Ci),h=Ci.dot(th),u=s*l-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(s*h-o*c)*d;return a.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pi)!==null&&Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Pi.x),c.addScaledVector(s,Pi.y),c.addScaledVector(o,Pi.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return ah.setScalar(0),sh.setScalar(0),oh.setScalar(0),ah.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),oh.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ah,a.x),s.addScaledVector(sh,a.y),s.addScaledVector(oh,a.z),s}static isFrontFacing(e,t,n,r){return ai.subVectors(n,t),Ci.subVectors(e,t),ai.cross(Ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),.5*ai.cross(Ci).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,s,o;xa.subVectors(r,n),ya.subVectors(a,n),nh.subVectors(e,n);let c=xa.dot(nh),l=ya.dot(nh);if(c<=0&&l<=0)return t.copy(n);ih.subVectors(e,r);let h=xa.dot(ih),u=ya.dot(ih);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector(xa,s);rh.subVectors(e,a);let p=xa.dot(rh),f=ya.dot(rh);if(f>=0&&p<=f)return t.copy(a);let b=p*l-c*f;if(b<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(ya,o);let g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return Np.subVectors(a,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(Np,o);let x=1/(g+b+d);return s=b*x,o=d*x,t.copy(n).addScaledVector(xa,s).addScaledVector(ya,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},To={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=au(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ch(s,a,e+1/3),this.g=ch(s,a,e),this.b=ch(s,a,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return $e.fromWorkingColorSpace(hn.copy(this),e),65536*Math.round(Bt(255*hn.r,0,255))+256*Math.round(Bt(255*hn.g,0,255))+Math.round(Bt(255*hn.b,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,a=hn.b,s=Math.max(n,r,a),o=Math.min(n,r,a),c,l,h=(o+s)/2;if(o===s)c=0,l=0;else{let u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case n:c=(r-a)/u+(r<a?6:0);break;case r:c=(a-n)/u+2;break;case a:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ct){$e.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(To);let n=xs(nr.h,To.h,t),r=xs(nr.s,To.s,t),a=xs(nr.l,To.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new me;me.NAMES=am;var _b=0,Rn=class extends hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=jn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(a){let s=[];for(let o in a){let c=a[o];delete c.metadata,s.push(c)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ch&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends Rn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},r3=Mb();function Mb(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,a[c]=l|h}for(let c=1024;c<2048;++c)a[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)s[c]=c<<23;s[31]=1199570944,s[32]=2147483648;for(let c=33;c<63;++c)s[c]=2147483648+(c-32<<23);s[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}var Gt=new E,So=new ce,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}};var ac=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sc=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eb=0,Vn=new Ae,lh=new ut,_a=new E,Nn=new en,hs=new en,Qt=new E,He=class i extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?sc:ac)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new We().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,a=e.length;r<a;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,r=t.count;n<r;n++){let a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let a=t[n];Nn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Nn.min,hs.min),Nn.expandByPoint(Qt),Qt.addVectors(Nn.max,hs.max),Nn.expandByPoint(Qt)):(Nn.expandByPoint(hs.min),Nn.expandByPoint(hs.max))}Nn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Qt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Qt));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qt.fromBufferAttribute(o,l),c&&(_a.fromBufferAttribute(e,l),Qt.add(_a)),r=Math.max(r,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new E,c[S]=new E;let l=new E,h=new E,u=new E,d=new ce,p=new ce,f=new ce,b=new E,g=new E;function x(S,w,P){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,P),d.fromBufferAttribute(a,S),p.fromBufferAttribute(a,w),f.fromBufferAttribute(a,P),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let I=1/(p.x*f.y-f.x*p.y);isFinite(I)&&(b.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(I),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(I),o[S].add(b),o[w].add(b),o[P].add(b),c[S].add(g),c[w].add(g),c[P].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,w=v.length;S<w;++S){let P=v[S],I=P.start;for(let U=I,z=I+P.count;U<z;U+=3)x(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let m=new E,y=new E,M=new E,_=new E;function T(S){M.fromBufferAttribute(r,S),_.copy(M);let w=o[S];m.copy(w),m.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(_,w);let P=y.dot(c[S])<0?-1:1;s.setXYZW(S,m.x,m.y,m.z,P)}for(let S=0,w=v.length;S<w;++S){let P=v[S],I=P.start;for(let U=I,z=I+P.count;U<z;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new E,a=new E,s=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,g),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let b=0,g=c.length;b<g;b++){p=o.isInterleavedBufferAttribute?c[b]*o.data.stride+o.offset:c[b]*h;for(let x=0;x<h;x++)d[f++]=l[p++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],u=a[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,h=s.length;l<h;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Op=new Ae,Lr=new Fr,wo=new An,kp=new E,Ao=new E,Ro=new E,Co=new E,hh=new E,Po=new E,Hp=new E,Io=new E,te=class extends ut{constructor(e=new He,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){Po.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],u=a[c];h!==0&&(hh.fromBufferAttribute(u,e),s?Po.addScaledVector(hh,h):Po.addScaledVector(hh.sub(t),h))}t.add(Po)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(a),Lr.copy(e.ray).recast(e.near),wo.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(wo,kp)===null||Lr.origin.distanceToSquared(kp)>(e.far-e.near)**2))return;Op.copy(a).invert(),Lr.copy(e.ray).applyMatrix4(Op),n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Lr)}}_computeIntersections(e,t,n){let r,a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,b=d.length;f<b;f++){let g=d[f],x=s[g.materialIndex];for(let v=Math.max(g.start,p.start),m=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));v<m;v+=3)r=Lo(this,x,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);f<b;f+=3)r=Lo(this,s,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(s))for(let f=0,b=d.length;f<b;f++){let g=d[f],x=s[g.materialIndex];for(let v=Math.max(g.start,p.start),m=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));v<m;v+=3)r=Lo(this,x,e,n,l,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);f<b;f+=3)r=Lo(this,s,e,n,l,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Lo(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Ao),i.getVertexPosition(c,Ro),i.getVertexPosition(l,Co);let h=(function(u,d,p,f,b,g,x,v){let m;if(m=d.side===1?f.intersectTriangle(x,g,b,!0,v):f.intersectTriangle(b,g,x,d.side===0,v),m===null)return null;Io.copy(v),Io.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(Io);return y<p.near||y>p.far?null:{distance:y,point:Io.clone(),object:u}})(i,e,t,n,Ao,Ro,Co,Hp);if(h){let u=new E;rr.getBarycoord(Hp,Ao,Ro,Co,u),r&&(h.uv=rr.getInterpolatedAttribute(r,o,c,l,u,new ce)),a&&(h.uv1=rr.getInterpolatedAttribute(a,o,c,l,u,new ce)),s&&(h.normal=rr.getInterpolatedAttribute(s,o,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new E,materialIndex:0};rr.getNormal(Ao,Ro,Co,d.normal),h.face=d,h.barycoord=u}return h}var Et=class i extends He{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=0,p=0;function f(b,g,x,v,m,y,M,_,T,S,w){let P=y/T,I=M/S,U=y/2,z=M/2,V=_/2,Q=T+1,$=S+1,W=0,Y=0,ee=new E;for(let ie=0;ie<$;ie++){let X=ie*I-z;for(let F=0;F<Q;F++){let K=F*P-U;ee[b]=K*v,ee[g]=X*m,ee[x]=V,l.push(ee.x,ee.y,ee.z),ee[b]=0,ee[g]=0,ee[x]=_>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(F/T),u.push(1-ie/S),W+=1}}for(let ie=0;ie<S;ie++)for(let X=0;X<T;X++){let F=d+X+Q*ie,K=d+X+Q*(ie+1),oe=d+(X+1)+Q*(ie+1),Z=d+(X+1)+Q*ie;c.push(F,K,Z),c.push(K,oe,Z),Y+=6}o.addGroup(p,Y,w),p+=Y,d+=W}f("z","y","x",-1,-1,n,t,e,s,a,0),f("z","y","x",1,-1,n,t,-e,s,a,1),f("x","z","y",1,1,e,n,t,r,s,2),f("x","z","y",1,-1,e,n,-t,r,s,3),f("x","y","z",1,-1,e,t,n,r,a,4),f("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ka(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=ka(i[t]);for(let r in n)e[r]=n[r]}return e}function sm(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var li={clone:ka,merge:yn},Vt=class extends Rn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ka(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rs=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Na}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ir=new E,Fp=new ce,Bp=new ce,qt=class extends Rs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Oa*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ra*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Oa*Math.atan(Math.tan(.5*Ra*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Bp),t.subVectors(Bp,Fp)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ra*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ma=-90,lu=class extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(Ma,1,e,t);r.layers=this.layers,this.add(r);let a=new qt(Ma,1,e,t);a.layers=this.layers,this.add(a);let s=new qt(Ma,1,e,t);s.layers=this.layers,this.add(s);let o=new qt(Ma,1,e,t);o.layers=this.layers,this.add(o);let c=new qt(Ma,1,e,t);c.layers=this.layers,this.add(c);let l=new qt(Ma,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(let l of t)this.remove(l);if(e===Na)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==nc)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},oc=class extends $t{constructor(e,t,n,r,a,s,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Ia,n,r,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hu=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Et(5,5,5),a=new Vt({name:"CubemapFromEquirect",uniforms:ka(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new te(r,a),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=On),new lu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}},uh=new E,Tb=new E,Sb=new We,Li=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=uh.subVectors(n,t).cross(Tb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(uh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sb.getNormalMatrix(e),r=this.coplanarPoint(uh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new An,Do=new E,ur=class{constructor(e=new Li,t=new Li,n=new Li,r=new Li,a=new Li,s=new Li){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],b=r[10],g=r[11],x=r[12],v=r[13],m=r[14],y=r[15];if(n[0].setComponents(c-a,d-l,g-p,y-x).normalize(),n[1].setComponents(c+a,d+l,g+p,y+x).normalize(),n[2].setComponents(c+s,d+h,g+f,y+v).normalize(),n[3].setComponents(c-s,d-h,g-f,y-v).normalize(),n[4].setComponents(c-o,d-u,g-b,y-m).normalize(),t===Na)n[5].setComponents(c+o,d+u,g+b,y+m).normalize();else{if(t!==nc)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,b,m).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Do.x=r.normal.x>0?e.max.x:e.min.x,Do.y=r.normal.y>0?e.max.y:e.min.y,Do.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function om(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function wb(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let a=e.get(t);return void((!a||a.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(a,s){let o=a.array,c=a.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(s,h),i.bufferData(s,o,c),a.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=a.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(a,s,o){let c=s.array,l=s.updateRanges;if(i.bindBuffer(o,a),l.length===0)i.bufferSubData(o,0,c);else{l.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Mn=class i extends He{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],b=[],g=[];for(let x=0;x<h;x++){let v=x*d-s;for(let m=0;m<l;m++){let y=m*u-a;f.push(y,-v,0),b.push(0,0,1),g.push(m/o),g.push(1-x/c)}}for(let x=0;x<c;x++)for(let v=0;v<o;v++){let m=v+l*x,y=v+l*(x+1),M=v+1+l*(x+1),_=v+1+l*x;p.push(m,y,_),p.push(y,M,_)}this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(b,3)),this.setAttribute("uv",new Ce(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},xe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vi={basic:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new me(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:yn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:yn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new me(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:yn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:yn([xe.points,xe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:yn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:yn([xe.common,xe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:yn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:yn([xe.sprite,xe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:yn([xe.common,xe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:yn([xe.lights,xe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};vi.physical={uniforms:yn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Uo={r:0,b:0,g:0},Ur=new qn,Ab=new Ae;function Rb(i,e,t,n,r,a,s){let o=new me(0),c,l,h=a===!0?0:1,u=null,d=0,p=null;function f(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x)),x}function b(g,x){g.getRGB(Uo,sm(i)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),h=x,b(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,b(o,h)},render:function(g){let x=!1,v=f(g);v===null?b(o,h):v&&v.isColor&&(b(v,1),x=!0);let m=i.xr.getEnvironmentBlendMode();m==="additive"?n.buffers.color.setClear(0,0,0,1,s):m==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(g,x){let v=f(x);v&&(v.isCubeTexture||v.mapping===Hc)?(l===void 0&&(l=new te(new Et(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ka(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(m,y,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Ur.copy(x.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(Ur)),l.material.toneMapped=$e.getTransfer(v.colorSpace)!==dt,u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new te(new Mn(2,2),new Vt({name:"BackgroundMaterial",uniforms:ka(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}}}function Cb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),a=r,s=!1;function o(x){return i.bindVertexArray(x)}function c(x){return i.deleteVertexArray(x)}function l(x){let v=[],m=[],y=[];for(let M=0;M<t;M++)v[M]=0,m[M]=0,y[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:m,attributeDivisors:y,object:x,attributes:{},index:null}}function h(){let x=a.newAttributes;for(let v=0,m=x.length;v<m;v++)x[v]=0}function u(x){d(x,0)}function d(x,v){let m=a.newAttributes,y=a.enabledAttributes,M=a.attributeDivisors;m[x]=1,y[x]===0&&(i.enableVertexAttribArray(x),y[x]=1),M[x]!==v&&(i.vertexAttribDivisor(x,v),M[x]=v)}function p(){let x=a.newAttributes,v=a.enabledAttributes;for(let m=0,y=v.length;m<y;m++)v[m]!==x[m]&&(i.disableVertexAttribArray(m),v[m]=0)}function f(x,v,m,y,M,_,T){T===!0?i.vertexAttribIPointer(x,v,m,M,_):i.vertexAttribPointer(x,v,m,y,M,_)}function b(){g(),s=!0,a!==r&&(a=r,o(a.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(x,v,m,y,M){let _=!1,T=(function(S,w,P){let I=P.wireframe===!0,U=n[S.id];U===void 0&&(U={},n[S.id]=U);let z=U[w.id];z===void 0&&(z={},U[w.id]=z);let V=z[I];return V===void 0&&(V=l(i.createVertexArray()),z[I]=V),V})(y,m,v);a!==T&&(a=T,o(a.object)),_=(function(S,w,P,I){let U=a.attributes,z=w.attributes,V=0,Q=P.getAttributes();for(let $ in Q)if(Q[$].location>=0){let W=U[$],Y=z[$];if(Y===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),W===void 0||W.attribute!==Y||Y&&W.data!==Y.data)return!0;V++}return a.attributesNum!==V||a.index!==I})(x,y,m,M),_&&(function(S,w,P,I){let U={},z=w.attributes,V=0,Q=P.getAttributes();for(let $ in Q)if(Q[$].location>=0){let W=z[$];W===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));let Y={};Y.attribute=W,W&&W.data&&(Y.data=W.data),U[$]=Y,V++}a.attributes=U,a.attributesNum=V,a.index=I})(x,y,m,M),M!==null&&e.update(M,i.ELEMENT_ARRAY_BUFFER),(_||s)&&(s=!1,(function(S,w,P,I){h();let U=I.attributes,z=P.getAttributes(),V=w.defaultAttributeValues;for(let Q in z){let $=z[Q];if($.location>=0){let W=U[Q];if(W===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){let Y=W.normalized,ee=W.itemSize,ie=e.get(W);if(ie===void 0)continue;let X=ie.buffer,F=ie.type,K=ie.bytesPerElement,oe=F===i.INT||F===i.UNSIGNED_INT||W.gpuType===Qu;if(W.isInterleavedBufferAttribute){let Z=W.data,C=Z.stride,R=W.offset;if(Z.isInstancedInterleavedBuffer){for(let H=0;H<$.locationSize;H++)d($.location+H,Z.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let H=0;H<$.locationSize;H++)u($.location+H);i.bindBuffer(i.ARRAY_BUFFER,X);for(let H=0;H<$.locationSize;H++)f($.location+H,ee/$.locationSize,F,Y,C*K,(R+ee/$.locationSize*H)*K,oe)}else{if(W.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)d($.location+Z,W.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Z=0;Z<$.locationSize;Z++)u($.location+Z);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Z=0;Z<$.locationSize;Z++)f($.location+Z,ee/$.locationSize,F,Y,ee*K,ee/$.locationSize*Z*K,oe)}}else if(V!==void 0){let Y=V[Q];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv($.location,Y);break;case 3:i.vertexAttrib3fv($.location,Y);break;case 4:i.vertexAttrib4fv($.location,Y);break;default:i.vertexAttrib1fv($.location,Y)}}}}p()})(x,v,m,y),M!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:b,resetDefaultState:g,dispose:function(){b();for(let x in n){let v=n[x];for(let m in v){let y=v[m];for(let M in y)c(y[M].object),delete y[M];delete v[m]}delete n[x]}},releaseStatesOfGeometry:function(x){if(n[x.id]===void 0)return;let v=n[x.id];for(let m in v){let y=v[m];for(let M in y)c(y[M].object),delete y[M];delete v[m]}delete n[x.id]},releaseStatesOfProgram:function(x){for(let v in n){let m=n[v];if(m[x.id]===void 0)continue;let y=m[x.id];for(let M in y)c(y[M].object),delete y[M];delete m[x.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Pb(i,e,t){let n;function r(a,s,o){o!==0&&(i.drawArraysInstanced(n,a,s,o),t.update(s,n,o))}this.setMode=function(a){n=a},this.render=function(a,s){i.drawArrays(n,a,s),t.update(s,n,1)},this.renderInstances=r,this.renderMultiDraw=function(a,s,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,s,0,o);let c=0;for(let l=0;l<o;l++)c+=s[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(a,s,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<a.length;h++)r(a[h],s[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,a,0,s,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=s[u]*c[u];t.update(h,n,1)}}}function Ib(i,e,t,n){let r;function a(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let c=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,textureFormatReadable:function(d){return d===kn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==yi&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==oi&&!p)},precision:s,logarithmicDepthBuffer:c,reverseDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Lb(i){let e=this,t=null,n=0,r=!1,a=!1,s=new Li,o=new We,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,b=null;if(f!==0){if(b=c.value,p!==!0||b===null){let g=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(b===null||b.length<g)&&(b=new Float32Array(g));for(let v=0,m=d;v!==f;++v,m+=4)s.copy(h[v]).applyMatrix4(x,o),s.normal.toArray(b,m),b[m+3]=s.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,b}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,b=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||a&&!b)a?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let x=a?0:n,v=4*x,m=g.clippingState||null;c.value=m,m=l(p,u,v,d);for(let y=0;y!==v;++y)m[y]=t[y];g.clippingState=m,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function Db(i){let e=new WeakMap;function t(r,a){return a===Ph?r.mapping=Ia:a===Ih&&(r.mapping=La),r}function n(r){let a=r.target;a.removeEventListener("dispose",n);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping;if(a===Ph||a===Ih){if(e.has(r))return t(e.get(r).texture,r.mapping);{let s=r.image;if(s&&s.height>0){let o=new hu(s.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var dr=class extends Rs{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zp=[.125,.215,.35,.446,.526,.582],us=20,dh=new dr,Gp=new me,ph=null,fh=0,mh=0,gh=!1,Or=(1+Math.sqrt(5))/2,Ea=1/Or,Vp=[new E(-Or,Ea,0),new E(Or,Ea,0),new E(-Ea,0,Or),new E(Ea,0,Or),new E(0,Or,-Ea),new E(0,Or,Ea),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ph=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,fh,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ia||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Zn,format:kn,colorSpace:mn,depthBuffer:!1},r=Wp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(s){let o=[],c=[],l=[],h=s,u=s-4+1+zp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>s-4?f=zp[d-s+4-1]:d===0&&(f=0),l.push(f);let b=1/(p-2),g=-b,x=1+b,v=[g,g,x,g,x,x,g,g,x,x,g,x],m=6,y=6,M=3,_=2,T=1,S=new Float32Array(M*y*m),w=new Float32Array(_*y*m),P=new Float32Array(T*y*m);for(let U=0;U<m;U++){let z=U%3*2/3-1,V=U>2?0:-1,Q=[z,V,0,z+2/3,V,0,z+2/3,V+1,0,z,V,0,z+2/3,V+1,0,z,V+1,0];S.set(Q,M*y*U),w.set(v,_*y*U);let $=[U,U,U,U,U,U];P.set($,T*y*U)}let I=new He;I.setAttribute("position",new bt(S,M)),I.setAttribute("uv",new bt(w,_)),I.setAttribute("faceIndex",new bt(P,T)),o.push(I),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(a)),this._blurMaterial=(function(s,o,c){let l=new Float32Array(us),h=new E(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ad(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(a,e,t)}return r}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,dh)}_sceneToCubeUV(e,t,n,r){let a=new qt(90,1,t,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Gp),c.toneMapping=0,c.autoClear=!1;let u=new cn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new te(new Et,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Gp),p=!0);for(let b=0;b<6;b++){let g=b%3;g===0?(a.up.set(0,s[b],0),a.lookAt(o[b],0,0)):g===1?(a.up.set(0,0,s[b]),a.lookAt(0,o[b],0)):(a.up.set(0,s[b],0),a.lookAt(0,0,o[b]));let x=this._cubeSize;No(r,g*x,b>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ia||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new te(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let o=this._cubeSize;No(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,dh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Vp[(r-a-1)%Vp.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new te(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,f=a/p,b=isFinite(a)?1+Math.floor(3*f):us;b>us&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${b} samples when the maximum is set to 20`);let g=[],x=0;for(let y=0;y<us;++y){let M=y/f,_=Math.exp(-M*M/2);g.push(_),y===0?x+=_:y<b&&(x+=2*_)}for(let y=0;y<g.length;y++)g[y]=g[y]/x;u.envMap.value=e.texture,u.samples.value=b,u.weights.value=g,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let m=this._sizeLods[r];No(t,3*m*(r>v-4?r-v+4:0),4*(this._cubeSize-m),3*m,2*m),c.setRenderTarget(t),c.render(h,dh)}};function Wp(i,e,t){let n=new un(i,e,t);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jp(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xp(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}function Ub(i){let e=new WeakMap,t=null;function n(r){let a=r.target;a.removeEventListener("dispose",n);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping,s=a===Ph||a===Ih,o=a===Ia||a===La;if(s||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new cc(i)),c=s?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return s&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new cc(i)),c=s?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Nb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ob(i,e,t,n){let r={},a=new WeakMap;function s(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let d=l.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}l.removeEventListener("dispose",s),delete r[l.id];let h=a.get(l);h&&(e.remove(h),a.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let b=h.array;d=h.version;for(let g=0,x=b.length;g<x;g+=3){let v=b[g+0],m=b[g+1],y=b[g+2];l.push(v,m,m,y,y,v)}}else{if(u===void 0)return;{let b=u.array;d=u.version;for(let g=0,x=b.length/3-1;g<x;g+=3){let v=g+0,m=g+1,y=g+2;l.push(v,m,m,y,y,v)}}}let p=new(rm(l)?sc:ac)(l,1);p.version=d;let f=a.get(c);f&&e.remove(f),a.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",s),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],i.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=a.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return a.get(c)}}}function kb(i,e,t){let n,r,a;function s(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*a,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,a=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*a),t.update(c,n,1)},this.renderInstances=s,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)s(o[d]/a,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Hb(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Fb(i,e,t){let n=new WeakMap,r=new ht;return{update:function(a,s,o){let c=a.morphTargetInfluences,l=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(s);if(u===void 0||u.count!==h){let S=function(){_.dispose(),n.delete(s),s.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let d=s.morphAttributes.position!==void 0,p=s.morphAttributes.normal!==void 0,f=s.morphAttributes.color!==void 0,b=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],x=s.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let m=s.attributes.position.count*v,y=1;m>e.maxTextureSize&&(y=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let M=new Float32Array(m*y*4*h),_=new rc(M,m,y,h);_.type=oi,_.needsUpdate=!0;let T=4*v;for(let w=0;w<h;w++){let P=b[w],I=g[w],U=x[w],z=m*y*4*w;for(let V=0;V<P.count;V++){let Q=V*T;d===!0&&(r.fromBufferAttribute(P,V),M[z+Q+0]=r.x,M[z+Q+1]=r.y,M[z+Q+2]=r.z,M[z+Q+3]=0),p===!0&&(r.fromBufferAttribute(I,V),M[z+Q+4]=r.x,M[z+Q+5]=r.y,M[z+Q+6]=r.z,M[z+Q+7]=0),f===!0&&(r.fromBufferAttribute(U,V),M[z+Q+8]=r.x,M[z+Q+9]=r.y,M[z+Q+10]=r.z,M[z+Q+11]=U.itemSize===4?r.w:1)}}u={count:h,texture:_,size:new ce(m,y)},n.set(s,u),s.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=s.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Bb(i,e,t,n){let r=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=n.render.frame,c=s.geometry,l=e.get(s,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),r.get(s)!==o&&(t.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,i.ARRAY_BUFFER),r.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var Ha=class extends $t{constructor(e,t,n,r,a,s,o,c,l,h=1026){if(h!==Ss&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Hr),n===void 0&&h===lr&&(n=cr),super(null,r,a,s,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cm=new $t,qp=new Ha(1,1),lm=new rc,hm=new cu,um=new oc,Yp=[],Kp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),Qp=new Float32Array(4);function Va(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,a=Yp[r];if(a===void 0&&(a=new Float32Array(r),Yp[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Vb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Wb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function jb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Qp.set(n),i.uniformMatrix2fv(this.addr,!1,Qp),Kt(t,n)}}function Xb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Jp.set(n),i.uniformMatrix3fv(this.addr,!1,Jp),Kt(t,n)}}function qb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Zp.set(n),i.uniformMatrix4fv(this.addr,!1,Zp),Kt(t,n)}}function Yb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Zb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Jb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Qb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $b(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function e5(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function t5(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function n5(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),a;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(qp.compareFunction=515,a=qp):a=cm,t.setTexture2D(e||a,r)}function i5(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hm,r)}function r5(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||um,r)}function a5(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lm,r)}function s5(i,e){i.uniform1fv(this.addr,e)}function o5(i,e){let t=Va(e,this.size,2);i.uniform2fv(this.addr,t)}function c5(i,e){let t=Va(e,this.size,3);i.uniform3fv(this.addr,t)}function l5(i,e){let t=Va(e,this.size,4);i.uniform4fv(this.addr,t)}function h5(i,e){let t=Va(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function u5(i,e){let t=Va(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d5(i,e){let t=Va(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p5(i,e){i.uniform1iv(this.addr,e)}function f5(i,e){i.uniform2iv(this.addr,e)}function m5(i,e){i.uniform3iv(this.addr,e)}function g5(i,e){i.uniform4iv(this.addr,e)}function b5(i,e){i.uniform1uiv(this.addr,e)}function v5(i,e){i.uniform2uiv(this.addr,e)}function x5(i,e){i.uniform3uiv(this.addr,e)}function y5(i,e){i.uniform4uiv(this.addr,e)}function _5(i,e,t){let n=this.cache,r=e.length,a=Gc(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||cm,a[s])}function M5(i,e,t){let n=this.cache,r=e.length,a=Gc(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||hm,a[s])}function E5(i,e,t){let n=this.cache,r=e.length,a=Gc(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||um,a[s])}function T5(i,e,t){let n=this.cache,r=e.length,a=Gc(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||lm,a[s])}var uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return zb;case 35664:return Gb;case 35665:return Vb;case 35666:return Wb;case 35674:return jb;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return Kb;case 35668:case 35672:return Zb;case 35669:case 35673:return Jb;case 5125:return Qb;case 36294:return $b;case 36295:return e5;case 36296:return t5;case 35678:case 36198:case 36298:case 36306:case 35682:return n5;case 35679:case 36299:case 36307:return i5;case 35680:case 36300:case 36308:case 36293:return r5;case 36289:case 36303:case 36311:case 36292:return a5}})(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return s5;case 35664:return o5;case 35665:return c5;case 35666:return l5;case 35674:return h5;case 35675:return u5;case 35676:return d5;case 5124:case 35670:return p5;case 35667:case 35671:return f5;case 35668:case 35672:return m5;case 35669:case 35673:return g5;case 5125:return b5;case 36294:return v5;case 36295:return x5;case 36296:return y5;case 35678:case 36198:case 36298:case 36306:case 35682:return _5;case 35679:case 36299:case 36307:return M5;case 35680:case 36300:case 36308:case 36293:return E5;case 36289:case 36303:case 36311:case 36292:return T5}})(t.type)}},pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function $p(i,e){i.seq.push(e),i.map[e.id]=e}function S5(i,e,t){let n=i.name,r=n.length;for(bh.lastIndex=0;;){let a=bh.exec(n),s=bh.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o|=0),l===void 0||l==="["&&s+2===r){$p(t,l===void 0?new uu(o,i,e):new du(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new pu(o),$p(t,h)),t=h}}}var Pa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r);S5(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w5=0,tf=new We;function nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),s)}return r}function A5(i,e){let t=(function(n){$e._getMatrix(tf,$e.workingColorSpace,n);let r=`mat3( ${tf.elements.map((a=>a.toFixed(4)))} )`;switch($e.getTransfer(n)){case Bc:return[r,"LinearTransferOETF"];case dt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R5(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oo=new E;function C5(){return $e.getLuminanceCoefficients(Oo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Oo.x.toFixed(4)}, ${Oo.y.toFixed(4)}, ${Oo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ds(i){return i!==""}function rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P5=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(i){return i.replace(P5,L5)}var I5=new Map;function L5(i,e){let t=Ke[e];if(t===void 0){let n=I5.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return fu(t)}var D5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(i){return i.replace(D5,U5)}function U5(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function of(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function N5(i,e,t,n){let r=i.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,c=(function(I){let U="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===1?U="SHADOWMAP_TYPE_PCF":I.shadowMapType===2?U="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===3&&(U="SHADOWMAP_TYPE_VSM"),U})(t),l=(function(I){let U="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case Ia:case La:U="ENVMAP_TYPE_CUBE";break;case Hc:U="ENVMAP_TYPE_CUBE_UV"}return U})(t),h=(function(I){let U="ENVMAP_MODE_REFLECTION";return I.envMap&&I.envMapMode===La&&(U="ENVMAP_MODE_REFRACTION"),U})(t),u=(function(I){let U="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case 0:U="ENVMAP_BLENDING_MULTIPLY";break;case 1:U="ENVMAP_BLENDING_MIX";break;case 2:U="ENVMAP_BLENDING_ADD"}return U})(t),d=(function(I){let U=I.envMapCubeUVHeight;if(U===null)return null;let z=Math.log2(U)-2,V=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,z),112)),texelHeight:V,maxMip:z}})(t),p=(function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",I.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)})(t),f=(function(I){let U=[];for(let z in I){let V=I[z];V!==!1&&U.push("#define "+z+" "+V)}return U.join(`
`)})(a),b=r.createProgram(),g,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ds).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ds).join(`
`),x.length>0&&(x+=`
`)):(g=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),x=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ke.tonemapping_pars_fragment:"",t.toneMapping!==0?R5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,A5("linearToOutputTexel",t.outputColorSpace),C5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),s=fu(s),s=rf(s,t),s=af(s,t),o=fu(o),o=rf(o,t),o=af(o,t),s=sf(s),o=sf(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let m=v+g+s,y=v+x+o,M=ef(r,r.VERTEX_SHADER,m),_=ef(r,r.FRAGMENT_SHADER,y);function T(I){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(b).trim(),z=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(_).trim(),Q=!0,$=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,_);else{let W=nf(r,M,"vertex"),Y=nf(r,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+W+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):z!==""&&V!==""||($=!1);$&&(I.diagnostics={runnable:Q,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:V,prefix:x}})}r.deleteShader(M),r.deleteShader(_),S=new Pa(r,b),w=(function(U,z){let V={},Q=U.getProgramParameter(z,U.ACTIVE_ATTRIBUTES);for(let $=0;$<Q;$++){let W=U.getActiveAttrib(z,$),Y=W.name,ee=1;W.type===U.FLOAT_MAT2&&(ee=2),W.type===U.FLOAT_MAT3&&(ee=3),W.type===U.FLOAT_MAT4&&(ee=4),V[Y]={type:W.type,location:U.getAttribLocation(z,Y),locationSize:ee}}return V})(r,b)}let S,w;r.attachShader(b,M),r.attachShader(b,_),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),this.getUniforms=function(){return S===void 0&&T(this),S},this.getAttributes=function(){return w===void 0&&T(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(b,37297)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w5++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=_,this}var O5=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gu(e),t.set(e,n)),n}},gu=class{constructor(e){this.id=O5++,this.code=e,this.usedTimes=0}};function k5(i,e,t,n,r,a,s){let o=new As,c=new mu,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(g){return l.add(g),g===0?"uv":`uv${g}`}return{getParameters:function(g,x,v,m,y){let M=m.fog,_=y.geometry,T=g.isMeshStandardMaterial?m.environment:null,S=(g.isMeshStandardMaterial?t:e).get(g.envMap||T),w=S&&S.mapping===Hc?S.image.height:null,P=f[g.type];g.precision!==null&&(p=r.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));let I=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,U=I!==void 0?I.length:0,z,V,Q,$,W=0;if(_.morphAttributes.position!==void 0&&(W=1),_.morphAttributes.normal!==void 0&&(W=2),_.morphAttributes.color!==void 0&&(W=3),P){let $n=vi[P];z=$n.vertexShader,V=$n.fragmentShader}else z=g.vertexShader,V=g.fragmentShader,c.update(g),Q=c.getVertexShaderID(g),$=c.getFragmentShaderID(g);let Y=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),ie=y.isInstancedMesh===!0,X=y.isBatchedMesh===!0,F=!!g.map,K=!!g.matcap,oe=!!S,Z=!!g.aoMap,C=!!g.lightMap,R=!!g.bumpMap,H=!!g.normalMap,N=!!g.displacementMap,L=!!g.emissiveMap,O=!!g.metalnessMap,A=!!g.roughnessMap,k=g.anisotropy>0,B=g.clearcoat>0,ne=g.dispersion>0,G=g.iridescence>0,ae=g.sheen>0,se=g.transmission>0,le=k&&!!g.anisotropyMap,ve=B&&!!g.clearcoatMap,be=B&&!!g.clearcoatNormalMap,Te=B&&!!g.clearcoatRoughnessMap,Ie=G&&!!g.iridescenceMap,Qe=G&&!!g.iridescenceThicknessMap,Ge=ae&&!!g.sheenColorMap,Pe=ae&&!!g.sheenRoughnessMap,rt=!!g.specularMap,ct=!!g.specularColorMap,ft=!!g.specularIntensityMap,Se=se&&!!g.transmissionMap,Be=se&&!!g.thicknessMap,mt=!!g.gradientMap,Yi=!!g.alphaMap,la=g.alphaTest>0,Ln=!!g.alphaHash,zn=!!g.extensions,Dn=0;g.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(Dn=i.toneMapping));let j={shaderID:P,shaderType:g.type,shaderName:g.name,vertexShader:z,fragmentShader:V,defines:g.defines,customVertexShaderID:Q,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:X,batchingColor:X&&y._colorsTexture!==null,instancing:ie,instancingColor:ie&&y.instanceColor!==null,instancingMorph:ie&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:mn,alphaToCoverage:!!g.alphaToCoverage,map:F,matcap:K,envMap:oe,envMapMode:oe&&S.mapping,envMapCubeUVHeight:w,aoMap:Z,lightMap:C,bumpMap:R,normalMap:H,displacementMap:d&&N,emissiveMap:L,normalMapObjectSpace:H&&g.normalMapType===1,normalMapTangentSpace:H&&g.normalMapType===0,metalnessMap:O,roughnessMap:A,anisotropy:k,anisotropyMap:le,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:be,clearcoatRoughnessMap:Te,dispersion:ne,iridescence:G,iridescenceMap:Ie,iridescenceThicknessMap:Qe,sheen:ae,sheenColorMap:Ge,sheenRoughnessMap:Pe,specularMap:rt,specularColorMap:ct,specularIntensityMap:ft,transmission:se,transmissionMap:Se,thicknessMap:Be,gradientMap:mt,opaque:g.transparent===!1&&g.blending===1&&g.alphaToCoverage===!1,alphaMap:Yi,alphaTest:la,alphaHash:Ln,combine:g.combine,mapUv:F&&b(g.map.channel),aoMapUv:Z&&b(g.aoMap.channel),lightMapUv:C&&b(g.lightMap.channel),bumpMapUv:R&&b(g.bumpMap.channel),normalMapUv:H&&b(g.normalMap.channel),displacementMapUv:N&&b(g.displacementMap.channel),emissiveMapUv:L&&b(g.emissiveMap.channel),metalnessMapUv:O&&b(g.metalnessMap.channel),roughnessMapUv:A&&b(g.roughnessMap.channel),anisotropyMapUv:le&&b(g.anisotropyMap.channel),clearcoatMapUv:ve&&b(g.clearcoatMap.channel),clearcoatNormalMapUv:be&&b(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&b(g.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&b(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&b(g.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(g.sheenRoughnessMap.channel),specularMapUv:rt&&b(g.specularMap.channel),specularColorMapUv:ct&&b(g.specularColorMap.channel),specularIntensityMapUv:ft&&b(g.specularIntensityMap.channel),transmissionMapUv:Se&&b(g.transmissionMap.channel),thicknessMapUv:Be&&b(g.thicknessMap.channel),alphaMapUv:Yi&&b(g.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(H||k),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!_.attributes.uv&&(F||Yi),fog:!!M,useFog:g.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ee,skinning:y.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:W,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dn,decodeVideoTexture:F&&g.map.isVideoTexture===!0&&$e.getTransfer(g.map.colorSpace)===dt,decodeVideoTextureEmissive:L&&g.emissiveMap.isVideoTexture===!0&&$e.getTransfer(g.emissiveMap.colorSpace)===dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:zn&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zn&&g.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return j.vertexUv1s=l.has(1),j.vertexUv2s=l.has(2),j.vertexUv3s=l.has(3),l.clear(),j},getProgramCacheKey:function(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let v in g.defines)x.push(v),x.push(g.defines[v]);return g.isRawShaderMaterial===!1&&((function(v,m){v.push(m.precision),v.push(m.outputColorSpace),v.push(m.envMapMode),v.push(m.envMapCubeUVHeight),v.push(m.mapUv),v.push(m.alphaMapUv),v.push(m.lightMapUv),v.push(m.aoMapUv),v.push(m.bumpMapUv),v.push(m.normalMapUv),v.push(m.displacementMapUv),v.push(m.emissiveMapUv),v.push(m.metalnessMapUv),v.push(m.roughnessMapUv),v.push(m.anisotropyMapUv),v.push(m.clearcoatMapUv),v.push(m.clearcoatNormalMapUv),v.push(m.clearcoatRoughnessMapUv),v.push(m.iridescenceMapUv),v.push(m.iridescenceThicknessMapUv),v.push(m.sheenColorMapUv),v.push(m.sheenRoughnessMapUv),v.push(m.specularMapUv),v.push(m.specularColorMapUv),v.push(m.specularIntensityMapUv),v.push(m.transmissionMapUv),v.push(m.thicknessMapUv),v.push(m.combine),v.push(m.fogExp2),v.push(m.sizeAttenuation),v.push(m.morphTargetsCount),v.push(m.morphAttributeCount),v.push(m.numDirLights),v.push(m.numPointLights),v.push(m.numSpotLights),v.push(m.numSpotLightMaps),v.push(m.numHemiLights),v.push(m.numRectAreaLights),v.push(m.numDirLightShadows),v.push(m.numPointLightShadows),v.push(m.numSpotLightShadows),v.push(m.numSpotLightShadowsWithMaps),v.push(m.numLightProbes),v.push(m.shadowMapType),v.push(m.toneMapping),v.push(m.numClippingPlanes),v.push(m.numClipIntersection),v.push(m.depthPacking)})(x,g),(function(v,m){o.disableAll(),m.supportsVertexTextures&&o.enable(0),m.instancing&&o.enable(1),m.instancingColor&&o.enable(2),m.instancingMorph&&o.enable(3),m.matcap&&o.enable(4),m.envMap&&o.enable(5),m.normalMapObjectSpace&&o.enable(6),m.normalMapTangentSpace&&o.enable(7),m.clearcoat&&o.enable(8),m.iridescence&&o.enable(9),m.alphaTest&&o.enable(10),m.vertexColors&&o.enable(11),m.vertexAlphas&&o.enable(12),m.vertexUv1s&&o.enable(13),m.vertexUv2s&&o.enable(14),m.vertexUv3s&&o.enable(15),m.vertexTangents&&o.enable(16),m.anisotropy&&o.enable(17),m.alphaHash&&o.enable(18),m.batching&&o.enable(19),m.dispersion&&o.enable(20),m.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),m.fog&&o.enable(0),m.useFog&&o.enable(1),m.flatShading&&o.enable(2),m.logarithmicDepthBuffer&&o.enable(3),m.reverseDepthBuffer&&o.enable(4),m.skinning&&o.enable(5),m.morphTargets&&o.enable(6),m.morphNormals&&o.enable(7),m.morphColors&&o.enable(8),m.premultipliedAlpha&&o.enable(9),m.shadowMapEnabled&&o.enable(10),m.doubleSided&&o.enable(11),m.flipSided&&o.enable(12),m.useDepthPacking&&o.enable(13),m.dithering&&o.enable(14),m.transmission&&o.enable(15),m.sheen&&o.enable(16),m.opaque&&o.enable(17),m.pointsUvs&&o.enable(18),m.decodeVideoTexture&&o.enable(19),m.decodeVideoTextureEmissive&&o.enable(20),m.alphaToCoverage&&o.enable(21),v.push(o.mask)})(x,g),x.push(i.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()},getUniforms:function(g){let x=f[g.type],v;if(x){let m=vi[x];v=li.clone(m.uniforms)}else v=g.uniforms;return v},acquireProgram:function(g,x){let v;for(let m=0,y=h.length;m<y;m++){let M=h[m];if(M.cacheKey===x){v=M,++v.usedTimes;break}}return v===void 0&&(v=new N5(i,x,g,a),h.push(v)),v},releaseProgram:function(g){if(--g.usedTimes==0){let x=h.indexOf(g);h[x]=h[h.length-1],h.pop(),g.destroy()}},releaseShaderCache:function(g){c.remove(g)},programs:h,dispose:function(){c.dispose()}}}function H5(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function F5(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lf(){let i=[],e=0,t=[],n=[],r=[];function a(s,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:c,groupOrder:l,renderOrder:s.renderOrder,z:h,group:u},i[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(s,o,c,l,h,u){let d=a(s,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(s,o,c,l,h,u){let d=a(s,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=i.length;s<o;s++){let c=i[s];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(s,o){t.length>1&&t.sort(s||F5),n.length>1&&n.sort(o||cf),r.length>1&&r.sort(o||cf)}}}function B5(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new lf,i.set(e,[r])):t>=n.length?(r=new lf,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function z5(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new me};break;case"SpotLight":t={position:new E,direction:new E,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new E,halfWidth:new E,halfHeight:new E}}return i[e.id]=t,t}}}var G5=0;function V5(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W5(i){let e=new z5,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let r=new E,a=new Ae,s=new Ae;return{setup:function(o){let c=0,l=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,d=0,p=0,f=0,b=0,g=0,x=0,v=0,m=0,y=0,M=0;o.sort(V5);for(let T=0,S=o.length;T<S;T++){let w=o[T],P=w.color,I=w.intensity,U=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=P.r*I,l+=P.g*I,h+=P.b*I;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],I);M++}else if(w.isDirectionalLight){let V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Q=w.shadow,$=t.get(w);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[u]=$,n.directionalShadowMap[u]=z,n.directionalShadowMatrix[u]=w.shadow.matrix,g++}n.directional[u]=V,u++}else if(w.isSpotLight){let V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(P).multiplyScalar(I),V.distance=U,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[p]=V;let Q=w.shadow;if(w.map&&(n.spotLightMap[m]=w.map,m++,Q.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[p]=Q.matrix,w.castShadow){let $=t.get(w);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[p]=$,n.spotShadowMap[p]=z,v++}p++}else if(w.isRectAreaLight){let V=e.get(w);V.color.copy(P).multiplyScalar(I),V.halfWidth.set(.5*w.width,0,0),V.halfHeight.set(0,.5*w.height,0),n.rectArea[f]=V,f++}else if(w.isPointLight){let V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let Q=w.shadow,$=t.get(w);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[d]=$,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=w.shadow.matrix,x++}n.point[d]=V,d++}else if(w.isHemisphereLight){let V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(I),V.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[b]=V,b++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let _=n.hash;_.directionalLength===u&&_.pointLength===d&&_.spotLength===p&&_.rectAreaLength===f&&_.hemiLength===b&&_.numDirectionalShadows===g&&_.numPointShadows===x&&_.numSpotShadows===v&&_.numSpotMaps===m&&_.numLightProbes===M||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=b,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+m-y,n.spotLightMap.length=m,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=M,_.directionalLength=u,_.pointLength=d,_.spotLength=p,_.rectAreaLength=f,_.hemiLength=b,_.numDirectionalShadows=g,_.numPointShadows=x,_.numSpotShadows=v,_.numSpotMaps=m,_.numLightProbes=M,n.version=G5++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let b=0,g=o.length;b<g;b++){let x=o[b];if(x.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),l++}else if(x.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(x.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),s.identity(),a.copy(x.matrixWorld),a.premultiply(f),s.extractRotation(a),v.halfWidth.set(.5*x.width,0,0),v.halfHeight.set(0,.5*x.height,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(x.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),h++}else if(x.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function hf(i){let e=new W5(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(a){r.camera=a,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){n.push(a)}}}function j5(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),a;return r===void 0?(a=new hf(i),e.set(t,[a])):n>=r.length?(a=new hf(i),r.push(a)):a=r[n],a},dispose:function(){e=new WeakMap}}}var bu=class extends Rn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vu=class extends Rn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function X5(i,e,t){let n=new ur,r=new ce,a=new ce,s=new ht,o=new bu({depthPacking:3201}),c=new vu,l={},h=t.maxTextureSize,u={[Yu]:1,[Ku]:0,[ot]:2},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new He;f.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new te(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;function v(_,T){let S=e.update(b);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new un(r.x,r.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(T,null,S,d,b,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(T,null,S,p,b,null)}function m(_,T,S,w){let P=null,I=S.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(I!==void 0)P=I;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let U=P.uuid,z=T.uuid,V=l[U];V===void 0&&(V={},l[U]=V);let Q=V[z];Q===void 0&&(Q=P.clone(),V[z]=Q,T.addEventListener("dispose",M)),P=Q}return P.visible=T.visible,P.wireframe=T.wireframe,P.side=w===3?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(i.properties.get(P).light=S),P}function y(_,T,S,w,P){if(_.visible===!1)return;if(_.layers.test(T.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&P===3)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,_.matrixWorld);let U=e.update(_),z=_.material;if(Array.isArray(z)){let V=U.groups;for(let Q=0,$=V.length;Q<$;Q++){let W=V[Q],Y=z[W.materialIndex];if(Y&&Y.visible){let ee=m(_,Y,w,P);_.onBeforeShadow(i,_,T,S,U,ee,W),i.renderBufferDirect(S,null,U,ee,_,W),_.onAfterShadow(i,_,T,S,U,ee,W)}}}else if(z.visible){let V=m(_,z,w,P);_.onBeforeShadow(i,_,T,S,U,V,null),i.renderBufferDirect(S,null,U,V,_,null),_.onAfterShadow(i,_,T,S,U,V,null)}}let I=_.children;for(let U=0,z=I.length;U<z;U++)y(I[U],T,S,w,P)}function M(_){_.target.removeEventListener("dispose",M);for(let T in l){let S=l[T],w=_.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}this.render=function(_,T,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||_.length===0)return;let w=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=x!==3&&this.type===3,V=x===3&&this.type!==3;for(let Q=0,$=_.length;Q<$;Q++){let W=_[Q],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);let ee=Y.getFrameExtents();if(r.multiply(ee),a.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ee.x),r.x=a.x*ee.x,Y.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ee.y),r.y=a.y*ee.y,Y.mapSize.y=a.y)),Y.map===null||z===!0||V===!0){let X=this.type!==3?{minFilter:on,magFilter:on}:{};Y.map!==null&&Y.map.dispose(),Y.map=new un(r.x,r.y,X),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ie=Y.getViewportCount();for(let X=0;X<ie;X++){let F=Y.getViewport(X);s.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),U.viewport(s),Y.updateMatrices(W,X),n=Y.getFrustum(),y(T,S,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&v(Y,S),Y.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(w,P,I)}}var q5={[Y1]:1,[Z1]:6,[Q1]:7,[J1]:5,[K1]:0,[eb]:2,[tb]:4,[$1]:3};function Y5(i,e){let t=new function(){let A=!1,k=new ht,B=null,ne=new ht(0,0,0,0);return{setMask:function(G){B===G||A||(i.colorMask(G,G,G,G),B=G)},setLocked:function(G){A=G},setClear:function(G,ae,se,le,ve){ve===!0&&(G*=le,ae*=le,se*=le),k.set(G,ae,se,le),ne.equals(k)===!1&&(i.clearColor(G,ae,se,le),ne.copy(k))},reset:function(){A=!1,B=null,ne.set(-1,0,0,0)}}},n=new function(){let A=!1,k=!1,B=null,ne=null,G=null;return{setReversed:function(ae){if(k!==ae){let se=e.get("EXT_clip_control");k?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let le=G;G=null,this.setClear(le)}k=ae},getReversed:function(){return k},setTest:function(ae){ae?oe(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(ae){B===ae||A||(i.depthMask(ae),B=ae)},setFunc:function(ae){if(k&&(ae=q5[ae]),ne!==ae){switch(ae){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}ne=ae}},setLocked:function(ae){A=ae},setClear:function(ae){G!==ae&&(k&&(ae=1-ae),i.clearDepth(ae),G=ae)},reset:function(){A=!1,B=null,ne=null,G=null,k=!1}}},r=new function(){let A=!1,k=null,B=null,ne=null,G=null,ae=null,se=null,le=null,ve=null;return{setTest:function(be){A||(be?oe(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(be){k===be||A||(i.stencilMask(be),k=be)},setFunc:function(be,Te,Ie){B===be&&ne===Te&&G===Ie||(i.stencilFunc(be,Te,Ie),B=be,ne=Te,G=Ie)},setOp:function(be,Te,Ie){ae===be&&se===Te&&le===Ie||(i.stencilOp(be,Te,Ie),ae=be,se=Te,le=Ie)},setLocked:function(be){A=be},setClear:function(be){ve!==be&&(i.clearStencil(be),ve=be)},reset:function(){A=!1,k=null,B=null,ne=null,G=null,ae=null,se=null,le=null,ve=null}}},a=new WeakMap,s=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,b=null,g=null,x=null,v=null,m=null,y=new me(0,0,0),M=0,_=!1,T=null,S=null,w=null,P=null,I=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,V=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=V>=2);let $=null,W={},Y=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ie=new ht().fromArray(Y),X=new ht().fromArray(ee);function F(A,k,B,ne){let G=new Uint8Array(4),ae=i.createTexture();i.bindTexture(A,ae),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<B;se++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,G):i.texImage2D(k+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,G);return ae}let K={};function oe(A){o[A]!==!0&&(i.enable(A),o[A]=!0)}function Z(A){o[A]!==!1&&(i.disable(A),o[A]=!1)}K[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),oe(i.DEPTH_TEST),n.setFunc(3),N(!1),L(1),oe(i.CULL_FACE),H(0);let C={[Wn]:i.FUNC_ADD,[O1]:i.FUNC_SUBTRACT,[k1]:i.FUNC_REVERSE_SUBTRACT};C[103]=i.MIN,C[104]=i.MAX;let R={[Ga]:i.ZERO,[H1]:i.ONE,[F1]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[V1]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Nc]:i.DST_ALPHA,[B1]:i.ONE_MINUS_SRC_COLOR,[Ch]:i.ONE_MINUS_SRC_ALPHA,[G1]:i.ONE_MINUS_DST_COLOR,[z1]:i.ONE_MINUS_DST_ALPHA,[W1]:i.CONSTANT_COLOR,[j1]:i.ONE_MINUS_CONSTANT_COLOR,[X1]:i.CONSTANT_ALPHA,[q1]:i.ONE_MINUS_CONSTANT_ALPHA};function H(A,k,B,ne,G,ae,se,le,ve,be){if(A!==0){if(d===!1&&(oe(i.BLEND),d=!0),A===5)G=G||k,ae=ae||B,se=se||ne,k===f&&G===x||(i.blendEquationSeparate(C[k],C[G]),f=k,x=G),B===b&&ne===g&&ae===v&&se===m||(i.blendFuncSeparate(R[B],R[ne],R[ae],R[se]),b=B,g=ne,v=ae,m=se),le.equals(y)!==!1&&ve===M||(i.blendColor(le.r,le.g,le.b,ve),y.copy(le),M=ve),p=A,_=!1;else if(A!==p||be!==_){if(f===Wn&&x===Wn||(i.blendEquation(i.FUNC_ADD),f=Wn,x=Wn),be)switch(A){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}else switch(A){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}b=null,g=null,v=null,m=null,y.set(0,0,0),M=0,p=A,_=be}}else d===!0&&(Z(i.BLEND),d=!1)}function N(A){T!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),T=A)}function L(A){A!==0?(oe(i.CULL_FACE),A!==S&&(A===1?i.cullFace(i.BACK):A===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),S=A}function O(A,k,B){A?(oe(i.POLYGON_OFFSET_FILL),P===k&&I===B||(i.polygonOffset(k,B),P=k,I=B)):Z(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:oe,disable:Z,bindFramebuffer:function(A,k){return c[A]!==k&&(i.bindFramebuffer(A,k),c[A]=k,A===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=k),A===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=k),!0)},drawBuffers:function(A,k){let B=h,ne=!1;if(A){B=l.get(k),B===void 0&&(B=[],l.set(k,B));let G=A.textures;if(B.length!==G.length||B[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,se=G.length;ae<se;ae++)B[ae]=i.COLOR_ATTACHMENT0+ae;B.length=G.length,ne=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,ne=!0);ne&&i.drawBuffers(B)},useProgram:function(A){return u!==A&&(i.useProgram(A),u=A,!0)},setBlending:H,setMaterial:function(A,k){A.side===2?Z(i.CULL_FACE):oe(i.CULL_FACE);let B=A.side===1;k&&(B=!B),N(B),A.blending===1&&A.transparent===!1?H(0):H(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),n.setFunc(A.depthFunc),n.setTest(A.depthTest),n.setMask(A.depthWrite),t.setMask(A.colorWrite);let ne=A.stencilWrite;r.setTest(ne),ne&&(r.setMask(A.stencilWriteMask),r.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),r.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),O(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:N,setCullFace:L,setLineWidth:function(A){A!==w&&(z&&i.lineWidth(A),w=A)},setPolygonOffset:O,setScissorTest:function(A){A?oe(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)},activeTexture:function(A){A===void 0&&(A=i.TEXTURE0+U-1),$!==A&&(i.activeTexture(A),$=A)},bindTexture:function(A,k,B){B===void 0&&(B=$===null?i.TEXTURE0+U-1:$);let ne=W[B];ne===void 0&&(ne={type:void 0,texture:void 0},W[B]=ne),ne.type===A&&ne.texture===k||($!==B&&(i.activeTexture(B),$=B),i.bindTexture(A,k||K[A]),ne.type=A,ne.texture=k)},unbindTexture:function(){let A=W[$];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},updateUBOMapping:function(A,k){let B=s.get(k);B===void 0&&(B=new WeakMap,s.set(k,B));let ne=B.get(A);ne===void 0&&(ne=i.getUniformBlockIndex(k,A.name),B.set(A,ne))},uniformBlockBinding:function(A,k){let B=s.get(k).get(A);a.get(k)!==B&&(i.uniformBlockBinding(k,B,A.__bindingPointIndex),a.set(k,B))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},scissor:function(A){ie.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),ie.copy(A))},viewport:function(A){X.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),X.copy(A))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},$=null,W={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,b=null,g=null,x=null,v=null,m=null,y=new me(0,0,0),M=0,_=!1,T=null,S=null,w=null,P=null,I=null,ie.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function uf(i,e,t,n){let r=(function(a){switch(a){case yi:case Yf:return{byteLength:1,components:1};case Ts:case Kf:case Zn:return{byteLength:2,components:1};case $u:case ed:return{byteLength:2,components:4};case Hr:case Qu:case oi:return{byteLength:4,components:1};case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)})(n);switch(t){case Jf:case $f:return i*e;case em:return i*e*2;case td:case nd:return i*e/r.components*r.byteLength;case tm:case id:return i*e*2/r.components*r.byteLength;case Qf:return i*e*3/r.components*r.byteLength;case kn:case rd:return i*e*4/r.components*r.byteLength;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Nh:return Math.max(i,16)*Math.max(e,8)/4;case Lh:case Uh:return Math.max(i,8)*Math.max(e,8)/2;case Oh:case kh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hh:case Fh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tc:case $h:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nm:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K5(i,e,t,n,r,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,R){return p?new OffscreenCanvas(C,R):ws("canvas")}function b(C,R,H){let N=1,L=Z(C);if((L.width>H||L.height>H)&&(N=H/Math.max(L.width,L.height)),N<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let O=Math.floor(N*L.width),A=Math.floor(N*L.height);u===void 0&&(u=f(O,A));let k=R?f(O,A):u;return k.width=O,k.height=A,k.getContext("2d").drawImage(C,0,0,O,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+O+"x"+A+")."),k}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),C}return C}function g(C){return C.generateMipmaps}function x(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function m(C,R,H,N,L=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let O=R;if(R===i.RED&&(H===i.FLOAT&&(O=i.R32F),H===i.HALF_FLOAT&&(O=i.R16F),H===i.UNSIGNED_BYTE&&(O=i.R8)),R===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(O=i.R8UI),H===i.UNSIGNED_SHORT&&(O=i.R16UI),H===i.UNSIGNED_INT&&(O=i.R32UI),H===i.BYTE&&(O=i.R8I),H===i.SHORT&&(O=i.R16I),H===i.INT&&(O=i.R32I)),R===i.RG&&(H===i.FLOAT&&(O=i.RG32F),H===i.HALF_FLOAT&&(O=i.RG16F),H===i.UNSIGNED_BYTE&&(O=i.RG8)),R===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(O=i.RG8UI),H===i.UNSIGNED_SHORT&&(O=i.RG16UI),H===i.UNSIGNED_INT&&(O=i.RG32UI),H===i.BYTE&&(O=i.RG8I),H===i.SHORT&&(O=i.RG16I),H===i.INT&&(O=i.RG32I)),R===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(O=i.RGB8UI),H===i.UNSIGNED_SHORT&&(O=i.RGB16UI),H===i.UNSIGNED_INT&&(O=i.RGB32UI),H===i.BYTE&&(O=i.RGB8I),H===i.SHORT&&(O=i.RGB16I),H===i.INT&&(O=i.RGB32I)),R===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),H===i.UNSIGNED_INT&&(O=i.RGBA32UI),H===i.BYTE&&(O=i.RGBA8I),H===i.SHORT&&(O=i.RGBA16I),H===i.INT&&(O=i.RGBA32I)),R===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),R===i.RGBA){let A=L?Bc:$e.getTransfer(N);H===i.FLOAT&&(O=i.RGBA32F),H===i.HALF_FLOAT&&(O=i.RGBA16F),H===i.UNSIGNED_BYTE&&(O=A===dt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return O!==i.R16F&&O!==i.R32F&&O!==i.RG16F&&O!==i.RG32F&&O!==i.RGBA16F&&O!==i.RGBA32F||e.get("EXT_color_buffer_float"),O}function y(C,R){let H;return C?R===null||R===Hr||R===cr?H=i.DEPTH24_STENCIL8:R===oi?H=i.DEPTH32F_STENCIL8:R===Ts&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Hr||R===cr?H=i.DEPTH_COMPONENT24:R===oi?H=i.DEPTH_COMPONENT32F:R===Ts&&(H=i.DEPTH_COMPONENT16),H}function M(C,R){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==On?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function _(C){let R=C.target;R.removeEventListener("dispose",_),(function(H){let N=n.get(H);if(N.__webglInit===void 0)return;let L=H.source,O=d.get(L);if(O){let A=O[N.__cacheKey];A.usedTimes--,A.usedTimes===0&&S(H),Object.keys(O).length===0&&d.delete(L)}n.remove(H)})(R),R.isVideoTexture&&h.delete(R)}function T(C){let R=C.target;R.removeEventListener("dispose",T),(function(H){let N=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(N.__webglFramebuffer[O]))for(let A=0;A<N.__webglFramebuffer[O].length;A++)i.deleteFramebuffer(N.__webglFramebuffer[O][A]);else i.deleteFramebuffer(N.__webglFramebuffer[O]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[O])}else{if(Array.isArray(N.__webglFramebuffer))for(let O=0;O<N.__webglFramebuffer.length;O++)i.deleteFramebuffer(N.__webglFramebuffer[O]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let O=0;O<N.__webglColorRenderbuffer.length;O++)N.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[O]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let L=H.textures;for(let O=0,A=L.length;O<A;O++){let k=n.get(L[O]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),s.memory.textures--),n.remove(L[O])}n.remove(H)})(R)}function S(C){let R=n.get(C);i.deleteTexture(R.__webglTexture);let H=C.source;delete d.get(H)[R.__cacheKey],s.memory.textures--}let w=0;function P(C,R){let H=n.get(C);if(C.isVideoTexture&&(function(N){let L=s.render.frame;h.get(N)!==L&&(h.set(N,L),N.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let N=C.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void $(H,C,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+R)}let I={[_n]:i.REPEAT,[kr]:i.CLAMP_TO_EDGE,[Es]:i.MIRRORED_REPEAT},U={[on]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[wa]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[vs]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},z={[ib]:i.NEVER,[hb]:i.ALWAYS,[rb]:i.LESS,[sb]:i.LEQUAL,[ab]:i.EQUAL,[lb]:i.GEQUAL,[ob]:i.GREATER,[cb]:i.NOTEQUAL};function V(C,R){if(R.type!==oi||e.has("OES_texture_float_linear")!==!1||R.magFilter!==On&&R.magFilter!==vs&&R.magFilter!==wa&&R.magFilter!==Di&&R.minFilter!==On&&R.minFilter!==vs&&R.minFilter!==wa&&R.minFilter!==Di||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,I[R.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,I[R.wrapT]),C!==i.TEXTURE_3D&&C!==i.TEXTURE_2D_ARRAY||i.texParameteri(C,i.TEXTURE_WRAP_R,I[R.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,U[R.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,U[R.minFilter]),R.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===on||R.minFilter!==wa&&R.minFilter!==Di||R.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Q(C,R){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",_));let N=R.source,L=d.get(N);L===void 0&&(L={},d.set(N,L));let O=(function(A){let k=[];return k.push(A.wrapS),k.push(A.wrapT),k.push(A.wrapR||0),k.push(A.magFilter),k.push(A.minFilter),k.push(A.anisotropy),k.push(A.internalFormat),k.push(A.format),k.push(A.type),k.push(A.generateMipmaps),k.push(A.premultiplyAlpha),k.push(A.flipY),k.push(A.unpackAlignment),k.push(A.colorSpace),k.join()})(R);if(O!==C.__cacheKey){L[O]===void 0&&(L[O]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,H=!0),L[O].usedTimes++;let A=L[C.__cacheKey];A!==void 0&&(L[C.__cacheKey].usedTimes--,A.usedTimes===0&&S(R)),C.__cacheKey=O,C.__webglTexture=L[O].texture}return H}function $(C,R,H){let N=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(N=i.TEXTURE_3D);let L=Q(C,R),O=R.source;t.bindTexture(N,C.__webglTexture,i.TEXTURE0+H);let A=n.get(O);if(O.version!==A.__version||L===!0){t.activeTexture(i.TEXTURE0+H);let k=$e.getPrimaries($e.workingColorSpace),B=R.colorSpace===Sa?null:$e.getPrimaries(R.colorSpace),ne=R.colorSpace===Sa||k===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let G=b(R.image,!1,r.maxTextureSize);G=oe(R,G);let ae=a.convert(R.format,R.colorSpace),se=a.convert(R.type),le,ve=m(R.internalFormat,ae,se,R.colorSpace,R.isVideoTexture);V(N,R);let be=R.mipmaps,Te=R.isVideoTexture!==!0,Ie=A.__version===void 0||L===!0,Qe=O.dataReady,Ge=M(R,G);if(R.isDepthTexture)ve=y(R.format===lr,R.type),Ie&&(Te?t.texStorage2D(i.TEXTURE_2D,1,ve,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,ve,G.width,G.height,0,ae,se,null));else if(R.isDataTexture)if(be.length>0){Te&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ve,be[0].width,be[0].height);for(let Pe=0,rt=be.length;Pe<rt;Pe++)le=be[Pe],Te?Qe&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,le.width,le.height,ae,se,le.data):t.texImage2D(i.TEXTURE_2D,Pe,ve,le.width,le.height,0,ae,se,le.data);R.generateMipmaps=!1}else Te?(Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ve,G.width,G.height),Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,ae,se,G.data)):t.texImage2D(i.TEXTURE_2D,0,ve,G.width,G.height,0,ae,se,G.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Te&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,ve,be[0].width,be[0].height,G.depth);for(let Pe=0,rt=be.length;Pe<rt;Pe++)if(le=be[Pe],R.format!==kn)if(ae!==null)if(Te){if(Qe)if(R.layerUpdates.size>0){let ct=uf(le.width,le.height,R.format,R.type);for(let ft of R.layerUpdates){let Se=le.data.subarray(ft*ct/le.data.BYTES_PER_ELEMENT,(ft+1)*ct/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,ft,le.width,le.height,1,ae,Se)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,le.width,le.height,G.depth,ae,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,ve,le.width,le.height,G.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,le.width,le.height,G.depth,ae,se,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,ve,le.width,le.height,G.depth,0,ae,se,le.data)}else{Te&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ve,be[0].width,be[0].height);for(let Pe=0,rt=be.length;Pe<rt;Pe++)le=be[Pe],R.format!==kn?ae!==null?Te?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Qe&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,le.width,le.height,ae,se,le.data):t.texImage2D(i.TEXTURE_2D,Pe,ve,le.width,le.height,0,ae,se,le.data)}else if(R.isDataArrayTexture)if(Te){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,ve,G.width,G.height,G.depth),Qe)if(R.layerUpdates.size>0){let Pe=uf(G.width,G.height,R.format,R.type);for(let rt of R.layerUpdates){let ct=G.data.subarray(rt*Pe/G.data.BYTES_PER_ELEMENT,(rt+1)*Pe/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,G.width,G.height,1,ae,se,ct)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ae,se,G.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,G.width,G.height,G.depth,0,ae,se,G.data);else if(R.isData3DTexture)Te?(Ie&&t.texStorage3D(i.TEXTURE_3D,Ge,ve,G.width,G.height,G.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ae,se,G.data)):t.texImage3D(i.TEXTURE_3D,0,ve,G.width,G.height,G.depth,0,ae,se,G.data);else if(R.isFramebufferTexture){if(Ie)if(Te)t.texStorage2D(i.TEXTURE_2D,Ge,ve,G.width,G.height);else{let Pe=G.width,rt=G.height;for(let ct=0;ct<Ge;ct++)t.texImage2D(i.TEXTURE_2D,ct,ve,Pe,rt,0,ae,se,null),Pe>>=1,rt>>=1}}else if(be.length>0){if(Te&&Ie){let Pe=Z(be[0]);t.texStorage2D(i.TEXTURE_2D,Ge,ve,Pe.width,Pe.height)}for(let Pe=0,rt=be.length;Pe<rt;Pe++)le=be[Pe],Te?Qe&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,ae,se,le):t.texImage2D(i.TEXTURE_2D,Pe,ve,ae,se,le);R.generateMipmaps=!1}else if(Te){if(Ie){let Pe=Z(G);t.texStorage2D(i.TEXTURE_2D,Ge,ve,Pe.width,Pe.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,se,G)}else t.texImage2D(i.TEXTURE_2D,0,ve,ae,se,G);g(R)&&x(N),A.__version=O.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function W(C,R,H,N,L,O){let A=a.convert(H.format,H.colorSpace),k=a.convert(H.type),B=m(H.internalFormat,A,k,H.colorSpace),ne=n.get(R),G=n.get(H);if(G.__renderTarget=R,!ne.__hasExternalTextures){let ae=Math.max(1,R.width>>O),se=Math.max(1,R.height>>O);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?t.texImage3D(L,O,B,ae,se,R.depth,0,A,k,null):t.texImage2D(L,O,B,ae,se,0,A,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),K(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,L,G.__webglTexture,0,F(R)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,L,G.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(C,R,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),R.depthBuffer){let N=R.depthTexture,L=N&&N.isDepthTexture?N.type:null,O=y(R.stencilBuffer,L),A=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=F(R);K(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,O,R.width,R.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,O,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,O,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,C)}else{let N=R.textures;for(let L=0;L<N.length;L++){let O=N[L],A=a.convert(O.format,O.colorSpace),k=a.convert(O.type),B=m(O.internalFormat,A,k,O.colorSpace),ne=F(R);H&&K(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,B,R.width,R.height):K(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,B,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,B,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(C){let R=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){let N=C.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),N){let L=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,N.removeEventListener("dispose",L)};N.addEventListener("dispose",L),R.__depthDisposeCallback=L}R.__boundDepthTexture=N}if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(L.depthTexture);O.__renderTarget=L,O.__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),P(L.depthTexture,0);let A=O.__webglTexture,k=F(L);if(L.depthTexture.format===Ss)K(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,A,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,A,0);else{if(L.depthTexture.format!==lr)throw new Error("Unknown depthTexture format");K(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,A,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,A,0)}})(R.__webglFramebuffer,C)}else if(H){R.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[N]),R.__webglDepthbuffer[N]===void 0)R.__webglDepthbuffer[N]=i.createRenderbuffer(),Y(R.__webglDepthbuffer[N],C,!1);else{let L=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=R.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,O)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Y(R.__webglDepthbuffer,C,!1);else{let N=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,L)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let ie=[],X=[];function F(C){return Math.min(r.maxSamples,C.samples)}function K(C){let R=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function oe(C,R){let H=C.colorSpace,N=C.format,L=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==mn&&H!==Sa&&($e.getTransfer(H)===dt?N===kn&&L===yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),R}function Z(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=function(){let C=w;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),w+=1,C},this.resetTextureUnits=function(){w=0},this.setTexture2D=P,this.setTexture2DArray=function(C,R){let H=n.get(C);C.version>0&&H.__version!==C.version?$(H,C,R):t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+R)},this.setTexture3D=function(C,R){let H=n.get(C);C.version>0&&H.__version!==C.version?$(H,C,R):t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+R)},this.setTextureCube=function(C,R){let H=n.get(C);C.version>0&&H.__version!==C.version?(function(N,L,O){if(L.image.length!==6)return;let A=Q(N,L),k=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+O);let B=n.get(k);if(k.version!==B.__version||A===!0){t.activeTexture(i.TEXTURE0+O);let ne=$e.getPrimaries($e.workingColorSpace),G=L.colorSpace===Sa?null:$e.getPrimaries(L.colorSpace),ae=L.colorSpace===Sa||ne===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let se=L.isCompressedTexture||L.image[0].isCompressedTexture,le=L.image[0]&&L.image[0].isDataTexture,ve=[];for(let Se=0;Se<6;Se++)ve[Se]=se||le?le?L.image[Se].image:L.image[Se]:b(L.image[Se],!0,r.maxCubemapSize),ve[Se]=oe(L,ve[Se]);let be=ve[0],Te=a.convert(L.format,L.colorSpace),Ie=a.convert(L.type),Qe=m(L.internalFormat,Te,Ie,L.colorSpace),Ge=L.isVideoTexture!==!0,Pe=B.__version===void 0||A===!0,rt=k.dataReady,ct,ft=M(L,be);if(V(i.TEXTURE_CUBE_MAP,L),se){Ge&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Qe,be.width,be.height);for(let Se=0;Se<6;Se++){ct=ve[Se].mipmaps;for(let Be=0;Be<ct.length;Be++){let mt=ct[Be];L.format!==kn?Te!==null?Ge?rt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,mt.width,mt.height,Te,mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,Qe,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,mt.width,mt.height,Te,Ie,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,Qe,mt.width,mt.height,0,Te,Ie,mt.data)}}}else{if(ct=L.mipmaps,Ge&&Pe){ct.length>0&&ft++;let Se=Z(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Qe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(le){Ge?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ve[Se].width,ve[Se].height,Te,Ie,ve[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Qe,ve[Se].width,ve[Se].height,0,Te,Ie,ve[Se].data);for(let Be=0;Be<ct.length;Be++){let mt=ct[Be].image[Se].image;Ge?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,mt.width,mt.height,Te,Ie,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,Qe,mt.width,mt.height,0,Te,Ie,mt.data)}}else{Ge?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te,Ie,ve[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Qe,Te,Ie,ve[Se]);for(let Be=0;Be<ct.length;Be++){let mt=ct[Be];Ge?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,Te,Ie,mt.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,Qe,Te,Ie,mt.image[Se])}}}g(L)&&x(i.TEXTURE_CUBE_MAP),B.__version=k.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version})(H,C,R):t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+R)},this.rebindTextures=function(C,R,H){let N=n.get(C);R!==void 0&&W(N.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ee(C)},this.setupRenderTarget=function(C){let R=C.texture,H=n.get(C),N=n.get(R);C.addEventListener("dispose",T);let L=C.textures,O=C.isWebGLCubeRenderTarget===!0,A=L.length>1;if(A||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=R.version,s.memory.textures++),O){H.__webglFramebuffer=[];for(let k=0;k<6;k++)if(R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer[k]=[];for(let B=0;B<R.mipmaps.length;B++)H.__webglFramebuffer[k][B]=i.createFramebuffer()}else H.__webglFramebuffer[k]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer=[];for(let k=0;k<R.mipmaps.length;k++)H.__webglFramebuffer[k]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(A)for(let k=0,B=L.length;k<B;k++){let ne=n.get(L[k]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),s.memory.textures++)}if(C.samples>0&&K(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let k=0;k<L.length;k++){let B=L[k];H.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[k]);let ne=a.convert(B.format,B.colorSpace),G=a.convert(B.type),ae=m(B.internalFormat,ne,G,B.colorSpace,C.isXRRenderTarget===!0),se=F(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ae,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,H.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),V(i.TEXTURE_CUBE_MAP,R);for(let k=0;k<6;k++)if(R.mipmaps&&R.mipmaps.length>0)for(let B=0;B<R.mipmaps.length;B++)W(H.__webglFramebuffer[k][B],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,B);else W(H.__webglFramebuffer[k],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);g(R)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(A){for(let k=0,B=L.length;k<B;k++){let ne=L[k],G=n.get(ne);t.bindTexture(i.TEXTURE_2D,G.__webglTexture),V(i.TEXTURE_2D,ne),W(H.__webglFramebuffer,C,ne,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,0),g(ne)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(k=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,N.__webglTexture),V(k,R),R.mipmaps&&R.mipmaps.length>0)for(let B=0;B<R.mipmaps.length;B++)W(H.__webglFramebuffer[B],C,R,i.COLOR_ATTACHMENT0,k,B);else W(H.__webglFramebuffer,C,R,i.COLOR_ATTACHMENT0,k,0);g(R)&&x(k),t.unbindTexture()}C.depthBuffer&&ee(C)},this.updateRenderTargetMipmap=function(C){let R=C.textures;for(let H=0,N=R.length;H<N;H++){let L=R[H];if(g(L)){let O=v(C),A=n.get(L).__webglTexture;t.bindTexture(O,A),x(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(K(C)===!1){let R=C.textures,H=C.width,N=C.height,L=i.COLOR_BUFFER_BIT,O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,A=n.get(C),k=R.length>1;if(k)for(let B=0;B<R.length;B++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,A.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,A.__webglFramebuffer);for(let B=0;B<R.length;B++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,A.__webglColorRenderbuffer[B]);let ne=n.get(R[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,H,N,0,0,H,N,L,i.NEAREST),c===!0&&(ie.length=0,X.length=0,ie.push(i.COLOR_ATTACHMENT0+B),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(O),X.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let B=0;B<R.length;B++){t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,A.__webglColorRenderbuffer[B]);let ne=n.get(R[B]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,A.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let R=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=W,this.useMultisampledRTT=K}function Z5(i,e){return{convert:function(t,n=""){let r,a=$e.getTransfer(n);if(t===yi)return i.UNSIGNED_BYTE;if(t===$u)return i.UNSIGNED_SHORT_4_4_4_4;if(t===ed)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Zf)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Yf)return i.BYTE;if(t===Kf)return i.SHORT;if(t===Ts)return i.UNSIGNED_SHORT;if(t===Qu)return i.INT;if(t===Hr)return i.UNSIGNED_INT;if(t===oi)return i.FLOAT;if(t===Zn)return i.HALF_FLOAT;if(t===Jf)return i.ALPHA;if(t===Qf)return i.RGB;if(t===kn)return i.RGBA;if(t===$f)return i.LUMINANCE;if(t===em)return i.LUMINANCE_ALPHA;if(t===Ss)return i.DEPTH_COMPONENT;if(t===lr)return i.DEPTH_STENCIL;if(t===td)return i.RED;if(t===nd)return i.RED_INTEGER;if(t===tm)return i.RG;if(t===id)return i.RG_INTEGER;if(t===rd)return i.RGBA_INTEGER;if(t===Jo||t===Qo||t===$o||t===ec)if(a===dt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ec)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Lh||t===Dh||t===Uh||t===Nh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Uh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Oh||t===kh||t===Hh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Oh||t===kh)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Hh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Fh||t===Bh||t===zh||t===Gh||t===Vh||t===Wh||t===jh||t===Xh||t===qh||t===Yh||t===Kh||t===Zh||t===Jh||t===Qh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Fh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Bh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===zh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Gh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Vh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Wh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===jh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Xh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===qh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Yh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Kh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Zh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Jh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Qh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===tc||t===$h||t===eu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===tc)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===$h)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===nm||t===tu||t===nu||t===iu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===cr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var xu=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ue=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},J5={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),x=this._getHandJoint(l,b);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J5)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new $t;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends hr{constructor(e,t){super();let n=this,r=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,b=new yu,g=t.getContextAttributes(),x=null,v=null,m=[],y=[],M=new ce,_=null,T=new qt;T.viewport=new ht;let S=new qt;S.viewport=new ht;let w=[T,S],P=new xu,I=null,U=null;function z(X){let F=y.indexOf(X.inputSource);if(F===-1)return;let K=m[F];K!==void 0&&(K.update(X.inputSource,X.frame,l||s),K.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Q);for(let X=0;X<m.length;X++){let F=y[X];F!==null&&(y[X]=null,m[X].disconnect(F))}I=null,U=null,b.reset(),e.setRenderTarget(x),p=null,d=null,u=null,r=null,v=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function Q(X){for(let F=0;F<X.removed.length;F++){let K=X.removed[F],oe=y.indexOf(K);oe>=0&&(y[oe]=null,m[oe].disconnect(K))}for(let F=0;F<X.added.length;F++){let K=X.added[F],oe=y.indexOf(K);if(oe===-1){for(let C=0;C<m.length;C++){if(C>=y.length){y.push(K),oe=C;break}if(y[C]===null){y[C]=K,oe=C;break}}if(oe===-1)break}let Z=m[oe];Z&&Z.connect(K)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let F=m[X];return F===void 0&&(F=new ys,m[X]=F),F.getTargetRaySpace()},this.getControllerGrip=function(X){let F=m[X];return F===void 0&&(F=new ys,m[X]=F),F.getGripSpace()},this.getHand=function(X){let F=m[X];return F===void 0&&(F=new ys,m[X]=F),F.getHandSpace()},this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0){let F={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new un(p.framebufferWidth,p.framebufferHeight,{format:kn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,K=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?lr:Ss,K=g.stencil?cr:Hr);let Z={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Z),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new un(d.textureWidth,d.textureHeight,{format:kn,type:yi,depthTexture:new Ha(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};let $=new E,W=new E;function Y(X,F){F===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(F.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let F=X.near,K=X.far;b.texture!==null&&(b.depthNear>0&&(F=b.depthNear),b.depthFar>0&&(K=b.depthFar)),P.near=S.near=T.near=F,P.far=S.far=T.far=K,I===P.near&&U===P.far||(r.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,U=P.far),T.layers.mask=2|X.layers.mask,S.layers.mask=4|X.layers.mask,P.layers.mask=T.layers.mask|S.layers.mask;let oe=X.parent,Z=P.cameras;Y(P,oe);for(let C=0;C<Z.length;C++)Y(Z[C],oe);Z.length===2?(function(C,R,H){$.setFromMatrixPosition(R.matrixWorld),W.setFromMatrixPosition(H.matrixWorld);let N=$.distanceTo(W),L=R.projectionMatrix.elements,O=H.projectionMatrix.elements,A=L[14]/(L[10]-1),k=L[14]/(L[10]+1),B=(L[9]+1)/L[5],ne=(L[9]-1)/L[5],G=(L[8]-1)/L[0],ae=(O[8]+1)/O[0],se=A*G,le=A*ae,ve=N/(-G+ae),be=ve*-G;if(R.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(be),C.translateZ(ve),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),L[10]===-1)C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Te=A+ve,Ie=k+ve,Qe=se-be,Ge=le+(N-be),Pe=B*k/Ie*Te,rt=ne*k/Ie*Te;C.projectionMatrix.makePerspective(Qe,Ge,Pe,rt,Te,Ie),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}})(P,T,S):P.projectionMatrix.copy(T.projectionMatrix),(function(C,R,H){H===null?C.matrix.copy(R.matrixWorld):(C.matrix.copy(H.matrixWorld),C.matrix.invert(),C.matrix.multiply(R.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=2*Oa*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)})(X,P,oe)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(P)};let ee=null,ie=new om;ie.setAnimationLoop((function(X,F){if(h=F.getViewerPose(l||s),f=F,h!==null){let K=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;K.length!==P.cameras.length&&(P.cameras.length=0,oe=!0);for(let C=0;C<K.length;C++){let R=K[C],H=null;if(p!==null)H=p.getViewport(R);else{let L=u.getViewSubImage(d,R);H=L.viewport,C===0&&(e.setRenderTargetTextures(v,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let N=w[C];N===void 0&&(N=new qt,N.layers.enable(C),N.viewport=new ht,w[C]=N),N.matrix.fromArray(R.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(R.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(H.x,H.y,H.width,H.height),C===0&&(P.matrix.copy(N.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),oe===!0&&P.cameras.push(N)}let Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let C=u.getDepthInformation(K[0]);C&&C.isValid&&C.texture&&b.init(e,C,r.renderState)}}for(let K=0;K<m.length;K++){let oe=y[K],Z=m[K];oe!==null&&Z!==void 0&&Z.update(oe,F,l||s)}ee&&ee(X,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),f=null})),this.setAnimationLoop=function(X){ee=X},this.dispose=function(){}}},Nr=new qn,Q5=new Ae;function $5(i,e){function t(r,a){r.matrixAutoUpdate===!0&&r.updateMatrix(),a.value.copy(r.matrix)}function n(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,t(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,t(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,t(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,a.side===1&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,t(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),a.side===1&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,t(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,t(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=e.get(a),o=s.envMap,c=s.envMapRotation;o&&(r.envMap.value=o,Nr.copy(c),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),r.envMapRotation.value.setFromMatrix4(Q5.makeRotationFromEuler(Nr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap&&(r.lightMap.value=a.lightMap,r.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,r.lightMapTransform)),a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,a){a.color.getRGB(r.fogColor.value,sm(i)),a.isFog?(r.fogNear.value=a.near,r.fogFar.value=a.far):a.isFogExp2&&(r.fogDensity.value=a.density)},refreshMaterialUniforms:function(r,a,s,o,c){a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(r,a):a.isMeshToonMaterial?(n(r,a),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,a)):a.isMeshPhongMaterial?(n(r,a),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,a)):a.isMeshStandardMaterial?(n(r,a),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,a),a.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,a,c)):a.isMeshMatcapMaterial?(n(r,a),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,a)):a.isMeshDepthMaterial?n(r,a):a.isMeshDistanceMaterial?(n(r,a),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,a)):a.isMeshNormalMaterial?n(r,a):a.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,a),a.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,a)):a.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,a,s,o):a.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,a):a.isShadowMaterial?(r.color.value.copy(a.color),r.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function ev(i,e,t,n){let r={},a={},s=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let b=u.value,g=d+"_"+p;if(f[g]===void 0)return f[g]=typeof b=="number"||typeof b=="boolean"?b:b.clone(),!0;{let x=f[g];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return f[g]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete a[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(g){let x=g.uniforms,v=0,m=16;for(let M=0,_=x.length;M<_;M++){let T=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,w=T.length;S<w;S++){let P=T[S],I=Array.isArray(P.value)?P.value:[P.value];for(let U=0,z=I.length;U<z;U++){let V=l(I[U]),Q=v%m,$=Q%V.boundary,W=Q+$;v+=$,W!==0&&m-W<V.storage&&(v+=m-W),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=V.storage}}}let y=v%m;y>0&&(v+=m-y),g.__size=v,g.__cache={}})(u),p=(function(g){let x=(function(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=x;let v=i.createBuffer(),m=g.__size,y=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,m,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let b=e.render.frame;a[u.id]!==b&&((function(g){let x=r[g.id],v=g.uniforms,m=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let y=0,M=v.length;y<M;y++){let _=Array.isArray(v[y])?v[y]:[v[y]];for(let T=0,S=_.length;T<S;T++){let w=_[T];if(c(w,y,T,m)===!0){let P=w.__offset,I=Array.isArray(w.value)?w.value:[w.value],U=0;for(let z=0;z<I.length;z++){let V=I[z],Q=l(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,P+U,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),a[u.id]=b)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);s=[],r={},a={}}}}var lc=class{constructor(e={}){let{canvas:t=ub(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let f=new Uint32Array(4),b=new Int32Array(4),g=null,x=null,v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=0,this.toneMappingExposure=1;let y=this,M=!1,_=0,T=0,S=null,w=-1,P=null,I=new ht,U=new ht,z=null,V=new me(0),Q=0,$=t.width,W=t.height,Y=1,ee=null,ie=null,X=new ht(0,0,$,W),F=new ht(0,0,$,W),K=!1,oe=new ur,Z=!1,C=!1,R=new Ae,H=new Ae,N=new E,L=new ht,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},A=!1;function k(){return S===null?Y:1}let B,ne,G,ae,se,le,ve,be,Te,Ie,Qe,Ge,Pe,rt,ct,ft,Se,Be,mt,Yi,la,Ln,zn,Dn,j=n;function $n(D,q){return t.getContext(D,q)}try{let D={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",$0,!1),t.addEventListener("webglcontextrestored",ep,!1),t.addEventListener("webglcontextcreationerror",tp,!1),j===null){let q="webgl2";if(j=$n(q,D),j===null)throw $n(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}function Ki(){B=new Nb(j),B.init(),Ln=new Z5(j,B),ne=new Ib(j,B,e,Ln),G=new Y5(j,B),ne.reverseDepthBuffer&&d&&G.buffers.depth.setReversed(!0),ae=new Hb(j),se=new H5,le=new K5(j,B,G,se,ne,Ln,ae),ve=new Db(y),be=new Ub(y),Te=new wb(j),zn=new Cb(j,Te),Ie=new Ob(j,Te,ae,zn),Qe=new Bb(j,Ie,Te,ae),mt=new Fb(j,ne,le),ft=new Lb(se),Ge=new k5(y,ve,be,B,ne,zn,ft),Pe=new $5(y,se),rt=new B5,ct=new j5(B),Be=new Rb(y,ve,be,G,Qe,p,c),Se=new X5(y,Qe,ne),Dn=new ev(j,ae,ne,G),Yi=new Pb(j,B,ae),la=new kb(j,B,ae),ae.programs=Ge.programs,y.capabilities=ne,y.extensions=B,y.properties=se,y.renderLists=rt,y.shadowMap=Se,y.state=G,y.info=ae}Ki();let At=new _u(y,j);function $0(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ep(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let D=ae.autoReset,q=Se.enabled,re=Se.autoUpdate,he=Se.needsUpdate,J=Se.type;Ki(),ae.autoReset=D,Se.enabled=q,Se.autoUpdate=re,Se.needsUpdate=he,Se.type=J}function tp(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function np(D){let q=D.target;q.removeEventListener("dispose",np),(function(re){(function(he){let J=se.get(he).programs;J!==void 0&&(J.forEach((function(fe){Ge.releaseProgram(fe)})),he.isShaderMaterial&&Ge.releaseShaderCache(he))})(re),se.remove(re)})(q)}function ip(D,q,re){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,go(D,q,re),D.side=0,D.needsUpdate=!0,go(D,q,re),D.side=2):go(D,q,re)}this.xr=At,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let D=B.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=B.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize($,W,!1))},this.getSize=function(D){return D.set($,W)},this.setSize=function(D,q,re=!0){At.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=D,W=q,t.width=Math.floor(D*Y),t.height=Math.floor(q*Y),re===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q))},this.getDrawingBufferSize=function(D){return D.set($*Y,W*Y).floor()},this.setDrawingBufferSize=function(D,q,re){$=D,W=q,Y=re,t.width=Math.floor(D*re),t.height=Math.floor(q*re),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(I)},this.getViewport=function(D){return D.copy(X)},this.setViewport=function(D,q,re,he){D.isVector4?X.set(D.x,D.y,D.z,D.w):X.set(D,q,re,he),G.viewport(I.copy(X).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy(F)},this.setScissor=function(D,q,re,he){D.isVector4?F.set(D.x,D.y,D.z,D.w):F.set(D,q,re,he),G.scissor(U.copy(F).multiplyScalar(Y).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(D){G.setScissorTest(K=D)},this.setOpaqueSort=function(D){ee=D},this.setTransparentSort=function(D){ie=D},this.getClearColor=function(D){return D.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(D=!0,q=!0,re=!0){let he=0;if(D){let J=!1;if(S!==null){let fe=S.texture.format;J=fe===rd||fe===id||fe===nd}if(J){let fe=S.texture.type,we=fe===yi||fe===Hr||fe===Ts||fe===cr||fe===$u||fe===ed,Le=Be.getClearColor(),Ne=Be.getClearAlpha(),Ve=Le.r,Ye=Le.g,Oe=Le.b;we?(f[0]=Ve,f[1]=Ye,f[2]=Oe,f[3]=Ne,j.clearBufferuiv(j.COLOR,0,f)):(b[0]=Ve,b[1]=Ye,b[2]=Oe,b[3]=Ne,j.clearBufferiv(j.COLOR,0,b))}else he|=j.COLOR_BUFFER_BIT}q&&(he|=j.DEPTH_BUFFER_BIT),re&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$0,!1),t.removeEventListener("webglcontextrestored",ep,!1),t.removeEventListener("webglcontextcreationerror",tp,!1),rt.dispose(),ct.dispose(),se.dispose(),ve.dispose(),be.dispose(),Qe.dispose(),zn.dispose(),Dn.dispose(),Ge.dispose(),At.dispose(),At.removeEventListener("sessionstart",rp),At.removeEventListener("sessionend",ap),Ar.stop()},this.renderBufferDirect=function(D,q,re,he,J,fe){q===null&&(q=O);let we=J.isMesh&&J.matrixWorld.determinant()<0,Le=(function(at,vn,sn,Je,ke){vn.isScene!==!0&&(vn=O),le.resetTextureUnits();let ei=vn.fog,Fl=Je.isMeshStandardMaterial?vn.environment:null,as=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:mn,ha=(Je.isMeshStandardMaterial?be:ve).get(Je.envMap||Fl),Bl=Je.vertexColors===!0&&!!sn.attributes.color&&sn.attributes.color.itemSize===4,zl=!!sn.attributes.tangent&&(!!Je.normalMap||Je.anisotropy>0),Gl=!!sn.morphAttributes.position,Zi=!!sn.morphAttributes.normal,D1=!!sn.morphAttributes.color,up=0;Je.toneMapped&&(S!==null&&S.isXRRenderTarget!==!0||(up=y.toneMapping));let dp=sn.morphAttributes.position||sn.morphAttributes.normal||sn.morphAttributes.color,U1=dp!==void 0?dp.length:0,it=se.get(Je),N1=x.state.lights;if(Z===!0&&(C===!0||at!==P)){let Gn=at===P&&Je.id===w;ft.setState(Je,at,Gn)}let ti=!1;Je.version===it.__version?it.needsLights&&it.lightsStateVersion!==N1.state.version||it.outputColorSpace!==as||ke.isBatchedMesh&&it.batching===!1?ti=!0:ke.isBatchedMesh||it.batching!==!0?ke.isBatchedMesh&&it.batchingColor===!0&&ke.colorTexture===null||ke.isBatchedMesh&&it.batchingColor===!1&&ke.colorTexture!==null||ke.isInstancedMesh&&it.instancing===!1?ti=!0:ke.isInstancedMesh||it.instancing!==!0?ke.isSkinnedMesh&&it.skinning===!1?ti=!0:ke.isSkinnedMesh||it.skinning!==!0?ke.isInstancedMesh&&it.instancingColor===!0&&ke.instanceColor===null||ke.isInstancedMesh&&it.instancingColor===!1&&ke.instanceColor!==null||ke.isInstancedMesh&&it.instancingMorph===!0&&ke.morphTexture===null||ke.isInstancedMesh&&it.instancingMorph===!1&&ke.morphTexture!==null||it.envMap!==ha||Je.fog===!0&&it.fog!==ei?ti=!0:it.numClippingPlanes===void 0||it.numClippingPlanes===ft.numPlanes&&it.numIntersection===ft.numIntersection?(it.vertexAlphas!==Bl||it.vertexTangents!==zl||it.morphTargets!==Gl||it.morphNormals!==Zi||it.morphColors!==D1||it.toneMapping!==up||it.morphTargetsCount!==U1)&&(ti=!0):ti=!0:ti=!0:ti=!0:ti=!0:(ti=!0,it.__version=Je.version);let Rr=it.currentProgram;ti===!0&&(Rr=go(Je,vn,ke));let pp=!1,ss=!1,Vl=!1,Ft=Rr.getUniforms(),Ji=it.uniforms;if(G.useProgram(Rr.program)&&(pp=!0,ss=!0,Vl=!0),Je.id!==w&&(w=Je.id,ss=!0),pp||P!==at){G.buffers.depth.getReversed()?(R.copy(at.projectionMatrix),(function(Cr){let Rt=Cr.elements;Rt[2]=.5*Rt[2]+.5*Rt[3],Rt[6]=.5*Rt[6]+.5*Rt[7],Rt[10]=.5*Rt[10]+.5*Rt[11],Rt[14]=.5*Rt[14]+.5*Rt[15]})(R),(function(Cr){let Rt=Cr.elements;Rt[11]===-1?(Rt[10]=-Rt[10]-1,Rt[14]=-Rt[14]):(Rt[10]=-Rt[10],Rt[14]=1-Rt[14])})(R),Ft.setValue(j,"projectionMatrix",R)):Ft.setValue(j,"projectionMatrix",at.projectionMatrix),Ft.setValue(j,"viewMatrix",at.matrixWorldInverse);let Gn=Ft.map.cameraPosition;Gn!==void 0&&Gn.setValue(j,N.setFromMatrixPosition(at.matrixWorld)),ne.logarithmicDepthBuffer&&Ft.setValue(j,"logDepthBufFC",2/(Math.log(at.far+1)/Math.LN2)),(Je.isMeshPhongMaterial||Je.isMeshToonMaterial||Je.isMeshLambertMaterial||Je.isMeshBasicMaterial||Je.isMeshStandardMaterial||Je.isShaderMaterial)&&Ft.setValue(j,"isOrthographic",at.isOrthographicCamera===!0),P!==at&&(P=at,ss=!0,Vl=!0)}if(ke.isSkinnedMesh){Ft.setOptional(j,ke,"bindMatrix"),Ft.setOptional(j,ke,"bindMatrixInverse");let Gn=ke.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ft.setValue(j,"boneTexture",Gn.boneTexture,le))}ke.isBatchedMesh&&(Ft.setOptional(j,ke,"batchingTexture"),Ft.setValue(j,"batchingTexture",ke._matricesTexture,le),Ft.setOptional(j,ke,"batchingIdTexture"),Ft.setValue(j,"batchingIdTexture",ke._indirectTexture,le),Ft.setOptional(j,ke,"batchingColorTexture"),ke._colorsTexture!==null&&Ft.setValue(j,"batchingColorTexture",ke._colorsTexture,le));let Wl=sn.morphAttributes;Wl.position===void 0&&Wl.normal===void 0&&Wl.color===void 0||mt.update(ke,sn,Rr),(ss||it.receiveShadow!==ke.receiveShadow)&&(it.receiveShadow=ke.receiveShadow,Ft.setValue(j,"receiveShadow",ke.receiveShadow)),Je.isMeshGouraudMaterial&&Je.envMap!==null&&(Ji.envMap.value=ha,Ji.flipEnvMap.value=ha.isCubeTexture&&ha.isRenderTargetTexture===!1?-1:1),Je.isMeshStandardMaterial&&Je.envMap===null&&vn.environment!==null&&(Ji.envMapIntensity.value=vn.environmentIntensity),ss&&(Ft.setValue(j,"toneMappingExposure",y.toneMappingExposure),it.needsLights&&(ni=Vl,(bi=Ji).ambientLightColor.needsUpdate=ni,bi.lightProbe.needsUpdate=ni,bi.directionalLights.needsUpdate=ni,bi.directionalLightShadows.needsUpdate=ni,bi.pointLights.needsUpdate=ni,bi.pointLightShadows.needsUpdate=ni,bi.spotLights.needsUpdate=ni,bi.spotLightShadows.needsUpdate=ni,bi.rectAreaLights.needsUpdate=ni,bi.hemisphereLights.needsUpdate=ni),ei&&Je.fog===!0&&Pe.refreshFogUniforms(Ji,ei),Pe.refreshMaterialUniforms(Ji,Je,Y,W,x.state.transmissionRenderTarget[at.id]),Pa.upload(j,lp(it),Ji,le));var bi,ni;if(Je.isShaderMaterial&&Je.uniformsNeedUpdate===!0&&(Pa.upload(j,lp(it),Ji,le),Je.uniformsNeedUpdate=!1),Je.isSpriteMaterial&&Ft.setValue(j,"center",ke.center),Ft.setValue(j,"modelViewMatrix",ke.modelViewMatrix),Ft.setValue(j,"normalMatrix",ke.normalMatrix),Ft.setValue(j,"modelMatrix",ke.matrixWorld),Je.isShaderMaterial||Je.isRawShaderMaterial){let Gn=Je.uniformsGroups;for(let Cr=0,Rt=Gn.length;Cr<Rt;Cr++){let fp=Gn[Cr];Dn.update(fp,Rr),Dn.bind(fp,Rr)}}return Rr})(D,q,re,he,J);G.setMaterial(he,we);let Ne=re.index,Ve=1;if(he.wireframe===!0){if(Ne=Ie.getWireframeAttribute(re),Ne===void 0)return;Ve=2}let Ye=re.drawRange,Oe=re.attributes.position,tt=Ye.start*Ve,Lt=(Ye.start+Ye.count)*Ve;fe!==null&&(tt=Math.max(tt,fe.start*Ve),Lt=Math.min(Lt,(fe.start+fe.count)*Ve)),Ne!==null?(tt=Math.max(tt,0),Lt=Math.min(Lt,Ne.count)):Oe!=null&&(tt=Math.max(tt,0),Lt=Math.min(Lt,Oe.count));let yt=Lt-tt;if(yt<0||yt===1/0)return;let Xt;zn.setup(J,he,Le,re,Ne);let Mt=Yi;if(Ne!==null&&(Xt=Te.get(Ne),Mt=la,Mt.setIndex(Xt)),J.isMesh)he.wireframe===!0?(G.setLineWidth(he.wireframeLinewidth*k()),Mt.setMode(j.LINES)):Mt.setMode(j.TRIANGLES);else if(J.isLine){let at=he.linewidth;at===void 0&&(at=1),G.setLineWidth(at*k()),J.isLineSegments?Mt.setMode(j.LINES):J.isLineLoop?Mt.setMode(j.LINE_LOOP):Mt.setMode(j.LINE_STRIP)}else J.isPoints?Mt.setMode(j.POINTS):J.isSprite&&Mt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Mt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))Mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let at=J._multiDrawStarts,vn=J._multiDrawCounts,sn=J._multiDrawCount,Je=Ne?Te.get(Ne).bytesPerElement:1,ke=se.get(he).currentProgram.getUniforms();for(let ei=0;ei<sn;ei++)ke.setValue(j,"_gl_DrawID",ei),Mt.render(at[ei]/Je,vn[ei])}else if(J.isInstancedMesh)Mt.renderInstances(tt,yt,J.count);else if(re.isInstancedBufferGeometry){let at=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,vn=Math.min(re.instanceCount,at);Mt.renderInstances(tt,yt,vn)}else Mt.render(tt,yt)},this.compile=function(D,q,re=null){re===null&&(re=D),x=ct.get(re),x.init(q),m.push(x),re.traverseVisible((function(J){J.isLight&&J.layers.test(q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))})),D!==re&&D.traverseVisible((function(J){J.isLight&&J.layers.test(q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))})),x.setupLights();let he=new Set;return D.traverse((function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let fe=J.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let Le=fe[we];ip(Le,re,J),he.add(Le)}else ip(fe,re,J),he.add(fe)})),m.pop(),x=null,he},this.compileAsync=function(D,q,re=null){let he=this.compile(D,q,re);return new Promise((J=>{function fe(){he.forEach((function(we){se.get(we).currentProgram.isReady()&&he.delete(we)})),he.size!==0?setTimeout(fe,10):J(D)}B.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)}))};let kl=null;function rp(){Ar.stop()}function ap(){Ar.start()}let Ar=new om;function Hl(D,q,re,he){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||oe.intersectsSprite(D)){he&&L.setFromMatrixPosition(D.matrixWorld).applyMatrix4(H);let fe=Qe.update(D),we=D.material;we.visible&&g.push(D,fe,we,re,L.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||oe.intersectsObject(D))){let fe=Qe.update(D),we=D.material;if(he&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),L.copy(D.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),L.copy(fe.boundingSphere.center)),L.applyMatrix4(D.matrixWorld).applyMatrix4(H)),Array.isArray(we)){let Le=fe.groups;for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){let Ye=Le[Ne],Oe=we[Ye.materialIndex];Oe&&Oe.visible&&g.push(D,fe,Oe,re,L.z,Ye)}}else we.visible&&g.push(D,fe,we,re,L.z,null)}}let J=D.children;for(let fe=0,we=J.length;fe<we;fe++)Hl(J[fe],q,re,he)}function sp(D,q,re,he){let J=D.opaque,fe=D.transmissive,we=D.transparent;x.setupLightsView(re),Z===!0&&ft.setGlobalState(y.clippingPlanes,re),he&&G.viewport(I.copy(he)),J.length>0&&mo(J,q,re),fe.length>0&&mo(fe,q,re),we.length>0&&mo(we,q,re),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function op(D,q,re,he){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[he.id]===void 0&&(x.state.transmissionRenderTarget[he.id]=new un(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Zn:yi,minFilter:Di,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let J=x.state.transmissionRenderTarget[he.id],fe=he.viewport||I;J.setSize(fe.z,fe.w);let we=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(V),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),A&&Be.render(re);let Le=y.toneMapping;y.toneMapping=0;let Ne=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),x.setupLightsView(he),Z===!0&&ft.setGlobalState(y.clippingPlanes,he),mo(D,re,he),le.updateMultisampleRenderTarget(J),le.updateRenderTargetMipmap(J),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ye=0,Oe=q.length;Ye<Oe;Ye++){let tt=q[Ye],Lt=tt.object,yt=tt.geometry,Xt=tt.material,Mt=tt.group;if(Xt.side===2&&Lt.layers.test(he.layers)){let at=Xt.side;Xt.side=1,Xt.needsUpdate=!0,cp(Lt,re,he,yt,Xt,Mt),Xt.side=at,Xt.needsUpdate=!0,Ve=!0}}Ve===!0&&(le.updateMultisampleRenderTarget(J),le.updateRenderTargetMipmap(J))}y.setRenderTarget(we),y.setClearColor(V,Q),Ne!==void 0&&(he.viewport=Ne),y.toneMapping=Le}function mo(D,q,re){let he=q.isScene===!0?q.overrideMaterial:null;for(let J=0,fe=D.length;J<fe;J++){let we=D[J],Le=we.object,Ne=we.geometry,Ve=he===null?we.material:he,Ye=we.group;Le.layers.test(re.layers)&&cp(Le,q,re,Ne,Ve,Ye)}}function cp(D,q,re,he,J,fe){D.onBeforeRender(y,q,re,he,J,fe),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(y,q,re,he,D,fe),J.transparent===!0&&J.side===2&&J.forceSinglePass===!1?(J.side=1,J.needsUpdate=!0,y.renderBufferDirect(re,q,he,J,D,fe),J.side=0,J.needsUpdate=!0,y.renderBufferDirect(re,q,he,J,D,fe),J.side=2):y.renderBufferDirect(re,q,he,J,D,fe),D.onAfterRender(y,q,re,he,J,fe)}function go(D,q,re){q.isScene!==!0&&(q=O);let he=se.get(D),J=x.state.lights,fe=x.state.shadowsArray,we=J.state.version,Le=Ge.getParameters(D,J.state,fe,q,re),Ne=Ge.getProgramCacheKey(Le),Ve=he.programs;he.environment=D.isMeshStandardMaterial?q.environment:null,he.fog=q.fog,he.envMap=(D.isMeshStandardMaterial?be:ve).get(D.envMap||he.environment),he.envMapRotation=he.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Ve===void 0&&(D.addEventListener("dispose",np),Ve=new Map,he.programs=Ve);let Ye=Ve.get(Ne);if(Ye!==void 0){if(he.currentProgram===Ye&&he.lightsStateVersion===we)return hp(D,Le),Ye}else Le.uniforms=Ge.getUniforms(D),D.onBeforeCompile(Le,y),Ye=Ge.acquireProgram(Le,Ne),Ve.set(Ne,Ye),he.uniforms=Le.uniforms;let Oe=he.uniforms;return(D.isShaderMaterial||D.isRawShaderMaterial)&&D.clipping!==!0||(Oe.clippingPlanes=ft.uniform),hp(D,Le),he.needsLights=(function(tt){return tt.isMeshLambertMaterial||tt.isMeshToonMaterial||tt.isMeshPhongMaterial||tt.isMeshStandardMaterial||tt.isShadowMaterial||tt.isShaderMaterial&&tt.lights===!0})(D),he.lightsStateVersion=we,he.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.directionalShadowMap.value=J.state.directionalShadowMap,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotShadowMap.value=J.state.spotShadowMap,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMap.value=J.state.pointShadowMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix),he.currentProgram=Ye,he.uniformsList=null,Ye}function lp(D){if(D.uniformsList===null){let q=D.currentProgram.getUniforms();D.uniformsList=Pa.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function hp(D,q){let re=se.get(D);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}Ar.setAnimationLoop((function(D){kl&&kl(D)})),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(D){kl=D,At.setAnimationLoop(D),D===null?Ar.stop():Ar.start()},At.addEventListener("sessionstart",rp),At.addEventListener("sessionend",ap),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,q,S),x=ct.get(D,m.length),x.init(q),m.push(x),H.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),oe.setFromProjectionMatrix(H),C=this.localClippingEnabled,Z=ft.init(this.clippingPlanes,C),g=rt.get(D,v.length),g.init(),v.push(g),At.enabled===!0&&At.isPresenting===!0){let fe=y.xr.getDepthSensingMesh();fe!==null&&Hl(fe,q,-1/0,y.sortObjects)}Hl(D,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ee,ie),A=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,A&&Be.addToRenderList(g,D),this.info.render.frame++,Z===!0&&ft.beginShadows();let re=x.state.shadowsArray;Se.render(re,D,q),Z===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let he=g.opaque,J=g.transmissive;if(x.setupLights(),q.isArrayCamera){let fe=q.cameras;if(J.length>0)for(let we=0,Le=fe.length;we<Le;we++)op(he,J,D,fe[we]);A&&Be.render(D);for(let we=0,Le=fe.length;we<Le;we++){let Ne=fe[we];sp(g,D,Ne,Ne.viewport)}}else J.length>0&&op(he,J,D,q),A&&Be.render(D),sp(g,D,q);S!==null&&(le.updateMultisampleRenderTarget(S),le.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(y,D,q),zn.resetDefaultState(),w=-1,P=null,m.pop(),m.length>0?(x=m[m.length-1],Z===!0&&ft.setGlobalState(y.clippingPlanes,x.state.camera)):x=null,v.pop(),g=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,q,re){se.get(D.texture).__webglTexture=q,se.get(D.depthTexture).__webglTexture=re;let he=se.get(D);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=re===void 0,he.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,q){let re=se.get(D);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,re=0){S=D,_=q,T=re;let he=!0,J=null,fe=!1,we=!1;if(D){let Le=se.get(D);if(Le.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(j.FRAMEBUFFER,null),he=!1;else if(Le.__webglFramebuffer===void 0)le.setupRenderTarget(D);else if(Le.__hasExternalTextures)le.rebindTextures(D,se.get(D.texture).__webglTexture,se.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Ye=D.depthTexture;if(Le.__boundDepthTexture!==Ye){if(Ye!==null&&se.has(Ye)&&(D.width!==Ye.image.width||D.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(D)}}let Ne=D.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);let Ve=se.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(J=Array.isArray(Ve[q])?Ve[q][re]:Ve[q],fe=!0):J=D.samples>0&&le.useMultisampledRTT(D)===!1?se.get(D).__webglMultisampledFramebuffer:Array.isArray(Ve)?Ve[re]:Ve,I.copy(D.viewport),U.copy(D.scissor),z=D.scissorTest}else I.copy(X).multiplyScalar(Y).floor(),U.copy(F).multiplyScalar(Y).floor(),z=K;if(G.bindFramebuffer(j.FRAMEBUFFER,J)&&he&&G.drawBuffers(D,J),G.viewport(I),G.scissor(U),G.setScissorTest(z),fe){let Le=se.get(D.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,re)}else if(we){let Le=se.get(D.texture),Ne=q||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Le.__webglTexture,re||0,Ne)}w=-1},this.readRenderTargetPixels=function(D,q,re,he,J,fe,we){if(!D||!D.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){G.bindFramebuffer(j.FRAMEBUFFER,Le);try{let Ne=D.texture,Ve=Ne.format,Ye=Ne.type;if(!ne.textureFormatReadable(Ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=D.width-he&&re>=0&&re<=D.height-J&&j.readPixels(q,re,he,J,Ln.convert(Ve),Ln.convert(Ye),fe)}finally{let Ne=S!==null?se.get(S).__webglFramebuffer:null;G.bindFramebuffer(j.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(D,q,re,he,J,fe,we){if(!D||!D.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){let Ne=D.texture,Ve=Ne.format,Ye=Ne.type;if(!ne.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=D.width-he&&re>=0&&re<=D.height-J){G.bindFramebuffer(j.FRAMEBUFFER,Le);let Oe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Oe),j.bufferData(j.PIXEL_PACK_BUFFER,fe.byteLength,j.STREAM_READ),j.readPixels(q,re,he,J,Ln.convert(Ve),Ln.convert(Ye),0);let tt=S!==null?se.get(S).__webglFramebuffer:null;G.bindFramebuffer(j.FRAMEBUFFER,tt);let Lt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await(function(yt,Xt,Mt){return new Promise((function(at,vn){setTimeout((function sn(){switch(yt.clientWaitSync(Xt,yt.SYNC_FLUSH_COMMANDS_BIT,0)){case yt.WAIT_FAILED:vn();break;case yt.TIMEOUT_EXPIRED:setTimeout(sn,Mt);break;default:at()}}),Mt)}))})(j,Lt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Oe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,fe),j.deleteBuffer(Oe),j.deleteSync(Lt),fe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,q=null,re=0){D.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,D=arguments[1]);let he=Math.pow(2,-re),J=Math.floor(D.image.width*he),fe=Math.floor(D.image.height*he),we=q!==null?q.x:0,Le=q!==null?q.y:0;le.setTexture2D(D,0),j.copyTexSubImage2D(j.TEXTURE_2D,re,0,0,we,Le,J,fe),G.unbindTexture()},this.copyTextureToTexture=function(D,q,re=null,he=null,J=0){let fe,we,Le,Ne,Ve,Ye,Oe,tt,Lt;D.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,D=arguments[1],q=arguments[2],J=arguments[3]||0,re=null);let yt=D.isCompressedTexture?D.mipmaps[J]:D.image;re!==null?(fe=re.max.x-re.min.x,we=re.max.y-re.min.y,Le=re.isBox3?re.max.z-re.min.z:1,Ne=re.min.x,Ve=re.min.y,Ye=re.isBox3?re.min.z:0):(fe=yt.width,we=yt.height,Le=yt.depth||1,Ne=0,Ve=0,Ye=0),he!==null?(Oe=he.x,tt=he.y,Lt=he.z):(Oe=0,tt=0,Lt=0);let Xt=Ln.convert(q.format),Mt=Ln.convert(q.type),at;q.isData3DTexture?(le.setTexture3D(q,0),at=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(le.setTexture2DArray(q,0),at=j.TEXTURE_2D_ARRAY):(le.setTexture2D(q,0),at=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);let vn=j.getParameter(j.UNPACK_ROW_LENGTH),sn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Je=j.getParameter(j.UNPACK_SKIP_PIXELS),ke=j.getParameter(j.UNPACK_SKIP_ROWS),ei=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,yt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ne),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ve),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ye);let Fl=D.isDataArrayTexture||D.isData3DTexture,as=q.isDataArrayTexture||q.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let ha=se.get(D),Bl=se.get(q),zl=se.get(ha.__renderTarget),Gl=se.get(Bl.__renderTarget);G.bindFramebuffer(j.READ_FRAMEBUFFER,zl.__webglFramebuffer),G.bindFramebuffer(j.DRAW_FRAMEBUFFER,Gl.__webglFramebuffer);for(let Zi=0;Zi<Le;Zi++)Fl&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,se.get(D).__webglTexture,J,Ye+Zi),D.isDepthTexture?(as&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,se.get(q).__webglTexture,J,Lt+Zi),j.blitFramebuffer(Ne,Ve,fe,we,Oe,tt,fe,we,j.DEPTH_BUFFER_BIT,j.NEAREST)):as?j.copyTexSubImage3D(at,J,Oe,tt,Lt+Zi,Ne,Ve,fe,we):j.copyTexSubImage2D(at,J,Oe,tt,Lt+Zi,Ne,Ve,fe,we);G.bindFramebuffer(j.READ_FRAMEBUFFER,null),G.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else as?D.isDataTexture||D.isData3DTexture?j.texSubImage3D(at,J,Oe,tt,Lt,fe,we,Le,Xt,Mt,yt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(at,J,Oe,tt,Lt,fe,we,Le,Xt,yt.data):j.texSubImage3D(at,J,Oe,tt,Lt,fe,we,Le,Xt,Mt,yt):D.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,J,Oe,tt,fe,we,Xt,Mt,yt.data):D.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,J,Oe,tt,yt.width,yt.height,Xt,yt.data):j.texSubImage2D(j.TEXTURE_2D,J,Oe,tt,fe,we,Xt,Mt,yt);j.pixelStorei(j.UNPACK_ROW_LENGTH,vn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,sn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Je),j.pixelStorei(j.UNPACK_SKIP_ROWS,ke),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ei),J===0&&q.generateMipmaps&&j.generateMipmap(at),G.unbindTexture()},this.copyTextureToTexture3D=function(D,q,re=null,he=null,J=0){return D.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,he=arguments[1]||null,D=arguments[2],q=arguments[3],J=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,q,re,he,J)},this.initRenderTarget=function(D){se.get(D).__webglFramebuffer===void 0&&le.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?le.setTextureCube(D,0):D.isData3DTexture?le.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?le.setTexture2DArray(D,0):le.setTexture2D(D,0),G.unbindTexture()},this.resetState=function(){_=0,T=0,S=null,G.reset(),zn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var hc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},uc=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new E,Ps=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),a=gt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var a3=new E,s3=new E,o3=new E,c3=new ce,l3=new ce,h3=new Ae,u3=new E,d3=new E,p3=new E,f3=new ce,m3=new ce,g3=new ce;var b3=new E,v3=new E;var df=new E,pf=new ht,ff=new ht,tv=new E,mf=new Ae,ko=new E,vh=new An,gf=new Ae,xh=new Fr,dc=class extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mp,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vh.copy(this.boundingSphere),vh.applyMatrix4(r),e.ray.intersectsSphere(vh)!==!1&&(gf.copy(r).invert(),xh.copy(e.ray).applyMatrix4(gf),this.boundingBox!==null&&xh.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;pf.fromBufferAttribute(r.attributes.skinIndex,e),ff.fromBufferAttribute(r.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let s=ff.getComponent(a);if(s!==0){let o=pf.getComponent(a);mf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tv.copy(df).applyMatrix4(mf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},Is=class extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},pr=class extends $t{constructor(e=null,t=1,n=1,r,a,s,o,c,l=1003,h=1003,u,d){super(null,s,o,c,l,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bf=new Ae,nv=new Ae,pc=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,s=e.length;a<s;a++){let o=e[a]?e[a].matrixWorld:nv;bf.multiplyMatrices(o,t[a]),bf.toArray(n,16*a)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new pr(t,e,e,kn,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let a=e.bones[n],s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new Is),this.bones.push(s),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,a=t.length;r<a;r++){let s=t[r];e.bones.push(s.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Br=class extends bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ta=new Ae,vf=new Ae,Ho=[],xf=new en,iv=new Ae,ps=new te,fs=new An,En=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,iv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ta),xf.copy(e.boundingBox).applyMatrix4(Ta),this.boundingBox.union(xf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ta),fs.copy(e.boundingSphere).applyMatrix4(Ta),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=e*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=r[a+s]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Ta),vf.multiplyMatrices(n,Ta),ps.matrixWorld=vf,ps.raycast(e,Ho);for(let s=0,o=Ho.length;s<o;s++){let c=Ho[s];c.instanceId=a,c.object=this,t.push(c)}Ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(r*this.count),r,this.count,td,oi));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let o=this.geometry.morphTargetsRelative?1:1-s,c=r*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Mu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let o=a[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},x3=new Ae,y3=new me(1,1,1),_3=new ur,M3=new en,E3=new An,T3=new E,S3=new E,w3=new E,A3=new Mu,R3=new te;var Yn=class extends Rn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fc=new E,mc=new E,yf=new Ae,ms=new Fr,Fo=new An,yh=new E,_f=new E,Ni=class extends ut{constructor(e=new He,t=new Yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)fc.fromBufferAttribute(t,r-1),mc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fc.distanceTo(mc);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=a,e.ray.intersectsSphere(Fo)===!1)return;yf.copy(r).invert(),ms.copy(e.ray).applyMatrix4(yf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let f=d,b=p-1;f<b;f+=l){let g=h.getX(f),x=h.getX(f+1),v=Bo(this,e,ms,c,g,x);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),b=h.getX(d),g=Bo(this,e,ms,c,f,b);g&&t.push(g)}}else{let d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let f=d,b=p-1;f<b;f+=l){let g=Bo(this,e,ms,c,f,f+1);g&&t.push(g)}if(this.isLineLoop){let f=Bo(this,e,ms,c,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Bo(i,e,t,n,r,a){let s=i.geometry.attributes.position;if(fc.fromBufferAttribute(s,r),mc.fromBufferAttribute(s,a),t.distanceSqToSegment(fc,mc,yh,_f)>n)return;yh.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(yh);return o<e.near||o>e.far?void 0:{distance:o,point:_f.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Mf=new E,Ef=new E,fr=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Mf.fromBufferAttribute(t,r),Ef.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Mf.distanceTo(Ef);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gc=class extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zr=class extends Rn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new Ae,Eu=new Fr,zo=new An,Go=new E,Fa=class extends ut{constructor(e=new He,t=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),zo.radius+=a,e.ray.intersectsSphere(zo)===!1)return;Tf.copy(r).invert(),Eu.copy(e.ray).applyMatrix4(Tf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);u<d;u++){let p=l.getX(u);Go.fromBufferAttribute(h,p),Sf(Go,p,c,r,e,t,this)}else for(let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);u<d;u++)Go.fromBufferAttribute(h,u),Sf(Go,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Sf(i,e,t,n,r,a,s){let o=Eu.distanceSqToPoint(i);if(o<t){let c=new E;Eu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var mr=class extends $t{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,a=n.length,s;s=t||e*n[a-1];let o,c=0,l=a-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-s,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===s)return r/(a-1);let h=n[r];return(r+(s-h)/(n[r+1]-h))/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),o=this.getPoint(a),c=t||(s.isVector2?new ce:new E);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,r=[],a=[],s=[],o=new E,c=new Ae;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new E)}a[0]=new E,s[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(o,f))}s[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(Bt(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let f=1;f<=e;f++)a[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),s[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ls=class extends Kn{constructor(e=0,t=0,n=1,r=1,a=0,s=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=s?0:r),this.aClockwise!==!0||s||(a===r?a=-r:a-=r);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tu=class extends Ls{constructor(e,t,n,r,a,s){super(e,t,n,n,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function sd(){let i=0,e=0,t=0,n=0;function r(a,s,o,c){i=a,e=o,t=-3*a+3*s-2*o-c,n=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){r(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,h,u){let d=(s-a)/l-(o-a)/(l+h)+(o-s)/h,p=(o-s)/h-(c-s)/(h+u)+(c-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(a){let s=a*a;return i+e*a+t*s+n*(s*a)}}}var Vo=new E,_h=new sd,Mh=new sd,Eh=new sd,Hn=class extends Kn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){let n=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,o,c,l=Math.floor(s),h=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:h===0&&l===a-1&&(l=a-2,h=1),this.closed||l>0?o=r[(l-1)%a]:(Vo.subVectors(r[0],r[1]).add(r[0]),o=Vo);let u=r[l%a],d=r[(l+1)%a];if(this.closed||l+2<a?c=r[(l+2)%a]:(Vo.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(c),p);b<1e-4&&(b=1),f<1e-4&&(f=b),g<1e-4&&(g=b),_h.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,b,g),Mh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,b,g),Eh.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,b,g)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),Mh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),Eh.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(_h.calc(h),Mh.calc(h),Eh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wf(i,e,t,n,r){let a=.5*(n-e),s=.5*(r-t),o=i*i;return(2*t-2*n+a+s)*(i*o)+(-3*t+3*n-2*a-s)*o+a*i+t}function _s(i,e,t,n){return(function(r,a){let s=1-r;return s*s*a})(i,e)+(function(r,a){return 2*(1-r)*r*a})(i,t)+(function(r,a){return r*r*a})(i,n)}function Ms(i,e,t,n,r){return(function(a,s){let o=1-a;return o*o*o*s})(i,e)+(function(a,s){let o=1-a;return 3*o*o*a*s})(i,t)+(function(a,s){return 3*(1-a)*a*a*s})(i,n)+(function(a,s){return a*a*a*s})(i,r)}var bc=class extends Kn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){let n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(Ms(e,r.x,a.x,s.x,o.x),Ms(e,r.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Su=class extends Kn{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){let n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(Ms(e,r.x,a.x,s.x,o.x),Ms(e,r.y,a.y,s.y,o.y),Ms(e,r.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vc=class extends Kn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wu=class extends Kn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends Kn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(_s(e,r.x,a.x,s.x),_s(e,r.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends Kn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(_s(e,r.x,a.x,s.x),_s(e,r.y,a.y,s.y),_s(e,r.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,c=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return n.set(wf(o,c.x,l.x,h.x,u.x),wf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},Mc=Object.freeze({__proto__:null,ArcCurve:Tu,CatmullRomCurve3:Hn,CubicBezierCurve:bc,CubicBezierCurve3:Su,EllipseCurve:Ls,LineCurve:vc,LineCurve3:wu,QuadraticBezierCurve:xc,QuadraticBezierCurve3:yc,SplineCurve:_c}),Au=class extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=n){let s=r[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-s/c;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],o=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Mc[r.type]().fromJSON(r))}return this}},Gr=class extends Au{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new vc(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let a=new xc(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,s){let o=new bc(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _c(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,s){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,a,s),this}absarc(e,t,n,r,a,s){return this.absellipse(e,t,n,n,r,a,s),this}ellipse(e,t,n,r,a,s,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,a,s,o,c),this}absellipse(e,t,n,r,a,s,o,c){let l=new Ls(e,t,n,r,a,s,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_i=class i extends He{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Bt(r,0,2*Math.PI);let a=[],s=[],o=[],c=[],l=[],h=1/t,u=new E,d=new ce,p=new E,f=new E,b=new E,g=0,x=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,p.x=1*x,p.y=-g,p.z=0*x,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:g=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,p.x=1*x,p.y=-g,p.z=0*x,f.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(f)}for(let v=0;v<=t;v++){let m=n+v*h*r,y=Math.sin(m),M=Math.cos(m);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*y,u.y=e[_].y,u.z=e[_].x*M,s.push(u.x,u.y,u.z),d.x=v/t,d.y=_/(e.length-1),o.push(d.x,d.y);let T=c[3*_+0]*y,S=c[3*_+1],w=c[3*_+0]*M;l.push(T,S,w)}}for(let v=0;v<t;v++)for(let m=0;m<e.length-1;m++){let y=m+v*e.length,M=y,_=y+e.length,T=y+e.length+1,S=y+1;a.push(M,_,S),a.push(T,S,_)}this.setIndex(a),this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ds=class i extends _i{constructor(e=1,t=1,n=4,r=8){let a=new Gr;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Ru=class i extends He{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let a=[],s=[],o=[],c=[],l=new E,h=new ce;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),s.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Me=class i extends He{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],p=[],f=0,b=[],g=n/2,x=0;function v(m){let y=f,M=new ce,_=new E,T=0,S=m===!0?e:t,w=m===!0?1:-1;for(let I=1;I<=r;I++)u.push(0,g*w,0),d.push(0,w,0),p.push(.5,.5),f++;let P=f;for(let I=0;I<=r;I++){let U=I/r*c+o,z=Math.cos(U),V=Math.sin(U);_.x=S*V,_.y=g*w,_.z=S*z,u.push(_.x,_.y,_.z),d.push(0,w,0),M.x=.5*z+.5,M.y=.5*V*w+.5,p.push(M.x,M.y),f++}for(let I=0;I<r;I++){let U=y+I,z=P+I;m===!0?h.push(z,z+1,U):h.push(z+1,z,U),T+=3}l.addGroup(x,T,m===!0?1:2),x+=T}(function(){let m=new E,y=new E,M=0,_=(t-e)/n;for(let T=0;T<=a;T++){let S=[],w=T/a,P=w*(t-e)+e;for(let I=0;I<=r;I++){let U=I/r,z=U*c+o,V=Math.sin(z),Q=Math.cos(z);y.x=P*V,y.y=-w*n+g,y.z=P*Q,u.push(y.x,y.y,y.z),m.set(V,_,Q).normalize(),d.push(m.x,m.y,m.z),p.push(U,1-w),S.push(f++)}b.push(S)}for(let T=0;T<r;T++)for(let S=0;S<a;S++){let w=b[S][T],P=b[S+1][T],I=b[S+1][T+1],U=b[S][T+1];(e>0||S!==0)&&(h.push(w,P,U),M+=3),(t>0||S!==a-1)&&(h.push(P,I,U),M+=3)}l.addGroup(x,M,0),x+=M})(),s===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cn=class i extends Me{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=2*Math.PI){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vr=class i extends He{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let a=[],s=[];function o(d,p,f,b){let g=b+1,x=[];for(let v=0;v<=g;v++){x[v]=[];let m=d.clone().lerp(f,v/g),y=p.clone().lerp(f,v/g),M=g-v;for(let _=0;_<=M;_++)x[v][_]=_===0&&v===g?m:m.clone().lerp(y,_/M)}for(let v=0;v<g;v++)for(let m=0;m<2*(g-v)-1;m++){let y=Math.floor(m/2);m%2==0?(c(x[v][y+1]),c(x[v+1][y]),c(x[v][y])):(c(x[v][y+1]),c(x[v+1][y+1]),c(x[v+1][y]))}}function c(d){a.push(d.x,d.y,d.z)}function l(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,b){b<0&&d.x===1&&(s[p]=d.x-1),f.x===0&&f.z===0&&(s[p]=b/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,f=new E,b=new E;for(let g=0;g<t.length;g+=3)l(t[g+0],p),l(t[g+1],f),l(t[g+2],b),o(p,f,b,d)})(r),(function(d){let p=new E;for(let f=0;f<a.length;f+=3)p.x=a[f+0],p.y=a[f+1],p.z=a[f+2],p.normalize().multiplyScalar(d),a[f+0]=p.x,a[f+1]=p.y,a[f+2]=p.z})(n),(function(){let d=new E;for(let f=0;f<a.length;f+=3){d.x=a[f+0],d.y=a[f+1],d.z=a[f+2];let b=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);s.push(b,1-g)}var p;(function(){let f=new E,b=new E,g=new E,x=new E,v=new ce,m=new ce,y=new ce;for(let M=0,_=0;M<a.length;M+=9,_+=6){f.set(a[M+0],a[M+1],a[M+2]),b.set(a[M+3],a[M+4],a[M+5]),g.set(a[M+6],a[M+7],a[M+8]),v.set(s[_+0],s[_+1]),m.set(s[_+2],s[_+3]),y.set(s[_+4],s[_+5]),x.copy(f).add(b).add(g).divideScalar(3);let T=u(x);h(v,_+0,f,T),h(m,_+2,b,T),h(y,_+4,g,T)}})(),(function(){for(let f=0;f<s.length;f+=6){let b=s[f+0],g=s[f+2],x=s[f+4],v=Math.max(b,g,x),m=Math.min(b,g,x);v>.9&&m<.1&&(b<.2&&(s[f+0]+=1),g<.2&&(s[f+2]+=1),x<.2&&(s[f+4]+=1))}})()})(),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(a.slice(),3)),this.setAttribute("uv",new Ce(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Cu=class i extends Vr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Wo=new E,jo=new E,Th=new E,Xo=new rr,Us=class extends He{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),a=Math.cos(Ra*t),s=e.getIndex(),o=e.getAttribute("position"),c=s?s.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){s?(l[0]=s.getX(f),l[1]=s.getX(f+1),l[2]=s.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:b,b:g,c:x}=Xo;if(b.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),x.fromBufferAttribute(o,l[2]),Xo.getNormal(Th),u[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let m=(v+1)%3,y=u[v],M=u[m],_=Xo[h[v]],T=Xo[h[m]],S=`${y}_${M}`,w=`${M}_${y}`;w in d&&d[w]?(Th.dot(d[w].normal)<=a&&(p.push(_.x,_.y,_.z),p.push(T.x,T.y,T.z)),d[w]=null):S in d||(d[S]={index0:l[v],index1:l[m],normal:Th.clone()})}}for(let f in d)if(d[f]){let{index0:b,index1:g}=d[f];Wo.fromBufferAttribute(o,b),jo.fromBufferAttribute(o,g),p.push(Wo.x,Wo.y,Wo.z),p.push(jo.x,jo.y,jo.z)}this.setAttribute("position",new Ce(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Fe=class extends Gr{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Gr().fromJSON(r))}return this}},rv=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,a=Af(i,0,r,t,!0),s=[];if(!a||a.next===a.prev)return s;let o,c,l,h,u,d,p;if(n&&(a=(function(f,b,g,x){let v=[],m,y,M,_,T;for(m=0,y=b.length;m<y;m++)M=b[m]*x,_=m<y-1?b[m+1]*x:f.length,T=Af(f,M,_,x,!1),T===T.next&&(T.steiner=!0),v.push(dv(T));for(v.sort(lv),m=0;m<v.length;m++)g=hv(v[m],g);return g})(i,e,a,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Ns(a,s,t,o,c,p,0),s};function Af(i,e,t,n,r){let a,s;if(r===(function(o,c,l,h){let u=0;for(let d=c,p=l-h;d<l;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(a=e;a<t;a+=n)s=Rf(a,i[a],i[a+1],s);else for(a=t-n;a>=e;a-=n)s=Rf(a,i[a],i[a+1],s);return s&&Vc(s,s.next)&&(ks(s),s=s.next),s}function Wr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Vc(n,n.next)&&It(n.prev,n,n.next)!==0)n=n.next;else{if(ks(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ns(i,e,t,n,r,a,s){if(!i)return;!s&&a&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Pu(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(b){let g,x,v,m,y,M,_,T,S=1;do{for(x=b,b=null,y=null,M=0;x;){for(M++,v=x,_=0,g=0;g<S&&(_++,v=v.nextZ,v);g++);for(T=S;_>0||T>0&&v;)_!==0&&(T===0||!v||x.z<=v.z)?(m=x,x=x.nextZ,_--):(m=v,v=v.nextZ,T--),y?y.nextZ=m:b=m,m.prevZ=y,y=m;x=v}y.nextZ=null,S*=2}while(M>1)})(f)})(i,n,r,a);let o,c,l=i;for(;i.prev!==i.next;)if(o=i.prev,c=i.next,a?sv(i,n,r,a):av(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ks(i),i=c.next,l=c.next;else if((i=c)===l){s?s===1?Ns(i=ov(Wr(i),e,t),e,t,n,r,a,2):s===2&&cv(i,e,t,n,r,a):Ns(Wr(i),e,t,n,r,a,1);break}}function av(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,a=t.x,s=n.x,o=e.y,c=t.y,l=n.y,h=r<a?r<s?r:s:a<s?a:s,u=o<c?o<l?o:l:c<l?c:l,d=r>a?r>s?r:s:a>s?a:s,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Aa(r,o,a,c,s,l,f.x,f.y)&&It(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function sv(i,e,t,n){let r=i.prev,a=i,s=i.next;if(It(r,a,s)>=0)return!1;let o=r.x,c=a.x,l=s.x,h=r.y,u=a.y,d=s.y,p=o<c?o<l?o:l:c<l?c:l,f=h<u?h<d?h:d:u<d?u:d,b=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,x=Pu(p,f,e,t,n),v=Pu(b,g,e,t,n),m=i.prevZ,y=i.nextZ;for(;m&&m.z>=x&&y&&y.z<=v;){if(m.x>=p&&m.x<=b&&m.y>=f&&m.y<=g&&m!==r&&m!==s&&Aa(o,h,c,u,l,d,m.x,m.y)&&It(m.prev,m,m.next)>=0||(m=m.prevZ,y.x>=p&&y.x<=b&&y.y>=f&&y.y<=g&&y!==r&&y!==s&&Aa(o,h,c,u,l,d,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;m&&m.z>=x;){if(m.x>=p&&m.x<=b&&m.y>=f&&m.y<=g&&m!==r&&m!==s&&Aa(o,h,c,u,l,d,m.x,m.y)&&It(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=b&&y.y>=f&&y.y<=g&&y!==r&&y!==s&&Aa(o,h,c,u,l,d,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ov(i,e,t){let n=i;do{let r=n.prev,a=n.next.next;!Vc(r,a)&&dm(r,n,n.next,a)&&Os(r,a)&&Os(a,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),ks(n),ks(n.next),n=i=a),n=n.next}while(n!==i);return Wr(n)}function cv(i,e,t,n,r,a){let s=i;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&pv(s,o)){let c=pm(s,o);return s=Wr(s,s.next),c=Wr(c,c.next),Ns(s,e,t,n,r,a,0),void Ns(c,e,t,n,r,a,0)}o=o.next}s=s.next}while(s!==i)}function lv(i,e){return i.x-e.x}function hv(i,e){let t=(function(r,a){let s,o=a,c=-1/0,l=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=l&&g>c&&(c=g,s=o.x<o.next.x?o:o.next,g===l))return s}o=o.next}while(o!==a);if(!s)return null;let u=s,d=s.x,p=s.y,f,b=1/0;o=s;do l>=o.x&&o.x>=d&&l!==o.x&&Aa(h<p?l:c,h,d,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),Os(o,r)&&(f<b||f===b&&(o.x>s.x||o.x===s.x&&uv(s,o)))&&(s=o,b=f)),o=o.next;while(o!==u);return s})(i,e);if(!t)return e;let n=pm(t,i);return Wr(n,n.next),Wr(t,t.next)}function uv(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function Pu(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function dv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Aa(i,e,t,n,r,a,s,o){return(r-s)*(e-o)>=(i-s)*(a-o)&&(i-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(n-o)}function pv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&dm(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Os(i,e)&&Os(e,i)&&(function(t,n){let r=t,a=!1,s=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&s<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a})(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||Vc(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vc(i,e){return i.x===e.x&&i.y===e.y}function dm(i,e,t,n){let r=Yo(It(i,e,t)),a=Yo(It(i,e,n)),s=Yo(It(t,n,i)),o=Yo(It(t,n,e));return r!==a&&s!==o||!(r!==0||!qo(i,t,e))||!(a!==0||!qo(i,n,e))||!(s!==0||!qo(t,i,n))||!(o!==0||!qo(t,e,n))}function qo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Yo(i){return i>0?1:i<0?-1:0}function Os(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function pm(i,e){let t=new Iu(i.i,i.x,i.y),n=new Iu(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Rf(i,e,t,n){let r=new Iu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Iu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var xi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],a=[];Cf(e),Pf(n,e);let s=e.length;t.forEach(Cf);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,Pf(n,t[c]);let o=rv(n,r);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}};function Cf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Dt=class i extends He{constructor(e=new Fe([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],a=[];for(let o=0,c=e.length;o<c;o++)s(e[o]);function s(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:fv,m,y,M,_,T,S=!1;x&&(m=x.getSpacedPoints(h),S=!0,d=!1,y=x.computeFrenetFrames(h,!1),M=new E,_=new E,T=new E),d||(g=0,p=0,f=0,b=0);let w=o.extractPoints(l),P=w.shape,I=w.holes;if(!xi.isClockWise(P)){P=P.reverse();for(let N=0,L=I.length;N<L;N++){let O=I[N];xi.isClockWise(O)&&(I[N]=O.reverse())}}let U=xi.triangulateShape(P,I),z=P;for(let N=0,L=I.length;N<L;N++){let O=I[N];P=P.concat(O)}function V(N,L,O){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(L,O)}let Q=P.length,$=U.length;function W(N,L,O){let A,k,B,ne=N.x-L.x,G=N.y-L.y,ae=O.x-N.x,se=O.y-N.y,le=ne*ne+G*G,ve=ne*se-G*ae;if(Math.abs(ve)>Number.EPSILON){let be=Math.sqrt(le),Te=Math.sqrt(ae*ae+se*se),Ie=L.x-G/be,Qe=L.y+ne/be,Ge=((O.x-se/Te-Ie)*se-(O.y+ae/Te-Qe)*ae)/(ne*se-G*ae);A=Ie+ne*Ge-N.x,k=Qe+G*Ge-N.y;let Pe=A*A+k*k;if(Pe<=2)return new ce(A,k);B=Math.sqrt(Pe/2)}else{let be=!1;ne>Number.EPSILON?ae>Number.EPSILON&&(be=!0):ne<-Number.EPSILON?ae<-Number.EPSILON&&(be=!0):Math.sign(G)===Math.sign(se)&&(be=!0),be?(A=-G,k=ne,B=Math.sqrt(le)):(A=ne,k=G,B=Math.sqrt(le/2))}return new ce(A/B,k/B)}let Y=[];for(let N=0,L=z.length,O=L-1,A=N+1;N<L;N++,O++,A++)O===L&&(O=0),A===L&&(A=0),Y[N]=W(z[N],z[O],z[A]);let ee=[],ie,X=Y.concat();for(let N=0,L=I.length;N<L;N++){let O=I[N];ie=[];for(let A=0,k=O.length,B=k-1,ne=A+1;A<k;A++,B++,ne++)B===k&&(B=0),ne===k&&(ne=0),ie[A]=W(O[A],O[B],O[ne]);ee.push(ie),X=X.concat(ie)}for(let N=0;N<g;N++){let L=N/g,O=p*Math.cos(L*Math.PI/2),A=f*Math.sin(L*Math.PI/2)+b;for(let k=0,B=z.length;k<B;k++){let ne=V(z[k],Y[k],A);oe(ne.x,ne.y,-O)}for(let k=0,B=I.length;k<B;k++){let ne=I[k];ie=ee[k];for(let G=0,ae=ne.length;G<ae;G++){let se=V(ne[G],ie[G],A);oe(se.x,se.y,-O)}}}let F=f+b;for(let N=0;N<Q;N++){let L=d?V(P[N],X[N],F):P[N];S?(_.copy(y.normals[0]).multiplyScalar(L.x),M.copy(y.binormals[0]).multiplyScalar(L.y),T.copy(m[0]).add(_).add(M),oe(T.x,T.y,T.z)):oe(L.x,L.y,0)}for(let N=1;N<=h;N++)for(let L=0;L<Q;L++){let O=d?V(P[L],X[L],F):P[L];S?(_.copy(y.normals[N]).multiplyScalar(O.x),M.copy(y.binormals[N]).multiplyScalar(O.y),T.copy(m[N]).add(_).add(M),oe(T.x,T.y,T.z)):oe(O.x,O.y,u/h*N)}for(let N=g-1;N>=0;N--){let L=N/g,O=p*Math.cos(L*Math.PI/2),A=f*Math.sin(L*Math.PI/2)+b;for(let k=0,B=z.length;k<B;k++){let ne=V(z[k],Y[k],A);oe(ne.x,ne.y,u+O)}for(let k=0,B=I.length;k<B;k++){let ne=I[k];ie=ee[k];for(let G=0,ae=ne.length;G<ae;G++){let se=V(ne[G],ie[G],A);S?oe(se.x,se.y+m[h-1].y,m[h-1].x+O):oe(se.x,se.y,u+O)}}}function K(N,L){let O=N.length;for(;--O>=0;){let A=O,k=O-1;k<0&&(k=N.length-1);for(let B=0,ne=h+2*g;B<ne;B++){let G=Q*B,ae=Q*(B+1);C(L+A+G,L+k+G,L+k+ae,L+A+ae)}}}function oe(N,L,O){c.push(N),c.push(L),c.push(O)}function Z(N,L,O){R(N),R(L),R(O);let A=r.length/3,k=v.generateTopUV(n,r,A-3,A-2,A-1);H(k[0]),H(k[1]),H(k[2])}function C(N,L,O,A){R(N),R(L),R(A),R(L),R(O),R(A);let k=r.length/3,B=v.generateSideWallUV(n,r,k-6,k-3,k-2,k-1);H(B[0]),H(B[1]),H(B[3]),H(B[1]),H(B[2]),H(B[3])}function R(N){r.push(c[3*N+0]),r.push(c[3*N+1]),r.push(c[3*N+2])}function H(N){a.push(N.x),a.push(N.y)}(function(){let N=r.length/3;if(d){let L=0,O=Q*L;for(let A=0;A<$;A++){let k=U[A];Z(k[2]+O,k[1]+O,k[0]+O)}L=h+2*g,O=Q*L;for(let A=0;A<$;A++){let k=U[A];Z(k[0]+O,k[1]+O,k[2]+O)}}else{for(let L=0;L<$;L++){let O=U[L];Z(O[2],O[1],O[0])}for(let L=0;L<$;L++){let O=U[L];Z(O[0]+Q*h,O[1]+Q*h,O[2]+Q*h)}}n.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,L=0;K(z,L),L+=z.length;for(let O=0,A=I.length;O<A;O++){let k=I[O];K(k,L),L+=k.length}n.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let a=0,s=t.length;a<s;a++){let o=t[a];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Mc[r.type]().fromJSON(r)),new i(n,e.options)}},fv={generateTopUV:function(i,e,t,n,r){let a=e[3*t],s=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new ce(a,s),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,r,a){let s=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],b=e[3*a],g=e[3*a+1],x=e[3*a+2];return Math.abs(o-h)<Math.abs(s-l)?[new ce(s,1-c),new ce(l,1-u),new ce(d,1-f),new ce(b,1-x)]:[new ce(o,1-c),new ce(h,1-u),new ce(p,1-f),new ce(g,1-x)]}},Lu=class i extends Vr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Du=class i extends Vr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Oi=class i extends He{constructor(e=.5,t=1,n=32,r=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new E,f=new ce;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let x=a+g/n*s;p.x=u*Math.cos(x),p.y=u*Math.sin(x),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let b=0;b<r;b++){let g=b*(n+1);for(let x=0;x<n;x++){let v=x+g,m=v,y=v+n+1,M=v+n+2,_=v+1;o.push(m,y,_),o.push(y,M,_)}}this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},jr=class i extends He{constructor(e=new Fe([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],a=[],s=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;xi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,x=f.length;g<x;g++){let v=f[g];xi.isClockWise(v)===!0&&(f[g]=v.reverse())}let b=xi.triangulateShape(p,f);for(let g=0,x=f.length;g<x;g++){let v=f[g];p=p.concat(v)}for(let g=0,x=p.length;g<x;g++){let v=p[g];r.push(v.x,v.y,0),a.push(0,0,1),s.push(v.x,v.y)}for(let g=0,x=b.length;g<x;g++){let v=b[g],m=v[0]+u,y=v[1]+u,M=v[2]+u;n.push(m,y,M),c+=3}}this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let s=t[r];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let s=t[e.shapes[r]];n.push(s)}return new i(n,e.curveSegments)}},Zt=class i extends He{constructor(e=1,t=32,n=16,r=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(s+o,Math.PI),l=0,h=[],u=new E,d=new E,p=[],f=[],b=[],g=[];for(let x=0;x<=n;x++){let v=[],m=x/n,y=0;x===0&&s===0?y=.5/t:x===n&&c===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){let _=M/t;u.x=-e*Math.cos(r+_*a)*Math.sin(s+m*o),u.y=e*Math.cos(s+m*o),u.z=e*Math.sin(r+_*a)*Math.sin(s+m*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(_+y,1-m),v.push(l++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let m=h[x][v+1],y=h[x][v],M=h[x+1][v],_=h[x+1][v+1];(x!==0||s>0)&&p.push(m,y,_),(x!==n-1||c<Math.PI)&&p.push(y,M,_)}this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(b,3)),this.setAttribute("uv",new Ce(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Uu=class i extends Vr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},pn=class i extends He{constructor(e=1,t=.4,n=12,r=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);let s=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let b=f/r*a,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let b=(r+1)*p+f-1,g=(r+1)*(p-1)+f-1,x=(r+1)*(p-1)+f,v=(r+1)*p+f;s.push(b,g,v),s.push(g,x,v)}this.setIndex(s),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Nu=class i extends He{constructor(e=1,t=.4,n=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:a,q:s},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new E,d=new E,p=new E,f=new E,b=new E,g=new E,x=new E;for(let m=0;m<=n;++m){let y=m/n*a*Math.PI*2;v(y,a,s,e,p),v(y+.01,a,s,e,f),g.subVectors(f,p),x.addVectors(f,p),b.crossVectors(g,x),x.crossVectors(b,g),b.normalize(),x.normalize();for(let M=0;M<=r;++M){let _=M/r*Math.PI*2,T=-t*Math.cos(_),S=t*Math.sin(_);u.x=p.x+(T*x.x+S*b.x),u.y=p.y+(T*x.y+S*b.y),u.z=p.z+(T*x.z+S*b.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(m/n),h.push(M/r)}}for(let m=1;m<=n;m++)for(let y=1;y<=r;y++){let M=(r+1)*(m-1)+(y-1),_=(r+1)*m+(y-1),T=(r+1)*m+y,S=(r+1)*(m-1)+y;o.push(M,_,S),o.push(_,T,S)}function v(m,y,M,_,T){let S=Math.cos(m),w=Math.sin(m),P=M/y*m,I=Math.cos(P);T.x=_*(2+I)*.5*S,T.y=_*(2+I)*w*.5,T.z=_*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ki=class i extends He{constructor(e=new yc(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new E,c=new E,l=new ce,h=new E,u=[],d=[],p=[],f=[];function b(g){h=e.getPointAt(g/t,h);let x=s.normals[g],v=s.binormals[g];for(let m=0;m<=r;m++){let y=m/r*Math.PI*2,M=Math.sin(y),_=-Math.cos(y);c.x=_*x.x+M*v.x,c.y=_*x.y+M*v.y,c.z=_*x.z+M*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)b(g);b(a===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let x=0;x<=r;x++)l.x=g/t,l.y=x/r,p.push(l.x,l.y)})(),(function(){for(let g=1;g<=t;g++)for(let x=1;x<=r;x++){let v=(r+1)*(g-1)+(x-1),m=(r+1)*g+(x-1),y=(r+1)*g+x,M=(r+1)*(g-1)+x;f.push(v,m,M),f.push(m,y,M)}})()})(),this.setIndex(f),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Mc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ou=class extends He{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new E,a=new E;if(e.index!==null){let s=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let b=0;b<3;b++){let g=o.getX(p+b),x=o.getX(p+(b+1)%3);r.fromBufferAttribute(s,g),a.fromBufferAttribute(s,x),If(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let o=0,c=s.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,u),If(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function If(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var C3=Object.freeze({__proto__:null,BoxGeometry:Et,CapsuleGeometry:Ds,CircleGeometry:Ru,ConeGeometry:Cn,CylinderGeometry:Me,DodecahedronGeometry:Cu,EdgesGeometry:Us,ExtrudeGeometry:Dt,IcosahedronGeometry:Lu,LatheGeometry:_i,OctahedronGeometry:Du,PlaneGeometry:Mn,PolyhedronGeometry:Vr,RingGeometry:Oi,ShapeGeometry:jr,SphereGeometry:Zt,TetrahedronGeometry:Uu,TorusGeometry:pn,TorusKnotGeometry:Nu,TubeGeometry:ki,WireframeGeometry:Ou});var Ec=class extends Vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},fn=class extends Rn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends fn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tc=class extends Rn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Sc=class extends Yn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ko(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gv(i){let e=i.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,r){return i[n]-i[r]})),t}function Lf(i,e,t){let n=i.length,r=new i.constructor(n);for(let a=0,s=0;s!==n;++a){let o=t[a]*e;for(let c=0;c!==e;++c)r[s++]=i[o+c]}return r}function fm(i,e,t,n){let r=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[r++];if(a===void 0)return;let s=a[n];if(s!==void 0)if(Array.isArray(s))do s=a[n],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=i[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[n],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=i[r++];while(a!==void 0);else do s=a[n],s!==void 0&&(e.push(a.time),t.push(s)),a=i[r++];while(a!==void 0)}var gr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];t:{e:{let s;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=r,r=t[++n],e<r)break e}s=t.length;break n}if(e>=a)break t;{let o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=a,a=t[--n-1],e>=a)break e}s=n,n=0}}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=n[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ku=class extends gr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gp,endingEnd:gp}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],c=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case bp:a=e,o=2*t-n;break;case vp:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bp:s=e,c=2*n-t;break;case vp:s=1,c=n+r[1]-r[0];break;default:s=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),b=f*f,g=b*f,x=-d*g+2*d*b-d*f,v=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*f+1,m=(-1-p)*g+(1.5+p)*b+.5*f,y=p*g-p*b;for(let M=0;M!==o;++M)a[M]=x*s[h+M]+v*s[l+M]+m*s[c+M]+y*s[u+M];return a}},Hu=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[l+d]*u+s[c+d]*h;return a}},Fu=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ku(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,s=r-1;for(;a!==r&&n[a]<e;)++a;for(;s!==-1&&n[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=n.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(r!==void 0&&mv(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jl,a=e.length-1,s=1;for(let o=1;o<a;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let h=o*n,u=s*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*n,c=s*n,l=0;l!==n;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Xn.prototype.TimeBufferType=Float32Array,Xn.prototype.ValueBufferType=Float32Array,Xn.prototype.DefaultInterpolation=Ua;var ar=class extends Xn{constructor(e,t,n){super(e,t,n)}};ar.prototype.ValueTypeName="bool",ar.prototype.ValueBufferType=Array,ar.prototype.DefaultInterpolation=Da,ar.prototype.InterpolantFactoryMethodLinear=void 0,ar.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Xn{};wc.prototype.ValueTypeName="color";var Hi=class extends Xn{};Hi.prototype.ValueTypeName="number";var Bu=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)dn.slerpFlat(a,0,s,l-o,s,l,c);return a}},Fi=class extends Xn{InterpolantFactoryMethodLinear(e){return new Bu(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion",Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Xn{constructor(e,t,n){super(e,t,n)}};sr.prototype.ValueTypeName="string",sr.prototype.ValueBufferType=Array,sr.prototype.DefaultInterpolation=Da,sr.prototype.InterpolantFactoryMethodLinear=void 0,sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Xn{};Bi.prototype.ValueTypeName="vector";var Ac=class{constructor(e="",t=-1,n=[],r=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(bv(n[s]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=n.length;a!==s;++a)t.push(Xn.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let a=t.length,s=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);let h=gv(c);c=Lf(c,1,h),l=Lf(l,1,h),r||c[0]!==0||(c.push(a),l.push(l[0])),s.push(new Hi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(a);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(l)}}let s=[];for(let o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let b=[],g=[];fm(d,b,g,p),b.length!==0&&f.push(new h(u,b,g))}},r=[],a=e.name||"default",s=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let b=[],g=[];for(let x=0;x!==u[p].morphTargets.length;++x){let v=u[p];b.push(v.time),g.push(v.morphTarget===f?1:0)}r.push(new Hi(".morphTargetInfluence["+f+"]",b,g))}c=d.length*s}else{let d=".bones["+t[h].name+"]";n(Bi,d+".position",u,"pos",r),n(Fi,d+".quaternion",u,"rot",r),n(Bi,d+".scale",u,"scl",r)}}return r.length===0?null:new this(a,c,r,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let r=this.tracks[t];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function bv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return wc;case"quaternion":return Fi;case"bool":case"boolean":return ar;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(i.type);if(i.times===void 0){let t=[],n=[];fm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var or={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zu=class{constructor(e,t,n){let r=this,a,s=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,c),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},vv=new zu,zi=class{constructor(e){this.manager=e!==void 0?e:vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,a){n.load(e,r,t,a)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},Gu=class extends Error{constructor(e,t){super(e),this.response=t}},Hs=class extends zi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=or.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(a),this.manager.itemEnd(e)}),0),a;if(Ii[e]!==void 0)return void Ii[e].push({onLoad:t,onProgress:n,onError:r});Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:r});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(s).then((l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ii[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,b=0,g=new ReadableStream({start(x){(function v(){u.read().then((({done:m,value:y})=>{if(m)x.close();else{b+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:f,loaded:b,total:p});for(let _=0,T=h.length;_<T;_++){let S=h[_];S.onProgress&&S.onProgress(M)}x.enqueue(y),v()}}),(m=>{x.error(m)}))})()}});return new Response(g)}throw new Gu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)})).then((l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then((p=>d.decode(p)))}}})).then((l=>{or.add(e,l);let h=Ii[e];delete Ii[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}})).catch((l=>{let h=Ii[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ii[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Vu=class extends zi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=or.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout((function(){t&&t(s),a.manager.itemEnd(e)}),0),s;let o=ws("img");function c(){h(),or.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}};var Rc=class extends zi{constructor(e){super(e)}load(e,t,n,r){let a=new $t,s=new Vu(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,(function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)}),n,r),a}},Ba=class extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Cc=class extends Ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sh=new Ae,Df=new E,Uf=new E,Fs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wu=class extends Fs{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Oa*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;n===t.fov&&r===t.aspect&&a===t.far||(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pc=class extends Ba{constructor(e,t,n=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nf=new Ae,gs=new E,wh=new E,ju=class extends Fs{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(gs),wh.copy(n.position),wh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wh),n.updateMatrixWorld(),r.makeTranslation(-gs.x,-gs.y,-gs.z),Nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf)}},za=class extends Ba{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ju}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xu=class extends Fs{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Xu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var br=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ic=class extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=or.get(e);if(s!==void 0)return a.manager.itemStart(e),s.then?void s.then((l=>{t&&t(l),a.manager.itemEnd(e)})).catch((l=>{r&&r(l)})):(setTimeout((function(){t&&t(s),a.manager.itemEnd(e)}),0),s);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then((function(l){return l.blob()})).then((function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))})).then((function(l){return or.add(e,l),t&&t(l),a.manager.itemEnd(e),l})).catch((function(l){r&&r(l),or.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)}));or.add(e,c),a.manager.itemStart(e)}};var P3=new Ae,I3=new Ae,L3=new Ae;var Lc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Of(){return performance.now()}var D3=new E,U3=new dn,N3=new E,O3=new E;var k3=new E,H3=new dn,F3=new E,B3=new E;var od="\\[\\]\\.:\\/",xv=new RegExp("["+od+"]","g"),Ah="[^"+od+"]",yv="[^"+od.replace("\\.","")+"]",_v=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ah)+/(WCOD+)?/.source.replace("WCOD",yv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah)+"$"),Mv=["material","materials","bones","map"],_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xv,"")}static parseTrackName(e){let t=_v.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);Mv.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=class{constructor(i,e,t){let n=t||_t.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray],_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z3=new Float32Array(1);var kf=new Ae,Dc=class{constructor(e,t,n=0,r=1/0){this.ray=new Fr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(e,t=!0,n=[]){return qu(e,this,n,t),n.sort(Hf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)qu(e[r],this,n,t);return n.sort(Hf),n}};function Hf(i,e){return i.distance-e.distance}function qu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let a=i.children;for(let s=0,o=a.length;s<o;s++)qu(a[s],e,t,!0)}}var Bs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var G3=new ce;var Ff=new E,Zo=new E,Uc=class{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ff.subVectors(e,this.start),Zo.subVectors(this.end,this.start);let n=Zo.dot(Zo),r=Zo.dot(Ff)/n;return t&&(r=Bt(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},V3=new E;var W3=new E,j3=new Ae,X3=new Ae;var q3=new E,Y3=new me,K3=new me;var Z3=new E,J3=new E,Q3=new E;var $3=new E,ex=new Rs;var tx=new en;var nx=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ev=new dr(-1,1,1,-1,0,1),cd=class extends He{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}},Tv=new cd,vr=class{constructor(e){this._mesh=new te(Tv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ev)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var xr=class extends Bn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gs=class extends Bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}},Wc=class extends Bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var jc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xr(Wa),this.copyPass.material.blending=ci,this.clock=new Lc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,a=this.passes.length;r<a;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gs!==void 0&&(s instanceof Gs?n=!0:s instanceof Wc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xc=class extends Bn{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}};var mm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qc=class extends Bn{constructor(){super();let e=mm;this.uniforms=li.clone(e.uniforms),this.material=new Ec({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new vr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gm={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125},r:{value:.35}},vertexShader:`

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

		}`};var bm={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125},r:{value:.35}},vertexShader:`

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

		}`};var vm={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};function Mi(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},s={},o=i[0].morphTargetsRelative,c=new He,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in a){let u=xm(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in s){let u=s[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let b=0;b<s[h].length;++b)p.push(s[h][b][d]);let f=xm(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}return c}function xm(i){let e,t,n,r=-1,a=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}let s=new e(a),o=new bt(s,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){let b=h.getComponent(d,f);o.setComponent(d+u,f,b)}}else s.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function ld(i,e){if(e===im)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zs||e===Fc){let t=i.getIndex();if(t===null){let s=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===zs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=i.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var ym={name:"japan-washi",concept:"\u548C\u7D19\u7D19\u96D5",countries:["\u65E5\u672C"],css:{"--ink":"#2a2420","--paper":"#f3ebdc","--wash":"232,220,198","--red":"#ae2a20","--gold":"#b8913a","--air":"#3c6a8c","--mute":"#7d7062","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f3ebdc","#ddcbad"],sea:"#2b4560",rings:["#36536e","#4f6e86"],land:"#efe4cf",side:"#a5825a",route:"#ae2a20",stitch:"#f5ecdc",bead:"#b8913a",air:"#3c6a8c",flagPaper:"#fbf6ec",sun:"#ffe1b6",hemi:["#fff4e2","#76664f"],hills:{count:60,sets:[[.55,["#c6b08a","#d4c19d","#e1d2b4","#ece2cc"]],[.3,["#b99063","#c8a171","#d6b483","#e3c99c"]],[.15,["#a9603e","#bd7448","#cf8c56","#dca66a"]]]},terrain:["#e8dcc0","#dccca7","#cfb98c","#c3a574","#b8915f","#ad7d4f","#9f6a43","#8f5a3a","#7d4c32","#6b3f2b","#5a3425","#f1ece2"],houses:["machiya"],trees:{perStop:10,along:110,coast:["pine"],inland:["maple","maple","cedar"],pine:["#3d5a3b","#4b6a45","#33503a"],colors:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b","#8a8c4a"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(40,60,80,.10)",i.lineWidth=e/160;let t=e/4;for(let n=-1;n<5;n++)for(let r=-1;r<3;r++){let a=r*t*2+(n%2?t:0),s=n*t/2;for(let o=4;o>=1;o--)i.beginPath(),i.arc(a,s+t,t*o/4,Math.PI,2*Math.PI),i.stroke()}}};var _m={name:"china-ink",concept:"\u6C34\u58A8\u9577\u5377",countries:["\u4E2D\u570B","\u9999\u6E2F","\u6FB3\u9580"],css:{"--ink":"#1f2220","--paper":"#f2efe6","--wash":"242,239,230","--red":"#b5281c","--gold":"#9a7b3c","--air":"#4a5d6a","--mute":"#6f706a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f2efe6","#d9d5c8"],sea:"#c9cec9",rings:["#d6dad3","#e2e4dc"],land:"#f4f1e8",side:"#6b6b66",route:"#b5281c",stitch:"#f4f1e8",bead:"#b5281c",air:"#4a5d6a",flagPaper:"#f7f4ec",sun:"#fff3df",hemi:["#fbf8f0","#6f706a"],terrain:["#e3e1d9","#cfcdc4","#b9b8b0","#a2a29b","#8a8b85","#72746f","#5c5e5a","#474a47","#343735","#262927","#1c1e1d","#f2f0ea"],hills:{count:60,sets:[[.55,["#c9c8c0","#a9a9a2","#878883","#666865"]],[.3,["#a9b8ad","#93a598","#7c9182","#667d6e"]],[.15,["#cdb48e","#bba077","#a68b63","#8f7653"]]]},trees:{perStop:10,along:110,coast:["pine","willow"],inland:["pine","bamboo","willow"],pine:["#2f3a33","#3f4a3c","#25302a"],colors:["#8a3a2c","#b5281c","#c9a34a","#7d8a5a","#a8452e","#6a7a4a","#b88a3a"],colorsBy:{pine:["#2f3a33","#3f4a3c","#25302a"],willow:["#6d7f5a","#7d8f68","#5d6f4c"],bamboo:["#4f6b45","#5d7a50","#43603b"]}},houses:["china"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(40,45,42,.13)",i.lineWidth=e/200;for(let t=0;t<10;t++){i.beginPath();let n=(t+.5)*e/10;for(let r=0;r<=e;r+=e/64)i.lineTo(r,n+Math.sin(r/e*Math.PI*4+t)*e/60);i.stroke()}}};var Mm={name:"vietnam-lantern",concept:"\u71C8\u7C60\u5287\u5834",countries:["\u8D8A\u5357"],css:{"--ink":"#2b1d14","--paper":"#f6e7bf","--wash":"246,231,191","--red":"#c0392b","--gold":"#d9a032","--air":"#1f5d5a","--mute":"#7a6448","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6e3b4","#e7b27a"],sea:"#1f4b4a",rings:["#2a6260","#3f7a73"],land:"#f3e2b3",side:"#8a5a2b",route:"#c0392b",stitch:"#f2c14e",bead:"#e67e22",air:"#1f5d5a",flagPaper:"#fff3d6",sun:"#ffd28a",hemi:["#fff1d0","#6b4a2a"],terrain:["#d9d79a","#c3c97f","#a9b768","#8fa457","#76904a","#5f7b3f","#4b6636","#3b532d","#2e4226","#4a4f3a","#6a6a58","#ece6d2"],hills:{count:60,sets:[[.55,["#b9c27a","#9fb062","#869c50","#6d8643"]],[.3,["#d6cf7a","#c7c066","#b5ae55","#a29b47"]],[.15,["#9aa595","#86917f","#727d6b","#5f6959"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["palm","bamboo","banyan"],pine:["#2e4a32","#3a5a3c","#26402b"],colors:["#c0392b","#e67e22","#f2c14e","#6a8a3a","#d9a032","#8fa457","#b5502b"]},houses:["shophouse","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,230,170,.12)",i.lineWidth=e/220,[[.25,.3],[.72,.18],[.55,.7],[.12,.82],[.9,.62]].forEach(([t,n])=>{for(let r=1;r<=4;r++)i.beginPath(),i.arc(t*e,n*e,r*e/22,0,Math.PI*2),i.stroke()})}};var Em={name:"thailand-gold",concept:"\u6696\u91D1\u6D6E\u96D5",countries:["\u6CF0\u570B","\u67EC\u57D4\u5BE8","\u5BEE\u570B","\u7DEC\u7538"],css:{"--ink":"#2a1f12","--paper":"#f6ead0","--wash":"246,234,208","--red":"#9b1d20","--gold":"#c8941c","--air":"#16404d","--mute":"#7d6a4a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6ead0","#e8cf9b"],sea:"#1b2c4a",rings:["#263c5e","#365078"],land:"#f0e2c2",side:"#a07a2c",route:"#9b1d20",stitch:"#e7c66b",bead:"#d4a017",air:"#1b2c4a",flagPaper:"#fbf3df",sun:"#ffe0a0",hemi:["#fff2d6","#6a5330"],terrain:["#efdcae","#e5cd8f","#d9bc72","#cca95a","#bd9547","#ab823b","#967032","#7f5e2b","#6a4e25","#5a4220","#4a361b","#f3e6c8"],hills:{count:60,sets:[[.55,["#e0c77f","#cfae5e","#b99347","#a07a36"]],[.3,["#9fb06a","#87995a","#70824b","#5b6c3e"]],[.15,["#d08a5a","#bd7548","#a5623b","#8c5231"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["banyan","palm","bamboo"],pine:["#2f4a2e","#3b5a38","#283f27"],colors:["#e0a526","#d4a017","#9b1d20","#f0c94a","#c8941c","#b87a1a","#7a8a3a"]},houses:["thai","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(231,198,107,.16)",i.lineWidth=e/180;let t=6,n=e/t;for(let r=0;r<=t;r++)for(let a=0;a<=t;a++){let s=r*n,o=a*n;i.beginPath(),i.moveTo(s,o-n/2),i.lineTo(s+n/2,o),i.lineTo(s,o+n/2),i.lineTo(s-n/2,o),i.closePath(),i.stroke()}}};var Tm={name:"indonesia-rainforest",concept:"\u96E8\u6797\u5149\u7A97",countries:["\u5370\u5C3C","\u83F2\u5F8B\u8CD3"],css:{"--ink":"#1f2a1e","--paper":"#f1ecd8","--wash":"241,236,216","--red":"#c2502d","--gold":"#c99a2e","--air":"#0f5a63","--mute":"#6a6a52","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#eef0dc","#c9dcc0"],sea:"#0f5a63",rings:["#1a7378","#3a9590"],land:"#e8e2c8",side:"#6e5a3a",route:"#c2502d",stitch:"#fdf3d0",bead:"#e0a526",air:"#0f5a63",flagPaper:"#fbf8ea",sun:"#fff0c8",hemi:["#f3f7e6","#3e5a3a"],terrain:["#cfe0a4","#b5d08a","#9cc074","#82ad60","#6b994f","#558443","#436f39","#345a30","#284628","#1f3a22","#5e5a4c","#efeee8"],hills:{count:60,sets:[[.55,["#a8c97a","#8cb560","#6f9c4c","#55843f"]],[.3,["#8a8576","#76715f","#625e4e","#504c3f"]],[.15,["#d3e07a","#bed06a","#a7be5a","#90aa4c"]]]},trees:{perStop:14,along:130,coast:["palm"],inland:["palm","banyan","bamboo"],pine:["#24442a","#2f5434","#1f3a24"],colors:["#e0a526","#c2502d","#f3e3a0","#6b994f","#d98a3a","#8cb560","#a8402b"]},houses:["bali","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,245,210,.14)";for(let t=0;t<8;t++)for(let n=0;n<24;n++){let r=n/24*e,a=(t+.5)*e/8+Math.sin(n/24*Math.PI*4)*e/40;i.beginPath(),i.arc(r,a,e/160,0,Math.PI*2),i.fill()}}};var Sm={name:"malaysia-peranakan",concept:"\u5357\u6D0B\u82B1\u78DA",countries:["\u99AC\u4F86\u897F\u4E9E","\u65B0\u52A0\u5761","\u6C76\u840A"],css:{"--ink":"#2a2430","--paper":"#f6eedd","--wash":"246,238,221","--red":"#c8505d","--gold":"#c9a04a","--air":"#2f6db3","--mute":"#7a6c74","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6eedd","#e6d6cf"],sea:"#2a5c8a",rings:["#3a74a0","#6aa3bf"],land:"#f6eedd",side:"#b9806a",route:"#c8505d",stitch:"#ffffff",bead:"#2f6db3",air:"#2f6db3",flagPaper:"#fffaf0",sun:"#ffe9cf",hemi:["#fff6ea","#5a5060"],terrain:["#e6efdc","#d3e8d2","#bfdfcb","#a8d3c0","#90c4b2","#79b3a3","#649f92","#528a80","#43756d","#3a625c","#7d8a86","#e2e6e3"],hills:{count:60,sets:[[.55,["#bfe0cc","#a6d3bd","#8dc4ad","#74b39c"]],[.3,["#a6d08f","#8cc07a","#73ab66","#5d9554"]],[.15,["#d9a28a","#c88d74","#b47960","#9d664f"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["banyan","palm"],pine:["#2a4a2e","#36583a","#223e26"],colors:["#c8505d","#e08a8f","#f2c6a0","#7fa96a","#d9a04a","#95ba7d","#b5404d"]},houses:["shophouse"],village:6,seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,255,255,.16)",i.lineWidth=e/200;let t=4,n=e/t;for(let r=0;r<t;r++)for(let a=0;a<t;a++){let s=(r+.5)*n,o=(a+.5)*n;for(let c=0;c<4;c++){let l=c*Math.PI/2;i.beginPath(),i.ellipse(s+Math.cos(l)*n*.2,o+Math.sin(l)*n*.2,n*.2,n*.1,l,0,Math.PI*2),i.stroke()}i.strokeRect(r*n,a*n,n,n)}}};var wm={name:"korea-hanji",concept:"\u97D3\u7D19\u4E39\u9752",countries:["\u97D3\u570B"],css:{"--ink":"#22252a","--paper":"#f2ece0","--wash":"236,230,216","--red":"#b23a2e","--gold":"#c9a24a","--air":"#2e6b7a","--mute":"#6f6a62","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f2ece0","#d6d4c8"],sea:"#2a4a5e",rings:["#35596f","#4f7385"],land:"#ece6d6",side:"#7d6a55",route:"#b23a2e",stitch:"#f2ece0",bead:"#2e8b7a",air:"#2e6b7a",flagPaper:"#faf6ee",sun:"#fff0d6",hemi:["#f8f6ef","#5c5e5a"],hills:{count:60,sets:[[.5,["#bdb7a8","#cbc6b8","#d9d5c9","#e6e3d9"]],[.35,["#6f7f62","#829172","#97a486","#adb89c"]],[.15,["#9c6a4a","#b07d58","#c3946b","#d4ac84"]]]},terrain:["#e6e2d3","#d9d6c2","#c8c8ad","#b5b897","#a0a682","#8b946f","#77835e","#647250","#566244","#4a5340","#5f5f5c","#eeede8"],houses:["hanok"],trees:{perStop:10,along:110,coast:["pine"],inland:["pine","pine","ginkgo","maple"],pine:["#3f5a46","#4c6a52","#34503f"],colors:["#a8432f","#b85a32","#c98f3a","#d6ae4c","#8e4a34","#b0703a","#7f8456"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(30,55,75,.11)",i.lineWidth=e/170,i.lineCap="round";let t=e/14,n=(r,a,s)=>{for(let o=0;o<2;o++){let c=t*(1-o*.42);i.beginPath(),i.arc(r-s*t*.9,a,c,s>0?0:Math.PI,s>0?Math.PI*1.75:Math.PI*2.75),i.stroke(),i.beginPath(),i.arc(r+s*t*.9,a,c,s>0?Math.PI:0,s>0?Math.PI*2.75:Math.PI*1.75,s<0),i.stroke()}i.beginPath(),i.moveTo(r-t*2.2,a+t*.9),i.quadraticCurveTo(r,a+t*1.5,r+t*2.2,a+t*.9),i.stroke()};for(let r=0;r<4;r++)for(let a=-1;a<3;a++)n((a+r%2*.5)*e/2+e/4,r*e/4+e/8,r%2?-1:1)}};var Am={name:"europe-atlas",concept:"\u53E4\u5730\u5716\u7D19\u96D5",countries:["\u6CD5\u570B","\u7FA9\u5927\u5229","\u6377\u514B","\u5967\u5730\u5229","\u745E\u58EB","\u5FB7\u570B","\u897F\u73ED\u7259","\u8377\u862D","\u6BD4\u5229\u6642","\u8461\u8404\u7259","\u82F1\u570B"],css:{"--ink":"#2b2622","--paper":"#f1e4c8","--wash":"241,228,200","--red":"#a8452e","--gold":"#b08a3e","--air":"#3f5f78","--mute":"#776a5c","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f1e6cf","#c9d3d6"],sea:"#2f4c63",rings:["#3d5c73","#58768a"],land:"#eedcb4",side:"#94704a",route:"#a8452e",stitch:"#f4ead6",bead:"#b08a3e",air:"#3f5f78",flagPaper:"#faf5ea",sun:"#ffe9c8",hemi:["#f8f3e8","#646056"],hills:{count:60,sets:[[.45,["#9fb85a","#b2c66c","#c5d382","#d8e09c"]],[.35,["#d4a94a","#ddb85e","#e5c776","#edd694"]],[.2,["#3f6248","#4d7254","#5e8463","#729676"]]]},terrain:["#ece0b8","#dfdc9e","#cbd286","#b2c46f","#94b05e","#6f9455","#4f7650","#41604a","#7e8186","#9a9ca0","#bfc1c3","#f6f7f8"],houses:["timber","terracotta","chalet"],trees:{perStop:10,along:110,coast:["pine"],inland:["cedar","maple","maple","willow"],pine:["#3f5c43","#4a6a4c","#36503b"],colors:["#7a9a3e","#8fae4a","#b8b040","#c98f34","#6b8a3a","#a86a32","#5c7c3c"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(30,45,60,.10)",i.lineWidth=e/300;let t=24,n=6;for(let r=0;r<t;r++){let a=(r+.5)*e/t,s=r%3*.7,o=e/t*.18;i.beginPath();for(let c=0;c<=e;c+=2){let l=a+Math.sin(c/e*Math.PI*2*n+s)*o;c?i.lineTo(c,l):i.moveTo(c,l)}i.stroke()}}};var Rm={name:"taiwan-formosa",concept:"\u798F\u723E\u6469\u6C99\u9752\u5C71",countries:["\u53F0\u7063"],css:{"--ink":"#20282a","--paper":"#eef0e6","--wash":"232,236,224","--red":"#b8352a","--gold":"#c9a040","--air":"#2f6f73","--mute":"#69706a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#eef1ea","#cdd8d0"],sea:"#1f4a5a",rings:["#2c5f6e","#477a86"],land:"#e9ead8",side:"#6f6450",route:"#b8352a",stitch:"#f4f1e6",bead:"#c9a040",air:"#2f6f73",flagPaper:"#fbf9f1",sun:"#fff2d8",hemi:["#f4f7f0","#5a6658"],road:"#e4e2d2",highway:"#c9bf9c",rail:"#4f5652",train:"#eef0ea",hills:{count:60,sets:[[.45,["#cbd89a","#d7e1ac","#e2e9bf","#ecf0d2"]],[.35,["#7fa86a","#90b67a","#a3c48c","#b7d19f"]],[.2,["#3f6a58","#4c7a66","#5d8a76","#71998a"]]]},terrain:["#e3e6c8","#cfdca8","#b6cf8e","#9cc07a","#82ad6a","#6a9a5e","#568656","#47734f","#3d6450","#4f6a68","#8a9a9a","#eef0ee"],houses:["taiwan","taiwan","temple"],trees:{perStop:10,along:110,coast:["palm","banyan"],inland:["banyan","bamboo","cedar"],pine:["#35574a","#426552","#2e4c42"],colors:["#5d8a3e","#6f9a48","#4f7d38","#8aa84e","#a8b85a","#b8743a","#7a9a42"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(25,55,65,.11)",i.lineWidth=e/180,i.lineCap="round";let t=6,n=4,r=e/n,a=e/t*.22;for(let s=0;s<=t;s++){let o=s*e/t,c=s%2*r/2;i.beginPath();for(let l=-r;l<=e+r;l+=2){let h=o-Math.sin((l-c)/r*Math.PI*2)*a;l===-r?i.moveTo(l,h):i.lineTo(l,h)}i.stroke();for(let l=-1;l<=n;l++){let h=c+l*r+r*.25,u=o-a;i.beginPath(),i.arc(h+a*.35,u+a*.35,a*.45,Math.PI*1.1,Math.PI*2.4),i.stroke()}}}};var hd={"japan-washi":ym,"china-ink":_m,"vietnam-lantern":Mm,"thailand-gold":Em,"indonesia-rainforest":Tm,"malaysia-peranakan":Sm,"korea-hanji":wm,"europe-atlas":Am,"taiwan-formosa":Rm};function Vs(i,e,t=0,n=0,r=0){let a=new te(i,e);return a.position.set(t,n,r),a.castShadow=a.receiveShadow=!0,a}var ud=(i,e=14)=>new _i(i.map(([t,n])=>new ce(t,n)),e),Cm=i=>()=>(i=i*16807%2147483647)/2147483647,Pm={karst(i,e=7){let t=new ue,n=Cm(e),r=["#8fa58a","#7d9879","#a3b59a","#6f8a6c"];for(let a=0;a<9;a++){let s=.5+n()*.7,o=.16+n()*.12,c=n()*6.28,l=n()*.9;t.add(Vs(ud([[o,0],[o*.92,s*.55],[o*.75,s*.85],[o*.4,s*.98],[0,s]]),i(r[a%r.length]),Math.cos(c)*l*1.3,0,Math.sin(c)*l))}return t},terraces(i){let e=new ue,t=["#9cbf6a","#b4d07e","#8bb35c","#c6dc93"];for(let n=0;n<7;n++){let r=1.3-n*.16,a=new Fe;a.absarc(0,0,r,.15*Math.PI,.85*Math.PI,!1),a.absarc(0,0,r-.14,.85*Math.PI,.15*Math.PI,!0);let s=new Dt(a,{depth:.06,bevelEnabled:!1,curveSegments:18});s.rotateX(-Math.PI/2),e.add(Vs(s,i(t[n%t.length]),0,n*.06,.5))}return e},volcano(i){let e=new ue;return e.add(Vs(ud([[1.2,0],[.9,.18],[.5,.55],[.22,.85],[.16,.86],[.12,.8]],24),i("#8a7a6a"))),e.add(Vs(ud([[.32,.72],[.22,.85],[.16,.86],[.12,.8]],24),i("#f4f1ea"))),e},dunes(i,e=3){let t=new ue,n=Cm(e),r=["#e8cf96","#e0c283","#edd8a8"];for(let a=0;a<6;a++){let s=new Zt(1,20,10,0,Math.PI*2,0,Math.PI/2);s.scale(.55+n()*.45,.1+n()*.12,.18+n()*.12),s.rotateY((n()-.5)*.5),t.add(Vs(s,i(r[a%r.length]),(n()-.5)*1.4,0,(a-2.5)*.24))}return t}};var xt=(i,e,t)=>new Et(i,e,t);function ye(i,e,t=0,n=0,r=0,a=0){let s=new te(i,e);return s.position.set(t,n,r),s.rotation.y=a,s.castShadow=s.receiveShadow=!0,s}function Sv(i){let e=new ue,t=i("#8c4b2f"),n=i("#efe6d4"),r=i("#5a4c43"),a=i("#c9a14a",null,{metalness:.4,roughness:.5}),s=0;e.add(ye(xt(.46,.06,.46),i("#bfb3a0"),0,.03)),s=.06;for(let o=0;o<5;o++){let c=.3-o*.03,l=.15;e.add(ye(xt(c,l,c),n,0,s+l/2)),e.add(ye(xt(c+.02,.025,c+.02),t,0,s+l-.01));let h=new Cn((c+.24)*.82,.1,4,1);h.rotateY(Math.PI/4),e.add(ye(h,r,0,s+l+.035)),s+=l+.06}e.add(ye(new Me(.012,.012,.32,6),a,0,s+.16));for(let o=0;o<6;o++)e.add(ye(new Me(.03,.03,.012,10),a,0,s+.04+o*.04));return e}function wv(i,e=1){let t=new ue,n=i("#c8321e"),r=i("#2a2522"),a=new Me(.018*e,.022*e,.32*e,8);return t.add(ye(a,n,-.11*e,.16*e),ye(a,n,.11*e,.16*e)),t.add(ye(xt(.3*e,.03*e,.035*e),n,0,.26*e)),t.add(ye(xt(.38*e,.03*e,.045*e),r,0,.33*e)),t.add(ye(xt(.34*e,.025*e,.04*e),n,0,.305*e)),t}function Av(i){let e=new ue,t=11;for(let n=0;n<t;n++){let r=n/(t-1),a=Math.sin(r*Math.PI*1.6)*.32,s=r*1.5,o=wv(i,1.25);o.position.set(a,0,s),o.rotation.y=Math.cos(r*Math.PI*1.6)*.6,e.add(o)}return e}function Rv(i,e=2.4){let t=new ue,n=i("#f2efe8"),r=i("#d9d4ca"),a=i("#bcb6aa"),s=24,o=c=>[(c-.5)*e,.22+Math.exp(-((c-.62)**2)/.006)*.16,Math.sin(c*Math.PI)*.18];for(let c=0;c<s;c++){let l=c/(s-1),[h,u,d]=o(l),[p,f]=o((c+1)/(s-1)),b=ye(xt(e/s+.01,.035,.11),n,h,u,d);b.rotation.z=Math.atan2(f-u,p-h),t.add(b),c%2===0&&t.add(ye(new Me(.018,.024,u,6),r,h,u/2,d)),t.add(ye(xt(e/s,.02,.012),a,h,u+.03,d+.05))}return t}function Cv(i){let e=new ue,t=i("#f4f1ea"),n=i("#e6e2da"),r=i("#a8825a"),a=1.6,s=20,o=u=>[(u-.5)*a,.14+Math.sin(u*Math.PI)*.06];for(let u=0;u<s;u++){let d=u/(s-1),[p,f]=o(d),[b,g]=o((u+1)/(s-1)),x=ye(xt(a/s+.01,.025,.1),t,p,f,0);x.rotation.z=Math.atan2(g-f,b-p),e.add(x)}let c=.42,l=[c-.16,.95],h=new te(new Me(.018,.05,.9,6),t);h.position.set(c-.08,.5,.06),h.rotation.z=.17,h.castShadow=!0,e.add(h),e.add(ye(xt(.16,.08,.16),t,c,.04,.06));for(let u=0;u<9;u++){let[d,p]=o(.08+u*.06),f=new E(l[0],l[1]-u*.025,.06),b=new E(d,p+.012,0),g=new te(new Me(.003,.003,f.distanceTo(b),4),n);g.position.copy(f).add(b).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new E(0,1,0),b.clone().sub(f).normalize()),e.add(g)}return[-1,1].forEach(u=>{for(let d=0;d<4;d++)e.add(ye(new Me(.012,.012,.16,5),r,u*(a/2+.05+d*.1),.06,0));e.add(ye(xt(.42,.02,.12),r,u*(a/2+.2),.14,0))}),e}function Im(i,e=["#7a5a43"]){let t=new ue,n=1.6,r=[0,.36,.78,1.25],a=s=>.42*Math.pow(1-s/n,1.6)+.02;for(let s=0;s<16;s++){let o=s/16*n,c=(s+1)/16*n,l=i(e[s%e.length]);if([[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,u])=>{let d=new E(h*a(o),o,u*a(o)),p=new E(h*a(c),c,u*a(c)),f=new te(new Me(.012,.016,d.distanceTo(p),5),l);f.position.copy(d).add(p).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new E(0,1,0),p.clone().sub(d).normalize()),f.castShadow=!0,t.add(f)}),s%2===0){let h=a(o)*2;[[0,1],[0,-1],[1,0],[-1,0]].forEach(([u,d])=>t.add(ye(xt(u?.008:h,.008,d?.008:h),l,u*a(o),o+.02,d*a(o))))}}return r.slice(1).forEach((s,o)=>t.add(ye(xt(a(s)*2.4,.025,a(s)*2.4),i(e[o%e.length]),0,s))),t.add(ye(new Me(.004,.01,.3,5),i("#d8dcd8"),0,n+.15)),t}function Lm(i,e="#c0392b"){let t=new ue,n=i(e),r=i("#8a8f8c"),a=2.4,s=.62,o=.62,c=.16;t.add(ye(xt(a,.03,.1),r,0,c,0)),[-s,s].forEach(h=>{[-.06,.06].forEach(u=>t.add(ye(xt(.035,o,.03),n,h,o/2,u))),[.32,.5,o-.02].forEach(u=>t.add(ye(xt(.03,.03,.15),n,h,u,0)))});let l=h=>{let u=Math.abs(h);return u<=s?c+.06+(o-c-.06)*(u/s)**2:o-(u-s)/(a/2-s)*(o-c-.02)};return[-.06,.06].forEach(h=>{for(let u=0;u<40;u++){let d=-a/2+u/40*a,p=-a/2+(u+1)/40*a,f=new E(d,l(d),h),b=new E(p,l(p),h),g=new te(new Me(.006,.006,f.distanceTo(b),4),n);g.position.copy(f).add(b).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new E(0,1,0),b.clone().sub(f).normalize()),t.add(g),u%2===0&&l(d)>c+.03&&t.add(ye(new Me(.002,.002,l(d)-c,3),n,d,(l(d)+c)/2,h))}}),t}function Pv(i){let e=new ue,t=i("#7f9c95"),n=i("#5d7a74"),r=i("#9fb3ad");e.add(ye(xt(.34,.36,.34),r,0,.18)),e.add(ye(new Me(.15,.2,.14,4,1).rotateY(Math.PI/4),n,0,.43));let a=.5;for(let s=0;s<8;s++){let o=new Me(.17,.12,.16,4,1);o.rotateY(Math.PI/4),e.add(ye(o,s%2?t:n,0,a+.08)),a+=.165}return e.add(ye(new Me(.06,.1,.12,4).rotateY(Math.PI/4),n,0,a+.06)),e.add(ye(new Me(.008,.02,.4,6),i("#d8dcd8"),0,a+.32)),e}var vt=(i,e,t)=>new E(i,e,t),Pn=(i,e,t)=>vt(Math.cos(e)*i,t,Math.sin(e)*i);function Tt(i,e,t,n=.006,r=4){let a=new te(new Me(n,n,e.distanceTo(t),r),i);return a.position.copy(e).add(t).multiplyScalar(.5),a.quaternion.setFromUnitVectors(vt(0,1,0),t.clone().sub(e).normalize()),a}function Tn(i){i.updateMatrixWorld(!0);let e=new Map,t=new ue;return i.traverse(n=>{if(!n.isMesh)return;let r=n.material.color.getHex()+"|"+n.material.opacity;e.has(r)||e.set(r,[n.material,[]]),e.get(r)[1].push((n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrixWorld))}),e.forEach(([n,r])=>{let a=new te(Mi(r),n);a.castShadow=a.receiveShadow=!0,t.add(a),r.forEach(s=>s.dispose())}),t}function Dm(i,{H:e=1.8,r0:t=.26,r1:n=.13,turn:r=2.3,n:a=24,col:s="#e2e4e1",cross:o=!1,core:c="#b9c1c6",deck:l=null,mast:h=.5}={}){let u=new ue,d=i(s),p=b=>Pn(t,0,0).lerp(Pn(n,r,e),b).setY(0).length(),f=9;for(let b=0;b<=1;b+=.02)f=Math.min(f,p(b));(o?[1,-1]:[1]).forEach(b=>{for(let g=0;g<a;g++){let x=g/a*Math.PI*2;u.add(Tt(d,Pn(t,x,0),Pn(n,x+b*r,e),.008))}});for(let b=1;b<14;b++)u.add(ye(new pn(p(b/14),.005,4,40).rotateX(Math.PI/2),d,0,b/14*e));return u.add(ye(new Me(f*.6,f*.7,e,12),i(c),0,e/2)),l?u.add(ye(new Me(n*1.05,n*.9,.09,24),i(l),0,e-.05),ye(new Me(n*.5,n*1.1,.04,24),i(l),0,e+.02)):u.add(ye(new pn(n,.012,4,40).rotateX(Math.PI/2),d,0,e)),u.add(ye(new Me(.006,.022,h,6),i("#d8dcd8"),0,e+h/2)),Tn(u)}function Iv(i){let e=new ue,t=i("#eceeed"),n=1.05,r=.4,a=s=>s<r?.05+.2*((r-s)/r)**1.8:.05+.09*((s-r)/(n-r))**1.5;for(let s=0;s<3;s++)for(let o of[-.2,.2]){let c=s/3*Math.PI*2+o;for(let l=0;l<12;l++){let h=l/12*n,u=(l+1)/12*n;e.add(Tt(t,Pn(a(h),c,h),Pn(a(u),c,u),.011,5))}}return e.add(ye(new pn(a(r)+.006,.01,4,24).rotateX(Math.PI/2),t,0,r),ye(new Me(.032,.032,n,8),t,0,n/2),ye(new Me(.28,.3,.03,24),i("#b9b4aa"),0,.015)),e.add(ye(new Me(.17,.13,.05,28),i("#8fa3ad"),0,n),ye(new Me(.23,.17,.04,28),t,0,n+.045),ye(new pn(.24,.008,4,40).rotateX(Math.PI/2),t,0,n+.03),ye(new Me(.04,.2,.06,28),i("#d9d6cf"),0,n+.095),ye(new Me(.004,.01,.28,6),t,0,n+.26)),Tn(e)}function Lv(i){let e=new ue,t=i("#dfe7ec"),n=i("#7d97a8"),r=1.9,a=10,s=12,o=Math.PI/a,c=l=>.16*(1-l/r)**1.1+.05;for(let l=0;l<s;l++){let h=l/s*r,u=(l+1)/s*r,d=l%2*o;for(let p=0;p<a;p++){let f=p/a*Math.PI*2+d;e.add(Tt(t,Pn(c(h),f,h),Pn(c(u),f+o,u),.005),Tt(t,Pn(c(h),f,h),Pn(c(u),f-o,u),.005))}e.add(ye(new pn(c(u),.004,3,30).rotateX(Math.PI/2),t,0,u))}for(let l=0;l<3;l++){let h=l/3*Math.PI*2+Math.PI/2;e.add(Tt(t,Pn(.26,h,0),Pn(c(.4),h,.4),.018,5))}return e.add(ye(new Me(c(r)*.7,c(0)*.5,r,12),i("#cdd7dd"),0,r/2)),[[.55,.06,.08],[.71,.035,.05]].forEach(([l,h,u])=>e.add(ye(new Me(c(l*r)+h,c(l*r)+h*.6,u,24),n,0,l*r))),e.add(ye(new Me(.008,.03,.36,8),t,0,r+.18)),Tn(e)}function Um(i,{col:e="#7f868b",pylon:t="#cbbd9f",span:n=1.6,len:r=2.6}={}){let a=new ue,s=i(e),o=.16,c=n/2,l=16,h=d=>.02+.35*(1-(d/c)**2),u=d=>.18+.25*(1-(d/c)**2);[-.07,.07].forEach(d=>{for(let p=0;p<l;p++){let f=-c+p/l*n,b=-c+(p+1)/l*n;a.add(Tt(s,vt(f,h(f),d),vt(b,h(b),d),.012),Tt(s,vt(f,u(f),d),vt(b,u(b),d),.01),Tt(s,vt(f,h(f),d),vt(f,u(f),d),.006),Tt(s,vt(f,h(f),d),vt(b,u(b),d),.005)),h(f)>o+.02&&a.add(Tt(s,vt(f,h(f),d),vt(f,o,d),.003))}a.add(Tt(s,vt(c,h(c),d),vt(c,u(c),d),.006))});for(let d=0;d<=l;d+=2){let p=-c+d/l*n;a.add(Tt(s,vt(p,u(p),-.07),vt(p,u(p),.07),.005))}return a.add(ye(xt(r,.03,.16),i("#8f9290"),0,o,0)),[-1,1].forEach(d=>{t&&[-.11,.11].forEach(p=>a.add(ye(xt(.1,.3,.06),i(t),d*(c+.06),.15,p)));for(let p=c+.2;p<r/2;p+=.14)a.add(ye(xt(.03,o,.1),i("#cfc9bd"),d*p,o/2,0))}),Tn(a)}function Dv(i,{col:e="#c0392b",spans:t=10,sw:n=.24,h:r=.09}={}){let a=new ue,s=i(e),o=i("#cfc9bd"),c=.1,l=t*n;for(let h=0;h<=t;h++)a.add(ye(new Me(.02,.026,c,6),o,-l/2+h*n,c/2,0));for(let h=0;h<t;h++){let u=-l/2+h*n;[-.045,.045].forEach(d=>{for(let p=0;p<4;p++){let f=vt(u+(p+.5)/4*n,c+r,d);a.add(Tt(s,vt(u+p/4*n,c,d),f,.004),Tt(s,f,vt(u+(p+1)/4*n,c,d),.004))}a.add(Tt(s,vt(u,c,d),vt(u+n,c,d),.005),Tt(s,vt(u+n/8,c+r,d),vt(u+n*7/8,c+r,d),.005))});for(let d=0;d<4;d++){let p=u+(d+.5)/4*n;a.add(Tt(s,vt(p,c+r,-.045),vt(p,c+r,.045),.003))}}return a.add(ye(xt(l,.012,.09),i("#8f9290"),0,c,0)),Tn(a)}function Uv(i){let e=new ue,t=i("#cdbf9f"),n=i("#5f6b70"),r=i("#6d9fc1"),a=.3,s=.62,o=.12,c=.65;return e.add(ye(xt(2*(a+c)+.1,.03,.14),i("#8f9290"),0,o,0)),[-a,a].forEach(l=>{e.add(ye(xt(.16,s,.16),t,l,s/2+.02,0),ye(xt(.22,.06,.24),t,l,.03,0)),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,u])=>e.add(ye(new Me(.022,.022,s+.06,8),t,l+h*.08,(s+.06)/2+.02,u*.08),ye(new Cn(.03,.09,8),n,l+h*.08,s+.125,u*.08))),e.add(ye(new Cn(.1,.16,4).rotateY(Math.PI/4),n,l,s+.1,0))}),[-.05,.05].forEach(l=>e.add(ye(xt(a*2-.16,.05,.035),r,0,s-.06,l))),[-1,1].forEach(l=>{e.add(ye(xt(.06,.14,.16),t,l*(a+c),o+.05,0)),[-.06,.06].forEach(h=>{let u=vt(l*a,s-.12,h);for(let d=1;d<=10;d++){let p=d/10,f=l*(a+p*c),b=(s-.12)*(1-p)+(o+.1)*p-Math.sin(p*Math.PI)*.1,g=vt(f,b,h);e.add(Tt(r,u,g,.009)),d<10&&e.add(Tt(r,g,vt(f,o,h),.003)),u=g}})}),Tn(e)}function Nv(i){let e=new ue,t=new ue,n=new ue,r=i("#7a3b2a"),a=i("#e9e2d2");t.add(ye(new Me(.15,.18,.3,8),i("#8a4b38"),0,.15),ye(new Me(.1,.15,.5,8),i("#3f3b36"),0,.55),ye(new Me(.21,.21,.015,8),r,0,.32),ye(new Zt(.11,10,6,0,Math.PI*2,0,Math.PI/2).scale(1,.8,1.25),i("#5a5048"),0,.8));for(let c=0;c<4;c++){let l=new ue;l.add(ye(xt(.018,.62,.012),r,0,.32),ye(xt(.1,.5,.004),a,.06,.36));for(let h=0;h<8;h++)l.add(ye(xt(.11,.006,.008),r,.06,.1+h*.07));l.rotation.z=c*Math.PI/2,n.add(l)}let s=new ue,o=Tn(n);return s.position.set(0,.83,.15),s.rotation.x=-.12,s.add(o),e.add(Tn(t),s),e.userData.spin=o,e}function Ov(i){let e=new ue,t=i("#f3f1ec"),n=16,r=.62,a=s=>s<.74?.08+.26*((.74-s)/.74)**1.5:.08+.09*((s-.74)/.26)**1.4;for(let s=0;s<n;s++){let o=s/n*Math.PI*2;for(let c=0;c<10;c++)e.add(Tt(t,Pn(a(c/10),o,c/10*r),Pn(a((c+1)/10),o,(c+1)/10*r),.02,5))}return e.add(ye(new _i(Array.from({length:11},(s,o)=>new ce(a(o/10)*.94,o/10*r*.96)),32),i("#86a9c7",null,{transparent:!0,opacity:.75,side:ot}))),e.add(ye(new Me(.34,.36,.03,32),i("#d9d4ca"),0,.015),ye(new Oi(.4,.62,40).rotateX(-Math.PI/2),i("#5d8fb0"),0,.006)),Tn(e)}function kv(i){let e=new ue,t=i("#a3a6a2"),n=.62,r=.5,a=30,s=c=>.26+.04*Math.cos(2*c),o=(c,l,h)=>vt(Math.cos(c)*n*l,h,Math.sin(c)*r*l);for(let c=0;c<a;c++){let l=c/a*Math.PI*2;[.55,-.55,.9].forEach(h=>e.add(Tt(t,o(l,.92,0),o(l+h,1,s(l+h)),.009))),e.add(Tt(t,o(l,1,s(l)),o(l+.7,.62,s(l+.7)+.02),.008),Tt(t,o(l,1,s(l)),o(l-.4,.62,s(l-.4)+.02),.008))}for(let c=0;c<48;c++){let l=c/48*Math.PI*2,h=(c+1)/48*Math.PI*2;e.add(Tt(t,o(l,1,s(l)),o(h,1,s(h)),.01),Tt(t,o(l,.62,s(l)+.02),o(h,.62,s(h)+.02),.008))}return e.add(ye(new Me(1,.86,1,40,1,!0).scale(n*.9,.24,r*.9),i("#b4412f",null,{side:ot}),0,.12)),e.add(ye(new Me(1,1,.01,40).scale(n*.5,1,r*.5),i("#6f9a55"),0,.01)),Tn(e)}var Yc={pagoda:Sv,"torii-row":Av,bridge:Rv,"cable-bridge":i=>Tn(Cv(i)),taipei101:Pv,...Pm,"lattice-tower":i=>Tn(Im(i)),"lattice-tower-red":i=>Tn(Im(i,["#d2452c","#f2efe8"])),"suspension-bridge":i=>Tn(Lm(i)),"suspension-bridge-grey":i=>Tn(Lm(i,"#8c949a")),"canton-tower":i=>Dm(i),"kobe-port-tower":i=>Dm(i,{H:.95,r0:.2,r1:.17,turn:2,n:16,col:"#c7352b",cross:!0,core:"#efe9df",deck:"#f1ede4",mast:.12}),needle:Iv,skytree:Lv,"arch-bridge":i=>Um(i),"arch-bridge-green":i=>Um(i,{col:"#6f7f76",pylon:null}),"truss-bridge-red":i=>Dv(i),"tower-bridge":Uv,windmill:Nv,crown:Ov,"birds-nest":kv};var Ws=(i,e)=>Array.from({length:i},(t,n)=>e(n/i*Math.PI*2)),ja=(i,e,t=0)=>[[t-i,0],[t+i,0],[t+i,e],[t-i,e]];function Hv(i,e,t,n,r,a){let o=[],c=[];for(let l=0;l<=9;l++){let h=l/9,u=i+Math.cos(t)*n*h,d=e+Math.sin(t)*n*h-a*h*h,p=r*Math.sin(Math.PI*Math.min(1,h*1.15)),f=-Math.sin(t),b=Math.cos(t);o.push([u+f*p,d+b*p]),c.push([u-f*p,d-b*p])}return o.concat(c.reverse())}var dd={maple:[Ws(26,i=>{i=-Math.PI/2+.12+i*(1-.24/6.283);let e=.8+.2*Math.abs(Math.cos(i*3.5));return[Math.cos(i)*e,1.05+Math.sin(i)*e*.92]}).concat([[-.08,.3],[-.08,0],[.08,0],[.08,.3]])],pine:[[[-.09,0],[.09,0],[.09,.22],[.95,.22],[.42,.72],[.75,.68],[.3,1.18],[.52,1.14],[0,1.75],[-.52,1.14],[-.3,1.18],[-.75,.68],[-.42,.72],[-.95,.22],[-.09,.22]]],cedar:[[[-.07,0],[.07,0],[.07,.18],[.46,.18],[.22,.62],[.38,.6],[.16,1.08],[.28,1.06],[0,1.95],[-.28,1.06],[-.16,1.08],[-.38,.6],[-.22,.62],[-.46,.18],[-.07,.18]]],cherry:[Ws(28,i=>{let e=.78+.13*Math.abs(Math.cos(i*3));return[Math.cos(i)*e*1.2,1+Math.sin(i)*e*.72]}),ja(.08,.5)],ginkgo:[Ws(24,i=>[Math.cos(i)*.62,1.12+Math.sin(i)*.78+(Math.sin(i)>0?.08*Math.sin(i):0)]),ja(.07,.5)],willow:[[[-.07,0],[.07,0],[.07,.45],...Array.from({length:9},(i,e)=>{let t=.1+e/8*.78;return[t,(e%2?.42:.72)+t*.3]}),...Array.from({length:17},(i,e)=>{let t=e/16*Math.PI;return[Math.cos(t)*.88,1.15+Math.sin(t)*.55]}),...Array.from({length:9},(i,e)=>{let t=-.88+e/8*.78;return[t,(e%2?.42:.72)-t*.3]}),[-.07,.45]]],palm:[[[-.05,0],[.06,0],[.2,.8],[.22,1.5],[.15,1.5],[.12,.8]],...[2.75,2.25,1.8,1.35,.85,.35].map((i,e)=>Hv(.18,1.5,i,.72+e%2*.14,.09,.42))],bamboo:[...[[-.35,1.6],[-.1,1.85],[.18,1.7],[.4,1.45]].flatMap(([i,e])=>[ja(.035,e,i),Ws(14,t=>[i+Math.cos(t)*.22,e-.12+Math.sin(t)*.3])])],banyan:[Ws(28,i=>{let e=1+.08*Math.cos(i*6);return[Math.cos(i)*e*1.05,1.15+Math.sin(i)*e*.42]}),[[-.13,0],[.13,0],[.1,.9],[-.1,.9]],ja(.025,.85,-.55),ja(.025,.85,.5),ja(.02,.85,.3)]},Nm={maple:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b"],pine:["#3d5a3b","#4b6a45","#33503a"],cedar:["#2f4a35","#3a5a3e","#29412f"],cherry:["#f2c4c9","#ebb0b8","#f6d6d8"],ginkgo:["#e8b923","#d9a31a","#f0c94a"],willow:["#7f9a4a","#8fae5a","#6c8a3f"],palm:["#3f7a3a","#4c8a40","#356b35"],bamboo:["#5e8f3e","#6fa34a","#4f7d36"],banyan:["#3d6b3a","#4a7a42","#335c33"]};var Re=(i,e,t)=>new Et(i,e,t);function _e(i,e,t=0,n=0,r=0){let a=new te(i,e);return a.position.set(t,n,r),a.castShadow=a.receiveShadow=!0,a}function yr(i,e,t,n,r){let a=new Fe([new ce(-i/2,0),new ce(i/2,0),new ce(0,e)]),s=new Dt(a,{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),_e(s,n,0,r)}function Kc(i,e,t,n,r,a=0){let s=new ue,o=new Cn(Math.SQRT1_2,1,4,1);if(o.rotateY(Math.PI/4),o.scale(i,e,t),o.translate(0,e/2,0),s.add(_e(o,n)),a){let c=new Me(Math.SQRT1_2*.9,Math.SQRT1_2,1,4,1);c.rotateY(Math.PI/4),c.scale(i+a,e*.18,t+a),s.add(_e(c,n,0,e*.05))}return s.position.y=r,s}var Ut=(i,e)=>i[Math.floor(e()*i.length)%i.length],Fv="#f3f1eb",Sn=(i,e,t)=>i(e.snow?Fv:t);function pd(i,e,t,n,r,a,s,o){let c=t/2,l=Math.atan2(n,c),h=Math.hypot(c,n)+s,u=.03;[-1,1].forEach(d=>{let p=_e(Re(h,u,r+o*2),e);p.rotation.z=-d*l,p.position.set(d*(Math.cos(l)*h/2+Math.sin(l)*u/2),a+n-Math.sin(l)*h/2+Math.cos(l)*u/2,0),i.add(p)}),i.add(_e(Re(.045,.03,r+o*2+.01),e,0,a+n+u*.8))}function Om(i,e,t,n,r,a,s,o,c,l){let h=new ue,u=n/3,d=Math.hypot(u,r)*.92,p=Math.atan2(r,u);(o?[-n/6,n/6]:[-n/2,-n/6,n/6,n/2]).forEach(f=>h.add(_e(Re(.022,r,.012),e,f,a+r/2))),c&&o===0?h.add(_e(Re(.09,.19,.014),e,0,a+.095)):h.add(_e(Re(.08,.12,.014),t,0,a+r*.55)),[-1,1].forEach(f=>{let b=l()>.6;[1,-1].forEach((g,x)=>{if(b&&x)return;let v=_e(Re(d,.016,.012),e,f*u,a+r/2);v.rotation.z=g*f*p,h.add(v)})}),h.rotation.y=o,o?h.position.x=s:h.position.z=s,i.add(h)}function Yr(i,e,t,n,r,a,s=0,o=null){let c=new ue;return c.add(_e(Re(.07,.1,.012),e)),c.add(_e(Re(.03,.1,.014),i,-.052)),c.add(_e(Re(.03,.1,.014),i,.052)),c.add(_e(Re(.1,.012,.024),t,0,-.056,.006)),o!==null?(c.position.set(o,r,a),c.rotation.y=Math.sign(o)*Math.PI/2):(c.position.set(n,r,a),c.rotation.y=s),c}var Zc={machiya(i,e,t={}){let n=new ue,r=.9,a=.7;return n.add(_e(Re(r,.5,a),i(Ut(["#efe6d4","#e8dcc4","#d9c3a0"],e)),0,.25)),n.add(_e(Re(r+.02,.1,a+.02),i("#7a5034"),0,.42)),n.add(yr(r+.2,.38,a+.18,Sn(i,t,Ut(["#4a4642","#57524c","#3e3b38"],e)),.5)),n},hanok(i,e,t={}){let n=new ue;return n.add(_e(Re(1,.12,.7),i("#c9c2b4"),0,.06)),n.add(_e(Re(.86,.38,.56),i(Ut(["#efe7d6","#e6dac2"],e)),0,.31)),n.add(Kc(1.25,.42,.9,Sn(i,t,"#4d4f52"),.5,.12)),n},china(i,e,t={}){let n=new ue,r=i("#f1eee6"),a=i("#2f3236"),s=t.snow?Sn(i,t):a,o=.8,c=.9;return n.add(_e(Re(o,.7,c),r,0,.35)),n.add(yr(o-.05,.22,c-.02,s,.7)),[-1,1].forEach(l=>{[[.92,.9],[.58,1.02],[.24,1.14]].forEach(([h,u])=>{n.add(_e(Re(.08,u,h*c),r,l*(o/2+.02),u/2)),n.add(_e(Re(.12,.05,h*c+.02),s,l*(o/2+.02),u))})}),n},shophouse(i,e,t={}){let n=new ue,r=["#f4c7b8","#bfe0d2","#f6e3a1","#c9d8f0","#f2d2dc","#e9c46a"];for(let a=0;a<3;a++){let s=(a-1)*.42;n.add(_e(Re(.4,.8,.9),i(Ut(r,e)),s,.4)),n.add(_e(Re(.22,.2,.02),i("#5a7a6a"),s,.58,.46)),n.add(_e(Re(.22,.28,.02),i("#6b4b3a"),s,.16,.46))}return n.add(yr(.62,.26,1.32,Sn(i,t,"#b5533c"),.8).rotateY(Math.PI/2)),n},stilt(i,e,t={}){let n=new ue,r=i("#8a6040");return[[-.32,-.25],[.32,-.25],[-.32,.25],[.32,.25]].forEach(([a,s])=>n.add(_e(new Me(.035,.035,.36,6),r,a,.18,s))),n.add(_e(Re(.8,.06,.66),r,0,.38)),n.add(_e(Re(.7,.3,.56),i(Ut(["#c9a36e","#b98d58"],e)),0,.56)),n.add(yr(1,.55,.8,Sn(i,t,Ut(["#a8864f","#9b7a45","#b39256"],e)),.7)),n},thai(i,e,t={}){let n=new ue,r=i("#d4a62a",null,{metalness:.4,roughness:.45});return n.add(_e(Re(.6,.45,.95),i("#f3ede1"),0,.225)),n.add(yr(.86,.42,1.1,Sn(i,t,"#a8322a"),.45)),n.add(yr(.64,.36,.9,Sn(i,t,"#2f6b4a"),.68)),[-1,1].forEach(a=>n.add(_e(new Cn(.03,.2,5),r,0,1.08,a*.45))),n},taiwan(i,e){let t=new ue,n=["#e9e4da","#d8d2c6","#cfc6b4","#e2d7c3","#bfc4c0"];for(let r=0;r<3;r++){let a=(r-1)*.36,s=.55+e()*.45;t.add(_e(Re(.34,s,.8),i(Ut(n,e)),a,s/2)),t.add(_e(Re(.26,.06,.02),i("#6b7b7e"),a,s*.6,.41)),e()>.35&&t.add(_e(new Me(.06,.06,.1,10),i(Ut(["#e8eef0","#c9d6dc","#d9c8a8"],e)),a+.06,s+.05,-.15))}return t.add(_e(Re(1.1,.14,.08),i("#8a8f8c"),0,.14,.44)),t},bali(i,e,t={}){let n=new ue,r=3+Math.floor(e()*3);n.add(_e(Re(.5,.25,.5),i("#8d8574"),0,.125)),n.add(_e(Re(.18,.25,.18),i("#5b4a3a"),0,.37));for(let a=0;a<r;a++)n.add(Kc(.72-a*.1,.16,.72-a*.1,Sn(i,t,"#3a3029"),.48+a*.13));return n},timber(i,e,t={}){let n=new ue,r=e()>.5?3:2,a=.6,s=.72,o=.3,c=i(Ut(["#f3ead8","#efe2c6","#f4ecdc","#ece0c8"],e)),l=i(Ut(["#4a3324","#3e2b1f","#5a3d28"],e)),h=i("#46525c"),u=Ut(["#a8452e","#b5533c","#9a3f2c"],e);n.add(_e(Re(a+.04,.08,s+.04),i("#b9ad98"),0,.04));let d=.08,p=a,f=s;for(let g=0;g<r;g++)p=a+g*.035,f=s+g*.03,n.add(_e(Re(p,o,f),c,0,d+o/2)),n.add(_e(Re(p+.012,.024,f+.012),l,0,d+o-.012)),[-1,1].forEach(x=>Om(n,l,h,p,o,d,x*(f/2+.004),0,g===0,e)),[-1,1].forEach(x=>Om(n,l,h,f,o,d,x*(p/2+.004),Math.PI/2,!1,e)),d+=o;let b=.56;return n.add(yr(p,b,f,c,d)),[-1,1].forEach(g=>{let x=g*(f/2+.005);n.add(_e(Re(.022,b*.9,.012),l,0,d+b*.45,x)),n.add(_e(Re(p*.62,.02,.012),l,0,d+b*.38,x)),n.add(_e(Re(.07,.09,.012),h,.075,d+b*.2,x+g*.002)),n.add(_e(Re(.07,.09,.012),h,-.075,d+b*.2,x+g*.002))}),pd(n,Sn(i,t,u),p,b,f,d,.08,.06),e()>.4&&n.add(_e(Re(.07,.16,.07),i("#8a6a55"),p*.22,d+b*.62,-f*.2)),n},terracotta(i,e,t={}){let n=new ue,r=.82,a=.66,s=.6,o=Ut(["#dca36a","#e2b07a","#d4925a","#e8bd88"],e),c=Ut(["#c0643a","#b8582f","#cc7347"],e),l=i(Ut(["#4f6b4a","#5c7a52","#46624a"],e)),h=i("#3e4a52"),u=i("#efe6d6");if(n.add(_e(Re(r,s,a),i(o),0,s/2)),n.add(_e(Re(r+.01,.05,a+.01),u,0,s-.025)),n.add(Kc(r+.1,.17,a+.1,Sn(i,t,c),s,.05)),[-1,1].forEach(d=>{[-.22,.22].forEach(p=>n.add(Yr(l,h,u,p,.43,d*(a/2+.006),d>0?0:Math.PI))),d>0&&(n.add(Yr(l,h,u,.22,.17,a/2+.006,0)),n.add(_e(Re(.1,.2,.014),i("#6b4a32"),-.18,.1,a/2+.006)))}),[-1,1].forEach(d=>n.add(Yr(l,h,u,0,.43,0,0,d*(r/2+.006)))),e()>.35){let b=r/2+.2-.02;n.add(_e(Re(.4,.38,.48),i(Ut(["#e6b984","#d89c62","#eec596"],e)),b,.38/2,-.04)),n.add(Kc(.4+.08,.12,.48+.08,Sn(i,t,c),.38,.04).translateX(b).translateZ(-.04)),n.add(Yr(l,h,u,b+.04,.2,-.04+.48/2+.006,0))}return e()>.5&&n.add(_e(Re(.08,.14,.08),i(o),-r*.28,s+.12,-a*.18)),n},chalet(i,e,t={}){let n=new ue,r=.86,a=.76,s=.3,o=.32,c=i(Ut(["#a39d92","#9a948a","#b0aa9e"],e)),l=i(Ut(["#8a5a36","#7a4e2e","#9a6a40"],e)),h=i("#c8a070"),u=i("#4a3426"),d=i("#3e4a52"),p=i(Ut(["#4f6b4a","#a8452e","#5c7a52"],e)),f=Ut(["#c83a3a","#d8506a","#e07a3a"],e),b=i("#e8dcc6");n.add(_e(Re(r+.02,s,a+.02),c,0,s/2)),n.add(_e(Re(r,o,a),l,0,s+o/2));for(let m=1;m<4;m++)n.add(_e(Re(r+.006,.008,a+.006),u,0,s+m*o/4));let g=s+o,x=.27;n.add(yr(r,x,a,l,g)),pd(n,Sn(i,t,Ut(["#5a4a40","#4e4038","#665247"],e)),r,x,a,g,.2,.2),[-1,1].forEach(m=>{let y=m*(a/2+.006);n.add(_e(Re(r*.96,.022,.014),h,0,g+.012,y)),[-.09,.09].forEach(M=>n.add(_e(Re(.06,.08,.014),d,M,g+.09,y)))});let v=a/2+.006;[-.26,.26].forEach(m=>n.add(Yr(p,d,b,m,.16,v+.01,0))),n.add(_e(Re(.11,.2,.014),u,0,.1,v+.01)),[-.26,0,.26].forEach(m=>n.add(Yr(p,d,b,m,s+.17,v,0))),n.add(_e(Re(r*.94,.024,.13),h,0,s+.02,v+.065)),n.add(_e(Re(r*.94,.075,.014),h,0,s+.07,v+.125));for(let m=-5;m<=5;m++)n.add(_e(Re(.006,.06,.016),u,m*r*.085,s+.07,v+.128));return t.snow?n.add(_e(Re(r*.9,.028,.032),h,0,s+.12,v+.12)):(n.add(_e(Re(r*.9,.028,.032),i("#6b8a3f"),0,s+.12,v+.12)),n.add(_e(Re(r*.88,.02,.028),i(f),0,s+.143,v+.12))),[-1,1].forEach(m=>[-.18,.18].forEach(y=>n.add(Yr(p,d,b,0,s+.17,y,0,m*(r/2+.006))))),n},temple(i,e,t={}){let n=new ue,r=.96,a=.62,s=.4,o=i("#b8352a"),c=Ut(["#b84a2a","#a8432a","#c0522e"],e),l=i("#d9b04a"),h=i(Ut(["#ece3d0","#e6dcc6"],e)),u=i("#b5553a"),d=i("#a39e94");n.add(_e(Re(r+.2,.07,a+.36),d,0,.035,.08)),n.add(_e(Re(.36,.035,.1),d,0,.018,a/2+.31)),n.add(_e(Re(r,s,a),h,0,.07+s/2)),[-1,1].forEach(v=>n.add(_e(Re(.2,s,a+.01),u,v*(r/2-.1),.07+s/2))),n.add(_e(Re(.3,.3,.014),o,0,.07+.15,a/2+.007));for(let v=0;v<3;v++)for(let m=-2;m<=2;m++)m&&n.add(_e(Re(.014,.014,.01),l,m*.032,.07+.08+v*.08,a/2+.016));[-.3,-.12,.12,.3].forEach(v=>n.add(_e(new Me(.022,.026,s,10),o,v,.07+s/2,a/2+.16)));let p=new ue;p.rotation.y=Math.PI/2,n.add(p);let f=Sn(i,t,c);pd(p,f,a+.04,.3,r,.07+s,.12,.1);let b=_e(Re(r*.8,.026,.26),f,0,.07+s+.005,a/2+.15);b.rotation.x=.28,n.add(b);let g=.07+s+.3+.045,x=r+.24;return n.add(_e(Re(x,.05,.05),Sn(i,t,"#9a3a24"),0,g,0)),[-1,1].forEach(v=>[-1,1].forEach(m=>{let y=_e(Re(.16,.026,.022),Sn(i,t,"#9a3a24"),v*(x/2+.05),g+.04,m*.018);y.rotation.z=v*.7,y.rotation.y=m*.25,n.add(y)})),t.snow||["#3f8a6a","#e0b13a","#3c6aa8","#e0b13a","#3f8a6a"].forEach((v,m)=>n.add(_e(Re(.05,.03,.03),i(v),(m-2)*.17,g+.04,0))),n.add(_e(new Zt(.035,10,8),l,0,g+.08,0)),n}};var Jc=class extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Ud(t)})}load(e,t,n,r){let a=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=br.extractUrlBase(e);s=br.resolveURL(l,this.path)}else s=br.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Hs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let a,s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zm){try{s[nt.KHR_BINARY_GLTF]=new Nd(e)}catch(u){r&&r(u);return}a=JSON.parse(s[nt.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Gd(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:s[u]=new vd;break;case nt.KHR_DRACO_MESH_COMPRESSION:s[u]=new Od(a,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:s[u]=new kd;break;case nt.KHR_MESH_QUANTIZATION:s[u]=new Hd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,a){n.parse(e,t,r,a)})}};function Bv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bd=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],l,h=new me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],mn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Xr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new za(h),l.distance=u;break;case"spot":l=new Pc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},vd=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let r=[];e.color=new me(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],mn),e.opacity=s[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",a.baseColorTexture,Ct))}return Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}},yd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){let o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(a)}},_d=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=r.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}},Md=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}},Ed=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=r.extensions[this.name];if(s.sheenColorFactor!==void 0){let o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],mn)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Ct)),s.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}},Td=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}},Sd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let o=s.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(o[0],o[1],o[2],mn),Promise.all(a)}},wd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}},Ad=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));let o=s.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(o[0],o[1],o[2],mn),s.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Ct)),Promise.all(a)}},Rd=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}},Cd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}},Pd=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}},Id=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],o=r.images[s.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ld=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],o=r.images[s.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dd=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},Ud=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,o=[],c={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let f of u){let b=new Ae,g=new E,x=new dn,v=new E(1,1,1),m=new En(f.geometry,f.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&x.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),m.setMatrixAt(y,b.compose(g,x,v));for(let y in c)if(y==="_COLOR_0"){let M=c[y];m.instanceColor=new Br(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&f.geometry.setAttribute(y,c[y]);ut.prototype.copy.call(m,f),this.parser.assignFinalMaterial(m),p.push(m)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},zm="glTF",js=12,km={JSON:1313821514,BIN:5130562},Nd=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-js,a=new DataView(e,js),s=0;for(;s<r;){let o=a.getUint32(s,!0);s+=4;let c=a.getUint32(s,!0);if(s+=4,c===km.JSON){let l=new Uint8Array(e,js+s,o);this.content=n.decode(l)}else if(c===km.BIN){let l=js+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Od=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(let h in s){let u=Bd[h]||h.toLowerCase();o[u]=s[h]}for(let h in e.attributes){let u=Bd[h]||h.toLowerCase();if(s[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Xa[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let f in p.attributes){let b=p.attributes[f],g=c[f];g!==void 0&&(b.normalized=g)}u(p)},o,l,mn,d)})})}},kd=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Hd=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},Qc=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let s=0;s!==r;s++)t[s]=n[a+s];return t}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=r-t,u=(n-t)/h,d=u*u,p=d*u,f=e*l,b=f-l,g=-2*p+3*d,x=p-d,v=1-g,m=x-d+u;for(let y=0;y!==o;y++){let M=s[b+y+o],_=s[b+y+c]*h,T=s[f+y+o],S=s[f+y]*h;a[y]=v*M+m*_+g*T+x*S}return a}},zv=new dn,Fd=class extends Qc{interpolate_(e,t,n,r){let a=super.interpolate_(e,t,n,r);return zv.fromArray(a).normalize().toArray(a),a}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hm={9728:on,9729:On,9984:Ju,9985:vs,9986:wa,9987:Di},Fm={33071:kr,33648:Es,10497:_n},fd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gv={CUBICSPLINE:void 0,LINEAR:Ua,STEP:Da},md={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yu})),i.DefaultMaterial}function Kr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wv(i,e,t){let n=!1,r=!1,a=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(i);let s=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;s.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(a){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function jv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xv(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gd(t.attributes):e=i.indices+":"+gd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+gd(i.targets[n]);return e}function gd(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Yv=new Ae,Gd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,a=!1,s=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,s=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||a&&s<98?this.textureLoader=new Rc(this.options.manager):this.textureLoader=new Ic(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:n,userData:{}};return Kr(a,o,r),Gi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let s=t[r].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),a=(s,o)=>{let c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(let[l,h]of s.children.entries())a(h,o.children[l])};return a(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&n.push(a)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,s){n.load(br.resolveURL(t.uri,r.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let s=fd[r.type],o=Xa[r.componentType],c=r.normalized===!0,l=new o(r.count*s);return Promise.resolve(new bt(l,s,c))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(s){let o=s[0],c=fd[r.type],l=Xa[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,f=r.normalized===!0,b,g;if(p&&p!==u){let x=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count,m=t.cache.get(v);m||(b=new l(o,x*p,r.count*p/h),m=new Cs(b,p/h),t.cache.add(v,m)),g=new Ps(m,c,d%p/h,f)}else o===null?b=new l(r.count*c):b=new l(o,d,r.count*c),g=new bt(b,c,f);if(r.sparse!==void 0){let x=fd.SCALAR,v=Xa[r.sparse.indices.componentType],m=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,M=new v(s[1],m,r.sparse.count*x),_=new l(s[2],y,r.sparse.count*c);o!==null&&(g=new bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,S=M.length;T<S;T++){let w=M[T];if(g.setX(w,_[T*c]),c>=2&&g.setY(w,_[T*c+1]),c>=3&&g.setZ(w,_[T*c+2]),c>=4&&g.setW(w,_[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=f}return g})}loadTexture(e){let t=this.json,n=this.options,a=t.textures[e].source,s=t.images[a],o=this.textureLoader;if(s.uri){let c=n.manager.getHandler(s.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){let r=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(a.samplers||{})[s.sampler]||{};return h.magFilter=Hm[d.magFilter]||On,h.minFilter=Hm[d.minFilter]||Di,h.wrapS=Fm[d.wrapS]||_n,h.wrapT=Fm[d.wrapT]||_n,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==On,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let s=r.images[e],o=self.URL||self.webkitURL,c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=n.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(b){let g=new $t(b);g.needsUpdate=!0,d(g)}),t.load(br.resolveURL(u,a.path),f,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Gi(u,s),u.userData.mimeType=s.mimeType||qv(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let a=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),a.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=a.associations.get(s);s=a.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new zr,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Yn,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||a||s){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return fn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,a=n.materials[e],s,o={},c=a.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=r[nt.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{let u=a.pbrMetallicRoughness||{};if(o.color=new me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],mn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ct)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=ot);let h=a.alphaMode||md.OPAQUE;if(h===md.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===md.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==cn&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ce(1,1),a.normalTexture.scale!==void 0)){let u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==cn&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==cn){let u=a.emissiveFactor;o.emissive=new me().setRGB(u[0],u[1],u[2],mn)}return a.emissiveTexture!==void 0&&s!==cn&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Ct)),Promise.all(l).then(function(){let u=new s(o);return a.name&&(u.name=a.name),Gi(u,a),t.associations.set(u,{materials:e}),a.extensions&&Kr(r,u,a),u})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function a(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Bm(c,o,t)})}let s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Xv(l),u=r[h];if(u)s.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Bm(new He,l,t),r[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){let t=this,n=this.json,r=this.extensions,a=n.meshes[e],s=a.primitives,o=[];for(let c=0,l=s.length;c<l;c++){let h=s[c].material===void 0?Vv(this.cache):this.getDependency("material",s[c].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let b=h[p],g=s[p],x,v=l[p];if(g.mode===Jn.TRIANGLES||g.mode===Jn.TRIANGLE_STRIP||g.mode===Jn.TRIANGLE_FAN||g.mode===void 0)x=a.isSkinnedMesh===!0?new dc(b,v):new te(b,v),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),g.mode===Jn.TRIANGLE_STRIP?x.geometry=ld(x.geometry,Fc):g.mode===Jn.TRIANGLE_FAN&&(x.geometry=ld(x.geometry,zs));else if(g.mode===Jn.LINES)x=new fr(b,v);else if(g.mode===Jn.LINE_STRIP)x=new Ni(b,v);else if(g.mode===Jn.LINE_LOOP)x=new gc(b,v);else if(g.mode===Jn.POINTS)x=new Fa(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&jv(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Gi(x,a),g.extensions&&Kr(r,x,g),t.assignFinalMaterial(x),u.push(x)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&Kr(r,u[0],a),u[0];let d=new ue;a.extensions&&Kr(r,d,a),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(zc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new dr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,a=t.joints.length;r<a;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let a=r.pop(),s=r,o=[],c=[];for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u){o.push(u);let d=new Ae;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pc(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,s=[],o=[],c=[],l=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],f=r.samplers[p.sampler],b=p.target,g=b.node,x=r.parameters!==void 0?r.parameters[f.input]:f.input,v=r.parameters!==void 0?r.parameters[f.output]:f.output;b.node!==void 0&&(s.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",x)),c.push(this.getDependency("accessor",v)),l.push(f),h.push(b))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],b=u[3],g=u[4],x=[];for(let v=0,m=d.length;v<m;v++){let y=d[v],M=p[v],_=f[v],T=b[v],S=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let w=n._createAnimationTracks(y,M,_,T,S);if(w)for(let P=0;P<w.length;P++)x.push(w[P])}return new Ac(a,void 0,x)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){let s=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),s})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],a=n._loadNodeShallow(e),s=[],o=r.children||[];for(let l=0,h=o.length;l<h;l++)s.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(s),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Yv)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],s=a.name?r.createUniqueName(a.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new Is:l.length>1?h=new ue:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=s),Gi(h,a),a.extensions&&Kr(n,h,a),a.matrix!==void 0){let u=new Ae;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,a=new ue;n.name&&(a.name=r.createUniqueName(n.name)),Gi(a,n),n.extensions&&Kr(t,a,n);let s=n.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(r.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof Rn||d instanceof $t)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=l(a),a})}_createAnimationTracks(e,t,n,r,a){let s=[],o=e.name?e.name:e.uuid,c=[];_r[a.path]===_r.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(_r[a.path]){case _r.weights:l=Hi;break;case _r.rotation:l=Fi;break;case _r.position:case _r.scale:l=Bi;break;default:n.itemSize===1?l=Hi:l=Bi;break}let h=r.interpolation!==void 0?Gv[r.interpolation]:Ua,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let f=new l(c[d]+"."+_r[a.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),s.push(f)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zd(t.constructor),r=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)r[a]=t[a]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Fi?Fd:Qc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Kv(i,e,t){let n=e.attributes,r=new en;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),o.normalized){let h=zd(Xa[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new E,c=new E;for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let b=zd(Xa[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let s=new An;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=s}function Bm(i,e,t){let n=e.attributes,r=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){i.setAttribute(o,c)})}for(let s in n){let o=Bd[s]||s.toLowerCase();o in i.attributes||r.push(a(n[s],o))}if(e.indices!==void 0&&!i.index){let s=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(s)}return $e.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Gi(i,e),Kv(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Wv(i,e.targets,t):i})}var Gm=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?e:i,a,s=WebAssembly.instantiate(o(r),{}).then(function(x){a=x.instance,a.exports.__wasm_call_ctors()});function o(x){for(var v=new Uint8Array(x.length),m=0;m<x.length;++m){var y=x.charCodeAt(m);v[m]=y>96?y-97:y>64?y-39:y+4}for(var M=0,m=0;m<x.length;++m)v[M++]=v[m]<60?n[v[m]]:(v[m]-60)*64+v[++m];return v.buffer.slice(0,M)}function c(x,v,m,y,M,_){var T=a.exports.sbrk,S=m+3&-4,w=T(S*y),P=T(M.length),I=new Uint8Array(a.exports.memory.buffer);I.set(M,P);var U=x(w,m,y,P,M.length);if(U==0&&_&&_(w,S,y),v.set(I.subarray(w,w+m*y)),T(w-T(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(x){var v={object:new Worker(x),pending:0,requests:{}};return v.object.onmessage=function(m){var y=m.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function f(x){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(r))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),m=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(m),M=0;M<x;++M)u[M]=p(y);URL.revokeObjectURL(y)}function b(x,v,m,y,M){for(var _=u[0],T=1;T<u.length;++T)u[T].pending<_.pending&&(_=u[T]);return new Promise(function(S,w){var P=new Uint8Array(m),I=d++;_.pending+=x,_.requests[I]={resolve:S,reject:w},_.object.postMessage({id:I,count:x,size:v,source:P,mode:y,filter:M},[P.buffer])})}function g(x){s.then(function(){var v=x.data;try{var m=new Uint8Array(v.count*v.size);c(a.exports[v.mode],m,v.count,v.size,v.source,a.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:m},[m.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:s,supported:!0,useWorkers:function(x){f(x)},decodeVertexBuffer:function(x,v,m,y,M){c(a.exports.meshopt_decodeVertexBuffer,x,v,m,y,a.exports[l[M]])},decodeIndexBuffer:function(x,v,m,y){c(a.exports.meshopt_decodeIndexBuffer,x,v,m,y)},decodeIndexSequence:function(x,v,m,y){c(a.exports.meshopt_decodeIndexSequence,x,v,m,y)},decodeGltfBuffer:function(x,v,m,y,M,_){c(a.exports[h[M]],x,v,m,y,a.exports[l[_]])},decodeGltfBufferAsync:function(x,v,m,y,M){return u.length>0?b(x,v,m,h[y],l[M]):s.then(function(){var _=new Uint8Array(x*v);return c(a.exports[h[y]],_,x,v,m,a.exports[l[M]]),_})}}})();var Xs={\u65E5\u672C:{houses:["machiya"],robe:.3,robeColors:["#b8342a","#2f4a6b","#7a5a8c","#d98c5f","#3d5a3b","#e6c9a8"],note:"\u548C\u670D\u591A\u898B\u65BC\u4EAC\u90FD\u7B49\u89C0\u5149\u5340\uFF0C\u8207\u65E5\u5E38\u670D\u6DF7\u5408"},\u97D3\u570B:{houses:["hanok"],robe:.12,trees:{low:["pine","maple","ginkgo"],high:["pine"]},robeColors:["#d94f6a","#f2c14e","#4f8fbf","#7fbf8f"],note:"\u97D3\u670D\u591A\u898B\u65BC\u5BAE\u6BBF\u5468\u908A"},\u53F0\u7063:{houses:["taiwan"],robe:0,trees:{low:["banyan","bamboo","palm"],high:["cedar","pine"]},note:"\u539F\u4F4F\u6C11\u65CF\u4EBA\u7269\u898B kit/peoples.json\uFF08\u793A\u610F\uFF09"},\u4E2D\u570B:{houses:["china"],robe:0,trees:{low:["willow","pine","bamboo"],high:["pine"]}},\u9999\u6E2F:{houses:["taiwan"],robe:0},\u6FB3\u9580:{houses:["shophouse"],robe:0},\u8D8A\u5357:{houses:["shophouse","stilt"],robe:.12,robeColors:["#f4efe6","#c0392b","#f2c14e","#7fb3d5"],note:"\u5967\u9EDB"},\u6CF0\u570B:{houses:["thai","stilt"],robe:0},\u67EC\u57D4\u5BE8:{houses:["stilt"],robe:0},\u5BEE\u570B:{houses:["stilt"],robe:0},\u7DEC\u7538:{houses:["stilt"],robe:0},\u99AC\u4F86\u897F\u4E9E:{houses:["shophouse"],robe:0},\u65B0\u52A0\u5761:{houses:["shophouse"],robe:0},\u6C76\u840A:{houses:["shophouse"],robe:0},\u5370\u5C3C:{houses:["bali","stilt"],robe:0},\u83F2\u5F8B\u8CD3:{houses:["stilt"],robe:0},\u5FB7\u570B:{houses:["timber","chalet"],robe:0},\u6377\u514B:{houses:["timber","chalet"],robe:0},\u5967\u5730\u5229:{houses:["timber","chalet"],robe:0},\u745E\u58EB:{houses:["chalet","timber"],robe:0},\u6CD5\u570B:{houses:["timber","terracotta"],robe:0},\u7FA9\u5927\u5229:{houses:["terracotta"],robe:0},\u897F\u73ED\u7259:{houses:["terracotta"],robe:0},\u8461\u8404\u7259:{houses:["terracotta"],robe:0},\u8377\u862D:{houses:["timber"],robe:0},\u6BD4\u5229\u6642:{houses:["timber"],robe:0},\u82F1\u570B:{houses:["timber"],robe:0}},qs=["#f2efe8","#2f4a6b","#c8a46a","#8c9a8a","#d9d4ca","#3a3633","#b56a4a","#6f8fb0","#e8c9b0"],$c=new Set(["\u53F0\u5317","\u9AD8\u96C4","\u53F0\u4E2D","\u6771\u4EAC","\u5927\u962A","\u4EAC\u90FD","\u540D\u53E4\u5C4B","\u798F\u5CA1","\u9996\u723E","\u91DC\u5C71","\u4E0A\u6D77","\u5317\u4EAC","\u9999\u6E2F","\u5EE3\u5DDE","\u6DF1\u5733","\u66FC\u8C37","\u6CB3\u5167","\u80E1\u5FD7\u660E\u5E02","\u5409\u9686\u5761","\u65B0\u52A0\u5761","\u99AC\u5C3C\u62C9","\u96C5\u52A0\u9054"]);function Vd(i,e=.95){let t=[];if(i.forEach(r=>{r.updateMatrixWorld(!0),r.traverse(a=>{if(!a.isMesh)return;let s=a.geometry.clone().applyMatrix4(a.matrixWorld);s.index&&(s=s.toNonIndexed()),["uv","uv1","uv2"].forEach(h=>s.deleteAttribute(h)),s.clearGroups();let o=(Array.isArray(a.material)?a.material[0]:a.material).color,c=s.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l.set([o.r,o.g,o.b],h*3);s.setAttribute("color",new bt(l,3)),t.push(s)})}),!t.length)return null;let n=new te(Mi(t),new fn({vertexColors:!0,roughness:e,metalness:0}));return n.castShadow=n.receiveShadow=!0,n}function Vm(i){let e=[0];for(let t=1;t<i.length;t++)e.push(e[t-1]+Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]));return{pts:i,acc:e,len:e[e.length-1],at(t){t=(t%this.len+this.len)%this.len;let n=1;for(;n<e.length-1&&e[n]<t;)n++;let r=(t-e[n-1])/(e[n]-e[n-1]||1),a=i[n-1],s=i[n];return[a[0]+(s[0]-a[0])*r,a[1]+(s[1]-a[1])*r,Math.atan2(s[0]-a[0],s[1]-a[1])]}}}function Wm({scene:i,J:e,T:t,mat:n,groundY:r,onLand:a,R:s,H:o,avoid:c,focus:l=[],snowAt:h=()=>!1}){let u=(F,K)=>{let oe=null,Z=1e9;return e.cities.forEach(C=>{let R=Math.hypot(C.xy[0]-F,C.xy[1]-K);R<Z&&(Z=R,oe=C.country)}),oe},d=F=>Math.min(...F.filter((K,oe)=>oe%3===0).map(([K,oe])=>Math.min(...l.map(Z=>Math.hypot(Z[0]-K,Z[1]-oe)))));function p(F,K,oe){let Z=[],C=[],R=0;F.forEach(N=>{let L=[];for(let O=1;O<N.length;O++){let[A,k]=N[O-1],[B,ne]=N[O],G=Math.max(1,Math.ceil(Math.hypot(B-A,ne-k)/.12));for(let ae=O===1?0:1;ae<=G;ae++)L.push([A+(B-A)*ae/G,k+(ne-k)*ae/G])}if(!(L.length<2)){L.forEach(([O,A],k)=>{let[B,ne]=L[Math.max(0,k-1)],[G,ae]=L[Math.min(L.length-1,k+1)],se=G-B,le=ae-ne,ve=Math.hypot(se,le)||1,be=-le/ve*K/2,Te=se/ve*K/2,Ie=r(O,A)+oe;Z.push(O+be,Ie,-(A+Te),O-be,Ie,-(A-Te))});for(let O=0;O<L.length-1;O++){let A=R+O*2;C.push(A,A+1,A+2,A+1,A+3,A+2)}R+=L.length*2}});let H=new He;return H.setAttribute("position",new Ce(Z,3)),H.setIndex(C),H.computeVertexNormals(),H}let f=F=>F.filter(K=>K.t!=="F").map(K=>K.pts.filter(([oe,Z])=>a(oe,Z))).filter(K=>K.length>1),b=f(e.roads.filter(F=>F.t==="H")),g=f(e.roads.filter(F=>F.t!=="H")),x=f(e.rail);[[g,.026,.006,t.road||"#e9dfc9"],[b,.042,.008,t.highway||"#cdb88f"],[x,.018,.01,t.rail||"#5a4c43"]].forEach(([F,K,oe,Z])=>{if(!F.length)return;let C=new te(p(F,K,oe),n(Z));C.receiveShadow=!0,i.add(C)});let v=[],m=[];e.cities.forEach(F=>{let K=Xs[F.country];if(!K||!a(...F.xy))return;let oe=$c.has(F.name),Z=oe?18:9,C=oe?1.1:.7;for(let H=0,N=0;H<Z*4&&N<Z;H++){let L=s()*6.28,O=.12+Math.sqrt(s())*C,A=F.xy[0]+Math.cos(L)*O,k=F.xy[1]+Math.sin(L)*O;if(!a(A,k)||c(A,k))continue;let B=Zc[K.houses[s()*K.houses.length|0]](n,s,{snow:h(A,k)});B.position.set(A,r(A,k),-k),B.rotation.y=s()*6.28,B.scale.setScalar(.13+s()*.06),v.push(B),N++}let R=oe?26:14;for(let H=0;H<R;H++){let N=s()*6.28,L=Math.sqrt(s())*C*.9,O=F.xy[0]+Math.cos(N)*L,A=F.xy[1]+Math.sin(N)*L;if(!a(O,A))continue;let k=s()<(K.robe||0);m.push({x:O,y:A,dir:s()*6.28,len:.15+s()*.35,sp:.04+s()*.05,ph:s()*10,robe:k,sc:k?.15+s()*.07:.085+s()*.02,col:k?K.robeColors[s()*K.robeColors.length|0]:qs[s()*qs.length|0]})}}),e.stops.forEach(F=>{if(F.air)return;let K=Xs[u(...F.xy)];if(K)for(let oe=0;oe<10;oe++){let Z=s()*6.28,C=.55+s()*.9,R=F.xy[0]+Math.cos(Z)*C,H=F.xy[1]+Math.sin(Z)*C;if(!a(R,H)||c(R,H))continue;let N=s()<Math.min(.6,(K.robe||0)*2);m.push({x:R,y:H,dir:s()*6.28,len:.12+s()*.25,sp:.03+s()*.04,ph:s()*10,robe:N,sc:N?.15+s()*.07:.085+s()*.02,col:N?K.robeColors[s()*K.robeColors.length|0]:qs[s()*qs.length|0]})}}),(e.peoples||[]).forEach(F=>{for(let K=0;K<10;K++){let oe=s()*6.28,Z=Math.sqrt(s())*.4,C=F.xy[0]+Math.cos(oe)*Z,R=F.xy[1]+Math.sin(oe)*Z;a(C,R)&&m.push({x:C,y:R,dir:s()*6.28,len:.1+s()*.25,sp:.03+s()*.04,ph:s()*10,robe:!0,sc:.16+s()*.05,col:F.colors[K%F.colors.length]})}}),(e.canoes||[]).forEach(([F,K])=>{let oe=0;for(let Z=0;Z<400&&oe<4;Z++){let C=s()*6.28,R=.35+s()*.5,H=F+Math.cos(C)*R,N=K+Math.sin(C)*R;if(a(H,N))continue;let L=new ue,O=new Zt(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);O.scale(.09,.07,.42),L.add(new te(O,n("#f4f1ea")));let A=new te(new Et(.185,.02,.7),n("#b8342a"));A.position.y=-.01,L.add(A),[-1,1].forEach(k=>{let B=new te(new Cn(.03,.22,6),n("#2a2522"));B.position.set(0,.07,k*.4),B.rotation.x=-k*.5,L.add(B)}),L.position.set(H,.07,-N),L.rotation.y=s()*6.28,v.push(L),oe++}});let y=Vd(v);y&&i.add(y);function M(F){let K=[],oe=F?new Me(.16,.3,.75,8):new Me(.17,.2,.42,8);if(oe.translate(0,F?.375:.55,0),K.push([oe,"#ffffff"]),!F){let R=new Me(.15,.12,.34,8);R.translate(0,.17,0),K.push([R,"#3a3633"])}let Z=new Zt(.2,10,8);Z.translate(0,.95,0),K.push([Z,"#e8c9a8"]);let C=new Zt(.21,10,6,0,Math.PI*2,0,Math.PI*.55);return C.translate(0,.98,0),K.push([C,"#2a2420"]),Mi(K.map(([R,H])=>{R=R.index?R.toNonIndexed():R,R.deleteAttribute("uv");let N=new me(H),L=R.attributes.position.count,O=new Float32Array(L*3);for(let A=0;A<L;A++)O.set([N.r,N.g,N.b],A*3);return R.setAttribute("color",new bt(O,3)),R}))}let _=[!0,!1].map(F=>{let K=m.filter(Z=>Z.robe===F);if(!K.length)return null;let oe=new En(M(F),new fn({vertexColors:!0,roughness:.9}),K.length);return K.forEach((Z,C)=>oe.setColorAt(C,new me(Z.col))),oe.castShadow=!0,i.add(oe),{m:oe,list:K,robe:F}}).filter(Boolean),T=[...b.map(F=>[F,1.6]),...g.map(F=>[F,3.2])].map(([F,K])=>[Vm(F),K]).filter(([F])=>F.len>.6),S=[];T.forEach(([F,K])=>{let oe=Math.min(14,Math.floor(F.len/K));for(let Z=0;Z<oe;Z++)S.push({p:F,s:s()*F.len,sp:(.18+s()*.2)*(s()<.5?1:-1),side:0})}),S.forEach(F=>{F.side=F.sp>0?.01:-.01});let w=S.length?new En(new Et(.022,.016,.044),n("#fff"),S.length):null;if(w){let F=["#c8321e","#f4f1ea","#2f5f8a","#e0a43c","#3d5a3b","#2a2522","#f4f1ea","#9aa3a8"];S.forEach((K,oe)=>w.setColorAt(oe,new me(F[oe%F.length]))),w.castShadow=!0,i.add(w)}let P=x.map(Vm).filter(F=>F.len>1.5).map(F=>[F,l.length?d(F.pts):0]).sort((F,K)=>F[1]-K[1]).slice(0,80).map(([F])=>F).map(F=>({p:F,s:s()*F.len,sp:(.45+s()*.3)*(s()<.5?1:-1)})),I=5,U=P.length?new En(new Et(.03,.026,.07),n(t.train||"#f2efe8"),P.length*I):null;U&&(U.castShadow=!0,i.add(U));let z=(()=>{let F=new _i([[0,-.62],[.05,-.52],[.11,-.32],[.155,-.08],[.16,.12],[.13,.34],[.085,.48],[.045,.56],[.03,.66],[0,.7]].map(([B,ne])=>new ce(B,ne)),18);F.rotateX(Math.PI/2),F.scale(1,.86,1);let K=(B,ne)=>{let G=new Dt(new Fe(B.map(([ae,se])=>new ce(ae,se))),{depth:ne,bevelEnabled:!1});return G.translate(0,0,-ne/2),G},oe=K([[-.12,0],[.1,0],[-.08,.2]],.025);oe.rotateY(-Math.PI/2),oe.translate(0,.12,-.02);let Z=K([[0,.05],[.26,-.08],[.2,.02],[0,-.02],[-.2,.02],[-.26,-.08]],.02);Z.rotateX(Math.PI/2),Z.translate(0,0,-.62);let C=B=>{let ne=K([[0,0],[.18,-.06],[.03,-.05]],.015);return ne.rotateX(Math.PI/2),ne.rotateY(B>0?.6:Math.PI-.6),ne.translate(B*.12,-.07,.18),ne},R=[F,oe,Z,C(1),C(-1)].map(B=>(B=B.index?B.toNonIndexed():B,B.deleteAttribute("uv"),B)),H=Mi(R),N=H.attributes.position,L=new Float32Array(N.count*3),O=new me("#556d86"),A=new me("#e3e9ec"),k=new me;for(let B=0;B<N.count;B++)k.lerpColors(A,O,zc.smoothstep(N.getY(B),-.06,.05)),L.set([k.r,k.g,k.b],B*3);return H.setAttribute("color",new bt(L,3)),H})(),V=[0,1,2].map(()=>{let F=new te(z,new fn({vertexColors:!0,roughness:.55,metalness:0}));return F.castShadow=!0,F.visible=!1,i.add(F),F}),Q=[0,1,2,3,4,5].map(()=>{let F=new te(new Oi(.6,.75,32),new cn({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));return F.rotation.x=-Math.PI/2,F.visible=!1,i.add(F),F}),$=null,W=new Set;function Y(F,K,oe){W.has(F)||(W.add(F),$={t0:performance.now(),at:K.clone(),dir:oe.clone().setY(0).normalize()})}let ee=new ut;function ie(F,K,oe){if(_.forEach(({m:Z,list:C,robe:R})=>{let H=oe<(R?42:26);Z.visible=H,H&&(C.forEach((N,L)=>{let O=K/1e3*N.sp*6+N.ph,A=(Math.sin(O/6)+1)/2*N.len,k=N.x+Math.cos(N.dir)*A,B=N.y+Math.sin(N.dir)*A,ne=Math.cos(O/6)>=0?1:-1;ee.position.set(k,r(k,B)+Math.abs(Math.sin(O*1.6))*.01*N.sc/.1,-B),ee.rotation.set(0,Math.atan2(Math.cos(N.dir)*ne,-Math.sin(N.dir)*ne),Math.sin(O*1.6)*.07),ee.scale.setScalar(N.sc),ee.updateMatrix(),Z.setMatrixAt(L,ee.matrix)}),Z.instanceMatrix.needsUpdate=!0)}),w&&(w.visible=oe<60,w.visible&&(S.forEach((Z,C)=>{Z.s+=Z.sp*F;let[R,H,N]=Z.p.at(Z.s),L=Math.cos(N)*Z.side,O=-Math.sin(N)*Z.side;ee.position.set(R+L,r(R,H)+.02,-(H+O)),ee.rotation.set(0,Math.PI-N,0),ee.scale.setScalar(1),ee.updateMatrix(),w.setMatrixAt(C,ee.matrix)}),w.instanceMatrix.needsUpdate=!0)),U&&(U.visible=oe<80,U.visible&&(P.forEach((Z,C)=>{Z.s+=Z.sp*F;for(let R=0;R<I;R++){let[H,N,L]=Z.p.at(Z.s-Math.sign(Z.sp)*R*.075);ee.position.set(H,r(H,N)+.025,-N),ee.rotation.set(0,Math.PI-L,0),ee.updateMatrix(),U.setMatrixAt(C*I+R,ee.matrix)}}),U.instanceMatrix.needsUpdate=!0)),V.forEach(Z=>{Z.visible=!1}),Q.forEach(Z=>{Z.visible=!1}),$){let Z=(K-$.t0)/1e3,C=2.1,R=1.4,H=3.2,N=4.6;[[0,0],[.38,1],[.75,-.9]].forEach(([L,O],A)=>{let k=(Z-L)/C,B=V[A];if(k<-.05||k>1.05)return;let ne=Math.min(1,Math.max(0,k)),G=new E(-$.dir.z,0,$.dir.x).multiplyScalar(O*1.2),ae=$.at.clone().add(G),se=ae.clone().addScaledVector($.dir,(ne-.5)*N);se.y=-.6+H*Math.sin(Math.PI*ne);let le=$.dir.clone().multiplyScalar(N).setY(H*Math.PI*Math.cos(Math.PI*ne));B.position.copy(se),B.visible=k>0&&k<1,B.scale.setScalar(R),B.lookAt(se.clone().add(le)),[[.06,0],[.94,1]].forEach(([ve,be])=>{let Te=Q[A*2+be],Ie=(k-ve)*C;Ie<0||Ie>1.1||(Te.visible=!0,Te.position.copy(ae).addScaledVector($.dir,(ve-.5)*N).setY(.05),Te.scale.setScalar(.5+Ie*2.4),Te.material.opacity=.8*(1-Ie/1.1))})}),Z>4.2&&($=null)}}return{update:ie,dolphinJump:Y,audit:()=>({houses:v.map(F=>[F.position.x,-F.position.z,F.scale.x]),people:m.map(F=>[F.x,F.y,F.robe?1:0,F.sc]),cars:S.map(F=>F.p.at(F.s).slice(0,2)),trains:P.map(F=>F.p.at(F.s).slice(0,2)),dolphin:{len:1.32*1.4,rise:3.2,sink:.6}}),stats:{houses:v.length,people:m.length,cars:S.length,trains:P.length}}}var Ys={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ae},cameraProjectionMatrixInverse:{value:new Ae},cameraWorldMatrix:{value:new Ae},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new E(-1,-1,-1)},sceneBoxMax:{value:new E(1,1,1)}},vertexShader:`

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
		}`},Ks={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},el={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function jm(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Zv(e),n=t.length,r=new Uint8Array(n*4);for(let s=0;s<n;++s){let o=t[s],c=2*Math.PI*o/n,l=new E(Math.cos(c),Math.sin(c),0).normalize();r[s*4]=(l.x*.5+.5)*255,r[s*4+1]=(l.y*.5+.5)*255,r[s*4+2]=127,r[s*4+3]=255}let a=new pr(r,e,e);return a.wrapS=_n,a.wrapT=_n,a.needsUpdate=!0,a}function Zv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),r=Math.floor(e/2),a=e-1;for(let s=1;s<=t;){if(r===-1&&a===e?(a=e-2,r=0):(a===e&&(a=0),r<0&&(r=e-1)),n[r*e+a]!==0){a-=2,r++;continue}else n[r*e+a]=s++;a++,r--}return n}var Zs={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Wd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new Ae},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Wd(i,e,t){let n=Jv(i,e,t),r="vec3[SAMPLES](";for(let a=0;a<i;a++){let s=n[a];r+=`vec3(${s.x}, ${s.y}, ${s.z})${a<i-1?",":")"}`}return r}function Jv(i,e,t){let n=[];for(let r=0;r<i;r++){let a=2*Math.PI*e*r/i,s=Math.pow(r/(i-1),t);n.push(new E(Math.cos(a),Math.sin(a),s))}return n}var tl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,a){return e[0]*t+e[1]*n+e[2]*r+e[3]*a}noise(e,t){let n,r,a,s=.5*(Math.sqrt(3)-1),o=(e+t)*s,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,p=l-u,f=e-d,b=t-p,g,x;f>b?(g=1,x=0):(g=0,x=1);let v=f-g+h,m=b-x+h,y=f-1+2*h,M=b-1+2*h,_=c&255,T=l&255,S=this.perm[_+this.perm[T]]%12,w=this.perm[_+g+this.perm[T+x]]%12,P=this.perm[_+1+this.perm[T+1]]%12,I=.5-f*f-b*b;I<0?n=0:(I*=I,n=I*I*this.dot(this.grad3[S],f,b));let U=.5-v*v-m*m;U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[w],v,m));let z=.5-y*y-M*M;return z<0?a=0:(z*=z,a=z*z*this.dot(this.grad3[P],y,M)),70*(n+r+a)}noise3d(e,t,n){let r,a,s,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),p=1/6,f=(h+u+d)*p,b=h-f,g=u-f,x=d-f,v=e-b,m=t-g,y=n-x,M,_,T,S,w,P;v>=m?m>=y?(M=1,_=0,T=0,S=1,w=1,P=0):v>=y?(M=1,_=0,T=0,S=1,w=0,P=1):(M=0,_=0,T=1,S=1,w=0,P=1):m<y?(M=0,_=0,T=1,S=0,w=1,P=1):v<y?(M=0,_=1,T=0,S=0,w=1,P=1):(M=0,_=1,T=0,S=1,w=1,P=0);let I=v-M+p,U=m-_+p,z=y-T+p,V=v-S+2*p,Q=m-w+2*p,$=y-P+2*p,W=v-1+3*p,Y=m-1+3*p,ee=y-1+3*p,ie=h&255,X=u&255,F=d&255,K=this.perm[ie+this.perm[X+this.perm[F]]]%12,oe=this.perm[ie+M+this.perm[X+_+this.perm[F+T]]]%12,Z=this.perm[ie+S+this.perm[X+w+this.perm[F+P]]]%12,C=this.perm[ie+1+this.perm[X+1+this.perm[F+1]]]%12,R=.6-v*v-m*m-y*y;R<0?r=0:(R*=R,r=R*R*this.dot3(this.grad3[K],v,m,y));let H=.6-I*I-U*U-z*z;H<0?a=0:(H*=H,a=H*H*this.dot3(this.grad3[oe],I,U,z));let N=.6-V*V-Q*Q-$*$;N<0?s=0:(N*=N,s=N*N*this.dot3(this.grad3[Z],V,Q,$));let L=.6-W*W-Y*Y-ee*ee;return L<0?o=0:(L*=L,o=L*L*this.dot3(this.grad3[C],W,Y,ee)),32*(r+a+s+o)}noise4d(e,t,n,r){let a=this.grad4,s=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,p,f,b=(e+t+n+r)*c,g=Math.floor(e+b),x=Math.floor(t+b),v=Math.floor(n+b),m=Math.floor(r+b),y=(g+x+v+m)*l,M=g-y,_=x-y,T=v-y,S=m-y,w=e-M,P=t-_,I=n-T,U=r-S,z=w>P?32:0,V=w>I?16:0,Q=P>I?8:0,$=w>U?4:0,W=P>U?2:0,Y=I>U?1:0,ee=z+V+Q+$+W+Y,ie=s[ee][0]>=3?1:0,X=s[ee][1]>=3?1:0,F=s[ee][2]>=3?1:0,K=s[ee][3]>=3?1:0,oe=s[ee][0]>=2?1:0,Z=s[ee][1]>=2?1:0,C=s[ee][2]>=2?1:0,R=s[ee][3]>=2?1:0,H=s[ee][0]>=1?1:0,N=s[ee][1]>=1?1:0,L=s[ee][2]>=1?1:0,O=s[ee][3]>=1?1:0,A=w-ie+l,k=P-X+l,B=I-F+l,ne=U-K+l,G=w-oe+2*l,ae=P-Z+2*l,se=I-C+2*l,le=U-R+2*l,ve=w-H+3*l,be=P-N+3*l,Te=I-L+3*l,Ie=U-O+3*l,Qe=w-1+4*l,Ge=P-1+4*l,Pe=I-1+4*l,rt=U-1+4*l,ct=g&255,ft=x&255,Se=v&255,Be=m&255,mt=o[ct+o[ft+o[Se+o[Be]]]]%32,Yi=o[ct+ie+o[ft+X+o[Se+F+o[Be+K]]]]%32,la=o[ct+oe+o[ft+Z+o[Se+C+o[Be+R]]]]%32,Ln=o[ct+H+o[ft+N+o[Se+L+o[Be+O]]]]%32,zn=o[ct+1+o[ft+1+o[Se+1+o[Be+1]]]]%32,Dn=.6-w*w-P*P-I*I-U*U;Dn<0?h=0:(Dn*=Dn,h=Dn*Dn*this.dot4(a[mt],w,P,I,U));let j=.6-A*A-k*k-B*B-ne*ne;j<0?u=0:(j*=j,u=j*j*this.dot4(a[Yi],A,k,B,ne));let $n=.6-G*G-ae*ae-se*se-le*le;$n<0?d=0:($n*=$n,d=$n*$n*this.dot4(a[la],G,ae,se,le));let Ki=.6-ve*ve-be*be-Te*Te-Ie*Ie;Ki<0?p=0:(Ki*=Ki,p=Ki*Ki*this.dot4(a[Ln],ve,be,Te,Ie));let At=.6-Qe*Qe-Ge*Ge-Pe*Pe-rt*rt;return At<0?f=0:(At*=At,f=At*At*this.dot4(a[zn],Qe,Ge,Pe,rt)),27*(h+u+d+p+f)}};var Js=class i extends Bn{constructor(e,t,n,r,a,s,o){super(),this.width=n!==void 0?n:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=jm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new un(this.width,this.height,{type:Zn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Vt({defines:Object.assign({},Ys.defines),uniforms:li.clone(Ys.uniforms),vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Tc,this.normalMaterial.blending=ci,this.pdMaterial=new Vt({defines:Object.assign({},Zs.defines),uniforms:li.clone(Zs.uniforms),vertexShader:Zs.vertexShader,fragmentShader:Zs.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Vt({defines:Object.assign({},Ks.defines),uniforms:li.clone(Ks.uniforms),vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader,blending:ci}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Vt({uniforms:li.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oc,blendDst:Ga,blendEquation:Wn,blendSrcAlpha:Nc,blendDstAlpha:Ga,blendEquationAlpha:Wn}),this.blendMaterial=new Vt({uniforms:li.clone(el.uniforms),vertexShader:el.vertexShader,fragmentShader:el.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:zf,blendSrc:Oc,blendDst:Ga,blendEquation:Wn,blendSrcAlpha:Nc,blendDstAlpha:Ga,blendEquationAlpha:Wn}),this.fsQuad=new vr(null),this.originalClearColor=new me,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ha,this.depthTexture.format=lr,this.depthTexture.type=cr,this.normalRenderTarget=new un(this.width,this.height,{minFilter:on,magFilter:on,type:Zn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,r,a){e.getClearColor(this.originalClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}renderOverride(e,t,n,r,a){e.getClearColor(this.originalClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,a=t.clearAlpha||a,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let r=t.get(n);n.visible=r}),t.clear()}generateNoise(e=64){let t=new tl,n=e*e*4,r=new Uint8Array(n);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let c=s,l=o;r[(s*e+o)*4]=(t.noise(c,l)*.5+.5)*255,r[(s*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,r[(s*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,r[(s*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let a=new pr(r,e,e,kn,yi);return a.wrapS=_n,a.wrapT=_n,a.needsUpdate=!0,a}};Js.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var tn=i=>{i.traverse(t=>{t.isMesh&&(t.castShadow=t.receiveShadow=!0)});let e=null;if(Object.defineProperty(i.userData,"lod",{get:()=>e??=qm(i),enumerable:!1,configurable:!0}),i.userData.cars){let t=i.userData.cars;delete i.userData.cars,Object.defineProperty(i.userData,"cars",{value:t,enumerable:!1,configurable:!0})}return i};function qm(i){if(i.userData.cars){let s=new ue,o=i.userData.cars.map(c=>{let l=qm(c);return l.position.copy(c.position),l.quaternion.copy(c.quaternion),s.add(l),l});return Object.defineProperty(s.userData,"cars",{value:o,enumerable:!1}),s.userData.pitch=i.userData.pitch,s}i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),t=new ue,n=new Map,r=new en,a=new E;i.traverse(s=>{if(!s.isMesh||s===i)return;let o=new Ae().multiplyMatrices(e,s.matrixWorld);s.geometry.boundingBox||s.geometry.computeBoundingBox(),r.copy(s.geometry.boundingBox).applyMatrix4(o).getSize(a);let c=[a.x,a.y,a.z].sort((u,d)=>d-u);if(!(a.y>=Math.max(a.x,a.z)&&a.y>.15)&&(c[0]<.06||c[1]<.012))return;if(Array.isArray(s.material)){let u=new te(s.geometry,s.material);o.decompose(u.position,u.quaternion,u.scale),t.add(u);return}let h=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(o);h.clearGroups();for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new Ce(new Float32Array(h.attributes.position.count*2),2)),(n.get(s.material)||n.set(s.material,[]).get(s.material)).push(h)}),n.forEach((s,o)=>{let c=Mi(s);c&&t.add(new te(c,o))}),t.traverse(s=>{s.isMesh&&(s.castShadow=s.receiveShadow=!0)});for(let s of Object.keys(i.userData))t.userData[s]=i.userData[s];return t}var Ei=(i,e,t=40)=>new fr(new Us(i,t),new Yn({color:e,transparent:!0,opacity:.55}));function je(i,e,t=.008,n=14,r=3){let a=new Dt(i,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:r,curveSegments:n});return a.translate(0,0,-(e-t*2)/2),a.rotateY(-Math.PI/2),a}function Qn(i,e,t,n){let r=i.getSpacedPoints(400),a=r.length-1,s=[];for(let p=0;p<a;p++)e(r[p])&&s.push(p);if(s.length<2)return null;let o=0;for(let p=1;p<s.length;p++)s[p]!==s[p-1]+1&&(o=p);let c=s[o]===0&&s[s.length-1]===a-1?s.slice(o).concat(s.slice(0,o)):s,l=xi.isClockWise(r.slice(0,a))?-1:1,h=p=>{let f=r[(p-1+a)%a],b=r[(p+1)%a],g=b.x-f.x,x=b.y-f.y,v=Math.hypot(g,x)||1;return[x/v*l,-g/v*l]},u=c.map(p=>{let[f,b]=h(p);return new ce(r[p].x+f*t,r[p].y+b*t)}),d=c.map(p=>{let[f,b]=h(p);return new ce(r[p].x-f*n,r[p].y-b*n)});return new Fe(u.concat(d.reverse()))}function Xe(i,e,t,n,r){let a=new Fe;return r=Math.min(r,(t-i)/2,(n-e)/2),a.moveTo(i+r,e),a.lineTo(t-r,e),a.quadraticCurveTo(t,e,t,e+r),a.lineTo(t,n-r),a.quadraticCurveTo(t,n,t-r,n),a.lineTo(i+r,n),a.quadraticCurveTo(i,n,i,n-r),a.lineTo(i,e+r),a.quadraticCurveTo(i,e,i+r,e),a}function Nt(i,e,t,n=.004){let r=new Dt(i,{depth:n,bevelEnabled:!1,curveSegments:10});r.rotateY(-Math.PI/2);let a=new te(r,e);return a.position.x=t>0?t+n:t,a}var Ze=(i,e,t,n)=>{let r=new te(new Et(t*2,t*2,i.distanceTo(e)+t),n);return r.position.copy(i).add(e).multiplyScalar(.5),r.lookAt(e),r},de=(i,e,t,n,r,a,s)=>{let o=new te(new Et(i,e,t),n);return o.position.set(r,a,s),o};function nl(i,e,t,n){let r=new ue,a=new te(new Me(t,t,n,22),i),s=new te(new Me(t*.52,t*.52,n+.006,16),e);return a.rotation.z=s.rotation.z=Math.PI/2,r.add(a,s),r}function Zr(i,e,t,n,r=24,a=null){let s=[],o=[],c=[],l=[];for(let x=0;x<=r;x++){let v=x/r,m=Math.max(0,(v-.55)/.45),y=a?e*a(v):e*(v<.55?1-.12*(1-v/.55)**2:Math.sqrt(Math.max(0,1-m*m)));s.push(i(v,m,y).map(([M,_])=>[M,_,-.5+v]))}let h=s[0].length*2-1;for(let x of s)[...x.slice().reverse().map(([v,m,y])=>[-v,m,y]),...x.slice(1)].forEach(v=>o.push(...v));for(let x=0;x<r;x++)for(let v=0;v<h-1;v++){let m=x*h+v,y=m+1,M=m+h,_=M+1;(c[t[v]]||=[]).push(m,y,M,y,_,M)}let u=[],d=[];for(let x=1;x<h-1;x++)u.push(0,x+1,x);for(let x=0;x<r;x++){let v=x*h,m=v+h-1,y=v+h,M=y+h-1;d.push(v,m,y,m,M,y)}let p=new He;p.setAttribute("position",new Ce(o,3));let f=0;c.forEach((x,v)=>{x&&(l.push(...x),p.addGroup(f,x.length,v),f+=x.length)}),l.push(...u),p.addGroup(f,u.length,0),p.setIndex(l),p.computeVertexNormals();let b=new te(p,n);b.add(Ei(p,"#6d5d48",25));let g=new He;return g.setAttribute("position",new Ce(o.map((x,v)=>v%3===1?x-.012:x),3)),g.setIndex(d),g.computeVertexNormals(),{hm:b,dg:g}}function Ym(i,e={}){let t=e.paper||null,n=1,r=.25,a=.31,s=.045,o=.052,c=.29,l=-.29,h=i(e.color||"#b8342a",t),u=i(e.color||"#b8342a",t,{flatShading:!0}),d=i(e.stripe||"#f6efe1",t),p=i("#3a4b59",null,{roughness:.5}),f=i("#2b2724"),b=i("#d9d0c0",t),g=i("#fff4d6",null,{emissive:"#5a4a2a"}),x=i("#c23a2a"),v=new Fe,m=-n/2,y=n/2,M=o+.012;v.moveTo(m+.03,s),v.lineTo(l-M,s),v.absarc(l,s,M,Math.PI,0,!0),v.lineTo(c-M,s),v.absarc(c,s,M,Math.PI,0,!0),v.lineTo(y-.03,s),v.quadraticCurveTo(y,s,y,s+.03),v.lineTo(y-.004,a*.62),v.bezierCurveTo(y-.008,a*.9,y-.035,a,y-.1,a),v.lineTo(m+.04,a),v.quadraticCurveTo(m,a,m,a-.04),v.lineTo(m,s+.03),v.quadraticCurveTo(m,s,m+.03,s);let _=.012,T=new ue,S=je(v,r,_,7,1),w=new te(S,[h,u]);w.add(Ei(S,"#5a2a1e",50)),T.add(w);let P=r/2;for(let W of[-1,1]){let Y=W>0?.335:y-.035,ee=Y-.13,ie=new Fe;ie.moveTo(m+.01,.135),ie.lineTo(ee,.135),ie.quadraticCurveTo(Y-.04,.135,Y,.205),ie.lineTo(Y,.175),ie.quadraticCurveTo(Y-.04,.11,ee,.11),ie.lineTo(m+.01,.11),ie.closePath(),T.add(Nt(ie,d,W*P));let X=W>0?.33:.43;T.add(Nt(Xe(m+.04,.165,X,a-.035,.018),p,W*P));for(let F=1;F<7;F++){let K=m+.04+(X-m-.04)*F/7;T.add(Nt(Xe(K-.006,.165,K+.006,a-.035,.002),h,W*(P+.004),.003))}}T.add(Nt(Xe(.35,s+.02,.44,a-.035,.012),p,P),Nt(Xe(.352,.11,.438,.12,.003),h,P+.004,.003));let I=Qn(v,W=>W.x>y-.12&&W.y>.16&&W.y<a-.03,_+.004,.02);I&&T.add(new te(je(I,r-.03,0),p));let U=Qn(v,W=>W.x>y-.05&&W.y<.075&&W.y>s+.002,_+.006,.01),z=Qn(v,W=>W.x>y-.03&&W.y>.112&&W.y<.13,_+.003,.004);z&&T.add(new te(je(z,r-.004,0),d)),U&&T.add(new te(je(U,r+.006,.003),f));for(let W of[-1,1]){T.add(de(.04,.018,.006,g,W*(P-.04),.095,y+_+.001)),T.add(de(.02,.05,.006,x,W*(P-.03),.17,m-_-.002));let Y=new E(W*(P-.025),a+.008,y-.06),ee=new E(W*(P-.004),a+.014,y+.025),ie=new E(W*(P-.012),a-.03,y+.035);T.add(Ze(Y,ee,.0032,f),Ze(ee,ie,.0032,f));let X=de(.008,.036,.016,f,ie.x,ie.y-.016,ie.z);X.rotation.y=W*.35,T.add(X)}T.add(de(r-.07,.07,.004,p,0,a-.07,m-_-.001),de(r-.09,.03,.004,f,0,.09,m-_-.001));let V=new te(je(Xe(m+.01,0,y-.1,.006,.003),r-.02,.003),d);V.position.y=a+_-.002,T.add(V);let Q=Qn(v,W=>W.x>y-.1&&W.y>a-.028&&W.y<a-.006,_+.004,.004);Q&&T.add(new te(je(Q,r*.55,0),i("#f4d58a",null,{emissive:"#6a4a10",emissiveIntensity:.4})));let $=new te(je(Xe(-.32,0,.02,.022,.011),r*.62,.005),d);$.position.y=a+_+.004,T.add($);for(let W of[c,l])for(let Y of[-1,1]){let ee=nl(f,b,o,.045);ee.position.set(Y*(P-.028),o,W),T.add(ee)}return tn(T)}function Km(i,e={}){let t=e.paper||null,n=i(e.color||"#f6efe1",t,{flatShading:!0}),r=i(e.accent||"#3c6a8c",t,{flatShading:!0}),a=i("#c9a77a",t),s=i("#fbf7ef",t),o=i("#2f3b46",null,{roughness:.55}),c=i(e.flag||"#ae2a20",null,{side:ot}),{hm:l,dg:h}=Zr((w,P,I)=>[[0,-.035+.03*P*P*P],[I*.7,Math.max(-.035+.03*P*P*P,-.01)],[I*.95,.008+.01*P],[I*.965,.019+.01*P],[I,.085+.055*P*P]],.16,[0,2,1,1,1,1,2,0],[n,r,i(e.flag||"#ae2a20",t,{flatShading:!0})]),u=new ue;u.add(l,new te(h,i("#c9a77a",t,{side:ot})));let d=new Fe,p=-.36,f=.2,b=.075,g=.2,x=.24;d.moveTo(p,b),d.lineTo(f,b),d.lineTo(f,.11),d.bezierCurveTo(f-.01,g-.03,f-.02,g,f-.06,g),d.lineTo(p+.02,g),d.quadraticCurveTo(p,g,p,g-.02),d.closePath();let v=je(d,x,.008);u.add(new te(v,[s,s]));for(let w of[-1,1]){u.add(Nt(Xe(p+.03,.11,f-.04,g-.025,.012),o,w*x/2));for(let I=1;I<6;I++){let U=p+.03+(f-.07-p)*I/6;u.add(Nt(Xe(U-.005,.11,U+.005,g-.025,.002),s,w*(x/2+.004),.003))}u.add(Nt(Xe(p+.01,.09,f-.02,.1,.004),r,w*x/2));let P=new te(new pn(.018,.006,8,20),c);P.rotation.y=Math.PI/2,P.position.set(w*(x/2+.012),.1,p+.015),u.add(P)}let m=Qn(d,w=>w.x>f-.08&&w.y>.11&&w.y<g-.02,.012,.02);m&&u.add(new te(je(m,x-.03,0),o));let y=new te(je(Xe(p-.015,0,f-.03,.012,.006),x+.03,.004),r);y.position.y=g,u.add(y);let M=g+.012,_=.035,T=x/2+.008;for(let w of[-1,1]){u.add(de(.004,.004,f-p-.06,s,w*T,M+_,(p+f)/2-.03));for(let P=0;P<=8;P++)u.add(de(.004,_,.004,s,w*T,M+_/2,p-.005+(f-p-.045)*P/8))}u.add(de(x+.016,.004,.004,s,0,M+_,p-.005)),u.add(de(.005,.12,.005,i("#6b5440"),0,.14,-.47));let S=new te(new Mn(.07,.045,4,1),c);return S.rotation.y=Math.PI/2,S.position.set(0,.175,-.505),u.add(S),u.add(de(.016,.022,.016,i("#6b5440"),0,.12,.38)),tn(u)}function Zm(i,e={}){let t=e.paper||null,n=i(e.color||"#fbf7ef",t,{flatShading:!0}),r=i(e.under||"#eadfcb",t,{flatShading:!0,side:Ku,emissive:"#8a7a62",emissiveIntensity:1}),a=[0,.012,.72],s=[0,0,-.5],o=.075,c=[],l=[];for(let y of[-1,1]){let M=z=>[z[0]*y,z[1],z[2]],_=M([.2,.02,-.5]),T=M([.11,.024,.05]),S=M([.6,o,-.26]),w=M([.6,o,-.5]),P=M([.635,o+.1,-.33]),I=M([.635,o+.1,-.5]),U=(z,V,Q)=>c.push(...y>0?[z,Q,V]:[z,V,Q]);U(a,s,_),U(a,_,T),U(T,_,w),U(T,w,S),l.push(S,w,I,S,I,P),U(M([0,.016,.66]),M([0,.016,-.12]),M([.085,.03,.06]))}let h=new He;h.setAttribute("position",new Ce(c.flat(),3)),h.computeVertexNormals();let u=[];for(let y of[-1,1]){let M=[0,0,.6],_=[0,0,-.5],T=[y*.012,-.13,-.47],S=[y*.006,-.035,.38];u.push(...y>0?[M,T,_,M,S,T]:[M,_,T,M,T,S])}let d=new He;d.setAttribute("position",new Ce(u.flat(),3)),d.computeVertexNormals();let p=new ue,f="#9c8c72",b=new te(h,n),g=new te(h,r),x=new te(d,i(e.accent||"#3c6a8c",t,{flatShading:!0,side:ot,emissive:e.accent||"#3c6a8c",emissiveIntensity:.25}));b.add(Ei(h,f,1)),x.add(Ei(d,f,1));let v=new He;v.setAttribute("position",new Ce(l.flat(),3)),v.computeVertexNormals();let m=new te(v,i(e.color||"#fbf7ef",t,{flatShading:!0,side:ot}));return m.add(Ei(v,f,1)),p.add(b,g,x,m),tn(p)}function Jm(i,e,t,n,r=1.8){let a=i.attributes.position;for(let s=0;s<a.count;s++){let o=a.getZ(s);o>e&&a.setX(s,a.getX(s)*(1-n*Math.min(1,(o-e)/(t-e))**r))}return a.needsUpdate=!0,i.computeVertexNormals(),i}function jd(i,e,t,n,r,a){let s=new ue,o=(l,h)=>{r&&Jm(l,...r);let u=new te(l,h);return s.add(u),u},c=o(je(i,e,t,9,1),[n.body,n.fold]);return c.add(Ei(c.geometry,"#7a6d5c",50)),a&&(s.rotation.y=Math.PI),{g:s,add:o}}function Xd(i,e,t,n,r,a,s,o,c){for(let l of[-1,1])if(c){i.add(Nt(Xe(e,n,t,r,.01),o,l*a/2));for(let h=1;h<s;h++){let u=e+(t-e)*h/s;i.add(Nt(Xe(u-.005,n,u+.005,r,.002),c,l*(a/2+.004),.003))}}else for(let h=0;h<s;h++){let u=(t-e)/s,d=e+u*h;i.add(Nt(Xe(d+u*.18,n,d+u*.82,r,.008),o,l*a/2))}}function il(i,e,t,n,r,a=.024){i.add(de(r-.05,.03,.16,e,0,.026,n));for(let s of[-.05,.05])for(let o of[-1,1]){let c=nl(e,t,a,.012);c.position.set(o*(r/2-.035),a,n+s),i.add(c)}}function Qm(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=1,a=.19,s=.2,o=.035,c=.008,l=r+.03,h={body:i(e.body||"#f7f4ee",t),fold:i(e.body||"#f7f4ee",t,{flatShading:!0})},u=i(e.color||"#1f4e9c",t),d=i("#2c3a48",null,{roughness:.45}),p=i("#3a3c40"),f=i("#9aa0a6",t),b=v=>(v.moveTo(-.5,o),v.lineTo(.38,o),v.quadraticCurveTo(.5,o,.5,.06),v.bezierCurveTo(.47,.1,.32,s,.12,s),v.lineTo(-.48,s),v.quadraticCurveTo(-.5,s,-.5,s-.02),v.closePath(),v),g=new ue,x=[];for(let v=0;v<n;v++){let m=v===0,y=v===n-1&&n>1,M=m||y,_=M?b(new Fe):Xe(-.5,o,.5,s,.022),{g:T,add:S}=jd(_,a,c,h,M?[.1,.5+c,.62,1.7]:null,y);if(S(je(Xe(-.5,.072,M?.47:.5,.086,.004),a+.008,0),u),S(je(Xe(-.5,.093,M?.4:.5,.098,.002),a+.006,0),u),M){let w=Qn(_,P=>P.x>.24&&P.x<.42&&P.y>.1,c+.003,.012);w&&S(je(w,a*.8,0),d)}if(Xd(T,-.44,M?.06:.44,.122,.15,a,M?8:14,d),T.add(de(a-.04,o,r-.1,p,0,o/2,-.02),de(a-.01,.022,r-.3,f,0,o-.008,M?-.12:0)),M||T.add(de(a*.7,s*.75,.03,p,0,s*.5,.51)),n>1&&T.add(de(a*.7,s*.75,.03,p,0,s*.5,-.51)),!M&&v===1){let w=new E(0,s+c,.05),P=new E(0,s+.06,.12);T.add(de(.06,.012,.05,p,0,s+c+.006,.02),Ze(w,P,.003,p),de(.08,.004,.01,p,0,s+.062,.12))}T.position.z=-v*l,g.add(T),x.push(T)}return g.userData={cars:x,pitch:l},tn(g)}function $m(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??2),r=1,a=.19,s=.215,o=.05,c=.008,l=r+.03,h={body:i(e.body||"#f3efe6",t),fold:i(e.body||"#f3efe6",t,{flatShading:!0})},u=i(e.color||"#ae2a20",t),d=i(e.accent||"#2c4a6e",t),p=i("#2c3a48",null,{roughness:.45}),f=i("#34363a"),b=i("#b9b2a6"),g=i("#fff4d6",null,{emissive:"#6a5a30"}),x=i("#d9d3c6",t),v=M=>(M.moveTo(-.5,o),M.lineTo(.485,o),M.quadraticCurveTo(.5,o,.5,o+.015),M.lineTo(.5,.115),M.lineTo(.44,.185),M.quadraticCurveTo(.42,s,.39,s),M.lineTo(-.48,s),M.quadraticCurveTo(-.5,s,-.5,s-.02),M.closePath(),M),m=new ue,y=[];for(let M=0;M<n;M++){let _=M===0,T=M===n-1&&n>1,S=_||T,w=S?v(new Fe):Xe(-.5,o,.5,s,.024),{g:P,add:I}=jd(w,a,c,h,S?[.4,.5+c,.16,1.4]:null,T);if(I(je(Xe(-.5,.075,S?.495:.5,.095,.004),a+.008,0),u),I(je(Xe(-.5,.1,S?.495:.5,.105,.002),a+.006,0),d),S){let U=Qn(w,z=>z.x>.43&&z.y>.12&&z.y<.19,c+.003,.012);U&&I(je(U,a*.92,0),p);for(let z of[-1,1])I(new Et(.03,.014,.006).translate(z*.055,.088,.5+c+.002),g)}Xd(P,-.4,S?.3:.4,.125,.17,a,S?6:8,p,h.body);for(let U of[-1,1])for(let z of S?[-.46,.34]:[-.46,.42])P.add(Nt(Xe(z,o+.01,z+.045,.172,.006),x,U*a/2,.003));il(P,f,b,-.32,a),il(P,f,b,.32,a),P.add(de(a-.06,.02,r-.5,f,0,o-.01,0));for(let U of[-.25,.1]){let z=new te(je(Xe(U,0,U+.12,.016,.008),a*.55,.004),h.body);z.position.y=s+c,P.add(z)}S||P.add(de(a*.65,s*.7,.03,f,0,s*.48,.51)),n>1&&P.add(de(a*.65,s*.7,.03,f,0,s*.48,-.51)),P.position.z=-M*l,m.add(P),y.push(P)}return m.userData={cars:y,pitch:l},tn(m)}function eg(i,e={}){let t=e.paper||null,n=.01,r=.3,a=e.hang??.62,s=e.span??1.6,o=i(e.color||"#c8462e",t),c=i(e.color||"#c8462e",t,{flatShading:!0}),l=i("#f6efe1",t),h=i("#2f3d4a",null,{roughness:.45}),u=i("#3b3a38"),d=i("#8d8f92"),p=new Fe;p.moveTo(-.16,.02),p.lineTo(.16,.02),p.quadraticCurveTo(.2,.02,.205,.08),p.lineTo(.215,.29),p.quadraticCurveTo(.215,.33,.17,.335),p.lineTo(-.17,.335),p.quadraticCurveTo(-.215,.33,-.215,.29),p.lineTo(-.205,.08),p.quadraticCurveTo(-.2,.02,-.16,.02);let f=new ue;f.add(new te(je(p,r,n,10,1),[o,c]));for(let v of[-1,1]){f.add(Nt(Xe(-.18,.14,.18,.29,.016),h,v*r/2));for(let m of[-.06,.06])f.add(Nt(Xe(m-.006,.14,m+.006,.29,.002),o,v*(r/2+.004),.003));f.add(Nt(Xe(-.2,.105,.2,.122,.004),l,v*r/2))}let b=Qn(p,v=>Math.abs(v.x)>.19&&v.y>.14&&v.y<.29,n+.003,.012);b&&f.add(new te(je(b,r-.05,0),h));let g=new te(je(Xe(-.15,0,.15,.018,.009),r-.06,.006),l);g.position.y=.335+n,f.add(g);let x=new E(0,a-.03,0);for(let v of[-1,1])f.add(Ze(new E(v*.07,.36,0),x,.006,d));if(f.add(de(.03,.05,.03,d,0,a-.04,0),de(.09,.03,.2,u,0,a-.005,0)),s>0)for(let v of[-1,1]){let m=new te(new Me(.004,.004,s,6),u);m.rotation.x=Math.PI/2,m.position.set(v*.03,a+.012,0),f.add(m)}return f.userData={cableY:a+.012},tn(f)}function tg(i,e={}){let t=e.paper||null,n=i(e.color||"#f7f3ea",t),r=i(e.color||"#f7f3ea",t,{flatShading:!0}),a=i(e.accent||"#2c4a6e",t,{flatShading:!0}),s=i(e.flag||"#ae2a20",t,{flatShading:!0}),o=i("#2c3a48",null,{roughness:.45}),c=i("#2e2c2a"),l=i("#e07a2c",t),h=.15,{hm:u,dg:d}=Zr((S,w,P)=>[[0,-.05+.04*w*w*w],[P*.75,Math.max(-.05+.04*w*w*w,-.02)],[P*.95,.01+.012*w],[P*.965,.024+.012*w],[P*.985,.075+.02*w],[P*.99,.09+.02*w],[P,h+.045*w*w]],.17,[0,3,0,2,1,1,1,1,2,0,3,0],[r,a,s,a]),p=new ue;p.add(u,new te(d,i("#b9b2a6",t,{side:ot})));let f=.065;[[-.44,.24,.3],[-.38,.14,.27]].forEach(([S,w,P],I)=>{let U=h-.012+I*f,z=new te(je(Xe(S,0,w,f,.008),P,.005),[n,n]);z.position.y=U,p.add(z);let V=Math.round((w-S)/.035);for(let Q of[-1,1])for(let $=0;$<V;$++){let W=S+.02+$*(w-S-.04)/V;p.add(Nt(Xe(W,U+.022,W+.022,U+.046,.004),o,Q*P/2))}});let g=h-.012+2*f,x=new Fe;x.moveTo(-.04,0),x.lineTo(.15,0),x.lineTo(.17,.03),x.lineTo(.145,.06),x.lineTo(-.04,.06),x.closePath();let v=new te(je(x,.34,.004),[n,n]);v.position.y=g,p.add(v);let m=Qn(x,S=>S.x>.15&&S.y>.032&&S.y<.056,.007,.012);if(m){let S=new te(je(m,.3,0),o);S.position.y=g,p.add(S)}for(let S of[-1,1])p.add(Nt(Xe(-.02,g+.03,.13,g+.05,.004),o,S*.17));let y=new Fe;y.moveTo(-.2,0),y.lineTo(-.1,0),y.lineTo(-.12,.1),y.lineTo(-.21,.1),y.closePath();let M=new te(je(y,.08,.006),a);M.position.y=g,p.add(M),p.add(de(.075,.016,.085,c,0,g+.105,-.165)),p.add(Ze(new E(0,g+.06,.05),new E(0,g+.15,.04),.004,c),de(.05,.01,.012,c,0,g+.12,.045));for(let S of[-1,1])for(let w of[-.3,-.16]){let P=new te(je(Xe(w,0,w+.1,.03,.014),.035,.006),l);P.position.set(S*.155,h-.012+f+.02,0),p.add(P)}let _=h-.012+f*2,T=.03;for(let S of[-1,1]){p.add(de(.004,.004,.18,n,S*.133,_+T,-.29));for(let w=0;w<=5;w++)p.add(de(.004,T,.004,n,S*.133,_+T/2,-.38+w*.036))}return p.add(de(.27,.004,.004,n,0,_+T,-.38)),p.add(de(.016,.022,.016,c,.04,h+.02,.36),de(.016,.022,.016,c,-.04,h+.02,.36),de(.005,.1,.005,c,0,h+.08,.47)),tn(p)}function ng(i,e={}){let t=e.paper||null,n=Math.min(1,Math.max(0,e.hood??1)),r=i(e.color||"#2a2624",t,{roughness:.6}),a=i(e.color||"#2a2624",t,{roughness:.6,flatShading:!0}),s=i(e.accent||"#b8342a",t),o=i(e.blanket||"#c23a2c",t),c=i(e.hoodColor||"#2e2a28",t,{side:ot,flatShading:!0}),l=i("#b8913a"),h=i("#f6efe1",t),u=new ue,d=.24,p=-.2,f=.215;for(let T of[-1,1]){let S=new ue,w=new te(new pn(d-.012,.012,8,40),r);w.rotation.y=Math.PI/2,S.add(w);for(let I=0;I<14;I++){let U=I/14*Math.PI*2,z=de(.008,d-.03,.01,s,0,0,0);z.position.set(0,Math.cos(U)*(d-.03)/2,Math.sin(U)*(d-.03)/2),z.rotation.x=U,S.add(z)}let P=new te(new Me(.03,.03,.04,14),l);P.rotation.z=Math.PI/2,S.add(P),S.position.set(T*f,d,p),u.add(S)}u.add(Ze(new E(-f,d,p),new E(f,d,p),.008,r));let b=new Fe;b.moveTo(-.34,.26),b.lineTo(-.04,.26),b.quadraticCurveTo(.02,.26,.02,.32),b.lineTo(.02,.4),b.lineTo(-.2,.4),b.lineTo(-.27,.62),b.quadraticCurveTo(-.29,.66,-.33,.64),b.lineTo(-.36,.3),b.quadraticCurveTo(-.36,.26,-.34,.26),u.add(new te(je(b,.38,.008,8,1),[r,a])),u.add(de(.33,.03,.17,s,0,.415,-.11));let g=de(.33,.2,.025,s,0,.52,-.25);g.rotation.x=-.36,u.add(g);let x=new Fe;x.moveTo(-.12,.435),x.lineTo(.05,.435),x.quadraticCurveTo(.08,.43,.085,.38),x.lineTo(.09,.24),x.lineTo(.06,.24),x.lineTo(.05,.4),x.lineTo(-.12,.42),x.closePath(),u.add(new te(je(x,.31,.004,6,1),o)),u.add(de(.3,.015,.14,r,0,.235,.06),Ze(new E(-.12,.235,0),new E(-.12,.3,-.02),.006,r),Ze(new E(.12,.235,0),new E(.12,.3,-.02),.006,r));for(let T of[-1,1])u.add(Ze(new E(T*.19,.3,-.3),new E(T*.17,.2,.5),.01,r),de(.012,.012,.03,l,T*.17,.2,.49));u.add(Ze(new E(-.17,.2,.48),new E(.17,.2,.48),.009,r));for(let T of[-1,1]){let S=new te(new Me(d+.02,d+.02,.05,16,1,!0,Math.PI*.12,Math.PI*.62),i(e.color||"#2a2624",t,{side:ot,flatShading:!0}));S.geometry.rotateZ(Math.PI/2),S.position.set(T*f,d,p),u.add(S)}let v=.3,m=new E(0,.42,-.28),y=4,M=.6,_=.55;for(let T=0;T<y;T++){let S=n*T*_+(1-n)*(-.42+T*.03)+.05,w=v+T*.008,P=new Me(w,w,.42,10,1,!0,Math.PI-S-M,M);P.rotateZ(Math.PI/2);let I=new te(P,c);I.position.copy(m),I.add(Ei(P,"#8a7a62",20)),u.add(I)}for(let T of[-1,1])u.add(Ze(new E(T*.2,m.y,m.z),new E(T*.17,.33,-.06),.005,l));if(n>.6){let T=n*(y-1)*_+.05+M,S=new E(.17,m.y+Math.sin(T)*(v+.018),m.z-Math.cos(T)*(v+.018)),w=new te(new Me(.028,.028,.06,12),i("#f4e2c0",null,{emissive:"#7a4a1a",emissiveIntensity:.5}));w.position.set(S.x,S.y-.06,S.z),u.add(w,de(.06,.008,.06,s,S.x,S.y-.028,S.z),de(.06,.008,.06,s,S.x,S.y-.092,S.z))}return tn(u)}function ig(i,e={}){let t=e.paper||null,n=i(e.color||"#2e2925",t,{flatShading:!0,roughness:.42}),r=i(e.accent||"#a8302a",t),a=i("#b8913a",null,{metalness:.4,roughness:.5}),s=i("#d8d5cc",null,{metalness:.55,roughness:.35}),o=i("#5a4030",t),c=_=>{let T=2*_-1;return .045+.12*T**4+.035*Math.max(0,T)**4},{hm:l,dg:h}=Zr(_=>{let T=2*_-1,S=-.025+.075*T**4,w=.072*Math.sin(Math.PI*_)**.55;return Array.from({length:7},(P,I)=>{let U=I/6*Math.PI/2;return[w*Math.sin(U)**.85,S+(c(_)-S)*(1-Math.cos(U))**1.15]})},1,Array(12).fill(0),[n],40,()=>1),u=new ue;l.children[0].material.color.set("#6b5f52"),u.add(l,new te(h,n));let d=c(.5)-.012;u.add(de(.09,.03,.09,r,0,d+.015,-.04));let p=de(.09,.06,.016,r,0,d+.05,-.09);p.rotation.x=-.3,u.add(p);for(let _ of[-1,1])u.add(de(.008,.012,.09,a,_*.048,d+.036,-.04));u.add(de(.08,.02,.04,n,0,d+.01,.09),de(.07,.008,.035,r,0,d+.024,.09));let f=.455,b=c(.955),g=[[.03,0],[.016,.012]];for(let _=0;_<6;_++){let T=.022+_*.019,S=.062-_*.003;g.push([.016,T],[S-.006,T+.001],[S,T+.005],[S-.006,T+.009],[.017,T+.01])}g.push([.02,.138],[.062,.144],[.078,.153],[.07,.164],[.03,.168],[.006,.16],[-.003,.14],[-.006,.1],[-.024,.088],[-.026,.081],[-.007,.078],[-.006,.04],[-.002,.012],[.004,0]);let x=new Fe(g.map(([_,T])=>new ce(_,T))),v=je(x,.007,.0015,6,1),m=new te(v,[s,s]);m.add(Ei(v,"#7d7a72",30)),m.position.set(0,b-.03,f-.01),u.add(m);let y=c(.2),M=new E(.05,y+.07,-.3);u.add(Ze(new E(.05,y-.01,-.3),M,.008,o),Ze(M.clone().add(new E(-.03,.01,.08)),new E(.2,-.03,-.62),.005,o)),u.add(de(.03,.006,.07,o,.18,-.02,-.6));for(let _ of[-1,1])u.add(de(.006,.018,.02,a,_*.07,d+.012,.02));return tn(u)}function Qs(i,e,t=.006,n=10){let r=new Dt(i,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(e-t*2)/2),r}function rg(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=e.loco??!0,a=1,s=.17,o=.205,c=.045,l=a+.03,h=i(e.color||"#b8282c",t),u=i(e.color||"#b8282c",t,{flatShading:!0}),d=i("#f4ecd8",t),p=i("#34363a"),f=i("#b9b2a6"),b=i("#3a5266",null,{roughness:.25,metalness:.1}),g=i("#fff4d6",null,{emissive:"#6a5a30"}),x=i("#faf7f0"),v=new Fe,m=.1,y=.055;v.moveTo(s/2,m),v.lineTo(s/2,o-y),v.quadraticCurveTo(s/2,o,s/2-y,o),v.lineTo(-s/2+y,o),v.quadraticCurveTo(-s/2,o,-s/2,o-y),v.lineTo(-s/2,m),v.closePath();let M=Qn(v,S=>S.y>m+.004,.003,.008),_=new ue,T=[];for(let S=0;S<n;S++){let w=new ue;if(r&&S===0){w.add(new te(Qs(Xe(-s/2,c,s/2,o,.03),a-.02,.01,6),[h,u]));for(let I of[-1,1])w.add(de(.062,.042,.004,b,I*.037,.165,a/2+.001)),w.add(de(.022,.012,.004,g,I*.055,.075,a/2+.001)),w.add(de(.004,.04,.06,b,I*(s/2+.003),.16,.38)),w.add(de(.004,.04,.06,b,I*(s/2+.003),.16,-.38)),w.add(de(.004,.05,.016,x,I*(s/2+.003),.11,0),de(.004,.016,.05,x,I*(s/2+.003),.11,0)),w.add(de(.004,.006,a-.1,d,I*(s/2+.003),.07,0));w.add(de(.022,.012,.004,g,0,.197,a/2+.001),de(.11,.02,.004,p,0,.09,a/2+.001));for(let I of[-.25,.25])w.add(de(.05,.012,.06,p,0,o+.006,I)),w.add(Ze(new E(0,o+.012,I-.03),new E(0,o+.05,I+.01),.0025,p),Ze(new E(0,o+.05,I+.01),new E(0,o+.065,I-.02),.0025,p),de(.07,.004,.008,p,0,o+.066,I-.02));w.add(de(s-.06,.02,.3,p,0,o+.01,0))}else{w.add(new te(Qs(Xe(-s/2,c,s/2,m+.004,.01),a-.02,.005,4),[h,u])),w.add(new te(Qs(v,a-.06,0,10),b));for(let I=0;I<=7;I++){let U=-.47+I*.134;if(M){let z=new te(Qs(M,.016,0,10),h);z.position.z=U,w.add(z)}}for(let I of[-.485,.485]){let U=new te(Qs(v,.03,.004,10),h);U.position.z=I,U.scale.set(1.02,1,1),w.add(U)}w.add(de(.05,.008,a-.08,h,0,o+.003,0));for(let I of[-1,1])w.add(de(.004,.006,a-.08,d,I*(s/2+.003),.07,0))}il(w,p,f,-.32,s,.022),il(w,p,f,.32,s,.022),w.add(de(s-.05,.02,a-.5,p,0,c-.01,0)),S>0&&w.add(de(s*.6,o*.6,.03,p,0,o*.45,.51)),S<n-1&&w.add(de(s*.6,o*.6,.03,p,0,o*.45,-.51)),w.position.z=-S*l,_.add(w),T.push(w)}return _.userData={cars:T,pitch:l},tn(_)}function Xm(i,e,t,n,r=12,a=.02){let s=new ue,o=new te(new pn(i-.01,.01,8,36),e);o.rotation.y=Math.PI/2,s.add(o);for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=de(.003,i-.02,.003,t,0,0,0);u.position.set(0,Math.cos(h)*(i-.02)/2,Math.sin(h)*(i-.02)/2),u.rotation.x=h,s.add(u)}let c=new te(new Me(.016,.016,a,12),n);return c.rotation.z=Math.PI/2,s.add(c),s}function ag(i,e={}){let t=e.paper||null,n=i(e.color||"#1f6aa5",t),r=i(e.color||"#1f6aa5",t,{flatShading:!0}),a=i(e.accent||"#e8b830",t),s=i(e.roof||"#23303a",t),o=i("#d6d6d2",null,{metalness:.6,roughness:.3}),c=i("#2a2826"),l=i("#b8342a",t),h=i("#c9c3b8"),u=i("#3a4b59",null,{roughness:.4,transparent:!0,opacity:.7}),d=i("#fff4d6",null,{emissive:"#6a5a30"}),p=new ue,f=new Fe;f.moveTo(-.46,.1),f.lineTo(.3,.1),f.quadraticCurveTo(.46,.1,.47,.2),f.lineTo(.42,.3),f.quadraticCurveTo(.36,.33,.28,.3),f.lineTo(.12,.26),f.lineTo(-.46,.26),f.closePath();let b=Jm(je(f,.42,.012,8,1),.08,.5,.72,1.3),g=new te(b,[n,r]);g.add(Ei(b,"#1a2a3a",45)),p.add(g);for(let _ of[-1,1])p.add(Nt(Xe(-.44,.17,.05,.19,.004),a,_*.21));p.add(de(.36,.05,.16,l,0,.29,-.3));let x=de(.36,.14,.03,l,0,.38,-.42);x.rotation.x=-.15,p.add(x),p.add(de(.12,.04,.12,c,0,.3,.02),Ze(new E(0,.3,.28),new E(0,.42,.22),.008,c),Ze(new E(-.12,.42,.22),new E(.12,.42,.22),.007,o));let v=de(.3,.2,.006,u,0,.5,.25);v.rotation.x=.25,p.add(v);let m=new Fe;m.moveTo(.26,.6),m.quadraticCurveTo(-.1,.66,-.46,.64),m.quadraticCurveTo(-.5,.63,-.5,.58),m.lineTo(-.47,.6),m.quadraticCurveTo(-.1,.63,.26,.58),m.closePath();let y=je(m,.48,.006,12,1);p.add(new te(y,[s,s]));for(let _ of[-1,1])p.add(Nt(m,a,_*.24,.006));for(let[_,T,S]of[[.19,.24,.27],[-.19,.24,.27],[.2,-.45,.26],[-.2,-.45,.26]])p.add(Ze(new E(_,S,T),new E(_,T>0?.59:.62,T),.007,o));p.add(de(.05,.03,.01,d,0,.26,.47));let M=nl(c,h,.08,.05);M.position.set(0,.08,.36),p.add(M);for(let _ of[-1,1]){let T=nl(c,h,.085,.05);T.position.set(_*.2,.085,-.3),p.add(T)}return tn(p)}function Qv(i,e,t){let n=[[.04,.06],[-.18,.08],[-.22,.24],[-.2,.4],[-.12,.56]].map(([c,l])=>[c*i/.5*1.45,l*i/.5]),r=[.06*i/.5*1.45,.48*i/.5],a=new Fe;a.moveTo(...n[0]),n.slice(1).forEach(c=>a.lineTo(...c)),a.lineTo(...r),a.closePath();let s=new ue;s.add(new te(je(a,.005,0,8,1),e));let o=c=>{for(let l=1;l<n.length;l++)if(c<=n[l][1]){let[h,u]=n[l-1],[d,p]=n[l];return h+(d-h)*(c-u)/(p-u)}return n[n.length-1][0]};for(let c=1;c<=5;c++){let l=n[0][1]+(r[1]-n[0][1])*c/6,h=n[0][0]+(r[0]-n[0][0])*c/6,u=o(l);s.add(de(.012,.005,Math.abs(h-u),t,0,l,(h+u)/2))}return s}function sg(i,e={}){let t=e.paper||null,n=Math.min(3,Math.max(1,e.sails??3)),r=i(e.wood||"#5a3a24",t,{flatShading:!0}),a=i("#c9a06a",t,{flatShading:!0}),s=i("#8a5a36",t),o=i("#efe3c8",t),c=i("#f3d79a",null,{emissive:"#8a6a30",emissiveIntensity:.5}),l=i(e.color||"#b0402a",t,{side:ot}),h=i("#3a2a1e"),u=i("#2e241c"),d=_=>.075+.07*(1-_)**4+.05*_**4,{hm:p,dg:f}=Zr((_,T,S)=>{let w=-.04+.03*_**3,P=d(_);return[[0,w],[S*.75,Math.max(w,-.015)],[S*.95,.03],[S*.98,P-.018],[S,P]]},.15,[1,0,0,0,0,0,0,1],[r,a]),b=new ue;b.add(p,new te(f,i("#a87a4c",t,{side:ot})));let g=d(.45)-.012,x=[[-.36,.2,.22,.07],[-.3,.04,.2,.06]];x.forEach(([_,T,S,w],P)=>{let I=g+(P?x[0][3]:0),U=new te(je(Xe(_,0,T,w,.006),S,.004),[s,s]);U.position.y=I,b.add(U);let z=Math.round((T-_)/.06);for(let V of[-1,1])for(let Q=0;Q<z;Q++){let $=_+.02+Q*(T-_-.03)/z;b.add(Nt(Xe($,I+w*.3,$+.03,I+w*.75,.004),c,V*S/2))}b.add(de(S+.01,.006,T-_+.02,o,0,I+w+.003,(_+T)/2))});let v=g+.13+.006,m=.025;for(let _ of[-1,1]){b.add(de(.004,.004,.34,o,_*.1,v+m,-.13));for(let T=0;T<=6;T++)b.add(de(.004,m,.004,o,_*.1,v+m/2,-.3+T*.057))}[[.06,.62],[.33,.42],[-.4,.36]].slice(0,n).forEach(([_,T],S)=>{let w=d(.5+_)-.012;b.add(Ze(new E(0,w,_),new E(0,w+T+.03,_),.006,u));let P=Qv(T,l,h);P.position.set(0,w,_),P.rotation.y=.35-S*.12,b.add(P)}),b.add(Ze(new E(0,d(0)-.01,-.48),new E(0,d(0)+.1,-.48),.003,u));let M=new te(new Mn(.05,.03),i("#b5281c",null,{side:ot}));M.rotation.y=Math.PI/2,M.position.set(0,d(0)+.085,-.505),b.add(M);for(let _ of[-1,1])b.add(de(.01,.03,.02,u,_*.05,d(.92)-.02,.42));return tn(b)}function og(i,e={}){let t=e.paper||null,n=i(e.wood||"#8a5a34",t,{flatShading:!0}),r=i(e.color||"#2f6db3",t,{flatShading:!0}),a=i("#7a3a2a",t),s=i("#9a9a96",null,{metalness:.5,roughness:.4}),o=i("#2a2622"),c=i("#e9e2d0",t,{side:ot}),l=v=>.055+.21*v**6,{hm:h,dg:u}=Zr((v,m,y)=>{let M=-.022+.06*v**4,_=l(v);return[[0,M],[y*.85,M+.01],[y,_-.016],[y,_]]},.075,[1,0,0,0,0,1],[n,r],32,v=>v<.08?.62+v*4:Math.min(1,Math.sin(Math.PI*Math.min(1,v*.98))**.5*1.08)),d=new ue;d.add(h,new te(u,i("#b0805a",t,{side:ot})));let p=new E(0,l(.99),.49);["#e0689a","#f0c030","#3aa05a","#e0689a","#f0c030"].forEach((v,m)=>{let y=de(.012,.07,.006,i(v,null,{side:ot}),(m-2)*.008,p.y-.045,p.z-.02-m*.006);y.rotation.x=.25+m*.05,d.add(y)});let f=new te(new pn(.014,.005,6,12),i("#f0c030"));f.position.set(0,p.y-.01,p.z-.012),d.add(f);let b=l(.03)+.02,g=new E(0,b,-.47),x=new E(0,-.03,-.76);d.add(de(.05,.05,.08,a,0,b+.025,-.45),de(.03,.02,.04,o,0,b+.06,-.45),Ze(new E(0,l(.03)-.01,-.47),g,.008,o)),d.add(Ze(g,x,.005,s),Ze(new E(0,b+.02,-.42),new E(0,b+.06,-.28),.004,s));for(let v of[0,Math.PI/2]){let m=de(.004,.03,.008,s,0,x.y,x.z);m.rotation.z=v+.4,d.add(m)}if(e.canopy??!0){let v=l(.5)+.11,m=.06;for(let[M,_]of[[m,-.22],[-m,-.22],[m,.18],[-m,.18]])d.add(Ze(new E(M,l(.5+_)-.012,_),new E(M,v,_),.003,o));let y=new te(je(Xe(-.25,0,.21,.006,.003),.15,.002),c);y.position.y=v,d.add(y)}return tn(d)}function cg(i,e={}){let t=e.paper||null,n=i(e.color||"#2f7a8a",t),r=i(e.color||"#2f7a8a",t,{flatShading:!0}),a=i(e.accent||"#c23a2c",t),s=i("#2b2a28"),o=i("#cfcfca",null,{metalness:.5,roughness:.35}),c=i("#3a3430",t,{side:ot,flatShading:!0}),l=new ue,h=.14,u=new Fe;u.moveTo(.12,.18),u.lineTo(.42,.18),u.quadraticCurveTo(.47,.18,.47,.13),u.lineTo(.49,.1),u.lineTo(.52,.1),u.lineTo(.5,.2),u.lineTo(.38,.26),u.lineTo(.2,.26),u.lineTo(.16,.48),u.quadraticCurveTo(.14,.52,.1,.5),u.lineTo(.1,.2),u.quadraticCurveTo(.1,.18,.12,.18);let d=je(u,.36,.01,8,1),p=new te(d,[n,r]);p.add(Ei(d,"#1a3a40",45)),l.add(p),l.add(de(.3,.025,.17,a,0,.272,.29));let f=de(.3,.17,.02,a,0,.38,.19);f.rotation.x=-.2,l.add(f);for(let y=0;y<3;y++){let M=new Me(.16+y*.006,.16+y*.006,.36,8,1,!0,Math.PI-(-.35+y*.05)-.45,.45);M.rotateZ(Math.PI/2);let _=new te(M,c);_.position.set(0,.42,.14),l.add(_)}for(let y of[-1,1]){let M=Xm(h,s,o,o,16);M.position.set(y*.22,h,.3),l.add(M),l.add(Ze(new E(y*.2,h,.3),new E(y*.17,.2,.3),.006,s))}let b=Xm(h,s,o,o,16);b.position.set(0,h,-.4),l.add(b);let g=new E(0,.5,-.27),x=new E(0,.16,-.16),v=new E(0,.52,.06);l.add(Ze(new E(0,.2,.12),x,.01,s),Ze(x,new E(0,h,-.4),.007,s),Ze(x,g,.009,s),Ze(g,new E(0,h,-.4),.006,s)),l.add(Ze(new E(0,.45,.1),v,.008,s),Ze(new E(-.14,.52,.06),new E(.14,.52,.06),.007,o),Ze(g,new E(0,.45,.1),.008,s)),l.add(de(.05,.02,.09,s,0,g.y+.012,g.z-.01));let m=new te(new Me(.03,.03,.012,14),o);m.rotation.z=Math.PI/2,m.position.copy(x),l.add(m);for(let y of[-1,1])l.add(de(.04,.008,.02,s,y*.04,x.y+y*.04,x.z+y*.02));return tn(l)}function lg(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=1,a=.18,s=.2,o=.035,c=.008,l=r+.03,h={body:i(e.body||"#f6f5f1",t),fold:i(e.body||"#f6f5f1",t,{flatShading:!0})},u=i(e.color||"#c8282c",t),d=i(e.accent||"#c9a24a",t),p=i("#2a3644",null,{roughness:.4}),f=i("#3a3c40"),b=i("#a5a8ab",t),g=y=>(y.moveTo(-.5,o),y.lineTo(.36,o),y.quadraticCurveTo(.5,o,.5,.055),y.bezierCurveTo(.44,.12,.3,s,.1,s),y.lineTo(-.48,s),y.quadraticCurveTo(-.5,s,-.5,s-.02),y.closePath(),y),x=(y,M,_,T)=>{let S=new Fe;return S.moveTo(-.5,M),y?(S.lineTo(.08,M),S.quadraticCurveTo(.28,M,.37,M+T),S.lineTo(.355,_+T),S.quadraticCurveTo(.27,_,.08,_)):(S.lineTo(.5,M),S.lineTo(.5,_)),S.lineTo(-.5,_),S.closePath(),S},v=new ue,m=[];for(let y=0;y<n;y++){let M=y===0,_=y===n-1&&n>1,T=M||_,S=T?g(new Fe):Xe(-.5,o,.5,s,.022),{g:w,add:P}=jd(S,a,c,h,T?[.08,.5+c,.66,1.6]:null,_);if(P(je(x(T,.068,.084,.04),a+.008,0),u),P(je(x(T,.089,.093,.04),a+.006,0),d),T){let I=Qn(S,U=>U.x>.24&&U.x<.43&&U.y>.115,c+.003,.012);I&&P(je(I,a*.78,0),p)}if(Xd(w,-.44,T?.04:.44,.118,.152,a,T?8:14,p),w.add(de(a-.04,o,r-.1,f,0,o/2,-.02),de(a-.01,.022,r-.3,b,0,o-.008,T?-.12:0)),T||w.add(de(a*.7,s*.75,.03,f,0,s*.5,.51)),n>1&&w.add(de(a*.7,s*.75,.03,f,0,s*.5,-.51)),!T&&y===1){let I=new E(0,s+c,.05),U=new E(0,s+.06,.12);w.add(de(.06,.012,.05,f,0,s+c+.006,.02),Ze(I,U,.003,f),de(.08,.004,.01,f,0,s+.062,.12))}w.position.z=-y*l,v.add(w),m.push(w)}return v.userData={cars:m,pitch:l},tn(v)}function hg(i,e={}){let t=e.paper||null,n=i(e.wood||"#3e3128",t,{flatShading:!0}),r=i("#7a5a3e",t,{side:ot}),a=i(e.color||"#26221f",t,{side:ot,flatShading:!0}),s=i("#5a4636",t),o=i("#6b4c32",t),c=p=>.05+.035*(2*p-1)**4,{hm:l,dg:h}=Zr((p,f,b)=>{let g=-.022+.02*(2*p-1)**4;return[[0,g],[b*.8,g+.01],[b*.97,c(p)-.015],[b,c(p)]]},.075,[0,0,0,0,0,0],[n],32,p=>Math.sin(Math.PI*p)**.55),u=new ue;u.add(l,new te(h,r)),[[-.17,.062,.14],[0,.07,.16],[.16,.06,.12]].forEach(([p,f,b])=>{let g=c(.5+p)-.012,x=new Me(f,f,b,14,1,!0,Math.PI/2,Math.PI);x.rotateX(Math.PI/2);let v=new te(x,a);v.position.set(0,g,p),u.add(v);let m=Math.round(b/.022);for(let y=0;y<=m;y++){let M=new te(new pn(f+.002,.0022,4,16,Math.PI),s);M.position.set(0,g,p-b/2+y*b/m),u.add(M)}});let d=c(.1);return u.add(Ze(new E(.05,d+.01,-.36),new E(.16,-.02,-.62),.004,o),de(.025,.004,.06,o,.16,-.02,-.61)),u.add(Ze(new E(-.05,d+.03,-.3),new E(-.07,d,-.12),.003,o)),tn(u)}function ug(i,e={}){let t=e.paper||null,n=Math.max(1,e.decks??3),r=i("#f7f5ef",t),a=i("#f7f5ef",t,{flatShading:!0}),s=i(e.accent||"#2c5a8a",t,{flatShading:!0}),o=i("#ae2a20",t,{flatShading:!0}),c=i("#2c3a48",null,{roughness:.4}),l=i("#2e2c2a"),h=i(e.accent||"#2c5a8a",t,{side:ot}),u=.1,{hm:d,dg:p}=Zr((y,M,_)=>[[0,-.04+.03*M**3],[_*.8,-.015],[_*.95,.008+.01*M],[_*.965,.02+.01*M],[_*.985,.05+.015*M],[_*.99,.062+.015*M],[_,u+.03*M*M]],.105,[0,3,0,2,1,1,1,1,2,0,3,0],[a,s,o,s]),f=new ue;f.add(d,new te(p,i("#c9c2b4",t,{side:ot})));let b=.055,g=u-.012;for(let y=0;y<n;y++){let M=-.42+y*.03,_=.3-y*.06,T=.19-y*.012,S=u-.012+y*b,w=new te(je(Xe(M,0,_,b,.022),T,.004,10),[r,r]);w.position.y=S,f.add(w);for(let I of[-1,1]){f.add(Nt(Xe(M+.025,S+.014,_-.03,S+.042,.005),c,I*T/2));let U=Math.round((_-M-.06)/.04);for(let z=1;z<U;z++){let V=M+.025+(_-M-.055)*z/U;f.add(Nt(Xe(V-.003,S+.014,V+.003,S+.042,.001),r,I*(T/2+.004),.003))}f.add(de(.004,.004,_-M-.04,r,I*(T/2+.012),S+.03,(M+_)/2))}let P=Qn(Xe(M,0,_,b,.022),I=>I.x>_-.025&&I.y>.014&&I.y<.042,.007,.01);if(P){let I=new te(je(P,T-.03,0),c);I.position.y=S,f.add(I)}g=S+b}let x=g+.004;for(let[y,M]of[[.07,-.25],[-.07,-.25],[.07,0],[-.07,0]])f.add(Ze(new E(y,x,M),new E(y,x+.05,M),.003,l));let v=new te(je(Xe(-.27,0,.02,.006,.003),.17,.002),h);v.position.y=x+.05,f.add(v),f.add(Ze(new E(0,x,.08),new E(0,x+.1,.07),.004,l),de(.05,.008,.01,l,0,x+.085,.072)),f.add(Ze(new E(0,u,-.48),new E(0,u+.09,-.48),.003,l));let m=new te(new Mn(.045,.028),i("#c8282c",null,{side:ot}));return m.rotation.y=Math.PI/2,m.position.set(0,u+.075,-.502),f.add(m),tn(f)}function dg(i,e={}){let t=e.paper||null,n=i(e.color||"#c9b26a",t),r=i("#8f7a3e",t),a=i("#5a4a32",t),s=i("#b59a58",t),o=e.umbrella===null?null:i(e.umbrella||"#c23a2c",t,{side:ot,flatShading:!0}),c=new ue,l=9,h=.017,u=.34;for(let d=0;d<l;d++){let p=(d/(l-1)-.5)*u,f=1-Math.abs(d/(l-1)-.5)*.4,b=new Hn([[-.5,.02],[-.3,.004],[.15,.004],[.36,.03*f],[.5,.13*f]].map(([g,x])=>new E(p,x+.003,g)));c.add(new te(new ki(b,24,h,8),n));for(let g=1;g<6;g++){let x=g/6,v=b.getPointAt(x),m=b.getTangentAt(x),y=new te(new pn(h+.001,.0028,4,12),r);y.position.copy(v),y.lookAt(v.clone().add(m)),c.add(y)}}for(let d of[-.36,-.02,.28]){let f=new te(new Me(.01,.01,u+.04,8),n);f.rotation.z=Math.PI/2,f.position.set(0,.024,d),c.add(f);for(let b=0;b<l;b+=2)c.add(de(.012,.012,.024,a,(b/(l-1)-.5)*u,.024,d))}for(let d of[-1,1]){let p=d*.075,f=-.12;c.add(de(.11,.012,.1,s,p,.075,f));let b=de(.11,.09,.01,s,p,.12,f-.05);b.rotation.x=-.18,c.add(b);for(let[g,x]of[[-.05,-.045],[.05,-.045],[-.05,.045],[.05,.045]])c.add(de(.008,.05,.008,s,p+g,.048,f+x))}if(o){c.add(Ze(new E(0,.03,-.2),new E(0,.38,-.16),.004,a));let d=new te(new Cn(.19,.07,12,1,!0),o);d.position.set(0,.36,-.16),c.add(d)}return c.add(Ze(new E(-.12,.03,-.46),new E(.1,.05,.42),.006,n)),tn(c)}var $v=[60,160,320,520,760,1050,1400,1800,2300,2900,3600,4500];function e2(i){if(i instanceof Date)return[i.getMonth()+1,i.getDate()];let e=String(i||""),t=e.match(/\d{4}[-/.](\d{1,2})[-/.](\d{1,2})/),n=t||e.match(/(\d{1,2})[./-](\d{1,2})/);return n?[+n[1],+n[2]]:null}var t2=(i,e)=>i*100+e,$s=(i,e,t)=>e<=t?i>=e&&i<=t:i>=e||i<=t;function ol(i,e=35,t=0){let n=e2(i);if(!n)return"autumn";let[r,a]=n;e<0&&(r=(r+5)%12+1,e=-e);let s=t2(r,a);if(e<23.5)return"green";if(e<30)return $s(s,120,228)?"sakura":t>=2500&&$s(s,1201,228)?"snow":"green";let o=e>=41?{sakura:[420,520],autumn:[920,1110],snow:[1111,419]}:e>=38?{sakura:[401,510],autumn:[1001,1125],snow:[1126,331]}:{sakura:[301,430],autumn:[1001,1130],snow:[1201,229]};return $s(s,...o.sakura)?"sakura":$s(s,...o.autumn)?"autumn":$s(s,...o.snow)&&(e>=34||t>=1500)?"snow":"green"}function cl(i){let e=i.company||{},t=e.home,n=e.homeXY,r=e.airXY;if(!t||!n||!r||t.lat===t.alat)return 35;let a=(n[1]-r[1])/(t.lat-t.alat),s=(i.stops||[]).filter(o=>!o.air&&o.xy);return!s.length||!a?35:t.lat+(s.reduce((o,c)=>o+c.xy[1],0)/s.length-n[1])/a}function vg(i,e=0){let t=cl(i),n=(i.days||[]).filter(s=>s.date);if(!n.length)return"autumn";let r={};n.forEach(s=>{let o=ol(s.date,t,e);r[o]=(r[o]||0)+1});let a=ol(n[0].date,t,e);return Object.keys(r).reduce((s,o)=>r[o]>r[s]?o:s,a)}var qd={pine:["#3d5a3b","#4b6a45","#33503a"],cedar:["#2f4a35","#3a5a3e","#29412f"]},rl={palm:["#3f7a3a","#4c8a40","#356b35"],bamboo:["#5e8f3e","#6fa34a","#4f7d36"],banyan:["#3d6b3a","#4a7a42","#335c33"]},al=["#f6f4ef","#eceeec","#f9f8f4"],qa={sakura:{label:"\u6AFB",en:"SAKURA",months:"3\u20134 \u6708",leaves:{cherry:["#fbe1e0","#f8d3d3","#fdeceb","#f6c8c9"],maple:["#9fb46a","#b2c27c","#bccb8a","#8ea65c"],ginkgo:["#a9bf6a","#bccd80","#98b05c"],willow:["#a6c06a","#b8cf7e","#93ad58"],...qd,...rl},ground:{land:"#f1e7d6",tint:["#bfcb8e",.4],snowLine:2600,snow:al},sky:["#f6eee8","#e9d8cf"],fog:{color:"#e9d8cf",mult:1},sun:["#fff0dc",1.7],hemi:["#fff6f2","#fbeee8",2.3],fall:{kind:"petal",count:260,size:.04,speed:.22,sway:.45,colors:["#f7b9b6","#fac9c2","#fde2dc","#f4a6a4"],glow:"#6e4a46"},inland:["cherry","cherry","maple","cedar"]},green:{label:"\u65B0\u7DA0",en:"GREEN",months:"5\u20139 \u6708",leaves:{cherry:["#6f9a4a","#82ac58","#5f8a40"],maple:["#6c9a48","#7fae55","#5c8a3e","#91b860"],ginkgo:["#7aa64e","#8db85c","#6a9442"],willow:["#7fa64e","#93b860","#6c9442"],...qd,...rl},ground:{land:"#eee6d0",tint:["#a9bb7a",.5],snowLine:3500,snow:al},sky:["#eef0e8","#d3dccd"],fog:{color:"#d5dccd",mult:1.12},sun:["#fff6e2",2.6],hemi:["#f6f8ec","#6f6c50"],fall:{kind:"leaf",count:70,size:.055,speed:.3,sway:.35,colors:["#8fae5a","#a6c06a","#6c8a3f","#b5c77e"]},inland:null},autumn:{label:"\u6953",en:"AUTUMN",months:"10\u201311 \u6708",leaves:{maple:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b","#8a8c4a"],cherry:["#c4673a","#d0884a","#b8553a"],ginkgo:["#e8b923","#d9a31a","#f0c94a"],willow:["#b8a24a","#c9b45a","#a08c3e"],...qd,...rl},ground:{land:"#efe4cf",tint:["#d9ae7a",.08],snowLine:2600,snow:al},sky:["#f4eadb","#ddc8a8"],fog:{color:"#ddcbad",mult:1},sun:["#ffdcae",2.4],hemi:["#fff1de","#76664f"],fall:{kind:"maple",count:170,size:.07,speed:.28,sway:.4,colors:["#b8342a","#c9462a","#d6772c","#e0a43c","#e8b923"]},inland:["maple","maple","ginkgo","cedar"]},snow:{label:"\u96EA",en:"SNOW",months:"12\u20132 \u6708",leaves:{maple:["#f8f4ec","#f1eadc","#fbf8f2"],cherry:["#f8f4ec","#f1eadc","#fbf8f2"],ginkgo:["#f8f4ec","#efe7d8","#fbf8f2"],willow:["#f3efe4","#ebe5d6","#f8f5ec"],pine:["#4e6656","#5c7462","#455c4c"],cedar:["#435a4a","#506857","#3b5142"],...rl},ground:{land:"#f2efe8",tint:["#eeede8",.6],snowLine:160,snow:al},sky:["#eef0f0","#d5dadc"],fog:{color:"#dadfe0",mult:.82},sun:["#f4f2ee",2],hemi:["#f4f7fa","#7d8288"],fall:{kind:"snow",count:380,size:.028,speed:.34,sway:.18,colors:["#ffffff","#f6f7f8","#eef1f3"],glow:"#8c9196"},inland:["cedar","cedar","pine","maple"]}};function Kd(i,e={}){let t=qa[i]||qa.autumn,n=Math.abs(e.lat??35),r={...t.ground};return t===qa.snow&&(r.snowLine=n>=40?0:n>=37?60:n>=35?160:520),{name:qa[i]?i:"autumn",...t,ground:r,leaves:{...t.leaves},fall:{...t.fall}}}function Zd(i,e,t=$v){let n=u=>new me(u),r=u=>"#"+u.getHexString(),[a,s]=e.ground.tint,o=e.ground.snow,c=(i.terrain||[]).map((u,d)=>t[d]>=e.ground.snowLine?o[d%o.length]:r(n(u).lerp(n(a),s*(1-.4*d/t.length)))),l={...i.trees||{},colorsBy:{...(i.trees||{}).colorsBy,...e.leaves},colors:e.leaves.maple,pine:e.leaves.pine},h=(i.trees?.inland||[]).some(u=>u==="maple"||u==="cherry");return e.inland&&h&&(l.inland=e.inland),{...i,sky:e.sky,hemi:e.hemi.slice(0,2),hemiPower:e.hemi[2]??1,sun:e.sun[0],sunPower:e.sun[1],fog:e.fog,land:e.ground.land,terrain:c,trees:l,season:e.name}}function sl(i,e,t=10){let n=new jr(i,t),r=n.attributes.position;for(let a=0;a<r.count;a++)r.setZ(a,Math.abs(r.getX(a))*e);return n.center(),n.computeVertexNormals(),n}var n2={petal(){let i=new Fe;return i.moveTo(0,-.5),i.bezierCurveTo(.34,-.3,.46,.18,.3,.46),i.quadraticCurveTo(.16,.52,.04,.4),i.lineTo(0,.32),i.lineTo(-.04,.4),i.quadraticCurveTo(-.16,.52,-.3,.46),i.bezierCurveTo(-.46,.18,-.34,-.3,0,-.5),sl(i,.35)},maple(){let i=new Fe,e=[];for(let t=0;t<10;t++){let n=Math.PI/2+t/10*Math.PI*2,r=t%2===0,a=r?t===4||t===6?.36:.5:.2;t===5?e.push([-.02,-.12],[-.02,-.4],[.02,-.4],[.02,-.12]):e.push([Math.cos(n)*a,Math.sin(n)*a+.05])}return i.moveTo(...e[0]),e.slice(1).forEach(t=>i.lineTo(...t)),i.closePath(),sl(i,.25,4)},leaf(){let i=new Fe;return i.moveTo(0,-.5),i.quadraticCurveTo(.36,-.1,0,.5),i.quadraticCurveTo(-.36,-.1,0,-.5),sl(i,.4)},snow(){let i=new Fe;for(let e=0;e<=12;e++){let t=e/12*Math.PI*2,n=e%2?.44:.5;e?i.lineTo(Math.cos(t)*n,Math.sin(t)*n):i.moveTo(Math.cos(t)*n,Math.sin(t)*n)}return sl(i,.12,1)}},xg=600;function Jd(i,e,t={}){let n=(qa[i]||qa.autumn).fall,r=Math.min(xg,t.count??n.count),[a,s,o]=t.area||[10,4.5,10],c=t.size??n.size,l=t.wind||[.12,.04],h=n.kind==="snow"?.4:1.6,u=e("#fff",t.paper||null,{side:ot,roughness:.9,emissive:n.glow||"#000"}),d=new En(n2[n.kind](),u,r);d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1;let p=t.seed??2611,f=()=>(p=p*16807%2147483647,p/2147483647),b=new Float32Array(r*8),g=new me;for(let w=0;w<r;w++){let P=w*8;b[P]=(f()-.5)*a,b[P+1]=f()*s,b[P+2]=(f()-.5)*o,b[P+3]=f()*6.28,b[P+4]=n.speed*(.7+f()*.6),b[P+5]=c*(.75+f()*.5),b[P+6]=f()*6.28,b[P+7]=.6+f()*.8,d.setColorAt(w,g.set(n.colors[w%n.colors.length]))}let x=new ue;x.add(d),x.userData={kind:n.kind,count:r};let v=new dn,m=new qn,y=new E,M=new E,_=new Ae,T=Math.min(.4,s*.1),S=(w,P)=>((w+P/2)%P+P)%P-P/2;return x.update=(w,P=1)=>{if(x.visible=P>.02,!!x.visible){w=Math.min(w,.1);for(let I=0;I<r;I++){let U=I*8;b[U+3]+=w*b[U+7]*h,b[U+1]-=b[U+4]*w,b[U]=S(b[U]+l[0]*w,a),b[U+2]=S(b[U+2]+l[1]*w,o),b[U+1]<0&&(b[U+1]+=s,b[U]=(f()-.5)*a,b[U+2]=(f()-.5)*o);let z=b[U+3],V=b[U+1],Q=Math.min(1,V/T,(s-V)/T);y.set(b[U]+Math.sin(z+I)*n.sway*.5,V,b[U+2]+Math.cos(z*.7+I)*n.sway*.3),m.set(b[U+6]+z,z*.6,Math.sin(z)*.8),v.setFromEuler(m),M.setScalar(Math.max(1e-4,b[U+5]*P*Q)),d.setMatrixAt(I,_.compose(y,v,M))}d.instanceMatrix.needsUpdate=!0}},x.update(0,1),x}var i2=["andon","bonbori","chochin","illum"],r2={autumn:"andon",sakura:"bonbori",green:"chochin",snow:"illum"},Yd=i=>r2[i]||"andon";function yg(i,e="autumn"){if(!i)return null;if(i.night)return i2.includes(i.night)?i.night:Yd(e);let t=[i.title,i.route,i.cap,i.stay,...i.spots||[]].join(" ");return/祭|まつり/.test(t)?"chochin":/燈飾|イルミ|光之|聖誕/.test(t)?"illum":/夜櫻|夜桜/.test(t)?"bonbori":/夜楓|點燈|点灯|ライトアップ|夜間參拜|夜間拜觀|夜間特別/.test(t)?Yd(e):null}var a2={dusk:{sky:["#5d7391","#f0a46a"],fog:{color:"#d8b89e",mult:.9},sun:["#ffa060",1.5],sunDir:[-.95,.28,.3],hemi:["#dcd2c8","#6a5646",1.15],glow:.55},night:{sky:["#141c2b","#33405a"],fog:{color:"#28324a",mult:.75},sun:["#a9bedc",.35],sunDir:[.4,.9,-.35],hemi:["#4a5d80","#1d1a18",.55],glow:1}};function _g(i,e="autumn"){let t=a2[i];if(!t)return null;let n={time:i,...t,sky:[...t.sky],hemi:[...t.hemi],sun:[...t.sun],fog:{...t.fog},lights:Yd(e)};return e==="snow"&&i==="night"&&(n.sky=["#0e1522","#1c2740"],n.fog={color:"#1a2336",mult:.7},n.hemi=["#34476c","#1e2432",.48],n.sun=["#9fb6d8",.3],n.glow=1.35),e==="autumn"&&i==="dusk"&&(n.sun=["#ff8f45",1.6]),e==="sakura"&&i==="dusk"&&(n.sky[1]="#f2b08a"),n}var pg=[-.75,.85,.5];function Mg(i,e,t){let n=(l,h)=>new me(l).lerp(new me(h),t),r=(l,h)=>l+(h-l)*t,a=i.fog&&i.fog.color||i.sky[1],s=i.fog&&i.fog.mult||1,o=i.sunPower??2.4,c=i.hemiPower??1;return e||(e={sky:i.sky,fog:{color:a,mult:s},sun:[i.sun,o],sunDir:pg,hemi:[i.hemi[0],i.hemi[1],c],glow:0}),{sky:[n(i.sky[0],e.sky[0]),n(i.sky[1],e.sky[1])],fog:n(a,e.fog.color),fogMult:r(s,e.fog.mult),sun:n(i.sun,e.sun[0]),sunPower:r(o,e.sun[1]),sunDir:pg.map((l,h)=>r(l,e.sunDir[h])),hemiSky:n(i.hemi[0],e.hemi[0]),hemiGround:n(i.hemi[1],e.hemi[1]),hemiPower:r(c,e.hemi[2]),glow:r(0,e.glow)}}function Eg(i,e,t){let n=i.image,r=n.getContext("2d"),a=r.createLinearGradient(0,0,0,n.height);a.addColorStop(0,"#"+new me(e).getHexString()),a.addColorStop(1,"#"+new me(t).getHexString()),r.fillStyle=a,r.fillRect(0,0,n.width,n.height),i.needsUpdate=!0}var s2=160,fg=400,o2=3,mg={andon:{shade:["#ffb866","#ffc47a"],warm:"#ffb45a",post:"#5a3e2b",count:36,strings:!1,lamp:.8},bonbori:{shade:["#ffe4dc","#fff0e6"],warm:"#ffd2c0",post:"#3b2f2a",count:30,strings:!1,lamp:.7},chochin:{shade:["#ff5a3a","#ffe2b8"],warm:"#ff9a50",post:"#4a3a30",count:48,strings:!0,lamp:.4},illum:{shade:["#ffe6a8","#fff4dc"],warm:"#ffd27a",post:"#3a3836",count:0,strings:!0,lamp:.35}},gg=null,bg=()=>gg||(gg=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new mr(i);return n.colorSpace=Ct,n})());function Tg(i,e,t={}){let n=mg[i]||mg.andon,[r,a]=t.center||[0,0],s=t.radius??.9,o=t.ground||(()=>0),c=t.avoid||(()=>!1),l=Math.min(s2,t.count??n.count),h=t.seed??1116,u=()=>(h=h*16807%2147483647,h/2147483647),d=new ue,p=t.paper||null,f=[0,1,2].map(W=>({rad:s*(.42+W*.27),a0:u()*6.28,span:1.3+u()*.9})),b=W=>{let Y=[];return f.forEach(ee=>{let ie=Math.floor(ee.span*ee.rad/W);for(let X=0;X<=ie;X++){let F=ee.a0+ee.span*X/Math.max(1,ie),K=r+Math.cos(F)*ee.rad,oe=a+Math.sin(F)*ee.rad;c(K,oe)||Y.push([K,oe,ee])}}),Y},g=[],x=[],v=[],m=[],y=[],M=[];if(!n.strings)b(.09).slice(0,l).forEach(([W,Y],ee)=>{let ie=o(W,Y),X=n.shade[ee%n.shade.length];x.push([W,ie+.05,Y,.008,.1]),g.push([W,ie+.115,Y,X]),y.push([W,ie+.115,Y,X]),M.push([W,ie,Y,.12])});else{let W=b(.24),Y=i==="illum"?.13:.16,ee=(ie,X,F,K)=>Array.from({length:K+1},(oe,Z)=>{let C=Z/K;return[ie[0]+(X[0]-ie[0])*C,ie[1]+(X[1]-ie[1])*C-F*4*C*(1-C),ie[2]+(X[2]-ie[2])*C]});W.forEach(([ie,X])=>x.push([ie,o(ie,X)+Y/2,X,.006,Y]));for(let ie=1;ie<W.length;ie++){let[X,F,K]=W[ie-1],[oe,Z,C]=W[ie];if(K!==C)continue;let R=ee([X,o(X,F)+Y,F],[oe,o(oe,Z)+Y,Z],.03,16);if(m.push(R),i==="chochin")for(let H=2;H<16&&g.length<l;H+=4){let[N,L,O]=R[H],A=n.shade[(g.length+ie)%2];g.push([N,L-.016,O,A]),y.push([N,L-.016,O,A]),M.push([N,o(N,O),O,.08])}if(i==="illum")for(let H=0;H<=16&&v.length<fg;H++){let[N,L,O]=R[H],A=n.shade[H%2];v.push([N,L,O,A]),H%3===0&&y.push([N,L,O,A])}}if(i==="illum"){let ie=r+s*.25,X=a+s*.1,F=o(ie,X),K=.34;x.push([ie,F+K/2,X,.006,K]);for(let oe=0;oe<12;oe++){let Z=oe/12*6.28,C=ee([ie,F+K,X],[ie+Math.cos(Z)*.15,F+.02,X+Math.sin(Z)*.15],0,12);m.push(C);for(let R=1;R<=12&&v.length<fg;R++){let[H,N,L]=C[R],O=n.shade[(oe+R)%2];v.push([H,N,L,O]),(oe+R)%4===0&&y.push([H,N,L,O])}}M.push([ie,F,X,.3])}}let _=new ut,T=new me,S=[],w=(W,Y,ee,ie)=>{if(!ee.length)return null;let X=new En(W,Y,ee.length);return ee.forEach((F,K)=>{_.position.set(0,0,0),_.scale.setScalar(1),_.rotation.set(0,0,0),ie(F,K),_.updateMatrix(),X.setMatrixAt(K,_.matrix)}),X.castShadow=X.receiveShadow=!1,X.frustumCulled=!1,d.add(X),X};w(new Me(1,1,1,6),e(n.post,p),x,([W,Y,ee,ie,X])=>{_.position.set(W,Y,ee),_.scale.set(ie,X,ie)});let P=i==="andon"?new Et(.03,.036,.03):i==="bonbori"?new Me(.016,.02,.038,6):new Zt(.016,12,8).scale(1,1.3,1);if(n.shade.forEach(W=>{let Y=e(W,p,{emissive:W,emissiveMap:p,emissiveIntensity:0});S.push(Y),w(P,Y,g.filter(ee=>ee[3]===W),([ee,ie,X])=>{_.position.set(ee,ie,X),_.rotation.set(0,u()*1.5,0)})}),v.length&&n.shade.forEach(W=>{let Y=e(W,null,{emissive:W,emissiveIntensity:0});S.push(Y),w(new Zt(.0055,6,4),Y,v.filter(ee=>ee[3]===W),([ee,ie,X])=>{_.position.set(ee,ie,X)})}),m.length){let W=[];m.forEach(ee=>{for(let ie=1;ie<ee.length;ie++)W.push(...ee[ie-1],...ee[ie])});let Y=new He;Y.setAttribute("position",new Ce(W,3)),d.add(new fr(Y,new Yn({color:"#2a2420",transparent:!0,opacity:.7})))}let I=new Float32Array(y.length*3),U=new Float32Array(y.length*3);y.forEach(([W,Y,ee,ie],X)=>{I.set([W,Y,ee],X*3),T.set(ie),U.set([T.r,T.g,T.b],X*3)});let z=new He;z.setAttribute("position",new bt(I,3)),z.setAttribute("color",new bt(U,3));let V=new zr({size:t.halo??.14,map:bg(),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Zu,fog:!1});if(y.length){let W=new Fa(z,V);W.frustumCulled=!1,d.add(W)}let Q=new cn({map:bg(),color:n.warm,transparent:!0,opacity:0,depthWrite:!1,blending:Zu,polygonOffset:!0,polygonOffsetFactor:-2});w(new Mn(1,1).rotateX(-Math.PI/2),Q,M,([W,Y,ee,ie])=>{_.position.set(W,Y+.004,ee),_.scale.set(ie*2,1,ie*2)});let $=f.slice(0,Math.min(o2,t.lamps??3)).map(W=>{let Y=W.a0+W.span/2,ee=r+Math.cos(Y)*W.rad,ie=a+Math.sin(Y)*W.rad,X=new za(n.warm,0,s*1.4,2);return X.position.set(ee,o(ee,ie)+.16,ie),d.add(X),X});return d.userData={kind:i,shades:g.length,bulbs:v.length,posts:x.length,halos:y.length,lamps:$.length},d.update=(W=0,Y=1)=>{let ee=Y*(.97+.03*Math.sin(W*7.3)*Math.sin(W*3.1));S.forEach(ie=>{ie.emissiveIntensity=1.3*ee}),V.opacity=.85*ee,Q.opacity=.5*ee,$.forEach(ie=>{ie.intensity=(t.lampPower??n.lamp)*ee})},d.update(0,0),d}var c2=["clear","rain","fog"];function Sg(i){if(!i)return"clear";if(c2.includes(i.weather))return i.weather;let e=[i.title,i.route,i.cap,...i.spots||[]].join(" ");return/雲海|晨霧|朝霧|霧/.test(e)?"fog":/雨天|下雨|雨中|雨の/.test(e)?"rain":"clear"}var l2={rain:{sky:["#cfd4d3","#aab2b4"],fog:{color:"#b3bbbd",mult:.62},sun:["#e8ecef",.9],sunDir:[-.75,.85,.5],hemi:["#e2e7e8","#6e6e66",1.3],glow:0},fog:{sky:["#f4efe6","#e4e0d8"],fog:{color:"#e9e5dd",mult:.78},sun:["#fff0d8",1.5],sunDir:[-.85,.42,.4],hemi:["#f7f3ec","#9a948a",1.25],glow:0}};function Qd(i,e="autumn"){let t=l2[i];if(!t)return null;let n={weather:i,...t,sky:[...t.sky],hemi:[...t.hemi],sun:[...t.sun],fog:{...t.fog},sunDir:[...t.sunDir]};return i==="rain"&&e==="snow"&&(n.sky=["#dde1e3","#bcc3c7"],n.fog.color="#c6cdd1"),i==="rain"&&e==="sakura"&&(n.sky[1]="#b9b4b4",n.hemi=["#ece8e6","#c9bfb8",1.9]),n}var h2=600,u2=24;function $d(i,e,t={}){if(i==="rain"&&t.season==="snow"){let l=Jd("snow",e,{...t,count:Math.min(xg,t.count??560),size:t.size??.032});return l.userData.kind="heavy-snow",l}let n=new ue,[r,a,s]=t.area||[10,4.5,10],o=t.seed??4242,c=()=>(o=o*16807%2147483647,o/2147483647);if(n.userData={kind:i,count:0},i==="rain"){let l=Math.min(h2,t.count??520),h=t.wind||[.5,.15],u=3.2,d=t.len??.11,p=e("#c9d5dc",t.paper||null,{roughness:.8,emissive:"#3c4a52"}),f=new En(new Et(.0045,d,.0045),p,l);f.castShadow=f.receiveShadow=!1,f.frustumCulled=!1;let b=new Float32Array(l*4);for(let M=0;M<l;M++)b[M*4]=(c()-.5)*r,b[M*4+1]=c()*a,b[M*4+2]=(c()-.5)*s,b[M*4+3]=.8+c()*.4;let g=new dn().setFromUnitVectors(new E(0,1,0),new E(-h[0],u,-h[1]).normalize()),x=new E,v=new E,m=new Ae,y=(M,_)=>((M+_/2)%_+_)%_-_/2;n.add(f),n.userData.count=l,n.update=(M,_=1)=>{if(n.visible=_>.02,!!n.visible){M=Math.min(M,.1);for(let T=0;T<l;T++){let S=T*4,w=b[S+3];b[S+1]-=u*w*M,b[S]=y(b[S]+h[0]*w*M,r),b[S+2]=y(b[S+2]+h[1]*w*M,s),b[S+1]<0&&(b[S+1]+=a,b[S]=(c()-.5)*r,b[S+2]=(c()-.5)*s);let P=b[S+1],I=Math.min(1,P/.25,(a-P)/.25);x.set(b[S],P,b[S+2]),v.set(_*I,_*I*w,_*I),f.setMatrixAt(T,m.compose(x,g,v))}f.instanceMatrix.needsUpdate=!0}}}else if(i==="fog"){let l=Math.min(u2,t.count??16),[h,u]=t.levels||[.05,.3],d=[],p=new fn({color:"#fbf9f4",map:t.paper||null,roughness:1,transparent:!0,opacity:0,depthWrite:!1});for(let f=0;f<l;f++){let b=d2(700+f),g=[[0,0,.85],...Array.from({length:5},(M,_)=>[(_-2)*.5+(b()-.5)*.2,(b()-.3)*.5,.45+b()*.35])],x=Array.from({length:64},(M,_)=>{let T=_/64*Math.PI*2,S=Math.cos(T),w=Math.sin(T),P=.3;for(let[I,U,z]of g){let V=S*I+w*U,Q=V*V-(I*I+U*U-z*z);Q>=0&&(P=Math.max(P,V+Math.sqrt(Q)))}return new ce(S*P*1.6,w*P*.7)}),v=new Dt(new Fe(x),{depth:.01,bevelEnabled:!0,bevelThickness:.02,bevelSize:.05,bevelSegments:3});v.rotateX(-Math.PI/2);let m=new te(v,p),y=(.55+c()*.7)*(t.scale??1);m.scale.set(y,1,y*(.8+c()*.4)),m.position.set((c()-.5)*r,h+(u-h)*(f%4)/3+c()*.03,(c()-.5)*s),m.rotation.y=c()*.6-.3,m.renderOrder=2,m.userData.v=.03+c()*.05,m.castShadow=m.receiveShadow=!1,n.add(m),d.push(m)}n.userData.count=l,n.update=(f,b=1)=>{n.visible=b>.02,n.visible&&(f=Math.min(f,.1),p.opacity=.72*b,d.forEach(g=>{g.position.x+=g.userData.v*f,g.position.x>r/2+1&&(g.position.x=-r/2-1)}))}}else n.update=()=>{};return n.update(0,0),n}function d2(i){return()=>(i=i*16807%2147483647,i/2147483647)}var pe=window.JOURNEY,rn=pe.story,ge=pe.company||{},Vg=hd[rn.theme]||Object.values(hd)[0],qi=rn.season||vg(pe),De=Zd(Vg,Kd(qi,{lat:cl(pe)})),ea=(()=>{let i=ge.home,e=ge.homeXY,t=ge.airXY;return i&&e&&t&&i.lat!==i.alat?{ky:(e[1]-t[1])/(i.lat-i.alat),y0:e[1],lat0:i.lat}:null})(),Wg=i=>ea?ea.lat0+(i-ea.y0)/ea.ky:cl(pe),p2=(pe.days.find(i=>i.date)||{}).date,oo=qi==="snow"&&!!ea,wg=new Map,jg=i=>{if(!oo)return De;let e=Math.round(Wg(i)*2)/2,t=wg.get(e);if(t)return t;let n=ol(p2,e),r=e>=30?"snow":n==="snow"?"green":n;return t=Zd(Vg,Kd(r,{lat:e})),wg.set(e,t),t},Xg=i=>jg(i).season==="snow";function qg(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3),r=new Map;for(let a=0;a<t.count;a++){let s=-t.getZ(a),o=Math.round(Wg(s)*2),c=r.get(o);c||(c=e(jg(s)),r.set(o,c)),n[a*3]=c.r,n[a*3+1]=c.g,n[a*3+2]=c.b}i.setAttribute("color",new bt(n,3))}var aa=matchMedia("(prefers-reduced-motion: reduce)").matches,w0=new URLSearchParams(location.search),Yg=pe.story.mode==="daily"||w0.get("mode")==="daily",Kg=()=>Yg&&innerHeight>innerWidth,In=.42;Object.entries(De.css).forEach(([i,e])=>document.documentElement.style.setProperty(i,e));var kt=(i,e=In)=>new E(i[0],e,-i[1]),pt=new lc({antialias:!0});pt.setPixelRatio(Math.min(2,Math.max(devicePixelRatio,1.5)));pt.shadowMap.enabled=!0;pt.shadowMap.type=Bf;pt.toneMapping=kc;pt.toneMappingExposure=1;document.getElementById("stage").appendChild(pt.domElement);var ze=new uc,St=new qt(36,1,.1,800),Si=new jc(pt,new un(innerWidth,innerHeight,{samples:Math.min(4,pt.capabilities.maxSamples||4),type:Zn}));Si.addPass(new Xc(ze,St));{let i=new Js(ze,St,innerWidth,innerHeight);i.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1,scale:1.25,samples:12}),i.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:10}),i.blendIntensity=.9,Si.addPass(i)}var l0=new xr(gm),h0=new xr(bm),A0=new xr(vm);A0.uniforms.offset.value=1;A0.uniforms.darkness.value=.3;Si.addPass(l0);Si.addPass(h0);Si.addPass(A0);Si.addPass(new qc);var R0=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},st=R0(20261116);function C0(i,e,t=1){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let r=new mr(n);return r.wrapS=r.wrapT=_n,r.repeat.set(t,t),r.colorSpace=Ct,r.anisotropy=pt.capabilities.getMaxAnisotropy(),r}function Zg(i,e,t){let n=R0(t);i.fillStyle="#fff",i.fillRect(0,0,e,e);for(let r=0;r<e*18;r++)i.fillStyle=`rgba(80,60,40,${n()*.06})`,i.fillRect(n()*e,n()*e,1+n()*2,1+n()*2);i.lineWidth=.6;for(let r=0;r<e;r++){let a=n()*e,s=n()*e,o=n()*6.28,c=6+n()*22;i.strokeStyle=`rgba(90,70,50,${.03+n()*.06})`,i.beginPath(),i.moveTo(a,s),i.quadraticCurveTo(a+Math.cos(o)*c*.5+n()*4,s+Math.sin(o)*c*.5,a+Math.cos(o)*c,s+Math.sin(o)*c),i.stroke()}}var bn=(i,e)=>C0(512,(t,n)=>Zg(t,n,e),i),lt=(i,e=null,t={})=>new fn({color:i,map:e,roughness:.95,metalness:0,...t});ze.background=C0(256,(i,e)=>{let t=i.createLinearGradient(0,0,0,e);t.addColorStop(0,De.sky[0]),t.addColorStop(1,De.sky[1]),i.fillStyle=t,i.fillRect(0,0,e,e)});ze.fog=new hc(new me(De.fog&&De.fog.color||De.sky[1]),30,120);var e0=De.fog&&De.fog.mult||1,io=new Cc(De.hemi[0],De.hemi[1],De.hemiPower??1),Jg=new Xr("#dfe8f2",.55);Jg.position.set(30,18,-40);ze.add(Jg);var Jt=new Xr(De.sun,De.sunPower??2.4);Jt.castShadow=!0;Jt.shadow.mapSize.setScalar(pt.capabilities.maxTextureSize>=4096?4096:2048);Jt.shadow.bias=-4e-4;Jt.shadow.normalBias=.02;ze.add(io,Jt,Jt.target);var Qg=i=>i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0);function f2(i,e){let t=Qg(i)>0?1:-1,n=i.length;return i.map((r,a)=>{let s=i[(a-1+n)%n],o=i[(a+1)%n],c=Math.hypot(r[0]-s[0],r[1]-s[1])||1,l=Math.hypot(o[0]-r[0],o[1]-r[1])||1,h=(r[1]-s[1])/c+(o[1]-r[1])/l,u=-((r[0]-s[0])/c+(o[0]-r[0])/l),d=Math.hypot(h,u)||1;return[r[0]+t*h/d*e,r[1]+t*u/d*e]})}var P0=i=>new Fe(i.map(e=>new ce(e[0],e[1]))),I0=new te(new Mn(800,800),lt(De.sea,C0(256,De.seaPattern,220)));I0.rotation.x=-Math.PI/2;I0.receiveShadow=!0;ze.add(I0);[[1.1,De.rings[0],.03],[.45,De.rings[1],.06]].forEach(([i,e,t],n)=>{let r=new jr(pe.land.filter(s=>Math.abs(Qg(s))>.02).map(s=>P0(f2(s,i))),1);r.rotateX(-Math.PI/2);let a=new te(r,lt(e,bn(.12,5+n)));a.position.y=t,a.receiveShadow=!0,ze.add(a)});{let i=new Dt(pe.land.map(P0),{depth:In-.12,bevelEnabled:!0,bevelThickness:.04,bevelSize:.05,bevelSegments:1,curveSegments:1});i.rotateX(-Math.PI/2),i.translate(0,.08,0),oo&&qg(i,t=>new me(t.land));let e=new te(i,[oo?lt("#ffffff",bn(.16,7),{vertexColors:!0}):lt(De.land,bn(.16,7)),lt(De.side,bn(.5,9))]);e.castShadow=e.receiveShadow=!0,ze.add(e)}var et=pe.stops.map(i=>i.xy),di=pe.flights||[],Cl=(i,e)=>String(i&&i.leg||"").split("\u2192")[e]||"",m2=i=>{let e=(pe.cities||[]).filter(t=>i.includes(t.name)).sort((t,n)=>n.name.length-t.name.length)[0];return e?e.xy:null},$g=i=>(i=i.trim(),i?ge.airXY&&ge.home&&String(ge.home.airport||"").split(/\s+/)[0].slice(0,2)===i.slice(0,2)?ge.airXY:m2(i):null),sa=di[0]&&(di[0].fromXY||$g(Cl(di[0],0)))||ge.airXY||null,Ag=di.length&&(di[di.length-1].toXY||$g(Cl(di[di.length-1],1)))||sa,g2=di[0]&&Cl(di[0],0).trim()||ge.home&&ge.home.airport||"",gl=(i,e)=>!!i.air&&(Array.isArray(i.days)?i.days.includes(e):i.day===e),uo=i=>{if(i<1)return Math.max(0,pe.stops.findIndex(n=>!n.air));let e=pe.days[i-1];if(e&&e.hero!=null&&et[e.hero])return e.hero;let t=e&&e.stops.find(n=>!pe.stops[n].air&&et[n]);return t??uo(i-1)},Tr=i=>{for(let e=Math.min(i,pe.days.length);e>=1;e--){let t=pe.days[e-1].stops||[];if(t.length)return Math.max(...t)}return 0},e1=i=>{let e=i.days.flatMap(t=>pe.days[t-1].stops||[]).filter(t=>!pe.stops[t].air);return e.length?e:[Tr(i.days[i.days.length-1])]},[[Pl,Il],[Ll,Dl]]=pe.routeBox,t1=pe.land.filter(i=>i.some(([e,t])=>e>Pl-2&&e<Ll+2&&t>Il-2&&t<Dl+2)),po=(i,e)=>t1.some(t=>{let n=!1;for(let r=0,a=t.length-1;r<t.length;a=r++)t[r][1]>e!=t[a][1]>e&&i<(t[a][0]-t[r][0])*(e-t[r][1])/(t[a][1]-t[r][1])+t[r][0]&&(n=!n);return n}),b2=pe.land.map(i=>{let e=1e9,t=1e9,n=-1e9,r=-1e9;return i.forEach(([a,s])=>{e=Math.min(e,a),n=Math.max(n,a),t=Math.min(t,s),r=Math.max(r,s)}),[e,t,n,r]}),pi=(i,e)=>pe.land.some((t,n)=>{let r=b2[n];if(i<r[0]||i>r[2]||e<r[1]||e>r[3])return!1;let a=!1;for(let s=0,o=t.length-1;s<t.length;o=s++)t[s][1]>e!=t[o][1]>e&&i<(t[o][0]-t[s][0])*(e-t[s][1])/(t[o][1]-t[s][1])+t[s][0]&&(a=!a);return a}),v2=t1.flat(),L0=(i,e)=>{let t=1e9;for(let n of v2){let r=(n[0]-i)**2+(n[1]-e)**2;r<t&&(t=r)}return Math.sqrt(t)},ia=(i,e)=>{let t=1e9;for(let n=1;n<et.length;n++){let[r,a]=et[n-1],[s,o]=et[n],c=s-r,l=o-a,h=Math.max(0,Math.min(1,((i-r)*c+(e-a)*l)/(c*c+l*l||1)));t=Math.min(t,Math.hypot(r+c*h-i,a+l*h-e))}return t},ro=(i,e)=>Math.min(...et.map(t=>Math.hypot(t[0]-i,t[1]-e))),jt=[];pe.stops.forEach(i=>{let e=(rn.landmarks||{})[i.name];if(!e)return;let[t,n=0,r]=Array.isArray(e)?e:[e];if(t.startsWith("glb:"))jt.push({x:i.xy[0],y:i.xy[1],r:.6*(r||2.6),flag:!0});else if(t==="torii-row")for(let a=0;a<11;a++){let s=a/10,o=Math.sin(s*Math.PI*1.6)*.32*1.9,c=s*1.5*1.9,l=Math.cos(n),h=Math.sin(n);jt.push({x:i.xy[0]+o*l+c*h,y:i.xy[1]-(-o*h+c*l),r:.34,flag:!0})}else t!=="bridge"&&jt.push({x:i.xy[0],y:i.xy[1],r:{pagoda:.5,taipei101:.38,dunes:.75,karst:1.4,terraces:1.3,volcano:1.3}[t]||.5,flag:t!=="dunes"})});var u0=ge.home&&(ge.home.landmark||(rn.landmarks||{})[ge.home.city]);ge.homeXY&&u0&&jt.push({x:ge.homeXY[0],y:ge.homeXY[1],r:.38,flag:!0});var oa=(pe.worldLM||[]).map(i=>({...i,x:i.xy[0],y:i.xy[1]})),n1=jt.length;oa.forEach(i=>{let e=Math.min(3,...oa.filter(t=>t!==i).map(t=>Math.hypot(t.x-i.x,t.y-i.y)),...jt.slice(0,n1).map(t=>Math.hypot(t.x-i.x,t.y-i.y)-t.r));i.sc=Math.max(.5,Math.min(1.7,e*.85)),i.r=.5*i.sc});for(let i=0;i<40;i++)oa.forEach(e=>{[...oa,...jt.slice(0,n1)].forEach(a=>{if(a===e)return;let s=e.x-a.x,o=e.y-a.y,c=Math.hypot(s,o)||.001,l=e.r+a.r+.05;if(c<l){let h=(l-c)/(a.sc?2:1);e.x+=s/c*h,e.y+=o/c*h}});let t=e.x-e.xy[0],n=e.y-e.xy[1],r=Math.hypot(t,n);r>.3&&(e.x=e.xy[0]+t/r*.3,e.y=e.xy[1]+n/r*.3)});oa.forEach(i=>jt.push({x:i.x,y:i.y,r:i.r,flag:!0}));var x2=[-.87,-.49],bl=([i,e])=>{for(let t=0;t<12;t++)jt.forEach(n=>{if(!n.flag)return;let r=i-n.x,a=e-n.y,s=Math.hypot(r,a),o=n.r*1.3+.32;if(s<o){let[c,l]=s>.001?[r/s,a/s]:x2;i=n.x+c*o,e=n.y+l*o}});return[i,e]},Sr=pe.stops.map(i=>bl(i.xy)),es=ge.homeXY?[bl(ge.homeXY),bl(sa||ge.airXY)]:[],Ja=(i,e)=>jt.every(t=>Math.hypot(t.x-i,t.y-e)>t.r+.1)&&[...Sr,...es].every(t=>Math.hypot(t[0]-i,t[1]-e)>.3),D0=(()=>{let i=Cl(di[0],1).trim().slice(0,2),e=pe.stops.findIndex(n=>gl(n,1));if(e>=0)return e;let t=i?pe.stops.findIndex(n=>n.air&&n.name.startsWith(i)):-1;return t>=0?t:0})(),fi=(()=>{let i=pe.stops[D0],e=sa||[i.xy[0]-60,i.xy[1]-60];return kt(i.xy).sub(kt(e)).setY(0).normalize()})(),ao=new E(-fi.z,0,fi.x),y2=[...Sr,...es].map(([i,e])=>({x:i,y:e,r:.45})).concat(jt.map(i=>({x:i.x,y:i.y,r:i.r+.25}))),i1=(i,e,t)=>{for(let n of[.5,-.5,.75,-.75,1,-1,1.3,-1.3,.3,-.3]){let r=!0;for(let a=e;a<=t&&r;a+=.2){let s=i.clone().addScaledVector(fi,a).addScaledVector(ao,n),o=s.x,c=-s.z;r=pi(o,c)&&y2.every(l=>Math.hypot(l.x-o,l.y-c)>l.r)}if(r)return i.clone().addScaledVector(ao,n)}return i.clone().addScaledVector(ao,.5)},U0=i1(kt(sa||[0,0]),-2.6,1.8),r1=i1(kt(pe.stops[D0].xy).addScaledVector(fi,-.6),-1.8,1.2);[[U0,-2.9,1.9,.38],[r1,-1.9,1.3,.34]].forEach(([i,e,t,n])=>{for(let r=e;r<=t;r+=.3){let a=i.clone().addScaledVector(fi,r);jt.push({x:a.x,y:-a.z,r:n,flag:!1,rw:!0})}});{let i=U0.clone().addScaledVector(fi,1.45).addScaledVector(ao,-.5);jt.push({x:i.x,y:-i.z,r:.75,flag:!1,rw:!0})}var co=Math.min(...et.map(i=>i[0]))-7,Ul=Math.max(...et.map(i=>i[0]))+7,vl=Math.min(...et.map(i=>i[1]))-4,N0=Math.max(...et.map(i=>i[1]))+4;var a1=()=>!1,mi=pe.terrain,so=mi&&mi.lift||.1,lo=(i,e)=>{if(!mi)return 0;let t=mi.grid,n=Math.round((i-t.x0)/t.dx),r=Math.round((e-t.y0)/t.dy);return n<0||r<0||n>=t.w||r>=t.h?0:t.data.charCodeAt(r*t.w+n)-48},gi=(i,e)=>In+lo(i,e)*so,Rg=(i,e)=>{let t=lo(i,e);return t?mi.levels[t-1]:0},Ya=[60,160,320,520,760,1050,1400,1800,2300,2900,3600,4500],an=(i,e,t=.12)=>{let n=0;for(let[r,a]of[[0,0],[t,0],[-t,0],[0,t],[0,-t],[t,t],[-t,-t],[t,-t],[-t,t]])n=Math.max(n,lo(i+r,e+a));return In+n*so};mi&&mi.sheets.forEach((i,e)=>{let t=i.polys.map(([l,...h])=>{let u=P0(l);return h.forEach(d=>u.holes.push(new Gr(d.map(p=>new ce(p[0],p[1]))))),u});if(!t.length)return;let n=so*.18,r=new Dt(t,{depth:so-2*n,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:1});r.rotateX(-Math.PI/2),r.translate(0,In+e*so+n,0);let a=l=>{let h=l.terrain,u=Math.max(0,Ya.filter(p=>p<=i.h).length-1),d=i.h<Ya[0]?0:Math.min(1,(i.h-Ya[u])/((Ya[u+1]||Ya[u]+1)-Ya[u]));return new me(h[Math.min(u,h.length-1)]).lerp(new me(h[Math.min(u+1,h.length-1)]),d)},s="#"+a(De).getHexString(),o="#"+new me(s).multiplyScalar(.62).getHexString();oo&&qg(r,a);let c=new te(r,oo?[lt("#ffffff",bn(.6,21+e),{vertexColors:!0}),lt("#9e9e9e",null,{vertexColors:!0})]:[lt(s,bn(.6,21+e)),lt(o)]);c.castShadow=c.receiveShadow=!0,ze.add(c)});function O0(i,e,t,n){let r=new En(i,e,t.length),a=new ut,s=new me;return t.forEach((o,c)=>{n(a,s,o,c),a.updateMatrix(),r.setMatrixAt(c,a.matrix),r.setColorAt(c,s)}),r.castShadow=r.receiveShadow=!0,ze.add(r),r}var _2=i=>{let e=new Dt(i.map(t=>new Fe(t.map(([n,r])=>new ce(n,r)))),{depth:.04,bevelEnabled:!1});return e.translate(0,0,-.02),e},ll={coast:De.trees.coast||["pine"],inland:De.trees.inland||["maple"]},M2=i=>(De.trees.colorsBy||{})[i]||i==="maple"&&De.trees.colors||i==="pine"&&De.trees.pine||Nm[i],d0=[],s1=[];{let i=[],e=mi&&mi.grid,t=1,n=(h,u,d=0)=>pe.cities.some(p=>Math.hypot(p.xy[0]-h,p.xy[1]-u)<($c.has(p.name)?1:.55)+d);pe.stops.forEach(h=>{if(h.air)return;let u=0;for(let d=0;d<80&&u<De.trees.perStop;d++){let p=st()*6.28,f=.55+st()*1.6,b=h.xy[0]+Math.cos(p)*f,g=h.xy[1]+Math.sin(p)*f;po(b,g)&&ia(b,g)>.26&&ro(b,g)>.5&&Ja(b,g)&&(i.push([b,g]),u++)}});let r=[[Pl-3,Il-3,Ll+3,Dl+3],...ge.homeXY?[[ge.homeXY[0]-3,ge.homeXY[1]-4.2,ge.homeXY[0]+2.2,ge.homeXY[1]+.6]]:[]],a=Math.round((De.trees.clusters??230)*t),s=r.length>1?Math.round(30*t):0;for(let h=0,u=0;e&&h<a*40&&u<a;h++){let d=r[u<s?1:0],p=d[0]+st()*(d[2]-d[0]),f=d[1]+st()*(d[3]-d[1]);if(Rg(p,f)<60||!pi(p,f)||n(p,f,.4))continue;u++;let b=.22+st()*.6,g=18+(st()*46|0);for(let x=0;x<g;x++){let v=st()*6.28,m=b*Math.sqrt(st()),y=p+Math.cos(v)*m*1.4,M=f+Math.sin(v)*m;pi(y,M)&&ia(y,M)>.3&&ro(y,M)>.6&&Ja(y,M)&&!n(y,M)&&i.push([y,M])}}for(let h=0,u=0;h<6e3&&u<320*t;h++){let d=r[h%6?0:r.length-1],p=d[0]+st()*(d[2]-d[0]),f=d[1]+st()*(d[3]-d[1]);pi(p,f)&&ia(p,f)>.3&&ro(p,f)>.7&&Ja(p,f)&&(i.push([p,f]),u++)}let o=ll.inland.includes("cedar")?["cedar","pine"]:ll.coast,c=(h,u)=>{let d=null,p=1e9;return pe.cities.forEach(f=>{let b=Math.hypot(f.xy[0]-h,f.xy[1]-u);b<p&&(p=b,d=f.country)}),d},l=i.map(([h,u])=>{let d=(Xs[c(h,u)]||{}).trees,p=Rg(h,u)>=760,f=d?p?d.high:d.low:p?o:L0(h,u)<.7?ll.coast:ll.inland;return f[st()*f.length|0]});[...new Set(l)].forEach(h=>{let u=M2(h),d=_2(dd[h]||dd.maple),p=i.filter((f,b)=>l[b]===h).flatMap((f,b)=>{let g=.12+st()*.1,x=st()*Math.PI,v=u[(b*7+(st()*3|0))%u.length];return[[...f,g,x,v],[...f,g,x+Math.PI/2,v]]});O0(d,lt("#fff",bn(2,31)),p,(f,b,[g,x,v,m,y])=>{f.position.set(g,gi(g,x)+.04,-x),f.scale.setScalar(v),f.rotation.y=m,b.set(y)})}),console.info("[\u68EE\u6797]",i.length,"\u68F5"),d0.push(...i)}{let i=De.houses||["machiya"],e=[],t=new Set(pe.days.map(r=>uo(r.n)));pe.stops.forEach((r,a)=>{if(r.air)return;let s=0,o=(De.village??12)+(t.has(a)?6:0);for(let c=0;c<240&&s<o;c++){let l=st()*6.28,h=.6+st()*(1.1+c/80),u=r.xy[0]+Math.cos(l)*h,d=r.xy[1]+Math.sin(l)*h;if(!po(u,d)||ia(u,d)<.18||ro(u,d)<.5||a1(u,d)||L0(u,d)<.05||!Ja(u,d))continue;let p=Zc[i[st()*i.length|0]](lt,st,{snow:Xg(d)});p.position.set(u,gi(u,d),-d),p.rotation.y=Math.atan2(r.xy[0]-u,r.xy[1]-d)+(st()-.5)*.6,p.scale.setScalar(.21+st()*.06),e.push(p),s1.push([u,d]),s++}});let n=Vd(e);n&&ze.add(n)}var ts=Wm({scene:ze,J:pe,T:De,mat:lt,snowAt:(i,e)=>Xg(e),groundY:gi,onLand:pi,R:st,H:In,focus:[...et,...ge.homeXY?[ge.homeXY,ge.airXY]:[]],avoid:(i,e)=>ro(i,e)<.55||!Ja(i,e)});console.info("[\u4E16\u754C]",ts.stats);{let i=(()=>{let n=new Fe([[-.5,.12],[.5,.12],[.32,-.1],[-.32,-.1]].map(([o,c])=>new ce(o,c))),r=new Dt(n,{depth:.22,bevelEnabled:!1});r.translate(0,.1,-.11);let a=new He().setFromPoints([new E(-.05,.22,0),new E(.3,.22,0),new E(-.05,.75,0)]);a.computeVertexNormals();let s=r.index?r.toNonIndexed():r;return s.deleteAttribute("uv"),s.clearGroups(),Mi([s,a])})(),e=[];for(let n=0;n<4e3&&e.length<(De.boats??10);n++){let r=co+st()*(Ul-co),a=vl+st()*(N0-vl),s=L0(r,a);s>.35&&s<1.4&&!po(r,a)&&ia(r,a)>.6&&!a1(r,a)&&e.push([r,a])}let t=new fn({color:"#fff",roughness:.95,side:ot});O0(i,t,e,(n,r,[a,s])=>{n.position.set(a,.06,-s),n.scale.setScalar(.22),n.rotation.y=st()*6.28,r.set(De.flagPaper)})}var p0=[];{let i=a=>{let s=R0(900+a),o=[[0,0,.85],...Array.from({length:5},(h,u)=>[(u-2)*.48+(s()-.5)*.2,(s()-.3)*.5,.45+s()*.35])],c=Array.from({length:72},(h,u)=>{let d=u/72*Math.PI*2,p=Math.cos(d),f=Math.sin(d),b=.3;for(let[g,x,v]of o){let m=p*g+f*x,y=m*m-(g*g+x*x-v*v);y>=0&&(b=Math.max(b,m+Math.sqrt(y)))}return new ce(p*b*1.5,f*b*.8)}),l=new Dt(new Fe(c),{depth:.1,bevelEnabled:!0,bevelThickness:.07,bevelSize:.09,bevelSegments:4});return l.rotateX(-Math.PI/2),l},e=lt("#fbf8f2",bn(.4,61)),t=ge.homeXY,n=[co,Ul].concat(t?[t[0]]:[]),r=[vl,N0].concat(t?[t[1]]:[]);for(let a=0,s=0;p0.length<22&&s<400;s++){let o=Math.min(...n)+st()*(Math.max(...n)-Math.min(...n)),c=Math.min(...r)+st()*(Math.max(...r)-Math.min(...r));if(ia(o,c)<3)continue;let l=new te(i(a++),e),h=.9+st()*1.4;l.scale.set(h,1,h),l.position.set(o,6+st()*4,-c),l.castShadow=!1,l.userData.v=.08+st()*.12,ze.add(l),p0.push(l)}}var E2=160,jy=Array.from({length:E2},()=>[st()*10-5,st()*4.5,st()*10-5,st()*6.28,.18+st()*.2]),f0=Jd(qi,lt,{paper:bn(1,51)});ze.add(f0);var t0=0;function T2(i,e,t,n){let r=document.createElement("canvas"),a=r.getContext("2d");a.font=n;let s=Math.ceil(a.measureText(i).width)+40;r.width=s,r.height=160,a.font=n,a.fillStyle=t,a.textBaseline="middle",a.fillText(i,20,80);let o=new mr(r);return o.colorSpace=Ct,o.anisotropy=pt.capabilities.getMaxAnisotropy(),new te(new Mn(e*s/160,e),new cn({map:o,transparent:!0,depthWrite:!1}))}var S2=(pe.seas||[]).map(i=>{let e=T2(i.name,1.5,"rgba(225,232,236,.55)",`500 96px ${De.css["--serif"]}`);return e.rotation.x=-Math.PI/2,e.position.set(i.xy[0],.08,-i.xy[1]),ze.add(e),e}),ho=[],o1=[0];for(let i=1;i<et.length;i++){let[e,t]=[et[i-1],et[i]],n=Math.max(1,Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.3));for(let r=i===1?0:1;r<=n;r++)ho.push([e[0]+(t[0]-e[0])*r/n,e[1]+(t[1]-e[1])*r/n]);o1.push(ho.length-1)}var ji=new Hn(ho.map(([i,e])=>kt([i,e],an(i,e,.16)+.09)),!1,"centripetal"),k0=1200,H0=6,F0=new te(new ki(ji,k0,.034,H0,!1),lt(De.route,null,{emissive:De.route,emissiveIntensity:.18}));F0.castShadow=!0;ze.add(F0);var xl=new te(new ki(ji,k0,.15,H0,!1),lt(De.route,null,{emissive:De.route,emissiveIntensity:.55,transparent:!0,opacity:0}));xl.visible=!1;ze.add(xl);var hl=0,c1=ho.length*24,m0=ji.getLengths(c1),Qa=m0[m0.length-1],fl=i=>m0[Math.round(o1[i]/(ho.length-1)*c1)]/Qa,B0=[];for(let i=Qa-.15;i>0;i-=.3)B0.push(i/Qa);var l1=O0(new Ds(.022,.12,2,6),lt(De.stitch),B0,(i,e,t)=>{let n=ji.getPointAt(t),r=ji.getTangentAt(t);i.position.copy(n),i.quaternion.setFromUnitVectors(new E(0,1,0),r),e.set(De.stitch)});l1.castShadow=!1;var g0=new te(new Zt(.1,18,12),lt("#fffaf0",null,{emissive:"#ffe2b0",emissiveIntensity:.7}));ze.add(g0);function w2(i){i=Math.max(0,Math.min(1,i)),F0.geometry.setDrawRange(0,Math.floor(i*k0)*H0*6),l1.count=B0.filter(e=>e>i).length,g0.position.copy(ji.getPointAt(i)),g0.visible=i>.002&&i<.998}var h1=rn.landmarks||{},A2=new Set,R2={pagoda:1.2,taipei101:1.3,karst:1,terraces:1,volcano:1,dunes:1},$a=new Jc;$a.setMeshoptDecoder(Gm);var ml=0;{let i=$a.parse.bind($a);$a.parse=(e,t,n,r)=>{ml++,i(e,t,a=>{ml--,n(a)},a=>{ml--,r&&r(a)})}}function u1(i,e,t){let n=t||h1[i];if(!n)return null;let[r,a=0,s]=Array.isArray(n)?n:[n],o=(h,u)=>(h.position.set(e[0],u,-e[1]),h.rotation.y=a,ze.add(h),h);if(r.startsWith("glb:")){let h=(pe.models||{})[r.slice(4)];if(!h)return null;let u=Uint8Array.from(atob(h),p=>p.charCodeAt(0)).buffer,d=new ue;return d.scale.setScalar(s||2.6),$a.parse(u,"",p=>{p.scene.traverse(f=>{f.isMesh&&(f.geometry.attributes.normal||f.geometry.computeVertexNormals(),f.castShadow=f.receiveShadow=!0,f.material.roughness=.95,f.material.metalness=0)}),d.add(p.scene)}),o(d,an(e[0],e[1],.9))}let c=Yc[r];if(!c)return null;let l=c(lt);return l.scale.setScalar(s||R2[r]||1.9),o(l,r==="bridge"?.04:an(e[0],e[1],.3))}pe.stops.forEach((i,e)=>{u1(i.name,i.xy)&&A2.add(e)});ge.homeXY&&u0&&u1(ge.home.city,ge.homeXY,u0);var d1=[];oa.forEach(i=>{let e=!pe.stops.some(a=>Math.hypot(a.xy[0]-i.x,a.xy[1]-i.y)<i.r+.4),t=(a,s)=>{e&&d1.push({g:a,s0:s,lim:0,k:1})};if(i.brick&&Yc[i.brick]){let a=Yc[i.brick](lt);a.scale.setScalar(i.sc*1.3),a.position.set(i.x,an(i.x,i.y,i.r),-i.y),a.rotation.y=.5,ze.add(a),t(a,i.sc*1.3);return}let n=(pe.models||{})[i.slug];if(!n)return;let r=new ue;r.scale.setScalar(i.sc),r.position.set(i.x,an(i.x,i.y,i.r),-i.y),ze.add(r),t(r,i.sc),$a.parse(Uint8Array.from(atob(n),a=>a.charCodeAt(0)).buffer,"",a=>{a.scene.traverse(s=>{s.isMesh&&(s.geometry.attributes.normal||s.geometry.computeVertexNormals(),s.castShadow=s.receiveShadow=!0,s.material.roughness=.95,s.material.metalness=0)}),r.add(a.scene)})});function yl(i,e){let t=i.name.replace(/\s+[A-Z]{3}$/,""),n=`600 64px ${De.css["--serif"]}`,r=document.createElement("canvas"),a=r.getContext("2d");a.font=n;let s=Math.ceil(a.measureText(t).width)+70;r.width=s,r.height=112,a.fillStyle=De.flagPaper,a.fillRect(0,0,s,112),a.fillStyle=i.air?De.air:De.bead,a.fillRect(0,0,12,112),a.font=n,a.fillStyle="#2a2420",a.textBaseline="middle",a.fillText(t,36,60);let o=new mr(r);o.colorSpace=Ct,o.anisotropy=pt.capabilities.getMaxAnisotropy();let c=.3,l=c*s/112,h=new ue,u=kt(e,an(...e,.1)),d=new te(new Me(.018,.018,1.05,6),lt("#2a2420"));d.position.y=.52;let p=new te(new Zt(.06,12,8),lt(i.air?De.air:De.bead,null,{metalness:.3,roughness:.5}));p.position.y=1.07;let f=new te(new Mn(l,c),new cn({map:o,side:ot}));return f.position.set(l/2+.02,.86,0),d.castShadow=p.castShadow=f.castShadow=!0,h.add(d,p,f),h.position.copy(u),h.scale.setScalar(1e-4),ze.add(h),{grp:h,s:i,k:0}}var z0=pe.stops.map((i,e)=>Object.assign(yl(i,Sr[e]),{i:e})),Cg=ge.home&&ge.homeXY&&ge.airXY&&ge.home.lng!==ge.home.alng&&ge.home.lat!==ge.home.alat?((i,e,t)=>{let n=(e[0]-t[0])/(i.lng-i.alng),r=(e[1]-t[1])/(i.lat-i.alat);return(a,s)=>[e[0]+(a-i.lng)*n,e[1]+(s-i.lat)*r]})(ge.home,ge.homeXY,ge.airXY):null,_l=(ge.offices||[]).map(i=>({...i,xy:i.xy||(Cg&&i.lng!=null?Cg(i.lng,i.lat):null)})).filter(i=>i.xy),C2=_l.map(i=>{let e=bl(i.xy);z0.push(Object.assign(yl({name:i.name,xy:i.xy,day:0},e),{office:!0}));let t=new te(new Oi(.2,.3,48).rotateX(-Math.PI/2),lt(De.route,null,{emissive:De.route,emissiveIntensity:.8,side:ot,transparent:!0}));return t.position.copy(kt(e,an(...e,.3)+.02)),t.scale.setScalar(1e-4),ze.add(t),t}),Ka=0;ge.homeXY&&z0.push(..._l.length?[]:[yl({name:ge.home.city,xy:ge.homeXY,day:0},es[0])],yl({name:g2,xy:sa||ge.airXY,day:.5,air:!0},es[1]));var Xy=document.getElementById("gallery");var gn=Zm(lt,{paper:bn(1,51),color:"#fbf7ef",accent:De.air||De.stitch});gn.traverse(i=>{i.isMesh&&(i.castShadow=!0)});gn.visible=!1;ze.add(gn);var Pg=i=>pe.stops.findIndex(e=>gl(e,i)),G0=kt(et[D0]),p1=kt(et[Pg(pe.days.length)>=0?Pg(pe.days.length):et.length-1]),ns=sa?kt(sa):G0.clone().add(new E(-60,0,60)),Ml=Ag?kt(Ag):ns,Vi=ge.homeXY?kt(ge.homeXY):ns.clone(),P2=(i,e)=>{let t=e.clone().sub(i).setY(0),n=t.length(),r=Math.min(1,n/12);t.normalize();let a=(c,l)=>i.clone().addScaledVector(t,c).setY(l),s=gi(i.x,-i.z),o=gi(e.x,-e.z);return new Hn([a(0,s+.3),a(.5*r,s+1.1),a(1.6*r,2.8),a(4*r,4.6),a(n/2,5.5),a(n-4*r,4.6),a(n-1.6*r,2.8),a(n-.5*r,o+1.1),a(n,o+.3)],!1,"centripetal")},f1=(i,e,t,n=.1)=>{let r=0;for(let a=e;a<=t;a+=.1){let s=i.clone().addScaledVector(fi,a);r=Math.max(r,an(s.x,-s.z,n))}return r},Nl=U0.setY(ns.y),V0=r1.setY(G0.y),W0=f1(Nl,-2.8,1.4,.16),m1=f1(V0,-.4,1.2,.16);{let e=Nl.clone().addScaledVector(fi,-.7).setY(W0+.006),t=Math.atan2(fi.x,fi.z),n=new ue,r=new te(new Et(.34,.012,4.4),lt("#9d968a",bn(.5,63)));r.receiveShadow=!0,n.add(r);let a=lt("#f6f1e6");for(let s=-4.4/2+.35;s<4.4/2-.3;s+=.3){let o=new te(new Et(.022,.014,.15),a);o.position.set(0,.002,s),n.add(o)}for(let s of[-4.4/2+.1,4.4/2-.1])for(let o=-2;o<=2;o++){if(!o)continue;let c=new te(new Et(.025,.014,.12),a);c.position.set(o*.05,.002,s),n.add(c)}n.position.copy(e),n.rotation.y=t,ze.add(n)}var I2=(i,e,t,n)=>{let r=e.clone().sub(i).setY(0),a=r.length();r.normalize();let s=(o,c)=>i.clone().addScaledVector(r,o).setY(c);return new Hn([s(-2.3,t),s(-1.3,t),s(-.3,t+.01),s(.5,t+.16),s(1.3,t+.5),s(2.3,t+1.05),s(3.8,2.4),s(6.5,4.3),s(10,5.3),s(a/2,5.5),s(a-10,5.3),s(a-6,4.2),s(a-3.4,2.6),s(a-1.7,n+.75),s(a-.7,n+.2),s(a,n),s(a+.6,n),s(a+1,n)],!1,"centripetal")},Wt=I2(Nl,V0,W0+.17,m1+.17),Ol=P2(p1,Ml);Wt.arcLengthDivisions=4e3;var g1=(i,e)=>e.clone().sub(i).setY(0).normalize().multiplyScalar(-10).add(new E(0,5.5,0)),b0=g1(ns,G0),Ig=g1(p1,Ml),L2=[Wt,Ol].map(i=>{let e=i.getSpacedPoints(Math.ceil(i.getLength()/.25)).filter(n=>n.y>gi(n.x,-n.z)+1.1),t=new Ni(new He().setFromPoints(e),new Sc({color:De.stitch,dashSize:.55,gapSize:.45,transparent:!0,opacity:0,depthWrite:!1}));return t.computeLineDistances(),t.visible=!1,t.userData.k=0,ze.add(t),t});function Jr(i,e,t=1){if(!i||t<.002){gn.visible=!1;return}e=Math.min(.9995,Math.max(5e-4,e)),gn.visible=!0,gn.position.copy(i.getPointAt(e)),gn.lookAt(e>.99?gn.position.clone().add(i.getTangentAt(e)):i.getPointAt(Math.min(1,e+.004)));let n=Math.min(1,Math.max(0,(gn.position.y-gi(gn.position.x,-gn.position.z)-.3)/1.2));gn.rotateZ(Math.sin(e*Math.PI*5)*.14*n),gn.scale.setScalar(t)}var Pt=(()=>{let i=Wt.getLength(),e=Nl.clone().addScaledVector(fi,1.45).addScaledVector(ao,-.5).setY(W0+.5),t=6e3,n=0,r=1e9,a=0,s=i;for(let f=0;f<=t*.06;f++){let b=Wt.getPointAt(f/t),g=Math.hypot(b.x-e.x,b.z-e.z);g<r&&(r=g,n=f/t*i)}for(let f=0;f<=t*.06;f++){let b=f/t*i;if(b>n)break;if(Wt.getPointAt(f/t).distanceTo(e)<1.25){a=b;break}}r=1e9;for(let f=Math.floor(t*.94);f<=t;f++){let b=Wt.getPointAt(f/t).distanceTo(V0.clone().setY(m1+.17));b<r&&(r=b,s=f/t*i)}let o=2.4,c=3,l=7.4,h=2*n/c,u=2*((s-n)/l-h),d=2*(i-s)/h,p=f=>f<o?0:f<o+c?n*((f-o)/c)**2:f<o+c+l?(()=>{let b=(f-o-c)/l;return n+l*(h*b+u*(b/2-Math.sin(2*Math.PI*b)/(4*Math.PI)))})():(()=>{let b=Math.min(1,(f-o-c-l)/d);return s+(i-s)*(2*b-b*b)})();return{L:i,CR:e,sp:n,sf:a,TA:o,TB:c,TR:l,TE:d,dur:o+c+l+d,s:p}})(),El=i=>Math.atan2(i.x,i.z),n0=i=>Math.asin(Math.max(-1,Math.min(1,i.y/(i.length()||1)))),Tl=i=>i-Math.round(i/(2*Math.PI))*2*Math.PI,D2=(i,e)=>new E(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)),U2=Wt.getPointAt(0).sub(Pt.CR).normalize(),to=Wt.getPointAt(Pt.sf/Pt.L).sub(Pt.CR).normalize(),Lg=Math.sign(Tl(El(Wt.getPointAt(Pt.sp/Pt.L).sub(Pt.CR))-El(to)))||1,i0=new E,N2=new E;function O2(i){Ee.fd=9*Ti(i/Pt.TA);let e=Pt.s(i),t=e/Pt.L,n=N2.copy(Wt.getPointAt(Math.min(1,t))),{CR:r,TA:a,TB:s}=Pt,o=a+s;if(i<a)ra(qe.from,{p:r,t:r.clone().addScaledVector(U2,Math.max(3.5,Wt.getPointAt(0).distanceTo(r)))},Xi(i/a));else if(i<o+.06){let c=e<Pt.sf?i0.subVectors(n,r).normalize():i0.copy(to);if(Ee.p.copy(r),Ee.t.copy(r).addScaledVector(c,Math.max(3.5,n.distanceTo(r))),!aa&&e>Pt.sf){let l=.012*Math.max(0,1-n.distanceTo(r)/1.6);Ee.p.x+=Math.sin(i*93)*l,Ee.p.y+=Math.sin(i*71+1)*l}}else{let c=.28+.72*Ti((i-o)/3),l=n.clone().addScaledVector(b0,c),h=Xi(Math.min(1,(i-o-.06)/1.15));Ee.p.lerpVectors(r,l,h);let u=i0.subVectors(n,Ee.p),d=El(to),p=Tl(El(u)-d-Lg*Math.PI)+Lg*Math.PI,f=D2(d+p*h,n0(to)+(n0(u)-n0(to))*h);Ee.t.copy(Ee.p).addScaledVector(f,Math.max(3.5,u.length()))}if(Jr(Wt,t,1-.4*Ti((i-Pt.TA-Pt.TB-Pt.TR)/Pt.TE)),t>.42&&t<.6){let c=Wt.getTangentAt(t).setY(0).normalize(),l=n.clone().addScaledVector(c,7).setY(0);po(l.x,-l.z)||ts.dolphinJump(Wt,l,c)}}var Ti=i=>i<=0?0:i>=1?1:i*i*(3-2*i),k2=.34,j0=Ym(lt,{color:De.route,paper:bn(1,61)}),ca={bus:j0},b1={bus:1},v1=new Set,x1=new Set,y1=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),i.visible=!1,ze.add(i),i);y1(j0);var Wi=[],Qr=[],Dg=new Map;{let i=[Pl-3,Il-3,Ll+3,Dl+3],e=[],t=([n,r])=>{let a=Math.round(n*50)+","+Math.round(r*50),s=Dg.get(a);return s===void 0&&(s=Wi.length,Dg.set(a,s),Wi.push([n,r]),Qr.push([])),s};pe.roads.forEach(n=>{if(n.t==="F"||!n.pts.some(([o,c])=>o>i[0]&&o<i[2]&&c>i[1]&&c<i[3]))return;let r=n.pts.filter(([o,c])=>pi(o,c));if(r.length<2)return;let a=n.t==="H"?.85:1,s=t(r[0]);e.push(s);for(let o=1;o<r.length;o++){let c=t(r[o]);if(c===s)continue;let l=Math.hypot(r[o][0]-r[o-1][0],r[o][1]-r[o-1][1])*a;Qr[s].push([c,l]),Qr[c].push([s,l]),s=c}e.push(s)}),e.forEach(n=>{let r=-1,a=.3;Wi.forEach((s,o)=>{if(o===n||Qr[n].some(([l])=>l===o))return;let c=Math.hypot(s[0]-Wi[n][0],s[1]-Wi[n][1]);c<a&&(a=c,r=o)}),r>=0&&(Qr[n].push([r,a*2]),Qr[r].push([n,a*2]))})}function H2(i,e){let t=Wi.length,n=new Float64Array(t).fill(1/0),r=new Int32Array(t).fill(-1),a=[[0,i]];n[i]=0;let s=l=>{for(;l>0;){let h=l-1>>1;if(a[h][0]<=a[l][0])break;[a[h],a[l]]=[a[l],a[h]],l=h}},o=()=>{let l=a[0],h=a.pop();if(a.length){a[0]=h;let u=0;for(;;){let d=2*u+1,p=d+1,f=u;if(d<a.length&&a[d][0]<a[f][0]&&(f=d),p<a.length&&a[p][0]<a[f][0]&&(f=p),f===u)break;[a[f],a[u]]=[a[u],a[f]],u=f}}return l};for(;a.length;){let[l,h]=o();if(!(l>n[h])){if(h===e)break;for(let[u,d]of Qr[h])l+d<n[u]&&(n[u]=l+d,r[u]=h,a.push([n[u],u]),s(a.length-1))}}if(!isFinite(n[e]))return null;let c=[];for(let l=e;l>=0;l=r[l])c.push(Wi[l]);return c.reverse()}var v0=(i,e=()=>!0)=>{let t=-1,n=1e9;return Wi.forEach((r,a)=>{let s=Math.hypot(r[0]-i[0],r[1]-i[1]);s<n&&e(r)&&(n=s,t=a)}),[t,n]},X0=[...jt.filter(i=>!i.rw).map(i=>({x:i.x,y:i.y,r:i.r+.12})),...[...Sr,...es].map(([i,e])=>({x:i,y:e,r:.12}))],Sl=([i,e])=>X0.every(t=>Math.hypot(t.x-i,t.y-e)>t.r),x0=pe.stops.map((i,e)=>{let t=Sr[e],[n,r]=v0(t,Sl);if(n>=0&&r<.8)return Wi[n].slice();for(let a=.25;a<1.6;a+=.15)for(let s=0;s<16;s++){let o=[t[0]+Math.cos(s/16*6.283)*a,t[1]+Math.sin(s/16*6.283)*a];if(pi(...o)&&Sl(o))return o}return t.slice()}),y0=(i,e)=>{for(let t=0;t<e;t++){let n=[i[0]];for(let r=0;r<i.length-1;r++){let[a,s]=[i[r],i[r+1]];n.push([a[0]*.75+s[0]*.25,a[1]*.75+s[1]*.25],[a[0]*.25+s[0]*.75,a[1]*.25+s[1]*.75])}n.push(i[i.length-1]),i=n}return i},_0=(i,e)=>{let t=[i[0]];for(let n=1;n<i.length;n++){let[r,a]=[i[n-1],i[n]],s=Math.max(1,Math.ceil(Math.hypot(a[0]-r[0],a[1]-r[1])/e));for(let o=1;o<=s;o++)t.push([r[0]+(a[0]-r[0])*o/s,r[1]+(a[1]-r[1])*o/s])}return t},F2=i=>i.filter((e,t)=>!t||Math.hypot(e[0]-i[t-1][0],e[1]-i[t-1][1])>.02);function q0(i){i=_0(y0(F2(i),2),.08);for(let n=0;n<3;n++)i=i.map((r,a)=>{if(!a||a===i.length-1)return r;let[s,o]=r;return X0.forEach(c=>{let l=s-c.x,h=o-c.y,u=Math.hypot(l,h)||.001;u<c.r&&(s=c.x+l/u*c.r,o=c.y+h/u*c.r)}),[s,o]});i=_0(y0(i,1),.06);let e=i.map(([n,r])=>an(n,r,.07)+.012);for(let n=1;n<e.length;n++)e[n]=Math.max(e[n],e[n-1]-.012);for(let n=e.length-2;n>=0;n--)e[n]=Math.max(e[n],e[n+1]-.012);let t=new Hn(i.map(([n,r],a)=>new E(n,e[a],-r)),!1,"centripetal");return t.arcLengthDivisions=i.length*4,t}function B2(i,e){let[t,n]=v0(i),[r,a]=v0(e),s=n<1.6&&a<1.6?H2(t,r):null,o=Math.hypot(e[0]-i[0],e[1]-i[1]);if(!s)return[i,e];let c=[i,...s,e];return c.reduce((h,u,d)=>d?h+Math.hypot(u[0]-c[d-1][0],u[1]-c[d-1][1]):0,0)>o*3.5+2?[i,e]:c}var z2=.068;function G2(i,e){let n=Math.min(i[0],e[0])-1.6,r=Math.min(i[1],e[1])-1.6,a=Math.ceil((Math.abs(i[0]-e[0])+3.2)/.08),s=Math.ceil((Math.abs(i[1]-e[1])+3.2)/.08),o=m=>[n+m%a*.08,r+Math.floor(m/a)*.08],c=(m,y,M)=>pi(m,y)||[[M,0],[-M,0],[0,M],[0,-M]].some(([_,T])=>pi(m+_,y+T)),l=new Uint8Array(a*s);for(let m=0;m<l.length;m++){let[y,M]=o(m);l[m]=c(y,M,.09)?0:c(y,M,.22)?2:1}let h=(m,y)=>{let[M,_]=o(y);return Math.hypot(M-m[0],_-m[1])>1.6?1e9:Math.hypot(M-m[0],_-m[1]+.8)+(Sl([M,_])?0:X0.every(T=>Math.hypot(T.x-M,T.y-_)>T.r*.8)?.15:9)},u=-1;for(let m=0,y=1e8;m<l.length;m++)if(l[m]){let M=h(e,m);M<y&&(y=M,u=m)}if(u<0)return null;let d=new Float64Array(l.length).fill(1/0),p=new Int32Array(l.length).fill(-1),f=[u];for(d[u]=0;f.length;){let m=0;for(let T=1;T<f.length;T++)d[f[T]]<d[f[m]]&&(m=T);let y=f.splice(m,1)[0],M=y%a,_=Math.floor(y/a);for(let T=-1;T<=1;T++)for(let S=-1;S<=1;S++){if(!S&&!T)continue;let w=M+S,P=_+T;if(w<0||P<0||w>=a||P>=s)continue;let I=P*a+w;if(!l[I])continue;let U=Math.hypot(S,T)*(l[I]===2?2.5:1);d[y]+U<d[I]&&(d[I]===1/0&&f.push(I),d[I]=d[y]+U,p[I]=y)}}let b=-1;for(let m=0,y=1e8;m<l.length;m++)if(isFinite(d[m])){let M=h(i,m);M<y&&(y=M,b=m)}if(b<0)return null;let g=[];for(let m=b;m>=0;m=p[m])g.push(o(m));let x=_0(y0(g.filter((m,y)=>y%2===0||y===g.length-1),3),.08),v=new Hn(x.map(([m,y])=>new E(m,z2,-y)),!1,"centripetal");return v.arcLengthDivisions=x.length*4,v}var V2=/遊船|渡船|乘船|搭船|坐船|觀光船|遊覽船|遊覧船|屋形船|クルーズ|川下り|舟下り|cruise/i,_1=[{key:"shinkansen",rx:/新幹線|shinkansen/i,make:Qm,path:"rail",sc:1,opts:{cars:2}},{key:"crh",rx:/高鐵|CRH|和諧號|復興號/,make:lg,path:"rail",sc:1,opts:{cars:2}},{key:"alpine",rx:/冰河列車|glacier express/i,make:rg,path:"rail",sc:1,opts:{cars:2}},{key:"ltdexp",rx:/特急|ＪＲ|(^|[^A-Za-z])JR([^A-Za-z]|$)/,make:$m,path:"rail",sc:1,opts:{cars:2}},{key:"ropeway",rx:/纜車|ロープウェ[イー]|ropeway|cable ?car/i,make:eg,path:"cable",sc:1,opts:{span:0}},{key:"rivercruise",rx:/(長江|漓江|三峽).{0,8}(遊船|遊輪|郵輪)|(遊船|遊輪|郵輪).{0,8}(長江|漓江|三峽)/,make:ug,path:"water",sc:1.4},{key:"junk",rx:/下龍灣|ha ?long bay/i,make:sg,path:"water",sc:1.4},{key:"wupeng",rx:/烏篷船/,make:hg,path:"water",sc:1.4},{key:"bamboo",rx:/竹筏/,make:dg,path:"water",sc:1.4},{key:"gondola",rx:/貢多拉|gondola/i,make:ig,path:"water",sc:1.4},{key:"longtail",rx:/長尾船|long-?tail/i,make:og,path:"water",sc:1.4},{key:"ferry",rx:/渡輪|フェリー|ferry/i,make:tg,path:"water",sc:1.4},{key:"tuktuk",rx:/嘟嘟車|tuk-? ?tuk/i,make:ag,path:"tail",sc:.8,last:!0},{key:"cyclo",rx:/三輪車|cyclo/i,make:cg,path:"tail",sc:.8,last:!0},{key:"rickshaw",rx:/人力車|人力车|jinrikisha|rickshaw/i,make:ng,path:"tail",sc:.8,last:!0},{key:"boat",rx:V2,make:Km,path:"water",sc:1.4,last:!0}],M1=pe.stops.map((i,e)=>{let t=pe.days.find(a=>(a.stops||[]).includes(e));if(!t||i.air||!e)return null;let n=[...t.spots||[],t.desc||""],r=a=>pe.stops[a].name.replace(/\s+[A-Z]{3}$/,"");for(let a of _1){let s=n.filter(c=>a.rx.test(c));if(!s.length)continue;let o=t.stops.filter(c=>s.some(l=>l.includes(r(c))));if(o.length?o.includes(e):a.last&&e===Math.max(...t.stops))return a}return null}),ul=(()=>{let i=[Pl-3,Il-3,Ll+3,Dl+3],e=[],t=[],n=new Map,r=[],a=([c,l])=>{let h=Math.round(c*50)+","+Math.round(l*50),u=n.get(h);return u===void 0&&(u=e.length,n.set(h,u),e.push([c,l]),t.push([])),u};return(pe.rail||[]).forEach(c=>{if(c.t==="F"||!c.pts.some(([u,d])=>u>i[0]&&u<i[2]&&d>i[1]&&d<i[3]))return;let l=c.pts.filter(([u,d])=>pi(u,d));if(l.length<2)return;let h=a(l[0]);r.push(h);for(let u=1;u<l.length;u++){let d=a(l[u]);if(d===h)continue;let p=Math.hypot(l[u][0]-l[u-1][0],l[u][1]-l[u-1][1]);t[h].push([d,p]),t[d].push([h,p]),h=d}r.push(h)}),r.forEach(c=>{let l=-1,h=.3;e.forEach((u,d)=>{if(d===c)return;let p=Math.hypot(u[0]-e[c][0],u[1]-e[c][1]);p<h&&(h=p,l=d)}),l>=0&&(t[c].push([l,h*2]),t[l].push([c,h*2]))}),{near:c=>{let l=-1,h=1e9;return e.forEach((u,d)=>{let p=Math.hypot(u[0]-c[0],u[1]-c[1]);p<h&&(h=p,l=d)}),[l,h]},path:(c,l)=>{let h=new Float64Array(e.length).fill(1/0),u=new Int32Array(e.length).fill(-1),d=new Uint8Array(e.length);for(h[c]=0;;){let f=-1;for(let b=0;b<e.length;b++)!d[b]&&h[b]<1/0&&(f<0||h[b]<h[f])&&(f=b);if(f<0||f===l)break;d[f]=1;for(let[b,g]of t[f])h[f]+g<h[b]&&(h[b]=h[f]+g,u[b]=f)}if(!isFinite(h[l]))return null;let p=[];for(let f=l;f>=0;f=u[f])p.push(e[f]);return p.reverse()},n:e.length}})();function W2(i,e){if(!ul.n)return null;let[t,n]=ul.near(i),[r,a]=ul.near(e);if(n>1.2||a>1.2)return null;let s=ul.path(t,r);return!s||s.length<2?null:q0([i,...s,e])}function j2(i,e){let t=an(...i,.1),n=an(...e,.1),r=Math.max(8,Math.ceil(Math.hypot(e[0]-i[0],e[1]-i[1])/.1)),a=.45;for(let c=0;c<=r;c++){let l=c/r,h=i[0]+(e[0]-i[0])*l,u=i[1]+(e[1]-i[1])*l;a=Math.max(a,an(h,u,.12)+.35-(t+(n-t)*l))}let s=Array.from({length:r+1},(c,l)=>{let h=l/r;return new E(i[0]+(e[0]-i[0])*h,t+(n-t)*h+a,-(i[1]+(e[1]-i[1])*h))}),o=new Hn(s,!1,"centripetal");return o.arcLengthDivisions=r*4,ze.add(new Ni(new He().setFromPoints(s),new Yn({color:"#3b3a38"}))),[[i,t],[e,n]].forEach(([c,l])=>{let h=new te(new Me(.012,.018,a+.04,6),lt("#6f6a64"));h.position.set(c[0],l+(a+.04)/2,-c[1]),h.castShadow=!0,ze.add(h)}),o}var wr=pe.stops.map((i,e)=>{if(!e)return null;let t=x0[e-1],n=x0[e],r=M1[e],a=r&&r.path==="water"?G2(t,n):r&&r.path==="rail"?W2(t,n):r&&r.path==="cable"?j2(t,n):null,s=a||r&&r.path==="road"?r.key:"bus";a||(a=q0(B2(t,n)));let o=Math.max(a.getLength(),.001);return{c:a,mode:s,len:o,tail:r&&r.path==="tail"?{mode:r.key,len:Math.min(.9,o*.35)}:null}});wr.forEach(i=>i&&[i.mode,i.tail&&i.tail.mode].forEach(e=>{if(!e||ca[e])return;let t=_1.find(n=>n.key===e);ca[e]=y1(t.make(lt,{paper:bn(1,64),...t.opts||{}})),b1[e]=t.sc||1,t.path==="cable"&&v1.add(e),t.path==="water"&&x1.add(e)}));var no=(i,e)=>e!==!!i.rev&&i.tail?i.tail.mode:i.mode;console.info("[\u4EA4\u901A]",wr.map((i,e)=>i?`${e}:${i.mode}${i.tail?"+"+i.tail.mode:""}${i.len.toFixed(1)}`:"").join(" "));var ui=(()=>{let i=x0[0],e=et[Math.min(1,et.length-1)],t=Math.atan2(e[1]-i[1],e[0]-i[0]),n=null,r=jt.filter(p=>!p.rw&&!pe.stops.some(f=>Math.hypot(f.xy[0]-p.x,f.xy[1]-p.y)<p.r+.3));for(let p=0;p<36;p++){let f=p/36*2*Math.PI,b=Math.cos(f),g=Math.sin(f),x=0,v=lo(...i);for(let _=0;_<=4.2;_+=.2){let T=[i[0]+b*_,i[1]+g*_];pi(...T)&&Sl(T)&&x++,Math.abs(lo(...T)-v)>1&&(x-=.5)}let m=f+Math.PI,y=r.filter(_=>{let T=_.x-i[0],S=_.y-i[1];return Math.hypot(T,S)<20&&Math.abs(Tl(Math.atan2(S,T)-m))<.87}).length,M=Math.min(x,19)*10+25*Math.cos(Tl(m-t))-200*y;(!n||M>n.sc)&&(n={sc:M,a:f})}let a=new E(Math.cos(n.a),0,-Math.sin(n.a)),s=new E(a.z,0,-a.x),o=new E(i[0],0,-i[1]),c=(p,f)=>{let b=o.clone().addScaledVector(a,p).addScaledVector(s,f);return[b.x,-b.z]},l=q0([c(3.35,.62),c(2.9,.2),c(1.8,.03),c(.6,0),i]),h=c(3.6,.12),u=0;for(let p=0;p<=3.6;p+=.2){let f=c(p,.06);u=Math.max(u,an(f[0],f[1],.15))}let d=new E(h[0],Math.max(an(h[0],h[1],.15)+.22,u+.16),-h[1]);return{c:l,CR:d,len:l.getLength(),TA:1.3,TB:3.3,TC:2.1,get dur(){return this.TA+this.TB+this.TC}}})(),Er=pe.stops.map((i,e)=>{let t=e?wr[e].c:ui.c,n=t.getPointAt(1),r=t.getTangentAt(1);return{mode:e?no(wr[e],!0):"bus",p:n,ahead:n.clone().add(r)}}),M0=ea?111.2/Math.abs(ea.ky):11,Y0=pe.days.map((i,e)=>{let t=e?Tr(e):0,n=Tr(e+1),r={},a=0;for(let s=t+1;s<=n;s++){let o=wr[s];if(!o)continue;let c=o.len*M0,l=o.tail?o.tail.len*M0:0;a+=c,r[o.mode]=(r[o.mode]||0)+c-l,o.tail&&(r[o.tail.mode]=(r[o.tail.mode]||0)+l)}return{day:i.n,km:Math.round(a),mode:Object.keys(r).sort((s,o)=>r[o]-r[s])[0]||"bus",modes:Object.fromEntries(Object.entries(r).map(([s,o])=>[s,Math.round(o)])),raw:a}}),Ug=0,X2=Y0.map(i=>{let e=Ug;return Ug+=i.raw,e});function q2(i,e){let t=[];if(i<e)for(let o=i+1;o<=e;o++)t.push({...wr[o],rev:!1});else for(let o=i;o>e;o--)t.push({...wr[o],rev:!0});let n=t.reduce((o,c)=>o+c.len,0),r={legs:t,L:n,a:Er[i].p.clone(),b:Er[e].p.clone(),m0:Er[i].mode,m1:Er[e].mode},a=48,s=Array.from({length:a+1},(o,c)=>E1(r,c/a).p.clone().sub(new E().lerpVectors(r.a,r.b,c/a)).setY(0));for(let o=0;o<3;o++)s=s.map((c,l)=>{let h=new E,u=0;for(let d=Math.max(0,l-8);d<=Math.min(a,l+8);d++)h.add(s[d]),u++;return h.multiplyScalar(1/u)});return r.dev=s.map((o,c)=>o.multiplyScalar(.45*Math.sin(Math.PI*c/a))),r}var Y2=(i,e)=>{let t=Math.max(0,Math.min(1,e))*(i.dev.length-1),n=Math.floor(t),r=Math.min(i.dev.length-1,n+1);return S0.lerpVectors(i.dev[n],i.dev[r],t-n)},r0=new E,a0=new E;function E1(i,e){let t=Math.max(0,Math.min(1,e))*i.L,n=0;for(;n<i.legs.length-1&&t>i.legs[n].len;)t-=i.legs[n].len,n++;let r=i.legs[n],a=Math.max(0,Math.min(1,t/r.len)),s=.05/r.len,o=r.rev?1-a:a;r0.copy(r.c.getPointAt(o)),a0.copy(r.c.getPointAt(Math.max(0,Math.min(1,o+(r.rev?-s:s))))),Math.abs(o-(r.rev?0:1))<1e-4&&a0.copy(r0).add(r.c.getTangentAt(o).multiplyScalar(r.rev?-1:1));let c=n?no(i.legs[n-1],!0):i.m0,l=n<i.legs.length-1?no(i.legs[n+1],!1):i.m1,h=r.rev?r.len-t:t,u=r.tail?r.len-r.tail.len:1/0,d=h>u?r.tail.mode:r.mode,p=Math.min(c!==no(r,!1)?Ti(t/.25):1,l!==no(r,!0)?Ti((r.len-t)/.25):1,r.tail?Ti(Math.abs(h-u)/.2):1);return{mode:d,p:r0,ahead:a0,k:p}}var K2=i=>i.k==="day"?Tr(i.n):i.k==="chapter"?i.c.days[0]>1?Tr(i.c.days[0]-1):0:i.k==="memory"?et.length-1:-1,ta=-1,na={k:0};function Z2(i,e,t,n,r){na.k=n?e:hi(na.k,e,5,t);let a=ca[i.mode]||j0;if(Object.values(ca).forEach(l=>{l!==a&&(l.visible=!1)}),a.visible=na.k>.002,!a.visible)return;let s=k2*(b1[i.mode]||1)*Math.min(2.4,Math.max(1,Ee.p.distanceTo(Ee.t)/6))*Math.max(na.k,1e-4),o=v1.has(i.mode);a.position.copy(i.p),x1.has(i.mode)&&(a.position.y+=Math.sin(r/420)*.004),o&&(a.position.y-=(a.userData.cableY??.62)*s);let c=Math.hypot(i.ahead.x-i.p.x,i.ahead.z-i.p.z);c>1e-5&&a.lookAt(i.ahead.x,a.position.y+(o?0:Math.max(-.2,Math.min(.2,(i.ahead.y-i.p.y)/c))*c),i.ahead.z),a.scale.setScalar(s)}function J2(i,e){Ee.fd=8*Ti(i/ui.TA)*(1-Ti((i-ui.TA-ui.TB)/ui.TC));let{TA:t,TB:n,c:r,CR:a}=ui,s=Math.max(0,Math.min(1,(i-t)/n)),o=1-(1-s)**1.4,c=r.getPointAt(o),l=h=>Er[0].p.clone().setY(Er[0].p.y+.1).lerp(h.clone().setY(h.y+.06),.3);return i<t?ra(qe.from,{p:a,t:l(r.getPointAt(0))},Xi(i/t)):i<t+n?(Ee.p.copy(a),Ee.p.y+=.05*Ti((s-.6)/.4),Ee.t.copy(l(c))):ra({p:a.clone().setY(a.y+.05),t:l(r.getPointAt(1))},e,Xi((i-t-n)/ui.TC)),{mode:"bus",p:c,ahead:r.getPointAt(Math.min(1,o+.01)).add(o>.99?r.getTangentAt(1):new E)}}var Ng=3,$r=0,Mr=null,Og=!1,E0=new E(-.75,.85,.5),T1=pe.days.map(i=>{let e=yg(i,qi);if(!e)return null;let t=[...i.stops].reverse().find(a=>!pe.stops[a].air);if(t==null)return null;let n=pe.stops[t].xy,r=Tg(e,lt,{center:[n[0],-n[1]],ground:(a,s)=>gi(a,-s),avoid:(a,s)=>ia(a,-s)<.18||!Ja(a,-s),paper:bn(1,71),lamps:Math.min(3,Ng)});return Ng-=r.userData.lamps||0,ze.add(r),{g:r,tp:_g("night",qi)}}),K0=pe.days.map(i=>Sg(i)),Q2={rain:{tp:Qd("rain",qi),w:"rain"},fog:{tp:Qd("fog",qi),w:"fog"}},S1=K0.some(i=>i!=="clear")?{rain:$d("rain",lt,{season:qi,paper:bn(1,81)}),fog:$d("fog",lt,{paper:bn(1,81)})}:{};Object.values(S1).forEach(i=>ze.add(i));var s0={rain:0,fog:0},wl=et.map(i=>i[0]),Al=et.map(i=>i[1]),$2=[(Math.min(...wl)+Math.max(...wl))/2,(Math.min(...Al)+Math.max(...Al))/2],kg=Math.max(Ul-co-14,(N0-vl-8)*1.8),wn=(i,e,t,n)=>i.clone().add(new E(Math.sin(t)*Math.cos(n)*e,Math.sin(n)*e,Math.cos(t)*Math.cos(n)*e)),Ot=(()=>{let i=rn.teaser&&rn.teaser.stop,e=b=>{let g=h1[b];return String((Array.isArray(g)?g[0]:g)||"")},t=i?pe.stops.findIndex(b=>b.name.includes(i)):-1;t<0&&(t=pe.stops.findIndex(b=>!b.air&&e(b.name).startsWith("glb:"))),t<0&&(t=pe.stops.findIndex(b=>!b.air&&e(b.name))),t<0&&(t=uo(Math.floor((pe.days.length-1)/2)+1));let n=fl(t),r=Math.max(0,n-10/Qa),a=Math.max(r,n-3.6/Qa),s=kt(et[t],an(...et[t],.3)+.7),o=Math.max(.6,...jt.filter(b=>!b.rw&&Math.hypot(b.x-et[t][0],b.y-et[t][1])<b.r).map(b=>b.r)),c=jt.filter(b=>!b.rw),l=ji.getTangentAt((r+a)/2).cross(new E(0,1,0)).setY(0).normalize(),h=()=>innerHeight>innerWidth?13:9.5,u=b=>{for(let g=0;g<4;g++)c.forEach(x=>{let v=b.y-gi(x.x,x.y),m=Math.sqrt(Math.max(0,(h()*x.r)**2-v*v)),y=b.x-x.x,M=b.z+x.y,_=Math.hypot(y,M)||.001;_<m&&(b.x=x.x+y/_*m,b.z=-x.y+M/_*m)});return b},d=b=>u(ji.getPointAt(b).addScaledVector(l,2.6).add(new E(0,4.5,0))),p=b=>ji.getPointAt(Math.min(1,b+5/Qa)).add(new E(0,.2,0)),f=Math.atan2(d(a).x-s.x,d(a).z-s.z);return{h:t,u0:r,u1:a,camAt:d,lookAt:p,lm:s,end:()=>({p:wn(s,h()*o,f+.4,.55),t:s}),TG:6.2,TR:3.4}})(),e3=(()=>{let i=[0,.25,.5,.75,1].map(t=>Ot.lookAt(Ot.u0+(Ot.u1-Ot.u0)*t)).concat([Ot.lm]),e=i.reduce((t,n)=>t.add(n),new E).multiplyScalar(1/i.length);return{c:e,R:Math.max(...i.map(t=>t.distanceTo(e)))+5}})();function w1(){let{c:i,R:e}=e3;Jt.target.position.copy(i),Jt.position.copy(i).addScaledVector(E0,60);let t=Jt.shadow.camera;t.left=t.bottom=-e,t.right=t.top=e,t.near=1,t.far=140,t.updateProjectionMatrix(),Jt.target.updateMatrixWorld(),Jt.updateMatrixWorld()}var wt=null;function t3(i){let e=wt.hold??(i-wt.t0)/1e3,{TG:t,TR:n}=Ot;if(Ee.off=0,Ee.blur=.07,Rl.u=0,e<t){let r=e/t,a=Ot.u0+(Ot.u1-Ot.u0)*(.5*r+.5*Xi(r));Ee.p.copy(Ot.camAt(a)),Ee.t.copy(Ot.lookAt(a))}else ra({p:Ot.camAt(Ot.u1),t:Ot.lookAt(Ot.u1)},Ot.end(),Xi(Math.min(1,(e-t)/n)));if(e>=t+n){let r=wt.res;wt=null,pt.shadowMap.autoUpdate=!0,Z0(Ht[zt]),qe={from:{p:Ee.p.clone(),t:Ee.t.clone(),off:Ee.off,blur:Ee.blur,u:0},to:fo(Ht[zt]),t0:i,dur:aa?.001:2.6,hold:null},r()}}var A1=()=>{if(!wt)return;let i=wt.res;wt=null,pt.shadowMap.autoUpdate=!0,Z0(Ht[zt]),qe={from:{p:Ee.p.clone(),t:Ee.t.clone(),off:Ee.off,blur:Ee.blur,u:0},to:fo(Ht[zt]),t0:performance.now(),dur:aa?.001:2.6,hold:null},i()},R1=()=>new Promise(i=>{if(aa){i();return}wt={t0:performance.now(),res:i},w0.has("tzold")||(w1(),pt.shadowMap.autoUpdate=!1,pt.shadowMap.needsUpdate=!0),document.body.dataset.mode="teaser",setTimeout(()=>{wt&&wt.hold==null&&A1()},10500)});window.HUD&&window.HUD.teaser&&window.HUD.teaser(R1);var Ht=[{k:"brand"},{k:"why"},{k:"promise"},{k:"hq"},{k:"overview"},{k:"depart"}],Hg=Array.isArray(rn.highlightDays)&&rn.highlightDays.length?new Set(rn.highlightDays):null;rn.chapters.forEach((i,e)=>{Ht.push({k:"chapter",c:i,ci:e}),i.days.forEach(t=>{(!Hg||Hg.has(t))&&Ht.push({k:"day",n:t,c:i,ci:e})})});Ht.push({k:"memory"},...rn.mode==="proposal"?[]:[{k:"return"}],{k:"close"});var o0=new Map;function Fg(i,e,t,n,r,a){let s=(a?"c":"")+i+"|"+t.toFixed(2);if(o0.has(s))return o0.get(s);let o=a||(pe.days[i-1].stops||[]).filter(p=>!pe.stops[p].air),c=(o.length?o:[uo(i)]).map(p=>kt(Sr[p],an(...Sr[p],.1)+.9)),l=jt.filter(p=>!p.rw),h=(p,f)=>{let b=0;for(let g=1;g<12;g++){let x=p.clone().lerp(f,g/12);l.forEach(v=>{Math.hypot(x.x-v.x,x.z+v.y)<v.r*.9&&x.y<gi(v.x,v.y)+2.2*v.r&&b++})}return b},u=r,d=1/0;return[0,.25,-.25,.5,-.5,.8,-.8,1.2,-1.2].forEach(p=>{let f=r+p,b=wn(e,t,f,n),g=M=>o.some(_=>Math.hypot(et[_][0]-M.x,et[_][1]-M.y)<M.r+.3),x=e.clone().sub(b),v=x.length();x.normalize();let m=l.filter(M=>!g(M)).reduce((M,_)=>{let T=new E(_.x,e.y,-_.y).sub(b),S=T.dot(x);return M+(S>.5&&S<v*1.1&&Math.acos(Math.min(1,S/T.length()))<.62?3*Math.min(2,_.r):0)},0),y=c.reduce((M,_)=>M+h(b,_),0)*10+m+Math.abs(p);y<d&&(d=y,u=f)}),o0.set(s,u),u}function fo(i){let e=kt($2,0),t={k:i.k,off:.16,blur:0,u:0,rd:0,cur:0,leg:null,chase:null,preview:null};switch(i.k){case"brand":return{...t,t:Vi.clone(),p:wn(Vi,60,0,1.4),off:0,blur:0};case"why":return{...t,t:Vi.clone(),p:wn(Vi,34,-.1,1.08),blur:0};case"promise":return{...t,t:Vi.clone(),p:wn(Vi,16,-.22,.78),blur:.06};case"hq":if(_l.length>1){let n=_l.map(s=>kt(s.xy)),r=n.reduce((s,o)=>s.add(o),new E).multiplyScalar(1/n.length),a=Math.max(...n.map(s=>s.distanceTo(r)));return{...t,t:r,p:wn(r,Math.max(10,a*4.2),-.25,.78),off:.17,blur:.03}}else{let n=Vi.clone().add(new E(.1,.7,0));return{...t,t:n,p:wn(n,6.2,-.38,.4),off:.17,blur:.1}}case"cover":{let n=ns.clone().lerp(e,.55);return{...t,t:n,p:wn(n,125,.04,1.02),off:.14,blur:0}}case"depart":{let n=Wt.getPointAt(1);return{...t,t:n,p:n.clone().add(b0),off:.12,leg:Wt,chase:b0,rd:.5}}case"return":return{...t,t:Ml.clone().setY(In+.3),p:Ml.clone().setY(In+.3).add(Ig),off:.12,leg:Ol,chase:Ig,u:1,rd:99};case"close":return{...t,t:Vi.clone(),p:wn(Vi,17,.25,.78),off:.17,blur:.06,u:1,rd:99};case"foreword":{let n=ns.clone().lerp(e,.55);return{...t,t:n,p:wn(n,112,.1,.98),off:.14,blur:.04}}case"overview":{let n=[Math.min(...wl),Math.max(...wl)],r=[Math.min(...Al),Math.max(...Al)],a=Math.tan(18*Math.PI/180),s=a*St.aspect,o=Math.max((n[1]-n[0])*1.12/(2*s),(r[1]-r[0])*1.6/(2*a),18),c=kt([(n[0]+n[1])/2,(r[0]+r[1])/2+o*a*.22],In);return{...t,t:c,p:wn(c,o,.04,1.3),off:0,blur:0}}case"memory":{let n=e.clone().add(new E(0,0,-kg*.15));return{...t,t:n,p:wn(n,kg*1,i.k==="memory"?-.05:0,1.2),off:0,blur:0,...i.k==="memory"?{u:1,rd:99}:{}}}case"chapter":{let n=e1(i.c),r=n.map(l=>et[l][0]),a=n.map(l=>et[l][1]),s=kt([(Math.min(...r)+Math.max(...r))/2,(Math.min(...a)+Math.max(...a))/2],In),o=Math.max(Math.max(...r)-Math.min(...r),(Math.max(...a)-Math.min(...a))*1.6),c=i.c.days[0];return{...t,t:s,p:wn(s,Math.max(13,o*1.7),Fg(i.ci,s,Math.max(13,o*1.7),.9,(i.ci%2?1:-1)*.22,n),.9),off:.17,blur:.06,u:c>1?fl(Tr(c-1)):0,rd:c-1,preview:i.c.days}}case"day":{let n=pe.days[i.n-1],r=uo(i.n),a=kt(et[r]),s=new E(a.x+1.1,In+.8,a.z-.35),o=n.stops.filter(u=>u!==r&&!pe.stops[u].air).map(u=>kt(et[u])),c=o.reduce((u,d)=>Math.max(u,d.distanceTo(a)),0);if(o.length){let u=o.reduce((d,p)=>d.add(p),a.clone()).multiplyScalar(1/(o.length+1));s.x=(s.x*3+u.x)/4,s.z=(s.z*3+u.z)/4}let l=.4+i.n%3*.06,h=Fg(i.n,s,8.2+Math.min(c,6)*.7,l,(i.n%2?-1:1)*(.12+i.n%3*.08));if(Kg()){let u=Math.max(.6,...jt.filter(p=>!p.rw&&Math.hypot(p.x-et[r][0],p.y-et[r][1])<p.r).map(p=>p.r)),d=kt(et[r],an(...et[r],.3)+.35+u*.25);return{...t,t:d,p:wn(d,4.5+u*4,h,.5),off:0,blur:.06,u:fl(Tr(i.n)),rd:i.n,cur:i.n}}return{...t,t:s,p:wn(s,8.2+Math.min(c,6)*.7,h,l),off:.16,blur:.1,u:fl(Tr(i.n)),rd:i.n,cur:i.n}}}}var nn=i=>document.getElementById(i),dl=i=>String(i).padStart(2,"0"),Ue=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),is=(i,e="\uFF0C")=>Ue(i).split(e).map(t=>`<span>${t}</span>`).join(""),C1=ge.logo?`<img class="logo" src="${ge.logo}" alt="${Ue(ge.name)}">`:`<div class="wordmark">${Ue(ge.en)}</div>`;nn("brand").innerHTML=`<div class="in">${C1}<h1>${Ue(ge.slogan)}</h1><i class="rule"></i><p>${Ue(ge.lead)}</p><p>${Ue(ge.body)}</p></div>
  <div class="foot">${Ue(ge.en)}\u3000${Ue(ge.name)}</div>`;nn("why").innerHTML=`<div class="k">${Ue(ge.whyEn)}</div><h2>${Ue(ge.why)}</h2><p>${(ge.whyBody||[]).map(i=>`<span>${Ue(i)}</span>`).join("")}</p>`;nn("hq").innerHTML=`<div class="k">${Ue(ge.hqEn)}</div><h2>${Ue(ge.hq)}</h2><p class="svc">${(ge.services||[]).map(Ue).join("<i>\u30FB</i>")}</p>
  <p>${Ue(ge.address)}</p>${ge.license?`<p>\u65C5\u884C\u696D\u57F7\u7167\u3000${Ue(ge.license)}</p>`:""}${ge.assoc?`<p>${Ue(ge.assoc)}</p>`:""}`;nn("promise").innerHTML=`<div class="k">${Ue(ge.pillarEn)}</div><h2>${is(ge.pillar)}</h2><p>${Ue(ge.pillarBody)}</p>`;document.title=`${pe.title.main}${pe.title.suffix}\uFF5C${pe.company.name||pe.agency.name}`;(nn("cover")||{}).innerHTML=`<div class="k">${Ue(pe.client)}\u3000\xB7\u3000${Ue(pe.dates.range)}</div><h1>${Ue(pe.title.main)}<small>${Ue(pe.title.suffix)}</small></h1>
  <p class="l2">${Ue(pe.title.line2)}</p><p class="tag">${Ue(pe.tagline)}</p>`;(nn("foreword")||{}).innerHTML=`<div class="k">FOREWORD</div><h2>${is(rn.foreword.lead)}</h2><p>${is(rn.foreword.body,"\uFF0C")}</p>`;nn("overview").innerHTML=`<div class="k">ROUTE\u3000\xB7\u3000${pe.days.length} DAYS\u3000\xB7\u3000${pe.stops.length} STOPS</div><h2>${is(pe.routeTitle)}</h2>${pe.meta.map(i=>`<p>${Ue(i)}</p>`).join("")}`;nn("memory").innerHTML=`<div class="k">HIGHLIGHTS</div><h2>${is(pe.tagline)}</h2><ul>${pe.highlights.map(i=>`<li><b>${Ue(i.k)}</b>${Ue(i.v)}</li>`).join("")}</ul>`;nn("close").innerHTML=`<h2>${Ue(rn.closing.lead)}<br>${Ue(rn.closing.body)}</h2><p class="sign">${Ue(rn.closing.sign)}</p>
  <div class="co">${C1}<p class="slogan">${Ue(ge.slogan)}</p>${(ge.contact||[]).map(i=>`<p>${Ue(i)}</p>`).join("")}
  ${ge.license?`<p class="lic">\u65C5\u884C\u696D\u57F7\u7167\u3000${Ue(ge.license)}</p>`:""}<p class="credit">${Ue(ge.credit)}</p></div>`;var Bg=(i,e)=>i?`<div class="k">${e}\u3000\xB7\u3000${Ue(i.date)}</div><h2><span>${Ue(i.leg.split("\u2192")[0])}</span><span>\u2192 ${Ue(i.leg.split("\u2192")[1]||"")}</span></h2>
  <p class="big">${Ue(i.carrier)}</p><p>${Ue(i.time)}</p>`:"",T0=rn.chapters.map(i=>{let e=e1(i),t=document.createElement("div");t.className="ch",t.innerHTML=`<small>\u7B2C${i.no}\u7AE0</small>${Ue(i.name)}`,nn("labels").appendChild(t);let n=e.reduce((a,s)=>a+et[s][0],0)/e.length,r=e.reduce((a,s)=>a+et[s][1],0)/e.length;return{el:t,v:kt([n,r],In+1.6)}});nn("dots").innerHTML=Ht.map((i,e)=>`<button data-i="${e}" class="${i.k}" title="${i.k}"></button>`).join("");nn("dots").onclick=i=>{let e=i.target.dataset&&i.target.dataset.i;e!=null&&!wt&&rs(+e)};function Z0(i){let e={depart:"flight",return:"flight",day:"panel"}[i.k]||i.k;if(document.body.dataset.mode=e,i.k==="depart"&&(nn("flight").innerHTML=Bg(pe.flights[0],"DEPARTURE")),i.k==="return"&&(nn("flight").innerHTML=Bg(pe.flights[pe.flights.length-1],"RETURN")),i.k==="chapter"){let t=i.c;nn("chapter").innerHTML=`<div class="v"><small>\u7B2C${t.no}\u7AE0</small><h2>${Ue(t.name)}</h2></div><div class="side"><div class="k">${Ue(t.en)}</div>
      <p class="range">DAY ${dl(t.days[0])}${t.days.length>1?" \u2014 "+dl(t.days[t.days.length-1]):""}</p>
      <ul>${t.days.map(n=>`<li><b>${dl(n)}</b>${Ue(pe.days[n-1].title)}</li>`).join("")}</ul></div>`}if(i.k==="day"){let t=pe.days[i.n-1];nn("panel").innerHTML=`${t.img?`<figure class="ph${t.imgSize&&t.imgSize[1]>t.imgSize[0]?" tall":""}"><img src="${t.img}" alt=""></figure>`:""}<div class="k">\u7B2C${i.c.no}\u7AE0\u3000${Ue(i.c.name)}</div><div class="num"><span>DAY</span>${dl(t.n)}</div>
      <div class="when">${Ue(t.date)}${t.legs?`\u3000\xB7\u3000${Ue(t.legs)}`:""}</div><h2>${is(t.title)}</h2>
      ${t.desc?`<p class="desc">${Ue(t.desc)}</p>`:""}<p class="spots">${t.spots.map(n=>Ue(n.replace(/　+/g," "))).join("<i>\u30FB</i>")}</p>
      ${t.stay?`<p class="meta"><b>\u4F4F</b>${Ue(t.stay)}</p>`:""}${t.meals?`<p class="meta"><b>\u98DF</b>${Ue(t.meals)}</p>`:""}`}if([...nn("dots").children].forEach((t,n)=>t.classList.toggle("on",n===zt)),T0.forEach(t=>t.el.classList.toggle("on",i.k==="overview")),i.k==="depart"){let t=n=>{n&&(n.style.transition="opacity .2s",clearTimeout(n._ft),n._ft=setTimeout(()=>{n.style.transition=""},500))};document.querySelectorAll(".scene").forEach(n=>{n.id!=="flight"&&t(n)}),T0.forEach(n=>t(n.el))}}var zt=-1,qe=null,c0=performance.now(),zg=performance.now(),Ee={p:new E,t:new E,off:0,blur:0,fd:0},Rl={u:0},Xi=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function rs(i){if(i=Math.max(0,Math.min(Ht.length-1,i)),i===zt)return;let e=fo(Ht[i]),t={p:Ee.p.clone(),t:Ee.t.clone(),off:Ee.off,blur:Ee.blur,u:Rl.u},n=t.p.distanceTo(e.p),r=K2(Ht[i]),a=!aa&&zt>=0&&Ht[zt].k==="depart"&&i===zt+1&&r===0,s=!a&&ta>=0&&r>=0&&ta!==r?q2(ta,r):null,o=zt<0||aa?.001:i<zt&&e.chase?3:e.k==="depart"?Pt.dur:e.chase?8:a?ui.dur:s?Math.min(7.5,Math.max(3,2.4+s.L*.17)):Math.min(4,2+n*.03);qe={from:t,to:e,t0:performance.now(),dur:o,intro:a,route:s,hold:null,back:i<zt},ta=r,zt=i,Z0(Ht[i])}var Za=new Bs,pl=new Bs,Gg=new E;function ra(i,e,t){Za.setFromVector3(Gg.subVectors(i.p,i.t)),pl.setFromVector3(Gg.subVectors(e.p,e.t));let n=Math.max(Za.radius,.01),r=Math.max(pl.radius,.01),a=n*(r/n)**t,s=Math.min(1,Math.abs(Math.log(r/n))/Math.log(3)),o=Math.abs(r-n)>.001?t*(1-s)+(a-n)/(r-n)*s:t,c=Math.min(.8,i.t.distanceTo(e.t)/(Math.max(n,r)*2.5)),l=pl.theta-Za.theta;return l-=Math.round(l/(2*Math.PI))*2*Math.PI,Ee.t.lerpVectors(i.t,e.t,o),Ee.p.setFromSphericalCoords(a*(1+c*Math.sin(Math.PI*t)),Za.phi+(pl.phi-Za.phi)*t,Za.theta+l*t).add(Ee.t),o}var hi=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),qy=new ut,n3=new Uc,S0=new E,P1=[];function I1(i){if(wt){let m=pt.info;P1.push([Math.round(i-wt.t0),+(i-c0).toFixed(1),m.programs?m.programs.length:0,m.memory.textures,m.memory.geometries,pt.shadowMap.needsUpdate||pt.shadowMap.autoUpdate?1:0])}let e=Math.min(.05,(i-c0)/1e3);c0=i;let t=qe?qe.to:fo(Ht[zt]),n=1,r=null,a=1,s=!1;if(wt)try{t3(i)}catch(m){console.warn("[\u51B7\u958B\u5834] \u51FA\u932F\uFF0C\u76F4\u63A5\u7D50\u675F",m),A1()}else if(qe){let m=qe.hold??(i-qe.t0)/1e3;n=Math.min(1,m/qe.dur);let y=Xi(n),{from:M,to:_}=qe,T=y;if(qe.back&&_.chase)ra(M,_,y),Jr(_.leg,1,_.k==="depart"?.6:1);else if(_.k==="depart")O2(n>=1?Pt.dur:m),T=Math.min(1,m/(Pt.TA+Pt.TB));else if(qe.intro)r=J2(n>=1?ui.dur:m,_),s=!0,Jr(Wt,1,.6*(1-Ti(m/ui.TA)));else if(_.chase){let w=_.leg.getPointAt(0),P=w.clone().add(_.chase);if(n<.24)ra(M,{p:P,t:w},Xi(n/.24)),Jr(_.leg,0);else{let I=Xi((n-.24)/.76),U=_.leg.getPointAt(I);if(Ee.t.copy(U),Ee.p.copy(U).add(_.chase),Jr(_.leg,I),I>.42&&I<.6){let z=_.leg.getTangentAt(I).setY(0).normalize(),V=U.clone().addScaledVector(z,7).setY(0);po(V.x,-V.z)||ts.dolphinJump(_.leg,V,z)}}}else{let S=ra(M,_,y);if(Jr(null),qe.route){r=E1(qe.route,S),a=r.k,s=!0,T=S,qe.et=S;let w=Y2(qe.route,S);Ee.t.add(w),Ee.p.add(w)}}Ee.off=M.off+(_.off-M.off)*y,Ee.blur=M.blur+(_.blur-M.blur)*y,Rl.u=M.u+(_.u-M.u)*T,n>=1&&(qe=null,zg=i)}else{let m=aa?0:.06*Math.sin((i-zg)/1e3*.32);Ee.t.copy(t.t),Ee.p.copy(t.p).sub(t.t).applyAxisAngle(new E(0,1,0),m).add(t.t),Jr(t.leg,1,t.k==="depart"?.6:1)}let o=qe&&(qe.to.k==="depart"&&(qe.hold??(i-qe.t0)/1e3)<Pt.TA+Pt.TB+1.6||qe.intro);hl=hi(hl,t.k==="overview"&&!wt?1:0,3,e),xl.visible=hl>.01,xl.material.opacity=.85*hl;let c=m=>qe&&!qe.back&&qe.to.leg===m&&(qe.hold??(i-qe.t0)/1e3)<qe.dur-.6;L2.forEach((m,y)=>{let M=y?Ol:Wt,_=!o&&(c(M)||t.k==="overview"&&!wt)?.75:0;m.userData.k=hi(m.userData.k,_,2.5,e),m.visible=m.userData.k>.01,m.material.opacity=m.userData.k}),d1.forEach(m=>{if(!m.lim){if(!m.g.children.length)return;m.g.scale.setScalar(m.s0);let _=new en().setFromObject(m.g).getSize(S0).length()/2;if(!(_>0))return;m.lim=7*_}let y=m.g.position.distanceTo(Ee.p),M=Math.min(1,Math.max(0,(y-.55*m.lim)/(.45*m.lim)));m.k=hi(m.k,M,4,e),m.g.visible=m.k>.01,m.g.visible&&m.g.scale.setScalar(m.s0*m.k)}),!r&&ta>=0&&(r=Er[ta]),Ka=hi(Ka,t.k==="hq"&&!wt?1:0,3,e);let l=Ee.p.distanceTo(Ee.t);if(S2.forEach(m=>{let y=t.k==="return"?0:Math.min(1,Math.max(0,(l-24)/12));m.visible=y>.01,m.material.opacity=y}),C2.forEach((m,y)=>{let M=1+.22*Math.sin(i/320+y*1.7);m.visible=Ka>.01,m.scale.setScalar(Math.max(1e-4,Ka*M*Math.max(1,l/9))),m.material.opacity=Ka*(.95-.35*(M-.78)/.44)}),t.k==="day"&&window.HUD&&window.HUD.odometer){let m=Y0[t.cur-1].raw,y=qe&&qe.route&&!qe.back?qe.route:null,M=y?Math.max(0,Math.min(m,m-(1-(qe.et||0))*y.L*M0)):m;window.HUD.odometer(M,m,X2[t.cur-1]+M)}r?Z2(r,ta>=0?a:0,e,s,i):na.k>.002?(na.k=hi(na.k,0,5,e),Object.values(ca).forEach(m=>{m.visible&&m.scale.multiplyScalar(.9)})):Object.values(ca).forEach(m=>{m.visible=!1}),w2(Rl.u);let h=qe&&qe.intro?n>.93:n>.7;z0.forEach(m=>{let y=t.k==="close"?!1:t.k==="day"?m.s.day===t.cur||gl(m.s,t.cur):m.s.day<=t.rd||t.preview&&t.preview.includes(m.s.day)||t.rd===.5&&gl(m.s,1);m.k=hi(m.k,y&&(h||!qe)?1:0,9,e),m.grp.scale.setScalar(Math.max(m.k,1e-4)*(m.office?1+Ka*Math.max(0,l/8-1):1)),m.grp.rotation.y=Math.atan2(St.position.x-m.grp.position.x,St.position.z-m.grp.position.z)+.25}),p0.forEach(m=>{m.position.x+=m.userData.v*e,m.position.x>Ul+8&&(m.position.x=(ge.homeXY?ge.homeXY[0]:co)-8);let y=m.userData,M=y.s0||(y.s0=m.scale.clone()),_=gn.visible?n3.set(Ee.p,gn.position).closestPointToPoint(m.position,!0,S0).distanceTo(m.position):99,T=m.position.distanceTo(Ee.p);y.f=hi(y.f??1,Math.min(_<5?Math.max(1e-4,(_-1.5)/3.5):1,T<9?Math.max(1e-4,(T-4)/5):1),6,e),m.scale.copy(M).multiplyScalar(y.f)}),t0=hi(t0,["day","chapter"].includes(t.k)&&!wt?1:0,2,e),f0.position.set(Ee.t.x,In,Ee.t.z),f0.update(e,t0);let u=t.k==="day"&&!wt?t.cur-1:-1,d=u>=0?K0[u]:"clear",p=u>=0&&(T1[u]||Q2[d])||null;if(p!==Mr&&$r<.02&&(Mr=p),$r=hi($r,Mr&&Mr===p?1:0,1.5,e),Mr&&($r>.001||Og)){let m=$r>.001,y=Mg(De,m?Mr.tp:null,m?$r:0);Og=m,Eg(ze.background,y.sky[0],y.sky[1]),ze.fog.color.copy(y.fog),e0=y.fogMult,io.color.copy(y.hemiSky),io.groundColor.copy(y.hemiGround),io.intensity=y.hemiPower,Jt.color.copy(y.sun),Jt.intensity=y.sunPower,E0.fromArray(y.sunDir),Mr.g&&Mr.g.update(i/1e3,y.glow)}Object.entries(S1).forEach(([m,y])=>{s0[m]=hi(s0[m],d===m?1:0,1.5,e),y.position.set(Ee.t.x,In,Ee.t.z),y.update(e,s0[m])}),ts.update(e,i,Ee.p.distanceTo(Ee.t)),Ee.p.y=Math.max(Ee.p.y,an(Ee.p.x,-Ee.p.z,.25)+.12),St.position.copy(Ee.p),St.lookAt(Ee.t);let f=innerWidth,b=innerHeight;St.setViewOffset(f,b,-f*Ee.off*(f>900?1:0),Kg()?.31*b:0,f,b);let g=Ee.p.distanceTo(Ee.t),x=Math.max(g,Ee.fd||0),v=Math.min(1,Math.max(0,(x-30)/70));if(ze.fog.near=x*(.95+.8*v)*e0,ze.fog.far=x*(2.5+3.1*v)*e0,Ee.fd=0,!wt||w0.has("tzold")){Jt.target.position.copy(Ee.t),Jt.position.copy(Ee.t).addScaledVector(E0,g);let m=Jt.shadow.camera,y=Math.min(g*.7,40);m.left=m.bottom=-y,m.right=m.top=y,m.near=.1,m.far=g*3.2,m.updateProjectionMatrix()}l0.uniforms.h.value=Ee.blur*3.2/f,h0.uniforms.v.value=Ee.blur*3.2/b,l0.uniforms.r.value=h0.uniforms.r.value=.5,T0.forEach(({el:m,v:y})=>{let M=y.clone().project(St);m.style.transform=`translate(${(M.x+1)/2*f}px,${(1-M.y)/2*b}px)`}),Si.render(),requestAnimationFrame(I1)}function J0(){pt.setSize(innerWidth,innerHeight),Si.setSize(innerWidth,innerHeight),St.aspect=innerWidth/innerHeight,St.updateProjectionMatrix()}addEventListener("resize",J0);J0();var Yy=Ht.findIndex(i=>i.k==="depart"),L1=()=>{wt||rs(zt-1)},Q0=()=>{wt||rs(zt+1)};addEventListener("keydown",i=>{["ArrowRight"," ","PageDown","Enter"].includes(i.key)&&(i.preventDefault(),Q0()),["ArrowLeft","PageUp","Backspace"].includes(i.key)&&(i.preventDefault(),L1())});pt.domElement.addEventListener("click",i=>(i.clientX<innerWidth*.2?L1:Q0)());nn("brand").addEventListener("click",Q0);document.getElementById("grain").style.backgroundImage=`url(${(()=>{let i=document.createElement("canvas");return i.width=i.height=256,Zg(i.getContext("2d"),256,77),i.toDataURL()})()})`;var eo=new URLSearchParams(location.search);(async()=>{let i=window.HUD,e=document.createElement("div");e.textContent="\u8F09\u5165\u4E2D\u2026",e.style.cssText="position:fixed;inset:0;display:grid;place-items:center;z-index:99;font:500 18px/1 serif;letter-spacing:.3em;color:#8a7f70;background:#f4efe6",i||document.body.appendChild(e);let t=performance.now(),n=()=>new Promise(h=>requestAnimationFrame(h));for(;ml>0&&performance.now()-t<3e4;)await new Promise(h=>setTimeout(h,100));let r=new Set;ze.traverse(h=>{h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(u=>["map","normalMap","roughnessMap","emissiveMap","alphaMap"].forEach(d=>u[d]&&r.add(u[d])))});let a=[performance.now()];r.forEach(h=>pt.initTexture(h)),pt.compileAsync?await pt.compileAsync(ze,St):pt.compile(ze,St);let s=Array.from({length:9},(h,u)=>{let d=Ot.u0+(Ot.u1-Ot.u0)*u/8;return{p:Ot.camAt(d),t:Ot.lookAt(d)}}),o=[...Ht.map(fo),{p:Pt.CR,t:Wt.getPointAt(0)},{p:ui.CR,t:Er[0].p},...s,Ot.end()];a.push(performance.now());let c=pt.getPixelRatio();pt.setPixelRatio(c*.25);for(let[h,u]of o.entries())i&&i.loading&&i.loading(.7+.28*h/o.length,"PREPARING"),St.position.copy(u.p),St.lookAt(u.t),Jt.target.position.copy(u.t),Jt.position.copy(u.t).add(new E(-30,34,20)),pt.render(ze,St),h%6===5&&await n();a.push(performance.now()),pt.setPixelRatio(c),J0(),St.position.copy(s[0].p),St.lookAt(s[0].t),w1(),pt.shadowMap.needsUpdate=!0,Si.render(),await n(),St.position.copy(s[8].p),St.lookAt(s[8].t),Si.render(),await n(),a.push(performance.now()),console.info("[\u9810\u71B1]",`\u7B49\u6A21\u578B ${((a[0]-t)/1e3).toFixed(1)} \u79D2`,`\u7DE8\u8B6F ${((a[1]-a[0])/1e3).toFixed(1)} \u79D2`,`\u5404\u5E55 ${((a[2]-a[1])/1e3).toFixed(1)} \u79D2`,`\u5F8C\u88FD ${((a[3]-a[2])/1e3).toFixed(1)} \u79D2`),rs(Yg?(()=>{let h=Ht.map((d,p)=>[d,p]).filter(([d])=>d.k==="day");if(!h.length)return 0;let u=+eo.get("day")||0;if(!u){let d=new Date,p=(eo.get("date")||`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`).match(/(\d{1,2})[-./](\d{1,2})$/);if(p){let f=pe.days.findIndex(b=>{let g=String(b.date||"").match(/(\d{1,2})\.(\d{1,2})/);return g&&+g[1]==+p[1]&&+g[2]==+p[2]});f>=0&&(u=f+1)}}return(h.find(([d])=>d.n===(u||1))||h[0])[1]})():+eo.get("n")||0),requestAnimationFrame(I1),await n(),await n(),e.remove(),window.__journey.ready=!0,eo.has("play")&&setInterval(()=>rs(zt>=Ht.length-1?0:zt+1),(+eo.get("play")||7)*1e3)})();function i3(){St.updateMatrixWorld();let i=new ur().setFromProjectionMatrix(new Ae().multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse)),e=ze.fog.far,t=new E,n=([o,c])=>(t.set(o,gi(o,c),-c),i.containsPoint(t)&&t.distanceTo(St.position)<e),r=ts.audit(),a=r.people.filter(o=>o[2]),s=[...Sr,...es].map((o,c)=>jt.filter(l=>l.flag&&Math.hypot(l.x-o[0],l.y-o[1])<l.r+.12).length).reduce((o,c)=>o+c,0);return{scene:Ht[zt]&&Ht[zt].k,blur:Ee.blur,levels:mi?mi.levels.length:0,flagHits:s,view:{houses:r.houses.filter(n).length+s1.filter(n).length,trees:d0.filter(n).length,people:r.people.filter(n).length,robe:a.filter(n).length,cars:r.cars.filter(n).length,trains:r.trains.filter(n).length},trees:d0,robeHeight:a.length?Math.min(...a.map(o=>o[3]*1.15)):0,houseHeight:(()=>{let o=r.houses.map(c=>c[2]).filter(c=>c<.5).sort((c,l)=>c-l);return o.length?o[o.length>>1]*.9:0})(),worldLM:oa.length,models:Object.keys(pe.models||{}).length,dolphin:r.dolphin}}window.__journey={go:rs,audit:i3,legs:[Wt,Ol],scene:ze,plane:gn,camera:St,rc:new Dc,dolphin:()=>ts.dolphinJump(Symbol(),Ee.t.clone().setY(0),new E(1,0,0)),hold:i=>{wt?wt.hold=i:qe&&(qe.hold=i)},teaser:R1,vehicles:{...ca,rides:M1.map(i=>i&&i.key),legs:wr},season:qi,light:()=>({lookK:+$r.toFixed(3),wx:K0,hemi:+io.intensity.toFixed(2),sun:+Jt.intensity.toFixed(2),nights:T1.map(i=>!!i)}),scenes:Ht.map(i=>i.k),sc:Ht.map(i=>i.k),frames:P1,km:Y0.map(({day:i,km:e,mode:t,modes:n})=>({day:i,km:e,mode:t,modes:n})),get step(){return zt},get busy(){return!!qe||!!wt}};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
