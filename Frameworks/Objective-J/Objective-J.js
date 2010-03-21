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
_2.sprintf=function(_1d){
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
var _4d=(typeof _4a[0]=="string"&&_4a.length>1)?_2.sprintf.apply(null,_4a):String(_4a[0]);
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
if(typeof _2.sprintf=="function"){
return _2.sprintf("%4d-%02d-%02d %02d:%02d:%02d.%03d %s%s: %s",now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds(),now.getMilliseconds(),_52,_51,_50);
}else{
return now+" "+_52+_51+": "+_50;
}
};
CPLogConsole=function(_53,_54,_55){
if(typeof console!="undefined"){
var _56=_4f(_53,_54,_55);
var _57={"fatal":"error","error":"error","warn":"warn","info":"info","debug":"debug","trace":"debug"}[_54];
if(_57&&console[_57]){
console[_57](_56);
}else{
if(console.log){
console.log(_56);
}
}
}
};
CPLogAlert=function(_58,_59,_5a){
if(typeof alert!="undefined"&&!CPLogDisable){
var _5b=_4f(_58,_59,_5a);
CPLogDisable=!confirm(_5b+"\n\n(Click cancel to stop log alerts)");
}
};
var _5c=null;
CPLogPopup=function(_5d,_5e,_5f){
try{
if(CPLogDisable||window.open==_44){
return;
}
if(!_5c||!_5c.document){
_5c=window.open("","_blank","width=600,height=400,status=no,resizable=yes,scrollbars=yes");
if(!_5c){
CPLogDisable=!confirm(_5d+"\n\n(Disable pop-up blocking for CPLog window; Click cancel to stop log alerts)");
return;
}
_60(_5c);
}
var _61=_5c.document.createElement("div");
_61.setAttribute("class",_5e||"fatal");
var _62=_4f(_5d,null,_5f);
_61.appendChild(_5c.document.createTextNode(_62));
_5c.log.appendChild(_61);
if(_5c.focusEnabled.checked){
_5c.focus();
}
if(_5c.blockEnabled.checked){
_5c.blockEnabled.checked=_5c.confirm(_62+"\nContinue blocking?");
}
if(_5c.scrollEnabled.checked){
_5c.scrollToBottom();
}
}
catch(e){
}
};
var _63="<style type=\"text/css\" media=\"screen\"> body{font:10px Monaco,Courier,\"Courier New\",monospace,mono;padding-top:15px;} div > .fatal,div > .error,div > .warn,div > .info,div > .debug,div > .trace{display:none;overflow:hidden;white-space:pre;padding:0px 5px 0px 5px;margin-top:2px;-moz-border-radius:5px;-webkit-border-radius:5px;} div[wrap=\"yes\"] > div{white-space:normal;} .fatal{background-color:#ffb2b3;} .error{background-color:#ffe2b2;} .warn{background-color:#fdffb2;} .info{background-color:#e4ffb2;} .debug{background-color:#a0e5a0;} .trace{background-color:#99b9ff;} .enfatal .fatal,.enerror .error,.enwarn .warn,.eninfo .info,.endebug .debug,.entrace .trace{display:block;} div#header{background-color:rgba(240,240,240,0.82);position:fixed;top:0px;left:0px;width:100%;border-bottom:1px solid rgba(0,0,0,0.33);text-align:center;} ul#enablers{display:inline-block;margin:1px 15px 0 15px;padding:2px 0 2px 0;} ul#enablers li{display:inline;padding:0px 5px 0px 5px;margin-left:4px;-moz-border-radius:5px;-webkit-border-radius:5px;} [enabled=\"no\"]{opacity:0.25;} ul#options{display:inline-block;margin:0 15px 0px 15px;padding:0 0px;} ul#options li{margin:0 0 0 0;padding:0 0 0 0;display:inline;} </style>";
function _60(_64){
var doc=_64.document;
doc.writeln("<html><head><title></title>"+_63+"</head><body></body></html>");
doc.title=_3a+" Run Log";
var _65=doc.getElementsByTagName("head")[0];
var _66=doc.getElementsByTagName("body")[0];
var _67=window.location.protocol+"//"+window.location.host+window.location.pathname;
_67=_67.substring(0,_67.lastIndexOf("/")+1);
var div=doc.createElement("div");
div.setAttribute("id","header");
_66.appendChild(div);
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
var _68={"focus":["Focus",false],"block":["Block",false],"wrap":["Wrap",false],"scroll":["Scroll",true],"close":["Close",true]};
for(o in _68){
var li=doc.createElement("li");
ul.appendChild(li);
_64[o+"Enabled"]=doc.createElement("input");
_64[o+"Enabled"].setAttribute("id",o);
_64[o+"Enabled"].setAttribute("type","checkbox");
if(_68[o][1]){
_64[o+"Enabled"].setAttribute("checked","checked");
}
li.appendChild(_64[o+"Enabled"]);
var _69=doc.createElement("label");
_69.setAttribute("for",o);
_69.appendChild(doc.createTextNode(_68[o][0]));
li.appendChild(_69);
}
_64.log=doc.createElement("div");
_64.log.setAttribute("class","enerror endebug enwarn eninfo enfatal entrace");
_66.appendChild(_64.log);
_64.toggle=function(_6a){
var _6b=(_6a.getAttribute("enabled")=="yes")?"no":"yes";
_6a.setAttribute("enabled",_6b);
if(_6b=="yes"){
_64.log.className+=" "+_6a.id;
}else{
_64.log.className=_64.log.className.replace(new RegExp("[\\s]*"+_6a.id,"g"),"");
}
};
_64.scrollToBottom=function(){
_64.scrollTo(0,_66.offsetHeight);
};
_64.wrapEnabled.addEventListener("click",function(){
_64.log.setAttribute("wrap",_64.wrapEnabled.checked?"yes":"no");
},false);
_64.addEventListener("keydown",function(e){
var e=e||_64.event;
if(e.keyCode==75&&(e.ctrlKey||e.metaKey)){
while(_64.log.firstChild){
_64.log.removeChild(_64.log.firstChild);
}
e.preventDefault();
}
},"false");
window.addEventListener("unload",function(){
if(_64&&_64.closeEnabled&&_64.closeEnabled.checked){
CPLogDisable=true;
_64.close();
}
},false);
_64.addEventListener("unload",function(){
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
window.clearNativeInterval=window.clearInterval;
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
function _6c(_6d){
this._eventListenersForEventNames={};
this._owner=_6d;
};
_6c.prototype.addEventListener=function(_6e,_6f){
var _70=this._eventListenersForEventNames;
if(!_71.call(_70,_6e)){
var _72=[];
_70[_6e]=_72;
}else{
var _72=_70[_6e];
}
var _73=_72.length;
while(_73--){
if(_72[_73]===_6f){
return;
}
}
_72.push(_6f);
};
_6c.prototype.removeEventListener=function(_74,_75){
var _76=this._eventListenersForEventNames;
if(!_71.call(_76,_74)){
return;
}
var _77=_76[_74],_78=_77.length;
while(_78--){
if(_77[_78]===_75){
return _77.splice(_78,1);
}
}
};
_6c.prototype.dispatchEvent=function(_79){
var _7a=_79.type,_7b=this._eventListenersForEventNames;
if(_71.call(_7b,_7a)){
var _7c=this._eventListenersForEventNames[_7a],_7d=0,_7e=_7c.length;
for(;_7d<_7e;++_7d){
_7c[_7d](_79);
}
}
var _7f=(this._owner||this)["on"+_7a];
if(_7f){
_7f(_79);
}
};
var _80=0,_81=null,_82=[];
function _83(_84){
var _85=_80;
if(_81===null){
window.setNativeTimeout(function(){
var _86=_82,_87=0,_88=_82.length;
++_80;
_81=null;
_82=[];
for(;_87<_88;++_87){
_86[_87]();
}
},0);
}
return function(){
var _89=arguments;
if(_80>_85){
_84.apply(this,_89);
}else{
_82.push(function(){
_84.apply(this,_89);
});
}
};
};
var _8a=null;
if(window.ActiveXObject!==_44){
var _8b=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP.6.0"],_8c=_8b.length;
while(_8c--){
try{
var _8d=_8b[_8c];
new ActiveXObject(_8d);
_8a=function(){
return new ActiveXObject(_8d);
};
break;
}
catch(anException){
}
}
}
if(!_8a){
_8a=window.XMLHttpRequest;
}
CFHTTPRequest=function(){
this._eventDispatcher=new _6c(this);
this._nativeRequest=new _8a();
var _8e=this;
this._nativeRequest.onreadystatechange=function(){
_8f(_8e);
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
var _90=this.status();
if(_90>=200&&_90<300){
return YES;
}
return _90===0&&this.responseText()&&this.responseText().length;
};
CFHTTPRequest.prototype.responseXML=function(){
var _91=this._nativeRequest.responseXML;
if(_91&&(_8a===window.XMLHttpRequest)){
return _91;
}
return _92(this.responseText());
};
CFHTTPRequest.prototype.responsePropertyList=function(){
var _93=this.responseText();
if(CFPropertyList.sniffedFormatOfString(_93)===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(this.responseXML());
}
return CFPropertyList.propertyListFromString(_93);
};
CFHTTPRequest.prototype.responseText=function(){
return this._nativeRequest.responseText;
};
CFHTTPRequest.prototype.setRequestHeader=function(_94,_95){
return this._nativeRequest.setRequestHeader(_94,_95);
};
CFHTTPRequest.prototype.getResponseHeader=function(_96){
return this._nativeRequest.getResponseHeader(_96);
};
CFHTTPRequest.prototype.getAllResponseHeaders=function(){
return this._nativeRequest.getAllResponseHeaders();
};
CFHTTPRequest.prototype.overrideMimeType=function(_97){
if("overrideMimeType" in this._nativeRequest){
return this._nativeRequest.overrideMimeType(_97);
}
};
CFHTTPRequest.prototype.open=function(_98,url,_99,_9a,_9b){
var _9c=CFHTTPRequest._lookupCachedRequest(url);
if(_9c){
var _9d=this;
this._nativeRequest=_9c;
this._nativeRequest.onreadystatechange=function(){
_8f(_9d);
};
}
return this._nativeRequest.open(_98,url,_99,_9a,_9b);
};
CFHTTPRequest.prototype.send=function(_9e){
try{
return this._nativeRequest.send(_9e);
}
catch(anException){
this._eventDispatcher.dispatchEvent({type:"failure",request:this});
}
};
CFHTTPRequest.prototype.abort=function(){
return this._nativeRequest.abort();
};
CFHTTPRequest.prototype.addEventListener=function(_9f,_a0){
this._eventDispatcher.addEventListener(_9f,_a0);
};
CFHTTPRequest.prototype.removeEventListener=function(_a1,_a2){
this._eventDispatcher.removeEventListener(_a1,_a2);
};
function _8f(_a3){
var _a4=_a3._eventDispatcher;
_a4.dispatchEvent({type:"readystatechange",request:_a3});
var _a5=_a3._nativeRequest,_a6=["uninitialized","loading","loaded","interactive","complete"][_a3.readyState()];
_a4.dispatchEvent({type:_a6,request:_a3});
if(_a6==="complete"){
var _a7="HTTP"+_a3.status();
_a4.dispatchEvent({type:_a7,request:_a3});
var _a8=_a3.success()?"success":"failure";
_a4.dispatchEvent({type:_a8,request:_a3});
}
};
function _a9(_aa,_ab,_ac){
var _ad=new CFHTTPRequest();
if(_aa.pathExtension()==="plist"){
_ad.overrideMimeType("text/xml");
}
if(_2.asyncLoader){
_ad.onsuccess=_83(_ab);
_ad.onfailure=_83(_ac);
}else{
_ad.onsuccess=_ab;
_ad.onfailure=_ac;
}
_ad.open("GET",_aa.absoluteString(),_2.asyncLoader);
_ad.send("");
};
_2.asyncLoader=YES;
var _ae={};
CFHTTPRequest._cacheRequest=function(_af,_b0,_b1,_b2){
_af=typeof _af==="string"?_af:_af.absoluteString();
_ae[_af]=new _b3(_b0,_b1,_b2);
};
CFHTTPRequest._lookupCachedRequest=function(_b4){
_b4=typeof _b4==="string"?_b4:_b4.absoluteString();
return _ae[_b4];
};
function _b3(_b5,_b6,_b7){
this.readyState=CFHTTPRequest.UninitializedState;
this.status=_b5||200;
this.statusText="";
this.responseText=_b7||"";
this._responseHeaders=_b6||{};
};
_b3.prototype.open=function(_b8,url,_b9,_ba,_bb){
this.readyState=CFHTTPRequest.LoadingState;
this.async=_b9;
};
_b3.prototype.send=function(_bc){
var _bd=this;
_bd.responseText=_bd.responseText.toString();
function _be(){
for(_bd.readyState=CFHTTPRequest.LoadedState;_bd.readyState<=CFHTTPRequest.CompleteState;_bd.readyState++){
_bd.onreadystatechange();
}
};
(_bd.async?_83(_be):_be)();
};
_b3.prototype.onreadystatechange=function(){
};
_b3.prototype.abort=function(){
};
_b3.prototype.setRequestHeader=function(_bf,_c0){
};
_b3.prototype.getAllResponseHeaders=function(){
return this._responseHeaders;
};
_b3.prototype.getResponseHeader=function(_c1){
return this._responseHeaders[_c1];
};
_b3.prototype.overrideMimeType=function(_c2){
};
var _c3=0;
objj_generateObjectUID=function(){
return _c3++;
};
CFPropertyList=function(){
this._UID=objj_generateObjectUID();
};
CFPropertyList.DTDRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?/i;
CFPropertyList.XMLRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?<\s*plist[^>]*\>/i;
CFPropertyList.FormatXMLDTD="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">";
CFPropertyList.Format280NorthMagicNumber="280NPLIST";
CFPropertyList.FormatOpenStep=1,CFPropertyList.FormatXML_v1_0=100,CFPropertyList.FormatBinary_v1_0=200,CFPropertyList.Format280North_v1_0=-1000;
CFPropertyList.sniffedFormatOfString=function(_c4){
if(_c4.match(CFPropertyList.XMLRE)){
return CFPropertyList.FormatXML_v1_0;
}
if(_c4.substr(0,CFPropertyList.Format280NorthMagicNumber.length)===CFPropertyList.Format280NorthMagicNumber){
return CFPropertyList.Format280North_v1_0;
}
return NULL;
};
CFPropertyList.dataFromPropertyList=function(_c5,_c6){
var _c7=new CFMutableData();
_c7.setRawString(CFPropertyList.stringFromPropertyList(_c5,_c6));
return _c7;
};
CFPropertyList.stringFromPropertyList=function(_c8,_c9){
if(!_c9){
_c9=CFPropertyList.Format280North_v1_0;
}
var _ca=_cb[_c9];
return _ca["start"]()+_cc(_c8,_ca)+_ca["finish"]();
};
function _cc(_cd,_ce){
var _cf=typeof _cd,_d0=_cd.valueOf(),_d1=typeof _d0;
if(_cf!==_d1){
_cf=_d1;
_cd=_d0;
}
if(_cd===YES||_cd===NO){
_cf="boolean";
}else{
if(_cf==="number"){
if(FLOOR(_cd)===_cd){
_cf="integer";
}else{
_cf="real";
}
}else{
if(_cf!=="string"){
if(_cd.slice){
_cf="array";
}else{
_cf="dictionary";
}
}
}
}
return _ce[_cf](_cd,_ce);
};
var _cb={};
_cb[CFPropertyList.FormatXML_v1_0]={"start":function(){
return CFPropertyList.FormatXMLDTD+"<plist version = \"1.0\">";
},"finish":function(){
return "</plist>";
},"string":function(_d2){
return "<string>"+_d3(_d2)+"</string>";
},"boolean":function(_d4){
return _d4?"<true/>":"<false/>";
},"integer":function(_d5){
return "<integer>"+_d5+"</integer>";
},"real":function(_d6){
return "<real>"+_d6+"</real>";
},"array":function(_d7,_d8){
var _d9=0,_da=_d7.length,_db="<array>";
for(;_d9<_da;++_d9){
_db+=_cc(_d7[_d9],_d8);
}
return _db+"</array>";
},"dictionary":function(_dc,_dd){
var _de=_dc._keys,_8c=0,_df=_de.length,_e0="<dict>";
for(;_8c<_df;++_8c){
var key=_de[_8c];
_e0+="<key>"+key+"</key>";
_e0+=_cc(_dc.valueForKey(key),_dd);
}
return _e0+"</dict>";
}};
var _e1="A",_e2="D",_e3="f",_e4="d",_e5="S",_e6="T",_e7="F",_e8="K",_e9="E";
_cb[CFPropertyList.Format280North_v1_0]={"start":function(){
return CFPropertyList.Format280NorthMagicNumber+";1.0;";
},"finish":function(){
return "";
},"string":function(_ea){
return _e5+";"+_ea.length+";"+_ea;
},"boolean":function(_eb){
return (_eb?_e6:_e7)+";";
},"integer":function(_ec){
var _ed=""+_ec;
return _e4+";"+_ed.length+";"+_ed;
},"real":function(_ee){
var _ef=""+_ee;
return _e3+";"+_ef.length+";"+_ef;
},"array":function(_f0,_f1){
var _f2=0,_f3=_f0.length,_f4=_e1+";";
for(;_f2<_f3;++_f2){
_f4+=_cc(_f0[_f2],_f1);
}
return _f4+_e9+";";
},"dictionary":function(_f5,_f6){
var _f7=_f5._keys,_8c=0,_f8=_f7.length,_f9=_e2+";";
for(;_8c<_f8;++_8c){
var key=_f7[_8c];
_f9+=_e8+";"+key.length+";"+key;
_f9+=_cc(_f5.valueForKey(key),_f6);
}
return _f9+_e9+";";
}};
var _fa="xml",_fb="#document",_fc="plist",_fd="key",_fe="dict",_ff="array",_100="string",_101="true",_102="false",_103="real",_104="integer",_105="data";
var _106=function(_107,_108,_109){
var node=_107;
node=(node.firstChild);
if(node!==NULL&&((node.nodeType)===8||(node.nodeType)===3)){
while((node=(node.nextSibling))&&((node.nodeType)===8||(node.nodeType)===3)){
}
}
if(node){
return node;
}
if((String(_107.nodeName))===_ff||(String(_107.nodeName))===_fe){
_109.pop();
}else{
if(node===_108){
return NULL;
}
node=_107;
while((node=(node.nextSibling))&&((node.nodeType)===8||(node.nodeType)===3)){
}
if(node){
return node;
}
}
node=_107;
while(node){
var next=node;
while((next=(next.nextSibling))&&((next.nodeType)===8||(next.nodeType)===3)){
}
if(next){
return next;
}
var node=(node.parentNode);
if(_108&&node===_108){
return NULL;
}
_109.pop();
}
return NULL;
};
CFPropertyList.propertyListFromData=function(_10a,_10b){
return CFPropertyList.propertyListFromString(_10a.rawString(),_10b);
};
CFPropertyList.propertyListFromString=function(_10c,_10d){
if(!_10d){
_10d=CFPropertyList.sniffedFormatOfString(_10c);
}
if(_10d===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(_10c);
}
if(_10d===CFPropertyList.Format280North_v1_0){
return _10e(_10c);
}
return NULL;
};
var _e1="A",_e2="D",_e3="f",_e4="d",_e5="S",_e6="T",_e7="F",_e8="K",_e9="E";
function _10e(_10f){
var _110=new _111(_10f),_112=NULL,key="",_113=NULL,_114=NULL,_115=[],_116=NULL;
while(_112=_110.getMarker()){
if(_112===_e9){
_115.pop();
continue;
}
var _117=_115.length;
if(_117){
_116=_115[_117-1];
}
if(_112===_e8){
key=_110.getString();
_112=_110.getMarker();
}
switch(_112){
case _e1:
_113=[];
_115.push(_113);
break;
case _e2:
_113=new CFMutableDictionary();
_115.push(_113);
break;
case _e3:
_113=parseFloat(_110.getString());
break;
case _e4:
_113=parseInt(_110.getString(),10);
break;
case _e5:
_113=_110.getString();
break;
case _e6:
_113=YES;
break;
case _e7:
_113=NO;
break;
default:
throw new Error("*** "+_112+" marker not recognized in Plist.");
}
if(!_114){
_114=_113;
}else{
if(_116){
if(_116.slice){
_116.push(_113);
}else{
_116.setValueForKey(key,_113);
}
}
}
}
return _114;
};
function _d3(_118){
return _118.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
function _119(_11a){
return _11a.replace(/&quot;/g,"\"").replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
};
function _92(_11b){
if(window.DOMParser){
return (new window.DOMParser().parseFromString(_11b,"text/xml").documentElement);
}else{
if(window.ActiveXObject){
XMLNode=new ActiveXObject("Microsoft.XMLDOM");
var _11c=_11b.match(CFPropertyList.DTDRE);
if(_11c){
_11b=_11b.substr(_11c[0].length);
}
XMLNode.loadXML(_11b);
return XMLNode;
}
}
return NULL;
};
CFPropertyList.propertyListFromXML=function(_11d){
var _11e=_11d;
if(_11d.valueOf&&typeof _11d.valueOf()==="string"){
_11e=_92(_11d);
}
while(((String(_11e.nodeName))===_fb)||((String(_11e.nodeName))===_fa)){
_11e=(_11e.firstChild);
}
if(_11e!==NULL&&((_11e.nodeType)===8||(_11e.nodeType)===3)){
while((_11e=(_11e.nextSibling))&&((_11e.nodeType)===8||(_11e.nodeType)===3)){
}
}
if(((_11e.nodeType)===10)){
while((_11e=(_11e.nextSibling))&&((_11e.nodeType)===8||(_11e.nodeType)===3)){
}
}
if(!((String(_11e.nodeName))===_fc)){
return NULL;
}
var key="",_11f=NULL,_120=NULL,_121=_11e,_122=[],_123=NULL;
while(_11e=_106(_11e,_121,_122)){
var _124=_122.length;
if(_124){
_123=_122[_124-1];
}
if((String(_11e.nodeName))===_fd){
key=((String((_11e.firstChild).nodeValue)));
while((_11e=(_11e.nextSibling))&&((_11e.nodeType)===8||(_11e.nodeType)===3)){
}
}
switch(String((String(_11e.nodeName)))){
case _ff:
_11f=[];
_122.push(_11f);
break;
case _fe:
_11f=new CFMutableDictionary();
_122.push(_11f);
break;
case _103:
_11f=parseFloat(((String((_11e.firstChild).nodeValue))));
break;
case _104:
_11f=parseInt(((String((_11e.firstChild).nodeValue))),10);
break;
case _100:
_11f=_119((_11e.firstChild)?((String((_11e.firstChild).nodeValue))):"");
break;
case _101:
_11f=YES;
break;
case _102:
_11f=NO;
break;
case _105:
_11f=new CFMutableData();
_11f.bytes=(_11e.firstChild)?CFData.decodeBase64ToArray(((String((_11e.firstChild).nodeValue))),YES):[];
break;
default:
throw new Error("*** "+(String(_11e.nodeName))+" tag not recognized in Plist.");
}
if(!_120){
_120=_11f;
}else{
if(_123){
if(_123.slice){
_123.push(_11f);
}else{
_123.setValueForKey(key,_11f);
}
}
}
}
return _120;
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
CFPropertyListCreateXMLData=function(_125){
return CFPropertyList.dataFromPropertyList(_125,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateFrom280NorthData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.Format280North_v1_0);
};
CFPropertyListCreate280NorthData=function(_126){
return CFPropertyList.dataFromPropertyList(_126,CFPropertyList.Format280North_v1_0);
};
CPPropertyListCreateFromData=function(data,_127){
return CFPropertyList.propertyListFromData(data,_127);
};
CPPropertyListCreateData=function(_128,_129){
return CFPropertyList.dataFromPropertyList(_128,_129);
};
CFDictionary=function(_12a){
this._keys=[];
this._count=0;
this._buckets={};
this._UID=objj_generateObjectUID();
};
var _12b=Array.prototype.indexOf,_71=Object.prototype.hasOwnProperty;
CFDictionary.prototype.copy=function(){
return this;
};
CFDictionary.prototype.mutableCopy=function(){
var _12c=new CFMutableDictionary(),keys=this._keys,_12d=this._count;
_12c._keys=keys.slice();
_12c._count=_12d;
var _12e=0,_12f=this._buckets,_130=_12c._buckets;
for(;_12e<_12d;++_12e){
var key=keys[_12e];
_130[key]=_12f[key];
}
return _12c;
};
CFDictionary.prototype.containsKey=function(aKey){
return _71.apply(this._buckets,[aKey]);
};
CFDictionary.prototype.containsValue=function(_131){
var keys=this._keys,_132=this._buckets,_8c=0,_133=keys.length;
for(;_8c<_133;++_8c){
if(_132[keys]===_131){
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
CFDictionary.prototype.countOfValue=function(_134){
var keys=this._keys,_135=this._buckets,_8c=0,_136=keys.length,_137=0;
for(;_8c<_136;++_8c){
if(_135[keys]===_134){
return ++_137;
}
}
return _137;
};
CFDictionary.prototype.keys=function(){
return this._keys.slice();
};
CFDictionary.prototype.valueForKey=function(aKey){
var _138=this._buckets;
if(!_71.apply(_138,[aKey])){
return nil;
}
return _138[aKey];
};
CFDictionary.prototype.toString=function(){
var _139="{\n",keys=this._keys,_8c=0,_13a=this._count;
for(;_8c<_13a;++_8c){
var key=keys[_8c];
_139+="\t"+key+" = \""+String(this.valueForKey(key)).split("\n").join("\n\t")+"\"\n";
}
return _139+"}";
};
CFMutableDictionary=function(_13b){
CFDictionary.apply(this,[]);
};
CFMutableDictionary.prototype=new CFDictionary();
CFMutableDictionary.prototype.copy=function(){
return this.mutableCopy();
};
CFMutableDictionary.prototype.addValueForKey=function(aKey,_13c){
if(this.containsKey(aKey)){
return;
}
++this._count;
this._keys.push(aKey);
this._buckets[aKey]=_13c;
};
CFMutableDictionary.prototype.removeValueForKey=function(aKey){
var _13d=-1;
if(_12b){
_13d=_12b.call(this._keys,aKey);
}else{
var keys=this._keys,_8c=0,_13e=keys.length;
for(;_8c<_13e;++_8c){
if(keys[_8c]===aKey){
_13d=_8c;
break;
}
}
}
if(_13d===-1){
return;
}
--this._count;
this._keys.splice(_13d,1);
delete this._buckets[aKey];
};
CFMutableDictionary.prototype.removeAllValues=function(){
this._count=0;
this._keys=[];
this._buckets={};
};
CFMutableDictionary.prototype.replaceValueForKey=function(aKey,_13f){
if(!this.containsKey(aKey)){
return;
}
this._buckets[aKey]=_13f;
};
CFMutableDictionary.prototype.setValueForKey=function(aKey,_140){
if(_140===nil||_140===_44){
this.removeValueForKey(aKey);
}else{
if(this.containsKey(aKey)){
this.replaceValueForKey(aKey,_140);
}else{
this.addValueForKey(aKey,_140);
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
function _141(_142){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFMutableData.prototype.setPropertyList=function(_143,_144){
_141(this);
this._propertyList=_143;
this._propertyListFormat=_144;
};
CFMutableData.prototype.setJSONObject=function(_145){
_141(this);
this._JSONObject=_145;
};
CFMutableData.prototype.setRawString=function(_146){
_141(this);
this._rawString=_146;
};
CFMutableData.prototype.setBytes=function(_147){
_141(this);
this._bytes=_147;
};
CFMutableData.prototype.setBase64String=function(_148){
_141(this);
this._base64=_148;
};
var _149=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],_14a=[];
for(var i=0;i<_149.length;i++){
_14a[_149[i].charCodeAt(0)]=i;
}
CFData.decodeBase64ToArray=function(_14b,_14c){
if(_14c){
_14b=_14b.replace(/[^A-Za-z0-9\+\/\=]/g,"");
}
var pad=(_14b[_14b.length-1]=="="?1:0)+(_14b[_14b.length-2]=="="?1:0),_14d=_14b.length,_14e=[];
var i=0;
while(i<_14d){
var bits=(_14a[_14b.charCodeAt(i++)]<<18)|(_14a[_14b.charCodeAt(i++)]<<12)|(_14a[_14b.charCodeAt(i++)]<<6)|(_14a[_14b.charCodeAt(i++)]);
_14e.push((bits&16711680)>>16);
_14e.push((bits&65280)>>8);
_14e.push(bits&255);
}
if(pad>0){
return _14e.slice(0,-1*pad);
}
return _14e;
};
CFData.encodeBase64Array=function(_14f){
var pad=(3-(_14f.length%3))%3,_150=_14f.length+pad,_151=[];
if(pad>0){
_14f.push(0);
}
if(pad>1){
_14f.push(0);
}
var i=0;
while(i<_150){
var bits=(_14f[i++]<<16)|(_14f[i++]<<8)|(_14f[i++]);
_151.push(_149[(bits&16515072)>>18]);
_151.push(_149[(bits&258048)>>12]);
_151.push(_149[(bits&4032)>>6]);
_151.push(_149[bits&63]);
}
if(pad>0){
_151[_151.length-1]="=";
_14f.pop();
}
if(pad>1){
_151[_151.length-2]="=";
_14f.pop();
}
return _151.join("");
};
CFData.decodeBase64ToString=function(_152,_153){
return CFData.bytesToString(CFData.decodeBase64ToArray(_152,_153));
};
CFData.bytesToString=function(_154){
return String.fromCharCode.apply(NULL,_154);
};
CFData.encodeBase64String=function(_155){
var temp=[];
for(var i=0;i<_155.length;i++){
temp.push(_155.charCodeAt(i));
}
return CFData.encodeBase64Array(temp);
};
var _156,_157,_158=0;
function _159(){
if(++_158!==1){
return;
}
_156={};
_157={};
};
function _15a(){
_158=MAX(_158-1,0);
if(_158!==0){
return;
}
delete _156;
delete _157;
};
var _15b=new RegExp("^"+"(?:"+"([^:/?#]+):"+")?"+"(?:"+"(//)"+"("+"(?:"+"("+"([^:@]*)"+":?"+"([^:@]*)"+")?"+"@"+")?"+"([^:/?#]*)"+"(?::(\\d*))?"+")"+")?"+"([^?#]*)"+"(?:\\?([^#]*))?"+"(?:#(.*))?");
var _15c=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","portNumber","path","queryString","fragment"];
function _15d(aURL){
if(aURL._parts){
return aURL._parts;
}
var _15e=aURL.string(),_15f=_15e.match(/^mhtml:/);
if(_15f){
_15e=_15e.substr("mhtml:".length);
}
if(_158>0&&_71.call(_157,_15e)){
aURL._parts=_157[_15e];
return aURL._parts;
}
aURL._parts={};
var _160=aURL._parts,_161=_15b.exec(_15e),_8c=_161.length;
while(_8c--){
_160[_15c[_8c]]=_161[_8c]||NULL;
}
_160.portNumber=parseInt(_160.portNumber,10);
if(isNaN(_160.portNumber)){
_160.portNumber=-1;
}
_160.pathComponents=[];
if(_160.path){
var _162=_160.path.split("/"),_163=_160.pathComponents,_8c=0,_164=_162.length;
for(;_8c<_164;++_8c){
var _165=_162[_8c];
if(_165){
_163.push(_165);
}else{
if(_8c===0){
_163.push("/");
}
}
}
_160.pathComponents=_163;
}
if(_15f){
_160.url="mhtml:"+_160.url;
_160.scheme="mhtml:"+_160.scheme;
}
if(_158>0){
_157[_15e]=_160;
}
return _160;
};
CFURL=function(aURL,_166){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_166){
return aURL;
}
var _167=aURL.baseURL();
if(_167){
_166=new CFURL(_167.absoluteURL(),_166);
}
aURL=aURL.string();
}
if(_158>0){
var _168=aURL+" "+(_166&&_166.UID()||"");
if(_71.call(_156,_168)){
return _156[_168];
}
_156[_168]=this;
}
if(aURL.match(/^data:/)){
var _169={},_8c=_15c.length;
while(_8c--){
_169[_15c[_8c]]="";
}
_169.url=aURL;
_169.scheme="data";
_169.pathComponents=[];
this._parts=_169;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_166;
};
CFURL.prototype.UID=function(){
return this._UID;
};
var _16a={};
CFURL.prototype.mappedURL=function(){
return _16a[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_16b,_16c){
_16a[_16b.absoluteString()]=_16c;
};
CFURL.prototype.schemeAndAuthority=function(){
var _16d="",_16e=this.scheme();
if(_16e){
_16d+=_16e+":";
}
var _16f=this.authority();
if(_16f){
_16d+="//"+_16f;
}
return _16d;
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
function _170(aURL){
aURL=aURL.standardizedURL();
var _171=aURL.baseURL();
if(!_171){
return aURL;
}
var _172=((aURL)._parts||_15d(aURL)),_173,_174=_171.absoluteURL(),_175=((_174)._parts||_15d(_174));
if(_172.scheme||_172.authority){
_173=_172;
}else{
_173={};
_173.scheme=_175.scheme;
_173.authority=_175.authority;
_173.userInfo=_175.userInfo;
_173.user=_175.user;
_173.password=_175.password;
_173.domain=_175.domain;
_173.portNumber=_175.portNumber;
_173.queryString=_172.queryString;
_173.fragment=_172.fragment;
var _176=_172.pathComponents;
if(_176.length&&_176[0]==="/"){
_173.path=_172.path;
_173.pathComponents=_176;
}else{
var _177=_175.pathComponents,_178=_177.concat(_176);
if(!_171.hasDirectoryPath()&&_177.length){
_178.splice(_177.length-1,1);
}
if(_176.length&&_176[0]===".."){
_179(_178,YES);
}
_173.pathComponents=_178;
_173.path=_17a(_178,_176.length<=0||aURL.hasDirectoryPath());
}
}
var _17b=_17c(_173),_17d=new CFURL(_17b);
_17d._parts=_173;
_17d._standardizedURL=_17d;
_17d._standardizedString=_17b;
_17d._absoluteURL=_17d;
_17d._absoluteString=_17b;
return _17d;
};
function _17a(_17e,_17f){
var path=_17e.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_17f){
path+="/";
}
return path;
};
function _179(_180,_181){
var _182=0,_183=0,_184=_180.length,_185=_181?_180:[];
for(;_182<_184;++_182){
var _186=_180[_182];
if(_186===""||_186==="."){
continue;
}
if(_186!==".."||_183===0||_185[_183-1]===".."){
_185[_183]=_186;
_183++;
continue;
}
if(_183>0&&_185[_183-1]!=="/"){
--_183;
}
}
_185.length=_183;
return _185;
};
function _17c(_187){
var _188="",_189=_187.scheme;
if(_189){
_188+=_189+":";
}
var _18a=_187.authority;
if(_18a){
_188+="//"+_18a;
}
_188+=_187.path;
var _18b=_187.queryString;
if(_18b){
_188+="?"+_18b;
}
var _18c=_187.fragment;
if(_18c){
_188+="#"+_18c;
}
return _188;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_170(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _18d=((this)._parts||_15d(this)),_18e=_18d.pathComponents,_18f=_179(_18e,NO);
var _190=_17a(_18f,this.hasDirectoryPath());
if(_18d.path===_190){
this._standardizedURL=this;
}else{
var _191=_192(_18d);
_191.pathComponents=_18f;
_191.path=_190;
var _193=new CFURL(_17c(_191),this.baseURL());
_193._parts=_191;
_193._standardizedURL=_193;
this._standardizedURL=_193;
}
}
return this._standardizedURL;
};
function _192(_194){
var _195={},_196=_15c.length;
while(_196--){
var _197=_15c[_196];
_195[_197]=_194[_197];
}
return _195;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _198=((this)._parts||_15d(this)).authority;
if(_198){
return _198;
}
var _199=this.baseURL();
return _199&&_199.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _19a=this._hasDirectoryPath;
if(_19a===_44){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _19b=this.lastPathComponent();
_19a=_19b==="."||_19b==="..";
this._hasDirectoryPath=_19a;
}
return this._hasDirectoryPath;
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return ((this)._parts||_15d(this)).fragment;
};
CFURL.prototype.lastPathComponent=function(){
if(this._lastPathComponent===_44){
var _19c=this.pathComponents(),_19d=_19c.length;
if(!_19d){
this._lastPathComponent="";
}else{
this._lastPathComponent=_19c[_19d-1];
}
}
return this._lastPathComponent;
};
CFURL.prototype.path=function(){
return ((this)._parts||_15d(this)).path;
};
CFURL.prototype.pathComponents=function(){
return ((this)._parts||_15d(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _19e=this.lastPathComponent();
if(!_19e){
return NULL;
}
_19e=_19e.replace(/^\.*/,"");
var _19f=_19e.lastIndexOf(".");
return _19f<=0?"":_19e.substring(_19f+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_15d(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _1a0=this._scheme;
if(_1a0===_44){
_1a0=((this)._parts||_15d(this)).scheme;
if(!_1a0){
var _1a1=this.baseURL();
_1a0=_1a1&&_1a1.scheme();
}
this._scheme=_1a0;
}
return _1a0;
};
CFURL.prototype.user=function(){
return ((this)._parts||_15d(this)).user;
};
CFURL.prototype.password=function(){
return ((this)._parts||_15d(this)).password;
};
CFURL.prototype.portNumber=function(){
return ((this)._parts||_15d(this)).portNumber;
};
CFURL.prototype.domain=function(){
return ((this)._parts||_15d(this)).domain;
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
function _1a2(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _1a2(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_1a3){
_1a2(this).setValueForKey(aKey,_1a3);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_1a4.resourceAtURL(this).contents());
return data;
};
function _111(_1a5){
this._string=_1a5;
var _1a6=_1a5.indexOf(";");
this._magicNumber=_1a5.substr(0,_1a6);
this._location=_1a5.indexOf(";",++_1a6);
this._version=_1a5.substring(_1a6,this._location++);
};
_111.prototype.magicNumber=function(){
return this._magicNumber;
};
_111.prototype.version=function(){
return this._version;
};
_111.prototype.getMarker=function(){
var _1a7=this._string,_1a8=this._location;
if(_1a8>=_1a7.length){
return null;
}
var next=_1a7.indexOf(";",_1a8);
if(next<0){
return null;
}
var _1a9=_1a7.substring(_1a8,next);
if(_1a9==="e"){
return null;
}
this._location=next+1;
return _1a9;
};
_111.prototype.getString=function(){
var _1aa=this._string,_1ab=this._location;
if(_1ab>=_1aa.length){
return null;
}
var next=_1aa.indexOf(";",_1ab);
if(next<0){
return null;
}
var size=parseInt(_1aa.substring(_1ab,next),10),text=_1aa.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _1ac=0,_1ad=1<<0,_1ae=1<<1,_1af=1<<2,_1b0=1<<3,_1b1=1<<4;
var _1b2={},_1b3={},_1b4=new Date().getTime(),_1b5=0,_1b6=0;
CFBundle=function(aURL){
aURL=_1b7(aURL).asDirectoryPathURL();
var _1b8=aURL.absoluteString(),_1b9=_1b2[_1b8];
if(_1b9){
return _1b9;
}
_1b2[_1b8]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._isValid=NO;
this._loadStatus=_1ac;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _6c(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1b7(aURL));
var _1ba,_1bb=aURL.absoluteString();
while(!_1ba||_1ba!==_1bb){
var _1bc=_1b2[_1bb];
if(_1bc&&_1bc._isValid){
return _1bc;
}
aURL=new CFURL("..",aURL);
_1ba=_1bb;
_1bb=aURL.absoluteString();
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1bd);
};
function _1be(_1bf,_1c0){
if(_1c0){
_1b3[_1bf.name]=_1c0;
}
};
CFBundle.bundleForClass=function(_1c1){
return _1b3[_1c1.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1c2,_1c3,_1c4){
if(_1c3){
_1c2=_1c2+"."+_1c3;
}
if(_1c4){
_1c2=_1c4+"/"+_1c2;
}
var _1c5=(new CFURL(_1c2,this.resourcesDirectoryURL())).mappedURL();
return _1c5.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1c6=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1c6){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1c6,this.mostEligibleEnvironmentURL());
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
var _1c7=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_8c=_1c7.length,_1c8=this.mostEligibleEnvironment();
while(_8c--){
if(_1c7[_8c]===_1c8){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1c9){
_1c9=_1c9||this.environments();
var _1ca=CFBundle.environments(),_8c=0,_1cb=_1ca.length,_1cc=_1c9.length;
for(;_8c<_1cb;++_8c){
var _1cd=0,_1ce=_1ca[_8c];
for(;_1cd<_1cc;++_1cd){
if(_1ce===_1c9[_1cd]){
return _1ce;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_1ad;
};
CFBundle.prototype.load=function(_1cf){
if(this._loadStatus!==_1ac){
return;
}
this._loadStatus=_1ad|_1ae;
var self=this,_1d0=this.bundleURL(),_1d1=new CFURL("..",_1d0);
if(_1d1.absoluteString()===_1d0.absoluteString()){
_1d1=_1d1.schemeAndAuthority();
}
_1a4.resolveResourceAtURL(_1d1,YES,function(_1d2){
var _1d3=_1d0.absoluteURL().lastPathComponent();
self._staticResource=_1d2._children[_1d3]||new _1a4(_1d0,_1d2,YES,NO);
function _1d4(_1d5){
self._loadStatus&=~_1ae;
var _1d6=_1d5.request.responsePropertyList();
self._isValid=!!_1d6||CFBundle.mainBundle()===self;
if(_1d6){
self._infoDictionary=_1d6;
}
if(!self._infoDictionary){
_1d8(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1b6=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1dc(self,_1cf);
};
function _1d7(){
self._isValid=CFBundle.mainBundle()===self;
self._loadStatus=_1ac;
_1d8(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _a9(new CFURL("Info.plist",self.bundleURL()),_1d4,_1d7);
});
};
function _1d8(_1d9,_1da){
_1db(_1d9._staticResource);
_1d9._eventDispatcher.dispatchEvent({type:"error",error:_1da,bundle:_1d9});
};
function _1dc(_1dd,_1de){
if(!_1dd.mostEligibleEnvironment()){
return _1df();
}
_1e0(_1dd,_1e1,_1df);
_1e2(_1dd,_1e1,_1df);
if(_1dd._loadStatus===_1ad){
return _1e1();
}
function _1df(_1e3){
var _1e4=_1dd._loadRequests,_1e5=_1e4.length;
while(_1e5--){
_1e4[_1e5].abort();
}
this._loadRequests=[];
_1dd._loadStatus=_1ac;
_1d8(_1dd,_1e3||new Error("Could not recognize executable code format in Bundle "+_1dd));
};
function _1e1(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_1b6){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_1b5/_1b6),0),_1b6,_1dd.path());
}
if(_1dd._loadStatus===_1ad){
_1dd._loadStatus=_1b1;
}else{
return;
}
_1db(_1dd._staticResource);
function _1e6(){
_1dd._eventDispatcher.dispatchEvent({type:"load",bundle:_1dd});
};
if(_1de){
_1e7(_1dd,_1e6);
}else{
_1e6();
}
};
};
function _1e0(_1e8,_1e9,_1ea){
var _1eb=_1e8.executableURL();
if(!_1eb){
return;
}
_1e8._loadStatus|=_1af;
new _a9(_1eb,function(_1ec){
try{
_1b5+=_1ec.request.responseText().length;
_1ed(_1e8,_1ec.request.responseText(),_1eb);
_1e8._loadStatus&=~_1af;
_1e9();
}
catch(anException){
_1ea(anException);
}
},_1ea);
};
function _1ee(_1ef){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1ef.mostEligibleEnvironmentURL());
};
function _1f0(_1f1){
if(_1f2===_1f3){
return new CFURL("dataURLs.txt",_1f1.mostEligibleEnvironmentURL());
}
if(_1f2===_1f4||_1f2===_1f5){
return new CFURL("MHTMLPaths.txt",_1f1.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1e2(_1f6,_1f7,_1f8){
if(!_1f6.hasSpritedImages()){
return;
}
_1f6._loadStatus|=_1b0;
if(!_1f9()){
return _1fa(_1ee(_1f6),function(){
_1e2(_1f6,_1f7,_1f8);
});
}
var _1fb=_1f0(_1f6);
if(!_1fb){
_1f6._loadStatus&=~_1b0;
return _1f7();
}
new _a9(_1fb,function(_1fc){
try{
_1b5+=_1fc.request.responseText().length;
_1ed(_1f6,_1fc.request.responseText(),_1fb);
_1f6._loadStatus&=~_1b0;
_1f7();
}
catch(anException){
_1f8(anException);
}
},_1f8);
};
var _1fd=[],_1f2=-1,_1fe=0,_1f3=1,_1f4=2,_1f5=3;
function _1f9(){
return _1f2!==-1;
};
function _1fa(_1ff,_200){
if(_1f9()){
return;
}
_1fd.push(_200);
if(_1fd.length>1){
return;
}
_1fd.push(function(){
var size=0,_201=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_201){
return;
}
switch(_1f2){
case _1f3:
size=_201.valueForKey("data");
break;
case _1f4:
case _1f5:
size=_201.valueForKey("mhtml");
break;
}
_1b6+=size;
});
_202([_1f3,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1f4,_1ff+"!test",_1f5,_1ff+"?"+_1b4+"!test"]);
};
function _203(){
var _204=_1fd.length;
while(_204--){
_1fd[_204]();
}
};
function _202(_205){
if(_205.length<2){
_1f2=_1fe;
_203();
return;
}
var _206=new Image();
_206.onload=function(){
if(_206.width===1&&_206.height===1){
_1f2=_205[0];
_203();
}else{
_206.onerror();
}
};
_206.onerror=function(){
_202(_205.slice(2));
};
_206.src=_205[1];
};
function _1e7(_207,_208){
var _209=[_207._staticResource];
function _20a(_20b){
for(;_20b<_209.length;++_20b){
var _20c=_209[_20b];
if(_20c.isNotFound()){
continue;
}
if(_20c.isFile()){
var _20d=new _314(_20c.URL());
if(_20d.hasLoadedFileDependencies()){
_20d.execute();
}else{
_20d.loadFileDependencies(function(){
_20a(_20b);
});
return;
}
}else{
if(_20c.URL().absoluteString()===_207.resourcesDirectoryURL().absoluteString()){
continue;
}
var _20e=_20c.children();
for(var name in _20e){
if(_71.call(_20e,name)){
_209.push(_20e[name]);
}
}
}
}
_208();
};
_20a(0);
};
var _20f="@STATIC",_210="p",_211="u",_212="c",_213="t",_214="I",_215="i";
function _1ed(_216,_217,_218){
var _219=new _111(_217);
if(_219.magicNumber()!==_20f){
throw new Error("Could not read static file: "+_218);
}
if(_219.version()!=="1.0"){
throw new Error("Could not read static file: "+_218);
}
var _21a,_21b=_216.bundleURL(),file=NULL;
while(_21a=_219.getMarker()){
var text=_219.getString();
if(_21a===_210){
var _21c=new CFURL(text,_21b),_21d=_1a4.resourceAtURL(new CFURL(".",_21c),YES);
file=new _1a4(_21c,_21d,NO,YES);
}else{
if(_21a===_211){
var URL=new CFURL(text,_21b),_21e=_219.getString();
if(_21e.indexOf("mhtml:")===0){
_21e="mhtml:"+new CFURL(_21e.substr("mhtml:".length),_21b);
if(_1f2===_1f5){
var _21f=URLString.indexOf("!"),_220=URLString.substring(0,_21f),_221=URLString.substring(_21f);
_21e=_220+"?"+_1b4+_221;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_21e));
var _21d=_1a4.resourceAtURL(new CFURL(".",URL),YES);
new _1a4(URL,_21d,NO,YES);
}else{
if(_21a===_213){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_222,_223){
this._eventDispatcher.addEventListener(_222,_223);
};
CFBundle.prototype.removeEventListener=function(_224,_225){
this._eventDispatcher.removeEventListener(_224,_225);
};
CFBundle.prototype.onerror=function(_226){
throw _226.error;
};
CFBundle.prototype.bundlePath=function(){
return this._bundleURL.absoluteURL().path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_227){
return this.resourceURL(_227).absoluteString();
};
var _228={};
function _1a4(aURL,_229,_22a,_22b){
this._parent=_229;
this._eventDispatcher=new _6c(this);
var name=aURL.absoluteURL().lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_22b;
if(_22a){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_229){
_228[name]=this;
}
this._isDirectory=!!_22a;
this._isNotFound=NO;
if(_229){
_229._children[name]=this;
}
if(_22a){
this._children={};
}else{
this._contents="";
}
};
_1a4.rootResources=function(){
return _228;
};
_2.StaticResource=_1a4;
function _1db(_22c){
_22c._isResolved=YES;
_22c._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_22c});
};
_1a4.prototype.resolve=function(){
if(this.isDirectory()){
var _22d=new CFBundle(this.URL());
_22d.onerror=function(){
};
_22d.load(NO);
}else{
var self=this;
function _22e(_22f){
self._contents=_22f.request.responseText();
_1db(self);
};
function _230(){
self._isNotFound=YES;
_1db(self);
};
new _a9(this.URL(),_22e,_230);
}
};
_1a4.prototype.name=function(){
return this._name;
};
_1a4.prototype.URL=function(){
return this._URL;
};
_1a4.prototype.contents=function(){
return this._contents;
};
_1a4.prototype.children=function(){
return this._children;
};
_1a4.prototype.parent=function(){
return this._parent;
};
_1a4.prototype.isResolved=function(){
return this._isResolved;
};
_1a4.prototype.write=function(_231){
this._contents+=_231;
};
function _232(_233){
var _234=_233.schemeAndAuthority(),_235=_228[_234];
if(!_235){
_235=new _1a4(new CFURL(_234),NULL,YES,YES);
}
return _235;
};
_1a4.resourceAtURL=function(aURL,_236){
aURL=_1b7(aURL).absoluteURL();
var _237=_232(aURL),_238=aURL.pathComponents(),_8c=0,_239=_238.length;
for(;_8c<_239;++_8c){
var name=_238[_8c];
if(_71.call(_237._children,name)){
_237=_237._children[name];
}else{
if(_236){
_237=new _1a4(new CFURL(name,_237.URL()),_237,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _237;
};
_1a4.prototype.resourceAtURL=function(aURL,_23a){
return _1a4.resourceAtURL(new CFURL(aURL,this.URL()),_23a);
};
_1a4.resolveResourceAtURL=function(aURL,_23b,_23c){
aURL=_1b7(aURL).absoluteURL();
_23d(_232(aURL),_23b,aURL.pathComponents(),0,_23c);
};
_1a4.prototype.resolveResourceAtURL=function(aURL,_23e,_23f){
_1a4.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_23e,_23f);
};
function _23d(_240,_241,_242,_243,_244){
var _245=_242.length;
for(;_243<_245;++_243){
var name=_242[_243],_246=_71.call(_240._children,name)&&_240._children[name];
if(!_246){
_246=new _1a4(new CFURL(name,_240.URL()),_240,_243+1<_245||_241,NO);
_246.resolve();
}
if(!_246.isResolved()){
return _246.addEventListener("resolve",function(){
_23d(_240,_241,_242,_243,_244);
});
}
if(_246.isNotFound()){
return _244(null,new Error("File not found: "+_242.join("/")));
}
if((_243+1<_245)&&_246.isFile()){
return _244(null,new Error("File is not a directory: "+_242.join("/")));
}
_240=_246;
}
_244(_240);
};
function _247(aURL,_248,_249){
var _24a=_1a4.includeURLs(),_24b=new CFURL(aURL,_24a[_248]).absoluteURL();
_1a4.resolveResourceAtURL(_24b,NO,function(_24c){
if(!_24c){
if(_248+1<_24a.length){
_247(aURL,_248+1,_249);
}else{
_249(NULL);
}
return;
}
_249(_24c);
});
};
_1a4.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_24d){
_247(aURL,0,_24d);
};
_1a4.prototype.addEventListener=function(_24e,_24f){
this._eventDispatcher.addEventListener(_24e,_24f);
};
_1a4.prototype.removeEventListener=function(_250,_251){
this._eventDispatcher.removeEventListener(_250,_251);
};
_1a4.prototype.isNotFound=function(){
return this._isNotFound;
};
_1a4.prototype.isFile=function(){
return !this._isDirectory;
};
_1a4.prototype.isDirectory=function(){
return this._isDirectory;
};
_1a4.prototype.toString=function(_252){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _253=this.name();
if(this.isDirectory()){
var _254=this._children;
for(var name in _254){
if(_254.hasOwnProperty(name)){
var _255=_254[name];
if(_252||!_255.isNotFound()){
_253+="\n\t"+_254[name].toString(_252).split("\n").join("\n\t");
}
}
}
}
return _253;
};
var _256=NULL;
_1a4.includeURLs=function(){
if(_257){
return _257;
}
var _257=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_257=["Frameworks","Frameworks/Debug"];
}else{
_257=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _258=_257.length;
while(_258--){
_257[_258]=new CFURL(_257[_258]).asDirectoryPathURL();
}
return _257;
};
var _259="accessors",_25a="class",_25b="end",_25c="function",_25d="implementation",_25e="import",_25f="each",_260="outlet",_261="action",_262="new",_263="selector",_264="super",_265="var",_266="in",_267="=",_268="+",_269="-",_26a=":",_26b=",",_26c=".",_26d="*",_26e=";",_26f="<",_270="{",_271="}",_272=">",_273="[",_274="\"",_275="@",_276="]",_277="?",_278="(",_279=")",_27a=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_27b=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_27c=/^[a-zA-Z_$](\w|$)*$/;
function _27d(_27e){
this._index=-1;
this._tokens=(_27e+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_27d.prototype.push=function(){
this._context.push(this._index);
};
_27d.prototype.pop=function(){
this._index=this._context.pop();
};
_27d.prototype.peak=function(_27f){
if(_27f){
this.push();
var _280=this.skip_whitespace();
this.pop();
return _280;
}
return this._tokens[this._index+1];
};
_27d.prototype.next=function(){
return this._tokens[++this._index];
};
_27d.prototype.previous=function(){
return this._tokens[--this._index];
};
_27d.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_27d.prototype.skip_whitespace=function(_281){
var _282;
if(_281){
while((_282=this.previous())&&_27a.test(_282)){
}
}else{
while((_282=this.next())&&_27a.test(_282)){
}
}
return _282;
};
_2.Lexer=_27d;
function _283(){
this.atoms=[];
};
_283.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_284,aURL,_285){
return new _286(_284,aURL,_285).executable();
};
_2.eval=function(_287){
return eval(_2.preprocess(_287).code());
};
var _286=function(_288,aURL,_289){
this._URL=new CFURL(aURL);
_288=_288.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _283();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _27d(_288);
this._flags=_289;
this._classMethod=false;
this._executable=NULL;
this.preprocess(this._tokens,this._buffer);
};
_2.Preprocessor=_286;
_286.Flags={};
_286.Flags.IncludeDebugSymbols=1<<0;
_286.Flags.IncludeTypeSignatures=1<<1;
_286.prototype.executable=function(){
if(!this._executable){
this._executable=new _28a(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_286.prototype.accessors=function(_28b){
var _28c=_28b.skip_whitespace(),_28d={};
if(_28c!=_278){
_28b.previous();
return _28d;
}
while((_28c=_28b.skip_whitespace())!=_279){
var name=_28c,_28e=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_28c=_28b.skip_whitespace())==_267){
_28e=_28b.skip_whitespace();
if(!/^\w+$/.test(_28e)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_28c=_28b.next())!=_26a){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_28e+=":";
}
_28c=_28b.skip_whitespace();
}
_28d[name]=_28e;
if(_28c==_279){
break;
}
if(_28c!=_26b){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _28d;
};
_286.prototype.brackets=function(_28f,_290){
var _291=[];
while(this.preprocess(_28f,NULL,NULL,NULL,_291[_291.length]=[])){
}
if(_291[0].length===1){
_290.atoms[_290.atoms.length]="[";
_290.atoms[_290.atoms.length]=_291[0][0];
_290.atoms[_290.atoms.length]="]";
}else{
var _292=new _283();
if(_291[0][0].atoms[0]==_264){
_290.atoms[_290.atoms.length]="objj_msgSendSuper(";
_290.atoms[_290.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_290.atoms[_290.atoms.length]="objj_msgSend(";
_290.atoms[_290.atoms.length]=_291[0][0];
}
_292.atoms[_292.atoms.length]=_291[0][1];
var _293=1,_294=_291.length,_295=new _283();
for(;_293<_294;++_293){
var pair=_291[_293];
_292.atoms[_292.atoms.length]=pair[1];
_295.atoms[_295.atoms.length]=", "+pair[0];
}
_290.atoms[_290.atoms.length]=", \"";
_290.atoms[_290.atoms.length]=_292;
_290.atoms[_290.atoms.length]="\"";
_290.atoms[_290.atoms.length]=_295;
_290.atoms[_290.atoms.length]=")";
}
};
_286.prototype.directive=function(_296,_297,_298){
var _299=_297?_297:new _283(),_29a=_296.next();
if(_29a.charAt(0)==_274){
_299.atoms[_299.atoms.length]=_29a;
}else{
if(_29a===_25a){
_296.skip_whitespace();
return;
}else{
if(_29a===_25d){
this.implementation(_296,_299);
}else{
if(_29a===_25e){
this._import(_296);
}else{
if(_29a===_263){
this.selector(_296,_299);
}
}
}
}
}
if(!_297){
return _299;
}
};
_286.prototype.implementation=function(_29b,_29c){
var _29d=_29c,_29e="",_29f=NO,_2a0=_29b.skip_whitespace(),_2a1="Nil",_2a2=new _283(),_2a3=new _283();
if(!(/^\w/).test(_2a0)){
throw new Error(this.error_message("*** Expected class name, found \""+_2a0+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_2a0+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_2a0+"\").super_class";
this._currentClass=_2a0;
this._currentSelector="";
if((_29e=_29b.skip_whitespace())==_278){
_29e=_29b.skip_whitespace();
if(_29e==_279){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_2a0+"\"."));
}
if(_29b.skip_whitespace()!=_279){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_2a0+"\"."));
}
_29d.atoms[_29d.atoms.length]="{\nvar the_class = objj_getClass(\""+_2a0+"\")\n";
_29d.atoms[_29d.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_2a0+"\\\"\");\n";
_29d.atoms[_29d.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_29e==_26a){
_29e=_29b.skip_whitespace();
if(!_27c.test(_29e)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_29e+"\"."));
}
_2a1=_29e;
_29e=_29b.skip_whitespace();
}
_29d.atoms[_29d.atoms.length]="{var the_class = objj_allocateClassPair("+_2a1+", \""+_2a0+"\"),\nmeta_class = the_class.isa;";
if(_29e==_270){
var _2a4=0,_2a5=[],_2a6,_2a7={};
while((_29e=_29b.skip_whitespace())&&_29e!=_271){
if(_29e===_275){
_29e=_29b.next();
if(_29e===_259){
_2a6=this.accessors(_29b);
}else{
if(_29e!==_260){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_29e+"')."));
}
}
}else{
if(_29e==_26e){
if(_2a4++==0){
_29d.atoms[_29d.atoms.length]="class_addIvars(the_class, [";
}else{
_29d.atoms[_29d.atoms.length]=", ";
}
var name=_2a5[_2a5.length-1];
_29d.atoms[_29d.atoms.length]="new objj_ivar(\""+name+"\")";
_2a5=[];
if(_2a6){
_2a7[name]=_2a6;
_2a6=NULL;
}
}else{
_2a5.push(_29e);
}
}
}
if(_2a5.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_2a4){
_29d.atoms[_29d.atoms.length]="]);\n";
}
if(!_29e){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
for(ivar_name in _2a7){
var _2a8=_2a7[ivar_name],_2a9=_2a8["property"]||ivar_name;
var _2aa=_2a8["getter"]||_2a9,_2ab="(id)"+_2aa+"\n{\nreturn "+ivar_name+";\n}";
if(_2a2.atoms.length!==0){
_2a2.atoms[_2a2.atoms.length]=",\n";
}
_2a2.atoms[_2a2.atoms.length]=this.method(new _27d(_2ab));
if(_2a8["readonly"]){
continue;
}
var _2ac=_2a8["setter"];
if(!_2ac){
var _2ad=_2a9.charAt(0)=="_"?1:0;
_2ac=(_2ad?"_":"")+"set"+_2a9.substr(_2ad,1).toUpperCase()+_2a9.substring(_2ad+1)+":";
}
var _2ae="(void)"+_2ac+"(id)newValue\n{\n";
if(_2a8["copy"]){
_2ae+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_2ae+=ivar_name+" = newValue;\n}";
}
if(_2a2.atoms.length!==0){
_2a2.atoms[_2a2.atoms.length]=",\n";
}
_2a2.atoms[_2a2.atoms.length]=this.method(new _27d(_2ae));
}
}else{
_29b.previous();
}
_29d.atoms[_29d.atoms.length]="objj_registerClassPair(the_class);\n";
}
while((_29e=_29b.skip_whitespace())){
if(_29e==_268){
this._classMethod=true;
if(_2a3.atoms.length!==0){
_2a3.atoms[_2a3.atoms.length]=", ";
}
_2a3.atoms[_2a3.atoms.length]=this.method(_29b);
}else{
if(_29e==_269){
this._classMethod=false;
if(_2a2.atoms.length!==0){
_2a2.atoms[_2a2.atoms.length]=", ";
}
_2a2.atoms[_2a2.atoms.length]=this.method(_29b);
}else{
if(_29e==_275){
if((_29e=_29b.next())==_25b){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_29e+"\"."));
}
}
}
}
}
if(_2a2.atoms.length!==0){
_29d.atoms[_29d.atoms.length]="class_addMethods(the_class, [";
_29d.atoms[_29d.atoms.length]=_2a2;
_29d.atoms[_29d.atoms.length]="]);\n";
}
if(_2a3.atoms.length!==0){
_29d.atoms[_29d.atoms.length]="class_addMethods(meta_class, [";
_29d.atoms[_29d.atoms.length]=_2a3;
_29d.atoms[_29d.atoms.length]="]);\n";
}
_29d.atoms[_29d.atoms.length]="}";
this._currentClass="";
};
_286.prototype._import=function(_2af){
var _2b0="",_2b1=_2af.skip_whitespace(),_2b2=(_2b1!==_26f);
if(_2b1===_26f){
while((_2b1=_2af.next())&&_2b1!==_272){
_2b0+=_2b1;
}
if(!_2b1){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_2b1.charAt(0)===_274){
_2b0=_2b1.substr(1,_2b1.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_2b1+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_2b0;
this._buffer.atoms[this._buffer.atoms.length]=_2b2?"\", YES);":"\", NO);";
this._dependencies.push(new _2b3(new CFURL(_2b0),_2b2));
};
_286.prototype.method=function(_2b4){
var _2b5=new _283(),_2b6,_2b7="",_2b8=[],_2b9=[null];
while((_2b6=_2b4.skip_whitespace())&&_2b6!=_270){
if(_2b6==_26a){
var type="";
_2b7+=_2b6;
_2b6=_2b4.skip_whitespace();
if(_2b6==_278){
while((_2b6=_2b4.skip_whitespace())&&_2b6!=_279){
type+=_2b6;
}
_2b6=_2b4.skip_whitespace();
}
_2b9[_2b8.length+1]=type||null;
_2b8[_2b8.length]=_2b6;
}else{
if(_2b6==_278){
var type="";
while((_2b6=_2b4.skip_whitespace())&&_2b6!=_279){
type+=_2b6;
}
_2b9[0]=type||null;
}else{
if(_2b6==_26b){
if((_2b6=_2b4.skip_whitespace())!=_26c||_2b4.next()!=_26c||_2b4.next()!=_26c){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_2b7+=_2b6;
}
}
}
}
var _2ba=0,_2bb=_2b8.length;
_2b5.atoms[_2b5.atoms.length]="new objj_method(sel_getUid(\"";
_2b5.atoms[_2b5.atoms.length]=_2b7;
_2b5.atoms[_2b5.atoms.length]="\"), function";
this._currentSelector=_2b7;
if(this._flags&_286.Flags.IncludeDebugSymbols){
_2b5.atoms[_2b5.atoms.length]=" $"+this._currentClass+"__"+_2b7.replace(/:/g,"_");
}
_2b5.atoms[_2b5.atoms.length]="(self, _cmd";
for(;_2ba<_2bb;++_2ba){
_2b5.atoms[_2b5.atoms.length]=", ";
_2b5.atoms[_2b5.atoms.length]=_2b8[_2ba];
}
_2b5.atoms[_2b5.atoms.length]=")\n{ with(self)\n{";
_2b5.atoms[_2b5.atoms.length]=this.preprocess(_2b4,NULL,_271,_270);
_2b5.atoms[_2b5.atoms.length]="}\n}";
if(this._flags&_286.Flags.IncludeDebugSymbols){
_2b5.atoms[_2b5.atoms.length]=","+JSON.stringify(_2b9);
}
_2b5.atoms[_2b5.atoms.length]=")";
this._currentSelector="";
return _2b5;
};
_286.prototype.preprocess=function(_2bc,_2bd,_2be,_2bf,_2c0){
var _2c1=_2bd?_2bd:new _283(),_2c2=0,_2c3="";
if(_2c0){
_2c0[0]=_2c1;
var _2c4=false,_2c5=[0,0,0];
}
while((_2c3=_2bc.next())&&((_2c3!==_2be)||_2c2)){
if(_2c0){
if(_2c3===_277){
++_2c5[2];
}else{
if(_2c3===_270){
++_2c5[0];
}else{
if(_2c3===_271){
--_2c5[0];
}else{
if(_2c3===_278){
++_2c5[1];
}else{
if(_2c3===_279){
--_2c5[1];
}else{
if((_2c3===_26a&&_2c5[2]--===0||(_2c4=(_2c3===_276)))&&_2c5[0]===0&&_2c5[1]===0){
_2bc.push();
var _2c6=_2c4?_2bc.skip_whitespace(true):_2bc.previous(),_2c7=_27a.test(_2c6);
if(_2c7||_27c.test(_2c6)&&_27a.test(_2bc.previous())){
_2bc.push();
var last=_2bc.skip_whitespace(true),_2c8=true,_2c9=false;
if(last==="+"||last==="-"){
if(_2bc.previous()!==last){
_2c8=false;
}else{
last=_2bc.skip_whitespace(true);
_2c9=true;
}
}
_2bc.pop();
_2bc.pop();
if(_2c8&&((!_2c9&&(last===_271))||last===_279||last===_276||last===_26c||_27b.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_27c.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2c7){
_2c0[1]=":";
}else{
_2c0[1]=_2c6;
if(!_2c4){
_2c0[1]+=":";
}
var _2c2=_2c1.atoms.length;
while(_2c1.atoms[_2c2--]!==_2c6){
}
_2c1.atoms.length=_2c2;
}
return !_2c4;
}
if(_2c4){
return NO;
}
}
_2bc.pop();
if(_2c4){
return NO;
}
}
}
}
}
}
}
_2c5[2]=MAX(_2c5[2],0);
}
if(_2bf){
if(_2c3===_2bf){
++_2c2;
}else{
if(_2c3===_2be){
--_2c2;
}
}
}
if(_2c3===_25c){
var _2ca="";
while((_2c3=_2bc.next())&&_2c3!==_278&&!(/^\w/).test(_2c3)){
_2ca+=_2c3;
}
if(_2c3===_278){
if(_2bf===_278){
++_2c2;
}
_2c1.atoms[_2c1.atoms.length]="function"+_2ca+"(";
if(_2c0){
++_2c5[1];
}
}else{
_2c1.atoms[_2c1.atoms.length]=_2c3+"= function";
}
}else{
if(_2c3==_275){
this.directive(_2bc,_2c1);
}else{
if(_2c3==_273){
this.brackets(_2bc,_2c1);
}else{
_2c1.atoms[_2c1.atoms.length]=_2c3;
}
}
}
}
if(_2c0){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2bd){
return _2c1;
}
};
_286.prototype.selector=function(_2cb,_2cc){
var _2cd=_2cc?_2cc:new _283();
_2cd.atoms[_2cd.atoms.length]="sel_getUid(\"";
if(_2cb.skip_whitespace()!=_278){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2ce=_2cb.skip_whitespace();
if(_2ce==_279){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2cc.atoms[_2cc.atoms.length]=_2ce;
var _2cf,_2d0=true;
while((_2cf=_2cb.next())&&_2cf!=_279){
if(_2d0&&/^\d+$/.test(_2cf)||!(/^(\w|$|\:)/.test(_2cf))){
if(!(/\S/).test(_2cf)){
if(_2cb.skip_whitespace()==_279){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2cf+"' in @selector()."));
}
}
_2cd.atoms[_2cd.atoms.length]=_2cf;
_2d0=(_2cf==_26a);
}
_2cd.atoms[_2cd.atoms.length]="\")";
if(!_2cc){
return _2cd;
}
};
_286.prototype.error_message=function(_2d1){
return _2d1+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _2b3(aURL,_2d2){
this._URL=aURL;
this._isLocal=_2d2;
};
_2.FileDependency=_2b3;
_2b3.prototype.URL=function(){
return this._URL;
};
_2b3.prototype.isLocal=function(){
return this._isLocal;
};
_2b3.prototype.toMarkedString=function(){
var _2d3=this.URL().absoluteString();
return (this.isLocal()?_215:_214)+";"+_2d3.length+";"+_2d3;
};
_2b3.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2d4=0,_2d5=1,_2d6=2,_2d7=0;
function _28a(_2d8,_2d9,aURL,_2da){
if(arguments.length===0){
return this;
}
this._code=_2d8;
this._function=_2da||NULL;
this._URL=_1b7(aURL||new CFURL("(Anonymous"+(_2d7++)+")"));
this._fileDependencies=_2d9;
if(_2d9.length){
this._fileDependencyStatus=_2d4;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_2d6;
}
if(this._function){
return;
}
this.setCode(_2d8);
};
_2.Executable=_28a;
_28a.prototype.path=function(){
return this.URL().path();
};
_28a.prototype.URL=function(){
return this._URL;
};
_28a.prototype.functionParameters=function(){
var _2db=["global","objj_executeFile","objj_importFile"];
return _2db;
};
_28a.prototype.functionArguments=function(){
var _2dc=[_1,this.fileExecuter(),this.fileImporter()];
return _2dc;
};
_28a.prototype.execute=function(){
var _2dd=_2de;
_2de=CFBundle.bundleContainingURL(this.URL());
var _2df=this._function.apply(_1,this.functionArguments());
_2de=_2dd;
return _2df;
};
_28a.prototype.code=function(){
return this._code;
};
_28a.prototype.setCode=function(code){
this._code=code;
var _2e0=this.functionParameters().join(",");
this._function=new Function(_2e0,code);
};
_28a.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_28a.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_2d6;
};
var _2e1=0,_2e2=[],_2e3={};
_28a.prototype.loadFileDependencies=function(_2e4){
var _2e5=this._fileDependencyStatus;
if(_2e4){
if(_2e5===_2d6){
return _2e4();
}
this._fileDependencyCallbacks.push(_2e4);
}
if(_2e5===_2d4){
if(_2e1){
throw "Can't load";
}
_2e6(this);
}
};
function _2e6(_2e7){
_2e2.push(_2e7);
_2e7._fileDependencyStatus=_2d5;
var _2e8=_2e7.fileDependencies(),_8c=0,_2e9=_2e8.length,_2ea=_2e7.referenceURL(),_2eb=_2ea.absoluteString(),_2ec=_2e7.fileExecutableSearcher();
_2e1+=_2e9;
for(;_8c<_2e9;++_8c){
var _2ed=_2e8[_8c],_2ee=_2ed.isLocal(),URL=_2ed.URL(),_2ef=(_2ee&&(_2eb+" ")||"")+URL;
if(_2e3[_2ef]){
if(--_2e1===0){
_2f0();
}
continue;
}
_2e3[_2ef]=YES;
_2ec(URL,_2ee,_2f1);
}
};
function _2f1(_2f2){
--_2e1;
if(_2f2._fileDependencyStatus===_2d4){
_2e6(_2f2);
}else{
if(_2e1===0){
_2f0();
}
}
};
function _2f0(){
var _2f3=_2e2,_8c=0,_2f4=_2f3.length;
_2e2=[];
for(;_8c<_2f4;++_8c){
_2f3[_8c]._fileDependencyStatus=_2d6;
}
for(_8c=0;_8c<_2f4;++_8c){
var _2f5=_2f3[_8c],_2f6=_2f5._fileDependencyCallbacks,_2f7=0,_2f8=_2f6.length;
for(;_2f7<_2f8;++_2f7){
_2f6[_2f7]();
}
_2f5._fileDependencyCallbacks=[];
}
};
_28a.prototype.referenceURL=function(){
if(this._referenceURL===_44){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_28a.prototype.fileImporter=function(){
return _28a.fileImporterForURL(this.referenceURL());
};
_28a.prototype.fileExecuter=function(){
return _28a.fileExecuterForURL(this.referenceURL());
};
_28a.prototype.fileExecutableSearcher=function(){
return _28a.fileExecutableSearcherForURL(this.referenceURL());
};
var _2f9={};
_28a.fileExecuterForURL=function(aURL){
var _2fa=_1b7(aURL),_2fb=_2fa.absoluteString(),_2fc=_2f9[_2fb];
if(!_2fc){
_2fc=function(aURL,_2fd,_2fe){
_28a.fileExecutableSearcherForURL(_2fa)(aURL,_2fd,function(_2ff){
if(!_2ff.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_2ff.execute(_2fe);
});
};
_2f9[_2fb]=_2fc;
}
return _2fc;
};
var _300={};
_28a.fileImporterForURL=function(aURL){
var _301=_1b7(aURL),_302=_301.absoluteString(),_303=_300[_302];
if(!_303){
_303=function(aURL,_304,_305){
_159();
_28a.fileExecutableSearcherForURL(_301)(aURL,_304,function(_306){
_306.loadFileDependencies(function(){
_306.execute();
_15a();
if(_305){
_305();
}
});
});
};
_300[_302]=_303;
}
return _303;
};
var _307={},_308={};
_28a.fileExecutableSearcherForURL=function(_309){
var _30a=_309.absoluteString(),_30b=_307[_30a],_30c={};
if(!_30b){
_30b=function(aURL,_30d,_30e){
var _30f=(_30d&&_309||"")+aURL,_310=_308[_30f];
if(_310){
return _311(_310);
}
var _312=(aURL instanceof CFURL)&&aURL.scheme();
if(_30d||_312){
if(!_312){
aURL=new CFURL(aURL,_309);
}
_1a4.resolveResourceAtURL(aURL,NO,_311);
}else{
_1a4.resolveResourceAtURLSearchingIncludeURLs(aURL,_311);
}
function _311(_313){
if(!_313){
throw new Error("Could not load file at "+aURL);
}
_308[_30f]=_313;
_30e(new _314(_313.URL()));
};
};
_307[_30a]=_30b;
}
return _30b;
};
var _315={};
function _314(aURL){
aURL=_1b7(aURL);
var _316=aURL.absoluteString(),_317=_315[_316];
if(_317){
return _317;
}
_315[_316]=this;
var _318=_1a4.resourceAtURL(aURL).contents(),_319=NULL,_31a=aURL.pathExtension();
if(_318.match(/^@STATIC;/)){
_319=_31b(_318,aURL);
}else{
if(_31a==="j"||!_31a){
_319=_2.preprocess(_318,aURL,_286.Flags.IncludeDebugSymbols);
}else{
_319=new _28a(_318,[],aURL);
}
}
_28a.apply(this,[_319.code(),_319.fileDependencies(),aURL,_319._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_314;
_314.prototype=new _28a();
_314.prototype.execute=function(_31c){
if(this._hasExecuted&&!_31c){
return;
}
this._hasExecuted=YES;
_28a.prototype.execute.call(this);
};
_314.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _31b(_31d,aURL){
var _31e=new _111(_31d);
var _31f=NULL,code="",_320=[];
while(_31f=_31e.getMarker()){
var text=_31e.getString();
if(_31f===_213){
code+=text;
}else{
if(_31f===_214){
_320.push(new _2b3(new CFURL(text),NO));
}else{
if(_31f===_215){
_320.push(new _2b3(new CFURL(text),YES));
}
}
}
}
var fn=_314._lookupCachedFunction(aURL);
if(fn){
return new _28a(code,_320,aURL,fn);
}
return new _28a(code,_320,aURL);
};
var _321={};
_314._cacheFunction=function(aURL,fn){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
_321[aURL]=fn;
};
_314._lookupCachedFunction=function(aURL){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
return _321[aURL];
};
var _322=1,_323=2,_324=4,_325=8;
objj_ivar=function(_326,_327){
this.name=_326;
this.type=_327;
};
objj_method=function(_328,_329,_32a){
this.name=_328;
this.method_imp=_329;
this.types=_32a;
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
class_getName=function(_32b){
if(_32b==Nil){
return "";
}
return _32b.name;
};
class_isMetaClass=function(_32c){
if(!_32c){
return NO;
}
return ((_32c.info&(_323)));
};
class_getSuperclass=function(_32d){
if(_32d==Nil){
return Nil;
}
return _32d.super_class;
};
class_setSuperclass=function(_32e,_32f){
_32e.super_class=_32f;
_32e.isa.super_class=_32f.isa;
};
class_addIvar=function(_330,_331,_332){
var _333=_330.allocator.prototype;
if(typeof _333[_331]!="undefined"){
return NO;
}
_330.ivars.push(new objj_ivar(_331,_332));
_333[_331]=NULL;
return YES;
};
class_addIvars=function(_334,_335){
var _336=0,_337=_335.length,_338=_334.allocator.prototype;
for(;_336<_337;++_336){
var ivar=_335[_336],name=ivar.name;
if(typeof _338[name]==="undefined"){
_334.ivars.push(ivar);
_338[name]=NULL;
}
}
};
class_copyIvarList=function(_339){
return _339.ivars.slice(0);
};
class_addMethod=function(_33a,_33b,_33c,_33d){
if(_33a.method_hash[_33b]){
return NO;
}
var _33e=new objj_method(_33b,_33c,_33d);
_33a.method_list.push(_33e);
_33a.method_dtable[_33b]=_33e;
if(!((_33a.info&(_323)))&&(((_33a.info&(_323)))?_33a:_33a.isa).isa===(((_33a.info&(_323)))?_33a:_33a.isa)){
class_addMethod((((_33a.info&(_323)))?_33a:_33a.isa),_33b,_33c,_33d);
}
return YES;
};
class_addMethods=function(_33f,_340){
var _341=0,_342=_340.length,_343=_33f.method_list,_344=_33f.method_dtable;
for(;_341<_342;++_341){
var _345=_340[_341];
if(_33f.method_hash[_345.name]){
continue;
}
_343.push(_345);
_344[_345.name]=_345;
}
if(!((_33f.info&(_323)))&&(((_33f.info&(_323)))?_33f:_33f.isa).isa===(((_33f.info&(_323)))?_33f:_33f.isa)){
class_addMethods((((_33f.info&(_323)))?_33f:_33f.isa),_340);
}
};
class_getInstanceMethod=function(_346,_347){
if(!_346||!_347){
return NULL;
}
var _348=_346.method_dtable[_347];
return _348?_348:NULL;
};
class_getClassMethod=function(_349,_34a){
if(!_349||!_34a){
return NULL;
}
var _34b=(((_349.info&(_323)))?_349:_349.isa).method_dtable[_34a];
return _34b?_34b:NULL;
};
class_copyMethodList=function(_34c){
return _34c.method_list.slice(0);
};
class_replaceMethod=function(_34d,_34e,_34f){
if(!_34d||!_34e){
return NULL;
}
var _350=_34d.method_dtable[_34e],_351=NULL;
if(_350){
_351=_350.method_imp;
}
_350.method_imp=_34f;
return _351;
};
var _352=function(_353){
var meta=(((_353.info&(_323)))?_353:_353.isa);
if((_353.info&(_323))){
_353=objj_getClass(_353.name);
}
if(_353.super_class&&!((((_353.super_class.info&(_323)))?_353.super_class:_353.super_class.isa).info&(_324))){
_352(_353.super_class);
}
if(!(meta.info&(_324))&&!(meta.info&(_325))){
meta.info=(meta.info|(_325))&~(0);
objj_msgSend(_353,"initialize");
meta.info=(meta.info|(_324))&~(_325);
}
};
var _354=new objj_method("forward",function(self,_355){
return objj_msgSend(self,"forward::",_355,arguments);
});
class_getMethodImplementation=function(_356,_357){
if(!((((_356.info&(_323)))?_356:_356.isa).info&(_324))){
_352(_356);
}
var _358=_356.method_dtable[_357];
if(!_358){
_358=_354;
}
var _359=_358.method_imp;
return _359;
};
var _35a={};
objj_allocateClassPair=function(_35b,_35c){
var _35d=new objj_class(),_35e=new objj_class(),_35f=_35d;
if(_35b){
_35f=_35b;
while(_35f.superclass){
_35f=_35f.superclass;
}
_35d.allocator.prototype=new _35b.allocator;
_35d.method_store.prototype=new _35b.method_store;
_35d.method_dtable=_35d.method_store.prototype;
_35e.method_store.prototype=new _35b.isa.method_store;
_35e.method_dtable=_35e.method_store.prototype;
_35d.super_class=_35b;
_35e.super_class=_35b.isa;
}else{
_35d.allocator.prototype=new objj_object();
}
_35d.isa=_35e;
_35d.name=_35c;
_35d.info=_322;
_35d._UID=objj_generateObjectUID();
_35e.isa=_35f.isa;
_35e.name=_35c;
_35e.info=_323;
_35e._UID=objj_generateObjectUID();
return _35d;
};
var _2de=nil;
objj_registerClassPair=function(_360){
_1[_360.name]=_360;
_35a[_360.name]=_360;
_1be(_360,_2de);
};
class_createInstance=function(_361){
if(!_361){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _362=new _361.allocator();
_362.isa=_361;
_362._UID=objj_generateObjectUID();
return _362;
};
var _363=function(){
};
_363.prototype.member=false;
with(new _363()){
member=true;
}
if(new _363().member){
var _364=class_createInstance;
class_createInstance=function(_365){
var _366=_364(_365);
if(_366){
var _367=_366.isa,_368=_367;
while(_367){
var _369=_367.ivars;
count=_369.length;
while(count--){
_366[_369[count].name]=NULL;
}
_367=_367.super_class;
}
_366.isa=_368;
}
return _366;
};
}
object_getClassName=function(_36a){
if(!_36a){
return "";
}
var _36b=_36a.isa;
return _36b?class_getName(_36b):"";
};
objj_lookUpClass=function(_36c){
var _36d=_35a[_36c];
return _36d?_36d:Nil;
};
objj_getClass=function(_36e){
var _36f=_35a[_36e];
if(!_36f){
}
return _36f?_36f:Nil;
};
objj_getMetaClass=function(_370){
var _371=objj_getClass(_370);
return (((_371.info&(_323)))?_371:_371.isa);
};
ivar_getName=function(_372){
return _372.name;
};
ivar_getTypeEncoding=function(_373){
return _373.type;
};
objj_msgSend=function(_374,_375){
if(_374==nil){
return nil;
}
var isa=_374.isa;
if(!((((isa.info&(_323)))?isa:isa.isa).info&(_324))){
_352(isa);
}
var _376=isa.method_dtable[_375];
if(!_376){
_376=_354;
}
var _377=_376.method_imp;
switch(arguments.length){
case 2:
return _377(_374,_375);
case 3:
return _377(_374,_375,arguments[2]);
case 4:
return _377(_374,_375,arguments[2],arguments[3]);
}
return _377.apply(_374,arguments);
};
objj_msgSendSuper=function(_378,_379){
var _37a=_378.super_class;
arguments[0]=_378.receiver;
if(!((((_37a.info&(_323)))?_37a:_37a.isa).info&(_324))){
_352(_37a);
}
var _37b=_37a.method_dtable[_379];
if(!_37b){
_37b=_354;
}
var _37c=_37b.method_imp;
return _37c.apply(_378.receiver,arguments);
};
method_getName=function(_37d){
return _37d.name;
};
method_getImplementation=function(_37e){
return _37e.method_imp;
};
method_setImplementation=function(_37f,_380){
var _381=_37f.method_imp;
_37f.method_imp=_380;
return _381;
};
method_exchangeImplementations=function(lhs,rhs){
var _382=method_getImplementation(lhs),_383=method_getImplementation(rhs);
method_setImplementation(lhs,_383);
method_setImplementation(rhs,_382);
};
sel_getName=function(_384){
return _384?_384:"<null selector>";
};
sel_getUid=function(_385){
return _385;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_386){
return _386;
};
objj_eval=function(_387){
var url=_2.pageURL;
var _388=_2.asyncLoader;
_2.asyncLoader=NO;
var _389=_2.preprocess(_387,url,0);
if(!_389.hasLoadedFileDependencies()){
_389.loadFileDependencies();
}
_1._objj_eval_scope={};
_1._objj_eval_scope.objj_executeFile=_28a.fileExecuterForURL(url);
_1._objj_eval_scope.objj_importFile=_28a.fileImporterForURL(url);
var code="with(_objj_eval_scope){"+_389._code+"\n//*/\n}";
var _38a;
_38a=eval(code);
_2.asyncLoader=_388;
return _38a;
};
_2.objj_eval=objj_eval;
_159();
var _38b=new CFURL(window.location.href),_38c=document.getElementsByTagName("base"),_38d=_38c.length;
if(_38d>0){
var _38e=_38c[_38d-1],_38f=_38e&&_38e.getAttribute("href");
if(_38f){
_38b=new CFURL(_38f,_38b);
}
}
var _390=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1bd=new CFURL(".",new CFURL(_390,_38b)).absoluteURL(),_391=new CFURL("..",_1bd).absoluteURL();
if(_1bd===_391){
_391=new CFURL(_391.schemeAndAuthority());
}
_1a4.resourceAtURL(_391,YES);
_2.pageURL=_38b;
_2.bootstrap=function(){
_392();
};
function _392(){
_1a4.resolveResourceAtURL(_1bd,YES,function(_393){
var _394=_1a4.includeURLs(),_8c=0,_395=_394.length;
for(;_8c<_395;++_8c){
_393.resourceAtURL(_394[_8c],YES);
}
_28a.fileImporterForURL(_1bd)(_390.lastPathComponent(),YES,function(){
_15a();
_39b(function(){
var _396=window.location.hash.substring(1),args=[];
if(_396.length){
args=_396.split("/");
for(var i=0,_395=args.length;i<_395;i++){
args[i]=decodeURIComponent(args[i]);
}
}
var _397=window.location.search.substring(1).split("&"),_398=new CFMutableDictionary();
for(var i=0,_395=_397.length;i<_395;i++){
var _399=_397[i].split("=");
if(!_399[0]){
continue;
}
if(_399[1]==null){
_399[1]=true;
}
_398.setValueForKey(decodeURIComponent(_399[0]),decodeURIComponent(_399[1]));
}
main(args,_398);
});
});
});
};
var _39a=NO;
function _39b(_39c){
if(_39a){
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
_39b(function(){
_39a=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1b7(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1bd);
};
objj_importFile=_28a.fileImporterForURL(_1bd);
objj_executeFile=_28a.fileExecuterForURL(_1bd);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
