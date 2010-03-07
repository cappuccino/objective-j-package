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
if(this._absoluteString===_44){
this._absoluteString=this.absoluteURL().string();
}
return this._absoluteString;
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
_184(_183,YES);
}
_17e.pathComponents=_183;
_17e.path=_185(_183,_181.length<=0||aURL.hasDirectoryPath());
}
}
var _186=_187(_17e),_188=new CFURL(_186);
_188._parts=_17e;
_188._standardizedURL=_188;
_188._standardizedString=_186;
_188._absoluteURL=_188;
_188._absoluteString=_186;
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
function _184(_18b,_18c){
var _18d=0,_18e=0,_18f=_18b.length,_190=_18c?_18b:[];
for(;_18d<_18f;++_18d){
var _191=_18b[_18d];
if(_191===""||_191==="."){
continue;
}
if(_191!==".."||_18e===0||_190[_18e-1]===".."){
_190[_18e]=_191;
_18e++;
continue;
}
if(_18e>0&&_190[_18e-1]!=="/"){
--_18e;
}
}
_190.length=_18e;
return _190;
};
function _187(_192){
var _193="",_194=_192.scheme;
if(_194){
_193+=_194+":";
}
var _195=_192.authority;
if(_195){
_193+="//"+_195;
}
_193+=_192.path;
var _196=_192.queryString;
if(_196){
_193+="?"+_196;
}
var _197=_192.fragment;
if(_197){
_193+="#"+_197;
}
return _193;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_17b(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _198=((this)._parts||_169(this)),_199=_198.pathComponents,_19a=_184(_199,NO);
var _19b=_185(_19a,this.hasDirectoryPath());
if(_198.path===_19b){
this._standardizedURL=this;
}else{
var _19c=_19d(_198);
_19c.pathComponents=_19a;
_19c.path=_19b;
var _19e=new CFURL(_187(_19c),this.baseURL());
_19e._parts=_19c;
_19e._standardizedURL=_19e;
this._standardizedURL=_19e;
}
}
return this._standardizedURL;
};
function _19d(_19f){
var _1a0={},_1a1=_168.length;
while(_1a1--){
var _1a2=_168[_1a1];
_1a0[_1a2]=_19f[_1a2];
}
return _1a0;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _1a3=((this)._parts||_169(this)).authority;
if(_1a3){
return _1a3;
}
var _1a4=this.baseURL();
return _1a4&&_1a4.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _1a5=this._hasDirectoryPath;
if(_1a5===_44){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _1a6=this.lastPathComponent();
_1a5=_1a6==="."||_1a6==="..";
this._hasDirectoryPath=_1a5;
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
if(this._lastPathComponent===_44){
var _1a7=this.pathComponents(),_1a8=_1a7.length;
if(!_1a8){
this._lastPathComponent="";
}else{
this._lastPathComponent=_1a7[_1a8-1];
}
}
return this._lastPathComponent;
};
CFURL.prototype.path=function(){
return ((this)._parts||_169(this)).path;
};
CFURL.prototype.pathComponents=function(){
return ((this)._parts||_169(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _1a9=this.lastPathComponent();
if(!_1a9){
return NULL;
}
_1a9=_1a9.replace(/^\.*/,"");
var _1aa=_1a9.lastIndexOf(".");
return _1aa<=0?"":_1a9.substring(_1aa+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_169(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _1ab=this._scheme;
if(_1ab===_44){
_1ab=((this)._parts||_169(this)).scheme;
if(!_1ab){
var _1ac=this.baseURL();
_1ab=_1ac&&_1ac.scheme();
}
this._scheme=_1ab;
}
return _1ab;
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
function _1ad(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _1ad(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_1ae){
_1ad(this).setValueForKey(aKey,_1ae);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_1af.resourceAtURL(this).contents());
return data;
};
function _11d(_1b0){
this._string=_1b0;
var _1b1=_1b0.indexOf(";");
this._magicNumber=_1b0.substr(0,_1b1);
this._location=_1b0.indexOf(";",++_1b1);
this._version=_1b0.substring(_1b1,this._location++);
};
_11d.prototype.magicNumber=function(){
return this._magicNumber;
};
_11d.prototype.version=function(){
return this._version;
};
_11d.prototype.getMarker=function(){
var _1b2=this._string,_1b3=this._location;
if(_1b3>=_1b2.length){
return null;
}
var next=_1b2.indexOf(";",_1b3);
if(next<0){
return null;
}
var _1b4=_1b2.substring(_1b3,next);
if(_1b4==="e"){
return null;
}
this._location=next+1;
return _1b4;
};
_11d.prototype.getString=function(){
var _1b5=this._string,_1b6=this._location;
if(_1b6>=_1b5.length){
return null;
}
var next=_1b5.indexOf(";",_1b6);
if(next<0){
return null;
}
var size=parseInt(_1b5.substring(_1b6,next)),text=_1b5.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _1b7=0,_1b8=1<<0,_1b9=1<<1,_1ba=1<<2,_1bb=1<<3,_1bc=1<<4;
var _1bd={},_1be={},_1bf=new Date().getTime(),_1c0=0,_1c1=0;
CFBundle=function(aURL){
aURL=_1c2(aURL).asDirectoryPathURL();
var _1c3=aURL.absoluteString(),_1c4=_1bd[_1c3];
if(_1c4){
return _1c4;
}
_1bd[_1c3]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._loadStatus=_1b7;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _94(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1c2(aURL));
while(aURL.path()!=="/"){
var _1c5=_1bd[aURL.absoluteString()];
if(_1c5){
return _1c5;
}
aURL=new CFURL("..",aURL);
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1c6);
};
function _1c7(_1c8,_1c9){
if(_1c9){
_1be[_1c8.name]=_1c9;
}
};
CFBundle.bundleForClass=function(_1ca){
return _1be[_1ca.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1cb,_1cc,_1cd){
if(_1cc){
_1cb=_1cb+"."+_1cc;
}
if(_1cd){
_1cb=_1cd+"/"+_1cb;
}
var _1ce=(new CFURL(_1cb,this.resourcesDirectoryURL())).mappedURL();
return _1ce.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1cf=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1cf){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1cf,this.mostEligibleEnvironmentURL());
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
var _1d0=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_b4=_1d0.length,_1d1=this.mostEligibleEnvironment();
while(_b4--){
if(_1d0[_b4]===_1d1){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1d2){
_1d2=_1d2||this.environments();
var _1d3=CFBundle.environments(),_b4=0,_1d4=_1d3.length,_1d5=_1d2.length;
for(;_b4<_1d4;++_b4){
var _1d6=0,_1d7=_1d3[_b4];
for(;_1d6<_1d5;++_1d6){
if(_1d7===_1d2[_1d6]){
return _1d7;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_1b8;
};
CFBundle.prototype.load=function(_1d8){
if(this._loadStatus!==_1b7){
return;
}
this._loadStatus=_1b8|_1b9;
var self=this,_1d9=this.bundleURL(),_1da=new CFURL("..",_1d9);
if(_1da.absoluteString()===_1d9.absoluteString()){
_1da=_1da.schemeAndAuthority();
}
_1af.resolveResourceAtURL(_1da,YES,function(_1db){
var _1dc=_1d9.absoluteURL().lastPathComponent();
self._staticResource=_1db._children[_1dc]||new _1af(_1d9,_1db,YES,NO);
function _1dd(_1de){
self._loadStatus&=~_1b9;
self._infoDictionary=_1de.request.responsePropertyList();
if(!self._infoDictionary){
_1e0(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1c1=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1e4(self,_1d8);
};
function _1df(){
self._loadStatus=_1b7;
_1e0(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _cb(new CFURL("Info.plist",self.bundleURL()),_1dd,_1df);
});
};
function _1e0(_1e1,_1e2){
_1e3(_1e1._staticResource);
_1e1._eventDispatcher.dispatchEvent({type:"error",error:_1e2,bundle:_1e1});
};
function _1e4(_1e5,_1e6){
if(!_1e5.mostEligibleEnvironment()){
return _1e7();
}
_1e8(_1e5,_1e9,_1e7);
_1ea(_1e5,_1e9,_1e7);
if(_1e5._loadStatus===_1b8){
return _1e9();
}
function _1e7(_1eb){
var _1ec=_1e5._loadRequests,_1ed=_1ec.length;
while(_1ed--){
_1ec[_1ed].abort();
}
this._loadRequests=[];
_1e5._loadStatus=_1b7;
_1e0(_1e5,_1eb||new Error("Could not recognize executable code format in Bundle "+_1e5));
};
function _1e9(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_1c1){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_1c0/_1c1),0),_1c1,_1e5.path());
}
if(_1e5._loadStatus===_1b8){
_1e5._loadStatus=_1bc;
}else{
return;
}
_1e3(_1e5._staticResource);
function _1ee(){
_1e5._eventDispatcher.dispatchEvent({type:"load",bundle:_1e5});
};
if(_1e6){
_1ef(_1e5,_1ee);
}else{
_1ee();
}
};
};
function _1e8(_1f0,_1f1,_1f2){
var _1f3=_1f0.executableURL();
if(!_1f3){
return;
}
_1f0._loadStatus|=_1ba;
new _cb(_1f3,function(_1f4){
try{
_1c0+=_1f4.request.responseText().length;
_1f5(_1f0,_1f4.request.responseText(),_1f3);
_1f0._loadStatus&=~_1ba;
_1f1();
}
catch(anException){
_1f2(anException);
}
},_1f2);
};
function _1f6(_1f7){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1f7.mostEligibleEnvironmentURL());
};
function _1f8(_1f9){
if(_1fa===_1fb){
return new CFURL("dataURLs.txt",_1f9.mostEligibleEnvironmentURL());
}
if(_1fa===_1fc||_1fa===_1fd){
return new CFURL("MHTMLPaths.txt",_1f9.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1ea(_1fe,_1ff,_200){
if(!_1fe.hasSpritedImages()){
return;
}
_1fe._loadStatus|=_1bb;
if(!_201()){
return _202(_1f6(_1fe),function(){
_1ea(_1fe,_1ff,_200);
});
}
var _203=_1f8(_1fe);
if(!_203){
_1fe._loadStatus&=~_1bb;
return _1ff();
}
new _cb(_203,function(_204){
try{
_1c0+=_204.request.responseText().length;
_1f5(_1fe,_204.request.responseText(),_203);
_1fe._loadStatus&=~_1bb;
_1ff();
}
catch(anException){
_200(anException);
}
},_200);
};
var _205=[],_1fa=-1,_206=0,_1fb=1,_1fc=2,_1fd=3;
function _201(){
return _1fa!==-1;
};
function _202(_207,_208){
if(_201()){
return;
}
_205.push(_208);
if(_205.length>1){
return;
}
_205.push(function(){
var size=0,_209=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_209){
return;
}
switch(_1fa){
case _1fb:
size=_209.valueForKey("data");
break;
case _1fc:
case _1fd:
size=_209.valueForKey("mhtml");
break;
}
_1c1+=size;
});
_20a([_1fb,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1fc,_207+"!test",_1fd,_207+"?"+_1bf+"!test"]);
};
function _20b(){
var _20c=_205.length;
while(_20c--){
_205[_20c]();
}
};
function _20a(_20d){
if(_20d.length<2){
_1fa=_206;
_20b();
return;
}
var _20e=new Image();
_20e.onload=function(){
if(_20e.width===1&&_20e.height===1){
_1fa=_20d[0];
_20b();
}else{
_20e.onerror();
}
};
_20e.onerror=function(){
_20a(_20d.slice(2));
};
_20e.src=_20d[1];
};
function _1ef(_20f,_210){
var _211=[_20f._staticResource];
function _212(_213){
for(;_213<_211.length;++_213){
var _214=_211[_213];
if(_214.isNotFound()){
continue;
}
if(_214.isFile()){
var _215=new _31c(_214.URL());
if(_215.hasLoadedFileDependencies()){
_215.execute();
}else{
_215.addEventListener("dependenciesload",function(){
_212(_213);
});
_215.loadFileDependencies();
return;
}
}else{
if(_214.URL().absoluteString()===_20f.resourcesDirectoryURL().absoluteString()){
continue;
}
var _216=_214.children();
for(var name in _216){
if(_99.call(_216,name)){
_211.push(_216[name]);
}
}
}
}
_210();
};
_212(0);
};
var _217="@STATIC",_218="p",_219="u",_21a="c",_21b="t",_21c="I",_21d="i";
function _1f5(_21e,_21f,_220){
var _221=new _11d(_21f);
if(_221.magicNumber()!==_217){
throw new Error("Could not read static file: "+_220);
}
if(_221.version()!=="1.0"){
throw new Error("Could not read static file: "+_220);
}
var _222,_223=_21e.bundleURL(),file=NULL;
while(_222=_221.getMarker()){
var text=_221.getString();
if(_222===_218){
var _224=new CFURL(text,_223),_225=_1af.resourceAtURL(new CFURL(".",_224),YES);
file=new _1af(_224,_225,NO,YES);
}else{
if(_222===_219){
var URL=new CFURL(text,_223),_226=_221.getString();
if(_226.indexOf("mhtml:")===0){
_226="mhtml:"+new CFURL(_226.substr("mhtml:".length),_223);
if(_1fa===_1fd){
var _227=URLString.indexOf("!"),_228=URLString.substring(0,_227),_229=URLString.substring(_227);
_226=_228+"?"+_1bf+_229;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_226));
var _225=_1af.resourceAtURL(new CFURL(".",URL),YES);
new _1af(URL,_225,NO,YES);
}else{
if(_222===_21b){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_22a,_22b){
this._eventDispatcher.addEventListener(_22a,_22b);
};
CFBundle.prototype.removeEventListener=function(_22c,_22d){
this._eventDispatcher.removeEventListener(_22c,_22d);
};
CFBundle.prototype.onerror=function(_22e){
throw _22e.error;
};
CFBundle.prototype.bundlePath=function(){
return this._bundleURL.absoluteURL().path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_22f){
return this.resourceURL(_22f).absoluteString();
};
var _230={};
function _1af(aURL,_231,_232,_233){
this._parent=_231;
this._eventDispatcher=new _94(this);
var name=aURL.absoluteURL().lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_233;
if(_232){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_231){
_230[name]=this;
}
this._isDirectory=!!_232;
this._isNotFound=NO;
if(_231){
_231._children[name]=this;
}
if(_232){
this._children={};
}else{
this._contents="";
}
};
_1af.rootResources=function(){
return _230;
};
_2.StaticResource=_1af;
function _1e3(_234){
_234._isResolved=YES;
_234._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_234});
};
_1af.prototype.resolve=function(){
if(this.isDirectory()){
var _235=new CFBundle(this.URL());
_235.onerror=function(){
};
_235.load(NO);
}else{
var self=this;
function _236(_237){
self._contents=_237.request.responseText();
_1e3(self);
};
function _238(){
self._isNotFound=YES;
_1e3(self);
};
new _cb(this.URL(),_236,_238);
}
};
_1af.prototype.name=function(){
return this._name;
};
_1af.prototype.URL=function(){
return this._URL;
};
_1af.prototype.contents=function(){
return this._contents;
};
_1af.prototype.children=function(){
return this._children;
};
_1af.prototype.parent=function(){
return this._parent;
};
_1af.prototype.isResolved=function(){
return this._isResolved;
};
_1af.prototype.write=function(_239){
this._contents+=_239;
};
function _23a(_23b){
var _23c=_23b.schemeAndAuthority(),_23d=_230[_23c];
if(!_23d){
_23d=new _1af(new CFURL(_23c),NULL,YES,YES);
}
return _23d;
};
_1af.resourceAtURL=function(aURL,_23e){
aURL=_1c2(aURL).absoluteURL();
var _23f=_23a(aURL),_240=aURL.pathComponents(),_b4=0,_241=_240.length;
for(;_b4<_241;++_b4){
var name=_240[_b4];
if(_99.call(_23f._children,name)){
_23f=_23f._children[name];
}else{
if(_23e){
_23f=new _1af(new CFURL(name,_23f.URL()),_23f,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _23f;
};
_1af.prototype.resourceAtURL=function(aURL,_242){
return _1af.resourceAtURL(new CFURL(aURL,this.URL()),_242);
};
_1af.resolveResourceAtURL=function(aURL,_243,_244){
aURL=_1c2(aURL).absoluteURL();
_245(_23a(aURL),_243,aURL.pathComponents(),0,_244);
};
_1af.prototype.resolveResourceAtURL=function(aURL,_246,_247){
_1af.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_246,_247);
};
function _245(_248,_249,_24a,_24b,_24c){
var _24d=_24a.length;
for(;_24b<_24d;++_24b){
var name=_24a[_24b],_24e=_99.call(_248._children,name)&&_248._children[name];
if(!_24e){
_24e=new _1af(new CFURL(name,_248.URL()),_248,_24b+1<_24d||_249,NO);
_24e.resolve();
}
if(!_24e.isResolved()){
return _24e.addEventListener("resolve",function(){
_245(_248,_249,_24a,_24b,_24c);
});
}
if(_24e.isNotFound()){
return _24c(null,new Error("File not found: "+_24a.join("/")));
}
if((_24b+1<_24d)&&_24e.isFile()){
return _24c(null,new Error("File is not a directory: "+_24a.join("/")));
}
_248=_24e;
}
_24c(_248);
};
function _24f(aURL,_250,_251){
var _252=_1af.includeURLs(),_253=new CFURL(aURL,_252[_250]).absoluteURL();
_1af.resolveResourceAtURL(_253,NO,function(_254){
if(!_254){
if(_250+1<_252.length){
_24f(aURL,_250+1,_251);
}else{
_251(NULL);
}
return;
}
_251(_254);
});
};
_1af.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_255){
_24f(aURL,0,_255);
};
_1af.prototype.addEventListener=function(_256,_257){
this._eventDispatcher.addEventListener(_256,_257);
};
_1af.prototype.removeEventListener=function(_258,_259){
this._eventDispatcher.removeEventListener(_258,_259);
};
_1af.prototype.isNotFound=function(){
return this._isNotFound;
};
_1af.prototype.isFile=function(){
return !this._isDirectory;
};
_1af.prototype.isDirectory=function(){
return this._isDirectory;
};
_1af.prototype.toString=function(_25a){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _25b=this.name();
if(this.isDirectory()){
var _25c=this._children;
for(var name in _25c){
if(_25c.hasOwnProperty(name)){
var _25d=_25c[name];
if(_25a||!_25d.isNotFound()){
_25b+="\n\t"+_25c[name].toString(_25a).split("\n").join("\n\t");
}
}
}
}
return _25b;
};
var _25e=NULL;
_1af.includeURLs=function(){
if(_25f){
return _25f;
}
var _25f=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_25f=["Frameworks","Frameworks/Debug"];
}else{
_25f=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _260=_25f.length;
while(_260--){
_25f[_260]=new CFURL(_25f[_260]).asDirectoryPathURL();
}
return _25f;
};
var _261="accessors",_262="class",_263="end",_264="function",_265="implementation",_266="import",_267="each",_268="outlet",_269="action",_26a="new",_26b="selector",_26c="super",_26d="var",_26e="in",_26f="=",_270="+",_271="-",_272=":",_273=",",_274=".",_275="*",_276=";",_277="<",_278="{",_279="}",_27a=">",_27b="[",_27c="\"",_27d="@",_27e="]",_27f="?",_280="(",_281=")",_282=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_283=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_284=/^[a-zA-Z_$](\w|$)*$/;
function _285(_286){
this._index=-1;
this._tokens=(_286+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_285.prototype.push=function(){
this._context.push(this._index);
};
_285.prototype.pop=function(){
this._index=this._context.pop();
};
_285.prototype.peak=function(_287){
if(_287){
this.push();
var _288=this.skip_whitespace();
this.pop();
return _288;
}
return this._tokens[this._index+1];
};
_285.prototype.next=function(){
return this._tokens[++this._index];
};
_285.prototype.previous=function(){
return this._tokens[--this._index];
};
_285.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_285.prototype.skip_whitespace=function(_289){
var _28a;
if(_289){
while((_28a=this.previous())&&_282.test(_28a)){
}
}else{
while((_28a=this.next())&&_282.test(_28a)){
}
}
return _28a;
};
_2.Lexer=_285;
function _28b(){
this.atoms=[];
};
_28b.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_28c,aURL,_28d){
return new _28e(_28c,aURL,_28d).executable();
};
_2.eval=function(_28f){
return eval(_2.preprocess(_28f).code());
};
var _28e=function(_290,aURL,_291){
this._URL=new CFURL(aURL);
_290=_290.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _28b();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _285(_290);
this._flags=_291;
this._classMethod=false;
this._executable=NULL;
this.preprocess(this._tokens,this._buffer);
};
_2.Preprocessor=_28e;
_28e.Flags={};
_28e.Flags.IncludeDebugSymbols=1<<0;
_28e.Flags.IncludeTypeSignatures=1<<1;
_28e.prototype.executable=function(){
if(!this._executable){
this._executable=new _292(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_28e.prototype.accessors=function(_293){
var _294=_293.skip_whitespace(),_295={};
if(_294!=_280){
_293.previous();
return _295;
}
while((_294=_293.skip_whitespace())!=_281){
var name=_294,_296=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_294=_293.skip_whitespace())==_26f){
_296=_293.skip_whitespace();
if(!/^\w+$/.test(_296)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_294=_293.next())!=_272){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_296+=":";
}
_294=_293.skip_whitespace();
}
_295[name]=_296;
if(_294==_281){
break;
}
if(_294!=_273){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _295;
};
_28e.prototype.brackets=function(_297,_298){
var _299=[];
while(this.preprocess(_297,NULL,NULL,NULL,_299[_299.length]=[])){
}
if(_299[0].length===1){
_298.atoms[_298.atoms.length]="[";
_298.atoms[_298.atoms.length]=_299[0][0];
_298.atoms[_298.atoms.length]="]";
}else{
var _29a=new _28b();
if(_299[0][0].atoms[0]==_26c){
_298.atoms[_298.atoms.length]="objj_msgSendSuper(";
_298.atoms[_298.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_298.atoms[_298.atoms.length]="objj_msgSend(";
_298.atoms[_298.atoms.length]=_299[0][0];
}
_29a.atoms[_29a.atoms.length]=_299[0][1];
var _29b=1,_29c=_299.length,_29d=new _28b();
for(;_29b<_29c;++_29b){
var pair=_299[_29b];
_29a.atoms[_29a.atoms.length]=pair[1];
_29d.atoms[_29d.atoms.length]=", "+pair[0];
}
_298.atoms[_298.atoms.length]=", \"";
_298.atoms[_298.atoms.length]=_29a;
_298.atoms[_298.atoms.length]="\"";
_298.atoms[_298.atoms.length]=_29d;
_298.atoms[_298.atoms.length]=")";
}
};
_28e.prototype.directive=function(_29e,_29f,_2a0){
var _2a1=_29f?_29f:new _28b(),_2a2=_29e.next();
if(_2a2.charAt(0)==_27c){
_2a1.atoms[_2a1.atoms.length]=_2a2;
}else{
if(_2a2===_262){
_29e.skip_whitespace();
return;
}else{
if(_2a2===_265){
this.implementation(_29e,_2a1);
}else{
if(_2a2===_266){
this._import(_29e);
}else{
if(_2a2===_26b){
this.selector(_29e,_2a1);
}
}
}
}
}
if(!_29f){
return _2a1;
}
};
_28e.prototype.implementation=function(_2a3,_2a4){
var _2a5=_2a4,_2a6="",_2a7=NO,_2a8=_2a3.skip_whitespace(),_2a9="Nil",_2aa=new _28b(),_2ab=new _28b();
if(!(/^\w/).test(_2a8)){
throw new Error(this.error_message("*** Expected class name, found \""+_2a8+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_2a8+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_2a8+"\").super_class";
this._currentClass=_2a8;
this._currentSelector="";
if((_2a6=_2a3.skip_whitespace())==_280){
_2a6=_2a3.skip_whitespace();
if(_2a6==_281){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_2a8+"\"."));
}
if(_2a3.skip_whitespace()!=_281){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_2a8+"\"."));
}
_2a5.atoms[_2a5.atoms.length]="{\nvar the_class = objj_getClass(\""+_2a8+"\")\n";
_2a5.atoms[_2a5.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_2a8+"\\\"\");\n";
_2a5.atoms[_2a5.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_2a6==_272){
_2a6=_2a3.skip_whitespace();
if(!_284.test(_2a6)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_2a6+"\"."));
}
_2a9=_2a6;
_2a6=_2a3.skip_whitespace();
}
_2a5.atoms[_2a5.atoms.length]="{var the_class = objj_allocateClassPair("+_2a9+", \""+_2a8+"\"),\nmeta_class = the_class.isa;";
if(_2a6==_278){
var _2ac=0,_2ad=[],_2ae,_2af={};
while((_2a6=_2a3.skip_whitespace())&&_2a6!=_279){
if(_2a6===_27d){
_2a6=_2a3.next();
if(_2a6===_261){
_2ae=this.accessors(_2a3);
}else{
if(_2a6!==_268){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_2a6+"')."));
}
}
}else{
if(_2a6==_276){
if(_2ac++==0){
_2a5.atoms[_2a5.atoms.length]="class_addIvars(the_class, [";
}else{
_2a5.atoms[_2a5.atoms.length]=", ";
}
var name=_2ad[_2ad.length-1];
_2a5.atoms[_2a5.atoms.length]="new objj_ivar(\""+name+"\")";
_2ad=[];
if(_2ae){
_2af[name]=_2ae;
_2ae=NULL;
}
}else{
_2ad.push(_2a6);
}
}
}
if(_2ad.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_2ac){
_2a5.atoms[_2a5.atoms.length]="]);\n";
}
if(!_2a6){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
for(ivar_name in _2af){
var _2b0=_2af[ivar_name],_2b1=_2b0["property"]||ivar_name;
var _2b2=_2b0["getter"]||_2b1,_2b3="(id)"+_2b2+"\n{\nreturn "+ivar_name+";\n}";
if(_2aa.atoms.length!==0){
_2aa.atoms[_2aa.atoms.length]=",\n";
}
_2aa.atoms[_2aa.atoms.length]=this.method(new _285(_2b3));
if(_2b0["readonly"]){
continue;
}
var _2b4=_2b0["setter"];
if(!_2b4){
var _2b5=_2b1.charAt(0)=="_"?1:0;
_2b4=(_2b5?"_":"")+"set"+_2b1.substr(_2b5,1).toUpperCase()+_2b1.substring(_2b5+1)+":";
}
var _2b6="(void)"+_2b4+"(id)newValue\n{\n";
if(_2b0["copy"]){
_2b6+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_2b6+=ivar_name+" = newValue;\n}";
}
if(_2aa.atoms.length!==0){
_2aa.atoms[_2aa.atoms.length]=",\n";
}
_2aa.atoms[_2aa.atoms.length]=this.method(new _285(_2b6));
}
}else{
_2a3.previous();
}
_2a5.atoms[_2a5.atoms.length]="objj_registerClassPair(the_class);\n";
}
while((_2a6=_2a3.skip_whitespace())){
if(_2a6==_270){
this._classMethod=true;
if(_2ab.atoms.length!==0){
_2ab.atoms[_2ab.atoms.length]=", ";
}
_2ab.atoms[_2ab.atoms.length]=this.method(_2a3);
}else{
if(_2a6==_271){
this._classMethod=false;
if(_2aa.atoms.length!==0){
_2aa.atoms[_2aa.atoms.length]=", ";
}
_2aa.atoms[_2aa.atoms.length]=this.method(_2a3);
}else{
if(_2a6==_27d){
if((_2a6=_2a3.next())==_263){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_2a6+"\"."));
}
}
}
}
}
if(_2aa.atoms.length!==0){
_2a5.atoms[_2a5.atoms.length]="class_addMethods(the_class, [";
_2a5.atoms[_2a5.atoms.length]=_2aa;
_2a5.atoms[_2a5.atoms.length]="]);\n";
}
if(_2ab.atoms.length!==0){
_2a5.atoms[_2a5.atoms.length]="class_addMethods(meta_class, [";
_2a5.atoms[_2a5.atoms.length]=_2ab;
_2a5.atoms[_2a5.atoms.length]="]);\n";
}
_2a5.atoms[_2a5.atoms.length]="}";
this._currentClass="";
};
_28e.prototype._import=function(_2b7){
var _2b8="",_2b9=_2b7.skip_whitespace(),_2ba=(_2b9!==_277);
if(_2b9===_277){
while((_2b9=_2b7.next())&&_2b9!==_27a){
_2b8+=_2b9;
}
if(!_2b9){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_2b9.charAt(0)===_27c){
_2b8=_2b9.substr(1,_2b9.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_2b9+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_2b8;
this._buffer.atoms[this._buffer.atoms.length]=_2ba?"\", YES);":"\", NO);";
this._dependencies.push(new _2bb(new CFURL(_2b8),_2ba));
};
_28e.prototype.method=function(_2bc){
var _2bd=new _28b(),_2be,_2bf="",_2c0=[],_2c1=[null];
while((_2be=_2bc.skip_whitespace())&&_2be!=_278){
if(_2be==_272){
var type="";
_2bf+=_2be;
_2be=_2bc.skip_whitespace();
if(_2be==_280){
while((_2be=_2bc.skip_whitespace())&&_2be!=_281){
type+=_2be;
}
_2be=_2bc.skip_whitespace();
}
_2c1[_2c0.length+1]=type||null;
_2c0[_2c0.length]=_2be;
}else{
if(_2be==_280){
var type="";
while((_2be=_2bc.skip_whitespace())&&_2be!=_281){
type+=_2be;
}
_2c1[0]=type||null;
}else{
if(_2be==_273){
if((_2be=_2bc.skip_whitespace())!=_274||_2bc.next()!=_274||_2bc.next()!=_274){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_2bf+=_2be;
}
}
}
}
var _2c2=0,_2c3=_2c0.length;
_2bd.atoms[_2bd.atoms.length]="new objj_method(sel_getUid(\"";
_2bd.atoms[_2bd.atoms.length]=_2bf;
_2bd.atoms[_2bd.atoms.length]="\"), function";
this._currentSelector=_2bf;
if(this._flags&_28e.Flags.IncludeDebugSymbols){
_2bd.atoms[_2bd.atoms.length]=" $"+this._currentClass+"__"+_2bf.replace(/:/g,"_");
}
_2bd.atoms[_2bd.atoms.length]="(self, _cmd";
for(;_2c2<_2c3;++_2c2){
_2bd.atoms[_2bd.atoms.length]=", ";
_2bd.atoms[_2bd.atoms.length]=_2c0[_2c2];
}
_2bd.atoms[_2bd.atoms.length]=")\n{ with(self)\n{";
_2bd.atoms[_2bd.atoms.length]=this.preprocess(_2bc,NULL,_279,_278);
_2bd.atoms[_2bd.atoms.length]="}\n}";
if(this._flags&_28e.Flags.IncludeDebugSymbols){
_2bd.atoms[_2bd.atoms.length]=","+JSON.stringify(_2c1);
}
_2bd.atoms[_2bd.atoms.length]=")";
this._currentSelector="";
return _2bd;
};
_28e.prototype.preprocess=function(_2c4,_2c5,_2c6,_2c7,_2c8){
var _2c9=_2c5?_2c5:new _28b(),_2ca=0,_2cb="";
if(_2c8){
_2c8[0]=_2c9;
var _2cc=false,_2cd=[0,0,0];
}
while((_2cb=_2c4.next())&&((_2cb!==_2c6)||_2ca)){
if(_2c8){
if(_2cb===_27f){
++_2cd[2];
}else{
if(_2cb===_278){
++_2cd[0];
}else{
if(_2cb===_279){
--_2cd[0];
}else{
if(_2cb===_280){
++_2cd[1];
}else{
if(_2cb===_281){
--_2cd[1];
}else{
if((_2cb===_272&&_2cd[2]--===0||(_2cc=(_2cb===_27e)))&&_2cd[0]===0&&_2cd[1]===0){
_2c4.push();
var _2ce=_2cc?_2c4.skip_whitespace(true):_2c4.previous(),_2cf=_282.test(_2ce);
if(_2cf||_284.test(_2ce)&&_282.test(_2c4.previous())){
_2c4.push();
var last=_2c4.skip_whitespace(true),_2d0=true,_2d1=false;
if(last==="+"||last==="-"){
if(_2c4.previous()!==last){
_2d0=false;
}else{
last=_2c4.skip_whitespace(true);
_2d1=true;
}
}
_2c4.pop();
_2c4.pop();
if(_2d0&&((!_2d1&&(last===_279))||last===_281||last===_27e||last===_274||_283.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_284.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2cf){
_2c8[1]=":";
}else{
_2c8[1]=_2ce;
if(!_2cc){
_2c8[1]+=":";
}
var _2ca=_2c9.atoms.length;
while(_2c9.atoms[_2ca--]!==_2ce){
}
_2c9.atoms.length=_2ca;
}
return !_2cc;
}
if(_2cc){
return NO;
}
}
_2c4.pop();
if(_2cc){
return NO;
}
}
}
}
}
}
}
_2cd[2]=MAX(_2cd[2],0);
}
if(_2c7){
if(_2cb===_2c7){
++_2ca;
}else{
if(_2cb===_2c6){
--_2ca;
}
}
}
if(_2cb===_264){
var _2d2="";
while((_2cb=_2c4.next())&&_2cb!==_280&&!(/^\w/).test(_2cb)){
_2d2+=_2cb;
}
if(_2cb===_280){
if(_2c7===_280){
++_2ca;
}
_2c9.atoms[_2c9.atoms.length]="function"+_2d2+"(";
if(_2c8){
++_2cd[1];
}
}else{
_2c9.atoms[_2c9.atoms.length]=_2cb+"= function";
}
}else{
if(_2cb==_27d){
this.directive(_2c4,_2c9);
}else{
if(_2cb==_27b){
this.brackets(_2c4,_2c9);
}else{
_2c9.atoms[_2c9.atoms.length]=_2cb;
}
}
}
}
if(_2c8){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2c5){
return _2c9;
}
};
_28e.prototype.selector=function(_2d3,_2d4){
var _2d5=_2d4?_2d4:new _28b();
_2d5.atoms[_2d5.atoms.length]="sel_getUid(\"";
if(_2d3.skip_whitespace()!=_280){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2d6=_2d3.skip_whitespace();
if(_2d6==_281){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2d4.atoms[_2d4.atoms.length]=_2d6;
var _2d7,_2d8=true;
while((_2d7=_2d3.next())&&_2d7!=_281){
if(_2d8&&/^\d+$/.test(_2d7)||!(/^(\w|$|\:)/.test(_2d7))){
if(!(/\S/).test(_2d7)){
if(_2d3.skip_whitespace()==_281){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2d7+"' in @selector()."));
}
}
_2d5.atoms[_2d5.atoms.length]=_2d7;
_2d8=(_2d7==_272);
}
_2d5.atoms[_2d5.atoms.length]="\")";
if(!_2d4){
return _2d5;
}
};
_28e.prototype.error_message=function(_2d9){
return _2d9+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _2bb(aURL,_2da){
this._URL=aURL;
this._isLocal=_2da;
};
_2.FileDependency=_2bb;
_2bb.prototype.URL=function(){
return this._URL;
};
_2bb.prototype.isLocal=function(){
return this._isLocal;
};
_2bb.prototype.toMarkedString=function(){
var _2db=this.URL().absoluteString();
return (this.isLocal()?_21d:_21c)+";"+_2db.length+";"+_2db;
};
_2bb.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2dc=0,_2dd=1,_2de=2,_2df=0;
function _292(_2e0,_2e1,aURL,_2e2){
if(arguments.length===0){
return this;
}
this._code=_2e0;
this._function=_2e2||NULL;
this._URL=_1c2(aURL||new CFURL("(Anonymous"+(_2df++)+")"));
this._fileDependencies=_2e1;
if(_2e1.length){
this._fileDependencyStatus=_2dc;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_2de;
}
if(this._function){
return;
}
this.setCode(_2e0);
};
_2.Executable=_292;
_292.prototype.path=function(){
return this.URL().path();
};
_292.prototype.URL=function(){
return this._URL;
};
_292.prototype.functionParameters=function(){
var _2e3=["global","objj_executeFile","objj_importFile"];
return _2e3;
};
_292.prototype.functionArguments=function(){
var _2e4=[_1,this.fileExecuter(),this.fileImporter()];
return _2e4;
};
_292.prototype.execute=function(){
var _2e5=_2e6;
_2e6=CFBundle.bundleContainingURL(this.URL());
var _2e7=this._function.apply(_1,this.functionArguments());
_2e6=_2e5;
return _2e7;
};
_292.prototype.code=function(){
return this._code;
};
_292.prototype.setCode=function(code){
this._code=code;
var _2e8=this.functionParameters().join(",");
this._function=new Function(_2e8,code);
};
_292.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_292.prototype.scope=function(){
return this._scope;
};
_292.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_2de;
};
var _2e9=0,_2ea=[],_2eb={};
_292.prototype.loadFileDependencies=function(_2ec){
var _2ed=this._fileDependencyStatus;
if(_2ed===_2de){
return _2ec();
}
this._fileDependencyCallbacks.push(_2ec);
if(_2ed===_2dc){
if(_2e9){
throw "Can't load";
}
_2ee(this);
}
};
function _2ee(_2ef){
_2ea.push(_2ef);
_2ef._fileDependencyStatus=_2dd;
var _2f0=_2ef.fileDependencies(),_b4=0,_2f1=_2f0.length,_2f2=_2ef.referenceURL(),_2f3=_2f2.absoluteString(),_2f4=_2ef.fileExecutableSearcher();
_2e9+=_2f1;
for(;_b4<_2f1;++_b4){
var _2f5=_2f0[_b4],_2f6=_2f5.isLocal(),URL=_2f5.URL(),_2f7=(_2f6&&(_2f3+" ")||"")+URL;
if(_2eb[_2f7]){
if(--_2e9===0){
_2f8();
}
continue;
}
_2eb[_2f7]=YES;
_2f4(URL,_2f6,_2f9);
}
};
function _2f9(_2fa){
--_2e9;
if(_2fa._fileDependencyStatus===_2dc){
_2ee(_2fa);
}else{
if(_2e9===0){
_2f8();
}
}
};
function _2f8(){
var _2fb=0,_2fc=_2ea.length;
for(;_2fb<_2fc;++_2fb){
_2ea[_2fb]._fileDependencyStatus=_2de;
}
for(_2fb=0;_2fb<_2fc;++_2fb){
var _2fd=_2ea[_2fb],_2fe=_2fd._fileDependencyCallbacks,_2ff=0,_300=_2fe.length;
for(;_2ff<_300;++_2ff){
_2fe[_2ff]();
}
_2fd._fileDependencyCallbacks=[];
}
};
_292.prototype.referenceURL=function(){
if(this._referenceURL===_44){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_292.prototype.fileImporter=function(){
return _292.fileImporterForURL(this.referenceURL());
};
_292.prototype.fileExecuter=function(){
return _292.fileExecuterForURL(this.referenceURL());
};
_292.prototype.fileExecutableSearcher=function(){
return _292.fileExecutableSearcherForURL(this.referenceURL());
};
var _301={};
_292.fileExecuterForURL=function(aURL){
var _302=_1c2(aURL),_303=_302.absoluteString(),_304=_301[_303];
if(!_304){
_304=function(aURL,_305,_306){
_292.fileExecutableSearcherForURL(_302)(aURL,_305,function(_307){
if(!_307.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_307.execute(_306);
});
};
_301[_303]=_304;
}
return _304;
};
var _308={};
_292.fileImporterForURL=function(aURL){
var _309=_1c2(aURL),_30a=_309.absoluteString(),_30b=_308[_30a];
if(!_30b){
_30b=function(aURL,_30c,_30d){
_165();
_292.fileExecutableSearcherForURL(_309)(aURL,_30c,function(_30e){
_30e.loadFileDependencies(function(){
_30e.execute();
_166();
if(_30d){
_30d();
}
});
});
};
_308[_30a]=_30b;
}
return _30b;
};
var _30f={},_310={};
_292.fileExecutableSearcherForURL=function(_311){
var _312=_311.absoluteString(),_313=_30f[_312],_314={};
if(!_313){
_313=function(aURL,_315,_316){
var _317=(_315&&_311||"")+aURL,_318=_310[_317];
if(_318){
return _319(_318);
}
var _31a=(aURL instanceof CFURL)&&aURL.scheme();
if(_315||_31a){
if(!_31a){
aURL=new CFURL(aURL,_311);
}
_1af.resolveResourceAtURL(aURL,NO,_319);
}else{
_1af.resolveResourceAtURLSearchingIncludeURLs(aURL,_319);
}
function _319(_31b){
if(!_31b){
throw new Error("Could not load file at "+aURL);
}
_310[_317]=_31b;
_316(new _31c(_31b.URL()));
};
};
_30f[_312]=_313;
}
return _313;
};
var _31d={};
function _31c(aURL,_31e){
aURL=_1c2(aURL);
var _31f=aURL.absoluteString(),_320=_31d[_31f];
if(_320){
return _320;
}
_31d[_31f]=this;
var _321=_1af.resourceAtURL(aURL).contents(),_322=NULL,_323=aURL.pathExtension();
if(_31e){
_322=_31e;
}else{
if(_321.match(/^@STATIC;/)){
_322=_324(_321,aURL);
}else{
if(_323==="j"||!_323){
_322=_2.preprocess(_321,aURL,_28e.Flags.IncludeDebugSymbols);
}else{
_322=new _292(_321,[],aURL);
}
}
}
_292.apply(this,[_322.code(),_322.fileDependencies(),aURL,_322._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_31c;
_31c.prototype=new _292();
_31c.prototype.execute=function(_325){
if(this._hasExecuted&&!_325){
return;
}
this._hasExecuted=YES;
_292.prototype.execute.call(this);
};
_31c.prototype.URL=function(){
return this._URL;
};
_31c.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _324(_326,aURL){
var _327=new _11d(_326);
var _328=NULL,code="",_329=[];
while(_328=_327.getMarker()){
var text=_327.getString();
if(_328===_21b){
code+=text;
}else{
if(_328===_21c){
_329.push(new _2bb(new CFURL(text),NO));
}else{
if(_328===_21d){
_329.push(new _2bb(new CFURL(text),YES));
}
}
}
}
return new _292(code,_329,aURL);
};
var _32a=1,_32b=2,_32c=4,_32d=8;
objj_ivar=function(_32e,_32f){
this.name=_32e;
this.type=_32f;
};
objj_method=function(_330,_331,_332){
this.name=_330;
this.method_imp=_331;
this.types=_332;
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
class_getName=function(_333){
if(_333==Nil){
return "";
}
return _333.name;
};
class_isMetaClass=function(_334){
if(!_334){
return NO;
}
return ((_334.info&(_32b)));
};
class_getSuperclass=function(_335){
if(_335==Nil){
return Nil;
}
return _335.super_class;
};
class_setSuperclass=function(_336,_337){
_336.super_class=_337;
_336.isa.super_class=_337.isa;
};
class_addIvar=function(_338,_339,_33a){
var _33b=_338.allocator.prototype;
if(typeof _33b[_339]!="undefined"){
return NO;
}
_338.ivars.push(new objj_ivar(_339,_33a));
_33b[_339]=NULL;
return YES;
};
class_addIvars=function(_33c,_33d){
var _33e=0,_33f=_33d.length,_340=_33c.allocator.prototype;
for(;_33e<_33f;++_33e){
var ivar=_33d[_33e],name=ivar.name;
if(typeof _340[name]==="undefined"){
_33c.ivars.push(ivar);
_340[name]=NULL;
}
}
};
class_copyIvarList=function(_341){
return _341.ivars.slice(0);
};
class_addMethod=function(_342,_343,_344,_345){
if(_342.method_hash[_343]){
return NO;
}
var _346=new objj_method(_343,_344,_345);
_342.method_list.push(_346);
_342.method_dtable[_343]=_346;
if(!((_342.info&(_32b)))&&(((_342.info&(_32b)))?_342:_342.isa).isa===(((_342.info&(_32b)))?_342:_342.isa)){
class_addMethod((((_342.info&(_32b)))?_342:_342.isa),_343,_344,_345);
}
return YES;
};
class_addMethods=function(_347,_348){
var _349=0,_34a=_348.length,_34b=_347.method_list,_34c=_347.method_dtable;
for(;_349<_34a;++_349){
var _34d=_348[_349];
if(_347.method_hash[_34d.name]){
continue;
}
_34b.push(_34d);
_34c[_34d.name]=_34d;
}
if(!((_347.info&(_32b)))&&(((_347.info&(_32b)))?_347:_347.isa).isa===(((_347.info&(_32b)))?_347:_347.isa)){
class_addMethods((((_347.info&(_32b)))?_347:_347.isa),_348);
}
};
class_getInstanceMethod=function(_34e,_34f){
if(!_34e||!_34f){
return NULL;
}
var _350=_34e.method_dtable[_34f];
return _350?_350:NULL;
};
class_getClassMethod=function(_351,_352){
if(!_351||!_352){
return NULL;
}
var _353=(((_351.info&(_32b)))?_351:_351.isa).method_dtable[_352];
return _353?_353:NULL;
};
class_copyMethodList=function(_354){
return _354.method_list.slice(0);
};
class_replaceMethod=function(_355,_356,_357){
if(!_355||!_356){
return NULL;
}
var _358=_355.method_dtable[_356],_359=NULL;
if(_358){
_359=_358.method_imp;
}
_358.method_imp=_357;
return _359;
};
var _35a=function(_35b){
var meta=(((_35b.info&(_32b)))?_35b:_35b.isa);
if((_35b.info&(_32b))){
_35b=objj_getClass(_35b.name);
}
if(_35b.super_class&&!((((_35b.super_class.info&(_32b)))?_35b.super_class:_35b.super_class.isa).info&(_32c))){
_35a(_35b.super_class);
}
if(!(meta.info&(_32c))&&!(meta.info&(_32d))){
meta.info=(meta.info|(_32d))&~(0);
objj_msgSend(_35b,"initialize");
meta.info=(meta.info|(_32c))&~(_32d);
}
};
var _35c=new objj_method("forward",function(self,_35d){
return objj_msgSend(self,"forward::",_35d,arguments);
});
class_getMethodImplementation=function(_35e,_35f){
if(!((((_35e.info&(_32b)))?_35e:_35e.isa).info&(_32c))){
_35a(_35e);
}
var _360=_35e.method_dtable[_35f];
if(!_360){
_360=_35c;
}
var _361=_360.method_imp;
return _361;
};
var _362={};
objj_allocateClassPair=function(_363,_364){
var _365=new objj_class(),_366=new objj_class(),_367=_365;
if(_363){
_367=_363;
while(_367.superclass){
_367=_367.superclass;
}
_365.allocator.prototype=new _363.allocator;
_365.method_store.prototype=new _363.method_store;
_365.method_dtable=_365.method_store.prototype;
_366.method_store.prototype=new _363.isa.method_store;
_366.method_dtable=_366.method_store.prototype;
_365.super_class=_363;
_366.super_class=_363.isa;
}else{
_365.allocator.prototype=new objj_object();
}
_365.isa=_366;
_365.name=_364;
_365.info=_32a;
_365._UID=objj_generateObjectUID();
_366.isa=_367.isa;
_366.name=_364;
_366.info=_32b;
_366._UID=objj_generateObjectUID();
return _365;
};
var _2e6=nil;
objj_registerClassPair=function(_368){
_1[_368.name]=_368;
_362[_368.name]=_368;
_1c7(_368,_2e6);
};
class_createInstance=function(_369){
if(!_369){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _36a=new _369.allocator();
_36a.isa=_369;
_36a._UID=objj_generateObjectUID();
return _36a;
};
var _36b=function(){
};
_36b.prototype.member=false;
with(new _36b()){
member=true;
}
if(new _36b().member){
var _36c=class_createInstance;
class_createInstance=function(_36d){
var _36e=_36c(_36d);
if(_36e){
var _36f=_36e.isa,_370=_36f;
while(_36f){
var _371=_36f.ivars;
count=_371.length;
while(count--){
_36e[_371[count].name]=NULL;
}
_36f=_36f.super_class;
}
_36e.isa=_370;
}
return _36e;
};
}
object_getClassName=function(_372){
if(!_372){
return "";
}
var _373=_372.isa;
return _373?class_getName(_373):"";
};
objj_lookUpClass=function(_374){
var _375=_362[_374];
return _375?_375:Nil;
};
objj_getClass=function(_376){
var _377=_362[_376];
if(!_377){
}
return _377?_377:Nil;
};
objj_getMetaClass=function(_378){
var _379=objj_getClass(_378);
return (((_379.info&(_32b)))?_379:_379.isa);
};
ivar_getName=function(_37a){
return _37a.name;
};
ivar_getTypeEncoding=function(_37b){
return _37b.type;
};
objj_msgSend=function(_37c,_37d){
if(_37c==nil){
return nil;
}
var isa=_37c.isa;
if(!((((isa.info&(_32b)))?isa:isa.isa).info&(_32c))){
_35a(isa);
}
var _37e=isa.method_dtable[_37d];
if(!_37e){
_37e=_35c;
}
var _37f=_37e.method_imp;
switch(arguments.length){
case 2:
return _37f(_37c,_37d);
case 3:
return _37f(_37c,_37d,arguments[2]);
case 4:
return _37f(_37c,_37d,arguments[2],arguments[3]);
}
return _37f.apply(_37c,arguments);
};
objj_msgSendSuper=function(_380,_381){
var _382=_380.super_class;
arguments[0]=_380.receiver;
if(!((((_382.info&(_32b)))?_382:_382.isa).info&(_32c))){
_35a(_382);
}
var _383=_382.method_dtable[_381];
if(!_383){
_383=_35c;
}
var _384=_383.method_imp;
return _384.apply(_380.receiver,arguments);
};
method_getName=function(_385){
return _385.name;
};
method_getImplementation=function(_386){
return _386.method_imp;
};
method_setImplementation=function(_387,_388){
var _389=_387.method_imp;
_387.method_imp=_388;
return _389;
};
method_exchangeImplementations=function(lhs,rhs){
var _38a=method_getImplementation(lhs),_38b=method_getImplementation(rhs);
method_setImplementation(lhs,_38b);
method_setImplementation(rhs,_38a);
};
sel_getName=function(_38c){
return _38c?_38c:"<null selector>";
};
sel_getUid=function(_38d){
return _38d;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_38e){
return _38e;
};
_165();
var _38f=new CFURL(window.location.href),_390=document.getElementsByTagName("base"),_391=_390.length;
if(_391>0){
var _392=_390[_391-1],_393=_392&&_392.getAttribute("href");
if(_393){
_38f=new CFURL(_393,_38f);
}
}
var _394=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1c6=new CFURL(".",new CFURL(_394,_38f)).absoluteURL(),_395=new CFURL("..",_1c6).absoluteURL();
if(_1c6===_395){
_395=new CFURL(_395.schemeAndAuthority());
}
_1af.resourceAtURL(_395,YES);
_2.pageURL=_38f;
_2.bootstrap=function(){
_396();
};
function _396(){
_1af.resolveResourceAtURL(_1c6,YES,function(_397){
var _398=_1af.includeURLs(),_b4=0,_399=_398.length;
for(;_b4<_399;++_b4){
_397.resourceAtURL(_398[_b4],YES);
}
_292.fileImporterForURL(_1c6)(_394.lastPathComponent(),YES,function(){
_166();
_39a(main);
});
});
};
var _39b=NO;
function _39a(_39c){
if(_39b){
return _39c();
}
if(window.addEventListener){
window.addEventListener("load",_39c,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_39c);
}
}
};
_39a(function(){
_39b=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1c2(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1c6);
};
objj_importFile=_292.fileImporterForURL(_1c6);
objj_executeFile=_292.fileExecuterForURL(_1c6);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
