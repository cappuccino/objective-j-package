var ObjectiveJ={};
(function(_1,_2){
if(!this.JSON){
JSON={};
}
(function(){
function f(n){
return n<10?"0"+n:n;
};
if(typeof Date.prototype.toJSON!=="function"){
Date.prototype.toJSON=function(_3){
return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z";
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(_4){
return this.valueOf();
};
}
var cx=new RegExp("[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]","g");
var _5=new RegExp("[\\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]","g");
var _6,_7,_8={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},_9;
function _a(_b){
_5.lastIndex=0;
return _5.test(_b)?"\""+_b.replace(_5,function(a){
var c=_8[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
})+"\"":"\""+_b+"\"";
};
function _c(_d,_e){
var i,k,v,_f,_10=_6,_11,_12=_e[_d];
if(_12&&typeof _12==="object"&&typeof _12.toJSON==="function"){
_12=_12.toJSON(_d);
}
if(typeof _9==="function"){
_12=_9.call(_e,_d,_12);
}
switch(typeof _12){
case "string":
return _a(_12);
case "number":
return isFinite(_12)?String(_12):"null";
case "boolean":
case "null":
return String(_12);
case "object":
if(!_12){
return "null";
}
_6+=_7;
_11=[];
if(Object.prototype.toString.apply(_12)==="[object Array]"){
_f=_12.length;
for(i=0;i<_f;i+=1){
_11[i]=_c(i,_12)||"null";
}
v=_11.length===0?"[]":_6?"[\n"+_6+_11.join(",\n"+_6)+"\n"+_10+"]":"["+_11.join(",")+"]";
_6=_10;
return v;
}
if(_9&&typeof _9==="object"){
_f=_9.length;
for(i=0;i<_f;i+=1){
k=_9[i];
if(typeof k==="string"){
v=_c(k,_12);
if(v){
_11.push(_a(k)+(_6?": ":":")+v);
}
}
}
}else{
for(k in _12){
if(Object.hasOwnProperty.call(_12,k)){
v=_c(k,_12);
if(v){
_11.push(_a(k)+(_6?": ":":")+v);
}
}
}
}
v=_11.length===0?"{}":_6?"{\n"+_6+_11.join(",\n"+_6)+"\n"+_10+"}":"{"+_11.join(",")+"}";
_6=_10;
return v;
}
};
if(typeof JSON.stringify!=="function"){
JSON.stringify=function(_13,_14,_15){
var i;
_6="";
_7="";
if(typeof _15==="number"){
for(i=0;i<_15;i+=1){
_7+=" ";
}
}else{
if(typeof _15==="string"){
_7=_15;
}
}
_9=_14;
if(_14&&typeof _14!=="function"&&(typeof _14!=="object"||typeof _14.length!=="number")){
throw new Error("JSON.stringify");
}
return _c("",{"":_13});
};
}
if(typeof JSON.parse!=="function"){
JSON.parse=function(_16,_17){
var j;
function _18(_19,key){
var k,v,_1a=_19[key];
if(_1a&&typeof _1a==="object"){
for(k in _1a){
if(Object.hasOwnProperty.call(_1a,k)){
v=_18(_1a,k);
if(v!==_44){
_1a[k]=v;
}else{
delete _1a[k];
}
}
}
}
return _17.call(_19,key,_1a);
};
cx.lastIndex=0;
if(cx.test(_16)){
_16=_16.replace(cx,function(a){
return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
});
}
if(/^[\],:{}\s]*$/.test(_16.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){
j=eval("("+_16+")");
return typeof _17==="function"?_18({"":j},""):j;
}
throw new SyntaxError("JSON.parse");
};
}
}());
var _1b=new RegExp("([^%]+|%[\\+\\-\\ \\#0]*[0-9\\*]*(.[0-9\\*]+)?[hlL]?[cbBdieEfgGosuxXpn%@])","g");
var _1c=new RegExp("(%)([\\+\\-\\ \\#0]*)([0-9\\*]*)((.[0-9\\*]+)?)([hlL]?)([cbBdieEfgGosuxXpn%@])");
sprintf=function(_1d){
var _1d=arguments[0],_1e=_1d.match(_1b),_1f=0,_20="",arg=1;
for(var i=0;i<_1e.length;i++){
var t=_1e[i];
if(_1d.substring(_1f,_1f+t.length)!=t){
return _20;
}
_1f+=t.length;
if(t.charAt(0)!="%"){
_20+=t;
}else{
var _21=t.match(_1c);
if(_21.length!=8||_21[0]!=t){
return _20;
}
var _22=_21[1],_23=_21[2],_24=_21[3],_25=_21[4],_26=_21[6],_27=_21[7];
var _28=null;
if(_24=="*"){
_28=arguments[arg++];
}else{
if(_24!=""){
_28=Number(_24);
}
}
var _29=null;
if(_25==".*"){
_29=arguments[arg++];
}else{
if(_25!=""){
_29=Number(_25.substring(1));
}
}
var _2a=(_23.indexOf("-")>=0);
var _2b=(_23.indexOf("0")>=0);
var _2c="";
if(RegExp("[bBdiufeExXo]").test(_27)){
var num=Number(arguments[arg++]);
var _2d="";
if(num<0){
_2d="-";
}else{
if(_23.indexOf("+")>=0){
_2d="+";
}else{
if(_23.indexOf(" ")>=0){
_2d=" ";
}
}
}
if(_27=="d"||_27=="i"||_27=="u"){
var _2e=String(Math.abs(Math.floor(num)));
_2c=_2f(_2d,"",_2e,"",_28,_2a,_2b);
}
if(_27=="f"){
var _2e=String((_29!=null)?Math.abs(num).toFixed(_29):Math.abs(num));
var _30=(_23.indexOf("#")>=0&&_2e.indexOf(".")<0)?".":"";
_2c=_2f(_2d,"",_2e,_30,_28,_2a,_2b);
}
if(_27=="e"||_27=="E"){
var _2e=String(Math.abs(num).toExponential(_29!=null?_29:21));
var _30=(_23.indexOf("#")>=0&&_2e.indexOf(".")<0)?".":"";
_2c=_2f(_2d,"",_2e,_30,_28,_2a,_2b);
}
if(_27=="x"||_27=="X"){
var _2e=String(Math.abs(num).toString(16));
var _31=(_23.indexOf("#")>=0&&num!=0)?"0x":"";
_2c=_2f(_2d,_31,_2e,"",_28,_2a,_2b);
}
if(_27=="b"||_27=="B"){
var _2e=String(Math.abs(num).toString(2));
var _31=(_23.indexOf("#")>=0&&num!=0)?"0b":"";
_2c=_2f(_2d,_31,_2e,"",_28,_2a,_2b);
}
if(_27=="o"){
var _2e=String(Math.abs(num).toString(8));
var _31=(_23.indexOf("#")>=0&&num!=0)?"0":"";
_2c=_2f(_2d,_31,_2e,"",_28,_2a,_2b);
}
if(RegExp("[A-Z]").test(_27)){
_2c=_2c.toUpperCase();
}else{
_2c=_2c.toLowerCase();
}
}else{
var _2c="";
if(_27=="%"){
_2c="%";
}else{
if(_27=="c"){
_2c=String(arguments[arg++]).charAt(0);
}else{
if(_27=="s"||_27=="@"){
_2c=String(arguments[arg++]);
}else{
if(_27=="p"||_27=="n"){
arg++;
_2c="";
}
}
}
}
_2c=_2f("","",_2c,"",_28,_2a,false);
}
_20+=_2c;
}
}
return _20;
};
function _2f(_32,_33,_34,_35,_36,_37,_38){
var _39=(_32.length+_33.length+_34.length+_35.length);
if(_37){
return _32+_33+_34+_35+pad(_36-_39," ");
}else{
if(_38){
return _32+_33+pad(_36-_39,"0")+_34+_35;
}else{
return pad(_36-_39," ")+_32+_33+_34+_35;
}
}
};
function pad(n,ch){
return Array(MAX(0,n)+1).join(ch);
};
CPLogDisable=false;
var _3a="Cappuccino";
var _3b=["fatal","error","warn","info","debug","trace"];
var _3c=_3b[3];
var _3d={};
for(var i=0;i<_3b.length;i++){
_3d[_3b[i]]=i;
}
var _3e={};
CPLogRegister=function(_3f,_40){
CPLogRegisterRange(_3f,_3b[0],_40||_3b[_3b.length-1]);
};
CPLogRegisterRange=function(_41,_42,_43){
var min=_3d[_42];
var max=_3d[_43];
if(min!==_44&&max!==_44){
for(var i=0;i<=max;i++){
CPLogRegisterSingle(_41,_3b[i]);
}
}
};
CPLogRegisterSingle=function(_45,_46){
if(!_3e[_46]){
_3e[_46]=[];
}
for(var i=0;i<_3e[_46].length;i++){
if(_3e[_46][i]===_45){
return;
}
}
_3e[_46].push(_45);
};
CPLogUnregister=function(_47){
for(var _48 in _3e){
for(var i=0;i<_3e[_48].length;i++){
if(_3e[_48][i]===_47){
_3e[_48].splice(i--,1);
}
}
}
};
function _49(_4a,_4b,_4c){
if(_4c==_44){
_4c=_3a;
}
if(_4b==_44){
_4b=_3c;
}
var _4d=(typeof _4a[0]=="string"&&_4a.length>1)?sprintf.apply(null,_4a):String(_4a[0]);
if(_3e[_4b]){
for(var i=0;i<_3e[_4b].length;i++){
_3e[_4b][i](_4d,_4b,_4c);
}
}
};
CPLog=function(){
_49(arguments);
};
for(var i=0;i<_3b.length;i++){
CPLog[_3b[i]]=(function(_4e){
return function(){
_49(arguments,_4e);
};
})(_3b[i]);
}
var _4f=function(_50,_51,_52){
var now=new Date();
_51=(_51==null?"":" ["+_51+"]");
if(typeof sprintf=="function"){
return sprintf("%4d-%02d-%02d %02d:%02d:%02d.%03d %s%s: %s",now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds(),now.getMilliseconds(),_52,_51,_50);
}else{
return now+" "+_52+_51+": "+_50;
}
};
var _53=String.fromCharCode(27);
var _54=_53+"[";
var _55="m";
var _56="0";
var _57="1";
var _58="2";
var _59="22";
var _5a="3";
var _5b="4";
var _5c="21";
var _5d="24";
var _5e="5";
var _5f="6";
var _60="25";
var _61="7";
var _62="27";
var _63="8";
var _64="28";
var _65="3";
var _66="4";
var _67="9";
var _68="10";
var _69="0";
var _6a="1";
var _6b="2";
var _6c="3";
var _6d="4";
var _6e="5";
var _6f="6";
var _70="7";
var _71={"black":_69,"red":_6a,"green":_6b,"yellow":_6c,"blue":_6d,"magenta":_6e,"cyan":_6f,"white":_70};
function _72(_73,_74){
if(_74==_44){
_74="";
}else{
if(typeof (_74)=="object"&&(_74 instanceof Array)){
_74=_74.join(";");
}
}
return _54+String(_74)+String(_73);
};
function _75(_76,_77){
return _72(_55,_77)+String(_76)+_72(_55);
};
ANSITextColorize=function(_78,_79){
if(_71[_79]==_44){
return _78;
}
return _75(_78,_65+_71[_79]);
};
var _7a={"fatal":"red","error":"red","warn":"yellow","info":"green","debug":"cyan","trace":"blue"};
CPLogConsole=function(_7b,_7c,_7d){
if(typeof console!="undefined"){
var _7e=_4f(_7b,_7c,_7d);
var _7f={"fatal":"error","error":"error","warn":"warn","info":"info","debug":"debug","trace":"debug"}[_7c];
if(_7f&&console[_7f]){
console[_7f](_7e);
}else{
if(console.log){
console.log(_7e);
}
}
}
};
CPLogAlert=function(_80,_81,_82){
if(typeof alert!="undefined"&&!CPLogDisable){
var _83=_4f(_80,_81,_82);
CPLogDisable=!confirm(_83+"\n\n(Click cancel to stop log alerts)");
}
};
var _84=null;
CPLogPopup=function(_85,_86,_87){
try{
if(CPLogDisable||window.open==_44){
return;
}
if(!_84||!_84.document){
_84=window.open("","_blank","width=600,height=400,status=no,resizable=yes,scrollbars=yes");
if(!_84){
CPLogDisable=!confirm(_85+"\n\n(Disable pop-up blocking for CPLog window; Click cancel to stop log alerts)");
return;
}
_88(_84);
}
var _89=_84.document.createElement("div");
_89.setAttribute("class",_86||"fatal");
var _8a=_4f(_85,null,_87);
_89.appendChild(_84.document.createTextNode(_8a));
_84.log.appendChild(_89);
if(_84.focusEnabled.checked){
_84.focus();
}
if(_84.blockEnabled.checked){
_84.blockEnabled.checked=_84.confirm(_8a+"\nContinue blocking?");
}
if(_84.scrollEnabled.checked){
_84.scrollToBottom();
}
}
catch(e){
}
};
function _88(_8b){
var doc=_8b.document;
doc.writeln("<html><head><title></title></head><body></body></html>");
doc.title=_3a+" Run Log";
var _8c=doc.getElementsByTagName("head")[0];
var _8d=doc.getElementsByTagName("body")[0];
var _8e=window.location.protocol+"//"+window.location.host+window.location.pathname;
_8e=_8e.substring(0,_8e.lastIndexOf("/")+1);
var _8f=doc.createElement("link");
_8f.setAttribute("type","text/css");
_8f.setAttribute("rel","stylesheet");
_8f.setAttribute("href",_8e+"Frameworks/Foundation/Resources/log.css");
_8f.setAttribute("media","screen");
_8c.appendChild(_8f);
var div=doc.createElement("div");
div.setAttribute("id","header");
_8d.appendChild(div);
var ul=doc.createElement("ul");
ul.setAttribute("id","enablers");
div.appendChild(ul);
for(var i=0;i<_3b.length;i++){
var li=doc.createElement("li");
li.setAttribute("id","en"+_3b[i]);
li.setAttribute("class",_3b[i]);
li.setAttribute("onclick","toggle(this);");
li.setAttribute("enabled","yes");
li.appendChild(doc.createTextNode(_3b[i]));
ul.appendChild(li);
}
var ul=doc.createElement("ul");
ul.setAttribute("id","options");
div.appendChild(ul);
var _90={"focus":["Focus",false],"block":["Block",false],"wrap":["Wrap",false],"scroll":["Scroll",true],"close":["Close",true]};
for(o in _90){
var li=doc.createElement("li");
ul.appendChild(li);
_8b[o+"Enabled"]=doc.createElement("input");
_8b[o+"Enabled"].setAttribute("id",o);
_8b[o+"Enabled"].setAttribute("type","checkbox");
if(_90[o][1]){
_8b[o+"Enabled"].setAttribute("checked","checked");
}
li.appendChild(_8b[o+"Enabled"]);
var _91=doc.createElement("label");
_91.setAttribute("for",o);
_91.appendChild(doc.createTextNode(_90[o][0]));
li.appendChild(_91);
}
_8b.log=doc.createElement("div");
_8b.log.setAttribute("class","enerror endebug enwarn eninfo enfatal entrace");
_8d.appendChild(_8b.log);
_8b.toggle=function(_92){
var _93=(_92.getAttribute("enabled")=="yes")?"no":"yes";
_92.setAttribute("enabled",_93);
if(_93=="yes"){
_8b.log.className+=" "+_92.id;
}else{
_8b.log.className=_8b.log.className.replace(new RegExp("[\\s]*"+_92.id,"g"),"");
}
};
_8b.scrollToBottom=function(){
_8b.scrollTo(0,_8d.offsetHeight);
};
_8b.wrapEnabled.addEventListener("click",function(){
_8b.log.setAttribute("wrap",_8b.wrapEnabled.checked?"yes":"no");
},false);
_8b.addEventListener("keydown",function(e){
var e=e||_8b.event;
if(e.keyCode==75&&(e.ctrlKey||e.metaKey)){
while(_8b.log.firstChild){
_8b.log.removeChild(_8b.log.firstChild);
}
e.preventDefault();
}
},"false");
window.addEventListener("unload",function(){
if(_8b&&_8b.closeEnabled&&_8b.closeEnabled.checked){
CPLogDisable=true;
_8b.close();
}
},false);
_8b.addEventListener("unload",function(){
if(!CPLogDisable){
CPLogDisable=!confirm("Click cancel to stop logging");
}
},false);
};
var _44;
if(typeof window!=="undefined"){
window.setNativeTimeout=window.setTimeout;
window.clearNativeTimeout=window.clearTimeout;
window.setNativeInterval=window.setInterval;
window.clearNativeInterval=window.clearNativeInterval;
}
NO=false;
YES=true;
nil=null;
Nil=null;
NULL=null;
ABS=Math.abs;
ASIN=Math.asin;
ACOS=Math.acos;
ATAN=Math.atan;
ATAN2=Math.atan2;
SIN=Math.sin;
COS=Math.cos;
TAN=Math.tan;
EXP=Math.exp;
POW=Math.pow;
CEIL=Math.ceil;
FLOOR=Math.floor;
ROUND=Math.round;
MIN=Math.min;
MAX=Math.max;
RAND=Math.random;
SQRT=Math.sqrt;
E=Math.E;
LN2=Math.LN2;
LN10=Math.LN10;
LOG2E=Math.LOG2E;
LOG10E=Math.LOG10E;
PI=Math.PI;
PI2=Math.PI*2;
PI_2=Math.PI/2;
SQRT1_2=Math.SQRT1_2;
SQRT2=Math.SQRT2;
function _94(_95){
this._eventListenersForEventNames={};
this._owner=_95;
};
_94.prototype.addEventListener=function(_96,_97){
var _98=this._eventListenersForEventNames;
if(!_99.call(_98,_96)){
var _9a=[];
_98[_96]=_9a;
}else{
var _9a=_98[_96];
}
var _9b=_9a.length;
while(_9b--){
if(_9a[_9b]===_97){
return;
}
}
_9a.push(_97);
};
_94.prototype.removeEventListener=function(_9c,_9d){
var _9e=this._eventListenersForEventNames;
if(!_99.call(_9e,_9c)){
return;
}
var _9f=_9e[_9c],_a0=_9f.length;
while(_a0--){
if(_9f[_a0]===_9d){
return _9f.splice(_a0,1);
}
}
};
_94.prototype.dispatchEvent=function(_a1){
var _a2=_a1.type,_a3=this._eventListenersForEventNames;
if(_99.call(_a3,_a2)){
var _a4=this._eventListenersForEventNames[_a2],_a5=0,_a6=_a4.length;
for(;_a5<_a6;++_a5){
_a4[_a5](_a1);
}
}
var _a7=(this._owner||this)["on"+_a2];
if(_a7){
_a7(_a1);
}
};
var _a8=0,_a9=null,_aa=[];
function _ab(_ac){
var _ad=_a8;
if(_a9===null){
window.setNativeTimeout(function(){
var _ae=_aa,_af=0,_b0=_aa.length;
++_a8;
_a9=null;
_aa=[];
for(;_af<_b0;++_af){
_ae[_af]();
}
},0);
}
return function(){
var _b1=arguments;
if(_a8>_ad){
_ac.apply(this,_b1);
}else{
_aa.push(function(){
_ac.apply(this,_b1);
});
}
};
};
var _b2=null;
if(window.ActiveXObject!==_44){
var _b3=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP.6.0"],_b4=_b3.length;
while(_b4--){
try{
var _b5=_b3[_b4];
new ActiveXObject(_b5);
_b2=function(){
return new ActiveXObject(_b5);
};
break;
}
catch(anException){
}
}
}
if(!_b2){
_b2=window.XMLHttpRequest;
}
CFHTTPRequest=function(){
this._eventDispatcher=new _94(this);
this._nativeRequest=new _b2();
var _b6=this;
this._nativeRequest.onreadystatechange=function(){
_b7(_b6);
};
};
CFHTTPRequest.UninitializedState=0;
CFHTTPRequest.LoadingState=1;
CFHTTPRequest.LoadedState=2;
CFHTTPRequest.InteractiveState=3;
CFHTTPRequest.CompleteState=4;
CFHTTPRequest.prototype.status=function(){
try{
return this._nativeRequest.status||0;
}
catch(anException){
return 0;
}
};
CFHTTPRequest.prototype.statusText=function(){
try{
return this._nativeRequest.statusText||"";
}
catch(anException){
return "";
}
};
CFHTTPRequest.prototype.readyState=function(){
return this._nativeRequest.readyState;
};
CFHTTPRequest.prototype.success=function(){
var _b8=this.status();
if(_b8>=200&&_b8<300){
return YES;
}
return _b8===0&&this.responseText()&&this.responseText().length;
};
CFHTTPRequest.prototype.responseXML=function(){
var _b9=this._nativeRequest.responseXML;
if(_b9&&(_b2===window.XMLHttpRequest)){
return _b9;
}
return _ba(this.responseText());
};
CFHTTPRequest.prototype.responsePropertyList=function(){
var _bb=this.responseText();
if(CFPropertyList.sniffedFormatOfString(_bb)===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(this.responseXML());
}
return CFPropertyList.propertyListFromString(_bb);
};
CFHTTPRequest.prototype.responseText=function(){
return this._nativeRequest.responseText;
};
CFHTTPRequest.prototype.setRequestHeader=function(_bc,_bd){
return this._nativeRequest.setRequestHeader(_bc,_bd);
};
CFHTTPRequest.prototype.getResponseHeader=function(_be){
return this._nativeRequest.getResponseHeader(_be);
};
CFHTTPRequest.prototype.getAllResponseHeaders=function(){
return this._nativeRequest.getAllResponseHeaders();
};
CFHTTPRequest.prototype.overrideMimeType=function(_bf){
if("overrideMimeType" in this._nativeRequest){
return this._nativeRequest.overrideMimeType(_bf);
}
};
CFHTTPRequest.prototype.open=function(){
return this._nativeRequest.open(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
};
CFHTTPRequest.prototype.send=function(_c0){
try{
return this._nativeRequest.send(_c0);
}
catch(anException){
this._eventDispatcher.dispatchEvent({type:"failure",request:this});
}
};
CFHTTPRequest.prototype.abort=function(){
return this._nativeRequest.abort();
};
CFHTTPRequest.prototype.addEventListener=function(_c1,_c2){
this._eventDispatcher.addEventListener(_c1,_c2);
};
CFHTTPRequest.prototype.removeEventListener=function(_c3,_c4){
this._eventDispatcher.removeEventListener(_c3,_c4);
};
function _b7(_c5){
var _c6=_c5._eventDispatcher;
_c6.dispatchEvent({type:"readystatechange",request:_c5});
var _c7=_c5._nativeRequest,_c8=["uninitialized","loading","loaded","interactive","complete"][_c5.readyState()];
_c6.dispatchEvent({type:_c8,request:_c5});
if(_c8==="complete"){
var _c9="HTTP"+_c5.status();
_c6.dispatchEvent({type:_c9,request:_c5});
var _ca=_c5.success()?"success":"failure";
_c6.dispatchEvent({type:_ca,request:_c5});
}
};
function _cb(_cc,_cd,_ce){
var _cf=new CFHTTPRequest();
_cf.onsuccess=_ab(_cd);
_cf.onfailure=_ab(_ce);
if(_cc.pathExtension()==="plist"){
_cf.overrideMimeType("text/xml");
}
_cf.open("GET",_cc.absoluteString(),YES);
_cf.send("");
};
var _d0=0;
objj_generateObjectUID=function(){
return _d0++;
};
CFPropertyList=function(){
this._UID=objj_generateObjectUID();
};
CFPropertyList.DTDRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?/i;
CFPropertyList.XMLRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?<\s*plist[^>]*\>/i;
CFPropertyList.FormatXMLDTD="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">";
CFPropertyList.Format280NorthMagicNumber="280NPLIST";
CFPropertyList.FormatOpenStep=1,CFPropertyList.FormatXML_v1_0=100,CFPropertyList.FormatBinary_v1_0=200,CFPropertyList.Format280North_v1_0=-1000;
CFPropertyList.sniffedFormatOfString=function(_d1){
if(_d1.match(CFPropertyList.XMLRE)){
return CFPropertyList.FormatXML_v1_0;
}
if(_d1.substr(0,CFPropertyList.Format280NorthMagicNumber.length)===CFPropertyList.Format280NorthMagicNumber){
return CFPropertyList.Format280North_v1_0;
}
return NULL;
};
CFPropertyList.dataFromPropertyList=function(_d2,_d3){
var _d4=new CFMutableData();
_d4.setRawString(CFPropertyList.stringFromPropertyList(_d2,_d3));
return _d4;
};
CFPropertyList.stringFromPropertyList=function(_d5,_d6){
if(!_d6){
_d6=CFPropertyList.Format280North_v1_0;
}
var _d7=_d8[_d6];
return _d7["start"]()+_d9(_d5,_d7)+_d7["finish"]();
};
function _d9(_da,_db){
var _dc=typeof _da,_dd=_da.valueOf(),_de=typeof _dd;
if(_dc!==_de){
_dc=_de;
_da=_dd;
}
if(_da===YES||_da===NO){
_dc="boolean";
}else{
if(_dc==="number"){
if(FLOOR(_da)===_da){
_dc="integer";
}else{
_dc="real";
}
}else{
if(_dc!=="string"){
if(_da.slice){
_dc="array";
}else{
_dc="dictionary";
}
}
}
}
return _db[_dc](_da,_db);
};
var _d8={};
_d8[CFPropertyList.FormatXML_v1_0]={"start":function(){
return CFPropertyList.FormatXMLDTD+"<plist version = \"1.0\">";
},"finish":function(){
return "</plist>";
},"string":function(_df){
return "<string>"+_e0(_df)+"</string>";
},"boolean":function(_e1){
return _e1?"<true/>":"<false/>";
},"integer":function(_e2){
return "<integer>"+_e2+"</integer>";
},"real":function(_e3){
return "<real>"+_e3+"</real>";
},"array":function(_e4,_e5){
var _e6=0,_e7=_e4.length,_e8="<array>";
for(;_e6<_e7;++_e6){
_e8+=_d9(_e4[_e6],_e5);
}
return _e8+"</array>";
},"dictionary":function(_e9,_ea){
var _eb=_e9._keys,_b4=0,_ec=_eb.length,_ed="<dict>";
for(;_b4<_ec;++_b4){
var key=_eb[_b4];
_ed+="<key>"+key+"</key>";
_ed+=_d9(_e9.valueForKey(key),_ea);
}
return _ed+"</dict>";
}};
var _ee="A",_ef="D",_f0="f",_f1="d",_f2="S",_f3="T",_f4="F",_f5="K",_f6="E";
_d8[CFPropertyList.Format280North_v1_0]={"start":function(){
return CFPropertyList.Format280NorthMagicNumber+";1.0;";
},"finish":function(){
return "";
},"string":function(_f7){
return _f2+";"+_f7.length+";"+_f7;
},"boolean":function(_f8){
return (_f8?_f3:_f4)+";";
},"integer":function(_f9){
var _fa=""+_f9;
return _f1+";"+_fa.length+";"+_fa;
},"real":function(_fb){
var _fc=""+_fb;
return _f0+";"+_fc.length+";"+_fc;
},"array":function(_fd,_fe){
var _ff=0,_100=_fd.length,_101=_ee+";";
for(;_ff<_100;++_ff){
_101+=_d9(_fd[_ff],_fe);
}
return _101+_f6+";";
},"dictionary":function(_102,_103){
var keys=_102._keys,_b4=0,_104=keys.length,_105=_ef+";";
for(;_b4<_104;++_b4){
var key=keys[_b4];
_105+=_f5+";"+key.length+";"+key;
_105+=_d9(_102.valueForKey(key),_103);
}
return _105+_f6+";";
}};
var _106="xml",_107="#document",_108="plist",_109="key",_10a="dict",_10b="array",_10c="string",_10d="true",_10e="false",_10f="real",_110="integer",_111="data";
var _112=function(_113,_114,_115){
var node=_113;
node=(node.firstChild);
if(node!==NULL&&((node.nodeType)===8||(node.nodeType)===3)){
while((node=(node.nextSibling))&&((node.nodeType)===8||(node.nodeType)===3)){
}
}
if(node){
return node;
}
if((String(_113.nodeName))===_10b||(String(_113.nodeName))===_10a){
_115.pop();
}else{
if(node===_114){
return NULL;
}
node=_113;
while((node=(node.nextSibling))&&((node.nodeType)===8||(node.nodeType)===3)){
}
if(node){
return node;
}
}
node=_113;
while(node){
var next=node;
while((next=(next.nextSibling))&&((next.nodeType)===8||(next.nodeType)===3)){
}
if(next){
return next;
}
var node=(node.parentNode);
if(_114&&node===_114){
return NULL;
}
_115.pop();
}
return NULL;
};
CFPropertyList.propertyListFromData=function(_116,_117){
return CFPropertyList.propertyListFromString(_116.rawString(),_117);
};
CFPropertyList.propertyListFromString=function(_118,_119){
if(!_119){
_119=CFPropertyList.sniffedFormatOfString(_118);
}
if(_119===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(_118);
}
if(_119===CFPropertyList.Format280North_v1_0){
return _11a(_118);
}
return NULL;
};
var _ee="A",_ef="D",_f0="f",_f1="d",_f2="S",_f3="T",_f4="F",_f5="K",_f6="E";
function _11a(_11b){
var _11c=new _11d(_11b),_11e=NULL,key="",_11f=NULL,_120=NULL,_121=[],_122=NULL;
while(_11e=_11c.getMarker()){
if(_11e===_f6){
_121.pop();
continue;
}
var _123=_121.length;
if(_123){
_122=_121[_123-1];
}
if(_11e===_f5){
key=_11c.getString();
_11e=_11c.getMarker();
}
switch(_11e){
case _ee:
_11f=[];
_121.push(_11f);
break;
case _ef:
_11f=new CFMutableDictionary();
_121.push(_11f);
break;
case _f0:
_11f=parseFloat(_11c.getString());
break;
case _f1:
_11f=parseInt(_11c.getString(),10);
break;
case _f2:
_11f=_11c.getString();
break;
case _f3:
_11f=YES;
break;
case _f4:
_11f=NO;
break;
default:
throw new Error("*** "+_11e+" marker not recognized in Plist.");
}
if(!_120){
_120=_11f;
}else{
if(_122){
if(_122.slice){
_122.push(_11f);
}else{
_122.setValueForKey(key,_11f);
}
}
}
}
return _120;
};
function _e0(_124){
return _124.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
function _125(_126){
return _126.replace(/&quot;/g,"\"").replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
};
function _ba(_127){
if(window.DOMParser){
return (new window.DOMParser().parseFromString(_127,"text/xml").documentElement);
}else{
if(window.ActiveXObject){
XMLNode=new ActiveXObject("Microsoft.XMLDOM");
var _128=_127.match(CFPropertyList.DTDRE);
if(_128){
_127=_127.substr(_128[0].length);
}
XMLNode.loadXML(_127);
return XMLNode;
}
}
return NULL;
};
CFPropertyList.propertyListFromXML=function(_129){
var _12a=_129;
if(_129.valueOf&&typeof _129.valueOf()==="string"){
_12a=_ba(_129);
}
while(((String(_12a.nodeName))===_107)||((String(_12a.nodeName))===_106)){
_12a=(_12a.firstChild);
}
if(_12a!==NULL&&((_12a.nodeType)===8||(_12a.nodeType)===3)){
while((_12a=(_12a.nextSibling))&&((_12a.nodeType)===8||(_12a.nodeType)===3)){
}
}
if(((_12a.nodeType)===10)){
while((_12a=(_12a.nextSibling))&&((_12a.nodeType)===8||(_12a.nodeType)===3)){
}
}
if(!((String(_12a.nodeName))===_108)){
return NULL;
}
var key="",_12b=NULL,_12c=NULL,_12d=_12a,_12e=[],_12f=NULL;
while(_12a=_112(_12a,_12d,_12e)){
var _130=_12e.length;
if(_130){
_12f=_12e[_130-1];
}
if((String(_12a.nodeName))===_109){
key=((String((_12a.firstChild).nodeValue)));
while((_12a=(_12a.nextSibling))&&((_12a.nodeType)===8||(_12a.nodeType)===3)){
}
}
switch(String((String(_12a.nodeName)))){
case _10b:
_12b=[];
_12e.push(_12b);
break;
case _10a:
_12b=new CFMutableDictionary();
_12e.push(_12b);
break;
case _10f:
_12b=parseFloat(((String((_12a.firstChild).nodeValue))));
break;
case _110:
_12b=parseInt(((String((_12a.firstChild).nodeValue))),10);
break;
case _10c:
_12b=_125((_12a.firstChild)?((String((_12a.firstChild).nodeValue))):"");
break;
case _10d:
_12b=YES;
break;
case _10e:
_12b=NO;
break;
case _111:
_12b=new CFMutableData();
_12b.bytes=(_12a.firstChild)?base64_decode_to_array(((String((_12a.firstChild).nodeValue))),YES):[];
break;
default:
throw new Error("*** "+(String(_12a.nodeName))+" tag not recognized in Plist.");
}
if(!_12c){
_12c=_12b;
}else{
if(_12f){
if(_12f.slice){
_12f.push(_12b);
}else{
_12f.setValueForKey(key,_12b);
}
}
}
}
return _12c;
};
kCFPropertyListOpenStepFormat=CFPropertyList.FormatOpenStep;
kCFPropertyListXMLFormat_v1_0=CFPropertyList.FormatXML_v1_0;
kCFPropertyListBinaryFormat_v1_0=CFPropertyList.FormatBinary_v1_0;
kCFPropertyList280NorthFormat_v1_0=CFPropertyList.Format280North_v1_0;
CFPropertyListCreate=function(){
return new CFPropertyList();
};
CFPropertyListCreateFromXMLData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateXMLData=function(_131){
return CFPropertyList.dataFromPropertyList(_131,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateFrom280NorthData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.Format280North_v1_0);
};
CFPropertyListCreate280NorthData=function(_132){
return CFPropertyList.dataFromPropertyList(_132,CFPropertyList.Format280North_v1_0);
};
CPPropertyListCreateFromData=function(data,_133){
return CFPropertyList.propertyListFromData(data,_133);
};
CPPropertyListCreateData=function(_134,_135){
return CFPropertyList.dataFromPropertyList(_134,_135);
};
CFDictionary=function(_136){
this._keys=[];
this._count=0;
this._buckets={};
this._UID=objj_generateObjectUID();
};
var _137=Array.prototype.indexOf,_99=Object.prototype.hasOwnProperty;
CFDictionary.prototype.copy=function(){
return this;
};
CFDictionary.prototype.mutableCopy=function(){
var _138=new CFMutableDictionary(),keys=this._keys,_139=this._count;
_138._keys=keys.slice();
_138._count=_139;
var _13a=0,_13b=this._buckets,_13c=_138._buckets;
for(;_13a<_139;++_13a){
var key=keys[_13a];
_13c[key]=_13b[key];
}
return _138;
};
CFDictionary.prototype.containsKey=function(aKey){
return _99.apply(this._buckets,[aKey]);
};
CFDictionary.prototype.containsValue=function(_13d){
var keys=this._keys,_13e=this._buckets,_b4=0,_13f=keys.length;
for(;_b4<_13f;++_b4){
if(_13e[keys]===_13d){
return YES;
}
}
return NO;
};
CFDictionary.prototype.count=function(){
return this._count;
};
CFDictionary.prototype.countOfKey=function(aKey){
return this.containsKey(aKey)?1:0;
};
CFDictionary.prototype.countOfValue=function(_140){
var keys=this._keys,_141=this._buckets,_b4=0,_142=keys.length,_143=0;
for(;_b4<_142;++_b4){
if(_141[keys]===_140){
return ++_143;
}
}
return _143;
};
CFDictionary.prototype.keys=function(){
return this._keys.slice();
};
CFDictionary.prototype.valueForKey=function(aKey){
var _144=this._buckets;
if(!_99.apply(_144,[aKey])){
return nil;
}
return _144[aKey];
};
CFDictionary.prototype.toString=function(){
var _145="{\n",keys=this._keys,_b4=0,_146=this._count;
for(;_b4<_146;++_b4){
var key=keys[_b4];
_145+="\t"+key+" = \""+String(this.valueForKey(key)).split("\n").join("\n\t")+"\"\n";
}
return _145+"}";
};
CFMutableDictionary=function(_147){
CFDictionary.apply(this,[]);
};
CFMutableDictionary.prototype=new CFDictionary();
CFMutableDictionary.prototype.copy=function(){
return this.mutableCopy();
};
CFMutableDictionary.prototype.addValueForKey=function(aKey,_148){
if(this.containsKey(aKey)){
return;
}
++this._count;
this._keys.push(aKey);
this._buckets[aKey]=_148;
};
CFMutableDictionary.prototype.removeValueForKey=function(aKey){
var _149=-1;
if(_137){
_149=_137.call(this._keys,aKey);
}else{
var keys=this._keys,_b4=0,_14a=keys.length;
for(;_b4<_14a;++_b4){
if(keys[_b4]===aKey){
_149=_b4;
break;
}
}
}
if(_149===-1){
return;
}
--this._count;
this._keys.splice(_149,1);
delete this._buckets[aKey];
};
CFMutableDictionary.prototype.removeAllValues=function(){
this._count=0;
this._keys=[];
this._buckets={};
};
CFMutableDictionary.prototype.replaceValueForKey=function(aKey,_14b){
if(!this.containsKey(aKey)){
return;
}
this._buckets[aKey]=_14b;
};
CFMutableDictionary.prototype.setValueForKey=function(aKey,_14c){
if(_14c===nil||_14c===_44){
this.removeValueForKey(aKey);
}else{
if(this.containsKey(aKey)){
this.replaceValueForKey(aKey,_14c);
}else{
this.addValueForKey(aKey,_14c);
}
}
};
CFData=function(){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFData.prototype.propertyList=function(){
if(!this._propertyList){
this._propertyList=CFPropertyList.propertyListFromString(this.rawString());
}
return this._propertyList;
};
CFData.prototype.JSONObject=function(){
if(!this._JSONObject){
try{
this._JSONObject=JSON.parse(this.rawString());
}
catch(anException){
}
}
return this._JSONObject;
};
CFData.prototype.rawString=function(){
if(this._rawString===NULL){
if(this._propertyList){
this._rawString=CFPropertyList.stringFromPropertyList(this._propertyList,this._propertyListFormat);
}else{
if(this._JSONObject){
this._rawString=JSON.stringify(this._JSONObject);
}else{
throw new Error("Can't convert data to string.");
}
}
}
return this._rawString;
};
CFData.prototype.bytes=function(){
return this._bytes;
};
CFData.prototype.base64=function(){
return this._base64;
};
CFMutableData=function(){
CFData.call(this);
};
CFMutableData.prototype=new CFData();
function _14d(_14e){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFMutableData.prototype.setPropertyList=function(_14f,_150){
_14d(this);
this._propertyList=_14f;
this._propertyListFormat=_150;
};
CFMutableData.prototype.setJSONObject=function(_151){
_14d(this);
this._JSONObject=_151;
};
CFMutableData.prototype.setRawString=function(_152){
_14d(this);
this._rawString=_152;
};
CFMutableData.prototype.setBytes=function(_153){
_14d(this);
this._bytes=_153;
};
CFMutableData.prototype.setBase64String=function(_154){
_14d(this);
this._base64=_154;
};
var _155=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],_156=[];
for(var i=0;i<_155.length;i++){
_156[_155[i].charCodeAt(0)]=i;
}
base64_decode_to_array=function(_157,_158){
if(_158){
_157=_157.replace(/[^A-Za-z0-9\+\/\=]/g,"");
}
var pad=(_157[_157.length-1]=="="?1:0)+(_157[_157.length-2]=="="?1:0),_159=_157.length,_15a=[];
var i=0;
while(i<_159){
var bits=(_156[_157.charCodeAt(i++)]<<18)|(_156[_157.charCodeAt(i++)]<<12)|(_156[_157.charCodeAt(i++)]<<6)|(_156[_157.charCodeAt(i++)]);
_15a.push((bits&16711680)>>16);
_15a.push((bits&65280)>>8);
_15a.push(bits&255);
}
if(pad>0){
return _15a.slice(0,-1*pad);
}
return _15a;
};
base64_encode_array=function(_15b){
var pad=(3-(_15b.length%3))%3,_15c=_15b.length+pad,_15d=[];
if(pad>0){
_15b.push(0);
}
if(pad>1){
_15b.push(0);
}
var i=0;
while(i<_15c){
var bits=(_15b[i++]<<16)|(_15b[i++]<<8)|(_15b[i++]);
_15d.push(_155[(bits&16515072)>>18]);
_15d.push(_155[(bits&258048)>>12]);
_15d.push(_155[(bits&4032)>>6]);
_15d.push(_155[bits&63]);
}
if(pad>0){
_15d[_15d.length-1]="=";
_15b.pop();
}
if(pad>1){
_15d[_15d.length-2]="=";
_15b.pop();
}
return _15d.join("");
};
base64_decode_to_string=function(_15e,_15f){
return bytes_to_string(base64_decode_to_array(_15e,_15f));
};
bytes_to_string=function(_160){
return String.fromCharCode.apply(NULL,_160);
};
base64_encode_string=function(_161){
var temp=[];
for(var i=0;i<_161.length;i++){
temp.push(_161.charCodeAt(i));
}
return base64_encode_array(temp);
};
var _162,_163,_164=0;
function _165(){
if(++_164!==1){
return;
}
_162={};
_163={};
};
function _166(){
_164=MAX(_164-1,0);
if(_164!==0){
return;
}
delete _162;
delete _163;
};
var _167=new RegExp("^"+"(?:"+"([^:/?#]+):"+")?"+"(?:"+"(//)"+"("+"(?:"+"("+"([^:@]*)"+":?"+"([^:@]*)"+")?"+"@"+")?"+"([^:/?#]*)"+"(?::(\\d*))?"+")"+")?"+"([^?#]*)"+"(?:\\?([^#]*))?"+"(?:#(.*))?");
var _168=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","portNumber","path","queryString","fragment"];
function _169(aURL){
if(aURL._parts){
return aURL._parts;
}
var _16a=aURL.string(),_16b=_16a.match(/^mhtml:/);
if(_16b){
_16a=_16a.substr("mhtml:".length);
}
if(_164>0&&_99.call(_163,_16a)){
aURL._parts=_163[_16a];
return aURL._parts;
}
aURL._parts={};
var _16c=aURL._parts,_16d=_167.exec(_16a),_b4=_16d.length;
while(_b4--){
_16c[_168[_b4]]=_16d[_b4]||NULL;
}
_16c.portNumber=parseInt(_16c.portNumber,10);
if(isNaN(_16c.portNumber)){
_16c.portNumber=-1;
}
_16c.pathComponents=[];
if(_16c.path){
var _16e=_16c.path.split("/"),_16f=_16c.pathComponents;
_b4=0,count=_16e.length;
for(;_b4<count;++_b4){
var _170=_16e[_b4];
if(_170){
_16f.push(_170);
}else{
if(_b4===0){
_16f.push("/");
}
}
}
_16c.pathComponents=_16f;
}
if(_16b){
_16c.url="mhtml:"+_16c.url;
_16c.scheme="mhtml:"+_16c.scheme;
}
if(_164>0){
_163[_16a]=_16c;
}
return _16c;
};
CFURL=function(aURL,_171){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_171){
return aURL;
}
var _172=aURL.baseURL();
if(_172){
_171=new CFURL(_172.absoluteURL(),_171);
}
aURL=aURL.string();
}
if(_164>0){
var _173=aURL+" "+(_171&&_171.UID()||"");
if(_99.call(_162,_173)){
return _162[_173];
}
_162[_173]=this;
}
if(aURL.match(/^data:/)){
var _174={},_b4=_168.length;
while(_b4--){
_174[_168[_b4]]="";
}
_174.url=aURL;
_174.scheme="data";
_174.pathComponents=[];
this._parts=_174;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_171;
};
CFURL.displayName="CFURL";
var _175={};
CFURL.prototype.UID=function(){
return this._UID;
};
CFURL.prototype.mappedURL=function(){
return _175[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_176,_177){
_175[_176.absoluteString()]=_177;
};
CFURL.prototype.schemeAndAuthority=function(){
var _178="",_179=this.scheme();
if(_179){
_178+=_179+":";
}
var _17a=this.authority();
if(_17a){
_178+="//"+_17a;
}
return _178;
};
CFURL.prototype.absoluteString=function(){
return this.absoluteURL().string();
};
CFURL.prototype.toString=function(){
return this.absoluteString();
};
function _17b(aURL){
aURL=aURL.standardizedURL();
var _17c=aURL.baseURL();
if(!_17c){
return aURL;
}
var _17d=((aURL)._parts||_169(aURL)),_17e,_17f=_17c.absoluteURL(),_180=((_17f)._parts||_169(_17f));
if(_17d.scheme||_17d.authority){
_17e=_17d;
}else{
_17e={};
_17e.scheme=_180.scheme;
_17e.authority=_180.authority;
_17e.userInfo=_180.userInfo;
_17e.user=_180.user;
_17e.password=_180.password;
_17e.domain=_180.domain;
_17e.portNumber=_180.portNumber;
_17e.queryString=_17d.queryString;
_17e.fragment=_17d.fragment;
var _181=_17d.pathComponents;
if(_181.length&&_181[0]==="/"){
_17e.path=_17d.path;
_17e.pathComponents=_181;
}else{
var _182=_180.pathComponents,_183=_182.concat(_181);
if(!_17c.hasDirectoryPath()&&_182.length){
_183.splice(_182.length-1,1);
}
if(_181.length&&_181[0]===".."){
_184(_183);
}
_17e.pathComponents=_183;
_17e.path=_185(_183,_181.length<=0||aURL.hasDirectoryPath());
}
}
var _186=_187(_17e),_188=new CFURL(_186);
_188._parts=_17e;
_188._standardizedURL=_188;
_188._absoluteURL=_188;
return _188;
};
function _185(_189,_18a){
var path=_189.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_18a){
path+="/";
}
return path;
};
function _184(_18b){
var _18c=0,_18d=0,_18e=_18b.length;
for(;_18c<_18e;++_18c){
var _18f=_18b[_18c];
if(_18f===""||_18f==="."){
continue;
}
if(_18f!==".."||_18d===0||_18b[_18d-1]===".."){
_18b[_18d]=_18f;
_18d++;
continue;
}
if(_18d>0&&_18b[_18d-1]!=="/"){
--_18d;
}
}
_18b.length=_18d;
};
function _187(_190){
var _191="",_192=_190.scheme;
if(_192){
_191+=_192+":";
}
var _193=_190.authority;
if(_193){
_191+="//"+_193;
}
_191+=_190.path;
var _194=_190.queryString;
if(_194){
_191+="?"+_194;
}
var _195=_190.fragment;
if(_195){
_191+="#"+_195;
}
return _191;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_17b(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _196=((this)._parts||_169(this)),_197=_196.pathComponents,_198=_197.slice();
_184(_198);
var _199=_185(_198,this.hasDirectoryPath());
if(_196.path===_199){
this._standardizedURL=this;
}else{
var _19a=_19b(_196);
_19a.pathComponents=_198;
_19a.path=_199;
var _19c=new CFURL(_187(_19a),this.baseURL());
_19c._parts=_19a;
_19c._standardizedParts=_19c;
this._standardizedURL=_19c;
}
}
return this._standardizedURL;
};
function _19b(_19d){
var _19e={},_19f=_168.length;
while(_19f--){
var _1a0=_168[_19f];
_19e[_1a0]=_19d[_1a0];
}
return _19e;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _1a1=((this)._parts||_169(this)).authority;
if(_1a1){
return _1a1;
}
var _1a2=this.baseURL();
return _1a2&&_1a2.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _1a3=this._hasDirectoryPath;
if(_1a3===_44){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _1a4=this.lastPathComponent();
_1a3=_1a4==="."||_1a4==="..";
this._hasDirectoryPath=_1a3;
}
return this._hasDirectoryPath;
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return ((this)._parts||_169(this)).fragment;
};
CFURL.prototype.lastPathComponent=function(){
var _1a5=this.pathComponents(),_1a6=_1a5.length;
if(!_1a6){
return "";
}
return _1a5[_1a6-1];
};
CFURL.prototype.path=function(){
return ((this)._parts||_169(this)).path;
};
CFURL.prototype.pathComponents=function(){
return ((this)._parts||_169(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _1a7=this.lastPathComponent();
if(!_1a7){
return NULL;
}
_1a7=_1a7.replace(/^\.*/,"");
var _1a8=_1a7.lastIndexOf(".");
return _1a8<=0?"":_1a7.substring(_1a8+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_169(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _1a9=this._scheme;
if(_1a9===_44){
_1a9=((this)._parts||_169(this)).scheme;
if(!_1a9){
var _1aa=this.baseURL();
_1a9=_1aa&&_1aa.scheme();
}
this._scheme=_1a9;
}
return _1a9;
};
CFURL.prototype.user=function(){
return ((this)._parts||_169(this)).user;
};
CFURL.prototype.password=function(){
return ((this)._parts||_169(this)).password;
};
CFURL.prototype.portNumber=function(){
return ((this)._parts||_169(this)).portNumber;
};
CFURL.prototype.domain=function(){
return ((this)._parts||_169(this)).domain;
};
CFURL.prototype.baseURL=function(){
return this._baseURL;
};
CFURL.prototype.asDirectoryPathURL=function(){
if(this.hasDirectoryPath()){
return this;
}
return new CFURL(this.lastPathComponent()+"/",this);
};
function _1ab(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _1ab(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_1ac){
_1ab(this).setValueForKey(aKey,_1ac);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_1ad.resourceAtURL(this).contents());
return data;
};
function _11d(_1ae){
this._string=_1ae;
var _1af=_1ae.indexOf(";");
this._magicNumber=_1ae.substr(0,_1af);
this._location=_1ae.indexOf(";",++_1af);
this._version=_1ae.substring(_1af,this._location++);
};
_11d.prototype.magicNumber=function(){
return this._magicNumber;
};
_11d.prototype.version=function(){
return this._version;
};
_11d.prototype.getMarker=function(){
var _1b0=this._string,_1b1=this._location;
if(_1b1>=_1b0.length){
return null;
}
var next=_1b0.indexOf(";",_1b1);
if(next<0){
return null;
}
var _1b2=_1b0.substring(_1b1,next);
if(_1b2==="e"){
return null;
}
this._location=next+1;
return _1b2;
};
_11d.prototype.getString=function(){
var _1b3=this._string,_1b4=this._location;
if(_1b4>=_1b3.length){
return null;
}
var next=_1b3.indexOf(";",_1b4);
if(next<0){
return null;
}
var size=parseInt(_1b3.substring(_1b4,next)),text=_1b3.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _1b5=0,_1b6=1<<0,_1b7=1<<1,_1b8=1<<2,_1b9=1<<3,_1ba=1<<4;
var _1bb={},_1bc={},_1bd=new Date().getTime(),_1be=0,_1bf=0;
CFBundle=function(aURL){
aURL=_1c0(aURL).asDirectoryPathURL();
var _1c1=aURL.absoluteString(),_1c2=_1bb[_1c1];
if(_1c2){
return _1c2;
}
_1bb[_1c1]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._loadStatus=_1b5;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _94(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1c0(aURL));
while(aURL.path()!=="/"){
var _1c3=_1bb[aURL.absoluteString()];
if(_1c3){
return _1c3;
}
aURL=new CFURL("..",aURL);
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1c4);
};
function _1c5(_1c6,_1c7){
if(_1c7){
_1bc[_1c6.name]=_1c7;
}
};
CFBundle.bundleForClass=function(_1c8){
return _1bc[_1c8.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1c9,_1ca,_1cb){
if(_1ca){
_1c9=_1c9+"."+_1ca;
}
if(_1cb){
_1c9=_1cb+"/"+_1c9;
}
var _1cc=(new CFURL(_1c9,this.resourcesDirectoryURL())).mappedURL();
return _1cc.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1cd=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1cd){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1cd,this.mostEligibleEnvironmentURL());
}
}
return this._executableURL;
};
CFBundle.prototype.infoDictionary=function(){
return this._infoDictionary;
};
CFBundle.prototype.valueForInfoDictionaryKey=function(aKey){
return this._infoDictionary.valueForKey(aKey);
};
CFBundle.prototype.hasSpritedImages=function(){
var _1ce=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_b4=_1ce.length,_1cf=this.mostEligibleEnvironment();
while(_b4--){
if(_1ce[_b4]===_1cf){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1d0){
_1d0=_1d0||this.environments();
var _1d1=CFBundle.environments(),_b4=0,_1d2=_1d1.length,_1d3=_1d0.length;
for(;_b4<_1d2;++_b4){
var _1d4=0,_1d5=_1d1[_b4];
for(;_1d4<_1d3;++_1d4){
if(_1d5===_1d0[_1d4]){
return _1d5;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_1b6;
};
CFBundle.prototype.load=function(_1d6){
if(this._loadStatus!==_1b5){
return;
}
this._loadStatus=_1b6|_1b7;
var self=this;
var _1d7=new CFURL("..",this.bundleURL());
if(_1d7.absoluteString()===this.bundleURL().absoluteString()){
_1d7=_1d7.schemeAndAuthority();
}
_1ad.resolveResourceAtURL(_1d7,YES,function(_1d8){
var _1d9=self.bundleURL().absoluteURL().lastPathComponent();
self._staticResource=_1d8._children[_1d9]||new _1ad(_1d9,_1d8,YES,NO);
function _1da(_1db){
self._loadStatus&=~_1b7;
self._infoDictionary=_1db.request.responsePropertyList();
if(!self._infoDictionary){
_1dd(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1bf=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1e1(self,_1d6);
};
function _1dc(){
self._loadStatus=_1b5;
_1dd(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _cb(new CFURL("Info.plist",self.bundleURL()),_1da,_1dc);
});
};
function _1dd(_1de,_1df){
_1e0(_1de._staticResource);
_1de._eventDispatcher.dispatchEvent({type:"error",error:_1df,bundle:_1de});
};
function _1e1(_1e2,_1e3){
if(!_1e2.mostEligibleEnvironment()){
return _1e4();
}
_1e5(_1e2,_1e6,_1e4);
_1e7(_1e2,_1e6,_1e4);
if(_1e2._loadStatus===_1b6){
return _1e6();
}
function _1e4(_1e8){
var _1e9=_1e2._loadRequests,_1ea=_1e9.length;
while(_1ea--){
_1e9[_1ea].abort();
}
this._loadRequests=[];
_1e2._loadStatus=_1b5;
_1dd(_1e2,_1e8||new Error("Could not recognize executable code format in Bundle "+_1e2));
};
function _1e6(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_1bf){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_1be/_1bf),0),_1bf,_1e2.path());
}
if(_1e2._loadStatus===_1b6){
_1e2._loadStatus=_1ba;
}else{
return;
}
_1e0(_1e2._staticResource);
function _1eb(){
_1e2._eventDispatcher.dispatchEvent({type:"load",bundle:_1e2});
};
if(_1e3){
_1ec(_1e2,_1eb);
}else{
_1eb();
}
};
};
function _1e5(_1ed,_1ee,_1ef){
var _1f0=_1ed.executableURL();
if(!_1f0){
return;
}
_1ed._loadStatus|=_1b8;
new _cb(_1f0,function(_1f1){
try{
_1be+=_1f1.request.responseText().length;
_1f2(_1ed,_1f1.request.responseText(),_1f0);
_1ed._loadStatus&=~_1b8;
_1ee();
}
catch(anException){
_1ef(anException);
}
},_1ef);
};
function _1f3(_1f4){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1f4.mostEligibleEnvironmentURL());
};
function _1f5(_1f6){
if(_1f7===_1f8){
return new CFURL("dataURLs.txt",_1f6.mostEligibleEnvironmentURL());
}
if(_1f7===_1f9||_1f7===_1fa){
return new CFURL("MHTMLPaths.txt",_1f6.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1e7(_1fb,_1fc,_1fd){
if(!_1fb.hasSpritedImages()){
return;
}
_1fb._loadStatus|=_1b9;
if(!_1fe()){
return _1ff(_1f3(_1fb),function(){
_1e7(_1fb,_1fc,_1fd);
});
}
var _200=_1f5(_1fb);
if(!_200){
_1fb._loadStatus&=~_1b9;
return _1fc();
}
new _cb(_200,function(_201){
try{
_1be+=_201.request.responseText().length;
_1f2(_1fb,_201.request.responseText(),_200);
_1fb._loadStatus&=~_1b9;
_1fc();
}
catch(anException){
_1fd(anException);
}
},_1fd);
};
var _202=[],_1f7=-1,_203=0,_1f8=1,_1f9=2,_1fa=3;
function _1fe(){
return _1f7!==-1;
};
function _1ff(_204,_205){
if(_1fe()){
return;
}
_202.push(_205);
if(_202.length>1){
return;
}
_202.push(function(){
var size=0,_206=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_206){
return;
}
switch(_1f7){
case _1f8:
size=_206.valueForKey("data");
break;
case _1f9:
case _1fa:
size=_206.valueForKey("mhtml");
break;
}
_1bf+=size;
});
_207([_1f8,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1f9,_204+"!test",_1fa,_204+"?"+_1bd+"!test"]);
};
function _208(){
var _209=_202.length;
while(_209--){
_202[_209]();
}
};
function _207(_20a){
if(_20a.length<2){
_1f7=_203;
_208();
return;
}
var _20b=new Image();
_20b.onload=function(){
if(_20b.width===1&&_20b.height===1){
_1f7=_20a[0];
_208();
}else{
_20b.onerror();
}
};
_20b.onerror=function(){
_207(_20a.slice(2));
};
_20b.src=_20a[1];
};
function _1ec(_20c,_20d){
var _20e=[_20c._staticResource];
function _20f(_210){
for(;_210<_20e.length;++_210){
var _211=_20e[_210];
if(_211.isNotFound()){
continue;
}
if(_211.isFile()){
var _212=new _319(_211.URL());
if(_212.hasLoadedFileDependencies()){
_212.execute();
}else{
_212.addEventListener("dependenciesload",function(){
_20f(_210);
});
_212.loadFileDependencies();
return;
}
}else{
if(_211.URL().absoluteString()===_20c.resourcesDirectoryURL().absoluteString()){
continue;
}
var _213=_211.children();
for(var name in _213){
if(_99.call(_213,name)){
_20e.push(_213[name]);
}
}
}
}
_20d();
};
_20f(0);
};
var _214="@STATIC",_215="p",_216="u",_217="c",_218="t",_219="I",_21a="i";
function _1f2(_21b,_21c,_21d){
var _21e=new _11d(_21c);
if(_21e.magicNumber()!==_214){
throw new Error("Could not read static file: "+_21d);
}
if(_21e.version()!=="1.0"){
throw new Error("Could not read static file: "+_21d);
}
var _21f,_220=_21b.bundleURL(),file=NULL;
while(_21f=_21e.getMarker()){
var text=_21e.getString();
if(_21f===_215){
var _221=new CFURL(text,_220),_222=_1ad.resourceAtURL(new CFURL(".",_221),YES);
file=new _1ad(_221.lastPathComponent(),_222,NO,YES);
}else{
if(_21f===_216){
var URL=new CFURL(text,_220),_223,_224=_21e.getString();
if(_224.indexOf("mhtml:")===0){
_224="mhtml:"+new CFURL(_224.substr("mhtml:".length),_220);
if(_1f7===_1fa){
var _225=URLString.indexOf("!"),_226=URLString.substring(0,_225),_227=URLString.substring(_225);
_224=_226+"?"+_1bd+_227;
}
_223=new CFURL(_224);
}
CFURL.setMappedURLForURL(URL,new CFURL(_224));
var _222=_1ad.resourceAtURL(new CFURL(".",URL),YES);
new _1ad(URL.lastPathComponent(),_222,NO,YES);
}else{
if(_21f===_218){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_228,_229){
this._eventDispatcher.addEventListener(_228,_229);
};
CFBundle.prototype.removeEventListener=function(_22a,_22b){
this._eventDispatcher.removeEventListener(_22a,_22b);
};
CFBundle.prototype.onerror=function(_22c){
throw _22c.error;
};
CFBundle.prototype.path=function(){
return this._bundleURL.absoluteString();
};
CFBundle.prototype.pathForResource=function(_22d){
return this.resourceURL(_22d).absoluteString();
};
var _22e={};
function _1ad(_22f,_230,_231,_232){
this._parent=_230;
this._eventDispatcher=new _94(this);
this._name=_22f;
this._isResolved=!!_232;
this._URL=new CFURL(_22f,_230&&_230.URL().asDirectoryPathURL());
if(_231){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_230){
_22e[_22f]=this;
}
this._isDirectory=!!_231;
this._isNotFound=NO;
if(_230){
_230._children[_22f]=this;
}
if(_231){
this._children={};
}else{
this._contents="";
}
};
_1ad.rootResources=function(){
return _22e;
};
_2.StaticResource=_1ad;
function _1e0(_233){
_233._isResolved=YES;
_233._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_233});
};
_1ad.prototype.resolve=function(){
if(this.isDirectory()){
var _234=new CFBundle(this.URL());
_234.onerror=function(){
};
_234.load(NO);
}else{
var self=this;
function _235(_236){
self._contents=_236.request.responseText();
_1e0(self);
};
function _237(){
self._isNotFound=YES;
_1e0(self);
};
new _cb(this.URL(),_235,_237);
}
};
_1ad.prototype.name=function(){
return this._name;
};
_1ad.prototype.URL=function(){
return this._URL;
};
_1ad.prototype.contents=function(){
return this._contents;
};
_1ad.prototype.children=function(){
return this._children;
};
_1ad.prototype.parent=function(){
return this._parent;
};
_1ad.prototype.isResolved=function(){
return this._isResolved;
};
_1ad.prototype.write=function(_238){
this._contents+=_238;
};
function _239(_23a){
var _23b=_23a.schemeAndAuthority(),_23c=_22e[_23b];
if(!_23c){
_23c=new _1ad(_23b,NULL,YES,YES);
}
return _23c;
};
_1ad.resourceAtURL=function(aURL,_23d){
aURL=_1c0(aURL).absoluteURL();
var _23e=_239(aURL),_23f=aURL.pathComponents(),_b4=0,_240=_23f.length;
for(;_b4<_240;++_b4){
var name=_23f[_b4];
if(_99.call(_23e._children,name)){
_23e=_23e._children[name];
}else{
if(_23d){
_23e=new _1ad(name,_23e,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _23e;
};
_1ad.prototype.resourceAtURL=function(aURL,_241){
return _1ad.resourceAtURL(new CFURL(aURL,this.URL()),_241);
};
_1ad.resolveResourceAtURL=function(aURL,_242,_243){
aURL=_1c0(aURL).absoluteURL();
_244(_239(aURL),_242,aURL.pathComponents(),0,_243);
};
_1ad.prototype.resolveResourceAtURL=function(aURL,_245,_246){
_1ad.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_245,_246);
};
function _244(_247,_248,_249,_24a,_24b){
var _24c=_249.length;
for(;_24a<_24c;++_24a){
var name=_249[_24a],_24d=_99.call(_247._children,name)&&_247._children[name];
if(!_24d){
_24d=new _1ad(name,_247,_24a+1<_24c||_248,NO);
_24d.resolve();
}
if(!_24d.isResolved()){
return _24d.addEventListener("resolve",function(){
_244(_247,_248,_249,_24a,_24b);
});
}
if(_24d.isNotFound()){
return _24b(null,new Error("File not found: "+_249.join("/")));
}
if((_24a+1<_24c)&&_24d.isFile()){
return _24b(null,new Error("File is not a directory: "+_249.join("/")));
}
_247=_24d;
}
_24b(_247);
};
function _24e(aURL,_24f,_250){
var _251=_1ad.includeURLs(),_252=new CFURL(aURL,_251[_24f]).absoluteURL();
_1ad.resolveResourceAtURL(_252,NO,function(_253){
if(!_253){
if(_24f+1<_251.length){
_24e(aURL,_24f+1,_250);
}else{
_250(NULL);
}
return;
}
_250(_253);
});
};
_1ad.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_254){
_24e(aURL,0,_254);
};
_1ad.prototype.addEventListener=function(_255,_256){
this._eventDispatcher.addEventListener(_255,_256);
};
_1ad.prototype.removeEventListener=function(_257,_258){
this._eventDispatcher.removeEventListener(_257,_258);
};
_1ad.prototype.isNotFound=function(){
return this._isNotFound;
};
_1ad.prototype.isFile=function(){
return !this._isDirectory;
};
_1ad.prototype.isDirectory=function(){
return this._isDirectory;
};
_1ad.prototype.toString=function(_259){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _25a=this.name();
if(this.isDirectory()){
var _25b=this._children;
for(var name in _25b){
if(_25b.hasOwnProperty(name)){
var _25c=_25b[name];
if(_259||!_25c.isNotFound()){
_25a+="\n\t"+_25b[name].toString(_259).split("\n").join("\n\t");
}
}
}
}
return _25a;
};
var _25d=NULL;
_1ad.includeURLs=function(){
if(_25e){
return _25e;
}
var _25e=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_25e=["Frameworks","Frameworks/Debug"];
}else{
_25e=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _25f=_25e.length;
while(_25f--){
_25e[_25f]=new CFURL(_25e[_25f]).asDirectoryPathURL();
}
return _25e;
};
var _260="accessors",_261="class",_262="end",_263="function",_264="implementation",_265="import",_266="each",_267="outlet",_268="action",_269="new",_26a="selector",_26b="super",_26c="var",_26d="in",_26e="=",_26f="+",_270="-",_271=":",_272=",",_273=".",_274="*",_275=";",_276="<",_277="{",_278="}",_279=">",_27a="[",_27b="\"",_27c="@",_27d="]",_27e="?",_27f="(",_280=")",_281=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_282=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_283=/^[a-zA-Z_$](\w|$)*$/;
function _284(_285){
this._index=-1;
this._tokens=(_285+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_284.prototype.push=function(){
this._context.push(this._index);
};
_284.prototype.pop=function(){
this._index=this._context.pop();
};
_284.prototype.peak=function(_286){
if(_286){
this.push();
var _287=this.skip_whitespace();
this.pop();
return _287;
}
return this._tokens[this._index+1];
};
_284.prototype.next=function(){
return this._tokens[++this._index];
};
_284.prototype.previous=function(){
return this._tokens[--this._index];
};
_284.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_284.prototype.skip_whitespace=function(_288){
var _289;
if(_288){
while((_289=this.previous())&&_281.test(_289)){
}
}else{
while((_289=this.next())&&_281.test(_289)){
}
}
return _289;
};
_2.Lexer=_284;
function _28a(){
this.atoms=[];
};
_28a.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_28b,aURL,_28c){
return new _28d(_28b,aURL,_28c).executable();
};
_2.eval=function(_28e){
return eval(_2.preprocess(_28e).code());
};
var _28d=function(_28f,aURL,_290){
this._URL=new CFURL(aURL);
_28f=_28f.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _28a();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _284(_28f);
this._flags=_290;
this._classMethod=false;
this._executable=NULL;
this.preprocess(this._tokens,this._buffer);
};
_2.Preprocessor=_28d;
_28d.Flags={};
_28d.Flags.IncludeDebugSymbols=1<<0;
_28d.Flags.IncludeTypeSignatures=1<<1;
_28d.prototype.executable=function(){
if(!this._executable){
this._executable=new _291(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_28d.prototype.accessors=function(_292){
var _293=_292.skip_whitespace(),_294={};
if(_293!=_27f){
_292.previous();
return _294;
}
while((_293=_292.skip_whitespace())!=_280){
var name=_293,_295=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_293=_292.skip_whitespace())==_26e){
_295=_292.skip_whitespace();
if(!/^\w+$/.test(_295)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_293=_292.next())!=_271){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_295+=":";
}
_293=_292.skip_whitespace();
}
_294[name]=_295;
if(_293==_280){
break;
}
if(_293!=_272){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _294;
};
_28d.prototype.brackets=function(_296,_297){
var _298=[];
while(this.preprocess(_296,NULL,NULL,NULL,_298[_298.length]=[])){
}
if(_298[0].length===1){
_297.atoms[_297.atoms.length]="[";
_297.atoms[_297.atoms.length]=_298[0][0];
_297.atoms[_297.atoms.length]="]";
}else{
var _299=new _28a();
if(_298[0][0].atoms[0]==_26b){
_297.atoms[_297.atoms.length]="objj_msgSendSuper(";
_297.atoms[_297.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_297.atoms[_297.atoms.length]="objj_msgSend(";
_297.atoms[_297.atoms.length]=_298[0][0];
}
_299.atoms[_299.atoms.length]=_298[0][1];
var _29a=1,_29b=_298.length,_29c=new _28a();
for(;_29a<_29b;++_29a){
var pair=_298[_29a];
_299.atoms[_299.atoms.length]=pair[1];
_29c.atoms[_29c.atoms.length]=", "+pair[0];
}
_297.atoms[_297.atoms.length]=", \"";
_297.atoms[_297.atoms.length]=_299;
_297.atoms[_297.atoms.length]="\"";
_297.atoms[_297.atoms.length]=_29c;
_297.atoms[_297.atoms.length]=")";
}
};
_28d.prototype.directive=function(_29d,_29e,_29f){
var _2a0=_29e?_29e:new _28a(),_2a1=_29d.next();
if(_2a1.charAt(0)==_27b){
_2a0.atoms[_2a0.atoms.length]=_2a1;
}else{
if(_2a1===_261){
_29d.skip_whitespace();
return;
}else{
if(_2a1===_264){
this.implementation(_29d,_2a0);
}else{
if(_2a1===_265){
this._import(_29d);
}else{
if(_2a1===_26a){
this.selector(_29d,_2a0);
}
}
}
}
}
if(!_29e){
return _2a0;
}
};
_28d.prototype.implementation=function(_2a2,_2a3){
var _2a4=_2a3,_2a5="",_2a6=NO,_2a7=_2a2.skip_whitespace(),_2a8="Nil",_2a9=new _28a(),_2aa=new _28a();
if(!(/^\w/).test(_2a7)){
throw new Error(this.error_message("*** Expected class name, found \""+_2a7+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_2a7+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_2a7+"\").super_class";
this._currentClass=_2a7;
this._currentSelector="";
if((_2a5=_2a2.skip_whitespace())==_27f){
_2a5=_2a2.skip_whitespace();
if(_2a5==_280){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_2a7+"\"."));
}
if(_2a2.skip_whitespace()!=_280){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_2a7+"\"."));
}
_2a4.atoms[_2a4.atoms.length]="{\nvar the_class = objj_getClass(\""+_2a7+"\")\n";
_2a4.atoms[_2a4.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_2a7+"\\\"\");\n";
_2a4.atoms[_2a4.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_2a5==_271){
_2a5=_2a2.skip_whitespace();
if(!_283.test(_2a5)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_2a5+"\"."));
}
_2a8=_2a5;
_2a5=_2a2.skip_whitespace();
}
_2a4.atoms[_2a4.atoms.length]="{var the_class = objj_allocateClassPair("+_2a8+", \""+_2a7+"\"),\nmeta_class = the_class.isa;";
if(_2a5==_277){
var _2ab=0,_2ac=[],_2ad,_2ae={};
while((_2a5=_2a2.skip_whitespace())&&_2a5!=_278){
if(_2a5===_27c){
_2a5=_2a2.next();
if(_2a5===_260){
_2ad=this.accessors(_2a2);
}else{
if(_2a5!==_267){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_2a5+"')."));
}
}
}else{
if(_2a5==_275){
if(_2ab++==0){
_2a4.atoms[_2a4.atoms.length]="class_addIvars(the_class, [";
}else{
_2a4.atoms[_2a4.atoms.length]=", ";
}
var name=_2ac[_2ac.length-1];
_2a4.atoms[_2a4.atoms.length]="new objj_ivar(\""+name+"\")";
_2ac=[];
if(_2ad){
_2ae[name]=_2ad;
_2ad=NULL;
}
}else{
_2ac.push(_2a5);
}
}
}
if(_2ac.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_2ab){
_2a4.atoms[_2a4.atoms.length]="]);\n";
}
if(!_2a5){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
for(ivar_name in _2ae){
var _2af=_2ae[ivar_name],_2b0=_2af["property"]||ivar_name;
var _2b1=_2af["getter"]||_2b0,_2b2="(id)"+_2b1+"\n{\nreturn "+ivar_name+";\n}";
if(_2a9.atoms.length!==0){
_2a9.atoms[_2a9.atoms.length]=",\n";
}
_2a9.atoms[_2a9.atoms.length]=this.method(new _284(_2b2));
if(_2af["readonly"]){
continue;
}
var _2b3=_2af["setter"];
if(!_2b3){
var _2b4=_2b0.charAt(0)=="_"?1:0;
_2b3=(_2b4?"_":"")+"set"+_2b0.substr(_2b4,1).toUpperCase()+_2b0.substring(_2b4+1)+":";
}
var _2b5="(void)"+_2b3+"(id)newValue\n{\n";
if(_2af["copy"]){
_2b5+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_2b5+=ivar_name+" = newValue;\n}";
}
if(_2a9.atoms.length!==0){
_2a9.atoms[_2a9.atoms.length]=",\n";
}
_2a9.atoms[_2a9.atoms.length]=this.method(new _284(_2b5));
}
}else{
_2a2.previous();
}
_2a4.atoms[_2a4.atoms.length]="objj_registerClassPair(the_class);\n";
}
while((_2a5=_2a2.skip_whitespace())){
if(_2a5==_26f){
this._classMethod=true;
if(_2aa.atoms.length!==0){
_2aa.atoms[_2aa.atoms.length]=", ";
}
_2aa.atoms[_2aa.atoms.length]=this.method(_2a2);
}else{
if(_2a5==_270){
this._classMethod=false;
if(_2a9.atoms.length!==0){
_2a9.atoms[_2a9.atoms.length]=", ";
}
_2a9.atoms[_2a9.atoms.length]=this.method(_2a2);
}else{
if(_2a5==_27c){
if((_2a5=_2a2.next())==_262){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_2a5+"\"."));
}
}
}
}
}
if(_2a9.atoms.length!==0){
_2a4.atoms[_2a4.atoms.length]="class_addMethods(the_class, [";
_2a4.atoms[_2a4.atoms.length]=_2a9;
_2a4.atoms[_2a4.atoms.length]="]);\n";
}
if(_2aa.atoms.length!==0){
_2a4.atoms[_2a4.atoms.length]="class_addMethods(meta_class, [";
_2a4.atoms[_2a4.atoms.length]=_2aa;
_2a4.atoms[_2a4.atoms.length]="]);\n";
}
_2a4.atoms[_2a4.atoms.length]="}";
this._currentClass="";
};
_28d.prototype._import=function(_2b6){
var _2b7="",_2b8=_2b6.skip_whitespace(),_2b9=(_2b8!==_276);
if(_2b8===_276){
while((_2b8=_2b6.next())&&_2b8!==_279){
_2b7+=_2b8;
}
if(!_2b8){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_2b8.charAt(0)===_27b){
_2b7=_2b8.substr(1,_2b8.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_2b8+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_2b7;
this._buffer.atoms[this._buffer.atoms.length]=_2b9?"\", YES);":"\", NO);";
this._dependencies.push(new _2ba(new CFURL(_2b7),_2b9));
};
_28d.prototype.method=function(_2bb){
var _2bc=new _28a(),_2bd,_2be="",_2bf=[],_2c0=[null];
while((_2bd=_2bb.skip_whitespace())&&_2bd!=_277){
if(_2bd==_271){
var type="";
_2be+=_2bd;
_2bd=_2bb.skip_whitespace();
if(_2bd==_27f){
while((_2bd=_2bb.skip_whitespace())&&_2bd!=_280){
type+=_2bd;
}
_2bd=_2bb.skip_whitespace();
}
_2c0[_2bf.length+1]=type||null;
_2bf[_2bf.length]=_2bd;
}else{
if(_2bd==_27f){
var type="";
while((_2bd=_2bb.skip_whitespace())&&_2bd!=_280){
type+=_2bd;
}
_2c0[0]=type||null;
}else{
if(_2bd==_272){
if((_2bd=_2bb.skip_whitespace())!=_273||_2bb.next()!=_273||_2bb.next()!=_273){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_2be+=_2bd;
}
}
}
}
var _2c1=0,_2c2=_2bf.length;
_2bc.atoms[_2bc.atoms.length]="new objj_method(sel_getUid(\"";
_2bc.atoms[_2bc.atoms.length]=_2be;
_2bc.atoms[_2bc.atoms.length]="\"), function";
this._currentSelector=_2be;
if(this._flags&_28d.Flags.IncludeDebugSymbols){
_2bc.atoms[_2bc.atoms.length]=" $"+this._currentClass+"__"+_2be.replace(/:/g,"_");
}
_2bc.atoms[_2bc.atoms.length]="(self, _cmd";
for(;_2c1<_2c2;++_2c1){
_2bc.atoms[_2bc.atoms.length]=", ";
_2bc.atoms[_2bc.atoms.length]=_2bf[_2c1];
}
_2bc.atoms[_2bc.atoms.length]=")\n{ with(self)\n{";
_2bc.atoms[_2bc.atoms.length]=this.preprocess(_2bb,NULL,_278,_277);
_2bc.atoms[_2bc.atoms.length]="}\n}";
if(this._flags&_28d.Flags.IncludeDebugSymbols){
_2bc.atoms[_2bc.atoms.length]=","+JSON.stringify(_2c0);
}
_2bc.atoms[_2bc.atoms.length]=")";
this._currentSelector="";
return _2bc;
};
_28d.prototype.preprocess=function(_2c3,_2c4,_2c5,_2c6,_2c7){
var _2c8=_2c4?_2c4:new _28a(),_2c9=0,_2ca="";
if(_2c7){
_2c7[0]=_2c8;
var _2cb=false,_2cc=[0,0,0];
}
while((_2ca=_2c3.next())&&((_2ca!==_2c5)||_2c9)){
if(_2c7){
if(_2ca===_27e){
++_2cc[2];
}else{
if(_2ca===_277){
++_2cc[0];
}else{
if(_2ca===_278){
--_2cc[0];
}else{
if(_2ca===_27f){
++_2cc[1];
}else{
if(_2ca===_280){
--_2cc[1];
}else{
if((_2ca===_271&&_2cc[2]--===0||(_2cb=(_2ca===_27d)))&&_2cc[0]===0&&_2cc[1]===0){
_2c3.push();
var _2cd=_2cb?_2c3.skip_whitespace(true):_2c3.previous(),_2ce=_281.test(_2cd);
if(_2ce||_283.test(_2cd)&&_281.test(_2c3.previous())){
_2c3.push();
var last=_2c3.skip_whitespace(true),_2cf=true,_2d0=false;
if(last==="+"||last==="-"){
if(_2c3.previous()!==last){
_2cf=false;
}else{
last=_2c3.skip_whitespace(true);
_2d0=true;
}
}
_2c3.pop();
_2c3.pop();
if(_2cf&&((!_2d0&&(last===_278))||last===_280||last===_27d||last===_273||_282.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_283.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2ce){
_2c7[1]=":";
}else{
_2c7[1]=_2cd;
if(!_2cb){
_2c7[1]+=":";
}
var _2c9=_2c8.atoms.length;
while(_2c8.atoms[_2c9--]!==_2cd){
}
_2c8.atoms.length=_2c9;
}
return !_2cb;
}
if(_2cb){
return NO;
}
}
_2c3.pop();
if(_2cb){
return NO;
}
}
}
}
}
}
}
_2cc[2]=MAX(_2cc[2],0);
}
if(_2c6){
if(_2ca===_2c6){
++_2c9;
}else{
if(_2ca===_2c5){
--_2c9;
}
}
}
if(_2ca===_263){
var _2d1="";
while((_2ca=_2c3.next())&&_2ca!==_27f&&!(/^\w/).test(_2ca)){
_2d1+=_2ca;
}
if(_2ca===_27f){
if(_2c6===_27f){
++_2c9;
}
_2c8.atoms[_2c8.atoms.length]="function"+_2d1+"(";
if(_2c7){
++_2cc[1];
}
}else{
_2c8.atoms[_2c8.atoms.length]=_2ca+"= function";
}
}else{
if(_2ca==_27c){
this.directive(_2c3,_2c8);
}else{
if(_2ca==_27a){
this.brackets(_2c3,_2c8);
}else{
_2c8.atoms[_2c8.atoms.length]=_2ca;
}
}
}
}
if(_2c7){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2c4){
return _2c8;
}
};
_28d.prototype.selector=function(_2d2,_2d3){
var _2d4=_2d3?_2d3:new _28a();
_2d4.atoms[_2d4.atoms.length]="sel_getUid(\"";
if(_2d2.skip_whitespace()!=_27f){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2d5=_2d2.skip_whitespace();
if(_2d5==_280){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2d3.atoms[_2d3.atoms.length]=_2d5;
var _2d6,_2d7=true;
while((_2d6=_2d2.next())&&_2d6!=_280){
if(_2d7&&/^\d+$/.test(_2d6)||!(/^(\w|$|\:)/.test(_2d6))){
if(!(/\S/).test(_2d6)){
if(_2d2.skip_whitespace()==_280){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2d6+"' in @selector()."));
}
}
_2d4.atoms[_2d4.atoms.length]=_2d6;
_2d7=(_2d6==_271);
}
_2d4.atoms[_2d4.atoms.length]="\")";
if(!_2d3){
return _2d4;
}
};
_28d.prototype.error_message=function(_2d8){
return _2d8+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _2ba(aURL,_2d9){
this._URL=aURL;
this._isLocal=_2d9;
};
_2.FileDependency=_2ba;
_2ba.prototype.URL=function(){
return this._URL;
};
_2ba.prototype.isLocal=function(){
return this._isLocal;
};
_2ba.prototype.toMarkedString=function(){
var _2da=this.URL().absoluteString();
return (this.isLocal()?_21a:_219)+";"+_2da.length+";"+_2da;
};
_2ba.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2db=0,_2dc=1,_2dd=2,_2de=0;
function _291(_2df,_2e0,aURL,_2e1){
if(arguments.length===0){
return this;
}
this._code=_2df;
this._function=_2e1||NULL;
this._URL=_1c0(aURL||new CFURL("(Anonymous"+(_2de++)+")"));
this._fileDependencies=_2e0;
this._fileDependencyLoadStatus=_2db;
this._eventDispatcher=new _94(this);
if(this._function){
return;
}
this.setCode(_2df);
};
_2.Executable=_291;
_291.prototype.path=function(){
return this.URL().path();
};
_291.prototype.URL=function(){
return this._URL;
};
_291.prototype.functionParameters=function(){
var _2e2=["global","objj_executeFile","objj_importFile"];
return _2e2;
};
_291.prototype.functionArguments=function(){
var _2e3=[_1,this.fileExecuter(),this.fileImporter()];
return _2e3;
};
_291.prototype.execute=function(){
var _2e4=_2e5;
_2e5=CFBundle.bundleContainingURL(this.URL());
var _2e6=this._function.apply(_1,this.functionArguments());
_2e5=_2e4;
return _2e6;
};
_291.prototype.code=function(){
return this._code;
};
_291.prototype.setCode=function(code){
this._code=code;
var _2e7=this.functionParameters().join(",");
this._function=new Function(_2e7,code);
};
_291.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_291.prototype.scope=function(){
return this._scope;
};
_291.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyLoadStatus===_2dd;
};
var _2e8=0;
_291.prototype.loadFileDependencies=function(){
if(this._fileDependencyLoadStatus!==_2db){
return;
}
this._fileDependencyLoadStatus=_2dc;
var _2e9=[{},{}],_2ea=new CFMutableDictionary(),_2eb=new CFMutableDictionary(),_2ec={};
function _2ed(_2ee){
var _2ef=[_2ee],_2f0=0,_2f1=_2ef.length;
for(;_2f0<_2f1;++_2f0){
var _2f2=_2ef[_2f0];
if(_2f2.hasLoadedFileDependencies()){
continue;
}
var _2f3=_2f2.URL().absoluteString();
_2ec[_2f3]=_2f2;
var _2f4=new CFURL(".",_2f2.URL()),_2f5=_2f2.fileDependencies(),_2f6=0,_2f7=_2f5.length;
for(;_2f6<_2f7;++_2f6){
var _2f8=_2f5[_2f6],_2f9=_2f8.isLocal(),URL=_2f8.URL();
if(_2f9){
URL=new CFURL(URL,_2f4);
}
var _2fa=URL.absoluteString();
if(_2e9[_2f9?1:0][_2fa]){
continue;
}
_2e9[_2f9?1:0][_2fa]=YES;
var _2fb=new _30a(URL,_2f9),_2fc=_2fb.UID();
if(_2ea.containsKey(_2fc)){
continue;
}
_2ea.setValueForKey(_2fc,_2fb);
if(_2fb.isComplete()){
_2ef.push(_2fb.result());
++_2f1;
}else{
_2eb.setValueForKey(_2fc,_2fb);
_2fb.addEventListener("complete",function(_2fd){
var _2fe=_2fd.fileExecutableSearch;
_2eb.removeValueForKey(_2fe.UID());
_2ed(_2fe.result());
});
}
}
}
if(_2eb.count()>0){
return;
}
for(var _2fa in _2ec){
if(_99.call(_2ec,_2fa)){
_2ec[_2fa]._fileDependencyLoadStatus=_2dd;
}
}
for(var _2fa in _2ec){
if(_99.call(_2ec,_2fa)){
var _2f2=_2ec[_2fa];
_2f2._eventDispatcher.dispatchEvent({type:"dependenciesload",executable:_2f2});
}
}
};
_2ed(this);
};
_291.prototype.addEventListener=function(_2ff,_300){
this._eventDispatcher.addEventListener(_2ff,_300);
};
_291.prototype.removeEventListener=function(_301,_302){
this._eventDispatcher.removeEventListener(_301,_302);
};
_291.prototype.fileImporter=function(){
return _291.fileImporterForURL(new CFURL(".",this.URL()));
};
_291.prototype.fileExecuter=function(){
return _291.fileExecuterForURL(new CFURL(".",this.URL()));
};
var _303={};
_291.fileExecuterForURL=function(aURL){
var _304=_1c0(aURL),_305=_304.absoluteString(),_306=_303[_305];
if(!_306){
_306=function(aURL,_307,_308){
aURL=new CFURL(aURL,_307?_304:NULL);
var _309=new _30a(aURL,_307),_30b=_309.result();
if(!_30b.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_30b.execute(_308);
};
_303[_305]=_306;
}
return _306;
};
var _30c={};
_291.fileImporterForURL=function(aURL){
var _30d=_1c0(aURL),_30e=_30d.absoluteString(),_30f=_30c[_30e];
if(!_30f){
_30f=function(aURL,_310,_311){
_165();
aURL=new CFURL(aURL,_310?_30d:NULL);
var _312=new _30a(aURL,_310);
function _313(_314){
var _315=_314.result(),_316=function(){
_315.execute();
_166();
if(_311){
_311();
}
};
if(!_315.hasLoadedFileDependencies()){
_315.addEventListener("dependenciesload",_316);
_315.loadFileDependencies();
}else{
_316();
}
};
if(_312.isComplete()){
_313(_312);
}else{
_312.addEventListener("complete",function(_317){
_313(_317.fileExecutableSearch);
});
}
};
_30c[_30e]=_30f;
}
return _30f;
};
var _318={};
function _319(aURL,_31a){
aURL=_1c0(aURL);
var _31b=aURL.absoluteString(),_31c=_318[_31b];
if(_31c){
return _31c;
}
_318[_31b]=this;
var _31d=_1ad.resourceAtURL(aURL).contents(),_31e=NULL,_31f=aURL.pathExtension();
if(_31a){
_31e=_31a;
}else{
if(_31d.match(/^@STATIC;/)){
_31e=_320(_31d,aURL);
}else{
if(_31f==="j"||!_31f){
_31e=_2.preprocess(_31d,aURL,_28d.Flags.IncludeDebugSymbols);
}else{
_31e=new _291(_31d,[],aURL);
}
}
}
_291.apply(this,[_31e.code(),_31e.fileDependencies(),aURL,_31e._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_319;
_319.prototype=new _291();
_319.prototype.execute=function(_321){
if(this._hasExecuted&&!_321){
return;
}
this._hasExecuted=YES;
_291.prototype.execute.call(this);
};
_319.prototype.URL=function(){
return this._URL;
};
_319.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _320(_322,aURL){
var _323=new _11d(_322);
var _324=NULL,code="",_325=[];
while(_324=_323.getMarker()){
var text=_323.getString();
if(_324===_218){
code+=text;
}else{
if(_324===_219){
_325.push(new _2ba(new CFURL(text),NO));
}else{
if(_324===_21a){
_325.push(new _2ba(new CFURL(text),YES));
}
}
}
}
return new _291(code,_325,aURL);
};
var _326=[{},{}];
function _30a(aURL,_327){
var _328=aURL.absoluteString(),_329=_326[_327?1:0][_328];
if(_329){
return _329;
}
_326[_327?1:0][_328]=this;
this._UID=objj_generateObjectUID();
this._URL=aURL;
this._isComplete=NO;
this._eventDispatcher=new _94(this);
this._result=NULL;
var self=this;
function _32a(_32b){
if(!_32b){
throw new Error("Could not load file at "+aURL);
}
self._result=new _319(_32b.URL());
self._isComplete=YES;
self._eventDispatcher.dispatchEvent({type:"complete",fileExecutableSearch:self});
};
if(_327){
_1ad.resolveResourceAtURL(aURL,NO,_32a);
}else{
_1ad.resolveResourceAtURLSearchingIncludeURLs(aURL,_32a);
}
};
_2.FileExecutableSearch=_30a;
_30a.prototype.URL=function(){
return this._URL;
};
_30a.prototype.result=function(){
return this._result;
};
_30a.prototype.UID=function(){
return this._UID;
};
_30a.prototype.isComplete=function(){
return this._isComplete;
};
_30a.prototype.result=function(){
return this._result;
};
_30a.prototype.addEventListener=function(_32c,_32d){
this._eventDispatcher.addEventListener(_32c,_32d);
};
_30a.prototype.removeEventListener=function(_32e,_32f){
this._eventDispatcher.removeEventListener(_32e,_32f);
};
var _330=1,_331=2,_332=4,_333=8;
objj_ivar=function(_334,_335){
this.name=_334;
this.type=_335;
};
objj_method=function(_336,_337,_338){
this.name=_336;
this.method_imp=_337;
this.types=_338;
};
objj_class=function(){
this.isa=NULL;
this.super_class=NULL;
this.sub_classes=[];
this.name=NULL;
this.info=0;
this.ivars=[];
this.method_list=[];
this.method_hash={};
this.method_store=function(){
};
this.method_dtable=this.method_store.prototype;
this.allocator=function(){
};
this._UID=-1;
};
objj_object=function(){
this.isa=NULL;
this._UID=-1;
};
class_getName=function(_339){
if(_339==Nil){
return "";
}
return _339.name;
};
class_isMetaClass=function(_33a){
if(!_33a){
return NO;
}
return ((_33a.info&(_331)));
};
class_getSuperclass=function(_33b){
if(_33b==Nil){
return Nil;
}
return _33b.super_class;
};
class_setSuperclass=function(_33c,_33d){
_33c.super_class=_33d;
_33c.isa.super_class=_33d.isa;
};
class_addIvar=function(_33e,_33f,_340){
var _341=_33e.allocator.prototype;
if(typeof _341[_33f]!="undefined"){
return NO;
}
_33e.ivars.push(new objj_ivar(_33f,_340));
_341[_33f]=NULL;
return YES;
};
class_addIvars=function(_342,_343){
var _344=0,_345=_343.length,_346=_342.allocator.prototype;
for(;_344<_345;++_344){
var ivar=_343[_344],name=ivar.name;
if(typeof _346[name]==="undefined"){
_342.ivars.push(ivar);
_346[name]=NULL;
}
}
};
class_copyIvarList=function(_347){
return _347.ivars.slice(0);
};
class_addMethod=function(_348,_349,_34a,_34b){
if(_348.method_hash[_349]){
return NO;
}
var _34c=new objj_method(_349,_34a,_34b);
_348.method_list.push(_34c);
_348.method_dtable[_349]=_34c;
_34c.method_imp.displayName=(((_348.info&(_331)))?"+":"-")+" ["+class_getName(_348)+" "+method_getName(_34c)+"]";
if(!((_348.info&(_331)))&&(((_348.info&(_331)))?_348:_348.isa).isa===(((_348.info&(_331)))?_348:_348.isa)){
class_addMethod((((_348.info&(_331)))?_348:_348.isa),_349,_34a,_34b);
}
return YES;
};
class_addMethods=function(_34d,_34e){
var _34f=0,_350=_34e.length,_351=_34d.method_list,_352=_34d.method_dtable;
for(;_34f<_350;++_34f){
var _353=_34e[_34f];
if(_34d.method_hash[_353.name]){
continue;
}
_351.push(_353);
_352[_353.name]=_353;
_353.method_imp.displayName=(((_34d.info&(_331)))?"+":"-")+" ["+class_getName(_34d)+" "+method_getName(_353)+"]";
}
if(!((_34d.info&(_331)))&&(((_34d.info&(_331)))?_34d:_34d.isa).isa===(((_34d.info&(_331)))?_34d:_34d.isa)){
class_addMethods((((_34d.info&(_331)))?_34d:_34d.isa),_34e);
}
};
class_getInstanceMethod=function(_354,_355){
if(!_354||!_355){
return NULL;
}
var _356=_354.method_dtable[_355];
return _356?_356:NULL;
};
class_getClassMethod=function(_357,_358){
if(!_357||!_358){
return NULL;
}
var _359=(((_357.info&(_331)))?_357:_357.isa).method_dtable[_358];
return _359?_359:NULL;
};
class_copyMethodList=function(_35a){
return _35a.method_list.slice(0);
};
class_replaceMethod=function(_35b,_35c,_35d){
if(!_35b||!_35c){
return NULL;
}
var _35e=_35b.method_dtable[_35c],_35f=NULL;
if(_35e){
_35f=_35e.method_imp;
}
_35e.method_imp=_35d;
return _35f;
};
var _360=function(_361){
var meta=(((_361.info&(_331)))?_361:_361.isa);
if((_361.info&(_331))){
_361=objj_getClass(_361.name);
}
if(_361.super_class&&!((((_361.super_class.info&(_331)))?_361.super_class:_361.super_class.isa).info&(_332))){
_360(_361.super_class);
}
if(!(meta.info&(_332))&&!(meta.info&(_333))){
meta.info=(meta.info|(_333))&~(0);
objj_msgSend(_361,"initialize");
meta.info=(meta.info|(_332))&~(_333);
}
};
var _362=new objj_method("forward",function(self,_363){
return objj_msgSend(self,"forward::",_363,arguments);
});
class_getMethodImplementation=function(_364,_365){
if(!((((_364.info&(_331)))?_364:_364.isa).info&(_332))){
_360(_364);
}
var _366=_364.method_dtable[_365];
if(!_366){
_366=_362;
}
var _367=_366.method_imp;
return _367;
};
var _368={};
objj_allocateClassPair=function(_369,_36a){
var _36b=new objj_class(),_36c=new objj_class(),_36d=_36b;
if(_369){
_36d=_369;
while(_36d.superclass){
_36d=_36d.superclass;
}
_36b.allocator.prototype=new _369.allocator;
_36b.method_store.prototype=new _369.method_store;
_36b.method_dtable=_36b.method_store.prototype;
_36c.method_store.prototype=new _369.isa.method_store;
_36c.method_dtable=_36c.method_store.prototype;
_36b.super_class=_369;
_36c.super_class=_369.isa;
}else{
_36b.allocator.prototype=new objj_object();
}
_36b.isa=_36c;
_36b.name=_36a;
_36b.info=_330;
_36b._UID=objj_generateObjectUID();
_36c.isa=_36d.isa;
_36c.name=_36a;
_36c.info=_331;
_36c._UID=objj_generateObjectUID();
return _36b;
};
var _2e5=nil;
objj_registerClassPair=function(_36e){
_1[_36e.name]=_36e;
_368[_36e.name]=_36e;
_1c5(_36e,_2e5);
};
class_createInstance=function(_36f){
if(!_36f){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _370=new _36f.allocator();
_370.isa=_36f;
_370._UID=objj_generateObjectUID();
return _370;
};
var _371=function(){
};
_371.prototype.member=false;
with(new _371()){
member=true;
}
if(new _371().member){
var _372=class_createInstance;
class_createInstance=function(_373){
var _374=_372(_373);
if(_374){
var _375=_374.isa,_376=_375;
while(_375){
var _377=_375.ivars;
count=_377.length;
while(count--){
_374[_377[count].name]=NULL;
}
_375=_375.super_class;
}
_374.isa=_376;
}
return _374;
};
}
object_getClassName=function(_378){
if(!_378){
return "";
}
var _379=_378.isa;
return _379?class_getName(_379):"";
};
objj_lookUpClass=function(_37a){
var _37b=_368[_37a];
return _37b?_37b:Nil;
};
objj_getClass=function(_37c){
var _37d=_368[_37c];
if(!_37d){
}
return _37d?_37d:Nil;
};
objj_getMetaClass=function(_37e){
var _37f=objj_getClass(_37e);
return (((_37f.info&(_331)))?_37f:_37f.isa);
};
ivar_getName=function(_380){
return _380.name;
};
ivar_getTypeEncoding=function(_381){
return _381.type;
};
objj_msgSend=function(_382,_383){
if(_382==nil){
return nil;
}
if(!((((_382.isa.info&(_331)))?_382.isa:_382.isa.isa).info&(_332))){
_360(_382.isa);
}
var _384=_382.isa.method_dtable[_383];
if(!_384){
_384=_362;
}
var _385=_384.method_imp;
switch(arguments.length){
case 2:
return _385(_382,_383);
case 3:
return _385(_382,_383,arguments[2]);
case 4:
return _385(_382,_383,arguments[2],arguments[3]);
}
return _385.apply(_382,arguments);
};
objj_msgSendSuper=function(_386,_387){
var _388=_386.super_class;
arguments[0]=_386.receiver;
if(!((((_388.info&(_331)))?_388:_388.isa).info&(_332))){
_360(_388);
}
var _389=_388.method_dtable[_387];
if(!_389){
_389=_362;
}
var _38a=_389.method_imp;
return _38a.apply(_386.receiver,arguments);
};
method_getName=function(_38b){
return _38b.name;
};
method_getImplementation=function(_38c){
return _38c.method_imp;
};
method_setImplementation=function(_38d,_38e){
var _38f=_38d.method_imp;
_38d.method_imp=_38e;
return _38f;
};
method_exchangeImplementations=function(lhs,rhs){
var _390=method_getImplementation(lhs),_391=method_getImplementation(rhs);
method_setImplementation(lhs,_391);
method_setImplementation(rhs,_390);
};
sel_getName=function(_392){
return _392?_392:"<null selector>";
};
sel_getUid=function(_393){
return _393;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_394){
return _394;
};
_165();
var _395=new CFURL(window.location.href),_396=document.getElementsByTagName("base"),_397=_396.length;
if(_397>0){
var _398=_396[_397-1],_399=_398&&_398.getAttribute("href");
if(_399){
_395=new CFURL(_399,_395);
}
}
var _39a=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1c4=new CFURL(".",new CFURL(_39a,_395)).absoluteURL(),_39b=new CFURL("..",_1c4).absoluteURL();
if(_1c4===_39b){
_39b=new CFURL(_39b.schemeAndAuthority());
}
_1ad.resourceAtURL(_39b,YES);
_2.bootstrap=function(){
_39c();
};
function _39c(){
_1ad.resolveResourceAtURL(_1c4,YES,function(_39d){
var _39e=_1ad.includeURLs(),_b4=0,_39f=_39e.length;
for(;_b4<_39f;++_b4){
_39d.resourceAtURL(_39e[_b4],YES);
}
_291.fileImporterForURL(_1c4)(_39a.lastPathComponent(),YES,function(){
_166();
_3a0(main);
});
});
};
var _3a1=NO;
function _3a0(_3a2){
if(_3a1){
return _3a2();
}
if(window.addEventListener){
window.addEventListener("load",_3a2,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_3a2);
}
}
};
_3a0(function(){
_3a1=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1c0(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1c4);
};
objj_importFile=_291.fileImporterForURL(_1c4);
objj_executeFile=_291.fileExecuterForURL(_1c4);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
