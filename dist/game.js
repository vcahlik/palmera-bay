(()=>{var ef=0,th=1,nf=2;var Lo=1,sf=2,zn=3,oi=0,We=1,De=2,si=0,ns=1,Gn=2,eh=3,nh=4,rf=5,Mi=100,of=101,af=102,cf=103,lf=104,hf=200,uf=201,ff=202,df=203,Ha=204,ka=205,pf=206,mf=207,gf=208,xf=209,_f=210,vf=211,yf=212,Mf=213,bf=214,Ga=0,Va=1,Wa=2,os=3,Xa=4,qa=5,Ya=6,Za=7,hl=0,Sf=1,Ef=2,ri=0,wf=1,Tf=2,Af=3,Rf=4,Cf=5,Pf=6,If=7;var hu=300,as=301,cs=302,$a=303,Ka=304,Do=306,ks=1e3,Ei=1001,Ja=1002,ve=1003,Lf=1004;var dr=1005;var En=1006,sa=1007;var wi=1008;var Vn=1009,uu=1010,fu=1011,Gs=1012,ul=1013,Ti=1014,Pn=1015,Di=1016,fl=1017,dl=1018,ls=1020,du=35902,pu=1021,mu=1022,wn=1023,gu=1024,xu=1025,is=1026,hs=1027,pl=1028,ml=1029,_u=1030,gl=1031;var xl=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Qa=35840,ja=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,cc=37811,lc=37812,hc=37813,uc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,xc=37820,_c=37821,Yr=36492,vc=36494,yc=36495,vu=36283,Mc=36284,bc=36285,Sc=36286;var $r=2300,Ec=2301,ra=2302,ih=2400,sh=2401,rh=2402;var Df=3200,Uf=3201;var _l=0,Nf=1,ii="",Oe="srgb",li="srgb-linear",vl="display-p3",Uo="display-p3-linear",Kr="linear",ge="srgb",Jr="rec709",Qr="p3";var zi=7680;var oh=519,Ff=512,Of=513,Bf=514,yu=515,zf=516,Hf=517,kf=518,Gf=519,ah=35044;var ch="300 es",kn=2e3,jr=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oa=Math.PI/180,to=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Vf(i,t){return(i%t+t)%t}function aa(i,t,e){return(1-e)*i+e*t}function As(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=s[0],g=s[3],m=s[6],M=s[1],p=s[4],v=s[7],T=s[2],b=s[5],w=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*g+a*p+c*b,r[6]=o*m+a*v+c*w,r[1]=l*_+h*M+u*T,r[4]=l*g+h*p+u*b,r[7]=l*m+h*v+u*w,r[2]=f*_+d*M+x*T,r[5]=f*g+d*p+x*b,r[8]=f*m+d*v+x*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ca=new Yt;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){let i=eo("canvas");return i.style.display="block",i}var lh={};function Zr(i){i in lh||(lh[i]=!0,console.warn(i))}function Xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var hh=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uh=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[li]:{transfer:Kr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:ge,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Uo]:{transfer:Kr,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(uh),fromReference:i=>i.applyMatrix3(hh)},[vl]:{transfer:ge,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(uh),fromReference:i=>i.applyMatrix3(hh).convertLinearToSRGB()}},Zf=new Set([li,Uo]),ae={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Rs[t].toReference,s=Rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===ii?Kr:Rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Rs[t].luminanceCoefficients)}};function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=eo("canvas")),Hi.width=t.width,Hi.height=t.height;let n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$f=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kf=0,je=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=En,o=wi,a=wn,c=Vn,l=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=xs(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=hu;je.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(l+1)/2,v=(d+1)/2,T=(m+1)/2,b=(h+f)/4,w=(u+_)/4,R=(x+g)/4;return p>v&&p>T?p<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(p),s=b/n,r=w/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==x){let g=1-a,m=c*f+l*d+h*x+u*_,M=m>=0?1:-1,p=1-m*m;if(p>Number.EPSILON){let T=Math.sqrt(p),b=Math.atan2(T,m*M);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T}let v=a*M;if(c=c*g+f*v,l=l*g+d*v,h=h*g+x*v,u=u*g+_*v,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*d-l*f,t[e+1]=c*x+h*f+l*u-a*d,t[e+2]=l*x+h*d+a*f-c*u,t[e+3]=h*x-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new L,fh=new tn,Wn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),mr.subVectors(this.max,Cs),ki.subVectors(t.a,Cs),Gi.subVectors(t.b,Cs),Vi.subVectors(t.c,Cs),Jn.subVectors(Gi,ki),Qn.subVectors(Vi,Gi),pi.subVectors(ki,Vi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!fa(e,ki,Gi,Vi,mr)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,ki,Gi,Vi,mr))?!1:(gr.crossVectors(Jn,Qn),e=[gr.x,gr.y,gr.z],fa(e,ki,Gi,Vi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,pr=new Wn,ki=new L,Gi=new L,Vi=new L,Jn=new L,Qn=new L,pi=new L,Cs=new L,mr=new L,gr=new L,mi=new L;function fa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Jf=new Wn,Ps=new L,da=new L,Xn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(da)),this.expandByPoint(Ps.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new L,pa=new L,xr=new L,jn=new L,ma=new L,_r=new L,ga=new L,Vs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(pa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=jn.dot(this.direction),c=-jn.dot(xr),l=jn.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(xr,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){ma.subVectors(e,t),_r.subVectors(n,t),ga.crossVectors(ma,_r);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);let c=a*this.direction.dot(_r.crossVectors(jn,_r));if(c<0)return null;let l=a*this.direction.dot(ma.cross(jn));if(l<0||c+l>o)return null;let h=-a*jn.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,x,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,x,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+x*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=x+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,x=l*h,_=l*u;e[0]=f+_*a,e[4]=x*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,x=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,_=a*u;e[0]=c*h,e[4]=x*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+x,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,jf)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ti.crossVectors(n,cn),ti.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ti.crossVectors(n,cn)),ti.normalize(),vr.crossVectors(cn,ti),s[0]=ti.x,s[4]=vr.x,s[8]=cn.x,s[1]=ti.y,s[5]=vr.y,s[9]=cn.y,s[2]=ti.z,s[6]=vr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],g=n[10],m=n[14],M=n[3],p=n[7],v=n[11],T=n[15],b=s[0],w=s[4],R=s[8],k=s[12],y=s[1],E=s[5],F=s[9],I=s[13],U=s[2],z=s[6],N=s[10],G=s[14],D=s[3],Y=s[7],Z=s[11],et=s[15];return r[0]=o*b+a*y+c*U+l*D,r[4]=o*w+a*E+c*z+l*Y,r[8]=o*R+a*F+c*N+l*Z,r[12]=o*k+a*I+c*G+l*et,r[1]=h*b+u*y+f*U+d*D,r[5]=h*w+u*E+f*z+d*Y,r[9]=h*R+u*F+f*N+d*Z,r[13]=h*k+u*I+f*G+d*et,r[2]=x*b+_*y+g*U+m*D,r[6]=x*w+_*E+g*z+m*Y,r[10]=x*R+_*F+g*N+m*Z,r[14]=x*k+_*I+g*G+m*et,r[3]=M*b+p*y+v*U+T*D,r[7]=M*w+p*E+v*z+T*Y,r[11]=M*R+p*F+v*N+T*Z,r[15]=M*k+p*I+v*G+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],_=t[7],g=t[11],m=t[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],_=t[13],g=t[14],m=t[15],M=u*g*l-_*f*l+_*c*d-a*g*d-u*c*m+a*f*m,p=x*f*l-h*g*l-x*c*d+o*g*d+h*c*m-o*f*m,v=h*_*l-x*u*l+x*a*d-o*_*d-h*a*m+o*u*m,T=x*u*c-h*_*c-x*a*f+o*_*f+h*a*g-o*u*g,b=e*M+n*p+s*v+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=M*w,t[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*m-n*f*m)*w,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*m+n*c*m)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*w,t[4]=p*w,t[5]=(h*g*r-x*f*r+x*s*d-e*g*d-h*s*m+e*f*m)*w,t[6]=(x*c*r-o*g*r-x*s*l+e*g*l+o*s*m-e*c*m)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*w,t[8]=v*w,t[9]=(x*u*r-h*_*r-x*n*d+e*_*d+h*n*m-e*u*m)*w,t[10]=(o*_*r-x*a*r+x*n*l-e*_*l-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*w,t[12]=T*w,t[13]=(h*_*s-x*u*s+x*n*f-e*_*f-h*n*g+e*u*g)*w,t[14]=(x*a*s-o*_*s-x*n*c+e*_*c+o*n*g-e*a*g)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,_=o*h,g=o*u,m=a*u,M=c*l,p=c*h,v=c*u,T=n.x,b=n.y,w=n.z;return s[0]=(1-(_+m))*T,s[1]=(d+v)*T,s[2]=(x-p)*T,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+m))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(x+p)*w,s[9]=(g-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let l=1/r,h=1/o,u=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,x;if(a===kn)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===jr)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,x,_;if(a===kn)x=(o+r)*u,_=-2*u;else if(a===jr)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new L,bn=new te,Qf=new L(0,0,0),jf=new L(1,1,1),ti=new L,vr=new L,cn=new L,dh=new te,ph=new tn,qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},td=0,mh=new L,Xi=new tn,Fn=new te,yr=new L,Is=new L,ed=new L,nd=new tn,gh=new L(1,0,0),xh=new L(0,1,0),_h=new L(0,0,1),vh={type:"added"},id={type:"removed"},qi={type:"childadded",child:null},xa={type:"childremoved",child:null},Re=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new qe,n=new tn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Yt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Is,yr,this.up):Fn.lookAt(yr,Is,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new L,On=new L,_a=new L,Bn=new L,Yi=new L,Zi=new L,yh=new L,va=new L,ya=new L,Ma=new L,ba=new be,Sa=new be,Ea=new be,bi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),On.subVectors(n,e),_a.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(On),c=Sn.dot(_a),l=On.dot(On),h=On.dot(_a),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ba.setScalar(0),Sa.setScalar(0),Ea.setScalar(0),ba.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),On.subVectors(t,e),Sn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Yi.subVectors(s,n),Zi.subVectors(r,n),va.subVectors(t,n);let c=Yi.dot(va),l=Zi.dot(va);if(c<=0&&l<=0)return e.copy(n);ya.subVectors(t,s);let h=Yi.dot(ya),u=Zi.dot(ya);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Yi,o);Ma.subVectors(t,r);let d=Yi.dot(Ma),x=Zi.dot(Ma);if(x>=0&&d<=x)return e.copy(r);let _=d*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(Zi,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return yh.subVectors(r,s),a=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(yh,a);let m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Vf(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ae.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ge(ke.r*255,0,255))*65536+Math.round(Ge(ke.g*255,0,255))*256+Math.round(Ge(ke.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Oe){ae.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Mr);let n=aa(ei.h,Mr.h,e),s=aa(ei.s,Mr.s,e),r=aa(ei.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Tt;Tt.NAMES=bu;var sd=0,In=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ns,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=ka,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},le=class extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new L,br=new at,ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ah&&(t.usage=this.usage),t}};var ro=class extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},rd=0,gn=new te,Ta=new Re,$i=new L,ln=new Wn,Ls=new Wn,Le=new L,de=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?oo:ro)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(ln.min,Ls.min),ln.expandByPoint(Le),Le.addVectors(ln.max,Ls.max),ln.expandByPoint(Le)):(ln.expandByPoint(Ls.min),ln.expandByPoint(Ls.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Le.add($i)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;let l=new L,h=new L,u=new L,f=new at,d=new at,x=new at,_=new L,g=new L;function m(R,k,y){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,k),x.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),x.sub(f);let E=1/(d.x*x.y-x.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(E),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(E),a[R].add(_),a[k].add(_),a[y].add(_),c[R].add(g),c[k].add(g),c[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,k=M.length;R<k;++R){let y=M[R],E=y.start,F=y.count;for(let I=E,U=E+F;I<U;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let p=new L,v=new L,T=new L,b=new L;function w(R){T.fromBufferAttribute(s,R),b.copy(T);let k=a[R];p.copy(k),p.sub(T.multiplyScalar(T.dot(k))).normalize(),v.crossVectors(b,k);let E=v.dot(c[R])<0?-1:1;o.setXYZW(R,p.x,p.y,p.z,E)}for(let R=0,k=M.length;R<k;++R){let y=M[R],E=y.start,F=y.count;for(let I=E,U=E+F;I<U;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[x++]=l[d++]}return new ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mh=new te,gi=new Vs,Sr=new Xn,bh=new L,Er=new L,wr=new L,Tr=new L,Aa=new L,Ar=new L,Sh=new L,Rr=new L,mt=class extends Re{constructor(t=new de,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Aa.fromBufferAttribute(u,t),o?Ar.addScaledVector(Aa,h):Ar.addScaledVector(Aa.sub(e),h))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Sr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Sr,bh)===null||gi.origin.distanceToSquared(bh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let g=f[x],m=o[g.materialIndex],M=Math.max(g.start,d.start),p=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=p;v<T;v+=3){let b=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);s=Cr(this,m,t,n,l,h,u,b,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=x,m=_;g<m;g+=3){let M=a.getX(g),p=a.getX(g+1),v=a.getX(g+2);s=Cr(this,o,t,n,l,h,u,M,p,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let g=f[x],m=o[g.materialIndex],M=Math.max(g.start,d.start),p=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=p;v<T;v+=3){let b=v,w=v+1,R=v+2;s=Cr(this,m,t,n,l,h,u,b,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=x,m=_;g<m;g+=3){let M=g,p=g+1,v=g+2;s=Cr(this,o,t,n,l,h,u,M,p,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function od(i,t,e,n,s,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===oi,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Er),i.getVertexPosition(c,wr),i.getVertexPosition(l,Tr);let h=od(i,t,e,n,Er,wr,Tr,Sh);if(h){let u=new L;bi.getBarycoord(Sh,Er,wr,Tr,u),s&&(h.uv=bi.getInterpolatedAttribute(s,a,c,l,u,new at)),r&&(h.uv1=bi.getInterpolatedAttribute(r,a,c,l,u,new at)),o&&(h.normal=bi.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};bi.getNormal(Er,wr,Tr,f.normal),h.face=f,h.barycoord=u}return h}var Jt=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function x(_,g,m,M,p,v,T,b,w,R,k){let y=v/w,E=T/R,F=v/2,I=T/2,U=b/2,z=w+1,N=R+1,G=0,D=0,Y=new L;for(let Z=0;Z<N;Z++){let et=Z*E-I;for(let pt=0;pt<z;pt++){let Dt=pt*y-F;Y[_]=Dt*M,Y[g]=et*p,Y[m]=U,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[m]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(pt/w),u.push(1-Z/R),G+=1}}for(let Z=0;Z<R;Z++)for(let et=0;et<w;et++){let pt=f+et+z*Z,Dt=f+et+z*(Z+1),$=f+(et+1)+z*(Z+1),nt=f+(et+1)+z*Z;c.push(pt,Dt,nt),c.push(Dt,$,nt),D+=6}a.addGroup(d,D,k),d+=D,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function ad(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Su(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var cd={clone:us,merge:Xe},ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ao=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new L,Eh=new at,wh=new at,Ve=class extends ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,wh),e.subVectors(wh,Eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,Ji=1,Rc=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Ki,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Ki,Ji,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Ki,Ji,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Ki,Ji,t,e);a.layers=this.layers,this.add(a);let c=new Ve(Ki,Ji,t,e);c.layers=this.layers,this.add(c);let l=new Ve(Ki,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},co=class extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:si});r.uniforms.tEquirect.value=e;let o=new mt(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=En),new Rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ra=new L,ud=new L,fd=new Yt,Hn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ra.subVectors(n,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fd.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Xn,Pr=new L,Ws=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],_=s[10],g=s[11],m=s[12],M=s[13],p=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,g-d,v-m).normalize(),n[1].setComponents(c+r,f+l,g+d,v+m).normalize(),n[2].setComponents(c+o,f+h,g+x,v+M).normalize(),n[3].setComponents(c-o,f-h,g-x,v-M).normalize(),n[4].setComponents(c-a,f-u,g-_,v-p).normalize(),e===kn)n[5].setComponents(c+a,f+u,g+_,v+p).normalize();else if(e===jr)n[5].setComponents(a,u,_,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ze=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],x=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*f-o;for(let p=0;p<l;p++){let v=p*u-r;x.push(v,-M,0),_.push(0,0,1),g.push(p/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let p=M+l*m,v=M+l*(m+1),T=M+1+l*(m+1),b=M+1+l*m;d.push(p,v,b),d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:xd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:bd,batching_vertex:Sd,begin_vertex:Ed,beginnormal_vertex:wd,bsdfs:Td,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Hd,displacementmap_vertex:kd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Zd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:op,envmap_vertex:Kd,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:jd,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:cp,lights_phong_fragment:lp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:fp,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:vp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:bp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:wp,morphinstance_vertex:Tp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Hp,opaque_fragment:kp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Qp,skinbase_vertex:jp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:cm,uv_pars_fragment:lm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:fm,background_vert:dm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:xm,cube_frag:_m,depth_vert:vm,depth_frag:ym,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:Sm,equirect_frag:Em,linedashed_vert:wm,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Pm,meshmatcap_vert:Im,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:Hm,points_vert:km,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},dt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Cn={basic:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Xe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Xe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Xe([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Xe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Xe([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Xe([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Xe([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Xe([dt.lights,dt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Cn.physical={uniforms:Xe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Ir={r:0,b:0,g:0},_i=new qe,Ym=new te;function Zm(i,t,e,n,s,r,o){let a=new Tt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(M){let p=M.isScene===!0?M.background:null;return p&&p.isTexture&&(p=(M.backgroundBlurriness>0?e:t).get(p)),p}function _(M){let p=!1,v=x(M);v===null?m(a,c):v&&v.isColor&&(m(v,1),p=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||p)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,p){let v=x(p);v&&(v.isCubeTexture||v.mapping===Do)?(h===void 0&&(h=new mt(new Jt(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:us(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(p.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(_i)),h.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mt(new ze(2,2),new Ue({name:"BackgroundMaterial",uniforms:us(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,p){M.getRGB(Ir,Su(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(M,p=1){a.set(M),c=p,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:_,addToRenderList:g}}function $m(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,E,F,I,U){let z=!1,N=u(I,F,E);r!==N&&(r=N,l(r.object)),z=d(y,I,F,U),z&&x(y,I,F,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(y,E,F,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,E,F){let I=F.wireframe===!0,U=n[y.id];U===void 0&&(U={},n[y.id]=U);let z=U[E.id];z===void 0&&(z={},U[E.id]=z);let N=z[I];return N===void 0&&(N=f(c()),z[I]=N),N}function f(y){let E=[],F=[],I=[];for(let U=0;U<e;U++)E[U]=0,F[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:I,object:y,attributes:{},index:null}}function d(y,E,F,I){let U=r.attributes,z=E.attributes,N=0,G=F.getAttributes();for(let D in G)if(G[D].location>=0){let Z=U[D],et=z[D];if(et===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),Z===void 0||Z.attribute!==et||et&&Z.data!==et.data)return!0;N++}return r.attributesNum!==N||r.index!==I}function x(y,E,F,I){let U={},z=E.attributes,N=0,G=F.getAttributes();for(let D in G)if(G[D].location>=0){let Z=z[D];Z===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));let et={};et.attribute=Z,Z&&Z.data&&(et.data=Z.data),U[D]=et,N++}r.attributes=U,r.attributesNum=N,r.index=I}function _(){let y=r.newAttributes;for(let E=0,F=y.length;E<F;E++)y[E]=0}function g(y){m(y,0)}function m(y,E){let F=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;F[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),U[y]!==E&&(i.vertexAttribDivisor(y,E),U[y]=E)}function M(){let y=r.newAttributes,E=r.enabledAttributes;for(let F=0,I=E.length;F<I;F++)E[F]!==y[F]&&(i.disableVertexAttribArray(F),E[F]=0)}function p(y,E,F,I,U,z,N){N===!0?i.vertexAttribIPointer(y,E,F,U,z):i.vertexAttribPointer(y,E,F,I,U,z)}function v(y,E,F,I){_();let U=I.attributes,z=F.getAttributes(),N=E.defaultAttributeValues;for(let G in z){let D=z[G];if(D.location>=0){let Y=U[G];if(Y===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){let Z=Y.normalized,et=Y.itemSize,pt=t.get(Y);if(pt===void 0)continue;let Dt=pt.buffer,$=pt.type,nt=pt.bytesPerElement,St=$===i.INT||$===i.UNSIGNED_INT||Y.gpuType===ul;if(Y.isInterleavedBufferAttribute){let ht=Y.data,Ft=ht.stride,Bt=Y.offset;if(ht.isInstancedInterleavedBuffer){for(let Wt=0;Wt<D.locationSize;Wt++)m(D.location+Wt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Wt=0;Wt<D.locationSize;Wt++)g(D.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Wt=0;Wt<D.locationSize;Wt++)p(D.location+Wt,et/D.locationSize,$,Z,Ft*nt,(Bt+et/D.locationSize*Wt)*nt,St)}else{if(Y.isInstancedBufferAttribute){for(let ht=0;ht<D.locationSize;ht++)m(D.location+ht,Y.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ht=0;ht<D.locationSize;ht++)g(D.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let ht=0;ht<D.locationSize;ht++)p(D.location+ht,et/D.locationSize,$,Z,et*nt,et/D.locationSize*ht*nt,St)}}else if(N!==void 0){let Z=N[G];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(D.location,Z);break;case 3:i.vertexAttrib3fv(D.location,Z);break;case 4:i.vertexAttrib4fv(D.location,Z);break;default:i.vertexAttrib1fv(D.location,Z)}}}}M()}function T(){R();for(let y in n){let E=n[y];for(let F in E){let I=E[F];for(let U in I)h(I[U].object),delete I[U];delete E[F]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let F in E){let I=E[F];for(let U in I)h(I[U].object),delete I[U];delete E[F]}delete n[y.id]}function w(y){for(let E in n){let F=n[E];if(F[y.id]===void 0)continue;let I=F[y.id];for(let U in I)h(I[U].object),delete I[U];delete F[y.id]}}function R(){k(),o=!0,r!==s&&(r=s,l(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Km(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_];for(let _=0;_<f.length;_++)e.update(x,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pn&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:T,maxSamples:b}}function Qm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Hn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,p=M*4,v=m.clippingState||null;c.value=v,v=h(x,f,p,d);for(let T=0;T!==p;++T)v[T]=e[T];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,x!==!0||g===null){let m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let p=0,v=d;p!==_;++p,v+=4)o.copy(u[p]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function jm(i){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=as:a===Ka&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$a||a===Ka)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Cc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fs=class extends ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,Th=[.125,.215,.35,.446,.526,.582],Si=20,Ca=new fs,Ah=new Tt,Pa=null,Ia=0,La=0,Da=!1,yi=(1+Math.sqrt(5))/2,Qi=1/yi,Rh=[new L(-yi,Qi,0),new L(yi,Qi,0),new L(-Qi,0,yi),new L(Qi,0,yi),new L(0,yi,-Qi),new L(0,yi,Qi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,Ia,La),this._renderer.xr.enabled=Da,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Di,format:wn,colorSpace:li,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(r)),this._blurMaterial=e0(r,t,e)}return s}_compileMaterial(t){let e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,s){let a=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ah),h.toneMapping=ri,h.autoClear=!1;let d=new le({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),x=new mt(new Jt,d),_=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Ah),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let p=this._cubeSize;Lr(s,M*p,m>2?p:0,p,p),h.setRenderTarget(s),_&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rh[(s-r-1)%Rh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):Si;g>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);let m=[],M=0;for(let w=0;w<Si;++w){let R=w/_,k=Math.exp(-R*R/2);m.push(k),w===0?M+=k:w<g&&(M+=2*k)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:p}=this;f.dTheta.value=x,f.mipInt.value=p-n;let v=this._sizeLods[s],T=3*v*(s>p-ts?s-p+ts:0),b=4*(this._cubeSize-v);Lr(e,T,b,3*v,2*v),c.setRenderTarget(e),c.render(u,Ca)}};function t0(i){let t=[],e=[],n=[],s=i,r=i-ts+1+Th.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ts?c=Th[o-i+ts-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,g=2,m=1,M=new Float32Array(_*x*d),p=new Float32Array(g*x*d),v=new Float32Array(m*x*d);for(let b=0;b<d;b++){let w=b%3*2/3-1,R=b>2?0:-1,k=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(k,_*x*b),p.set(f,g*x*b);let y=[b,b,b,b,b,b];v.set(y,m*x*b)}let T=new de;T.setAttribute("position",new ne(M,_)),T.setAttribute("uv",new ne(p,g)),T.setAttribute("faceIndex",new ne(v,m)),t.push(T),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ch(i,t,e){let n=new Tn(i,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function e0(i,t,e){let n=new Float32Array(Si),s=new L(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ph(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ih(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function n0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$a||c===Ka,h=c===as||c===cs;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ds(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ds(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function i0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function s0(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)t.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let p=0,v=M.length;p<v;p+=3){let T=M[p+0],b=M[p+1],w=M[p+2];f.push(T,b,b,w,w,T)}}else if(x!==void 0){let M=x.array;_=x.version;for(let p=0,v=M.length/3-1;p<v;p+=3){let T=p+0,b=p+1,w=p+2;f.push(T,b,b,w,w,T)}}else return;let g=new(Mu(f)?oo:ro)(f,1);g.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function r0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*o,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let g=0;for(let m=0;m<x;m++)g+=d[m];e.update(g,n,1)}function u(f,d,x,_){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let m=0;for(let M=0;M<x;M++)m+=d[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function o0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,t,e){let n=new WeakMap,s=new be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let k=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],p=0;d===!0&&(p=1),x===!0&&(p=2),_===!0&&(p=3);let v=a.attributes.position.count*p,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*T*4*u),w=new io(b,v,T,u);w.type=Pn,w.needsUpdate=!0;let R=p*4;for(let y=0;y<u;y++){let E=g[y],F=m[y],I=M[y],U=v*T*4*y;for(let z=0;z<E.count;z++){let N=z*R;d===!0&&(s.fromBufferAttribute(E,z),b[U+N+0]=s.x,b[U+N+1]=s.y,b[U+N+2]=s.z,b[U+N+3]=0),x===!0&&(s.fromBufferAttribute(F,z),b[U+N+4]=s.x,b[U+N+5]=s.y,b[U+N+6]=s.z,b[U+N+7]=0),_===!0&&(s.fromBufferAttribute(I,z),b[U+N+8]=s.x,b[U+N+9]=s.y,b[U+N+10]=s.z,b[U+N+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new at(v,T)},n.set(a,f),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function c0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var lo=class extends je{constructor(t,e,n,s,r,o,a,c,l,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ti),n===void 0&&h===hs&&(n=ls),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=c!==void 0?c:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wu=new je,Lh=new lo(1,1),Tu=new io,Au=new Ac,Ru=new co,Dh=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function No(i,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function l0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function d0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),Pe(e,n)}}function p0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Pe(e,n)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),Pe(e,n)}}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function E0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=yu,r=Lh):r=wu,e.setTexture2D(t||r,s)}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tu,s)}function R0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return M0;case 36295:return b0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(i,t){i.uniform1fv(this.addr,t)}function P0(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function I0(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function L0(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function D0(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function U0(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function N0(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function F0(i,t){i.uniform1iv(this.addr,t)}function O0(i,t){i.uniform2iv(this.addr,t)}function B0(i,t){i.uniform3iv(this.addr,t)}function z0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function k0(i,t){i.uniform2uiv(this.addr,t)}function G0(i,t){i.uniform3uiv(this.addr,t)}function V0(i,t){i.uniform4uiv(this.addr,t)}function W0(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wu,r[o])}function X0(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Au,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ru,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Tu,r[o])}function Z0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return H0;case 36294:return k0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}var Pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ua=/(\w+)(\])?(\[|\.)?/g;function Bh(i,t){i.seq.push(t),i.map[t.id]=t}function $0(i,t,e){let n=i.name,s=n.length;for(Ua.lastIndex=0;;){let r=Ua.exec(n),o=Ua.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bh(e,l===void 0?new Pc(a,i,t):new Ic(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Lc(a),Bh(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function zh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var K0=37297,J0=0;function Q0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function j0(i){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i),n;switch(t===e?n="":t===Qr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===Qr&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case Uo:return[n,"LinearTransferOETF"];case Oe:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(t),o)}else return s}function tg(i,t){let e=j0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function eg(i,t){let e;switch(t){case wf:e="Linear";break;case Tf:e="Reinhard";break;case Af:e="Cineon";break;case Rf:e="ACESFilmic";break;case Pf:e="AgX";break;case If:e="Neutral";break;case Cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dr=new L;function ng(){ae.getLuminanceCoefficients(Dr);let i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function sg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fs(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(og,cg)}var ag=new Map;function cg(i,t){let e=Vt[t];if(e===void 0){let n=ag.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(lg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case cs:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function mg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ug(e),l=fg(e),h=dg(e),u=pg(e),f=mg(e),d=ig(e),x=sg(r),_=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ri?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Dc(o),o=kh(o,e),o=Gh(o,e),a=Dc(a),a=kh(a,e),a=Gh(a,e),o=Vh(o),a=Vh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let p=M+g+o,v=M+m+a,T=zh(s,s.VERTEX_SHADER,p),b=zh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(E){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(b).trim(),z=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,b);else{let G=Hh(s,T,"vertex"),D=Hh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+G+`
`+D)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||U==="")&&(N=!1);N&&(E.diagnostics={runnable:z,programLog:F,vertexShader:{log:I,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(T),s.deleteShader(b),R=new rs(s,_),k=rg(s,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let k;this.getAttributes=function(){return k===void 0&&w(this),k};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,K0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}var xg=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nc(t),e.set(t,n)),n}},Nc=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function _g(i,t,e,n,s,r,o){let a=new so,c=new Uc,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,x=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,F,I,U){let z=I.fog,N=U.geometry,G=y.isMeshStandardMaterial?I.environment:null,D=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),Y=D&&D.mapping===Do?D.image.height:null,Z=_[y.type];y.precision!==null&&(x=s.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));let et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pt=et!==void 0?et.length:0,Dt=0;N.morphAttributes.position!==void 0&&(Dt=1),N.morphAttributes.normal!==void 0&&(Dt=2),N.morphAttributes.color!==void 0&&(Dt=3);let $,nt,St,ht;if(Z){let Je=Cn[Z];$=Je.vertexShader,nt=Je.fragmentShader}else $=y.vertexShader,nt=y.fragmentShader,c.update(y),St=c.getVertexShaderID(y),ht=c.getFragmentShaderID(y);let Ft=i.getRenderTarget(),Bt=U.isInstancedMesh===!0,Wt=U.isBatchedMesh===!0,$t=!!y.map,Q=!!y.matcap,P=!!D,lt=!!y.aoMap,ct=!!y.lightMap,it=!!y.bumpMap,ut=!!y.normalMap,Ut=!!y.displacementMap,_t=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,V=y.anisotropy>0,K=y.clearcoat>0,j=y.dispersion>0,J=y.iridescence>0,At=y.sheen>0,ft=y.transmission>0,Mt=V&&!!y.anisotropyMap,Qt=K&&!!y.clearcoatMap,st=K&&!!y.clearcoatNormalMap,bt=K&&!!y.clearcoatRoughnessMap,kt=J&&!!y.iridescenceMap,Gt=J&&!!y.iridescenceThicknessMap,Et=At&&!!y.sheenColorMap,jt=At&&!!y.sheenRoughnessMap,Xt=!!y.specularMap,fe=!!y.specularColorMap,O=!!y.specularIntensityMap,vt=ft&&!!y.transmissionMap,q=ft&&!!y.thicknessMap,tt=!!y.gradientMap,gt=!!y.alphaMap,yt=y.alphaTest>0,ee=!!y.alphaHash,we=!!y.extensions,Ke=ri;y.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let se={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:nt,defines:y.defines,customVertexShaderID:St,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:Wt,batchingColor:Wt&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:li,alphaToCoverage:!!y.alphaToCoverage,map:$t,matcap:Q,envMap:P,envMapMode:P&&D.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:ct,bumpMap:it,normalMap:ut,displacementMap:d&&Ut,emissiveMap:_t,normalMapObjectSpace:ut&&y.normalMapType===Nf,normalMapTangentSpace:ut&&y.normalMapType===_l,metalnessMap:C,roughnessMap:S,anisotropy:V,anisotropyMap:Mt,clearcoat:K,clearcoatMap:Qt,clearcoatNormalMap:st,clearcoatRoughnessMap:bt,dispersion:j,iridescence:J,iridescenceMap:kt,iridescenceThicknessMap:Gt,sheen:At,sheenColorMap:Et,sheenRoughnessMap:jt,specularMap:Xt,specularColorMap:fe,specularIntensityMap:O,transmission:ft,transmissionMap:vt,thicknessMap:q,gradientMap:tt,opaque:y.transparent===!1&&y.blending===ns&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:ee,combine:y.combine,mapUv:$t&&g(y.map.channel),aoMapUv:lt&&g(y.aoMap.channel),lightMapUv:ct&&g(y.lightMap.channel),bumpMapUv:it&&g(y.bumpMap.channel),normalMapUv:ut&&g(y.normalMap.channel),displacementMapUv:Ut&&g(y.displacementMap.channel),emissiveMapUv:_t&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:S&&g(y.roughnessMap.channel),anisotropyMapUv:Mt&&g(y.anisotropyMap.channel),clearcoatMapUv:Qt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:jt&&g(y.sheenRoughnessMap.channel),specularMapUv:Xt&&g(y.specularMap.channel),specularColorMapUv:fe&&g(y.specularColorMap.channel),specularIntensityMapUv:O&&g(y.specularIntensityMap.channel),transmissionMapUv:vt&&g(y.transmissionMap.channel),thicknessMapUv:q&&g(y.thicknessMap.channel),alphaMapUv:gt&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ut||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&($t||gt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:$t&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===De,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function M(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)E.push(F),E.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(p(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function T(y){let E=_[y.type],F;if(E){let I=Cn[E];F=cd.clone(I.uniforms)}else F=y.uniforms;return F}function b(y,E){let F;for(let I=0,U=h.length;I<U;I++){let z=h[I];if(z.cacheKey===E){F=z,++F.usedTimes;break}}return F===void 0&&(F=new gg(i,E,y,r),h.push(F)),F}function w(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:T,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:k}}function vg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,x,_,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,f,d,x,_,g){let m=o(u,f,d,x,_,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,x,_,g){let m=o(u,f,d,x,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||yg),n.length>1&&n.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new qh,i.set(n,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Eg=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tg(i){let t=new bg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new te,o=new te;function a(l){let h=0,u=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,x=0,_=0,g=0,m=0,M=0,p=0,v=0,T=0,b=0,w=0;l.sort(wg);for(let k=0,y=l.length;k<y;k++){let E=l[k],F=E.color,I=E.intensity,U=E.distance,z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=F.r*I,u+=F.g*I,f+=F.b*I;else if(E.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(E.sh.coefficients[N],I);w++}else if(E.isDirectionalLight){let N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,D=e.get(E);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,n.directionalShadow[d]=D,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=E.shadow.matrix,M++}n.directional[d]=N,d++}else if(E.isSpotLight){let N=t.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(F).multiplyScalar(I),N.distance=U,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,n.spot[_]=N;let G=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,G.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[_]=G.matrix,E.castShadow){let D=e.get(E);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=z,v++}_++}else if(E.isRectAreaLight){let N=t.get(E);N.color.copy(F).multiplyScalar(I),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=N,g++}else if(E.isPointLight){let N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){let G=E.shadow,D=e.get(E);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,D.shadowCameraNear=G.camera.near,D.shadowCameraFar=G.camera.far,n.pointShadow[x]=D,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=E.shadow.matrix,p++}n.point[x]=N,x++}else if(E.isHemisphereLight){let N=t.get(E);N.skyColor.copy(E.color).multiplyScalar(I),N.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[m]=N,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==x||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==p||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=v+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.directionalLength=d,R.pointLength=x,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=p,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=w,n.version=Eg++)}function c(l,h){let u=0,f=0,d=0,x=0,_=0,g=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let p=l[m];if(p.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(p.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(p.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(p.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(p.width*.5,0,0),v.halfHeight.set(0,p.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(p.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(g),f++}else if(p.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(p.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Yh(i){let t=new Tg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ag(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yh(i),t.set(s,[a])):r>=o.length?(a=new Yh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fc=class extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oc=class extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new Ws,s=new at,r=new at,o=new be,a=new Fc({depthPacking:Uf}),c=new Oc,l={},h=e.maxTextureSize,u={[oi]:We,[We]:oi,[De]:De},f=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Rg,fragmentShader:Cg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new de;x.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new mt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let m=this.type;this.render=function(b,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let k=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),F=i.state;F.setBlending(si),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let I=m!==zn&&this.type===zn,U=m===zn&&this.type!==zn;for(let z=0,N=b.length;z<N;z++){let G=b[z],D=G.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let Y=D.getFrameExtents();if(s.multiply(Y),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,D.mapSize.y=r.y)),D.map===null||I===!0||U===!0){let et=this.type!==zn?{minFilter:ve,magFilter:ve}:{};D.map!==null&&D.map.dispose(),D.map=new Tn(s.x,s.y,et),D.map.texture.name=G.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let Z=D.getViewportCount();for(let et=0;et<Z;et++){let pt=D.getViewport(et);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),F.viewport(o),D.updateMatrices(G,et),n=D.getFrustum(),v(w,R,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===zn&&M(D,R),D.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(k,y,E)};function M(b,w){let R=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,R,d,_,null)}function p(b,w,R,k){let y=null,E=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)y=E;else if(y=R.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=y.uuid,I=w.uuid,U=l[F];U===void 0&&(U={},l[F]=U);let z=U[I];z===void 0&&(z=y.clone(),U[I]=z,w.addEventListener("dispose",T)),y=z}if(y.visible=w.visible,y.wireframe=w.wireframe,k===zn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=i.properties.get(y);F.light=R}return y}function v(b,w,R,k,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let I=t.update(b),U=b.material;if(Array.isArray(U)){let z=I.groups;for(let N=0,G=z.length;N<G;N++){let D=z[N],Y=U[D.materialIndex];if(Y&&Y.visible){let Z=p(b,Y,k,y);b.onBeforeShadow(i,b,w,R,I,Z,D),i.renderBufferDirect(R,null,I,Z,b,D),b.onAfterShadow(i,b,w,R,I,Z,D)}}}else if(U.visible){let z=p(b,U,k,y);b.onBeforeShadow(i,b,w,R,I,z,null),i.renderBufferDirect(R,null,I,z,b,null),b.onAfterShadow(i,b,w,R,I,z,null)}}let F=b.children;for(let I=0,U=F.length;I<U;I++)v(F[I],w,R,k,y)}function T(b){b.target.removeEventListener("dispose",T);for(let R in l){let k=l[R],y=b.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}var Ig={[Ga]:Va,[Wa]:Ya,[Xa]:Za,[os]:qa,[Va]:Ga,[Ya]:Wa,[Za]:Xa,[qa]:os};function Lg(i){function t(){let O=!1,vt=new be,q=null,tt=new be(0,0,0,0);return{setMask:function(gt){q!==gt&&!O&&(i.colorMask(gt,gt,gt,gt),q=gt)},setLocked:function(gt){O=gt},setClear:function(gt,yt,ee,we,Ke){Ke===!0&&(gt*=we,yt*=we,ee*=we),vt.set(gt,yt,ee,we),tt.equals(vt)===!1&&(i.clearColor(gt,yt,ee,we),tt.copy(vt))},reset:function(){O=!1,q=null,tt.set(-1,0,0,0)}}}function e(){let O=!1,vt=!1,q=null,tt=null,gt=null;return{setReversed:function(yt){vt=yt},setTest:function(yt){yt?St(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(yt){q!==yt&&!O&&(i.depthMask(yt),q=yt)},setFunc:function(yt){if(vt&&(yt=Ig[yt]),tt!==yt){switch(yt){case Ga:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=yt}},setLocked:function(yt){O=yt},setClear:function(yt){gt!==yt&&(i.clearDepth(yt),gt=yt)},reset:function(){O=!1,q=null,tt=null,gt=null}}}function n(){let O=!1,vt=null,q=null,tt=null,gt=null,yt=null,ee=null,we=null,Ke=null;return{setTest:function(se){O||(se?St(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(se){vt!==se&&!O&&(i.stencilMask(se),vt=se)},setFunc:function(se,Je,Dn){(q!==se||tt!==Je||gt!==Dn)&&(i.stencilFunc(se,Je,Dn),q=se,tt=Je,gt=Dn)},setOp:function(se,Je,Dn){(yt!==se||ee!==Je||we!==Dn)&&(i.stencilOp(se,Je,Dn),yt=se,ee=Je,we=Dn)},setLocked:function(se){O=se},setClear:function(se){Ke!==se&&(i.clearStencil(se),Ke=se)},reset:function(){O=!1,vt=null,q=null,tt=null,gt=null,yt=null,ee=null,we=null,Ke=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,f=[],d=null,x=!1,_=null,g=null,m=null,M=null,p=null,v=null,T=null,b=new Tt(0,0,0),w=0,R=!1,k=null,y=null,E=null,F=null,I=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,N=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=N>=2);let D=null,Y={},Z=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),pt=new be().fromArray(Z),Dt=new be().fromArray(et);function $(O,vt,q,tt){let gt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(O,yt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<q;ee++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(vt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return yt}let nt={};nt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(i.DEPTH_TEST),r.setFunc(os),ct(!1),it(th),St(i.CULL_FACE),P(si);function St(O){l[O]!==!0&&(i.enable(O),l[O]=!0)}function ht(O){l[O]!==!1&&(i.disable(O),l[O]=!1)}function Ft(O,vt){return h[O]!==vt?(i.bindFramebuffer(O,vt),h[O]=vt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Bt(O,vt){let q=f,tt=!1;if(O){q=u.get(vt),q===void 0&&(q=[],u.set(vt,q));let gt=O.textures;if(q.length!==gt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,ee=gt.length;yt<ee;yt++)q[yt]=i.COLOR_ATTACHMENT0+yt;q.length=gt.length,tt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(q)}function Wt(O){return d!==O?(i.useProgram(O),d=O,!0):!1}let $t={[Mi]:i.FUNC_ADD,[of]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};$t[cf]=i.MIN,$t[lf]=i.MAX;let Q={[hf]:i.ZERO,[uf]:i.ONE,[ff]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[gf]:i.DST_COLOR,[pf]:i.DST_ALPHA,[df]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[mf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[yf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,vt,q,tt,gt,yt,ee,we,Ke,se){if(O===si){x===!0&&(ht(i.BLEND),x=!1);return}if(x===!1&&(St(i.BLEND),x=!0),O!==rf){if(O!==_||se!==R){if((g!==Mi||p!==Mi)&&(i.blendEquation(i.FUNC_ADD),g=Mi,p=Mi),se)switch(O){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,M=null,v=null,T=null,b.set(0,0,0),w=0,_=O,R=se}return}gt=gt||vt,yt=yt||q,ee=ee||tt,(vt!==g||gt!==p)&&(i.blendEquationSeparate($t[vt],$t[gt]),g=vt,p=gt),(q!==m||tt!==M||yt!==v||ee!==T)&&(i.blendFuncSeparate(Q[q],Q[tt],Q[yt],Q[ee]),m=q,M=tt,v=yt,T=ee),(we.equals(b)===!1||Ke!==w)&&(i.blendColor(we.r,we.g,we.b,Ke),b.copy(we),w=Ke),_=O,R=!1}function lt(O,vt){O.side===De?ht(i.CULL_FACE):St(i.CULL_FACE);let q=O.side===We;vt&&(q=!q),ct(q),O.blending===ns&&O.transparent===!1?P(si):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);let tt=O.stencilWrite;o.setTest(tt),tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){k!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),k=O)}function it(O){O!==ef?(St(i.CULL_FACE),O!==y&&(O===th?i.cullFace(i.BACK):O===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),y=O}function ut(O){O!==E&&(z&&i.lineWidth(O),E=O)}function Ut(O,vt,q){O?(St(i.POLYGON_OFFSET_FILL),(F!==vt||I!==q)&&(i.polygonOffset(vt,q),F=vt,I=q)):ht(i.POLYGON_OFFSET_FILL)}function _t(O){O?St(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function C(O){O===void 0&&(O=i.TEXTURE0+U-1),D!==O&&(i.activeTexture(O),D=O)}function S(O,vt,q){q===void 0&&(D===null?q=i.TEXTURE0+U-1:q=D);let tt=Y[q];tt===void 0&&(tt={type:void 0,texture:void 0},Y[q]=tt),(tt.type!==O||tt.texture!==vt)&&(D!==q&&(i.activeTexture(q),D=q),i.bindTexture(O,vt||nt[O]),tt.type=O,tt.texture=vt)}function V(){let O=Y[D];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(O){pt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),pt.copy(O))}function Et(O){Dt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Dt.copy(O))}function jt(O,vt){let q=c.get(vt);q===void 0&&(q=new WeakMap,c.set(vt,q));let tt=q.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(vt,O.name),q.set(O,tt))}function Xt(O,vt){let tt=c.get(vt).get(O);a.get(vt)!==tt&&(i.uniformBlockBinding(vt,tt,O.__bindingPointIndex),a.set(vt,tt))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},D=null,Y={},h={},u=new WeakMap,f=[],d=null,x=!1,_=null,g=null,m=null,M=null,p=null,v=null,T=null,b=new Tt(0,0,0),w=0,R=!1,k=null,y=null,E=null,F=null,I=null,pt.set(0,0,i.canvas.width,i.canvas.height),Dt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:St,disable:ht,bindFramebuffer:Ft,drawBuffers:Bt,useProgram:Wt,setBlending:P,setMaterial:lt,setFlipSided:ct,setCullFace:it,setLineWidth:ut,setPolygonOffset:Ut,setScissorTest:_t,activeTexture:C,bindTexture:S,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:bt,texImage3D:kt,updateUBOMapping:jt,uniformBlockBinding:Xt,texStorage2D:Qt,texStorage3D:st,texSubImage2D:J,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:Mt,scissor:Gt,viewport:Et,reset:fe}}function Zh(i,t,e,n){let s=Dg(n);switch(e){case pu:return i*t;case gu:return i*t;case xu:return i*t*2;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case _u:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case mu:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case ec:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case tc:return Math.max(i,8)*Math.max(t,8)/2;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yr:case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vu:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case Vn:case uu:return{byteLength:1,components:1};case Gs:case fu:case Di:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case Ti:case ul:case Pn:return{byteLength:4,components:1};case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ug(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return d?new OffscreenCanvas(C,S):eo("canvas")}function _(C,S,V){let K=1,j=_t(C);if((j.width>V||j.height>V)&&(K=V/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(K*j.width),At=Math.floor(K*j.height);u===void 0&&(u=x(J,At));let ft=S?x(J,At):u;return ft.width=J,ft.height=At,ft.getContext("2d").drawImage(C,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+At+")."),ft}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==ve&&C.minFilter!==En}function m(C){i.generateMipmap(C)}function M(C,S,V,K,j=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),S===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let At=j?Kr:ae.getTransfer(K);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=At===ge?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function p(C,S){let V;return C?S===null||S===Ti||S===ls?V=i.DEPTH24_STENCIL8:S===Pn?V=i.DEPTH32F_STENCIL8:S===Gs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===ls?V=i.DEPTH_COMPONENT24:S===Pn?V=i.DEPTH_COMPONENT32F:S===Gs&&(V=i.DEPTH_COMPONENT16),V}function v(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ve&&C.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){let S=C.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&h.delete(S)}function b(C){let S=C.target;S.removeEventListener("dispose",b),k(S)}function w(C){let S=n.get(C);if(S.__webglInit===void 0)return;let V=C.source,K=f.get(V);if(K){let j=K[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(C),Object.keys(K).length===0&&f.delete(V)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let V=C.source,K=f.get(V);delete K[S.__cacheKey],o.memory.textures--}function k(C){let S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let j=0;j<S.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[K][j]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=C.textures;for(let K=0,j=V.length;K<j;K++){let J=n.get(V[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(C)}let y=0;function E(){y=0}function F(){let C=y;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),y+=1,C}function I(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function U(C,S){let V=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(V,C,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function z(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Dt(V,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function N(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Dt(V,C,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function G(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){$(V,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let D={[ks]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},Y={[ve]:i.NEAREST,[Lf]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Z={[Ff]:i.NEVER,[Gf]:i.ALWAYS,[Of]:i.LESS,[yu]:i.LEQUAL,[Bf]:i.EQUAL,[kf]:i.GEQUAL,[zf]:i.GREATER,[Hf]:i.NOTEQUAL};function et(C,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===sa||S.magFilter===dr||S.magFilter===wi||S.minFilter===En||S.minFilter===sa||S.minFilter===dr||S.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,D[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,D[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,D[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Y[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ve||S.minFilter!==dr&&S.minFilter!==wi||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function pt(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));let K=S.source,j=f.get(K);j===void 0&&(j={},f.set(K,j));let J=I(S);if(J!==C.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[J].usedTimes++;let At=j[C.__cacheKey];At!==void 0&&(j[C.__cacheKey].usedTimes--,At.usedTimes===0&&R(S)),C.__cacheKey=J,C.__webglTexture=j[J].texture}return V}function Dt(C,S,V){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);let j=pt(C,S),J=S.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+V);let At=n.get(J);if(J.version!==At.__version||j===!0){e.activeTexture(i.TEXTURE0+V);let ft=ae.getPrimaries(ae.workingColorSpace),Mt=S.colorSpace===ii?null:ae.getPrimaries(S.colorSpace),Qt=S.colorSpace===ii||ft===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let st=_(S.image,!1,s.maxTextureSize);st=Ut(S,st);let bt=r.convert(S.format,S.colorSpace),kt=r.convert(S.type),Gt=M(S.internalFormat,bt,kt,S.colorSpace,S.isVideoTexture);et(K,S);let Et,jt=S.mipmaps,Xt=S.isVideoTexture!==!0,fe=At.__version===void 0||j===!0,O=J.dataReady,vt=v(S,st);if(S.isDepthTexture)Gt=p(S.format===hs,S.type),fe&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Gt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Gt,st.width,st.height,0,bt,kt,null));else if(S.isDataTexture)if(jt.length>0){Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,jt[0].width,jt[0].height);for(let q=0,tt=jt.length;q<tt;q++)Et=jt[q],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,kt,Et.data):e.texImage2D(i.TEXTURE_2D,q,Gt,Et.width,Et.height,0,bt,kt,Et.data);S.generateMipmaps=!1}else Xt?(fe&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,st.width,st.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,bt,kt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,st.width,st.height,0,bt,kt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,jt[0].width,jt[0].height,st.depth);for(let q=0,tt=jt.length;q<tt;q++)if(Et=jt[q],S.format!==wn)if(bt!==null)if(Xt){if(O)if(S.layerUpdates.size>0){let gt=Zh(Et.width,Et.height,S.format,S.type);for(let yt of S.layerUpdates){let ee=Et.data.subarray(yt*gt/Et.data.BYTES_PER_ELEMENT,(yt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,yt,Et.width,Et.height,1,bt,ee,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,st.depth,bt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Gt,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,st.depth,bt,kt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Gt,Et.width,Et.height,st.depth,0,bt,kt,Et.data)}else{Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,jt[0].width,jt[0].height);for(let q=0,tt=jt.length;q<tt;q++)Et=jt[q],S.format!==wn?bt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,kt,Et.data):e.texImage2D(i.TEXTURE_2D,q,Gt,Et.width,Et.height,0,bt,kt,Et.data)}else if(S.isDataArrayTexture)if(Xt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,st.width,st.height,st.depth),O)if(S.layerUpdates.size>0){let q=Zh(st.width,st.height,S.format,S.type);for(let tt of S.layerUpdates){let gt=st.data.subarray(tt*q/st.data.BYTES_PER_ELEMENT,(tt+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,bt,kt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,bt,kt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,st.width,st.height,st.depth,0,bt,kt,st.data);else if(S.isData3DTexture)Xt?(fe&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,st.width,st.height,st.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,bt,kt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,st.width,st.height,st.depth,0,bt,kt,st.data);else if(S.isFramebufferTexture){if(fe)if(Xt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,st.width,st.height);else{let q=st.width,tt=st.height;for(let gt=0;gt<vt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Gt,q,tt,0,bt,kt,null),q>>=1,tt>>=1}}else if(jt.length>0){if(Xt&&fe){let q=_t(jt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,q.width,q.height)}for(let q=0,tt=jt.length;q<tt;q++)Et=jt[q],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt,kt,Et):e.texImage2D(i.TEXTURE_2D,q,Gt,bt,kt,Et);S.generateMipmaps=!1}else if(Xt){if(fe){let q=_t(st);e.texStorage2D(i.TEXTURE_2D,vt,Gt,q.width,q.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,st)}else e.texImage2D(i.TEXTURE_2D,0,Gt,bt,kt,st);g(S)&&m(K),At.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,V){if(S.image.length!==6)return;let K=pt(C,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let J=n.get(j);if(j.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+V);let At=ae.getPrimaries(ae.workingColorSpace),ft=S.colorSpace===ii?null:ae.getPrimaries(S.colorSpace),Mt=S.colorSpace===ii||At===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,bt=[];for(let tt=0;tt<6;tt++)!Qt&&!st?bt[tt]=_(S.image[tt],!0,s.maxCubemapSize):bt[tt]=st?S.image[tt].image:S.image[tt],bt[tt]=Ut(S,bt[tt]);let kt=bt[0],Gt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),jt=M(S.internalFormat,Gt,Et,S.colorSpace),Xt=S.isVideoTexture!==!0,fe=J.__version===void 0||K===!0,O=j.dataReady,vt=v(S,kt);et(i.TEXTURE_CUBE_MAP,S);let q;if(Qt){Xt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,jt,kt.width,kt.height);for(let tt=0;tt<6;tt++){q=bt[tt].mipmaps;for(let gt=0;gt<q.length;gt++){let yt=q[gt];S.format!==wn?Gt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,yt.width,yt.height,Gt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,jt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,yt.width,yt.height,Gt,Et,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,jt,yt.width,yt.height,0,Gt,Et,yt.data)}}}else{if(q=S.mipmaps,Xt&&fe){q.length>0&&vt++;let tt=_t(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt[tt].width,bt[tt].height,Gt,Et,bt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,bt[tt].width,bt[tt].height,0,Gt,Et,bt[tt].data);for(let gt=0;gt<q.length;gt++){let ee=q[gt].image[tt].image;Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,ee.width,ee.height,Gt,Et,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,jt,ee.width,ee.height,0,Gt,Et,ee.data)}}else{Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,Et,bt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,Gt,Et,bt[tt]);for(let gt=0;gt<q.length;gt++){let yt=q[gt];Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Gt,Et,yt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,jt,Gt,Et,yt.image[tt])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),J.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function nt(C,S,V,K,j,J){let At=r.convert(V.format,V.colorSpace),ft=r.convert(V.type),Mt=M(V.internalFormat,At,ft,V.colorSpace);if(!n.get(S).__hasExternalTextures){let st=Math.max(1,S.width>>J),bt=Math.max(1,S.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,J,Mt,st,bt,S.depth,0,At,ft,null):e.texImage2D(j,J,Mt,st,bt,0,At,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,n.get(V).__webglTexture,0,ct(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,n.get(V).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let K=S.depthTexture,j=K&&K.isDepthTexture?K.type:null,J=p(S.stencilBuffer,j),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ct(S);it(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,J,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,C)}else{let K=S.textures;for(let j=0;j<K.length;j++){let J=K[j],At=r.convert(J.format,J.colorSpace),ft=r.convert(J.type),Mt=M(J.internalFormat,At,ft,J.colorSpace),Qt=ct(S);V&&it(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Mt,S.width,S.height):it(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);let K=n.get(S.depthTexture).__webglTexture,j=ct(S);if(S.depthTexture.format===is)it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===hs)it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ft(C){let S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),St(S.__webglDepthbuffer[K],C,!1);else{let j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),St(S.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,S,V){let K=n.get(C);S!==void 0&&nt(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ft(C)}function Wt(C){let S=C.texture,V=n.get(C),K=n.get(S);C.addEventListener("dispose",b);let j=C.textures,J=C.isWebGLCubeRenderTarget===!0,At=j.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)V.__webglFramebuffer[ft][Mt]=i.createFramebuffer()}else V.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)V.__webglFramebuffer[ft]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(At)for(let ft=0,Mt=j.length;ft<Mt;ft++){let Qt=n.get(j[ft]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&it(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<j.length;ft++){let Mt=j[ft];V.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);let Qt=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),bt=M(Mt.internalFormat,Qt,st,Mt.colorSpace,C.isXRRenderTarget===!0),kt=ct(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),St(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),et(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)nt(V.__webglFramebuffer[ft][Mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else nt(V.__webglFramebuffer[ft],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,Mt=j.length;ft<Mt;ft++){let Qt=j[ft],st=n.get(Qt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),et(i.TEXTURE_2D,Qt),nt(V.__webglFramebuffer,C,Qt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(Qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),et(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)nt(V.__webglFramebuffer[Mt],C,S,i.COLOR_ATTACHMENT0,ft,Mt);else nt(V.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ft,0);g(S)&&m(ft),e.unbindTexture()}C.depthBuffer&&Ft(C)}function $t(C){let S=C.textures;for(let V=0,K=S.length;V<K;V++){let j=S[V];if(g(j)){let J=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(j).__webglTexture;e.bindTexture(J,At),m(J),e.unbindTexture()}}}let Q=[],P=[];function lt(C){if(C.samples>0){if(it(C)===!1){let S=C.textures,V=C.width,K=C.height,j=i.COLOR_BUFFER_BIT,J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(C),ft=S.length>1;if(ft)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);let Qt=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,j,i.NEAREST),c===!0&&(Q.length=0,P.length=0,Q.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Q.push(J),P.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);let Qt=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ct(C){return Math.min(s.maxSamples,C.samples)}function it(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ut(C,S){let V=C.colorSpace,K=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==li&&V!==ii&&(ae.getTransfer(V)===ge?(K!==wn||j!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function _t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=it}function Ng(i,t){function e(n,s=ii){let r,o=ae.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===fu)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===wn)return i.RGBA;if(n===gu)return i.LUMINANCE;if(n===xu)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ja||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===vc||n===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===Mc||n===bc||n===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bc=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Be=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ue({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,_=new zc,g=e.getContextAttributes(),m=null,M=null,p=[],v=[],T=new at,b=null,w=new Ve;w.layers.enable(1),w.viewport=new be;let R=new Ve;R.layers.enable(2),R.viewport=new be;let k=[w,R],y=new Bc;y.layers.enable(1),y.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=p[$];return nt===void 0&&(nt=new Os,p[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=p[$];return nt===void 0&&(nt=new Os,p[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=p[$];return nt===void 0&&(nt=new Os,p[$]=nt),nt.getHandSpace()};function I($){let nt=v.indexOf($.inputSource);if(nt===-1)return;let St=p[nt];St!==void 0&&(St.update($.inputSource,$.frame,l||o),St.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let $=0;$<p.length;$++){let nt=v[$];nt!==null&&(v[$]=null,p[$].disconnect(nt))}E=null,F=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,M=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Tn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,St=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?hs:is,St=g.stencil?ls:Ti);let Ft={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Tn(f.textureWidth,f.textureHeight,{format:wn,type:Vn,depthTexture:new lo(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z($){for(let nt=0;nt<$.removed.length;nt++){let St=$.removed[nt],ht=v.indexOf(St);ht>=0&&(v[ht]=null,p[ht].disconnect(St))}for(let nt=0;nt<$.added.length;nt++){let St=$.added[nt],ht=v.indexOf(St);if(ht===-1){for(let Bt=0;Bt<p.length;Bt++)if(Bt>=v.length){v.push(St),ht=Bt;break}else if(v[Bt]===null){v[Bt]=St,ht=Bt;break}if(ht===-1)break}let Ft=p[ht];Ft&&Ft.connect(St)}}let N=new L,G=new L;function D($,nt,St){N.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(St.matrixWorld);let ht=N.distanceTo(G),Ft=nt.projectionMatrix.elements,Bt=St.projectionMatrix.elements,Wt=Ft[14]/(Ft[10]-1),$t=Ft[14]/(Ft[10]+1),Q=(Ft[9]+1)/Ft[5],P=(Ft[9]-1)/Ft[5],lt=(Ft[8]-1)/Ft[0],ct=(Bt[8]+1)/Bt[0],it=Wt*lt,ut=Wt*ct,Ut=ht/(-lt+ct),_t=Ut*-lt;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_t),$.translateZ(Ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let C=Wt+Ut,S=$t+Ut,V=it-_t,K=ut+(ht-_t),j=Q*$t/S*C,J=P*$t/S*C;$.projectionMatrix.makePerspective(V,K,j,J,C,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,St=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),y.near=R.near=w.near=nt,y.far=R.far=w.far=St,(E!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,F=y.far);let ht=$.parent,Ft=y.cameras;Y(y,ht);for(let Bt=0;Bt<Ft.length;Bt++)Y(Ft[Bt],ht);Ft.length===2?D(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),Z($,y,ht)};function Z($,nt,St){St===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=to*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let et=null;function pt($,nt){if(h=nt.getViewerPose(l||o),x=nt,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ht=!1;St.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Bt=0;Bt<St.length;Bt++){let Wt=St[Bt],$t=null;if(d!==null)$t=d.getViewport(Wt);else{let P=u.getViewSubImage(f,Wt);$t=P.viewport,Bt===0&&(t.setRenderTargetTextures(M,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let Q=k[Bt];Q===void 0&&(Q=new Ve,Q.layers.enable(Bt),Q.viewport=new be,k[Bt]=Q),Q.matrix.fromArray(Wt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Wt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set($t.x,$t.y,$t.width,$t.height),Bt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(Q)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let St=0;St<p.length;St++){let ht=v[St],Ft=p[St];ht!==null&&Ft!==void 0&&Ft.update(ht,nt,l||o)}et&&et($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),x=null}let Dt=new Eu;Dt.setAnimationLoop(pt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}},vi=new qe,zg=new te;function Hg(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Su(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,p,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,M,p):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===We&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===We&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),p=M.envMap,v=M.envMapRotation;p&&(g.envMap.value=p,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(vi)),g.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,p){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=p*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,p){let v=p.program;n.uniformBlockBinding(M,v)}function l(M,p){let v=s[M.id];v===void 0&&(x(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));let T=p.program;n.updateUBOMapping(M,T);let b=t.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){let p=u();M.__bindingPointIndex=p;let v=i.createBuffer(),T=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let p=s[M.id],v=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let b=0,w=v.length;b<w;b++){let R=Array.isArray(v[b])?v[b]:[v[b]];for(let k=0,y=R.length;k<y;k++){let E=R[k];if(d(E,b,k,T)===!0){let F=E.__offset,I=Array.isArray(E.value)?E.value:[E.value],U=0;for(let z=0;z<I.length;z++){let N=I[z],G=_(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,F+U,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,p,v,T){let b=M.value,w=p+"_"+v;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{let R=T[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[w]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function x(M){let p=M.uniforms,v=0,T=16;for(let w=0,R=p.length;w<R;w++){let k=Array.isArray(p[w])?p[w]:[p[w]];for(let y=0,E=k.length;y<E;y++){let F=k[y],I=Array.isArray(F.value)?F.value:[F.value];for(let U=0,z=I.length;U<z;U++){let N=I[U],G=_(N),D=v%T,Y=D%G.boundary,Z=D+Y;v+=Y,Z!==0&&T-Z<G.storage&&(v+=T-Z),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=G.storage}}}let b=v%T;return b>0&&(v+=T-b),M.__size=v,M.__cache={},this}function _(M){let p={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(p.boundary=4,p.storage=4):M.isVector2?(p.boundary=8,p.storage=8):M.isVector3||M.isColor?(p.boundary=16,p.storage=12):M.isVector4?(p.boundary=16,p.storage=16):M.isMatrix3?(p.boundary=48,p.storage=48):M.isMatrix4?(p.boundary=64,p.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),p}function g(M){let p=M.target;p.removeEventListener("dispose",g);let v=o.indexOf(p.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[p.id]),delete s[p.id],delete r[p.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ho=class{constructor(t={}){let{canvas:e=Wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),x=new Int32Array(4),_=null,g=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=ri,this.toneMappingExposure=1;let p=this,v=!1,T=0,b=0,w=null,R=-1,k=null,y=new be,E=new be,F=null,I=new Tt(0),U=0,z=e.width,N=e.height,G=1,D=null,Y=null,Z=new be(0,0,z,N),et=new be(0,0,z,N),pt=!1,Dt=new Ws,$=!1,nt=!1,St=new te,ht=new te,Ft=new L,Bt=new be,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function Q(){return w===null?G:1}let P=n;function lt(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),P===null){let B="webgl2";if(P=lt(B,A),P===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,it,ut,Ut,_t,C,S,V,K,j,J,At,ft,Mt,Qt,st,bt,kt,Gt,Et,jt,Xt,fe,O;function vt(){ct=new i0(P),ct.init(),Xt=new Ng(P,ct),it=new Jm(P,ct,t,Xt),ut=new Lg(P),it.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),Ut=new o0(P),_t=new vg,C=new Ug(P,ct,ut,_t,it,Xt,Ut),S=new jm(p),V=new n0(p),K=new dd(P),fe=new $m(P,K),j=new s0(P,K,Ut,fe),J=new c0(P,j,K,Ut),Gt=new a0(P,it,C),st=new Qm(_t),At=new _g(p,S,V,ct,it,fe,st),ft=new Hg(p,_t),Mt=new Mg,Qt=new Ag(ct),kt=new Zm(p,S,V,ut,J,f,c),bt=new Pg(p,J,it),O=new kg(P,Ut,it,ut),Et=new Km(P,ct,Ut),jt=new r0(P,ct,Ut),Ut.programs=At.programs,p.capabilities=it,p.extensions=ct,p.properties=_t,p.renderLists=Mt,p.shadowMap=bt,p.state=ut,p.info=Ut}vt();let q=new Hc(p,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(z,N,!1))},this.getSize=function(A){return A.set(z,N)},this.setSize=function(A,B,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,N=B,e.width=Math.floor(A*G),e.height=Math.floor(B*G),W===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(z*G,N*G).floor()},this.setDrawingBufferSize=function(A,B,W){z=A,N=B,G=W,e.width=Math.floor(A*W),e.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,B,W,X){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,B,W,X),ut.viewport(y.copy(Z).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,B,W,X){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,B,W,X),ut.scissor(E.copy(et).multiplyScalar(G).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){ut.setScissorTest(pt=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(A=!0,B=!0,W=!0){let X=0;if(A){let H=!1;if(w!==null){let ot=w.texture.format;H=ot===xl||ot===gl||ot===ml}if(H){let ot=w.texture.type,xt=ot===Vn||ot===Ti||ot===Gs||ot===ls||ot===fl||ot===dl,wt=kt.getClearColor(),Rt=kt.getClearAlpha(),zt=wt.r,Ht=wt.g,Pt=wt.b;xt?(d[0]=zt,d[1]=Ht,d[2]=Pt,d[3]=Rt,P.clearBufferuiv(P.COLOR,0,d)):(x[0]=zt,x[1]=Ht,x[2]=Pt,x[3]=Rt,P.clearBufferiv(P.COLOR,0,x))}else X|=P.COLOR_BUFFER_BIT}B&&(X|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Mt.dispose(),Qt.dispose(),_t.dispose(),S.dispose(),V.dispose(),J.dispose(),fe.dispose(),O.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",ql),q.removeEventListener("sessionend",Yl),di.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let A=Ut.autoReset,B=bt.enabled,W=bt.autoUpdate,X=bt.needsUpdate,H=bt.type;vt(),Ut.autoReset=A,bt.enabled=B,bt.autoUpdate=W,bt.needsUpdate=X,bt.type=H}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){let B=A.target;B.removeEventListener("dispose",ee),we(B)}function we(A){Ke(A),_t.remove(A)}function Ke(A){let B=_t.get(A).programs;B!==void 0&&(B.forEach(function(W){At.releaseProgram(W)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,X,H,ot){B===null&&(B=Wt);let xt=H.isMesh&&H.matrixWorld.determinant()<0,wt=Ju(A,B,W,X,H);ut.setMaterial(X,xt);let Rt=W.index,zt=1;if(X.wireframe===!0){if(Rt=j.getWireframeAttribute(W),Rt===void 0)return;zt=2}let Ht=W.drawRange,Pt=W.attributes.position,ce=Ht.start*zt,me=(Ht.start+Ht.count)*zt;ot!==null&&(ce=Math.max(ce,ot.start*zt),me=Math.min(me,(ot.start+ot.count)*zt)),Rt!==null?(ce=Math.max(ce,0),me=Math.min(me,Rt.count)):Pt!=null&&(ce=Math.max(ce,0),me=Math.min(me,Pt.count));let Me=me-ce;if(Me<0||Me===1/0)return;fe.setup(H,X,wt,W,Rt);let on,re=Et;if(Rt!==null&&(on=K.get(Rt),re=jt,re.setIndex(on)),H.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*Q()),re.setMode(P.LINES)):re.setMode(P.TRIANGLES);else if(H.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),ut.setLineWidth(Nt*Q()),H.isLineSegments?re.setMode(P.LINES):H.isLineLoop?re.setMode(P.LINE_LOOP):re.setMode(P.LINE_STRIP)}else H.isPoints?re.setMode(P.POINTS):H.isSprite&&re.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)re.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))re.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Nt=H._multiDrawStarts,Fe=H._multiDrawCounts,oe=H._multiDrawCount,yn=Rt?K.get(Rt).bytesPerElement:1,Bi=_t.get(X).currentProgram.getUniforms();for(let an=0;an<oe;an++)Bi.setValue(P,"_gl_DrawID",an),re.render(Nt[an]/yn,Fe[an])}else if(H.isInstancedMesh)re.renderInstances(ce,Me,H.count);else if(W.isInstancedBufferGeometry){let Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fe=Math.min(W.instanceCount,Nt);re.renderInstances(ce,Me,Fe)}else re.render(ce,Me)};function se(A,B,W){A.transparent===!0&&A.side===De&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,fr(A,B,W),A.side=oi,A.needsUpdate=!0,fr(A,B,W),A.side=De):fr(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),g=Qt.get(W),g.init(B),M.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();let X=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ot=H.material;if(ot)if(Array.isArray(ot))for(let xt=0;xt<ot.length;xt++){let wt=ot[xt];se(wt,W,H),X.add(wt)}else se(ot,W,H),X.add(ot)}),M.pop(),g=null,X},this.compileAsync=function(A,B,W=null){let X=this.compile(A,B,W);return new Promise(H=>{function ot(){if(X.forEach(function(xt){_t.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){H(A);return}setTimeout(ot,10)}ct.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Je=null;function Dn(A){Je&&Je(A)}function ql(){di.stop()}function Yl(){di.start()}let di=new Eu;di.setAnimationLoop(Dn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(A){Je=A,q.setAnimationLoop(A),A===null?di.stop():di.start()},q.addEventListener("sessionstart",ql),q.addEventListener("sessionend",Yl),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,B,w),g=Qt.get(A,M.length),g.init(B),M.push(g),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Dt.setFromProjectionMatrix(ht),nt=this.localClippingEnabled,$=st.init(this.clippingPlanes,nt),_=Mt.get(A,m.length),_.init(),m.push(_),q.enabled===!0&&q.isPresenting===!0){let ot=p.xr.getDepthSensingMesh();ot!==null&&ta(ot,B,-1/0,p.sortObjects)}ta(A,B,0,p.sortObjects),_.finish(),p.sortObjects===!0&&_.sort(D,Y),$t=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$t&&kt.addToRenderList(_,A),this.info.render.frame++,$===!0&&st.beginShadows();let W=g.state.shadowsArray;bt.render(W,A,B),$===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=_.opaque,H=_.transmissive;if(g.setupLights(),B.isArrayCamera){let ot=B.cameras;if(H.length>0)for(let xt=0,wt=ot.length;xt<wt;xt++){let Rt=ot[xt];$l(X,H,A,Rt)}$t&&kt.render(A);for(let xt=0,wt=ot.length;xt<wt;xt++){let Rt=ot[xt];Zl(_,A,Rt,Rt.viewport)}}else H.length>0&&$l(X,H,A,B),$t&&kt.render(A),Zl(_,A,B);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(p,A,B),fe.resetDefaultState(),R=-1,k=null,M.pop(),M.length>0?(g=M[M.length-1],$===!0&&st.setGlobalState(p.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ta(A,B,W,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Dt.intersectsSprite(A)){X&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ht);let xt=J.update(A),wt=A.material;wt.visible&&_.push(A,xt,wt,W,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Dt.intersectsObject(A))){let xt=J.update(A),wt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Bt.copy(xt.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){let Rt=xt.groups;for(let zt=0,Ht=Rt.length;zt<Ht;zt++){let Pt=Rt[zt],ce=wt[Pt.materialIndex];ce&&ce.visible&&_.push(A,xt,ce,W,Bt.z,Pt)}}else wt.visible&&_.push(A,xt,wt,W,Bt.z,null)}}let ot=A.children;for(let xt=0,wt=ot.length;xt<wt;xt++)ta(ot[xt],B,W,X)}function Zl(A,B,W,X){let H=A.opaque,ot=A.transmissive,xt=A.transparent;g.setupLightsView(W),$===!0&&st.setGlobalState(p.clippingPlanes,W),X&&ut.viewport(y.copy(X)),H.length>0&&ur(H,B,W),ot.length>0&&ur(ot,B,W),xt.length>0&&ur(xt,B,W),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function $l(A,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new Tn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Di:Vn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ot=g.state.transmissionRenderTarget[X.id],xt=X.viewport||y;ot.setSize(xt.z,xt.w);let wt=p.getRenderTarget();p.setRenderTarget(ot),p.getClearColor(I),U=p.getClearAlpha(),U<1&&p.setClearColor(16777215,.5),p.clear(),$t&&kt.render(W);let Rt=p.toneMapping;p.toneMapping=ri;let zt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),$===!0&&st.setGlobalState(p.clippingPlanes,X),ur(A,W,X),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Pt=0,ce=B.length;Pt<ce;Pt++){let me=B[Pt],Me=me.object,on=me.geometry,re=me.material,Nt=me.group;if(re.side===De&&Me.layers.test(X.layers)){let Fe=re.side;re.side=We,re.needsUpdate=!0,Kl(Me,W,X,on,re,Nt),re.side=Fe,re.needsUpdate=!0,Ht=!0}}Ht===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}p.setRenderTarget(wt),p.setClearColor(I,U),zt!==void 0&&(X.viewport=zt),p.toneMapping=Rt}function ur(A,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ot=A.length;H<ot;H++){let xt=A[H],wt=xt.object,Rt=xt.geometry,zt=X===null?xt.material:X,Ht=xt.group;wt.layers.test(W.layers)&&Kl(wt,B,W,Rt,zt,Ht)}}function Kl(A,B,W,X,H,ot){A.onBeforeRender(p,B,W,X,H,ot),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(p,B,W,X,A,ot),H.transparent===!0&&H.side===De&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,p.renderBufferDirect(W,B,X,H,A,ot),H.side=oi,H.needsUpdate=!0,p.renderBufferDirect(W,B,X,H,A,ot),H.side=De):p.renderBufferDirect(W,B,X,H,A,ot),A.onAfterRender(p,B,W,X,H,ot)}function fr(A,B,W){B.isScene!==!0&&(B=Wt);let X=_t.get(A),H=g.state.lights,ot=g.state.shadowsArray,xt=H.state.version,wt=At.getParameters(A,H.state,ot,B,W),Rt=At.getProgramCacheKey(wt),zt=X.programs;X.environment=A.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(A.isMeshStandardMaterial?V:S).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",ee),zt=new Map,X.programs=zt);let Ht=zt.get(Rt);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===xt)return Ql(A,wt),Ht}else wt.uniforms=At.getUniforms(A),A.onBeforeCompile(wt,p),Ht=At.acquireProgram(wt,Rt),zt.set(Rt,Ht),X.uniforms=wt.uniforms;let Pt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Ql(A,wt),X.needsLights=ju(A),X.lightsStateVersion=xt,X.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.directionalShadowMap.value=H.state.directionalShadowMap,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotShadowMap.value=H.state.spotShadowMap,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMap.value=H.state.pointShadowMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function Jl(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=rs.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Ql(A,B){let W=_t.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Ju(A,B,W,X,H){B.isScene!==!0&&(B=Wt),C.resetTextureUnits();let ot=B.fog,xt=X.isMeshStandardMaterial?B.environment:null,wt=w===null?p.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:li,Rt=(X.isMeshStandardMaterial?V:S).get(X.envMap||xt),zt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,ce=!!W.morphAttributes.normal,me=!!W.morphAttributes.color,Me=ri;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Me=p.toneMapping);let on=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=on!==void 0?on.length:0,Nt=_t.get(X),Fe=g.state.lights;if($===!0&&(nt===!0||A!==k)){let mn=A===k&&X.id===R;st.setState(X,A,mn)}let oe=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Fe.state.version||Nt.outputColorSpace!==wt||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Rt||X.fog===!0&&Nt.fog!==ot||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==st.numPlanes||Nt.numIntersection!==st.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Pt||Nt.morphNormals!==ce||Nt.morphColors!==me||Nt.toneMapping!==Me||Nt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Nt.__version=X.version);let yn=Nt.currentProgram;oe===!0&&(yn=fr(X,B,H));let Bi=!1,an=!1,ea=!1,Ee=yn.getUniforms(),Kn=Nt.uniforms;if(ut.useProgram(yn.program)&&(Bi=!0,an=!0,ea=!0),X.id!==R&&(R=X.id,an=!0),Bi||k!==A){it.reverseDepthBuffer?(St.copy(A.projectionMatrix),qf(St),Yf(St),Ee.setValue(P,"projectionMatrix",St)):Ee.setValue(P,"projectionMatrix",A.projectionMatrix),Ee.setValue(P,"viewMatrix",A.matrixWorldInverse);let mn=Ee.map.cameraPosition;mn!==void 0&&mn.setValue(P,Ft.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,an=!0,ea=!0)}if(H.isSkinnedMesh){Ee.setOptional(P,H,"bindMatrix"),Ee.setOptional(P,H,"bindMatrixInverse");let mn=H.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ee.setValue(P,"boneTexture",mn.boneTexture,C))}H.isBatchedMesh&&(Ee.setOptional(P,H,"batchingTexture"),Ee.setValue(P,"batchingTexture",H._matricesTexture,C),Ee.setOptional(P,H,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",H._indirectTexture,C),Ee.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",H._colorsTexture,C));let na=W.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&Gt.update(H,W,yn),(an||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,Ee.setValue(P,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Kn.envMap.value=Rt,Kn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Kn.envMapIntensity.value=B.environmentIntensity),an&&(Ee.setValue(P,"toneMappingExposure",p.toneMappingExposure),Nt.needsLights&&Qu(Kn,ea),ot&&X.fog===!0&&ft.refreshFogUniforms(Kn,ot),ft.refreshMaterialUniforms(Kn,X,G,N,g.state.transmissionRenderTarget[A.id]),rs.upload(P,Jl(Nt),Kn,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(rs.upload(P,Jl(Nt),Kn,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(P,"center",H.center),Ee.setValue(P,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(P,"normalMatrix",H.normalMatrix),Ee.setValue(P,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let mn=X.uniformsGroups;for(let ia=0,tf=mn.length;ia<tf;ia++){let jl=mn[ia];O.update(jl,yn),O.bind(jl,yn)}}return yn}function Qu(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ju(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,B,W){_t.get(A.texture).__webglTexture=B,_t.get(A.depthTexture).__webglTexture=W;let X=_t.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let W=_t.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){w=A,T=B,b=W;let X=!0,H=null,ot=!1,xt=!1;if(A){let Rt=_t.get(A);if(Rt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(Rt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Rt.__hasExternalTextures)C.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pt=A.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&_t.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(xt=!0);let Ht=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?H=Ht[B][W]:H=Ht[B],ot=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?H=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[W]:H=Ht,y.copy(A.viewport),E.copy(A.scissor),F=A.scissorTest}else y.copy(Z).multiplyScalar(G).floor(),E.copy(et).multiplyScalar(G).floor(),F=pt;if(ut.bindFramebuffer(P.FRAMEBUFFER,H)&&X&&ut.drawBuffers(A,H),ut.viewport(y),ut.scissor(E),ut.setScissorTest(F),ot){let Rt=_t.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Rt.__webglTexture,W)}else if(xt){let Rt=_t.get(A.texture),zt=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,W||0,zt)}R=-1},this.readRenderTargetPixels=function(A,B,W,X,H,ot,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){ut.bindFramebuffer(P.FRAMEBUFFER,wt);try{let Rt=A.texture,zt=Rt.format,Ht=Rt.type;if(!it.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&W>=0&&W<=A.height-H&&P.readPixels(B,W,X,H,Xt.convert(zt),Xt.convert(Ht),ot)}finally{let Rt=w!==null?_t.get(w).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,B,W,X,H,ot,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){let Rt=A.texture,zt=Rt.format,Ht=Rt.type;if(!it.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-X&&W>=0&&W<=A.height-H){ut.bindFramebuffer(P.FRAMEBUFFER,wt);let Pt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(B,W,X,H,Xt.convert(zt),Xt.convert(Ht),0);let ce=w!==null?_t.get(w).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,ce);let me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Xf(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(Pt),P.deleteSync(me),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,W=0){A.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let X=Math.pow(2,-W),H=Math.floor(A.image.width*X),ot=Math.floor(A.image.height*X),xt=B!==null?B.x:0,wt=B!==null?B.y:0;C.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,xt,wt,H,ot),ut.unbindTexture()},this.copyTextureToTexture=function(A,B,W=null,X=null,H=0){A.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],B=arguments[2],H=arguments[3]||0,W=null);let ot,xt,wt,Rt,zt,Ht;W!==null?(ot=W.max.x-W.min.x,xt=W.max.y-W.min.y,wt=W.min.x,Rt=W.min.y):(ot=A.image.width,xt=A.image.height,wt=0,Rt=0),X!==null?(zt=X.x,Ht=X.y):(zt=0,Ht=0);let Pt=Xt.convert(B.format),ce=Xt.convert(B.type);C.setTexture2D(B,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let me=P.getParameter(P.UNPACK_ROW_LENGTH),Me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),re=P.getParameter(P.UNPACK_SKIP_ROWS),Nt=P.getParameter(P.UNPACK_SKIP_IMAGES),Fe=A.isCompressedTexture?A.mipmaps[H]:A.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rt),A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,zt,Ht,ot,xt,Pt,ce,Fe.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,zt,Ht,Fe.width,Fe.height,Pt,Fe.data):P.texSubImage2D(P.TEXTURE_2D,H,zt,Ht,ot,xt,Pt,ce,Fe),P.pixelStorei(P.UNPACK_ROW_LENGTH,me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Nt),H===0&&B.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W=null,X=null,H=0){A.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],B=arguments[3],H=arguments[4]||0);let ot,xt,wt,Rt,zt,Ht,Pt,ce,me,Me=A.isCompressedTexture?A.mipmaps[H]:A.image;W!==null?(ot=W.max.x-W.min.x,xt=W.max.y-W.min.y,wt=W.max.z-W.min.z,Rt=W.min.x,zt=W.min.y,Ht=W.min.z):(ot=Me.width,xt=Me.height,wt=Me.depth,Rt=0,zt=0,Ht=0),X!==null?(Pt=X.x,ce=X.y,me=X.z):(Pt=0,ce=0,me=0);let on=Xt.convert(B.format),re=Xt.convert(B.type),Nt;if(B.isData3DTexture)C.setTexture3D(B,0),Nt=P.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),Nt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Fe=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),Bi=P.getParameter(P.UNPACK_SKIP_ROWS),an=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ht),A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Nt,H,Pt,ce,me,ot,xt,wt,on,re,Me.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Nt,H,Pt,ce,me,ot,xt,wt,on,Me.data):P.texSubImage3D(Nt,H,Pt,ce,me,ot,xt,wt,on,re,Me),P.pixelStorei(P.UNPACK_ROW_LENGTH,Fe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,an),H===0&&B.generateMipmaps&&P.generateMipmap(Nt),ut.unbindTexture()},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){T=0,b=0,w=null,ut.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===vl?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Uo?"display-p3":"srgb"}},uo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ps=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var kc=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ve,h=ve,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new te,$h=new te,Ur=[],Kh=new Wn,Gg=new te,Ds=new mt,Us=new Xn,Ye=class extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Kh.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(Kh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Us.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),$h.multiplyMatrices(n,ji),Ds.matrixWorld=$h,Ds.raycast(t,Ur);for(let o=0,a=Ur.length;o<a;o++){let c=Ur[o];c.instanceId=r,c.object=this,e.push(c)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(s*this.count),s,this.count,pl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qs=class extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fo=new L,po=new L,Jh=new te,Ns=new Vs,Nr=new Xn,Na=new L,Qh=new L,Gc=class extends Re{constructor(t=new de,e=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fo.fromBufferAttribute(e,s-1),po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fo.distanceTo(po);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Jh.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(Jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=d,g=x-1;_<g;_+=l){let m=h.getX(_),M=h.getX(_+1),p=Fr(this,t,Ns,c,m,M);p&&e.push(p)}if(this.isLineLoop){let _=h.getX(x-1),g=h.getX(d),m=Fr(this,t,Ns,c,_,g);m&&e.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=d,g=x-1;_<g;_+=l){let m=Fr(this,t,Ns,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=Fr(this,t,Ns,c,x-1,d);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(fo.fromBufferAttribute(o,s),po.fromBufferAttribute(o,r),e.distanceSqToSegment(fo,po,Na,Qh)>n)return;Na.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Na);if(!(c<t.near||c>t.far))return{distance:c,point:Qh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var jh=new L,tu=new L,mo=class extends Gc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jh.fromBufferAttribute(e,s),tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jh.distanceTo(tu);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vc=class extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eu=new te,Wc=new Vs,Or=new Xn,Br=new L,go=class extends Re{constructor(t=new de,e=new Vc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;eu.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,_=d;x<_;x++){let g=l.getX(x);Br.fromBufferAttribute(u,g),nu(Br,g,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,_=d;x<_;x++)Br.fromBufferAttribute(u,x),nu(Br,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nu(i,t,e,n,s,r,o){let a=Wc.distanceSqToPoint(i);if(a<e){let c=new L;Wc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ln=class extends je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new te;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ys=class extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xc=class extends Ys{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var zr=new L,Fa=new Ml,Oa=new Ml,Ba=new Ml,Zs=class extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),l=zr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),Fa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,_,g),Oa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,_,g),Ba.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,_,g)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Oa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ba.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Fa.calc(c),Oa.calc(c),Ba.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function iu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Vg(i,t){let e=1-i;return e*e*t}function Wg(i,t){return 2*(1-i)*i*t}function Xg(i,t){return i*i*t}function Bs(i,t,e,n){return Vg(i,t)+Wg(i,e)+Xg(i,n)}function qg(i,t){let e=1-i;return e*e*e*t}function Yg(i,t){let e=1-i;return 3*e*e*i*t}function Zg(i,t){return 3*(1-i)*i*i*t}function $g(i,t){return i*i*i*t}function zs(i,t,e,n,s){return qg(i,t)+Yg(i,e)+Zg(i,n)+$g(i,s)}var xo=class extends xn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qc=class extends xn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends xn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends xn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends xn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends xn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y),Bs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(iu(a,c.x,l.x,h.x,u.x),iu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},bo=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:Zs,CubicBezierCurve:xo,CubicBezierCurve3:qc,EllipseCurve:Ys,LineCurve:_o,LineCurve3:Yc,QuadraticBezierCurve:vo,QuadraticBezierCurve3:yo,SplineCurve:Mo}),Zc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bo[s.type]().fromJSON(s))}return this}},So=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new _o(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new vo(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new xo(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Mo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ys(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Eo=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ie=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],g=n/2,m=0;M(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function M(){let v=new L,T=new L,b=0,w=(e-t)/n;for(let R=0;R<=r;R++){let k=[],y=R/r,E=y*(e-t)+t;for(let F=0;F<=s;F++){let I=F/s,U=I*c+a,z=Math.sin(U),N=Math.cos(U);T.x=E*z,T.y=-y*n+g,T.z=E*N,u.push(T.x,T.y,T.z),v.set(z,w,N).normalize(),f.push(v.x,v.y,v.z),d.push(I,1-y),k.push(x++)}_.push(k)}for(let R=0;R<s;R++)for(let k=0;k<r;k++){let y=_[k][R],E=_[k+1][R],F=_[k+1][R+1],I=_[k][R+1];t>0&&(h.push(y,E,I),b+=3),e>0&&(h.push(E,F,I),b+=3)}l.addGroup(m,b,0),m+=b}function p(v){let T=x,b=new at,w=new L,R=0,k=v===!0?t:e,y=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),x++;let E=x;for(let F=0;F<=s;F++){let U=F/s*c+a,z=Math.cos(U),N=Math.sin(U);w.x=k*N,w.y=g*y,w.z=k*z,u.push(w.x,w.y,w.z),f.push(0,y,0),b.x=z*.5+.5,b.y=N*.5*y+.5,d.push(b.x,b.y),x++}for(let F=0;F<s;F++){let I=T+F,U=E+F;v===!0?h.push(U,U+1,I):h.push(U+1,U,I),R+=3}l.addGroup(m,R,v===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},An=class i extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$c=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let p=new L,v=new L,T=new L;for(let b=0;b<e.length;b+=3)d(e[b+0],p),d(e[b+1],v),d(e[b+2],T),c(p,v,T,M)}function c(M,p,v,T){let b=T+1,w=[];for(let R=0;R<=b;R++){w[R]=[];let k=M.clone().lerp(v,R/b),y=p.clone().lerp(v,R/b),E=b-R;for(let F=0;F<=E;F++)F===0&&R===b?w[R][F]=k:w[R][F]=k.clone().lerp(y,F/E)}for(let R=0;R<b;R++)for(let k=0;k<2*(b-R)-1;k++){let y=Math.floor(k/2);k%2===0?(f(w[R][y+1]),f(w[R+1][y]),f(w[R][y])):(f(w[R][y+1]),f(w[R+1][y+1]),f(w[R+1][y]))}}function l(M){let p=new L;for(let v=0;v<r.length;v+=3)p.x=r[v+0],p.y=r[v+1],p.z=r[v+2],p.normalize().multiplyScalar(M),r[v+0]=p.x,r[v+1]=p.y,r[v+2]=p.z}function h(){let M=new L;for(let p=0;p<r.length;p+=3){M.x=r[p+0],M.y=r[p+1],M.z=r[p+2];let v=g(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;o.push(v,1-T)}x(),u()}function u(){for(let M=0;M<o.length;M+=6){let p=o[M+0],v=o[M+2],T=o[M+4],b=Math.max(p,v,T),w=Math.min(p,v,T);b>.9&&w<.1&&(p<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,p){let v=M*3;p.x=t[v+0],p.y=t[v+1],p.z=t[v+2]}function x(){let M=new L,p=new L,v=new L,T=new L,b=new at,w=new at,R=new at;for(let k=0,y=0;k<r.length;k+=9,y+=6){M.set(r[k+0],r[k+1],r[k+2]),p.set(r[k+3],r[k+4],r[k+5]),v.set(r[k+6],r[k+7],r[k+8]),b.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),T.copy(M).add(p).add(v).divideScalar(3);let E=g(T);_(b,y+0,M,E),_(w,y+2,p,E),_(R,y+4,v,E)}}function _(M,p,v,T){T<0&&M.x===1&&(o[p]=M.x-1),v.x===0&&v.z===0&&(o[p]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ai=class extends So{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new So().fromJSON(s))}return this}},Kg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=ex(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let x=e;x<s;x+=e)u=i[x],f=i[x+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return $s(r,o,e,a,c,d,0),o}};function Cu(i,t,e,n,s){let r,o;if(s===fx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=su(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=su(r,i[r],i[r+1],o);return o&&Fo(o,o.next)&&(Js(o),o=o.next),o}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fo(e,e.next)||_e(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ox(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Qg(i,n,s,r):Jg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Js(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=jg(Ri(i),t,e),$s(i,t,e,n,s,r,2)):o===2&&tx(i,t,e,n,s,r):$s(Ri(i),t,e,n,s,r,1);break}}}function Jg(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&es(s,a,r,c,o,l,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Qg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Kc(d,x,t,e,n),M=Kc(_,g,t,e,n),p=i.prevZ,v=i.nextZ;for(;p&&p.z>=m&&v&&v.z<=M;){if(p.x>=d&&p.x<=_&&p.y>=x&&p.y<=g&&p!==s&&p!==o&&es(a,h,c,u,l,f,p.x,p.y)&&_e(p.prev,p,p.next)>=0||(p=p.prevZ,v.x>=d&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&es(a,h,c,u,l,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;p&&p.z>=m;){if(p.x>=d&&p.x<=_&&p.y>=x&&p.y<=g&&p!==s&&p!==o&&es(a,h,c,u,l,f,p.x,p.y)&&_e(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&es(a,h,c,u,l,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Fo(s,r)&&Pu(s,n,n.next,r)&&Ks(s,r)&&Ks(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Js(n),Js(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function tx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lx(o,a)){let c=Iu(o,a);o=Ri(o,o.next),c=Ri(c,c.next),$s(o,t,e,n,s,r,0),$s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ex(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Cu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(cx(l));for(s.sort(nx),r=0;r<s.length;r++)e=ix(s[r],e);return e}function nx(i,t){return i.x-t.x}function ix(i,t){let e=sx(i,t);if(!e)return t;let n=Iu(e,i);return Ri(n,n.next),Ri(e,e.next)}function sx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&es(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ks(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&rx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function rx(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function ox(i,t,e,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ax(s)}function ax(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function es(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function lx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hx(i,t)&&(Ks(i,t)&&Ks(t,i)&&ux(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Fo(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fo(i,t){return i.x===t.x&&i.y===t.y}function Pu(i,t,e,n){let s=kr(_e(i,t,e)),r=kr(_e(i,t,n)),o=kr(_e(e,n,i)),a=kr(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||o===0&&Hr(e,i,n)||a===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function kr(i){return i>0?1:i<0?-1:0}function hx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function ux(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Iu(i,t){let e=new Jc(i.i,i.x,i.y),n=new Jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function su(i,t,e,n){let s=new Jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ru(t),ou(n,t);let o=t.length;e.forEach(ru);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ou(n,e[c]);let a=Kg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ru(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ou(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ms=class i extends de{constructor(t=new Ai([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:dx,p,v=!1,T,b,w,R;m&&(p=m.getSpacedPoints(h),v=!0,f=!1,T=m.computeFrenetFrames(h,!1),b=new L,w=new L,R=new L),f||(g=0,d=0,x=0,_=0);let k=a.extractPoints(l),y=k.shape,E=k.holes;if(!Hs.isClockWise(y)){y=y.reverse();for(let Q=0,P=E.length;Q<P;Q++){let lt=E[Q];Hs.isClockWise(lt)&&(E[Q]=lt.reverse())}}let I=Hs.triangulateShape(y,E),U=y;for(let Q=0,P=E.length;Q<P;Q++){let lt=E[Q];y=y.concat(lt)}function z(Q,P,lt){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(P,lt)}let N=y.length,G=I.length;function D(Q,P,lt){let ct,it,ut,Ut=Q.x-P.x,_t=Q.y-P.y,C=lt.x-Q.x,S=lt.y-Q.y,V=Ut*Ut+_t*_t,K=Ut*S-_t*C;if(Math.abs(K)>Number.EPSILON){let j=Math.sqrt(V),J=Math.sqrt(C*C+S*S),At=P.x-_t/j,ft=P.y+Ut/j,Mt=lt.x-S/J,Qt=lt.y+C/J,st=((Mt-At)*S-(Qt-ft)*C)/(Ut*S-_t*C);ct=At+Ut*st-Q.x,it=ft+_t*st-Q.y;let bt=ct*ct+it*it;if(bt<=2)return new at(ct,it);ut=Math.sqrt(bt/2)}else{let j=!1;Ut>Number.EPSILON?C>Number.EPSILON&&(j=!0):Ut<-Number.EPSILON?C<-Number.EPSILON&&(j=!0):Math.sign(_t)===Math.sign(S)&&(j=!0),j?(ct=-_t,it=Ut,ut=Math.sqrt(V)):(ct=Ut,it=_t,ut=Math.sqrt(V/2))}return new at(ct/ut,it/ut)}let Y=[];for(let Q=0,P=U.length,lt=P-1,ct=Q+1;Q<P;Q++,lt++,ct++)lt===P&&(lt=0),ct===P&&(ct=0),Y[Q]=D(U[Q],U[lt],U[ct]);let Z=[],et,pt=Y.concat();for(let Q=0,P=E.length;Q<P;Q++){let lt=E[Q];et=[];for(let ct=0,it=lt.length,ut=it-1,Ut=ct+1;ct<it;ct++,ut++,Ut++)ut===it&&(ut=0),Ut===it&&(Ut=0),et[ct]=D(lt[ct],lt[ut],lt[Ut]);Z.push(et),pt=pt.concat(et)}for(let Q=0;Q<g;Q++){let P=Q/g,lt=d*Math.cos(P*Math.PI/2),ct=x*Math.sin(P*Math.PI/2)+_;for(let it=0,ut=U.length;it<ut;it++){let Ut=z(U[it],Y[it],ct);ht(Ut.x,Ut.y,-lt)}for(let it=0,ut=E.length;it<ut;it++){let Ut=E[it];et=Z[it];for(let _t=0,C=Ut.length;_t<C;_t++){let S=z(Ut[_t],et[_t],ct);ht(S.x,S.y,-lt)}}}let Dt=x+_;for(let Q=0;Q<N;Q++){let P=f?z(y[Q],pt[Q],Dt):y[Q];v?(w.copy(T.normals[0]).multiplyScalar(P.x),b.copy(T.binormals[0]).multiplyScalar(P.y),R.copy(p[0]).add(w).add(b),ht(R.x,R.y,R.z)):ht(P.x,P.y,0)}for(let Q=1;Q<=h;Q++)for(let P=0;P<N;P++){let lt=f?z(y[P],pt[P],Dt):y[P];v?(w.copy(T.normals[Q]).multiplyScalar(lt.x),b.copy(T.binormals[Q]).multiplyScalar(lt.y),R.copy(p[Q]).add(w).add(b),ht(R.x,R.y,R.z)):ht(lt.x,lt.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let P=Q/g,lt=d*Math.cos(P*Math.PI/2),ct=x*Math.sin(P*Math.PI/2)+_;for(let it=0,ut=U.length;it<ut;it++){let Ut=z(U[it],Y[it],ct);ht(Ut.x,Ut.y,u+lt)}for(let it=0,ut=E.length;it<ut;it++){let Ut=E[it];et=Z[it];for(let _t=0,C=Ut.length;_t<C;_t++){let S=z(Ut[_t],et[_t],ct);v?ht(S.x,S.y+p[h-1].y,p[h-1].x+lt):ht(S.x,S.y,u+lt)}}}$(),nt();function $(){let Q=s.length/3;if(f){let P=0,lt=N*P;for(let ct=0;ct<G;ct++){let it=I[ct];Ft(it[2]+lt,it[1]+lt,it[0]+lt)}P=h+g*2,lt=N*P;for(let ct=0;ct<G;ct++){let it=I[ct];Ft(it[0]+lt,it[1]+lt,it[2]+lt)}}else{for(let P=0;P<G;P++){let lt=I[P];Ft(lt[2],lt[1],lt[0])}for(let P=0;P<G;P++){let lt=I[P];Ft(lt[0]+N*h,lt[1]+N*h,lt[2]+N*h)}}n.addGroup(Q,s.length/3-Q,0)}function nt(){let Q=s.length/3,P=0;St(U,P),P+=U.length;for(let lt=0,ct=E.length;lt<ct;lt++){let it=E[lt];St(it,P),P+=it.length}n.addGroup(Q,s.length/3-Q,1)}function St(Q,P){let lt=Q.length;for(;--lt>=0;){let ct=lt,it=lt-1;it<0&&(it=Q.length-1);for(let ut=0,Ut=h+g*2;ut<Ut;ut++){let _t=N*ut,C=N*(ut+1),S=P+ct+_t,V=P+it+_t,K=P+it+C,j=P+ct+C;Bt(S,V,K,j)}}}function ht(Q,P,lt){c.push(Q),c.push(P),c.push(lt)}function Ft(Q,P,lt){Wt(Q),Wt(P),Wt(lt);let ct=s.length/3,it=M.generateTopUV(n,s,ct-3,ct-2,ct-1);$t(it[0]),$t(it[1]),$t(it[2])}function Bt(Q,P,lt,ct){Wt(Q),Wt(P),Wt(ct),Wt(P),Wt(lt),Wt(ct);let it=s.length/3,ut=M.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);$t(ut[0]),$t(ut[1]),$t(ut[3]),$t(ut[1]),$t(ut[2]),$t(ut[3])}function Wt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function $t(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return px(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bo[s.type]().fromJSON(s)),new i(n,t.options)}},dx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],x=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-u),new at(f,1-x),new at(_,1-m)]:[new at(a,1-c),new at(h,1-u),new at(d,1-x),new at(g,1-m)]}};function px(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ci=class i extends $c{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ci=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],x=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],p=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&c===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){let b=T/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+p*a),u.y=t*Math.cos(o+p*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+p*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(b+v,1-p),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let p=h[m][M+1],v=h[m][M],T=h[m+1][M],b=h[m+1][M+1];(m!==0||o>0)&&d.push(p,v,b),(m!==n-1||c<Math.PI)&&d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qs=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,M=(s+1)*d+x;o.push(_,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var wo=class i extends de{constructor(t=new yo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new at,h=new L,u=[],f=[],d=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function _(){for(let p=0;p<e;p++)g(p);g(r===!1?e:0),M(),m()}function g(p){h=t.getPointAt(p/e,h);let v=o.normals[p],T=o.binormals[p];for(let b=0;b<=s;b++){let w=b/s*Math.PI*2,R=Math.sin(w),k=-Math.cos(w);c.x=k*v.x+R*T.x,c.y=k*v.y+R*T.y,c.z=k*v.z+R*T.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let p=1;p<=e;p++)for(let v=1;v<=s;v++){let T=(s+1)*(p-1)+(v-1),b=(s+1)*p+(v-1),w=(s+1)*p+v,R=(s+1)*(p-1)+v;x.push(T,b,R),x.push(b,w,R)}}function M(){for(let p=0;p<=e;p++)for(let v=0;v<=s;v++)l.x=p/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new bo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Pi=class extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var qt=class extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Gr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function mx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qc=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:r=t,a=2*e-n;break;case rh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:o=t,c=2*n-e;break;case rh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),_=x*x,g=_*x,m=-f*g+2*f*_-f*x,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,p=(-1-d)*g+(1.5+d)*_+.5*x,v=d*g-d*_;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+M*o[l+T]+p*o[c+T]+v*o[u+T];return r}},jc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},tl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Ec:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&mx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=e[u+x];if(_!==e[f+x]||_!==e[d+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ec;var Ii=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=$r;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Rn{};el.prototype.ValueTypeName="color";var nl=class extends Rn{};nl.prototype.ValueTypeName="number";var il=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},To=class extends Rn{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Rn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=$r;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Rn{};sl.prototype.ValueTypeName="vector";var rl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},gx=new rl,ol=class{constructor(t){this.manager=t!==void 0?t:gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ao=class extends js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},za=new te,au=new L,cu=new L,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;au.setFromMatrixPosition(t.matrixWorld),e.position.copy(au),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},al=class extends Ro{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=to*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Co=class extends js{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new al}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var cl=class extends Ro{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Io=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=lu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function lu(){return performance.now()}var bl="\\[\\]\\.:\\/",xx=new RegExp("["+bl+"]","g"),Sl="[^"+bl+"]",_x="[^"+bl.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",Sl),yx=/(WCOD+)?/.source.replace("WCOD",_x),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),Sx=new RegExp("^"+vx+yx+Mx+bx+"$"),Ex=["material","materials","bones","map"],ll=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=Sx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=ll;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Ae(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new de,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Lu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let x=Lu(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Lu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ne(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let _=h.getComponent(f,x);a.setComponent(f+u,x,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function El(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ct=El(20260923),rt=(i,t)=>i+(t-i)*Ct(),Kt=i=>i[Math.floor(Ct()*i.length)],wx=i=>Math.max(0,Math.min(1,i)),Du=i=>(i=wx(i),i*i*(3-2*i));function he(i){return-165+16*Math.sin(i*.0105+.5)+7*Math.sin(i*.031+2)}function wl(i){return 16*.0105*Math.cos(i*.0105+.5)+7*.031*Math.cos(i*.031+2)}var Uu="float coastX(float z){ return -165.0 + 16.0*sin(z*0.0105+0.5) + 7.0*sin(z*0.031+2.0); }",Tx=40,Ms=20,vs=11,ys=4,er=5,nr=26;function Ne(i){return he(i)+Tx}var hn=[-50,40,130,215,300,380],en=[-340,-255,-170,-85,0,85,170,255,340],tr={x:222,z:262},hi={x:445,z:405,r:85},pe={z:-40,w:9};pe.x0=he(pe.z)+6;pe.x1=he(pe.z)-115;var nn={z0:112,z1:244,docks:[128,156,184,212,238]},un=-360,fn=-440,Ze=880,ir=4096,Se=[];{let i=[];for(let t=-420;t<=420;t+=5)i.push([Ne(t),t]);Se.push({pts:i,w:Ms,bvd:!0,sw:er})}for(let i of hn)Se.push({pts:[[i,en[0]],[i,en[en.length-1]]],w:vs,vert:!0,c:i,a:en[0],b:en[en.length-1],sw:ys});for(let i of en)Se.push({pts:[[Ne(i),i],[hn[hn.length-1],i]],w:vs,horiz:!0,c:i,a:Ne(i),b:hn[hn.length-1],sw:ys});function Nu(i,t,e){if(i.bvd){let s=wl(e);return Math.abs(t-Ne(e))/Math.sqrt(1+s*s)}if(i.vert){let s=e<i.a?i.a-e:e>i.b?e-i.b:0;return Math.hypot(t-i.c,s)}let n=t<i.a?i.a-t:t>i.b?t-i.b:0;return Math.hypot(e-i.c,n)}function sn(i,t,e,n=0){for(let s of Se)if(s!==e&&Nu(s,i,t)<s.w/2+n)return!0;return!1}function Tl(i,t){return i<pe.x0&&i>pe.x1&&Math.abs(t-pe.z)<pe.w/2}var sr=[];for(let i of Se.filter(t=>t.vert))for(let t of Se.filter(e=>e.horiz))i.c>=t.a&&i.c<=t.b&&t.c>=i.a&&t.c<=i.b&&sr.push({x:i.c,z:t.c,v:i,h:t});var Ax={"1,3":"park","2,5":"park","3,2":"park","0,5":"park","5,2":"park","4,3":"gas","5,5":"motel"},ui=[];for(let i=0;i<hn.length;i++)for(let t=0;t<en.length-1;t++){let e=en[t],n=en[t+1],s=-1e9;for(let u=e;u<=n;u+=2)s=Math.max(s,Ne(u));let r=i===0?s+Ms/2+er+2:hn[i-1]+vs/2+ys+1.5,o=hn[i]-vs/2-ys-1.5,a=e+vs/2+ys+1.5,c=n-vs/2-ys-1.5,l=i===0||i<=3&&t>=1&&t<=6,h=Ax[`${i},${t}`]||(l?"city":"villa");ui.push({i,j:t,zA:e,zB:n,xA:i===0?null:hn[i-1],xB:hn[i],bx0:r,bx1:o,bz0:a,bz1:c,kind:h})}function Rx(i,t){for(let e of ui)if(i>e.bx0-2&&i<e.bx1+2&&t>e.bz0-2&&t<e.bz1+2)return e;return null}function Ot(i,t){let e=Du((i-he(t)-75)/85),n=Math.max((i-tr.x)/150,(Math.abs(t)-tr.z)/120);if(n<=0||e<=0)return 0;let s=Math.sin(i*.021+1.3)*Math.sin(t*.017-.4)*3.5+Math.sin((i+t)*.011)*2;return Du(n)*e*(15+s)}function Fu(i,t){let n=Ot(i+1,t)-Ot(i-1,t),s=Ot(i,t+1)-Ot(i,t-1),r=Math.hypot(n,2,s);return[-n/r,2/r,-s/r]}function rr(i,t){let{x:e,z:n,r:s}=hi,r=t<0?-1:1,o=i-(e-s),a=Math.abs(t)-(n-s);if(o>0&&a>0){let c=Math.hypot(o,a);return{d:c-s,nx:o/c,nz:a/c*r}}return o>a?{d:o-s,nx:1,nz:0}:{d:a-s,nx:0,nz:r}}function Al(i,t){if(Tl(i,t))return"pier";let e=he(t);if(i<e)return"water";for(let s of Se)if(Nu(s,i,t)<s.w/2)return"road";if(i<e+nr)return"sand";let n=Rx(i,t);return n&&(n.kind==="city"||n.kind==="gas"||n.kind==="motel")?"paved":"grass"}function Rl(i,t){let e=null,n=1e9;for(let s of Se){let r,o,a;s.bvd?(o=Math.max(-380,Math.min(380,t)),r=Ne(o)-5,a=0):s.vert?(r=s.c+2.5,o=Math.max(s.a,Math.min(s.b,t)),a=0):(o=s.c-2.5,r=Math.max(s.a,Math.min(s.b,i)),a=Math.PI/2);let c=Math.hypot(r-i,o-t);c<n&&(n=c,e={x:r,z:o,h:a})}return e}var Ll=["CAFE","PIZZA","TACOS","SURF SHOP","DINER","BAR","RECORDS","GELATO","SUSHI","DISCO","VIDEO","ARCADE","BOUTIQUE","DONUTS","LIQUOR","TATTOO","JUICE BAR","BURGERS","CINEMA","OPEN 24H","COCKTAILS","SEAFOOD","BAKERY","KARAOKE","MARINA","BAIT SHOP","MOTEL","VACANCY","GAS","FLAMINGO","PARADISE","STARLITE"],Cx=Ll.slice(0,24),Px=new Set(["CAFE","PIZZA","TACOS","DINER","BAR","GELATO","SUSHI","JUICE BAR","BURGERS","COCKTAILS","SEAFOOD","BAKERY","DONUTS"]),Ou=["FLAMINGO","PARADISE","STARLITE"],Pl=["#ff4f8b","#35e8ff","#ffd166","#7dff8a","#c77dff","#ff8a3d"],Il=[{t:"PALMERA COLA",s:"TASTE THE SUNSET",bg:["#ff4f5e","#ffb35c"],fg:"#fff6d0",art:"bottle"},{t:"RADIO 88.5",s:"SYNTHWAVE ALL NIGHT",bg:["#3a1c6e","#ff4f8b"],fg:"#7ae8ff",art:"sun"},{t:"SUNSET MOTEL",s:"POOL  COLOR TV  VACANCY",bg:["#0f5a6e","#1a1e4a"],fg:"#ffd166",art:"palm"},{t:"SURF CONTEST",s:"SATURDAY AT DAWN",bg:["#35c8e8","#1a3a8a"],fg:"#ffffff",art:"wave"},{t:"FLY PALMERA",s:"PARADISE IS CLOSER",bg:["#ffcf8a","#ff7a9a"],fg:"#2a1a4a",art:"plane"},{t:"TACO LOCO",s:"2 TACOS FOR $1",bg:["#ffd23f","#ff6a3d"],fg:"#3a1020",art:"sun"},{t:"NEON NIGHTS",s:"CLUB  DANCE  21+",bg:["#120a24","#5a1a7a"],fg:"#ff3fa4",art:"stripes"},{t:"ORANGE GROVE",s:"FRESH SQUEEZED",bg:["#ff9a3d","#ffe08a"],fg:"#2a4a1a",art:"orange"}],ar=i=>`${i}px "Press Start 2P", monospace`;function Dl(i,t,e,n,s=1024){return{u0:(i+.5)/s,u1:(i+e-.5)/s,v0:1-(t+n-.5)/s,v1:1-(t+.5)/s}}var Ix=i=>Dl(i%4*256,Math.floor(i/4)*64,256,64),Lx=i=>Dl(i%2*512,512+Math.floor(i/2)*128,512,128);function Dx(i,t,e,n,s,r,o){i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="#140a1e",i.fillRect(t,e,n,s),i.strokeStyle=o,i.lineWidth=3,i.globalAlpha=.8,i.strokeRect(t+6,e+6,n-12,s-12),i.globalAlpha=1;let a=30;for(i.font=ar(a);i.measureText(r).width>n-34&&a>10;)a-=2,i.font=ar(a);i.textAlign="center",i.textBaseline="middle",i.shadowColor=o,i.shadowBlur=14,i.fillStyle=o,i.fillText(r,t+n/2,e+s/2+2),i.fillText(r,t+n/2,e+s/2+2),i.shadowBlur=0,i.globalAlpha=.6,i.fillStyle="#ffffff",i.fillText(r,t+n/2,e+s/2+2),i.restore()}function Ux(i,t,e,n,s,r){i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip();let o=i.createLinearGradient(0,e,0,e+s);o.addColorStop(0,r.bg[0]),o.addColorStop(1,r.bg[1]),i.fillStyle=o,i.fillRect(t,e,n,s);let a=t+n*.84,c=e+s*.52,l=s*.36;switch(i.lineCap="round",r.art){case"sun":{let u=i.createLinearGradient(0,c-l,0,c+l);u.addColorStop(0,"#fff3a0"),u.addColorStop(1,"#ff4f8b"),i.fillStyle=u,i.beginPath(),i.arc(a,c,l,0,Math.PI*2),i.fill(),i.fillStyle=r.bg[1];for(let f=0;f<4;f++)i.fillRect(a-l,c+f*l*.26,2*l,2+f*2);break}case"palm":{i.strokeStyle="#0a0a18",i.lineWidth=7,i.beginPath(),i.moveTo(a+10,e+s),i.quadraticCurveTo(a+16,c,a-4,c-l*.7),i.stroke(),i.lineWidth=6;for(let u=0;u<6;u++){let f=-Math.PI+u*.6;i.beginPath(),i.moveTo(a-4,c-l*.7),i.quadraticCurveTo(a-4+Math.cos(f)*30,c-l*.7+Math.sin(f)*18-10,a-4+Math.cos(f)*50,c-l*.7+Math.sin(f)*10+18),i.stroke()}break}case"wave":{i.lineWidth=6;for(let u=0;u<4;u++)i.strokeStyle=u%2?"#ffffff":"#7ae8ff",i.beginPath(),i.arc(a-10+u*8,c+30-u*4,30+u*10,Math.PI*1.05,Math.PI*1.75),i.stroke();break}case"plane":{i.fillStyle="#ffffff",i.beginPath(),i.moveTo(a-60,c),i.lineTo(a+40,c-6),i.lineTo(a+50,c),i.lineTo(a+40,c+6),i.closePath(),i.fill(),i.beginPath(),i.moveTo(a,c-3),i.lineTo(a-20,c-36),i.lineTo(a-8,c-36),i.lineTo(a+18,c-3),i.fill(),i.beginPath(),i.moveTo(a-50,c-2),i.lineTo(a-60,c-20),i.lineTo(a-52,c-20),i.lineTo(a-40,c-2),i.fill();break}case"bottle":{i.fillStyle="#7a0a1a",i.fillRect(a-14,c-l*.4,28,l*1.4),i.fillRect(a-6,c-l*1,12,l*.65),i.fillStyle="#fff6d0",i.fillRect(a-14,c,28,14);break}case"stripes":{i.lineWidth=8;for(let u=0;u<6;u++)i.strokeStyle=Pl[u],i.beginPath(),i.moveTo(a-70+u*18,e+s),i.lineTo(a-20+u*18,e),i.stroke();break}case"orange":{i.fillStyle="#ff8a1d",i.beginPath(),i.arc(a,c+6,l*.9,0,Math.PI*2),i.fill(),i.fillStyle="#3a8a2a",i.beginPath(),i.ellipse(a+12,c-l*.85,16,7,-.5,0,Math.PI*2),i.fill();break}}i.textAlign="left",i.textBaseline="middle";let h=34;for(i.font=ar(h);i.measureText(r.t).width>n*.66&&h>12;)h-=2,i.font=ar(h);i.fillStyle="rgba(0,0,0,0.45)",i.fillText(r.t,t+21,e+s*.4+3),i.fillStyle=r.fg,i.fillText(r.t,t+18,e+s*.4),i.font=ar(13),i.fillStyle=r.fg,i.globalAlpha=.9,i.fillText(r.s,t+20,e+s*.76),i.globalAlpha=1,i.strokeStyle="#1a1024",i.lineWidth=8,i.strokeRect(t+4,e+4,n-8,s-8),i.restore()}function Nx(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");Ll.forEach((n,s)=>Dx(t,s%4*256,Math.floor(s/4)*64,256,64,n,Pl[s%Pl.length])),Il.forEach((n,s)=>Ux(t,s%2*512,512+Math.floor(s/2)*128,512,128,n));let e=new Ln(i);return e.colorSpace=Oe,e.anisotropy=8,e}function Fx(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=["#ffd9a0","#ffc27a","#ffe8c8","#a8f0ff","#ffb0d8","#c8ffb0","#ffe07a","#ffcfa8"];for(let s=0;s<16;s++){let r=s%4*64,o=Math.floor(s/4)*64,a=t.createLinearGradient(0,o,0,o+64),c=Kt(e);a.addColorStop(0,c),a.addColorStop(1,"#6a3a3a"),t.fillStyle=a,t.fillRect(r,o,64,64),t.fillStyle="rgba(40,20,30,0.55)";for(let l=0;l<3;l++)t.fillRect(r+4,o+16+l*14,56,2);for(let l=0;l<3;l++)if(Ct()<.7){let h=r+6+Ct()*48,u=16+Ct()*16;t.fillStyle="rgba(30,15,25,0.75)",t.fillRect(h,o+64-u,7,u),t.fillRect(h+1,o+64-u-6,5,5)}t.fillStyle="#231a26",t.fillRect(r,o,64,3),t.fillRect(r,o+61,64,3),t.fillRect(r,o,3,64),t.fillRect(r+61,o,3,64),t.fillRect(r+31,o,2,64)}let n=new Ln(i);return n.colorSpace=Oe,n.magFilter=ve,n}var Cl=i=>Dl(i%4*64,Math.floor(i/4)*64,64,64,256);function or(i,t,e,n,s,r,o){let a=new ze(i,t),c=a.attributes.uv;for(let l=0;l<c.count;l++)c.setXY(l,e.u0+c.getX(l)*(e.u1-e.u0),e.v0+c.getY(l)*(e.v1-e.v0));return a.rotateY(o),a.translate(n,s,r),a}function dn(i,t){let e=i.index?i.toNonIndexed():i;e.attributes.uv&&e.deleteAttribute("uv");let n=It(t),s=new Float32Array(e.attributes.position.count*3);for(let r=0;r<s.length;r+=3)s.set([n.r,n.g,n.b],r);return e.setAttribute("color",new ne(s,3)),e}function Bu(i,t){return i.onBeforeCompile=e=>{e.uniforms.uTime=t,e.vertexShader=`attribute vec3 bob;
uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec2 rel = position.xz - bob.yz;
      transformed.y += sin(uTime * 0.9 + bob.x) * 0.12 + rel.y * sin(uTime * 0.7 + bob.x * 1.7) * 0.03 + rel.x * sin(uTime * 0.5 + bob.x) * 0.008;`)},i}var Bo=class i{constructor(t){this.w=t,this.B=t.batch,this.atlas=Nx(),this.signGeos=[],this.boardGeos=[],this.shopGeos=[],this.misc=[],this.parked=[],this.storefronts(),this.roofSigns(),this.roadsideBillboards(),this.streetFestoons(),this.trafficLights(),this.gasStation(),this.motel(),this.marina(),this.parkedCars(),this.finish()}sign(t,e,n,s,r,o){this.signGeos.push(or(e,e/4,Ix(Ll.indexOf(t)),n,s,r,o))}board(t,e,n,s,r,o){this.boardGeos.push(or(e,e/4,Lx(t),n,s,r,o))}addMisc(t,e){this.misc.push(dn(t,e))}storefronts(){let{B:t,w:e}=this;for(let n of e.facades){if(n.villa||Ct()>.85||n.len<7)continue;let s=Math.atan2(n.nx,n.nz),r=-n.nz,o=n.nx,a=Math.min(n.len-2,rt(5,10)),c=rt(-1,1)*(n.len-a)/2*.8;if(n.beach&&(a=Math.min(n.len/2-2.5,6),c=(Ct()<.5?-1:1)*(n.len/4+.75)),a<3)continue;let l=n.x+r*c,h=n.z+o*c;this.shopGeos.push(or(a,2.6,Cl(Math.floor(Ct()*16)),l+n.nx*.07,n.y+1.7,h+n.nz*.07,s));let u=n.beach?Kt(["COCKTAILS","SEAFOOD","SURF SHOP","GELATO","CAFE","BAR"]):Kt(Cx),f=Math.min(a*.9,6.5);if(this.sign(u,f,l+n.nx*.12,n.y+3.75+f/8,h+n.nz*.12,s),Ct()<.65){let d=Kt(["#e0445a","#2fa3a0","#f09a3a","#6a5acd","#f2eadc","#ff7ab8"]),x=l+n.nx*.8,_=h+n.nz*.8;if(n.nx?t.box(1.6,.22,a+.6,x,n.y+3,_,d,{roof:d}):t.box(a+.6,.22,1.6,x,n.y+3,_,d,{roof:d}),Ct()<.5){let g=Kt(qn),m=l+n.nx*1.62,M=h+n.nz*1.62;n.nx?t.neon(.1,.1,a+.6,m,n.y+2.98,M,g,2.4):t.neon(a+.6,.1,.1,m,n.y+2.98,M,g,2.4)}}Px.has(u)&&Ct()<.6&&this.patio(n,l,h,a,r,o)}}patio(t,e,n,s,r,o){let a=t.y,c=Math.max(2,Math.floor(s/2.6));for(let h=0;h<c;h++){let u=-s/2+(h+.5)*s/c,f=e+r*u+t.nx*2.8,d=n+o*u+t.nz*2.8,x=new ie(.45,.45,.06,10);x.translate(f,a+.75,d),this.addMisc(x,"#f2eadc");let _=new ie(.05,.05,.75,5);_.translate(f,a+.37,d),this.addMisc(_,"#3a3040");for(let g of[-1,1]){let m=new Jt(.4,.45,.4);m.translate(f+r*g*.7,a+.22,d+o*g*.7),this.addMisc(m,Kt(["#e0445a","#2fa3a0","#f2eadc"]))}if(Ct()<.6){let g=new An(1.1,.45,8);g.translate(f,a+2.3,d),this.addMisc(g,Kt(["#e8445a","#2fa3a0","#f09a3a","#f7efe0"]));let m=new ie(.03,.03,2.3,4);m.translate(f,a+1.15,d),this.addMisc(m,"#dddddd")}this.w.colliders.circle(f,d,.6)}let l=[];for(let h=0;h<=4;h++){let u=-s/2+h*s/4,f=h%2===1,d=e+r*u+t.nx*(f?5:.25),x=n+o*u+t.nz*(f?5:.25);l.push({x:d,z:x,top:a+(f?3.3:3.5),pole:f})}this.w.festoon(l,3.3,.35,{palette:Ul,size:.45})}roofSigns(){let{B:t}=this,e=0;for(let n of this.w.roofSpots){let s=Math.atan2(n.nx,n.nz);if(n.hotel){let r=Math.min(n.len*.8,16);this.sign(Ou[e++%Ou.length],r,n.x,n.y+1+r/8,n.z,s),t.box(.3,r/4+1,r*.9,n.x+.35,n.y,n.z,"#2a2433")}else{let r=Math.min(n.len*.9,13),o=r/4,a=n.x+n.nx*1,c=n.z+n.nz*1;this.board(Math.floor(Ct()*Il.length),r,a+n.nx*.25,n.y+2+o/2,c+n.nz*.25,s),n.nx?t.box(.4,o+.4,r+.4,a,n.y+1.8,c,"#2a2433"):t.box(r+.4,o+.4,.4,a,n.y+1.8,c,"#2a2433");for(let l of[-.3,.3])t.box(.3,1.9,.3,a+-n.nz*l*r,n.y-.1,c+n.nx*l*r,"#3a3440");for(let l of[-.35,0,.35]){let h=a+n.nx*1+-n.nz*l*r,u=c+n.nz*1+n.nx*l*r;this.w.glows.push({x:h,y:n.y+2.3+o,z:u,s:1.4,c:It("#fff0d0").multiplyScalar(1.3)})}}}}roadsideBillboards(){let{B:t,w:e}=this,n=0;for(let s of Se)if(!s.bvd)for(let r=s.a+40;r<s.b-20;r+=75){let o=Ct()<.5?-1:1,a=o*(s.w/2+4+2.5),c=s.vert?s.c+a:r,l=s.vert?r:s.c+a;if(!(c>tr.x||Math.abs(l)>tr.z)||Ct()<.35||rr(c,l).d>-8||sn(c,l,s,10)||e.colliders.occupied(c,l,5))continue;let u=s.vert?-o:0,f=s.vert?0:-o,d=Math.atan2(u,f),x=Ot(c,l),_=13,g=_/4;this.board(n++%Il.length,_,c+u*.26,x+6+g/2,l+f*.26,d),u?t.box(.4,g+.4,_+.4,c,x+5.8,l,"#2a2433"):t.box(_+.4,g+.4,.4,c,x+5.8,l,"#2a2433");for(let m of[-.3,.3]){let M=c+-f*m*_,p=l+u*m*_;t.box(.35,6.4,.35,M,x-.5,p,"#3a3440"),e.colliders.circle(M,p,.35)}for(let m of[-.35,0,.35])e.glows.push({x:c+u*1.2+-f*m*_,y:x+6.4+g,z:l+f*1.2+u*m*_,s:1.4,c:It("#fff0d0").multiplyScalar(1.3)})}}streetFestoons(){let t=Se.filter(e=>e.horiz&&[-170,0,170,340].includes(e.c)||e.vert&&[-50,40,300].includes(e.c));for(let e of t){let n=[],s=1;for(let r=e.a+12;r<e.b-8;r+=10){s=-s;let o=e.vert?e.c:r,a=e.vert?r:e.c;if(sn(o,a,e,6)){n.push(null);continue}let c=s*(e.w/2+.7),l=e.vert?e.c+c:r,h=e.vert?r:e.c+c;this.w.colliders.occupied(l,h,.6)&&(e.vert?h+=1.5:l+=1.5),n.push([l,h])}this.w.festoon(n,7.4,1.5,{palette:bs,size:.6,bright:2.4})}}trafficLights(){let t=sr,e=t.length,n=new qt({color:"#26232e"}),s=new ie(.12,.15,6.8,6);s.translate(0,3.4,0);let r=new Jt(.12,.12,6.2),o=new Jt(.46,1.3,.46),a=new Ye(s,n,e),c=new Ye(r,n,e),l=new Ye(o,n,e*2),h=(p,v)=>{let T=[];for(let b of[-1,1]){let w=new Jt(v?.08:.28,.28,v?.28:.08);w.translate(v?b*.25:0,p,v?0:b*.25),T.push(w)}return Ae(T)},u={r:[3.2,.12,.08],y:[3,1.6,.1],g:[.2,3,.9]};this.tl=[];let f={};for(let p of["ns","ew"])for(let[v,T]of[["r",.4],["y",0],["g",-.4]]){let b=new le({color:new Tt(...u[v])}),w=new Ye(h(T,p==="ew"),b,e);f[p+v]=w,this.tl.push({grp:p,k:v,mat:b,on:new Tt(...u[v]),off:new Tt(...u[v]).multiplyScalar(.06)}),this.w.scene.add(w)}let d=new te,x=new tn,_=new L(1,1,1),g=new L(0,1,0),m=[];t.forEach((p,v)=>{let T=Ot(p.x+6.6,p.z+6.6),b=p.x+6.6,w=p.z+6.6;d.makeTranslation(b,T-.3,w),a.setMatrixAt(v,d),x.setFromAxisAngle(g,Math.PI/4),d.compose(new L(p.x+4.4,T+6.3,p.z+4.4),x,_),c.setMatrixAt(v,d);let R={ns:[p.x+2.4,p.z+2.4],ew:[p.x+3.3,p.z+3.3]};Object.entries(R).forEach(([k,[y,E]],F)=>{d.makeTranslation(y,T+5.6,E),l.setMatrixAt(v*2+F,d);for(let I of["r","y","g"])f[k+I].setMatrixAt(v,d);for(let[I,U]of[["r",.4],["y",0],["g",-.4]])m.push({grp:k,k:I,x:y,y:T+5.6+U,z:E})}),this.w.colliders.circle(b,w,.3)}),a.castShadow=!0,this.w.scene.add(a,c,l),this.tlGlow=Ui(m.map(p=>({x:p.x,y:p.y,z:p.z,s:1.3,c:new Tt(0,0,0)})),this.w.glowMat),this.tlGlowInfo=m,this.w.scene.add(this.tlGlow);let M="";this.w.updaters.push(p=>{let v=p%14,T=v<5.5?"g":v<6.5?"y":"r",b=v>=7&&v<12.5?"g":v>=12.5&&v<13.5?"y":"r",w=T+b;if(w===M)return;M=w;let R={ns:T,ew:b};for(let y of this.tl)y.mat.color.copy(R[y.grp]===y.k?y.on:y.off);let k=this.tlGlow.geometry.attributes.gcolor;this.tlGlowInfo.forEach((y,E)=>{let F=R[y.grp]===y.k,I=this.tl.find(U=>U.grp===y.grp&&U.k===y.k).on;k.setXYZ(E,F?I.r*.5:0,F?I.g*.5:0,F?I.b*.5:0)}),k.needsUpdate=!0})}gasStation(){let t=ui.find(_=>_.kind==="gas");if(!t)return;let{B:e,w:n}=this,s=(t.bz0+t.bz1)/2,r=t.bx0+16,o=Math.min(Ot(r-10,s-8),Ot(r+10,s+8),Ot(r,s));e.box(20,.9,13,r,o+5.2,s,"#f4f0e6",{roof:"#d0ccc4"}),e.neon(20.1,.25,.1,r,o+5.45,s-6.55,"#ff3a4a",2.8),e.neon(20.1,.25,.1,r,o+5.45,s+6.55,"#ff3a4a",2.8),e.neon(.1,.25,13.1,r-10.05,o+5.45,s,"#ff3a4a",2.8);let a=new mt(new ze(18,11),new le({color:new Tt(2.2,2.2,2.1)}));a.rotation.x=Math.PI/2,a.position.set(r,o+5.18,s),n.scene.add(a);for(let[_,g]of[[-7,-4],[-7,4],[7,-4],[7,4]])e.box(.6,6,.6,r+_,o-1,s+g,"#f4f0e6"),n.colliders.circle(r+_,s+g,.45);for(let _ of[-3.5,3.5])for(let g of[-3.5,3.5])e.box(.9,1.6,.6,r+g,o,s+_,"#e0445a",{roof:"#f4f0e6"}),e.neon(.5,.35,.62,r+g,o+1.1,s+_,"#7dff8a",1.6),n.colliders.box(r+g-.5,s+_-.35,r+g+.5,s+_+.35);for(let _=0;_<6;_++)n.glows.push({x:r+(_%3-1)*6,y:o+4.9,z:s+(_<3?-3:3),s:3.5,c:It("#e8f4ff").multiplyScalar(.9)});let c=t.bx1-10,l=12,h=9,u=Math.min(Ot(c-6,s-5),Ot(c+6,s+5))-1.5;e.box(h,6,l,c,u,s,"#f7efe0",{windows:!0}),e.box(h+.6,.6,l+.6,c,u+6,s,"#e0445a",{roof:"#8a8078"}),n.colliders.box(c-h/2,s-l/2,c+h/2,s+l/2,!0),this.shopGeos.push(or(9,2.6,Cl(3),c-h/2-.07,u+1.5+1.7,s,-Math.PI/2)),this.sign("OPEN 24H",5,c-h/2-.12,u+5.1,s,-Math.PI/2);let f=t.bx0+1.5,d=t.bz0+2,x=Ot(f,d);e.box(.5,11,.5,f,x-.5,d,"#3a3440"),e.box(.5,2.2,5.6,f,x+9,d,"#2a2433"),this.sign("GAS",5.2,f-.28,x+10.1,d,-Math.PI/2),this.sign("GAS",5.2,f+.28,x+10.1,d,Math.PI/2),n.colliders.circle(f,d,.4),this.parked.push({x:r-3.5,z:s-1.5,h:Math.PI/2},{x:c-h/2-4,z:s+4,h:0})}motel(){let t=ui.find(g=>g.kind==="motel");if(!t)return;let{B:e,w:n}=this,s="#ffb895",r="#f2eadc",o=$e*2+.6,a=(g,m,M,p)=>{let v=Math.min(Ot(g,m),Ot(M,m),Ot(g,p),Ot(M,p))-1.5,T=(g+M)/2,b=(m+p)/2;return e.box(M-g,o+1.5,p-m,T,v,b,s,{windows:!0}),e.box(M-g+.8,.5,p-m+.8,T,v+1.5+o,b,r,{roof:"#b86b4b"}),n.colliders.box(g,m,M,p,!0),v+1.5},c=a(t.bx1-12,t.bz0+4,t.bx1,t.bz1-4);a(t.bx0+20,t.bz1-14,t.bx1-12,t.bz1-4),e.box(1.6,.25,t.bz1-t.bz0-8,t.bx1-12.8,c+$e,(t.bz0+t.bz1)/2,r),e.neon(.1,.1,t.bz1-t.bz0-8,t.bx1-13.6,c+$e+1,(t.bz0+t.bz1)/2,"#35e8ff",2.6),e.neon(.1,.1,t.bz1-t.bz0-8,t.bx1-12.05,c+.2,(t.bz0+t.bz1)/2,"#ff3fa4",2.4);let l=t.bx1-26,h=(t.bz0+t.bz1)/2-8,u=Ot(l,h),f=new mt(new Jt(8,.3,14),new le({color:It("#3fd8e6").multiplyScalar(.9)}));f.position.set(l,u+.05,h),n.scene.add(f),n.glows.push({x:l,y:u+.6,z:h,s:9,c:It("#2fbfd0").multiplyScalar(.4)}),n.colliders.box(l-4,h-7,l+4,h+7),n.palmSpots.push([l-6,h-8],[l+6,h+9],[l-6,h+7]),n.festoon([[l-5,h-8],[l+5,h-8],[l+5,h+8],[l-5,h+8],[l-5,h-8]],3.6,.5,{palette:bs});let d=t.bx0+3,x=t.bz0+4,_=Ot(d,x);e.box(.6,13,.6,d,_-.5,x,"#3a3440"),e.box(.6,2.8,10.5,d,_+9.8,x,"#2a2433"),this.sign("MOTEL",10,d-.32,_+11.2,x,-Math.PI/2),this.sign("MOTEL",10,d+.32,_+11.2,x,Math.PI/2),e.box(.5,1.3,5.2,d,_+7.6,x,"#2a2433"),this.sign("VACANCY",5,d-.27,_+8.25,x,-Math.PI/2),this.sign("VACANCY",5,d+.27,_+8.25,x,Math.PI/2),e.neon(.2,.25,4,d-.4,_+13.2,x+1,"#ffd23f",3),e.neon(.2,1.4,.25,d-.4,_+12.6,x+3,"#ffd23f",3),n.colliders.circle(d,x,.45);for(let g=0;g<2;g++)this.parked.push({x:t.bx1-16.5,z:t.bz0+8+g*4.2,h:Math.PI/2*(Ct()<.5?1:-1),rot90:!0})}marina(){let{B:t,w:e}=this,n={value:0};e.updaters.push(I=>{n.value=I});let s=[],r=[],o=(I,U,z,N)=>{let G=new Ai;G.moveTo(-I/2,-U/2),G.lineTo(I/2-I*.28,-U/2),G.quadraticCurveTo(I/2,-U*.25,I/2,0),G.quadraticCurveTo(I/2,U*.25,I/2-I*.28,U/2),G.lineTo(-I/2,U/2),G.closePath();let D=new ms(G,{depth:z,bevelEnabled:!1,curveSegments:4});D.rotateX(-Math.PI/2),D.translate(0,-.45,0);let Y=dn(D,N);Y.computeVertexNormals();let Z=Y.attributes.normal,et=Y.attributes.color,pt=It("#c9a27a");for(let Dt=0;Dt<Z.count;Dt++)Z.getY(Dt)>.5&&et.setXYZ(Dt,pt.r,pt.g,pt.b);return Y},a=["#f4f0e6","#f4f0e6","#1d2a4a","#2fa3a0","#d84a4a","#f6e08a"],c=I=>{let U=[],z=[],N=Kt(a),G=(Z,et,pt,Dt,$,nt,St,ht=U)=>{let Ft=new Jt(Z,et,pt);Ft.translate(Dt,$,nt),ht.push(dn(Ft,St))},D,Y;if(I==="sail"){D=rt(7,9),Y=2.6,U.push(o(D,Y,1.2,N)),G(2.6,.6,1.6,-.6,1,0,"#f4f0e6"),G(2.2,.16,1.62,-.6,1,0,"#ffcf8a",z);let Z=new ie(.07,.07,11,5);Z.translate(.6,5.9,0),U.push(dn(Z,"#dddddd"));let et=new ie(.16,.16,3.6,6);et.rotateZ(Math.PI/2),et.translate(-1.2,2.1,0),U.push(dn(et,Kt(["#2a4a8a","#f4f0e6","#b0304a"])))}else I==="yacht"?(D=rt(10,13),Y=3.6,U.push(o(D,Y,1.6,"#f4f0e6")),G(D*.5,1.3,3,-D*.08,1.8,0,"#f4f0e6"),G(D*.3,1,2.5,-D*.14,2.9,0,"#f4f0e6"),G(D*.46,.35,3.04,-D*.08,1.95,0,"#ffd9a0",z),G(D*.26,.3,2.54,-D*.14,2.95,0,"#ffd9a0",z),G(D*.9,.12,3.62,0,.85,0,Kt(["#1d2a4a","#2fa3a0","#d84a4a"]))):(D=rt(5.5,6.5),Y=2.2,U.push(o(D,Y,.9,N)),G(.1,.5,1.8,.4,.8,0,"#2a3a4a"),G(1.2,.4,1.6,-1.2,.6,0,"#f2eadc"));return{parts:U,lit:z,L:D,Bm:Y}},l=(I,U,z,N,G)=>{for(let[D,Y]of[[I.parts,s],[I.lit,r]])for(let Z of D){Z.rotateY(N),Z.translate(U,-.25,z);let et=new Float32Array(Z.attributes.position.count*3);for(let pt=0;pt<et.length;pt+=3)et.set([G,U,z],pt);Z.setAttribute("bob",new ne(et,3)),Y.push(Z)}},h=[];for(let I of nn.docks){let U=he(I)+3,z=he(I)-58,N=U-z,G=(U+z)/2,D=new Jt(N,.4,2.6);D.translate(G,.05,I),h.push(dn(D,"#8a6446"));for(let Z=z+1;Z<U;Z+=6)for(let et of[-1,1]){let pt=new ie(.18,.18,4,5);pt.translate(Z,-1.8,I+et*1.2),h.push(dn(pt,"#4a3528"))}let Y=[];for(let Z=U-6,et=0;Z>z+1;Z-=10,et++)e.globeLamps.push([Z,I+(et%2?1.2:-1.2),.25]),Y.push({x:Z,z:I+(et%2?-1.2:1.2),top:3.2,pole:!0});e.festoon(Y,3,.45,{palette:bs,size:.5});for(let Z of[-1,1])for(let et=U-10;et>z+4;et-=rt(8.5,12)){if(Ct()<.18)continue;let pt=Kt(["sail","sail","yacht","speed"]),Dt=c(pt);l(Dt,et-Dt.L*.1,I+Z*(1.3+Dt.Bm/2+.5),Ct()<.5?0:Math.PI,Ct()*6),pt==="sail"&&e.glows.push({x:et-Dt.L*.1+.6,y:11.2,z:I+Z*(1.3+Dt.Bm/2+.5),s:.9,c:It(Kt(["#ff3040","#ffffff","#40ff80"])).multiplyScalar(2)})}}let u=[];for(let I=nn.z0-8;I<nn.z1+16;I+=2.2){let U=he(I)-72+rt(-1,1),z=new Ci(rt(1.6,2.6),0);z.scale(1,rt(.6,.9),1),z.translate(U+rt(-1.5,1.5),-.2,I),u.push(dn(z,Kt(["#6a5a58","#7a6a60","#5a4c4c"])))}let f=nn.z1+16,d=he(f)-72;for(let I=0;I<6;I++){let U=new ie(1.5-I*.12,1.6-I*.12,2.4,10);U.translate(d,1.2+I*2.4,f),u.push(dn(U,I%2?"#d84a4a":"#f4f0e6"))}let x=new ie(1.2,1.2,.3,10);x.translate(d,16.4,f),u.push(dn(x,"#2a2433"));let _=new An(1.3,1.4,10);_.translate(d,18.9,f),u.push(dn(_,"#d84a4a"));let g=new mt(new ie(.9,.9,1.8,10),new le({color:new Tt(4,3.2,1.8)}));g.position.set(d,17.4,f),e.scene.add(g),e.glows.push({x:d,y:17.4,z:f,s:9,c:It("#ffe0a0").multiplyScalar(1.6)});let m=new An(7,90,16,8,!0);m.rotateZ(-Math.PI/2),m.translate(-45,0,0);{let I=m.attributes.position,U=new Float32Array(I.count*3);for(let z=0;z<I.count;z++){let N=Math.pow(1-Math.min(1,-I.getX(z)/90),1.6);U.set([N,N,N],z*3)}m.setAttribute("color",new ne(U,3))}let M=new mt(m,new le({color:new Tt(.7,.58,.38),vertexColors:!0,blending:Gn,transparent:!0,depthWrite:!1,side:De,fog:!1})),p=new Be;p.position.set(d,17.4,f),p.add(M),e.scene.add(p),e.updaters.push(I=>{p.rotation.y=I*.6});let v=new mt(Ae(u),new qt({vertexColors:!0,flatShading:!0}));v.castShadow=!0,e.scene.add(v),e.scene.add(new mt(Ae(h),new qt({vertexColors:!0})));for(let I=0;I<10;I++){let U=rt(nn.z0,nn.z1),z=he(U)+rt(4,9);if(e.colliders.occupied(z,U,2))continue;let N=o(3.6,1.4,.6,Kt(["#2fa3a0","#d84a4a","#f6e08a","#f4f0e6","#6a5acd"]));N.rotateZ(rt(-.15,.15)),N.rotateY(rt(0,Math.PI)),N.translate(z,.45,U),this.misc.push(N),e.colliders.circle(z,U,1.2)}let T=(nn.z0+nn.z1)/2,b=he(T)+16;t.box(5,3.2,7,b,-.5,T,"#9ad7d0",{windows:!0}),t.box(5.8,.4,7.8,b,2.7,T,"#f2eadc",{roof:"#b86b4b"}),e.colliders.box(b-2.5,T-3.5,b+2.5,T+3.5,!0),this.shopGeos.push(or(4,1.8,Cl(5),b-2.57,1.2,T,-Math.PI/2)),this.sign("BAIT SHOP",5,b-2.62,3.5,T,-Math.PI/2);let w=he(nn.z0-6)+22,R=nn.z0-6;t.box(.4,6,.4,w,-.5,R-3.6,"#f2eadc"),t.box(.4,6,.4,w,-.5,R+3.6,"#f2eadc"),t.box(.4,2,7.8,w,4.3,R,"#2a2433"),this.sign("MARINA",7.4,w-.22,5.3,R,-Math.PI/2),this.sign("MARINA",7.4,w+.22,5.3,R,Math.PI/2),e.colliders.circle(w,R-3.6,.3),e.colliders.circle(w,R+3.6,.3);let k=Bu(new qt({vertexColors:!0}),n);e.scene.add(new mt(Ae(s),k));let y=Bu(new le({vertexColors:!0}),n),E=Ae(r),F=E.attributes.color;for(let I=0;I<F.count;I++)F.setXYZ(I,F.getX(I)*2.2,F.getY(I)*2.2,F.getZ(I)*2.2);e.scene.add(new mt(E,y))}static carGeometry(){let t=[],e=(n,s,r,o,a,c,l)=>{let h=new Jt(n,s,r);h.translate(o,a,c),t.push(dn(h,l))};e(1.8,.6,4.3,0,.62,0,"#ffffff"),e(1.58,.5,2,0,1.17,-.25,"#ffffff"),e(1.62,.34,1.9,0,1.14,-.25,"#1e1c2e"),e(1.84,.16,.14,0,.42,2.17,"#9a98a0"),e(1.84,.16,.14,0,.42,-2.17,"#9a98a0"),e(.34,.1,.04,.6,.74,-2.16,"#5a1020"),e(.34,.1,.04,-.6,.74,-2.16,"#5a1020"),e(.3,.1,.04,.6,.72,2.16,"#d8d4c4"),e(.3,.1,.04,-.6,.72,2.16,"#d8d4c4");for(let[n,s]of[[.8,1.35],[-.8,1.35],[.8,-1.35],[-.8,-1.35]]){let r=new ie(.32,.32,.24,10);r.rotateZ(Math.PI/2),r.translate(n,.32,s),t.push(dn(r,"#141418"))}return Ae(t)}parkedCars(){let t=this.w;for(let l of Se)if(!l.bvd)for(let h of[-1,1])for(let u=l.a+10;u<l.b-10;u+=6.5){if(Ct()>.085)continue;let f=h*(l.w/2-1.25),d=l.vert?l.c+f:u,x=l.vert?u:l.c+f;if(sn(d,x,l,7)||t.colliders.occupied(d,x,2.4))continue;let _=l.vert?h<0?0:Math.PI:h>0?Math.PI/2:-Math.PI/2;this.parked.push({x:d,z:x,h:_})}let e=["#e8e2d4","#d84a4a","#3aa6a0","#f2c14e","#6b8fd6","#3a3748","#e57aa8","#9ccf6a","#c9c3b5","#8a3b52","#f08a3a"],n=new Ye(i.carGeometry(),new qt({vertexColors:!0}),this.parked.length),s=new te,r=new tn,o=new qe(0,0,0,"YXZ"),a=new L(1,1,1),c=new L;this.parked.forEach((l,h)=>{let u=Math.sin(l.h),f=Math.cos(l.h),d=(Ot(l.x+u*2,l.z+f*2)-Ot(l.x-u*2,l.z-f*2))/4;o.set(-Math.atan(d),l.h,0),r.setFromEuler(o),s.compose(c.set(l.x,Ot(l.x,l.z),l.z),r,a),n.setMatrixAt(h,s),n.setColorAt(h,It(Kt(e)));let x=Math.abs(u)>.5;t.colliders.box(l.x-(x?2.2:.95),l.z-(x?.95:2.2),l.x+(x?2.2:.95),l.z+(x?.95:2.2))}),n.castShadow=!0,n.receiveShadow=!0,t.scene.add(n)}finish(){let t=this.w;if(this.signGeos.length&&t.scene.add(new mt(Ae(this.signGeos),new le({map:this.atlas,color:new Tt(2.3,2.3,2.3)}))),this.boardGeos.length&&t.scene.add(new mt(Ae(this.boardGeos),new le({map:this.atlas,color:new Tt(1.25,1.25,1.25)}))),this.shopGeos.length&&t.scene.add(new mt(Ae(this.shopGeos),new le({map:Fx(),color:new Tt(1.5,1.4,1.3)}))),this.misc.length){let e=new mt(Ae(this.misc.map(n=>(n.attributes.normal||n.computeVertexNormals(),n))),new qt({vertexColors:!0}));e.castShadow=!0,t.scene.add(e)}}};var It=i=>new Tt(i),_n=i=>`vec3(${i.r.toFixed(4)},${i.g.toFixed(4)},${i.b.toFixed(4)})`,Ss=new L(-.96,.062,.27).normalize(),vn={zenith:It("#120e36"),upper:It("#35215f"),mid:It("#b0477c"),hazeSun:It("#ffae66"),hazeAway:It("#8a4d80"),sunTop:It("#fff6cf"),sunBot:It("#ff6f5e"),glow:It("#ff8a3d"),cloudDark:It("#4a2858"),cloudLit:It("#ff8a7e"),cloudRim:It("#ffcf8a")},Nl=`
const vec3 SK_SUN = vec3(${Ss.x.toFixed(5)},${Ss.y.toFixed(5)},${Ss.z.toFixed(5)});
const vec3 SK_ZENITH = ${_n(vn.zenith)};
const vec3 SK_UPPER = ${_n(vn.upper)};
const vec3 SK_MID = ${_n(vn.mid)};
const vec3 SK_HAZE_SUN = ${_n(vn.hazeSun)};
const vec3 SK_HAZE_AWAY = ${_n(vn.hazeAway)};
const vec3 SK_GLOW = ${_n(vn.glow)};
vec3 fogDirColor(vec3 d) {
  vec2 h = normalize(d.xz + vec2(1e-5));
  float s = max(dot(h, normalize(SK_SUN.xz)), 0.0);
  return mix(SK_HAZE_AWAY, SK_HAZE_SUN, pow(s, 2.5));
}
vec3 skyBase(vec3 d) {
  vec3 hz = fogDirColor(d);
  float y = max(d.y, 0.0);
  float t = sqrt(y);
  vec3 c = mix(hz, SK_MID, smoothstep(0.02, 0.42, t));
  c = mix(c, SK_UPPER, smoothstep(0.3, 0.7, t));
  c = mix(c, SK_ZENITH, smoothstep(0.6, 1.0, t));
  float sd = max(dot(d, SK_SUN), 0.0);
  c += SK_GLOW * (pow(sd, 5.0) * 0.35 + pow(sd, 40.0) * 0.9) * (1.0 - smoothstep(0.0, 0.6, y) * 0.6);
  return c;
}
`,zo=.0021;Vt.fog_pars_vertex=`#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogDir;
#endif`;Vt.fog_vertex=`#ifdef USE_FOG
  vFogDepth = -mvPosition.z;
  vFogDir = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz;
#endif`;Vt.fog_pars_fragment=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogDir;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  ${Nl}
#endif`;Vt.fog_fragment=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  #else
    float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
  #endif
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogDirColor(normalize(vFogDir)), fogFactor);
#endif`;var Fl=class{constructor(t=16){this.cell=t,this.map=new Map}_insert(t,e,n,s,r){let o=this.cell,a=3;for(let c=Math.floor((e-a)/o);c<=Math.floor((s+a)/o);c++)for(let l=Math.floor((n-a)/o);l<=Math.floor((r+a)/o);l++){let h=c*10007+l,u=this.map.get(h);u||this.map.set(h,u=[]),u.push(t)}}box(t,e,n,s,r=!1){this._insert({t:0,x0:t,z0:e,x1:n,z1:s,tall:r},t,e,n,s)}circle(t,e,n){this._insert({t:1,x:t,z:e,r:n},t-n,e-n,t+n,e+n)}inTall(t,e,n){let s=this.map.get(Math.floor(t/this.cell)*10007+Math.floor(e/this.cell));if(!s)return!1;for(let r of s)if(r.tall&&t>r.x0-n&&t<r.x1+n&&e>r.z0-n&&e<r.z1+n)return!0;return!1}occupied(t,e,n){return!!this.resolve(t,e,n)}resolve(t,e,n){let s=Math.floor(t/this.cell)*10007+Math.floor(e/this.cell),r=this.map.get(s);if(!r)return null;let o=null;for(let a of r){let c,l,h,u;if(a.t===0){let f=Math.max(a.x0,Math.min(t,a.x1)),d=Math.max(a.z0,Math.min(e,a.z1));if(c=t-f,l=e-d,h=Math.hypot(c,l),h===0){let x=t-a.x0,_=a.x1-t,g=e-a.z0,m=a.z1-e,M=Math.min(x,_,g,m);M===x?(c=-1,l=0):M===_?(c=1,l=0):M===g?(c=0,l=-1):(c=0,l=1),u=M+n,(!o||u>o.d)&&(o={nx:c,nz:l,d:u});continue}u=n-h}else c=t-a.x,l=e-a.z,h=Math.hypot(c,l),u=n+a.r-h;u>0&&(!o||u>o.d)&&(o={nx:c/h,nz:l/h,d:u})}return o}},Ox=3.2,$e=3.6,pn=8;function Bx(){let t=32*pn,e=document.createElement("canvas");e.width=e.height=t;let n=document.createElement("canvas");n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000000",r.fillRect(0,0,t,t);let o=["#ffd28a","#ffc070","#ffe2a8","#ffb36b","#ffd9b0","#9fe6ff","#ff9fd0"];for(let c=0;c<pn;c++)for(let l=0;l<pn;l++){let h=l*32,u=c*32,f=h+7,d=u+8,x=18,_=19,g=Ct()<.42;if(s.fillStyle="#b8b0a8",s.fillRect(f-1,d+_,x+2,2),g){let m=Ct()<.85?Kt(o.slice(0,5)):Kt(o.slice(5));s.fillStyle=m,s.fillRect(f,d,x,_),r.fillStyle=m,r.fillRect(f,d,x,_),Ct()<.4&&(r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(f,d,x,Math.floor(_*rt(.2,.6)))),Ct()<.3&&(r.fillStyle="rgba(0,0,0,0.6)",r.fillRect(f+x/2-1,d,2,_))}else s.fillStyle="#2b2a4a",s.fillRect(f,d,x,_),s.fillStyle="#5a4a78",s.fillRect(f,d,x,3),s.fillStyle="#3a3558",s.fillRect(f+x/2-1,d,2,_)}s.fillStyle="#ffffff",s.fillRect(0,t-4,4,4),r.fillStyle="#000000",r.fillRect(0,t-4,4,4);let a=c=>{let l=new Ln(c);return l.wrapS=l.wrapT=ks,l.magFilter=ve,l.colorSpace=Oe,l.anisotropy=4,l};return{map:a(e),emissive:a(n)}}function zx(i){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);for(let[s,r]of i)n.addColorStop(s,`rgba(255,255,255,${r})`);return e.fillStyle=n,e.fillRect(0,0,64,64),new Ln(t)}function Hx(){return new Ue({uniforms:{uScale:{value:300}},vertexShader:`
      attribute float gsize; attribute vec3 gcolor; varying vec3 vColor; uniform float uScale;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vColor = gcolor * smoothstep(1.5, 7.0, -mv.z);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(gsize * uScale / -mv.z, 1.5, 110.0);
      }`,fragmentShader:`
      varying vec3 vColor;
      void main(){
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        float a = pow(1.0 - d, 2.4) * 0.9 + smoothstep(0.28, 0.0, d) * 1.2;
        gl_FragColor = vec4(vColor * a, 1.0);
      }`,blending:Gn,depthWrite:!1,transparent:!0})}function Ui(i,t){let e=new Float32Array(i.length*3),n=new Float32Array(i.length*3),s=new Float32Array(i.length);i.forEach((a,c)=>{e.set([a.x,a.y,a.z],c*3),n.set([a.c.r,a.c.g,a.c.b],c*3),s[c]=a.s});let r=new de;r.setAttribute("position",new ne(e,3)),r.setAttribute("gcolor",new ne(n,3)),r.setAttribute("gsize",new ne(s,1));let o=new go(r,t);return o.frustumCulled=!1,o}var Ol=class{constructor(){this.geos=[],this.neonGeos=[]}box(t,e,n,s,r,o,a,c={}){let l=new Jt(t,e,n);l.translate(s,r+e/2,o);let h=l.attributes.uv,u=l.attributes.normal,f=new Float32Array(h.count*3),d=It(a),x=c.roof?It(c.roof):d.clone().multiplyScalar(.62);for(let _=0;_<h.count;_++){let g=u.getY(_),m=u.getX(_);if(!c.windows||Math.abs(g)>.5)h.setXY(_,.004,.004);else{let p=Math.abs(m)>.5?n:t;h.setXY(_,(c.ou||0)+h.getX(_)*p/(Ox*pn),(c.ov||0)+h.getY(_)*e/($e*pn))}let M=g>.5?x:d;f.set([M.r,M.g,M.b],_*3)}l.setAttribute("color",new ne(f,3)),this.geos.push(l)}neon(t,e,n,s,r,o,a,c=3.2){let l=new Jt(t,e,n);l.translate(s,r+e/2,o);let h=It(a).multiplyScalar(c),u=new Float32Array(l.attributes.position.count*3);for(let f=0;f<u.length;f+=3)u.set([h.r,h.g,h.b],f);l.setAttribute("color",new ne(u,3)),this.neonGeos.push(l)}finish(t){let e=Bx(),n=new qt({map:e.map,vertexColors:!0,emissiveMap:e.emissive,emissive:It("#ffffff"),emissiveIntensity:1.6}),s=new mt(Ae(this.geos),n);s.castShadow=s.receiveShadow=!0,t.add(s),t.add(new mt(Ae(this.neonGeos),new le({vertexColors:!0})))}},qn=["#ff3fa4","#35e8ff","#b45cff","#ff6a3d","#63ff9e","#ffd23f"],zu=["#f4b6c2","#9ad7d0","#ffd8a8","#f7efe0","#c7b3e6","#a8e6cf","#ffb895","#f6e08a","#bcdcff","#ff9fb2"],Ul=["#ffd58a","#ffd58a","#ffcf7a","#ff7ab8","#7ae8ff","#ffe9b8"],bs=["#ff4f8b","#35e8ff","#ffd166","#7dff8a","#b45cff","#ff8a3d","#ffe9b8"],cr=class i{constructor(t){this.scene=t,this.colliders=new Fl,this.glowMat=Hx(),this.glows=[],this.palmSpots=[],this.globeLamps=[],this.facades=[],this.roofSpots=[],this.poleGeos=[],this.wires=[],this.updaters=[],this.batch=new Ol,this.time=0,this.buildSky(),this.buildOcean(),this.groundCanvas=this.buildGround(),this.buildCity(),this.buildLamps(),this.buildPier(),this.buildBeach(),this.buildCliffs(),this.buildLandscape(),this.buildBoats(),this.props=new Bo(this),this.buildPalms(),this.buildGlobeLamps(this.globeLamps),this.batch.finish(t),this.finishFestoons(),t.add(Ui(this.glows,this.glowMat))}static skyMaterial(){return new Ue({uniforms:{time:{value:0}},side:We,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`
        uniform float time; varying vec3 vDir;
        ${Nl}
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<5;i++){ s+=a*noise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir);
          vec3 c = skyBase(d);
          float sd = max(dot(d, SK_SUN), 0.0);
          // stars
          if (d.y > 0.25) {
            vec3 q = floor(d * 380.0);
            float h = hash(q.xz + q.y * 17.0);
            c += vec3(0.9, 0.85, 1.0) * step(0.9965, h) * smoothstep(0.25, 0.7, d.y) * (0.5 + 0.5 * sin(time * 2.0 + h * 90.0));
          }
          // sun disk with retro stripes
          float sa = acos(clamp(dot(d, SK_SUN), -1.0, 1.0));
          float R = 0.055;
          if (sa < R) {
            float yy = (d.y - SK_SUN.y) / R;
            vec3 sc = mix(${_n(vn.sunBot)}, ${_n(vn.sunTop)}, smoothstep(-1.0, 0.8, yy));
            float gap = 0.0;
            if (yy < 0.15) {
              float f = fract((yy + 1.0) * 5.5 - time * 0.15);
              gap = step(f, clamp((0.15 - yy) * 0.55, 0.0, 0.7));
            }
            c = mix(c, sc * 1.25, (1.0 - gap));
          }
          // clouds: long stratus streaks lit from below
          if (d.y > 0.0) {
            vec2 uv = d.xz / (d.y + 0.05);
            float n = fbm(uv * vec2(0.35, 1.3) + vec2(time * 0.006, 0.0));
            float n2 = fbm(uv * vec2(0.9, 3.2) + vec2(-time * 0.004, 3.0));
            float dens = smoothstep(0.52, 0.78, n * 0.75 + n2 * 0.4) * smoothstep(0.012, 0.07, d.y) * (1.0 - smoothstep(0.22, 0.5, d.y));
            vec3 cc = mix(${_n(vn.cloudDark)}, ${_n(vn.cloudLit)}, 0.25 + 0.75 * pow(sd, 3.0));
            cc += ${_n(vn.cloudRim)} * pow(sd, 14.0) * 1.6;
            cc = mix(cc, ${_n(vn.cloudDark)} * 0.7, smoothstep(0.1, 0.4, d.y) * 0.6);
            c = mix(c, cc, dens * 0.92);
          }
          gl_FragColor = vec4(c, 1.0);
        }`})}buildSky(){this.sky=new mt(new ci(3e3,32,16),i.skyMaterial()),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky)}buildOcean(){let t=new Ue({uniforms:{time:{value:0},camPos:{value:new L}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
        uniform float time; uniform vec3 camPos; varying vec3 vW;
        ${Nl}
        ${Uu}
        vec2 wave(vec2 p, vec2 dir, float k, float a, float s){ float ph = dot(p, dir) * k + time * s; return dir * cos(ph) * a * k; }
        void main(){
          vec2 p = vW.xz;
          vec2 g = vec2(0.0);
          g += wave(p, normalize(vec2(1.0, 0.3)), 0.12, 0.35, 1.1);
          g += wave(p, normalize(vec2(0.7, -0.7)), 0.23, 0.18, 1.6);
          g += wave(p, normalize(vec2(0.2, 1.0)), 0.41, 0.09, 2.3);
          g += wave(p, normalize(vec2(-0.6, 0.8)), 0.87, 0.04, 3.1);
          g += wave(p, normalize(vec2(0.9, -0.2)), 1.7, 0.018, 4.3);
          vec3 toCam = camPos - vW; float dist = length(toCam); vec3 v = toCam / dist;
          vec3 n = normalize(vec3(-g.x * 3.5, 1.0, -g.y * 3.5));
          n = normalize(mix(n, vec3(0.0, 1.0, 0.0), clamp(dist / 1400.0, 0.0, 0.6)));
          vec3 r = reflect(-v, n); r.y = abs(r.y);
          float fres = 0.12 + 0.88 * pow(1.0 - max(dot(n, v), 0.0), 4.0);
          vec3 deep = vec3(0.035, 0.03, 0.11);
          float cx = coastX(vW.z); float dc = cx - vW.x;
          vec3 shallow = vec3(0.03, 0.16, 0.2);
          vec3 base = mix(deep, shallow, smoothstep(40.0, 0.0, dc));
          vec3 col = mix(base, skyBase(r) * 0.9, fres);
          float sd = max(dot(r, SK_SUN), 0.0);
          col += vec3(1.0, 0.72, 0.4) * (pow(sd, 350.0) * 14.0 + pow(sd, 40.0) * 0.6 + pow(sd, 8.0) * 0.18);
          // shore foam
          float swash = 2.5 + 1.8 * sin(time * 0.7 + vW.z * 0.05) ;
          float foam = smoothstep(swash, swash - 1.2, dc) * (0.6 + 0.4 * sin(vW.z * 1.3 + time * 2.0 + vW.x));
          foam += smoothstep(0.6, 0.0, abs(dc - swash - 3.5 - sin(time*0.5)*1.5)) * 0.35;
          col = mix(col, vec3(0.95, 0.75, 0.7), clamp(foam, 0.0, 1.0) * 0.8);
          float f = 1.0 - exp(-${zo} * ${zo} * dist * dist);
          col = mix(col, fogDirColor(-v), f);
          gl_FragColor = vec4(col, 1.0);
        }`}),e=new mt(new ze(7e3,7e3),t);e.rotation.x=-Math.PI/2,e.position.y=-.6,this.oceanMat=t,this.scene.add(e)}buildGround(){let t=document.createElement("canvas");t.width=t.height=ir;let e=t.getContext("2d"),n=ir/Ze;e.setTransform(n,0,0,n,-un*n,-fn*n);let s=fn,r=fn+Ze;e.fillStyle="#5f7a3a",e.fillRect(un,fn,Ze,Ze);for(let p=0;p<9e3;p++){e.fillStyle=Ct()<.5?"rgba(40,70,30,0.35)":"rgba(120,140,60,0.25)";let v=rt(un,un+Ze),T=rt(fn,fn+Ze),b=rt(.5,4);e.beginPath(),e.arc(v,T,b,0,Math.PI*2),e.fill()}let o={city:"#a0978a",park:"#4f7a34",villa:"#5c7d3c",gas:"#56535c",motel:"#5a5760"};for(let p of ui){if(e.beginPath(),p.i===0)for(let b=p.zA;b<=p.zB;b+=2)e.lineTo(Ne(b),b);else e.moveTo(p.xA,p.zA),e.lineTo(p.xA,p.zB);e.lineTo(p.xB,p.zB),e.lineTo(p.xB,p.zA),e.closePath(),e.fillStyle=o[p.kind],e.fill();let v=p.bx1-p.bx0,T=p.bz1-p.bz0;if(p.kind==="city")e.fillStyle="rgba(80,70,70,0.25)",e.fillRect(p.bx0+4,p.bz0+4,v-8,T-8);else if(p.kind==="park"){let b=(p.bx0+p.bx1)/2,w=(p.bz0+p.bz1)/2;e.strokeStyle="#cdb88e",e.lineWidth=2.2,e.beginPath(),e.moveTo(p.bx0-6,p.bz0-6),e.lineTo(p.bx1+6,p.bz1+6),e.stroke(),e.beginPath(),e.moveTo(p.bx1+6,p.bz0-6),e.lineTo(p.bx0-6,p.bz1+6),e.stroke(),e.beginPath(),e.arc(b,w,9,0,Math.PI*2),e.fillStyle="#d4c09a",e.fill();for(let R=0;R<250;R++)e.fillStyle=Ct()<.5?"rgba(30,60,25,0.4)":"rgba(110,150,60,0.3)",e.fillRect(rt(p.bx0,p.bx1),rt(p.bz0,p.bz1),rt(.4,1.5),rt(.4,1.5));for(let R=0;R<60;R++)e.fillStyle=Kt(["#ff6f91","#ffd166","#ff9fd0","#f7efe0"]),e.fillRect(rt(p.bx0,p.bx1),rt(p.bz0,p.bz1),.5,.5)}else if(p.kind==="villa")for(let b=0;b<300;b++)e.fillStyle=Ct()<.5?"rgba(30,60,25,0.35)":"rgba(120,160,70,0.3)",e.fillRect(rt(p.bx0,p.bx1),rt(p.bz0,p.bz1),rt(.5,2),rt(.5,2));else{e.fillStyle="rgba(230,225,215,0.8)";for(let b=p.bx0+3;b<p.bx1-3;b+=3)e.fillRect(b,p.bz0+2,.15,5),e.fillRect(b,p.bz1-7,.15,5)}}e.beginPath();for(let p=s;p<=r;p+=2)e.lineTo(he(p)-4,p);for(let p=r;p>=s;p-=2)e.lineTo(he(p)+nr+4,p);e.closePath(),e.fillStyle="#e6c894",e.fill();for(let p=0;p<14e3;p++){let v=rt(s,r),T=he(v)+rt(0,nr+2);e.fillStyle=Ct()<.5?"rgba(170,130,90,0.3)":"rgba(255,240,210,0.35)",e.fillRect(T,v,.35,.35)}e.beginPath();for(let p=s;p<=r;p+=2)e.lineTo(he(p)-4,p);for(let p=r;p>=s;p-=2)e.lineTo(he(p)+4+Math.sin(p*.2)*.6,p);e.closePath(),e.fillStyle="#a88a62",e.fill();let a=p=>{e.beginPath(),p.pts.forEach(([v,T],b)=>b?e.lineTo(v,T):e.moveTo(v,T))};e.lineJoin="round",e.lineCap="square";for(let p of Se)a(p),e.lineWidth=p.w+p.sw*2,e.strokeStyle=p.bvd?"#d9a99a":"#b3aca0",e.stroke();for(let p of Se)a(p),e.lineWidth=p.w+.7,e.strokeStyle="#e8e2d4",e.stroke();let c=Se[0];a(c),e.lineWidth=c.w,e.strokeStyle="#3b3a42",e.stroke();let l=(p,v,T,b=!1)=>{e.lineWidth=v,e.strokeStyle=T,e.lineCap="butt";let w=!1;e.beginPath();for(let R=-420;R<=420;R+=1){let k=Ne(R)+p;if(sn(k,R,c,2.5)||b&&(R%6+6)%6>=3){w=!1;continue}w?e.lineTo(k,R):(e.moveTo(k,R),w=!0)}e.stroke()};l(0,3.4,"#e8e2d4"),l(0,2.8,"#557a36");for(let p of[-1,1])l(p*9.3,.18,"#e9e6dc"),l(p*5.6,.18,"#e9e6dc",!0);e.lineCap="square";for(let p of Se)p.bvd||(a(p),e.lineWidth=p.w,e.strokeStyle="#3b3a42",e.stroke());e.fillStyle="rgba(90,70,70,0.25)";for(let p=-420;p<420;p+=1.5)for(let v of[-1,1]){let T=Ne(p)+v*(c.w/2+c.sw/2);sn(T,p,c)||e.fillRect(T-c.sw/2,p,c.sw,.12)}let h=(p,v,T,b,w)=>{e.fillStyle=w,e.fillRect(p-T/2,v-b/2,T,b)};for(let p of Se){if(p.bvd)continue;let v=p.b-p.a;for(let T=0;T<v;T+=1){let b=p.a+T,[w,R]=p.vert?[p.c,b+.5]:[b+.5,p.c];sn(w,R,p,2.5)||Math.floor(T)%6<3&&h(w,R,p.vert?.2:1,p.vert?1:.2,"#e8b64a")}for(let T of[-1,1]){e.lineWidth=.16,e.strokeStyle="#dcd8cc",e.lineCap="butt",e.beginPath();let b=!1;for(let w=0;w<=v;w+=1){let R=p.a+w,k=T*(p.w/2-.6),[y,E]=p.vert?[p.c+k,R]:[R,p.c+k];if(sn(y,E,p,2.5)){b=!1;continue}b?e.lineTo(y,E):(e.moveTo(y,E),b=!0)}e.stroke()}}let u=(p,v,T,b)=>{e.fillStyle="#e4e0d4";for(let w=-b/2+.6;w<b/2-.3;w+=1.2)T?e.fillRect(p+w,v-1.5,.6,3):e.fillRect(p-1.5,v+w,3,.6)};for(let{v:p,h:v}of sr)for(let T of[-1,1]){let b=v.c+T*(v.w/2+2.2);b>p.a&&b<p.b&&u(p.c,b,!0,p.w);let w=p.c+T*(p.w/2+2.2);w>v.a&&w<v.b&&u(w,v.c,!1,v.w)}for(let p of Se.filter(v=>v.horiz))u(Ne(p.c)+Ms/2+2.2,p.c,!1,p.w);e.setTransform(1,0,0,1,0,0);let f=document.createElement("canvas");f.width=f.height=128;let d=f.getContext("2d"),x=d.createImageData(128,128);for(let p=0;p<x.data.length;p+=4){let v=Ct()<.5?0:255;x.data[p]=x.data[p+1]=x.data[p+2]=v,x.data[p+3]=Math.floor(Ct()*22)}d.putImageData(x,0,0),e.globalCompositeOperation="source-atop",e.fillStyle=e.createPattern(f,"repeat"),e.fillRect(0,0,ir,ir),e.globalCompositeOperation="source-over",e.setTransform(n,0,0,n,-un*n,-fn*n),e.globalCompositeOperation="destination-out",e.fillStyle="#000",e.beginPath();for(let p=s-4;p<=r+4;p+=2)e.lineTo(he(p),p);e.lineTo(un-10,r+10),e.lineTo(un-10,s-10),e.closePath(),e.fill(),e.globalCompositeOperation="source-over",e.setTransform(1,0,0,1,0,0);let _=new Ln(t);_.colorSpace=Oe,_.magFilter=ve,_.anisotropy=8;let g=new ze(Ze,Ze,240,240);g.rotateX(-Math.PI/2),g.translate(un+Ze/2,0,fn+Ze/2);let m=g.attributes.position;for(let p=0;p<m.count;p++)m.setY(p,Ot(m.getX(p),m.getZ(p)));g.computeVertexNormals();let M=new mt(g,new qt({map:_,alphaTest:.5}));return M.receiveShadow=!0,this.scene.add(M),t}buildCity(){let t=this.batch,e=["#8fa6c0","#c9b8a6","#e9e1d2","#a5b8c8","#d8c2d6","#9cc9c4"],n="#f2eadc",s=(o,a,c,l,h)=>{let u=[],f=o;for(;a-f>=c;){let d=rt(c,l);a-(f+d)<c+h&&(d=a-f),u.push([f,f+d]),f+=d+h}return!u.length&&a-o>6&&u.push([o,a]),u},r=(o,a,c,l)=>Math.min(Ot(o,a),Ot(c,a),Ot(o,l),Ot(c,l),Ot((o+c)/2,(a+l)/2));for(let o of ui){if(o.kind==="park"){this.parkDecor(o);continue}if(o.kind==="villa"){this.villaBlock(o,s);continue}if(o.kind!=="city")continue;let a=s(o.bx0,o.bx1,13,24,rt(2,4)),c=s(o.bz0,o.bz1,13,24,rt(2,4));a.forEach(([l,h],u)=>c.forEach(([f,d],x)=>{if(u>0&&u<a.length-1&&x>0&&x<c.length-1){this.palmSpots.push([(l+h)/2+rt(-3,3),(f+d)/2+rt(-3,3)]);return}let g=h-l,m=d-f,M=(l+h)/2,p=(f+d)/2,v=o.i===0,T=o.j===0||o.j===en.length-2,b=r(l,f,h,d)-1.5,w=Math.hypot(M-85,p-0),R=v?rt(10,30):8+Ct()*18+70*Math.exp(-(w*w)/28800)*(.3+Ct());!v&&Ct()<.12&&w<170&&(R+=rt(30,55)),T&&(R=Math.min(R,rt(10,22))),R=Math.max(2,Math.round(R/$e))*$e+.6;let k=R>45,y=v||!k?Kt(zu):Kt(e),E=Math.floor(Ct()*pn)/pn,F=Math.floor(Ct()*pn)/pn;t.box(g,R+1.5,m,M,b,p,y,{windows:!0,ou:E,ov:F});let I=b+1.5+R;this.colliders.box(l,f,h,d,!0);let U=[];u===0&&U.push([-1,0]),u===a.length-1&&U.push([1,0]),x===0&&U.push([0,-1]),x===c.length-1&&U.push([0,1]);for(let[D,Y]of U)this.facades.push({x:M+D*g/2,z:p+Y*m/2,nx:D,nz:Y,len:D?m:g,y:b+1.5,beach:v,h:R});let[z,N]=U.length?Kt(U):[0,1];t.box(g+.8,.7,m+.8,M,I,p,n,{roof:"#8a8078"});let G=I+.7;if(v||Ct()<.35)for(let D=$e*2;D<R-1;D+=$e*(v?1:2))t.box(g+.7,.22,m+.7,M,b+1.5+D-.4,p,n);if(v)if(t.neon(.15,.15,m*.8,l-.1,b+1.5+$e-.5,p,Kt(qn),2.4),R>16&&m>12)this.roofSpots.push({x:l+1.5,z:p,y:G,len:m,nx:-1,nz:0,hotel:!0});else{let D=R+rt(3,7);t.box(.8,D,3,l-.4,b+1.5,p,n),t.neon(.15,D-4,.15,l-.85,b+3.5,p,Kt(qn))}if(k){t.box(g*.7,5,m*.7,M,G,p,y,{windows:!0,ou:E,ov:F}),t.box(g*.4,4,m*.4,M,G+5,p,n),t.box(.4,10,.4,M,G+9,p,"#555060"),this.glows.push({x:M,y:G+19.3,z:p,s:2.2,c:It("#ff2a3a").multiplyScalar(3)});let D=Kt(qn),Y=g*.7,Z=m*.7;if(t.neon(Y+.2,.25,.2,M,G+4.8,p-Z/2,D),t.neon(Y+.2,.25,.2,M,G+4.8,p+Z/2,D),t.neon(.2,.25,Z+.2,M-Y/2,G+4.8,p,D),t.neon(.2,.25,Z+.2,M+Y/2,G+4.8,p,D),Ct()<.6)for(let[et,pt]of[[-1,-1],[1,1]])t.neon(.18,R-6,.18,M+et*(g/2+.05),b+6,p+pt*(m/2+.05),D,2.6)}else!v&&R>12&&R<40&&Ct()<.3&&U.length?this.roofSpots.push({x:M,z:p,y:G,len:z?m:g,nx:z,nz:N,hotel:!1}):Ct()<.5&&t.box(g*rt(.3,.6),rt(2,4),m*rt(.3,.6),M+rt(-2,2),G,p+rt(-2,2),n,{roof:"#6d6560"});for(let D=0;D<3;D++)Ct()<.6&&t.box(rt(1,2.5),rt(.8,1.6),rt(1,2.5),M+rt(-g/3,g/3),G,p+rt(-m/3,m/3),"#8c8790");if(!k&&Ct()<.55){let D=Kt(qn),Y=g+.9,Z=m+.9;t.neon(Y,.18,.18,M,G-.1,p-Z/2,D),t.neon(Y,.18,.18,M,G-.1,p+Z/2,D),t.neon(.18,.18,Z,M-Y/2,G-.1,p,D),t.neon(.18,.18,Z,M+Y/2,G-.1,p,D)}if(!v&&Ct()<.2){let D=Kt(qn);for(let Y=$e*3;Y<R-2;Y+=$e*3)z?t.neon(.12,.12,m*.9,M+z*(g/2+.06),b+1.5+Y-.3,p,D,2.2):t.neon(g*.9,.12,.12,M,b+1.5+Y-.3,p+N*(m/2+.06),D,2.2)}if(!v&&R<40&&Ct()<.5){let D=Kt(qn),Y=Math.min(R-6,rt(6,12)),Z=z?M+z*(g/2+.7):M+rt(-g/4,g/4),et=N?p+N*(m/2+.7):p+rt(-m/4,m/4);t.box(z?.5:1.4,Y,z?1.4:.5,Z,b+6,et,"#2a2433"),t.neon(z?.6:1.1,Y-.6,z?1.1:.6,Z+z*.05,b+6.3,et+N*.05,D,2.2);for(let pt=1;pt<Y-1;pt+=1.4)t.neon(z?.62:.5,.25,z?.5:.62,Z+z*.06,b+6.3+pt,et+N*.06,"#ffffff",2.4)}}))}}villaBlock(t,e){let n=this.batch,s=e(t.bx0,t.bx1,16,26,rt(4,7)),r=e(t.bz0,t.bz1,16,26,rt(4,7));s.forEach(([o,a],c)=>r.forEach(([l,h],u)=>{if(Ct()<.12){this.palmSpots.push([(o+a)/2,(l+h)/2]);return}let f=a-o,d=h-l,x=c===0?-1:c===s.length-1?1:0,_=u===0?-1:u===r.length-1?1:0,g=f*rt(.5,.65),m=d*rt(.5,.65),M=x?x<0?o+g/2:a-g/2:o+g/2+rt(0,f-g),p=_?_<0?l+m/2:h-m/2:l+m/2+rt(0,d-m),v=M-g/2,T=M+g/2,b=p-m/2,w=p+m/2,R=Math.min(Ot(v,b),Ot(T,b),Ot(v,w),Ot(T,w))-1.5,k=Ct()<.6?2:1,y=k*$e+.8,E=Kt(zu),F=Math.floor(Ct()*pn)/pn,I=Math.floor(Ct()*pn)/pn;if(n.box(g,y+1.5,m,M,R,p,E,{windows:!0,ou:F,ov:I}),n.box(g+.6,.5,m+.6,M,R+1.5+y,p,"#f2eadc",{roof:"#b86b4b"}),k===2&&Ct()<.6){let N=g*.5,G=m*.8,D=M+(Ct()<.5?-1:1)*(g/2+N/2-.5);D-N/2>o&&D+N/2<a&&(n.box(N,$e+2.3,G,D,R,p,E,{windows:!0,ou:F,ov:I}),n.box(N+.5,.4,G+.5,D,R+$e+2.3,p,"#f2eadc",{roof:"#b86b4b"}),this.colliders.box(D-N/2,p-G/2,D+N/2,p+G/2,!0))}if(Ct()<.35){let N=Kt(qn);n.neon(g+.7,.14,.14,M,R+1.5+y+.5,p-(m+.6)/2,N,2.4),n.neon(g+.7,.14,.14,M,R+1.5+y+.5,p+(m+.6)/2,N,2.4)}this.colliders.box(v,b,T,w,!0);let U=x?M-x*(g/2+4):M+(M-o>a-M?-1:1)*(g/2+4),z=_?p-_*2:p;if(U-3>o&&U+3<a&&Ct()<.7){let N=Ot(U,z),G=new mt(new Jt(4,.3,7),this.poolMat||(this.poolMat=new le({color:It("#3fd8e6").multiplyScalar(.9)})));G.position.set(U,N+.02,z),this.scene.add(G),this.glows.push({x:U,y:N+.5,z,s:5,c:It("#2fbfd0").multiplyScalar(.35)})}this.facades.push({villa:!0,x:M+x*g/2,z:p+_*m/2,nx:x,nz:_,len:x?m:g,y:R+1.5,h:y});for(let N=0;N<2;N++){let G=rt(o+1,a-1),D=rt(l+1,h-1);(G<v-1.5||G>T+1.5||D<b-1.5||D>w+1.5)&&this.palmSpots.push([G,D])}}))}parkDecor(t){let e=(t.bx0+t.bx1)/2,n=(t.bz0+t.bz1)/2,s=Ot(e,n),r=new qt({color:"#e9dcc4"}),o=new mt(new ie(5,5.4,1.4,16),r);o.position.set(e,s+.1,n),o.castShadow=o.receiveShadow=!0;let a=new mt(new ie(4.6,4.6,.1,16),new le({color:It("#4fd6e0").multiplyScalar(.8)}));a.position.set(e,s+.72,n);let c=new mt(new ie(.5,.8,3,8),r);c.position.set(e,s+1.5,n),c.castShadow=!0,this.scene.add(o,a,c),this.glows.push({x:e,y:s+3.3,z:n,s:3,c:It("#6ff0ff").multiplyScalar(1.4)}),this.colliders.circle(e,n,5.4);for(let h=0;h<16;h++){let u=Ct()*Math.PI*2,f=rt(12,Math.min(t.bx1-t.bx0,t.bz1-t.bz0)/2);this.palmSpots.push([e+Math.cos(u)*f,n+Math.sin(u)*f])}let l=[];for(let h=0;h<6;h++){let u=h/6*Math.PI*2+.3;this.globeLamps.push([e+Math.cos(u)*11,n+Math.sin(u)*11]),l.push([e+Math.cos(u)*11,n+Math.sin(u)*11])}for(let h of l)this.festoon([h,[e,n]],3.4,.7,{palette:bs,poles:!1,topY:[s+3.4,s+3.1]})}static palmGeometry(t){let e=El(t),n=(p,v)=>p+(v-p)*e(),s=n(8,12),r=n(1.2,3.2),o=[];for(let p=0;p<=6;p++){let v=p/6;o.push(new L(r*v*v,s*v,0))}let a=new Zs(o),c=new wo(a,10,.2,6,!1);{let p=c.attributes.position,v=new Float32Array(p.count*3),T=It("#6e5238"),b=It("#8a6a48");for(let w=0;w<p.count;w++){let R=Math.floor(w/7),k=R/10,y=a.getPoint(k),E=1.35-k*.55;p.setXYZ(w,y.x+(p.getX(w)-y.x)*E,p.getY(w),y.z+(p.getZ(w)-y.z)*E);let F=R%2?T:b;v.set([F.r,F.g,F.b],w*3)}c.setAttribute("color",new ne(v,3))}let l=[c.toNonIndexed()],h=a.getPoint(1),u=[],f=[],d=10,x=It("#2c4f22"),_=It("#5d8a35"),g=It("#8a8a3a");for(let p=0;p<d;p++){let v=p/d*Math.PI*2+n(-.2,.2),T=n(3.6,5.2),b=n(.4,1.4),w=n(2,3.2),R=new L(Math.cos(v),0,Math.sin(v)),k=new L(-R.z,0,R.x),y=6,E=[],F=[],I=[];for(let z=0;z<=y;z++){let N=z/y,G=h.clone().addScaledVector(R,T*N);G.y+=b*N*2-w*N*N;let D=.85*Math.sin(Math.PI*Math.min(1,N*1.15))+.05;E.push(G),F.push(G.clone().addScaledVector(k,D).add(new L(0,-.35*D,0))),I.push(G.clone().addScaledVector(k,-D).add(new L(0,-.35*D,0)))}let U=e()<.12?g:x;for(let z=0;z<y;z++){let N=z/y,G=U.clone().lerp(_,N*.8),D=U.clone().lerp(_,(N+1/y)*.8);for(let Y of[F,I]){let Z=[E[z],Y[z],E[z+1],Y[z],Y[z+1],E[z+1]],et=[G,G,D,G,D,D];Z.forEach((pt,Dt)=>{u.push(pt.x,pt.y,pt.z),f.push(et[Dt].r,et[Dt].g,et[Dt].b)})}}}let m=new Ci(.22,0);for(let p=0;p<4;p++){let v=p/4*Math.PI*2,T=m.clone();T.translate(h.x+Math.cos(v)*.3,h.y-.35,h.z+Math.sin(v)*.3);let b=It("#4a3a20"),w=new Float32Array(T.attributes.position.count*3);for(let R=0;R<w.length;R+=3)w.set([b.r,b.g,b.b],R);T.setAttribute("color",new ne(w,3)),T.deleteAttribute("uv"),l.push(T)}let M=new de;M.setAttribute("position",new Zt(u,3)),M.setAttribute("color",new Zt(f,3)),M.computeVertexNormals(),l[0].deleteAttribute("uv"),l.push(M);for(let p of l)p.attributes.normal||p.computeVertexNormals();return Ae(l)}buildPalms(){let t=this.palmSpots,e=Se[0];for(let u=-392;u<=392;u+=16){let f=Ne(u);sn(f,u,e,4)||t.push([f,u])}for(let u=-385;u<=385;u+=14){let f=Ne(u)-Ms/2-er-1.2;Math.abs(u-pe.z)>10&&t.push([f,u])}for(let u=0;u<90;u++){let f=rt(-395,395),d=he(f)+rt(9,22);Math.abs(f-pe.z)>12&&!this.colliders.occupied(d,f,1.5)&&t.push([d,f])}for(let u of Se)if(u.horiz)for(let f=u.a+20;f<u.b;f+=22)for(let d of[-1,1]){let x=u.c+d*(u.w/2+2.5);!sn(f+8,x,u,4)&&!this.colliders.occupied(f+8,x,1)&&t.push([f+8,x])}for(let u=0;u<700;u++){let f=rt(-150,hi.x),d=rt(-hi.z,hi.z);rr(f,d).d>-3||f<hn[hn.length-1]+10&&Math.abs(d)<en[en.length-1]+10||f<he(d)+nr+20||sn(f,d,null,3)||this.colliders.occupied(f,d,2)||t.push([f,d])}let n=[11,23,37,51].map(u=>i.palmGeometry(u)),s=new qt({vertexColors:!0,side:De}),r=n.map(()=>[]);for(let u of t)r[Math.floor(Ct()*n.length)].push(u);let o=new te,a=new tn,c=new L,l=new L,h=new L(0,1,0);n.forEach((u,f)=>{let d=r[f],x=new Ye(u,s,d.length);d.forEach(([_,g,m],M)=>{let p=rt(.8,1.2);a.setFromAxisAngle(h,Ct()*Math.PI*2),o.compose(l.set(_,(m??Ot(_,g))-.1,g),a,c.set(p,p*rt(.9,1.15),p)),x.setMatrixAt(M,o),m===void 0&&this.colliders.circle(_,g,.45)}),x.castShadow=!0,x.receiveShadow=!0,this.scene.add(x)})}buildLamps(){let t=[];for(let p of Se){if(p.bvd){for(let T=-380;T<=380;T+=32){let b=Ne(T);sn(b,T,p,6)||t.push({x:b,z:T,a:-Math.PI/2},{x:b,z:T,a:Math.PI/2})}continue}let v=1;for(let T=p.a+12;T<p.b-6;T+=30){v=-v;let b=v*(p.w/2+1.1),w=p.vert?p.c+b:T,R=p.vert?T:p.c+b;if(sn(w,R,p,6))continue;let k=p.vert?v>0?-Math.PI/2:Math.PI/2:v>0?Math.PI:0;t.push({x:w,z:R,a:k})}}let e=new ie(.1,.16,7.5,6);e.translate(0,3.75,0);let n=new Jt(.1,.1,2.4);n.translate(0,7.35,1.1);let s=new Jt(.06,.4,.06);s.translate(0,7.15,2.2);let r=new ie(.28,.32,1.2,6);r.translate(0,0,0);let o=Ae([e,n,s,r].map(p=>p.toNonIndexed())),a=new ie(.18,.42,.35,8);a.translate(0,6.85,2.2);let c=new Ye(o,new qt({color:"#2d2a36"}),t.length),l=new Ye(a,new le({color:It("#ffd59a").multiplyScalar(4)}),t.length),h=zx([[0,.9],[.5,.35],[1,0]]),u=new ze(15,15);u.rotateX(-Math.PI/2);let f=new Ye(u,new le({map:h,color:It("#ff9c4a").multiplyScalar(.38),blending:Gn,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.length),d=new te,x=new qe,_=new tn,g=new L(1,1,1),m=It("#ffc27a");t.forEach((p,v)=>{let T=Ot(p.x,p.z);d.makeRotationFromEuler(x.set(0,p.a,0)),d.setPosition(p.x,T,p.z),c.setMatrixAt(v,d),l.setMatrixAt(v,d);let b=p.x+Math.sin(p.a)*2.2,w=p.z+Math.cos(p.a)*2.2,R=Fu(b,w);_.setFromUnitVectors(new L(0,1,0),new L(R[0],R[1],R[2])),d.compose(new L(b,Ot(b,w)+.05,w),_,g),f.setMatrixAt(v,d),this.glows.push({x:b,y:T+6.6,z:w,s:4.2,c:m.clone().multiplyScalar(1.3)}),this.colliders.circle(p.x,p.z,.35)}),c.castShadow=!0,this.scene.add(c,l,f);let M=[];for(let p=-392;p<=392;p+=14){if(Math.abs(p+7-pe.z)<10){M.push(null);continue}M.push([Ne(p+7)-Ms/2-er-1.6,p+7])}this.festoon(M,4.6,1.3)}festoon(t,e,n,s={}){let r=s.palette||Ul,o=s.bright??2.2,a=s.size??.55,c=t.map((l,h)=>{if(!l)return null;let u=l.x??l[0],f=l.z??l[1],d=Ot(u,f),x=s.topY?.[h]??l.top??d+e;return{x:u,z:f,gy:d,top:x,pole:l.pole??s.poles!==!1}});for(let l of c){if(!l||!l.pole)continue;let h=new ie(.07,.09,l.top-l.gy+.3,5);h.translate(l.x,(l.top+l.gy)/2+.15,l.z),this.poleGeos.push(h),this.colliders.circle(l.x,l.z,.25)}for(let l=0;l<c.length-1;l++){let h=c[l],u=c[l+1];if(!h||!u)continue;let f=Math.hypot(u.x-h.x,u.z-h.z),d=Math.max(2,Math.round(f/(s.spacing||.9))),x=null;for(let _=0;_<=d;_++){let g=_/d,m=h.x+(u.x-h.x)*g,M=h.z+(u.z-h.z)*g,p=h.top+(u.top-h.top)*g-.1-n*4*g*(1-g);_>0&&_<d&&this.glows.push({x:m,y:p-.12,z:M,s:a,c:It(Kt(r)).multiplyScalar(o)}),x&&this.wires.push(x[0],x[1],x[2],m,p,M),x=[m,p,M]}}}finishFestoons(){if(this.poleGeos.length){let e=new mt(Ae(this.poleGeos.map(n=>n.toNonIndexed())),new qt({color:"#3a3040"}));e.castShadow=!0,this.scene.add(e)}let t=new de;t.setAttribute("position",new Zt(this.wires,3)),this.scene.add(new mo(t,new qs({color:"#1c1620"})))}buildGlobeLamps(t){let e=new ie(.07,.1,3.4,6);e.translate(0,1.7,0);let n=new Ye(e,new qt({color:"#23202a"}),t.length),s=new Ci(.28,1);s.translate(0,3.6,0);let r=new Ye(s,new le({color:It("#fff0d0").multiplyScalar(3)}),t.length),o=new te;t.forEach(([a,c,l],h)=>{let u=l??Ot(a,c);o.makeTranslation(a,u,c),n.setMatrixAt(h,o),r.setMatrixAt(h,o),this.glows.push({x:a,y:u+3.6,z:c,s:1.7,c:It("#ffd9a0").multiplyScalar(1.3)}),this.colliders.circle(a,c,.2)}),this.scene.add(n,r)}buildPier(){let{z:t,w:e,x0:n,x1:s}=pe,r=n-s,o=(n+s)/2,a=new qt({color:"#8a6446"}),c=new qt({color:"#4a3528"}),l=document.createElement("canvas");l.width=16,l.height=256;let h=l.getContext("2d");for(let T=0;T<256;T+=2)h.fillStyle=T%4?"#8d6a4a":"#7a5a3e",h.fillRect(0,T,16,2);let u=new Ln(l);u.colorSpace=Oe,u.magFilter=ve;let f=new mt(new Jt(r,.5,e),[c,c,new qt({map:u}),c,c,c]);f.position.set(o,-.2,t),f.receiveShadow=!0,this.scene.add(f);let d=[];for(let T=s+1;T<n;T+=6)for(let b of[-1,1]){let w=new ie(.25,.25,5,6);w.translate(T,-2.6,t+b*(e/2-.3)),d.push(w)}let x=[];for(let T of[-1,1]){let b=t+T*(e/2-.1),w=new Jt(r-6,.12,.12);w.translate(o-3,1,b),x.push(w);let R=new Jt(r-6,.08,.08);R.translate(o-3,.55,b),x.push(R);for(let k=s;k<n-6;k+=2.5){let y=new Jt(.1,1,.1);y.translate(k,.5,b),x.push(y)}this.colliders.box(s,b-.2,n-6,b+.2)}let _=new Jt(.12,.12,e);_.translate(s+.1,1,t),x.push(_),this.colliders.box(s-1,t-e/2,s+.3,t+e/2),this.scene.add(new mt(Ae(d),c));let g=new mt(Ae(x),new qt({color:"#efe6d6"}));g.castShadow=!0,this.scene.add(g);let m=[],M=[[],[]];for(let T=n-8;T>s;T-=11)for(let[b,w]of[[0,-1],[1,1]])m.push([T,t+w*(e/2-.1)]);for(let T=n-8;T>s+2;T-=11)M[0].push([T,t-e/2+.1]),M[1].push([T,t+e/2-.1]);this.globeLamps.push(...m);let p=[];M[0].forEach((T,b)=>p.push(b%2?M[1][b]:T)),this.festoon(p.map(T=>[T[0],T[1]]),3.6,.6);let v=new mt(new An(4.2,2,8),new qt({color:"#e05a6a",flatShading:!0}));v.position.set(s+5,4.6,t),v.castShadow=!0,this.scene.add(v);for(let[T,b]of[[-2.5,-2.5],[-2.5,2.5],[2.5,-2.5],[2.5,2.5]]){let w=new mt(new ie(.12,.12,3.6,6),new qt({color:"#efe6d6"}));w.position.set(s+5+T,1.8,t+b),w.castShadow=!0,this.scene.add(w),this.colliders.circle(s+5+T,t+b,.3)}this.glows.push({x:s+5,y:3.4,z:t,s:3.2,c:It("#ffcf8a").multiplyScalar(1.6)})}buildBeach(){let t=[["#e8445a","#f7efe0"],["#2fa3a0","#f7efe0"],["#f09a3a","#fff2d0"],["#6a5acd","#ffd8a8"],["#ff7ab8","#fff"]],e=s=>Math.abs(s-pe.z)<14||s>nn.z0-12&&s<nn.z1+12;for(let s=0;s<40;s++){let r=rt(-390,390);if(e(r))continue;let o=he(r)+rt(7,18),[a,c]=Kt(t),l=new An(1.7,.7,10,1,!0).toNonIndexed(),h=new Float32Array(l.attributes.position.count*3);for(let x=0;x<l.attributes.position.count;x++){let _=It(Math.floor(x/3)%2?a:c);h.set([_.r,_.g,_.b],x*3)}l.setAttribute("color",new ne(h,3));let u=new mt(l,new qt({vertexColors:!0,side:De,flatShading:!0}));u.position.set(o,2.35,r),u.rotation.z=rt(-.15,.15),u.castShadow=!0;let f=new mt(new ie(.04,.04,2.4,4),new qt({color:"#ddd"}));f.position.set(o,1.2,r),this.scene.add(u,f),this.colliders.circle(o,r,.15);let d=new mt(new ze(.9,1.9),new qt({color:Kt(["#ff6f91","#35c8d8","#ffd166","#b45cff"])}));d.rotation.x=-Math.PI/2,d.rotation.z=rt(0,3),d.position.set(o+rt(-1.5,1.5),.03,r+rt(-1.5,1.5)),this.scene.add(d)}let n=["#ff9fb2","#9ad7d0","#ffd166","#c7b3e6"];for(let s of[-330,-215,-130,40,300]){let r=he(s)+10,o=new Be,a=new qt({color:"#efe6d6"});for(let[f,d]of[[-1.3,-1.3],[-1.3,1.3],[1.3,-1.3],[1.3,1.3]]){let x=new mt(new Jt(.2,2.2,.2),a);x.position.set(f,1.1,d),o.add(x)}let c=new mt(new Jt(3,2.2,3.4),new qt({color:Kt(n)}));c.position.y=3.3,o.add(c);let l=new mt(new Jt(.1,.8,2.6),new le({color:It("#ffcf8a").multiplyScalar(1.3)}));l.position.set(-1.52,3.5,0),o.add(l);let h=new mt(new Jt(3.6,.25,4),a);h.position.y=4.5,o.add(h);let u=new mt(new Jt(3.2,.12,1.2),a);u.position.set(3,1.1,0),u.rotation.z=.7,o.add(u),o.traverse(f=>{f.castShadow=!0}),o.position.set(r,0,s),this.scene.add(o),this.colliders.box(r-1.5,s-1.7,r+1.5,s+1.7),this.festoon([{x:r+1.5,z:s-1.7,top:4.6,pole:!1},[r+5,s-7],[r+1,s-12]],2.6,.5,{palette:bs})}}buildCliffs(){let{x:t,z:e,r:n}=hi,s=-620,r=4,o=[],a=(m,M,p,v)=>o.push({x:m,z:M,nx:p,nz:v});for(let m=s;m<t-n;m+=r)a(m,e,0,1);for(let m=Math.PI/2;m>0;m-=r/n)a(t-n+Math.cos(m)*n,e-n+Math.sin(m)*n,Math.cos(m),Math.sin(m));for(let m=e-n;m>-(e-n);m-=r)a(t,m,1,0);for(let m=0;m>-Math.PI/2;m-=r/n)a(t-n+Math.cos(m)*n,-(e-n)+Math.sin(m)*n,Math.cos(m),Math.sin(m));for(let m=t-n;m>=s;m-=r)a(m,-e,0,-1);let c=[[-5,-5],[0,0],[2.5,6],[5,14],[8,22],[11,28],[15,32],[24,35],[45,37],[90,38],[220,34]],l=["#b9774f","#d49a68","#9a5f45","#c78660","#e0b080","#a86a4c"].map(It),h=[It("#4d6a34"),It("#5a7a3a"),It("#44602f")],u=o.map((m,M)=>{let p=he(m.z),T=m.x<p+2?-3:Ot(m.x,m.z),b=.12+.88*(1-Math.pow(1-Math.max(0,Math.min(1,(m.x-s)/(p+40-s))),2)),w=(.78+.28*Math.sin(M*.071)+.14*Math.sin(M*.23+1.7))*b;return c.map(([R,k],y)=>{let E=y>=2?Math.max(0,Math.sin(M*.16)+.6*Math.sin(M*.41+1))*5:0,F=y>=2&&y<=7?(Math.sin(M*.9+y*2.1)+Math.sin(M*.37+y*1.3)+Math.sin(M*1.7+y))*1.5:0,I=R+Math.max(-R+.5,F-E*.8),U=T+k*w+(y>=7?Math.sin(M*.19+y)*1.5*b:0);return{x:m.x+m.nx*I,y:U,z:m.z+m.nz*I,rel:k*w,k:y}})}),f=[],d=[],x=(m,M)=>m.k>=7?h[(M+m.k)%3]:m.k===6?It("#8a7a50"):m.y<.8?It("#4a3a3a"):l[Math.floor(m.rel/4.2)%l.length].clone().multiplyScalar(.9+.2*Math.sin(M*.5+m.k));for(let m=0;m<u.length-1;m++){let M=u[m],p=u[m+1];for(let v=0;v<c.length-1;v++){let T=[M[v],p[v],p[v+1],M[v],p[v+1],M[v+1]],b=x(M[v+1],m);for(let w of T)f.push(w.x,w.y,w.z),d.push(b.r,b.g,b.b)}if(m%5===0&&u[m][8].y>10){let v=rt(.15,.9),T=u[m][7],b=u[m][9];this.palmSpots.push([T.x+(b.x-T.x)*v,T.z+(b.z-T.z)*v,T.y+(b.y-T.y)*v])}}let _=new de;_.setAttribute("position",new Zt(f,3)),_.setAttribute("color",new Zt(d,3)),_.computeVertexNormals();let g=new mt(_,new qt({vertexColors:!0,flatShading:!0,side:De}));g.castShadow=g.receiveShadow=!0,this.scene.add(g)}buildLandscape(){let t=[],e=(o,a,c,l,h)=>{let u=new ci(1,12,6,0,Math.PI*2,0,Math.PI/2).toNonIndexed(),f=u.attributes.position,d=Ct()*10;for(let g=0;g<f.count;g++){let m=f.getX(g),M=f.getY(g),p=f.getZ(g),v=Math.atan2(p,m),T=1+Math.sin(v*3+d)*.12+Math.sin(v*7+d*2)*.06,b=1+Math.sin(v*5+d)*.1*M;f.setXYZ(g,m*c*T,Math.pow(M,1.25)*l*b,p*c*T*.85)}u.translate(o,-1,a),u.computeVertexNormals();let x=It(h),_=new Float32Array(f.count*3);for(let g=0;g<f.count;g++){let m=f.getY(g)/l,M=x.clone().lerp(It("#6a5a4a"),Math.max(0,m-.75));_.set([M.r,M.g,M.b],g*3)}u.setAttribute("color",new ne(_,3)),u.deleteAttribute("uv"),t.push(u)};for(let o=0;o<34;o++)e(rt(720,1400),rt(-1300,1300),rt(140,280),rt(90,250),Kt(["#3a4a3a","#43503e","#3d3f4a"]));for(let o of[-1,1])for(let a=0;a<12;a++)e(rt(-250,700),o*rt(700,1200),rt(120,240),rt(70,200),Kt(["#3a4a3a","#43503e","#3d3f4a"]));let n=new mt(Ae(t),new qt({vertexColors:!0,flatShading:!0}));this.scene.add(n);let s=new mt(new ze(3e3,3e3),new qt({color:"#3f5a30"}));s.rotation.x=-Math.PI/2,s.position.set(hi.x+1500+180,30,0),this.scene.add(s);for(let o of[-1,1]){let a=s.clone();a.position.set(0,30,o*(hi.z+1500+180)),this.scene.add(a)}let r=new le({color:It("#6b3a6a"),fog:!1});for(let[o,a,c,l]of[[-1500,-700,260,70],[-1650,-520,180,110],[-1400,850,300,60],[-1700,1050,220,95]]){let h=new mt(new ci(1,14,6,0,Math.PI*2,0,Math.PI/2),r);h.scale.set(c,l,c*.5),h.position.set(o,-4,a),this.scene.add(h)}}buildBoats(){this.boats=[];let t=new qt({color:"#f2ece0"}),e=new qt({color:"#fff4e6",side:De});for(let[n,s,r]of[[-330,60,1],[-420,-140,1.3],[-560,210,1.6],[-290,-260,.9],[-700,-20,2]]){let o=new Be,a=new mt(new Jt(6,1,2),t);a.position.y=.2,o.add(a);let c=new de;c.setAttribute("position",new Zt([-2.6,1,0,1.4,1,0,1.2,9,0,1.2,9,0,1.4,1,0,2.8,1.5,0],3)),c.computeVertexNormals();let l=new mt(c,e);o.add(l);let h=new mt(new ie(.08,.08,9,4),t);h.position.set(1.3,5,0),o.add(h),this.glows.push({x:n,y:9.6*r,z:s,s:1.6*r,c:It("#ff4040").multiplyScalar(2)}),o.position.set(n,-.6,s),o.scale.setScalar(r),o.rotation.y=rt(0,Math.PI*2),this.scene.add(o),this.boats.push(o)}}update(t,e){this.time+=t,this.sky.position.copy(e.position),this.sky.material.uniforms.time.value=this.time,this.oceanMat.uniforms.time.value=this.time,this.oceanMat.uniforms.camPos.value.copy(e.position),this.boats.forEach((n,s)=>{n.position.y=-.6+Math.sin(this.time*.8+s)*.15,n.rotation.z=Math.sin(this.time*.6+s*2)*.05});for(let n of this.updaters)n(this.time,t)}resolveCircle(t,e,n){let s=this.colliders.resolve(t,e,n),r=(a,c,l)=>{l>0&&(!s||l>s.d)&&(s={nx:a,nz:c,d:l})};if(!Tl(t,e)&&!(t<pe.x0+2&&t>pe.x1&&Math.abs(e-pe.z)<pe.w/2-.2)){let a=he(e)+1.5;if(t-n<a){let c=wl(e),l=Math.hypot(1,c);r(1/l,-c/l,(a-(t-n))/l)}}let o=rr(t,e);return r(-o.nx,-o.nz,o.d+n),s}};var Bl=["#d81e3c","#1fb5b0","#f4efe4","#ffb52e","#ff5fa2","#2a2d3a"],Hu={road:{grip:1,accel:1,vmax:1},paved:{grip:.95,accel:1,vmax:1},pier:{grip:.9,accel:.9,vmax:.8},grass:{grip:.7,accel:.75,vmax:.6},sand:{grip:.55,accel:.6,vmax:.45},water:{grip:.5,accel:.3,vmax:.2}},kx=2.7,Ho=.36,Gx=62,Vx=86;function Ie(i,t,e,n,s=0,r=0,o=0){let a=new mt(new Jt(i,t,e),n);return a.position.set(s,r,o),a.castShadow=!0,a}var ko=class{constructor(t,e){this.root=new Be,this.body=new Be,this.body.position.y=0,this.root.add(this.body),t.add(this.root),this.paintIndex=0,this.paint=new Pi({color:Bl[0],metalness:.45,roughness:.28});let n=new Pi({color:"#dedbe6",metalness:1,roughness:.15}),s=new qt({color:"#17151c"}),r=new qt({color:"#efe2c6"}),o=new qt({color:"#5a2c2a"}),a=[[-2.2,.5],[-2.3,.66],[-2.24,.86],[-1.6,.93],[-1.05,.95],[.35,.94],[1.4,.86],[2.08,.76],[2.27,.62],[2.22,.5]],c=new Ai;a.forEach(([F,I],U)=>U?c.lineTo(F,I):c.moveTo(F,I)),c.closePath();let l=1.72,h=new ms(c,{depth:l,bevelEnabled:!0,bevelThickness:.1,bevelSize:.07,bevelSegments:2,curveSegments:4});h.rotateY(-Math.PI/2),h.translate(l/2,0,0);let u=new mt(h,this.paint);u.castShadow=!0,this.body.add(u),this.body.add(Ie(1.5,.34,4.1,s,0,.38,0)),this.body.add(Ie(1.52,.06,1.45,o,0,.98,-.33));let f=new Pi({color:"#f4efe4",metalness:.3,roughness:.4});this.stripe=[Ie(.02,.07,3.9,f,.94,.74,.05),Ie(.02,.07,3.9,f,-.94,.74,.05)],this.body.add(...this.stripe),this.body.add(Ie(1.8,.14,.16,n,0,.52,2.32),Ie(1.8,.14,.16,n,0,.55,-2.38)),this.body.add(Ie(.9,.14,.05,s,0,.64,2.31));for(let F of[-1,1]){let I=new mt(new ie(.06,.06,.3,6),n);I.rotation.x=Math.PI/2,I.position.set(F*.45,.32,-2.3),this.body.add(I)}for(let F of[-1,1]){this.body.add(Ie(.56,.2,.6,r,F*.38,1.08,-.45));let I=Ie(.56,.5,.14,r,F*.38,1.2,-.8);I.rotation.x=-.18,this.body.add(I),this.body.add(Ie(.28,.18,.1,r,F*.38,1.56,-.86))}for(let F of[-1,1]){let I=new mt(new Qs(.26,.035,5,10,Math.PI),n);I.position.set(F*.38,1,-1.05),this.body.add(I)}let d=new qt({color:"#c88a62"}),x=new qt({color:"#ff6f91"}),_=.38;this.body.add(Ie(.46,.55,.28,x,_,1.45,-.55));let g=Ie(.26,.3,.28,d,_,1.88,-.5);this.body.add(g),this.body.add(Ie(.29,.1,.31,new qt({color:"#2a1a14"}),_,2.05,-.53)),this.hair=Ie(.28,.22,.08,new qt({color:"#2a1a14"}),_,1.92,-.66),this.body.add(this.hair),this.body.add(Ie(.28,.07,.04,s,_,1.92,-.35));for(let F of[-1,1]){let I=Ie(.11,.11,.55,x,_+F*.2,1.48,-.25);I.rotation.x=.35,this.body.add(I)}this.wheelSteer=new mt(new Qs(.19,.03,5,12),s),this.wheelSteer.position.set(_,1.34,.02),this.wheelSteer.rotation.x=-.45,this.body.add(this.wheelSteer);let m=new Jt(.05,.5,.05);for(let F of[-1,1]){let I=new mt(m,n);I.position.set(F*.78,1.17,.26),I.rotation.x=-.6,this.body.add(I)}let M=Ie(1.6,.05,.05,n,0,1.38,.12);this.body.add(M);let p=new mt(new ze(1.52,.48),new Pi({color:"#b8d0ff",metalness:.9,roughness:.05,transparent:!0,opacity:.28,side:De}));p.position.set(0,1.17,.26),p.rotation.x=-.6,this.body.add(p),this.headMat=new le({color:new Tt("#fff4dc").multiplyScalar(5)}),this.tailMat=new le({color:new Tt("#ff1a2a").multiplyScalar(2)});for(let F of[-1,1])this.body.add(Ie(.34,.12,.06,this.headMat,F*.62,.68,2.3)),this.body.add(Ie(.36,.1,.06,this.tailMat,F*.64,.74,-2.36));this.headGlow=Ui([-1,1].map(F=>({x:F*.62,y:.68,z:2.4,s:1.1,c:new Tt("#fff0d0").multiplyScalar(1.4)})),e),this.tailGlow=Ui([-1,1].map(F=>({x:F*.64,y:.74,z:-2.42,s:.8,c:new Tt("#ff2030").multiplyScalar(1)})),e),this.body.add(this.headGlow,this.tailGlow);let v=new Co("#ffe8c0",140,70,.55,.6,1.6);v.position.set(0,.8,2),v.target.position.set(0,0,18),this.body.add(v,v.target),this.spot=v,this.wheels=[];let T=new ie(Ho,Ho,.28,14);T.rotateZ(Math.PI/2);let b=new ie(.23,.23,.3,10);b.rotateZ(Math.PI/2);let w=new Jt(.31,.4,.07),R=new qt({color:"#1a1a1e"});for(let[F,I,U]of[[.86,1.4,!0],[-.86,1.4,!0],[.86,-1.35,!1],[-.86,-1.35,!1]]){let z=new Be;z.position.set(F,Ho,I);let N=new Be;z.add(N);let G=new mt(T,R);G.castShadow=!0,N.add(G),N.add(new mt(b,n));let D=new mt(w,s);N.add(D);let Y=D.clone();Y.rotation.x=Math.PI/2,N.add(Y),this.root.add(z),this.wheels.push({pivot:z,spin:N,front:U,x:F,z:I})}this.flames=[];let k=F=>new le({color:F,blending:Gn,transparent:!0,depthWrite:!1}),y=k(new Tt(1.6,.45,.25)),E=k(new Tt(.35,.7,2.6));for(let F of[-.45,.45]){let I=new Be;I.position.set(F,.32,-2.45);for(let[U,z,N]of[[.14,1.1,y],[.07,.6,E]]){let G=new An(U,z,8);G.rotateX(-Math.PI/2),G.translate(0,0,-z/2),I.add(new mt(G,N))}I.visible=!1,this.body.add(I),this.flames.push(I)}this.flameGlow=Ui([-.45,.45].map(F=>({x:F,y:.32,z:-2.7,s:1.6,c:new Tt(0,0,0)})),e),this.body.add(this.flameGlow),this.nitro=1,this.nitroLock=!1,this.boosting=!1,this.boostVis=0,this.backfire=0,this.slopePitch=0,this.slopeRoll=0,this.root.rotation.order="YXZ",this.pos=new at(0,0),this.vel=new at(0,0),this.h=0,this.yawRate=0,this.steer=0,this.wheelSpin=0,this.roll=0,this.pitch=0,this.speed=0,this.vf=0,this.vl=0,this.skidding=0,this.impact=0,this.surface="road",this.throttle=0}cyclePaint(){this.paintIndex=(this.paintIndex+1)%Bl.length,this.paint.color.set(Bl[this.paintIndex]);let t=this.paintIndex===2;this.stripe.forEach(e=>e.material.color.set(t?"#d81e3c":"#f4efe4"))}place(t,e,n){this.pos.set(t,e),this.vel.set(0,0),this.h=n,this.yawRate=0}update(t,e,n){let s=Math.sin(this.h),r=Math.cos(this.h),o=Math.cos(this.h),a=-Math.sin(this.h),c=this.vel.x*s+this.vel.y*r,l=this.vel.x*o+this.vel.y*a,h=Al(this.pos.x,this.pos.y);this.surface=h;let u=Hu[h]||Hu.road,f=e.steer;this.steer+=(f-this.steer)*Math.min(1,t*(Math.abs(f)<Math.abs(this.steer)?14:10)),this.nitro<=.01&&(this.nitroLock=!0),this.nitroLock&&this.nitro>.25&&(this.nitroLock=!1),this.boosting=e.boost&&!this.nitroLock&&c>-1,this.boosting?(this.nitro=Math.max(0,this.nitro-t*.2),this.boostCool=1):(this.boostCool=(this.boostCool||0)-t)<=0&&(this.nitro=Math.min(1,this.nitro+t*.09));let d=this.boosting?1:e.throttle,x=(D,Y)=>Ot(D,Y),_=(x(this.pos.x+s*1.4,this.pos.y+r*1.4)-x(this.pos.x-s*1.4,this.pos.y-r*1.4))/2.8,g=(x(this.pos.x+o*.9,this.pos.y+a*.9)-x(this.pos.x-o*.9,this.pos.y-a*.9))/1.8,m=Math.abs(c),M=(this.boosting?Vx:Gx)*u.vmax,p=0;d>0&&(c<-.5?p+=24*d:p+=d*u.accel*13*Math.pow(Math.max(0,1-c/M),.7)),this.boosting&&(p+=16*u.accel*Math.pow(Math.max(0,1-c/M),.4)),e.brake>0&&(c>.5?p-=17*e.brake:c>-16&&(p-=10*e.brake)),e.handbrake&&(p-=Math.sign(c)*Math.min(6,m/t)),p-=c*Math.abs(c)*.0011;let v=d>0||e.brake>0?.25:1.6;p-=Math.sign(c)*Math.min(v,Math.abs(c)/t+1e-4)*(m>.01?1:0),(d>0||e.brake>0||m>.5)&&(p-=9.8*_*.8),c>M&&(p-=(c-M)*(this.boosting?2:.8));let T=c;c+=p*t,Math.sign(T)!==Math.sign(c)&&d===0&&e.brake===0&&(c=0),!this.boosting&&e.throttle===0&&T>25&&this.throttle>0&&(this.backfire=.18),this.backfire=Math.max(0,this.backfire-t);let b=.66/(1+m*.012),w=this.steer*b,R=c*Math.tan(w)/kx,k=Math.abs(l)>3.5,y=32*u.grip;e.handbrake&&m>6?(y=44,R*=1.6):k&&d>0&&(y=36);let E=y/Math.max(m,4);R=Math.max(-E,Math.min(E,R)),this.yawRate+=(R-this.yawRate)*Math.min(1,t*(e.handbrake?5:10));let F=7.5*u.grip;e.handbrake?F=1.3:Math.abs(l)>6&&d>0&&(F*=.5);let I=l;l*=Math.exp(-F*t),c>2&&(c+=Math.abs(I-l)*.45),this.vf=c,this.vl=l,this.vel.set(s*c+o*l,r*c+a*l),this.h+=this.yawRate*t,this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t,this.impact=0;for(let D=0;D<2;D++)for(let Y of[-1.45,0,1.45]){let Z=this.pos.x+Math.sin(this.h)*Y,et=this.pos.y+Math.cos(this.h)*Y,pt=n.resolveCircle(Z,et,.98);if(!pt)continue;this.pos.x+=pt.nx*pt.d,this.pos.y+=pt.nz*pt.d;let Dt=this.vel.x*pt.nx+this.vel.y*pt.nz;Dt<0&&(this.vel.x-=1.3*Dt*pt.nx,this.vel.y-=1.3*Dt*pt.nz,this.vel.multiplyScalar(.92),this.impact=Math.max(this.impact,-Dt),this.yawRate+=(Y===0?0:Math.sign(Y))*(pt.nx*Math.cos(this.h)-pt.nz*Math.sin(this.h))*-Dt*.05)}this.speed=this.vel.length(),this.skidding=Math.max(0,Math.min(1,(Math.abs(l)-3)/6+(e.handbrake&&m>5?.6:0)+(e.brake>0&&c>18?.35:0))),h!=="road"&&h!=="paved"&&h!=="pier"&&(this.skidding*=.3),this.throttle=e.throttle,this.boostVis+=((this.boosting?1:0)-this.boostVis)*Math.min(1,t*(this.boosting?12:5));let U=Math.max(this.boostVis,this.backfire>0?.45:0),z=this.flameGlow.geometry.attributes.gcolor;this.flames.forEach((D,Y)=>{D.visible=U>.03;let Z=U*(.75+Math.random()*.5);D.scale.set(.8+Z*.4,.8+Z*.4,Z*(this.boosting?1.6:.8)),z.setXYZ(Y,2.2*Z,.9*Z,.5*Z)}),z.needsUpdate=!0;let N=this.yawRate*c;this.roll+=(-N*.012-this.roll)*Math.min(1,t*6),this.pitch+=(p*-.006-this.pitch)*Math.min(1,t*5),this.roll=Math.max(-.12,Math.min(.12,this.roll)),this.pitch=Math.max(-.07,Math.min(.07,this.pitch)),this.slopePitch+=(-Math.atan(_)-this.slopePitch)*Math.min(1,t*12),this.slopeRoll+=(Math.atan(g)-this.slopeRoll)*Math.min(1,t*12),this.y=Ot(this.pos.x,this.pos.y),this.root.position.set(this.pos.x,this.y,this.pos.y),this.root.rotation.set(this.slopePitch,this.h,this.slopeRoll),this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=h==="sand"||h==="grass"?Math.sin(performance.now()*.03)*.012*Math.min(1,m/10):0,this.wheelSpin+=c/Ho*t;for(let D of this.wheels)D.spin.rotation.x=this.wheelSpin,D.front&&(D.pivot.rotation.y=w*1.2);this.wheelSteer.rotation.z=-this.steer*1.6,this.hair.rotation.x=-.3-Math.min(.9,m*.02)+Math.sin(performance.now()*.03)*.05*Math.min(1,m/20);let G=e.brake>0&&c>.5;this.tailMat.color.set("#ff1a2a").multiplyScalar(G?6:1.6)}updateGlowVisibility(t){let e=t.position.x-this.pos.x,n=t.position.z-this.pos.y,s=e*Math.sin(this.h)+n*Math.cos(this.h);this.headGlow.visible=s>1.8,this.tailGlow.visible=s<-1.8}rearWheels(){let t=[];for(let e of this.wheels)if(!e.front){let n=this.pos.x+Math.cos(this.h)*e.x+Math.sin(this.h)*e.z,s=this.pos.y-Math.sin(this.h)*e.x+Math.cos(this.h)*e.z;t.push([n,s])}return t}},Go=class{constructor(t,e=2400){this.max=e,this.pos=new Float32Array(e*6*3),this.alpha=new Float32Array(e*6),this.geo=new de,this.geo.setAttribute("position",new ne(this.pos,3)),this.geo.setAttribute("alpha",new ne(this.alpha,1));let n=new Ue({vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.04,0.03,0.05, vA * 0.55); }",transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});this.mesh=new mt(this.geo,n),this.mesh.frustumCulled=!1,t.add(this.mesh),this.i=0,this.last=[null,null]}add(t,e){t.forEach((n,s)=>{let r=this.last[s];if(e<=.05){this.last[s]=null;return}if(!r){this.last[s]=n;return}let o=n[0]-r[0],a=n[1]-r[1],c=Math.hypot(o,a);if(c<.4)return;if(c>4){this.last[s]=n;return}let l=-a/c*.13,h=o/c*.13,u=Ot(r[0],r[1])+.04,f=Ot(n[0],n[1])+.04,d=[r[0]-l,u,r[1]-h,r[0]+l,u,r[1]+h,n[0]+l,f,n[1]+h,r[0]-l,u,r[1]-h,n[0]+l,f,n[1]+h,n[0]-l,f,n[1]-h];this.pos.set(d,this.i*18),this.alpha.fill(Math.min(1,e),this.i*6,this.i*6+6),this.i=(this.i+1)%this.max,this.last[s]=n,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0})}};var Vo=[0,13,24,35,46,56,70],Wo=class{constructor(){this.ctx=null,this.musicOn=!0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=.7;let e=t.createDynamicsCompressor();this.master.connect(e).connect(t.destination);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let m=0;m<s.length;m++)s[m]=Math.random()*2-1;this.noiseBuf=n;let r=()=>{let m=t.createBufferSource();return m.buffer=n,m.loop=!0,m.start(),m};this.eGain=t.createGain(),this.eGain.gain.value=0,this.eFilter=t.createBiquadFilter(),this.eFilter.type="lowpass",this.eFilter.Q.value=3;let o=t.createWaveShaper(),a=new Float32Array(1024);for(let m=0;m<1024;m++){let M=m/512-1;a[m]=Math.tanh(M*2.5)}o.curve=a,this.eOsc=[];for(let[m,M,p]of[["sawtooth",1,.5],["square",.5,.35],["sawtooth",2.01,.15]]){let v=t.createOscillator();v.type=m;let T=t.createGain();T.gain.value=p,v.connect(T).connect(this.eFilter),v.start(),this.eOsc.push({o:v,mul:M})}this.eFilter.connect(o).connect(this.eGain).connect(this.master),this.wGain=t.createGain(),this.wGain.gain.value=0,this.wFilter=t.createBiquadFilter(),this.wFilter.type="bandpass",this.wFilter.Q.value=.6,r().connect(this.wFilter).connect(this.wGain).connect(this.master),this.sGain=t.createGain(),this.sGain.gain.value=0;let c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=2300,c.Q.value=9;let l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=3400,l.Q.value=12;let h=r();h.connect(c).connect(this.sGain),h.connect(l).connect(this.sGain),this.sGain.connect(this.master),this.bGain=t.createGain(),this.bGain.gain.value=0;let u=t.createBiquadFilter();u.type="bandpass",u.frequency.value=650,u.Q.value=.8;let f=t.createOscillator();f.type="sawtooth",f.frequency.value=55;let d=t.createGain();d.gain.value=.25,r().connect(u).connect(this.bGain),f.connect(d).connect(this.bGain),f.start(),this.bGain.connect(this.master),this.oGain=t.createGain(),this.oGain.gain.value=0;let x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=600,r().connect(x).connect(this.oGain).connect(this.master),this.mGain=t.createGain(),this.mGain.gain.value=this.musicOn?.33:0,this.mGain.connect(this.master),this.echo=t.createDelay(1),this.echo.delayTime.value=.49;let _=t.createGain();_.gain.value=.33;let g=t.createBiquadFilter();g.type="lowpass",g.frequency.value=2200,this.echo.connect(g).connect(_).connect(this.echo),g.connect(this.mGain),this.startMusic()}toggleMusic(){return this.musicOn=!this.musicOn,this.ctx&&this.mGain.gain.setTargetAtTime(this.musicOn?.33:0,this.ctx.currentTime,.3),this.musicOn}thud(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(120,n),s.frequency.exponentialRampToValueAtTime(40,n+.25);let r=e.createGain();r.gain.setValueAtTime(Math.min(.9,t*.06),n),r.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(r).connect(this.master),s.start(n),s.stop(n+.4);let o=e.createBufferSource();o.buffer=this.noiseBuf;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900;let c=e.createGain();c.gain.setValueAtTime(Math.min(.6,t*.04),n),c.gain.exponentialRampToValueAtTime(.001,n+.2),o.connect(a).connect(c).connect(this.master),o.start(n),o.stop(n+.25)}update(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,s=Math.abs(e.vf),r=1;for(;r<Vo.length-1&&s>Vo[r];)r++;let o=Vo[r-1]*.75,a=Vo[r],c=Math.min(1.08,.22+.78*Math.max(0,(s-o)/(a-o)));this.gear=r,this.rpm=c;let l=(42+c*125+(e.throttle>0&&s<1?15:0))*(1+(e.boost||0)*.12);this.bGain.gain.setTargetAtTime((e.boost||0)*.3,n,.08);for(let u of this.eOsc)u.o.frequency.setTargetAtTime(l*u.mul,n,.04);this.eFilter.frequency.setTargetAtTime(350+c*900+e.throttle*900,n,.05),this.eGain.gain.setTargetAtTime(.11+e.throttle*.13+c*.05,n,.08),this.wGain.gain.setTargetAtTime(Math.min(.35,(e.speed/60)**2*.35),n,.2),this.wFilter.frequency.setTargetAtTime(400+e.speed*18,n,.2),this.sGain.gain.setTargetAtTime(e.skid*.22,n,.05);let h=Math.max(0,1-e.coastDist/90)*(.55+.45*Math.sin(n*.45)*Math.sin(n*.27+1));this.oGain.gain.setTargetAtTime(.02+h*.22,n,.3)}startMusic(){let t=this.ctx,e=88,n=60/e/4,s=f=>440*Math.pow(2,(f-69)/12),r=[[53,57,60,64],[52,55,59,62],[50,53,57,60],[48,52,55,59]],o=[0,1,2,3,2,1,3,2],a=t.currentTime+.2,c=0,l=(f,d,x,_,g,m,M=.005,p=3e3)=>{let v=t.createOscillator();v.type=f,v.frequency.value=d;let T=t.createBiquadFilter();T.type="lowpass",T.frequency.value=p;let b=t.createGain();return b.gain.setValueAtTime(0,x),b.gain.linearRampToValueAtTime(g,x+M),b.gain.exponentialRampToValueAtTime(8e-4,x+_),v.connect(T).connect(b).connect(m),v.start(x),v.stop(x+_+.05),v},h=(f,d,x,_,g)=>{let m=t.createBufferSource();m.buffer=this.noiseBuf;let M=t.createBiquadFilter();M.type=_,M.frequency.value=g;let p=t.createGain();p.gain.setValueAtTime(x,f),p.gain.exponentialRampToValueAtTime(.001,f+d),m.connect(M).connect(p).connect(this.mGain),m.start(f,Math.random()),m.stop(f+d+.02)},u=()=>{for(;a<t.currentTime+.25;){let f=Math.floor(c/16),d=c%16,x=r[Math.floor(f/2)%4],_=a;if(this.musicOn){if(d===0&&f%2===0)for(let g of x)for(let m of[-6,6]){let M=l("sawtooth",s(g),_,n*32,.022,this.mGain,.8,1100);M.detune.value=m}if([0,3,6,10,12,14].includes(d)&&l("sawtooth",s(x[0]-24+(d===14?7:0)),_,n*1.8,.14,this.mGain,.005,420),d%2===0){let g=o[d/2%8],m=x[g]+12;l("square",s(m),_,n*1.5,.028,this.mGain,.003,1900),l("square",s(m),_,n*1.5,.02,this.echo,.003,1500)}if(d===0||d===8||d===11&&f%2){let g=t.createOscillator(),m=t.createGain();g.frequency.setValueAtTime(140,_),g.frequency.exponentialRampToValueAtTime(42,_+.18),m.gain.setValueAtTime(.5,_),m.gain.exponentialRampToValueAtTime(.001,_+.3),g.connect(m).connect(this.mGain),g.start(_),g.stop(_+.32)}(d===4||d===12)&&(h(_,.22,.2,"bandpass",1700),h(_,.5,.05,"highpass",3e3)),d%2===0&&h(_,d%4===2?.09:.04,d%4===2?.05:.025,"highpass",7500)}a+=n,c++}};this.musicTimer=setInterval(u,40)}};function ku(){let i=new URLSearchParams(location.search).get("touch");return i!==null?i!=="0":matchMedia("(hover: none) and (pointer: coarse)").matches}var Xo=i=>`<svg viewBox="0 0 24 24" style="transform:rotate(${i}deg)"><path d="M8 4 L18 12 L8 20 Z"/></svg>`,Wx=[{id:"t-left",k:"KeyA",html:Xo(180)},{id:"t-right",k:"KeyD",html:Xo(0)},{id:"t-gas",k:"KeyW",html:Xo(-90)},{id:"t-brake",k:"KeyS",html:Xo(90)},{id:"t-nos",k:"ShiftLeft",html:"<span>NOS</span>"},{id:"t-drift",k:"Space",html:"<span>DRIFT</span>"}],Xx=[["KeyV","CAMERA"],["KeyC","PAINT"],["KeyM","RADIO"],["KeyP","PIXELS"],["KeyR","RESET CAR"],["KeyH","HUD"],["fullscreen","FULLSCREEN"],["close","CLOSE"]];function Gu({touchKeys:i,action:t}){document.body.classList.add("touch"),document.addEventListener("gesturestart",u=>u.preventDefault()),document.getElementById("press").textContent="TAP TO DRIVE";let e=document.createElement("div");e.id="touchpad",e.innerHTML=Wx.map(u=>`<div class="tbtn" id="${u.id}" data-k="${u.k}">${u.html}</div>`).join(""),document.body.appendChild(e);let n=[...e.querySelectorAll("[data-k]")],s=u=>{let f=new Set;for(let d of u){let x=document.elementFromPoint(d.clientX,d.clientY),_=x&&x.closest&&x.closest("[data-k]");_&&f.add(_.dataset.k)}i.clear();for(let d of f)i.add(d);for(let d of n)d.classList.toggle("on",f.has(d.dataset.k))},r=u=>{u.preventDefault(),s(u.touches)};for(let u of["touchstart","touchmove","touchend","touchcancel"])e.addEventListener(u,r,{passive:!1});let o=()=>s([]);addEventListener("blur",o),document.addEventListener("visibilitychange",o);let a=document.createElement("div");a.id="menubtn",a.innerHTML="<i></i><i></i><i></i>",document.body.appendChild(a);let c=document.createElement("div");c.id="menu";let l=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);c.innerHTML=`<div class="panel"><div class="mtitle">PALMERA BAY</div><div class="grid">${Xx.filter(([u])=>u!=="fullscreen"||l).map(([u,f])=>`<button data-a="${u}">${f}</button>`).join("")}</div></div>`,document.body.appendChild(c);let h=u=>{c.classList.toggle("open",u),o()};a.addEventListener("click",()=>h(!0)),c.addEventListener("click",u=>{let f=u.target.closest("button")?.dataset.a;if(!f){u.target===c&&h(!1);return}f==="close"?h(!1):f==="fullscreen"?qx():t(f)})}function qx(){let i=document,t=i.documentElement;if(i.fullscreenElement||i.webkitFullscreenElement)(i.exitFullscreen||i.webkitExitFullscreen).call(i);else{let e=(t.requestFullscreen||t.webkitRequestFullscreen).call(t);Promise.resolve(e).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}}var hr=new Set,qu=new Set,Qo=ku(),lr=new Wo,rn={speed:document.getElementById("speed"),gear:document.getElementById("gear"),toast:document.getElementById("toast"),overlay:document.getElementById("overlay"),hints:document.getElementById("hints"),map:document.getElementById("map"),nitro:document.getElementById("nitrofill"),nitroBox:document.getElementById("nitro"),hudRoot:document.getElementById("hud")},ws=!1,Fi=0,zl=!0;function Ni(i){rn.toast.textContent=i,rn.toast.classList.add("show"),clearTimeout(Ni.t),Ni.t=setTimeout(()=>rn.toast.classList.remove("show"),1400)}function jo(){if(!ws){ws=!0,rn.overlay.classList.add("hidden"),document.body.classList.add("playing");try{lr.start()}catch(i){console.warn("audio unavailable",i)}setTimeout(()=>rn.hints.classList.add("fade"),9e3)}}addEventListener("keydown",i=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),!ws){jo();return}i.repeat||(hr.add(i.code),Yu(i.code))});function Yu(i){switch(i){case"KeyC":Lt.cyclePaint(),Ni("NEW PAINT");break;case"KeyV":Fi=(Fi+1)%3,Ni(["CHASE CAM","FAR CAM","BUMPER CAM"][Fi]);break;case"KeyM":Ni(lr.toggleMusic()?"RADIO ON":"RADIO OFF");break;case"KeyP":Zo=(Zo+1)%Wl.length,Xl(),Ni(`PIXEL SIZE ${Wl[Zo]}`);break;case"KeyH":zl=!zl,rn.hudRoot.style.display=zl?"":"none";break;case"KeyR":{let t=Rl(Lt.pos.x,Lt.pos.y);Lt.place(t.x,t.z,t.h),Ni("BACK ON THE ROAD");break}}}addEventListener("keyup",i=>hr.delete(i.code));addEventListener("blur",()=>hr.clear());rn.overlay.addEventListener("click",jo);Qo&&Gu({touchKeys:qu,action:Yu});var Vl=document.getElementById("c"),Yn=new ho({canvas:Vl,antialias:!1,powerPreference:"high-performance"});Yn.setPixelRatio(1);Yn.shadowMap.enabled=!0;Yn.shadowMap.type=Lo;var Wl=[2,3,4],Zo=Number(new URLSearchParams(location.search).get("px")??(Qo?0:1)),$o=new Tn(4,4,{type:Di,minFilter:ve,magFilter:ve,depthBuffer:!0}),Ko=new Ue({uniforms:{tDiffuse:{value:$o.texture},res:{value:new at},time:{value:0},boost:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 res; uniform float time; uniform float boost; varying vec2 vUv;
    float bayer(vec2 p){
      p = mod(p, 4.0);
      int i = int(p.x) + int(p.y) * 4;
      int m[16] = int[16](0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5);
      return float(m[i]) / 16.0;
    }
    vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      if (boost > 0.01) {
        // radial speed blur toward the edges while the nitro burns
        vec2 dir = (vUv - 0.5);
        vec3 acc = c;
        for (int i = 1; i <= 6; i++) acc += texture2D(tDiffuse, vUv - dir * float(i) * 0.012 * boost).rgb;
        c = mix(c, acc / 7.0, smoothstep(0.08, 0.45, length(dir)) * boost);
      }
      // soft glow: sample neighbours of bright pixels (cheap bloom)
      vec2 px = 1.0 / res;
      vec3 b = vec3(0.0);
      for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
        vec3 s = texture2D(tDiffuse, vUv + vec2(float(i), float(j)) * px * 1.5).rgb;
        b += max(s - 1.0, 0.0);
      }
      c += b / 25.0 * 0.9;
      c *= 1.05;
      c = aces(c);
      c = pow(c, vec3(1.0 / 2.2));
      // grade: purple shadows, warm highlights
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c += vec3(0.035, 0.0, 0.06) * (1.0 - l) * (1.0 - l);
      c = mix(vec3(l), c, 1.12);
      // vignette
      vec2 q = vUv - 0.5;
      c *= 1.0 - dot(q, q) * 0.55;
      // ordered dither + posterize
      float levels = 30.0;
      float d = bayer(floor(vUv * res)) - 0.5;
      c = floor(c * levels + 0.5 + d * 0.9) / levels;
      gl_FragColor = vec4(c, 1.0);
    }`,depthTest:!1,depthWrite:!1}),Zu=new ps,$u=new mt(new ze(2,2),Ko);$u.frustumCulled=!1;Zu.add($u);var Yx=new fs(-1,1,1,-1,0,1),Zn=new ps;Zn.fog=new uo("#ff9a6a",zo);var ue=new Ve(62,1,.1,6e3),Zx=new Ao("#9a78c8","#6a3e3a",1.5);Zn.add(Zx);var $n=new Po("#ffab6a",3.4);$n.castShadow=!0;$n.shadow.mapSize.setScalar(Qo?1024:2048);var Ts=$n.shadow.camera;Ts.left=-110;Ts.right=110;Ts.top=110;Ts.bottom=-110;Ts.near=10;Ts.far=900;$n.shadow.bias=-6e-4;$n.shadow.normalBias=.06;Zn.add($n,$n.target);var $x=new L(Ss.x,.2,Ss.z).normalize(),Oi=new cr(Zn);{let i=new ps,t=new mt(new ci(100,32,16),cr.skyMaterial());i.add(t);let e=new mt(new Eo(90,16),new le({color:"#2a1c2e"}));e.rotation.x=-Math.PI/2,e.position.y=-2,i.add(e);let n=new ds(Yn);Zn.environment=n.fromScene(i,.02).texture,Zn.environmentIntensity=.9}var Lt=new ko(Zn,Oi.glowMat),Kx=new Go(Zn),fi={x:Ne(-120)-5,z:-120,h:0};Lt.place(fi.x,fi.z,fi.h);function Jx(){let i=(...n)=>n.some(s=>hr.has(s)||qu.has(s)),t={throttle:i("KeyW","ArrowUp")?1:0,brake:i("KeyS","ArrowDown")?1:0,steer:(i("KeyA","ArrowLeft")?1:0)-(i("KeyD","ArrowRight")?1:0),handbrake:i("Space"),boost:i("ShiftLeft","ShiftRight")},e=null;try{e=navigator.getGamepads?[...navigator.getGamepads()].find(n=>n):null}catch{}if(e){let n=e.axes[0]||0;Math.abs(n)>.12&&(t.steer=-n);let s=e.buttons[7]?.value||0,r=e.buttons[6]?.value||0;s>.05&&(t.throttle=s),r>.05&&(t.brake=r),(e.buttons[0]?.pressed||e.buttons[1]?.pressed)&&(t.handbrake=!0),e.buttons[2]?.pressed&&(t.boost=!0),!ws&&(s>.5||e.buttons[9]?.pressed)&&jo()}return ws||(t.throttle=t.brake=t.steer=0,t.handbrake=!1),t}var ye=rn.map.getContext("2d"),Jo=document.createElement("canvas");Jo.width=Jo.height=768;{let i=Jo.getContext("2d");i.drawImage(Oi.groundCanvas,0,0,768,768);let t=768/Ze;i.fillStyle="#b08058",i.fillRect((pe.x1-un)*t,(pe.z-pe.w/2-fn)*t,(pe.x0-pe.x1)*t,pe.w*t)}function Qx(){let i=rn.map.width,t=768/Ze,e=1.3;ye.save(),ye.clearRect(0,0,i,i),ye.beginPath(),ye.arc(i/2,i/2,i/2-2,0,Math.PI*2),ye.clip(),ye.fillStyle="#26203f",ye.fillRect(0,0,i,i),ye.translate(i/2,i/2),ye.rotate(Lt.h+Math.PI),ye.scale(e,e),ye.imageSmoothingEnabled=!1,ye.drawImage(Jo,-(Lt.pos.x-un)*t,-(Lt.pos.y-fn)*t),ye.restore(),ye.fillStyle="#ff4f8b",ye.strokeStyle="#fff",ye.lineWidth=1.5,ye.beginPath(),ye.moveTo(i/2,i/2-7),ye.lineTo(i/2+5,i/2+5),ye.lineTo(i/2-5,i/2+5),ye.closePath(),ye.fill(),ye.stroke()}var Hl=new L(fi.x,3,fi.z-8),kl=new L(fi.x,1,fi.z),qo=fi.h,Es=0,Vu=0;function jx(i,t){let e=new L(Math.sin(Lt.h),0,Math.cos(Lt.h)),n=Lt.y||0,s=new L(Lt.pos.x,n,Lt.pos.y),r=Lt.speed,o=62+Math.min(18,r*.28)+Lt.boostVis*12;if(ws)if(Fi<=1){let a=Lt.h;if(r>3){let d=Math.atan2(Lt.vel.x,Lt.vel.y)-Lt.h;d=Math.atan2(Math.sin(d),Math.cos(d)),Lt.vf>0&&(a=Lt.h+d*.35)}let c=a-qo;c=Math.atan2(Math.sin(c),Math.cos(c)),qo+=c*Math.min(1,i*6);let l=Fi===0?6.8+r*.03:12+r*.04,h=Fi===0?2.3:4.6,u=new L(s.x-Math.sin(qo)*l,n+h,s.z-Math.cos(qo)*l);u.y=Math.max(u.y,Ot(u.x,u.z)+1.2);for(let f=1;f<=12;f++){let d=f/12,x=s.x+(u.x-s.x)*d,_=s.z+(u.z-s.z)*d;if(Oi.colliders.inTall(x,_,.6)){let g=Math.max(.15,(f-1)/12);u.x=s.x+(u.x-s.x)*g,u.z=s.z+(u.z-s.z)*g,u.y+=(1-g)*1.5;break}}Hl.lerp(u,1-Math.exp(-i*10)),kl.lerp(s.clone().addScaledVector(e,3.5).setY(n+1.2),1-Math.exp(-i*14)),ue.position.copy(Hl),ue.lookAt(kl)}else{let a=new L(0,.85,2.45);Lt.body.updateWorldMatrix(!0,!1),ue.position.copy(a.applyMatrix4(Lt.body.matrixWorld));let c=new L(0,.9,30).applyMatrix4(Lt.body.matrixWorld);ue.lookAt(c),Hl.copy(ue.position),kl.copy(c),o+=6}else{Vu+=i;let a=Vu*.12-1.2;ue.position.set(s.x+Math.sin(a)*9,n+2.2,s.z+Math.cos(a)*9),ue.lookAt(s.x,n+1.1,s.z),ue.fov=55}Es>0&&(ue.position.x+=(Math.random()-.5)*Es,ue.position.y+=(Math.random()-.5)*Es,Es=Math.max(0,Es-i*2.5)),ue.position.y+=Math.sin(t*40)*.004*Math.min(1,r/40),Lt.boostVis>.05&&(ue.position.x+=(Math.random()-.5)*.05*Lt.boostVis,ue.position.y+=(Math.random()-.5)*.05*Lt.boostVis),ue.position.y=Math.max(ue.position.y,Ot(ue.position.x,ue.position.z)+.4),ue.fov+=(o-ue.fov)*Math.min(1,i*3),ue.updateProjectionMatrix()}function Xl(){let i=innerWidth,t=innerHeight,e=Wl[Zo];Yn.setSize(i,t,!1),Vl.style.width=i+"px",Vl.style.height=t+"px";let n=Math.max(1,Math.floor(i/e)),s=Math.max(1,Math.floor(t/e));$o.setSize(n,s),Ko.uniforms.res.value.set(n,s),ue.aspect=i/t,ue.updateProjectionMatrix()}addEventListener("resize",Xl);Xl();var Wu=new Io,Xu=null,Yo=0,Gl=0;function Ku(){let i=Math.min(Wu.getDelta(),.05),t=Wu.elapsedTime,e=Jx(),n=Math.ceil(i/(1/120));for(let r=0;r<n;r++)Lt.update(i/n,e,Oi);Lt.impact>5&&(Es=Math.min(.5,Lt.impact*.03),lr.thud(Lt.impact)),Kx.add(Lt.rearWheels(),Lt.skidding),Oi.update(i,ue),jx(i,t),Lt.updateGlowVisibility(ue),$n.position.set(Lt.pos.x,Lt.y,Lt.pos.y).addScaledVector($x,400),$n.target.position.set(Lt.pos.x,Lt.y,Lt.pos.y),Oi.glowMat.uniforms.uScale.value=$o.height*.5*ue.projectionMatrix.elements[5],lr.update(i,{vf:Lt.vf,speed:Lt.speed,throttle:Lt.boosting?1:e.throttle,skid:Lt.skidding,boost:Lt.boostVis,coastDist:Math.max(0,Lt.pos.x-he(Lt.pos.y))});let s=Math.round(Math.abs(Lt.vf)*3.6);rn.speed.textContent=String(s).padStart(3,"0"),rn.gear.textContent=Lt.vf<-.5?"R":s<1?"N":String(lr.gear||1),rn.nitro.style.width=(Lt.nitro*100).toFixed(1)+"%",rn.nitroBox.classList.toggle("burn",Lt.boosting),rn.nitroBox.classList.toggle("empty",Lt.nitroLock),Qo&&(Xu??(Xu=document.getElementById("t-nos")),Xu.style.setProperty("--nos",Lt.nitroLock?0:Lt.nitro.toFixed(3))),Ko.uniforms.boost.value=Lt.boostVis,Qx(),Yn.setRenderTarget($o),Yn.render(Zn,ue),Yn.setRenderTarget(null),Ko.uniforms.time.value=t,Yn.render(Zu,Yx),Yo+=i,Gl++,Yo>1&&(window.__fps=Gl/Yo,Yo=0,Gl=0),requestAnimationFrame(Ku)}requestAnimationFrame(Ku);window.__ready=!0;window.__game={car:Lt,camera:ue,world:Oi,begin:jo,keys:hr,setCam:i=>{Fi=i}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
