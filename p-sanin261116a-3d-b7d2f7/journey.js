(()=>{var Om=2;var Hd=0,kd=1,lt=2,wi=0;var Fd=2;var dl=5,ei=100,hv=101,uv=102;var Nr=200,dv=201,Bd=202,pv=203,bu=204,xu=205,pl=206,fv=207,fl=208,mv=209,gv=210,vv=211,bv=212,xv=213,yv=214,Mv=0,Ev=1,Tv=2,_v=3,wv=4,Sv=5,Av=6,Rv=7;var Hm=1,km=2,Fm=3,Bm=4;var zm=6,ml=7,df="attached",Cv="detached",Gm=300,ns=301,is=302,yu=303,Mu=304,gl=306,Ln=1e3,ta=1001,Ks=1002,Qt=1003,zd=1004;var Ja=1005;var ln=1006,Ws=1007;var qi=1008;var Ni=1009,Vm=1010,Wm=1011,Zs=1012,Gd=1013,na=1014,Ti=1015,En=1016,Vd=1017,Wd=1018,Ar=1020,jm=35902,Xm=1021,qm=1022,jn=1023,Ym=1024,Km=1025,Js=1026,Rr=1027,jd=1028,Xd=1029,Zm=1030,qd=1031;var Yd=1033,Cc=33776,Pc=33777,Lc=33778,Ic=33779,Eu=35840,Tu=35841,_u=35842,wu=35843,Su=36196,Au=37492,Ru=37496,Cu=37808,Pu=37809,Lu=37810,Iu=37811,Du=37812,Uu=37813,Nu=37814,Ou=37815,Hu=37816,ku=37817,Fu=37818,Bu=37819,zu=37820,Gu=37821,Dc=36492,Vu=36494,Wu=36495,Jm=36283,ju=36284,Xu=36285,qu=36286;var rs=2300,as=2301,Nh=2302,pf=2400,ff=2401,mf=2402;var Qm=0,vl=1,mo=2;var Za="",Ut="srgb",Tn="srgb-linear",bl="linear",vt="srgb";var Oa=7680;var Pv=512,Lv=513,Iv=514,Dv=515,Uv=516,Nv=517,Ov=518,Hv=519,Yu=35044;var gf="300 es",ss=2e3,Uc=2001,Cr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=1234567,$a=Math.PI/180,os=180/Math.PI;function ti(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(gn[255&i]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[255&e]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[63&t|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[255&n]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Ku(i,e){return(i%e+e)%e}function js(i,e,t){return(1-t)*i+t*e}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var fs={DEG2RAD:$a,RAD2DEG:os,generateUUID:ti,clamp:qt,euclideanModulo:Ku,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:js,damp:function(i,e,t,n){return js(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Ku(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(vf=i);let e=vf+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*$a},radToDeg:function(i){return i*os},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),h=s((e+n)/2),u=a((e-n)/2),d=s((e-n)/2),p=a((n-e)/2),f=s((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Mt,denormalize:Ei},ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class i{constructor(e,t,n,r,a,s,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],m=r[0],v=r[3],g=r[6],b=r[1],x=r[4],M=r[7],E=r[2],y=r[5],T=r[8];return a[0]=s*m+o*b+c*E,a[3]=s*v+o*x+c*y,a[6]=s*g+o*M+c*T,a[1]=l*m+h*b+u*E,a[4]=l*v+h*x+u*y,a[7]=l*g+h*M+u*T,a[2]=d*m+p*b+f*E,a[5]=d*v+p*x+f*y,a[8]=d*g+p*M+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*a*h+n*o*c+r*a*l-r*s*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*a,p=l*a-s*c,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(r*l-h*n)*m,e[2]=(o*n-r*s)*m,e[3]=d*m,e[4]=(h*t-r*c)*m,e[5]=(r*a-o*t)*m,e[6]=p*m,e[7]=(n*c-l*t)*m,e[8]=(s*t-n*a)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oh=new Xe;function $m(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kv(){let i=Qs("canvas");return i.style.display="block",i}var bf={};function Vs(i){i in bf||(bf[i]=!0,console.warn(i))}var nt={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===vt&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Za?bl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function es(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var xf=[.64,.33,.3,.6,.15,.06],yf=[.2126,.7152,.0722],Mf=[.3127,.329],Ef=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Ha;nt.define({[Tn]:{primaries:xf,whitePoint:Mf,transfer:bl,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:yf,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:xf,whitePoint:Mf,transfer:vt,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:yf,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});var Zu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ha===void 0&&(Ha=Qs("canvas")),Ha.width=e.width,Ha.height=e.height;let n=Ha.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ha}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=255*Yi(a[s]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Yi(t[n]/255)):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fv=0,Nc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Hh(r[s].image)):a.push(Hh(r[s]))}else a=Hh(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function Hh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bv=0,Yt=class i extends Cr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,a=1006,s=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ti(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case ta:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case ta:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=Gm,Yt.DEFAULT_ANISOTROPY=1;var at=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],m=c[2],v=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+v)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(p+1)/2,E=(g+1)/2,y=(h+d)/4,T=(u+m)/4,_=(f+v)/4;return x>M&&x>E?x<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(x),r=y/n,a=T/n):M>E?M<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),n=y/r,a=_/r):E<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(E),n=T/a,r=_/a),this.set(n,r,a,t),this}let b=Math.sqrt((v-f)*(v-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(v-f)/b,this.y=(u-m)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ju=class extends Cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let a=new Yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];let s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Nc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Ju{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oc=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qu=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=a[s+0],p=a[s+1],f=a[s+2],m=a[s+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=m);if(u!==m||c!==d||l!==p||h!==f){let v=1-o,g=c*d+l*p+h*f+u*m,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let E=Math.sqrt(x),y=Math.atan2(E,g*b);v=Math.sin(v*y)/E,o=Math.sin(o*y)/E}let M=o*b;if(c=c*v+d*M,l=l*v+p*M,h=h*v+f*M,u=u*v+m*M,v===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,s){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=a[s],d=a[s+1],p=a[s+2],f=a[s+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(a/2),d=c(n/2),p=c(r/2),f=c(a/2);switch(s){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+r*l-a*c,this._y=r*h+s*c+a*o-n*l,this._z=a*h+s*l+n*c-r*o,this._w=s*h-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,a=this._z,s=this._w,o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),h=2*(o*t-a*r),u=2*(a*n-s*t);return this.x=t+c*l+s*u-o*h,this.y=n+c*h+o*l-a*u,this.z=r+c*u+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kh=new S,_f=new bn,rn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,xi):xi.fromBufferAttribute(a,s),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Zo.subVectors(this.max,Ds),ka.subVectors(e.a,Ds),Fa.subVectors(e.b,Ds),Ba.subVectors(e.c,Ds),vr.subVectors(Fa,ka),br.subVectors(Ba,Fa),Yr.subVectors(ka,Ba);let t=[0,-vr.z,vr.y,0,-br.z,br.y,0,-Yr.z,Yr.y,vr.z,0,-vr.x,br.z,0,-br.x,Yr.z,0,-Yr.x,-vr.y,vr.x,0,-br.y,br.x,0,-Yr.y,Yr.x,0];return!!Fh(t,ka,Fa,Ba,Zo)&&(t=[1,0,0,0,1,0,0,0,1],!!Fh(t,ka,Fa,Ba,Zo)&&(Jo.crossVectors(vr,br),t=[Jo.x,Jo.y,Jo.z],Fh(t,ka,Fa,Ba,Zo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(xi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new S,new S,new S,new S,new S,new S,new S,new S],xi=new S,Ko=new rn,ka=new S,Fa=new S,Ba=new S,vr=new S,br=new S,Yr=new S,Ds=new S,Zo=new S,Jo=new S,Kr=new S;function Fh(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Kr.fromArray(i,a);let o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),l=t.dot(Kr),h=n.dot(Kr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zv=new rn,Us=new S,Bh=new S,On=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zv.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Us,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Bh)),this.expandByPoint(Us.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new S,zh=new S,Qo=new S,xr=new S,Gh=new S,$o=new S,Vh=new S,ia=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zh.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(zh);let a=.5*e.distanceTo(t),s=-this.direction.dot(Qo),o=xr.dot(this.direction),c=-xr.dot(Qo),l=xr.lengthSq(),h=Math.abs(1-s*s),u,d,p,f;if(h>0)if(u=s*c-o,d=s*o-c,f=a*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zh).addScaledVector(Qo,d),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),r=zi.dot(zi)-n*n,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||a>r?null:((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,r,a){Gh.subVectors(t,e),$o.subVectors(n,e),Vh.crossVectors(Gh,$o);let s,o=this.direction.dot(Vh);if(o>0){if(r)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}xr.subVectors(this.origin,e);let c=s*this.direction.dot($o.crossVectors(xr,$o));if(c<0)return null;let l=s*this.direction.dot(Gh.cross(xr));if(l<0||c+l>o)return null;let h=-s*xr.dot(Vh);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class i{constructor(e,t,n,r,a,s,o,c,l,h,u,d,p,f,m,v){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,h,u,d,p,f,m,v)}set(e,t,n,r,a,s,o,c,l,h,u,d,p,f,m,v){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=a,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/za.setFromMatrixColumn(e,0).length(),a=1/za.setFromMatrixColumn(e,1).length(),s=1/za.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=s*h,p=s*u,f=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-m*l,t[9]=-o*c,t[2]=m-d*l,t[6]=f+p*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,m=l*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=s*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,m=l*u;t[0]=d-m*o,t[4]=-s*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=s*h,t[9]=m-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let d=s*h,p=s*u,f=o*h,m=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+m,t[1]=c*u,t[5]=m*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,p=s*l,f=o*c,m=o*l;t[0]=c*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=s*c,p=s*l,f=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+m,t[5]=s*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gv,e,Vv)}lookAt(e,t,n){let r=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),yr.crossVectors(n,Vn),yr.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),yr.crossVectors(n,Vn)),yr.normalize(),ec.crossVectors(Vn,yr),r[0]=yr.x,r[4]=ec.x,r[8]=Vn.x,r[1]=yr.y,r[5]=ec.y,r[9]=Vn.y,r[2]=yr.z,r[6]=ec.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],m=n[6],v=n[10],g=n[14],b=n[3],x=n[7],M=n[11],E=n[15],y=r[0],T=r[4],_=r[8],w=r[12],A=r[1],C=r[5],I=r[9],G=r[13],D=r[2],W=r[6],V=r[10],z=r[14],j=r[3],Y=r[7],Z=r[11],X=r[15];return a[0]=s*y+o*A+c*D+l*j,a[4]=s*T+o*C+c*W+l*Y,a[8]=s*_+o*I+c*V+l*Z,a[12]=s*w+o*G+c*z+l*X,a[1]=h*y+u*A+d*D+p*j,a[5]=h*T+u*C+d*W+p*Y,a[9]=h*_+u*I+d*V+p*Z,a[13]=h*w+u*G+d*z+p*X,a[2]=f*y+m*A+v*D+g*j,a[6]=f*T+m*C+v*W+g*Y,a[10]=f*_+m*I+v*V+g*Z,a[14]=f*w+m*G+v*z+g*X,a[3]=b*y+x*A+M*D+E*j,a[7]=b*T+x*C+M*W+E*Y,a[11]=b*_+x*I+M*V+E*Z,a[15]=b*w+x*G+M*z+E*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*c*u-r*l*u-a*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+a*s*d-r*s*p+r*l*h-a*c*h)+e[11]*(+t*l*u-t*o*p-a*s*u+n*s*p+a*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*s*u-n*s*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],v=e[14],g=e[15],b=u*v*l-m*d*l+m*c*p-o*v*p-u*c*g+o*d*g,x=f*d*l-h*v*l-f*c*p+s*v*p+h*c*g-s*d*g,M=h*m*l-f*u*l+f*o*p-s*m*p-h*o*g+s*u*g,E=f*u*c-h*m*c-f*o*d+s*m*d+h*o*v-s*u*v,y=t*b+n*x+r*M+a*E;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/y;return e[0]=b*T,e[1]=(m*d*a-u*v*a-m*r*p+n*v*p+u*r*g-n*d*g)*T,e[2]=(o*v*a-m*c*a+m*r*l-n*v*l-o*r*g+n*c*g)*T,e[3]=(u*c*a-o*d*a-u*r*l+n*d*l+o*r*p-n*c*p)*T,e[4]=x*T,e[5]=(h*v*a-f*d*a+f*r*p-t*v*p-h*r*g+t*d*g)*T,e[6]=(f*c*a-s*v*a-f*r*l+t*v*l+s*r*g-t*c*g)*T,e[7]=(s*d*a-h*c*a+h*r*l-t*d*l-s*r*p+t*c*p)*T,e[8]=M*T,e[9]=(f*u*a-h*m*a-f*n*p+t*m*p+h*n*g-t*u*g)*T,e[10]=(s*m*a-f*o*a+f*n*l-t*m*l-s*n*g+t*o*g)*T,e[11]=(h*o*a-s*u*a-h*n*l+t*u*l+s*n*p-t*o*p)*T,e[12]=E*T,e[13]=(h*m*r-f*u*r+f*n*d-t*m*d-h*n*v+t*u*v)*T,e[14]=(f*o*r-s*m*r-f*n*c+t*m*c+s*n*v-t*o*v)*T,e[15]=(s*u*r-h*o*r+h*n*c-t*u*c-s*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*s,0,l*c-r*o,h*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,u=o+o,d=a*l,p=a*h,f=a*u,m=s*h,v=s*u,g=o*u,b=c*l,x=c*h,M=c*u,E=n.x,y=n.y,T=n.z;return r[0]=(1-(m+g))*E,r[1]=(p+M)*E,r[2]=(f-x)*E,r[3]=0,r[4]=(p-M)*y,r[5]=(1-(d+g))*y,r[6]=(v+b)*y,r[7]=0,r[8]=(f+x)*T,r[9]=(v-b)*T,r[10]=(1-(d+m))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,a=za.set(r[0],r[1],r[2]).length(),s=za.set(r[4],r[5],r[6]).length(),o=za.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],yi.copy(this);let c=1/a,l=1/s,h=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=l,yi.elements[5]*=l,yi.elements[6]*=l,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=2e3){let c=this.elements,l=2*a/(t-e),h=2*a/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===ss)p=-(s+a)/(s-a),f=-2*s*a/(s-a);else{if(o!==Uc)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),f=-s*a/(s-a)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-r),u=1/(s-a),d=(t+e)*l,p=(n+r)*h,f,m;if(o===ss)f=(s+a)*u,m=-2*u;else{if(o!==Uc)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=a*u,m=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=m,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},za=new S,yi=new Me,Gv=new S(0,0,0),Vv=new S(1,1,1),yr=new S,ec=new S,Vn=new S,wf=new Me,Sf=new bn,ii=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Wv=0,Af=new S,Ga=new bn,Gi=new Me,tc=new S,Ns=new S,jv=new S,Xv=new bn,Rf=new S(1,0,0),Cf=new S(0,1,0),Pf=new S(0,0,1),Lf={type:"added"},qv={type:"removed"},Va={type:"childadded",child:null},Wh={type:"childremoved",child:null},it=class i extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new ii,n=new bn,r=new S(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Xe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ga.setFromAxisAngle(e,t),this.quaternion.multiply(Ga),this}rotateOnWorldAxis(e,t){return Ga.setFromAxisAngle(e,t),this.quaternion.premultiply(Ga),this}rotateX(e){return this.rotateOnAxis(Rf,e)}rotateY(e){return this.rotateOnAxis(Cf,e)}rotateZ(e){return this.rotateOnAxis(Pf,e)}translateOnAxis(e,t){return Af.copy(e).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rf,e)}translateY(e){return this.translateOnAxis(Cf,e)}translateZ(e){return this.translateOnAxis(Pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ns,tc,this.up):Gi.lookAt(tc,Ns,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Ga.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lf),Va.child=e,this.dispatchEvent(Va),Va.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qv),Wh.child=e,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lf),Va.child=e,this.dispatchEvent(Va),Va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),f=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function s(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};it.DEFAULT_UP=new S(0,1,0),it.DEFAULT_MATRIX_AUTO_UPDATE=!0,it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new S,Vi=new S,jh=new S,Wi=new S,Wa=new S,ja=new S,If=new S,Xh=new S,qh=new S,Yh=new S,Kh=new at,Zh=new at,Jh=new at,Tr=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mi.subVectors(e,t),r.cross(Mi);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Mi.subVectors(r,t),Vi.subVectors(n,t),jh.subVectors(e,t);let s=Mi.dot(Mi),o=Mi.dot(Vi),c=Mi.dot(jh),l=Vi.dot(Vi),h=Vi.dot(jh),u=s*l-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(s*h-o*c)*d;return a.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wi)!==null&&Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Wi.x),c.addScaledVector(s,Wi.y),c.addScaledVector(o,Wi.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return Kh.setScalar(0),Zh.setScalar(0),Jh.setScalar(0),Kh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Kh,a.x),s.addScaledVector(Zh,a.y),s.addScaledVector(Jh,a.z),s}static isFrontFacing(e,t,n,r){return Mi.subVectors(n,t),Vi.subVectors(e,t),Mi.cross(Vi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),.5*Mi.cross(Vi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,s,o;Wa.subVectors(r,n),ja.subVectors(a,n),Xh.subVectors(e,n);let c=Wa.dot(Xh),l=ja.dot(Xh);if(c<=0&&l<=0)return t.copy(n);qh.subVectors(e,r);let h=Wa.dot(qh),u=ja.dot(qh);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector(Wa,s);Yh.subVectors(e,a);let p=Wa.dot(Yh),f=ja.dot(Yh);if(f>=0&&p<=f)return t.copy(a);let m=p*l-c*f;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(ja,o);let v=h*f-p*u;if(v<=0&&u-h>=0&&p-f>=0)return If.subVectors(a,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(If,o);let g=1/(v+m+d);return s=m*g,o=d*g,t.copy(n).addScaledVector(Wa,s).addScaledVector(ja,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},e1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Qh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=Ku(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Qh(s,a,e+1/3),this.g=Qh(s,a,e),this.b=Qh(s,a,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=e1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return nt.fromWorkingColorSpace(vn.copy(this),e),65536*Math.round(qt(255*vn.r,0,255))+256*Math.round(qt(255*vn.g,0,255))+Math.round(qt(255*vn.b,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(vn.copy(this),t);let n=vn.r,r=vn.g,a=vn.b,s=Math.max(n,r,a),o=Math.min(n,r,a),c,l,h=(o+s)/2;if(o===s)c=0,l=0;else{let u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case n:c=(r-a)/u+(r<a?6:0);break;case r:c=(a-n)/u+2;break;case a:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Ut){nt.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,r=vn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(nc);let n=js(Mr.h,nc.h,t),r=js(Mr.s,nc.s,t),a=js(Mr.l,nc.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new fe;fe.NAMES=e1;var Yv=0,Hn=class extends Cr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=ti(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=xu,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(a){let s=[];for(let o in a){let c=a[o];delete c.metadata,s.push(c)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bu&&(n.blendSrc=this.blendSrc),this.blendDst!==xu&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},an=class extends Hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ny=Kv();function Kv(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,a[c]=l|h}for(let c=1024;c<2048;++c)a[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)s[c]=c<<23;s[31]=1199570944,s[32]=2147483648;for(let c=33;c<63;++c)s[c]=2147483648+(c-32<<23);s[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}var Jt=new S,ic=new ie,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}};var Hc=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var kc=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zv=0,$n=new Me,$h=new it,Xa=new S,Wn=new rn,Os=new rn,cn=new S,Be=class i extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($m(e)?kc:Hc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new Xe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,a=e.length;r<a;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,r=t.count;n<r;n++){let a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let a=t[n];Wn.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Wn.min,Os.min),Wn.expandByPoint(cn),cn.addVectors(Wn.max,Os.max),Wn.expandByPoint(cn)):(Wn.expandByPoint(Os.min),Wn.expandByPoint(Os.max))}Wn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)cn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(cn));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)cn.fromBufferAttribute(o,l),c&&(Xa.fromBufferAttribute(e,l),cn.add(Xa)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new S,c[_]=new S;let l=new S,h=new S,u=new S,d=new ie,p=new ie,f=new ie,m=new S,v=new S;function g(_,w,A){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),d.fromBufferAttribute(a,_),p.fromBufferAttribute(a,w),f.fromBufferAttribute(a,A),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let C=1/(p.x*f.y-f.x*p.y);isFinite(C)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(C),v.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(C),o[_].add(m),o[w].add(m),o[A].add(m),c[_].add(v),c[w].add(v),c[A].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,w=b.length;_<w;++_){let A=b[_],C=A.start;for(let I=C,G=C+A.count;I<G;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new S,M=new S,E=new S,y=new S;function T(_){E.fromBufferAttribute(r,_),y.copy(E);let w=o[_];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(y,w);let A=M.dot(c[_])<0?-1:1;s.setXYZW(_,x.x,x.y,x.z,A)}for(let _=0,w=b.length;_<w;++_){let A=b[_],C=A.start;for(let I=C,G=C+A.count;I<G;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new S,a=new S,s=new S,o=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let m=0,v=c.length;m<v;m++){p=o.isInterleavedBufferAttribute?c[m]*o.data.stride+o.offset:c[m]*h;for(let g=0;g<h;g++)d[f++]=l[p++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],u=a[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,h=s.length;l<h;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Df=new Me,Zr=new ia,rc=new On,Uf=new S,ac=new S,sc=new S,oc=new S,eu=new S,cc=new S,Nf=new S,lc=new S,te=class extends it{constructor(e=new Be,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){cc.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],u=a[c];h!==0&&(eu.fromBufferAttribute(u,e),s?cc.addScaledVector(eu,h):cc.addScaledVector(eu.sub(t),h))}t.add(cc)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(a),Zr.copy(e.ray).recast(e.near),rc.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(rc,Uf)===null||Zr.origin.distanceToSquared(Uf)>(e.far-e.near)**2))return;Df.copy(a).invert(),Zr.copy(e.ray).applyMatrix4(Df),n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Zr)}}_computeIntersections(e,t,n){let r,a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,m=d.length;f<m;f++){let v=d[f],g=s[v.materialIndex];for(let b=Math.max(v.start,p.start),x=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));b<x;b+=3)r=hc(this,g,e,n,l,h,u,o.getX(b),o.getX(b+1),o.getX(b+2)),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=hc(this,s,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(s))for(let f=0,m=d.length;f<m;f++){let v=d[f],g=s[v.materialIndex];for(let b=Math.max(v.start,p.start),x=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));b<x;b+=3)r=hc(this,g,e,n,l,h,u,b,b+1,b+2),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(c.count,p.start+p.count);f<m;f+=3)r=hc(this,s,e,n,l,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function hc(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,ac),i.getVertexPosition(c,sc),i.getVertexPosition(l,oc);let h=(function(u,d,p,f,m,v,g,b){let x;if(x=d.side===1?f.intersectTriangle(g,v,m,!0,b):f.intersectTriangle(m,v,g,d.side===0,b),x===null)return null;lc.copy(b),lc.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(lc);return M<p.near||M>p.far?null:{distance:M,point:lc.clone(),object:u}})(i,e,t,n,ac,sc,oc,Nf);if(h){let u=new S;Tr.getBarycoord(Nf,ac,sc,oc,u),r&&(h.uv=Tr.getInterpolatedAttribute(r,o,c,l,u,new ie)),a&&(h.uv1=Tr.getInterpolatedAttribute(a,o,c,l,u,new ie)),s&&(h.normal=Tr.getInterpolatedAttribute(s,o,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new S,materialIndex:0};Tr.getNormal(ac,sc,oc,d.normal),h.face=d,h.barycoord=u}return h}var st=class i extends Be{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=0,p=0;function f(m,v,g,b,x,M,E,y,T,_,w){let A=M/T,C=E/_,I=M/2,G=E/2,D=y/2,W=T+1,V=_+1,z=0,j=0,Y=new S;for(let Z=0;Z<V;Z++){let X=Z*C-G;for(let O=0;O<W;O++){let J=O*A-I;Y[m]=J*b,Y[v]=X*x,Y[g]=D,l.push(Y.x,Y.y,Y.z),Y[m]=0,Y[v]=0,Y[g]=y>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(O/T),u.push(1-Z/_),z+=1}}for(let Z=0;Z<_;Z++)for(let X=0;X<T;X++){let O=d+X+W*Z,J=d+X+W*(Z+1),ne=d+(X+1)+W*(Z+1),$=d+(X+1)+W*Z;c.push(O,J,$),c.push(J,ne,$),j+=6}o.addGroup(p,j,w),p+=j,d+=z}f("z","y","x",-1,-1,n,t,e,s,a,0),f("z","y","x",1,-1,n,t,-e,s,a,1),f("x","z","y",1,1,e,n,t,r,s,2),f("x","z","y",1,-1,e,n,-t,r,s,3),f("x","y","z",1,-1,e,t,n,r,a,4),f("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let r in n)e[r]=n[r]}return e}function t1(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var In={clone:cs,merge:Pn},wt=class extends Hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},eo=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Er=new S,Of=new ie,Hf=new ie,nn=class extends eo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*os*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*$a*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*os*Math.atan(Math.tan(.5*$a*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Of,Hf),t.subVectors(Hf,Of)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*$a*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qa=-90,$u=class extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(qa,1,e,t);r.layers=this.layers,this.add(r);let a=new nn(qa,1,e,t);a.layers=this.layers,this.add(a);let s=new nn(qa,1,e,t);s.layers=this.layers,this.add(s);let o=new nn(qa,1,e,t);o.layers=this.layers,this.add(o);let c=new nn(qa,1,e,t);c.layers=this.layers,this.add(c);let l=new nn(qa,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(let l of t)this.remove(l);if(e===ss)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Uc)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Fc=class extends Yt{constructor(e,t,n,r,a,s,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ns,n,r,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ed=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new st(5,5,5),a=new wt({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new te(r,a),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=ln),new $u(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}},tu=new S,Jv=new S,Qv=new Xe,Xi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=tu.subVectors(n,t).cross(Jv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qv.getNormalMatrix(e),r=this.coplanarPoint(tu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jr=new On,uc=new S,Pr=class{constructor(e=new Xi,t=new Xi,n=new Xi,r=new Xi,a=new Xi,s=new Xi){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],m=r[10],v=r[11],g=r[12],b=r[13],x=r[14],M=r[15];if(n[0].setComponents(c-a,d-l,v-p,M-g).normalize(),n[1].setComponents(c+a,d+l,v+p,M+g).normalize(),n[2].setComponents(c+s,d+h,v+f,M+b).normalize(),n[3].setComponents(c-s,d-h,v-f,M-b).normalize(),n[4].setComponents(c-o,d-u,v-m,M-x).normalize(),t===ss)n[5].setComponents(c+o,d+u,v+m,M+x).normalize();else{if(t!==Uc)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,m,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(uc.x=r.normal.x>0?e.max.x:e.min.x,uc.y=r.normal.y>0?e.max.y:e.min.y,uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function n1(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function $v(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let a=e.get(t);return void((!a||a.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(a,s){let o=a.array,c=a.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(s,h),i.bufferData(s,o,c),a.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=a.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(a,s,o){let c=s.array,l=s.updateRanges;if(i.bindBuffer(o,a),l.length===0)i.bufferSubData(o,0,c);else{l.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var xn=class i extends Be{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],m=[],v=[];for(let g=0;g<h;g++){let b=g*d-s;for(let x=0;x<l;x++){let M=x*u-a;f.push(M,-b,0),m.push(0,0,1),v.push(x/o),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){let x=b+l*g,M=b+l*(g+1),E=b+1+l*(g+1),y=b+1+l*g;p.push(x,M,y),p.push(M,E,y)}this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(m,3)),this.setAttribute("uv",new Ce(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ye={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new fe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Pn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Pn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Pn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Pn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Pn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Pn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Pn([ye.common,ye.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Pn([ye.lights,ye.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var dc={r:0,b:0,g:0},Qr=new ii,eb=new Me;function tb(i,e,t,n,r,a,s){let o=new fe(0),c,l,h=a===!0?0:1,u=null,d=0,p=null;function f(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g)),g}function m(v,g){v.getRGB(dc,t1(i)),n.buffers.color.setClear(dc.r,dc.g,dc.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),h=g,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,m(o,h)},render:function(v){let g=!1,b=f(v);b===null?m(o,h):b&&b.isColor&&(m(b,1),g=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(v,g){let b=f(g);b&&(b.isCubeTexture||b.mapping===gl)?(l===void 0&&(l=new te(new st(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Qr.copy(g.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(Qr)),l.material.toneMapped=nt.getTransfer(b.colorSpace)!==vt,u===b&&d===b.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new te(new xn(2,2),new wt({name:"BackgroundMaterial",uniforms:cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=nt.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),u===b&&d===b.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}}}function nb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),a=r,s=!1;function o(g){return i.bindVertexArray(g)}function c(g){return i.deleteVertexArray(g)}function l(g){let b=[],x=[],M=[];for(let E=0;E<t;E++)b[E]=0,x[E]=0,M[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:x,attributeDivisors:M,object:g,attributes:{},index:null}}function h(){let g=a.newAttributes;for(let b=0,x=g.length;b<x;b++)g[b]=0}function u(g){d(g,0)}function d(g,b){let x=a.newAttributes,M=a.enabledAttributes,E=a.attributeDivisors;x[g]=1,M[g]===0&&(i.enableVertexAttribArray(g),M[g]=1),E[g]!==b&&(i.vertexAttribDivisor(g,b),E[g]=b)}function p(){let g=a.newAttributes,b=a.enabledAttributes;for(let x=0,M=b.length;x<M;x++)b[x]!==g[x]&&(i.disableVertexAttribArray(x),b[x]=0)}function f(g,b,x,M,E,y,T){T===!0?i.vertexAttribIPointer(g,b,x,E,y):i.vertexAttribPointer(g,b,x,M,E,y)}function m(){v(),s=!0,a!==r&&(a=r,o(a.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,b,x,M,E){let y=!1,T=(function(_,w,A){let C=A.wireframe===!0,I=n[_.id];I===void 0&&(I={},n[_.id]=I);let G=I[w.id];G===void 0&&(G={},I[w.id]=G);let D=G[C];return D===void 0&&(D=l(i.createVertexArray()),G[C]=D),D})(M,x,b);a!==T&&(a=T,o(a.object)),y=(function(_,w,A,C){let I=a.attributes,G=w.attributes,D=0,W=A.getAttributes();for(let V in W)if(W[V].location>=0){let z=I[V],j=G[V];if(j===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),z===void 0||z.attribute!==j||j&&z.data!==j.data)return!0;D++}return a.attributesNum!==D||a.index!==C})(g,M,x,E),y&&(function(_,w,A,C){let I={},G=w.attributes,D=0,W=A.getAttributes();for(let V in W)if(W[V].location>=0){let z=G[V];z===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(z=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(z=_.instanceColor));let j={};j.attribute=z,z&&z.data&&(j.data=z.data),I[V]=j,D++}a.attributes=I,a.attributesNum=D,a.index=C})(g,M,x,E),E!==null&&e.update(E,i.ELEMENT_ARRAY_BUFFER),(y||s)&&(s=!1,(function(_,w,A,C){h();let I=C.attributes,G=A.getAttributes(),D=w.defaultAttributeValues;for(let W in G){let V=G[W];if(V.location>=0){let z=I[W];if(z===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(z=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(z=_.instanceColor)),z!==void 0){let j=z.normalized,Y=z.itemSize,Z=e.get(z);if(Z===void 0)continue;let X=Z.buffer,O=Z.type,J=Z.bytesPerElement,ne=O===i.INT||O===i.UNSIGNED_INT||z.gpuType===Gd;if(z.isInterleavedBufferAttribute){let $=z.data,L=$.stride,R=z.offset;if($.isInstancedInterleavedBuffer){for(let B=0;B<V.locationSize;B++)d(V.location+B,$.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let B=0;B<V.locationSize;B++)u(V.location+B);i.bindBuffer(i.ARRAY_BUFFER,X);for(let B=0;B<V.locationSize;B++)f(V.location+B,Y/V.locationSize,O,j,L*J,(R+Y/V.locationSize*B)*J,ne)}else{if(z.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)d(V.location+$,z.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let $=0;$<V.locationSize;$++)u(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,X);for(let $=0;$<V.locationSize;$++)f(V.location+$,Y/V.locationSize,O,j,Y*J,Y/V.locationSize*$*J,ne)}}else if(D!==void 0){let j=D[W];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}p()})(g,b,x,M),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:m,resetDefaultState:v,dispose:function(){m();for(let g in n){let b=n[g];for(let x in b){let M=b[x];for(let E in M)c(M[E].object),delete M[E];delete b[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let b=n[g.id];for(let x in b){let M=b[x];for(let E in M)c(M[E].object),delete M[E];delete b[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let b in n){let x=n[b];if(x[g.id]===void 0)continue;let M=x[g.id];for(let E in M)c(M[E].object),delete M[E];delete x[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function ib(i,e,t){let n;function r(a,s,o){o!==0&&(i.drawArraysInstanced(n,a,s,o),t.update(s,n,o))}this.setMode=function(a){n=a},this.render=function(a,s){i.drawArrays(n,a,s),t.update(s,n,1)},this.renderInstances=r,this.renderMultiDraw=function(a,s,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,s,0,o);let c=0;for(let l=0;l<o;l++)c+=s[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(a,s,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<a.length;h++)r(a[h],s[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,a,0,s,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=s[u]*c[u];t.update(h,n,1)}}}function rb(i,e,t,n){let r;function a(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let c=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,textureFormatReadable:function(d){return d===jn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Ni&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Ti&&!p)},precision:s,logarithmicDepthBuffer:c,reverseDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function ab(i){let e=this,t=null,n=0,r=!1,a=!1,s=new Xi,o=new Xe,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=c.value,p!==!0||m===null){let v=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<v)&&(m=new Float32Array(v));for(let b=0,x=d;b!==f;++b,x+=4)s.copy(h[b]).applyMatrix4(g,o),s.normal.toArray(m,x),m[x+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,v=i.get(h);if(!r||p===null||p.length===0||a&&!m)a?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=a?0:n,b=4*g,x=v.clippingState||null;c.value=x,x=l(p,u,b,d);for(let M=0;M!==b;++M)x[M]=t[M];v.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function sb(i){let e=new WeakMap;function t(r,a){return a===yu?r.mapping=ns:a===Mu&&(r.mapping=is),r}function n(r){let a=r.target;a.removeEventListener("dispose",n);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping;if(a===yu||a===Mu){if(e.has(r))return t(e.get(r).texture,r.mapping);{let s=r.image;if(s&&s.height>0){let o=new ed(s.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Oi=class extends eo{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kf=[.125,.215,.35,.446,.526,.582],Hs=20,nu=new Oi,Ff=new fe,iu=null,ru=0,au=0,su=!1,ea=(1+Math.sqrt(5))/2,Ya=1/ea,Bf=[new S(-ea,Ya,0),new S(ea,Ya,0),new S(-Ya,0,ea),new S(Ya,0,ea),new S(0,ea,-Ya),new S(0,ea,Ya),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Bc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,au),this._renderer.xr.enabled=su,e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:En,format:jn,colorSpace:Tn,depthBuffer:!1},r=zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(s){let o=[],c=[],l=[],h=s,u=s-4+1+kf.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>s-4?f=kf[d-s+4-1]:d===0&&(f=0),l.push(f);let m=1/(p-2),v=-m,g=1+m,b=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,M=6,E=3,y=2,T=1,_=new Float32Array(E*M*x),w=new Float32Array(y*M*x),A=new Float32Array(T*M*x);for(let I=0;I<x;I++){let G=I%3*2/3-1,D=I>2?0:-1,W=[G,D,0,G+2/3,D,0,G+2/3,D+1,0,G,D,0,G+2/3,D+1,0,G,D+1,0];_.set(W,E*M*I),w.set(b,y*M*I);let V=[I,I,I,I,I,I];A.set(V,T*M*I)}let C=new Be;C.setAttribute("position",new dt(_,E)),C.setAttribute("uv",new dt(w,y)),C.setAttribute("faceIndex",new dt(A,T)),o.push(C),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(a)),this._blurMaterial=(function(s,o,c){let l=new Float32Array(Hs),h=new S(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(a,e,t)}return r}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,n,r){let a=new nn(90,1,t,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Ff),c.toneMapping=0,c.autoClear=!1;let u=new an({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new te(new st,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Ff),p=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,s[m],0),a.lookAt(o[m],0,0)):v===1?(a.up.set(0,0,s[m]),a.lookAt(0,o[m],0)):(a.up.set(0,s[m],0),a.lookAt(0,0,o[m]));let g=this._cubeSize;pc(r,v*g,m>2?g:0,g,g),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new te(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let o=this._cubeSize;pc(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,nu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Bf[(r-a-1)%Bf.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new te(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,f=a/p,m=isFinite(a)?1+Math.floor(3*f):Hs;m>Hs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],g=0;for(let M=0;M<Hs;++M){let E=M/f,y=Math.exp(-E*E/2);v.push(y),M===0?g+=y:M<m&&(g+=2*y)}for(let M=0;M<v.length;M++)v[M]=v[M]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=p,u.mipInt.value=b-n;let x=this._sizeLods[r];pc(t,3*x*(r>b-4?r-b+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,nu)}};function zf(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gf(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vf(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kd(){return`

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
	`}function ob(i){let e=new WeakMap,t=null;function n(r){let a=r.target;a.removeEventListener("dispose",n);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping,s=a===yu||a===Mu,o=a===ns||a===is;if(s||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Bc(i)),c=s?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return s&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Bc(i)),c=s?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function cb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lb(i,e,t,n){let r={},a=new WeakMap;function s(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let d=l.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}l.removeEventListener("dispose",s),delete r[l.id];let h=a.get(l);h&&(e.remove(h),a.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let m=h.array;d=h.version;for(let v=0,g=m.length;v<g;v+=3){let b=m[v+0],x=m[v+1],M=m[v+2];l.push(b,x,x,M,M,b)}}else{if(u===void 0)return;{let m=u.array;d=u.version;for(let v=0,g=m.length/3-1;v<g;v+=3){let b=v+0,x=v+1,M=v+2;l.push(b,x,x,M,M,b)}}}let p=new($m(l)?kc:Hc)(l,1);p.version=d;let f=a.get(c);f&&e.remove(f),a.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",s),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],i.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=a.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return a.get(c)}}}function hb(i,e,t){let n,r,a;function s(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*a,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,a=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*a),t.update(c,n,1)},this.renderInstances=s,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)s(o[d]/a,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function ub(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function db(i,e,t){let n=new WeakMap,r=new at;return{update:function(a,s,o){let c=a.morphTargetInfluences,l=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(s);if(u===void 0||u.count!==h){let _=function(){y.dispose(),n.delete(s),s.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let d=s.morphAttributes.position!==void 0,p=s.morphAttributes.normal!==void 0,f=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],v=s.morphAttributes.normal||[],g=s.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),f===!0&&(b=3);let x=s.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*M*4*h),y=new Oc(E,x,M,h);y.type=Ti,y.needsUpdate=!0;let T=4*b;for(let w=0;w<h;w++){let A=m[w],C=v[w],I=g[w],G=x*M*4*w;for(let D=0;D<A.count;D++){let W=D*T;d===!0&&(r.fromBufferAttribute(A,D),E[G+W+0]=r.x,E[G+W+1]=r.y,E[G+W+2]=r.z,E[G+W+3]=0),p===!0&&(r.fromBufferAttribute(C,D),E[G+W+4]=r.x,E[G+W+5]=r.y,E[G+W+6]=r.z,E[G+W+7]=0),f===!0&&(r.fromBufferAttribute(I,D),E[G+W+8]=r.x,E[G+W+9]=r.y,E[G+W+10]=r.z,E[G+W+11]=I.itemSize===4?r.w:1)}}u={count:h,texture:y,size:new ie(x,M)},n.set(s,u),s.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=s.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function pb(i,e,t,n){let r=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=n.render.frame,c=s.geometry,l=e.get(s,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),r.get(s)!==o&&(t.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,i.ARRAY_BUFFER),r.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var ls=class extends Yt{constructor(e,t,n,r,a,s,o,c,l,h=1026){if(h!==Js&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=na),n===void 0&&h===Rr&&(n=Ar),super(null,r,a,s,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},i1=new Yt,Wf=new ls(1,1),r1=new Oc,a1=new Qu,s1=new Fc,jf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),Kf=new Float32Array(4);function ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,a=jf[r];if(a===void 0&&(a=new Float32Array(r),jf[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function gb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function vb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function bb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Kf.set(n),i.uniformMatrix2fv(this.addr,!1,Kf),on(t,n)}}function xb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Yf.set(n),i.uniformMatrix3fv(this.addr,!1,Yf),on(t,n)}}function yb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;qf.set(n),i.uniformMatrix4fv(this.addr,!1,qf),on(t,n)}}function Mb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function Tb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function _b(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function wb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function Ab(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function Rb(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function Cb(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),a;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Wf.compareFunction=515,a=Wf):a=i1,t.setTexture2D(e||a,r)}function Pb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||a1,r)}function Lb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||s1,r)}function Ib(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||r1,r)}function Db(i,e){i.uniform1fv(this.addr,e)}function Ub(i,e){let t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Nb(i,e){let t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function Ob(i,e){let t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function Hb(i,e){let t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kb(i,e){let t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fb(i,e){let t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bb(i,e){i.uniform1iv(this.addr,e)}function zb(i,e){i.uniform2iv(this.addr,e)}function Gb(i,e){i.uniform3iv(this.addr,e)}function Vb(i,e){i.uniform4iv(this.addr,e)}function Wb(i,e){i.uniform1uiv(this.addr,e)}function jb(i,e){i.uniform2uiv(this.addr,e)}function Xb(i,e){i.uniform3uiv(this.addr,e)}function qb(i,e){i.uniform4uiv(this.addr,e)}function Yb(i,e,t){let n=this.cache,r=e.length,a=xl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||i1,a[s])}function Kb(i,e,t){let n=this.cache,r=e.length,a=xl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||a1,a[s])}function Zb(i,e,t){let n=this.cache,r=e.length,a=xl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||s1,a[s])}function Jb(i,e,t){let n=this.cache,r=e.length,a=xl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||r1,a[s])}var td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return fb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return bb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return _b;case 5125:return wb;case 36294:return Sb;case 36295:return Ab;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}})(t.type)}},nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Db;case 35664:return Ub;case 35665:return Nb;case 35666:return Ob;case 35674:return Hb;case 35675:return kb;case 35676:return Fb;case 5124:case 35670:return Bb;case 35667:case 35671:return zb;case 35668:case 35672:return Gb;case 35669:case 35673:return Vb;case 5125:return Wb;case 36294:return jb;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Jb}})(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function Zf(i,e){i.seq.push(e),i.map[e.id]=e}function Qb(i,e,t){let n=i.name,r=n.length;for(ou.lastIndex=0;;){let a=ou.exec(n),s=ou.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o|=0),l===void 0||l==="["&&s+2===r){Zf(t,l===void 0?new td(o,i,e):new nd(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new id(o),Zf(t,h)),t=h}}}var ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r);Qb(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Jf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $b=0,Qf=new Xe;function $f(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),s)}return r}function e5(i,e){let t=(function(n){nt._getMatrix(Qf,nt.workingColorSpace,n);let r=`mat3( ${Qf.elements.map((a=>a.toFixed(4)))} )`;switch(nt.getTransfer(n)){case bl:return[r,"LinearTransferOETF"];case vt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t5(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fc=new S;function n5(){return nt.getLuminanceCoefficients(fc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${fc.x.toFixed(4)}, ${fc.y.toFixed(4)}, ${fc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ks(i){return i!==""}function em(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var i5=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(i){return i.replace(i5,a5)}var r5=new Map;function a5(i,e){let t=Je[e];if(t===void 0){let n=r5.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return rd(t)}var s5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(i){return i.replace(s5,o5)}function o5(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function im(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function c5(i,e,t,n){let r=i.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,c=(function(C){let I="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===1?I="SHADOWMAP_TYPE_PCF":C.shadowMapType===2?I="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===3&&(I="SHADOWMAP_TYPE_VSM"),I})(t),l=(function(C){let I="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case ns:case is:I="ENVMAP_TYPE_CUBE";break;case gl:I="ENVMAP_TYPE_CUBE_UV"}return I})(t),h=(function(C){let I="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===is&&(I="ENVMAP_MODE_REFRACTION"),I})(t),u=(function(C){let I="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case 0:I="ENVMAP_BLENDING_MULTIPLY";break;case 1:I="ENVMAP_BLENDING_MIX";break;case 2:I="ENVMAP_BLENDING_ADD"}return I})(t),d=(function(C){let I=C.envMapCubeUVHeight;if(I===null)return null;let G=Math.log2(I)-2,D=1/I;return{texelWidth:1/(3*Math.max(Math.pow(2,G),112)),texelHeight:D,maxMip:G}})(t),p=(function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)})(t),f=(function(C){let I=[];for(let G in C){let D=C[G];D!==!1&&I.push("#define "+G+" "+D)}return I.join(`
`)})(a),m=r.createProgram(),v,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ks).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ks).join(`
`),g.length>0&&(g+=`
`)):(v=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),g=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Je.tonemapping_pars_fragment:"",t.toneMapping!==0?t5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,e5("linearToOutputTexel",t.outputColorSpace),n5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),s=rd(s),s=em(s,t),s=tm(s,t),o=rd(o),o=em(o,t),o=tm(o,t),s=nm(s),o=nm(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=b+v+s,M=b+g+o,E=Jf(r,r.VERTEX_SHADER,x),y=Jf(r,r.FRAGMENT_SHADER,M);function T(C){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(m).trim(),G=r.getShaderInfoLog(E).trim(),D=r.getShaderInfoLog(y).trim(),W=!0,V=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,E,y);else{let z=$f(r,E,"vertex"),j=$f(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+z+`
`+j)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):G!==""&&D!==""||(V=!1);V&&(C.diagnostics={runnable:W,programLog:I,vertexShader:{log:G,prefix:v},fragmentShader:{log:D,prefix:g}})}r.deleteShader(E),r.deleteShader(y),_=new ts(r,m),w=(function(I,G){let D={},W=I.getProgramParameter(G,I.ACTIVE_ATTRIBUTES);for(let V=0;V<W;V++){let z=I.getActiveAttrib(G,V),j=z.name,Y=1;z.type===I.FLOAT_MAT2&&(Y=2),z.type===I.FLOAT_MAT3&&(Y=3),z.type===I.FLOAT_MAT4&&(Y=4),D[j]={type:z.type,location:I.getAttribLocation(G,j),locationSize:Y}}return D})(r,m)}let _,w;r.attachShader(m,E),r.attachShader(m,y),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return _===void 0&&T(this),_},this.getAttributes=function(){return w===void 0&&T(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(m,37297)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=y,this}var l5=0,ad=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sd(e),t.set(e,n)),n}},sd=class{constructor(e){this.id=l5++,this.code=e,this.usedTimes=0}};function h5(i,e,t,n,r,a,s){let o=new $s,c=new ad,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}return{getParameters:function(v,g,b,x,M){let E=x.fog,y=M.geometry,T=v.isMeshStandardMaterial?x.environment:null,_=(v.isMeshStandardMaterial?t:e).get(v.envMap||T),w=_&&_.mapping===gl?_.image.height:null,A=f[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let C=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,I=C!==void 0?C.length:0,G,D,W,V,z=0;if(y.morphAttributes.position!==void 0&&(z=1),y.morphAttributes.normal!==void 0&&(z=2),y.morphAttributes.color!==void 0&&(z=3),A){let mi=Di[A];G=mi.vertexShader,D=mi.fragmentShader}else G=v.vertexShader,D=v.fragmentShader,c.update(v),W=c.getVertexShaderID(v),V=c.getFragmentShaderID(v);let j=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),Z=M.isInstancedMesh===!0,X=M.isBatchedMesh===!0,O=!!v.map,J=!!v.matcap,ne=!!_,$=!!v.aoMap,L=!!v.lightMap,R=!!v.bumpMap,B=!!v.normalMap,H=!!v.displacementMap,U=!!v.emissiveMap,k=!!v.metalnessMap,P=!!v.roughnessMap,F=v.anisotropy>0,q=v.clearcoat>0,ae=v.dispersion>0,K=v.iridescence>0,oe=v.sheen>0,ce=v.transmission>0,ue=F&&!!v.anisotropyMap,xe=q&&!!v.clearcoatMap,be=q&&!!v.clearcoatNormalMap,we=q&&!!v.clearcoatRoughnessMap,Ie=K&&!!v.iridescenceMap,tt=K&&!!v.iridescenceThicknessMap,We=oe&&!!v.sheenColorMap,Pe=oe&&!!v.sheenRoughnessMap,ht=!!v.specularMap,mt=!!v.specularColorMap,xt=!!v.specularIntensityMap,Se=ce&&!!v.transmissionMap,Ve=ce&&!!v.thicknessMap,yt=!!v.gradientMap,pr=!!v.alphaMap,Ua=v.alphaTest>0,zn=!!v.alphaHash,Jn=!!v.extensions,Gn=0;v.toneMapped&&(j!==null&&j.isXRRenderTarget!==!0||(Gn=i.toneMapping));let Q={shaderID:A,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:D,defines:v.defines,customVertexShaderID:W,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:X,batchingColor:X&&M._colorsTexture!==null,instancing:Z,instancingColor:Z&&M.instanceColor!==null,instancingMorph:Z&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Tn,alphaToCoverage:!!v.alphaToCoverage,map:O,matcap:J,envMap:ne,envMapMode:ne&&_.mapping,envMapCubeUVHeight:w,aoMap:$,lightMap:L,bumpMap:R,normalMap:B,displacementMap:d&&H,emissiveMap:U,normalMapObjectSpace:B&&v.normalMapType===1,normalMapTangentSpace:B&&v.normalMapType===0,metalnessMap:k,roughnessMap:P,anisotropy:F,anisotropyMap:ue,clearcoat:q,clearcoatMap:xe,clearcoatNormalMap:be,clearcoatRoughnessMap:we,dispersion:ae,iridescence:K,iridescenceMap:Ie,iridescenceThicknessMap:tt,sheen:oe,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:ht,specularColorMap:mt,specularIntensityMap:xt,transmission:ce,transmissionMap:Se,thicknessMap:Ve,gradientMap:yt,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:pr,alphaTest:Ua,alphaHash:zn,combine:v.combine,mapUv:O&&m(v.map.channel),aoMapUv:$&&m(v.aoMap.channel),lightMapUv:L&&m(v.lightMap.channel),bumpMapUv:R&&m(v.bumpMap.channel),normalMapUv:B&&m(v.normalMap.channel),displacementMapUv:H&&m(v.displacementMap.channel),emissiveMapUv:U&&m(v.emissiveMap.channel),metalnessMapUv:k&&m(v.metalnessMap.channel),roughnessMapUv:P&&m(v.roughnessMap.channel),anisotropyMapUv:ue&&m(v.anisotropyMap.channel),clearcoatMapUv:xe&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:We&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(v.sheenRoughnessMap.channel),specularMapUv:ht&&m(v.specularMap.channel),specularColorMapUv:mt&&m(v.specularColorMap.channel),specularIntensityMapUv:xt&&m(v.specularIntensityMap.channel),transmissionMapUv:Se&&m(v.transmissionMap.channel),thicknessMapUv:Ve&&m(v.thicknessMap.channel),alphaMapUv:pr&&m(v.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(B||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!y.attributes.uv&&(O||pr),fog:!!E,useFog:v.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Y,skinning:M.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:z,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gn,decodeVideoTexture:O&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:U&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Jn&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jn&&v.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Q.vertexUv1s=l.has(1),Q.vertexUv2s=l.has(2),Q.vertexUv3s=l.has(3),l.clear(),Q},getProgramCacheKey:function(v){let g=[];if(v.shaderID?g.push(v.shaderID):(g.push(v.customVertexShaderID),g.push(v.customFragmentShaderID)),v.defines!==void 0)for(let b in v.defines)g.push(b),g.push(v.defines[b]);return v.isRawShaderMaterial===!1&&((function(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)})(g,v),(function(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)})(g,v),g.push(i.outputColorSpace)),g.push(v.customProgramCacheKey),g.join()},getUniforms:function(v){let g=f[v.type],b;if(g){let x=Di[g];b=In.clone(x.uniforms)}else b=v.uniforms;return b},acquireProgram:function(v,g){let b;for(let x=0,M=h.length;x<M;x++){let E=h[x];if(E.cacheKey===g){b=E,++b.usedTimes;break}}return b===void 0&&(b=new c5(i,g,v,a),h.push(b)),b},releaseProgram:function(v){if(--v.usedTimes==0){let g=h.indexOf(v);h[g]=h[h.length-1],h.pop(),v.destroy()}},releaseShaderCache:function(v){c.remove(v)},programs:h,dispose:function(){c.dispose()}}}function u5(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function d5(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function am(){let i=[],e=0,t=[],n=[],r=[];function a(s,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:c,groupOrder:l,renderOrder:s.renderOrder,z:h,group:u},i[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(s,o,c,l,h,u){let d=a(s,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(s,o,c,l,h,u){let d=a(s,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=i.length;s<o;s++){let c=i[s];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(s,o){t.length>1&&t.sort(s||d5),n.length>1&&n.sort(o||rm),r.length>1&&r.sort(o||rm)}}}function p5(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new am,i.set(e,[r])):t>=n.length?(r=new am,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function f5(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new fe};break;case"SpotLight":t={position:new S,direction:new S,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new S,halfWidth:new S,halfHeight:new S}}return i[e.id]=t,t}}}var m5=0;function g5(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v5(i){let e=new f5,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new S);let r=new S,a=new Me,s=new Me;return{setup:function(o){let c=0,l=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,v=0,g=0,b=0,x=0,M=0,E=0;o.sort(g5);for(let T=0,_=o.length;T<_;T++){let w=o[T],A=w.color,C=w.intensity,I=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=A.r*C,l+=A.g*C,h+=A.b*C;else if(w.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(w.sh.coefficients[D],C);E++}else if(w.isDirectionalLight){let D=e.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let W=w.shadow,V=t.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=G,n.directionalShadowMatrix[u]=w.shadow.matrix,v++}n.directional[u]=D,u++}else if(w.isSpotLight){let D=e.get(w);D.position.setFromMatrixPosition(w.matrixWorld),D.color.copy(A).multiplyScalar(C),D.distance=I,D.coneCos=Math.cos(w.angle),D.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),D.decay=w.decay,n.spot[p]=D;let W=w.shadow;if(w.map&&(n.spotLightMap[x]=w.map,x++,W.updateMatrices(w),w.castShadow&&M++),n.spotLightMatrix[p]=W.matrix,w.castShadow){let V=t.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[p]=V,n.spotShadowMap[p]=G,b++}p++}else if(w.isRectAreaLight){let D=e.get(w);D.color.copy(A).multiplyScalar(C),D.halfWidth.set(.5*w.width,0,0),D.halfHeight.set(0,.5*w.height,0),n.rectArea[f]=D,f++}else if(w.isPointLight){let D=e.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),D.distance=w.distance,D.decay=w.decay,w.castShadow){let W=w.shadow,V=t.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[d]=V,n.pointShadowMap[d]=G,n.pointShadowMatrix[d]=w.shadow.matrix,g++}n.point[d]=D,d++}else if(w.isHemisphereLight){let D=e.get(w);D.skyColor.copy(w.color).multiplyScalar(C),D.groundColor.copy(w.groundColor).multiplyScalar(C),n.hemi[m]=D,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let y=n.hash;y.directionalLength===u&&y.pointLength===d&&y.spotLength===p&&y.rectAreaLength===f&&y.hemiLength===m&&y.numDirectionalShadows===v&&y.numPointShadows===g&&y.numSpotShadows===b&&y.numSpotMaps===x&&y.numLightProbes===E||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=b+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,y.directionalLength=u,y.pointLength=d,y.spotLength=p,y.rectAreaLength=f,y.hemiLength=m,y.numDirectionalShadows=v,y.numPointShadows=g,y.numSpotShadows=b,y.numSpotMaps=x,y.numLightProbes=E,n.version=m5++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let m=0,v=o.length;m<v;m++){let g=o[m];if(g.isDirectionalLight){let b=n.directional[l];b.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),l++}else if(g.isSpotLight){let b=n.spot[u];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let b=n.rectArea[d];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),s.identity(),a.copy(g.matrixWorld),a.premultiply(f),s.extractRotation(a),b.halfWidth.set(.5*g.width,0,0),b.halfHeight.set(0,.5*g.height,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),d++}else if(g.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(f),p++}}},state:n}}function sm(i){let e=new v5(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(a){r.camera=a,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){n.push(a)}}}function b5(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),a;return r===void 0?(a=new sm(i),e.set(t,[a])):n>=r.length?(a=new sm(i),r.push(a)):a=r[n],a},dispose:function(){e=new WeakMap}}}var od=class extends Hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cd=class extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function x5(i,e,t){let n=new Pr,r=new ie,a=new ie,s=new at,o=new od({depthPacking:3201}),c=new cd,l={},h=t.maxTextureSize,u={[Hd]:1,[kd]:0,[lt]:2},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Be;f.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new te(f,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function b(y,T){let _=e.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $t(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,_,d,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,_,p,m,null)}function x(y,T,_,w){let A=null,C=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=A.uuid,G=T.uuid,D=l[I];D===void 0&&(D={},l[I]=D);let W=D[G];W===void 0&&(W=A.clone(),D[G]=W,T.addEventListener("dispose",E)),A=W}return A.visible=T.visible,A.wireframe=T.wireframe,A.side=w===3?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(i.properties.get(A).light=_),A}function M(y,T,_,w,A){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===3)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);let I=e.update(y),G=y.material;if(Array.isArray(G)){let D=I.groups;for(let W=0,V=D.length;W<V;W++){let z=D[W],j=G[z.materialIndex];if(j&&j.visible){let Y=x(y,j,w,A);y.onBeforeShadow(i,y,T,_,I,Y,z),i.renderBufferDirect(_,null,I,Y,y,z),y.onAfterShadow(i,y,T,_,I,Y,z)}}}else if(G.visible){let D=x(y,G,w,A);y.onBeforeShadow(i,y,T,_,I,D,null),i.renderBufferDirect(_,null,I,D,y,null),y.onAfterShadow(i,y,T,_,I,D,null)}}let C=y.children;for(let I=0,G=C.length;I<G;I++)M(C[I],T,_,w,A)}function E(y){y.target.removeEventListener("dispose",E);for(let T in l){let _=l[T],w=y.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}this.render=function(y,T,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;let w=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let G=g!==3&&this.type===3,D=g===3&&this.type!==3;for(let W=0,V=y.length;W<V;W++){let z=y[W],j=z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let Y=j.getFrameExtents();if(r.multiply(Y),a.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/Y.x),r.x=a.x*Y.x,j.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/Y.y),r.y=a.y*Y.y,j.mapSize.y=a.y)),j.map===null||G===!0||D===!0){let X=this.type!==3?{minFilter:Qt,magFilter:Qt}:{};j.map!==null&&j.map.dispose(),j.map=new $t(r.x,r.y,X),j.map.texture.name=z.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let Z=j.getViewportCount();for(let X=0;X<Z;X++){let O=j.getViewport(X);s.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),I.viewport(s),j.updateMatrices(z,X),n=j.getFrustum(),M(T,_,j.camera,z,this.type)}j.isPointLightShadow!==!0&&this.type===3&&b(j,_),j.needsUpdate=!1}g=this.type,v.needsUpdate=!1,i.setRenderTarget(w,A,C)}}var y5={[Mv]:1,[Tv]:6,[wv]:7,[_v]:5,[Ev]:0,[Av]:2,[Rv]:4,[Sv]:3};function M5(i,e){let t=new function(){let P=!1,F=new at,q=null,ae=new at(0,0,0,0);return{setMask:function(K){q===K||P||(i.colorMask(K,K,K,K),q=K)},setLocked:function(K){P=K},setClear:function(K,oe,ce,ue,xe){xe===!0&&(K*=ue,oe*=ue,ce*=ue),F.set(K,oe,ce,ue),ae.equals(F)===!1&&(i.clearColor(K,oe,ce,ue),ae.copy(F))},reset:function(){P=!1,q=null,ae.set(-1,0,0,0)}}},n=new function(){let P=!1,F=!1,q=null,ae=null,K=null;return{setReversed:function(oe){if(F!==oe){let ce=e.get("EXT_clip_control");F?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);let ue=K;K=null,this.setClear(ue)}F=oe},getReversed:function(){return F},setTest:function(oe){oe?ne(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(oe){q===oe||P||(i.depthMask(oe),q=oe)},setFunc:function(oe){if(F&&(oe=y5[oe]),ae!==oe){switch(oe){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}ae=oe}},setLocked:function(oe){P=oe},setClear:function(oe){K!==oe&&(F&&(oe=1-oe),i.clearDepth(oe),K=oe)},reset:function(){P=!1,q=null,ae=null,K=null,F=!1}}},r=new function(){let P=!1,F=null,q=null,ae=null,K=null,oe=null,ce=null,ue=null,xe=null;return{setTest:function(be){P||(be?ne(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(be){F===be||P||(i.stencilMask(be),F=be)},setFunc:function(be,we,Ie){q===be&&ae===we&&K===Ie||(i.stencilFunc(be,we,Ie),q=be,ae=we,K=Ie)},setOp:function(be,we,Ie){oe===be&&ce===we&&ue===Ie||(i.stencilOp(be,we,Ie),oe=be,ce=we,ue=Ie)},setLocked:function(be){P=be},setClear:function(be){xe!==be&&(i.clearStencil(be),xe=be)},reset:function(){P=!1,F=null,q=null,ae=null,K=null,oe=null,ce=null,ue=null,xe=null}}},a=new WeakMap,s=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,v=null,g=null,b=null,x=null,M=new fe(0,0,0),E=0,y=!1,T=null,_=null,w=null,A=null,C=null,I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,D=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=D>=1):W.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=D>=2);let V=null,z={},j=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),Z=new at().fromArray(j),X=new at().fromArray(Y);function O(P,F,q,ae){let K=new Uint8Array(4),oe=i.createTexture();i.bindTexture(P,oe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<q;ce++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(F,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(F+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return oe}let J={};function ne(P){o[P]!==!0&&(i.enable(P),o[P]=!0)}function $(P){o[P]!==!1&&(i.disable(P),o[P]=!1)}J[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ne(i.DEPTH_TEST),n.setFunc(3),H(!1),U(1),ne(i.CULL_FACE),B(0);let L={[ei]:i.FUNC_ADD,[hv]:i.FUNC_SUBTRACT,[uv]:i.FUNC_REVERSE_SUBTRACT};L[103]=i.MIN,L[104]=i.MAX;let R={[Nr]:i.ZERO,[dv]:i.ONE,[Bd]:i.SRC_COLOR,[bu]:i.SRC_ALPHA,[gv]:i.SRC_ALPHA_SATURATE,[fl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[pv]:i.ONE_MINUS_SRC_COLOR,[xu]:i.ONE_MINUS_SRC_ALPHA,[mv]:i.ONE_MINUS_DST_COLOR,[fv]:i.ONE_MINUS_DST_ALPHA,[vv]:i.CONSTANT_COLOR,[bv]:i.ONE_MINUS_CONSTANT_COLOR,[xv]:i.CONSTANT_ALPHA,[yv]:i.ONE_MINUS_CONSTANT_ALPHA};function B(P,F,q,ae,K,oe,ce,ue,xe,be){if(P!==0){if(d===!1&&(ne(i.BLEND),d=!0),P===5)K=K||F,oe=oe||q,ce=ce||ae,F===f&&K===g||(i.blendEquationSeparate(L[F],L[K]),f=F,g=K),q===m&&ae===v&&oe===b&&ce===x||(i.blendFuncSeparate(R[q],R[ae],R[oe],R[ce]),m=q,v=ae,b=oe,x=ce),ue.equals(M)!==!1&&xe===E||(i.blendColor(ue.r,ue.g,ue.b,xe),M.copy(ue),E=xe),p=P,y=!1;else if(P!==p||be!==y){if(f===ei&&g===ei||(i.blendEquation(i.FUNC_ADD),f=ei,g=ei),be)switch(P){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}else switch(P){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}m=null,v=null,b=null,x=null,M.set(0,0,0),E=0,p=P,y=be}}else d===!0&&($(i.BLEND),d=!1)}function H(P){T!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),T=P)}function U(P){P!==0?(ne(i.CULL_FACE),P!==_&&(P===1?i.cullFace(i.BACK):P===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),_=P}function k(P,F,q){P?(ne(i.POLYGON_OFFSET_FILL),A===F&&C===q||(i.polygonOffset(F,q),A=F,C=q)):$(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ne,disable:$,bindFramebuffer:function(P,F){return c[P]!==F&&(i.bindFramebuffer(P,F),c[P]=F,P===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=F),P===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=F),!0)},drawBuffers:function(P,F){let q=h,ae=!1;if(P){q=l.get(F),q===void 0&&(q=[],l.set(F,q));let K=P.textures;if(q.length!==K.length||q[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,ce=K.length;oe<ce;oe++)q[oe]=i.COLOR_ATTACHMENT0+oe;q.length=K.length,ae=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ae=!0);ae&&i.drawBuffers(q)},useProgram:function(P){return u!==P&&(i.useProgram(P),u=P,!0)},setBlending:B,setMaterial:function(P,F){P.side===2?$(i.CULL_FACE):ne(i.CULL_FACE);let q=P.side===1;F&&(q=!q),H(q),P.blending===1&&P.transparent===!1?B(0):B(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),n.setFunc(P.depthFunc),n.setTest(P.depthTest),n.setMask(P.depthWrite),t.setMask(P.colorWrite);let ae=P.stencilWrite;r.setTest(ae),ae&&(r.setMask(P.stencilWriteMask),r.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),r.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:H,setCullFace:U,setLineWidth:function(P){P!==w&&(G&&i.lineWidth(P),w=P)},setPolygonOffset:k,setScissorTest:function(P){P?ne(i.SCISSOR_TEST):$(i.SCISSOR_TEST)},activeTexture:function(P){P===void 0&&(P=i.TEXTURE0+I-1),V!==P&&(i.activeTexture(P),V=P)},bindTexture:function(P,F,q){q===void 0&&(q=V===null?i.TEXTURE0+I-1:V);let ae=z[q];ae===void 0&&(ae={type:void 0,texture:void 0},z[q]=ae),ae.type===P&&ae.texture===F||(V!==q&&(i.activeTexture(q),V=q),i.bindTexture(P,F||J[P]),ae.type=P,ae.texture=F)},unbindTexture:function(){let P=z[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},updateUBOMapping:function(P,F){let q=s.get(F);q===void 0&&(q=new WeakMap,s.set(F,q));let ae=q.get(P);ae===void 0&&(ae=i.getUniformBlockIndex(F,P.name),q.set(P,ae))},uniformBlockBinding:function(P,F){let q=s.get(F).get(P);a.get(F)!==q&&(i.uniformBlockBinding(F,q,P.__bindingPointIndex),a.set(F,q))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},scissor:function(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))},viewport:function(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},V=null,z={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,v=null,g=null,b=null,x=null,M=new fe(0,0,0),E=0,y=!1,T=null,_=null,w=null,A=null,C=null,Z.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function om(i,e,t,n){let r=(function(a){switch(a){case Ni:case Vm:return{byteLength:1,components:1};case Zs:case Wm:case En:return{byteLength:2,components:1};case Vd:case Wd:return{byteLength:2,components:4};case na:case Gd:case Ti:return{byteLength:4,components:1};case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)})(n);switch(t){case Xm:case Ym:return i*e;case Km:return i*e*2;case jd:case Xd:return i*e/r.components*r.byteLength;case Zm:case qd:return i*e*2/r.components*r.byteLength;case qm:return i*e*3/r.components*r.byteLength;case jn:case Yd:return i*e*4/r.components*r.byteLength;case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tu:case wu:return Math.max(i,16)*Math.max(e,8)/4;case Eu:case _u:return Math.max(i,8)*Math.max(e,8)/2;case Su:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ru:case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dc:case Vu:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jm:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xu:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E5(i,e,t,n,r,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(L,R){return p?new OffscreenCanvas(L,R):Qs("canvas")}function m(L,R,B){let H=1,U=$(L);if((U.width>B||U.height>B)&&(H=B/Math.max(U.width,U.height)),H<1){if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let k=Math.floor(H*U.width),P=Math.floor(H*U.height);u===void 0&&(u=f(k,P));let F=R?f(k,P):u;return F.width=k,F.height=P,F.getContext("2d").drawImage(L,0,0,k,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+k+"x"+P+")."),F}return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),L}return L}function v(L){return L.generateMipmaps}function g(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,R,B,H,U=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let k=R;if(R===i.RED&&(B===i.FLOAT&&(k=i.R32F),B===i.HALF_FLOAT&&(k=i.R16F),B===i.UNSIGNED_BYTE&&(k=i.R8)),R===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.R8UI),B===i.UNSIGNED_SHORT&&(k=i.R16UI),B===i.UNSIGNED_INT&&(k=i.R32UI),B===i.BYTE&&(k=i.R8I),B===i.SHORT&&(k=i.R16I),B===i.INT&&(k=i.R32I)),R===i.RG&&(B===i.FLOAT&&(k=i.RG32F),B===i.HALF_FLOAT&&(k=i.RG16F),B===i.UNSIGNED_BYTE&&(k=i.RG8)),R===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RG8UI),B===i.UNSIGNED_SHORT&&(k=i.RG16UI),B===i.UNSIGNED_INT&&(k=i.RG32UI),B===i.BYTE&&(k=i.RG8I),B===i.SHORT&&(k=i.RG16I),B===i.INT&&(k=i.RG32I)),R===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGB8UI),B===i.UNSIGNED_SHORT&&(k=i.RGB16UI),B===i.UNSIGNED_INT&&(k=i.RGB32UI),B===i.BYTE&&(k=i.RGB8I),B===i.SHORT&&(k=i.RGB16I),B===i.INT&&(k=i.RGB32I)),R===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),B===i.UNSIGNED_INT&&(k=i.RGBA32UI),B===i.BYTE&&(k=i.RGBA8I),B===i.SHORT&&(k=i.RGBA16I),B===i.INT&&(k=i.RGBA32I)),R===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),R===i.RGBA){let P=U?bl:nt.getTransfer(H);B===i.FLOAT&&(k=i.RGBA32F),B===i.HALF_FLOAT&&(k=i.RGBA16F),B===i.UNSIGNED_BYTE&&(k=P===vt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return k!==i.R16F&&k!==i.R32F&&k!==i.RG16F&&k!==i.RG32F&&k!==i.RGBA16F&&k!==i.RGBA32F||e.get("EXT_color_buffer_float"),k}function M(L,R){let B;return L?R===null||R===na||R===Ar?B=i.DEPTH24_STENCIL8:R===Ti?B=i.DEPTH32F_STENCIL8:R===Zs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===na||R===Ar?B=i.DEPTH_COMPONENT24:R===Ti?B=i.DEPTH_COMPONENT32F:R===Zs&&(B=i.DEPTH_COMPONENT16),B}function E(L,R){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Qt&&L.minFilter!==ln?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function y(L){let R=L.target;R.removeEventListener("dispose",y),(function(B){let H=n.get(B);if(H.__webglInit===void 0)return;let U=B.source,k=d.get(U);if(k){let P=k[H.__cacheKey];P.usedTimes--,P.usedTimes===0&&_(B),Object.keys(k).length===0&&d.delete(U)}n.remove(B)})(R),R.isVideoTexture&&h.delete(R)}function T(L){let R=L.target;R.removeEventListener("dispose",T),(function(B){let H=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(H.__webglFramebuffer[k]))for(let P=0;P<H.__webglFramebuffer[k].length;P++)i.deleteFramebuffer(H.__webglFramebuffer[k][P]);else i.deleteFramebuffer(H.__webglFramebuffer[k]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[k])}else{if(Array.isArray(H.__webglFramebuffer))for(let k=0;k<H.__webglFramebuffer.length;k++)i.deleteFramebuffer(H.__webglFramebuffer[k]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let k=0;k<H.__webglColorRenderbuffer.length;k++)H.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[k]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}let U=B.textures;for(let k=0,P=U.length;k<P;k++){let F=n.get(U[k]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),s.memory.textures--),n.remove(U[k])}n.remove(B)})(R)}function _(L){let R=n.get(L);i.deleteTexture(R.__webglTexture);let B=L.source;delete d.get(B)[R.__cacheKey],s.memory.textures--}let w=0;function A(L,R){let B=n.get(L);if(L.isVideoTexture&&(function(H){let U=s.render.frame;h.get(H)!==U&&(h.set(H,U),H.update())})(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){let H=L.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(H.complete!==!1)return void V(B,L,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+R)}let C={[Ln]:i.REPEAT,[ta]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},I={[Qt]:i.NEAREST,[zd]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Ws]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},G={[Pv]:i.NEVER,[Hv]:i.ALWAYS,[Lv]:i.LESS,[Dv]:i.LEQUAL,[Iv]:i.EQUAL,[Ov]:i.GEQUAL,[Uv]:i.GREATER,[Nv]:i.NOTEQUAL};function D(L,R){if(R.type!==Ti||e.has("OES_texture_float_linear")!==!1||R.magFilter!==ln&&R.magFilter!==Ws&&R.magFilter!==Ja&&R.magFilter!==qi&&R.minFilter!==ln&&R.minFilter!==Ws&&R.minFilter!==Ja&&R.minFilter!==qi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,C[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,C[R.wrapT]),L!==i.TEXTURE_3D&&L!==i.TEXTURE_2D_ARRAY||i.texParameteri(L,i.TEXTURE_WRAP_R,C[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,I[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,I[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,G[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Qt||R.minFilter!==Ja&&R.minFilter!==qi||R.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function W(L,R){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",y));let H=R.source,U=d.get(H);U===void 0&&(U={},d.set(H,U));let k=(function(P){let F=[];return F.push(P.wrapS),F.push(P.wrapT),F.push(P.wrapR||0),F.push(P.magFilter),F.push(P.minFilter),F.push(P.anisotropy),F.push(P.internalFormat),F.push(P.format),F.push(P.type),F.push(P.generateMipmaps),F.push(P.premultiplyAlpha),F.push(P.flipY),F.push(P.unpackAlignment),F.push(P.colorSpace),F.join()})(R);if(k!==L.__cacheKey){U[k]===void 0&&(U[k]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,B=!0),U[k].usedTimes++;let P=U[L.__cacheKey];P!==void 0&&(U[L.__cacheKey].usedTimes--,P.usedTimes===0&&_(R)),L.__cacheKey=k,L.__webglTexture=U[k].texture}return B}function V(L,R,B){let H=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(H=i.TEXTURE_3D);let U=W(L,R),k=R.source;t.bindTexture(H,L.__webglTexture,i.TEXTURE0+B);let P=n.get(k);if(k.version!==P.__version||U===!0){t.activeTexture(i.TEXTURE0+B);let F=nt.getPrimaries(nt.workingColorSpace),q=R.colorSpace===Za?null:nt.getPrimaries(R.colorSpace),ae=R.colorSpace===Za||F===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let K=m(R.image,!1,r.maxTextureSize);K=ne(R,K);let oe=a.convert(R.format,R.colorSpace),ce=a.convert(R.type),ue,xe=x(R.internalFormat,oe,ce,R.colorSpace,R.isVideoTexture);D(H,R);let be=R.mipmaps,we=R.isVideoTexture!==!0,Ie=P.__version===void 0||U===!0,tt=k.dataReady,We=E(R,K);if(R.isDepthTexture)xe=M(R.format===Rr,R.type),Ie&&(we?t.texStorage2D(i.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,xe,K.width,K.height,0,oe,ce,null));else if(R.isDataTexture)if(be.length>0){we&&Ie&&t.texStorage2D(i.TEXTURE_2D,We,xe,be[0].width,be[0].height);for(let Pe=0,ht=be.length;Pe<ht;Pe++)ue=be[Pe],we?tt&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,ue.width,ue.height,oe,ce,ue.data):t.texImage2D(i.TEXTURE_2D,Pe,xe,ue.width,ue.height,0,oe,ce,ue.data);R.generateMipmaps=!1}else we?(Ie&&t.texStorage2D(i.TEXTURE_2D,We,xe,K.width,K.height),tt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,oe,ce,K.data)):t.texImage2D(i.TEXTURE_2D,0,xe,K.width,K.height,0,oe,ce,K.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){we&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,xe,be[0].width,be[0].height,K.depth);for(let Pe=0,ht=be.length;Pe<ht;Pe++)if(ue=be[Pe],R.format!==jn)if(oe!==null)if(we){if(tt)if(R.layerUpdates.size>0){let mt=om(ue.width,ue.height,R.format,R.type);for(let xt of R.layerUpdates){let Se=ue.data.subarray(xt*mt/ue.data.BYTES_PER_ELEMENT,(xt+1)*mt/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,xt,ue.width,ue.height,1,oe,Se)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,ue.width,ue.height,K.depth,oe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,xe,ue.width,ue.height,K.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?tt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,ue.width,ue.height,K.depth,oe,ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,xe,ue.width,ue.height,K.depth,0,oe,ce,ue.data)}else{we&&Ie&&t.texStorage2D(i.TEXTURE_2D,We,xe,be[0].width,be[0].height);for(let Pe=0,ht=be.length;Pe<ht;Pe++)ue=be[Pe],R.format!==jn?oe!==null?we?tt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?tt&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,ue.width,ue.height,oe,ce,ue.data):t.texImage2D(i.TEXTURE_2D,Pe,xe,ue.width,ue.height,0,oe,ce,ue.data)}else if(R.isDataArrayTexture)if(we){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,xe,K.width,K.height,K.depth),tt)if(R.layerUpdates.size>0){let Pe=om(K.width,K.height,R.format,R.type);for(let ht of R.layerUpdates){let mt=K.data.subarray(ht*Pe/K.data.BYTES_PER_ELEMENT,(ht+1)*Pe/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,K.width,K.height,1,oe,ce,mt)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,oe,ce,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,oe,ce,K.data);else if(R.isData3DTexture)we?(Ie&&t.texStorage3D(i.TEXTURE_3D,We,xe,K.width,K.height,K.depth),tt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,oe,ce,K.data)):t.texImage3D(i.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,oe,ce,K.data);else if(R.isFramebufferTexture){if(Ie)if(we)t.texStorage2D(i.TEXTURE_2D,We,xe,K.width,K.height);else{let Pe=K.width,ht=K.height;for(let mt=0;mt<We;mt++)t.texImage2D(i.TEXTURE_2D,mt,xe,Pe,ht,0,oe,ce,null),Pe>>=1,ht>>=1}}else if(be.length>0){if(we&&Ie){let Pe=$(be[0]);t.texStorage2D(i.TEXTURE_2D,We,xe,Pe.width,Pe.height)}for(let Pe=0,ht=be.length;Pe<ht;Pe++)ue=be[Pe],we?tt&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,oe,ce,ue):t.texImage2D(i.TEXTURE_2D,Pe,xe,oe,ce,ue);R.generateMipmaps=!1}else if(we){if(Ie){let Pe=$(K);t.texStorage2D(i.TEXTURE_2D,We,xe,Pe.width,Pe.height)}tt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,ce,K)}else t.texImage2D(i.TEXTURE_2D,0,xe,oe,ce,K);v(R)&&g(H),P.__version=k.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function z(L,R,B,H,U,k){let P=a.convert(B.format,B.colorSpace),F=a.convert(B.type),q=x(B.internalFormat,P,F,B.colorSpace),ae=n.get(R),K=n.get(B);if(K.__renderTarget=R,!ae.__hasExternalTextures){let oe=Math.max(1,R.width>>k),ce=Math.max(1,R.height>>k);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,k,q,oe,ce,R.depth,0,P,F,null):t.texImage2D(U,k,q,oe,ce,0,P,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),J(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,U,K.__webglTexture,0,O(R)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,U,K.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(L,R,B){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){let H=R.depthTexture,U=H&&H.isDepthTexture?H.type:null,k=M(R.stencilBuffer,U),P=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=O(R);J(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,k,R.width,R.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,k,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,k,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,L)}else{let H=R.textures;for(let U=0;U<H.length;U++){let k=H[U],P=a.convert(k.format,k.colorSpace),F=a.convert(k.type),q=x(k.internalFormat,P,F,k.colorSpace),ae=O(R);B&&J(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,R.width,R.height):J(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,q,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(L){let R=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let H=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),H){let U=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,H.removeEventListener("dispose",U)};H.addEventListener("dispose",U),R.__depthDisposeCallback=U}R.__boundDepthTexture=H}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(H,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,H),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(U.depthTexture);k.__renderTarget=U,k.__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),A(U.depthTexture,0);let P=k.__webglTexture,F=O(U);if(U.depthTexture.format===Js)J(U)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0);else{if(U.depthTexture.format!==Rr)throw new Error("Unknown depthTexture format");J(U)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0)}})(R.__webglFramebuffer,L)}else if(B){R.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[H]),R.__webglDepthbuffer[H]===void 0)R.__webglDepthbuffer[H]=i.createRenderbuffer(),j(R.__webglDepthbuffer[H],L,!1);else{let U=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=R.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,k)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),j(R.__webglDepthbuffer,L,!1);else{let H=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,U)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Z=[],X=[];function O(L){return Math.min(r.maxSamples,L.samples)}function J(L){let R=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ne(L,R){let B=L.colorSpace,H=L.format,U=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==Tn&&B!==Za&&(nt.getTransfer(B)===vt?H===jn&&U===Ni||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),R}function $(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=function(){let L=w;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),w+=1,L},this.resetTextureUnits=function(){w=0},this.setTexture2D=A,this.setTexture2DArray=function(L,R){let B=n.get(L);L.version>0&&B.__version!==L.version?V(B,L,R):t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+R)},this.setTexture3D=function(L,R){let B=n.get(L);L.version>0&&B.__version!==L.version?V(B,L,R):t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+R)},this.setTextureCube=function(L,R){let B=n.get(L);L.version>0&&B.__version!==L.version?(function(H,U,k){if(U.image.length!==6)return;let P=W(H,U),F=U.source;t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+k);let q=n.get(F);if(F.version!==q.__version||P===!0){t.activeTexture(i.TEXTURE0+k);let ae=nt.getPrimaries(nt.workingColorSpace),K=U.colorSpace===Za?null:nt.getPrimaries(U.colorSpace),oe=U.colorSpace===Za||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ce=U.isCompressedTexture||U.image[0].isCompressedTexture,ue=U.image[0]&&U.image[0].isDataTexture,xe=[];for(let Se=0;Se<6;Se++)xe[Se]=ce||ue?ue?U.image[Se].image:U.image[Se]:m(U.image[Se],!0,r.maxCubemapSize),xe[Se]=ne(U,xe[Se]);let be=xe[0],we=a.convert(U.format,U.colorSpace),Ie=a.convert(U.type),tt=x(U.internalFormat,we,Ie,U.colorSpace),We=U.isVideoTexture!==!0,Pe=q.__version===void 0||P===!0,ht=F.dataReady,mt,xt=E(U,be);if(D(i.TEXTURE_CUBE_MAP,U),ce){We&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xt,tt,be.width,be.height);for(let Se=0;Se<6;Se++){mt=xe[Se].mipmaps;for(let Ve=0;Ve<mt.length;Ve++){let yt=mt[Ve];U.format!==jn?we!==null?We?ht&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,yt.width,yt.height,we,yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,tt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,yt.width,yt.height,we,Ie,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,tt,yt.width,yt.height,0,we,Ie,yt.data)}}}else{if(mt=U.mipmaps,We&&Pe){mt.length>0&&xt++;let Se=$(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xt,tt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ue){We?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,xe[Se].width,xe[Se].height,we,Ie,xe[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,tt,xe[Se].width,xe[Se].height,0,we,Ie,xe[Se].data);for(let Ve=0;Ve<mt.length;Ve++){let yt=mt[Ve].image[Se].image;We?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,yt.width,yt.height,we,Ie,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,tt,yt.width,yt.height,0,we,Ie,yt.data)}}else{We?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,we,Ie,xe[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,tt,we,Ie,xe[Se]);for(let Ve=0;Ve<mt.length;Ve++){let yt=mt[Ve];We?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,we,Ie,yt.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,tt,we,Ie,yt.image[Se])}}}v(U)&&g(i.TEXTURE_CUBE_MAP),q.__version=F.version,U.onUpdate&&U.onUpdate(U)}H.__version=U.version})(B,L,R):t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+R)},this.rebindTextures=function(L,R,B){let H=n.get(L);R!==void 0&&z(H.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Y(L)},this.setupRenderTarget=function(L){let R=L.texture,B=n.get(L),H=n.get(R);L.addEventListener("dispose",T);let U=L.textures,k=L.isWebGLCubeRenderTarget===!0,P=U.length>1;if(P||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=R.version,s.memory.textures++),k){B.__webglFramebuffer=[];for(let F=0;F<6;F++)if(R.mipmaps&&R.mipmaps.length>0){B.__webglFramebuffer[F]=[];for(let q=0;q<R.mipmaps.length;q++)B.__webglFramebuffer[F][q]=i.createFramebuffer()}else B.__webglFramebuffer[F]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){B.__webglFramebuffer=[];for(let F=0;F<R.mipmaps.length;F++)B.__webglFramebuffer[F]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(P)for(let F=0,q=U.length;F<q;F++){let ae=n.get(U[F]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),s.memory.textures++)}if(L.samples>0&&J(L)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let F=0;F<U.length;F++){let q=U[F];B.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[F]);let ae=a.convert(q.format,q.colorSpace),K=a.convert(q.type),oe=x(q.internalFormat,ae,K,q.colorSpace,L.isXRRenderTarget===!0),ce=O(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,oe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,B.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),j(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),D(i.TEXTURE_CUBE_MAP,R);for(let F=0;F<6;F++)if(R.mipmaps&&R.mipmaps.length>0)for(let q=0;q<R.mipmaps.length;q++)z(B.__webglFramebuffer[F][q],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q);else z(B.__webglFramebuffer[F],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);v(R)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){for(let F=0,q=U.length;F<q;F++){let ae=U[F],K=n.get(ae);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),D(i.TEXTURE_2D,ae),z(B.__webglFramebuffer,L,ae,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,0),v(ae)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(F=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,H.__webglTexture),D(F,R),R.mipmaps&&R.mipmaps.length>0)for(let q=0;q<R.mipmaps.length;q++)z(B.__webglFramebuffer[q],L,R,i.COLOR_ATTACHMENT0,F,q);else z(B.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,F,0);v(R)&&g(F),t.unbindTexture()}L.depthBuffer&&Y(L)},this.updateRenderTargetMipmap=function(L){let R=L.textures;for(let B=0,H=R.length;B<H;B++){let U=R[B];if(v(U)){let k=b(L),P=n.get(U).__webglTexture;t.bindTexture(k,P),g(k),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(L){if(L.samples>0){if(J(L)===!1){let R=L.textures,B=L.width,H=L.height,U=i.COLOR_BUFFER_BIT,k=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=n.get(L),F=R.length>1;if(F)for(let q=0;q<R.length;q++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let q=0;q<R.length;q++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,P.__webglColorRenderbuffer[q]);let ae=n.get(R[q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,U,i.NEAREST),c===!0&&(Z.length=0,X.length=0,Z.push(i.COLOR_ATTACHMENT0+q),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Z.push(k),X.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let q=0;q<R.length;q++){t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,P.__webglColorRenderbuffer[q]);let ae=n.get(R[q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}},this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=z,this.useMultisampledRTT=J}function T5(i,e){return{convert:function(t,n=""){let r,a=nt.getTransfer(n);if(t===Ni)return i.UNSIGNED_BYTE;if(t===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Wd)return i.UNSIGNED_SHORT_5_5_5_1;if(t===jm)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Vm)return i.BYTE;if(t===Wm)return i.SHORT;if(t===Zs)return i.UNSIGNED_SHORT;if(t===Gd)return i.INT;if(t===na)return i.UNSIGNED_INT;if(t===Ti)return i.FLOAT;if(t===En)return i.HALF_FLOAT;if(t===Xm)return i.ALPHA;if(t===qm)return i.RGB;if(t===jn)return i.RGBA;if(t===Ym)return i.LUMINANCE;if(t===Km)return i.LUMINANCE_ALPHA;if(t===Js)return i.DEPTH_COMPONENT;if(t===Rr)return i.DEPTH_STENCIL;if(t===jd)return i.RED;if(t===Xd)return i.RED_INTEGER;if(t===Zm)return i.RG;if(t===qd)return i.RG_INTEGER;if(t===Yd)return i.RGBA_INTEGER;if(t===Cc||t===Pc||t===Lc||t===Ic)if(a===vt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Pc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Lc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Eu||t===Tu||t===_u||t===wu){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Eu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Tu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===_u)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Su||t===Au||t===Ru){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Su||t===Au)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Ru)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Cu||t===Pu||t===Lu||t===Iu||t===Du||t===Uu||t===Nu||t===Ou||t===Hu||t===ku||t===Fu||t===Bu||t===zu||t===Gu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Cu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Pu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Lu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Iu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Du)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Uu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Nu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ou)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Hu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ku)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Fu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Bu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===zu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Gu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Dc||t===Vu||t===Wu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Dc)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Jm||t===ju||t===Xu||t===qu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ar?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var ld=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}},_5={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,n),g=this._getHandJoint(l,m);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_5)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Yt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ud=class extends Cr{constructor(e,t){super();let n=this,r=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,m=new hd,v=t.getContextAttributes(),g=null,b=null,x=[],M=[],E=new ie,y=null,T=new nn;T.viewport=new at;let _=new nn;_.viewport=new at;let w=[T,_],A=new ld,C=null,I=null;function G(X){let O=M.indexOf(X.inputSource);if(O===-1)return;let J=x[O];J!==void 0&&(J.update(X.inputSource,X.frame,l||s),J.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",W);for(let X=0;X<x.length;X++){let O=M[X];O!==null&&(M[X]=null,x[X].disconnect(O))}C=null,I=null,m.reset(),e.setRenderTarget(g),p=null,d=null,u=null,r=null,b=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}function W(X){for(let O=0;O<X.removed.length;O++){let J=X.removed[O],ne=M.indexOf(J);ne>=0&&(M[ne]=null,x[ne].disconnect(J))}for(let O=0;O<X.added.length;O++){let J=X.added[O],ne=M.indexOf(J);if(ne===-1){for(let L=0;L<x.length;L++){if(L>=M.length){M.push(J),ne=L;break}if(M[L]===null){M[L]=J,ne=L;break}}if(ne===-1)break}let $=x[ne];$&&$.connect(J)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let O=x[X];return O===void 0&&(O=new Xs,x[X]=O),O.getTargetRaySpace()},this.getControllerGrip=function(X){let O=x[X];return O===void 0&&(O=new Xs,x[X]=O),O.getGripSpace()},this.getHand=function(X){let O=x[X];return O===void 0&&(O=new Xs,x[X]=O),O.getHandSpace()},this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",D),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){let O={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new $t(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let O=null,J=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=v.stencil?Rr:Js,J=v.stencil?Ar:na);let $={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer($),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new $t(d.textureWidth,d.textureHeight,{format:jn,type:Ni,depthTexture:new ls(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let V=new S,z=new S;function j(X,O){O===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(O.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let O=X.near,J=X.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(J=m.depthFar)),A.near=_.near=T.near=O,A.far=_.far=T.far=J,C===A.near&&I===A.far||(r.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,I=A.far),T.layers.mask=2|X.layers.mask,_.layers.mask=4|X.layers.mask,A.layers.mask=T.layers.mask|_.layers.mask;let ne=X.parent,$=A.cameras;j(A,ne);for(let L=0;L<$.length;L++)j($[L],ne);$.length===2?(function(L,R,B){V.setFromMatrixPosition(R.matrixWorld),z.setFromMatrixPosition(B.matrixWorld);let H=V.distanceTo(z),U=R.projectionMatrix.elements,k=B.projectionMatrix.elements,P=U[14]/(U[10]-1),F=U[14]/(U[10]+1),q=(U[9]+1)/U[5],ae=(U[9]-1)/U[5],K=(U[8]-1)/U[0],oe=(k[8]+1)/k[0],ce=P*K,ue=P*oe,xe=H/(-K+oe),be=xe*-K;if(R.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(be),L.translateZ(xe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),U[10]===-1)L.projectionMatrix.copy(R.projectionMatrix),L.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let we=P+xe,Ie=F+xe,tt=ce-be,We=ue+(H-be),Pe=q*F/Ie*we,ht=ae*F/Ie*we;L.projectionMatrix.makePerspective(tt,We,Pe,ht,we,Ie),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}})(A,T,_):A.projectionMatrix.copy(T.projectionMatrix),(function(L,R,B){B===null?L.matrix.copy(R.matrixWorld):(L.matrix.copy(B.matrixWorld),L.matrix.invert(),L.matrix.multiply(R.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(R.projectionMatrix),L.projectionMatrixInverse.copy(R.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=2*os*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)})(X,A,ne)},this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)};let Y=null,Z=new n1;Z.setAnimationLoop((function(X,O){if(h=O.getViewerPose(l||s),f=O,h!==null){let J=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ne=!1;J.length!==A.cameras.length&&(A.cameras.length=0,ne=!0);for(let L=0;L<J.length;L++){let R=J[L],B=null;if(p!==null)B=p.getViewport(R);else{let U=u.getViewSubImage(d,R);B=U.viewport,L===0&&(e.setRenderTargetTextures(b,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(b))}let H=w[L];H===void 0&&(H=new nn,H.layers.enable(L),H.viewport=new at,w[L]=H),H.matrix.fromArray(R.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(R.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(B.x,B.y,B.width,B.height),L===0&&(A.matrix.copy(H.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ne===!0&&A.cameras.push(H)}let $=r.enabledFeatures;if($&&$.includes("depth-sensing")){let L=u.getDepthInformation(J[0]);L&&L.isValid&&L.texture&&m.init(e,L,r.renderState)}}for(let J=0;J<x.length;J++){let ne=M[J],$=x[J];ne!==null&&$!==void 0&&$.update(ne,O,l||s)}Y&&Y(X,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),f=null})),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}},$r=new ii,w5=new Me;function S5(i,e){function t(r,a){r.matrixAutoUpdate===!0&&r.updateMatrix(),a.value.copy(r.matrix)}function n(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,t(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,t(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,t(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,a.side===1&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,t(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),a.side===1&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,t(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,t(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=e.get(a),o=s.envMap,c=s.envMapRotation;o&&(r.envMap.value=o,$r.copy(c),$r.x*=-1,$r.y*=-1,$r.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),r.envMapRotation.value.setFromMatrix4(w5.makeRotationFromEuler($r)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap&&(r.lightMap.value=a.lightMap,r.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,r.lightMapTransform)),a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,a){a.color.getRGB(r.fogColor.value,t1(i)),a.isFog?(r.fogNear.value=a.near,r.fogFar.value=a.far):a.isFogExp2&&(r.fogDensity.value=a.density)},refreshMaterialUniforms:function(r,a,s,o,c){a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(r,a):a.isMeshToonMaterial?(n(r,a),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,a)):a.isMeshPhongMaterial?(n(r,a),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,a)):a.isMeshStandardMaterial?(n(r,a),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,a),a.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,a,c)):a.isMeshMatcapMaterial?(n(r,a),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,a)):a.isMeshDepthMaterial?n(r,a):a.isMeshDistanceMaterial?(n(r,a),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,a)):a.isMeshNormalMaterial?n(r,a):a.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,a),a.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,a)):a.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,a,s,o):a.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,a):a.isShadowMaterial?(r.color.value.copy(a.color),r.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function A5(i,e,t,n){let r={},a={},s=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let m=u.value,v=d+"_"+p;if(f[v]===void 0)return f[v]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let g=f[v];if(typeof m=="number"||typeof m=="boolean"){if(g!==m)return f[v]=m,!0}else if(g.equals(m)===!1)return g.copy(m),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete a[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(v){let g=v.uniforms,b=0,x=16;for(let E=0,y=g.length;E<y;E++){let T=Array.isArray(g[E])?g[E]:[g[E]];for(let _=0,w=T.length;_<w;_++){let A=T[_],C=Array.isArray(A.value)?A.value:[A.value];for(let I=0,G=C.length;I<G;I++){let D=l(C[I]),W=b%x,V=W%D.boundary,z=W+V;b+=V,z!==0&&x-z<D.storage&&(b+=x-z),A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,b+=D.storage}}}let M=b%x;M>0&&(b+=x-M),v.__size=b,v.__cache={}})(u),p=(function(v){let g=(function(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();v.__bindingPointIndex=g;let b=i.createBuffer(),x=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,x,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,b),b})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let m=e.render.frame;a[u.id]!==m&&((function(v){let g=r[v.id],b=v.uniforms,x=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let M=0,E=b.length;M<E;M++){let y=Array.isArray(b[M])?b[M]:[b[M]];for(let T=0,_=y.length;T<_;T++){let w=y[T];if(c(w,M,T,x)===!0){let A=w.__offset,C=Array.isArray(w.value)?w.value:[w.value],I=0;for(let G=0;G<C.length;G++){let D=C[G],W=l(D);typeof D=="number"||typeof D=="boolean"?(w.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,A+I,w.__data)):D.isMatrix3?(w.__data[0]=D.elements[0],w.__data[1]=D.elements[1],w.__data[2]=D.elements[2],w.__data[3]=0,w.__data[4]=D.elements[3],w.__data[5]=D.elements[4],w.__data[6]=D.elements[5],w.__data[7]=0,w.__data[8]=D.elements[6],w.__data[9]=D.elements[7],w.__data[10]=D.elements[8],w.__data[11]=0):(D.toArray(w.__data,I),I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),a[u.id]=m)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);s=[],r={},a={}}}}var zc=class{constructor(e={}){let{canvas:t=kv(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let f=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=0,this.toneMappingExposure=1;let M=this,E=!1,y=0,T=0,_=null,w=-1,A=null,C=new at,I=new at,G=null,D=new fe(0),W=0,V=t.width,z=t.height,j=1,Y=null,Z=null,X=new at(0,0,V,z),O=new at(0,0,V,z),J=!1,ne=new Pr,$=!1,L=!1,R=new Me,B=new Me,H=new S,U=new at,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},P=!1;function F(){return _===null?j:1}let q,ae,K,oe,ce,ue,xe,be,we,Ie,tt,We,Pe,ht,mt,xt,Se,Ve,yt,pr,Ua,zn,Jn,Gn,Q=n;function mi(N,ee){return t.getContext(N,ee)}try{let N={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Kp,!1),t.addEventListener("webglcontextrestored",Zp,!1),t.addEventListener("webglcontextcreationerror",Jp,!1),Q===null){let ee="webgl2";if(Q=mi(ee,N),Q===null)throw mi(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}function fr(){q=new cb(Q),q.init(),zn=new T5(Q,q),ae=new rb(Q,q,e,zn),K=new M5(Q,q),ae.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),oe=new ub(Q),ce=new u5,ue=new E5(Q,q,K,ce,ae,zn,oe),xe=new sb(M),be=new ob(M),we=new $v(Q),Jn=new nb(Q,we),Ie=new lb(Q,we,oe,Jn),tt=new pb(Q,Ie,we,oe),yt=new db(Q,ae,ue),xt=new ab(ce),We=new h5(M,xe,be,q,ae,Jn,xt),Pe=new S5(M,ce),ht=new p5,mt=new b5(q),Ve=new tb(M,xe,be,K,tt,p,c),Se=new x5(M,tt,ae),Gn=new A5(Q,oe,ae,K),pr=new ib(Q,q,oe),Ua=new hb(Q,q,oe),oe.programs=We.programs,M.capabilities=ae,M.extensions=q,M.properties=ce,M.renderLists=ht,M.shadowMap=Se,M.state=K,M.info=oe}fr();let It=new ud(M,Q);function Kp(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Zp(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let N=oe.autoReset,ee=Se.enabled,se=Se.autoUpdate,de=Se.needsUpdate,re=Se.type;fr(),oe.autoReset=N,Se.enabled=ee,Se.autoUpdate=se,Se.needsUpdate=de,Se.type=re}function Jp(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Qp(N){let ee=N.target;ee.removeEventListener("dispose",Qp),(function(se){(function(de){let re=ce.get(de).programs;re!==void 0&&(re.forEach((function(me){We.releaseProgram(me)})),de.isShaderMaterial&&We.releaseShaderCache(de))})(se),ce.remove(se)})(ee)}function $p(N,ee,se){N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,Yo(N,ee,se),N.side=0,N.needsUpdate=!0,Yo(N,ee,se),N.side=2):Yo(N,ee,se)}this.xr=It,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let N=q.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=q.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(V,z,!1))},this.getSize=function(N){return N.set(V,z)},this.setSize=function(N,ee,se=!0){It.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(V=N,z=ee,t.width=Math.floor(N*j),t.height=Math.floor(ee*j),se===!0&&(t.style.width=N+"px",t.style.height=ee+"px"),this.setViewport(0,0,N,ee))},this.getDrawingBufferSize=function(N){return N.set(V*j,z*j).floor()},this.setDrawingBufferSize=function(N,ee,se){V=N,z=ee,j=se,t.width=Math.floor(N*se),t.height=Math.floor(ee*se),this.setViewport(0,0,N,ee)},this.getCurrentViewport=function(N){return N.copy(C)},this.getViewport=function(N){return N.copy(X)},this.setViewport=function(N,ee,se,de){N.isVector4?X.set(N.x,N.y,N.z,N.w):X.set(N,ee,se,de),K.viewport(C.copy(X).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(O)},this.setScissor=function(N,ee,se,de){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,ee,se,de),K.scissor(I.copy(O).multiplyScalar(j).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(N){K.setScissorTest(J=N)},this.setOpaqueSort=function(N){Y=N},this.setTransparentSort=function(N){Z=N},this.getClearColor=function(N){return N.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(N=!0,ee=!0,se=!0){let de=0;if(N){let re=!1;if(_!==null){let me=_.texture.format;re=me===Yd||me===qd||me===Xd}if(re){let me=_.texture.type,Ae=me===Ni||me===na||me===Zs||me===Ar||me===Vd||me===Wd,De=Ve.getClearColor(),ke=Ve.getClearAlpha(),je=De.r,Ze=De.g,Fe=De.b;Ae?(f[0]=je,f[1]=Ze,f[2]=Fe,f[3]=ke,Q.clearBufferuiv(Q.COLOR,0,f)):(m[0]=je,m[1]=Ze,m[2]=Fe,m[3]=ke,Q.clearBufferiv(Q.COLOR,0,m))}else de|=Q.COLOR_BUFFER_BIT}ee&&(de|=Q.DEPTH_BUFFER_BIT),se&&(de|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Kp,!1),t.removeEventListener("webglcontextrestored",Zp,!1),t.removeEventListener("webglcontextcreationerror",Jp,!1),ht.dispose(),mt.dispose(),ce.dispose(),xe.dispose(),be.dispose(),tt.dispose(),Jn.dispose(),Gn.dispose(),We.dispose(),It.dispose(),It.removeEventListener("sessionstart",ef),It.removeEventListener("sessionend",tf),jr.stop()},this.renderBufferDirect=function(N,ee,se,de,re,me){ee===null&&(ee=k);let Ae=re.isMesh&&re.matrixWorld.determinant()<0,De=(function(ut,Rn,mn,$e,ze){Rn.isScene!==!0&&(Rn=k),ue.resetTextureUnits();let gi=Rn.fog,Ch=$e.isMeshStandardMaterial?Rn.environment:null,Ls=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Tn,Na=($e.isMeshStandardMaterial?be:xe).get($e.envMap||Ch),Ph=$e.vertexColors===!0&&!!mn.attributes.color&&mn.attributes.color.itemSize===4,Lh=!!mn.attributes.tangent&&(!!$e.normalMap||$e.anisotropy>0),Ih=!!mn.morphAttributes.position,mr=!!mn.morphAttributes.normal,ov=!!mn.morphAttributes.color,cf=0;$e.toneMapped&&(_!==null&&_.isXRRenderTarget!==!0||(cf=M.toneMapping));let lf=mn.morphAttributes.position||mn.morphAttributes.normal||mn.morphAttributes.color,cv=lf!==void 0?lf.length:0,ct=ce.get($e),lv=g.state.lights;if($===!0&&(L===!0||ut!==A)){let Qn=ut===A&&$e.id===w;xt.setState($e,ut,Qn)}let vi=!1;$e.version===ct.__version?ct.needsLights&&ct.lightsStateVersion!==lv.state.version||ct.outputColorSpace!==Ls||ze.isBatchedMesh&&ct.batching===!1?vi=!0:ze.isBatchedMesh||ct.batching!==!0?ze.isBatchedMesh&&ct.batchingColor===!0&&ze.colorTexture===null||ze.isBatchedMesh&&ct.batchingColor===!1&&ze.colorTexture!==null||ze.isInstancedMesh&&ct.instancing===!1?vi=!0:ze.isInstancedMesh||ct.instancing!==!0?ze.isSkinnedMesh&&ct.skinning===!1?vi=!0:ze.isSkinnedMesh||ct.skinning!==!0?ze.isInstancedMesh&&ct.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&ct.instancingColor===!1&&ze.instanceColor!==null||ze.isInstancedMesh&&ct.instancingMorph===!0&&ze.morphTexture===null||ze.isInstancedMesh&&ct.instancingMorph===!1&&ze.morphTexture!==null||ct.envMap!==Na||$e.fog===!0&&ct.fog!==gi?vi=!0:ct.numClippingPlanes===void 0||ct.numClippingPlanes===xt.numPlanes&&ct.numIntersection===xt.numIntersection?(ct.vertexAlphas!==Ph||ct.vertexTangents!==Lh||ct.morphTargets!==Ih||ct.morphNormals!==mr||ct.morphColors!==ov||ct.toneMapping!==cf||ct.morphTargetsCount!==cv)&&(vi=!0):vi=!0:vi=!0:vi=!0:vi=!0:(vi=!0,ct.__version=$e.version);let Xr=ct.currentProgram;vi===!0&&(Xr=Yo($e,Rn,ze));let hf=!1,Is=!1,Dh=!1,Xt=Xr.getUniforms(),gr=ct.uniforms;if(K.useProgram(Xr.program)&&(hf=!0,Is=!0,Dh=!0),$e.id!==w&&(w=$e.id,Is=!0),hf||A!==ut){K.buffers.depth.getReversed()?(R.copy(ut.projectionMatrix),(function(qr){let Dt=qr.elements;Dt[2]=.5*Dt[2]+.5*Dt[3],Dt[6]=.5*Dt[6]+.5*Dt[7],Dt[10]=.5*Dt[10]+.5*Dt[11],Dt[14]=.5*Dt[14]+.5*Dt[15]})(R),(function(qr){let Dt=qr.elements;Dt[11]===-1?(Dt[10]=-Dt[10]-1,Dt[14]=-Dt[14]):(Dt[10]=-Dt[10],Dt[14]=1-Dt[14])})(R),Xt.setValue(Q,"projectionMatrix",R)):Xt.setValue(Q,"projectionMatrix",ut.projectionMatrix),Xt.setValue(Q,"viewMatrix",ut.matrixWorldInverse);let Qn=Xt.map.cameraPosition;Qn!==void 0&&Qn.setValue(Q,H.setFromMatrixPosition(ut.matrixWorld)),ae.logarithmicDepthBuffer&&Xt.setValue(Q,"logDepthBufFC",2/(Math.log(ut.far+1)/Math.LN2)),($e.isMeshPhongMaterial||$e.isMeshToonMaterial||$e.isMeshLambertMaterial||$e.isMeshBasicMaterial||$e.isMeshStandardMaterial||$e.isShaderMaterial)&&Xt.setValue(Q,"isOrthographic",ut.isOrthographicCamera===!0),A!==ut&&(A=ut,Is=!0,Dh=!0)}if(ze.isSkinnedMesh){Xt.setOptional(Q,ze,"bindMatrix"),Xt.setOptional(Q,ze,"bindMatrixInverse");let Qn=ze.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Xt.setValue(Q,"boneTexture",Qn.boneTexture,ue))}ze.isBatchedMesh&&(Xt.setOptional(Q,ze,"batchingTexture"),Xt.setValue(Q,"batchingTexture",ze._matricesTexture,ue),Xt.setOptional(Q,ze,"batchingIdTexture"),Xt.setValue(Q,"batchingIdTexture",ze._indirectTexture,ue),Xt.setOptional(Q,ze,"batchingColorTexture"),ze._colorsTexture!==null&&Xt.setValue(Q,"batchingColorTexture",ze._colorsTexture,ue));let Uh=mn.morphAttributes;Uh.position===void 0&&Uh.normal===void 0&&Uh.color===void 0||yt.update(ze,mn,Xr),(Is||ct.receiveShadow!==ze.receiveShadow)&&(ct.receiveShadow=ze.receiveShadow,Xt.setValue(Q,"receiveShadow",ze.receiveShadow)),$e.isMeshGouraudMaterial&&$e.envMap!==null&&(gr.envMap.value=Na,gr.flipEnvMap.value=Na.isCubeTexture&&Na.isRenderTargetTexture===!1?-1:1),$e.isMeshStandardMaterial&&$e.envMap===null&&Rn.environment!==null&&(gr.envMapIntensity.value=Rn.environmentIntensity),Is&&(Xt.setValue(Q,"toneMappingExposure",M.toneMappingExposure),ct.needsLights&&(bi=Dh,(Ii=gr).ambientLightColor.needsUpdate=bi,Ii.lightProbe.needsUpdate=bi,Ii.directionalLights.needsUpdate=bi,Ii.directionalLightShadows.needsUpdate=bi,Ii.pointLights.needsUpdate=bi,Ii.pointLightShadows.needsUpdate=bi,Ii.spotLights.needsUpdate=bi,Ii.spotLightShadows.needsUpdate=bi,Ii.rectAreaLights.needsUpdate=bi,Ii.hemisphereLights.needsUpdate=bi),gi&&$e.fog===!0&&Pe.refreshFogUniforms(gr,gi),Pe.refreshMaterialUniforms(gr,$e,j,z,g.state.transmissionRenderTarget[ut.id]),ts.upload(Q,sf(ct),gr,ue));var Ii,bi;if($e.isShaderMaterial&&$e.uniformsNeedUpdate===!0&&(ts.upload(Q,sf(ct),gr,ue),$e.uniformsNeedUpdate=!1),$e.isSpriteMaterial&&Xt.setValue(Q,"center",ze.center),Xt.setValue(Q,"modelViewMatrix",ze.modelViewMatrix),Xt.setValue(Q,"normalMatrix",ze.normalMatrix),Xt.setValue(Q,"modelMatrix",ze.matrixWorld),$e.isShaderMaterial||$e.isRawShaderMaterial){let Qn=$e.uniformsGroups;for(let qr=0,Dt=Qn.length;qr<Dt;qr++){let uf=Qn[qr];Gn.update(uf,Xr),Gn.bind(uf,Xr)}}return Xr})(N,ee,se,de,re);K.setMaterial(de,Ae);let ke=se.index,je=1;if(de.wireframe===!0){if(ke=Ie.getWireframeAttribute(se),ke===void 0)return;je=2}let Ze=se.drawRange,Fe=se.attributes.position,rt=Ze.start*je,kt=(Ze.start+Ze.count)*je;me!==null&&(rt=Math.max(rt,me.start*je),kt=Math.min(kt,(me.start+me.count)*je)),ke!==null?(rt=Math.max(rt,0),kt=Math.min(kt,ke.count)):Fe!=null&&(rt=Math.max(rt,0),kt=Math.min(kt,Fe.count));let Rt=kt-rt;if(Rt<0||Rt===1/0)return;let tn;Jn.setup(re,de,De,se,ke);let Pt=pr;if(ke!==null&&(tn=we.get(ke),Pt=Ua,Pt.setIndex(tn)),re.isMesh)de.wireframe===!0?(K.setLineWidth(de.wireframeLinewidth*F()),Pt.setMode(Q.LINES)):Pt.setMode(Q.TRIANGLES);else if(re.isLine){let ut=de.linewidth;ut===void 0&&(ut=1),K.setLineWidth(ut*F()),re.isLineSegments?Pt.setMode(Q.LINES):re.isLineLoop?Pt.setMode(Q.LINE_LOOP):Pt.setMode(Q.LINE_STRIP)}else re.isPoints?Pt.setMode(Q.POINTS):re.isSprite&&Pt.setMode(Q.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)Pt.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))Pt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let ut=re._multiDrawStarts,Rn=re._multiDrawCounts,mn=re._multiDrawCount,$e=ke?we.get(ke).bytesPerElement:1,ze=ce.get(de).currentProgram.getUniforms();for(let gi=0;gi<mn;gi++)ze.setValue(Q,"_gl_DrawID",gi),Pt.render(ut[gi]/$e,Rn[gi])}else if(re.isInstancedMesh)Pt.renderInstances(rt,Rt,re.count);else if(se.isInstancedBufferGeometry){let ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Rn=Math.min(se.instanceCount,ut);Pt.renderInstances(rt,Rt,Rn)}else Pt.render(rt,Rt)},this.compile=function(N,ee,se=null){se===null&&(se=N),g=mt.get(se),g.init(ee),x.push(g),se.traverseVisible((function(re){re.isLight&&re.layers.test(ee.layers)&&(g.pushLight(re),re.castShadow&&g.pushShadow(re))})),N!==se&&N.traverseVisible((function(re){re.isLight&&re.layers.test(ee.layers)&&(g.pushLight(re),re.castShadow&&g.pushShadow(re))})),g.setupLights();let de=new Set;return N.traverse((function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let me=re.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){let De=me[Ae];$p(De,se,re),de.add(De)}else $p(me,se,re),de.add(me)})),x.pop(),g=null,de},this.compileAsync=function(N,ee,se=null){let de=this.compile(N,ee,se);return new Promise((re=>{function me(){de.forEach((function(Ae){ce.get(Ae).currentProgram.isReady()&&de.delete(Ae)})),de.size!==0?setTimeout(me,10):re(N)}q.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)}))};let Ah=null;function ef(){jr.stop()}function tf(){jr.start()}let jr=new n1;function Rh(N,ee,se,de){if(N.visible===!1)return;if(N.layers.test(ee.layers)){if(N.isGroup)se=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ee);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ne.intersectsSprite(N)){de&&U.setFromMatrixPosition(N.matrixWorld).applyMatrix4(B);let me=tt.update(N),Ae=N.material;Ae.visible&&v.push(N,me,Ae,se,U.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ne.intersectsObject(N))){let me=tt.update(N),Ae=N.material;if(de&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),U.copy(N.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),U.copy(me.boundingSphere.center)),U.applyMatrix4(N.matrixWorld).applyMatrix4(B)),Array.isArray(Ae)){let De=me.groups;for(let ke=0,je=De.length;ke<je;ke++){let Ze=De[ke],Fe=Ae[Ze.materialIndex];Fe&&Fe.visible&&v.push(N,me,Fe,se,U.z,Ze)}}else Ae.visible&&v.push(N,me,Ae,se,U.z,null)}}let re=N.children;for(let me=0,Ae=re.length;me<Ae;me++)Rh(re[me],ee,se,de)}function nf(N,ee,se,de){let re=N.opaque,me=N.transmissive,Ae=N.transparent;g.setupLightsView(se),$===!0&&xt.setGlobalState(M.clippingPlanes,se),de&&K.viewport(C.copy(de)),re.length>0&&qo(re,ee,se),me.length>0&&qo(me,ee,se),Ae.length>0&&qo(Ae,ee,se),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function rf(N,ee,se,de){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[de.id]===void 0&&(g.state.transmissionRenderTarget[de.id]=new $t(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?En:Ni,minFilter:qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let re=g.state.transmissionRenderTarget[de.id],me=de.viewport||C;re.setSize(me.z,me.w);let Ae=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(D),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),P&&Ve.render(se);let De=M.toneMapping;M.toneMapping=0;let ke=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),g.setupLightsView(de),$===!0&&xt.setGlobalState(M.clippingPlanes,de),qo(N,se,de),ue.updateMultisampleRenderTarget(re),ue.updateRenderTargetMipmap(re),q.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ze=0,Fe=ee.length;Ze<Fe;Ze++){let rt=ee[Ze],kt=rt.object,Rt=rt.geometry,tn=rt.material,Pt=rt.group;if(tn.side===2&&kt.layers.test(de.layers)){let ut=tn.side;tn.side=1,tn.needsUpdate=!0,af(kt,se,de,Rt,tn,Pt),tn.side=ut,tn.needsUpdate=!0,je=!0}}je===!0&&(ue.updateMultisampleRenderTarget(re),ue.updateRenderTargetMipmap(re))}M.setRenderTarget(Ae),M.setClearColor(D,W),ke!==void 0&&(de.viewport=ke),M.toneMapping=De}function qo(N,ee,se){let de=ee.isScene===!0?ee.overrideMaterial:null;for(let re=0,me=N.length;re<me;re++){let Ae=N[re],De=Ae.object,ke=Ae.geometry,je=de===null?Ae.material:de,Ze=Ae.group;De.layers.test(se.layers)&&af(De,ee,se,ke,je,Ze)}}function af(N,ee,se,de,re,me){N.onBeforeRender(M,ee,se,de,re,me),N.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(M,ee,se,de,N,me),re.transparent===!0&&re.side===2&&re.forceSinglePass===!1?(re.side=1,re.needsUpdate=!0,M.renderBufferDirect(se,ee,de,re,N,me),re.side=0,re.needsUpdate=!0,M.renderBufferDirect(se,ee,de,re,N,me),re.side=2):M.renderBufferDirect(se,ee,de,re,N,me),N.onAfterRender(M,ee,se,de,re,me)}function Yo(N,ee,se){ee.isScene!==!0&&(ee=k);let de=ce.get(N),re=g.state.lights,me=g.state.shadowsArray,Ae=re.state.version,De=We.getParameters(N,re.state,me,ee,se),ke=We.getProgramCacheKey(De),je=de.programs;de.environment=N.isMeshStandardMaterial?ee.environment:null,de.fog=ee.fog,de.envMap=(N.isMeshStandardMaterial?be:xe).get(N.envMap||de.environment),de.envMapRotation=de.environment!==null&&N.envMap===null?ee.environmentRotation:N.envMapRotation,je===void 0&&(N.addEventListener("dispose",Qp),je=new Map,de.programs=je);let Ze=je.get(ke);if(Ze!==void 0){if(de.currentProgram===Ze&&de.lightsStateVersion===Ae)return of(N,De),Ze}else De.uniforms=We.getUniforms(N),N.onBeforeCompile(De,M),Ze=We.acquireProgram(De,ke),je.set(ke,Ze),de.uniforms=De.uniforms;let Fe=de.uniforms;return(N.isShaderMaterial||N.isRawShaderMaterial)&&N.clipping!==!0||(Fe.clippingPlanes=xt.uniform),of(N,De),de.needsLights=(function(rt){return rt.isMeshLambertMaterial||rt.isMeshToonMaterial||rt.isMeshPhongMaterial||rt.isMeshStandardMaterial||rt.isShadowMaterial||rt.isShaderMaterial&&rt.lights===!0})(N),de.lightsStateVersion=Ae,de.needsLights&&(Fe.ambientLightColor.value=re.state.ambient,Fe.lightProbe.value=re.state.probe,Fe.directionalLights.value=re.state.directional,Fe.directionalLightShadows.value=re.state.directionalShadow,Fe.spotLights.value=re.state.spot,Fe.spotLightShadows.value=re.state.spotShadow,Fe.rectAreaLights.value=re.state.rectArea,Fe.ltc_1.value=re.state.rectAreaLTC1,Fe.ltc_2.value=re.state.rectAreaLTC2,Fe.pointLights.value=re.state.point,Fe.pointLightShadows.value=re.state.pointShadow,Fe.hemisphereLights.value=re.state.hemi,Fe.directionalShadowMap.value=re.state.directionalShadowMap,Fe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Fe.spotShadowMap.value=re.state.spotShadowMap,Fe.spotLightMatrix.value=re.state.spotLightMatrix,Fe.spotLightMap.value=re.state.spotLightMap,Fe.pointShadowMap.value=re.state.pointShadowMap,Fe.pointShadowMatrix.value=re.state.pointShadowMatrix),de.currentProgram=Ze,de.uniformsList=null,Ze}function sf(N){if(N.uniformsList===null){let ee=N.currentProgram.getUniforms();N.uniformsList=ts.seqWithValue(ee.seq,N.uniforms)}return N.uniformsList}function of(N,ee){let se=ce.get(N);se.outputColorSpace=ee.outputColorSpace,se.batching=ee.batching,se.batchingColor=ee.batchingColor,se.instancing=ee.instancing,se.instancingColor=ee.instancingColor,se.instancingMorph=ee.instancingMorph,se.skinning=ee.skinning,se.morphTargets=ee.morphTargets,se.morphNormals=ee.morphNormals,se.morphColors=ee.morphColors,se.morphTargetsCount=ee.morphTargetsCount,se.numClippingPlanes=ee.numClippingPlanes,se.numIntersection=ee.numClipIntersection,se.vertexAlphas=ee.vertexAlphas,se.vertexTangents=ee.vertexTangents,se.toneMapping=ee.toneMapping}jr.setAnimationLoop((function(N){Ah&&Ah(N)})),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(N){Ah=N,It.setAnimationLoop(N),N===null?jr.stop():jr.start()},It.addEventListener("sessionstart",ef),It.addEventListener("sessionend",tf),this.render=function(N,ee){if(ee!==void 0&&ee.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(ee),ee=It.getCamera()),N.isScene===!0&&N.onBeforeRender(M,N,ee,_),g=mt.get(N,x.length),g.init(ee),x.push(g),B.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ne.setFromProjectionMatrix(B),L=this.localClippingEnabled,$=xt.init(this.clippingPlanes,L),v=ht.get(N,b.length),v.init(),b.push(v),It.enabled===!0&&It.isPresenting===!0){let me=M.xr.getDepthSensingMesh();me!==null&&Rh(me,ee,-1/0,M.sortObjects)}Rh(N,ee,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(Y,Z),P=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,P&&Ve.addToRenderList(v,N),this.info.render.frame++,$===!0&&xt.beginShadows();let se=g.state.shadowsArray;Se.render(se,N,ee),$===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=v.opaque,re=v.transmissive;if(g.setupLights(),ee.isArrayCamera){let me=ee.cameras;if(re.length>0)for(let Ae=0,De=me.length;Ae<De;Ae++)rf(de,re,N,me[Ae]);P&&Ve.render(N);for(let Ae=0,De=me.length;Ae<De;Ae++){let ke=me[Ae];nf(v,N,ke,ke.viewport)}}else re.length>0&&rf(de,re,N,ee),P&&Ve.render(N),nf(v,N,ee);_!==null&&(ue.updateMultisampleRenderTarget(_),ue.updateRenderTargetMipmap(_)),N.isScene===!0&&N.onAfterRender(M,N,ee),Jn.resetDefaultState(),w=-1,A=null,x.pop(),x.length>0?(g=x[x.length-1],$===!0&&xt.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,b.pop(),v=b.length>0?b[b.length-1]:null},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(N,ee,se){ce.get(N.texture).__webglTexture=ee,ce.get(N.depthTexture).__webglTexture=se;let de=ce.get(N);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=se===void 0,de.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,ee){let se=ce.get(N);se.__webglFramebuffer=ee,se.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(N,ee=0,se=0){_=N,y=ee,T=se;let de=!0,re=null,me=!1,Ae=!1;if(N){let De=ce.get(N);if(De.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(Q.FRAMEBUFFER,null),de=!1;else if(De.__webglFramebuffer===void 0)ue.setupRenderTarget(N);else if(De.__hasExternalTextures)ue.rebindTextures(N,ce.get(N.texture).__webglTexture,ce.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Ze=N.depthTexture;if(De.__boundDepthTexture!==Ze){if(Ze!==null&&ce.has(Ze)&&(N.width!==Ze.image.width||N.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(N)}}let ke=N.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);let je=ce.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(re=Array.isArray(je[ee])?je[ee][se]:je[ee],me=!0):re=N.samples>0&&ue.useMultisampledRTT(N)===!1?ce.get(N).__webglMultisampledFramebuffer:Array.isArray(je)?je[se]:je,C.copy(N.viewport),I.copy(N.scissor),G=N.scissorTest}else C.copy(X).multiplyScalar(j).floor(),I.copy(O).multiplyScalar(j).floor(),G=J;if(K.bindFramebuffer(Q.FRAMEBUFFER,re)&&de&&K.drawBuffers(N,re),K.viewport(C),K.scissor(I),K.setScissorTest(G),me){let De=ce.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De.__webglTexture,se)}else if(Ae){let De=ce.get(N.texture),ke=ee||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,De.__webglTexture,se||0,ke)}w=-1},this.readRenderTargetPixels=function(N,ee,se,de,re,me,Ae){if(!N||!N.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ce.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){K.bindFramebuffer(Q.FRAMEBUFFER,De);try{let ke=N.texture,je=ke.format,Ze=ke.type;if(!ae.textureFormatReadable(je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ze))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ee>=0&&ee<=N.width-de&&se>=0&&se<=N.height-re&&Q.readPixels(ee,se,de,re,zn.convert(je),zn.convert(Ze),me)}finally{let ke=_!==null?ce.get(_).__webglFramebuffer:null;K.bindFramebuffer(Q.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(N,ee,se,de,re,me,Ae){if(!N||!N.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ce.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){let ke=N.texture,je=ke.format,Ze=ke.type;if(!ae.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=N.width-de&&se>=0&&se<=N.height-re){K.bindFramebuffer(Q.FRAMEBUFFER,De);let Fe=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Fe),Q.bufferData(Q.PIXEL_PACK_BUFFER,me.byteLength,Q.STREAM_READ),Q.readPixels(ee,se,de,re,zn.convert(je),zn.convert(Ze),0);let rt=_!==null?ce.get(_).__webglFramebuffer:null;K.bindFramebuffer(Q.FRAMEBUFFER,rt);let kt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await(function(Rt,tn,Pt){return new Promise((function(ut,Rn){setTimeout((function mn(){switch(Rt.clientWaitSync(tn,Rt.SYNC_FLUSH_COMMANDS_BIT,0)){case Rt.WAIT_FAILED:Rn();break;case Rt.TIMEOUT_EXPIRED:setTimeout(mn,Pt);break;default:ut()}}),Pt)}))})(Q,kt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Fe),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,me),Q.deleteBuffer(Fe),Q.deleteSync(kt),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,ee=null,se=0){N.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,N=arguments[1]);let de=Math.pow(2,-se),re=Math.floor(N.image.width*de),me=Math.floor(N.image.height*de),Ae=ee!==null?ee.x:0,De=ee!==null?ee.y:0;ue.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,se,0,0,Ae,De,re,me),K.unbindTexture()},this.copyTextureToTexture=function(N,ee,se=null,de=null,re=0){let me,Ae,De,ke,je,Ze,Fe,rt,kt;N.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,N=arguments[1],ee=arguments[2],re=arguments[3]||0,se=null);let Rt=N.isCompressedTexture?N.mipmaps[re]:N.image;se!==null?(me=se.max.x-se.min.x,Ae=se.max.y-se.min.y,De=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,je=se.min.y,Ze=se.isBox3?se.min.z:0):(me=Rt.width,Ae=Rt.height,De=Rt.depth||1,ke=0,je=0,Ze=0),de!==null?(Fe=de.x,rt=de.y,kt=de.z):(Fe=0,rt=0,kt=0);let tn=zn.convert(ee.format),Pt=zn.convert(ee.type),ut;ee.isData3DTexture?(ue.setTexture3D(ee,0),ut=Q.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ue.setTexture2DArray(ee,0),ut=Q.TEXTURE_2D_ARRAY):(ue.setTexture2D(ee,0),ut=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ee.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ee.unpackAlignment);let Rn=Q.getParameter(Q.UNPACK_ROW_LENGTH),mn=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),$e=Q.getParameter(Q.UNPACK_SKIP_PIXELS),ze=Q.getParameter(Q.UNPACK_SKIP_ROWS),gi=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Rt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Rt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,ke),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,je),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Ze);let Ch=N.isDataArrayTexture||N.isData3DTexture,Ls=ee.isDataArrayTexture||ee.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){let Na=ce.get(N),Ph=ce.get(ee),Lh=ce.get(Na.__renderTarget),Ih=ce.get(Ph.__renderTarget);K.bindFramebuffer(Q.READ_FRAMEBUFFER,Lh.__webglFramebuffer),K.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ih.__webglFramebuffer);for(let mr=0;mr<De;mr++)Ch&&Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ce.get(N).__webglTexture,re,Ze+mr),N.isDepthTexture?(Ls&&Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ce.get(ee).__webglTexture,re,kt+mr),Q.blitFramebuffer(ke,je,me,Ae,Fe,rt,me,Ae,Q.DEPTH_BUFFER_BIT,Q.NEAREST)):Ls?Q.copyTexSubImage3D(ut,re,Fe,rt,kt+mr,ke,je,me,Ae):Q.copyTexSubImage2D(ut,re,Fe,rt,kt+mr,ke,je,me,Ae);K.bindFramebuffer(Q.READ_FRAMEBUFFER,null),K.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Ls?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D(ut,re,Fe,rt,kt,me,Ae,De,tn,Pt,Rt.data):ee.isCompressedArrayTexture?Q.compressedTexSubImage3D(ut,re,Fe,rt,kt,me,Ae,De,tn,Rt.data):Q.texSubImage3D(ut,re,Fe,rt,kt,me,Ae,De,tn,Pt,Rt):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,re,Fe,rt,me,Ae,tn,Pt,Rt.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,re,Fe,rt,Rt.width,Rt.height,tn,Rt.data):Q.texSubImage2D(Q.TEXTURE_2D,re,Fe,rt,me,Ae,tn,Pt,Rt);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Rn),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,mn),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,$e),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ze),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,gi),re===0&&ee.generateMipmaps&&Q.generateMipmap(ut),K.unbindTexture()},this.copyTextureToTexture3D=function(N,ee,se=null,de=null,re=0){return N.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,de=arguments[1]||null,N=arguments[2],ee=arguments[3],re=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,ee,se,de,re)},this.initRenderTarget=function(N){ce.get(N).__webglFramebuffer===void 0&&ue.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ue.setTextureCube(N,0):N.isData3DTexture?ue.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ue.setTexture2DArray(N,0):ue.setTexture2D(N,0),K.unbindTexture()},this.resetState=function(){y=0,T=0,_=null,K.reset(),Jn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Gc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},to=class extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},no=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new S,io=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var iy=new S,ry=new S,ay=new S,sy=new ie,oy=new ie,cy=new Me,ly=new S,hy=new S,uy=new S,dy=new ie,py=new ie,fy=new ie;var my=new S,gy=new S;var cm=new S,lm=new at,hm=new at,R5=new S,um=new Me,mc=new S,cu=new On,dm=new Me,lu=new ia,Vc=class extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=df,this.bindMatrix=new Me,this.bindMatrixInverse=new Me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cu.copy(this.boundingSphere),cu.applyMatrix4(r),e.ray.intersectsSphere(cu)!==!1&&(dm.copy(r).invert(),lu.copy(e.ray).applyMatrix4(dm),this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;lm.fromBufferAttribute(r.attributes.skinIndex,e),hm.fromBufferAttribute(r.attributes.skinWeight,e),cm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let s=hm.getComponent(a);if(s!==0){let o=lm.getComponent(a);um.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(R5.copy(cm).applyMatrix4(um),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},ro=class extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hi=class extends Yt{constructor(e=null,t=1,n=1,r,a,s,o,c,l=1003,h=1003,u,d){super(null,s,o,c,l,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pm=new Me,C5=new Me,Wc=class i{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,s=e.length;a<s;a++){let o=e[a]?e[a].matrixWorld:C5;pm.multiplyMatrices(o,t[a]),pm.toArray(n,16*a)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hi(t,e,e,jn,Ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let a=e.bones[n],s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new ro),this.bones.push(s),this.boneInverses.push(new Me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,a=t.length;r<a;r++){let s=t[r];e.bones.push(s.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Ki=class extends dt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ka=new Me,fm=new Me,gc=[],mm=new rn,P5=new Me,Fs=new te,Bs=new On,Ft=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,P5)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ka),mm.copy(e.boundingBox).applyMatrix4(Ka),this.boundingBox.union(mm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ka),Bs.copy(e.boundingSphere).applyMatrix4(Ka),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=e*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=r[a+s]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Ka),fm.multiplyMatrices(n,Ka),Fs.matrixWorld=fm,Fs.raycast(e,gc);for(let s=0,o=gc.length;s<o;s++){let c=gc[s];c.instanceId=a,c.object=this,t.push(c)}gc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(r*this.count),r,this.count,jd,Ti));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let o=this.geometry.morphTargetsRelative?1:1-s,c=r*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var dd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let o=a[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},vy=new Me,by=new fe(1,1,1),xy=new Pr,yy=new rn,My=new On,Ey=new S,Ty=new S,_y=new S,wy=new dd,Sy=new te;var ri=class extends Hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jc=new S,Xc=new S,gm=new Me,zs=new ia,vc=new On,hu=new S,vm=new S,Zi=class extends it{constructor(e=new Be,t=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)jc.fromBufferAttribute(t,r-1),Xc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=jc.distanceTo(Xc);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(r),vc.radius+=a,e.ray.intersectsSphere(vc)===!1)return;gm.copy(r).invert(),zs.copy(e.ray).applyMatrix4(gm);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let f=d,m=p-1;f<m;f+=l){let v=h.getX(f),g=h.getX(f+1),b=bc(this,e,zs,c,v,g);b&&t.push(b)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(d),v=bc(this,e,zs,c,f,m);v&&t.push(v)}}else{let d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let f=d,m=p-1;f<m;f+=l){let v=bc(this,e,zs,c,f,f+1);v&&t.push(v)}if(this.isLineLoop){let f=bc(this,e,zs,c,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function bc(i,e,t,n,r,a){let s=i.geometry.attributes.position;if(jc.fromBufferAttribute(s,r),Xc.fromBufferAttribute(s,a),t.distanceSqToSegment(jc,Xc,hu,vm)>n)return;hu.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(hu);return o<e.near||o>e.far?void 0:{distance:o,point:vm.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var bm=new S,xm=new S,Lr=class extends Zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)bm.fromBufferAttribute(t,r),xm.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bm.distanceTo(xm);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qc=class extends Zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ra=class extends Hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ym=new Me,pd=new ia,xc=new On,yc=new S,hs=class extends it{constructor(e=new Be,t=new ra){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(r),xc.radius+=a,e.ray.intersectsSphere(xc)===!1)return;ym.copy(r).invert(),pd.copy(e.ray).applyMatrix4(ym);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);u<d;u++){let p=l.getX(u);yc.fromBufferAttribute(h,p),Mm(yc,p,c,r,e,t,this)}else for(let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);u<d;u++)yc.fromBufferAttribute(h,u),Mm(yc,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Mm(i,e,t,n,r,a,s){let o=pd.distanceSqToPoint(i);if(o<t){let c=new S;pd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Ir=class extends Yt{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,a=n.length,s;s=t||e*n[a-1];let o,c=0,l=a-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-s,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===s)return r/(a-1);let h=n[r];return(r+(s-h)/(n[r+1]-h))/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),o=this.getPoint(a),c=t||(s.isVector2?new ie:new S);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,r=[],a=[],s=[],o=new S,c=new Me;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new S)}a[0]=new S,s[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(qt(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(o,f))}s[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(qt(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let f=1;f<=e;f++)a[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),s[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ao=class extends ai{constructor(e=0,t=0,n=1,r=1,a=0,s=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){let n=t,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=s?0:r),this.aClockwise!==!0||s||(a===r?a=-r:a-=r);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fd=class extends ao{constructor(e,t,n,r,a,s){super(e,t,n,n,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Zd(){let i=0,e=0,t=0,n=0;function r(a,s,o,c){i=a,e=o,t=-3*a+3*s-2*o-c,n=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){r(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,h,u){let d=(s-a)/l-(o-a)/(l+h)+(o-s)/h,p=(o-s)/h-(c-s)/(h+u)+(c-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(a){let s=a*a;return i+e*a+t*s+n*(s*a)}}}var Mc=new S,uu=new Zd,du=new Zd,pu=new Zd,yn=class extends ai{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,o,c,l=Math.floor(s),h=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:h===0&&l===a-1&&(l=a-2,h=1),this.closed||l>0?o=r[(l-1)%a]:(Mc.subVectors(r[0],r[1]).add(r[0]),o=Mc);let u=r[l%a],d=r[(l+1)%a];if(this.closed||l+2<a?c=r[(l+2)%a]:(Mc.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(c),p);m<1e-4&&(m=1),f<1e-4&&(f=m),v<1e-4&&(v=m),uu.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,m,v),du.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,m,v),pu.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,m,v)}else this.curveType==="catmullrom"&&(uu.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),du.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),pu.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(uu.calc(h),du.calc(h),pu.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Em(i,e,t,n,r){let a=.5*(n-e),s=.5*(r-t),o=i*i;return(2*t-2*n+a+s)*(i*o)+(-3*t+3*n-2*a-s)*o+a*i+t}function qs(i,e,t,n){return(function(r,a){let s=1-r;return s*s*a})(i,e)+(function(r,a){return 2*(1-r)*r*a})(i,t)+(function(r,a){return r*r*a})(i,n)}function Ys(i,e,t,n,r){return(function(a,s){let o=1-a;return o*o*o*s})(i,e)+(function(a,s){let o=1-a;return 3*o*o*a*s})(i,t)+(function(a,s){return 3*(1-a)*a*a*s})(i,n)+(function(a,s){return a*a*a*s})(i,r)}var Yc=class extends ai{constructor(e=new ie,t=new ie,n=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ie){let n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(Ys(e,r.x,a.x,s.x,o.x),Ys(e,r.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},md=class extends ai{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(Ys(e,r.x,a.x,s.x,o.x),Ys(e,r.y,a.y,s.y,o.y),Ys(e,r.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kc=class extends ai{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gd=class extends ai{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends ai{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(qs(e,r.x,a.x,s.x),qs(e,r.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends ai{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(qs(e,r.x,a.x,s.x),qs(e,r.y,a.y,s.y),qs(e,r.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,c=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return n.set(Em(o,c.x,l.x,h.x,u.x),Em(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ie().fromArray(r))}return this}},$c=Object.freeze({__proto__:null,ArcCurve:fd,CatmullRomCurve3:yn,CubicBezierCurve:Yc,CubicBezierCurve3:md,EllipseCurve:ao,LineCurve:Kc,LineCurve3:gd,QuadraticBezierCurve:Zc,QuadraticBezierCurve3:Jc,SplineCurve:Qc}),vd=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=n){let s=r[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-s/c;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],o=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new $c[r.type]().fromJSON(r))}return this}},aa=class extends vd{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Kc(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let a=new Zc(this.currentPoint.clone(),new ie(e,t),new ie(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,s){let o=new Yc(this.currentPoint.clone(),new ie(e,t),new ie(n,r),new ie(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,s){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,a,s),this}absarc(e,t,n,r,a,s){return this.absellipse(e,t,n,n,r,a,s),this}ellipse(e,t,n,r,a,s,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,a,s,o,c),this}absellipse(e,t,n,r,a,s,o,c){let l=new ao(e,t,n,r,a,s,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},si=class i extends Be{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=qt(r,0,2*Math.PI);let a=[],s=[],o=[],c=[],l=[],h=1/t,u=new S,d=new ie,p=new S,f=new S,m=new S,v=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:v=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,p.x=1*g,p.y=-v,p.z=0*g,m.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:v=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,p.x=1*g,p.y=-v,p.z=0*g,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),c.push(p.x,p.y,p.z),m.copy(f)}for(let b=0;b<=t;b++){let x=n+b*h*r,M=Math.sin(x),E=Math.cos(x);for(let y=0;y<=e.length-1;y++){u.x=e[y].x*M,u.y=e[y].y,u.z=e[y].x*E,s.push(u.x,u.y,u.z),d.x=b/t,d.y=y/(e.length-1),o.push(d.x,d.y);let T=c[3*y+0]*M,_=c[3*y+1],w=c[3*y+0]*E;l.push(T,_,w)}}for(let b=0;b<t;b++)for(let x=0;x<e.length-1;x++){let M=x+b*e.length,E=M,y=M+e.length,T=M+e.length+1,_=M+1;a.push(E,y,_),a.push(T,_,y)}this.setIndex(a),this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},so=class i extends si{constructor(e=1,t=1,n=4,r=8){let a=new aa;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},bd=class i extends Be{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let a=[],s=[],o=[],c=[],l=new S,h=new ie;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),s.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ge=class i extends Be{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],p=[],f=0,m=[],v=n/2,g=0;function b(x){let M=f,E=new ie,y=new S,T=0,_=x===!0?e:t,w=x===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,v*w,0),d.push(0,w,0),p.push(.5,.5),f++;let A=f;for(let C=0;C<=r;C++){let I=C/r*c+o,G=Math.cos(I),D=Math.sin(I);y.x=_*D,y.y=v*w,y.z=_*G,u.push(y.x,y.y,y.z),d.push(0,w,0),E.x=.5*G+.5,E.y=.5*D*w+.5,p.push(E.x,E.y),f++}for(let C=0;C<r;C++){let I=M+C,G=A+C;x===!0?h.push(G,G+1,I):h.push(G+1,G,I),T+=3}l.addGroup(g,T,x===!0?1:2),g+=T}(function(){let x=new S,M=new S,E=0,y=(t-e)/n;for(let T=0;T<=a;T++){let _=[],w=T/a,A=w*(t-e)+e;for(let C=0;C<=r;C++){let I=C/r,G=I*c+o,D=Math.sin(G),W=Math.cos(G);M.x=A*D,M.y=-w*n+v,M.z=A*W,u.push(M.x,M.y,M.z),x.set(D,y,W).normalize(),d.push(x.x,x.y,x.z),p.push(I,1-w),_.push(f++)}m.push(_)}for(let T=0;T<r;T++)for(let _=0;_<a;_++){let w=m[_][T],A=m[_+1][T],C=m[_+1][T+1],I=m[_][T+1];(e>0||_!==0)&&(h.push(w,A,I),E+=3),(t>0||_!==a-1)&&(h.push(A,C,I),E+=3)}l.addGroup(g,E,0),g+=E})(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mn=class i extends ge{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=2*Math.PI){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sa=class i extends Be{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let a=[],s=[];function o(d,p,f,m){let v=m+1,g=[];for(let b=0;b<=v;b++){g[b]=[];let x=d.clone().lerp(f,b/v),M=p.clone().lerp(f,b/v),E=v-b;for(let y=0;y<=E;y++)g[b][y]=y===0&&b===v?x:x.clone().lerp(M,y/E)}for(let b=0;b<v;b++)for(let x=0;x<2*(v-b)-1;x++){let M=Math.floor(x/2);x%2==0?(c(g[b][M+1]),c(g[b+1][M]),c(g[b][M])):(c(g[b][M+1]),c(g[b+1][M+1]),c(g[b+1][M]))}}function c(d){a.push(d.x,d.y,d.z)}function l(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,m){m<0&&d.x===1&&(s[p]=d.x-1),f.x===0&&f.z===0&&(s[p]=m/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new S,f=new S,m=new S;for(let v=0;v<t.length;v+=3)l(t[v+0],p),l(t[v+1],f),l(t[v+2],m),o(p,f,m,d)})(r),(function(d){let p=new S;for(let f=0;f<a.length;f+=3)p.x=a[f+0],p.y=a[f+1],p.z=a[f+2],p.normalize().multiplyScalar(d),a[f+0]=p.x,a[f+1]=p.y,a[f+2]=p.z})(n),(function(){let d=new S;for(let f=0;f<a.length;f+=3){d.x=a[f+0],d.y=a[f+1],d.z=a[f+2];let m=u(d)/2/Math.PI+.5,v=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);s.push(m,1-v)}var p;(function(){let f=new S,m=new S,v=new S,g=new S,b=new ie,x=new ie,M=new ie;for(let E=0,y=0;E<a.length;E+=9,y+=6){f.set(a[E+0],a[E+1],a[E+2]),m.set(a[E+3],a[E+4],a[E+5]),v.set(a[E+6],a[E+7],a[E+8]),b.set(s[y+0],s[y+1]),x.set(s[y+2],s[y+3]),M.set(s[y+4],s[y+5]),g.copy(f).add(m).add(v).divideScalar(3);let T=u(g);h(b,y+0,f,T),h(x,y+2,m,T),h(M,y+4,v,T)}})(),(function(){for(let f=0;f<s.length;f+=6){let m=s[f+0],v=s[f+2],g=s[f+4],b=Math.max(m,v,g),x=Math.min(m,v,g);b>.9&&x<.1&&(m<.2&&(s[f+0]+=1),v<.2&&(s[f+2]+=1),g<.2&&(s[f+4]+=1))}})()})(),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(a.slice(),3)),this.setAttribute("uv",new Ce(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},xd=class i extends sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ec=new S,Tc=new S,fu=new S,_c=new Tr,oo=class extends Be{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),a=Math.cos($a*t),s=e.getIndex(),o=e.getAttribute("position"),c=s?s.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){s?(l[0]=s.getX(f),l[1]=s.getX(f+1),l[2]=s.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:m,b:v,c:g}=_c;if(m.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),_c.getNormal(fu),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let b=0;b<3;b++){let x=(b+1)%3,M=u[b],E=u[x],y=_c[h[b]],T=_c[h[x]],_=`${M}_${E}`,w=`${E}_${M}`;w in d&&d[w]?(fu.dot(d[w].normal)<=a&&(p.push(y.x,y.y,y.z),p.push(T.x,T.y,T.z)),d[w]=null):_ in d||(d[_]={index0:l[b],index1:l[x],normal:fu.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:v}=d[f];Ec.fromBufferAttribute(o,m),Tc.fromBufferAttribute(o,v),p.push(Ec.x,Ec.y,Ec.z),p.push(Tc.x,Tc.y,Tc.z)}this.setAttribute("position",new Ce(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ue=class extends aa{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new aa().fromJSON(r))}return this}},L5=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,a=Tm(i,0,r,t,!0),s=[];if(!a||a.next===a.prev)return s;let o,c,l,h,u,d,p;if(n&&(a=(function(f,m,v,g){let b=[],x,M,E,y,T;for(x=0,M=m.length;x<M;x++)E=m[x]*g,y=x<M-1?m[x+1]*g:f.length,T=Tm(f,E,y,g,!1),T===T.next&&(T.steiner=!0),b.push(F5(T));for(b.sort(O5),x=0;x<b.length;x++)v=H5(b[x],v);return v})(i,e,a,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return co(a,s,t,o,c,p,0),s};function Tm(i,e,t,n,r){let a,s;if(r===(function(o,c,l,h){let u=0;for(let d=c,p=l-h;d<l;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(a=e;a<t;a+=n)s=_m(a,i[a],i[a+1],s);else for(a=t-n;a>=e;a-=n)s=_m(a,i[a],i[a+1],s);return s&&yl(s,s.next)&&(ho(s),s=s.next),s}function oa(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!yl(n,n.next)&&Ot(n.prev,n,n.next)!==0)n=n.next;else{if(ho(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function co(i,e,t,n,r,a,s){if(!i)return;!s&&a&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=yd(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(m){let v,g,b,x,M,E,y,T,_=1;do{for(g=m,m=null,M=null,E=0;g;){for(E++,b=g,y=0,v=0;v<_&&(y++,b=b.nextZ,b);v++);for(T=_;y>0||T>0&&b;)y!==0&&(T===0||!b||g.z<=b.z)?(x=g,g=g.nextZ,y--):(x=b,b=b.nextZ,T--),M?M.nextZ=x:m=x,x.prevZ=M,M=x;g=b}M.nextZ=null,_*=2}while(E>1)})(f)})(i,n,r,a);let o,c,l=i;for(;i.prev!==i.next;)if(o=i.prev,c=i.next,a?D5(i,n,r,a):I5(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ho(i),i=c.next,l=c.next;else if((i=c)===l){s?s===1?co(i=U5(oa(i),e,t),e,t,n,r,a,2):s===2&&N5(i,e,t,n,r,a):co(oa(i),e,t,n,r,a,1);break}}function I5(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let r=e.x,a=t.x,s=n.x,o=e.y,c=t.y,l=n.y,h=r<a?r<s?r:s:a<s?a:s,u=o<c?o<l?o:l:c<l?c:l,d=r>a?r>s?r:s:a>s?a:s,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Qa(r,o,a,c,s,l,f.x,f.y)&&Ot(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function D5(i,e,t,n){let r=i.prev,a=i,s=i.next;if(Ot(r,a,s)>=0)return!1;let o=r.x,c=a.x,l=s.x,h=r.y,u=a.y,d=s.y,p=o<c?o<l?o:l:c<l?c:l,f=h<u?h<d?h:d:u<d?u:d,m=o>c?o>l?o:l:c>l?c:l,v=h>u?h>d?h:d:u>d?u:d,g=yd(p,f,e,t,n),b=yd(m,v,e,t,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=g&&M&&M.z<=b;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=v&&x!==r&&x!==s&&Qa(o,h,c,u,l,d,x.x,x.y)&&Ot(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=m&&M.y>=f&&M.y<=v&&M!==r&&M!==s&&Qa(o,h,c,u,l,d,M.x,M.y)&&Ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=v&&x!==r&&x!==s&&Qa(o,h,c,u,l,d,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=m&&M.y>=f&&M.y<=v&&M!==r&&M!==s&&Qa(o,h,c,u,l,d,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function U5(i,e,t){let n=i;do{let r=n.prev,a=n.next.next;!yl(r,a)&&o1(r,n,n.next,a)&&lo(r,a)&&lo(a,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),ho(n),ho(n.next),n=i=a),n=n.next}while(n!==i);return oa(n)}function N5(i,e,t,n,r,a){let s=i;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&B5(s,o)){let c=c1(s,o);return s=oa(s,s.next),c=oa(c,c.next),co(s,e,t,n,r,a,0),void co(c,e,t,n,r,a,0)}o=o.next}s=s.next}while(s!==i)}function O5(i,e){return i.x-e.x}function H5(i,e){let t=(function(r,a){let s,o=a,c=-1/0,l=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let v=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(v<=l&&v>c&&(c=v,s=o.x<o.next.x?o:o.next,v===l))return s}o=o.next}while(o!==a);if(!s)return null;let u=s,d=s.x,p=s.y,f,m=1/0;o=s;do l>=o.x&&o.x>=d&&l!==o.x&&Qa(h<p?l:c,h,d,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),lo(o,r)&&(f<m||f===m&&(o.x>s.x||o.x===s.x&&k5(s,o)))&&(s=o,m=f)),o=o.next;while(o!==u);return s})(i,e);if(!t)return e;let n=c1(t,i);return oa(n,n.next),oa(t,t.next)}function k5(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function yd(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function F5(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qa(i,e,t,n,r,a,s,o){return(r-s)*(e-o)>=(i-s)*(a-o)&&(i-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(n-o)}function B5(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&o1(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(lo(i,e)&&lo(e,i)&&(function(t,n){let r=t,a=!1,s=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&s<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a})(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||yl(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yl(i,e){return i.x===e.x&&i.y===e.y}function o1(i,e,t,n){let r=Sc(Ot(i,e,t)),a=Sc(Ot(i,e,n)),s=Sc(Ot(t,n,i)),o=Sc(Ot(t,n,e));return r!==a&&s!==o||!(r!==0||!wc(i,t,e))||!(a!==0||!wc(i,n,e))||!(s!==0||!wc(t,i,n))||!(o!==0||!wc(t,e,n))}function wc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sc(i){return i>0?1:i<0?-1:0}function lo(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function c1(i,e){let t=new Md(i.i,i.x,i.y),n=new Md(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function _m(i,e,t,n){let r=new Md(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Md(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ui=class i{static area(e){let t=e.length,n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],a=[];wm(e),Sm(n,e);let s=e.length;t.forEach(wm);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,Sm(n,t[c]);let o=L5(n,r);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}};function wm(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var St=class i extends Be{constructor(e=new Ue([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],a=[];for(let o=0,c=e.length;o<c;o++)s(e[o]);function s(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:z5,x,M,E,y,T,_=!1;g&&(x=g.getSpacedPoints(h),_=!0,d=!1,M=g.computeFrenetFrames(h,!1),E=new S,y=new S,T=new S),d||(v=0,p=0,f=0,m=0);let w=o.extractPoints(l),A=w.shape,C=w.holes;if(!Ui.isClockWise(A)){A=A.reverse();for(let H=0,U=C.length;H<U;H++){let k=C[H];Ui.isClockWise(k)&&(C[H]=k.reverse())}}let I=Ui.triangulateShape(A,C),G=A;for(let H=0,U=C.length;H<U;H++){let k=C[H];A=A.concat(k)}function D(H,U,k){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(U,k)}let W=A.length,V=I.length;function z(H,U,k){let P,F,q,ae=H.x-U.x,K=H.y-U.y,oe=k.x-H.x,ce=k.y-H.y,ue=ae*ae+K*K,xe=ae*ce-K*oe;if(Math.abs(xe)>Number.EPSILON){let be=Math.sqrt(ue),we=Math.sqrt(oe*oe+ce*ce),Ie=U.x-K/be,tt=U.y+ae/be,We=((k.x-ce/we-Ie)*ce-(k.y+oe/we-tt)*oe)/(ae*ce-K*oe);P=Ie+ae*We-H.x,F=tt+K*We-H.y;let Pe=P*P+F*F;if(Pe<=2)return new ie(P,F);q=Math.sqrt(Pe/2)}else{let be=!1;ae>Number.EPSILON?oe>Number.EPSILON&&(be=!0):ae<-Number.EPSILON?oe<-Number.EPSILON&&(be=!0):Math.sign(K)===Math.sign(ce)&&(be=!0),be?(P=-K,F=ae,q=Math.sqrt(ue)):(P=ae,F=K,q=Math.sqrt(ue/2))}return new ie(P/q,F/q)}let j=[];for(let H=0,U=G.length,k=U-1,P=H+1;H<U;H++,k++,P++)k===U&&(k=0),P===U&&(P=0),j[H]=z(G[H],G[k],G[P]);let Y=[],Z,X=j.concat();for(let H=0,U=C.length;H<U;H++){let k=C[H];Z=[];for(let P=0,F=k.length,q=F-1,ae=P+1;P<F;P++,q++,ae++)q===F&&(q=0),ae===F&&(ae=0),Z[P]=z(k[P],k[q],k[ae]);Y.push(Z),X=X.concat(Z)}for(let H=0;H<v;H++){let U=H/v,k=p*Math.cos(U*Math.PI/2),P=f*Math.sin(U*Math.PI/2)+m;for(let F=0,q=G.length;F<q;F++){let ae=D(G[F],j[F],P);ne(ae.x,ae.y,-k)}for(let F=0,q=C.length;F<q;F++){let ae=C[F];Z=Y[F];for(let K=0,oe=ae.length;K<oe;K++){let ce=D(ae[K],Z[K],P);ne(ce.x,ce.y,-k)}}}let O=f+m;for(let H=0;H<W;H++){let U=d?D(A[H],X[H],O):A[H];_?(y.copy(M.normals[0]).multiplyScalar(U.x),E.copy(M.binormals[0]).multiplyScalar(U.y),T.copy(x[0]).add(y).add(E),ne(T.x,T.y,T.z)):ne(U.x,U.y,0)}for(let H=1;H<=h;H++)for(let U=0;U<W;U++){let k=d?D(A[U],X[U],O):A[U];_?(y.copy(M.normals[H]).multiplyScalar(k.x),E.copy(M.binormals[H]).multiplyScalar(k.y),T.copy(x[H]).add(y).add(E),ne(T.x,T.y,T.z)):ne(k.x,k.y,u/h*H)}for(let H=v-1;H>=0;H--){let U=H/v,k=p*Math.cos(U*Math.PI/2),P=f*Math.sin(U*Math.PI/2)+m;for(let F=0,q=G.length;F<q;F++){let ae=D(G[F],j[F],P);ne(ae.x,ae.y,u+k)}for(let F=0,q=C.length;F<q;F++){let ae=C[F];Z=Y[F];for(let K=0,oe=ae.length;K<oe;K++){let ce=D(ae[K],Z[K],P);_?ne(ce.x,ce.y+x[h-1].y,x[h-1].x+k):ne(ce.x,ce.y,u+k)}}}function J(H,U){let k=H.length;for(;--k>=0;){let P=k,F=k-1;F<0&&(F=H.length-1);for(let q=0,ae=h+2*v;q<ae;q++){let K=W*q,oe=W*(q+1);L(U+P+K,U+F+K,U+F+oe,U+P+oe)}}}function ne(H,U,k){c.push(H),c.push(U),c.push(k)}function $(H,U,k){R(H),R(U),R(k);let P=r.length/3,F=b.generateTopUV(n,r,P-3,P-2,P-1);B(F[0]),B(F[1]),B(F[2])}function L(H,U,k,P){R(H),R(U),R(P),R(U),R(k),R(P);let F=r.length/3,q=b.generateSideWallUV(n,r,F-6,F-3,F-2,F-1);B(q[0]),B(q[1]),B(q[3]),B(q[1]),B(q[2]),B(q[3])}function R(H){r.push(c[3*H+0]),r.push(c[3*H+1]),r.push(c[3*H+2])}function B(H){a.push(H.x),a.push(H.y)}(function(){let H=r.length/3;if(d){let U=0,k=W*U;for(let P=0;P<V;P++){let F=I[P];$(F[2]+k,F[1]+k,F[0]+k)}U=h+2*v,k=W*U;for(let P=0;P<V;P++){let F=I[P];$(F[0]+k,F[1]+k,F[2]+k)}}else{for(let U=0;U<V;U++){let k=I[U];$(k[2],k[1],k[0])}for(let U=0;U<V;U++){let k=I[U];$(k[0]+W*h,k[1]+W*h,k[2]+W*h)}}n.addGroup(H,r.length/3-H,0)})(),(function(){let H=r.length/3,U=0;J(G,U),U+=G.length;for(let k=0,P=C.length;k<P;k++){let F=C[k];J(F,U),U+=F.length}n.addGroup(H,r.length/3-H,1)})()}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let a=0,s=t.length;a<s;a++){let o=t[a];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new $c[r.type]().fromJSON(r)),new i(n,e.options)}},z5={generateTopUV:function(i,e,t,n,r){let a=e[3*t],s=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new ie(a,s),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(i,e,t,n,r,a){let s=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*a],v=e[3*a+1],g=e[3*a+2];return Math.abs(o-h)<Math.abs(s-l)?[new ie(s,1-c),new ie(l,1-u),new ie(d,1-f),new ie(m,1-g)]:[new ie(o,1-c),new ie(h,1-u),new ie(p,1-f),new ie(v,1-g)]}},us=class i extends sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ed=class i extends sa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ji=class i extends Be{constructor(e=.5,t=1,n=32,r=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new S,f=new ie;for(let m=0;m<=r;m++){for(let v=0;v<=n;v++){let g=a+v/n*s;p.x=u*Math.cos(g),p.y=u*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<r;m++){let v=m*(n+1);for(let g=0;g<n;g++){let b=g+v,x=b,M=b+n+1,E=b+n+2,y=b+1;o.push(x,M,y),o.push(M,E,y)}}this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},_i=class i extends Be{constructor(e=new Ue([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],a=[],s=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Ui.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,g=f.length;v<g;v++){let b=f[v];Ui.isClockWise(b)===!0&&(f[v]=b.reverse())}let m=Ui.triangulateShape(p,f);for(let v=0,g=f.length;v<g;v++){let b=f[v];p=p.concat(b)}for(let v=0,g=p.length;v<g;v++){let b=p[v];r.push(b.x,b.y,0),a.push(0,0,1),s.push(b.x,b.y)}for(let v=0,g=m.length;v<g;v++){let b=m[v],x=b[0]+u,M=b[1]+u,E=b[2]+u;n.push(x,M,E),c+=3}}this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let s=t[r];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let s=t[e.shapes[r]];n.push(s)}return new i(n,e.curveSegments)}},et=class i extends Be{constructor(e=1,t=32,n=16,r=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(s+o,Math.PI),l=0,h=[],u=new S,d=new S,p=[],f=[],m=[],v=[];for(let g=0;g<=n;g++){let b=[],x=g/n,M=0;g===0&&s===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){let y=E/t;u.x=-e*Math.cos(r+y*a)*Math.sin(s+x*o),u.y=e*Math.cos(s+x*o),u.z=e*Math.sin(r+y*a)*Math.sin(s+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),v.push(y+M,1-x),b.push(l++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let x=h[g][b+1],M=h[g][b],E=h[g+1][b],y=h[g+1][b+1];(g!==0||s>0)&&p.push(x,M,y),(g!==n-1||c<Math.PI)&&p.push(M,E,y)}this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(m,3)),this.setAttribute("uv",new Ce(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Td=class i extends sa{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hn=class i extends Be{constructor(e=1,t=.4,n=12,r=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);let s=[],o=[],c=[],l=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let m=f/r*a,v=p/n*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(m),u.y=(e+t*Math.cos(v))*Math.sin(m),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let m=(r+1)*p+f-1,v=(r+1)*(p-1)+f-1,g=(r+1)*(p-1)+f,b=(r+1)*p+f;s.push(m,v,b),s.push(v,g,b)}this.setIndex(s),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},_d=class i extends Be{constructor(e=1,t=.4,n=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:a,q:s},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new S,d=new S,p=new S,f=new S,m=new S,v=new S,g=new S;for(let x=0;x<=n;++x){let M=x/n*a*Math.PI*2;b(M,a,s,e,p),b(M+.01,a,s,e,f),v.subVectors(f,p),g.addVectors(f,p),m.crossVectors(v,g),g.crossVectors(m,v),m.normalize(),g.normalize();for(let E=0;E<=r;++E){let y=E/r*Math.PI*2,T=-t*Math.cos(y),_=t*Math.sin(y);u.x=p.x+(T*g.x+_*m.x),u.y=p.y+(T*g.y+_*m.y),u.z=p.z+(T*g.z+_*m.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(E/r)}}for(let x=1;x<=n;x++)for(let M=1;M<=r;M++){let E=(r+1)*(x-1)+(M-1),y=(r+1)*x+(M-1),T=(r+1)*x+M,_=(r+1)*(x-1)+M;o.push(E,y,_),o.push(y,T,_)}function b(x,M,E,y,T){let _=Math.cos(x),w=Math.sin(x),A=E/M*x,C=Math.cos(A);T.x=y*(2+C)*.5*_,T.y=y*(2+C)*w*.5,T.z=y*Math.sin(A)*.5}this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},oi=class i extends Be{constructor(e=new Jc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new S,c=new S,l=new ie,h=new S,u=[],d=[],p=[],f=[];function m(v){h=e.getPointAt(v/t,h);let g=s.normals[v],b=s.binormals[v];for(let x=0;x<=r;x++){let M=x/r*Math.PI*2,E=Math.sin(M),y=-Math.cos(M);c.x=y*g.x+E*b.x,c.y=y*g.y+E*b.y,c.z=y*g.z+E*b.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)m(v);m(a===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let g=0;g<=r;g++)l.x=v/t,l.y=g/r,p.push(l.x,l.y)})(),(function(){for(let v=1;v<=t;v++)for(let g=1;g<=r;g++){let b=(r+1)*(v-1)+(g-1),x=(r+1)*v+(g-1),M=(r+1)*v+g,E=(r+1)*(v-1)+g;f.push(b,x,E),f.push(x,M,E)}})()})(),this.setIndex(f),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new $c[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wd=class extends Be{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new S,a=new S;if(e.index!==null){let s=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let v=o.getX(p+m),g=o.getX(p+(m+1)%3);r.fromBufferAttribute(s,v),a.fromBufferAttribute(s,g),Am(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let o=0,c=s.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,u),Am(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Am(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Ay=Object.freeze({__proto__:null,BoxGeometry:st,CapsuleGeometry:so,CircleGeometry:bd,ConeGeometry:Mn,CylinderGeometry:ge,DodecahedronGeometry:xd,EdgesGeometry:oo,ExtrudeGeometry:St,IcosahedronGeometry:us,LatheGeometry:si,OctahedronGeometry:Ed,PlaneGeometry:xn,PolyhedronGeometry:sa,RingGeometry:Ji,ShapeGeometry:_i,SphereGeometry:et,TetrahedronGeometry:Td,TorusGeometry:hn,TorusKnotGeometry:_d,TubeGeometry:oi,WireframeGeometry:wd});var el=class extends wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Bt=class extends Hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends Bt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var tl=class extends Hn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var nl=class extends ri{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ac(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function G5(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function V5(i){let e=i.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,r){return i[n]-i[r]})),t}function Rm(i,e,t){let n=i.length,r=new i.constructor(n);for(let a=0,s=0;s!==n;++a){let o=t[a]*e;for(let c=0;c!==e;++c)r[s++]=i[o+c]}return r}function l1(i,e,t,n){let r=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[r++];if(a===void 0)return;let s=a[n];if(s!==void 0)if(Array.isArray(s))do s=a[n],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=i[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[n],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=i[r++];while(a!==void 0);else do s=a[n],s!==void 0&&(e.push(a.time),t.push(s)),a=i[r++];while(a!==void 0)}var Dr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];t:{e:{let s;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=r,r=t[++n],e<r)break e}s=t.length;break n}if(e>=a)break t;{let o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=a,a=t[--n-1],e>=a)break e}s=n,n=0}}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=n[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sd=class extends Dr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],c=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case ff:a=e,o=2*t-n;break;case mf:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ff:s=e,c=2*n-t;break;case mf:s=1,c=n+r[1]-r[0];break;default:s=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),m=f*f,v=m*f,g=-d*v+2*d*m-d*f,b=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*f+1,x=(-1-p)*v+(1.5+p)*m+.5*f,M=p*v-p*m;for(let E=0;E!==o;++E)a[E]=g*s[h+E]+b*s[l+E]+x*s[c+E]+M*s[u+E];return a}},Ad=class extends Dr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[l+d]*u+s[c+d]*h;return a}},Rd=class extends Dr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rs:t=this.InterpolantFactoryMethodDiscrete;break;case as:t=this.InterpolantFactoryMethodLinear;break;case Nh:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return as;case this.InterpolantFactoryMethodSmooth:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,s=r-1;for(;a!==r&&n[a]<e;)++a;for(;s!==-1&&n[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=n.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(r!==void 0&&G5(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Nh,a=e.length-1,s=1;for(let o=1;o<a;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let h=o*n,u=s*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*n,c=s*n,l=0;l!==n;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ni.prototype.TimeBufferType=Float32Array,ni.prototype.ValueBufferType=Float32Array,ni.prototype.DefaultInterpolation=as;var _r=class extends ni{constructor(e,t,n){super(e,t,n)}};_r.prototype.ValueTypeName="bool",_r.prototype.ValueBufferType=Array,_r.prototype.DefaultInterpolation=rs,_r.prototype.InterpolantFactoryMethodLinear=void 0,_r.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends ni{};il.prototype.ValueTypeName="color";var Qi=class extends ni{};Qi.prototype.ValueTypeName="number";var Cd=class extends Dr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)bn.slerpFlat(a,0,s,l-o,s,l,c);return a}},$i=class extends ni{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion",$i.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends ni{constructor(e,t,n){super(e,t,n)}};wr.prototype.ValueTypeName="string",wr.prototype.ValueBufferType=Array,wr.prototype.DefaultInterpolation=rs,wr.prototype.InterpolantFactoryMethodLinear=void 0,wr.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends ni{};er.prototype.ValueTypeName="vector";var rl=class{constructor(e="",t=-1,n=[],r=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(W5(n[s]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=n.length;a!==s;++a)t.push(ni.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let a=t.length,s=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);let h=V5(c);c=Rm(c,1,h),l=Rm(l,1,h),r||c[0]!==0||(c.push(a),l.push(l[0])),s.push(new Qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(a);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(l)}}let s=[];for(let o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let m=[],v=[];l1(d,m,v,p),m.length!==0&&f.push(new h(u,m,v))}},r=[],a=e.name||"default",s=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let m=[],v=[];for(let g=0;g!==u[p].morphTargets.length;++g){let b=u[p];m.push(b.time),v.push(b.morphTarget===f?1:0)}r.push(new Qi(".morphTargetInfluence["+f+"]",m,v))}c=d.length*s}else{let d=".bones["+t[h].name+"]";n(er,d+".position",u,"pos",r),n($i,d+".quaternion",u,"rot",r),n(er,d+".scale",u,"scl",r)}}return r.length===0?null:new this(a,c,r,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let r=this.tracks[t];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function W5(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return il;case"quaternion":return $i;case"bool":case"boolean":return _r;case"string":return wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(i.type);if(i.times===void 0){let t=[],n=[];l1(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Sr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Pd=class{constructor(e,t,n){let r=this,a,s=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,c),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},j5=new Pd,tr=class{constructor(e){this.manager=e!==void 0?e:j5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,a){n.load(e,r,t,a)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Ld=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends tr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Sr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(a),this.manager.itemEnd(e)}),0),a;if(ji[e]!==void 0)return void ji[e].push({onLoad:t,onProgress:n,onError:r});ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:r});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(s).then((l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ji[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,m=0,v=new ReadableStream({start(g){(function b(){u.read().then((({done:x,value:M})=>{if(x)g.close();else{m+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:p});for(let y=0,T=h.length;y<T;y++){let _=h[y];_.onProgress&&_.onProgress(E)}g.enqueue(M),b()}}),(x=>{g.error(x)}))})()}});return new Response(v)}throw new Ld(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)})).then((l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then((p=>d.decode(p)))}}})).then((l=>{Sr.add(e,l);let h=ji[e];delete ji[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}})).catch((l=>{let h=ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Id=class extends tr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Sr.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout((function(){t&&t(s),a.manager.itemEnd(e)}),0),s;let o=Qs("img");function c(){h(),Sr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}};var al=class extends tr{constructor(e){super(e)}load(e,t,n,r){let a=new Yt,s=new Id(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,(function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)}),n,r),a}},ds=class extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},sl=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mu=new Me,Cm=new S,Pm=new S,po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cm),Pm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pm),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dd=class extends po{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*os*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;n===t.fov&&r===t.aspect&&a===t.far||(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ol=class extends ds{constructor(e,t,n=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Dd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Lm=new Me,Gs=new S,gu=new S,Ud=class extends po{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),gu.copy(n.position),gu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gu),n.updateMatrixWorld(),r.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Lm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lm)}},ps=class extends ds{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ud}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nd=class extends po{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ca=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new Nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ur=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var cl=class extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Sr.get(e);if(s!==void 0)return a.manager.itemStart(e),s.then?void s.then((l=>{t&&t(l),a.manager.itemEnd(e)})).catch((l=>{r&&r(l)})):(setTimeout((function(){t&&t(s),a.manager.itemEnd(e)}),0),s);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then((function(l){return l.blob()})).then((function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))})).then((function(l){return Sr.add(e,l),t&&t(l),a.manager.itemEnd(e),l})).catch((function(l){r&&r(l),Sr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)}));Sr.add(e,c),a.manager.itemStart(e)}};var Ry=new Me,Cy=new Me,Py=new Me;var ll=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Im();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Im(){return performance.now()}var Ly=new S,Iy=new bn,Dy=new S,Uy=new S;var Ny=new S,Oy=new bn,Hy=new S,ky=new S;var Jd="\\[\\]\\.:\\/",X5=new RegExp("["+Jd+"]","g"),vu="[^"+Jd+"]",q5="[^"+Jd.replace("\\.","")+"]",Y5=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",vu)+/(WCOD+)?/.source.replace("WCOD",q5)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu)+"$"),K5=["material","materials","bones","map"],Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X5,"")}static parseTrackName(e){let t=Y5.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);K5.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=class{constructor(i,e,t){let n=t||Ct.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray],Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var Dm=new Me,hl=class{constructor(e,t,n=0,r=1/0){this.ray=new ia(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dm),this}intersectObject(e,t=!0,n=[]){return Od(e,this,n,t),n.sort(Um),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Od(e[r],this,n,t);return n.sort(Um),n}};function Um(i,e){return i.distance-e.distance}function Od(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let a=i.children;for(let s=0,o=a.length;s<o;s++)Od(a[s],e,t,!0)}}var fo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var By=new ie;var Nm=new S,Rc=new S,ul=class{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Nm.subVectors(e,this.start),Rc.subVectors(this.end,this.start);let n=Rc.dot(Rc),r=Rc.dot(Nm)/n;return t&&(r=qt(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},zy=new S;var Gy=new S,Vy=new Me,Wy=new Me;var jy=new S,Xy=new fe,qy=new fe;var Yy=new S,Ky=new S,Zy=new S;var Jy=new S,Qy=new eo;var $y=new rn;var eM=new S;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Z5=new Oi(-1,1,1,-1,0,1),Qd=class extends Be{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}},J5=new Qd,ci=class{constructor(e){this._mesh=new te(J5,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z5)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ir=class extends Dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=In.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ci(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var go=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}},Ml=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var El=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ir(gs),this.copyPass.material.blending=wi,this.clock=new ll}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,a=this.passes.length;r<a;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}go!==void 0&&(s instanceof go?n=!0:s instanceof Ml&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tl=class extends Dn{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}};var h1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var _l=class extends Dn{constructor(){super();let e=h1;this.uniforms=In.clone(e.uniforms),this.material=new el({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===km?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ml&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var u1={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125},r:{value:.35}},vertexShader:`

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

		}`};var d1={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125},r:{value:.35}},vertexShader:`

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

		}`};var p1={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};function qn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},s={},o=i[0].morphTargetsRelative,c=new Be,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in a){let u=f1(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in s){let u=s[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let m=0;m<s[h].length;++m)p.push(s[h][m][d]);let f=f1(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}return c}function f1(i){let e,t,n,r=-1,a=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}let s=new e(a),o=new dt(s,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){let m=h.getComponent(d,f);o.setComponent(d+u,f,m)}}else s.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function $d(i,e){if(e===Qm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===mo||e===vl){let t=i.getIndex();if(t===null){let s=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===mo)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=i.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var m1={name:"japan-washi",concept:"\u548C\u7D19\u7D19\u96D5",countries:["\u65E5\u672C"],css:{"--ink":"#2a2420","--paper":"#f3ebdc","--wash":"232,220,198","--red":"#ae2a20","--gold":"#b8913a","--air":"#3c6a8c","--mute":"#7d7062","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f3ebdc","#ddcbad"],sea:"#2b4560",rings:["#36536e","#4f6e86"],land:"#efe4cf",side:"#a5825a",route:"#ae2a20",stitch:"#f5ecdc",bead:"#b8913a",air:"#3c6a8c",flagPaper:"#fbf6ec",sun:"#ffe1b6",hemi:["#fff4e2","#76664f"],hills:{count:60,sets:[[.55,["#c6b08a","#d4c19d","#e1d2b4","#ece2cc"]],[.3,["#b99063","#c8a171","#d6b483","#e3c99c"]],[.15,["#a9603e","#bd7448","#cf8c56","#dca66a"]]]},terrain:["#e8dcc0","#dccca7","#cfb98c","#c3a574","#b8915f","#ad7d4f","#9f6a43","#8f5a3a","#7d4c32","#6b3f2b","#5a3425","#f1ece2"],houses:["machiya"],trees:{perStop:10,along:110,coast:["pine"],inland:["maple","maple","cedar"],pine:["#3d5a3b","#4b6a45","#33503a"],colors:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b","#8a8c4a"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(40,60,80,.10)",i.lineWidth=e/160;let t=e/4;for(let n=-1;n<5;n++)for(let r=-1;r<3;r++){let a=r*t*2+(n%2?t:0),s=n*t/2;for(let o=4;o>=1;o--)i.beginPath(),i.arc(a,s+t,t*o/4,Math.PI,2*Math.PI),i.stroke()}}};var g1={name:"china-ink",concept:"\u6C34\u58A8\u9577\u5377",countries:["\u4E2D\u570B","\u9999\u6E2F","\u6FB3\u9580"],css:{"--ink":"#1f2220","--paper":"#f2efe6","--wash":"242,239,230","--red":"#b5281c","--gold":"#9a7b3c","--air":"#4a5d6a","--mute":"#6f706a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f2efe6","#d9d5c8"],sea:"#c9cec9",rings:["#d6dad3","#e2e4dc"],land:"#f4f1e8",side:"#6b6b66",route:"#b5281c",stitch:"#f4f1e8",bead:"#b5281c",air:"#4a5d6a",flagPaper:"#f7f4ec",sun:"#fff3df",hemi:["#fbf8f0","#6f706a"],terrain:["#e3e1d9","#cfcdc4","#b9b8b0","#a2a29b","#8a8b85","#72746f","#5c5e5a","#474a47","#343735","#262927","#1c1e1d","#f2f0ea"],hills:{count:60,sets:[[.55,["#c9c8c0","#a9a9a2","#878883","#666865"]],[.3,["#a9b8ad","#93a598","#7c9182","#667d6e"]],[.15,["#cdb48e","#bba077","#a68b63","#8f7653"]]]},trees:{perStop:10,along:110,coast:["pine","willow"],inland:["pine","bamboo","willow"],pine:["#2f3a33","#3f4a3c","#25302a"],colors:["#8a3a2c","#b5281c","#c9a34a","#7d8a5a","#a8452e","#6a7a4a","#b88a3a"],colorsBy:{pine:["#2f3a33","#3f4a3c","#25302a"],willow:["#6d7f5a","#7d8f68","#5d6f4c"],bamboo:["#4f6b45","#5d7a50","#43603b"]}},houses:["china"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(40,45,42,.13)",i.lineWidth=e/200;for(let t=0;t<10;t++){i.beginPath();let n=(t+.5)*e/10;for(let r=0;r<=e;r+=e/64)i.lineTo(r,n+Math.sin(r/e*Math.PI*4+t)*e/60);i.stroke()}}};var v1={name:"vietnam-lantern",concept:"\u71C8\u7C60\u5287\u5834",countries:["\u8D8A\u5357"],css:{"--ink":"#2b1d14","--paper":"#f6e7bf","--wash":"246,231,191","--red":"#c0392b","--gold":"#d9a032","--air":"#1f5d5a","--mute":"#7a6448","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6e3b4","#e7b27a"],sea:"#1f4b4a",rings:["#2a6260","#3f7a73"],land:"#f3e2b3",side:"#8a5a2b",route:"#c0392b",stitch:"#f2c14e",bead:"#e67e22",air:"#1f5d5a",flagPaper:"#fff3d6",sun:"#ffd28a",hemi:["#fff1d0","#6b4a2a"],terrain:["#d9d79a","#c3c97f","#a9b768","#8fa457","#76904a","#5f7b3f","#4b6636","#3b532d","#2e4226","#4a4f3a","#6a6a58","#ece6d2"],hills:{count:60,sets:[[.55,["#b9c27a","#9fb062","#869c50","#6d8643"]],[.3,["#d6cf7a","#c7c066","#b5ae55","#a29b47"]],[.15,["#9aa595","#86917f","#727d6b","#5f6959"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["palm","bamboo","banyan"],pine:["#2e4a32","#3a5a3c","#26402b"],colors:["#c0392b","#e67e22","#f2c14e","#6a8a3a","#d9a032","#8fa457","#b5502b"]},houses:["shophouse","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,230,170,.12)",i.lineWidth=e/220,[[.25,.3],[.72,.18],[.55,.7],[.12,.82],[.9,.62]].forEach(([t,n])=>{for(let r=1;r<=4;r++)i.beginPath(),i.arc(t*e,n*e,r*e/22,0,Math.PI*2),i.stroke()})}};var b1={name:"thailand-gold",concept:"\u6696\u91D1\u6D6E\u96D5",countries:["\u6CF0\u570B","\u67EC\u57D4\u5BE8","\u5BEE\u570B","\u7DEC\u7538"],css:{"--ink":"#2a1f12","--paper":"#f6ead0","--wash":"246,234,208","--red":"#9b1d20","--gold":"#c8941c","--air":"#16404d","--mute":"#7d6a4a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6ead0","#e8cf9b"],sea:"#1b2c4a",rings:["#263c5e","#365078"],land:"#f0e2c2",side:"#a07a2c",route:"#9b1d20",stitch:"#e7c66b",bead:"#d4a017",air:"#1b2c4a",flagPaper:"#fbf3df",sun:"#ffe0a0",hemi:["#fff2d6","#6a5330"],terrain:["#efdcae","#e5cd8f","#d9bc72","#cca95a","#bd9547","#ab823b","#967032","#7f5e2b","#6a4e25","#5a4220","#4a361b","#f3e6c8"],hills:{count:60,sets:[[.55,["#e0c77f","#cfae5e","#b99347","#a07a36"]],[.3,["#9fb06a","#87995a","#70824b","#5b6c3e"]],[.15,["#d08a5a","#bd7548","#a5623b","#8c5231"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["banyan","palm","bamboo"],pine:["#2f4a2e","#3b5a38","#283f27"],colors:["#e0a526","#d4a017","#9b1d20","#f0c94a","#c8941c","#b87a1a","#7a8a3a"]},houses:["thai","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(231,198,107,.16)",i.lineWidth=e/180;let t=6,n=e/t;for(let r=0;r<=t;r++)for(let a=0;a<=t;a++){let s=r*n,o=a*n;i.beginPath(),i.moveTo(s,o-n/2),i.lineTo(s+n/2,o),i.lineTo(s,o+n/2),i.lineTo(s-n/2,o),i.closePath(),i.stroke()}}};var x1={name:"indonesia-rainforest",concept:"\u96E8\u6797\u5149\u7A97",countries:["\u5370\u5C3C","\u83F2\u5F8B\u8CD3"],css:{"--ink":"#1f2a1e","--paper":"#f1ecd8","--wash":"241,236,216","--red":"#c2502d","--gold":"#c99a2e","--air":"#0f5a63","--mute":"#6a6a52","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#eef0dc","#c9dcc0"],sea:"#0f5a63",rings:["#1a7378","#3a9590"],land:"#e8e2c8",side:"#6e5a3a",route:"#c2502d",stitch:"#fdf3d0",bead:"#e0a526",air:"#0f5a63",flagPaper:"#fbf8ea",sun:"#fff0c8",hemi:["#f3f7e6","#3e5a3a"],terrain:["#cfe0a4","#b5d08a","#9cc074","#82ad60","#6b994f","#558443","#436f39","#345a30","#284628","#1f3a22","#5e5a4c","#efeee8"],hills:{count:60,sets:[[.55,["#a8c97a","#8cb560","#6f9c4c","#55843f"]],[.3,["#8a8576","#76715f","#625e4e","#504c3f"]],[.15,["#d3e07a","#bed06a","#a7be5a","#90aa4c"]]]},trees:{perStop:14,along:130,coast:["palm"],inland:["palm","banyan","bamboo"],pine:["#24442a","#2f5434","#1f3a24"],colors:["#e0a526","#c2502d","#f3e3a0","#6b994f","#d98a3a","#8cb560","#a8402b"]},houses:["bali","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,245,210,.14)";for(let t=0;t<8;t++)for(let n=0;n<24;n++){let r=n/24*e,a=(t+.5)*e/8+Math.sin(n/24*Math.PI*4)*e/40;i.beginPath(),i.arc(r,a,e/160,0,Math.PI*2),i.fill()}}};var y1={name:"malaysia-peranakan",concept:"\u5357\u6D0B\u82B1\u78DA",countries:["\u99AC\u4F86\u897F\u4E9E","\u65B0\u52A0\u5761","\u6C76\u840A"],css:{"--ink":"#2a2430","--paper":"#f6eedd","--wash":"246,238,221","--red":"#c8505d","--gold":"#c9a04a","--air":"#2f6db3","--mute":"#7a6c74","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6eedd","#e6d6cf"],sea:"#2a5c8a",rings:["#3a74a0","#6aa3bf"],land:"#f6eedd",side:"#b9806a",route:"#c8505d",stitch:"#ffffff",bead:"#2f6db3",air:"#2f6db3",flagPaper:"#fffaf0",sun:"#ffe9cf",hemi:["#fff6ea","#5a5060"],terrain:["#e6efdc","#d3e8d2","#bfdfcb","#a8d3c0","#90c4b2","#79b3a3","#649f92","#528a80","#43756d","#3a625c","#7d8a86","#e2e6e3"],hills:{count:60,sets:[[.55,["#bfe0cc","#a6d3bd","#8dc4ad","#74b39c"]],[.3,["#a6d08f","#8cc07a","#73ab66","#5d9554"]],[.15,["#d9a28a","#c88d74","#b47960","#9d664f"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["banyan","palm"],pine:["#2a4a2e","#36583a","#223e26"],colors:["#c8505d","#e08a8f","#f2c6a0","#7fa96a","#d9a04a","#95ba7d","#b5404d"]},houses:["shophouse"],village:6,seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,255,255,.16)",i.lineWidth=e/200;let t=4,n=e/t;for(let r=0;r<t;r++)for(let a=0;a<t;a++){let s=(r+.5)*n,o=(a+.5)*n;for(let c=0;c<4;c++){let l=c*Math.PI/2;i.beginPath(),i.ellipse(s+Math.cos(l)*n*.2,o+Math.sin(l)*n*.2,n*.2,n*.1,l,0,Math.PI*2),i.stroke()}i.strokeRect(r*n,a*n,n,n)}}};var M1={name:"korea-hanji",concept:"\u97D3\u7D19\u4E39\u9752",countries:["\u97D3\u570B"],css:{"--ink":"#22252a","--paper":"#f2ece0","--wash":"236,230,216","--red":"#b23a2e","--gold":"#c9a24a","--air":"#2e6b7a","--mute":"#6f6a62","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f2ece0","#d6d4c8"],sea:"#2a4a5e",rings:["#35596f","#4f7385"],land:"#ece6d6",side:"#7d6a55",route:"#b23a2e",stitch:"#f2ece0",bead:"#2e8b7a",air:"#2e6b7a",flagPaper:"#faf6ee",sun:"#fff0d6",hemi:["#f8f6ef","#5c5e5a"],hills:{count:60,sets:[[.5,["#bdb7a8","#cbc6b8","#d9d5c9","#e6e3d9"]],[.35,["#6f7f62","#829172","#97a486","#adb89c"]],[.15,["#9c6a4a","#b07d58","#c3946b","#d4ac84"]]]},terrain:["#e6e2d3","#d9d6c2","#c8c8ad","#b5b897","#a0a682","#8b946f","#77835e","#647250","#566244","#4a5340","#5f5f5c","#eeede8"],houses:["hanok"],trees:{perStop:10,along:110,coast:["pine"],inland:["pine","pine","ginkgo","maple"],pine:["#3f5a46","#4c6a52","#34503f"],colors:["#a8432f","#b85a32","#c98f3a","#d6ae4c","#8e4a34","#b0703a","#7f8456"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(30,55,75,.11)",i.lineWidth=e/170,i.lineCap="round";let t=e/14,n=(r,a,s)=>{for(let o=0;o<2;o++){let c=t*(1-o*.42);i.beginPath(),i.arc(r-s*t*.9,a,c,s>0?0:Math.PI,s>0?Math.PI*1.75:Math.PI*2.75),i.stroke(),i.beginPath(),i.arc(r+s*t*.9,a,c,s>0?Math.PI:0,s>0?Math.PI*2.75:Math.PI*1.75,s<0),i.stroke()}i.beginPath(),i.moveTo(r-t*2.2,a+t*.9),i.quadraticCurveTo(r,a+t*1.5,r+t*2.2,a+t*.9),i.stroke()};for(let r=0;r<4;r++)for(let a=-1;a<3;a++)n((a+r%2*.5)*e/2+e/4,r*e/4+e/8,r%2?-1:1)}};var E1={name:"europe-atlas",concept:"\u53E4\u5730\u5716\u7D19\u96D5",countries:["\u6CD5\u570B","\u7FA9\u5927\u5229","\u6377\u514B","\u5967\u5730\u5229","\u745E\u58EB","\u5FB7\u570B","\u897F\u73ED\u7259","\u8377\u862D","\u6BD4\u5229\u6642","\u8461\u8404\u7259","\u82F1\u570B"],css:{"--ink":"#2b2622","--paper":"#f1e4c8","--wash":"241,228,200","--red":"#a8452e","--gold":"#b08a3e","--air":"#3f5f78","--mute":"#776a5c","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f1e6cf","#c9d3d6"],sea:"#2f4c63",rings:["#3d5c73","#58768a"],land:"#eedcb4",side:"#94704a",route:"#a8452e",stitch:"#f4ead6",bead:"#b08a3e",air:"#3f5f78",flagPaper:"#faf5ea",sun:"#ffe9c8",hemi:["#f8f3e8","#646056"],hills:{count:60,sets:[[.45,["#9fb85a","#b2c66c","#c5d382","#d8e09c"]],[.35,["#d4a94a","#ddb85e","#e5c776","#edd694"]],[.2,["#3f6248","#4d7254","#5e8463","#729676"]]]},terrain:["#ece0b8","#dfdc9e","#cbd286","#b2c46f","#94b05e","#6f9455","#4f7650","#41604a","#7e8186","#9a9ca0","#bfc1c3","#f6f7f8"],houses:["timber","terracotta","chalet"],trees:{perStop:10,along:110,coast:["pine"],inland:["cedar","maple","maple","willow"],pine:["#3f5c43","#4a6a4c","#36503b"],colors:["#7a9a3e","#8fae4a","#b8b040","#c98f34","#6b8a3a","#a86a32","#5c7c3c"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(30,45,60,.10)",i.lineWidth=e/300;let t=24,n=6;for(let r=0;r<t;r++){let a=(r+.5)*e/t,s=r%3*.7,o=e/t*.18;i.beginPath();for(let c=0;c<=e;c+=2){let l=a+Math.sin(c/e*Math.PI*2*n+s)*o;c?i.lineTo(c,l):i.moveTo(c,l)}i.stroke()}}};var T1={name:"taiwan-formosa",concept:"\u798F\u723E\u6469\u6C99\u9752\u5C71",countries:["\u53F0\u7063"],css:{"--ink":"#20282a","--paper":"#eef0e6","--wash":"232,236,224","--red":"#b8352a","--gold":"#c9a040","--air":"#2f6f73","--mute":"#69706a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#eef1ea","#cdd8d0"],sea:"#1f4a5a",rings:["#2c5f6e","#477a86"],land:"#e9ead8",side:"#6f6450",route:"#b8352a",stitch:"#f4f1e6",bead:"#c9a040",air:"#2f6f73",flagPaper:"#fbf9f1",sun:"#fff2d8",hemi:["#f4f7f0","#5a6658"],road:"#e4e2d2",highway:"#c9bf9c",rail:"#4f5652",train:"#eef0ea",hills:{count:60,sets:[[.45,["#cbd89a","#d7e1ac","#e2e9bf","#ecf0d2"]],[.35,["#7fa86a","#90b67a","#a3c48c","#b7d19f"]],[.2,["#3f6a58","#4c7a66","#5d8a76","#71998a"]]]},terrain:["#e3e6c8","#cfdca8","#b6cf8e","#9cc07a","#82ad6a","#6a9a5e","#568656","#47734f","#3d6450","#4f6a68","#8a9a9a","#eef0ee"],houses:["taiwan","taiwan","temple"],trees:{perStop:10,along:110,coast:["palm","banyan"],inland:["banyan","bamboo","cedar"],pine:["#35574a","#426552","#2e4c42"],colors:["#5d8a3e","#6f9a48","#4f7d38","#8aa84e","#a8b85a","#b8743a","#7a9a42"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(25,55,65,.11)",i.lineWidth=e/180,i.lineCap="round";let t=6,n=4,r=e/n,a=e/t*.22;for(let s=0;s<=t;s++){let o=s*e/t,c=s%2*r/2;i.beginPath();for(let l=-r;l<=e+r;l+=2){let h=o-Math.sin((l-c)/r*Math.PI*2)*a;l===-r?i.moveTo(l,h):i.lineTo(l,h)}i.stroke();for(let l=-1;l<=n;l++){let h=c+l*r+r*.25,u=o-a;i.beginPath(),i.arc(h+a*.35,u+a*.35,a*.45,Math.PI*1.1,Math.PI*2.4),i.stroke()}}}};var e0={"japan-washi":m1,"china-ink":g1,"vietnam-lantern":v1,"thailand-gold":b1,"indonesia-rainforest":x1,"malaysia-peranakan":y1,"korea-hanji":M1,"europe-atlas":E1,"taiwan-formosa":T1};function vo(i,e,t=0,n=0,r=0){let a=new te(i,e);return a.position.set(t,n,r),a.castShadow=a.receiveShadow=!0,a}var t0=(i,e=14)=>new si(i.map(([t,n])=>new ie(t,n)),e),_1=i=>()=>(i=i*16807%2147483647)/2147483647,w1={karst(i,e=7){let t=new le,n=_1(e),r=["#8fa58a","#7d9879","#a3b59a","#6f8a6c"];for(let a=0;a<9;a++){let s=.5+n()*.7,o=.16+n()*.12,c=n()*6.28,l=n()*.9;t.add(vo(t0([[o,0],[o*.92,s*.55],[o*.75,s*.85],[o*.4,s*.98],[0,s]]),i(r[a%r.length]),Math.cos(c)*l*1.3,0,Math.sin(c)*l))}return t},terraces(i){let e=new le,t=["#9cbf6a","#b4d07e","#8bb35c","#c6dc93"];for(let n=0;n<7;n++){let r=1.3-n*.16,a=new Ue;a.absarc(0,0,r,.15*Math.PI,.85*Math.PI,!1),a.absarc(0,0,r-.14,.85*Math.PI,.15*Math.PI,!0);let s=new St(a,{depth:.06,bevelEnabled:!1,curveSegments:18});s.rotateX(-Math.PI/2),e.add(vo(s,i(t[n%t.length]),0,n*.06,.5))}return e},volcano(i){let e=new le;return e.add(vo(t0([[1.2,0],[.9,.18],[.5,.55],[.22,.85],[.16,.86],[.12,.8]],24),i("#8a7a6a"))),e.add(vo(t0([[.32,.72],[.22,.85],[.16,.86],[.12,.8]],24),i("#f4f1ea"))),e},dunes(i,e=3){let t=new le,n=_1(e),r=["#e8cf96","#e0c283","#edd8a8"];for(let a=0;a<6;a++){let s=new et(1,20,10,0,Math.PI*2,0,Math.PI/2);s.scale(.55+n()*.45,.1+n()*.12,.18+n()*.12),s.rotateY((n()-.5)*.5),t.add(vo(s,i(r[a%r.length]),(n()-.5)*1.4,0,(a-2.5)*.24))}return t}};var bo=(i,e)=>Array.from({length:i},(t,n)=>e(n/i*Math.PI*2)),vs=(i,e,t=0)=>[[t-i,0],[t+i,0],[t+i,e],[t-i,e]];function Q5(i,e,t,n,r,a){let o=[],c=[];for(let l=0;l<=9;l++){let h=l/9,u=i+Math.cos(t)*n*h,d=e+Math.sin(t)*n*h-a*h*h,p=r*Math.sin(Math.PI*Math.min(1,h*1.15)),f=-Math.sin(t),m=Math.cos(t);o.push([u+f*p,d+m*p]),c.push([u-f*p,d-m*p])}return o.concat(c.reverse())}var xo={maple:[bo(26,i=>{i=-Math.PI/2+.12+i*(1-.24/6.283);let e=.8+.2*Math.abs(Math.cos(i*3.5));return[Math.cos(i)*e,1.05+Math.sin(i)*e*.92]}).concat([[-.08,.3],[-.08,0],[.08,0],[.08,.3]])],pine:[[[-.09,0],[.09,0],[.09,.22],[.95,.22],[.42,.72],[.75,.68],[.3,1.18],[.52,1.14],[0,1.75],[-.52,1.14],[-.3,1.18],[-.75,.68],[-.42,.72],[-.95,.22],[-.09,.22]]],cedar:[[[-.07,0],[.07,0],[.07,.18],[.46,.18],[.22,.62],[.38,.6],[.16,1.08],[.28,1.06],[0,1.95],[-.28,1.06],[-.16,1.08],[-.38,.6],[-.22,.62],[-.46,.18],[-.07,.18]]],cherry:[bo(28,i=>{let e=.78+.13*Math.abs(Math.cos(i*3));return[Math.cos(i)*e*1.2,1+Math.sin(i)*e*.72]}),vs(.08,.5)],ginkgo:[bo(24,i=>[Math.cos(i)*.62,1.12+Math.sin(i)*.78+(Math.sin(i)>0?.08*Math.sin(i):0)]),vs(.07,.5)],willow:[[[-.07,0],[.07,0],[.07,.45],...Array.from({length:9},(i,e)=>{let t=.1+e/8*.78;return[t,(e%2?.42:.72)+t*.3]}),...Array.from({length:17},(i,e)=>{let t=e/16*Math.PI;return[Math.cos(t)*.88,1.15+Math.sin(t)*.55]}),...Array.from({length:9},(i,e)=>{let t=-.88+e/8*.78;return[t,(e%2?.42:.72)-t*.3]}),[-.07,.45]]],palm:[[[-.05,0],[.06,0],[.2,.8],[.22,1.5],[.15,1.5],[.12,.8]],...[2.75,2.25,1.8,1.35,.85,.35].map((i,e)=>Q5(.18,1.5,i,.72+e%2*.14,.09,.42))],bamboo:[...[[-.35,1.6],[-.1,1.85],[.18,1.7],[.4,1.45]].flatMap(([i,e])=>[vs(.035,e,i),bo(14,t=>[i+Math.cos(t)*.22,e-.12+Math.sin(t)*.3])])],banyan:[bo(28,i=>{let e=1+.08*Math.cos(i*6);return[Math.cos(i)*e*1.05,1.15+Math.sin(i)*e*.42]}),[[-.13,0],[.13,0],[.1,.9],[-.1,.9]],vs(.025,.85,-.55),vs(.025,.85,.5),vs(.02,.85,.3)]},S1={maple:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b"],pine:["#3d5a3b","#4b6a45","#33503a"],cedar:["#2f4a35","#3a5a3e","#29412f"],cherry:["#f2c4c9","#ebb0b8","#f6d6d8"],ginkgo:["#e8b923","#d9a31a","#f0c94a"],willow:["#7f9a4a","#8fae5a","#6c8a3f"],palm:["#3f7a3a","#4c8a40","#356b35"],bamboo:["#5e8f3e","#6fa34a","#4f7d36"],banyan:["#3d6b3a","#4a7a42","#335c33"]};function yo(i){let e=i.groups;if(e.length<=2&&new Set(e.map(c=>c.materialIndex)).size===e.length)return i;let t=i.index?i.index.array:null,n=[...new Set(e.map(c=>c.materialIndex))].sort((c,l)=>c-l),r=e.reduce((c,l)=>c+l.count,0),a=new Uint32Array(r),s=[],o=0;return n.forEach(c=>{let l=o;e.forEach(h=>{if(h.materialIndex===c)for(let u=h.start,d=h.start+h.count;u<d;u++)a[o++]=t?t[u]:u}),s.push([l,o-l,c])}),i.setIndex(new dt(a,1)),i.clearGroups(),s.forEach(([c,l,h])=>i.addGroup(c,l,h)),i}function bs(i){i.updateMatrixWorld(!0);let e=new Me().copy(i.matrixWorld).invert(),t=new Map;return i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh||Array.isArray(n.material)||n.children.length||n.onBeforeRender!==it.prototype.onBeforeRender)return;let r=Object.keys(n.geometry.attributes).sort().map(s=>s+n.geometry.attributes[s].itemSize).join(","),a=[n.material.uuid,n.castShadow,n.receiveShadow,n.renderOrder,n.visible,r,Object.keys(n.geometry.morphAttributes).length].join("|");t.has(a)||t.set(a,[]),t.get(a).push(n)}),t.forEach(n=>{if(n.length<2)return;let r=n.map(o=>{let c=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone(),l=new Me().multiplyMatrices(e,o.matrixWorld);return c.clearGroups(),c.applyMatrix4(l),l.determinant()<0?A1(c):c}),a=qn(r);if(r.forEach(o=>o.dispose()),!a)return;let s=new te(a,n[0].material);s.castShadow=n[0].castShadow,s.receiveShadow=n[0].receiveShadow,s.renderOrder=n[0].renderOrder,i.add(s),n.forEach(o=>o.parent.remove(o))}),i}function i0(i){let e=new Map;i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.matrixWorld.determinant()<0)return;let c=Array.isArray(o.material)?o.material.map(h=>h.uuid).join(","):o.material.uuid,l=[o.geometry.uuid,c,o.castShadow,o.receiveShadow,o.renderOrder].join("|");e.has(l)||e.set(l,[]),e.get(l).push(o)});let t=[];e.forEach(o=>{if(o.length<2)return;let c=new Ft(o[0].geometry,o[0].material,o.length);c.castShadow=o[0].castShadow,c.receiveShadow=o[0].receiveShadow,c.renderOrder=o[0].renderOrder,c.frustumCulled=!1;let l=o.map(h=>{let u=new it;return u.position.copy(h.position),u.quaternion.copy(h.quaternion),u.scale.copy(h.scale),u.visible=h.visible,h.parent.add(u),[...h.children].forEach(d=>u.add(d)),h.parent.remove(h),u});i.add(c),t.push([c,l])});let n=new Me,r=new Me,a=new Me().makeScale(0,0,0),s=o=>{for(let c=o;c&&c!==i;c=c.parent)if(!c.visible)return!1;return!0};return i.sync=()=>{i.updateMatrixWorld(!0),n.copy(i.matrixWorld).invert(),t.forEach(([o,c])=>{c.forEach((l,h)=>o.setMatrixAt(h,s(l)?r.multiplyMatrices(n,l.matrixWorld):a)),o.instanceMatrix.needsUpdate=!0})},i.sync(),i}function A1(i){return Object.values(i.attributes).forEach(e=>{let t=e.array,n=e.itemSize;for(let r=0;r<e.count;r+=3)for(let a=0;a<n;a++){let s=(r+1)*n+a,o=(r+2)*n+a,c=t[s];t[s]=t[o],t[o]=c}e.needsUpdate=!0}),i}function r0(i){let e=i.index?i.toNonIndexed():i.clone();return e.applyMatrix4(new Me().makeScale(-1,1,1)),A1(e)}var n0=(i,e,t,n,r)=>{let[a,s]=i[e],[o,c]=i[t],l=o-a,h=c-s,u=Math.hypot(l,h)||1e-9,d=0,p=-1;for(let f=e+1;f<t;f++){let m=Math.abs(h*(i[f][0]-a)-l*(i[f][1]-s))/u;m>d&&(d=m,p=f)}d>n&&(r.add(p),n0(i,e,p,n,r),n0(i,p,t,n,r))};function $5(i,e){if(i.length<=5)return i;let t=0,n=-1;i.forEach((c,l)=>{let h=Math.hypot(c[0]-i[0][0],c[1]-i[0][1]);h>n&&(n=h,t=l)});let r=i.slice(0,t+1),a=i.slice(t).concat([i[0]]),s=[];[r,a].forEach(c=>{let l=new Set([0,c.length-1]);n0(c,0,c.length-1,e,l),[...l].sort((h,u)=>h-u).forEach(h=>s.push(c[h]))});let o=s.filter((c,l)=>l===0||Math.hypot(c[0]-s[l-1][0],c[1]-s[l-1][1])>1e-6);return o.length>1&&Math.hypot(o[0][0]-o[o.length-1][0],o[0][1]-o[o.length-1][1])<1e-6&&o.pop(),o.length>=3?o:i}function ex(i,e=.09){return new _i(i.map(t=>new Ue($5(t,e).map(([n,r])=>new ie(n,r)))))}function R1(i,e,t,n,r,{dist:a=13,tol:s=.09,move:o=.5}={}){let c=n.length,l=new it,h={r:0,g:0,b:0},u=new Float32Array(c*16),d=new Float32Array(c*3),p=new Float32Array(c*3),f=t.clone();f.side=lt;let m={setRGB(y,T,_){return h.r=y,h.g=T,h.b=_,this},set(y){let T=new fe(y);return h.r=T.r,h.g=T.g,h.b=T.b,this}};n.forEach((y,T)=>{r(l,m,y,T),l.updateMatrix(),l.matrix.toArray(u,T*16),d[T*3]=h.r,d[T*3+1]=h.g,d[T*3+2]=h.b,p[T*3]=l.position.x,p[T*3+1]=l.position.y,p[T*3+2]=l.position.z});let v=(y,T)=>{let _=new Ft(y,T,c);return _.instanceColor=new Ki(new Float32Array(c*3),3),_.castShadow=_.receiveShadow=!0,_.frustumCulled=!1,_.count=0,_},g=v(i,t),b=v(ex(e,s),f),x={x:1e9,y:0,z:0},M=a*a;return{near:g,far:b,dist:a,update(y,T=!1){if(!T&&Math.hypot(y.x-x.x,y.y-x.y,y.z-x.z)<o)return!1;x.x=y.x,x.y=y.y,x.z=y.z;let _=0,w=0,A=g.instanceMatrix.array,C=g.instanceColor.array,I=b.instanceMatrix.array,G=b.instanceColor.array;for(let D=0;D<c;D++){let W=p[D*3]-y.x,V=p[D*3+1]-y.y,z=p[D*3+2]-y.z;W*W+V*V+z*z<M?(A.set(u.subarray(D*16,D*16+16),_*16),C.set(d.subarray(D*3,D*3+3),_*3),_++):(I.set(u.subarray(D*16,D*16+16),w*16),G.set(d.subarray(D*3,D*3+3),w*3),w++)}return g.count=_,b.count=w,[g,b].forEach(D=>{D.instanceMatrix.needsUpdate=!0,D.instanceColor.needsUpdate=!0}),!0}}}var Tt=(i,e,t)=>new st(i,e,t);function Ee(i,e,t=0,n=0,r=0,a=0){let s=new te(i,e);return s.position.set(t,n,r),s.rotation.y=a,s.castShadow=s.receiveShadow=!0,s}function tx(i){let e=new le,t=i("#8c4b2f"),n=i("#efe6d4"),r=i("#5a4c43"),a=i("#c9a14a",null,{metalness:.4,roughness:.5}),s=0;e.add(Ee(Tt(.46,.06,.46),i("#bfb3a0"),0,.03)),s=.06;for(let o=0;o<5;o++){let c=.3-o*.03,l=.15;e.add(Ee(Tt(c,l,c),n,0,s+l/2)),e.add(Ee(Tt(c+.02,.025,c+.02),t,0,s+l-.01));let h=new Mn((c+.24)*.82,.1,4,1);h.rotateY(Math.PI/4),e.add(Ee(h,r,0,s+l+.035)),s+=l+.06}e.add(Ee(new ge(.012,.012,.32,6),a,0,s+.16));for(let o=0;o<6;o++)e.add(Ee(new ge(.03,.03,.012,10),a,0,s+.04+o*.04));return e}function nx(i,e=1){let t=new le,n=i("#c8321e"),r=i("#2a2522"),a=new ge(.018*e,.022*e,.32*e,8);return t.add(Ee(a,n,-.11*e,.16*e),Ee(a,n,.11*e,.16*e)),t.add(Ee(Tt(.3*e,.03*e,.035*e),n,0,.26*e)),t.add(Ee(Tt(.38*e,.03*e,.045*e),r,0,.33*e)),t.add(Ee(Tt(.34*e,.025*e,.04*e),n,0,.305*e)),t}function ix(i){let e=new le,t=11;for(let n=0;n<t;n++){let r=n/(t-1),a=Math.sin(r*Math.PI*1.6)*.32,s=r*1.5,o=nx(i,1.25);o.position.set(a,0,s),o.rotation.y=Math.cos(r*Math.PI*1.6)*.6,e.add(o)}return e}function rx(i,e=2.4){let t=new le,n=i("#f2efe8"),r=i("#d9d4ca"),a=i("#bcb6aa"),s=24,o=c=>[(c-.5)*e,.22+Math.exp(-((c-.62)**2)/.006)*.16,Math.sin(c*Math.PI)*.18];for(let c=0;c<s;c++){let l=c/(s-1),[h,u,d]=o(l),[p,f]=o((c+1)/(s-1)),m=Ee(Tt(e/s+.01,.035,.11),n,h,u,d);m.rotation.z=Math.atan2(f-u,p-h),t.add(m),c%2===0&&t.add(Ee(new ge(.018,.024,u,6),r,h,u/2,d)),t.add(Ee(Tt(e/s,.02,.012),a,h,u+.03,d+.05))}return t}function ax(i){let e=new le,t=i("#f4f1ea"),n=i("#e6e2da"),r=i("#a8825a"),a=1.6,s=20,o=u=>[(u-.5)*a,.14+Math.sin(u*Math.PI)*.06];for(let u=0;u<s;u++){let d=u/(s-1),[p,f]=o(d),[m,v]=o((u+1)/(s-1)),g=Ee(Tt(a/s+.01,.025,.1),t,p,f,0);g.rotation.z=Math.atan2(v-f,m-p),e.add(g)}let c=.42,l=[c-.16,.95],h=new te(new ge(.018,.05,.9,6),t);h.position.set(c-.08,.5,.06),h.rotation.z=.17,h.castShadow=!0,e.add(h),e.add(Ee(Tt(.16,.08,.16),t,c,.04,.06));for(let u=0;u<9;u++){let[d,p]=o(.08+u*.06),f=new S(l[0],l[1]-u*.025,.06),m=new S(d,p+.012,0),v=new te(new ge(.003,.003,f.distanceTo(m),4),n);v.position.copy(f).add(m).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new S(0,1,0),m.clone().sub(f).normalize()),e.add(v)}return[-1,1].forEach(u=>{for(let d=0;d<4;d++)e.add(Ee(new ge(.012,.012,.16,5),r,u*(a/2+.05+d*.1),.06,0));e.add(Ee(Tt(.42,.02,.12),r,u*(a/2+.2),.14,0))}),e}function C1(i,e=["#7a5a43"]){let t=new le,n=1.6,r=[0,.36,.78,1.25],a=s=>.42*Math.pow(1-s/n,1.6)+.02;for(let s=0;s<16;s++){let o=s/16*n,c=(s+1)/16*n,l=i(e[s%e.length]);if([[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,u])=>{let d=new S(h*a(o),o,u*a(o)),p=new S(h*a(c),c,u*a(c)),f=new te(new ge(.012,.016,d.distanceTo(p),5),l);f.position.copy(d).add(p).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new S(0,1,0),p.clone().sub(d).normalize()),f.castShadow=!0,t.add(f)}),s%2===0){let h=a(o)*2;[[0,1],[0,-1],[1,0],[-1,0]].forEach(([u,d])=>t.add(Ee(Tt(u?.008:h,.008,d?.008:h),l,u*a(o),o+.02,d*a(o))))}}return r.slice(1).forEach((s,o)=>t.add(Ee(Tt(a(s)*2.4,.025,a(s)*2.4),i(e[o%e.length]),0,s))),t.add(Ee(new ge(.004,.01,.3,5),i("#d8dcd8"),0,n+.15)),t}function P1(i,e="#c0392b"){let t=new le,n=i(e),r=i("#8a8f8c"),a=2.4,s=.62,o=.62,c=.16;t.add(Ee(Tt(a,.03,.1),r,0,c,0)),[-s,s].forEach(h=>{[-.06,.06].forEach(u=>t.add(Ee(Tt(.035,o,.03),n,h,o/2,u))),[.32,.5,o-.02].forEach(u=>t.add(Ee(Tt(.03,.03,.15),n,h,u,0)))});let l=h=>{let u=Math.abs(h);return u<=s?c+.06+(o-c-.06)*(u/s)**2:o-(u-s)/(a/2-s)*(o-c-.02)};return[-.06,.06].forEach(h=>{for(let u=0;u<40;u++){let d=-a/2+u/40*a,p=-a/2+(u+1)/40*a,f=new S(d,l(d),h),m=new S(p,l(p),h),v=new te(new ge(.006,.006,f.distanceTo(m),4),n);v.position.copy(f).add(m).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new S(0,1,0),m.clone().sub(f).normalize()),t.add(v),u%2===0&&l(d)>c+.03&&t.add(Ee(new ge(.002,.002,l(d)-c,3),n,d,(l(d)+c)/2,h))}}),t}function sx(i){let e=new le,t=i("#7f9c95"),n=i("#5d7a74"),r=i("#9fb3ad");e.add(Ee(Tt(.34,.36,.34),r,0,.18)),e.add(Ee(new ge(.15,.2,.14,4,1).rotateY(Math.PI/4),n,0,.43));let a=.5;for(let s=0;s<8;s++){let o=new ge(.17,.12,.16,4,1);o.rotateY(Math.PI/4),e.add(Ee(o,s%2?t:n,0,a+.08)),a+=.165}return e.add(Ee(new ge(.06,.1,.12,4).rotateY(Math.PI/4),n,0,a+.06)),e.add(Ee(new ge(.008,.02,.4,6),i("#d8dcd8"),0,a+.32)),e}var Et=(i,e,t)=>new S(i,e,t),kn=(i,e,t)=>Et(Math.cos(e)*i,t,Math.sin(e)*i);function Lt(i,e,t,n=.006,r=4){let a=new te(new ge(n,n,e.distanceTo(t),r),i);return a.position.copy(e).add(t).multiplyScalar(.5),a.quaternion.setFromUnitVectors(Et(0,1,0),t.clone().sub(e).normalize()),a}function Un(i){i.updateMatrixWorld(!0);let e=new Map,t=new le;return i.traverse(n=>{if(!n.isMesh)return;let r=n.material.color.getHex()+"|"+n.material.opacity;e.has(r)||e.set(r,[n.material,[]]),e.get(r)[1].push((n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrixWorld))}),e.forEach(([n,r])=>{let a=new te(qn(r),n);a.castShadow=a.receiveShadow=!0,t.add(a),r.forEach(s=>s.dispose())}),t}function L1(i,{H:e=1.8,r0:t=.26,r1:n=.13,turn:r=2.3,n:a=24,col:s="#e2e4e1",cross:o=!1,core:c="#b9c1c6",deck:l=null,mast:h=.5}={}){let u=new le,d=i(s),p=m=>kn(t,0,0).lerp(kn(n,r,e),m).setY(0).length(),f=9;for(let m=0;m<=1;m+=.02)f=Math.min(f,p(m));(o?[1,-1]:[1]).forEach(m=>{for(let v=0;v<a;v++){let g=v/a*Math.PI*2;u.add(Lt(d,kn(t,g,0),kn(n,g+m*r,e),.008))}});for(let m=1;m<14;m++)u.add(Ee(new hn(p(m/14),.005,4,40).rotateX(Math.PI/2),d,0,m/14*e));return u.add(Ee(new ge(f*.6,f*.7,e,12),i(c),0,e/2)),l?u.add(Ee(new ge(n*1.05,n*.9,.09,24),i(l),0,e-.05),Ee(new ge(n*.5,n*1.1,.04,24),i(l),0,e+.02)):u.add(Ee(new hn(n,.012,4,40).rotateX(Math.PI/2),d,0,e)),u.add(Ee(new ge(.006,.022,h,6),i("#d8dcd8"),0,e+h/2)),Un(u)}function ox(i){let e=new le,t=i("#eceeed"),n=1.05,r=.4,a=s=>s<r?.05+.2*((r-s)/r)**1.8:.05+.09*((s-r)/(n-r))**1.5;for(let s=0;s<3;s++)for(let o of[-.2,.2]){let c=s/3*Math.PI*2+o;for(let l=0;l<12;l++){let h=l/12*n,u=(l+1)/12*n;e.add(Lt(t,kn(a(h),c,h),kn(a(u),c,u),.011,5))}}return e.add(Ee(new hn(a(r)+.006,.01,4,24).rotateX(Math.PI/2),t,0,r),Ee(new ge(.032,.032,n,8),t,0,n/2),Ee(new ge(.28,.3,.03,24),i("#b9b4aa"),0,.015)),e.add(Ee(new ge(.17,.13,.05,28),i("#8fa3ad"),0,n),Ee(new ge(.23,.17,.04,28),t,0,n+.045),Ee(new hn(.24,.008,4,40).rotateX(Math.PI/2),t,0,n+.03),Ee(new ge(.04,.2,.06,28),i("#d9d6cf"),0,n+.095),Ee(new ge(.004,.01,.28,6),t,0,n+.26)),Un(e)}function cx(i){let e=new le,t=i("#dfe7ec"),n=i("#7d97a8"),r=1.9,a=10,s=12,o=Math.PI/a,c=l=>.16*(1-l/r)**1.1+.05;for(let l=0;l<s;l++){let h=l/s*r,u=(l+1)/s*r,d=l%2*o;for(let p=0;p<a;p++){let f=p/a*Math.PI*2+d;e.add(Lt(t,kn(c(h),f,h),kn(c(u),f+o,u),.005),Lt(t,kn(c(h),f,h),kn(c(u),f-o,u),.005))}e.add(Ee(new hn(c(u),.004,3,30).rotateX(Math.PI/2),t,0,u))}for(let l=0;l<3;l++){let h=l/3*Math.PI*2+Math.PI/2;e.add(Lt(t,kn(.26,h,0),kn(c(.4),h,.4),.018,5))}return e.add(Ee(new ge(c(r)*.7,c(0)*.5,r,12),i("#cdd7dd"),0,r/2)),[[.55,.06,.08],[.71,.035,.05]].forEach(([l,h,u])=>e.add(Ee(new ge(c(l*r)+h,c(l*r)+h*.6,u,24),n,0,l*r))),e.add(Ee(new ge(.008,.03,.36,8),t,0,r+.18)),Un(e)}function I1(i,{col:e="#7f868b",pylon:t="#cbbd9f",span:n=1.6,len:r=2.6}={}){let a=new le,s=i(e),o=.16,c=n/2,l=16,h=d=>.02+.35*(1-(d/c)**2),u=d=>.18+.25*(1-(d/c)**2);[-.07,.07].forEach(d=>{for(let p=0;p<l;p++){let f=-c+p/l*n,m=-c+(p+1)/l*n;a.add(Lt(s,Et(f,h(f),d),Et(m,h(m),d),.012),Lt(s,Et(f,u(f),d),Et(m,u(m),d),.01),Lt(s,Et(f,h(f),d),Et(f,u(f),d),.006),Lt(s,Et(f,h(f),d),Et(m,u(m),d),.005)),h(f)>o+.02&&a.add(Lt(s,Et(f,h(f),d),Et(f,o,d),.003))}a.add(Lt(s,Et(c,h(c),d),Et(c,u(c),d),.006))});for(let d=0;d<=l;d+=2){let p=-c+d/l*n;a.add(Lt(s,Et(p,u(p),-.07),Et(p,u(p),.07),.005))}return a.add(Ee(Tt(r,.03,.16),i("#8f9290"),0,o,0)),[-1,1].forEach(d=>{t&&[-.11,.11].forEach(p=>a.add(Ee(Tt(.1,.3,.06),i(t),d*(c+.06),.15,p)));for(let p=c+.2;p<r/2;p+=.14)a.add(Ee(Tt(.03,o,.1),i("#cfc9bd"),d*p,o/2,0))}),Un(a)}function lx(i,{col:e="#c0392b",spans:t=10,sw:n=.24,h:r=.09}={}){let a=new le,s=i(e),o=i("#cfc9bd"),c=.1,l=t*n;for(let h=0;h<=t;h++)a.add(Ee(new ge(.02,.026,c,6),o,-l/2+h*n,c/2,0));for(let h=0;h<t;h++){let u=-l/2+h*n;[-.045,.045].forEach(d=>{for(let p=0;p<4;p++){let f=Et(u+(p+.5)/4*n,c+r,d);a.add(Lt(s,Et(u+p/4*n,c,d),f,.004),Lt(s,f,Et(u+(p+1)/4*n,c,d),.004))}a.add(Lt(s,Et(u,c,d),Et(u+n,c,d),.005),Lt(s,Et(u+n/8,c+r,d),Et(u+n*7/8,c+r,d),.005))});for(let d=0;d<4;d++){let p=u+(d+.5)/4*n;a.add(Lt(s,Et(p,c+r,-.045),Et(p,c+r,.045),.003))}}return a.add(Ee(Tt(l,.012,.09),i("#8f9290"),0,c,0)),Un(a)}function hx(i){let e=new le,t=i("#cdbf9f"),n=i("#5f6b70"),r=i("#6d9fc1"),a=.3,s=.62,o=.12,c=.65;return e.add(Ee(Tt(2*(a+c)+.1,.03,.14),i("#8f9290"),0,o,0)),[-a,a].forEach(l=>{e.add(Ee(Tt(.16,s,.16),t,l,s/2+.02,0),Ee(Tt(.22,.06,.24),t,l,.03,0)),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,u])=>e.add(Ee(new ge(.022,.022,s+.06,8),t,l+h*.08,(s+.06)/2+.02,u*.08),Ee(new Mn(.03,.09,8),n,l+h*.08,s+.125,u*.08))),e.add(Ee(new Mn(.1,.16,4).rotateY(Math.PI/4),n,l,s+.1,0))}),[-.05,.05].forEach(l=>e.add(Ee(Tt(a*2-.16,.05,.035),r,0,s-.06,l))),[-1,1].forEach(l=>{e.add(Ee(Tt(.06,.14,.16),t,l*(a+c),o+.05,0)),[-.06,.06].forEach(h=>{let u=Et(l*a,s-.12,h);for(let d=1;d<=10;d++){let p=d/10,f=l*(a+p*c),m=(s-.12)*(1-p)+(o+.1)*p-Math.sin(p*Math.PI)*.1,v=Et(f,m,h);e.add(Lt(r,u,v,.009)),d<10&&e.add(Lt(r,v,Et(f,o,h),.003)),u=v}})}),Un(e)}function ux(i){let e=new le,t=new le,n=new le,r=i("#7a3b2a"),a=i("#e9e2d2");t.add(Ee(new ge(.15,.18,.3,8),i("#8a4b38"),0,.15),Ee(new ge(.1,.15,.5,8),i("#3f3b36"),0,.55),Ee(new ge(.21,.21,.015,8),r,0,.32),Ee(new et(.11,10,6,0,Math.PI*2,0,Math.PI/2).scale(1,.8,1.25),i("#5a5048"),0,.8));for(let c=0;c<4;c++){let l=new le;l.add(Ee(Tt(.018,.62,.012),r,0,.32),Ee(Tt(.1,.5,.004),a,.06,.36));for(let h=0;h<8;h++)l.add(Ee(Tt(.11,.006,.008),r,.06,.1+h*.07));l.rotation.z=c*Math.PI/2,n.add(l)}let s=new le,o=Un(n);return s.position.set(0,.83,.15),s.rotation.x=-.12,s.add(o),e.add(Un(t),s),e.userData.spin=o,e}function dx(i){let e=new le,t=i("#f3f1ec"),n=16,r=.62,a=s=>s<.74?.08+.26*((.74-s)/.74)**1.5:.08+.09*((s-.74)/.26)**1.4;for(let s=0;s<n;s++){let o=s/n*Math.PI*2;for(let c=0;c<10;c++)e.add(Lt(t,kn(a(c/10),o,c/10*r),kn(a((c+1)/10),o,(c+1)/10*r),.02,5))}return e.add(Ee(new si(Array.from({length:11},(s,o)=>new ie(a(o/10)*.94,o/10*r*.96)),32),i("#86a9c7",null,{transparent:!0,opacity:.75,side:lt}))),e.add(Ee(new ge(.34,.36,.03,32),i("#d9d4ca"),0,.015),Ee(new Ji(.4,.62,40).rotateX(-Math.PI/2),i("#5d8fb0"),0,.006)),Un(e)}function px(i){let e=new le,t=i("#a3a6a2"),n=.62,r=.5,a=30,s=c=>.26+.04*Math.cos(2*c),o=(c,l,h)=>Et(Math.cos(c)*n*l,h,Math.sin(c)*r*l);for(let c=0;c<a;c++){let l=c/a*Math.PI*2;[.55,-.55,.9].forEach(h=>e.add(Lt(t,o(l,.92,0),o(l+h,1,s(l+h)),.009))),e.add(Lt(t,o(l,1,s(l)),o(l+.7,.62,s(l+.7)+.02),.008),Lt(t,o(l,1,s(l)),o(l-.4,.62,s(l-.4)+.02),.008))}for(let c=0;c<48;c++){let l=c/48*Math.PI*2,h=(c+1)/48*Math.PI*2;e.add(Lt(t,o(l,1,s(l)),o(h,1,s(h)),.01),Lt(t,o(l,.62,s(l)+.02),o(h,.62,s(h)+.02),.008))}return e.add(Ee(new ge(1,.86,1,40,1,!0).scale(n*.9,.24,r*.9),i("#b4412f",null,{side:lt}),0,.12)),e.add(Ee(new ge(1,1,.01,40).scale(n*.5,1,r*.5),i("#6f9a55"),0,.01)),Un(e)}var fx=[[35.55895,135.187093,79.7],[35.559791,135.187298,50.7],[35.560573,135.187644,46.3],[35.561615,135.187367,80.8],[35.562486,135.187497,78.7],[35.563195,135.18802,88.6],[35.56406,135.188165,66.7],[35.564856,135.188478,61.5],[35.565549,135.189039,45.5],[35.566311,135.189431,33],[35.567021,135.189951,38.7],[35.567697,135.19055,14.3],[35.568465,135.19093,35.8],[35.569219,135.191344,28.7],[35.56991,135.191908,38.5],[35.570657,135.192339,29],[35.571322,135.192966,38.8],[35.57208,135.19337,30.3],[35.572737,135.194015,50.7],[35.573469,135.194481,48.9],[35.574084,135.195228,47.4],[35.574802,135.195729,41.6],[35.575444,135.19641,46.3],[35.576082,135.197102,38.8],[35.576735,135.197757,36.4],[35.577488,135.198174,63.8]],mx=[[35.55796,135.18538],[35.55857,135.18623]],gx=[{a:[35.5578,135.18504],b:[35.55796,135.18538],col:"#8c949a"},{a:[35.55857,135.18623],b:[35.55887,135.18657],col:"#d9d2c4"}],la={center:[35.5682,135.1925],viewpoint:[35.5863,135.196],south:[35.5578,135.185],north:[35.5775,135.1982]};function D1(i,e={}){let n=la.center,r=Math.cos(n[0]*Math.PI/180),a=e.geo||((D,W)=>[(D-n[1])*r*11.1,(W-n[0])*11.1]),s=e.widen??1.4,o=e.top??.014,c=11.1/111e3,l=new le,h=a.mag||(()=>1),u=fx.map(([D,W,V])=>({p:a(W,D),w:Math.max(.009,V*c*s*h(W,D)),k:h(W,D)})),d=D=>{let W=u[Math.max(0,D-1)].p,V=u[Math.min(u.length-1,D+1)].p,z=V[0]-W[0],j=V[1]-W[1],Y=Math.hypot(z,j)||1;return[-j/Y,z/Y]},p=D=>{let W=[],V=[];u.forEach((j,Y)=>{let[Z,X]=d(Y);W.push(new ie(j.p[0]+Z*j.w*D,j.p[1]+X*j.w*D)),V.push(new ie(j.p[0]-Z*j.w*D,j.p[1]-X*j.w*D))});let z=(j,Y,Z)=>{let[X,O]=d(Y),J=O*Z,ne=-X*Z;return Array.from({length:5},($,L)=>{let R=(L+1)/6*Math.PI;return new ie(j.p[0]+(X*Math.cos(R)+J*Math.sin(R))*j.w*D,j.p[1]+(O*Math.cos(R)+ne*Math.sin(R))*j.w*D)})};return new Ue([...W,...z(u[u.length-1],u.length-1,-1),...V.reverse(),...z(u[0],0,1).reverse()])},f=(D,W,V,z,j)=>{let Y=new St(D,{depth:V-W-j*2,bevelEnabled:j>0,bevelThickness:j,bevelSize:j,bevelSegments:2,curveSegments:4});Y.rotateX(-Math.PI/2),Y.translate(0,W+j,0);let Z=new te(Y,z);return Z.castShadow=Z.receiveShadow=!0,l.add(Z),Z};f(p(1),-.03,o,[i("#f1e7c8",e.paper),i("#d8c79c",e.paper)],.004),f(p(.6),o-.004,o+.004,i("#5f7a4e",e.paper),.002);let m=new yn(u.map(D=>new S(D.p[0],o+.005,-D.p[1]))),v=new oi(m,80,.0016,4,!1);v.scale(1,.4,1);let g=new te(v,i("#f1e9d4"));l.add(g);let b=new St(new Ue([[-.09,0],[.09,0],[.09,.22],[.95,.22],[.42,.72],[.75,.68],[.3,1.18],[.52,1.14],[0,1.75],[-.52,1.14],[-.3,1.18],[-.75,.68],[-.42,.72],[-.95,.22],[-.09,.22]].map(([D,W])=>new ie(D,W))),{depth:.04,bevelEnabled:!1});b.translate(0,0,-.02);let x=[],M=e.treeStep??.0032,E=e.treeSize??.0085,y=2701,T=()=>(y=y*16807%2147483647,y/2147483647);for(let D=0;D<u.length-1;D++){let W=u[D],V=u[D+1],z=Math.hypot(V.p[0]-W.p[0],V.p[1]-W.p[1]),j=Math.max(1,Math.round(z/M));for(let Y=0;Y<j;Y++){let Z=Y/j,X=W.p[0]+(V.p[0]-W.p[0])*Z,O=W.p[1]+(V.p[1]-W.p[1])*Z,J=W.w+(V.w-W.w)*Z,[ne,$]=d(D),L=W.k+(V.k-W.k)*Z;[-.5,-.25,0,.25,.5].forEach(R=>x.push([X+ne*J*R+(T()-.5)*.002,O+$*J*R+(T()-.5)*.002,E*(.75+T()*.5)*(.8+.1*L)]))}}let _=["#3d5a3b","#4b6a45","#33503a","#456244"],w=new Ft(b,i("#fff",e.paper),x.length*2),A=new it,C=new fe;x.forEach(([D,W,V],z)=>{let j=T()*Math.PI,Y=_[z%_.length];[j,j+Math.PI/2].forEach((Z,X)=>{A.position.set(D,o+.003,-W),A.rotation.set(0,Z,0),A.scale.setScalar(V),A.updateMatrix(),w.setMatrixAt(z*2+X,A.matrix),w.setColorAt(z*2+X,C.set(Y))})}),w.castShadow=w.receiveShadow=!0,l.add(w);{let[D,W]=mx.map(([X,O])=>a(O,X)),V=W[0]-D[0],z=W[1]-D[1],j=Math.hypot(V,z),Y=.007,Z=new Ue([[D[0]-z/j*Y,D[1]+V/j*Y],[W[0]-z/j*Y,W[1]+V/j*Y],[W[0]+z/j*Y,W[1]-V/j*Y],[D[0]+z/j*Y,D[1]-V/j*Y]].map(([X,O])=>new ie(X,O)));f(Z,-.03,o*.85,[i("#ecdfbd",e.paper),i("#d8c79c",e.paper)],.004)}let I=new le;gx.forEach(({a:D,b:W,col:V})=>{let z=a(D[1],D[0]),j=a(W[1],W[0]),Y=(z[0]+j[0])/2,Z=(z[1]+j[1])/2,X=Math.max(.018,Math.hypot(j[0]-z[0],j[1]-z[1])*1.6),O=new le;O.position.set(Y,o+.002,-Z),O.rotation.y=Math.atan2(j[1]-z[1],j[0]-z[0]),I.add(O);let J=new te(new st(X,.006,.01),i(V));J.castShadow=!0,O.add(J),[-1,1].forEach(ne=>{let $=new te(new st(X,.006,.0015),i(V));$.position.set(0,.006,ne*.005),O.add($)}),[-.35,.35].forEach(ne=>{let $=new te(new st(.003,o+.03,.008),i("#8a857c"));$.position.set(ne*X,-(o+.03)/2,0),O.add($)})}),I.updateMatrixWorld(!0);let G=new Map;return I.traverse(D=>{if(!D.isMesh)return;let W=D.material.color.getHexString()+"|"+D.castShadow;G.has(W)||G.set(W,[]),G.get(W).push(D.geometry.toNonIndexed().applyMatrix4(D.matrixWorld))}),G.forEach((D,W)=>{let[V,z]=W.split("|"),j=new te(qn(D),i("#"+V));j.castShadow=z==="true",l.add(j)}),l.userData={kind:"amanohashidate",trees:x.length,south:a(la.south[1],la.south[0]),north:a(la.north[1],la.north[0]),viewpoint:a(la.viewpoint[1],la.viewpoint[0])},l.position.y=e.base??0,l}var pa={center:[35.5682,135.1925],rkm:7.5,path:[[35.62005,135.24416],[35.6198,135.24413],[35.61972,135.24385],[35.6195,135.24376],[35.61942,135.24348],[35.6192,135.24339],[35.61912,135.24311],[35.6189,135.24302],[35.61882,135.24274],[35.6186,135.24265],[35.61852,135.24237],[35.6183,135.24228],[35.61822,135.242],[35.618,135.24191],[35.61792,135.24164],[35.6177,135.24151],[35.61762,135.24096],[35.61738,135.24067],[35.6173,135.23984],[35.6171,135.23953],[35.61698,135.23762],[35.61678,135.23741],[35.6167,135.23685],[35.61648,135.23667],[35.6164,135.23611],[35.61618,135.23599],[35.6161,135.23571],[35.61588,135.23562],[35.6158,135.23534],[35.61558,135.23525],[35.61552,135.23502],[35.61504,135.2349],[35.61481,135.2346],[35.61413,135.23451],[35.61391,135.23426],[35.61278,135.23417],[35.61236,135.23387],[35.61141,135.23375],[35.6113,135.2335],[35.61108,135.23341],[35.611,135.23313],[35.61078,135.23304],[35.6107,135.23276],[35.61048,135.23267],[35.6104,135.23239],[35.61018,135.2323],[35.6101,135.23202],[35.60988,135.23193],[35.6098,135.23165],[35.60962,135.23158],[35.6095,135.23095],[35.60928,135.23082],[35.6092,135.23055],[35.60898,135.23045],[35.6089,135.23018],[35.60868,135.23009],[35.6086,135.22981],[35.60842,135.22974],[35.6083,135.22911],[35.60808,135.22898],[35.608,135.2287],[35.60778,135.22861],[35.6077,135.22833],[35.60748,135.22824],[35.6074,135.22796],[35.60718,135.22787],[35.60712,135.22765],[35.60661,135.2275],[35.60652,135.22725],[35.6063,135.22716],[35.60622,135.22688],[35.606,135.22679],[35.60592,135.22651],[35.6057,135.22642],[35.60562,135.22614],[35.6054,135.22605],[35.60532,135.22584],[35.60328,135.2256],[35.6032,135.22538],[35.60298,135.22529],[35.6029,135.22501],[35.60268,135.22492],[35.6026,135.22465],[35.60238,135.22455],[35.6023,135.22428],[35.60208,135.22418],[35.602,135.22391],[35.60178,135.22382],[35.60178,135.22356],[35.602,135.2234],[35.60205,135.22288],[35.60198,135.22245],[35.60178,135.22228],[35.6017,135.22173],[35.60148,135.2216],[35.6014,135.22133],[35.6012,135.22122],[35.60112,135.22067],[35.60088,135.22044],[35.60082,135.21993],[35.60058,135.2197],[35.6005,135.21915],[35.6003,135.21904],[35.60022,135.21877],[35.6,135.21864],[35.5999,135.21804],[35.59968,135.21791],[35.5996,135.21764],[35.59942,135.21757],[35.5993,135.21693],[35.5991,135.21683],[35.59902,135.21655],[35.5988,135.21643],[35.59872,135.21587],[35.59848,135.21564],[35.5984,135.21509],[35.5982,135.21499],[35.59812,135.21471],[35.5979,135.21462],[35.59782,135.21434],[35.5976,135.21425],[35.59751,135.214],[35.59679,135.21388],[35.59645,135.2136],[35.59465,135.21346],[35.59446,135.21321],[35.59401,135.21312],[35.59386,135.21284],[35.59341,135.21275],[35.5933,135.21247],[35.5931,135.2124],[35.59302,135.21213],[35.5928,135.21204],[35.59272,135.21176],[35.5925,135.21167],[35.59242,135.21139],[35.5922,135.21126],[35.59208,135.21063],[35.5919,135.21056],[35.59182,135.21028],[35.5916,135.21019],[35.59152,135.20991],[35.5913,135.20982],[35.59122,135.20955],[35.591,135.20945],[35.59089,135.20918],[35.59044,135.20908],[35.59026,135.20878],[35.58984,135.20872],[35.58966,135.20842],[35.58921,135.20832],[35.58912,135.20807],[35.5889,135.20798],[35.58877,135.2077],[35.58803,135.20759],[35.5879,135.20731],[35.5877,135.20724],[35.58751,135.20696],[35.58638,135.20687],[35.58601,135.20659],[35.58549,135.20654],[35.58479,135.20659],[35.5846,135.20687],[35.58442,135.20689],[35.58432,135.20659],[35.5841,135.2065],[35.58397,135.20623],[35.58319,135.20608],[35.5831,135.20583],[35.58288,135.20574],[35.5828,135.20546],[35.58258,135.20537],[35.58248,135.20508],[35.5823,135.2051],[35.58218,135.20541],[35.582,135.2054],[35.58192,135.20512],[35.5817,135.20503],[35.58162,135.20475],[35.5814,135.20466],[35.58132,135.20441],[35.58081,135.20427],[35.5807,135.20399],[35.58048,135.2039],[35.58042,135.20364],[35.5802,135.20355],[35.58012,135.20327],[35.5799,135.20318],[35.57982,135.20291],[35.5796,135.20278],[35.57952,135.20223],[35.57928,135.202],[35.5792,135.20144],[35.57898,135.20132],[35.5789,135.20104],[35.57868,135.20095],[35.5786,135.20067],[35.57838,135.20058],[35.5783,135.2003],[35.57808,135.20021],[35.578,135.19993],[35.57782,135.19986],[35.57776,135.19933],[35.57802,135.1991],[35.5781,135.19883],[35.57832,135.19873],[35.5784,135.19846],[35.57862,135.19836],[35.5787,135.19809],[35.57892,135.198],[35.579,135.19772],[35.57922,135.19763],[35.5793,135.19735],[35.57952,135.19726],[35.5796,135.19698],[35.57982,135.19689],[35.5799,135.19661],[35.58012,135.19652],[35.5802,135.19624],[35.58042,135.19615],[35.5805,135.19587],[35.58072,135.19578],[35.5808,135.19551],[35.581,135.1954],[35.58108,135.19485],[35.58132,135.1945],[35.5813,135.1934],[35.58108,135.1932],[35.581,135.19292],[35.58078,135.19283],[35.5807,135.19256],[35.58048,135.19246],[35.5804,135.19219],[35.58018,135.19209],[35.5801,135.19182],[35.57988,135.19173],[35.5798,135.19145],[35.57962,135.19136],[35.57952,135.19048],[35.57928,135.19019],[35.5792,135.18964],[35.579,135.18954],[35.57892,135.18926],[35.5787,135.18917],[35.57862,135.18889],[35.5784,135.18876],[35.57828,135.18813],[35.5781,135.18806],[35.57802,135.18778],[35.5778,135.18769],[35.57772,135.18741],[35.5775,135.18732],[35.57742,135.18705],[35.5772,135.18692],[35.57718,135.18637],[35.57738,135.1862],[35.57744,135.18599],[35.57738,135.1852],[35.57718,135.18509],[35.5771,135.18481],[35.57688,135.18472],[35.5768,135.18444],[35.57658,135.18435],[35.5765,135.18407],[35.57628,135.18398],[35.5762,135.1837],[35.57598,135.18361],[35.5759,135.18333],[35.5757,135.18323],[35.5756,135.18263],[35.57538,135.1825],[35.5753,135.18223],[35.57508,135.18213],[35.575,135.18186],[35.57478,135.18177],[35.5747,135.18149],[35.5745,135.18139],[35.57442,135.18083],[35.57418,135.1806],[35.5741,135.18005],[35.5739,135.17994],[35.57382,135.17967],[35.5736,135.17958],[35.57352,135.1793],[35.57328,135.17913],[35.5733,135.17857],[35.5735,135.17847],[35.57358,135.17819],[35.5738,135.1781],[35.57385,135.17793],[35.57365,135.17772],[35.5736,135.17749],[35.57348,135.17495],[35.57328,135.1747],[35.5732,135.17415],[35.573,135.17394],[35.57288,135.17267],[35.57268,135.17254],[35.5726,135.17227],[35.57238,135.17218],[35.5723,135.1719],[35.57212,135.17181],[35.57198,135.17081],[35.57178,135.1707],[35.5717,135.17042],[35.57148,135.17033],[35.5714,135.17006],[35.57118,135.16996],[35.5711,135.16969],[35.5709,135.16958],[35.5708,135.16898],[35.57058,135.16886],[35.5705,135.16858],[35.57028,135.16849],[35.5702,135.16821],[35.56998,135.16812],[35.5699,135.16784],[35.56968,135.16775],[35.5696,135.16747],[35.56938,135.16738],[35.5693,135.1671],[35.56908,135.16701],[35.569,135.16674],[35.56878,135.16664],[35.56872,135.16639],[35.56848,135.16622],[35.5684,135.16566],[35.5682,135.16556],[35.56812,135.16528],[35.5679,135.16512],[35.56782,135.16429],[35.56758,135.16389],[35.56756,135.16299],[35.56765,135.16267],[35.56782,135.16259],[35.5679,135.16231],[35.56812,135.16222],[35.56818,135.16196],[35.5684,135.16173],[35.5685,135.16023],[35.56874,135.15972],[35.56868,135.15866],[35.56848,135.15853],[35.5684,135.15825],[35.56818,135.15816],[35.5681,135.15788],[35.56788,135.15779],[35.5678,135.15751],[35.56758,135.15742],[35.56749,135.15717],[35.56704,135.15708],[35.56681,135.15678],[35.56613,135.15668],[35.56591,135.15641],[35.56529,135.15634],[35.56511,135.15613],[35.56473,135.15604],[35.56334,135.15601],[35.56249,135.15613],[35.5624,135.15634],[35.56218,135.15643],[35.5621,135.15671],[35.56188,135.1568],[35.5618,135.15708],[35.56158,135.15717],[35.5615,135.15744],[35.56128,135.15754],[35.5612,135.15781],[35.56098,135.15791],[35.5609,135.15818],[35.56068,135.15827],[35.5606,135.15855],[35.56038,135.15864],[35.5603,135.15892],[35.56008,135.15901],[35.56,135.15929],[35.5598,135.15936],[35.55966,135.15966],[35.55921,135.15975],[35.5591,135.16003],[35.55888,135.16012],[35.5588,135.1604],[35.55858,135.16049],[35.5585,135.16076],[35.55832,135.16083],[35.55822,135.16142],[35.55798,135.16171],[35.5579,135.16254],[35.55765,135.16289],[35.55768,135.16327],[35.55792,135.16344],[35.55798,135.16369],[35.5582,135.16378],[35.55828,135.16406],[35.5585,135.16415],[35.55858,135.16443],[35.5588,135.16452],[35.55888,135.1648],[35.5591,135.16489],[35.55918,135.16517],[35.5594,135.16526],[35.55948,135.16554],[35.5597,135.16563],[35.55978,135.16591],[35.56,135.166],[35.56008,135.16627],[35.5603,135.1664],[35.56042,135.16704],[35.56062,135.16713],[35.5607,135.1674],[35.5609,135.16747],[35.56098,135.16775],[35.5612,135.16784],[35.56128,135.16812],[35.5615,135.16821],[35.56158,135.16849],[35.5618,135.16858],[35.56188,135.16886],[35.5621,135.16895],[35.56218,135.16923],[35.5624,135.16932],[35.56248,135.16959],[35.5627,135.16969],[35.56278,135.16996],[35.563,135.17006],[35.56308,135.17033],[35.5633,135.17042],[35.56338,135.1707],[35.56358,135.17079],[35.56365,135.171],[35.5636,135.17143],[35.56338,135.17155],[35.5633,135.17183],[35.5631,135.17193],[35.563,135.17253],[35.5628,135.17264],[35.56272,135.17291],[35.5625,135.17301],[35.56242,135.17328],[35.5622,135.17341],[35.56212,135.17396],[35.56188,135.17425],[35.5618,135.17508],[35.56158,135.17524],[35.5615,135.17552],[35.5613,135.17562],[35.56122,135.17618],[35.56105,135.17634],[35.5609,135.17897],[35.56085,135.1792],[35.56068,135.17936],[35.5606,135.17991],[35.56038,135.18004],[35.5603,135.18031],[35.5601,135.18042],[35.55998,135.18105],[35.55978,135.18114],[35.5597,135.18142],[35.55948,135.18151],[35.5594,135.18179],[35.55918,135.18188],[35.5591,135.18216],[35.55886,135.18228],[35.55888,135.1825],[35.5591,135.1826],[35.55918,135.18287],[35.5594,135.18296],[35.55948,135.18324],[35.55972,135.18336],[35.5598,135.18363],[35.56002,135.18373],[35.56002,135.18398],[35.5598,135.18407],[35.55972,135.18435],[35.5595,135.18444],[35.55942,135.18472],[35.5592,135.18481],[35.55912,135.18509],[35.5589,135.18518],[35.55882,135.18545],[35.5586,135.18555],[35.55852,135.18582],[35.5583,135.18592],[35.55822,135.18619],[35.558,135.18628],[35.55792,135.18656],[35.5577,135.18665],[35.55759,135.18693],[35.55711,135.18705],[35.55702,135.1873],[35.5568,135.18739],[35.55664,135.18767],[35.55561,135.18781],[35.5555,135.18806],[35.55528,135.18815],[35.55518,135.18845],[35.555,135.18843],[35.55486,135.18813],[35.55455,135.1881],[35.5541,135.18841],[35.55178,135.18855],[35.55148,135.18883],[35.5513,135.1885],[35.55108,135.18841],[35.551,135.18813],[35.55078,135.18804],[35.55065,135.18773],[35.5505,135.18776],[35.55034,135.18801],[35.5494,135.18809],[35.54828,135.18804],[35.54809,135.18797],[35.54796,135.18776],[35.54759,135.18774],[35.5474,135.18806],[35.54718,135.18815],[35.5471,135.18843],[35.54688,135.18852],[35.5468,135.1888],[35.54658,135.18889],[35.5465,135.18917],[35.54628,135.18926],[35.5462,135.18954],[35.54598,135.18963],[35.5459,135.1899],[35.54568,135.19],[35.5456,135.19027],[35.54538,135.19037],[35.5453,135.19064],[35.54508,135.19073],[35.545,135.19101],[35.54478,135.1911],[35.5447,135.19138],[35.54448,135.19147],[35.5444,135.19175],[35.54418,135.19184],[35.54408,135.19213],[35.5439,135.19212],[35.54382,135.19184],[35.5436,135.19175],[35.54349,135.19147],[35.54315,135.19142],[35.54298,135.1915],[35.5429,135.19175],[35.5427,135.19182],[35.54262,135.19209],[35.5424,135.19219],[35.54232,135.19246],[35.5421,135.19256],[35.54196,135.19285],[35.54154,135.19285],[35.54131,135.19254],[35.54091,135.19258],[35.54082,135.19283],[35.5406,135.19292],[35.54052,135.1932],[35.5403,135.19329],[35.54022,135.19357],[35.54002,135.19368],[35.5399,135.19463],[35.53968,135.19485],[35.5396,135.1954],[35.53936,135.19556],[35.53938,135.19578],[35.5396,135.19598],[35.53965,135.19667],[35.5396,135.19718],[35.53938,135.19749],[35.5393,135.19832],[35.53908,135.19848],[35.539,135.19876],[35.53878,135.19885],[35.5387,135.19913],[35.53848,135.19922],[35.5384,135.19949],[35.53818,135.19959],[35.5381,135.19986],[35.53788,135.19996],[35.5378,135.20023],[35.5376,135.20034],[35.53758,135.20089],[35.53782,135.20106],[35.5379,135.20134],[35.53812,135.20143],[35.5382,135.20171],[35.53842,135.2018],[35.5385,135.20208],[35.53872,135.20217],[35.5388,135.20244],[35.53902,135.20254],[35.5391,135.20281],[35.53925,135.20288],[35.5394,135.20452],[35.53962,135.20481],[35.5397,135.20536],[35.53992,135.20549],[35.54,135.20576],[35.5402,135.20583],[35.54028,135.20611],[35.5405,135.2062],[35.54058,135.20648],[35.5408,135.20657],[35.54088,135.20685],[35.5411,135.20694],[35.54118,135.20722],[35.5414,135.20731],[35.54151,135.20759],[35.54199,135.2077],[35.54208,135.20795],[35.5423,135.20805],[35.54238,135.20832],[35.5426,135.20842],[35.54271,135.20866],[35.54379,135.20884],[35.54423,135.20943],[35.54491,135.20952],[35.54524,135.20982],[35.54614,135.20991],[35.54633,135.21017],[35.54701,135.21026],[35.54719,135.21047],[35.54753,135.21056],[35.54933,135.21054],[35.54974,135.21026],[35.55064,135.21017],[35.55088,135.20986],[35.55102,135.20991],[35.55111,135.21017],[35.55145,135.21022],[35.55162,135.21014],[35.55174,135.20989],[35.55219,135.2098],[35.5523,135.20952],[35.55252,135.20943],[35.5526,135.20915],[35.55282,135.20906],[35.5529,135.20878],[35.55312,135.20869],[35.5532,135.20842],[35.55342,135.20832],[35.5535,135.20805],[35.55372,135.20795],[35.5538,135.20768],[35.55402,135.20759],[35.5541,135.20731],[35.5543,135.20721],[35.5544,135.20661],[35.55465,135.20642],[35.55462,135.20623],[35.5544,135.20613],[35.55435,135.20596],[35.5546,135.2057],[35.5547,135.2048],[35.5549,135.20466],[35.55498,135.20438],[35.5552,135.20429],[35.55528,135.20401],[35.5555,135.20392],[35.55563,135.20364],[35.55631,135.20362],[35.55653,135.2039],[35.55721,135.20399],[35.55742,135.20424],[35.5577,135.20431],[35.55862,135.20429],[35.55915,135.20396],[35.55971,135.20404],[35.5598,135.20429],[35.56002,135.20438],[35.5601,135.20466],[35.56032,135.20475],[35.56041,135.205],[35.56092,135.20515],[35.56098,135.20537],[35.5612,135.20546],[35.56128,135.20574],[35.5615,135.20583],[35.56158,135.20611],[35.5618,135.2062],[35.56188,135.20648],[35.5621,135.20657],[35.56218,135.20685],[35.5624,135.20694],[35.56248,135.20722],[35.5627,135.20731],[35.56278,135.20759],[35.563,135.20771],[35.56302,135.20827],[35.5628,135.20845],[35.56275,135.2087],[35.5628,135.20905],[35.563,135.20926],[35.56305,135.20976],[35.563,135.21046],[35.56282,135.21068],[35.56276,135.21103],[35.56282,135.21235],[35.56302,135.2125],[35.5631,135.21277],[35.56332,135.21287],[35.5634,135.21314],[35.56362,135.21323],[35.56371,135.21349],[35.56422,135.21363],[35.56428,135.21386],[35.5645,135.21395],[35.56458,135.21423],[35.5648,135.21432],[35.56488,135.21459],[35.5651,135.21469],[35.56518,135.21496],[35.5654,135.21506],[35.56548,135.21533],[35.5657,135.21542],[35.56578,135.2157],[35.566,135.21579],[35.56608,135.21607],[35.56625,135.21615],[35.5664,135.21746],[35.5666,135.21771],[35.56668,135.21854],[35.56692,135.21882],[35.567,135.21938],[35.56722,135.2195],[35.5673,135.21978],[35.56752,135.21987],[35.5676,135.22015],[35.56778,135.22022],[35.5679,135.22085],[35.56812,135.22098],[35.5682,135.22126],[35.56844,135.22138],[35.56842,135.2216],[35.5682,135.22169],[35.56812,135.22197],[35.5679,135.22206],[35.56782,135.22234],[35.5676,135.22243],[35.56752,135.22271],[35.56725,135.22289],[35.56728,135.22308],[35.5675,135.22327],[35.5676,135.22447],[35.56782,135.22467],[35.56788,135.22492],[35.5681,135.22501],[35.56818,135.22529],[35.5684,135.22538],[35.56848,135.22566],[35.5687,135.22575],[35.56878,135.22603],[35.569,135.22612],[35.56913,135.2264],[35.56981,135.22649],[35.57003,135.22677],[35.57071,135.22686],[35.57104,135.22716],[35.57194,135.22725],[35.57218,135.22748],[35.5745,135.22762],[35.57471,135.22768],[35.57484,135.2279],[35.57526,135.22796],[35.5754,135.22826],[35.57562,135.22836],[35.5757,135.22863],[35.57592,135.22873],[35.576,135.229],[35.57622,135.22909],[35.5763,135.22937],[35.5765,135.22944],[35.5766,135.22965],[35.57686,135.22972],[35.57841,135.22977],[35.5797,135.22969],[35.57999,135.22944],[35.58067,135.22935],[35.58089,135.22907],[35.58157,135.22898],[35.58179,135.2287],[35.58247,135.22861],[35.58258,135.22836],[35.5828,135.22826],[35.58288,135.22799],[35.5831,135.2279],[35.58329,135.22758],[35.58366,135.2276],[35.58381,135.22787],[35.58401,135.22793],[35.58429,135.22787],[35.58445,135.22757],[35.5846,135.2276],[35.58478,135.22793],[35.58492,135.22787],[35.58504,135.2276],[35.58549,135.22762],[35.5856,135.2279],[35.58582,135.22799],[35.5859,135.22826],[35.58612,135.22836],[35.5862,135.22863],[35.58642,135.22873],[35.58642,135.22898],[35.5862,135.22907],[35.58612,135.22935],[35.5859,135.22944],[35.58582,135.22972],[35.5856,135.22981],[35.58546,135.23011],[35.58504,135.23011],[35.5849,135.22981],[35.5847,135.22981],[35.58462,135.23009],[35.5844,135.23018],[35.58432,135.23045],[35.5841,135.23055],[35.58402,135.23082],[35.5838,135.23092],[35.58372,135.23119],[35.58348,135.23131],[35.58342,135.23156],[35.58318,135.23168],[35.58312,135.23193],[35.5829,135.23206],[35.58282,135.23261],[35.5826,135.23279],[35.58252,135.23335],[35.5823,135.23353],[35.58222,135.23409],[35.582,135.23427],[35.58192,135.23482],[35.58172,135.23506],[35.58165,135.23607],[35.58172,135.2374],[35.58192,135.23758],[35.582,135.23785],[35.58222,135.23795],[35.5823,135.23822],[35.58248,135.23831],[35.58262,135.23931],[35.5828,135.2394],[35.58288,135.23968],[35.5831,135.23977],[35.58318,135.24004],[35.5834,135.24014],[35.58348,135.24041],[35.5837,135.24051],[35.58378,135.24078],[35.584,135.24087],[35.58408,135.24115],[35.5843,135.24124],[35.58449,135.24152],[35.58571,135.24152],[35.58594,135.24124],[35.58639,135.24115],[35.5865,135.24087],[35.58672,135.24078],[35.5868,135.24051],[35.587,135.24051],[35.58708,135.24078],[35.5873,135.24087],[35.58738,135.24115],[35.5876,135.24124],[35.58768,135.24152],[35.58788,135.24168],[35.588,135.24358],[35.58805,135.24376],[35.58822,135.24385],[35.58828,135.2441],[35.5885,135.24419],[35.58858,135.24447],[35.5888,135.24456],[35.58891,135.24481],[35.59003,135.24502],[35.5901,135.24523],[35.59032,135.24532],[35.5904,135.2456],[35.59062,135.24569],[35.5907,135.24597],[35.59092,135.24606],[35.591,135.24634],[35.5912,135.24644],[35.59128,135.247],[35.59152,135.24717],[35.59158,135.24742],[35.5918,135.24751],[35.59188,135.24779],[35.5921,135.24788],[35.59221,135.24816],[35.59272,135.2483],[35.59278,135.24853],[35.593,135.24862],[35.59308,135.2489],[35.5933,135.24899],[35.59338,135.24927],[35.5936,135.24936],[35.59368,135.24963],[35.5939,135.24973],[35.59398,135.25],[35.5942,135.2501],[35.59427,135.25031],[35.59561,135.25049],[35.59581,135.25074],[35.59601,135.2508],[35.59629,135.25074],[35.5964,135.25046],[35.59655,135.25044],[35.59671,135.25074],[35.59716,135.25083],[35.59736,135.25111],[35.59839,135.25125],[35.5985,135.2515],[35.59872,135.25159],[35.5988,135.25187],[35.59902,135.25196],[35.5991,135.25224],[35.59932,135.25233],[35.5994,135.25261],[35.59962,135.2527],[35.5997,135.25298],[35.59988,135.25306],[35.59995,135.25363],[35.59988,135.25407],[35.59968,135.25423],[35.5996,135.25479],[35.59938,135.25491],[35.5993,135.25519],[35.59908,135.25528],[35.599,135.25556],[35.59878,135.25565],[35.5987,135.25593],[35.5985,135.256],[35.59842,135.25621],[35.59825,135.25627],[35.59655,135.25639],[35.59626,135.25667],[35.59595,135.2567],[35.59578,135.25661],[35.5957,135.25637],[35.59548,135.25627],[35.5954,135.256],[35.59525,135.25597],[35.59512,135.25627],[35.5949,135.25637],[35.59482,135.25664],[35.5946,135.25674],[35.59452,135.25701],[35.59438,135.25707],[35.59381,135.25635],[35.59344,135.25637],[35.59331,135.25661],[35.59314,135.25668],[35.59253,135.25664],[35.59242,135.25639],[35.5922,135.2563],[35.59212,135.25602],[35.5919,135.25593],[35.59182,135.25565],[35.5916,135.25556],[35.59141,135.25524],[35.59104,135.25526],[35.59092,135.25547],[35.59067,135.25556],[35.58932,135.25565],[35.58918,135.25572],[35.5891,135.25593],[35.58892,135.25595],[35.58882,135.25565],[35.5886,135.25556],[35.58852,135.25528],[35.5883,135.25519],[35.58822,135.25491],[35.58802,135.2548],[35.58795,135.25411],[35.58802,135.2538],[35.5882,135.25361],[35.58828,135.25251],[35.58852,135.2521],[35.5886,135.25127],[35.58882,135.25111],[35.5889,135.25083],[35.58912,135.25074],[35.58914,135.25052],[35.5889,135.2504],[35.58882,135.25012],[35.5886,135.25003],[35.58852,135.24975],[35.5883,135.24966],[35.58822,135.24938],[35.588,135.24929],[35.58792,135.24901],[35.5877,135.24892],[35.58762,135.24864],[35.5874,135.24855],[35.58732,135.24827],[35.5871,135.24818],[35.58702,135.24791],[35.5868,135.24781],[35.58672,135.24757],[35.58655,135.24749],[35.58618,135.24757],[35.58612,135.24779],[35.5859,135.24788],[35.58582,135.24816],[35.5856,135.24825],[35.58552,135.24853],[35.5853,135.24862],[35.58522,135.2489],[35.585,135.24899],[35.58492,135.24927],[35.5847,135.24936],[35.58462,135.24963],[35.58448,135.24969],[35.5843,135.24936],[35.58408,135.24927],[35.584,135.24899],[35.58378,135.2489],[35.5837,135.24862],[35.58348,135.24853],[35.5834,135.24825],[35.58318,135.24816],[35.5831,135.24788],[35.58288,135.24779],[35.5828,135.24751],[35.58258,135.24742],[35.58251,135.2472],[35.58216,135.24711],[35.58173,135.24717],[35.58156,135.24744],[35.58111,135.24754],[35.58096,135.24781],[35.58048,135.24793],[35.58042,135.24816],[35.5802,135.24825],[35.58012,135.24853],[35.5799,135.24862],[35.57982,135.2489],[35.5796,135.24899],[35.57952,135.24927],[35.5793,135.24936],[35.57922,135.24963],[35.579,135.24973],[35.57892,135.25],[35.5787,135.2501],[35.57862,135.25037],[35.5784,135.25046],[35.57832,135.25074],[35.5781,135.25083],[35.57802,135.25111],[35.5778,135.2512],[35.57772,135.25148],[35.5775,135.25157],[35.57742,135.25185],[35.5772,135.25194],[35.57701,135.25226],[35.57661,135.25222],[35.57652,135.25196],[35.5763,135.25187],[35.57622,135.25159],[35.576,135.2515],[35.57592,135.25123],[35.5757,135.25113],[35.57562,135.25086],[35.5754,135.25076],[35.57529,135.25052],[35.57426,135.25037],[35.57405,135.25007],[35.5739,135.2501],[35.57371,135.25037],[35.57242,135.25052],[35.57226,135.25076],[35.57181,135.25086],[35.57161,135.25115],[35.57124,135.25113],[35.57101,135.25082],[35.57064,135.25083],[35.5705,135.25113],[35.57028,135.25123],[35.5702,135.2515],[35.56998,135.25159],[35.5699,135.25187],[35.5697,135.25197],[35.56958,135.25261],[35.5694,135.25268],[35.56932,135.25295],[35.5691,135.25305],[35.56902,135.25332],[35.5688,135.25342],[35.56872,135.25369],[35.5685,135.25378],[35.56842,135.25406],[35.5682,135.25415],[35.56812,135.25443],[35.56786,135.25466],[35.56788,135.25511],[35.56805,135.25526],[35.56812,135.25557],[35.5681,135.25723],[35.56805,135.2574],[35.56788,135.2575],[35.56782,135.25775],[35.5676,135.25784],[35.56752,135.25812],[35.5673,135.25821],[35.56725,135.25838],[35.56752,135.2586],[35.5676,135.25888],[35.56782,135.25897],[35.5679,135.25925],[35.5681,135.25935],[35.56818,135.25991],[35.5684,135.26009],[35.56845,135.26044],[35.5682,135.26097],[35.56808,135.26287],[35.56788,135.26303],[35.5678,135.26331],[35.56758,135.2634],[35.5675,135.26367],[35.56725,135.26383],[35.56728,135.26402],[35.56752,135.26425],[35.5675,135.26508],[35.56728,135.26524],[35.56722,135.2655],[35.56702,135.26561],[35.56696,135.26581],[35.56698,135.26649],[35.56722,135.26678],[35.5673,135.26733],[35.56752,135.26751],[35.56752,135.26802],[35.56728,135.26819],[35.5672,135.26847],[35.56698,135.26856],[35.5669,135.26884],[35.56668,135.26893],[35.56662,135.26916],[35.56611,135.2693],[35.56602,135.26955],[35.5658,135.26965],[35.56567,135.26992],[35.56499,135.26994],[35.5648,135.26965],[35.5646,135.26965],[35.56452,135.26992],[35.5643,135.27001],[35.56422,135.27029],[35.564,135.27038],[35.56392,135.27066],[35.5637,135.27075],[35.56362,135.27103],[35.56336,135.27117],[35.56338,135.2714],[35.56362,135.27157],[35.5636,135.27212],[35.56338,135.27225],[35.5633,135.27253],[35.56308,135.27262],[35.563,135.2729],[35.56278,135.27299],[35.5627,135.27326],[35.56248,135.27336],[35.5624,135.27363],[35.56215,135.27367]]};function wl(i,e=3,t=pa){let n=i(t.center[1],t.center[0]),r=i(t.center[1],t.center[0]+.01),a=t.rkm/1.1057*Math.hypot(r[0]-n[0],r[1]-n[1]),s=([c,l])=>{let h=c-n[0],u=l-n[1],d=Math.hypot(h,u)/a;if(d>=1)return[c,l];let p=1+(e-1)*(1-d)**2;return[n[0]+h*p,n[1]+u*p]},o=(c,l)=>s(i(c,l));return o.c=n,o.R=a,o.m=e,o.warp=s,o.inv=(c,l)=>{let h=c-n[0],u=l-n[1],d=Math.hypot(h,u)/a;if(d>=1||d===0)return[c,l];let p=0,f=1;for(let v=0;v<40;v++){let g=(p+f)/2;g*(1+(e-1)*(1-g)**2)<d?p=g:f=g}let m=(p+f)/2/d;return[n[0]+h*m,n[1]+u*m]},o.mag=(c,l)=>{let h=o(c,l),u=o(c,l+5e-4),d=i(c,l),p=i(c,l+5e-4);return Math.hypot(u[0]-h[0],u[1]-h[1])/Math.hypot(p[0]-d[0],p[1]-d[1])},o}function a0(i,e=pa,t=.012,n=4){let r=e.path.map(([l,h])=>i(h,l)),a=r.length,s=r.map((l,h)=>{if(h<n||h>=a-n)return l;let u=0,d=0;for(let p=-n;p<=n;p++)u+=r[h+p][0],d+=r[h+p][1];return[u/(2*n+1),d/(2*n+1)]}),o=[s[0]],c=0;for(let l=1;l<a-1;l++)c+=Math.hypot(s[l][0]-s[l-1][0],s[l][1]-s[l-1][1]),c>=t&&(o.push(s[l]),c=0);return o.push(s[a-1]),o}function U1(i,e,t=pa){let n=e.R?e:wl(e,1,t),r=n.c,a=n.R;e=n;let s=l=>Math.hypot(l[0]-r[0],l[1]-r[1])<a*.995,o=a0(e,t),c=(l,h)=>Math.hypot(l[0]-h[0],l[1]-h[1]);return i.map(l=>{let h=l.length,u=l.map(s);if(!u.some(Boolean))return l;let d=-1,p=0;for(let b=0;b<h;b++){if(u[b]||!u[(b-1+h)%h])continue;let x=0;for(;x<h&&!u[(b+x)%h];)x++;x>d&&(d=x,p=b)}if(d<2)return l;let f=Array.from({length:d},(b,x)=>l[(p+x)%h]),m=f[f.length-1],v=f[0],g=c(m,o[0])+c(v,o[o.length-1])<=c(m,o[o.length-1])+c(v,o[0]);return f.concat(g?o:o.slice().reverse())})}function N1(i,e,t,n=pa){let r=t.R?t:wl(t,1,n),a=O1(r,n);return i.map(s=>({...s,polys:s.polys.flatMap(o=>H1(o.map(c=>c.map(r.warp)),a))}))}function O1(i,e=pa){let t=a0(i,e),n=i.c,r=Math.atan2(t[0][1]-n[1],t[0][0]-n[0]),a=Math.atan2(t[t.length-1][1]-n[1],t[t.length-1][0]-n[0]),s=Math.PI*2,o=h=>{let u=(h*(r-a)%s+s)%s,d=Math.ceil(u/s*128);return Array.from({length:d+1},(p,f)=>{let m=a+h*u*f/d;return[n[0]+Math.cos(m)*i.R,n[1]+Math.sin(m)*i.R]})},c=i(135.21,35.57),l=[1,-1].map(h=>t.concat(o(h))).find(h=>ua(c,h));return ha(l)>0?l:l.slice().reverse()}var ha=i=>i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0),ua=(i,e)=>{let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let a=e[n],s=e[r];a[1]>i[1]!=s[1]>i[1]&&i[0]<(s[0]-a[0])*(i[1]-a[1])/(s[1]-a[1])+a[0]&&(t=!t)}return t};function H1(i,e){let t=e.length,n=t,r=1/0,a=1/0,s=-1/0,o=-1/0;e.forEach(([g,b])=>{r=Math.min(r,g),a=Math.min(a,b),s=Math.max(s,g),o=Math.max(o,b)});let c=i.map((g,b)=>ha(g)>0==(b===0)?g:g.slice().reverse()),l=[],h=[];c.forEach(g=>{let b=g.length,x=[],M=0;for(let T=0;T<b;T++){let _=g[T],w=g[(T+1)%b];if(x.push({p:_}),Math.max(_[0],w[0])<r||Math.min(_[0],w[0])>s||Math.max(_[1],w[1])<a||Math.min(_[1],w[1])>o)continue;let A=[],C=w[0]-_[0],I=w[1]-_[1];for(let G=0;G<t;G++){let D=e[G],W=e[(G+1)%t],V=W[0]-D[0],z=W[1]-D[1],j=C*z-I*V;if(!j)continue;let Y=((D[0]-_[0])*z-(D[1]-_[1])*V)/j,Z=((D[0]-_[0])*I-(D[1]-_[1])*C)/j;Y>0&&Y<=1&&Z>=0&&Z<1&&A.push({t:Y,p:[_[0]+C*Y,_[1]+I*Y],s:G+Z,x:V*I-z*C>0?"in":"out"})}A.sort((G,D)=>G.t-D.t).forEach(G=>x.push(G)),M+=A.length}if(!M){ua(g[0],e)||l.push(g);return}let E=x.findIndex(T=>T.x==="out"),y=null;for(let T=0;T<x.length;T++){let _=x[(E+T)%x.length];_.x==="out"?y={pts:[_.p],s0:_.s}:y&&(y.pts.push(_.p),_.x==="in"&&(y.s1=_.s,h.push(y),y=null))}});let u=[],d=new Set;h.forEach(g=>{if(d.has(g))return;let b=[],x=g;for(let M=0;M<=h.length&&!d.has(x);M++){d.add(x),b.push(...x.pts);let E=null,y=1/0;h.forEach(T=>{if(d.has(T)&&T!==g)return;let _=((x.s1-T.s0)%n+n)%n;_<y&&(y=_,E=T)});for(let T=Math.floor(x.s1),_=0;_<t&&((x.s1-T)%n+n)%n<y;T--,_++){let w=(T%t+t)%t;w!==x.s1&&b.push(e[w])}x=E}b.length>2&&u.push(b)});let p=l.concat(u),f=p.filter(g=>ha(g)>0),m=p.filter(g=>ha(g)<0);!h.length&&c[0]&&ua(e[0],c[0])&&!c.slice(1).some(g=>ua(e[0],g))&&m.push(e.slice().reverse());let v=f.map(g=>[g]);return m.forEach(g=>{let b=v.filter(([x])=>ua(g[0],x)).sort((x,M)=>ha(x[0])-ha(M[0]))[0];b&&b.push(g)}),v}function k1(i,e,t={}){let n=F1(e,i.length,t);return i.map((r,a)=>({...r,polys:r.polys.flatMap(s=>H1(s,n[a]))}))}function F1(i,e,{k0:t=.35,dk:n=.18,patch:r=pa}={}){let a=O1(i,r),s=i.c,o=i.R*.985,c=0,l=0;return a.forEach(([h,u])=>{c+=h,l+=u}),c/=a.length,l/=a.length,Array.from({length:e},(h,u)=>a.map(([d,p])=>{let f=1+t+n*u,m=c+(d-c)*f,v=l+(p-l)*f,g=Math.hypot(m-s[0],v-s[1]);return g<=o?[m,v]:[s[0]+(m-s[0])/g*o,s[1]+(v-s[1])/g*o]}))}function B1(i,e,t={}){let n=F1(e,20,t);return(r,a)=>{if(Math.hypot(r-e.c[0],a-e.c[1])>=e.R)return i(r,a);let[s,o]=e.inv(r,a),c=n.findIndex(l=>!ua([r,a],l));return Math.min(i(s,o),c<0?20:c)}}function z1(i,e,{grow:t=.05,up:n=.006,down:r=.046,materials:a,patch:s=pa}={}){let o=a0(i,s),c=i.c,l=i.R*.93,h=Math.PI*2,u=Math.atan2(o[0][1]-c[1],o[0][0]-c[0]),d=Math.atan2(o[o.length-1][1]-c[1],o[o.length-1][0]-c[0]),p=M=>{let E=(M*(u-d)%h+h)%h,y=Math.ceil(E/h*128);return Array.from({length:y+1},(T,_)=>{let w=d+M*E*_/y;return[c[0]+Math.cos(w)*l,c[1]+Math.sin(w)*l]})},f=i(135.21,35.57),m=[1,-1].map(M=>o.concat(p(M))).find(M=>!ua(f,M));ha(m)<0&&(m=m.slice().reverse());let v=m.length,g=m.map((M,E)=>{let y=m[(E-1+v)%v],T=m[(E+1)%v],_=Math.hypot(M[0]-y[0],M[1]-y[1])||1,w=Math.hypot(T[0]-M[0],T[1]-M[1])||1,A=(M[1]-y[1])/_+(T[1]-M[1])/w,C=-((M[0]-y[0])/_+(T[0]-M[0])/w),I=Math.hypot(A,C)||1;return new ie(M[0]+A/I*t,M[1]+C/I*t)}),b=new St(new Ue(g),{depth:n+r,bevelEnabled:!1,curveSegments:1});b.rotateX(-Math.PI/2),b.translate(0,e-r,0);let x=new te(b,a||[new Bt({color:"#e9e2cc",roughness:.95}),new Bt({color:"#cfc4a6",roughness:.95})]);return x.castShadow=x.receiveShadow=!0,x.userData={kind:"ama-shore"},x}function vx(i){let e=new Be,t=0;return Object.keys(i[0].attributes).forEach(n=>{let r=i[0].attributes[n].itemSize,a=new Float32Array(i.reduce((o,c)=>o+c.attributes[n].array.length,0)),s=0;i.forEach(o=>{a.set(o.attributes[n].array,s),s+=o.attributes[n].array.length}),e.setAttribute(n,new dt(a,r))}),i.forEach(n=>{n.groups.forEach(r=>e.addGroup(r.start+t,r.count,r.materialIndex)),t+=n.attributes.position.count,n.dispose()}),yo(e)}function G1(i,e,{lift:t=.05,r0:n=.62,r1:r=.99,materials:a}={}){let s=new le,o=Math.max(1,Math.ceil(e/t-.3)),c=a||[new Bt({color:"#1f4a6a",roughness:.95}),new Bt({color:"#163a52",roughness:.95})],l=[];for(let u=0;u<o;u++){let d=e-u*t,p=new Ue;p.absarc(i.c[0],i.c[1],i.R*(n+(r-n)*u/Math.max(1,o-1)),0,Math.PI*2,!1);let f=new St(p,{depth:t,bevelEnabled:!1,curveSegments:128});f.rotateX(-Math.PI/2),f.translate(0,d-t,0),l.push(f)}let h=new te(vx(l),c);return h.receiveShadow=!0,s.add(h),s.userData={kind:"ama-bay",top:e,layers:o},s}var da={pagoda:tx,"torii-row":ix,bridge:rx,"cable-bridge":i=>Un(ax(i)),taipei101:sx,...w1,"lattice-tower":i=>Un(C1(i)),"lattice-tower-red":i=>Un(C1(i,["#d2452c","#f2efe8"])),"suspension-bridge":i=>Un(P1(i)),"suspension-bridge-grey":i=>Un(P1(i,"#8c949a")),"canton-tower":i=>L1(i),"kobe-port-tower":i=>L1(i,{H:.95,r0:.2,r1:.17,turn:2,n:16,col:"#c7352b",cross:!0,core:"#efe9df",deck:"#f1ede4",mast:.12}),needle:ox,skytree:cx,"arch-bridge":i=>I1(i),"arch-bridge-green":i=>I1(i,{col:"#6f7f76",pylon:null}),"truss-bridge-red":i=>lx(i),"tower-bridge":hx,windmill:ux,crown:dx,"birds-nest":px};Object.keys(da).forEach(i=>{let e=da[i];da[i]=(...t)=>{let n=e(...t);return n&&!n.userData.spin&&!n.update?bs(n):n}});var un=i=>{i.traverse(r=>{r.isMesh&&(r.castShadow=r.receiveShadow=!0)});let e=i.userData.cars;e&&delete i.userData.cars;let t=i.clone(!0);if(e){let r=[],a=[];i.traverse(s=>r.push(s)),t.traverse(s=>a.push(s)),i.userData.cars=e,t.userData.cars=e.map(s=>a[r.indexOf(s)])}if(!globalThis.__noBake)for(let r of i.userData.cars||[i]){let a=[];r.traverse(s=>{s.userData.keep&&a.push([s,s.parent])}),a.forEach(([s])=>s.removeFromParent()),bs(r),a.forEach(([s,o])=>o.add(s))}let n=null;if(Object.defineProperty(i.userData,"lod",{get:()=>(n||(n=W1(t),t=null),n),enumerable:!1,configurable:!0}),i.userData.cars){let r=i.userData.cars;delete i.userData.cars,Object.defineProperty(i.userData,"cars",{value:r,enumerable:!1,configurable:!0})}return i};function W1(i){if(i.userData.cars){let s=new le,o=i.userData.cars.map(c=>{let l=W1(c);return l.position.copy(c.position),l.quaternion.copy(c.quaternion),s.add(l),l});return Object.defineProperty(s.userData,"cars",{value:o,enumerable:!1}),s.userData.pitch=i.userData.pitch,s}i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),t=new le,n=new Map,r=new rn,a=new S;i.traverse(s=>{if(!s.isMesh||s===i)return;let o=new Me().multiplyMatrices(e,s.matrixWorld);s.geometry.boundingBox||s.geometry.computeBoundingBox(),r.copy(s.geometry.boundingBox).applyMatrix4(o).getSize(a);let c=[a.x,a.y,a.z].sort((u,d)=>d-u);if(!(a.y>=Math.max(a.x,a.z)&&a.y>.15)&&(c[0]<.06||c[1]<.012))return;if(Array.isArray(s.material)){let u=new te(s.geometry,s.material);o.decompose(u.position,u.quaternion,u.scale),t.add(u);return}let h=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(o);h.clearGroups();for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new Ce(new Float32Array(h.attributes.position.count*2),2)),(n.get(s.material)||n.set(s.material,[]).get(s.material)).push(h)}),n.forEach((s,o)=>{let c=qn(s);c&&t.add(new te(c,o))}),t.traverse(s=>{s.isMesh&&(s.castShadow=s.receiveShadow=!0)});for(let s of Object.keys(i.userData))t.userData[s]=i.userData[s];return t}var ki=(i,e,t=40)=>new Lr(new oo(i,t),new ri({color:e,transparent:!0,opacity:.55}));function qe(i,e,t=.008,n=14,r=3){let a=new St(i,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:r,curveSegments:n});return a.translate(0,0,-(e-t*2)/2),a.rotateY(-Math.PI/2),a}function li(i,e,t,n){let r=i.getSpacedPoints(400),a=r.length-1,s=[];for(let p=0;p<a;p++)e(r[p])&&s.push(p);if(s.length<2)return null;let o=0;for(let p=1;p<s.length;p++)s[p]!==s[p-1]+1&&(o=p);let c=s[o]===0&&s[s.length-1]===a-1?s.slice(o).concat(s.slice(0,o)):s,l=Ui.isClockWise(r.slice(0,a))?-1:1,h=p=>{let f=r[(p-1+a)%a],m=r[(p+1)%a],v=m.x-f.x,g=m.y-f.y,b=Math.hypot(v,g)||1;return[g/b*l,-v/b*l]},u=c.map(p=>{let[f,m]=h(p);return new ie(r[p].x+f*t,r[p].y+m*t)}),d=c.map(p=>{let[f,m]=h(p);return new ie(r[p].x-f*n,r[p].y-m*n)});return new Ue(u.concat(d.reverse()))}function Ye(i,e,t,n,r){let a=new Ue;return r=Math.min(r,(t-i)/2,(n-e)/2),a.moveTo(i+r,e),a.lineTo(t-r,e),a.quadraticCurveTo(t,e,t,e+r),a.lineTo(t,n-r),a.quadraticCurveTo(t,n,t-r,n),a.lineTo(i+r,n),a.quadraticCurveTo(i,n,i,n-r),a.lineTo(i,e+r),a.quadraticCurveTo(i,e,i+r,e),a}function zt(i,e,t,n=.004){let r=new St(i,{depth:n,bevelEnabled:!1,curveSegments:10});r.rotateY(-Math.PI/2);let a=new te(r,e);return a.position.x=t>0?t+n:t,a}var Qe=(i,e,t,n)=>{let r=new te(new st(t*2,t*2,i.distanceTo(e)+t),n);return r.position.copy(i).add(e).multiplyScalar(.5),r.lookAt(e),r},pe=(i,e,t,n,r,a,s)=>{let o=new te(new st(i,e,t),n);return o.position.set(r,a,s),o};function Sl(i,e,t,n){let r=new le,a=new te(new ge(t,t,n,22),i),s=new te(new ge(t*.52,t*.52,n+.006,16),e);return a.rotation.z=s.rotation.z=Math.PI/2,r.add(a,s),r.userData.keep=!0,r}function fa(i,e,t,n,r=24,a=null){let s=[],o=[],c=[],l=[];for(let g=0;g<=r;g++){let b=g/r,x=Math.max(0,(b-.55)/.45),M=a?e*a(b):e*(b<.55?1-.12*(1-b/.55)**2:Math.sqrt(Math.max(0,1-x*x)));s.push(i(b,x,M).map(([E,y])=>[E,y,-.5+b]))}let h=s[0].length*2-1;for(let g of s)[...g.slice().reverse().map(([b,x,M])=>[-b,x,M]),...g.slice(1)].forEach(b=>o.push(...b));for(let g=0;g<r;g++)for(let b=0;b<h-1;b++){let x=g*h+b,M=x+1,E=x+h,y=E+1;(c[t[b]]||=[]).push(x,M,E,M,y,E)}let u=[],d=[];for(let g=1;g<h-1;g++)u.push(0,g+1,g);for(let g=0;g<r;g++){let b=g*h,x=b+h-1,M=b+h,E=M+h-1;d.push(b,x,M,x,E,M)}let p=new Be;p.setAttribute("position",new Ce(o,3));let f=0;c.forEach((g,b)=>{g&&(l.push(...g),p.addGroup(f,g.length,b),f+=g.length)}),l.push(...u),p.addGroup(f,u.length,0),p.setIndex(l),p.computeVertexNormals();let m=new te(p,n);m.add(ki(p,"#6d5d48",25));let v=new Be;return v.setAttribute("position",new Ce(o.map((g,b)=>b%3===1?g-.012:g),3)),v.setIndex(d),v.computeVertexNormals(),{hm:m,dg:v}}function j1(i,e={}){let t=e.paper||null,n=1,r=.25,a=.31,s=.045,o=.052,c=.29,l=-.29,h=i(e.color||"#b8342a",t),u=i(e.color||"#b8342a",t,{flatShading:!0}),d=i(e.stripe||"#f6efe1",t),p=i("#3a4b59",null,{roughness:.5}),f=i("#2b2724"),m=i("#d9d0c0",t),v=i("#fff4d6",null,{emissive:"#5a4a2a"}),g=i("#c23a2a"),b=new Ue,x=-n/2,M=n/2,E=o+.012;b.moveTo(x+.03,s),b.lineTo(l-E,s),b.absarc(l,s,E,Math.PI,0,!0),b.lineTo(c-E,s),b.absarc(c,s,E,Math.PI,0,!0),b.lineTo(M-.03,s),b.quadraticCurveTo(M,s,M,s+.03),b.lineTo(M-.004,a*.62),b.bezierCurveTo(M-.008,a*.9,M-.035,a,M-.1,a),b.lineTo(x+.04,a),b.quadraticCurveTo(x,a,x,a-.04),b.lineTo(x,s+.03),b.quadraticCurveTo(x,s,x+.03,s);let y=.012,T=new le,_=qe(b,r,y,7,1),w=new te(_,[h,u]);w.add(ki(_,"#5a2a1e",50)),T.add(w);let A=r/2;for(let z of[-1,1]){let j=z>0?.335:M-.035,Y=j-.13,Z=new Ue;Z.moveTo(x+.01,.135),Z.lineTo(Y,.135),Z.quadraticCurveTo(j-.04,.135,j,.205),Z.lineTo(j,.175),Z.quadraticCurveTo(j-.04,.11,Y,.11),Z.lineTo(x+.01,.11),Z.closePath(),T.add(zt(Z,d,z*A));let X=z>0?.33:.43;T.add(zt(Ye(x+.04,.165,X,a-.035,.018),p,z*A));for(let O=1;O<7;O++){let J=x+.04+(X-x-.04)*O/7;T.add(zt(Ye(J-.006,.165,J+.006,a-.035,.002),h,z*(A+.004),.003))}}T.add(zt(Ye(.35,s+.02,.44,a-.035,.012),p,A),zt(Ye(.352,.11,.438,.12,.003),h,A+.004,.003));let C=li(b,z=>z.x>M-.12&&z.y>.16&&z.y<a-.03,y+.004,.02);C&&T.add(new te(qe(C,r-.03,0),p));let I=li(b,z=>z.x>M-.05&&z.y<.075&&z.y>s+.002,y+.006,.01),G=li(b,z=>z.x>M-.03&&z.y>.112&&z.y<.13,y+.003,.004);G&&T.add(new te(qe(G,r-.004,0),d)),I&&T.add(new te(qe(I,r+.006,.003),f));for(let z of[-1,1]){T.add(pe(.04,.018,.006,v,z*(A-.04),.095,M+y+.001)),T.add(pe(.02,.05,.006,g,z*(A-.03),.17,x-y-.002));let j=new S(z*(A-.025),a+.008,M-.06),Y=new S(z*(A-.004),a+.014,M+.025),Z=new S(z*(A-.012),a-.03,M+.035);T.add(Qe(j,Y,.0032,f),Qe(Y,Z,.0032,f));let X=pe(.008,.036,.016,f,Z.x,Z.y-.016,Z.z);X.rotation.y=z*.35,T.add(X)}T.add(pe(r-.07,.07,.004,p,0,a-.07,x-y-.001),pe(r-.09,.03,.004,f,0,.09,x-y-.001));let D=new te(qe(Ye(x+.01,0,M-.1,.006,.003),r-.02,.003),d);D.position.y=a+y-.002,T.add(D);let W=li(b,z=>z.x>M-.1&&z.y>a-.028&&z.y<a-.006,y+.004,.004);W&&T.add(new te(qe(W,r*.55,0),i("#f4d58a",null,{emissive:"#6a4a10",emissiveIntensity:.4})));let V=new te(qe(Ye(-.32,0,.02,.022,.011),r*.62,.005),d);V.position.y=a+y+.004,T.add(V);for(let z of[c,l])for(let j of[-1,1]){let Y=Sl(f,m,o,.045);Y.position.set(j*(A-.028),o,z),T.add(Y)}return un(T)}function Rl(i,e={}){let t=e.paper||null,n=i(e.color||"#f6efe1",t,{flatShading:!0}),r=i(e.accent||"#3c6a8c",t,{flatShading:!0}),a=i("#c9a77a",t),s=i("#fbf7ef",t),o=i("#2f3b46",null,{roughness:.55}),c=i(e.flag||"#ae2a20",null,{side:lt}),{hm:l,dg:h}=fa((w,A,C)=>[[0,-.035+.03*A*A*A],[C*.7,Math.max(-.035+.03*A*A*A,-.01)],[C*.95,.008+.01*A],[C*.965,.019+.01*A],[C,.085+.055*A*A]],.16,[0,2,1,1,1,1,2,0],[n,r,i(e.flag||"#ae2a20",t,{flatShading:!0})]),u=new le;u.add(l,new te(h,i("#c9a77a",t,{side:lt})));let d=new Ue,p=-.36,f=.2,m=.075,v=.2,g=.24;d.moveTo(p,m),d.lineTo(f,m),d.lineTo(f,.11),d.bezierCurveTo(f-.01,v-.03,f-.02,v,f-.06,v),d.lineTo(p+.02,v),d.quadraticCurveTo(p,v,p,v-.02),d.closePath();let b=qe(d,g,.008);u.add(new te(b,[s,s]));for(let w of[-1,1]){u.add(zt(Ye(p+.03,.11,f-.04,v-.025,.012),o,w*g/2));for(let C=1;C<6;C++){let I=p+.03+(f-.07-p)*C/6;u.add(zt(Ye(I-.005,.11,I+.005,v-.025,.002),s,w*(g/2+.004),.003))}u.add(zt(Ye(p+.01,.09,f-.02,.1,.004),r,w*g/2));let A=new te(new hn(.018,.006,8,20),c);A.rotation.y=Math.PI/2,A.position.set(w*(g/2+.012),.1,p+.015),u.add(A)}let x=li(d,w=>w.x>f-.08&&w.y>.11&&w.y<v-.02,.012,.02);x&&u.add(new te(qe(x,g-.03,0),o));let M=new te(qe(Ye(p-.015,0,f-.03,.012,.006),g+.03,.004),r);M.position.y=v,u.add(M);let E=v+.012,y=.035,T=g/2+.008;for(let w of[-1,1]){u.add(pe(.004,.004,f-p-.06,s,w*T,E+y,(p+f)/2-.03));for(let A=0;A<=8;A++)u.add(pe(.004,y,.004,s,w*T,E+y/2,p-.005+(f-p-.045)*A/8))}u.add(pe(g+.016,.004,.004,s,0,E+y,p-.005)),u.add(pe(.005,.12,.005,i("#6b5440"),0,.14,-.47));let _=new te(new xn(.07,.045,4,1),c);return _.rotation.y=Math.PI/2,_.position.set(0,.175,-.505),u.add(_),u.add(pe(.016,.022,.016,i("#6b5440"),0,.12,.38)),un(u)}function X1(i,e={}){let t=e.paper||null,n=i(e.color||"#fbf7ef",t,{flatShading:!0}),r=i(e.under||"#eadfcb",t,{flatShading:!0,side:kd,emissive:"#8a7a62",emissiveIntensity:1}),a=[0,.012,.72],s=[0,0,-.5],o=.075,c=[],l=[];for(let M of[-1,1]){let E=G=>[G[0]*M,G[1],G[2]],y=E([.2,.02,-.5]),T=E([.11,.024,.05]),_=E([.6,o,-.26]),w=E([.6,o,-.5]),A=E([.635,o+.1,-.33]),C=E([.635,o+.1,-.5]),I=(G,D,W)=>c.push(...M>0?[G,W,D]:[G,D,W]);I(a,s,y),I(a,y,T),I(T,y,w),I(T,w,_),l.push(_,w,C,_,C,A),I(E([0,.016,.66]),E([0,.016,-.12]),E([.085,.03,.06]))}let h=new Be;h.setAttribute("position",new Ce(c.flat(),3)),h.computeVertexNormals();let u=[];for(let M of[-1,1]){let E=[0,0,.6],y=[0,0,-.5],T=[M*.012,-.13,-.47],_=[M*.006,-.035,.38];u.push(...M>0?[E,T,y,E,_,T]:[E,y,T,E,T,_])}let d=new Be;d.setAttribute("position",new Ce(u.flat(),3)),d.computeVertexNormals();let p=new le,f="#9c8c72",m=new te(h,n),v=new te(h,r),g=new te(d,i(e.accent||"#3c6a8c",t,{flatShading:!0,side:lt,emissive:e.accent||"#3c6a8c",emissiveIntensity:.25}));m.add(ki(h,f,1)),g.add(ki(d,f,1));let b=new Be;b.setAttribute("position",new Ce(l.flat(),3)),b.computeVertexNormals();let x=new te(b,i(e.color||"#fbf7ef",t,{flatShading:!0,side:lt}));return x.add(ki(b,f,1)),p.add(m,v,g,x),un(p)}function q1(i,e,t,n,r=1.8){let a=i.attributes.position;for(let s=0;s<a.count;s++){let o=a.getZ(s);o>e&&a.setX(s,a.getX(s)*(1-n*Math.min(1,(o-e)/(t-e))**r))}return a.needsUpdate=!0,i.computeVertexNormals(),i}function s0(i,e,t,n,r,a){let s=new le,o=(l,h)=>{r&&q1(l,...r);let u=new te(l,h);return s.add(u),u},c=o(qe(i,e,t,9,1),[n.body,n.fold]);return c.add(ki(c.geometry,"#7a6d5c",50)),a&&(s.rotation.y=Math.PI),{g:s,add:o}}function o0(i,e,t,n,r,a,s,o,c){for(let l of[-1,1])if(c){i.add(zt(Ye(e,n,t,r,.01),o,l*a/2));for(let h=1;h<s;h++){let u=e+(t-e)*h/s;i.add(zt(Ye(u-.005,n,u+.005,r,.002),c,l*(a/2+.004),.003))}}else for(let h=0;h<s;h++){let u=(t-e)/s,d=e+u*h;i.add(zt(Ye(d+u*.18,n,d+u*.82,r,.008),o,l*a/2))}}function Al(i,e,t,n,r,a=.024){i.add(pe(r-.05,.03,.16,e,0,.026,n));for(let s of[-.05,.05])for(let o of[-1,1]){let c=Sl(e,t,a,.012);c.position.set(o*(r/2-.035),a,n+s),i.add(c)}}function Y1(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=1,a=.19,s=.2,o=.035,c=.008,l=r+.03,h={body:i(e.body||"#f7f4ee",t),fold:i(e.body||"#f7f4ee",t,{flatShading:!0})},u=i(e.color||"#1f4e9c",t),d=i("#2c3a48",null,{roughness:.45}),p=i("#3a3c40"),f=i("#9aa0a6",t),m=b=>(b.moveTo(-.5,o),b.lineTo(.38,o),b.quadraticCurveTo(.5,o,.5,.06),b.bezierCurveTo(.47,.1,.32,s,.12,s),b.lineTo(-.48,s),b.quadraticCurveTo(-.5,s,-.5,s-.02),b.closePath(),b),v=new le,g=[];for(let b=0;b<n;b++){let x=b===0,M=b===n-1&&n>1,E=x||M,y=E?m(new Ue):Ye(-.5,o,.5,s,.022),{g:T,add:_}=s0(y,a,c,h,E?[.1,.5+c,.62,1.7]:null,M);if(_(qe(Ye(-.5,.072,E?.47:.5,.086,.004),a+.008,0),u),_(qe(Ye(-.5,.093,E?.4:.5,.098,.002),a+.006,0),u),E){let w=li(y,A=>A.x>.24&&A.x<.42&&A.y>.1,c+.003,.012);w&&_(qe(w,a*.8,0),d)}if(o0(T,-.44,E?.06:.44,.122,.15,a,E?8:14,d),T.add(pe(a-.04,o,r-.1,p,0,o/2,-.02),pe(a-.01,.022,r-.3,f,0,o-.008,E?-.12:0)),E||T.add(pe(a*.7,s*.75,.03,p,0,s*.5,.51)),n>1&&T.add(pe(a*.7,s*.75,.03,p,0,s*.5,-.51)),!E&&b===1){let w=new S(0,s+c,.05),A=new S(0,s+.06,.12);T.add(pe(.06,.012,.05,p,0,s+c+.006,.02),Qe(w,A,.003,p),pe(.08,.004,.01,p,0,s+.062,.12))}T.position.z=-b*l,v.add(T),g.push(T)}return v.userData={cars:g,pitch:l},un(v)}function K1(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??2),r=1,a=.19,s=.215,o=.05,c=.008,l=r+.03,h={body:i(e.body||"#f3efe6",t),fold:i(e.body||"#f3efe6",t,{flatShading:!0})},u=i(e.color||"#ae2a20",t),d=i(e.accent||"#2c4a6e",t),p=i("#2c3a48",null,{roughness:.45}),f=i("#34363a"),m=i("#b9b2a6"),v=i("#fff4d6",null,{emissive:"#6a5a30"}),g=i("#d9d3c6",t),b=E=>(E.moveTo(-.5,o),E.lineTo(.485,o),E.quadraticCurveTo(.5,o,.5,o+.015),E.lineTo(.5,.115),E.lineTo(.44,.185),E.quadraticCurveTo(.42,s,.39,s),E.lineTo(-.48,s),E.quadraticCurveTo(-.5,s,-.5,s-.02),E.closePath(),E),x=new le,M=[];for(let E=0;E<n;E++){let y=E===0,T=E===n-1&&n>1,_=y||T,w=_?b(new Ue):Ye(-.5,o,.5,s,.024),{g:A,add:C}=s0(w,a,c,h,_?[.4,.5+c,.16,1.4]:null,T);if(C(qe(Ye(-.5,.075,_?.495:.5,.095,.004),a+.008,0),u),C(qe(Ye(-.5,.1,_?.495:.5,.105,.002),a+.006,0),d),_){let I=li(w,G=>G.x>.43&&G.y>.12&&G.y<.19,c+.003,.012);I&&C(qe(I,a*.92,0),p);for(let G of[-1,1])C(new st(.03,.014,.006).translate(G*.055,.088,.5+c+.002),v)}o0(A,-.4,_?.3:.4,.125,.17,a,_?6:8,p,h.body);for(let I of[-1,1])for(let G of _?[-.46,.34]:[-.46,.42])A.add(zt(Ye(G,o+.01,G+.045,.172,.006),g,I*a/2,.003));Al(A,f,m,-.32,a),Al(A,f,m,.32,a),A.add(pe(a-.06,.02,r-.5,f,0,o-.01,0));for(let I of[-.25,.1]){let G=new te(qe(Ye(I,0,I+.12,.016,.008),a*.55,.004),h.body);G.position.y=s+c,A.add(G)}_||A.add(pe(a*.65,s*.7,.03,f,0,s*.48,.51)),n>1&&A.add(pe(a*.65,s*.7,.03,f,0,s*.48,-.51)),A.position.z=-E*l,x.add(A),M.push(A)}return x.userData={cars:M,pitch:l},un(x)}function Z1(i,e={}){let t=e.paper||null,n=.01,r=.3,a=e.hang??.62,s=e.span??1.6,o=i(e.color||"#c8462e",t),c=i(e.color||"#c8462e",t,{flatShading:!0}),l=i("#f6efe1",t),h=i("#2f3d4a",null,{roughness:.45}),u=i("#3b3a38"),d=i("#8d8f92"),p=new Ue;p.moveTo(-.16,.02),p.lineTo(.16,.02),p.quadraticCurveTo(.2,.02,.205,.08),p.lineTo(.215,.29),p.quadraticCurveTo(.215,.33,.17,.335),p.lineTo(-.17,.335),p.quadraticCurveTo(-.215,.33,-.215,.29),p.lineTo(-.205,.08),p.quadraticCurveTo(-.2,.02,-.16,.02);let f=new le;f.add(new te(qe(p,r,n,10,1),[o,c]));for(let b of[-1,1]){f.add(zt(Ye(-.18,.14,.18,.29,.016),h,b*r/2));for(let x of[-.06,.06])f.add(zt(Ye(x-.006,.14,x+.006,.29,.002),o,b*(r/2+.004),.003));f.add(zt(Ye(-.2,.105,.2,.122,.004),l,b*r/2))}let m=li(p,b=>Math.abs(b.x)>.19&&b.y>.14&&b.y<.29,n+.003,.012);m&&f.add(new te(qe(m,r-.05,0),h));let v=new te(qe(Ye(-.15,0,.15,.018,.009),r-.06,.006),l);v.position.y=.335+n,f.add(v);let g=new S(0,a-.03,0);for(let b of[-1,1])f.add(Qe(new S(b*.07,.36,0),g,.006,d));if(f.add(pe(.03,.05,.03,d,0,a-.04,0),pe(.09,.03,.2,u,0,a-.005,0)),s>0)for(let b of[-1,1]){let x=new te(new ge(.004,.004,s,6),u);x.rotation.x=Math.PI/2,x.position.set(b*.03,a+.012,0),f.add(x)}return f.userData={cableY:a+.012},un(f)}function Cl(i,e={}){let t=e.paper||null,n=i(e.color||"#f7f3ea",t),r=i(e.color||"#f7f3ea",t,{flatShading:!0}),a=i(e.accent||"#2c4a6e",t,{flatShading:!0}),s=i(e.flag||"#ae2a20",t,{flatShading:!0}),o=i("#2c3a48",null,{roughness:.45}),c=i("#2e2c2a"),l=i("#e07a2c",t),h=.15,{hm:u,dg:d}=fa((_,w,A)=>[[0,-.05+.04*w*w*w],[A*.75,Math.max(-.05+.04*w*w*w,-.02)],[A*.95,.01+.012*w],[A*.965,.024+.012*w],[A*.985,.075+.02*w],[A*.99,.09+.02*w],[A,h+.045*w*w]],.17,[0,3,0,2,1,1,1,1,2,0,3,0],[r,a,s,a]),p=new le;p.add(u,new te(d,i("#b9b2a6",t,{side:lt})));let f=.065;[[-.44,.24,.3],[-.38,.14,.27]].forEach(([_,w,A],C)=>{let I=h-.012+C*f,G=new te(qe(Ye(_,0,w,f,.008),A,.005),[n,n]);G.position.y=I,p.add(G);let D=Math.round((w-_)/.035);for(let W of[-1,1])for(let V=0;V<D;V++){let z=_+.02+V*(w-_-.04)/D;p.add(zt(Ye(z,I+.022,z+.022,I+.046,.004),o,W*A/2))}});let v=h-.012+2*f,g=new Ue;g.moveTo(-.04,0),g.lineTo(.15,0),g.lineTo(.17,.03),g.lineTo(.145,.06),g.lineTo(-.04,.06),g.closePath();let b=new te(qe(g,.34,.004),[n,n]);b.position.y=v,p.add(b);let x=li(g,_=>_.x>.15&&_.y>.032&&_.y<.056,.007,.012);if(x){let _=new te(qe(x,.3,0),o);_.position.y=v,p.add(_)}for(let _ of[-1,1])p.add(zt(Ye(-.02,v+.03,.13,v+.05,.004),o,_*.17));let M=new Ue;M.moveTo(-.2,0),M.lineTo(-.1,0),M.lineTo(-.12,.1),M.lineTo(-.21,.1),M.closePath();let E=new te(qe(M,.08,.006),a);E.position.y=v,p.add(E),p.add(pe(.075,.016,.085,c,0,v+.105,-.165)),p.add(Qe(new S(0,v+.06,.05),new S(0,v+.15,.04),.004,c),pe(.05,.01,.012,c,0,v+.12,.045));for(let _ of[-1,1])for(let w of[-.3,-.16]){let A=new te(qe(Ye(w,0,w+.1,.03,.014),.035,.006),l);A.position.set(_*.155,h-.012+f+.02,0),p.add(A)}let y=h-.012+f*2,T=.03;for(let _ of[-1,1]){p.add(pe(.004,.004,.18,n,_*.133,y+T,-.29));for(let w=0;w<=5;w++)p.add(pe(.004,T,.004,n,_*.133,y+T/2,-.38+w*.036))}return p.add(pe(.27,.004,.004,n,0,y+T,-.38)),p.add(pe(.016,.022,.016,c,.04,h+.02,.36),pe(.016,.022,.016,c,-.04,h+.02,.36),pe(.005,.1,.005,c,0,h+.08,.47)),un(p)}function J1(i,e={}){let t=e.paper||null,n=Math.min(1,Math.max(0,e.hood??1)),r=i(e.color||"#2a2624",t,{roughness:.6}),a=i(e.color||"#2a2624",t,{roughness:.6,flatShading:!0}),s=i(e.accent||"#b8342a",t),o=i(e.blanket||"#c23a2c",t),c=i(e.hoodColor||"#2e2a28",t,{side:lt,flatShading:!0}),l=i("#b8913a"),h=i("#f6efe1",t),u=new le,d=.24,p=-.2,f=.215;for(let T of[-1,1]){let _=new le,w=new te(new hn(d-.012,.012,8,40),r);w.rotation.y=Math.PI/2,_.add(w);for(let C=0;C<14;C++){let I=C/14*Math.PI*2,G=pe(.008,d-.03,.01,s,0,0,0);G.position.set(0,Math.cos(I)*(d-.03)/2,Math.sin(I)*(d-.03)/2),G.rotation.x=I,_.add(G)}let A=new te(new ge(.03,.03,.04,14),l);A.rotation.z=Math.PI/2,_.add(A),_.userData.keep=!0,_.position.set(T*f,d,p),u.add(_)}u.add(Qe(new S(-f,d,p),new S(f,d,p),.008,r));let m=new Ue;m.moveTo(-.34,.26),m.lineTo(-.04,.26),m.quadraticCurveTo(.02,.26,.02,.32),m.lineTo(.02,.4),m.lineTo(-.2,.4),m.lineTo(-.27,.62),m.quadraticCurveTo(-.29,.66,-.33,.64),m.lineTo(-.36,.3),m.quadraticCurveTo(-.36,.26,-.34,.26),u.add(new te(qe(m,.38,.008,8,1),[r,a])),u.add(pe(.33,.03,.17,s,0,.415,-.11));let v=pe(.33,.2,.025,s,0,.52,-.25);v.rotation.x=-.36,u.add(v);let g=new Ue;g.moveTo(-.12,.435),g.lineTo(.05,.435),g.quadraticCurveTo(.08,.43,.085,.38),g.lineTo(.09,.24),g.lineTo(.06,.24),g.lineTo(.05,.4),g.lineTo(-.12,.42),g.closePath(),u.add(new te(qe(g,.31,.004,6,1),o)),u.add(pe(.3,.015,.14,r,0,.235,.06),Qe(new S(-.12,.235,0),new S(-.12,.3,-.02),.006,r),Qe(new S(.12,.235,0),new S(.12,.3,-.02),.006,r));for(let T of[-1,1])u.add(Qe(new S(T*.19,.3,-.3),new S(T*.17,.2,.5),.01,r),pe(.012,.012,.03,l,T*.17,.2,.49));u.add(Qe(new S(-.17,.2,.48),new S(.17,.2,.48),.009,r));for(let T of[-1,1]){let _=new te(new ge(d+.02,d+.02,.05,16,1,!0,Math.PI*.12,Math.PI*.62),i(e.color||"#2a2624",t,{side:lt,flatShading:!0}));_.geometry.rotateZ(Math.PI/2),_.position.set(T*f,d,p),u.add(_)}let b=.3,x=new S(0,.42,-.28),M=4,E=.6,y=.55;for(let T=0;T<M;T++){let _=n*T*y+(1-n)*(-.42+T*.03)+.05,w=b+T*.008,A=new ge(w,w,.42,10,1,!0,Math.PI-_-E,E);A.rotateZ(Math.PI/2);let C=new te(A,c);C.position.copy(x),C.add(ki(A,"#8a7a62",20)),u.add(C)}for(let T of[-1,1])u.add(Qe(new S(T*.2,x.y,x.z),new S(T*.17,.33,-.06),.005,l));if(n>.6){let T=n*(M-1)*y+.05+E,_=new S(.17,x.y+Math.sin(T)*(b+.018),x.z-Math.cos(T)*(b+.018)),w=new te(new ge(.028,.028,.06,12),i("#f4e2c0",null,{emissive:"#7a4a1a",emissiveIntensity:.5}));w.position.set(_.x,_.y-.06,_.z),u.add(w,pe(.06,.008,.06,s,_.x,_.y-.028,_.z),pe(.06,.008,.06,s,_.x,_.y-.092,_.z))}return un(u)}function Q1(i,e={}){let t=e.paper||null,n=i(e.color||"#2e2925",t,{flatShading:!0,roughness:.42}),r=i(e.accent||"#a8302a",t),a=i("#b8913a",null,{metalness:.4,roughness:.5}),s=i("#d8d5cc",null,{metalness:.55,roughness:.35}),o=i("#5a4030",t),c=y=>{let T=2*y-1;return .045+.12*T**4+.035*Math.max(0,T)**4},{hm:l,dg:h}=fa(y=>{let T=2*y-1,_=-.025+.075*T**4,w=.072*Math.sin(Math.PI*y)**.55;return Array.from({length:7},(A,C)=>{let I=C/6*Math.PI/2;return[w*Math.sin(I)**.85,_+(c(y)-_)*(1-Math.cos(I))**1.15]})},1,Array(12).fill(0),[n],40,()=>1),u=new le;l.children[0].material.color.set("#6b5f52"),u.add(l,new te(h,n));let d=c(.5)-.012;u.add(pe(.09,.03,.09,r,0,d+.015,-.04));let p=pe(.09,.06,.016,r,0,d+.05,-.09);p.rotation.x=-.3,u.add(p);for(let y of[-1,1])u.add(pe(.008,.012,.09,a,y*.048,d+.036,-.04));u.add(pe(.08,.02,.04,n,0,d+.01,.09),pe(.07,.008,.035,r,0,d+.024,.09));let f=.455,m=c(.955),v=[[.03,0],[.016,.012]];for(let y=0;y<6;y++){let T=.022+y*.019,_=.062-y*.003;v.push([.016,T],[_-.006,T+.001],[_,T+.005],[_-.006,T+.009],[.017,T+.01])}v.push([.02,.138],[.062,.144],[.078,.153],[.07,.164],[.03,.168],[.006,.16],[-.003,.14],[-.006,.1],[-.024,.088],[-.026,.081],[-.007,.078],[-.006,.04],[-.002,.012],[.004,0]);let g=new Ue(v.map(([y,T])=>new ie(y,T))),b=qe(g,.007,.0015,6,1),x=new te(b,[s,s]);x.add(ki(b,"#7d7a72",30)),x.position.set(0,m-.03,f-.01),u.add(x);let M=c(.2),E=new S(.05,M+.07,-.3);u.add(Qe(new S(.05,M-.01,-.3),E,.008,o),Qe(E.clone().add(new S(-.03,.01,.08)),new S(.2,-.03,-.62),.005,o)),u.add(pe(.03,.006,.07,o,.18,-.02,-.6));for(let y of[-1,1])u.add(pe(.006,.018,.02,a,y*.07,d+.012,.02));return un(u)}function Mo(i,e,t=.006,n=10){let r=new St(i,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(e-t*2)/2),r}function $1(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=e.loco??!0,a=1,s=.17,o=.205,c=.045,l=a+.03,h=i(e.color||"#b8282c",t),u=i(e.color||"#b8282c",t,{flatShading:!0}),d=i("#f4ecd8",t),p=i("#34363a"),f=i("#b9b2a6"),m=i("#3a5266",null,{roughness:.25,metalness:.1}),v=i("#fff4d6",null,{emissive:"#6a5a30"}),g=i("#faf7f0"),b=new Ue,x=.1,M=.055;b.moveTo(s/2,x),b.lineTo(s/2,o-M),b.quadraticCurveTo(s/2,o,s/2-M,o),b.lineTo(-s/2+M,o),b.quadraticCurveTo(-s/2,o,-s/2,o-M),b.lineTo(-s/2,x),b.closePath();let E=li(b,_=>_.y>x+.004,.003,.008),y=new le,T=[];for(let _=0;_<n;_++){let w=new le;if(r&&_===0){w.add(new te(Mo(Ye(-s/2,c,s/2,o,.03),a-.02,.01,6),[h,u]));for(let C of[-1,1])w.add(pe(.062,.042,.004,m,C*.037,.165,a/2+.001)),w.add(pe(.022,.012,.004,v,C*.055,.075,a/2+.001)),w.add(pe(.004,.04,.06,m,C*(s/2+.003),.16,.38)),w.add(pe(.004,.04,.06,m,C*(s/2+.003),.16,-.38)),w.add(pe(.004,.05,.016,g,C*(s/2+.003),.11,0),pe(.004,.016,.05,g,C*(s/2+.003),.11,0)),w.add(pe(.004,.006,a-.1,d,C*(s/2+.003),.07,0));w.add(pe(.022,.012,.004,v,0,.197,a/2+.001),pe(.11,.02,.004,p,0,.09,a/2+.001));for(let C of[-.25,.25])w.add(pe(.05,.012,.06,p,0,o+.006,C)),w.add(Qe(new S(0,o+.012,C-.03),new S(0,o+.05,C+.01),.0025,p),Qe(new S(0,o+.05,C+.01),new S(0,o+.065,C-.02),.0025,p),pe(.07,.004,.008,p,0,o+.066,C-.02));w.add(pe(s-.06,.02,.3,p,0,o+.01,0))}else{w.add(new te(Mo(Ye(-s/2,c,s/2,x+.004,.01),a-.02,.005,4),[h,u])),w.add(new te(Mo(b,a-.06,0,10),m));for(let C=0;C<=7;C++){let I=-.47+C*.134;if(E){let G=new te(Mo(E,.016,0,10),h);G.position.z=I,w.add(G)}}for(let C of[-.485,.485]){let I=new te(Mo(b,.03,.004,10),h);I.position.z=C,I.scale.set(1.02,1,1),w.add(I)}w.add(pe(.05,.008,a-.08,h,0,o+.003,0));for(let C of[-1,1])w.add(pe(.004,.006,a-.08,d,C*(s/2+.003),.07,0))}Al(w,p,f,-.32,s,.022),Al(w,p,f,.32,s,.022),w.add(pe(s-.05,.02,a-.5,p,0,c-.01,0)),_>0&&w.add(pe(s*.6,o*.6,.03,p,0,o*.45,.51)),_<n-1&&w.add(pe(s*.6,o*.6,.03,p,0,o*.45,-.51)),w.position.z=-_*l,y.add(w),T.push(w)}return y.userData={cars:T,pitch:l},un(y)}function V1(i,e,t,n,r=12,a=.02){let s=new le,o=new te(new hn(i-.01,.01,8,36),e);o.rotation.y=Math.PI/2,s.add(o);for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=pe(.003,i-.02,.003,t,0,0,0);u.position.set(0,Math.cos(h)*(i-.02)/2,Math.sin(h)*(i-.02)/2),u.rotation.x=h,s.add(u)}let c=new te(new ge(.016,.016,a,12),n);return c.rotation.z=Math.PI/2,s.add(c),s.userData.keep=!0,s}function eg(i,e={}){let t=e.paper||null,n=i(e.color||"#1f6aa5",t),r=i(e.color||"#1f6aa5",t,{flatShading:!0}),a=i(e.accent||"#e8b830",t),s=i(e.roof||"#23303a",t),o=i("#d6d6d2",null,{metalness:.6,roughness:.3}),c=i("#2a2826"),l=i("#b8342a",t),h=i("#c9c3b8"),u=i("#3a4b59",null,{roughness:.4,transparent:!0,opacity:.7}),d=i("#fff4d6",null,{emissive:"#6a5a30"}),p=new le,f=new Ue;f.moveTo(-.46,.1),f.lineTo(.3,.1),f.quadraticCurveTo(.46,.1,.47,.2),f.lineTo(.42,.3),f.quadraticCurveTo(.36,.33,.28,.3),f.lineTo(.12,.26),f.lineTo(-.46,.26),f.closePath();let m=q1(qe(f,.42,.012,8,1),.08,.5,.72,1.3),v=new te(m,[n,r]);v.add(ki(m,"#1a2a3a",45)),p.add(v);for(let y of[-1,1])p.add(zt(Ye(-.44,.17,.05,.19,.004),a,y*.21));p.add(pe(.36,.05,.16,l,0,.29,-.3));let g=pe(.36,.14,.03,l,0,.38,-.42);g.rotation.x=-.15,p.add(g),p.add(pe(.12,.04,.12,c,0,.3,.02),Qe(new S(0,.3,.28),new S(0,.42,.22),.008,c),Qe(new S(-.12,.42,.22),new S(.12,.42,.22),.007,o));let b=pe(.3,.2,.006,u,0,.5,.25);b.rotation.x=.25,p.add(b);let x=new Ue;x.moveTo(.26,.6),x.quadraticCurveTo(-.1,.66,-.46,.64),x.quadraticCurveTo(-.5,.63,-.5,.58),x.lineTo(-.47,.6),x.quadraticCurveTo(-.1,.63,.26,.58),x.closePath();let M=qe(x,.48,.006,12,1);p.add(new te(M,[s,s]));for(let y of[-1,1])p.add(zt(x,a,y*.24,.006));for(let[y,T,_]of[[.19,.24,.27],[-.19,.24,.27],[.2,-.45,.26],[-.2,-.45,.26]])p.add(Qe(new S(y,_,T),new S(y,T>0?.59:.62,T),.007,o));p.add(pe(.05,.03,.01,d,0,.26,.47));let E=Sl(c,h,.08,.05);E.position.set(0,.08,.36),p.add(E);for(let y of[-1,1]){let T=Sl(c,h,.085,.05);T.position.set(y*.2,.085,-.3),p.add(T)}return un(p)}function bx(i,e,t){let n=[[.04,.06],[-.18,.08],[-.22,.24],[-.2,.4],[-.12,.56]].map(([c,l])=>[c*i/.5*1.45,l*i/.5]),r=[.06*i/.5*1.45,.48*i/.5],a=new Ue;a.moveTo(...n[0]),n.slice(1).forEach(c=>a.lineTo(...c)),a.lineTo(...r),a.closePath();let s=new le;s.add(new te(qe(a,.005,0,8,1),e));let o=c=>{for(let l=1;l<n.length;l++)if(c<=n[l][1]){let[h,u]=n[l-1],[d,p]=n[l];return h+(d-h)*(c-u)/(p-u)}return n[n.length-1][0]};for(let c=1;c<=5;c++){let l=n[0][1]+(r[1]-n[0][1])*c/6,h=n[0][0]+(r[0]-n[0][0])*c/6,u=o(l);s.add(pe(.012,.005,Math.abs(h-u),t,0,l,(h+u)/2))}return s}function tg(i,e={}){let t=e.paper||null,n=Math.min(3,Math.max(1,e.sails??3)),r=i(e.wood||"#5a3a24",t,{flatShading:!0}),a=i("#c9a06a",t,{flatShading:!0}),s=i("#8a5a36",t),o=i("#efe3c8",t),c=i("#f3d79a",null,{emissive:"#8a6a30",emissiveIntensity:.5}),l=i(e.color||"#b0402a",t,{side:lt}),h=i("#3a2a1e"),u=i("#2e241c"),d=y=>.075+.07*(1-y)**4+.05*y**4,{hm:p,dg:f}=fa((y,T,_)=>{let w=-.04+.03*y**3,A=d(y);return[[0,w],[_*.75,Math.max(w,-.015)],[_*.95,.03],[_*.98,A-.018],[_,A]]},.15,[1,0,0,0,0,0,0,1],[r,a]),m=new le;m.add(p,new te(f,i("#a87a4c",t,{side:lt})));let v=d(.45)-.012,g=[[-.36,.2,.22,.07],[-.3,.04,.2,.06]];g.forEach(([y,T,_,w],A)=>{let C=v+(A?g[0][3]:0),I=new te(qe(Ye(y,0,T,w,.006),_,.004),[s,s]);I.position.y=C,m.add(I);let G=Math.round((T-y)/.06);for(let D of[-1,1])for(let W=0;W<G;W++){let V=y+.02+W*(T-y-.03)/G;m.add(zt(Ye(V,C+w*.3,V+.03,C+w*.75,.004),c,D*_/2))}m.add(pe(_+.01,.006,T-y+.02,o,0,C+w+.003,(y+T)/2))});let b=v+.13+.006,x=.025;for(let y of[-1,1]){m.add(pe(.004,.004,.34,o,y*.1,b+x,-.13));for(let T=0;T<=6;T++)m.add(pe(.004,x,.004,o,y*.1,b+x/2,-.3+T*.057))}[[.06,.62],[.33,.42],[-.4,.36]].slice(0,n).forEach(([y,T],_)=>{let w=d(.5+y)-.012;m.add(Qe(new S(0,w,y),new S(0,w+T+.03,y),.006,u));let A=bx(T,l,h);A.position.set(0,w,y),A.rotation.y=.35-_*.12,m.add(A)}),m.add(Qe(new S(0,d(0)-.01,-.48),new S(0,d(0)+.1,-.48),.003,u));let E=new te(new xn(.05,.03),i("#b5281c",null,{side:lt}));E.rotation.y=Math.PI/2,E.position.set(0,d(0)+.085,-.505),m.add(E);for(let y of[-1,1])m.add(pe(.01,.03,.02,u,y*.05,d(.92)-.02,.42));return un(m)}function ng(i,e={}){let t=e.paper||null,n=i(e.wood||"#8a5a34",t,{flatShading:!0}),r=i(e.color||"#2f6db3",t,{flatShading:!0}),a=i("#7a3a2a",t),s=i("#9a9a96",null,{metalness:.5,roughness:.4}),o=i("#2a2622"),c=i("#e9e2d0",t,{side:lt}),l=b=>.055+.21*b**6,{hm:h,dg:u}=fa((b,x,M)=>{let E=-.022+.06*b**4,y=l(b);return[[0,E],[M*.85,E+.01],[M,y-.016],[M,y]]},.075,[1,0,0,0,0,1],[n,r],32,b=>b<.08?.62+b*4:Math.min(1,Math.sin(Math.PI*Math.min(1,b*.98))**.5*1.08)),d=new le;d.add(h,new te(u,i("#b0805a",t,{side:lt})));let p=new S(0,l(.99),.49);["#e0689a","#f0c030","#3aa05a","#e0689a","#f0c030"].forEach((b,x)=>{let M=pe(.012,.07,.006,i(b,null,{side:lt}),(x-2)*.008,p.y-.045,p.z-.02-x*.006);M.rotation.x=.25+x*.05,d.add(M)});let f=new te(new hn(.014,.005,6,12),i("#f0c030"));f.position.set(0,p.y-.01,p.z-.012),d.add(f);let m=l(.03)+.02,v=new S(0,m,-.47),g=new S(0,-.03,-.76);d.add(pe(.05,.05,.08,a,0,m+.025,-.45),pe(.03,.02,.04,o,0,m+.06,-.45),Qe(new S(0,l(.03)-.01,-.47),v,.008,o)),d.add(Qe(v,g,.005,s),Qe(new S(0,m+.02,-.42),new S(0,m+.06,-.28),.004,s));for(let b of[0,Math.PI/2]){let x=pe(.004,.03,.008,s,0,g.y,g.z);x.rotation.z=b+.4,d.add(x)}if(e.canopy??!0){let b=l(.5)+.11,x=.06;for(let[E,y]of[[x,-.22],[-x,-.22],[x,.18],[-x,.18]])d.add(Qe(new S(E,l(.5+y)-.012,y),new S(E,b,y),.003,o));let M=new te(qe(Ye(-.25,0,.21,.006,.003),.15,.002),c);M.position.y=b,d.add(M)}return un(d)}function ig(i,e={}){let t=e.paper||null,n=i(e.color||"#2f7a8a",t),r=i(e.color||"#2f7a8a",t,{flatShading:!0}),a=i(e.accent||"#c23a2c",t),s=i("#2b2a28"),o=i("#cfcfca",null,{metalness:.5,roughness:.35}),c=i("#3a3430",t,{side:lt,flatShading:!0}),l=new le,h=.14,u=new Ue;u.moveTo(.12,.18),u.lineTo(.42,.18),u.quadraticCurveTo(.47,.18,.47,.13),u.lineTo(.49,.1),u.lineTo(.52,.1),u.lineTo(.5,.2),u.lineTo(.38,.26),u.lineTo(.2,.26),u.lineTo(.16,.48),u.quadraticCurveTo(.14,.52,.1,.5),u.lineTo(.1,.2),u.quadraticCurveTo(.1,.18,.12,.18);let d=qe(u,.36,.01,8,1),p=new te(d,[n,r]);p.add(ki(d,"#1a3a40",45)),l.add(p),l.add(pe(.3,.025,.17,a,0,.272,.29));let f=pe(.3,.17,.02,a,0,.38,.19);f.rotation.x=-.2,l.add(f);for(let M=0;M<3;M++){let E=new ge(.16+M*.006,.16+M*.006,.36,8,1,!0,Math.PI-(-.35+M*.05)-.45,.45);E.rotateZ(Math.PI/2);let y=new te(E,c);y.position.set(0,.42,.14),l.add(y)}for(let M of[-1,1]){let E=V1(h,s,o,o,16);E.position.set(M*.22,h,.3),l.add(E),l.add(Qe(new S(M*.2,h,.3),new S(M*.17,.2,.3),.006,s))}let m=V1(h,s,o,o,16);m.position.set(0,h,-.4),l.add(m);let v=new S(0,.5,-.27),g=new S(0,.16,-.16),b=new S(0,.52,.06);l.add(Qe(new S(0,.2,.12),g,.01,s),Qe(g,new S(0,h,-.4),.007,s),Qe(g,v,.009,s),Qe(v,new S(0,h,-.4),.006,s)),l.add(Qe(new S(0,.45,.1),b,.008,s),Qe(new S(-.14,.52,.06),new S(.14,.52,.06),.007,o),Qe(v,new S(0,.45,.1),.008,s)),l.add(pe(.05,.02,.09,s,0,v.y+.012,v.z-.01));let x=new te(new ge(.03,.03,.012,14),o);x.rotation.z=Math.PI/2,x.position.copy(g),l.add(x);for(let M of[-1,1])l.add(pe(.04,.008,.02,s,M*.04,g.y+M*.04,g.z+M*.02));return un(l)}function rg(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=1,a=.18,s=.2,o=.035,c=.008,l=r+.03,h={body:i(e.body||"#f6f5f1",t),fold:i(e.body||"#f6f5f1",t,{flatShading:!0})},u=i(e.color||"#c8282c",t),d=i(e.accent||"#c9a24a",t),p=i("#2a3644",null,{roughness:.4}),f=i("#3a3c40"),m=i("#a5a8ab",t),v=M=>(M.moveTo(-.5,o),M.lineTo(.36,o),M.quadraticCurveTo(.5,o,.5,.055),M.bezierCurveTo(.44,.12,.3,s,.1,s),M.lineTo(-.48,s),M.quadraticCurveTo(-.5,s,-.5,s-.02),M.closePath(),M),g=(M,E,y,T)=>{let _=new Ue;return _.moveTo(-.5,E),M?(_.lineTo(.08,E),_.quadraticCurveTo(.28,E,.37,E+T),_.lineTo(.355,y+T),_.quadraticCurveTo(.27,y,.08,y)):(_.lineTo(.5,E),_.lineTo(.5,y)),_.lineTo(-.5,y),_.closePath(),_},b=new le,x=[];for(let M=0;M<n;M++){let E=M===0,y=M===n-1&&n>1,T=E||y,_=T?v(new Ue):Ye(-.5,o,.5,s,.022),{g:w,add:A}=s0(_,a,c,h,T?[.08,.5+c,.66,1.6]:null,y);if(A(qe(g(T,.068,.084,.04),a+.008,0),u),A(qe(g(T,.089,.093,.04),a+.006,0),d),T){let C=li(_,I=>I.x>.24&&I.x<.43&&I.y>.115,c+.003,.012);C&&A(qe(C,a*.78,0),p)}if(o0(w,-.44,T?.04:.44,.118,.152,a,T?8:14,p),w.add(pe(a-.04,o,r-.1,f,0,o/2,-.02),pe(a-.01,.022,r-.3,m,0,o-.008,T?-.12:0)),T||w.add(pe(a*.7,s*.75,.03,f,0,s*.5,.51)),n>1&&w.add(pe(a*.7,s*.75,.03,f,0,s*.5,-.51)),!T&&M===1){let C=new S(0,s+c,.05),I=new S(0,s+.06,.12);w.add(pe(.06,.012,.05,f,0,s+c+.006,.02),Qe(C,I,.003,f),pe(.08,.004,.01,f,0,s+.062,.12))}w.position.z=-M*l,b.add(w),x.push(w)}return b.userData={cars:x,pitch:l},un(b)}function ag(i,e={}){let t=e.paper||null,n=i(e.wood||"#3e3128",t,{flatShading:!0}),r=i("#7a5a3e",t,{side:lt}),a=i(e.color||"#26221f",t,{side:lt,flatShading:!0}),s=i("#5a4636",t),o=i("#6b4c32",t),c=p=>.05+.035*(2*p-1)**4,{hm:l,dg:h}=fa((p,f,m)=>{let v=-.022+.02*(2*p-1)**4;return[[0,v],[m*.8,v+.01],[m*.97,c(p)-.015],[m,c(p)]]},.075,[0,0,0,0,0,0],[n],32,p=>Math.sin(Math.PI*p)**.55),u=new le;u.add(l,new te(h,r)),[[-.17,.062,.14],[0,.07,.16],[.16,.06,.12]].forEach(([p,f,m])=>{let v=c(.5+p)-.012,g=new ge(f,f,m,14,1,!0,Math.PI/2,Math.PI);g.rotateX(Math.PI/2);let b=new te(g,a);b.position.set(0,v,p),u.add(b);let x=Math.round(m/.022);for(let M=0;M<=x;M++){let E=new te(new hn(f+.002,.0022,4,16,Math.PI),s);E.position.set(0,v,p-m/2+M*m/x),u.add(E)}});let d=c(.1);return u.add(Qe(new S(.05,d+.01,-.36),new S(.16,-.02,-.62),.004,o),pe(.025,.004,.06,o,.16,-.02,-.61)),u.add(Qe(new S(-.05,d+.03,-.3),new S(-.07,d,-.12),.003,o)),un(u)}function sg(i,e={}){let t=e.paper||null,n=Math.max(1,e.decks??3),r=i("#f7f5ef",t),a=i("#f7f5ef",t,{flatShading:!0}),s=i(e.accent||"#2c5a8a",t,{flatShading:!0}),o=i("#ae2a20",t,{flatShading:!0}),c=i("#2c3a48",null,{roughness:.4}),l=i("#2e2c2a"),h=i(e.accent||"#2c5a8a",t,{side:lt}),u=.1,{hm:d,dg:p}=fa((M,E,y)=>[[0,-.04+.03*E**3],[y*.8,-.015],[y*.95,.008+.01*E],[y*.965,.02+.01*E],[y*.985,.05+.015*E],[y*.99,.062+.015*E],[y,u+.03*E*E]],.105,[0,3,0,2,1,1,1,1,2,0,3,0],[a,s,o,s]),f=new le;f.add(d,new te(p,i("#c9c2b4",t,{side:lt})));let m=.055,v=u-.012;for(let M=0;M<n;M++){let E=-.42+M*.03,y=.3-M*.06,T=.19-M*.012,_=u-.012+M*m,w=new te(qe(Ye(E,0,y,m,.022),T,.004,10),[r,r]);w.position.y=_,f.add(w);for(let C of[-1,1]){f.add(zt(Ye(E+.025,_+.014,y-.03,_+.042,.005),c,C*T/2));let I=Math.round((y-E-.06)/.04);for(let G=1;G<I;G++){let D=E+.025+(y-E-.055)*G/I;f.add(zt(Ye(D-.003,_+.014,D+.003,_+.042,.001),r,C*(T/2+.004),.003))}f.add(pe(.004,.004,y-E-.04,r,C*(T/2+.012),_+.03,(E+y)/2))}let A=li(Ye(E,0,y,m,.022),C=>C.x>y-.025&&C.y>.014&&C.y<.042,.007,.01);if(A){let C=new te(qe(A,T-.03,0),c);C.position.y=_,f.add(C)}v=_+m}let g=v+.004;for(let[M,E]of[[.07,-.25],[-.07,-.25],[.07,0],[-.07,0]])f.add(Qe(new S(M,g,E),new S(M,g+.05,E),.003,l));let b=new te(qe(Ye(-.27,0,.02,.006,.003),.17,.002),h);b.position.y=g+.05,f.add(b),f.add(Qe(new S(0,g,.08),new S(0,g+.1,.07),.004,l),pe(.05,.008,.01,l,0,g+.085,.072)),f.add(Qe(new S(0,u,-.48),new S(0,u+.09,-.48),.003,l));let x=new te(new xn(.045,.028),i("#c8282c",null,{side:lt}));return x.rotation.y=Math.PI/2,x.position.set(0,u+.075,-.502),f.add(x),un(f)}function og(i,e={}){let t=e.paper||null,n=i(e.color||"#c9b26a",t),r=i("#8f7a3e",t),a=i("#5a4a32",t),s=i("#b59a58",t),o=e.umbrella===null?null:i(e.umbrella||"#c23a2c",t,{side:lt,flatShading:!0}),c=new le,l=9,h=.017,u=.34;for(let d=0;d<l;d++){let p=(d/(l-1)-.5)*u,f=1-Math.abs(d/(l-1)-.5)*.4,m=new yn([[-.5,.02],[-.3,.004],[.15,.004],[.36,.03*f],[.5,.13*f]].map(([v,g])=>new S(p,g+.003,v)));c.add(new te(new oi(m,24,h,8),n));for(let v=1;v<6;v++){let g=v/6,b=m.getPointAt(g),x=m.getTangentAt(g),M=new te(new hn(h+.001,.0028,4,12),r);M.position.copy(b),M.lookAt(b.clone().add(x)),c.add(M)}}for(let d of[-.36,-.02,.28]){let f=new te(new ge(.01,.01,u+.04,8),n);f.rotation.z=Math.PI/2,f.position.set(0,.024,d),c.add(f);for(let m=0;m<l;m+=2)c.add(pe(.012,.012,.024,a,(m/(l-1)-.5)*u,.024,d))}for(let d of[-1,1]){let p=d*.075,f=-.12;c.add(pe(.11,.012,.1,s,p,.075,f));let m=pe(.11,.09,.01,s,p,.12,f-.05);m.rotation.x=-.18,c.add(m);for(let[v,g]of[[-.05,-.045],[.05,-.045],[-.05,.045],[.05,.045]])c.add(pe(.008,.05,.008,s,p+v,.048,f+g))}if(o){c.add(Qe(new S(0,.03,-.2),new S(0,.38,-.16),.004,a));let d=new te(new Mn(.19,.07,12,1,!0),o);d.position.set(0,.36,-.16),c.add(d)}return c.add(Qe(new S(-.12,.03,-.46),new S(.1,.05,.42),.006,n)),un(c)}var xx=["deer","crane","monkey","koi","penguin","koala","kangaroo","camel"],cg=24,yx={deer:.09,crane:.1,monkey:.05,koi:.06,penguin:.055,koala:.05,kangaroo:.085,camel:.12},Mx={deer:7,crane:5,monkey:6,koi:8,penguin:8,koala:3,kangaroo:5,camel:4};function lg(i,e="\u65E5\u672C"){if(!i)return[];if(Array.isArray(i.fauna))return i.fauna.filter(r=>xx.includes(r));let t=[i.title,i.route,i.cap,...i.spots||[]].join(" "),n=[];return/奈良公園|奈良|東大寺|春日大社|宮島|嚴島|厳島/.test(t)&&n.push("deer"),/丹頂|釧路|鶴居|鶴見台/.test(t)&&n.push("crane"),/地獄谷|雪猴|スノーモンキー/.test(t)&&n.push("monkey"),/錦鯉|鯉魚|鯉/.test(t)&&n.push("koi"),/企鵝|ペンギン|菲利普島|旭山動物園/.test(t)&&n.push("penguin"),(/無尾熊|考拉|コアラ/.test(t)||e==="\u6FB3\u6D32"&&/動物園|野生動物/.test(t))&&n.push("koala"),(/袋鼠|カンガルー/.test(t)||e==="\u6FB3\u6D32"&&/動物園|野生動物/.test(t))&&n.push("kangaroo"),/駱駝|らくだ|金字塔|撒哈拉|砂丘|沙丘/.test(t)&&n.push("camel"),n}function Fn(i,e=14,t="y"){let n=new si(i.map(([r,a])=>new ie(r,a)),e);return t==="z"&&n.rotateX(Math.PI/2),n}function xs(i,e,t,n,r,a="y",s=null){let o=i.attributes.position,c=new Float32Array(o.count*3),l=new fe(e),h=new fe(t),u=new fe;for(let d=0;d<o.count;d++){let p=o.getX(d),f=o.getY(d),m=o.getZ(d),v=a==="z"?m:f,g=s&&s(p,f,m);g?u.set(g):u.lerpColors(l,h,fs.smoothstep(v,n,r)),c.set([u.r,u.g,u.b],d*3)}return i.setAttribute("color",new dt(c,3)),i}function Yn(i,e=.03){let t=new St(new Ue(i.map(([n,r])=>new ie(n,r))),{depth:e,bevelEnabled:!1});return t.translate(0,0,-e/2),t}var Si=(i,e,t)=>{let n=new ge(e,i,t,8);return n.translate(0,t/2,0),n};function Ex(i,e,t,n=28,r=9){let a=new yn(i.map(([l,h,u])=>new S(l,h,u))),s=new oi(a,n,1,r,!1),o=s.attributes.position,c=new S;for(let l=0;l<=n;l++){let h=a.getPointAt(l/n),u=e+(t-e)*l/n;for(let d=0;d<=r;d++){let p=l*(r+1)+d;c.fromBufferAttribute(o,p).sub(h).multiplyScalar(u).add(h),o.setXYZ(p,c.x,c.y,c.z)}}return s.computeVertexNormals(),s}function Or(i,e,t,n,r,a,s=!0){let o=new S(...t),c=new S(...n),l=i.mesh(new ge(r*.85,r,o.distanceTo(c),8),a);if(l.position.copy(o).add(c).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new S(0,1,0),c.clone().sub(o).normalize()),e.add(l),s){let h=i.mesh(new et(r*1.05,8,6),a);h.position.copy(c),e.add(h)}}function hg(i,e){let t={},n=c=>t[c]||=i(c,e),r=()=>t._vc||=i("#fff",e,{vertexColors:!0});return{mesh:(c,l)=>{let h=new te(c,l?n(l):r());return h.castShadow=!0,h.receiveShadow=!0,h},at:(c,l,h,u,d=0,p=0,f=0)=>(c.position.set(l,h,u),c.rotation.set(d,p,f),c),pivot:(c,l,h)=>{let u=new le;return u.position.set(c,l,h),u}}}var Tx={deer(i,e){let{mesh:t,at:n,pivot:r}=i,a=new le;a.add(n(t(xs(Fn([[0,-.42],[.1,-.36],[.17,-.2],[.19,.05],[.17,.28],[.1,.4],[0,.44]],14,"z"),"#ead9bb","#9a6a3e",-.08,.06)),0,.62,0));let s=[[-.09,.3],[.09,.3],[-.09,-.3],[.09,-.3]].map(([l,h])=>{let u=r(l,.6,h);return u.add(n(t(Si(.035,.022,.6),"#7a5232"),0,-.6,0)),a.add(u),u});a.add(n(t(Yn([[0,0],[.06,-.02],[.03,-.12],[-.03,-.12],[-.06,-.02]],.03),"#f6f1e6"),0,.7,-.42,.3));let o=r(0,.72,.34);a.add(o),o.add(n(t(Si(.07,.05,.34),"#9a6a3e"),0,0,0,.45));let c=r(0,.3,.15);return o.add(c),c.add(n(t(xs(Fn([[0,-.16],[.06,-.12],[.075,0],[.06,.1],[.03,.16],[0,.18]],12,"z"),"#e8d6b6","#94643a",-.03,.03)),0,0,.04)),[-1,1].forEach(l=>c.add(n(t(Yn([[0,0],[.11,.03],[.12,.07],[.02,.05]],.02),"#8a5c36"),l*.05,.04,-.06,0,l>0?0:Math.PI,.5))),c.add(n(t(new et(.018,8,6),"#2b2420"),0,-.005,.2)),e()>.55&&[-1,1].forEach(l=>{let h=r(l*.035,.06,-.02);h.rotation.z=-l*.35,h.add(t(Si(.012,.007,.2),"#d9c8a8")),h.add(n(t(Si(.008,.005,.09),"#d9c8a8"),0,.1,0,.7)),c.add(h)}),{g:a,parts:{head:o,legs:s}}},crane(i){let{mesh:e,at:t,pivot:n}=i,r=new le,a="#f6f4ee",s="#24211f";r.add(t(e(Fn([[0,-.42],[.09,-.36],[.18,-.22],[.21,-.02],[.2,.14],[.15,.26],[.08,.34],[0,.37]],16,"z"),a),0,.74,0,-.12));for(let h=0;h<5;h++)r.add(t(e(Yn([[0,0],[.045,-.03],[.06,-.2],[.02,-.3],[-.03,-.2],[-.045,-.03]],.012),s),(h-2)*.04,.84,-.26,-.75-Math.abs(h-2)*.12,(h-2)*.12,0));[-1,1].forEach(h=>{let u=new le;r.add(u),Or(i,u,[h*.06,.62,-.02],[h*.065,.36,-.07],.022,"#3a3633"),Or(i,u,[h*.065,.36,-.07],[h*.06,.02,-.02],.016,"#3a3633"),[-.4,0,.4].forEach(d=>u.add(t(e(new st(.012,.008,.1),"#3a3633"),h*.06+Math.sin(d)*.04,.006,.02+Math.cos(d)*.04,0,d)))});let o=n(0,.8,.26);r.add(o),o.add(e(Ex([[0,-.04,-.06],[0,.12,.13],[0,.3,-.02],[0,.46,.02],[0,.58,.14]],.065,.032),s));let c=n(0,.6,.17);o.add(c),c.add(t(e(new et(.05,12,10).scale(.85,.9,1.15),a),0,0,0)),c.add(t(e(new et(.046,10,8).scale(.9,.8,.8),s),0,-.012,.025)),c.add(t(e(new et(.03,10,6,0,Math.PI*2,0,Math.PI/2),"#c8322a"),0,.03,-.005)),c.add(t(e(Si(.016,.003,.17),"#9a9a6a"),0,-.01,.04,Math.PI/2+.25));let l=h=>{let u=n(h*.17,.82,.16),d=new le;return d.scale.x=h>0?1:-1,u.add(d),d.add(t(e(Yn([[0,.1],[.42,.08],[.6,.02],[.66,-.06],[.6,-.12],[.62,-.2],[.54,-.24],[.55,-.32],[.44,-.33],[.4,-.3],[0,-.3]],.02),a),0,0,0,Math.PI/2)),d.add(t(e(Yn([[0,-.28],[.4,-.28],[.38,-.44],[.3,-.5],[.22,-.46],[.14,-.6],[.04,-.62],[0,-.58]],.022),s),0,.004,0,Math.PI/2)),r.add(u),u};return{g:r,parts:{neck:o,head:c,wings:[l(-1),l(1)]}}},monkey(i,e,t){let{mesh:n,at:r,pivot:a}=i,s=new le,o=a(0,0,0),c="#9c8f7f",l="#c9bba6";s.add(o),o.add(n(Fn([[0,0],[.24,.02],[.29,.17],[.27,.3],[.19,.4],[.11,.46],[0,.48]],14),c));let h=a(0,.6,.03);return o.add(h),h.add(n(new et(.17,14,12),"#a59886")),h.add(r(n(new et(.135,14,10).scale(1,1.08,.5),l),0,-.015,.1)),h.add(r(n(new et(.11,14,10).scale(1,1.05,.42),"#d65e52"),0,-.02,.13)),[-1,1].forEach(u=>{h.add(r(n(new et(.017,8,6),"#2b2420"),u*.042,.012,.175)),h.add(r(n(new ge(.045,.045,.02,12),"#c98a7c"),u*.165,.01,-.005,0,0,Math.PI/2))}),h.add(r(n(new et(.008,6,4),"#7a3a32"),0,-.04,.18)),t.snow!==!1&&h.add(r(n(new et(.115,12,6,0,Math.PI*2,0,Math.PI/3),"#f6f4ef"),0,.075,-.02)),[-1,1].forEach(u=>{let d=[u*.25,.32,.02];t.rim?(Or(i,o,d,[u*.3,.3,.26],.06,c),Or(i,o,[u*.3,.3,.26],[u*.24,.34,.5],.05,c),o.add(r(n(new et(.045,8,6).scale(1,.6,1.3),"#7a5a4e"),u*.24,.34,.55))):(Or(i,o,d,[u*.27,.16,.16],.06,c),Or(i,o,[u*.27,.16,.16],[-u*.08,.27,.22],.05,c),o.add(r(n(new et(.042,8,6),"#7a5a4e"),-u*.1,.28,.22)))}),{g:s,parts:{body:o,head:h}}},koi(i,e){let{mesh:t,at:n,pivot:r}=i,a=new le,s=e(),o=s<.2?"#f2c14e":"#f6f2ea",c=s<.2?"#e8a830":s<.75?"#d9452e":"#2a2624",l=e()*9;a.add(t(xs(Fn([[0,-.45],[.06,-.38],[.12,-.15],[.13,.05],[.11,.25],[.06,.4],[0,.45]],12,"z"),o,o,0,1,"y",(u,d,p)=>Math.sin(p*9+l)+Math.sin(u*20+p*4+l*2)>.6&&d>-.03?c:null)));let h=r(0,0,-.43);return a.add(h),h.add(n(t(Yn([[0,0],[.16,-.22],[.02,-.14],[-.02,-.14],[-.16,-.22]],.012),c),0,0,0,Math.PI/2)),[-1,1].forEach(u=>a.add(n(t(Yn([[0,0],[.12,-.06],[.03,-.07]],.01),o),u*.1,-.04,.18,Math.PI/2,u>0?.4:Math.PI-.4,0))),{g:a,parts:{tail:h}}},penguin(i){let{mesh:e,at:t,pivot:n}=i,r=new le,a=n(0,0,0);r.add(a),a.add(t(e(xs(Fn([[0,.04],[.2,.08],[.27,.3],[.24,.55],[.17,.75],[.12,.88],[0,.94]],14),"#2a2a2e","#f6f4ee",-.02,.06,"z")),0,0,0)),a.add(t(e(Si(.035,.005,.12),"#e8962a"),0,.8,.12,Math.PI/2-.2)),[-1,1].forEach(o=>a.add(t(e(new et(.075,8,4,0,Math.PI*2,Math.PI/2,Math.PI/2),"#e8962a"),o*.1,.04,.06)));let s=[-1,1].map(o=>{let c=n(o*.25,.6,0);return c.add(t(e(Yn([[0,0],[.05,-.04],[.04,-.36],[0,-.32]],.025),"#2a2a2e"),0,0,0,0,Math.PI/2,0)),a.add(c),c});return{g:r,parts:{body:a,flips:s}}},koala(i){let{mesh:e,at:t,pivot:n}=i,r=new le;r.add(e(Si(.12,.09,2.4),"#d8cfc2"));for(let o=0;o<7;o++)r.add(t(e(Yn([[0,0],[.3,.08],[.45,0],[.3,-.06]],.02),o%2?"#8fa08a":"#7a8f78"),0,2.2+o%3*.1,0,.3,o*.9,.4));let a=n(0,1,.16);r.add(a),a.add(t(e(Fn([[0,-.3],[.2,-.22],[.24,0],[.2,.2],[0,.28]],12),"#9a9a98"),0,0,0));let s=n(0,.38,.04);return a.add(s),s.add(e(new et(.19,12,10),"#a4a4a2")),[-1,1].forEach(o=>{s.add(t(e(new ge(.12,.12,.04,12),"#a4a4a2"),o*.18,.1,-.02,Math.PI/2)),s.add(t(e(new ge(.07,.07,.045,10),"#ece8e2"),o*.18,.1,0))}),s.add(t(e(new et(.06,8,6).scale(.8,1.1,.8),"#2b2826"),0,-.03,.18)),[-1,1].forEach(o=>a.add(t(e(Si(.05,.04,.26),"#9a9a98"),o*.12,.1,.02,-1.2,0,o*.5))),{g:r,parts:{head:s}}},kangaroo(i){let{mesh:e,at:t,pivot:n}=i,r=new le,a="#b8845a",s="#9a6a44",o=n(0,.16,0);r.add(o),[-1,1].forEach(l=>{r.add(t(e(Fn([[0,-.05],[.04,-.02],[.045,.12],[.03,.26],[0,.29]],10,"z"),s),l*.085,.03,0)),o.add(t(e(new et(1,14,10).scale(.1,.19,.21),a),l*.13,.1,-.03,-.45))}),o.add(t(e(xs(Fn([[0,0],[.17,.05],[.22,.17],[.21,.32],[.16,.48],[.11,.6],[.075,.66],[0,.69]],16),"#ead6b2",a,.06,.13,"z")),0,0,0,.32)),o.add(t(e(Fn([[.085,0],[.075,.18],[.055,.36],[.03,.52],[0,.56]],12),a),0,.08,-.14,-1.95)),[-1,1].forEach(l=>{Or(i,o,[l*.09,.47,.2],[l*.08,.37,.29],.022,a),Or(i,o,[l*.08,.37,.29],[l*.05,.34,.36],.018,s)});let c=n(0,.66,.24);return o.add(c),c.rotation.x=-.3,c.add(t(e(Fn([[0,-.1],[.075,-.06],[.08,.02],[.055,.11],[.03,.17],[0,.19]],12,"z"),a),0,0,.02)),c.add(t(e(new et(.018,8,6),"#2b2420"),0,.005,.2)),[-1,1].forEach(l=>c.add(t(e(Yn([[0,0],[.035,.03],[.032,.15],[0,.21],[-.032,.15],[-.035,.03]],.014),s),l*.045,.06,-.04,-.15,l*.3,-l*.18))),{g:r,parts:{body:o,head:c}}},camel(i){let{mesh:e,at:t,pivot:n}=i,r=new le;r.add(t(e(Fn([[0,-.4],[.13,-.34],[.18,-.1],[.18,.15],[.13,.34],[0,.4]],14,"z"),"#c9a46a"),0,.72,0)),r.add(t(e(new et(.16,12,8,0,Math.PI*2,0,Math.PI/2).scale(1,1.1,1.3),"#c29c62"),0,.84,-.02)),r.add(t(e(new st(.4,.02,.34),"#a8452e"),0,.92,.18));let a=[[-.1,.28],[.1,.28],[-.1,-.28],[.1,-.28]].map(([c,l])=>{let h=n(c,.68,l);return h.add(t(e(Si(.035,.03,.68),"#b8925a"),0,-.68,0)),r.add(h),h}),s=n(0,.78,.36);r.add(s),s.add(t(e(Si(.065,.045,.42),"#c29c62"),0,0,0,.9));let o=n(0,.24,.34);return s.add(o),o.add(t(e(Fn([[0,-.1],[.06,-.06],[.065,.04],[.04,.14],[0,.16]],10,"z"),"#c9a46a"),0,.02,.03)),{g:r,parts:{legs:a,neck:s}}}};function ug(i,e,t={}){let n=Tx[i];if(!n)return Object.assign(new le,{update(){}});let[r,a]=t.center||[0,0],s=t.radius??.45,o=t.ground||(()=>0),c=t.avoid||(()=>!1),l=Math.min(cg,t.count??Mx[i]),h=yx[i]*(t.scale??1),u=hg(e,t.paper||null),d=t.seed??2718,p=()=>(d=d*16807%2147483647,d/2147483647),f=new le,m=[],v=o(r,a),g=0;if(i==="koi"||i==="monkey"){g=i==="koi"?s*.8:s*.55;let x=new hn(g*1.04,.016,5,16);x.rotateX(Math.PI/2),x.scale(1,.8,1);let M=u.mesh(x,i==="monkey"?"#9a958c":"#8c8780");M.position.set(r,v+.012,a),f.add(M);let E=u.mesh(new ge(g*1.02,g*1.02,.004,16),i==="koi"?"#2f4a4c":"#5f8f88");E.position.set(r,v+.002,a),f.add(E),v+=.022;let y=new te(new ge(g*1.02,g*1.02,.002,16),e(i==="koi"?"#4f7f86":"#9fd2c8",null,{roughness:.25,transparent:!0,opacity:i==="koi"?.35:.7,depthWrite:!1}));y.position.set(r,v,a),y.renderOrder=2,f.add(y)}for(let x=0,M=0;m.length<l&&M<l*30;M++){let E,y,T=p()*6.28;if(i==="camel"){let C=m.length-(l-1)/2;E=r+C*h*1.25,y=a+Math.sin(C)*h*.2,T=Math.PI/2}else if(i==="monkey"&&m.length%2===0){let C=p()*6.28;E=r+Math.cos(C)*g*.86,y=a+Math.sin(C)*g*.86,T=Math.atan2(Math.cos(C),Math.sin(C))}else if(i==="koi"||i==="monkey"){let C=p()*6.28,I=Math.sqrt(p())*s*(i==="koi"?.6:.4);E=r+Math.cos(C)*I,y=a+Math.sin(C)*I}else{let C=p()*6.28,I=Math.sqrt(p())*s;E=r+Math.cos(C)*I,y=a+Math.sin(C)*I}if(i!=="koi"&&i!=="monkey"&&(c(E,y)||m.some(C=>Math.hypot(C.x-E,C.z-y)<h*.9))||(i==="koi"||i==="monkey")&&m.some(C=>Math.hypot(C.x-E,C.z-y)<h*.8))continue;let{g:_,parts:w}=n(u,p,{...t,rim:i==="monkey"&&m.length%2===0});_.scale.setScalar(h*(.85+p()*.3));let A=i==="koi"?v-.007:i==="monkey"?v-h*.27:o(E,y);_.position.set(E,A,y),_.rotation.y=T,f.add(_),m.push({a:_,parts:w,x:E,z:y,y:A,ry:T,ph:p()*20,sp:.7+p()*.6,ang:Math.atan2(y-a,E-r),rad:Math.hypot(E-r,y-a)||s*.3,dir:p()<.5?1:-1}),x++}f.userData={kind:i,count:m.length};let b=0;return f.update=(x=0)=>{b+=Math.min(x,.1),m.forEach(M=>{let E=b*M.sp+M.ph,y=M.parts,T=M.a;if(i==="deer"){let _=Math.max(0,Math.sin(E*.5));y.head.rotation.x=-.15+_*1.9,y.head.rotation.y=Math.sin(E*.3)*.3*(1-_)}else if(i==="crane"){let _=Math.max(0,Math.sin(E*.45))**2,w=Math.sin(E*5)*.18*_;y.wings.forEach((A,C)=>{let I=C?1:-1;A.rotation.z=I*(-1.3+_*1.8+w),A.scale.x=.32+_*.68}),y.neck.rotation.x=-.2*_+Math.sin(E*.7)*.08,y.head.rotation.x=Math.sin(E*.5)*.15}else if(i==="monkey")T.position.y=M.y+Math.sin(E*1.3)*.003,y.body.rotation.z=Math.sin(E*.9)*.05,y.head.rotation.y=Math.sin(E*.4)*.45,y.head.rotation.z=Math.sin(E*.33)*.12;else if(i==="koi")M.ang+=M.dir*x*.35*M.sp,T.position.x=r+Math.cos(M.ang)*M.rad,T.position.z=a+Math.sin(M.ang)*M.rad*.85,T.rotation.y=-M.ang+(M.dir>0?0:Math.PI),y.tail.rotation.y=Math.sin(E*7)*.45;else if(i==="penguin"){let _=Math.sin(E*5);y.body.rotation.z=_*.12,T.position.x=M.x+Math.sin(E*.25)*.05*Math.cos(M.ry),T.position.z=M.z+Math.sin(E*.25)*.05*Math.sin(M.ry),y.flips.forEach((w,A)=>{w.rotation.z=(A?-1:1)*(.15+Math.max(0,Math.sin(E*.8))*.6*Math.abs(_))})}else if(i==="koala")y.head.rotation.y=Math.sin(E*.35)*.6,y.head.rotation.x=Math.sin(E*.21)*.12;else if(i==="kangaroo"){M.ang+=M.dir*x*.25*M.sp;let _=Math.abs(Math.sin(E*3)),w=r+Math.cos(M.ang)*M.rad,A=a+Math.sin(M.ang)*M.rad;T.position.set(w,o(w,A)+_*h*.45,A),T.rotation.y=-M.ang+(M.dir>0?0:Math.PI),y.body.rotation.x=_*.25,y.head.rotation.x=-.3-_*.15}else i==="camel"&&(y.legs.forEach((_,w)=>{_.rotation.x=Math.sin(E*2.2+(w%2?Math.PI:0)+(w>1?Math.PI/2:0))*.3}),y.neck.rotation.x=Math.sin(E*2.2)*.08,T.position.y=M.y+Math.abs(Math.sin(E*2.2))*h*.02)})},f.update(0),f}function dg(i){if(!i)return!1;if(typeof i.sea=="boolean")return i.sea;let e=[i.title,i.route,i.cap,...i.spots||[]].join(" ").replace(/海鮮|海膽|海苔|上海|北海道|海外|海拔|空港/g,"");return/港|灣|舟屋|渡船|遊船|搭船|觀光船|遊覽船|海/.test(e)}function pg(i,e,t=1.6){let n=null;for(let o=0;o<24;o++){let c=o/24*Math.PI*2,l=Math.cos(c),h=Math.sin(c),u=-1,d=0;for(let p=.02;p<4;p+=.02){let f=!e(i[0]+l*p,i[1]+h*p);if(u<0)if(f)u=p;else continue;if(f)d=p-u;else break}u>=0&&(!n||d-u*.5>n.score)&&(n={score:d-u*.5,a:c,s0:u,run:d})}if(!n)return null;let r=Math.cos(n.a),a=Math.sin(n.a),s=n.s0+.06;return{from:[i[0]+r*s,i[1]+a*s],to:[i[0]+r*(s+Math.min(t,n.run-.06)),i[1]+a*(s+Math.min(t,n.run-.06))]}}function fg(i,e={}){let t=new le,[n,r]=e.from||[0,0],[a,s]=e.to||[1,0],o=Math.hypot(a-n,s-r)||1,c=(a-n)/o,l=(s-r)/o,h=Math.min(6,e.count??3),u=e.scale??.07,d=e.y??.04,p=e.speed??.05,f=e.kinds||[Rl,Cl],m=new _i(new Ue([[0,0],[.5,-2.2],[.25,-2.2],[0,-.6],[-.25,-2.2],[-.5,-2.2]].map(([x,M])=>new ie(x,M))));m.rotateX(-Math.PI/2);let v=new an({color:"#ffffff",transparent:!0,opacity:.55,depthWrite:!1}),g=f.map(x=>bs(x(i,{paper:e.paper}))),b=Array.from({length:h},(x,M)=>{let E=new le,y=g[M%g.length].clone();E.add(y);let T=new te(m,v);return T.position.set(0,.002,-.45),E.add(T),E.rotation.y=Math.atan2(c,-l),t.add(E),{b:E,s:M/h*o,side:(M%3-1)*.05}});return t.userData={kind:"harbor",count:h},t.update=(x=0)=>{b.forEach(M=>{M.s=(M.s+p*Math.min(x,.1))%o;let E=M.s/o,y=Math.min(1,E/.08,(1-E)/.12);M.b.position.set(n+c*M.s-l*M.side,d,-(r+l*M.s+c*M.side)),M.b.scale.setScalar(Math.max(1e-4,u*y))}),t.sync()},i0(t),t.update(0),t}function mg(i,e={}){let t=new le,[n,r]=e.center||[0,0],a=e.radius??.25,s=e.height??.6,o=Math.min(cg,e.count??8),c=e.scale??.05,l=hg(i,e.paper||null),h=e.seed??1618,u=()=>(h=h*16807%2147483647,h/2147483647),d=xs(Fn([[0,-.32],[.05,-.26],[.08,-.08],[.075,.08],[.05,.18],[0,.24]],10,"z"),"#f4f4f0","#dcdedd",-.02,.06),p=Si(.014,.003,.07),f=Yn([[-.06,0],[.06,0],[0,-.14]],.01),m=Yn([[0,.06],[.22,.05],[.4,0],[.5,-.06],[.36,-.08],[.2,-.1],[0,-.08]],.012),v=Yn([[.36,-.01],[.5,-.06],[.42,-.085],[.34,-.07]],.014),g=r0(m),b=r0(v),x=Array.from({length:o},()=>{let E=new le,y=new le;E.add(y),y.scale.setScalar(c*(.85+u()*.3)),y.add(l.mesh(d)),y.add(l.at(l.mesh(p,"#e3b23a"),0,0,.23,Math.PI/2)),y.add(l.at(l.mesh(f,"#e9eae6"),0,.01,-.3,Math.PI/2));let T=[-1,1].map(_=>{let w=l.pivot(_*.06,.03,.02),A=new le;return w.add(A),A.add(l.at(l.mesh(_<0?g:m,"#c9ccce"),0,0,0,Math.PI/2)),A.add(l.at(l.mesh(_<0?b:v,"#2a2a2c"),0,.002,0,Math.PI/2)),y.add(w),w});return t.add(E),{b:E,body:y,wings:T,ang:u()*6.28,rad:a*(.4+u()*.6),h:s*(.7+u()*.5),dir:u()<.5?1:-1,sp:.35+u()*.3,ph:u()*20}});t.userData={kind:"gulls",count:o};let M=0;return t.update=(E=0)=>{M+=Math.min(E,.1),x.forEach(y=>{y.ang+=y.dir*Math.min(E,.1)*y.sp;let T=M+y.ph,_=n+Math.cos(y.ang)*y.rad,w=r+Math.sin(y.ang)*y.rad;y.b.position.set(_,y.h+Math.sin(T*.7)*.03,-w),y.b.rotation.set(0,Math.atan2(-Math.sin(y.ang)*y.dir,-Math.cos(y.ang)*y.dir),0),y.body.rotation.z=y.dir*.35;let A=Math.sin(T*.5)>.55,C=A?Math.sin(T*9)*.55:.08+Math.sin(T*1.3)*.04;y.wings.forEach((I,G)=>{I.rotation.z=(G?1:-1)*C})}),t.sync()},i0(t),t.update(0),t}var _x=["paddy","lavender","rapeseed","sunflower","tulip","cosmos","onsen"],wx=4e3,gg=3e3,Sx=120;function Ax(i,e){return i==="sakura"?e==="\u8377\u862D"?"tulip":"rapeseed":i==="green"?"lavender":i==="autumn"?"cosmos":null}function xg(i,e="autumn",t="\u65E5\u672C"){if(!i)return[];if(Array.isArray(i.fields))return i.fields.filter(a=>_x.includes(a));let n=[i.title,i.route,i.cap,i.stay,...i.spots||[]].join(" "),r=[];if(/稻田|棚田|田園|水田|梯田/.test(n)&&r.push("paddy"),/薰衣草|ラベンダー/.test(n)&&r.push("lavender"),/油菜花|菜の花/.test(n)&&r.push("rapeseed"),/向日葵|ひまわり/.test(n)&&r.push("sunflower"),/鬱金香|チューリップ/.test(n)&&r.push("tulip"),/波斯菊|コスモス|大波斯菊/.test(n)&&r.push("cosmos"),/花田|花海|花畑/.test(n)&&!r.some(a=>a!=="paddy")){let a=Ax(e,t);a&&r.push(a)}return/溫泉|温泉|湯畑|湯煙|源泉/.test(n)&&r.push("onsen"),r}var vg={sakura:{top:"#8fb3c6",gloss:.18,tuft:["#9cc46a","#b2d07e"],h:.008,every:3,ridge:"#a8956c"},green:{top:"#6b8a3a",gloss:.9,tuft:["#6f9e3e","#82b04a","#5f8c36"],h:.022,every:1,ridge:"#8a7a52"},autumn:{top:"#a88a42",gloss:.9,tuft:["#d9a93a","#e3b84a","#c99a32"],h:.024,every:1,ridge:"#8a6e44"},snow:{top:"#8a6e4c",gloss:.95,tuft:["#b89a68","#a88a5a"],h:.006,every:2,ridge:"#7a6448",snowTop:"#eeece6"}},bg={lavender:{bloom:["#7d72b4","#8a7fc0","#6f66a6"],base:"#66705a",shape:"mound"},rapeseed:{bloom:["#f2d23a","#ecc72a","#f6dd5a"],base:"#7a9a42",shape:"carpet"},sunflower:{bloom:["#f0b928","#e8a91e"],base:"#6a8a3a",shape:"stalk"},tulip:{bloom:["#d8402e","#f2c23a","#ef8fa0","#f6f1e6"],base:"#6a8a3a",shape:"band"},cosmos:{bloom:["#ef9ab4","#f6e8ee","#de6d94"],base:"#7a9a4a",shape:"scatter"}};function yg(i,e,t={}){let[n,r]=t.center||[0,0],a=t.radius??.9,s=t.ground||(()=>0),o=t.avoid||(()=>!1),c=t.paper||null,l=t.seed??3141,h=()=>(l=l*16807%2147483647,l/2147483647),u=new le,d=t.angle??h()*Math.PI,p=Math.cos(d),f=Math.sin(d),m=new it,v=new fe,g=(_,w)=>[n+_*p-w*f,r+_*f+w*p],b=[],x=(_,w,A,C,I=!0)=>{if(!A.length)return null;let G=new Ft(_,w,A.length);return A.forEach((D,W)=>{m.position.set(0,0,0),m.rotation.set(0,0,0),m.scale.setScalar(1),C(D,W),m.updateMatrix(),G.setMatrixAt(W,m.matrix),D.c&&G.setColorAt(W,v.set(D.c))}),G.castShadow=!1,G.receiveShadow=!0,G.frustumCulled=!1,u.add(G),I&&b.push({M:G,base:Array.from({length:A.length},(D,W)=>{let V=new Me;return G.getMatrixAt(W,V),V})}),G};u.userData={kind:i,plots:0,tufts:0,flowers:0,steam:0};let M=null;if(i==="paddy"){let _=vg[t.season]||vg.autumn,w=.17,A=.12,C=[];for(let X=-a;X<=a;X+=w+.012)for(let O=-a;O<=a;O+=A+.012){if(Math.hypot(X,O*1.2)>a)continue;let[J,ne]=g(X,O);if(o(J,ne))continue;let $=[g(X-w/2,O-A/2),g(X+w/2,O-A/2),g(X-w/2,O+A/2),g(X+w/2,O+A/2)].map(([L,R])=>s(L,R));Math.max(...$)-Math.min(...$)>.12||C.push({x:J,z:ne,y:Math.max(...$),u:X,v:O})}let I=e(_.top,t.season==="sakura"?null:c,{roughness:_.gloss,metalness:t.season==="sakura"?.25:0});x(new st(w,.012,A),I,C,X=>{m.position.set(X.x,X.y+.004,X.z),m.rotation.y=-d},!1),_.snowTop&&t.snow!==!1&&x(new st(w*.96,.004,A*.96),e(_.snowTop,c),C,X=>{m.position.set(X.x,X.y+.012,X.z),m.rotation.y=-d},!1);let G=e(_.ridge,c),D=new st(w+.012,.016,.008),W=new st(.008,.016,A+.012),V=[];C.forEach(X=>{[-1,1].forEach(O=>{V.push({...X,du:0,dv:O*(A/2+.003),w:0}),V.push({...X,du:O*(w/2+.003),dv:0,w:1})})}),[0,1].forEach(X=>x(X?W:D,G,V.filter(O=>O.w===X),O=>{let[J,ne]=g(O.u+O.du,O.v+O.dv);m.position.set(J,O.y+.008,ne),m.rotation.y=-d},!1));let z=[],j=6,Y=4;C.forEach(X=>{for(let O=0;O<j;O++)for(let J=0;J<Y;J++){if((O+J)%_.every)continue;if(z.length>=wx)return;let[ne,$]=g(X.u+(O+.5-j/2)*w/j,X.v+(J+.5-Y/2)*A/Y);z.push({x:ne,z:$,y:X.y+.01,c:_.tuft[(O*3+J+(h()*2|0))%_.tuft.length],s:.85+h()*.3})}});let Z=new Mn(.008,1,4,1);Z.translate(0,.5,0),x(Z,e("#fff",c,{flatShading:!0}),z,X=>{m.position.set(X.x,X.y,X.z),m.scale.set(X.s,_.h*X.s,X.s),m.rotation.set(t.season==="autumn"?.35:0,-d,0)}),u.userData.plots=C.length,u.userData.tufts=z.length}else if(bg[i]){let _=bg[i],w=_.shape==="carpet"?.05:.065,A=[],C=[];for(let D=-a;D<=a;D+=w){let W=Math.sqrt(Math.max(0,a*a-D*D*1.3));if(!(W<.08))for(let V=-W;V<W;V+=.06){let[z,j]=g(V+.03,D);o(z,j)||A.push({x:z,z:j,y:s(z,j),v:D,u:V})}}let I=e(_.base,c);if(_.shape==="mound"){let D=new ge(.022,.022,.062,8,1,!1,0,Math.PI);D.rotateZ(Math.PI/2),D.rotateY(Math.PI/2),x(D,I,A,W=>{m.position.set(W.x,W.y,W.z),m.rotation.y=-d+Math.PI/2})}else x(new st(.062,.008,w*.7),I,A,D=>{m.position.set(D.x,D.y+.004,D.z),m.rotation.y=-d});let G=Math.max(1,Math.min({mound:12,carpet:8,stalk:2,band:5,scatter:4}[_.shape],Math.floor(gg/Math.max(1,A.length))));if(A.forEach((D,W)=>{let V=_.bloom[Math.floor((D.v+a)/w/2)%_.bloom.length];for(let z=0;z<G&&C.length<gg;z++){let j=(h()-.5)*.06,Y=(h()-.5)*w*(_.shape==="carpet"?.9:.5),[Z,X]=g(D.u+.03+j,D.v+Y),O=_.shape==="band"?V:_.bloom[(W+z)%_.bloom.length],J=_.shape==="mound"?.018+Math.cos(Y/w*Math.PI)*.006:_.shape==="stalk"?.06+h()*.015:_.shape==="band"?.016:_.shape==="scatter"?.02+h()*.012:.012;C.push({x:Z,z:X,y:D.y+J,c:O,s:.8+h()*.4})}}),_.shape==="stalk"){let D=new ge(.0025,.0025,1,4);D.translate(0,.5,0),x(D,e("#5a7a34"),C.map(V=>({...V,c:null})),V=>{m.position.set(V.x,V.y-.062,V.z),m.scale.set(1,.062,1)});let W=new ge(.011,.011,.004,10);W.rotateX(Math.PI/2),x(W,e("#fff",c),C,V=>{m.position.set(V.x,V.y,V.z),m.rotation.set(-.3,0,0),m.scale.setScalar(V.s)}),x(new ge(.005,.005,.005,8).rotateX(Math.PI/2),e("#5a3a1e"),C.map(V=>({...V,c:null})),V=>{m.position.set(V.x,V.y,V.z+.002),m.rotation.set(-.3,0,0),m.scale.setScalar(V.s)})}else{let D=_.shape==="band"?new ge(.006,.004,.01,6):new us(_.shape==="scatter"?.007:_.shape==="mound"?.0095:.0075,0);x(D,e("#fff",c,{flatShading:!0}),C,W=>{m.position.set(W.x,W.y,W.z),m.scale.setScalar(W.s),m.rotation.set(h(),h()*6,0)})}u.userData.plots=A.length,u.userData.flowers=C.length}else if(i==="onsen"){let _=[];for(let V=0,z=0;_.length<(t.pools??4)&&z<60;z++){let j=h()*6.28,Y=a*(.15+h()*.55),Z=n+Math.cos(j)*Y,X=r+Math.sin(j)*Y;o(Z,X)||_.some(O=>Math.hypot(O.x-Z,O.z-X)<.2)||(_.push({x:Z,z:X,y:s(Z,X),s:.7+h()*.6}),V++)}x(new ge(.07,.075,.02,9),e("#8c8780",c,{flatShading:!0}),_,V=>{m.position.set(V.x,V.y+.01,V.z),m.scale.set(V.s,1,V.s*.8)},!1),x(new ge(.056,.056,.004,9),e("#9fd2c8",null,{roughness:.3}),_,V=>{m.position.set(V.x,V.y+.02,V.z),m.scale.set(V.s,1,V.s*.8)},!1);let w=Math.min(Sx,t.steam??_.length*30),A=[],C=new us(.022,1);for(let V=0;V<w;V++){let z=_[V%_.length];if(!z)break;A.push({p:z,t:h(),dx:(h()-.5)*.05,dz:(h()-.5)*.04,sp:.7+h()*.5,sp2:h()*6})}let I=e("#fbfaf6",c,{flatShading:!0,emissive:"#6a6a66",transparent:!0,opacity:.72,depthWrite:!1}),G=new Ft(C,I,Math.max(1,A.length));G.castShadow=G.receiveShadow=!1,G.frustumCulled=!1,u.add(G);let D=t.rise??.45,W=t.wind||[.06,.02];M=(V,z)=>{A.forEach((j,Y)=>{let Z=(j.t+V*.12*j.sp)%1,X=j.p.y+.02+Z*D,O=z*j.p.s*(.35+Z*2.4)*Math.sin(Math.PI*Math.min(1,Z*1.1));m.position.set(j.p.x+j.dx*(.4+Z)+W[0]*Z*D*2+Math.sin(V+j.sp2)*.012,X,j.p.z+j.dz+W[1]*Z*D*2),m.rotation.set(j.sp2,j.sp2+Z,0),m.scale.setScalar(Math.max(1e-4,O)),m.updateMatrix(),G.setMatrixAt(Y,m.matrix)}),G.instanceMatrix.needsUpdate=!0},u.userData.plots=_.length,u.userData.steam=A.length}let E=new Me,y=new Me,T=1;return u.update=(_=0,w=1)=>{u.visible=w>.02,u.visible&&(w!==T&&(T=w,y.makeScale(1,Math.max(.001,w),1),b.forEach(({M:A,base:C})=>{C.forEach((I,G)=>{A.setMatrixAt(G,E.copy(I).multiply(y))}),A.instanceMatrix.needsUpdate=!0})),M&&M(_,w))},u.update(0,1),u}var Re=(i,e,t)=>new st(i,e,t);function _e(i,e,t=0,n=0,r=0){let a=new te(i,e);return a.position.set(t,n,r),a.castShadow=a.receiveShadow=!0,a}function Hr(i,e,t,n,r){let a=new Ue([new ie(-i/2,0),new ie(i/2,0),new ie(0,e)]),s=new St(a,{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),_e(s,n,0,r)}function Pl(i,e,t,n,r,a=0){let s=new le,o=new Mn(Math.SQRT1_2,1,4,1);if(o.rotateY(Math.PI/4),o.scale(i,e,t),o.translate(0,e/2,0),s.add(_e(o,n)),a){let c=new ge(Math.SQRT1_2*.9,Math.SQRT1_2,1,4,1);c.rotateY(Math.PI/4),c.scale(i+a,e*.18,t+a),s.add(_e(c,n,0,e*.05))}return s.position.y=r,s}var Gt=(i,e)=>i[Math.floor(e()*i.length)%i.length],Rx="#f3f1eb",Nn=(i,e,t)=>i(e.snow?Rx:t);function c0(i,e,t,n,r,a,s,o){let c=t/2,l=Math.atan2(n,c),h=Math.hypot(c,n)+s,u=.03;[-1,1].forEach(d=>{let p=_e(Re(h,u,r+o*2),e);p.rotation.z=-d*l,p.position.set(d*(Math.cos(l)*h/2+Math.sin(l)*u/2),a+n-Math.sin(l)*h/2+Math.cos(l)*u/2,0),i.add(p)}),i.add(_e(Re(.045,.03,r+o*2+.01),e,0,a+n+u*.8))}function Mg(i,e,t,n,r,a,s,o,c,l){let h=new le,u=n/3,d=Math.hypot(u,r)*.92,p=Math.atan2(r,u);(o?[-n/6,n/6]:[-n/2,-n/6,n/6,n/2]).forEach(f=>h.add(_e(Re(.022,r,.012),e,f,a+r/2))),c&&o===0?h.add(_e(Re(.09,.19,.014),e,0,a+.095)):h.add(_e(Re(.08,.12,.014),t,0,a+r*.55)),[-1,1].forEach(f=>{let m=l()>.6;[1,-1].forEach((v,g)=>{if(m&&g)return;let b=_e(Re(d,.016,.012),e,f*u,a+r/2);b.rotation.z=v*f*p,h.add(b)})}),h.rotation.y=o,o?h.position.x=s:h.position.z=s,i.add(h)}function ma(i,e,t,n,r,a,s=0,o=null){let c=new le;return c.add(_e(Re(.07,.1,.012),e)),c.add(_e(Re(.03,.1,.014),i,-.052)),c.add(_e(Re(.03,.1,.014),i,.052)),c.add(_e(Re(.1,.012,.024),t,0,-.056,.006)),o!==null?(c.position.set(o,r,a),c.rotation.y=Math.sign(o)*Math.PI/2):(c.position.set(n,r,a),c.rotation.y=s),c}var Ll={machiya(i,e,t={}){let n=new le,r=.9,a=.7;return n.add(_e(Re(r,.5,a),i(Gt(["#efe6d4","#e8dcc4","#d9c3a0"],e)),0,.25)),n.add(_e(Re(r+.02,.1,a+.02),i("#7a5034"),0,.42)),n.add(Hr(r+.2,.38,a+.18,Nn(i,t,Gt(["#4a4642","#57524c","#3e3b38"],e)),.5)),n},hanok(i,e,t={}){let n=new le;return n.add(_e(Re(1,.12,.7),i("#c9c2b4"),0,.06)),n.add(_e(Re(.86,.38,.56),i(Gt(["#efe7d6","#e6dac2"],e)),0,.31)),n.add(Pl(1.25,.42,.9,Nn(i,t,"#4d4f52"),.5,.12)),n},china(i,e,t={}){let n=new le,r=i("#f1eee6"),a=i("#2f3236"),s=t.snow?Nn(i,t):a,o=.8,c=.9;return n.add(_e(Re(o,.7,c),r,0,.35)),n.add(Hr(o-.05,.22,c-.02,s,.7)),[-1,1].forEach(l=>{[[.92,.9],[.58,1.02],[.24,1.14]].forEach(([h,u])=>{n.add(_e(Re(.08,u,h*c),r,l*(o/2+.02),u/2)),n.add(_e(Re(.12,.05,h*c+.02),s,l*(o/2+.02),u))})}),n},shophouse(i,e,t={}){let n=new le,r=["#f4c7b8","#bfe0d2","#f6e3a1","#c9d8f0","#f2d2dc","#e9c46a"];for(let a=0;a<3;a++){let s=(a-1)*.42;n.add(_e(Re(.4,.8,.9),i(Gt(r,e)),s,.4)),n.add(_e(Re(.22,.2,.02),i("#5a7a6a"),s,.58,.46)),n.add(_e(Re(.22,.28,.02),i("#6b4b3a"),s,.16,.46))}return n.add(Hr(.62,.26,1.32,Nn(i,t,"#b5533c"),.8).rotateY(Math.PI/2)),n},stilt(i,e,t={}){let n=new le,r=i("#8a6040");return[[-.32,-.25],[.32,-.25],[-.32,.25],[.32,.25]].forEach(([a,s])=>n.add(_e(new ge(.035,.035,.36,6),r,a,.18,s))),n.add(_e(Re(.8,.06,.66),r,0,.38)),n.add(_e(Re(.7,.3,.56),i(Gt(["#c9a36e","#b98d58"],e)),0,.56)),n.add(Hr(1,.55,.8,Nn(i,t,Gt(["#a8864f","#9b7a45","#b39256"],e)),.7)),n},thai(i,e,t={}){let n=new le,r=i("#d4a62a",null,{metalness:.4,roughness:.45});return n.add(_e(Re(.6,.45,.95),i("#f3ede1"),0,.225)),n.add(Hr(.86,.42,1.1,Nn(i,t,"#a8322a"),.45)),n.add(Hr(.64,.36,.9,Nn(i,t,"#2f6b4a"),.68)),[-1,1].forEach(a=>n.add(_e(new Mn(.03,.2,5),r,0,1.08,a*.45))),n},taiwan(i,e){let t=new le,n=["#e9e4da","#d8d2c6","#cfc6b4","#e2d7c3","#bfc4c0"];for(let r=0;r<3;r++){let a=(r-1)*.36,s=.55+e()*.45;t.add(_e(Re(.34,s,.8),i(Gt(n,e)),a,s/2)),t.add(_e(Re(.26,.06,.02),i("#6b7b7e"),a,s*.6,.41)),e()>.35&&t.add(_e(new ge(.06,.06,.1,10),i(Gt(["#e8eef0","#c9d6dc","#d9c8a8"],e)),a+.06,s+.05,-.15))}return t.add(_e(Re(1.1,.14,.08),i("#8a8f8c"),0,.14,.44)),t},bali(i,e,t={}){let n=new le,r=3+Math.floor(e()*3);n.add(_e(Re(.5,.25,.5),i("#8d8574"),0,.125)),n.add(_e(Re(.18,.25,.18),i("#5b4a3a"),0,.37));for(let a=0;a<r;a++)n.add(Pl(.72-a*.1,.16,.72-a*.1,Nn(i,t,"#3a3029"),.48+a*.13));return n},timber(i,e,t={}){let n=new le,r=e()>.5?3:2,a=.6,s=.72,o=.3,c=i(Gt(["#f3ead8","#efe2c6","#f4ecdc","#ece0c8"],e)),l=i(Gt(["#4a3324","#3e2b1f","#5a3d28"],e)),h=i("#46525c"),u=Gt(["#a8452e","#b5533c","#9a3f2c"],e);n.add(_e(Re(a+.04,.08,s+.04),i("#b9ad98"),0,.04));let d=.08,p=a,f=s;for(let v=0;v<r;v++)p=a+v*.035,f=s+v*.03,n.add(_e(Re(p,o,f),c,0,d+o/2)),n.add(_e(Re(p+.012,.024,f+.012),l,0,d+o-.012)),[-1,1].forEach(g=>Mg(n,l,h,p,o,d,g*(f/2+.004),0,v===0,e)),[-1,1].forEach(g=>Mg(n,l,h,f,o,d,g*(p/2+.004),Math.PI/2,!1,e)),d+=o;let m=.56;return n.add(Hr(p,m,f,c,d)),[-1,1].forEach(v=>{let g=v*(f/2+.005);n.add(_e(Re(.022,m*.9,.012),l,0,d+m*.45,g)),n.add(_e(Re(p*.62,.02,.012),l,0,d+m*.38,g)),n.add(_e(Re(.07,.09,.012),h,.075,d+m*.2,g+v*.002)),n.add(_e(Re(.07,.09,.012),h,-.075,d+m*.2,g+v*.002))}),c0(n,Nn(i,t,u),p,m,f,d,.08,.06),e()>.4&&n.add(_e(Re(.07,.16,.07),i("#8a6a55"),p*.22,d+m*.62,-f*.2)),n},terracotta(i,e,t={}){let n=new le,r=.82,a=.66,s=.6,o=Gt(["#dca36a","#e2b07a","#d4925a","#e8bd88"],e),c=Gt(["#c0643a","#b8582f","#cc7347"],e),l=i(Gt(["#4f6b4a","#5c7a52","#46624a"],e)),h=i("#3e4a52"),u=i("#efe6d6");if(n.add(_e(Re(r,s,a),i(o),0,s/2)),n.add(_e(Re(r+.01,.05,a+.01),u,0,s-.025)),n.add(Pl(r+.1,.17,a+.1,Nn(i,t,c),s,.05)),[-1,1].forEach(d=>{[-.22,.22].forEach(p=>n.add(ma(l,h,u,p,.43,d*(a/2+.006),d>0?0:Math.PI))),d>0&&(n.add(ma(l,h,u,.22,.17,a/2+.006,0)),n.add(_e(Re(.1,.2,.014),i("#6b4a32"),-.18,.1,a/2+.006)))}),[-1,1].forEach(d=>n.add(ma(l,h,u,0,.43,0,0,d*(r/2+.006)))),e()>.35){let m=r/2+.2-.02;n.add(_e(Re(.4,.38,.48),i(Gt(["#e6b984","#d89c62","#eec596"],e)),m,.38/2,-.04)),n.add(Pl(.4+.08,.12,.48+.08,Nn(i,t,c),.38,.04).translateX(m).translateZ(-.04)),n.add(ma(l,h,u,m+.04,.2,-.04+.48/2+.006,0))}return e()>.5&&n.add(_e(Re(.08,.14,.08),i(o),-r*.28,s+.12,-a*.18)),n},chalet(i,e,t={}){let n=new le,r=.86,a=.76,s=.3,o=.32,c=i(Gt(["#a39d92","#9a948a","#b0aa9e"],e)),l=i(Gt(["#8a5a36","#7a4e2e","#9a6a40"],e)),h=i("#c8a070"),u=i("#4a3426"),d=i("#3e4a52"),p=i(Gt(["#4f6b4a","#a8452e","#5c7a52"],e)),f=Gt(["#c83a3a","#d8506a","#e07a3a"],e),m=i("#e8dcc6");n.add(_e(Re(r+.02,s,a+.02),c,0,s/2)),n.add(_e(Re(r,o,a),l,0,s+o/2));for(let x=1;x<4;x++)n.add(_e(Re(r+.006,.008,a+.006),u,0,s+x*o/4));let v=s+o,g=.27;n.add(Hr(r,g,a,l,v)),c0(n,Nn(i,t,Gt(["#5a4a40","#4e4038","#665247"],e)),r,g,a,v,.2,.2),[-1,1].forEach(x=>{let M=x*(a/2+.006);n.add(_e(Re(r*.96,.022,.014),h,0,v+.012,M)),[-.09,.09].forEach(E=>n.add(_e(Re(.06,.08,.014),d,E,v+.09,M)))});let b=a/2+.006;[-.26,.26].forEach(x=>n.add(ma(p,d,m,x,.16,b+.01,0))),n.add(_e(Re(.11,.2,.014),u,0,.1,b+.01)),[-.26,0,.26].forEach(x=>n.add(ma(p,d,m,x,s+.17,b,0))),n.add(_e(Re(r*.94,.024,.13),h,0,s+.02,b+.065)),n.add(_e(Re(r*.94,.075,.014),h,0,s+.07,b+.125));for(let x=-5;x<=5;x++)n.add(_e(Re(.006,.06,.016),u,x*r*.085,s+.07,b+.128));return t.snow?n.add(_e(Re(r*.9,.028,.032),h,0,s+.12,b+.12)):(n.add(_e(Re(r*.9,.028,.032),i("#6b8a3f"),0,s+.12,b+.12)),n.add(_e(Re(r*.88,.02,.028),i(f),0,s+.143,b+.12))),[-1,1].forEach(x=>[-.18,.18].forEach(M=>n.add(ma(p,d,m,0,s+.17,M,0,x*(r/2+.006))))),n},temple(i,e,t={}){let n=new le,r=.96,a=.62,s=.4,o=i("#b8352a"),c=Gt(["#b84a2a","#a8432a","#c0522e"],e),l=i("#d9b04a"),h=i(Gt(["#ece3d0","#e6dcc6"],e)),u=i("#b5553a"),d=i("#a39e94");n.add(_e(Re(r+.2,.07,a+.36),d,0,.035,.08)),n.add(_e(Re(.36,.035,.1),d,0,.018,a/2+.31)),n.add(_e(Re(r,s,a),h,0,.07+s/2)),[-1,1].forEach(b=>n.add(_e(Re(.2,s,a+.01),u,b*(r/2-.1),.07+s/2))),n.add(_e(Re(.3,.3,.014),o,0,.07+.15,a/2+.007));for(let b=0;b<3;b++)for(let x=-2;x<=2;x++)x&&n.add(_e(Re(.014,.014,.01),l,x*.032,.07+.08+b*.08,a/2+.016));[-.3,-.12,.12,.3].forEach(b=>n.add(_e(new ge(.022,.026,s,10),o,b,.07+s/2,a/2+.16)));let p=new le;p.rotation.y=Math.PI/2,n.add(p);let f=Nn(i,t,c);c0(p,f,a+.04,.3,r,.07+s,.12,.1);let m=_e(Re(r*.8,.026,.26),f,0,.07+s+.005,a/2+.15);m.rotation.x=.28,n.add(m);let v=.07+s+.3+.045,g=r+.24;return n.add(_e(Re(g,.05,.05),Nn(i,t,"#9a3a24"),0,v,0)),[-1,1].forEach(b=>[-1,1].forEach(x=>{let M=_e(Re(.16,.026,.022),Nn(i,t,"#9a3a24"),b*(g/2+.05),v+.04,x*.018);M.rotation.z=b*.7,M.rotation.y=x*.25,n.add(M)})),t.snow||["#3f8a6a","#e0b13a","#3c6aa8","#e0b13a","#3f8a6a"].forEach((b,x)=>n.add(_e(Re(.05,.03,.03),i(b),(x-2)*.17,v+.04,0))),n.add(_e(new et(.035,10,8),l,0,v+.08,0)),n}};var Il=class extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new m0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new A0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new R0(t)}),this.register(function(t){return new C0(t)})}load(e,t,n,r){let a=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Ur.extractUrlBase(e);s=Ur.resolveURL(l,this.path)}else s=Ur.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new uo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let a,s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Sg){try{s[ot.KHR_BINARY_GLTF]=new P0(e)}catch(u){r&&r(u);return}a=JSON.parse(s[ot.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new H0(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:s[u]=new p0;break;case ot.KHR_DRACO_MESH_COMPRESSION:s[u]=new L0(a,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:s[u]=new I0;break;case ot.KHR_MESH_QUANTIZATION:s[u]=new D0;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,a){n.parse(e,t,r,a)})}};function Cx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},d0=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],l,h=new fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Tn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ca(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ps(h),l.distance=u;break;case"spot":l=new ol(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,rr(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},p0=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){let r=[];e.color=new fe(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Tn),e.opacity=s[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",a.baseColorTexture,Ut))}return Promise.all(r)}},f0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}},m0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){let o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(o,o)}return Promise.all(a)}},g0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=r.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}},v0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}},b0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=r.extensions[this.name];if(s.sheenColorFactor!==void 0){let o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Tn)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Ut)),s.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}},x0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}},y0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let o=s.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(o[0],o[1],o[2],Tn),Promise.all(a)}},M0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}},E0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));let o=s.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(o[0],o[1],o[2],Tn),s.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Ut)),Promise.all(a)}},T0=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}},_0=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}},w0=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}},S0=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],o=r.images[s.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},A0=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],o=r.images[s.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},R0=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},C0=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==hi.TRIANGLES&&l.mode!==hi.TRIANGLE_STRIP&&l.mode!==hi.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,o=[],c={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let f of u){let m=new Me,v=new S,g=new bn,b=new S(1,1,1),x=new Ft(f.geometry,f.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&v.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&b.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,m.compose(v,g,b));for(let M in c)if(M==="_COLOR_0"){let E=c[M];x.instanceColor=new Ki(E.array,E.itemSize,E.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&f.geometry.setAttribute(M,c[M]);it.prototype.copy.call(x,f),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Sg="glTF",Eo=12,Eg={JSON:1313821514,BIN:5130562},P0=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Eo,a=new DataView(e,Eo),s=0;for(;s<r;){let o=a.getUint32(s,!0);s+=4;let c=a.getUint32(s,!0);if(s+=4,c===Eg.JSON){let l=new Uint8Array(e,Eo+s,o);this.content=n.decode(l)}else if(c===Eg.BIN){let l=Eo+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},L0=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(let h in s){let u=N0[h]||h.toLowerCase();o[u]=s[h]}for(let h in e.attributes){let u=N0[h]||h.toLowerCase();if(s[h]!==void 0){let d=n.accessors[e.attributes[h]],p=ys[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let f in p.attributes){let m=p.attributes[f],v=c[f];v!==void 0&&(m.normalized=v)}u(p)},o,l,Tn,d)})})}},I0=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},D0=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Dl=class extends Dr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let s=0;s!==r;s++)t[s]=n[a+s];return t}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=r-t,u=(n-t)/h,d=u*u,p=d*u,f=e*l,m=f-l,v=-2*p+3*d,g=p-d,b=1-v,x=g-d+u;for(let M=0;M!==o;M++){let E=s[m+M+o],y=s[m+M+c]*h,T=s[f+M+o],_=s[f+M]*h;a[M]=b*E+x*y+v*T+g*_}return a}},Px=new bn,U0=class extends Dl{interpolate_(e,t,n,r){let a=super.interpolate_(e,t,n,r);return Px.fromArray(a).normalize().toArray(a),a}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tg={9728:Qt,9729:ln,9984:zd,9985:Ws,9986:Ja,9987:qi},_g={33071:ta,33648:Ks,10497:Ln},l0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},N0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:as,STEP:rs},h0={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ix(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hd})),i.DefaultMaterial}function ga(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function rr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(i,e,t){let n=!1,r=!1,a=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(i);let s=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;s.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(a){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ux(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nx(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+u0(t.attributes):e=i.indices+":"+u0(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+u0(i.targets[n]);return e}function u0(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function O0(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Hx=new Me,H0=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,a=!1,s=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,s=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||a&&s<98?this.textureLoader=new al(this.options.manager):this.textureLoader=new cl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:n,userData:{}};return ga(a,o,r),rr(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let s=t[r].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),a=(s,o)=>{let c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(let[l,h]of s.children.entries())a(h,o.children[l])};return a(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&n.push(a)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,s){n.load(Ur.resolveURL(t.uri,r.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let s=l0[r.type],o=ys[r.componentType],c=r.normalized===!0,l=new o(r.count*s);return Promise.resolve(new dt(l,s,c))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(s){let o=s[0],c=l0[r.type],l=ys[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,f=r.normalized===!0,m,v;if(p&&p!==u){let g=Math.floor(d/p),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count,x=t.cache.get(b);x||(m=new l(o,g*p,r.count*p/h),x=new no(m,p/h),t.cache.add(b,x)),v=new io(x,c,d%p/h,f)}else o===null?m=new l(r.count*c):m=new l(o,d,r.count*c),v=new dt(m,c,f);if(r.sparse!==void 0){let g=l0.SCALAR,b=ys[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,E=new b(s[1],x,r.sparse.count*g),y=new l(s[2],M,r.sparse.count*c);o!==null&&(v=new dt(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let T=0,_=E.length;T<_;T++){let w=E[T];if(v.setX(w,y[T*c]),c>=2&&v.setY(w,y[T*c+1]),c>=3&&v.setZ(w,y[T*c+2]),c>=4&&v.setW(w,y[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=f}return v})}loadTexture(e){let t=this.json,n=this.options,a=t.textures[e].source,s=t.images[a],o=this.textureLoader;if(s.uri){let c=n.manager.getHandler(s.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){let r=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(a.samplers||{})[s.sampler]||{};return h.magFilter=Tg[d.magFilter]||ln,h.minFilter=Tg[d.minFilter]||qi,h.wrapS=_g[d.wrapS]||Ln,h.wrapT=_g[d.wrapT]||Ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==ln,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let s=r.images[e],o=self.URL||self.webkitURL,c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=n.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(m){let v=new Yt(m);v.needsUpdate=!0,d(v)}),t.load(Ur.resolveURL(u,a.path),f,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),rr(u,s),u.userData.mimeType=s.mimeType||Ox(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let a=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),a.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=a.associations.get(s);s=a.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ra,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ri,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||a||s){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bt}loadMaterial(e){let t=this,n=this.json,r=this.extensions,a=n.materials[e],s,o={},c=a.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let u=r[ot.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{let u=a.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Tn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=lt);let h=a.alphaMode||h0.OPAQUE;if(h===h0.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===h0.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==an&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ie(1,1),a.normalTexture.scale!==void 0)){let u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==an&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==an){let u=a.emissiveFactor;o.emissive=new fe().setRGB(u[0],u[1],u[2],Tn)}return a.emissiveTexture!==void 0&&s!==an&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Ut)),Promise.all(l).then(function(){let u=new s(o);return a.name&&(u.name=a.name),rr(u,a),t.associations.set(u,{materials:e}),a.extensions&&ga(r,u,a),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function a(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return wg(c,o,t)})}let s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Nx(l),u=r[h];if(u)s.push(u.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=wg(new Be,l,t),r[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){let t=this,n=this.json,r=this.extensions,a=n.meshes[e],s=a.primitives,o=[];for(let c=0,l=s.length;c<l;c++){let h=s[c].material===void 0?Ix(this.cache):this.getDependency("material",s[c].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let m=h[p],v=s[p],g,b=l[p];if(v.mode===hi.TRIANGLES||v.mode===hi.TRIANGLE_STRIP||v.mode===hi.TRIANGLE_FAN||v.mode===void 0)g=a.isSkinnedMesh===!0?new Vc(m,b):new te(m,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),v.mode===hi.TRIANGLE_STRIP?g.geometry=$d(g.geometry,vl):v.mode===hi.TRIANGLE_FAN&&(g.geometry=$d(g.geometry,mo));else if(v.mode===hi.LINES)g=new Lr(m,b);else if(v.mode===hi.LINE_STRIP)g=new Zi(m,b);else if(v.mode===hi.LINE_LOOP)g=new qc(m,b);else if(v.mode===hi.POINTS)g=new hs(m,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(g.geometry.morphAttributes).length>0&&Ux(g,a),g.name=t.createUniqueName(a.name||"mesh_"+e),rr(g,a),v.extensions&&ga(r,g,v),t.assignFinalMaterial(g),u.push(g)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&ga(r,u[0],a),u[0];let d=new le;a.extensions&&ga(r,d,a),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(fs.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Oi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),rr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,a=t.joints.length;r<a;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let a=r.pop(),s=r,o=[],c=[];for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u){o.push(u);let d=new Me;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Wc(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,s=[],o=[],c=[],l=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],f=r.samplers[p.sampler],m=p.target,v=m.node,g=r.parameters!==void 0?r.parameters[f.input]:f.input,b=r.parameters!==void 0?r.parameters[f.output]:f.output;m.node!==void 0&&(s.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",b)),l.push(f),h.push(m))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],m=u[3],v=u[4],g=[];for(let b=0,x=d.length;b<x;b++){let M=d[b],E=p[b],y=f[b],T=m[b],_=v[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let w=n._createAnimationTracks(M,E,y,T,_);if(w)for(let A=0;A<w.length;A++)g.push(w[A])}return new rl(a,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){let s=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),s})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],a=n._loadNodeShallow(e),s=[],o=r.children||[];for(let l=0,h=o.length;l<h;l++)s.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(s),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Hx)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],s=a.name?r.createUniqueName(a.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new ro:l.length>1?h=new le:l.length===1?h=l[0]:h=new it,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=s),rr(h,a),a.extensions&&ga(n,h,a),a.matrix!==void 0){let u=new Me;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,a=new le;n.name&&(a.name=r.createUniqueName(n.name)),rr(a,n),n.extensions&&ga(t,a,n);let s=n.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(r.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof Hn||d instanceof Yt)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=l(a),a})}_createAnimationTracks(e,t,n,r,a){let s=[],o=e.name?e.name:e.uuid,c=[];kr[a.path]===kr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(kr[a.path]){case kr.weights:l=Qi;break;case kr.rotation:l=$i;break;case kr.position:case kr.scale:l=er;break;default:n.itemSize===1?l=Qi:l=er;break}let h=r.interpolation!==void 0?Lx[r.interpolation]:as,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let f=new l(c[d]+"."+kr[a.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),s.push(f)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=O0(t.constructor),r=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)r[a]=t[a]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof $i?U0:Dl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kx(i,e,t){let n=e.attributes,r=new rn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new S(c[0],c[1],c[2]),new S(l[0],l[1],l[2])),o.normalized){let h=O0(ys[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new S,c=new S;for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let m=O0(ys[d.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let s=new On;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=s}function wg(i,e,t){let n=e.attributes,r=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){i.setAttribute(o,c)})}for(let s in n){let o=N0[s]||s.toLowerCase();o in i.attributes||r.push(a(n[s],o))}if(e.indices!==void 0&&!i.index){let s=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(s)}return nt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),rr(i,e),kx(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Dx(i,e.targets,t):i})}var Ag=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?e:i,a,s=WebAssembly.instantiate(o(r),{}).then(function(g){a=g.instance,a.exports.__wasm_call_ctors()});function o(g){for(var b=new Uint8Array(g.length),x=0;x<g.length;++x){var M=g.charCodeAt(x);b[x]=M>96?M-97:M>64?M-39:M+4}for(var E=0,x=0;x<g.length;++x)b[E++]=b[x]<60?n[b[x]]:(b[x]-60)*64+b[++x];return b.buffer.slice(0,E)}function c(g,b,x,M,E,y){var T=a.exports.sbrk,_=x+3&-4,w=T(_*M),A=T(E.length),C=new Uint8Array(a.exports.memory.buffer);C.set(E,A);var I=g(w,x,M,A,E.length);if(I==0&&y&&y(w,_,M),b.set(C.subarray(w,w+x*M)),T(w-T(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(g){var b={object:new Worker(g),pending:0,requests:{}};return b.object.onmessage=function(x){var M=x.data;b.pending-=M.count,b.requests[M.id][M.action](M.value),delete b.requests[M.id]},b}function f(g){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(r))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+v.toString(),x=new Blob([b],{type:"text/javascript"}),M=URL.createObjectURL(x),E=0;E<g;++E)u[E]=p(M);URL.revokeObjectURL(M)}function m(g,b,x,M,E){for(var y=u[0],T=1;T<u.length;++T)u[T].pending<y.pending&&(y=u[T]);return new Promise(function(_,w){var A=new Uint8Array(x),C=d++;y.pending+=g,y.requests[C]={resolve:_,reject:w},y.object.postMessage({id:C,count:g,size:b,source:A,mode:M,filter:E},[A.buffer])})}function v(g){s.then(function(){var b=g.data;try{var x=new Uint8Array(b.count*b.size);c(a.exports[b.mode],x,b.count,b.size,b.source,a.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:x},[x.buffer])}catch(M){self.postMessage({id:b.id,count:b.count,action:"reject",value:M})}})}return{ready:s,supported:!0,useWorkers:function(g){f(g)},decodeVertexBuffer:function(g,b,x,M,E){c(a.exports.meshopt_decodeVertexBuffer,g,b,x,M,a.exports[l[E]])},decodeIndexBuffer:function(g,b,x,M){c(a.exports.meshopt_decodeIndexBuffer,g,b,x,M)},decodeIndexSequence:function(g,b,x,M){c(a.exports.meshopt_decodeIndexSequence,g,b,x,M)},decodeGltfBuffer:function(g,b,x,M,E,y){c(a.exports[h[E]],g,b,x,M,a.exports[l[y]])},decodeGltfBufferAsync:function(g,b,x,M,E){return u.length>0?m(g,b,x,h[M],l[E]):s.then(function(){var y=new Uint8Array(g*b);return c(a.exports[h[M]],y,g,b,x,a.exports[l[E]]),y})}}})();var To={\u65E5\u672C:{houses:["machiya"],robe:.3,robeColors:["#b8342a","#2f4a6b","#7a5a8c","#d98c5f","#3d5a3b","#e6c9a8"],note:"\u548C\u670D\u591A\u898B\u65BC\u4EAC\u90FD\u7B49\u89C0\u5149\u5340\uFF0C\u8207\u65E5\u5E38\u670D\u6DF7\u5408"},\u97D3\u570B:{houses:["hanok"],robe:.12,trees:{low:["pine","maple","ginkgo"],high:["pine"]},robeColors:["#d94f6a","#f2c14e","#4f8fbf","#7fbf8f"],note:"\u97D3\u670D\u591A\u898B\u65BC\u5BAE\u6BBF\u5468\u908A"},\u53F0\u7063:{houses:["taiwan"],robe:0,trees:{low:["banyan","bamboo","palm"],high:["cedar","pine"]},note:"\u539F\u4F4F\u6C11\u65CF\u4EBA\u7269\u898B kit/peoples.json\uFF08\u793A\u610F\uFF09"},\u4E2D\u570B:{houses:["china"],robe:0,trees:{low:["willow","pine","bamboo"],high:["pine"]}},\u9999\u6E2F:{houses:["taiwan"],robe:0},\u6FB3\u9580:{houses:["shophouse"],robe:0},\u8D8A\u5357:{houses:["shophouse","stilt"],robe:.12,robeColors:["#f4efe6","#c0392b","#f2c14e","#7fb3d5"],note:"\u5967\u9EDB"},\u6CF0\u570B:{houses:["thai","stilt"],robe:0},\u67EC\u57D4\u5BE8:{houses:["stilt"],robe:0},\u5BEE\u570B:{houses:["stilt"],robe:0},\u7DEC\u7538:{houses:["stilt"],robe:0},\u99AC\u4F86\u897F\u4E9E:{houses:["shophouse"],robe:0},\u65B0\u52A0\u5761:{houses:["shophouse"],robe:0},\u6C76\u840A:{houses:["shophouse"],robe:0},\u5370\u5C3C:{houses:["bali","stilt"],robe:0},\u83F2\u5F8B\u8CD3:{houses:["stilt"],robe:0},\u5FB7\u570B:{houses:["timber","chalet"],robe:0},\u6377\u514B:{houses:["timber","chalet"],robe:0},\u5967\u5730\u5229:{houses:["timber","chalet"],robe:0},\u745E\u58EB:{houses:["chalet","timber"],robe:0},\u6CD5\u570B:{houses:["timber","terracotta"],robe:0},\u7FA9\u5927\u5229:{houses:["terracotta"],robe:0},\u897F\u73ED\u7259:{houses:["terracotta"],robe:0},\u8461\u8404\u7259:{houses:["terracotta"],robe:0},\u8377\u862D:{houses:["timber"],robe:0},\u6BD4\u5229\u6642:{houses:["timber"],robe:0},\u82F1\u570B:{houses:["timber"],robe:0}},_o=["#f2efe8","#2f4a6b","#c8a46a","#8c9a8a","#d9d4ca","#3a3633","#b56a4a","#6f8fb0","#e8c9b0"],Ul=new Set(["\u53F0\u5317","\u9AD8\u96C4","\u53F0\u4E2D","\u6771\u4EAC","\u5927\u962A","\u4EAC\u90FD","\u540D\u53E4\u5C4B","\u798F\u5CA1","\u9996\u723E","\u91DC\u5C71","\u4E0A\u6D77","\u5317\u4EAC","\u9999\u6E2F","\u5EE3\u5DDE","\u6DF1\u5733","\u66FC\u8C37","\u6CB3\u5167","\u80E1\u5FD7\u660E\u5E02","\u5409\u9686\u5761","\u65B0\u52A0\u5761","\u99AC\u5C3C\u62C9","\u96C5\u52A0\u9054"]);function k0(i,e=.95){let t=[];if(i.forEach(r=>{r.updateMatrixWorld(!0),r.traverse(a=>{if(!a.isMesh)return;let s=a.geometry.clone().applyMatrix4(a.matrixWorld);s.index&&(s=s.toNonIndexed()),["uv","uv1","uv2"].forEach(h=>s.deleteAttribute(h)),s.clearGroups();let o=(Array.isArray(a.material)?a.material[0]:a.material).color,c=s.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l.set([o.r,o.g,o.b],h*3);s.setAttribute("color",new dt(l,3)),t.push(s)})}),!t.length)return null;let n=new te(qn(t),new Bt({vertexColors:!0,roughness:e,metalness:0}));return n.castShadow=n.receiveShadow=!0,n}function Rg(i){let e=[0];for(let t=1;t<i.length;t++)e.push(e[t-1]+Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]));return{pts:i,acc:e,len:e[e.length-1],at(t){t=(t%this.len+this.len)%this.len;let n=1;for(;n<e.length-1&&e[n]<t;)n++;let r=(t-e[n-1])/(e[n]-e[n-1]||1),a=i[n-1],s=i[n];return[a[0]+(s[0]-a[0])*r,a[1]+(s[1]-a[1])*r,Math.atan2(s[0]-a[0],s[1]-a[1])]}}}function Cg({scene:i,J:e,T:t,mat:n,groundY:r,onLand:a,R:s,H:o,avoid:c,focus:l=[],snowAt:h=()=>!1}){let u=(O,J)=>{let ne=null,$=1e9;return e.cities.forEach(L=>{let R=Math.hypot(L.xy[0]-O,L.xy[1]-J);R<$&&($=R,ne=L.country)}),ne},d=O=>Math.min(...O.filter((J,ne)=>ne%3===0).map(([J,ne])=>Math.min(...l.map($=>Math.hypot($[0]-J,$[1]-ne)))));function p(O,J,ne){let $=[],L=[],R=0;O.forEach(H=>{let U=[];for(let k=1;k<H.length;k++){let[P,F]=H[k-1],[q,ae]=H[k],K=Math.max(1,Math.ceil(Math.hypot(q-P,ae-F)/.12));for(let oe=k===1?0:1;oe<=K;oe++)U.push([P+(q-P)*oe/K,F+(ae-F)*oe/K])}if(!(U.length<2)){U.forEach(([k,P],F)=>{let[q,ae]=U[Math.max(0,F-1)],[K,oe]=U[Math.min(U.length-1,F+1)],ce=K-q,ue=oe-ae,xe=Math.hypot(ce,ue)||1,be=-ue/xe*J/2,we=ce/xe*J/2,Ie=r(k,P)+ne;$.push(k+be,Ie,-(P+we),k-be,Ie,-(P-we))});for(let k=0;k<U.length-1;k++){let P=R+k*2;L.push(P,P+1,P+2,P+1,P+3,P+2)}R+=U.length*2}});let B=new Be;return B.setAttribute("position",new Ce($,3)),B.setIndex(L),B.computeVertexNormals(),B}let f=O=>O.filter(J=>J.t!=="F").flatMap(J=>J.pts.reduce((ne,$)=>(a($[0],$[1])?ne[ne.length-1].push($):ne[ne.length-1].length&&ne.push([]),ne),[[]])).filter(J=>J.length>1),m=f(e.roads.filter(O=>O.t==="H")),v=f(e.roads.filter(O=>O.t!=="H")),g=f(e.rail);[[v,.026,.006,t.road||"#e9dfc9"],[m,.042,.008,t.highway||"#cdb88f"],[g,.018,.01,t.rail||"#5a4c43"]].forEach(([O,J,ne,$])=>{if(!O.length)return;let L=new te(p(O,J,ne),n($));L.receiveShadow=!0,i.add(L)});let b=[],x=[];e.cities.forEach(O=>{let J=To[O.country];if(!J||!a(...O.xy))return;let ne=Ul.has(O.name),$=ne?18:9,L=ne?1.1:.7;for(let B=0,H=0;B<$*4&&H<$;B++){let U=s()*6.28,k=.12+Math.sqrt(s())*L,P=O.xy[0]+Math.cos(U)*k,F=O.xy[1]+Math.sin(U)*k;if(!a(P,F)||c(P,F))continue;let q=Ll[J.houses[s()*J.houses.length|0]](n,s,{snow:h(P,F)});q.position.set(P,r(P,F),-F),q.rotation.y=s()*6.28,q.scale.setScalar(.13+s()*.06),b.push(q),H++}let R=ne?26:14;for(let B=0;B<R;B++){let H=s()*6.28,U=Math.sqrt(s())*L*.9,k=O.xy[0]+Math.cos(H)*U,P=O.xy[1]+Math.sin(H)*U;if(!a(k,P))continue;let F=s()<(J.robe||0);x.push({x:k,y:P,dir:s()*6.28,len:.15+s()*.35,sp:.04+s()*.05,ph:s()*10,robe:F,sc:F?.15+s()*.07:.085+s()*.02,col:F?J.robeColors[s()*J.robeColors.length|0]:_o[s()*_o.length|0]})}}),e.stops.forEach(O=>{if(O.air)return;let J=To[u(...O.xy)];if(J)for(let ne=0;ne<10;ne++){let $=s()*6.28,L=.55+s()*.9,R=O.xy[0]+Math.cos($)*L,B=O.xy[1]+Math.sin($)*L;if(!a(R,B)||c(R,B))continue;let H=s()<Math.min(.6,(J.robe||0)*2);x.push({x:R,y:B,dir:s()*6.28,len:.12+s()*.25,sp:.03+s()*.04,ph:s()*10,robe:H,sc:H?.15+s()*.07:.085+s()*.02,col:H?J.robeColors[s()*J.robeColors.length|0]:_o[s()*_o.length|0]})}}),(e.peoples||[]).forEach(O=>{for(let J=0;J<10;J++){let ne=s()*6.28,$=Math.sqrt(s())*.4,L=O.xy[0]+Math.cos(ne)*$,R=O.xy[1]+Math.sin(ne)*$;a(L,R)&&x.push({x:L,y:R,dir:s()*6.28,len:.1+s()*.25,sp:.03+s()*.04,ph:s()*10,robe:!0,sc:.16+s()*.05,col:O.colors[J%O.colors.length]})}}),(e.canoes||[]).forEach(([O,J])=>{let ne=0;for(let $=0;$<400&&ne<4;$++){let L=s()*6.28,R=.35+s()*.5,B=O+Math.cos(L)*R,H=J+Math.sin(L)*R;if(a(B,H))continue;let U=new le,k=new et(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);k.scale(.09,.07,.42),U.add(new te(k,n("#f4f1ea")));let P=new te(new st(.185,.02,.7),n("#b8342a"));P.position.y=-.01,U.add(P),[-1,1].forEach(F=>{let q=new te(new Mn(.03,.22,6),n("#2a2522"));q.position.set(0,.07,F*.4),q.rotation.x=-F*.5,U.add(q)}),U.position.set(B,.07,-H),U.rotation.y=s()*6.28,b.push(U),ne++}});let M=k0(b);M&&(M.userData.aoS=!0,i.add(M));function E(O){let J=[],ne=O?new ge(.16,.3,.75,8):new ge(.17,.2,.42,8);if(ne.translate(0,O?.375:.55,0),J.push([ne,"#ffffff"]),!O){let R=new ge(.15,.12,.34,8);R.translate(0,.17,0),J.push([R,"#3a3633"])}let $=new et(.2,10,8);$.translate(0,.95,0),J.push([$,"#e8c9a8"]);let L=new et(.21,10,6,0,Math.PI*2,0,Math.PI*.55);return L.translate(0,.98,0),J.push([L,"#2a2420"]),qn(J.map(([R,B])=>{R=R.index?R.toNonIndexed():R,R.deleteAttribute("uv");let H=new fe(B),U=R.attributes.position.count,k=new Float32Array(U*3);for(let P=0;P<U;P++)k.set([H.r,H.g,H.b],P*3);return R.setAttribute("color",new dt(k,3)),R}))}let y=[!0,!1].map(O=>{let J=x.filter($=>$.robe===O);if(!J.length)return null;let ne=new Ft(E(O),new Bt({vertexColors:!0,roughness:.9}),J.length);return J.forEach(($,L)=>ne.setColorAt(L,new fe($.col))),ne.castShadow=!1,i.add(ne),{m:ne,list:J,robe:O}}).filter(Boolean),T=[...m.map(O=>[O,1.6]),...v.map(O=>[O,3.2])].map(([O,J])=>[Rg(O),J]).filter(([O])=>O.len>.6),_=[];T.forEach(([O,J])=>{let ne=Math.min(14,Math.floor(O.len/J));for(let $=0;$<ne;$++)_.push({p:O,s:s()*O.len,sp:(.18+s()*.2)*(s()<.5?1:-1),side:0})}),_.forEach(O=>{O.side=O.sp>0?.01:-.01});let w=_.length?new Ft(new st(.022,.016,.044),n("#fff"),_.length):null;if(w){let O=["#c8321e","#f4f1ea","#2f5f8a","#e0a43c","#3d5a3b","#2a2522","#f4f1ea","#9aa3a8"];_.forEach((J,ne)=>w.setColorAt(ne,new fe(O[ne%O.length]))),w.castShadow=!1,i.add(w)}let A=g.map(Rg).filter(O=>O.len>1.5).map(O=>[O,l.length?d(O.pts):0]).sort((O,J)=>O[1]-J[1]).slice(0,80).map(([O])=>O).map(O=>({p:O,s:s()*O.len,sp:(.45+s()*.3)*(s()<.5?1:-1)})),C=5,I=A.length?new Ft(new st(.03,.026,.07),n(t.train||"#f2efe8"),A.length*C):null;I&&(I.castShadow=!1,i.add(I));let G=(()=>{let O=new si([[0,-.62],[.05,-.52],[.11,-.32],[.155,-.08],[.16,.12],[.13,.34],[.085,.48],[.045,.56],[.03,.66],[0,.7]].map(([q,ae])=>new ie(q,ae)),18);O.rotateX(Math.PI/2),O.scale(1,.86,1);let J=(q,ae)=>{let K=new St(new Ue(q.map(([oe,ce])=>new ie(oe,ce))),{depth:ae,bevelEnabled:!1});return K.translate(0,0,-ae/2),K},ne=J([[-.12,0],[.1,0],[-.08,.2]],.025);ne.rotateY(-Math.PI/2),ne.translate(0,.12,-.02);let $=J([[0,.05],[.26,-.08],[.2,.02],[0,-.02],[-.2,.02],[-.26,-.08]],.02);$.rotateX(Math.PI/2),$.translate(0,0,-.62);let L=q=>{let ae=J([[0,0],[.18,-.06],[.03,-.05]],.015);return ae.rotateX(Math.PI/2),ae.rotateY(q>0?.6:Math.PI-.6),ae.translate(q*.12,-.07,.18),ae},R=[O,ne,$,L(1),L(-1)].map(q=>(q=q.index?q.toNonIndexed():q,q.deleteAttribute("uv"),q)),B=qn(R),H=B.attributes.position,U=new Float32Array(H.count*3),k=new fe("#556d86"),P=new fe("#e3e9ec"),F=new fe;for(let q=0;q<H.count;q++)F.lerpColors(P,k,fs.smoothstep(H.getY(q),-.06,.05)),U.set([F.r,F.g,F.b],q*3);return B.setAttribute("color",new dt(U,3)),B})(),D=[0,1,2].map(()=>{let O=new te(G,new Bt({vertexColors:!0,roughness:.55,metalness:0}));return O.castShadow=!1,O.visible=!1,i.add(O),O}),W=[0,1,2,3,4,5].map(()=>{let O=new te(new Ji(.6,.75,32),new an({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));return O.rotation.x=-Math.PI/2,O.visible=!1,i.add(O),O}),V=null,z=new Set;function j(O,J,ne){z.has(O)||(z.add(O),V={t0:performance.now(),at:J.clone(),dir:ne.clone().setY(0).normalize()})}let Y=new it;function Z(O,J,ne){if(y.forEach(({m:$,list:L,robe:R})=>{let B=ne<(R?42:26);$.visible=B,B&&(L.forEach((H,U)=>{let k=J/1e3*H.sp*6+H.ph,P=(Math.sin(k/6)+1)/2*H.len,F=H.x+Math.cos(H.dir)*P,q=H.y+Math.sin(H.dir)*P,ae=Math.cos(k/6)>=0?1:-1;Y.position.set(F,r(F,q)+Math.abs(Math.sin(k*1.6))*.01*H.sc/.1,-q),Y.rotation.set(0,Math.atan2(Math.cos(H.dir)*ae,-Math.sin(H.dir)*ae),Math.sin(k*1.6)*.07),Y.scale.setScalar(H.sc),Y.updateMatrix(),$.setMatrixAt(U,Y.matrix)}),$.instanceMatrix.needsUpdate=!0)}),w&&(w.visible=ne<60,w.visible&&(_.forEach(($,L)=>{$.s+=$.sp*O;let[R,B,H]=$.p.at($.s),U=Math.cos(H)*$.side,k=-Math.sin(H)*$.side;Y.position.set(R+U,r(R,B)+.02,-(B+k)),Y.rotation.set(0,Math.PI-H,0),Y.scale.setScalar(1),Y.updateMatrix(),w.setMatrixAt(L,Y.matrix)}),w.instanceMatrix.needsUpdate=!0)),I&&(I.visible=ne<80,I.visible&&(A.forEach(($,L)=>{$.s+=$.sp*O;for(let R=0;R<C;R++){let[B,H,U]=$.p.at($.s-Math.sign($.sp)*R*.075);Y.position.set(B,r(B,H)+.025,-H),Y.rotation.set(0,Math.PI-U,0),Y.updateMatrix(),I.setMatrixAt(L*C+R,Y.matrix)}}),I.instanceMatrix.needsUpdate=!0)),D.forEach($=>{$.visible=!1}),W.forEach($=>{$.visible=!1}),V){let $=(J-V.t0)/1e3,L=2.1,R=1.4,B=3.2,H=4.6;[[0,0],[.38,1],[.75,-.9]].forEach(([U,k],P)=>{let F=($-U)/L,q=D[P];if(F<-.05||F>1.05)return;let ae=Math.min(1,Math.max(0,F)),K=new S(-V.dir.z,0,V.dir.x).multiplyScalar(k*1.2),oe=V.at.clone().add(K),ce=oe.clone().addScaledVector(V.dir,(ae-.5)*H);ce.y=-.6+B*Math.sin(Math.PI*ae);let ue=V.dir.clone().multiplyScalar(H).setY(B*Math.PI*Math.cos(Math.PI*ae));q.position.copy(ce),q.visible=F>0&&F<1,q.scale.setScalar(R),q.lookAt(ce.clone().add(ue)),[[.06,0],[.94,1]].forEach(([xe,be])=>{let we=W[P*2+be],Ie=(F-xe)*L;Ie<0||Ie>1.1||(we.visible=!0,we.position.copy(oe).addScaledVector(V.dir,(xe-.5)*H).setY(.05),we.scale.setScalar(.5+Ie*2.4),we.material.opacity=.8*(1-Ie/1.1))})}),$>4.2&&(V=null)}}return{update:Z,dolphinJump:j,audit:()=>({houses:b.map(O=>[O.position.x,-O.position.z,O.scale.x]),people:x.map(O=>[O.x,O.y,O.robe?1:0,O.sc]),cars:_.map(O=>O.p.at(O.s).slice(0,2)),trains:A.map(O=>O.p.at(O.s).slice(0,2)),dolphin:{len:1.32*1.4,rise:3.2,sink:.6}}),stats:{houses:b.length,people:x.length,cars:_.length,trains:A.length}}}var wo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Me},cameraProjectionMatrixInverse:{value:new Me},cameraWorldMatrix:{value:new Me},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

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
		}`},So={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Nl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Pg(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Fx(e),n=t.length,r=new Uint8Array(n*4);for(let s=0;s<n;++s){let o=t[s],c=2*Math.PI*o/n,l=new S(Math.cos(c),Math.sin(c),0).normalize();r[s*4]=(l.x*.5+.5)*255,r[s*4+1]=(l.y*.5+.5)*255,r[s*4+2]=127,r[s*4+3]=255}let a=new Hi(r,e,e);return a.wrapS=Ln,a.wrapT=Ln,a.needsUpdate=!0,a}function Fx(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),r=Math.floor(e/2),a=e-1;for(let s=1;s<=t;){if(r===-1&&a===e?(a=e-2,r=0):(a===e&&(a=0),r<0&&(r=e-1)),n[r*e+a]!==0){a-=2,r++;continue}else n[r*e+a]=s++;a++,r--}return n}var Ao={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:F0(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraProjectionMatrixInverse:{value:new Me},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function F0(i,e,t){let n=Bx(i,e,t),r="vec3[SAMPLES](";for(let a=0;a<i;a++){let s=n[a];r+=`vec3(${s.x}, ${s.y}, ${s.z})${a<i-1?",":")"}`}return r}function Bx(i,e,t){let n=[];for(let r=0;r<i;r++){let a=2*Math.PI*e*r/i,s=Math.pow(r/(i-1),t);n.push(new S(Math.cos(a),Math.sin(a),s))}return n}var Ol=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,a){return e[0]*t+e[1]*n+e[2]*r+e[3]*a}noise(e,t){let n,r,a,s=.5*(Math.sqrt(3)-1),o=(e+t)*s,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,p=l-u,f=e-d,m=t-p,v,g;f>m?(v=1,g=0):(v=0,g=1);let b=f-v+h,x=m-g+h,M=f-1+2*h,E=m-1+2*h,y=c&255,T=l&255,_=this.perm[y+this.perm[T]]%12,w=this.perm[y+v+this.perm[T+g]]%12,A=this.perm[y+1+this.perm[T+1]]%12,C=.5-f*f-m*m;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[_],f,m));let I=.5-b*b-x*x;I<0?r=0:(I*=I,r=I*I*this.dot(this.grad3[w],b,x));let G=.5-M*M-E*E;return G<0?a=0:(G*=G,a=G*G*this.dot(this.grad3[A],M,E)),70*(n+r+a)}noise3d(e,t,n){let r,a,s,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),p=1/6,f=(h+u+d)*p,m=h-f,v=u-f,g=d-f,b=e-m,x=t-v,M=n-g,E,y,T,_,w,A;b>=x?x>=M?(E=1,y=0,T=0,_=1,w=1,A=0):b>=M?(E=1,y=0,T=0,_=1,w=0,A=1):(E=0,y=0,T=1,_=1,w=0,A=1):x<M?(E=0,y=0,T=1,_=0,w=1,A=1):b<M?(E=0,y=1,T=0,_=0,w=1,A=1):(E=0,y=1,T=0,_=1,w=1,A=0);let C=b-E+p,I=x-y+p,G=M-T+p,D=b-_+2*p,W=x-w+2*p,V=M-A+2*p,z=b-1+3*p,j=x-1+3*p,Y=M-1+3*p,Z=h&255,X=u&255,O=d&255,J=this.perm[Z+this.perm[X+this.perm[O]]]%12,ne=this.perm[Z+E+this.perm[X+y+this.perm[O+T]]]%12,$=this.perm[Z+_+this.perm[X+w+this.perm[O+A]]]%12,L=this.perm[Z+1+this.perm[X+1+this.perm[O+1]]]%12,R=.6-b*b-x*x-M*M;R<0?r=0:(R*=R,r=R*R*this.dot3(this.grad3[J],b,x,M));let B=.6-C*C-I*I-G*G;B<0?a=0:(B*=B,a=B*B*this.dot3(this.grad3[ne],C,I,G));let H=.6-D*D-W*W-V*V;H<0?s=0:(H*=H,s=H*H*this.dot3(this.grad3[$],D,W,V));let U=.6-z*z-j*j-Y*Y;return U<0?o=0:(U*=U,o=U*U*this.dot3(this.grad3[L],z,j,Y)),32*(r+a+s+o)}noise4d(e,t,n,r){let a=this.grad4,s=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,p,f,m=(e+t+n+r)*c,v=Math.floor(e+m),g=Math.floor(t+m),b=Math.floor(n+m),x=Math.floor(r+m),M=(v+g+b+x)*l,E=v-M,y=g-M,T=b-M,_=x-M,w=e-E,A=t-y,C=n-T,I=r-_,G=w>A?32:0,D=w>C?16:0,W=A>C?8:0,V=w>I?4:0,z=A>I?2:0,j=C>I?1:0,Y=G+D+W+V+z+j,Z=s[Y][0]>=3?1:0,X=s[Y][1]>=3?1:0,O=s[Y][2]>=3?1:0,J=s[Y][3]>=3?1:0,ne=s[Y][0]>=2?1:0,$=s[Y][1]>=2?1:0,L=s[Y][2]>=2?1:0,R=s[Y][3]>=2?1:0,B=s[Y][0]>=1?1:0,H=s[Y][1]>=1?1:0,U=s[Y][2]>=1?1:0,k=s[Y][3]>=1?1:0,P=w-Z+l,F=A-X+l,q=C-O+l,ae=I-J+l,K=w-ne+2*l,oe=A-$+2*l,ce=C-L+2*l,ue=I-R+2*l,xe=w-B+3*l,be=A-H+3*l,we=C-U+3*l,Ie=I-k+3*l,tt=w-1+4*l,We=A-1+4*l,Pe=C-1+4*l,ht=I-1+4*l,mt=v&255,xt=g&255,Se=b&255,Ve=x&255,yt=o[mt+o[xt+o[Se+o[Ve]]]]%32,pr=o[mt+Z+o[xt+X+o[Se+O+o[Ve+J]]]]%32,Ua=o[mt+ne+o[xt+$+o[Se+L+o[Ve+R]]]]%32,zn=o[mt+B+o[xt+H+o[Se+U+o[Ve+k]]]]%32,Jn=o[mt+1+o[xt+1+o[Se+1+o[Ve+1]]]]%32,Gn=.6-w*w-A*A-C*C-I*I;Gn<0?h=0:(Gn*=Gn,h=Gn*Gn*this.dot4(a[yt],w,A,C,I));let Q=.6-P*P-F*F-q*q-ae*ae;Q<0?u=0:(Q*=Q,u=Q*Q*this.dot4(a[pr],P,F,q,ae));let mi=.6-K*K-oe*oe-ce*ce-ue*ue;mi<0?d=0:(mi*=mi,d=mi*mi*this.dot4(a[Ua],K,oe,ce,ue));let fr=.6-xe*xe-be*be-we*we-Ie*Ie;fr<0?p=0:(fr*=fr,p=fr*fr*this.dot4(a[zn],xe,be,we,Ie));let It=.6-tt*tt-We*We-Pe*Pe-ht*ht;return It<0?f=0:(It*=It,f=It*It*this.dot4(a[Jn],tt,We,Pe,ht)),27*(h+u+d+p+f)}};var Ro=class i extends Dn{constructor(e,t,n,r,a,s,o){super(),this.width=n!==void 0?n:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Pg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new $t(this.width,this.height,{type:En}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new wt({defines:Object.assign({},wo.defines),uniforms:In.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:wi,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new tl,this.normalMaterial.blending=wi,this.pdMaterial=new wt({defines:Object.assign({},Ao.defines),uniforms:In.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new wt({defines:Object.assign({},So.defines),uniforms:In.clone(So.uniforms),vertexShader:So.vertexShader,fragmentShader:So.fragmentShader,blending:wi}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new wt({uniforms:In.clone(gs.uniforms),vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:fl,blendDst:Nr,blendEquation:ei,blendSrcAlpha:pl,blendDstAlpha:Nr,blendEquationAlpha:ei}),this.blendMaterial=new wt({uniforms:In.clone(Nl.uniforms),vertexShader:Nl.vertexShader,fragmentShader:Nl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:dl,blendSrc:fl,blendDst:Nr,blendEquation:ei,blendSrcAlpha:pl,blendDstAlpha:Nr,blendEquationAlpha:ei}),this.fsQuad=new ci(null),this.originalClearColor=new fe,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ls,this.depthTexture.format=Rr,this.depthTexture.type=Ar,this.normalRenderTarget=new $t(this.width,this.height,{minFilter:Qt,magFilter:Qt,type:En,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=F0(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=wi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=wi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=wi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,r,a){e.getClearColor(this.originalClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}renderOverride(e,t,n,r,a){e.getClearColor(this.originalClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,a=t.clearAlpha||a,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let r=t.get(n);n.visible=r}),t.clear()}generateNoise(e=64){let t=new Ol,n=e*e*4,r=new Uint8Array(n);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let c=s,l=o;r[(s*e+o)*4]=(t.noise(c,l)*.5+.5)*255,r[(s*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,r[(s*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,r[(s*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let a=new Hi(r,e,e,jn,Ni);return a.wrapS=Ln,a.wrapT=Ln,a.needsUpdate=!0,a}};Ro.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Co={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Po={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Hl={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var kl=class extends Dn{constructor(e,t){super(),this.edgesRT=new $t(e,t,{depthBuffer:!1,type:En}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new $t(e,t,{depthBuffer:!1,type:En}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Yt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=ln,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let a=new Image;a.src=this.getSearchTexture(),a.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Yt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=a,this.searchTexture.magFilter=Qt,this.searchTexture.minFilter=Qt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=In.clone(Co.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new wt({defines:Object.assign({},Co.defines),uniforms:this.uniformsEdges,vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader}),this.uniformsWeights=In.clone(Po.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new wt({defines:Object.assign({},Po.defines),uniforms:this.uniformsWeights,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this.uniformsBlend=In.clone(Hl.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new wt({uniforms:this.uniformsBlend,vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader}),this.fsQuad=new ci(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var Lg={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};var zx=[60,160,320,520,760,1050,1400,1800,2300,2900,3600,4500];function Gx(i){if(i instanceof Date)return[i.getMonth()+1,i.getDate()];let e=String(i||""),t=e.match(/\d{4}[-/.](\d{1,2})[-/.](\d{1,2})/),n=t||e.match(/(\d{1,2})[./-](\d{1,2})/);return n?[+n[1],+n[2]]:null}var Vx=(i,e)=>i*100+e,Lo=(i,e,t)=>e<=t?i>=e&&i<=t:i>=e||i<=t;function Gl(i,e=35,t=0){let n=Gx(i);if(!n)return"autumn";let[r,a]=n;e<0&&(r=(r+5)%12+1,e=-e);let s=Vx(r,a);if(e<23.5)return"green";if(e<30)return Lo(s,120,228)?"sakura":t>=2500&&Lo(s,1201,228)?"snow":"green";let o=e>=41?{sakura:[420,520],autumn:[920,1110],snow:[1111,419]}:e>=38?{sakura:[401,510],autumn:[1001,1125],snow:[1126,331]}:{sakura:[301,430],autumn:[1001,1130],snow:[1201,229]};return Lo(s,...o.sakura)?"sakura":Lo(s,...o.autumn)?"autumn":Lo(s,...o.snow)&&(e>=34||t>=1500)?"snow":"green"}function Vl(i){let e=i.company||{},t=e.home,n=e.homeXY,r=e.airXY;if(!t||!n||!r||t.lat===t.alat)return 35;let a=(n[1]-r[1])/(t.lat-t.alat),s=(i.stops||[]).filter(o=>!o.air&&o.xy);return!s.length||!a?35:t.lat+(s.reduce((o,c)=>o+c.xy[1],0)/s.length-n[1])/a}function Hg(i,e=0){let t=Vl(i),n=(i.days||[]).filter(s=>s.date);if(!n.length)return"autumn";let r={};n.forEach(s=>{let o=Gl(s.date,t,e);r[o]=(r[o]||0)+1});let a=Gl(n[0].date,t,e);return Object.keys(r).reduce((s,o)=>r[o]>r[s]?o:s,a)}var B0={pine:["#3d5a3b","#4b6a45","#33503a"],cedar:["#2f4a35","#3a5a3e","#29412f"]},Fl={palm:["#3f7a3a","#4c8a40","#356b35"],bamboo:["#5e8f3e","#6fa34a","#4f7d36"],banyan:["#3d6b3a","#4a7a42","#335c33"]},Bl=["#f6f4ef","#eceeec","#f9f8f4"],Ms={sakura:{label:"\u6AFB",en:"SAKURA",months:"3\u20134 \u6708",leaves:{cherry:["#fbe1e0","#f8d3d3","#fdeceb","#f6c8c9"],maple:["#9fb46a","#b2c27c","#bccb8a","#8ea65c"],ginkgo:["#a9bf6a","#bccd80","#98b05c"],willow:["#a6c06a","#b8cf7e","#93ad58"],...B0,...Fl},ground:{land:"#f1e7d6",tint:["#bfcb8e",.4],snowLine:2600,snow:Bl},sky:["#f6eee8","#e9d8cf"],fog:{color:"#e9d8cf",mult:1},sun:["#fff0dc",1.7],hemi:["#fff6f2","#fbeee8",2.3],fall:{kind:"petal",count:260,size:.04,speed:.22,sway:.45,colors:["#f7b9b6","#fac9c2","#fde2dc","#f4a6a4"],glow:"#6e4a46"},inland:["cherry","cherry","maple","cedar"]},green:{label:"\u65B0\u7DA0",en:"GREEN",months:"5\u20139 \u6708",leaves:{cherry:["#6f9a4a","#82ac58","#5f8a40"],maple:["#6c9a48","#7fae55","#5c8a3e","#91b860"],ginkgo:["#7aa64e","#8db85c","#6a9442"],willow:["#7fa64e","#93b860","#6c9442"],...B0,...Fl},ground:{land:"#eee6d0",tint:["#a9bb7a",.5],snowLine:3500,snow:Bl},sky:["#eef0e8","#d3dccd"],fog:{color:"#d5dccd",mult:1.12},sun:["#fff6e2",2.6],hemi:["#f6f8ec","#6f6c50"],fall:{kind:"leaf",count:70,size:.055,speed:.3,sway:.35,colors:["#8fae5a","#a6c06a","#6c8a3f","#b5c77e"]},inland:null},autumn:{label:"\u6953",en:"AUTUMN",months:"10\u201311 \u6708",leaves:{maple:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b","#8a8c4a"],cherry:["#c4673a","#d0884a","#b8553a"],ginkgo:["#e8b923","#d9a31a","#f0c94a"],willow:["#b8a24a","#c9b45a","#a08c3e"],...B0,...Fl},ground:{land:"#efe4cf",tint:["#d9ae7a",.08],snowLine:2600,snow:Bl},sky:["#f4eadb","#ddc8a8"],fog:{color:"#ddcbad",mult:1},sun:["#ffdcae",2.4],hemi:["#fff1de","#76664f"],fall:{kind:"maple",count:170,size:.07,speed:.28,sway:.4,colors:["#b8342a","#c9462a","#d6772c","#e0a43c","#e8b923"]},inland:["maple","maple","ginkgo","cedar"]},snow:{label:"\u96EA",en:"SNOW",months:"12\u20132 \u6708",leaves:{maple:["#f8f4ec","#f1eadc","#fbf8f2"],cherry:["#f8f4ec","#f1eadc","#fbf8f2"],ginkgo:["#f8f4ec","#efe7d8","#fbf8f2"],willow:["#f3efe4","#ebe5d6","#f8f5ec"],pine:["#4e6656","#5c7462","#455c4c"],cedar:["#435a4a","#506857","#3b5142"],...Fl},ground:{land:"#f2efe8",tint:["#eeede8",.6],snowLine:160,snow:Bl},sky:["#eef0f0","#d5dadc"],fog:{color:"#dadfe0",mult:.82},sun:["#f4f2ee",2],hemi:["#f4f7fa","#7d8288"],fall:{kind:"snow",count:380,size:.028,speed:.34,sway:.18,colors:["#ffffff","#f6f7f8","#eef1f3"],glow:"#8c9196"},inland:["cedar","cedar","pine","maple"]}};function G0(i,e={}){let t=Ms[i]||Ms.autumn,n=Math.abs(e.lat??35),r={...t.ground};return t===Ms.snow&&(r.snowLine=n>=40?0:n>=37?60:n>=35?160:520),{name:Ms[i]?i:"autumn",...t,ground:r,leaves:{...t.leaves},fall:{...t.fall}}}function V0(i,e,t=zx){let n=u=>new fe(u),r=u=>"#"+u.getHexString(),[a,s]=e.ground.tint,o=e.ground.snow,c=(i.terrain||[]).map((u,d)=>t[d]>=e.ground.snowLine?o[d%o.length]:r(n(u).lerp(n(a),s*(1-.4*d/t.length)))),l={...i.trees||{},colorsBy:{...(i.trees||{}).colorsBy,...e.leaves},colors:e.leaves.maple,pine:e.leaves.pine},h=(i.trees?.inland||[]).some(u=>u==="maple"||u==="cherry");return e.inland&&h&&(l.inland=e.inland),{...i,sky:e.sky,hemi:e.hemi.slice(0,2),hemiPower:e.hemi[2]??1,sun:e.sun[0],sunPower:e.sun[1],fog:e.fog,land:e.ground.land,terrain:c,trees:l,season:e.name}}function zl(i,e,t=10){let n=new _i(i,t),r=n.attributes.position;for(let a=0;a<r.count;a++)r.setZ(a,Math.abs(r.getX(a))*e);return n.center(),n.computeVertexNormals(),n}var Wx={petal(){let i=new Ue;return i.moveTo(0,-.5),i.bezierCurveTo(.34,-.3,.46,.18,.3,.46),i.quadraticCurveTo(.16,.52,.04,.4),i.lineTo(0,.32),i.lineTo(-.04,.4),i.quadraticCurveTo(-.16,.52,-.3,.46),i.bezierCurveTo(-.46,.18,-.34,-.3,0,-.5),zl(i,.35)},maple(){let i=new Ue,e=[];for(let t=0;t<10;t++){let n=Math.PI/2+t/10*Math.PI*2,r=t%2===0,a=r?t===4||t===6?.36:.5:.2;t===5?e.push([-.02,-.12],[-.02,-.4],[.02,-.4],[.02,-.12]):e.push([Math.cos(n)*a,Math.sin(n)*a+.05])}return i.moveTo(...e[0]),e.slice(1).forEach(t=>i.lineTo(...t)),i.closePath(),zl(i,.25,4)},leaf(){let i=new Ue;return i.moveTo(0,-.5),i.quadraticCurveTo(.36,-.1,0,.5),i.quadraticCurveTo(-.36,-.1,0,-.5),zl(i,.4)},snow(){let i=new Ue;for(let e=0;e<=12;e++){let t=e/12*Math.PI*2,n=e%2?.44:.5;e?i.lineTo(Math.cos(t)*n,Math.sin(t)*n):i.moveTo(Math.cos(t)*n,Math.sin(t)*n)}return zl(i,.12,1)}},kg=600;function W0(i,e,t={}){let n=(Ms[i]||Ms.autumn).fall,r=Math.min(kg,t.count??n.count),[a,s,o]=t.area||[10,4.5,10],c=t.size??n.size,l=t.wind||[.12,.04],h=n.kind==="snow"?.4:1.6,u=e("#fff",t.paper||null,{side:lt,roughness:.9,emissive:n.glow||"#000"}),d=new Ft(Wx[n.kind](),u,r);d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1;let p=t.seed??2611,f=()=>(p=p*16807%2147483647,p/2147483647),m=new Float32Array(r*8),v=new fe;for(let w=0;w<r;w++){let A=w*8;m[A]=(f()-.5)*a,m[A+1]=f()*s,m[A+2]=(f()-.5)*o,m[A+3]=f()*6.28,m[A+4]=n.speed*(.7+f()*.6),m[A+5]=c*(.75+f()*.5),m[A+6]=f()*6.28,m[A+7]=.6+f()*.8,d.setColorAt(w,v.set(n.colors[w%n.colors.length]))}let g=new le;g.add(d),g.userData={kind:n.kind,count:r};let b=new bn,x=new ii,M=new S,E=new S,y=new Me,T=Math.min(.4,s*.1),_=(w,A)=>((w+A/2)%A+A)%A-A/2;return g.update=(w,A=1)=>{if(g.visible=A>.02,!!g.visible){w=Math.min(w,.1);for(let C=0;C<r;C++){let I=C*8;m[I+3]+=w*m[I+7]*h,m[I+1]-=m[I+4]*w,m[I]=_(m[I]+l[0]*w,a),m[I+2]=_(m[I+2]+l[1]*w,o),m[I+1]<0&&(m[I+1]+=s,m[I]=(f()-.5)*a,m[I+2]=(f()-.5)*o);let G=m[I+3],D=m[I+1],W=Math.min(1,D/T,(s-D)/T);M.set(m[I]+Math.sin(G+C)*n.sway*.5,D,m[I+2]+Math.cos(G*.7+C)*n.sway*.3),x.set(m[I+6]+G,G*.6,Math.sin(G)*.8),b.setFromEuler(x),E.setScalar(Math.max(1e-4,m[I+5]*A*W)),d.setMatrixAt(C,y.compose(M,b,E))}d.instanceMatrix.needsUpdate=!0}},g.update(0,1),g}var jx=["andon","bonbori","chochin","illum"],Xx={autumn:"andon",sakura:"bonbori",green:"chochin",snow:"illum"},z0=i=>Xx[i]||"andon";function Fg(i,e="autumn"){if(!i)return null;if(i.night)return jx.includes(i.night)?i.night:z0(e);let t=[i.title,i.route,i.cap,i.stay,...i.spots||[]].join(" ");return/祭|まつり/.test(t)?"chochin":/燈飾|イルミ|光之|聖誕/.test(t)?"illum":/夜櫻|夜桜/.test(t)?"bonbori":/夜楓|點燈|点灯|ライトアップ|夜間參拜|夜間拜觀|夜間特別/.test(t)?z0(e):null}var qx={dusk:{sky:["#5d7391","#f0a46a"],fog:{color:"#d8b89e",mult:.9},sun:["#ffa060",1.5],sunDir:[-.95,.28,.3],hemi:["#dcd2c8","#6a5646",1.15],glow:.55},night:{sky:["#141c2b","#33405a"],fog:{color:"#28324a",mult:.75},sun:["#a9bedc",.35],sunDir:[.4,.9,-.35],hemi:["#4a5d80","#1d1a18",.55],glow:1}};function Bg(i,e="autumn"){let t=qx[i];if(!t)return null;let n={time:i,...t,sky:[...t.sky],hemi:[...t.hemi],sun:[...t.sun],fog:{...t.fog},lights:z0(e)};return e==="snow"&&i==="night"&&(n.sky=["#0e1522","#1c2740"],n.fog={color:"#1a2336",mult:.7},n.hemi=["#34476c","#1e2432",.48],n.sun=["#9fb6d8",.3],n.glow=1.35),e==="autumn"&&i==="dusk"&&(n.sun=["#ff8f45",1.6]),e==="sakura"&&i==="dusk"&&(n.sky[1]="#f2b08a"),n}var Ig=[-.75,.85,.5];function zg(i,e,t){let n=(l,h)=>new fe(l).lerp(new fe(h),t),r=(l,h)=>l+(h-l)*t,a=i.fog&&i.fog.color||i.sky[1],s=i.fog&&i.fog.mult||1,o=i.sunPower??2.4,c=i.hemiPower??1;return e||(e={sky:i.sky,fog:{color:a,mult:s},sun:[i.sun,o],sunDir:Ig,hemi:[i.hemi[0],i.hemi[1],c],glow:0}),{sky:[n(i.sky[0],e.sky[0]),n(i.sky[1],e.sky[1])],fog:n(a,e.fog.color),fogMult:r(s,e.fog.mult),sun:n(i.sun,e.sun[0]),sunPower:r(o,e.sun[1]),sunDir:Ig.map((l,h)=>r(l,e.sunDir[h])),hemiSky:n(i.hemi[0],e.hemi[0]),hemiGround:n(i.hemi[1],e.hemi[1]),hemiPower:r(c,e.hemi[2]),glow:r(0,e.glow)}}function Gg(i,e,t){let n=i.image,r=n.getContext("2d"),a=r.createLinearGradient(0,0,0,n.height);a.addColorStop(0,"#"+new fe(e).getHexString()),a.addColorStop(1,"#"+new fe(t).getHexString()),r.fillStyle=a,r.fillRect(0,0,n.width,n.height),i.needsUpdate=!0}var Yx=160,Dg=400,Kx=3,Ug={andon:{shade:["#ffb866","#ffc47a"],warm:"#ffb45a",post:"#5a3e2b",count:36,strings:!1,lamp:.8},bonbori:{shade:["#ffe4dc","#fff0e6"],warm:"#ffd2c0",post:"#3b2f2a",count:30,strings:!1,lamp:.7},chochin:{shade:["#ff5a3a","#ffe2b8"],warm:"#ff9a50",post:"#4a3a30",count:48,strings:!0,lamp:.4},illum:{shade:["#ffe6a8","#fff4dc"],warm:"#ffd27a",post:"#3a3836",count:0,strings:!0,lamp:.35}},Ng=null,Og=()=>Ng||(Ng=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Ir(i);return n.colorSpace=Ut,n})());function Vg(i,e,t={}){let n=Ug[i]||Ug.andon,[r,a]=t.center||[0,0],s=t.radius??.9,o=t.ground||(()=>0),c=t.avoid||(()=>!1),l=Math.min(Yx,t.count??n.count),h=t.seed??1116,u=()=>(h=h*16807%2147483647,h/2147483647),d=new le,p=t.paper||null,f=[0,1,2].map(z=>({rad:s*(.42+z*.27),a0:u()*6.28,span:1.3+u()*.9})),m=z=>{let j=[];return f.forEach(Y=>{let Z=Math.floor(Y.span*Y.rad/z);for(let X=0;X<=Z;X++){let O=Y.a0+Y.span*X/Math.max(1,Z),J=r+Math.cos(O)*Y.rad,ne=a+Math.sin(O)*Y.rad;c(J,ne)||j.push([J,ne,Y])}}),j},v=[],g=[],b=[],x=[],M=[],E=[];if(!n.strings)m(.09).slice(0,l).forEach(([z,j],Y)=>{let Z=o(z,j),X=n.shade[Y%n.shade.length];g.push([z,Z+.05,j,.008,.1]),v.push([z,Z+.115,j,X]),M.push([z,Z+.115,j,X]),E.push([z,Z,j,.12])});else{let z=m(.24),j=i==="illum"?.13:.16,Y=(Z,X,O,J)=>Array.from({length:J+1},(ne,$)=>{let L=$/J;return[Z[0]+(X[0]-Z[0])*L,Z[1]+(X[1]-Z[1])*L-O*4*L*(1-L),Z[2]+(X[2]-Z[2])*L]});z.forEach(([Z,X])=>g.push([Z,o(Z,X)+j/2,X,.006,j]));for(let Z=1;Z<z.length;Z++){let[X,O,J]=z[Z-1],[ne,$,L]=z[Z];if(J!==L)continue;let R=Y([X,o(X,O)+j,O],[ne,o(ne,$)+j,$],.03,16);if(x.push(R),i==="chochin")for(let B=2;B<16&&v.length<l;B+=4){let[H,U,k]=R[B],P=n.shade[(v.length+Z)%2];v.push([H,U-.016,k,P]),M.push([H,U-.016,k,P]),E.push([H,o(H,k),k,.08])}if(i==="illum")for(let B=0;B<=16&&b.length<Dg;B++){let[H,U,k]=R[B],P=n.shade[B%2];b.push([H,U,k,P]),B%3===0&&M.push([H,U,k,P])}}if(i==="illum"){let Z=r+s*.25,X=a+s*.1,O=o(Z,X),J=.34;g.push([Z,O+J/2,X,.006,J]);for(let ne=0;ne<12;ne++){let $=ne/12*6.28,L=Y([Z,O+J,X],[Z+Math.cos($)*.15,O+.02,X+Math.sin($)*.15],0,12);x.push(L);for(let R=1;R<=12&&b.length<Dg;R++){let[B,H,U]=L[R],k=n.shade[(ne+R)%2];b.push([B,H,U,k]),(ne+R)%4===0&&M.push([B,H,U,k])}}E.push([Z,O,X,.3])}}let y=new it,T=new fe,_=[],w=(z,j,Y,Z)=>{if(!Y.length)return null;let X=new Ft(z,j,Y.length);return Y.forEach((O,J)=>{y.position.set(0,0,0),y.scale.setScalar(1),y.rotation.set(0,0,0),Z(O,J),y.updateMatrix(),X.setMatrixAt(J,y.matrix)}),X.castShadow=X.receiveShadow=!1,X.frustumCulled=!1,d.add(X),X};w(new ge(1,1,1,6),e(n.post,p),g,([z,j,Y,Z,X])=>{y.position.set(z,j,Y),y.scale.set(Z,X,Z)});let A=i==="andon"?new st(.03,.036,.03):i==="bonbori"?new ge(.016,.02,.038,6):new et(.016,12,8).scale(1,1.3,1);if(n.shade.forEach(z=>{let j=e(z,p,{emissive:z,emissiveMap:p,emissiveIntensity:0});_.push(j),w(A,j,v.filter(Y=>Y[3]===z),([Y,Z,X])=>{y.position.set(Y,Z,X),y.rotation.set(0,u()*1.5,0)})}),b.length&&n.shade.forEach(z=>{let j=e(z,null,{emissive:z,emissiveIntensity:0});_.push(j),w(new et(.0055,6,4),j,b.filter(Y=>Y[3]===z),([Y,Z,X])=>{y.position.set(Y,Z,X)})}),x.length){let z=[];x.forEach(Y=>{for(let Z=1;Z<Y.length;Z++)z.push(...Y[Z-1],...Y[Z])});let j=new Be;j.setAttribute("position",new Ce(z,3)),d.add(new Lr(j,new ri({color:"#2a2420",transparent:!0,opacity:.7})))}let C=new Float32Array(M.length*3),I=new Float32Array(M.length*3);M.forEach(([z,j,Y,Z],X)=>{C.set([z,j,Y],X*3),T.set(Z),I.set([T.r,T.g,T.b],X*3)});let G=new Be;G.setAttribute("position",new dt(C,3)),G.setAttribute("color",new dt(I,3));let D=new ra({size:t.halo??.14,map:Og(),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Fd,fog:!1});if(M.length){let z=new hs(G,D);z.frustumCulled=!1,d.add(z)}let W=new an({map:Og(),color:n.warm,transparent:!0,opacity:0,depthWrite:!1,blending:Fd,polygonOffset:!0,polygonOffsetFactor:-2});w(new xn(1,1).rotateX(-Math.PI/2),W,E,([z,j,Y,Z])=>{y.position.set(z,j+.004,Y),y.scale.set(Z*2,1,Z*2)});let V=f.slice(0,Math.min(Kx,t.lamps??3)).map(z=>{let j=z.a0+z.span/2,Y=r+Math.cos(j)*z.rad,Z=a+Math.sin(j)*z.rad,X=new ps(n.warm,0,s*1.4,2);return X.position.set(Y,o(Y,Z)+.16,Z),d.add(X),X});return d.userData={kind:i,shades:v.length,bulbs:b.length,posts:g.length,halos:M.length,lamps:V.length},d.update=(z=0,j=1)=>{let Y=j*(.97+.03*Math.sin(z*7.3)*Math.sin(z*3.1));_.forEach(Z=>{Z.emissiveIntensity=1.3*Y}),D.opacity=.85*Y,W.opacity=.5*Y,V.forEach(Z=>{Z.intensity=(t.lampPower??n.lamp)*Y})},d.update(0,0),d}var Zx=["clear","rain","fog"];function Wg(i){if(!i)return"clear";if(Zx.includes(i.weather))return i.weather;let e=[i.title,i.route,i.cap,...i.spots||[]].join(" ");return/雲海|晨霧|朝霧|霧/.test(e)?"fog":/雨天|下雨|雨中|雨の/.test(e)?"rain":"clear"}var Jx={rain:{sky:["#cfd4d3","#aab2b4"],fog:{color:"#b3bbbd",mult:.62},sun:["#e8ecef",.9],sunDir:[-.75,.85,.5],hemi:["#e2e7e8","#6e6e66",1.3],glow:0},fog:{sky:["#f4efe6","#e4e0d8"],fog:{color:"#e9e5dd",mult:.78},sun:["#fff0d8",1.5],sunDir:[-.85,.42,.4],hemi:["#f7f3ec","#9a948a",1.25],glow:0}};function j0(i,e="autumn"){let t=Jx[i];if(!t)return null;let n={weather:i,...t,sky:[...t.sky],hemi:[...t.hemi],sun:[...t.sun],fog:{...t.fog},sunDir:[...t.sunDir]};return i==="rain"&&e==="snow"&&(n.sky=["#dde1e3","#bcc3c7"],n.fog.color="#c6cdd1"),i==="rain"&&e==="sakura"&&(n.sky[1]="#b9b4b4",n.hemi=["#ece8e6","#c9bfb8",1.9]),n}var Qx=600,$x=24;function X0(i,e,t={}){if(i==="rain"&&t.season==="snow"){let l=W0("snow",e,{...t,count:Math.min(kg,t.count??560),size:t.size??.032});return l.userData.kind="heavy-snow",l}let n=new le,[r,a,s]=t.area||[10,4.5,10],o=t.seed??4242,c=()=>(o=o*16807%2147483647,o/2147483647);if(n.userData={kind:i,count:0},i==="rain"){let l=Math.min(Qx,t.count??520),h=t.wind||[.5,.15],u=3.2,d=t.len??.11,p=e("#c9d5dc",t.paper||null,{roughness:.8,emissive:"#3c4a52"}),f=new Ft(new st(.0045,d,.0045),p,l);f.castShadow=f.receiveShadow=!1,f.frustumCulled=!1;let m=new Float32Array(l*4);for(let E=0;E<l;E++)m[E*4]=(c()-.5)*r,m[E*4+1]=c()*a,m[E*4+2]=(c()-.5)*s,m[E*4+3]=.8+c()*.4;let v=new bn().setFromUnitVectors(new S(0,1,0),new S(-h[0],u,-h[1]).normalize()),g=new S,b=new S,x=new Me,M=(E,y)=>((E+y/2)%y+y)%y-y/2;n.add(f),n.userData.count=l,n.update=(E,y=1)=>{if(n.visible=y>.02,!!n.visible){E=Math.min(E,.1);for(let T=0;T<l;T++){let _=T*4,w=m[_+3];m[_+1]-=u*w*E,m[_]=M(m[_]+h[0]*w*E,r),m[_+2]=M(m[_+2]+h[1]*w*E,s),m[_+1]<0&&(m[_+1]+=a,m[_]=(c()-.5)*r,m[_+2]=(c()-.5)*s);let A=m[_+1],C=Math.min(1,A/.25,(a-A)/.25);g.set(m[_],A,m[_+2]),b.set(y*C,y*C*w,y*C),f.setMatrixAt(T,x.compose(g,v,b))}f.instanceMatrix.needsUpdate=!0}}}else if(i==="fog"){let l=Math.min($x,t.count??16),[h,u]=t.levels||[.05,.3],d=[],p=new Bt({color:"#fbf9f4",map:t.paper||null,roughness:1,transparent:!0,opacity:0,depthWrite:!1});for(let f=0;f<l;f++){let m=e3(700+f),v=[[0,0,.85],...Array.from({length:5},(E,y)=>[(y-2)*.5+(m()-.5)*.2,(m()-.3)*.5,.45+m()*.35])],g=Array.from({length:64},(E,y)=>{let T=y/64*Math.PI*2,_=Math.cos(T),w=Math.sin(T),A=.3;for(let[C,I,G]of v){let D=_*C+w*I,W=D*D-(C*C+I*I-G*G);W>=0&&(A=Math.max(A,D+Math.sqrt(W)))}return new ie(_*A*1.6,w*A*.7)}),b=new St(new Ue(g),{depth:.01,bevelEnabled:!0,bevelThickness:.02,bevelSize:.05,bevelSegments:3});b.rotateX(-Math.PI/2);let x=new te(b,p),M=(.55+c()*.7)*(t.scale??1);x.scale.set(M,1,M*(.8+c()*.4)),x.position.set((c()-.5)*r,h+(u-h)*(f%4)/3+c()*.03,(c()-.5)*s),x.rotation.y=c()*.6-.3,x.renderOrder=2,x.userData.v=.03+c()*.05,x.castShadow=x.receiveShadow=!1,n.add(x),d.push(x)}n.userData.count=l,n.update=(f,m=1)=>{n.visible=m>.02,n.visible&&(f=Math.min(f,.1),p.opacity=.72*m,d.forEach(v=>{v.position.x+=v.userData.v*f,v.position.x>r/2+1&&(v.position.x=-r/2-1)}))}}else n.update=()=>{};return n.update(0,0),n}function e3(i){return()=>(i=i*16807%2147483647,i/2147483647)}var he=window.JOURNEY,pn=he.story,ve=he.company||{},d2=e0[pn.theme]||Object.values(e0)[0],ui=pn.season||Hg(he),Le=V0(d2,G0(ui,{lat:Vl(he)})),Ma=(()=>{let i=ve.home,e=ve.homeXY,t=ve.airXY;return i&&e&&t&&i.lat!==i.alat?{ky:(e[1]-t[1])/(i.lat-i.alat),y0:e[1],lat0:i.lat}:null})(),Zl=ve.home&&ve.homeXY&&ve.airXY&&ve.home.lng!==ve.home.alng&&ve.home.lat!==ve.home.alat?((i,e,t)=>{let n=(e[0]-t[0])/(i.lng-i.alng),r=(e[1]-t[1])/(i.lat-i.alat);return(a,s)=>[e[0]+(a-i.lng)*n,e[1]+(s-i.lat)*r]})(ve.home,ve.homeXY,ve.airXY):null,At=Zl&&he.stops.some(i=>i.name==="\u5929\u6A4B\u7ACB")?wl(Zl,4):null;if(At){he.land=U1(he.land,At),he.terrain&&(he.terrain.sheets=k1(N1(he.terrain.sheets,he.land,At),At));let i=he.stops.find(n=>n.name==="\u5929\u6A4B\u7ACB");i&&(i.xy=At(135.1925,35.5682)),he.worldLM=(he.worldLM||[]).filter(n=>n.slug!=="amanohashidate");let e=n=>n.flatMap((r,a)=>{if(!a)return[r];let s=n[a-1],o=Math.max(1,Math.ceil(Math.hypot(r[0]-s[0],r[1]-s[1])/.02));return Array.from({length:o},(c,l)=>[s[0]+(r[0]-s[0])*(l+1)/o,s[1]+(r[1]-s[1])*(l+1)/o])}),t=n=>{let r=n.pts.map(o=>o[0]),a=n.pts.map(o=>o[1]),s=At.R*1.05;return Math.min(...r)<At.c[0]+s&&Math.max(...r)>At.c[0]-s&&Math.min(...a)<At.c[1]+s&&Math.max(...a)>At.c[1]-s};[he.roads,he.rail].forEach(n=>(n||[]).forEach(r=>{t(r)&&(r.pts=e(r.pts).map(At.warp))}))}var p2=(i,e)=>!!At&&Math.hypot(i-At.c[0],e-At.c[1])<At.R*1.7,t3=(i,e)=>At?Math.min(1,.4+.6*Math.max(0,Math.hypot(i-At.c[0],e-At.c[1])/At.R-1)/1.6):1,f2=i=>Ma?Ma.lat0+(i-Ma.y0)/Ma.ky:Vl(he),n3=(he.days.find(i=>i.date)||{}).date,Bo=ui==="snow"&&!!Ma,jg=new Map,m2=i=>{if(!Bo)return Le;let e=Math.round(f2(i)*2)/2,t=jg.get(e);if(t)return t;let n=Gl(n3,e),r=e>=30?"snow":n==="snow"?"green":n;return t=V0(d2,G0(r,{lat:e})),jg.set(e,t),t},g2=i=>m2(i).season==="snow";function v2(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3),r=new Map;for(let a=0;a<t.count;a++){let s=-t.getZ(a),o=Math.round(f2(s)*2),c=r.get(o);c||(c=e(m2(s)),r.set(o,c)),n[a*3]=c.r,n[a*3+1]=c.g,n[a*3+2]=c.b}i.setAttribute("color",new dt(n,3))}var Aa=matchMedia("(prefers-reduced-motion: reduce)").matches,Li=new URLSearchParams(location.search),b2=he.story.mode==="daily"||Li.get("mode")==="daily",rp=()=>b2&&innerHeight>innerWidth,Xg=performance.now(),Ri=Li.has("perf")?{ts:[],drops:0,tzDrops:0,load:null,el:null,at:0}:null;function i3(i){let e=Ri,t=i-(e.ts.length?e.ts[e.ts.length-1]:i);for(e.ts.push(i);e.ts.length&&e.ts[0]<i-1e3;)e.ts.shift();if(t>25&&(e.drops++,pt&&e.tzDrops++),e.max=Math.max(...e.ts.slice(1).map((r,a)=>r-e.ts[a]),0),!e.el||i-e.at<250)return;e.at=i;let n=e.load;e.el.textContent=`${e.ts.length} fps\u3000\u6700\u9577 ${e.max.toFixed(0)} ms\u3000\u6389\u683C ${e.drops}\uFF08\u5E8F\u5E55 ${e.tzDrops}\uFF09`+(n?`
\u4E0B\u8F09 ${n.dl}\u3000\u5B57\u578B\uFF0B\u8CC7\u6599 ${n.font}\u3000\u5EFA\u5834\u666F ${n.build}
\u6A21\u578B ${n.models}\u3000\u7DE8\u8B6F ${n.compile}\u3000\u9810\u71B1 ${n.warm}\u3000\u5408\u8A08 ${n.total} \u79D2`:"")}var An=.42;Object.entries(Le.css).forEach(([i,e])=>document.documentElement.style.setProperty(i,e));var Ht=(i,e=An)=>new S(i[0],e,-i[1]),mh=Li.get("aa")||"smaa",Ne=new zc({antialias:mh==="msaa"});Ne.setPixelRatio(Math.min(2,devicePixelRatio));Ne.shadowMap.enabled=!0;Ne.shadowMap.type=Om;Ne.shadowMap.autoUpdate=!1;Ne.toneMapping=ml;Ne.toneMappingExposure=1;document.getElementById("stage").appendChild(Ne.domElement);var Oe=new to,_t=new nn(36,1,.1,800),Bn=new El(Ne,new $t(innerWidth,innerHeight,{samples:mh==="msaa"?Math.min(4,Ne.capabilities.maxSamples||4):0,type:En}));Bn.addPass(new Tl(Oe,_t));var qg=!Li.has("aofull"),gh=Li.get("ao")||"bake";if(gh==="gtao"){let i=new Ro(Oe,_t,innerWidth,innerHeight);if(i.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1,scale:1.25,samples:12}),i.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:qg?2.5:5,rings:2,samples:10}),i.blendIntensity=.9,Bn.addPass(i),qg){let e=i.setSize.bind(i);i.setSize=(t,n)=>e(Math.max(1,Math.round(t/2)),Math.max(1,Math.round(n/2)))}}var ap=new ir(u1),sp=new ir(d1),Ep=new ir(p1);Ep.uniforms.offset.value=1;Ep.uniforms.darkness.value=.3;Bn.addPass(ap);Bn.addPass(sp);Bn.addPass(Ep);Bn.addPass(new _l);var Jl=mh==="fxaa"?new ir(Lg):null;mh==="smaa"&&Bn.addPass(new kl(innerWidth,innerHeight));Jl&&Bn.addPass(Jl);var op=(i,e)=>(Li.get(i)||e).split(",").map(Number),Sn={map:{value:new Hi(new Uint8Array([255,255,255,255]),1,1)},box:{value:new at(0,0,0,0)},map2:{value:null},box2:{value:new at(0,0,0,0)},k:{value:new at(...op("haok","0.5,0.03,0.1,0.08"))},t:{value:new at(...op("haot","0.25,0.15,0.9,1.3"))},l:{value:+(Li.get("haol")||.7)}};Sn.map.value.needsUpdate=!0;Sn.map2.value=Sn.map.value;var x2=`uniform vec4 haoK;
float haoO(vec2 hb) { hb -= 0.004; return haoK.x * clamp(hb.x / haoK.y, 0.0, 1.0) + haoK.z * clamp(hb.y / haoK.w, 0.0, 1.0); }
vec2 haoUV(vec3 p, vec4 b) { return vec2((p.x - b.x) * b.z, (-p.z - b.y) * b.w); }
bool haoIn(vec2 uv) { return uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0; }`;if(gh==="bake"){let i=`varying vec3 vHaoW;
#ifdef HAO_TREE
varying vec3 vHaoL;
uniform vec4 haoT;
#endif
#ifdef HAO_LM
uniform sampler2D lmMap;
uniform vec4 lmBox;
uniform mat4 lmInv;
uniform float lmS;
uniform float haoL;
#endif
uniform sampler2D haoMap;
uniform vec4 haoBox;
uniform sampler2D haoMap2;
uniform vec4 haoBox2;
${x2}
float haoF(vec3 w) {
  float o = 0.0; vec2 uv = haoUV(w, haoBox);
  if (haoBox.z > 0.0 && haoIn(uv)) o += haoO(texture2D(haoMap, uv).rg - w.y);
  else { uv = haoUV(w, haoBox2); if (haoBox2.z > 0.0 && haoIn(uv)) o += haoO(texture2D(haoMap2, uv).rg - w.y); }
#ifdef HAO_TREE
  float r = length(vHaoL.xz), b = 1.0 - smoothstep(0.0, haoT.w, vHaoL.y);
  o += haoT.x * (1.0 - smoothstep(0.0, haoT.z, r)) * (0.4 + 0.6 * b) + haoT.y * b;
#endif
#ifdef HAO_LM
  vec3 l = (lmInv * vec4(w, 1.0)).xyz; vec2 lu = haoUV(l, lmBox);
  if (haoIn(lu)) o += haoL * haoO((texture2D(lmMap, lu).rg - l.y) * lmS);
#endif
  return 1.0 - min(o, 0.7);
}`;Bt.prototype.onBeforeCompile=function(e){let t=this.userData;if(t.noAO)return;Object.assign(e.uniforms,{haoMap:Sn.map,haoBox:Sn.box,haoMap2:Sn.map2,haoBox2:Sn.box2,haoK:Sn.k,haoT:Sn.t,haoL:Sn.l},t.lm||{});let n=(t.tree?`#define HAO_TREE
`:"")+(t.lm?`#define HAO_LM
`:"");e.vertexShader=n+e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHaoW;
#ifdef HAO_TREE
varying vec3 vHaoL;
#endif`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 hw = vec4(transformed, 1.0);
#ifdef HAO_TREE
vHaoL = transformed;
#endif
#ifdef USE_BATCHING
hw = batchingMatrix * hw;
#endif
#ifdef USE_INSTANCING
hw = instanceMatrix * hw;
#endif
vHaoW = (modelMatrix * hw).xyz; }`),e.fragmentShader=n+e.fragmentShader.replace("#include <common>",`#include <common>
`+i).replace("#include <fog_fragment>",`#include <fog_fragment>
gl_FragColor.rgb *= haoF(vHaoW);`)},Bt.prototype.customProgramCacheKey=function(){let e=this.userData;return e.noAO?"":"hao"+(e.tree?"T":"")+(e.lm?"L":"")}}var va=null;function y2(i,e,t,n,r){va||(va={hm:new wt({side:lt,vertexShader:`varying float vY;
void main() { vec4 p = vec4(position, 1.0);
#ifdef USE_INSTANCING
p = instanceMatrix * p;
#endif
vec4 w = modelMatrix * p; vY = w.y; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`varying float vY;
void main() { gl_FragColor = vec4(vY, 0.0, 0.0, 1.0); }`}),q:new ci(null),bm:{}});let a=12;r=r.map(g=>Math.min(g,a/2.5));let s=va.bm[a]||(va.bm[a]=new wt({defines:{N:a},uniforms:{t:{value:null},d:{value:new ie},sg:{value:new ie},first:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D t; uniform vec2 d; uniform vec2 sg; uniform float first; varying vec2 vUv;
void main() { vec2 a = vec2(0.0), ws = vec2(0.0);
  for (int i = -N; i <= N; i++) { float f = float(i); vec4 s = texture2D(t, vUv + d * f); vec2 v = first > 0.5 ? s.rr : s.rg; vec2 k = exp(-0.5 * f * f / (sg * sg)); a += k * v; ws += k; }
  gl_FragColor = vec4(a / ws, 0.0, 1.0); }`})),o=g=>new $t(t,n,{type:En,minFilter:ln,magFilter:ln,depthBuffer:g}),c=o(!0),l=o(!1),h=o(!1),u=Ne.getClearColor(new fe),d=Ne.getClearAlpha(),p=Ne.shadowMap.needsUpdate,f=Ne.getRenderTarget(),m=i.background,v=i.fog;return i.background=null,i.fog=null,i.overrideMaterial=va.hm,Ne.shadowMap.needsUpdate=!1,Ne.setClearColor(0,1),Ne.setRenderTarget(c),Ne.clear(),Ne.render(i,e),i.background=m,i.fog=v,i.overrideMaterial=null,s.uniforms.sg.value.set(...r),va.q.material=s,[[c,l,1/t,0,1],[l,h,0,1/n,0]].forEach(([g,b,x,M,E])=>{s.uniforms.t.value=g.texture,s.uniforms.d.value.set(x,M),s.uniforms.first.value=E,Ne.setRenderTarget(b),va.q.render(Ne)}),Ne.setRenderTarget(f),Ne.setClearColor(u,d),Ne.shadowMap.needsUpdate=p,c.dispose(),l.dispose(),h.texture}function M2(i,e,t,n,r){let a=new Oi(-(e-i)/2,(e-i)/2,(n-t)/2,-(n-t)/2,.01,r*2+10);return a.up.set(0,0,-1),a.position.set((i+e)/2,r+5,-(t+n)/2),a.lookAt((i+e)/2,0,-(t+n)/2),a.updateMatrixWorld(),[a,new at(i,t,1/(e-i),1/(n-t))]}var E2=op("haos","0.03,0.1");function r3(){if(gh!=="bake")return;let i=performance.now(),e=he.stops.filter(u=>!u.air).map(u=>u.xy);if(!e.length)return;let t=Math.min(...e.map(u=>u[0]))-4,n=Math.max(...e.map(u=>u[0]))+4,r=Math.min(...e.map(u=>u[1]))-4,a=Math.max(...e.map(u=>u[1]))+4,s=Math.max(n-t,a-r)/Math.min(2048,Ne.capabilities.maxTextureSize),o=[],c=[];Vo.forEach(u=>u.update({x:1e6,y:1e6,z:1e6},!0)),Oe.traverse(u=>{(u.isMesh||u.isLine||u.isPoints||u.isSprite)&&u.visible&&!u.userData.aoS&&(u.visible=!1,o.push(u))});let l=(u,d,p,f,m,v)=>{let g=Math.ceil((d-u)/s),b=Math.ceil((f-p)/s),[x,M]=M2(u,d,p,f,50);m.value=y2(Oe,x,g,b,E2.map(E=>E/s)),v.value.copy(M),c.push(g+"\xD7"+b)};l(t,n,r,a,Sn.map,Sn.box);let h=ve.homeXY;h&&(h[0]<t||h[0]>n||h[1]<r||h[1]>a)&&l(h[0]-5,h[0]+5,h[1]-5,h[1]+5,Sn.map2,Sn.box2),o.forEach(u=>{u.visible=!0}),console.info("[\u906E\u853D\u9810\u70D8]",c.join("\uFF0B"),(performance.now()-i).toFixed(0)+" ms")}var T2=[];function Tp(i){if(gh!=="bake"||i.userData.lmU)return;let e=i.parent,t=i.position.clone(),n=i.quaternion.clone(),r=i.scale.x,a=new to;a.add(i),i.position.set(0,0,0),i.quaternion.identity(),i.scale.setScalar(1),i.updateMatrixWorld(!0);let s=new rn().setFromObject(i),o=()=>{i.position.copy(t),i.quaternion.copy(n),i.scale.setScalar(r),e&&e.add(i),i.updateMatrixWorld(!0)};if(s.isEmpty())return o();let c=.35/r,l=(s.min.x+s.max.x)/2,h=-(s.min.z+s.max.z)/2,u=Math.max(s.max.x-s.min.x,s.max.z-s.min.z)/2+c,d=128,[p,f]=M2(l-u,l+u,h-u,h+u,Math.max(1,s.max.y)),m=y2(a,p,d,d,E2.map(M=>M/r/(2*u/d)));o();let v={lmMap:{value:m},lmBox:{value:f},lmInv:{value:i.matrixWorld.clone().invert()},lmS:{value:r}};i.userData.lmU=v,T2.push(i),i.traverse(M=>{if(!M.isMesh)return;let E=y=>(!y||!y.isMeshStandardMaterial||(y.userData.lm&&y.userData.lm!==v&&(y=y.clone()),y.userData.lm=v),y);M.material=Array.isArray(M.material)?M.material.map(E):E(M.material)});let g=new xn(2*u,2*u);g.rotateX(-Math.PI/2),g.translate(l,.004/r,-h);let b=new wt({uniforms:{haoK:Sn.k,...v},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,blending:dl,blendSrc:Nr,blendDst:Bd,vertexShader:"varying vec3 vL; void main() { vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D lmMap; uniform vec4 lmBox; uniform float lmS; varying vec3 vL;
${x2}
void main() { vec2 u = haoUV(vL, lmBox); float o = haoIn(u) ? haoO(texture2D(lmMap, u).rg * lmS) : 0.0; gl_FragColor = vec4(vec3(1.0 - min(o, 0.7)), 1.0); }`}),x=new te(g,b);x.castShadow=x.receiveShadow=!1,x.matrixAutoUpdate=!1,x.matrix.copy(i.matrixWorld),i.userData.lmD=x,Oe.add(x)}var _p=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},ft=_p(20261116);function vh(i,e,t=1){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let r=new Ir(n);return r.wrapS=r.wrapT=Ln,r.repeat.set(t,t),r.colorSpace=Ut,r.anisotropy=Ne.capabilities.getMaxAnisotropy(),r}function _2(i,e,t){let n=_p(t);i.fillStyle="#fff",i.fillRect(0,0,e,e);for(let r=0;r<e*18;r++)i.fillStyle=`rgba(80,60,40,${n()*.06})`,i.fillRect(n()*e,n()*e,1+n()*2,1+n()*2);i.lineWidth=.6;for(let r=0;r<e;r++){let a=n()*e,s=n()*e,o=n()*6.28,c=6+n()*22;i.strokeStyle=`rgba(90,70,50,${.03+n()*.06})`,i.beginPath(),i.moveTo(a,s),i.quadraticCurveTo(a+Math.cos(o)*c*.5+n()*4,s+Math.sin(o)*c*.5,a+Math.cos(o)*c,s+Math.sin(o)*c),i.stroke()}}var jt=(i,e)=>vh(512,(t,n)=>_2(t,n,e),i),Ke=(i,e=null,t={})=>new Bt({color:i,map:e,roughness:.95,metalness:0,...t});Oe.background=vh(256,(i,e)=>{let t=i.createLinearGradient(0,0,0,e);t.addColorStop(0,Le.sky[0]),t.addColorStop(1,Le.sky[1]),i.fillStyle=t,i.fillRect(0,0,e,e)});Oe.fog=new Gc(new fe(Le.fog&&Le.fog.color||Le.sky[1]),30,120);var q0=Le.fog&&Le.fog.mult||1,Ho=new sl(Le.hemi[0],Le.hemi[1],Le.hemiPower??1),w2=new ca("#dfe8f2",.55);w2.position.set(30,18,-40);Oe.add(w2);var Vt=new ca(Le.sun,Le.sunPower??2.4);Vt.castShadow=!0;Vt.shadow.mapSize.setScalar(Ne.capabilities.maxTextureSize>=4096?4096:2048);Vt.shadow.bias=-4e-4;Vt.shadow.normalBias=.02;Oe.add(Ho,Vt,Vt.target);var S2=i=>i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0);function a3(i,e){let t=S2(i)>0?1:-1,n=i.length;return i.map((r,a)=>{let s=i[(a-1+n)%n],o=i[(a+1)%n],c=Math.hypot(r[0]-s[0],r[1]-s[1])||1,l=Math.hypot(o[0]-r[0],o[1]-r[1])||1,h=(r[1]-s[1])/c+(o[1]-r[1])/l,u=-((r[0]-s[0])/c+(o[0]-r[0])/l),d=Math.hypot(h,u)||1;return[r[0]+t*h/d*e,r[1]+t*u/d*e]})}var wp=i=>new Ue(i.map(e=>new ie(e[0],e[1]))),Sp=new te(new xn(800,800),Ke(Le.sea,vh(256,Le.seaPattern,220)));Sp.rotation.x=-Math.PI/2;Sp.receiveShadow=!0;Oe.add(Sp);[[1.1,Le.rings[0],.03],[.45,Le.rings[1],.06]].forEach(([i,e,t],n)=>{let r=new _i(he.land.filter(s=>Math.abs(S2(s))>.02).map(s=>wp(a3(s,i))),1);r.rotateX(-Math.PI/2);let a=new te(r,Ke(e,jt(.12,5+n)));a.position.y=t,a.receiveShadow=!0,Oe.add(a)});{let i=new St(he.land.map(wp),{depth:An-.12,bevelEnabled:!0,bevelThickness:.04,bevelSize:.05,bevelSegments:1,curveSegments:1});i.rotateX(-Math.PI/2),i.translate(0,.08,0),Bo&&v2(i,t=>new fe(t.land)),yo(i);let e=new te(i,[Bo?Ke("#ffffff",jt(.16,7),{vertexColors:!0}):Ke(Le.land,jt(.16,7)),Ke(Le.side,jt(.5,9))]);e.castShadow=e.receiveShadow=!0,Oe.add(e)}var Gr=null;if(At){let i=he.terrain&&he.terrain.lift||.1,e=An-i;Oe.add(G1(At,e,{lift:i,materials:[Ke(Le.sea,vh(256,Le.seaPattern,.275)),Ke("#"+new fe(Le.sea).multiplyScalar(.7).getHexString())]})),Oe.add(z1(At,An,{materials:[Ke(Le.land,jt(.16,7)),Ke("#"+new fe(Le.land).multiplyScalar(.85).getHexString())]})),Gr=D1(Ke,{geo:At,base:e,paper:jt(1,41)}),Gr.userData.top=e,Oe.add(Gr)}var gt=he.stops.map(i=>i.xy),Ci=he.flights||[],bh=(i,e)=>String(i&&i.leg||"").split("\u2192")[e]||"",s3=i=>{let e=(he.cities||[]).filter(t=>i.includes(t.name)).sort((t,n)=>n.name.length-t.name.length)[0];return e?e.xy:null},A2=i=>(i=i.trim(),i?ve.airXY&&ve.home&&String(ve.home.airport||"").split(/\s+/)[0].slice(0,2)===i.slice(0,2)?ve.airXY:s3(i):null),Ra=Ci[0]&&(Ci[0].fromXY||A2(bh(Ci[0],0)))||ve.airXY||null,Yg=Ci.length&&(Ci[Ci.length-1].toXY||A2(bh(Ci[Ci.length-1],1)))||Ra,o3=Ci[0]&&bh(Ci[0],0).trim()||ve.home&&ve.home.airport||"",Ql=(i,e)=>!!i.air&&(Array.isArray(i.days)?i.days.includes(e):i.day===e),Ca=i=>{if(i<1)return Math.max(0,he.stops.findIndex(n=>!n.air));let e=he.days[i-1];if(e&&e.hero!=null&&gt[e.hero])return e.hero;let t=e&&e.stops.find(n=>!he.stops[n].air&&gt[n]);return t??Ca(i-1)},cp=[],di=(()=>{let i=[],e=he.days.length;return he.days.forEach((t,n)=>{cp[n]=[];let r=t.stops||[],a=r.filter(o=>he.stops[o].air),s=r.filter(o=>!he.stops[o].air);(n===0&&n===e-1?[...a,...s]:n===0?[...a,...s]:n===e-1?[...s,...a]:r).forEach(o=>{i[i.length-1]!==o&&i.push(o),cp[n].push(i.length-1)})}),i.length?i:[0]})(),cr=di.map(i=>gt[i]),or=i=>{for(let e=Math.min(i,he.days.length);e>=1;e--){let t=cp[e-1]||[];if(t.length)return Math.max(...t)}return 0},R2=i=>{let e=i.days.flatMap(t=>he.days[t-1].stops||[]).filter(t=>!he.stops[t].air);return e.length?e:[di[or(i.days[i.days.length-1])]]},[[xh,yh],[Mh,Eh]]=he.routeBox,C2=he.land.filter(i=>i.some(([e,t])=>e>xh-2&&e<Mh+2&&t>yh-2&&t<Eh+2)),Pa=(i,e)=>C2.some(t=>{let n=!1;for(let r=0,a=t.length-1;r<t.length;a=r++)t[r][1]>e!=t[a][1]>e&&i<(t[a][0]-t[r][0])*(e-t[r][1])/(t[a][1]-t[r][1])+t[r][0]&&(n=!n);return n}),c3=he.land.map(i=>{let e=1e9,t=1e9,n=-1e9,r=-1e9;return i.forEach(([a,s])=>{e=Math.min(e,a),n=Math.max(n,a),t=Math.min(t,s),r=Math.max(r,s)}),[e,t,n,r]}),pi=(i,e)=>he.land.some((t,n)=>{let r=c3[n];if(i<r[0]||i>r[2]||e<r[1]||e>r[3])return!1;let a=!1;for(let s=0,o=t.length-1;s<t.length;o=s++)t[s][1]>e!=t[o][1]>e&&i<(t[o][0]-t[s][0])*(e-t[s][1])/(t[o][1]-t[s][1])+t[s][0]&&(a=!a);return a}),l3=C2.flat(),Ap=(i,e)=>{let t=1e9;for(let n of l3){let r=(n[0]-i)**2+(n[1]-e)**2;r<t&&(t=r)}return Math.sqrt(t)},lr=(i,e)=>{let t=1e9;for(let n=1;n<cr.length;n++){let[r,a]=cr[n-1],[s,o]=cr[n],c=s-r,l=o-a,h=Math.max(0,Math.min(1,((i-r)*c+(e-a)*l)/(c*c+l*l||1)));t=Math.min(t,Math.hypot(r+c*h-i,a+l*h-e))}return t},ws=(i,e)=>Math.min(...gt.map(t=>Math.hypot(t[0]-i,t[1]-e))),Zt=[];he.stops.forEach(i=>{let e=(pn.landmarks||{})[i.name];if(!e)return;let[t,n=0,r]=Array.isArray(e)?e:[e];if(t.startsWith("glb:"))Zt.push({x:i.xy[0],y:i.xy[1],r:.6*(r||2.6),flag:!0});else if(t==="torii-row")for(let a=0;a<11;a++){let s=a/10,o=Math.sin(s*Math.PI*1.6)*.32*1.9,c=s*1.5*1.9,l=Math.cos(n),h=Math.sin(n);Zt.push({x:i.xy[0]+o*l+c*h,y:i.xy[1]-(-o*h+c*l),r:.34,flag:!0})}else t!=="bridge"&&Zt.push({x:i.xy[0],y:i.xy[1],r:{pagoda:.5,taipei101:.38,dunes:.75,karst:1.4,terraces:1.3,volcano:1.3}[t]||.5,flag:t!=="dunes"})});var lp=ve.home&&(ve.home.landmark||(pn.landmarks||{})[ve.home.city]);ve.homeXY&&lp&&Zt.push({x:ve.homeXY[0],y:ve.homeXY[1],r:.38,flag:!0});var La=(he.worldLM||[]).map(i=>({...i,x:i.xy[0],y:i.xy[1]})),P2=Zt.length;La.forEach(i=>{let e=Math.min(3,...La.filter(t=>t!==i).map(t=>Math.hypot(t.x-i.x,t.y-i.y)),...Zt.slice(0,P2).map(t=>Math.hypot(t.x-i.x,t.y-i.y)-t.r));i.sc=Math.max(.5,Math.min(1.7,e*.85)),i.r=.5*i.sc});for(let i=0;i<40;i++)La.forEach(e=>{[...La,...Zt.slice(0,P2)].forEach(a=>{if(a===e)return;let s=e.x-a.x,o=e.y-a.y,c=Math.hypot(s,o)||.001,l=e.r+a.r+.05;if(c<l){let h=(l-c)/(a.sc?2:1);e.x+=s/c*h,e.y+=o/c*h}});let t=e.x-e.xy[0],n=e.y-e.xy[1],r=Math.hypot(t,n);r>.3&&(e.x=e.xy[0]+t/r*.3,e.y=e.xy[1]+n/r*.3)});La.forEach(i=>Zt.push({x:i.x,y:i.y,r:i.r,flag:!0}));var h3=[-.87,-.49],$l=([i,e])=>{for(let t=0;t<12;t++)Zt.forEach(n=>{if(!n.flag)return;let r=i-n.x,a=e-n.y,s=Math.hypot(r,a),o=n.r*1.3+.32;if(s<o){let[c,l]=s>.001?[r/s,a/s]:h3;i=n.x+c*o,e=n.y+l*o}});return[i,e]},dr=he.stops.map(i=>$l(i.xy)),Ia=ve.homeXY?[$l(ve.homeXY),$l(Ra||ve.airXY)]:[],_a=(i,e)=>Zt.every(t=>Math.hypot(t.x-i,t.y-e)>t.r+.1)&&[...dr,...Ia].every(t=>Math.hypot(t[0]-i,t[1]-e)>.3),Rp=(()=>{let i=bh(Ci[0],1).trim().slice(0,2),e=he.stops.findIndex(n=>Ql(n,1));if(e>=0)return e;let t=i?he.stops.findIndex(n=>n.air&&n.name.startsWith(i)):-1;return t>=0?t:0})(),Pi=(()=>{let i=he.stops[Rp],e=Ra||[i.xy[0]-60,i.xy[1]-60];return Ht(i.xy).sub(Ht(e)).setY(0).normalize()})(),ko=new S(-Pi.z,0,Pi.x),u3=[...dr,...Ia].map(([i,e])=>({x:i,y:e,r:.45})).concat(Zt.map(i=>({x:i.x,y:i.y,r:i.r+.25}))),L2=(i,e,t)=>{for(let n of[.5,-.5,.75,-.75,1,-1,1.3,-1.3,.3,-.3]){let r=!0;for(let a=e;a<=t&&r;a+=.2){let s=i.clone().addScaledVector(Pi,a).addScaledVector(ko,n),o=s.x,c=-s.z;r=pi(o,c)&&u3.every(l=>Math.hypot(l.x-o,l.y-c)>l.r)}if(r)return i.clone().addScaledVector(ko,n)}return i.clone().addScaledVector(ko,.5)},Cp=L2(Ht(Ra||[0,0]),-2.6,1.8),I2=L2(Ht(he.stops[Rp].xy).addScaledVector(Pi,-.6),-1.8,1.2);[[Cp,-2.9,1.9,.38],[I2,-1.9,1.3,.34]].forEach(([i,e,t,n])=>{for(let r=e;r<=t;r+=.3){let a=i.clone().addScaledVector(Pi,r);Zt.push({x:a.x,y:-a.z,r:n,flag:!1,rw:!0})}});{let i=Cp.clone().addScaledVector(Pi,1.45).addScaledVector(ko,-.5);Zt.push({x:i.x,y:-i.z,r:.75,flag:!1,rw:!0})}var zo=Math.min(...gt.map(i=>i[0]))-7,Th=Math.max(...gt.map(i=>i[0]))+7,eh=Math.min(...gt.map(i=>i[1]))-4,Pp=Math.max(...gt.map(i=>i[1]))+4;var D2=()=>!1,fi=he.terrain,Fo=fi&&fi.lift||.1,Kg=(i,e)=>{if(!fi)return 0;let t=fi.grid,n=Math.round((i-t.x0)/t.dx),r=Math.round((e-t.y0)/t.dy);return n<0||r<0||n>=t.w||r>=t.h?0:t.data.charCodeAt(r*t.w+n)-48},Go=At&&fi?B1(Kg,At):Kg,Zn=(i,e)=>An+Go(i,e)*Fo,Zg=(i,e)=>{let t=Go(i,e);return t?fi.levels[t-1]:0},Es=[60,160,320,520,760,1050,1400,1800,2300,2900,3600,4500],fn=(i,e,t=.12)=>{let n=0;for(let[r,a]of[[0,0],[t,0],[-t,0],[0,t],[0,-t],[t,t],[-t,-t],[t,-t],[-t,t]])n=Math.max(n,Go(i+r,e+a));return An+n*Fo};fi&&fi.sheets.map((i,e)=>[i,e]).reverse().forEach(([i,e])=>{let t=i.polys.map(([l,...h])=>{let u=wp(l);return h.forEach(d=>u.holes.push(new aa(d.map(p=>new ie(p[0],p[1]))))),u});if(!t.length)return;let n=Fo*.18,r=new St(t,{depth:Fo-2*n,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:1,curveSegments:1});r.rotateX(-Math.PI/2),r.translate(0,An+e*Fo+n,0);let a=l=>{let h=l.terrain,u=Math.max(0,Es.filter(p=>p<=i.h).length-1),d=i.h<Es[0]?0:Math.min(1,(i.h-Es[u])/((Es[u+1]||Es[u]+1)-Es[u]));return new fe(h[Math.min(u,h.length-1)]).lerp(new fe(h[Math.min(u+1,h.length-1)]),d)},s="#"+a(Le).getHexString(),o="#"+new fe(s).multiplyScalar(.62).getHexString();Bo&&v2(r,a),yo(r);let c=new te(r,Bo?[Ke("#ffffff",jt(.6,21+e),{vertexColors:!0}),Ke("#9e9e9e",null,{vertexColors:!0})]:[Ke(s,jt(.6,21+e)),Ke(o)]);c.renderOrder=-e-1,c.castShadow=c.receiveShadow=!0,Oe.add(c)});function U2(i,e,t,n){let r=new Ft(i,e,t.length),a=new it,s=new fe;return t.forEach((o,c)=>{n(a,s,o,c),a.updateMatrix(),r.setMatrixAt(c,a.matrix),r.setColorAt(c,s)}),r.castShadow=r.receiveShadow=!0,Oe.add(r),r}var d3=i=>{let e=new St(i.map(t=>new Ue(t.map(([n,r])=>new ie(n,r)))),{depth:.04,bevelEnabled:!1});return e.translate(0,0,-.02),e},Wl={coast:Le.trees.coast||["pine"],inland:Le.trees.inland||["maple"]},p3=i=>(Le.trees.colorsBy||{})[i]||i==="maple"&&Le.trees.colors||i==="pine"&&Le.trees.pine||S1[i],Vo=[],th=[],Lp=[];{let i=[],e=fi&&fi.grid,t=1,n=(h,u,d=0)=>he.cities.some(p=>Math.hypot(p.xy[0]-h,p.xy[1]-u)<(Ul.has(p.name)?1:.55)+d);he.stops.forEach(h=>{if(h.air)return;let u=0;for(let d=0;d<80&&u<Le.trees.perStop;d++){let p=ft()*6.28,f=.55+ft()*1.6,m=h.xy[0]+Math.cos(p)*f,v=h.xy[1]+Math.sin(p)*f;Pa(m,v)&&lr(m,v)>.26&&ws(m,v)>.5&&_a(m,v)&&(i.push([m,v]),u++)}});let r=[[xh-3,yh-3,Mh+3,Eh+3],...ve.homeXY?[[ve.homeXY[0]-3,ve.homeXY[1]-4.2,ve.homeXY[0]+2.2,ve.homeXY[1]+.6]]:[]],a=Math.round((Le.trees.clusters??230)*t),s=r.length>1?Math.round(30*t):0;for(let h=0,u=0;e&&h<a*40&&u<a;h++){let d=r[u<s?1:0],p=d[0]+ft()*(d[2]-d[0]),f=d[1]+ft()*(d[3]-d[1]);if(Zg(p,f)<60||!pi(p,f)||n(p,f,.4))continue;u++;let m=.22+ft()*.6,v=18+(ft()*46|0);for(let g=0;g<v;g++){let b=ft()*6.28,x=m*Math.sqrt(ft()),M=p+Math.cos(b)*x*1.4,E=f+Math.sin(b)*x;pi(M,E)&&lr(M,E)>.3&&ws(M,E)>.6&&_a(M,E)&&!n(M,E)&&i.push([M,E])}}for(let h=0,u=0;h<6e3&&u<320*t;h++){let d=r[h%6?0:r.length-1],p=d[0]+ft()*(d[2]-d[0]),f=d[1]+ft()*(d[3]-d[1]);pi(p,f)&&lr(p,f)>.3&&ws(p,f)>.7&&_a(p,f)&&(i.push([p,f]),u++)}let o=Wl.inland.includes("cedar")?["cedar","pine"]:Wl.coast,c=(h,u)=>{let d=null,p=1e9;return he.cities.forEach(f=>{let m=Math.hypot(f.xy[0]-h,f.xy[1]-u);m<p&&(p=m,d=f.country)}),d},l=i.map(([h,u])=>{let d=(To[c(h,u)]||{}).trees,p=Zg(h,u)>=760,f=d?p?d.high:d.low:p?o:Ap(h,u)<.7?Wl.coast:Wl.inland;return f[ft()*f.length|0]});[...new Set(l)].forEach(h=>{let u=p3(h),d=d3(xo[h]||xo.maple),p=i.filter((m,v)=>l[v]===h).flatMap((m,v)=>{let g=(.12+ft()*.1)*t3(m[0],m[1]),b=ft()*Math.PI,x=u[(v*7+(ft()*3|0))%u.length];return[[...m,g,b,x],[...m,g,b+Math.PI/2,x]]}),f=R1(d,xo[h]||xo.maple,Ke("#fff",jt(2,31),{userData:{tree:!0}}),p,(m,v,[g,b,x,M,E])=>{m.position.set(g,Zn(g,b)+.04,-b),m.scale.setScalar(x),m.rotation.y=M,v.set(E)});Oe.add(f.near,f.far),Vo.push(f)}),console.info("[\u68EE\u6797]",i.length,"\u68F5"),th.push(...i)}{let i=Le.houses||["machiya"],e=[],t=new Set(he.days.map(r=>Ca(r.n)));he.stops.forEach((r,a)=>{if(r.air)return;let s=0,o=(Le.village??12)+(t.has(a)?6:0);for(let c=0;c<240&&s<o;c++){let l=ft()*6.28,h=.6+ft()*(1.1+c/80),u=r.xy[0]+Math.cos(l)*h,d=r.xy[1]+Math.sin(l)*h;if(!Pa(u,d)||lr(u,d)<.18||ws(u,d)<.5||D2(u,d)||Ap(u,d)<.05||!_a(u,d)||p2(u,d))continue;let p=Ll[i[ft()*i.length|0]](Ke,ft,{snow:g2(d)});p.position.set(u,Zn(u,d),-d),p.rotation.y=Math.atan2(r.xy[0]-u,r.xy[1]-d)+(ft()-.5)*.6,p.scale.setScalar(.21+ft()*.06),e.push(p),Lp.push([u,d]),s++}});let n=k0(e);n&&Oe.add(n)}Oe.traverse(i=>{i.isMesh&&(i.userData.aoS=!0)});var As=Cg({scene:Oe,J:he,T:Le,mat:Ke,snowAt:(i,e)=>g2(e),groundY:Zn,onLand:pi,R:ft,H:An,focus:[...gt,...ve.homeXY?[ve.homeXY,ve.airXY]:[]],avoid:(i,e)=>ws(i,e)<.55||!_a(i,e)||p2(i,e)});console.info("[\u4E16\u754C]",As.stats);r3();{let i=(()=>{let n=new Ue([[-.5,.12],[.5,.12],[.32,-.1],[-.32,-.1]].map(([o,c])=>new ie(o,c))),r=new St(n,{depth:.22,bevelEnabled:!1});r.translate(0,.1,-.11);let a=new Be().setFromPoints([new S(-.05,.22,0),new S(.3,.22,0),new S(-.05,.75,0)]);a.computeVertexNormals();let s=r.index?r.toNonIndexed():r;return s.deleteAttribute("uv"),s.clearGroups(),qn([s,a])})(),e=[];for(let n=0;n<4e3&&e.length<(Le.boats??10);n++){let r=zo+ft()*(Th-zo),a=eh+ft()*(Pp-eh),s=Ap(r,a);s>.35&&s<1.4&&!Pa(r,a)&&lr(r,a)>.6&&!D2(r,a)&&e.push([r,a])}let t=new Bt({color:"#fff",roughness:.95,side:lt});U2(i,t,e,(n,r,[a,s])=>{n.position.set(a,.06,-s),n.scale.setScalar(.22),n.rotation.y=ft()*6.28,r.set(Le.flagPaper)})}var hp=[];{let i=a=>{let s=_p(900+a),o=[[0,0,.85],...Array.from({length:5},(h,u)=>[(u-2)*.48+(s()-.5)*.2,(s()-.3)*.5,.45+s()*.35])],c=Array.from({length:72},(h,u)=>{let d=u/72*Math.PI*2,p=Math.cos(d),f=Math.sin(d),m=.3;for(let[v,g,b]of o){let x=p*v+f*g,M=x*x-(v*v+g*g-b*b);M>=0&&(m=Math.max(m,x+Math.sqrt(M)))}return new ie(p*m*1.5,f*m*.8)}),l=new St(new Ue(c),{depth:.1,bevelEnabled:!0,bevelThickness:.07,bevelSize:.09,bevelSegments:4});return l.rotateX(-Math.PI/2),l},e=Ke("#fbf8f2",jt(.4,61)),t=ve.homeXY,n=[zo,Th].concat(t?[t[0]]:[]),r=[eh,Pp].concat(t?[t[1]]:[]);for(let a=0,s=0;hp.length<22&&s<400;s++){let o=Math.min(...n)+ft()*(Math.max(...n)-Math.min(...n)),c=Math.min(...r)+ft()*(Math.max(...r)-Math.min(...r));if(lr(o,c)<3)continue;let l=new te(i(a++),e),h=.9+ft()*1.4;l.scale.set(h,1,h),l.position.set(o,6+ft()*4,-c),l.castShadow=!1,l.userData.v=.08+ft()*.12,Oe.add(l),hp.push(l)}}var f3=160,dT=Array.from({length:f3},()=>[ft()*10-5,ft()*4.5,ft()*10-5,ft()*6.28,.18+ft()*.2]),up=W0(ui,Ke,{paper:jt(1,51)});Oe.add(up);var Y0=0;function m3(i,e,t,n){let r=document.createElement("canvas"),a=r.getContext("2d");a.font=n;let s=Math.ceil(a.measureText(i).width)+40;r.width=s,r.height=160,a.font=n,a.fillStyle=t,a.textBaseline="middle",a.fillText(i,20,80);let o=new Ir(r);return o.colorSpace=Ut,o.anisotropy=Ne.capabilities.getMaxAnisotropy(),new te(new xn(e*s/160,e),new an({map:o,transparent:!0,depthWrite:!1}))}var g3=(he.seas||[]).map(i=>{let e=m3(i.name,1.5,"rgba(225,232,236,.55)",`500 96px ${Le.css["--serif"]}`);return e.rotation.x=-Math.PI/2,e.position.set(i.xy[0],.08,-i.xy[1]),Oe.add(e),e}),Vr=[],_h=[0];for(let i=1;i<cr.length;i++){let[e,t]=[cr[i-1],cr[i]],n=Math.max(1,Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.3));for(let r=i===1?0:1;r<=n;r++)Vr.push([e[0]+(t[0]-e[0])*r/n,e[1]+(t[1]-e[1])*r/n]);_h.push(Vr.length-1)}Vr.length<2&&(Vr.push(cr[0],[cr[0][0]+.01,cr[0][1]]),_h.push(1));var hr=new yn(Vr.map(([i,e])=>Ht([i,e],fn(i,e,.16)+.09)),!1,"centripetal"),Ip=1200,Dp=6,Wo=new te(new oi(hr,Ip,.034,Dp,!1),Ke(Le.route,null,{emissive:Le.route,emissiveIntensity:.18}));Wo.castShadow=!0;Oe.add(Wo);var nh=new te(new oi(hr,Ip,.15,Dp,!1),Ke(Le.route,null,{emissive:Le.route,emissiveIntensity:.55,transparent:!0,opacity:0}));nh.visible=!1;Oe.add(nh);var jl=0,Io=1,N2=Vr.length*24,dp=hr.getLengths(N2),wa=dp[dp.length-1],Uo=i=>dp[Math.round(_h[i]/(Vr.length-1)*N2)]/wa,Up=[];for(let i=wa-.15;i>0;i-=.3)Up.push(i/wa);var Np=U2(new so(.022,.12,2,6),Ke(Le.stitch),Up,(i,e,t)=>{let n=hr.getPointAt(t),r=hr.getTangentAt(t);i.position.copy(n),i.quaternion.setFromUnitVectors(new S(0,1,0),r),e.set(Le.stitch)});Np.castShadow=!1;var ih=new te(new et(.1,18,12),Ke("#fffaf0",null,{emissive:"#ffe2b0",emissiveIntensity:.7}));Oe.add(ih);function v3(i){i=Math.max(0,Math.min(1,i)),Wo.geometry.setDrawRange(0,Math.floor(i*Ip)*Dp*6),Np.count=Up.filter(e=>e>i).length,ih.position.copy(hr.getPointAt(i)),ih.visible=i>.002&&i<.998}var O2=pn.landmarks||{},b3=new Set,x3={pagoda:1.2,taipei101:1.3,karst:1,terraces:1,volcano:1,dunes:1},Ss=new Il;Ss.setMeshoptDecoder(Ag);var K0=0;{let i=Ss.parse.bind(Ss);Ss.parse=(e,t,n,r)=>{K0++,i(e,t,a=>{K0--,n(a)},a=>{K0--,r&&r(a)})}}var Br=[],Kl=!!(he.modelUrls&&Object.keys(he.modelUrls).length),H2=i=>!!((he.models||{})[i]||(he.modelUrls||{})[i]),y3=i=>i.traverse(e=>{e.isMesh&&(e.geometry.attributes.normal||e.geometry.computeVertexNormals(),e.castShadow=e.receiveShadow=!0,e.material.roughness=.95,e.material.metalness=0)}),jo=0,rh=[],M3=()=>!pt&&!!(window.__journey&&window.__journey.ready)&&!(window.HUD&&["load","teaser"].includes(window.HUD.state));function k2(i,e,t){let n=(he.models||{})[i],r=(he.modelUrls||{})[i];if(!n&&!r)return!1;let a={slug:i,xy:e,done:!1};Br.push(a);let s=()=>{a.done=!0,Br.every(l=>l.done)&&Kl&&Ne.compileAsync&&Ne.compileAsync(Oe,_t).catch(()=>{})},o=l=>{y3(l.scene),t.add(l.scene),Tp(t),jo=performance.now(),s()},c=l=>{console.warn("[\u6A21\u578B] \u8F09\u5165\u5931\u6557",i,l&&l.message),s()};return n?(Ss.parse(Uint8Array.from(atob(n),l=>l.charCodeAt(0)).buffer,"",o,c),!0):(a.go=l=>{let h=u=>l?u():rh.push(u);fetch(r).then(u=>{if(!u.ok)throw new Error(u.status);return u.arrayBuffer()}).then(u=>h(()=>Ss.parse(u,"",d=>h(()=>o(d)),c)),c)},!0)}function F2(i,e,t){let n=t||O2[i];if(!n)return null;let[r,a=0,s]=Array.isArray(n)?n:[n],o=(h,u)=>(h.position.set(e[0],u,-e[1]),h.rotation.y=a,Oe.add(h),h);if(r.startsWith("glb:")){if(!H2(r.slice(4)))return null;let h=new le;return h.scale.setScalar(s||2.6),k2(r.slice(4),e,h),o(h,fn(e[0],e[1],.9))}let c=da[r];if(!c)return null;let l=c(Ke);return l.scale.setScalar(s||x3[r]||1.9),o(l,r==="bridge"?.04:fn(e[0],e[1],.3)),Tp(l),l}var Op=[];he.stops.forEach((i,e)=>{let t=F2(i.name,i.xy);t&&(b3.add(e),Op.push({g:t,s0:t.scale.x,lim:0,k:1,trip:!0}))});ve.homeXY&&lp&&F2(ve.home.city,ve.homeXY,lp);La.forEach(i=>{let e=!he.stops.some(r=>Math.hypot(r.xy[0]-i.x,r.xy[1]-i.y)<i.r+.4),t=(r,a)=>Op.push({g:r,s0:a,lim:0,k:1,trip:!e});if(i.brick&&da[i.brick]){let r=da[i.brick](Ke);r.scale.setScalar(i.sc*1.3),r.position.set(i.x,fn(i.x,i.y,i.r),-i.y),r.rotation.y=.5,Oe.add(r),Tp(r),t(r,i.sc*1.3);return}if(!H2(i.slug))return;let n=new le;n.scale.setScalar(i.sc),n.position.set(i.x,fn(i.x,i.y,i.r),-i.y),Oe.add(n),t(n,i.sc),k2(i.slug,[i.x,i.y],n)});function ah(i,e){let t=i.name.replace(/\s+[A-Z]{3}$/,""),n=`600 64px ${Le.css["--serif"]}`,r=document.createElement("canvas"),a=r.getContext("2d");a.font=n;let s=Math.ceil(a.measureText(t).width)+70;r.width=s,r.height=112,a.fillStyle=Le.flagPaper,a.fillRect(0,0,s,112),a.fillStyle=i.air?Le.air:Le.bead,a.fillRect(0,0,12,112),a.font=n,a.fillStyle="#2a2420",a.textBaseline="middle",a.fillText(t,36,60);let o=new Ir(r);o.colorSpace=Ut,o.anisotropy=Ne.capabilities.getMaxAnisotropy();let c=.3,l=c*s/112,h=new le,u=Ht(e,fn(...e,.1)),d=new te(new ge(.018,.018,1.05,6),Ke("#2a2420"));d.position.y=.52;let p=new te(new et(.06,12,8),Ke(i.air?Le.air:Le.bead,null,{metalness:.3,roughness:.5}));p.position.y=1.07;let f=new te(new xn(l,c),new an({map:o,side:lt}));return f.position.set(l/2+.02,.86,0),d.castShadow=p.castShadow=f.castShadow=!0,h.add(d,p,f),h.position.copy(u),h.scale.setScalar(1e-4),Oe.add(h),{grp:h,s:i,k:0}}var Hp=he.stops.map((i,e)=>Object.assign(ah(i,dr[e]),{i:e})),sh=(ve.offices||[]).map(i=>({...i,xy:i.xy||(Zl&&i.lng!=null?Zl(i.lng,i.lat):null)})).filter(i=>i.xy),E3=sh.map(i=>{let e=$l(i.xy);Hp.push(Object.assign(ah({name:i.name,xy:i.xy,day:0},e),{office:!0}));let t=new te(new Ji(.2,.3,48).rotateX(-Math.PI/2),Ke(Le.route,null,{emissive:Le.route,emissiveIntensity:.8,side:lt,transparent:!0}));return t.position.copy(Ht(e,fn(...e,.3)+.02)),t.scale.setScalar(1e-4),Oe.add(t),t}),Ts=0;ve.homeXY&&Hp.push(...sh.length?[]:[ah({name:ve.home.city,xy:ve.homeXY,day:0},Ia[0])],ah({name:o3,xy:Ra||ve.airXY,day:.5,air:!0},Ia[1]));var pT=document.getElementById("gallery");var wn=X1(Ke,{paper:jt(1,51),color:"#fbf7ef",accent:Le.air||Le.stitch});wn.traverse(i=>{i.isMesh&&(i.castShadow=!0)});wn.visible=!1;Oe.add(wn);var Jg=i=>he.stops.findIndex(e=>Ql(e,i)),kp=Ht(gt[Rp]),B2=Ht(gt[Jg(he.days.length)>=0?Jg(he.days.length):gt.length-1]),Rs=Ra?Ht(Ra):kp.clone().add(new S(-60,0,60)),oh=Yg?Ht(Yg):Rs,ar=ve.homeXY?Ht(ve.homeXY):Rs.clone(),T3=(i,e)=>{let t=e.clone().sub(i).setY(0),n=t.length(),r=Math.min(1,n/12);t.normalize();let a=(c,l)=>i.clone().addScaledVector(t,c).setY(l),s=Zn(i.x,-i.z),o=Zn(e.x,-e.z);return new yn([a(0,s+.3),a(.5*r,s+1.1),a(1.6*r,2.8),a(4*r,4.6),a(n/2,5.5),a(n-4*r,4.6),a(n-1.6*r,2.8),a(n-.5*r,o+1.1),a(n,o+.3)],!1,"centripetal")},z2=(i,e,t,n=.1)=>{let r=0;for(let a=e;a<=t;a+=.1){let s=i.clone().addScaledVector(Pi,a);r=Math.max(r,fn(s.x,-s.z,n))}return r},wh=Cp.setY(Rs.y),Fp=I2.setY(kp.y),Bp=z2(wh,-2.8,1.4,.16),G2=z2(Fp,-.4,1.2,.16);{let e=wh.clone().addScaledVector(Pi,-.7).setY(Bp+.006),t=Math.atan2(Pi.x,Pi.z),n=new le,r=new te(new st(.34,.012,4.4),Ke("#9d968a",jt(.5,63)));r.receiveShadow=!0,n.add(r);let a=Ke("#f6f1e6");for(let s=-4.4/2+.35;s<4.4/2-.3;s+=.3){let o=new te(new st(.022,.014,.15),a);o.position.set(0,.002,s),n.add(o)}for(let s of[-4.4/2+.1,4.4/2-.1])for(let o=-2;o<=2;o++){if(!o)continue;let c=new te(new st(.025,.014,.12),a);c.position.set(o*.05,.002,s),n.add(c)}n.position.copy(e),n.rotation.y=t,Oe.add(n)}var _3=(i,e,t,n)=>{let r=e.clone().sub(i).setY(0),a=r.length();r.normalize();let s=(o,c)=>i.clone().addScaledVector(r,o).setY(c);return new yn([s(-2.3,t),s(-1.3,t),s(-.3,t+.01),s(.5,t+.16),s(1.3,t+.5),s(2.3,t+1.05),s(3.8,2.4),s(6.5,4.3),s(10,5.3),s(a/2,5.5),s(a-10,5.3),s(a-6,4.2),s(a-3.4,2.6),s(a-1.7,n+.75),s(a-.7,n+.2),s(a,n),s(a+.6,n),s(a+1,n)],!1,"centripetal")},en=_3(wh,Fp,Bp+.17,G2+.17),Sh=T3(B2,oh);en.arcLengthDivisions=4e3;var V2=(i,e)=>e.clone().sub(i).setY(0).normalize().multiplyScalar(-10).add(new S(0,5.5,0)),pp=V2(Rs,kp),Qg=V2(B2,oh),w3=[en,Sh].map(i=>{let e=i.getSpacedPoints(Math.ceil(i.getLength()/.25)).filter(n=>n.y>Zn(n.x,-n.z)+1.1),t=new Zi(new Be().setFromPoints(e),new nl({color:Le.stitch,dashSize:.55,gapSize:.45,transparent:!0,opacity:0,depthWrite:!1}));return t.computeLineDistances(),t.visible=!1,t.userData.k=0,Oe.add(t),t});function ba(i,e,t=1){if(!i||t<.002){wn.visible=!1;return}e=Math.min(.9995,Math.max(5e-4,e)),wn.visible=!0,wn.position.copy(i.getPointAt(e)),wn.lookAt(e>.99?wn.position.clone().add(i.getTangentAt(e)):i.getPointAt(Math.min(1,e+.004)));let n=Math.min(1,Math.max(0,(wn.position.y-Zn(wn.position.x,-wn.position.z)-.3)/1.2));wn.rotateZ(Math.sin(e*Math.PI*5)*.14*n),wn.scale.setScalar(t)}var Nt=(()=>{let i=en.getLength(),e=wh.clone().addScaledVector(Pi,1.45).addScaledVector(ko,-.5).setY(Bp+.5),t=6e3,n=0,r=1e9,a=0,s=i;for(let f=0;f<=t*.06;f++){let m=en.getPointAt(f/t),v=Math.hypot(m.x-e.x,m.z-e.z);v<r&&(r=v,n=f/t*i)}for(let f=0;f<=t*.06;f++){let m=f/t*i;if(m>n)break;if(en.getPointAt(f/t).distanceTo(e)<1.25){a=m;break}}r=1e9;for(let f=Math.floor(t*.94);f<=t;f++){let m=en.getPointAt(f/t).distanceTo(Fp.clone().setY(G2+.17));m<r&&(r=m,s=f/t*i)}let o=2.4,c=3,l=7.4,h=2*n/c,u=2*((s-n)/l-h),d=2*(i-s)/h,p=f=>f<o?0:f<o+c?n*((f-o)/c)**2:f<o+c+l?(()=>{let m=(f-o-c)/l;return n+l*(h*m+u*(m/2-Math.sin(2*Math.PI*m)/(4*Math.PI)))})():(()=>{let m=Math.min(1,(f-o-c-l)/d);return s+(i-s)*(2*m-m*m)})();return{L:i,CR:e,sp:n,sf:a,TA:o,TB:c,TR:l,TE:d,dur:o+c+l+d,s:p}})(),ch=i=>Math.atan2(i.x,i.z),Z0=i=>Math.asin(Math.max(-1,Math.min(1,i.y/(i.length()||1)))),lh=i=>i-Math.round(i/(2*Math.PI))*2*Math.PI,S3=(i,e)=>new S(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)),A3=en.getPointAt(0).sub(Nt.CR).normalize(),No=en.getPointAt(Nt.sf/Nt.L).sub(Nt.CR).normalize(),$g=Math.sign(lh(ch(en.getPointAt(Nt.sp/Nt.L).sub(Nt.CR))-ch(No)))||1,J0=new S,R3=new S;function C3(i){Te.fd=9*Fi(i/Nt.TA);let e=Nt.s(i),t=e/Nt.L,n=R3.copy(en.getPointAt(Math.min(1,t))),{CR:r,TA:a,TB:s}=Nt,o=a+s;if(i<a)Sa(Ge.from,{p:r,t:r.clone().addScaledVector(A3,Math.max(3.5,en.getPointAt(0).distanceTo(r)))},ur(i/a));else if(i<o+.06){let c=e<Nt.sf?J0.subVectors(n,r).normalize():J0.copy(No);if(Te.p.copy(r),Te.t.copy(r).addScaledVector(c,Math.max(3.5,n.distanceTo(r))),!Aa&&e>Nt.sf){let l=.012*Math.max(0,1-n.distanceTo(r)/1.6);Te.p.x+=Math.sin(i*93)*l,Te.p.y+=Math.sin(i*71+1)*l}}else{let c=.28+.72*Fi((i-o)/3),l=n.clone().addScaledVector(pp,c),h=ur(Math.min(1,(i-o-.06)/1.15));Te.p.lerpVectors(r,l,h);let u=J0.subVectors(n,Te.p),d=ch(No),p=lh(ch(u)-d-$g*Math.PI)+$g*Math.PI,f=S3(d+p*h,Z0(No)+(Z0(u)-Z0(No))*h);Te.t.copy(Te.p).addScaledVector(f,Math.max(3.5,u.length()))}if(ba(en,t,1-.4*Fi((i-Nt.TA-Nt.TB-Nt.TR)/Nt.TE)),t>.42&&t<.6){let c=en.getTangentAt(t).setY(0).normalize(),l=n.clone().addScaledVector(c,7).setY(0);Pa(l.x,-l.z)||As.dolphinJump(en,l,c)}}var Fi=i=>i<=0?0:i>=1?1:i*i*(3-2*i),P3=.34,zp=j1(Ke,{color:Le.route,paper:jt(1,61)}),Da={bus:zp},W2={bus:1},j2=new Set,X2=new Set,q2=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),i.visible=!1,Oe.add(i),i);q2(zp);var sr=[],xa=[],e2=new Map;{let i=[xh-3,yh-3,Mh+3,Eh+3],e=[],t=([n,r])=>{let a=Math.round(n*50)+","+Math.round(r*50),s=e2.get(a);return s===void 0&&(s=sr.length,e2.set(a,s),sr.push([n,r]),xa.push([])),s};he.roads.forEach(n=>{if(n.t==="F"||!n.pts.some(([o,c])=>o>i[0]&&o<i[2]&&c>i[1]&&c<i[3]))return;let r=n.pts.filter(([o,c])=>pi(o,c));if(r.length<2)return;let a=n.t==="H"?.85:1,s=t(r[0]);e.push(s);for(let o=1;o<r.length;o++){let c=t(r[o]);if(c===s)continue;let l=Math.hypot(r[o][0]-r[o-1][0],r[o][1]-r[o-1][1])*a;xa[s].push([c,l]),xa[c].push([s,l]),s=c}e.push(s)}),e.forEach(n=>{let r=-1,a=.3;sr.forEach((s,o)=>{if(o===n||xa[n].some(([l])=>l===o))return;let c=Math.hypot(s[0]-sr[n][0],s[1]-sr[n][1]);c<a&&(a=c,r=o)}),r>=0&&(xa[n].push([r,a*2]),xa[r].push([n,a*2]))})}function L3(i,e){let t=sr.length,n=new Float64Array(t).fill(1/0),r=new Int32Array(t).fill(-1),a=[[0,i]];n[i]=0;let s=l=>{for(;l>0;){let h=l-1>>1;if(a[h][0]<=a[l][0])break;[a[h],a[l]]=[a[l],a[h]],l=h}},o=()=>{let l=a[0],h=a.pop();if(a.length){a[0]=h;let u=0;for(;;){let d=2*u+1,p=d+1,f=u;if(d<a.length&&a[d][0]<a[f][0]&&(f=d),p<a.length&&a[p][0]<a[f][0]&&(f=p),f===u)break;[a[f],a[u]]=[a[u],a[f]],u=f}}return l};for(;a.length;){let[l,h]=o();if(!(l>n[h])){if(h===e)break;for(let[u,d]of xa[h])l+d<n[u]&&(n[u]=l+d,r[u]=h,a.push([n[u],u]),s(a.length-1))}}if(!isFinite(n[e]))return null;let c=[];for(let l=e;l>=0;l=r[l])c.push(sr[l]);return c.reverse()}var fp=(i,e=()=>!0)=>{let t=-1,n=1e9;return sr.forEach((r,a)=>{let s=Math.hypot(r[0]-i[0],r[1]-i[1]);s<n&&e(r)&&(n=s,t=a)}),[t,n]},Gp=[...Zt.filter(i=>!i.rw).map(i=>({x:i.x,y:i.y,r:i.r+.12})),...[...dr,...Ia].map(([i,e])=>({x:i,y:e,r:.12}))],hh=([i,e])=>Gp.every(t=>Math.hypot(t.x-i,t.y-e)>t.r),mp=he.stops.map((i,e)=>{let t=dr[e],[n,r]=fp(t,hh);if(n>=0&&r<.8)return sr[n].slice();for(let a=.25;a<1.6;a+=.15)for(let s=0;s<16;s++){let o=[t[0]+Math.cos(s/16*6.283)*a,t[1]+Math.sin(s/16*6.283)*a];if(pi(...o)&&hh(o))return o}return t.slice()}),gp=(i,e)=>{for(let t=0;t<e;t++){let n=[i[0]];for(let r=0;r<i.length-1;r++){let[a,s]=[i[r],i[r+1]];n.push([a[0]*.75+s[0]*.25,a[1]*.75+s[1]*.25],[a[0]*.25+s[0]*.75,a[1]*.25+s[1]*.75])}n.push(i[i.length-1]),i=n}return i},vp=(i,e)=>{let t=[i[0]];for(let n=1;n<i.length;n++){let[r,a]=[i[n-1],i[n]],s=Math.max(1,Math.ceil(Math.hypot(a[0]-r[0],a[1]-r[1])/e));for(let o=1;o<=s;o++)t.push([r[0]+(a[0]-r[0])*o/s,r[1]+(a[1]-r[1])*o/s])}return t},I3=i=>i.filter((e,t)=>!t||Math.hypot(e[0]-i[t-1][0],e[1]-i[t-1][1])>.02);function Vp(i){i=vp(gp(I3(i),2),.08);for(let n=0;n<3;n++)i=i.map((r,a)=>{if(!a||a===i.length-1)return r;let[s,o]=r;return Gp.forEach(c=>{let l=s-c.x,h=o-c.y,u=Math.hypot(l,h)||.001;u<c.r&&(s=c.x+l/u*c.r,o=c.y+h/u*c.r)}),[s,o]});i=vp(gp(i,1),.06);let e=i.map(([n,r])=>fn(n,r,.07)+.012);for(let n=1;n<e.length;n++)e[n]=Math.max(e[n],e[n-1]-.012);for(let n=e.length-2;n>=0;n--)e[n]=Math.max(e[n],e[n+1]-.012);let t=new yn(i.map(([n,r],a)=>new S(n,e[a],-r)),!1,"centripetal");return t.arcLengthDivisions=i.length*4,t}function D3(i,e){let[t,n]=fp(i),[r,a]=fp(e),s=n<1.6&&a<1.6?L3(t,r):null,o=Math.hypot(e[0]-i[0],e[1]-i[1]);if(!s)return[i,e];let c=[i,...s,e];return c.reduce((h,u,d)=>d?h+Math.hypot(u[0]-c[d-1][0],u[1]-c[d-1][1]):0,0)>o*3.5+2?[i,e]:c}var U3=.068;function N3(i,e){let n=Math.min(i[0],e[0])-1.6,r=Math.min(i[1],e[1])-1.6,a=Math.ceil((Math.abs(i[0]-e[0])+3.2)/.08),s=Math.ceil((Math.abs(i[1]-e[1])+3.2)/.08),o=x=>[n+x%a*.08,r+Math.floor(x/a)*.08],c=(x,M,E)=>pi(x,M)||[[E,0],[-E,0],[0,E],[0,-E]].some(([y,T])=>pi(x+y,M+T)),l=new Uint8Array(a*s);for(let x=0;x<l.length;x++){let[M,E]=o(x);l[x]=c(M,E,.09)?0:c(M,E,.22)?2:1}let h=(x,M)=>{let[E,y]=o(M);return Math.hypot(E-x[0],y-x[1])>1.6?1e9:Math.hypot(E-x[0],y-x[1]+.8)+(hh([E,y])?0:Gp.every(T=>Math.hypot(T.x-E,T.y-y)>T.r*.8)?.15:9)},u=-1;for(let x=0,M=1e8;x<l.length;x++)if(l[x]){let E=h(e,x);E<M&&(M=E,u=x)}if(u<0)return null;let d=new Float64Array(l.length).fill(1/0),p=new Int32Array(l.length).fill(-1),f=[u];for(d[u]=0;f.length;){let x=0;for(let T=1;T<f.length;T++)d[f[T]]<d[f[x]]&&(x=T);let M=f.splice(x,1)[0],E=M%a,y=Math.floor(M/a);for(let T=-1;T<=1;T++)for(let _=-1;_<=1;_++){if(!_&&!T)continue;let w=E+_,A=y+T;if(w<0||A<0||w>=a||A>=s)continue;let C=A*a+w;if(!l[C])continue;let I=Math.hypot(_,T)*(l[C]===2?2.5:1);d[M]+I<d[C]&&(d[C]===1/0&&f.push(C),d[C]=d[M]+I,p[C]=M)}}let m=-1;for(let x=0,M=1e8;x<l.length;x++)if(isFinite(d[x])){let E=h(i,x);E<M&&(M=E,m=x)}if(m<0)return null;let v=[];for(let x=m;x>=0;x=p[x])v.push(o(x));let g=vp(gp(v.filter((x,M)=>M%2===0||M===v.length-1),3),.08),b=new yn(g.map(([x,M])=>new S(x,U3,-M)),!1,"centripetal");return b.arcLengthDivisions=g.length*4,b}var O3=/遊船|渡船|乘船|搭船|坐船|觀光船|遊覽船|遊覧船|屋形船|クルーズ|川下り|舟下り|cruise/i,Y2=[{key:"shinkansen",rx:/新幹線|shinkansen/i,make:Y1,path:"rail",sc:1,opts:{cars:2}},{key:"crh",rx:/高鐵|CRH|和諧號|復興號/,make:rg,path:"rail",sc:1,opts:{cars:2}},{key:"alpine",rx:/冰河列車|glacier express/i,make:$1,path:"rail",sc:1,opts:{cars:2}},{key:"ltdexp",rx:/特急|ＪＲ|(^|[^A-Za-z])JR([^A-Za-z]|$)/,make:K1,path:"rail",sc:1,opts:{cars:2}},{key:"ropeway",rx:/纜車|ロープウェ[イー]|ropeway|cable ?car/i,make:Z1,path:"cable",sc:1,opts:{span:0}},{key:"rivercruise",rx:/(長江|漓江|三峽).{0,8}(遊船|遊輪|郵輪)|(遊船|遊輪|郵輪).{0,8}(長江|漓江|三峽)/,make:sg,path:"water",sc:1.4},{key:"junk",rx:/下龍灣|ha ?long bay/i,make:tg,path:"water",sc:1.4},{key:"wupeng",rx:/烏篷船/,make:ag,path:"water",sc:1.4},{key:"bamboo",rx:/竹筏/,make:og,path:"water",sc:1.4},{key:"gondola",rx:/貢多拉|gondola/i,make:Q1,path:"water",sc:1.4},{key:"longtail",rx:/長尾船|long-?tail/i,make:ng,path:"water",sc:1.4},{key:"ferry",rx:/渡輪|フェリー|ferry/i,make:Cl,path:"water",sc:1.4},{key:"tuktuk",rx:/嘟嘟車|tuk-? ?tuk/i,make:eg,path:"tail",sc:.8,last:!0},{key:"cyclo",rx:/三輪車|cyclo/i,make:ig,path:"tail",sc:.8,last:!0},{key:"rickshaw",rx:/人力車|人力车|jinrikisha|rickshaw/i,make:J1,path:"tail",sc:.8,last:!0},{key:"boat",rx:O3,make:Rl,path:"water",sc:1.4,last:!0}],K2=he.stops.map((i,e)=>{let t=he.days.find(a=>(a.stops||[]).includes(e));if(!t||i.air||!e)return null;let n=[...t.spots||[],t.desc||""],r=a=>he.stops[a].name.replace(/\s+[A-Z]{3}$/,"");for(let a of Y2){let s=n.filter(c=>a.rx.test(c));if(!s.length)continue;let o=t.stops.filter(c=>s.some(l=>l.includes(r(c))));if(o.length?o.includes(e):a.last&&e===t.stops.filter(c=>!he.stops[c].air).pop())return a}return null}),Xl=(()=>{let i=[xh-3,yh-3,Mh+3,Eh+3],e=[],t=[],n=new Map,r=[],a=([c,l])=>{let h=Math.round(c*50)+","+Math.round(l*50),u=n.get(h);return u===void 0&&(u=e.length,n.set(h,u),e.push([c,l]),t.push([])),u};return(he.rail||[]).forEach(c=>{if(c.t==="F"||!c.pts.some(([u,d])=>u>i[0]&&u<i[2]&&d>i[1]&&d<i[3]))return;let l=c.pts.filter(([u,d])=>pi(u,d));if(l.length<2)return;let h=a(l[0]);r.push(h);for(let u=1;u<l.length;u++){let d=a(l[u]);if(d===h)continue;let p=Math.hypot(l[u][0]-l[u-1][0],l[u][1]-l[u-1][1]);t[h].push([d,p]),t[d].push([h,p]),h=d}r.push(h)}),r.forEach(c=>{let l=-1,h=.3;e.forEach((u,d)=>{if(d===c)return;let p=Math.hypot(u[0]-e[c][0],u[1]-e[c][1]);p<h&&(h=p,l=d)}),l>=0&&(t[c].push([l,h*2]),t[l].push([c,h*2]))}),{near:c=>{let l=-1,h=1e9;return e.forEach((u,d)=>{let p=Math.hypot(u[0]-c[0],u[1]-c[1]);p<h&&(h=p,l=d)}),[l,h]},path:(c,l)=>{let h=new Float64Array(e.length).fill(1/0),u=new Int32Array(e.length).fill(-1),d=new Uint8Array(e.length);for(h[c]=0;;){let f=-1;for(let m=0;m<e.length;m++)!d[m]&&h[m]<1/0&&(f<0||h[m]<h[f])&&(f=m);if(f<0||f===l)break;d[f]=1;for(let[m,v]of t[f])h[f]+v<h[m]&&(h[m]=h[f]+v,u[m]=f)}if(!isFinite(h[l]))return null;let p=[];for(let f=l;f>=0;f=u[f])p.push(e[f]);return p.reverse()},n:e.length}})();function H3(i,e){if(!Xl.n)return null;let[t,n]=Xl.near(i),[r,a]=Xl.near(e);if(n>1.2||a>1.2)return null;let s=Xl.path(t,r);return!s||s.length<2?null:Vp([i,...s,e])}function k3(i,e){let t=fn(...i,.1),n=fn(...e,.1),r=Math.max(8,Math.ceil(Math.hypot(e[0]-i[0],e[1]-i[1])/.1)),a=.45;for(let c=0;c<=r;c++){let l=c/r,h=i[0]+(e[0]-i[0])*l,u=i[1]+(e[1]-i[1])*l;a=Math.max(a,fn(h,u,.12)+.35-(t+(n-t)*l))}let s=Array.from({length:r+1},(c,l)=>{let h=l/r;return new S(i[0]+(e[0]-i[0])*h,t+(n-t)*h+a,-(i[1]+(e[1]-i[1])*h))}),o=new yn(s,!1,"centripetal");return o.arcLengthDivisions=r*4,Oe.add(new Zi(new Be().setFromPoints(s),new ri({color:"#3b3a38"}))),[[i,t],[e,n]].forEach(([c,l])=>{let h=new te(new ge(.012,.018,a+.04,6),Ke("#6f6a64"));h.position.set(c[0],l+(a+.04)/2,-c[1]),h.castShadow=!0,Oe.add(h)}),o}var Wr=di.map((i,e)=>{if(!e)return null;let t=mp[di[e-1]],n=mp[i],r=K2[i],a=r&&r.path==="water"?N3(t,n):r&&r.path==="rail"?H3(t,n):r&&r.path==="cable"?k3(t,n):null,s=a||r&&r.path==="road"?r.key:"bus";a||(a=Vp(D3(t,n)));let o=Math.max(a.getLength(),.001);return{c:a,mode:s,len:o,tail:r&&r.path==="tail"?{mode:r.key,len:Math.min(.9,o*.35)}:null}});Wr.forEach(i=>i&&[i.mode,i.tail&&i.tail.mode].forEach(e=>{if(!e||Da[e])return;let t=Y2.find(n=>n.key===e);Da[e]=q2(t.make(Ke,{paper:jt(1,64),...t.opts||{}})),W2[e]=t.sc||1,t.path==="cable"&&j2.add(e),t.path==="water"&&X2.add(e)}));var Oo=(i,e)=>e!==!!i.rev&&i.tail?i.tail.mode:i.mode;console.info("[\u4EA4\u901A]",Wr.map((i,e)=>i?`${e}:${i.mode}${i.tail?"+"+i.tail.mode:""}${i.len.toFixed(1)}`:"").join(" "));var Ai=(()=>{let i=mp[di[0]],e=gt[di[Math.min(1,di.length-1)]],t=Math.atan2(e[1]-i[1],e[0]-i[0]),n=null,r=Zt.filter(p=>!p.rw&&!he.stops.some(f=>Math.hypot(f.xy[0]-p.x,f.xy[1]-p.y)<p.r+.3));for(let p=0;p<36;p++){let f=p/36*2*Math.PI,m=Math.cos(f),v=Math.sin(f),g=0,b=Go(...i);for(let y=0;y<=4.2;y+=.2){let T=[i[0]+m*y,i[1]+v*y];pi(...T)&&hh(T)&&g++,Math.abs(Go(...T)-b)>1&&(g-=.5)}let x=f+Math.PI,M=r.filter(y=>{let T=y.x-i[0],_=y.y-i[1];return Math.hypot(T,_)<20&&Math.abs(lh(Math.atan2(_,T)-x))<.87}).length,E=Math.min(g,19)*10+25*Math.cos(lh(x-t))-200*M;(!n||E>n.sc)&&(n={sc:E,a:f})}let a=new S(Math.cos(n.a),0,-Math.sin(n.a)),s=new S(a.z,0,-a.x),o=new S(i[0],0,-i[1]),c=(p,f)=>{let m=o.clone().addScaledVector(a,p).addScaledVector(s,f);return[m.x,-m.z]},l=Vp([c(3.35,.62),c(2.9,.2),c(1.8,.03),c(.6,0),i]),h=c(3.6,.12),u=0;for(let p=0;p<=3.6;p+=.2){let f=c(p,.06);u=Math.max(u,fn(f[0],f[1],.15))}let d=new S(h[0],Math.max(fn(h[0],h[1],.15)+.22,u+.16),-h[1]);return{c:l,CR:d,len:l.getLength(),TA:1.3,TB:3.3,TC:2.1,get dur(){return this.TA+this.TB+this.TC}}})(),zr=di.map((i,e)=>{let t=e?Wr[e].c:Ai.c,n=t.getPointAt(1),r=t.getTangentAt(1);return{mode:e?Oo(Wr[e],!0):"bus",p:n,ahead:n.clone().add(r)}}),bp=Ma?111.2/Math.abs(Ma.ky):11,Wp=he.days.map((i,e)=>{let t=e?or(e):0,n=or(e+1),r={},a=0;for(let s=t+1;s<=n;s++){let o=Wr[s];if(!o)continue;let c=o.len*bp,l=o.tail?o.tail.len*bp:0;a+=c,r[o.mode]=(r[o.mode]||0)+c-l,o.tail&&(r[o.tail.mode]=(r[o.tail.mode]||0)+l)}return{day:i.n,km:Math.round(a),mode:Object.keys(r).sort((s,o)=>r[o]-r[s])[0]||"bus",modes:Object.fromEntries(Object.entries(r).map(([s,o])=>[s,Math.round(o)])),raw:a}}),t2=0,F3=Wp.map(i=>{let e=t2;return t2+=i.raw,e});function B3(i,e){let t=[];if(i<e)for(let o=i+1;o<=e;o++)t.push({...Wr[o],rev:!1});else for(let o=i;o>e;o--)t.push({...Wr[o],rev:!0});let n=t.reduce((o,c)=>o+c.len,0),r={legs:t,L:n,a:zr[i].p.clone(),b:zr[e].p.clone(),m0:zr[i].mode,m1:zr[e].mode},a=48,s=Array.from({length:a+1},(o,c)=>Z2(r,c/a).p.clone().sub(new S().lerpVectors(r.a,r.b,c/a)).setY(0));for(let o=0;o<3;o++)s=s.map((c,l)=>{let h=new S,u=0;for(let d=Math.max(0,l-8);d<=Math.min(a,l+8);d++)h.add(s[d]),u++;return h.multiplyScalar(1/u)});return r.dev=s.map((o,c)=>o.multiplyScalar(.45*Math.sin(Math.PI*c/a))),r}var z3=(i,e)=>{let t=Math.max(0,Math.min(1,e))*(i.dev.length-1),n=Math.floor(t),r=Math.min(i.dev.length-1,n+1);return Mp.lerpVectors(i.dev[n],i.dev[r],t-n)},Q0=new S,$0=new S;function Z2(i,e){let t=Math.max(0,Math.min(1,e))*i.L,n=0;for(;n<i.legs.length-1&&t>i.legs[n].len;)t-=i.legs[n].len,n++;let r=i.legs[n],a=Math.max(0,Math.min(1,t/r.len)),s=.05/r.len,o=r.rev?1-a:a;Q0.copy(r.c.getPointAt(o)),$0.copy(r.c.getPointAt(Math.max(0,Math.min(1,o+(r.rev?-s:s))))),Math.abs(o-(r.rev?0:1))<1e-4&&$0.copy(Q0).add(r.c.getTangentAt(o).multiplyScalar(r.rev?-1:1));let c=n?Oo(i.legs[n-1],!0):i.m0,l=n<i.legs.length-1?Oo(i.legs[n+1],!1):i.m1,h=r.rev?r.len-t:t,u=r.tail?r.len-r.tail.len:1/0,d=h>u?r.tail.mode:r.mode,p=Math.min(c!==Oo(r,!1)?Fi(t/.25):1,l!==Oo(r,!0)?Fi((r.len-t)/.25):1,r.tail?Fi(Math.abs(h-u)/.2):1);return{mode:d,p:Q0,ahead:$0,k:p}}var G3=i=>i.k==="day"?or(i.n):i.k==="chapter"?i.c.days[0]>1?or(i.c.days[0]-1):0:i.k==="memory"?di.length-1:-1,Ea=-1,Ta={k:0};function V3(i,e,t,n,r){Ta.k=n?e:Kn(Ta.k,e,5,t);let a=Da[i.mode]||zp;if(Object.values(Da).forEach(l=>{l!==a&&(l.visible=!1)}),a.visible=Ta.k>.002,!a.visible)return;let s=P3*(W2[i.mode]||1)*Math.min(2.4,Math.max(1,Te.p.distanceTo(Te.t)/6))*Math.max(Ta.k,1e-4),o=j2.has(i.mode);a.position.copy(i.p),X2.has(i.mode)&&(a.position.y+=Math.sin(r/420)*.004),o&&(a.position.y-=(a.userData.cableY??.62)*s);let c=Math.hypot(i.ahead.x-i.p.x,i.ahead.z-i.p.z);c>1e-5&&a.lookAt(i.ahead.x,a.position.y+(o?0:Math.max(-.2,Math.min(.2,(i.ahead.y-i.p.y)/c))*c),i.ahead.z),a.scale.setScalar(s)}function W3(i,e){Te.fd=8*Fi(i/Ai.TA)*(1-Fi((i-Ai.TA-Ai.TB)/Ai.TC));let{TA:t,TB:n,c:r,CR:a}=Ai,s=Math.max(0,Math.min(1,(i-t)/n)),o=1-(1-s)**1.4,c=r.getPointAt(o),l=h=>zr[0].p.clone().setY(zr[0].p.y+.1).lerp(h.clone().setY(h.y+.06),.3);return i<t?Sa(Ge.from,{p:a,t:l(r.getPointAt(0))},ur(i/t)):i<t+n?(Te.p.copy(a),Te.p.y+=.05*Fi((s-.6)/.4),Te.t.copy(l(c))):Sa({p:a.clone().setY(a.y+.05),t:l(r.getPointAt(1))},e,ur((i-t-n)/Ai.TC)),{mode:"bus",p:c,ahead:r.getPointAt(Math.min(1,o+.01)).add(o>.99?r.getTangentAt(1):new S)}}var n2=3,ya=0,Fr=null,i2=!1,xp=new S(-.75,.85,.5),J2=he.days.map(i=>{let e=Fg(i,ui);if(!e)return null;let t=[...i.stops].reverse().find(a=>!he.stops[a].air);if(t==null)return null;let n=he.stops[t].xy,r=Vg(e,Ke,{center:[n[0],-n[1]],ground:(a,s)=>Zn(a,-s),avoid:(a,s)=>lr(a,-s)<.18||!_a(a,-s),paper:jt(1,71),lamps:Math.min(3,n2)});return n2-=r.userData.lamps||0,Oe.add(r),{g:r,tp:Bg("night",ui)}}),j3=i=>{let e=null,t=1e9;return(he.cities||[]).forEach(n=>{let r=Math.hypot(n.xy[0]-i[0],n.xy[1]-i[1]);r<t&&(t=r,e=n.country)}),e||"\u65E5\u672C"},X3=new Set([...th,...Lp].map(([i,e])=>Math.round(i*8)+","+Math.round(e*8))),q3=(i,e)=>{let t=Math.round(i*8),n=Math.round(e*8);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)if(X3.has(t+r+","+(n+a)))return!0;return!1},uh=he.days.map(i=>{let e=Ca(i.n),t=he.stops[e];if(!t||t.air)return null;let n=t.xy,r=j3(n),a=[];if(dg(i)){let s=Gr&&t.name==="\u5929\u6A4B\u7ACB",o=s?{from:At(135.212,35.58),to:At(135.262,35.615)}:pg(n,pi);if(o){let c=fg(Ke,{...o,paper:jt(1,51),...s?{y:Gr.userData.top+.005,scale:.05}:{}}),l=mg(Ke,{center:o.from,radius:.3,paper:jt(1,61),...s?{height:Gr.userData.top+.16,scale:.035}:{height:.7,scale:.07}});[c,l].forEach(h=>h.traverse(u=>{u.castShadow=!1})),a.push(c,l)}}return lg(i,r).forEach((s,o)=>{let c=[[.7,-.5],[-.7,-.4],[.1,.8]][o%3];a.push(ug(s,Ke,{center:[n[0]+c[0],-(n[1]+c[1])],ground:(l,h)=>Zn(l,-h),paper:jt(1,101),scale:2.2,avoid:(l,h)=>!Pa(l,-h)||lr(l,-h)<.15||Zt.some(u=>u.flag&&!u.rw&&Math.hypot(u.x-l,u.y+h)<u.r+.1)||[...dr,...Ia].some(u=>Math.hypot(u[0]-l,u[1]+h)<.15),snow:ui==="snow"}))}),xg(i,ui,r).forEach((s,o)=>{let c=[[.9,.3],[-.9,.4],[.2,-.9]][o%3],l=yg(s,Ke,{center:[n[0]+c[0],-(n[1]+c[1])],ground:(h,u)=>Zn(h,-u),season:ui,paper:jt(1,91),avoid:(h,u)=>lr(h,-u)<.2||ws(h,-u)<.4||!_a(h,-u)||!Pa(h,-u)||q3(h,-u)});l.update(0,0),l.userData.field=!0,a.push(l)}),a.forEach(s=>{s.userData.field||(s.visible=!1),Oe.add(s)}),a.length?a:null});console.info("[\u9EDE\u7DB4]",uh.map((i,e)=>i?`D${e+1}:${i.map(t=>t.userData.kind||t.type).join("/")}`:"").filter(Boolean).join(" "));var jp=he.days.map(i=>Wg(i)),Y3={rain:{tp:j0("rain",ui),w:"rain"},fog:{tp:j0("fog",ui),w:"fog"}},Q2=jp.some(i=>i!=="clear")?{rain:X0("rain",Ke,{season:ui,paper:jt(1,81)}),fog:X0("fog",Ke,{paper:jt(1,81)})}:{};Object.values(Q2).forEach(i=>Oe.add(i));var ep={rain:0,fog:0},dh=gt.map(i=>i[0]),ph=gt.map(i=>i[1]),K3=[(Math.min(...dh)+Math.max(...dh))/2,(Math.min(...ph)+Math.max(...ph))/2],r2=Math.max(Th-zo-14,(Pp-eh-8)*1.8),_n=(i,e,t,n)=>i.clone().add(new S(Math.sin(t)*Math.cos(n)*e,Math.sin(n)*e,Math.cos(t)*Math.cos(n)*e)),bt=(()=>{let i=pn.teaser&&pn.teaser.stop,e=g=>{let b=O2[g];return String((Array.isArray(b)?b[0]:b)||"")},t=(g,b)=>!g.air&&di.includes(b)&&!/^住宿|飯店|酒店|旅館|民宿|hotel|resort/i.test(g.name),n=i?he.stops.findIndex((g,b)=>t(g,b)&&g.name.includes(i)):-1;if(n<0&&(n=he.stops.findIndex((g,b)=>t(g,b)&&e(g.name).startsWith("glb:"))),n<0&&(n=he.stops.findIndex((g,b)=>t(g,b)&&e(g.name))),n<0){let g=he.days.map(b=>Ca(b.n)).filter(b=>t(he.stops[b],b));g.length&&(n=g[Math.floor((g.length-1)/2)])}n<0&&(n=Ca(Math.floor((he.days.length-1)/2)+1));let r=Uo(Math.max(0,di.indexOf(n))),a=Math.max(0,r-10/wa),s=Math.max(a,r-3.6/wa),o=Ht(gt[n],fn(...gt[n],.3)+.7),c=Math.max(.6,...Zt.filter(g=>!g.rw&&Math.hypot(g.x-gt[n][0],g.y-gt[n][1])<g.r).map(g=>g.r)),l=Zt.filter(g=>!g.rw),h=hr.getTangentAt((a+s)/2).cross(new S(0,1,0)).setY(0).normalize(),u=()=>innerHeight>innerWidth?13:9.5,d=g=>{for(let b=0;b<4;b++)l.forEach(x=>{let M=g.y-Zn(x.x,x.y),E=Math.sqrt(Math.max(0,(u()*x.r)**2-M*M)),y=g.x-x.x,T=g.z+x.y,_=Math.hypot(y,T)||.001;_<E&&(g.x=x.x+y/_*E,g.z=-x.y+T/_*E)});return g},p=g=>Math.min(1,Math.max(0,g)),f=g=>d(hr.getPointAt(p(g)).addScaledVector(h,2.6).add(new S(0,4.5,0))),m=g=>hr.getPointAt(p(g+5/wa)).add(new S(0,.2,0)),v=Math.atan2(f(s).x-o.x,f(s).z-o.z);return{h:n,u0:a,u1:s,camAt:f,lookAt:m,lm:o,end:()=>({p:_n(o,u()*c,v+.4,.55),t:o}),TG:6.2,TR:3.4}})(),Z3=(()=>{let i=[0,.25,.5,.75,1].map(t=>bt.lookAt(bt.u0+(bt.u1-bt.u0)*t)).concat([bt.lm]),e=i.reduce((t,n)=>t.add(n),new S).multiplyScalar(1/i.length);return{c:e,R:Math.max(...i.map(t=>t.distanceTo(e)))+5}})();function $2(){let{c:i,R:e}=Z3;Vt.target.position.copy(i),Vt.position.copy(i).addScaledVector(xp,60);let t=Vt.shadow.camera;t.left=t.bottom=-e,t.right=t.top=e,t.near=1,t.far=140,t.updateProjectionMatrix(),Vt.target.updateMatrixWorld(),Vt.updateMatrixWorld()}var pt=null;function J3(i){let e=Math.max(0,pt.hold??(i-pt.t0)/1e3),{TG:t,TR:n}=bt;if(Te.off=0,Te.blur=.07,fh.u=0,e<t){let r=e/t,a=bt.u0+(bt.u1-bt.u0)*(.5*r+.5*ur(r));Te.p.copy(bt.camAt(a)),Te.t.copy(bt.lookAt(a))}else Sa({p:bt.camAt(bt.u1),t:bt.lookAt(bt.u1)},bt.end(),ur(Math.min(1,(e-t)/n)));if(e>=t+n){let r=pt.res;pt=null,jo=performance.now(),Xp(Wt[Kt]),Ge={from:{p:Te.p.clone(),t:Te.t.clone(),off:Te.off,blur:Te.blur,u:0},to:Xo(Wt[Kt]),t0:i,dur:Aa?.001:2.6,hold:null},r()}}var ev=()=>{if(!pt)return;let i=pt.res;pt=null,jo=performance.now(),Xp(Wt[Kt]),Ge={from:{p:Te.p.clone(),t:Te.t.clone(),off:Te.off,blur:Te.blur,u:0},to:Xo(Wt[Kt]),t0:performance.now(),dur:Aa?.001:2.6,hold:null},i()},tv=()=>new Promise(i=>{if(Aa){i();return}pt={t0:performance.now(),res:i},Li.has("tzold")||($2(),Ne.shadowMap.needsUpdate=!0),document.body.dataset.mode="teaser",setTimeout(()=>{pt&&pt.hold==null&&ev()},10500)});window.HUD&&window.HUD.teaser&&window.HUD.teaser(tv);var Wt=[{k:"brand"},{k:"why"},{k:"promise"},{k:"hq"},{k:"overview"},{k:"depart"}],a2=Array.isArray(pn.highlightDays)&&pn.highlightDays.length?new Set(pn.highlightDays):null;pn.chapters.forEach((i,e)=>{Wt.push({k:"chapter",c:i,ci:e}),i.days.forEach(t=>{(!a2||a2.has(t))&&Wt.push({k:"day",n:t,c:i,ci:e})})});Wt.push({k:"memory"},...pn.mode==="proposal"?[]:[{k:"return"}],{k:"close"});var tp=new Map;function s2(i,e,t,n,r,a){let s=(a?"c":"")+i+"|"+t.toFixed(2);if(tp.has(s))return tp.get(s);let o=a||(he.days[i-1].stops||[]).filter(p=>!he.stops[p].air),c=(o.length?o:[Ca(i)]).map(p=>Ht(dr[p],fn(...dr[p],.1)+.9)),l=Zt.filter(p=>!p.rw),h=(p,f)=>{let m=0;for(let v=1;v<12;v++){let g=p.clone().lerp(f,v/12);l.forEach(b=>{Math.hypot(g.x-b.x,g.z+b.y)<b.r*.9&&g.y<Zn(b.x,b.y)+2.2*b.r&&m++})}return m},u=r,d=1/0;return[0,.25,-.25,.5,-.5,.8,-.8,1.2,-1.2].forEach(p=>{let f=r+p,m=_n(e,t,f,n),v=E=>o.some(y=>Math.hypot(gt[y][0]-E.x,gt[y][1]-E.y)<E.r+.3),g=e.clone().sub(m),b=g.length();g.normalize();let x=l.filter(E=>!v(E)).reduce((E,y)=>{let T=new S(y.x,e.y,-y.y).sub(m),_=T.dot(g);return E+(_>.5&&_<b*1.1&&Math.acos(Math.min(1,_/T.length()))<.62?3*Math.min(2,y.r):0)},0),M=c.reduce((E,y)=>E+h(m,y),0)*10+x+Math.abs(p);M<d&&(d=M,u=f)}),tp.set(s,u),u}function Xo(i){let e=Ht(K3,0),t={k:i.k,off:.16,blur:0,u:0,rd:0,cur:0,leg:null,chase:null,preview:null};switch(i.k){case"brand":return{...t,t:ar.clone(),p:_n(ar,60,0,1.4),off:0,blur:0};case"why":return{...t,t:ar.clone(),p:_n(ar,34,-.1,1.08),blur:0};case"promise":return{...t,t:ar.clone(),p:_n(ar,16,-.22,.78),blur:.06};case"hq":if(sh.length>1){let n=sh.map(s=>Ht(s.xy)),r=n.reduce((s,o)=>s.add(o),new S).multiplyScalar(1/n.length),a=Math.max(...n.map(s=>s.distanceTo(r)));return{...t,t:r,p:_n(r,Math.max(10,a*4.2),-.25,.78),off:.17,blur:.03}}else{let n=ar.clone().add(new S(.1,.7,0));return{...t,t:n,p:_n(n,6.2,-.38,.4),off:.17,blur:.1}}case"cover":{let n=Rs.clone().lerp(e,.55);return{...t,t:n,p:_n(n,125,.04,1.02),off:.14,blur:0}}case"depart":{let n=en.getPointAt(1);return{...t,t:n,p:n.clone().add(pp),off:.12,leg:en,chase:pp,rd:.5}}case"return":return{...t,t:oh.clone().setY(An+.3),p:oh.clone().setY(An+.3).add(Qg),off:.12,leg:Sh,chase:Qg,u:1,rd:99};case"close":return{...t,t:ar.clone(),p:_n(ar,17,.25,.78),off:.17,blur:.06,u:1,rd:99};case"foreword":{let n=Rs.clone().lerp(e,.55);return{...t,t:n,p:_n(n,112,.1,.98),off:.14,blur:.04}}case"overview":{let n=[Math.min(...dh),Math.max(...dh)],r=[Math.min(...ph),Math.max(...ph)],a=Math.tan(18*Math.PI/180),s=a*_t.aspect,o=Math.max((n[1]-n[0])*1.12/(2*s),(r[1]-r[0])*1.6/(2*a),18),c=Ht([(n[0]+n[1])/2,(r[0]+r[1])/2+o*a*.22],An);return{...t,t:c,p:_n(c,o,.04,1.3),off:0,blur:0}}case"memory":{let n=e.clone().add(new S(0,0,-r2*.15));return{...t,t:n,p:_n(n,r2*1,i.k==="memory"?-.05:0,1.2),off:0,blur:0,...i.k==="memory"?{u:1,rd:99}:{}}}case"chapter":{let n=R2(i.c),r=n.map(l=>gt[l][0]),a=n.map(l=>gt[l][1]),s=Ht([(Math.min(...r)+Math.max(...r))/2,(Math.min(...a)+Math.max(...a))/2],An),o=Math.max(Math.max(...r)-Math.min(...r),(Math.max(...a)-Math.min(...a))*1.6),c=i.c.days[0];return{...t,t:s,p:_n(s,Math.max(13,o*1.7),s2(i.ci,s,Math.max(13,o*1.7),.9,(i.ci%2?1:-1)*.22,n),.9),off:.17,blur:.06,u:c>1?Uo(or(c-1)):0,rd:c-1,preview:i.c.days}}case"day":{let n=he.days[i.n-1],r=Ca(i.n),a=Ht(gt[r]),s=new S(a.x+1.1,An+.8,a.z-.35),o=n.stops.filter(u=>u!==r&&!he.stops[u].air).map(u=>Ht(gt[u])),c=o.reduce((u,d)=>Math.max(u,d.distanceTo(a)),0);if(o.length){let u=o.reduce((d,p)=>d.add(p),a.clone()).multiplyScalar(1/(o.length+1));s.x=(s.x*3+u.x)/4,s.z=(s.z*3+u.z)/4}let l=.4+i.n%3*.06,h=s2(i.n,s,8.2+Math.min(c,6)*.7,l,(i.n%2?-1:1)*(.12+i.n%3*.08));if(Gr&&he.stops[r].name==="\u5929\u6A4B\u7ACB"&&!rp()){let{south:u,north:d,top:p}=Gr.userData,f=Math.hypot(d[0]-u[0],d[1]-u[1])||1,m=(d[0]-u[0])/f,v=(d[1]-u[1])/f,g=window.AMAP||{},b=g.at??2.79,x=g.aa??.1,M=g.ad??2,E=g.ap??.6,y=m*Math.cos(b)+v*Math.sin(b),T=-m*Math.sin(b)+v*Math.cos(b),_=[(u[0]+d[0])/2+y*x,(u[1]+d[1])/2+T*x],w=Ht(_,p);return{...t,t:w,p:_n(w,M,Math.atan2(-y,T),E),off:.16,blur:.02,u:Uo(or(i.n)),rd:i.n,cur:i.n}}if(rp()){let u=Math.max(.6,...Zt.filter(p=>!p.rw&&Math.hypot(p.x-gt[r][0],p.y-gt[r][1])<p.r).map(p=>p.r)),d=Ht(gt[r],fn(...gt[r],.3)+.35+u*.25);return{...t,t:d,p:_n(d,4.5+u*4,h,.5),off:0,blur:.06,u:Uo(or(i.n)),rd:i.n,cur:i.n}}return{...t,t:s,p:_n(s,8.2+Math.min(c,6)*.7,h,l),off:.16,blur:.1,u:Uo(or(i.n)),rd:i.n,cur:i.n}}}}var dn=i=>document.getElementById(i),ql=i=>String(i).padStart(2,"0"),He=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Cs=(i,e="\uFF0C")=>He(i).split(e).map(t=>`<span>${t}</span>`).join(""),nv=ve.logo?`<img class="logo" src="${ve.logo}" alt="${He(ve.name)}">`:`<div class="wordmark">${He(ve.en)}</div>`;dn("brand").innerHTML=`<div class="in">${nv}<h1>${He(ve.slogan)}</h1><i class="rule"></i><p>${He(ve.lead)}</p><p>${He(ve.body)}</p></div>
  <div class="foot">${He(ve.en)}\u3000${He(ve.name)}</div>`;dn("why").innerHTML=`<div class="k">${He(ve.whyEn)}</div><h2>${He(ve.why)}</h2><p>${(ve.whyBody||[]).map(i=>`<span>${He(i)}</span>`).join("")}</p>`;dn("hq").innerHTML=`<div class="k">${He(ve.hqEn)}</div><h2>${He(ve.hq)}</h2><p class="svc">${(ve.services||[]).map(He).join("<i>\u30FB</i>")}</p>
  <p>${He(ve.address)}</p>${ve.license?`<p>\u65C5\u884C\u696D\u57F7\u7167\u3000${He(ve.license)}</p>`:""}${ve.assoc?`<p>${He(ve.assoc)}</p>`:""}`;dn("promise").innerHTML=`<div class="k">${He(ve.pillarEn)}</div><h2>${Cs(ve.pillar)}</h2><p>${He(ve.pillarBody)}</p>`;document.title=`${he.title.main}${he.title.suffix}\uFF5C${he.company.name||he.agency.name}`;(dn("cover")||{}).innerHTML=`<div class="k">${He(he.client)}\u3000\xB7\u3000${He(he.dates.range)}</div><h1>${He(he.title.main)}<small>${He(he.title.suffix)}</small></h1>
  <p class="l2">${He(he.title.line2)}</p><p class="tag">${He(he.tagline)}</p>`;(dn("foreword")||{}).innerHTML=`<div class="k">FOREWORD</div><h2>${Cs(pn.foreword.lead)}</h2><p>${Cs(pn.foreword.body,"\uFF0C")}</p>`;dn("overview").innerHTML=`<div class="k">ROUTE\u3000\xB7\u3000${he.days.length} DAYS\u3000\xB7\u3000${he.stops.length} STOPS</div><h2>${Cs(he.routeTitle)}</h2>${he.meta.map(i=>`<p>${He(i)}</p>`).join("")}`;dn("memory").innerHTML=`<div class="k">HIGHLIGHTS</div><h2>${Cs(he.tagline)}</h2><ul>${he.highlights.map(i=>`<li><b>${He(i.k)}</b>${He(i.v)}</li>`).join("")}</ul>`;dn("close").innerHTML=`<h2>${He(pn.closing.lead)}<br>${He(pn.closing.body)}</h2><p class="sign">${He(pn.closing.sign)}</p>
  <div class="co">${nv}<p class="slogan">${He(ve.slogan)}</p>${(ve.contact||[]).map(i=>`<p>${He(i)}</p>`).join("")}
  ${ve.license?`<p class="lic">\u65C5\u884C\u696D\u57F7\u7167\u3000${He(ve.license)}</p>`:""}<p class="credit">${He(ve.credit)}</p></div>`;var o2=(i,e)=>i?`<div class="k">${e}\u3000\xB7\u3000${He(i.date)}</div><h2><span>${He(i.leg.split("\u2192")[0])}</span><span>\u2192 ${He(i.leg.split("\u2192")[1]||"")}</span></h2>
  <p class="big">${He(i.carrier)}</p><p>${He(i.time)}</p>`:"",yp=pn.chapters.map(i=>{let e=R2(i),t=document.createElement("div");t.className="ch",t.innerHTML=`<small>\u7B2C${i.no}\u7AE0</small>${He(i.name)}`,dn("labels").appendChild(t);let n=e.reduce((a,s)=>a+gt[s][0],0)/e.length,r=e.reduce((a,s)=>a+gt[s][1],0)/e.length;return{el:t,v:Ht([n,r],An+1.6)}});dn("dots").innerHTML=Wt.map((i,e)=>`<button data-i="${e}" class="${i.k}" title="${i.k}"></button>`).join("");dn("dots").onclick=i=>{let e=i.target.dataset&&i.target.dataset.i;e!=null&&!pt&&Ps(+e)};function Xp(i){let e={depart:"flight",return:"flight",day:"panel"}[i.k]||i.k;if(document.body.dataset.mode=e,i.k==="depart"&&(dn("flight").innerHTML=o2(he.flights[0],"DEPARTURE")),i.k==="return"&&(dn("flight").innerHTML=o2(he.flights[he.flights.length-1],"RETURN")),i.k==="chapter"){let t=i.c;dn("chapter").innerHTML=`<div class="v"><small>\u7B2C${t.no}\u7AE0</small><h2>${He(t.name)}</h2></div><div class="side"><div class="k">${He(t.en)}</div>
      <p class="range">DAY ${ql(t.days[0])}${t.days.length>1?" \u2014 "+ql(t.days[t.days.length-1]):""}</p>
      <ul>${t.days.map(n=>`<li><b>${ql(n)}</b>${He(he.days[n-1].title)}</li>`).join("")}</ul></div>`}if(i.k==="day"){let t=he.days[i.n-1];dn("panel").innerHTML=`${t.img?`<figure class="ph${t.imgSize&&t.imgSize[1]>t.imgSize[0]?" tall":""}"><img src="${t.img}" alt=""></figure>`:""}<div class="k">\u7B2C${i.c.no}\u7AE0\u3000${He(i.c.name)}</div><div class="num"><span>DAY</span>${ql(t.n)}</div>
      <div class="when">${He(t.date)}${t.legs?`\u3000\xB7\u3000${He(t.legs)}`:""}</div><h2>${Cs(t.title)}</h2>
      ${t.desc?`<p class="desc">${He(t.desc)}</p>`:""}<p class="spots">${t.spots.map(n=>He(n.replace(/　+/g," "))).join("<i>\u30FB</i>")}</p>
      ${t.stay?`<p class="meta"><b>\u4F4F</b>${He(t.stay)}</p>`:""}${t.meals?`<p class="meta"><b>\u98DF</b>${He(t.meals)}</p>`:""}`}if([...dn("dots").children].forEach((t,n)=>t.classList.toggle("on",n===Kt)),yp.forEach(t=>t.el.classList.toggle("on",i.k==="overview")),i.k==="depart"){let t=n=>{n&&(n.style.transition="opacity .2s",clearTimeout(n._ft),n._ft=setTimeout(()=>{n.style.transition=""},500))};document.querySelectorAll(".scene").forEach(n=>{n.id!=="flight"&&t(n)}),yp.forEach(n=>t(n.el))}}var Kt=-1,Ge=null,np=performance.now(),c2=performance.now(),Te={p:new S,t:new S,off:0,blur:0,fd:0},fh={u:0},ur=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function Ps(i){if(i=Math.max(0,Math.min(Wt.length-1,i)),i===Kt)return;let e=Xo(Wt[i]),t={p:Te.p.clone(),t:Te.t.clone(),off:Te.off,blur:Te.blur,u:fh.u},n=t.p.distanceTo(e.p),r=G3(Wt[i]),a=!Aa&&Kt>=0&&Wt[Kt].k==="depart"&&i===Kt+1&&r===0,s=!a&&Ea>=0&&r>=0&&Ea!==r?B3(Ea,r):null,o=Kt<0||Aa?.001:i<Kt&&e.chase?3:e.k==="depart"?Nt.dur:e.chase?8:a?Ai.dur:s?Math.min(7.5,Math.max(3,2.4+s.L*.17)):Math.min(4,2+n*.03);Ge={from:t,to:e,t0:performance.now(),dur:o,intro:a,route:s,hold:null,back:i<Kt},Ea=r,Kt=i,Xp(Wt[i])}var _s=new fo,Yl=new fo,l2=new S;function Sa(i,e,t){_s.setFromVector3(l2.subVectors(i.p,i.t)),Yl.setFromVector3(l2.subVectors(e.p,e.t));let n=Math.max(_s.radius,.01),r=Math.max(Yl.radius,.01),a=n*(r/n)**t,s=Math.min(1,Math.abs(Math.log(r/n))/Math.log(3)),o=Math.abs(r-n)>.001?t*(1-s)+(a-n)/(r-n)*s:t,c=Math.min(.8,i.t.distanceTo(e.t)/(Math.max(n,r)*2.5)),l=Yl.theta-_s.theta;return l-=Math.round(l/(2*Math.PI))*2*Math.PI,Te.t.lerpVectors(i.t,e.t,o),Te.p.setFromSphericalCoords(a*(1+c*Math.sin(Math.PI*t)),_s.phi+(Yl.phi-_s.phi)*t,_s.theta+l*t).add(Te.t),o}var Kn=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),fT=new it,Q3=new ul,Mp=new S,iv=[],h2=[0,0,0,0,0,0,0],rv=Math.min(1,+Li.get("dynres")||0),ip=1,u2=0;function $3(i){let e=!!Ge||!!pt;e&&(u2=i);let t=e?rv:i-u2>150?1:ip;if(t===ip)return;ip=t;let n=Math.min(2,devicePixelRatio)*t;Ne.setPixelRatio(n),Bn.setPixelRatio(n)}function av(i){if(Ri&&i3(i),rh.length&&M3()&&rh.shift()(),rv&&$3(i),pt){let y=Ne.info;iv.push([Math.round(i-pt.t0),+(i-np).toFixed(1),y.programs?y.programs.length:0,y.memory.textures,y.memory.geometries,Ne.shadowMap.needsUpdate||Ne.shadowMap.autoUpdate?1:0])}let e=Math.min(.05,(i-np)/1e3);np=i;let t=Ge?Ge.to:Xo(Wt[Kt]),n=1,r=null,a=1,s=!1;if(pt)try{J3(i)}catch(y){console.warn("[\u51B7\u958B\u5834] \u51FA\u932F\uFF0C\u76F4\u63A5\u7D50\u675F",y),ev()}else if(Ge){let y=Ge.hold??(i-Ge.t0)/1e3;n=Math.min(1,y/Ge.dur);let T=ur(n),{from:_,to:w}=Ge,A=T;if(Ge.back&&w.chase)Sa(_,w,T),ba(w.leg,1,w.k==="depart"?.6:1);else if(w.k==="depart")C3(n>=1?Nt.dur:y),A=Math.min(1,y/(Nt.TA+Nt.TB));else if(Ge.intro)r=W3(n>=1?Ai.dur:y,w),s=!0,ba(en,1,.6*(1-Fi(y/Ai.TA)));else if(w.chase){let I=w.leg.getPointAt(0),G=I.clone().add(w.chase);if(n<.24)Sa(_,{p:G,t:I},ur(n/.24)),ba(w.leg,0);else{let D=ur((n-.24)/.76),W=w.leg.getPointAt(D);if(Te.t.copy(W),Te.p.copy(W).add(w.chase),ba(w.leg,D),D>.42&&D<.6){let V=w.leg.getTangentAt(D).setY(0).normalize(),z=W.clone().addScaledVector(V,7).setY(0);Pa(z.x,-z.z)||As.dolphinJump(w.leg,z,V)}}}else{let C=Sa(_,w,T);if(ba(null),Ge.route){r=Z2(Ge.route,C),a=r.k,s=!0,A=C,Ge.et=C;let I=z3(Ge.route,C);Te.t.add(I),Te.p.add(I)}}Te.off=_.off+(w.off-_.off)*T,Te.blur=_.blur+(w.blur-_.blur)*T,fh.u=_.u+(w.u-_.u)*A,n>=1&&(Ge=null,c2=i)}else{let y=Aa?0:.06*Math.sin((i-c2)/1e3*.32);Te.t.copy(t.t),Te.p.copy(t.p).sub(t.t).applyAxisAngle(new S(0,1,0),y).add(t.t),ba(t.leg,1,t.k==="depart"?.6:1)}let o=Ge&&(Ge.to.k==="depart"&&(Ge.hold??(i-Ge.t0)/1e3)<Nt.TA+Nt.TB+1.6||Ge.intro);jl=Kn(jl,t.k==="overview"&&!pt?1:0,3,e),nh.visible=jl>.01,nh.material.opacity=.85*jl;let c=y=>Ge&&!Ge.back&&Ge.to.leg===y&&(Ge.hold??(i-Ge.t0)/1e3)<Ge.dur-.6;w3.forEach((y,T)=>{let _=T?Sh:en,w=!o&&(c(_)||t.k==="overview"&&!pt)?.75:0;y.userData.k=Kn(y.userData.k,w,2.5,e),y.visible=y.userData.k>.01,y.material.opacity=y.userData.k});let l=t.k==="day"&&!pt&&Te.p.distanceTo(Te.t)<4.5;Op.forEach(y=>{if(!y.trip&&t.k==="depart"&&!pt){y.k=0,y.g.visible=!1;return}if(!y.lim){if(!y.g.children.length)return;y.g.scale.setScalar(y.s0);let A=new rn().setFromObject(y.g).getSize(Mp).length()/2;if(!(A>0))return;y.lim=7*A}let T=y.g.position.distanceTo(Te.p),_=y.trip?l?y.lim/2:0:y.lim,w=_?Math.min(1,Math.max(0,(T-.55*_)/(.45*_))):1;y.k=Kn(y.k,w,4,e),y.g.visible=y.k>.01,y.g.visible&&y.g.scale.setScalar(y.s0*y.k)}),T2.forEach(y=>{let T=y.userData.lmD;T.visible=y.visible&&!!y.parent,T.visible&&(y.updateMatrixWorld(),y.userData.lmU.lmInv.value.copy(y.matrixWorld).invert(),T.matrix.copy(y.matrixWorld))}),!r&&Ea>=0&&(r=zr[Ea]),Ts=Kn(Ts,t.k==="hq"&&!pt?1:0,3,e);let h=Te.p.distanceTo(Te.t);Io=Kn(Io,t.k==="day"&&!pt?Math.min(1,Math.max(0,(h-2.6)/4.4)):1,4,e),[Wo,Np,ih].forEach(y=>{let T=Io<.99;y.material.transparent!==T&&(y.material.transparent=T,y.material.depthWrite=!T,y.material.needsUpdate=!0),y.material.opacity=Io,y===Wo&&(y.castShadow=Io>.5)});let u=t.k==="day"&&!pt?Math.min(1,h/8):1;if(g3.forEach(y=>{let T=t.k==="return"?0:Math.min(1,Math.max(0,(h-24)/12));y.visible=T>.01,y.material.opacity=T}),E3.forEach((y,T)=>{let _=1+.22*Math.sin(i/320+T*1.7);y.visible=Ts>.01,y.scale.setScalar(Math.max(1e-4,Ts*_*Math.max(1,h/9))),y.material.opacity=Ts*(.95-.35*(_-.78)/.44)}),t.k==="day"&&window.HUD&&window.HUD.odometer){let y=Wp[t.cur-1].raw,T=Ge&&Ge.route&&!Ge.back?Ge.route:null,_=T?Math.max(0,Math.min(y,y-(1-(Ge.et||0))*T.L*bp)):y;window.HUD.odometer(_,y,F3[t.cur-1]+_)}r?V3(r,Ea>=0?a:0,e,s,i):Ta.k>.002?(Ta.k=Kn(Ta.k,0,5,e),Object.values(Da).forEach(y=>{y.visible&&y.scale.multiplyScalar(.9)})):Object.values(Da).forEach(y=>{y.visible=!1}),v3(fh.u);let d=Ge&&Ge.intro?n>.93:n>.7;Hp.forEach(y=>{let T=y.s.day==null&&!(y.s.days&&y.s.days.length)||t.k==="close"?!1:t.k==="day"?y.s.day===t.cur||Ql(y.s,t.cur):y.s.day<=t.rd||t.preview&&t.preview.includes(y.s.day)||t.rd===.5&&Ql(y.s,1);y.k=Kn(y.k,T&&(d||!Ge)?1:0,9,e),y.grp.scale.setScalar(Math.max(y.k,1e-4)*(y.office?1+Ts*Math.max(0,h/8-1):u)),y.grp.visible=y.k>2e-4,y.grp.rotation.y=Math.atan2(_t.position.x-y.grp.position.x,_t.position.z-y.grp.position.z)+.25}),hp.forEach(y=>{y.position.x+=y.userData.v*e,y.position.x>Th+8&&(y.position.x=(ve.homeXY?ve.homeXY[0]:zo)-8);let T=y.userData,_=T.s0||(T.s0=y.scale.clone()),w=wn.visible?Q3.set(Te.p,wn.position).closestPointToPoint(y.position,!0,Mp).distanceTo(y.position):99,A=y.position.distanceTo(Te.p);T.f=Kn(T.f??1,Math.min(w<5?Math.max(1e-4,(w-1.5)/3.5):1,A<9?Math.max(1e-4,(A-4)/5):1),6,e),y.scale.copy(_).multiplyScalar(T.f)}),Y0=Kn(Y0,["day","chapter"].includes(t.k)&&!pt?1:0,2,e),up.position.set(Te.t.x,An,Te.t.z),up.update(e,Y0);let p=t.k==="day"&&!pt?t.cur-1:-1,f=p>=0?jp[p]:"clear",m=p>=0&&(J2[p]||Y3[f])||null;if(m!==Fr&&ya<.02&&(Fr=m),ya=Kn(ya,Fr&&Fr===m?1:0,1.5,e),Fr&&(ya>.001||i2)){let y=ya>.001,T=zg(Le,y?Fr.tp:null,y?ya:0);i2=y,Gg(Oe.background,T.sky[0],T.sky[1]),Oe.fog.color.copy(T.fog),q0=T.fogMult,Ho.color.copy(T.hemiSky),Ho.groundColor.copy(T.hemiGround),Ho.intensity=T.hemiPower,Vt.color.copy(T.sun),Vt.intensity=T.sunPower,xp.fromArray(T.sunDir),Fr.g&&Fr.g.update(i/1e3,T.glow)}let v=t.k==="day"&&!pt?t.cur-1:-1;uh.forEach((y,T)=>y&&y.forEach(_=>{if(_.userData.field){_.userData.amt=Kn(_.userData.amt||0,T===v?1:0,2,e),_.visible=_.userData.amt>.005,_.visible&&_.update(i/1e3,_.userData.amt);return}_.visible=T===v,_.visible&&_.update(e)})),Object.entries(Q2).forEach(([y,T])=>{ep[y]=Kn(ep[y],f===y?1:0,1.5,e),T.position.set(Te.t.x,An,Te.t.z),T.update(e,ep[y])}),As.update(e,i,Te.p.distanceTo(Te.t)),Te.p.y=Math.max(Te.p.y,fn(Te.p.x,-Te.p.z,.25)+.12),_t.position.copy(Te.p),_t.lookAt(Te.t),Vo.forEach(y=>y.update(_t.position));let g=innerWidth,b=innerHeight;_t.setViewOffset(g,b,-g*Te.off*(g>900?1:0),rp()?.31*b:0,g,b);let x=Te.p.distanceTo(Te.t),M=Math.max(x,Te.fd||0),E=Math.min(1,Math.max(0,(M-30)/70));if(Oe.fog.near=M*(.95+.8*E)*q0,Oe.fog.far=M*(2.5+3.1*E)*q0,Te.fd=0,!pt||Li.has("tzold")){Vt.target.position.copy(Te.t),Vt.position.copy(Te.t).addScaledVector(xp,x);let y=Vt.shadow.camera,T=Math.min(x*.7,40);y.left=y.bottom=-T,y.right=y.top=T,y.near=.1,y.far=x*3.2,y.updateProjectionMatrix()}if(ap.uniforms.h.value=Te.blur*3.2/g,sp.uniforms.v.value=Te.blur*3.2/b,ap.uniforms.r.value=sp.uniforms.r.value=.5,yp.forEach(({el:y,v:T})=>{if(!y.classList.contains("on"))return;let _=T.clone().project(_t);y.style.transform=`translate(${(_.x+1)/2*g}px,${(1-_.y)/2*b}px)`}),!pt||Li.has("tzold")){let y=Vt.position,T=Vt.target.position,_=[y.x,y.y,y.z,T.x,T.y,T.z,Vt.shadow.camera.right];(Ge||_.some((w,A)=>Math.abs(w-h2[A])>1e-4))&&(jo=i,h2.splice(0,7,..._)),Ne.shadowMap.needsUpdate=!!pt||i-jo<2e3}Bn.render(),requestAnimationFrame(av)}function qp(){Ne.setSize(innerWidth,innerHeight),Bn.setSize(innerWidth,innerHeight),Jl&&Jl.uniforms.resolution.value.set(1/(innerWidth*Ne.getPixelRatio()),1/(innerHeight*Ne.getPixelRatio())),_t.aspect=innerWidth/innerHeight,_t.updateProjectionMatrix()}addEventListener("resize",qp);qp();var mT=Wt.findIndex(i=>i.k==="depart"),sv=()=>{pt||Ps(Kt-1)},Yp=()=>{pt||Ps(Kt+1)};addEventListener("keydown",i=>{["ArrowRight"," ","PageDown","Enter"].includes(i.key)&&(i.preventDefault(),Yp()),["ArrowLeft","PageUp","Backspace"].includes(i.key)&&(i.preventDefault(),sv())});Ne.domElement.addEventListener("click",i=>(i.clientX<innerWidth*.2?sv:Yp)());dn("brand").addEventListener("click",Yp);document.getElementById("grain").style.backgroundImage=`url(${(()=>{let i=document.createElement("canvas");return i.width=i.height=256,_2(i.getContext("2d"),256,77),i.toDataURL()})()})`;var Do=new URLSearchParams(location.search);(async()=>{let i=window.HUD,e=document.createElement("div");e.textContent="\u8F09\u5165\u4E2D\u2026",e.style.cssText="position:fixed;inset:0;display:grid;place-items:center;z-index:99;font:500 18px/1 serif;letter-spacing:.3em;color:#8a7f70;background:#f4efe6",i||document.body.appendChild(e);let t=performance.now(),n=()=>new Promise(d=>requestAnimationFrame(d)),r=d=>[bt.lm,bt.lookAt(bt.u0),bt.lookAt(bt.u1)].some(p=>Math.hypot(p.x-d.xy[0],-p.z-d.xy[1])<12);Kl&&Br.forEach(d=>r(d)?d.go(!0):rh.push(()=>d.go(!1)));let a=()=>Br.filter(d=>!d.done&&(!Kl||r(d))).length;for(;a()>0&&performance.now()-t<(Kl?1e4:3e4);)i&&i.loading&&i.loading(.5+.2*Br.filter(d=>d.done).length/Math.max(1,Br.length),"MODELS"),await new Promise(d=>setTimeout(d,100));let s=new Set;Oe.traverse(d=>{d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(p=>["map","normalMap","roughnessMap","emissiveMap","alphaMap"].forEach(f=>p[f]&&s.add(p[f])))});let o=[performance.now()];s.forEach(d=>Ne.initTexture(d)),Ne.compileAsync?await Ne.compileAsync(Oe,_t):Ne.compile(Oe,_t);let c=Array.from({length:9},(d,p)=>{let f=bt.u0+(bt.u1-bt.u0)*p/8;return{p:bt.camAt(f),t:bt.lookAt(f)}}),l=[...Wt.map(Xo),{p:Nt.CR,t:en.getPointAt(0)},{p:Ai.CR,t:zr[0].p},...c,bt.end()];o.push(performance.now());let h=Ne.getPixelRatio();Ne.setPixelRatio(h*.25);for(let[d,p]of l.entries())i&&i.loading&&i.loading(.7+.28*d/l.length,"PREPARING"),_t.position.copy(p.p),_t.lookAt(p.t),Vo.forEach(f=>f.update(_t.position,!0)),Vt.target.position.copy(p.t),Vt.position.copy(p.t).add(new S(-30,34,20)),Ne.shadowMap.needsUpdate=!0,Ne.render(Oe,_t),d%6===5&&await n();if(o.push(performance.now()),Ne.setPixelRatio(h),qp(),_t.position.copy(c[0].p),_t.lookAt(c[0].t),Vo.forEach(d=>d.update(_t.position,!0)),$2(),Ne.shadowMap.needsUpdate=!0,Bn.render(),await n(),_t.position.copy(c[8].p),_t.lookAt(c[8].t),Bn.render(),await n(),o.push(performance.now()),console.info("[\u9810\u71B1]",`\u7B49\u6A21\u578B ${((o[0]-t)/1e3).toFixed(1)} \u79D2`,`\u7DE8\u8B6F ${((o[1]-o[0])/1e3).toFixed(1)} \u79D2`,`\u5404\u5E55 ${((o[2]-o[1])/1e3).toFixed(1)} \u79D2`,`\u5F8C\u88FD ${((o[3]-o[2])/1e3).toFixed(1)} \u79D2`),Ps(b2?(()=>{let d=Wt.map((f,m)=>[f,m]).filter(([f])=>f.k==="day");if(!d.length)return 0;let p=+Do.get("day")||0;if(!p){let f=new Date,m=(Do.get("date")||`${f.getFullYear()}-${f.getMonth()+1}-${f.getDate()}`).match(/(\d{1,2})[-./](\d{1,2})$/);if(m){let v=he.days.findIndex(g=>{let b=String(g.date||"").match(/(\d{1,2})\.(\d{1,2})/);return b&&+b[1]==+m[1]&&+b[2]==+m[2]});v>=0&&(p=v+1)}}return(d.find(([f])=>f.n===(p||1))||d[0])[1]})():+Do.get("n")||0),requestAnimationFrame(av),await n(),await n(),e.remove(),window.__journey.ready=!0,Ri){let d=g=>performance.getEntriesByType("resource").find(b=>b.name.split("?")[0].endsWith(g)),p=d("/data.js"),f=d("/journey.js"),m=g=>(g/1e3).toFixed(1),v=(p?p.responseEnd-p.startTime:0)+(f?f.responseEnd-f.startTime:0);Ri.load={dl:m(v),font:m(Xg-v),build:m(t-Xg),models:m(o[0]-t),compile:m(o[1]-o[0]),warm:m(o[3]-o[1]),total:m(performance.now())},Ri.el=Object.assign(document.createElement("pre"),{id:"perf"}),Ri.el.style.cssText="position:fixed;top:8px;right:8px;z-index:200;margin:0;padding:6px 9px;font:12px/1.5 ui-monospace,monospace;color:#fff;background:rgba(0,0,0,.62);border-radius:6px;pointer-events:none;white-space:pre",document.body.appendChild(Ri.el)}Do.has("play")&&setInterval(()=>Ps(Kt>=Wt.length-1?0:Kt+1),(+Do.get("play")||7)*1e3)})();function ey(){_t.updateMatrixWorld();let i=new Pr().setFromProjectionMatrix(new Me().multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse)),e=Oe.fog.far,t=new S,n=([o,c])=>(t.set(o,Zn(o,c),-c),i.containsPoint(t)&&t.distanceTo(_t.position)<e),r=As.audit(),a=r.people.filter(o=>o[2]),s=[...dr,...Ia].map((o,c)=>Zt.filter(l=>l.flag&&Math.hypot(l.x-o[0],l.y-o[1])<l.r+.12).length).reduce((o,c)=>o+c,0);return{scene:Wt[Kt]&&Wt[Kt].k,blur:Te.blur,levels:fi?fi.levels.length:0,flagHits:s,view:{houses:r.houses.filter(n).length+Lp.filter(n).length,trees:th.filter(n).length,people:r.people.filter(n).length,robe:a.filter(n).length,cars:r.cars.filter(n).length,trains:r.trains.filter(n).length},trees:th,robeHeight:a.length?Math.min(...a.map(o=>o[3]*1.15)):0,houseHeight:(()=>{let o=r.houses.map(c=>c[2]).filter(c=>c<.5).sort((c,l)=>c-l);return o.length?o[o.length>>1]*.9:0})(),worldLM:La.length,models:Br.length,modelsDone:Br.filter(o=>o.done).length,dolphin:r.dolphin}}var ty=(i=40,e=!1)=>{let t=Ne.getContext(),n=new Uint8Array(4),r=[];for(let a=0;a<i+3;a++){let s=performance.now();e&&(Ne.shadowMap.needsUpdate=!0),Bn.render(),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n),a>=3&&r.push(performance.now()-s)}return r.sort((a,s)=>a-s),+r[i>>1].toFixed(2)};window.__journey={go:Ps,audit:ey,gl:Ne,bench:ty,hao:Sn,perf:()=>Ri&&{...Ri.load,drops:Ri.drops,tzDrops:Ri.tzDrops},legs:[en,Sh],scene:Oe,plane:wn,camera:_t,rc:new hl,dolphin:()=>As.dolphinJump(Symbol(),Te.t.clone().setY(0),new S(1,0,0)),hold:i=>{pt?pt.hold=i:Ge&&(Ge.hold=i)},teaser:tv,vehicles:{...Da,rides:K2.map(i=>i&&i.key),legs:Wr},season:ui,light:()=>({lookK:+ya.toFixed(3),wx:jp,hemi:+Ho.intensity.toFixed(2),sun:+Vt.intensity.toFixed(2),nights:J2.map(i=>!!i)}),scenes:Wt.map(i=>i.k),sc:Wt.map(i=>i.k),frames:iv,decor:()=>uh.map(i=>i&&i.map(e=>e.userData.kind||e.type)),decorObj:uh,tzinfo:()=>({h:bt.h,u0:bt.u0,u1:bt.u1,ord:di,total:wa,rp:Vr.length,stopIdx:_h}),km:Wp.map(({day:i,km:e,mode:t,modes:n})=>({day:i,km:e,mode:t,modes:n})),get step(){return Kt},get busy(){return!!Ge||!!pt}};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
