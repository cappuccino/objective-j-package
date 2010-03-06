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
return new CFURL(aURL.string(),_171);
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
var _17d=_169(aURL),_17e,_17f=_169(_17c.absoluteURL());
if(_17d.scheme||_17d.authority){
_17e=_17d;
}else{
_17e={};
_17e.scheme=_17f.scheme;
_17e.authority=_17f.authority;
_17e.userInfo=_17f.userInfo;
_17e.user=_17f.user;
_17e.password=_17f.password;
_17e.domain=_17f.domain;
_17e.portNumber=_17f.portNumber;
_17e.queryString=_17d.queryString;
_17e.fragment=_17d.fragment;
var _180=_17d.pathComponents;
if(_180.length&&_180[0]==="/"){
_17e.path=_17d.path;
_17e.pathComponents=_180;
}else{
var _181=_17f.pathComponents,_182=_181.concat(_180);
if(!_17c.hasDirectoryPath()&&_181.length){
_182.splice(_181.length-1,1);
}
if(_180.length&&_180[0]===".."){
_183(_182);
}
_17e.pathComponents=_182;
_17e.path=_184(_182,_180.length<=0||aURL.hasDirectoryPath());
}
}
var _185=_186(_17e),_187=new CFURL(_185);
_187._parts=_17e;
_187._standardizedURL=_187;
_187._absoluteURL=_187;
return _187;
};
function _184(_188,_189){
var path=_188.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_189){
path+="/";
}
return path;
};
function _183(_18a){
var _18b=0,_18c=0,_18d=_18a.length;
for(;_18b<_18d;++_18b){
var _18e=_18a[_18b];
if(_18e===""||_18e==="."){
continue;
}
if(_18e!==".."||_18c===0||_18a[_18c-1]===".."){
_18a[_18c]=_18e;
_18c++;
continue;
}
if(_18c>0&&_18a[_18c-1]!=="/"){
--_18c;
}
}
_18a.length=_18c;
};
function _186(_18f){
var _190="",_191=_18f.scheme;
if(_191){
_190+=_191+":";
}
var _192=_18f.authority;
if(_192){
_190+="//"+_192;
}
_190+=_18f.path;
var _193=_18f.queryString;
if(_193){
_190+="?"+_193;
}
var _194=_18f.fragment;
if(_194){
_190+="#"+_194;
}
return _190;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_17b(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _195=_169(this),_196=_195.pathComponents,_197=_196.slice();
_183(_197);
var _198=_184(_197,this.hasDirectoryPath());
if(_195.path===_198){
this._standardizedURL=this;
}else{
var _199=_19a(_195);
_199.pathComponents=_197;
_199.path=_198;
var _19b=new CFURL(_186(_199),this.baseURL());
_19b._parts=_199;
_19b._standardizedParts=_19b;
this._standardizedURL=_19b;
}
}
return this._standardizedURL;
};
function _19a(_19c){
var _19d={},_19e=_168.length;
while(_19e--){
var _19f=_168[_19e];
_19d[_19f]=_19c[_19f];
}
return _19d;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _1a0=_169(this).authority;
if(_1a0){
return _1a0;
}
var _1a1=this.baseURL();
return _1a1&&_1a1.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _1a2=this.lastPathComponent();
return _1a2==="."||_1a2==="..";
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return _169(this).fragment;
};
CFURL.prototype.lastPathComponent=function(){
var _1a3=this.pathComponents(),_1a4=_1a3.length;
if(!_1a4){
return "";
}
return _1a3[_1a4-1];
};
CFURL.prototype.path=function(){
return _169(this).path;
};
CFURL.prototype.pathComponents=function(){
return _169(this).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _1a5=this.lastPathComponent();
if(!_1a5){
return NULL;
}
_1a5=_1a5.replace(/^\.*/,"");
var _1a6=_1a5.lastIndexOf(".");
return _1a6<=0?"":_1a5.substring(_1a6+1);
};
CFURL.prototype.queryString=function(){
return _169(this).queryString;
};
CFURL.prototype.scheme=function(){
var _1a7=_169(this).scheme;
if(_1a7){
return _1a7;
}
var _1a8=this.baseURL();
return _1a8&&_1a8.scheme();
};
CFURL.prototype.user=function(){
return _169(this).user;
};
CFURL.prototype.password=function(){
return _169(this).password;
};
CFURL.prototype.portNumber=function(){
return _169(this).portNumber;
};
CFURL.prototype.domain=function(){
return _169(this).domain;
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
function _1a9(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _1a9(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_1aa){
_1a9(this).setValueForKey(aKey,_1aa);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_1ab.resourceAtURL(this).contents());
return data;
};
function _11d(_1ac){
this._string=_1ac;
var _1ad=_1ac.indexOf(";");
this._magicNumber=_1ac.substr(0,_1ad);
this._location=_1ac.indexOf(";",++_1ad);
this._version=_1ac.substring(_1ad,this._location++);
};
_11d.prototype.magicNumber=function(){
return this._magicNumber;
};
_11d.prototype.version=function(){
return this._version;
};
_11d.prototype.getMarker=function(){
var _1ae=this._string,_1af=this._location;
if(_1af>=_1ae.length){
return null;
}
var next=_1ae.indexOf(";",_1af);
if(next<0){
return null;
}
var _1b0=_1ae.substring(_1af,next);
if(_1b0==="e"){
return null;
}
this._location=next+1;
return _1b0;
};
_11d.prototype.getString=function(){
var _1b1=this._string,_1b2=this._location;
if(_1b2>=_1b1.length){
return null;
}
var next=_1b1.indexOf(";",_1b2);
if(next<0){
return null;
}
var size=parseInt(_1b1.substring(_1b2,next)),text=_1b1.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _1b3=0,_1b4=1<<0,_1b5=1<<1,_1b6=1<<2,_1b7=1<<3,_1b8=1<<4;
var _1b9={},_1ba={},_1bb=new Date().getTime(),_1bc=0,_1bd=0;
CFBundle=function(aURL){
aURL=_1be(aURL).asDirectoryPathURL();
var _1bf=aURL.absoluteString(),_1c0=_1b9[_1bf];
if(_1c0){
return _1c0;
}
_1b9[_1bf]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._loadStatus=_1b3;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _94(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1be(aURL));
while(aURL.path()!=="/"){
var _1c1=_1b9[aURL.absoluteString()];
if(_1c1){
return _1c1;
}
aURL=new CFURL("..",aURL);
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1c2);
};
function _1c3(_1c4,_1c5){
if(_1c5){
_1ba[_1c4.name]=_1c5;
}
};
CFBundle.bundleForClass=function(_1c6){
return _1ba[_1c6.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1c7,_1c8,_1c9){
if(_1c8){
_1c7=_1c7+"."+_1c8;
}
if(_1c9){
_1c7=_1c9+"/"+_1c7;
}
var _1ca=(new CFURL(_1c7,this.resourcesDirectoryURL())).mappedURL();
return _1ca.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1cb=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1cb){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1cb,this.mostEligibleEnvironmentURL());
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
var _1cc=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_b4=_1cc.length,_1cd=this.mostEligibleEnvironment();
while(_b4--){
if(_1cc[_b4]===_1cd){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1ce){
_1ce=_1ce||this.environments();
var _1cf=CFBundle.environments(),_b4=0,_1d0=_1cf.length,_1d1=_1ce.length;
for(;_b4<_1d0;++_b4){
var _1d2=0,_1d3=_1cf[_b4];
for(;_1d2<_1d1;++_1d2){
if(_1d3===_1ce[_1d2]){
return _1d3;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_1b4;
};
CFBundle.prototype.load=function(_1d4){
if(this._loadStatus!==_1b3){
return;
}
this._loadStatus=_1b4|_1b5;
var self=this;
var _1d5=new CFURL("..",this.bundleURL());
if(_1d5.absoluteString()===this.bundleURL().absoluteString()){
_1d5=_1d5.schemeAndAuthority();
}
_1ab.resolveResourceAtURL(_1d5,YES,function(_1d6){
var _1d7=self.bundleURL().absoluteURL().lastPathComponent();
self._staticResource=_1d6._children[_1d7]||new _1ab(_1d7,_1d6,YES,NO);
function _1d8(_1d9){
self._loadStatus&=~_1b5;
self._infoDictionary=_1d9.request.responsePropertyList();
if(!self._infoDictionary){
_1db(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1bd=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1df(self,_1d4);
};
function _1da(){
self._loadStatus=_1b3;
_1db(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _cb(new CFURL("Info.plist",self.bundleURL()),_1d8,_1da);
});
};
function _1db(_1dc,_1dd){
_1de(_1dc._staticResource);
_1dc._eventDispatcher.dispatchEvent({type:"error",error:_1dd,bundle:_1dc});
};
function _1df(_1e0,_1e1){
if(!_1e0.mostEligibleEnvironment()){
return _1e2();
}
_1e3(_1e0,_1e4,_1e2);
_1e5(_1e0,_1e4,_1e2);
if(_1e0._loadStatus===_1b4){
return _1e4();
}
function _1e2(_1e6){
var _1e7=_1e0._loadRequests,_1e8=_1e7.length;
while(_1e8--){
_1e7[_1e8].abort();
}
this._loadRequests=[];
_1e0._loadStatus=_1b3;
_1db(_1e0,_1e6||new Error("Could not recognize executable code format in Bundle "+_1e0));
};
function _1e4(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_1bd){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_1bc/_1bd),0),_1bd,_1e0.path());
}
if(_1e0._loadStatus===_1b4){
_1e0._loadStatus=_1b8;
}else{
return;
}
_1de(_1e0._staticResource);
function _1e9(){
_1e0._eventDispatcher.dispatchEvent({type:"load",bundle:_1e0});
};
if(_1e1){
_1ea(_1e0,_1e9);
}else{
_1e9();
}
};
};
function _1e3(_1eb,_1ec,_1ed){
var _1ee=_1eb.executableURL();
if(!_1ee){
return;
}
_1eb._loadStatus|=_1b6;
new _cb(_1ee,function(_1ef){
try{
_1bc+=_1ef.request.responseText().length;
_1f0(_1eb,_1ef.request.responseText(),_1ee);
_1eb._loadStatus&=~_1b6;
_1ec();
}
catch(anException){
_1ed(anException);
}
},_1ed);
};
function _1f1(_1f2){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1f2.mostEligibleEnvironmentURL());
};
function _1f3(_1f4){
if(_1f5===_1f6){
return new CFURL("dataURLs.txt",_1f4.mostEligibleEnvironmentURL());
}
if(_1f5===_1f7||_1f5===_1f8){
return new CFURL("MHTMLPaths.txt",_1f4.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1e5(_1f9,_1fa,_1fb){
if(!_1f9.hasSpritedImages()){
return;
}
_1f9._loadStatus|=_1b7;
if(!_1fc()){
return _1fd(_1f1(_1f9),function(){
_1e5(_1f9,_1fa,_1fb);
});
}
var _1fe=_1f3(_1f9);
if(!_1fe){
_1f9._loadStatus&=~_1b7;
return _1fa();
}
new _cb(_1fe,function(_1ff){
try{
_1bc+=_1ff.request.responseText().length;
_1f0(_1f9,_1ff.request.responseText(),_1fe);
_1f9._loadStatus&=~_1b7;
_1fa();
}
catch(anException){
_1fb(anException);
}
},_1fb);
};
var _200=[],_1f5=-1,_201=0,_1f6=1,_1f7=2,_1f8=3;
function _1fc(){
return _1f5!==-1;
};
function _1fd(_202,_203){
if(_1fc()){
return;
}
_200.push(_203);
if(_200.length>1){
return;
}
_200.push(function(){
var size=0,_204=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_204){
return;
}
switch(_1f5){
case _1f6:
size=_204.valueForKey("data");
break;
case _1f7:
case _1f8:
size=_204.valueForKey("mhtml");
break;
}
_1bd+=size;
});
_205([_1f6,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1f7,_202+"!test",_1f8,_202+"?"+_1bb+"!test"]);
};
function _206(){
var _207=_200.length;
while(_207--){
_200[_207]();
}
};
function _205(_208){
if(_208.length<2){
_1f5=_201;
_206();
return;
}
var _209=new Image();
_209.onload=function(){
if(_209.width===1&&_209.height===1){
_1f5=_208[0];
_206();
}else{
_209.onerror();
}
};
_209.onerror=function(){
_205(_208.slice(2));
};
_209.src=_208[1];
};
function _1ea(_20a,_20b){
var _20c=[_20a._staticResource];
function _20d(_20e){
for(;_20e<_20c.length;++_20e){
var _20f=_20c[_20e];
if(_20f.isNotFound()){
continue;
}
if(_20f.isFile()){
var _210=new _318(_20f.URL());
if(_210.hasLoadedFileDependencies()){
_210.execute();
}else{
_210.addEventListener("dependenciesload",function(){
_20d(_20e);
});
_210.loadFileDependencies();
return;
}
}else{
if(_20f.URL().absoluteString()===_20a.resourcesDirectoryURL().absoluteString()){
continue;
}
var _211=_20f.children();
for(var name in _211){
if(_99.call(_211,name)){
_20c.push(_211[name]);
}
}
}
}
_20b();
};
_20d(0);
};
var _212="@STATIC",_213="p",_214="u",_215="c",_216="t",_217="I",_218="i";
function _1f0(_219,_21a,_21b){
var _21c=new _11d(_21a);
if(_21c.magicNumber()!==_212){
throw new Error("Could not read static file: "+_21b);
}
if(_21c.version()!=="1.0"){
throw new Error("Could not read static file: "+_21b);
}
var _21d,_21e=_219.bundleURL(),file=NULL;
while(_21d=_21c.getMarker()){
var text=_21c.getString();
if(_21d===_213){
var _21f=new CFURL(text,_21e),_220=_1ab.resourceAtURL(new CFURL(".",_21f),YES);
file=new _1ab(_21f.lastPathComponent(),_220,NO,YES);
}else{
if(_21d===_214){
var URL=new CFURL(text,_21e),_221,_222=_21c.getString();
if(_222.indexOf("mhtml:")===0){
_222="mhtml:"+new CFURL(_222.substr("mhtml:".length),_21e);
if(_1f5===_1f8){
var _223=URLString.indexOf("!"),_224=URLString.substring(0,_223),_225=URLString.substring(_223);
_222=_224+"?"+_1bb+_225;
}
_221=new CFURL(_222);
}
CFURL.setMappedURLForURL(URL,new CFURL(_222));
var _220=_1ab.resourceAtURL(new CFURL(".",URL),YES);
new _1ab(URL.lastPathComponent(),_220,NO,YES);
}else{
if(_21d===_216){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_226,_227){
this._eventDispatcher.addEventListener(_226,_227);
};
CFBundle.prototype.removeEventListener=function(_228,_229){
this._eventDispatcher.removeEventListener(_228,_229);
};
CFBundle.prototype.onerror=function(_22a){
throw _22a.error;
};
CFBundle.prototype.path=function(){
return this._bundleURL.absoluteString();
};
CFBundle.prototype.pathForResource=function(_22b){
return this.resourceURL(_22b).absoluteString();
};
var _22c={};
function _1ab(_22d,_22e,_22f,_230){
this._parent=_22e;
this._eventDispatcher=new _94(this);
this._name=_22d;
this._isResolved=!!_230;
this._URL=new CFURL(_22d,_22e&&_22e.URL().asDirectoryPathURL());
if(_22f){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_22e){
_22c[_22d]=this;
}
this._isDirectory=!!_22f;
this._isNotFound=NO;
if(_22e){
_22e._children[_22d]=this;
}
if(_22f){
this._children={};
}else{
this._contents="";
}
};
_1ab.rootResources=function(){
return _22c;
};
_2.StaticResource=_1ab;
function _1de(_231){
_231._isResolved=YES;
_231._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_231});
};
_1ab.prototype.resolve=function(){
if(this.isDirectory()){
var _232=new CFBundle(this.URL());
_232.onerror=function(){
};
_232.load(NO);
}else{
var self=this;
function _233(_234){
self._contents=_234.request.responseText();
_1de(self);
};
function _235(){
self._isNotFound=YES;
_1de(self);
};
new _cb(this.URL(),_233,_235);
}
};
_1ab.prototype.name=function(){
return this._name;
};
_1ab.prototype.URL=function(){
return this._URL;
};
_1ab.prototype.contents=function(){
return this._contents;
};
_1ab.prototype.children=function(){
return this._children;
};
_1ab.prototype.parent=function(){
return this._parent;
};
_1ab.prototype.isResolved=function(){
return this._isResolved;
};
_1ab.prototype.write=function(_236){
this._contents+=_236;
};
function _237(_238){
var _239=_238.schemeAndAuthority(),_23a=_22c[_239];
if(!_23a){
_23a=new _1ab(_239,NULL,YES,YES);
}
return _23a;
};
_1ab.resourceAtURL=function(aURL,_23b){
aURL=_1be(aURL).absoluteURL();
var _23c=_237(aURL),_23d=aURL.pathComponents(),_b4=0,_23e=_23d.length;
for(;_b4<_23e;++_b4){
var name=_23d[_b4];
if(_99.call(_23c._children,name)){
_23c=_23c._children[name];
}else{
if(_23b){
_23c=new _1ab(name,_23c,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _23c;
};
_1ab.prototype.resourceAtURL=function(aURL,_23f){
return _1ab.resourceAtURL(new CFURL(aURL,this.URL()),_23f);
};
_1ab.resolveResourceAtURL=function(aURL,_240,_241){
aURL=_1be(aURL).absoluteURL();
_242(_237(aURL),_240,aURL.pathComponents(),0,_241);
};
_1ab.prototype.resolveResourceAtURL=function(aURL,_243,_244){
_1ab.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_243,_244);
};
function _242(_245,_246,_247,_248,_249){
var _24a=_247.length;
for(;_248<_24a;++_248){
var name=_247[_248],_24b=_99.call(_245._children,name)&&_245._children[name];
if(!_24b){
_24b=new _1ab(name,_245,_248+1<_24a||_246,NO);
_24b.resolve();
}
if(!_24b.isResolved()){
return _24b.addEventListener("resolve",function(){
_242(_245,_246,_247,_248,_249);
});
}
if(_24b.isNotFound()){
return _249(null,new Error("File not found: "+_247.join("/")));
}
if((_248+1<_24a)&&_24b.isFile()){
return _249(null,new Error("File is not a directory: "+_247.join("/")));
}
_245=_24b;
}
_249(_245);
};
function _24c(aURL,_24d,_24e){
var _24f=_1ab.includeURLs(),_250=new CFURL(aURL,_24f[_24d]).absoluteURL();
_1ab.resolveResourceAtURL(_250,NO,function(_251){
if(!_251){
if(_24d+1<_24f.length){
_24c(aURL,_24d+1,_24e);
}else{
_24e(NULL);
}
return;
}
_24e(_251);
});
};
_1ab.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_252){
_24c(aURL,0,_252);
};
_1ab.prototype.addEventListener=function(_253,_254){
this._eventDispatcher.addEventListener(_253,_254);
};
_1ab.prototype.removeEventListener=function(_255,_256){
this._eventDispatcher.removeEventListener(_255,_256);
};
_1ab.prototype.isNotFound=function(){
return this._isNotFound;
};
_1ab.prototype.isFile=function(){
return !this._isDirectory;
};
_1ab.prototype.isDirectory=function(){
return this._isDirectory;
};
_1ab.prototype.toString=function(_257){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _258=this.name();
if(this.isDirectory()){
var _259=this._children;
for(var name in _259){
if(_259.hasOwnProperty(name)){
var _25a=_259[name];
if(_257||!_25a.isNotFound()){
_258+="\n\t"+_259[name].toString(_257).split("\n").join("\n\t");
}
}
}
}
return _258;
};
var _25b=NULL;
_1ab.includeURLs=function(){
if(_25c){
return _25c;
}
var _25c=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_25c=["Frameworks","Frameworks/Debug"];
}else{
_25c=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _25d=_25c.length;
while(_25d--){
_25c[_25d]=new CFURL(_25c[_25d]).asDirectoryPathURL();
}
return _25c;
};
var _25e="accessors",_25f="class",_260="end",_261="function",_262="implementation",_263="import",_264="each",_265="outlet",_266="action",_267="new",_268="selector",_269="super",_26a="var",_26b="in",_26c="=",_26d="+",_26e="-",_26f=":",_270=",",_271=".",_272="*",_273=";",_274="<",_275="{",_276="}",_277=">",_278="[",_279="\"",_27a="@",_27b="]",_27c="?",_27d="(",_27e=")",_27f=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_280=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_281=/^[a-zA-Z_$](\w|$)*$/;
function _282(_283){
this._index=-1;
this._tokens=(_283+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_282.prototype.push=function(){
this._context.push(this._index);
};
_282.prototype.pop=function(){
this._index=this._context.pop();
};
_282.prototype.peak=function(_284){
if(_284){
this.push();
var _285=this.skip_whitespace();
this.pop();
return _285;
}
return this._tokens[this._index+1];
};
_282.prototype.next=function(){
return this._tokens[++this._index];
};
_282.prototype.previous=function(){
return this._tokens[--this._index];
};
_282.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_282.prototype.skip_whitespace=function(_286){
var _287;
if(_286){
while((_287=this.previous())&&_27f.test(_287)){
}
}else{
while((_287=this.next())&&_27f.test(_287)){
}
}
return _287;
};
_2.Lexer=_282;
function _288(){
this.atoms=[];
};
_288.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_289,aURL,_28a){
return new _28b(_289,aURL,_28a).executable();
};
_2.eval=function(_28c){
return eval(_2.preprocess(_28c).code());
};
var _28b=function(_28d,aURL,_28e){
this._URL=new CFURL(aURL);
_28d=_28d.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _288();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _282(_28d);
this._flags=_28e;
this._classMethod=false;
this._executable=NULL;
this.preprocess(this._tokens,this._buffer);
};
_2.Preprocessor=_28b;
_28b.Flags={};
_28b.Flags.IncludeDebugSymbols=1<<0;
_28b.Flags.IncludeTypeSignatures=1<<1;
_28b.prototype.executable=function(){
if(!this._executable){
this._executable=new _28f(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_28b.prototype.accessors=function(_290){
var _291=_290.skip_whitespace(),_292={};
if(_291!=_27d){
_290.previous();
return _292;
}
while((_291=_290.skip_whitespace())!=_27e){
var name=_291,_293=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_291=_290.skip_whitespace())==_26c){
_293=_290.skip_whitespace();
if(!/^\w+$/.test(_293)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_291=_290.next())!=_26f){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_293+=":";
}
_291=_290.skip_whitespace();
}
_292[name]=_293;
if(_291==_27e){
break;
}
if(_291!=_270){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _292;
};
_28b.prototype.brackets=function(_294,_295){
var _296=[];
while(this.preprocess(_294,NULL,NULL,NULL,_296[_296.length]=[])){
}
if(_296[0].length===1){
_295.atoms[_295.atoms.length]="[";
_295.atoms[_295.atoms.length]=_296[0][0];
_295.atoms[_295.atoms.length]="]";
}else{
var _297=new _288();
if(_296[0][0].atoms[0]==_269){
_295.atoms[_295.atoms.length]="objj_msgSendSuper(";
_295.atoms[_295.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_295.atoms[_295.atoms.length]="objj_msgSend(";
_295.atoms[_295.atoms.length]=_296[0][0];
}
_297.atoms[_297.atoms.length]=_296[0][1];
var _298=1,_299=_296.length,_29a=new _288();
for(;_298<_299;++_298){
var pair=_296[_298];
_297.atoms[_297.atoms.length]=pair[1];
_29a.atoms[_29a.atoms.length]=", "+pair[0];
}
_295.atoms[_295.atoms.length]=", \"";
_295.atoms[_295.atoms.length]=_297;
_295.atoms[_295.atoms.length]="\"";
_295.atoms[_295.atoms.length]=_29a;
_295.atoms[_295.atoms.length]=")";
}
};
_28b.prototype.directive=function(_29b,_29c,_29d){
var _29e=_29c?_29c:new _288(),_29f=_29b.next();
if(_29f.charAt(0)==_279){
_29e.atoms[_29e.atoms.length]=_29f;
}else{
if(_29f===_25f){
_29b.skip_whitespace();
return;
}else{
if(_29f===_262){
this.implementation(_29b,_29e);
}else{
if(_29f===_263){
this._import(_29b);
}else{
if(_29f===_268){
this.selector(_29b,_29e);
}
}
}
}
}
if(!_29c){
return _29e;
}
};
_28b.prototype.implementation=function(_2a0,_2a1){
var _2a2=_2a1,_2a3="",_2a4=NO,_2a5=_2a0.skip_whitespace(),_2a6="Nil",_2a7=new _288(),_2a8=new _288();
if(!(/^\w/).test(_2a5)){
throw new Error(this.error_message("*** Expected class name, found \""+_2a5+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_2a5+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_2a5+"\").super_class";
this._currentClass=_2a5;
this._currentSelector="";
if((_2a3=_2a0.skip_whitespace())==_27d){
_2a3=_2a0.skip_whitespace();
if(_2a3==_27e){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_2a5+"\"."));
}
if(_2a0.skip_whitespace()!=_27e){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_2a5+"\"."));
}
_2a2.atoms[_2a2.atoms.length]="{\nvar the_class = objj_getClass(\""+_2a5+"\")\n";
_2a2.atoms[_2a2.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_2a5+"\\\"\");\n";
_2a2.atoms[_2a2.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_2a3==_26f){
_2a3=_2a0.skip_whitespace();
if(!_281.test(_2a3)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_2a3+"\"."));
}
_2a6=_2a3;
_2a3=_2a0.skip_whitespace();
}
_2a2.atoms[_2a2.atoms.length]="{var the_class = objj_allocateClassPair("+_2a6+", \""+_2a5+"\"),\nmeta_class = the_class.isa;";
if(_2a3==_275){
var _2a9=0,_2aa=[],_2ab,_2ac={};
while((_2a3=_2a0.skip_whitespace())&&_2a3!=_276){
if(_2a3===_27a){
_2a3=_2a0.next();
if(_2a3===_25e){
_2ab=this.accessors(_2a0);
}else{
if(_2a3!==_265){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_2a3+"')."));
}
}
}else{
if(_2a3==_273){
if(_2a9++==0){
_2a2.atoms[_2a2.atoms.length]="class_addIvars(the_class, [";
}else{
_2a2.atoms[_2a2.atoms.length]=", ";
}
var name=_2aa[_2aa.length-1];
_2a2.atoms[_2a2.atoms.length]="new objj_ivar(\""+name+"\")";
_2aa=[];
if(_2ab){
_2ac[name]=_2ab;
_2ab=NULL;
}
}else{
_2aa.push(_2a3);
}
}
}
if(_2aa.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_2a9){
_2a2.atoms[_2a2.atoms.length]="]);\n";
}
if(!_2a3){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
for(ivar_name in _2ac){
var _2ad=_2ac[ivar_name],_2ae=_2ad["property"]||ivar_name;
var _2af=_2ad["getter"]||_2ae,_2b0="(id)"+_2af+"\n{\nreturn "+ivar_name+";\n}";
if(_2a7.atoms.length!==0){
_2a7.atoms[_2a7.atoms.length]=",\n";
}
_2a7.atoms[_2a7.atoms.length]=this.method(new _282(_2b0));
if(_2ad["readonly"]){
continue;
}
var _2b1=_2ad["setter"];
if(!_2b1){
var _2b2=_2ae.charAt(0)=="_"?1:0;
_2b1=(_2b2?"_":"")+"set"+_2ae.substr(_2b2,1).toUpperCase()+_2ae.substring(_2b2+1)+":";
}
var _2b3="(void)"+_2b1+"(id)newValue\n{\n";
if(_2ad["copy"]){
_2b3+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_2b3+=ivar_name+" = newValue;\n}";
}
if(_2a7.atoms.length!==0){
_2a7.atoms[_2a7.atoms.length]=",\n";
}
_2a7.atoms[_2a7.atoms.length]=this.method(new _282(_2b3));
}
}else{
_2a0.previous();
}
_2a2.atoms[_2a2.atoms.length]="objj_registerClassPair(the_class);\n";
}
while((_2a3=_2a0.skip_whitespace())){
if(_2a3==_26d){
this._classMethod=true;
if(_2a8.atoms.length!==0){
_2a8.atoms[_2a8.atoms.length]=", ";
}
_2a8.atoms[_2a8.atoms.length]=this.method(_2a0);
}else{
if(_2a3==_26e){
this._classMethod=false;
if(_2a7.atoms.length!==0){
_2a7.atoms[_2a7.atoms.length]=", ";
}
_2a7.atoms[_2a7.atoms.length]=this.method(_2a0);
}else{
if(_2a3==_27a){
if((_2a3=_2a0.next())==_260){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_2a3+"\"."));
}
}
}
}
}
if(_2a7.atoms.length!==0){
_2a2.atoms[_2a2.atoms.length]="class_addMethods(the_class, [";
_2a2.atoms[_2a2.atoms.length]=_2a7;
_2a2.atoms[_2a2.atoms.length]="]);\n";
}
if(_2a8.atoms.length!==0){
_2a2.atoms[_2a2.atoms.length]="class_addMethods(meta_class, [";
_2a2.atoms[_2a2.atoms.length]=_2a8;
_2a2.atoms[_2a2.atoms.length]="]);\n";
}
_2a2.atoms[_2a2.atoms.length]="}";
this._currentClass="";
};
_28b.prototype._import=function(_2b4){
var _2b5="",_2b6=_2b4.skip_whitespace(),_2b7=(_2b6!==_274);
if(_2b6===_274){
while((_2b6=_2b4.next())&&_2b6!==_277){
_2b5+=_2b6;
}
if(!_2b6){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_2b6.charAt(0)===_279){
_2b5=_2b6.substr(1,_2b6.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_2b6+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_2b5;
this._buffer.atoms[this._buffer.atoms.length]=_2b7?"\", YES);":"\", NO);";
this._dependencies.push(new _2b8(new CFURL(_2b5),_2b7));
};
_28b.prototype.method=function(_2b9){
var _2ba=new _288(),_2bb,_2bc="",_2bd=[],_2be=[null];
while((_2bb=_2b9.skip_whitespace())&&_2bb!=_275){
if(_2bb==_26f){
var type="";
_2bc+=_2bb;
_2bb=_2b9.skip_whitespace();
if(_2bb==_27d){
while((_2bb=_2b9.skip_whitespace())&&_2bb!=_27e){
type+=_2bb;
}
_2bb=_2b9.skip_whitespace();
}
_2be[_2bd.length+1]=type||null;
_2bd[_2bd.length]=_2bb;
}else{
if(_2bb==_27d){
var type="";
while((_2bb=_2b9.skip_whitespace())&&_2bb!=_27e){
type+=_2bb;
}
_2be[0]=type||null;
}else{
if(_2bb==_270){
if((_2bb=_2b9.skip_whitespace())!=_271||_2b9.next()!=_271||_2b9.next()!=_271){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_2bc+=_2bb;
}
}
}
}
var _2bf=0,_2c0=_2bd.length;
_2ba.atoms[_2ba.atoms.length]="new objj_method(sel_getUid(\"";
_2ba.atoms[_2ba.atoms.length]=_2bc;
_2ba.atoms[_2ba.atoms.length]="\"), function";
this._currentSelector=_2bc;
if(this._flags&_28b.Flags.IncludeDebugSymbols){
_2ba.atoms[_2ba.atoms.length]=" $"+this._currentClass+"__"+_2bc.replace(/:/g,"_");
}
_2ba.atoms[_2ba.atoms.length]="(self, _cmd";
for(;_2bf<_2c0;++_2bf){
_2ba.atoms[_2ba.atoms.length]=", ";
_2ba.atoms[_2ba.atoms.length]=_2bd[_2bf];
}
_2ba.atoms[_2ba.atoms.length]=")\n{ with(self)\n{";
_2ba.atoms[_2ba.atoms.length]=this.preprocess(_2b9,NULL,_276,_275);
_2ba.atoms[_2ba.atoms.length]="}\n}";
if(this._flags&_28b.Flags.IncludeDebugSymbols){
_2ba.atoms[_2ba.atoms.length]=","+JSON.stringify(_2be);
}
_2ba.atoms[_2ba.atoms.length]=")";
this._currentSelector="";
return _2ba;
};
_28b.prototype.preprocess=function(_2c1,_2c2,_2c3,_2c4,_2c5){
var _2c6=_2c2?_2c2:new _288(),_2c7=0,_2c8="";
if(_2c5){
_2c5[0]=_2c6;
var _2c9=false,_2ca=[0,0,0];
}
while((_2c8=_2c1.next())&&((_2c8!==_2c3)||_2c7)){
if(_2c5){
if(_2c8===_27c){
++_2ca[2];
}else{
if(_2c8===_275){
++_2ca[0];
}else{
if(_2c8===_276){
--_2ca[0];
}else{
if(_2c8===_27d){
++_2ca[1];
}else{
if(_2c8===_27e){
--_2ca[1];
}else{
if((_2c8===_26f&&_2ca[2]--===0||(_2c9=(_2c8===_27b)))&&_2ca[0]===0&&_2ca[1]===0){
_2c1.push();
var _2cb=_2c9?_2c1.skip_whitespace(true):_2c1.previous(),_2cc=_27f.test(_2cb);
if(_2cc||_281.test(_2cb)&&_27f.test(_2c1.previous())){
_2c1.push();
var last=_2c1.skip_whitespace(true),_2cd=true,_2ce=false;
if(last==="+"||last==="-"){
if(_2c1.previous()!==last){
_2cd=false;
}else{
last=_2c1.skip_whitespace(true);
_2ce=true;
}
}
_2c1.pop();
_2c1.pop();
if(_2cd&&((!_2ce&&(last===_276))||last===_27e||last===_27b||last===_271||_280.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_281.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2cc){
_2c5[1]=":";
}else{
_2c5[1]=_2cb;
if(!_2c9){
_2c5[1]+=":";
}
var _2c7=_2c6.atoms.length;
while(_2c6.atoms[_2c7--]!==_2cb){
}
_2c6.atoms.length=_2c7;
}
return !_2c9;
}
if(_2c9){
return NO;
}
}
_2c1.pop();
if(_2c9){
return NO;
}
}
}
}
}
}
}
_2ca[2]=MAX(_2ca[2],0);
}
if(_2c4){
if(_2c8===_2c4){
++_2c7;
}else{
if(_2c8===_2c3){
--_2c7;
}
}
}
if(_2c8===_261){
var _2cf="";
while((_2c8=_2c1.next())&&_2c8!==_27d&&!(/^\w/).test(_2c8)){
_2cf+=_2c8;
}
if(_2c8===_27d){
if(_2c4===_27d){
++_2c7;
}
_2c6.atoms[_2c6.atoms.length]="function"+_2cf+"(";
if(_2c5){
++_2ca[1];
}
}else{
_2c6.atoms[_2c6.atoms.length]=_2c8+"= function";
}
}else{
if(_2c8==_27a){
this.directive(_2c1,_2c6);
}else{
if(_2c8==_278){
this.brackets(_2c1,_2c6);
}else{
_2c6.atoms[_2c6.atoms.length]=_2c8;
}
}
}
}
if(_2c5){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2c2){
return _2c6;
}
};
_28b.prototype.selector=function(_2d0,_2d1){
var _2d2=_2d1?_2d1:new _288();
_2d2.atoms[_2d2.atoms.length]="sel_getUid(\"";
if(_2d0.skip_whitespace()!=_27d){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2d3=_2d0.skip_whitespace();
if(_2d3==_27e){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2d1.atoms[_2d1.atoms.length]=_2d3;
var _2d4,_2d5=true;
while((_2d4=_2d0.next())&&_2d4!=_27e){
if(_2d5&&/^\d+$/.test(_2d4)||!(/^(\w|$|\:)/.test(_2d4))){
if(!(/\S/).test(_2d4)){
if(_2d0.skip_whitespace()==_27e){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2d4+"' in @selector()."));
}
}
_2d2.atoms[_2d2.atoms.length]=_2d4;
_2d5=(_2d4==_26f);
}
_2d2.atoms[_2d2.atoms.length]="\")";
if(!_2d1){
return _2d2;
}
};
_28b.prototype.error_message=function(_2d6){
return _2d6+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _2b8(aURL,_2d7){
this._URL=aURL;
this._isLocal=_2d7;
};
_2.FileDependency=_2b8;
_2b8.prototype.URL=function(){
return this._URL;
};
_2b8.prototype.isLocal=function(){
return this._isLocal;
};
_2b8.prototype.toMarkedString=function(){
var _2d8=this.URL().absoluteString();
return (this.isLocal()?_218:_217)+";"+_2d8.length+";"+_2d8;
};
_2b8.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2d9=0,_2da=1,_2db=2,_2dc=0;
function _28f(_2dd,_2de,aURL,_2df){
if(arguments.length===0){
return this;
}
this._code=_2dd;
this._function=_2df||NULL;
this._URL=_1be(aURL||new CFURL("(Anonymous"+(_2dc++)+")"));
this._fileDependencies=_2de;
this._fileDependencyLoadStatus=_2d9;
this._eventDispatcher=new _94(this);
if(this._function){
return;
}
this.setCode(_2dd);
};
_2.Executable=_28f;
_28f.prototype.path=function(){
return this.URL().path();
};
_28f.prototype.URL=function(){
return this._URL;
};
_28f.prototype.functionParameters=function(){
var _2e0=["global","objj_executeFile","objj_importFile"];
return _2e0;
};
_28f.prototype.functionArguments=function(){
var _2e1=[_1,this.fileExecuter(),this.fileImporter()];
return _2e1;
};
_28f.prototype.execute=function(){
var _2e2=_2e3;
_2e3=CFBundle.bundleContainingURL(this.URL());
var _2e4=this._function.apply(_1,this.functionArguments());
_2e3=_2e2;
return _2e4;
};
_28f.prototype.code=function(){
return this._code;
};
_28f.prototype.setCode=function(code){
this._code=code;
var _2e5=this.functionParameters().join(","),_2e6=this.URL().absoluteString();
code+="/**/\n//@ sourceURL="+"hello"+_2e6;
this._function=new Function(_2e5,code);
this._function.displayName=_2e6;
};
_28f.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_28f.prototype.scope=function(){
return this._scope;
};
_28f.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyLoadStatus===_2db;
};
var _2e7=0;
_28f.prototype.loadFileDependencies=function(){
if(this._fileDependencyLoadStatus!==_2d9){
return;
}
this._fileDependencyLoadStatus=_2da;
var _2e8=[{},{}],_2e9=new CFMutableDictionary(),_2ea=new CFMutableDictionary(),_2eb={};
function _2ec(_2ed){
var _2ee=[_2ed],_2ef=0,_2f0=_2ee.length;
for(;_2ef<_2f0;++_2ef){
var _2f1=_2ee[_2ef];
if(_2f1.hasLoadedFileDependencies()){
continue;
}
var _2f2=_2f1.URL().absoluteString();
_2eb[_2f2]=_2f1;
var _2f3=new CFURL(".",_2f1.URL()),_2f4=_2f1.fileDependencies(),_2f5=0,_2f6=_2f4.length;
for(;_2f5<_2f6;++_2f5){
var _2f7=_2f4[_2f5],_2f8=_2f7.isLocal(),URL=_2f7.URL();
if(_2f8){
URL=new CFURL(URL,_2f3);
}
var _2f9=URL.absoluteString();
if(_2e8[_2f8?1:0][_2f9]){
continue;
}
_2e8[_2f8?1:0][_2f9]=YES;
var _2fa=new _309(URL,_2f8),_2fb=_2fa.UID();
if(_2e9.containsKey(_2fb)){
continue;
}
_2e9.setValueForKey(_2fb,_2fa);
if(_2fa.isComplete()){
_2ee.push(_2fa.result());
++_2f0;
}else{
_2ea.setValueForKey(_2fb,_2fa);
_2fa.addEventListener("complete",function(_2fc){
var _2fd=_2fc.fileExecutableSearch;
_2ea.removeValueForKey(_2fd.UID());
_2ec(_2fd.result());
});
}
}
}
if(_2ea.count()>0){
return;
}
for(var _2f9 in _2eb){
if(_99.call(_2eb,_2f9)){
_2eb[_2f9]._fileDependencyLoadStatus=_2db;
}
}
for(var _2f9 in _2eb){
if(_99.call(_2eb,_2f9)){
var _2f1=_2eb[_2f9];
_2f1._eventDispatcher.dispatchEvent({type:"dependenciesload",executable:_2f1});
}
}
};
_2ec(this);
};
_28f.prototype.addEventListener=function(_2fe,_2ff){
this._eventDispatcher.addEventListener(_2fe,_2ff);
};
_28f.prototype.removeEventListener=function(_300,_301){
this._eventDispatcher.removeEventListener(_300,_301);
};
_28f.prototype.fileImporter=function(){
return _28f.fileImporterForURL(new CFURL(".",this.URL()));
};
_28f.prototype.fileExecuter=function(){
return _28f.fileExecuterForURL(new CFURL(".",this.URL()));
};
var _302={};
_28f.fileExecuterForURL=function(aURL){
var _303=_1be(aURL),_304=_303.absoluteString(),_305=_302[_304];
if(!_305){
_305=function(aURL,_306,_307){
aURL=new CFURL(aURL,_306?_303:NULL);
var _308=new _309(aURL,_306),_30a=_308.result();
if(!_30a.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_30a.execute(_307);
};
_302[_304]=_305;
}
return _305;
};
var _30b={};
_28f.fileImporterForURL=function(aURL){
var _30c=_1be(aURL),_30d=_30c.absoluteString(),_30e=_30b[_30d];
if(!_30e){
_30e=function(aURL,_30f,_310){
_165();
aURL=new CFURL(aURL,_30f?_30c:NULL);
var _311=new _309(aURL,_30f);
function _312(_313){
var _314=_313.result(),_315=function(){
_314.execute();
_166();
if(_310){
_310();
}
};
if(!_314.hasLoadedFileDependencies()){
_314.addEventListener("dependenciesload",_315);
_314.loadFileDependencies();
}else{
_315();
}
};
if(_311.isComplete()){
_312(_311);
}else{
_311.addEventListener("complete",function(_316){
_312(_316.fileExecutableSearch);
});
}
};
_30b[_30d]=_30e;
}
return _30e;
};
var _317={};
function _318(aURL,_319){
aURL=_1be(aURL);
var _31a=aURL.absoluteString(),_31b=_317[_31a];
if(_31b){
return _31b;
}
_317[_31a]=this;
var _31c=_1ab.resourceAtURL(aURL).contents(),_31d=NULL,_31e=aURL.pathExtension();
if(_319){
_31d=_319;
}else{
if(_31c.match(/^@STATIC;/)){
_31d=_31f(_31c,aURL);
}else{
if(_31e==="j"||!_31e){
_31d=_2.preprocess(_31c,aURL,_28b.Flags.IncludeDebugSymbols);
}else{
_31d=new _28f(_31c,[],aURL);
}
}
}
_28f.apply(this,[_31d.code(),_31d.fileDependencies(),aURL,_31d._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_318;
_318.prototype=new _28f();
_318.prototype.execute=function(_320){
if(this._hasExecuted&&!_320){
return;
}
this._hasExecuted=YES;
_28f.prototype.execute.call(this);
};
_318.prototype.URL=function(){
return this._URL;
};
_318.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _31f(_321,aURL){
var _322=new _11d(_321);
var _323=NULL,code="",_324=[];
while(_323=_322.getMarker()){
var text=_322.getString();
if(_323===_216){
code+=text;
}else{
if(_323===_217){
_324.push(new _2b8(new CFURL(text),NO));
}else{
if(_323===_218){
_324.push(new _2b8(new CFURL(text),YES));
}
}
}
}
return new _28f(code,_324,aURL);
};
var _325=[{},{}];
function _309(aURL,_326){
var _327=aURL.absoluteString(),_328=_325[_326?1:0][_327];
if(_328){
return _328;
}
_325[_326?1:0][_327]=this;
this._UID=objj_generateObjectUID();
this._URL=aURL;
this._isComplete=NO;
this._eventDispatcher=new _94(this);
this._result=NULL;
var self=this;
function _329(_32a){
if(!_32a){
throw new Error("Could not load file at "+aURL);
}
self._result=new _318(_32a.URL());
self._isComplete=YES;
self._eventDispatcher.dispatchEvent({type:"complete",fileExecutableSearch:self});
};
if(_326){
_1ab.resolveResourceAtURL(aURL,NO,_329);
}else{
_1ab.resolveResourceAtURLSearchingIncludeURLs(aURL,_329);
}
};
_2.FileExecutableSearch=_309;
_309.prototype.URL=function(){
return this._URL;
};
_309.prototype.result=function(){
return this._result;
};
_309.prototype.UID=function(){
return this._UID;
};
_309.prototype.isComplete=function(){
return this._isComplete;
};
_309.prototype.result=function(){
return this._result;
};
_309.prototype.addEventListener=function(_32b,_32c){
this._eventDispatcher.addEventListener(_32b,_32c);
};
_309.prototype.removeEventListener=function(_32d,_32e){
this._eventDispatcher.removeEventListener(_32d,_32e);
};
var _32f=1,_330=2,_331=4,_332=8;
objj_ivar=function(_333,_334){
this.name=_333;
this.type=_334;
};
objj_method=function(_335,_336,_337){
this.name=_335;
this.method_imp=_336;
this.types=_337;
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
class_getName=function(_338){
if(_338==Nil){
return "";
}
return _338.name;
};
class_isMetaClass=function(_339){
if(!_339){
return NO;
}
return ((_339.info&(_330)));
};
class_getSuperclass=function(_33a){
if(_33a==Nil){
return Nil;
}
return _33a.super_class;
};
class_setSuperclass=function(_33b,_33c){
_33b.super_class=_33c;
_33b.isa.super_class=_33c.isa;
};
class_addIvar=function(_33d,_33e,_33f){
var _340=_33d.allocator.prototype;
if(typeof _340[_33e]!="undefined"){
return NO;
}
_33d.ivars.push(new objj_ivar(_33e,_33f));
_340[_33e]=NULL;
return YES;
};
class_addIvars=function(_341,_342){
var _343=0,_344=_342.length,_345=_341.allocator.prototype;
for(;_343<_344;++_343){
var ivar=_342[_343],name=ivar.name;
if(typeof _345[name]==="undefined"){
_341.ivars.push(ivar);
_345[name]=NULL;
}
}
};
class_copyIvarList=function(_346){
return _346.ivars.slice(0);
};
class_addMethod=function(_347,_348,_349,_34a){
if(_347.method_hash[_348]){
return NO;
}
var _34b=new objj_method(_348,_349,_34a);
_347.method_list.push(_34b);
_347.method_dtable[_348]=_34b;
_34b.method_imp.displayName=(((_347.info&(_330)))?"+":"-")+" ["+class_getName(_347)+" "+method_getName(_34b)+"]";
if(!((_347.info&(_330)))&&(((_347.info&(_330)))?_347:_347.isa).isa===(((_347.info&(_330)))?_347:_347.isa)){
class_addMethod((((_347.info&(_330)))?_347:_347.isa),_348,_349,_34a);
}
return YES;
};
class_addMethods=function(_34c,_34d){
var _34e=0,_34f=_34d.length,_350=_34c.method_list,_351=_34c.method_dtable;
for(;_34e<_34f;++_34e){
var _352=_34d[_34e];
if(_34c.method_hash[_352.name]){
continue;
}
_350.push(_352);
_351[_352.name]=_352;
_352.method_imp.displayName=(((_34c.info&(_330)))?"+":"-")+" ["+class_getName(_34c)+" "+method_getName(_352)+"]";
}
if(!((_34c.info&(_330)))&&(((_34c.info&(_330)))?_34c:_34c.isa).isa===(((_34c.info&(_330)))?_34c:_34c.isa)){
class_addMethods((((_34c.info&(_330)))?_34c:_34c.isa),_34d);
}
};
class_getInstanceMethod=function(_353,_354){
if(!_353||!_354){
return NULL;
}
var _355=_353.method_dtable[_354];
return _355?_355:NULL;
};
class_getClassMethod=function(_356,_357){
if(!_356||!_357){
return NULL;
}
var _358=(((_356.info&(_330)))?_356:_356.isa).method_dtable[_357];
return _358?_358:NULL;
};
class_copyMethodList=function(_359){
return _359.method_list.slice(0);
};
class_replaceMethod=function(_35a,_35b,_35c){
if(!_35a||!_35b){
return NULL;
}
var _35d=_35a.method_dtable[_35b],_35e=NULL;
if(_35d){
_35e=_35d.method_imp;
}
_35d.method_imp=_35c;
return _35e;
};
var _35f=function(_360){
var meta=(((_360.info&(_330)))?_360:_360.isa);
if((_360.info&(_330))){
_360=objj_getClass(_360.name);
}
if(_360.super_class&&!((((_360.super_class.info&(_330)))?_360.super_class:_360.super_class.isa).info&(_331))){
_35f(_360.super_class);
}
if(!(meta.info&(_331))&&!(meta.info&(_332))){
meta.info=(meta.info|(_332))&~(0);
objj_msgSend(_360,"initialize");
meta.info=(meta.info|(_331))&~(_332);
}
};
var _361=new objj_method("forward",function(self,_362){
return objj_msgSend(self,"forward::",_362,arguments);
});
class_getMethodImplementation=function(_363,_364){
if(!((((_363.info&(_330)))?_363:_363.isa).info&(_331))){
_35f(_363);
}
var _365=_363.method_dtable[_364];
if(!_365){
_365=_361;
}
var _366=_365.method_imp;
return _366;
};
var _367={};
objj_allocateClassPair=function(_368,_369){
var _36a=new objj_class(),_36b=new objj_class(),_36c=_36a;
if(_368){
_36c=_368;
while(_36c.superclass){
_36c=_36c.superclass;
}
_36a.allocator.prototype=new _368.allocator;
_36a.method_store.prototype=new _368.method_store;
_36a.method_dtable=_36a.method_store.prototype;
_36b.method_store.prototype=new _368.isa.method_store;
_36b.method_dtable=_36b.method_store.prototype;
_36a.super_class=_368;
_36b.super_class=_368.isa;
}else{
_36a.allocator.prototype=new objj_object();
}
_36a.isa=_36b;
_36a.name=_369;
_36a.info=_32f;
_36a._UID=objj_generateObjectUID();
_36b.isa=_36c.isa;
_36b.name=_369;
_36b.info=_330;
_36b._UID=objj_generateObjectUID();
return _36a;
};
var _2e3=nil;
objj_registerClassPair=function(_36d){
_1[_36d.name]=_36d;
_367[_36d.name]=_36d;
_1c3(_36d,_2e3);
};
class_createInstance=function(_36e){
if(!_36e){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _36f=new _36e.allocator();
_36f.isa=_36e;
_36f._UID=objj_generateObjectUID();
return _36f;
};
var _370=function(){
};
_370.prototype.member=false;
with(new _370()){
member=true;
}
if(new _370().member){
var _371=class_createInstance;
class_createInstance=function(_372){
var _373=_371(_372);
if(_373){
var _374=_373.isa,_375=_374;
while(_374){
var _376=_374.ivars;
count=_376.length;
while(count--){
_373[_376[count].name]=NULL;
}
_374=_374.super_class;
}
_373.isa=_375;
}
return _373;
};
}
object_getClassName=function(_377){
if(!_377){
return "";
}
var _378=_377.isa;
return _378?class_getName(_378):"";
};
objj_lookUpClass=function(_379){
var _37a=_367[_379];
return _37a?_37a:Nil;
};
objj_getClass=function(_37b){
var _37c=_367[_37b];
if(!_37c){
}
return _37c?_37c:Nil;
};
objj_getMetaClass=function(_37d){
var _37e=objj_getClass(_37d);
return (((_37e.info&(_330)))?_37e:_37e.isa);
};
ivar_getName=function(_37f){
return _37f.name;
};
ivar_getTypeEncoding=function(_380){
return _380.type;
};
objj_msgSend=function(_381,_382){
if(_381==nil){
return nil;
}
if(!((((_381.isa.info&(_330)))?_381.isa:_381.isa.isa).info&(_331))){
_35f(_381.isa);
}
var _383=_381.isa.method_dtable[_382];
if(!_383){
_383=_361;
}
var _384=_383.method_imp;
switch(arguments.length){
case 2:
return _384(_381,_382);
case 3:
return _384(_381,_382,arguments[2]);
case 4:
return _384(_381,_382,arguments[2],arguments[3]);
}
return _384.apply(_381,arguments);
};
objj_msgSendSuper=function(_385,_386){
var _387=_385.super_class;
arguments[0]=_385.receiver;
if(!((((_387.info&(_330)))?_387:_387.isa).info&(_331))){
_35f(_387);
}
var _388=_387.method_dtable[_386];
if(!_388){
_388=_361;
}
var _389=_388.method_imp;
return _389.apply(_385.receiver,arguments);
};
method_getName=function(_38a){
return _38a.name;
};
method_getImplementation=function(_38b){
return _38b.method_imp;
};
method_setImplementation=function(_38c,_38d){
var _38e=_38c.method_imp;
_38c.method_imp=_38d;
return _38e;
};
method_exchangeImplementations=function(lhs,rhs){
var _38f=method_getImplementation(lhs),_390=method_getImplementation(rhs);
method_setImplementation(lhs,_390);
method_setImplementation(rhs,_38f);
};
sel_getName=function(_391){
return _391?_391:"<null selector>";
};
sel_getUid=function(_392){
return _392;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_393){
return _393;
};
_165();
var _394=new CFURL(window.location.href),_395=document.getElementsByTagName("base"),_396=_395.length;
if(_396>0){
var _397=_395[_396-1],_398=_397&&_397.getAttribute("href");
if(_398){
_394=new CFURL(_398,_394);
}
}
var _399=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1c2=new CFURL(".",new CFURL(_399,_394)).absoluteURL(),_39a=new CFURL("..",_1c2).absoluteURL();
if(_1c2===_39a){
_39a=new CFURL(_39a.schemeAndAuthority());
}
_1ab.resourceAtURL(_39a,YES);
_2.bootstrap=function(){
_39b();
};
function _39b(){
_1ab.resolveResourceAtURL(_1c2,YES,function(_39c){
var _39d=_1ab.includeURLs(),_b4=0,_39e=_39d.length;
for(;_b4<_39e;++_b4){
_39c.resourceAtURL(_39d[_b4],YES);
}
_28f.fileImporterForURL(_1c2)(_399.lastPathComponent(),YES,function(){
_166();
_39f(main);
});
});
};
var _3a0=NO;
function _39f(_3a1){
if(_3a0){
return _3a1();
}
if(window.addEventListener){
window.addEventListener("load",_3a1,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_3a1);
}
}
};
_39f(function(){
_3a0=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1be(aURL){
return new CFURL(aURL,_1c2);
};
objj_importFile=_28f.fileImporterForURL(_1c2);
objj_executeFile=_28f.fileExecuterForURL(_1c2);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
