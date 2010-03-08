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
CFHTTPRequest.prototype.open=function(){
return this._nativeRequest.open(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
};
CFHTTPRequest.prototype.send=function(_98){
try{
return this._nativeRequest.send(_98);
}
catch(anException){
this._eventDispatcher.dispatchEvent({type:"failure",request:this});
}
};
CFHTTPRequest.prototype.abort=function(){
return this._nativeRequest.abort();
};
CFHTTPRequest.prototype.addEventListener=function(_99,_9a){
this._eventDispatcher.addEventListener(_99,_9a);
};
CFHTTPRequest.prototype.removeEventListener=function(_9b,_9c){
this._eventDispatcher.removeEventListener(_9b,_9c);
};
function _8f(_9d){
var _9e=_9d._eventDispatcher;
_9e.dispatchEvent({type:"readystatechange",request:_9d});
var _9f=_9d._nativeRequest,_a0=["uninitialized","loading","loaded","interactive","complete"][_9d.readyState()];
_9e.dispatchEvent({type:_a0,request:_9d});
if(_a0==="complete"){
var _a1="HTTP"+_9d.status();
_9e.dispatchEvent({type:_a1,request:_9d});
var _a2=_9d.success()?"success":"failure";
_9e.dispatchEvent({type:_a2,request:_9d});
}
};
function _a3(_a4,_a5,_a6){
var _a7=new CFHTTPRequest();
_a7.onsuccess=_83(_a5);
_a7.onfailure=_83(_a6);
if(_a4.pathExtension()==="plist"){
_a7.overrideMimeType("text/xml");
}
_a7.open("GET",_a4.absoluteString(),YES);
_a7.send("");
};
var _a8=0;
objj_generateObjectUID=function(){
return _a8++;
};
CFPropertyList=function(){
this._UID=objj_generateObjectUID();
};
CFPropertyList.DTDRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?/i;
CFPropertyList.XMLRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?<\s*plist[^>]*\>/i;
CFPropertyList.FormatXMLDTD="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">";
CFPropertyList.Format280NorthMagicNumber="280NPLIST";
CFPropertyList.FormatOpenStep=1,CFPropertyList.FormatXML_v1_0=100,CFPropertyList.FormatBinary_v1_0=200,CFPropertyList.Format280North_v1_0=-1000;
CFPropertyList.sniffedFormatOfString=function(_a9){
if(_a9.match(CFPropertyList.XMLRE)){
return CFPropertyList.FormatXML_v1_0;
}
if(_a9.substr(0,CFPropertyList.Format280NorthMagicNumber.length)===CFPropertyList.Format280NorthMagicNumber){
return CFPropertyList.Format280North_v1_0;
}
return NULL;
};
CFPropertyList.dataFromPropertyList=function(_aa,_ab){
var _ac=new CFMutableData();
_ac.setRawString(CFPropertyList.stringFromPropertyList(_aa,_ab));
return _ac;
};
CFPropertyList.stringFromPropertyList=function(_ad,_ae){
if(!_ae){
_ae=CFPropertyList.Format280North_v1_0;
}
var _af=_b0[_ae];
return _af["start"]()+_b1(_ad,_af)+_af["finish"]();
};
function _b1(_b2,_b3){
var _b4=typeof _b2,_b5=_b2.valueOf(),_b6=typeof _b5;
if(_b4!==_b6){
_b4=_b6;
_b2=_b5;
}
if(_b2===YES||_b2===NO){
_b4="boolean";
}else{
if(_b4==="number"){
if(FLOOR(_b2)===_b2){
_b4="integer";
}else{
_b4="real";
}
}else{
if(_b4!=="string"){
if(_b2.slice){
_b4="array";
}else{
_b4="dictionary";
}
}
}
}
return _b3[_b4](_b2,_b3);
};
var _b0={};
_b0[CFPropertyList.FormatXML_v1_0]={"start":function(){
return CFPropertyList.FormatXMLDTD+"<plist version = \"1.0\">";
},"finish":function(){
return "</plist>";
},"string":function(_b7){
return "<string>"+_b8(_b7)+"</string>";
},"boolean":function(_b9){
return _b9?"<true/>":"<false/>";
},"integer":function(_ba){
return "<integer>"+_ba+"</integer>";
},"real":function(_bb){
return "<real>"+_bb+"</real>";
},"array":function(_bc,_bd){
var _be=0,_bf=_bc.length,_c0="<array>";
for(;_be<_bf;++_be){
_c0+=_b1(_bc[_be],_bd);
}
return _c0+"</array>";
},"dictionary":function(_c1,_c2){
var _c3=_c1._keys,_8c=0,_c4=_c3.length,_c5="<dict>";
for(;_8c<_c4;++_8c){
var key=_c3[_8c];
_c5+="<key>"+key+"</key>";
_c5+=_b1(_c1.valueForKey(key),_c2);
}
return _c5+"</dict>";
}};
var _c6="A",_c7="D",_c8="f",_c9="d",_ca="S",_cb="T",_cc="F",_cd="K",_ce="E";
_b0[CFPropertyList.Format280North_v1_0]={"start":function(){
return CFPropertyList.Format280NorthMagicNumber+";1.0;";
},"finish":function(){
return "";
},"string":function(_cf){
return _ca+";"+_cf.length+";"+_cf;
},"boolean":function(_d0){
return (_d0?_cb:_cc)+";";
},"integer":function(_d1){
var _d2=""+_d1;
return _c9+";"+_d2.length+";"+_d2;
},"real":function(_d3){
var _d4=""+_d3;
return _c8+";"+_d4.length+";"+_d4;
},"array":function(_d5,_d6){
var _d7=0,_d8=_d5.length,_d9=_c6+";";
for(;_d7<_d8;++_d7){
_d9+=_b1(_d5[_d7],_d6);
}
return _d9+_ce+";";
},"dictionary":function(_da,_db){
var _dc=_da._keys,_8c=0,_dd=_dc.length,_de=_c7+";";
for(;_8c<_dd;++_8c){
var key=_dc[_8c];
_de+=_cd+";"+key.length+";"+key;
_de+=_b1(_da.valueForKey(key),_db);
}
return _de+_ce+";";
}};
var _df="xml",_e0="#document",_e1="plist",_e2="key",_e3="dict",_e4="array",_e5="string",_e6="true",_e7="false",_e8="real",_e9="integer",_ea="data";
var _eb=function(_ec,_ed,_ee){
var _ef=_ec;
_ef=(_ef.firstChild);
if(_ef!==NULL&&((_ef.nodeType)===8||(_ef.nodeType)===3)){
while((_ef=(_ef.nextSibling))&&((_ef.nodeType)===8||(_ef.nodeType)===3)){
}
}
if(_ef){
return _ef;
}
if((String(_ec.nodeName))===_e4||(String(_ec.nodeName))===_e3){
_ee.pop();
}else{
if(_ef===_ed){
return NULL;
}
_ef=_ec;
while((_ef=(_ef.nextSibling))&&((_ef.nodeType)===8||(_ef.nodeType)===3)){
}
if(_ef){
return _ef;
}
}
_ef=_ec;
while(_ef){
var _f0=_ef;
while((_f0=(_f0.nextSibling))&&((_f0.nodeType)===8||(_f0.nodeType)===3)){
}
if(_f0){
return _f0;
}
var _ef=(_ef.parentNode);
if(_ed&&_ef===_ed){
return NULL;
}
_ee.pop();
}
return NULL;
};
CFPropertyList.propertyListFromData=function(_f1,_f2){
return CFPropertyList.propertyListFromString(_f1.rawString(),_f2);
};
CFPropertyList.propertyListFromString=function(_f3,_f4){
if(!_f4){
_f4=CFPropertyList.sniffedFormatOfString(_f3);
}
if(_f4===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(_f3);
}
if(_f4===CFPropertyList.Format280North_v1_0){
return _f5(_f3);
}
return NULL;
};
var _c6="A",_c7="D",_c8="f",_c9="d",_ca="S",_cb="T",_cc="F",_cd="K",_ce="E";
function _f5(_f6){
var _f7=new _f8(_f6),_f9=NULL,key="",_fa=NULL,_fb=NULL,_fc=[],_fd=NULL;
while(_f9=_f7.getMarker()){
if(_f9===_ce){
_fc.pop();
continue;
}
var _fe=_fc.length;
if(_fe){
_fd=_fc[_fe-1];
}
if(_f9===_cd){
key=_f7.getString();
_f9=_f7.getMarker();
}
switch(_f9){
case _c6:
_fa=[];
_fc.push(_fa);
break;
case _c7:
_fa=new CFMutableDictionary();
_fc.push(_fa);
break;
case _c8:
_fa=parseFloat(_f7.getString());
break;
case _c9:
_fa=parseInt(_f7.getString(),10);
break;
case _ca:
_fa=_f7.getString();
break;
case _cb:
_fa=YES;
break;
case _cc:
_fa=NO;
break;
default:
throw new Error("*** "+_f9+" marker not recognized in Plist.");
}
if(!_fb){
_fb=_fa;
}else{
if(_fd){
if(_fd.slice){
_fd.push(_fa);
}else{
_fd.setValueForKey(key,_fa);
}
}
}
}
return _fb;
};
function _b8(_ff){
return _ff.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
function _100(_101){
return _101.replace(/&quot;/g,"\"").replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
};
function _92(_102){
if(window.DOMParser){
return (new window.DOMParser().parseFromString(_102,"text/xml").documentElement);
}else{
if(window.ActiveXObject){
XMLNode=new ActiveXObject("Microsoft.XMLDOM");
var _103=_102.match(CFPropertyList.DTDRE);
if(_103){
_102=_102.substr(_103[0].length);
}
XMLNode.loadXML(_102);
return XMLNode;
}
}
return NULL;
};
CFPropertyList.propertyListFromXML=function(_104){
var _105=_104;
if(_104.valueOf&&typeof _104.valueOf()==="string"){
_105=_92(_104);
}
while(((String(_105.nodeName))===_e0)||((String(_105.nodeName))===_df)){
_105=(_105.firstChild);
}
if(_105!==NULL&&((_105.nodeType)===8||(_105.nodeType)===3)){
while((_105=(_105.nextSibling))&&((_105.nodeType)===8||(_105.nodeType)===3)){
}
}
if(((_105.nodeType)===10)){
while((_105=(_105.nextSibling))&&((_105.nodeType)===8||(_105.nodeType)===3)){
}
}
if(!((String(_105.nodeName))===_e1)){
return NULL;
}
var key="",_106=NULL,_107=NULL,_108=_105,_109=[],_10a=NULL;
while(_105=_eb(_105,_108,_109)){
var _10b=_109.length;
if(_10b){
_10a=_109[_10b-1];
}
if((String(_105.nodeName))===_e2){
key=((String((_105.firstChild).nodeValue)));
while((_105=(_105.nextSibling))&&((_105.nodeType)===8||(_105.nodeType)===3)){
}
}
switch(String((String(_105.nodeName)))){
case _e4:
_106=[];
_109.push(_106);
break;
case _e3:
_106=new CFMutableDictionary();
_109.push(_106);
break;
case _e8:
_106=parseFloat(((String((_105.firstChild).nodeValue))));
break;
case _e9:
_106=parseInt(((String((_105.firstChild).nodeValue))),10);
break;
case _e5:
_106=_100((_105.firstChild)?((String((_105.firstChild).nodeValue))):"");
break;
case _e6:
_106=YES;
break;
case _e7:
_106=NO;
break;
case _ea:
_106=new CFMutableData();
_106.bytes=(_105.firstChild)?CFData.decodeBase64ToArray(((String((_105.firstChild).nodeValue))),YES):[];
break;
default:
throw new Error("*** "+(String(_105.nodeName))+" tag not recognized in Plist.");
}
if(!_107){
_107=_106;
}else{
if(_10a){
if(_10a.slice){
_10a.push(_106);
}else{
_10a.setValueForKey(key,_106);
}
}
}
}
return _107;
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
CFPropertyListCreateXMLData=function(_10c){
return CFPropertyList.dataFromPropertyList(_10c,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateFrom280NorthData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.Format280North_v1_0);
};
CFPropertyListCreate280NorthData=function(_10d){
return CFPropertyList.dataFromPropertyList(_10d,CFPropertyList.Format280North_v1_0);
};
CPPropertyListCreateFromData=function(data,_10e){
return CFPropertyList.propertyListFromData(data,_10e);
};
CPPropertyListCreateData=function(_10f,_110){
return CFPropertyList.dataFromPropertyList(_10f,_110);
};
CFDictionary=function(_111){
this._keys=[];
this._count=0;
this._buckets={};
this._UID=objj_generateObjectUID();
};
var _112=Array.prototype.indexOf,_71=Object.prototype.hasOwnProperty;
CFDictionary.prototype.copy=function(){
return this;
};
CFDictionary.prototype.mutableCopy=function(){
var _113=new CFMutableDictionary(),keys=this._keys,_114=this._count;
_113._keys=keys.slice();
_113._count=_114;
var _115=0,_116=this._buckets,_117=_113._buckets;
for(;_115<_114;++_115){
var key=keys[_115];
_117[key]=_116[key];
}
return _113;
};
CFDictionary.prototype.containsKey=function(aKey){
return _71.apply(this._buckets,[aKey]);
};
CFDictionary.prototype.containsValue=function(_118){
var keys=this._keys,_119=this._buckets,_8c=0,_11a=keys.length;
for(;_8c<_11a;++_8c){
if(_119[keys]===_118){
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
CFDictionary.prototype.countOfValue=function(_11b){
var keys=this._keys,_11c=this._buckets,_8c=0,_11d=keys.length,_11e=0;
for(;_8c<_11d;++_8c){
if(_11c[keys]===_11b){
return ++_11e;
}
}
return _11e;
};
CFDictionary.prototype.keys=function(){
return this._keys.slice();
};
CFDictionary.prototype.valueForKey=function(aKey){
var _11f=this._buckets;
if(!_71.apply(_11f,[aKey])){
return nil;
}
return _11f[aKey];
};
CFDictionary.prototype.toString=function(){
var _120="{\n",keys=this._keys,_8c=0,_121=this._count;
for(;_8c<_121;++_8c){
var key=keys[_8c];
_120+="\t"+key+" = \""+String(this.valueForKey(key)).split("\n").join("\n\t")+"\"\n";
}
return _120+"}";
};
CFMutableDictionary=function(_122){
CFDictionary.apply(this,[]);
};
CFMutableDictionary.prototype=new CFDictionary();
CFMutableDictionary.prototype.copy=function(){
return this.mutableCopy();
};
CFMutableDictionary.prototype.addValueForKey=function(aKey,_123){
if(this.containsKey(aKey)){
return;
}
++this._count;
this._keys.push(aKey);
this._buckets[aKey]=_123;
};
CFMutableDictionary.prototype.removeValueForKey=function(aKey){
var _124=-1;
if(_112){
_124=_112.call(this._keys,aKey);
}else{
var keys=this._keys,_8c=0,_125=keys.length;
for(;_8c<_125;++_8c){
if(keys[_8c]===aKey){
_124=_8c;
break;
}
}
}
if(_124===-1){
return;
}
--this._count;
this._keys.splice(_124,1);
delete this._buckets[aKey];
};
CFMutableDictionary.prototype.removeAllValues=function(){
this._count=0;
this._keys=[];
this._buckets={};
};
CFMutableDictionary.prototype.replaceValueForKey=function(aKey,_126){
if(!this.containsKey(aKey)){
return;
}
this._buckets[aKey]=_126;
};
CFMutableDictionary.prototype.setValueForKey=function(aKey,_127){
if(_127===nil||_127===_44){
this.removeValueForKey(aKey);
}else{
if(this.containsKey(aKey)){
this.replaceValueForKey(aKey,_127);
}else{
this.addValueForKey(aKey,_127);
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
function _128(_129){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFMutableData.prototype.setPropertyList=function(_12a,_12b){
_128(this);
this._propertyList=_12a;
this._propertyListFormat=_12b;
};
CFMutableData.prototype.setJSONObject=function(_12c){
_128(this);
this._JSONObject=_12c;
};
CFMutableData.prototype.setRawString=function(_12d){
_128(this);
this._rawString=_12d;
};
CFMutableData.prototype.setBytes=function(_12e){
_128(this);
this._bytes=_12e;
};
CFMutableData.prototype.setBase64String=function(_12f){
_128(this);
this._base64=_12f;
};
var _130=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],_131=[];
for(var i=0;i<_130.length;i++){
_131[_130[i].charCodeAt(0)]=i;
}
CFData.decodeBase64ToArray=function(_132,_133){
if(_133){
_132=_132.replace(/[^A-Za-z0-9\+\/\=]/g,"");
}
var pad=(_132[_132.length-1]=="="?1:0)+(_132[_132.length-2]=="="?1:0),_134=_132.length,_135=[];
var i=0;
while(i<_134){
var bits=(_131[_132.charCodeAt(i++)]<<18)|(_131[_132.charCodeAt(i++)]<<12)|(_131[_132.charCodeAt(i++)]<<6)|(_131[_132.charCodeAt(i++)]);
_135.push((bits&16711680)>>16);
_135.push((bits&65280)>>8);
_135.push(bits&255);
}
if(pad>0){
return _135.slice(0,-1*pad);
}
return _135;
};
CFData.encodeBase64Array=function(_136){
var pad=(3-(_136.length%3))%3,_137=_136.length+pad,_138=[];
if(pad>0){
_136.push(0);
}
if(pad>1){
_136.push(0);
}
var i=0;
while(i<_137){
var bits=(_136[i++]<<16)|(_136[i++]<<8)|(_136[i++]);
_138.push(_130[(bits&16515072)>>18]);
_138.push(_130[(bits&258048)>>12]);
_138.push(_130[(bits&4032)>>6]);
_138.push(_130[bits&63]);
}
if(pad>0){
_138[_138.length-1]="=";
_136.pop();
}
if(pad>1){
_138[_138.length-2]="=";
_136.pop();
}
return _138.join("");
};
CFData.decodeBase64ToString=function(_139,_13a){
return CFData.bytesToString(CFData.decodeBase64ToArray(_139,_13a));
};
CFData.bytesToString=function(_13b){
return String.fromCharCode.apply(NULL,_13b);
};
CFData.encodeBase64String=function(_13c){
var temp=[];
for(var i=0;i<_13c.length;i++){
temp.push(_13c.charCodeAt(i));
}
return CFData.encodeBase64Array(temp);
};
var _13d,_13e,_13f=0;
function _140(){
if(++_13f!==1){
return;
}
_13d={};
_13e={};
};
function _141(){
_13f=MAX(_13f-1,0);
if(_13f!==0){
return;
}
delete _13d;
delete _13e;
};
var _142=new RegExp("^"+"(?:"+"([^:/?#]+):"+")?"+"(?:"+"(//)"+"("+"(?:"+"("+"([^:@]*)"+":?"+"([^:@]*)"+")?"+"@"+")?"+"([^:/?#]*)"+"(?::(\\d*))?"+")"+")?"+"([^?#]*)"+"(?:\\?([^#]*))?"+"(?:#(.*))?");
var _143=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","portNumber","path","queryString","fragment"];
function _144(aURL){
if(aURL._parts){
return aURL._parts;
}
var _145=aURL.string(),_146=_145.match(/^mhtml:/);
if(_146){
_145=_145.substr("mhtml:".length);
}
if(_13f>0&&_71.call(_13e,_145)){
aURL._parts=_13e[_145];
return aURL._parts;
}
aURL._parts={};
var _147=aURL._parts,_148=_142.exec(_145),_8c=_148.length;
while(_8c--){
_147[_143[_8c]]=_148[_8c]||NULL;
}
_147.portNumber=parseInt(_147.portNumber,10);
if(isNaN(_147.portNumber)){
_147.portNumber=-1;
}
_147.pathComponents=[];
if(_147.path){
var _149=_147.path.split("/"),_14a=_147.pathComponents,_8c=0,_14b=_149.length;
for(;_8c<_14b;++_8c){
var _14c=_149[_8c];
if(_14c){
_14a.push(_14c);
}else{
if(_8c===0){
_14a.push("/");
}
}
}
_147.pathComponents=_14a;
}
if(_146){
_147.url="mhtml:"+_147.url;
_147.scheme="mhtml:"+_147.scheme;
}
if(_13f>0){
_13e[_145]=_147;
}
return _147;
};
CFURL=function(aURL,_14d){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_14d){
return aURL;
}
var _14e=aURL.baseURL();
if(_14e){
_14d=new CFURL(_14e.absoluteURL(),_14d);
}
aURL=aURL.string();
}
if(_13f>0){
var _14f=aURL+" "+(_14d&&_14d.UID()||"");
if(_71.call(_13d,_14f)){
return _13d[_14f];
}
_13d[_14f]=this;
}
if(aURL.match(/^data:/)){
var _150={},_8c=_143.length;
while(_8c--){
_150[_143[_8c]]="";
}
_150.url=aURL;
_150.scheme="data";
_150.pathComponents=[];
this._parts=_150;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_14d;
};
CFURL.prototype.UID=function(){
return this._UID;
};
var _151={};
CFURL.prototype.mappedURL=function(){
return _151[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_152,_153){
_151[_152.absoluteString()]=_153;
};
CFURL.prototype.schemeAndAuthority=function(){
var _154="",_155=this.scheme();
if(_155){
_154+=_155+":";
}
var _156=this.authority();
if(_156){
_154+="//"+_156;
}
return _154;
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
function _157(aURL){
aURL=aURL.standardizedURL();
var _158=aURL.baseURL();
if(!_158){
return aURL;
}
var _159=((aURL)._parts||_144(aURL)),_15a,_15b=_158.absoluteURL(),_15c=((_15b)._parts||_144(_15b));
if(_159.scheme||_159.authority){
_15a=_159;
}else{
_15a={};
_15a.scheme=_15c.scheme;
_15a.authority=_15c.authority;
_15a.userInfo=_15c.userInfo;
_15a.user=_15c.user;
_15a.password=_15c.password;
_15a.domain=_15c.domain;
_15a.portNumber=_15c.portNumber;
_15a.queryString=_159.queryString;
_15a.fragment=_159.fragment;
var _15d=_159.pathComponents;
if(_15d.length&&_15d[0]==="/"){
_15a.path=_159.path;
_15a.pathComponents=_15d;
}else{
var _15e=_15c.pathComponents,_15f=_15e.concat(_15d);
if(!_158.hasDirectoryPath()&&_15e.length){
_15f.splice(_15e.length-1,1);
}
if(_15d.length&&_15d[0]===".."){
_160(_15f,YES);
}
_15a.pathComponents=_15f;
_15a.path=_161(_15f,_15d.length<=0||aURL.hasDirectoryPath());
}
}
var _162=_163(_15a),_164=new CFURL(_162);
_164._parts=_15a;
_164._standardizedURL=_164;
_164._standardizedString=_162;
_164._absoluteURL=_164;
_164._absoluteString=_162;
return _164;
};
function _161(_165,_166){
var path=_165.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_166){
path+="/";
}
return path;
};
function _160(_167,_168){
var _169=0,_16a=0,_16b=_167.length,_16c=_168?_167:[];
for(;_169<_16b;++_169){
var _16d=_167[_169];
if(_16d===""||_16d==="."){
continue;
}
if(_16d!==".."||_16a===0||_16c[_16a-1]===".."){
_16c[_16a]=_16d;
_16a++;
continue;
}
if(_16a>0&&_16c[_16a-1]!=="/"){
--_16a;
}
}
_16c.length=_16a;
return _16c;
};
function _163(_16e){
var _16f="",_170=_16e.scheme;
if(_170){
_16f+=_170+":";
}
var _171=_16e.authority;
if(_171){
_16f+="//"+_171;
}
_16f+=_16e.path;
var _172=_16e.queryString;
if(_172){
_16f+="?"+_172;
}
var _173=_16e.fragment;
if(_173){
_16f+="#"+_173;
}
return _16f;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_157(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _174=((this)._parts||_144(this)),_175=_174.pathComponents,_176=_160(_175,NO);
var _177=_161(_176,this.hasDirectoryPath());
if(_174.path===_177){
this._standardizedURL=this;
}else{
var _178=_179(_174);
_178.pathComponents=_176;
_178.path=_177;
var _17a=new CFURL(_163(_178),this.baseURL());
_17a._parts=_178;
_17a._standardizedURL=_17a;
this._standardizedURL=_17a;
}
}
return this._standardizedURL;
};
function _179(_17b){
var _17c={},_17d=_143.length;
while(_17d--){
var _17e=_143[_17d];
_17c[_17e]=_17b[_17e];
}
return _17c;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _17f=((this)._parts||_144(this)).authority;
if(_17f){
return _17f;
}
var _180=this.baseURL();
return _180&&_180.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _181=this._hasDirectoryPath;
if(_181===_44){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _182=this.lastPathComponent();
_181=_182==="."||_182==="..";
this._hasDirectoryPath=_181;
}
return this._hasDirectoryPath;
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return ((this)._parts||_144(this)).fragment;
};
CFURL.prototype.lastPathComponent=function(){
if(this._lastPathComponent===_44){
var _183=this.pathComponents(),_184=_183.length;
if(!_184){
this._lastPathComponent="";
}else{
this._lastPathComponent=_183[_184-1];
}
}
return this._lastPathComponent;
};
CFURL.prototype.path=function(){
return ((this)._parts||_144(this)).path;
};
CFURL.prototype.pathComponents=function(){
return ((this)._parts||_144(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _185=this.lastPathComponent();
if(!_185){
return NULL;
}
_185=_185.replace(/^\.*/,"");
var _186=_185.lastIndexOf(".");
return _186<=0?"":_185.substring(_186+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_144(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _187=this._scheme;
if(_187===_44){
_187=((this)._parts||_144(this)).scheme;
if(!_187){
var _188=this.baseURL();
_187=_188&&_188.scheme();
}
this._scheme=_187;
}
return _187;
};
CFURL.prototype.user=function(){
return ((this)._parts||_144(this)).user;
};
CFURL.prototype.password=function(){
return ((this)._parts||_144(this)).password;
};
CFURL.prototype.portNumber=function(){
return ((this)._parts||_144(this)).portNumber;
};
CFURL.prototype.domain=function(){
return ((this)._parts||_144(this)).domain;
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
function _189(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _189(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_18a){
_189(this).setValueForKey(aKey,_18a);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_18b.resourceAtURL(this).contents());
return data;
};
function _f8(_18c){
this._string=_18c;
var _18d=_18c.indexOf(";");
this._magicNumber=_18c.substr(0,_18d);
this._location=_18c.indexOf(";",++_18d);
this._version=_18c.substring(_18d,this._location++);
};
_f8.prototype.magicNumber=function(){
return this._magicNumber;
};
_f8.prototype.version=function(){
return this._version;
};
_f8.prototype.getMarker=function(){
var _18e=this._string,_18f=this._location;
if(_18f>=_18e.length){
return null;
}
var next=_18e.indexOf(";",_18f);
if(next<0){
return null;
}
var _190=_18e.substring(_18f,next);
if(_190==="e"){
return null;
}
this._location=next+1;
return _190;
};
_f8.prototype.getString=function(){
var _191=this._string,_192=this._location;
if(_192>=_191.length){
return null;
}
var next=_191.indexOf(";",_192);
if(next<0){
return null;
}
var size=parseInt(_191.substring(_192,next),10),text=_191.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _193=0,_194=1<<0,_195=1<<1,_196=1<<2,_197=1<<3,_198=1<<4;
var _199={},_19a={},_19b=new Date().getTime(),_19c=0,_19d=0;
CFBundle=function(aURL){
aURL=_19e(aURL).asDirectoryPathURL();
var _19f=aURL.absoluteString(),_1a0=_199[_19f];
if(_1a0){
return _1a0;
}
_199[_19f]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._loadStatus=_193;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _6c(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_19e(aURL));
while(aURL.path()!=="/"){
var _1a1=_199[aURL.absoluteString()];
if(_1a1){
return _1a1;
}
aURL=new CFURL("..",aURL);
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1a2);
};
function _1a3(_1a4,_1a5){
if(_1a5){
_19a[_1a4.name]=_1a5;
}
};
CFBundle.bundleForClass=function(_1a6){
return _19a[_1a6.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1a7,_1a8,_1a9){
if(_1a8){
_1a7=_1a7+"."+_1a8;
}
if(_1a9){
_1a7=_1a9+"/"+_1a7;
}
var _1aa=(new CFURL(_1a7,this.resourcesDirectoryURL())).mappedURL();
return _1aa.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1ab=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1ab){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1ab,this.mostEligibleEnvironmentURL());
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
var _1ac=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_8c=_1ac.length,_1ad=this.mostEligibleEnvironment();
while(_8c--){
if(_1ac[_8c]===_1ad){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1ae){
_1ae=_1ae||this.environments();
var _1af=CFBundle.environments(),_8c=0,_1b0=_1af.length,_1b1=_1ae.length;
for(;_8c<_1b0;++_8c){
var _1b2=0,_1b3=_1af[_8c];
for(;_1b2<_1b1;++_1b2){
if(_1b3===_1ae[_1b2]){
return _1b3;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_194;
};
CFBundle.prototype.load=function(_1b4){
if(this._loadStatus!==_193){
return;
}
this._loadStatus=_194|_195;
var self=this,_1b5=this.bundleURL(),_1b6=new CFURL("..",_1b5);
if(_1b6.absoluteString()===_1b5.absoluteString()){
_1b6=_1b6.schemeAndAuthority();
}
_18b.resolveResourceAtURL(_1b6,YES,function(_1b7){
var _1b8=_1b5.absoluteURL().lastPathComponent();
self._staticResource=_1b7._children[_1b8]||new _18b(_1b5,_1b7,YES,NO);
function _1b9(_1ba){
self._loadStatus&=~_195;
self._infoDictionary=_1ba.request.responsePropertyList();
if(!self._infoDictionary){
_1bc(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_19d=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1c0(self,_1b4);
};
function _1bb(){
self._loadStatus=_193;
_1bc(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _a3(new CFURL("Info.plist",self.bundleURL()),_1b9,_1bb);
});
};
function _1bc(_1bd,_1be){
_1bf(_1bd._staticResource);
_1bd._eventDispatcher.dispatchEvent({type:"error",error:_1be,bundle:_1bd});
};
function _1c0(_1c1,_1c2){
if(!_1c1.mostEligibleEnvironment()){
return _1c3();
}
_1c4(_1c1,_1c5,_1c3);
_1c6(_1c1,_1c5,_1c3);
if(_1c1._loadStatus===_194){
return _1c5();
}
function _1c3(_1c7){
var _1c8=_1c1._loadRequests,_1c9=_1c8.length;
while(_1c9--){
_1c8[_1c9].abort();
}
this._loadRequests=[];
_1c1._loadStatus=_193;
_1bc(_1c1,_1c7||new Error("Could not recognize executable code format in Bundle "+_1c1));
};
function _1c5(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_19d){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_19c/_19d),0),_19d,_1c1.path());
}
if(_1c1._loadStatus===_194){
_1c1._loadStatus=_198;
}else{
return;
}
_1bf(_1c1._staticResource);
function _1ca(){
_1c1._eventDispatcher.dispatchEvent({type:"load",bundle:_1c1});
};
if(_1c2){
_1cb(_1c1,_1ca);
}else{
_1ca();
}
};
};
function _1c4(_1cc,_1cd,_1ce){
var _1cf=_1cc.executableURL();
if(!_1cf){
return;
}
_1cc._loadStatus|=_196;
new _a3(_1cf,function(_1d0){
try{
_19c+=_1d0.request.responseText().length;
_1d1(_1cc,_1d0.request.responseText(),_1cf);
_1cc._loadStatus&=~_196;
_1cd();
}
catch(anException){
_1ce(anException);
}
},_1ce);
};
function _1d2(_1d3){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1d3.mostEligibleEnvironmentURL());
};
function _1d4(_1d5){
if(_1d6===_1d7){
return new CFURL("dataURLs.txt",_1d5.mostEligibleEnvironmentURL());
}
if(_1d6===_1d8||_1d6===_1d9){
return new CFURL("MHTMLPaths.txt",_1d5.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1c6(_1da,_1db,_1dc){
if(!_1da.hasSpritedImages()){
return;
}
_1da._loadStatus|=_197;
if(!_1dd()){
return _1de(_1d2(_1da),function(){
_1c6(_1da,_1db,_1dc);
});
}
var _1df=_1d4(_1da);
if(!_1df){
_1da._loadStatus&=~_197;
return _1db();
}
new _a3(_1df,function(_1e0){
try{
_19c+=_1e0.request.responseText().length;
_1d1(_1da,_1e0.request.responseText(),_1df);
_1da._loadStatus&=~_197;
_1db();
}
catch(anException){
_1dc(anException);
}
},_1dc);
};
var _1e1=[],_1d6=-1,_1e2=0,_1d7=1,_1d8=2,_1d9=3;
function _1dd(){
return _1d6!==-1;
};
function _1de(_1e3,_1e4){
if(_1dd()){
return;
}
_1e1.push(_1e4);
if(_1e1.length>1){
return;
}
_1e1.push(function(){
var size=0,_1e5=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_1e5){
return;
}
switch(_1d6){
case _1d7:
size=_1e5.valueForKey("data");
break;
case _1d8:
case _1d9:
size=_1e5.valueForKey("mhtml");
break;
}
_19d+=size;
});
_1e6([_1d7,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1d8,_1e3+"!test",_1d9,_1e3+"?"+_19b+"!test"]);
};
function _1e7(){
var _1e8=_1e1.length;
while(_1e8--){
_1e1[_1e8]();
}
};
function _1e6(_1e9){
if(_1e9.length<2){
_1d6=_1e2;
_1e7();
return;
}
var _1ea=new Image();
_1ea.onload=function(){
if(_1ea.width===1&&_1ea.height===1){
_1d6=_1e9[0];
_1e7();
}else{
_1ea.onerror();
}
};
_1ea.onerror=function(){
_1e6(_1e9.slice(2));
};
_1ea.src=_1e9[1];
};
function _1cb(_1eb,_1ec){
var _1ed=[_1eb._staticResource];
function _1ee(_1ef){
for(;_1ef<_1ed.length;++_1ef){
var _1f0=_1ed[_1ef];
if(_1f0.isNotFound()){
continue;
}
if(_1f0.isFile()){
var _1f1=new _2f8(_1f0.URL());
if(_1f1.hasLoadedFileDependencies()){
_1f1.execute();
}else{
_1f1.loadFileDependencies(function(){
_1ee(_1ef);
});
return;
}
}else{
if(_1f0.URL().absoluteString()===_1eb.resourcesDirectoryURL().absoluteString()){
continue;
}
var _1f2=_1f0.children();
for(var name in _1f2){
if(_71.call(_1f2,name)){
_1ed.push(_1f2[name]);
}
}
}
}
_1ec();
};
_1ee(0);
};
var _1f3="@STATIC",_1f4="p",_1f5="u",_1f6="c",_1f7="t",_1f8="I",_1f9="i";
function _1d1(_1fa,_1fb,_1fc){
var _1fd=new _f8(_1fb);
if(_1fd.magicNumber()!==_1f3){
throw new Error("Could not read static file: "+_1fc);
}
if(_1fd.version()!=="1.0"){
throw new Error("Could not read static file: "+_1fc);
}
var _1fe,_1ff=_1fa.bundleURL(),file=NULL;
while(_1fe=_1fd.getMarker()){
var text=_1fd.getString();
if(_1fe===_1f4){
var _200=new CFURL(text,_1ff),_201=_18b.resourceAtURL(new CFURL(".",_200),YES);
file=new _18b(_200,_201,NO,YES);
}else{
if(_1fe===_1f5){
var URL=new CFURL(text,_1ff),_202=_1fd.getString();
if(_202.indexOf("mhtml:")===0){
_202="mhtml:"+new CFURL(_202.substr("mhtml:".length),_1ff);
if(_1d6===_1d9){
var _203=URLString.indexOf("!"),_204=URLString.substring(0,_203),_205=URLString.substring(_203);
_202=_204+"?"+_19b+_205;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_202));
var _201=_18b.resourceAtURL(new CFURL(".",URL),YES);
new _18b(URL,_201,NO,YES);
}else{
if(_1fe===_1f7){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_206,_207){
this._eventDispatcher.addEventListener(_206,_207);
};
CFBundle.prototype.removeEventListener=function(_208,_209){
this._eventDispatcher.removeEventListener(_208,_209);
};
CFBundle.prototype.onerror=function(_20a){
throw _20a.error;
};
CFBundle.prototype.bundlePath=function(){
return this._bundleURL.absoluteURL().path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_20b){
return this.resourceURL(_20b).absoluteString();
};
var _20c={};
function _18b(aURL,_20d,_20e,_20f){
this._parent=_20d;
this._eventDispatcher=new _6c(this);
var name=aURL.absoluteURL().lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_20f;
if(_20e){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_20d){
_20c[name]=this;
}
this._isDirectory=!!_20e;
this._isNotFound=NO;
if(_20d){
_20d._children[name]=this;
}
if(_20e){
this._children={};
}else{
this._contents="";
}
};
_18b.rootResources=function(){
return _20c;
};
_2.StaticResource=_18b;
function _1bf(_210){
_210._isResolved=YES;
_210._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_210});
};
_18b.prototype.resolve=function(){
if(this.isDirectory()){
var _211=new CFBundle(this.URL());
_211.onerror=function(){
};
_211.load(NO);
}else{
var self=this;
function _212(_213){
self._contents=_213.request.responseText();
_1bf(self);
};
function _214(){
self._isNotFound=YES;
_1bf(self);
};
new _a3(this.URL(),_212,_214);
}
};
_18b.prototype.name=function(){
return this._name;
};
_18b.prototype.URL=function(){
return this._URL;
};
_18b.prototype.contents=function(){
return this._contents;
};
_18b.prototype.children=function(){
return this._children;
};
_18b.prototype.parent=function(){
return this._parent;
};
_18b.prototype.isResolved=function(){
return this._isResolved;
};
_18b.prototype.write=function(_215){
this._contents+=_215;
};
function _216(_217){
var _218=_217.schemeAndAuthority(),_219=_20c[_218];
if(!_219){
_219=new _18b(new CFURL(_218),NULL,YES,YES);
}
return _219;
};
_18b.resourceAtURL=function(aURL,_21a){
aURL=_19e(aURL).absoluteURL();
var _21b=_216(aURL),_21c=aURL.pathComponents(),_8c=0,_21d=_21c.length;
for(;_8c<_21d;++_8c){
var name=_21c[_8c];
if(_71.call(_21b._children,name)){
_21b=_21b._children[name];
}else{
if(_21a){
_21b=new _18b(new CFURL(name,_21b.URL()),_21b,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _21b;
};
_18b.prototype.resourceAtURL=function(aURL,_21e){
return _18b.resourceAtURL(new CFURL(aURL,this.URL()),_21e);
};
_18b.resolveResourceAtURL=function(aURL,_21f,_220){
aURL=_19e(aURL).absoluteURL();
_221(_216(aURL),_21f,aURL.pathComponents(),0,_220);
};
_18b.prototype.resolveResourceAtURL=function(aURL,_222,_223){
_18b.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_222,_223);
};
function _221(_224,_225,_226,_227,_228){
var _229=_226.length;
for(;_227<_229;++_227){
var name=_226[_227],_22a=_71.call(_224._children,name)&&_224._children[name];
if(!_22a){
_22a=new _18b(new CFURL(name,_224.URL()),_224,_227+1<_229||_225,NO);
_22a.resolve();
}
if(!_22a.isResolved()){
return _22a.addEventListener("resolve",function(){
_221(_224,_225,_226,_227,_228);
});
}
if(_22a.isNotFound()){
return _228(null,new Error("File not found: "+_226.join("/")));
}
if((_227+1<_229)&&_22a.isFile()){
return _228(null,new Error("File is not a directory: "+_226.join("/")));
}
_224=_22a;
}
_228(_224);
};
function _22b(aURL,_22c,_22d){
var _22e=_18b.includeURLs(),_22f=new CFURL(aURL,_22e[_22c]).absoluteURL();
_18b.resolveResourceAtURL(_22f,NO,function(_230){
if(!_230){
if(_22c+1<_22e.length){
_22b(aURL,_22c+1,_22d);
}else{
_22d(NULL);
}
return;
}
_22d(_230);
});
};
_18b.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_231){
_22b(aURL,0,_231);
};
_18b.prototype.addEventListener=function(_232,_233){
this._eventDispatcher.addEventListener(_232,_233);
};
_18b.prototype.removeEventListener=function(_234,_235){
this._eventDispatcher.removeEventListener(_234,_235);
};
_18b.prototype.isNotFound=function(){
return this._isNotFound;
};
_18b.prototype.isFile=function(){
return !this._isDirectory;
};
_18b.prototype.isDirectory=function(){
return this._isDirectory;
};
_18b.prototype.toString=function(_236){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _237=this.name();
if(this.isDirectory()){
var _238=this._children;
for(var name in _238){
if(_238.hasOwnProperty(name)){
var _239=_238[name];
if(_236||!_239.isNotFound()){
_237+="\n\t"+_238[name].toString(_236).split("\n").join("\n\t");
}
}
}
}
return _237;
};
var _23a=NULL;
_18b.includeURLs=function(){
if(_23b){
return _23b;
}
var _23b=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_23b=["Frameworks","Frameworks/Debug"];
}else{
_23b=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _23c=_23b.length;
while(_23c--){
_23b[_23c]=new CFURL(_23b[_23c]).asDirectoryPathURL();
}
return _23b;
};
var _23d="accessors",_23e="class",_23f="end",_240="function",_241="implementation",_242="import",_243="each",_244="outlet",_245="action",_246="new",_247="selector",_248="super",_249="var",_24a="in",_24b="=",_24c="+",_24d="-",_24e=":",_24f=",",_250=".",_251="*",_252=";",_253="<",_254="{",_255="}",_256=">",_257="[",_258="\"",_259="@",_25a="]",_25b="?",_25c="(",_25d=")",_25e=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_25f=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_260=/^[a-zA-Z_$](\w|$)*$/;
function _261(_262){
this._index=-1;
this._tokens=(_262+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_261.prototype.push=function(){
this._context.push(this._index);
};
_261.prototype.pop=function(){
this._index=this._context.pop();
};
_261.prototype.peak=function(_263){
if(_263){
this.push();
var _264=this.skip_whitespace();
this.pop();
return _264;
}
return this._tokens[this._index+1];
};
_261.prototype.next=function(){
return this._tokens[++this._index];
};
_261.prototype.previous=function(){
return this._tokens[--this._index];
};
_261.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_261.prototype.skip_whitespace=function(_265){
var _266;
if(_265){
while((_266=this.previous())&&_25e.test(_266)){
}
}else{
while((_266=this.next())&&_25e.test(_266)){
}
}
return _266;
};
_2.Lexer=_261;
function _267(){
this.atoms=[];
};
_267.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_268,aURL,_269){
return new _26a(_268,aURL,_269).executable();
};
_2.eval=function(_26b){
return eval(_2.preprocess(_26b).code());
};
var _26a=function(_26c,aURL,_26d){
this._URL=new CFURL(aURL);
_26c=_26c.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _267();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _261(_26c);
this._flags=_26d;
this._classMethod=false;
this._executable=NULL;
this.preprocess(this._tokens,this._buffer);
};
_2.Preprocessor=_26a;
_26a.Flags={};
_26a.Flags.IncludeDebugSymbols=1<<0;
_26a.Flags.IncludeTypeSignatures=1<<1;
_26a.prototype.executable=function(){
if(!this._executable){
this._executable=new _26e(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_26a.prototype.accessors=function(_26f){
var _270=_26f.skip_whitespace(),_271={};
if(_270!=_25c){
_26f.previous();
return _271;
}
while((_270=_26f.skip_whitespace())!=_25d){
var name=_270,_272=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_270=_26f.skip_whitespace())==_24b){
_272=_26f.skip_whitespace();
if(!/^\w+$/.test(_272)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_270=_26f.next())!=_24e){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_272+=":";
}
_270=_26f.skip_whitespace();
}
_271[name]=_272;
if(_270==_25d){
break;
}
if(_270!=_24f){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _271;
};
_26a.prototype.brackets=function(_273,_274){
var _275=[];
while(this.preprocess(_273,NULL,NULL,NULL,_275[_275.length]=[])){
}
if(_275[0].length===1){
_274.atoms[_274.atoms.length]="[";
_274.atoms[_274.atoms.length]=_275[0][0];
_274.atoms[_274.atoms.length]="]";
}else{
var _276=new _267();
if(_275[0][0].atoms[0]==_248){
_274.atoms[_274.atoms.length]="objj_msgSendSuper(";
_274.atoms[_274.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_274.atoms[_274.atoms.length]="objj_msgSend(";
_274.atoms[_274.atoms.length]=_275[0][0];
}
_276.atoms[_276.atoms.length]=_275[0][1];
var _277=1,_278=_275.length,_279=new _267();
for(;_277<_278;++_277){
var pair=_275[_277];
_276.atoms[_276.atoms.length]=pair[1];
_279.atoms[_279.atoms.length]=", "+pair[0];
}
_274.atoms[_274.atoms.length]=", \"";
_274.atoms[_274.atoms.length]=_276;
_274.atoms[_274.atoms.length]="\"";
_274.atoms[_274.atoms.length]=_279;
_274.atoms[_274.atoms.length]=")";
}
};
_26a.prototype.directive=function(_27a,_27b,_27c){
var _27d=_27b?_27b:new _267(),_27e=_27a.next();
if(_27e.charAt(0)==_258){
_27d.atoms[_27d.atoms.length]=_27e;
}else{
if(_27e===_23e){
_27a.skip_whitespace();
return;
}else{
if(_27e===_241){
this.implementation(_27a,_27d);
}else{
if(_27e===_242){
this._import(_27a);
}else{
if(_27e===_247){
this.selector(_27a,_27d);
}
}
}
}
}
if(!_27b){
return _27d;
}
};
_26a.prototype.implementation=function(_27f,_280){
var _281=_280,_282="",_283=NO,_284=_27f.skip_whitespace(),_285="Nil",_286=new _267(),_287=new _267();
if(!(/^\w/).test(_284)){
throw new Error(this.error_message("*** Expected class name, found \""+_284+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_284+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_284+"\").super_class";
this._currentClass=_284;
this._currentSelector="";
if((_282=_27f.skip_whitespace())==_25c){
_282=_27f.skip_whitespace();
if(_282==_25d){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_284+"\"."));
}
if(_27f.skip_whitespace()!=_25d){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_284+"\"."));
}
_281.atoms[_281.atoms.length]="{\nvar the_class = objj_getClass(\""+_284+"\")\n";
_281.atoms[_281.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_284+"\\\"\");\n";
_281.atoms[_281.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_282==_24e){
_282=_27f.skip_whitespace();
if(!_260.test(_282)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_282+"\"."));
}
_285=_282;
_282=_27f.skip_whitespace();
}
_281.atoms[_281.atoms.length]="{var the_class = objj_allocateClassPair("+_285+", \""+_284+"\"),\nmeta_class = the_class.isa;";
if(_282==_254){
var _288=0,_289=[],_28a,_28b={};
while((_282=_27f.skip_whitespace())&&_282!=_255){
if(_282===_259){
_282=_27f.next();
if(_282===_23d){
_28a=this.accessors(_27f);
}else{
if(_282!==_244){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_282+"')."));
}
}
}else{
if(_282==_252){
if(_288++==0){
_281.atoms[_281.atoms.length]="class_addIvars(the_class, [";
}else{
_281.atoms[_281.atoms.length]=", ";
}
var name=_289[_289.length-1];
_281.atoms[_281.atoms.length]="new objj_ivar(\""+name+"\")";
_289=[];
if(_28a){
_28b[name]=_28a;
_28a=NULL;
}
}else{
_289.push(_282);
}
}
}
if(_289.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_288){
_281.atoms[_281.atoms.length]="]);\n";
}
if(!_282){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
for(ivar_name in _28b){
var _28c=_28b[ivar_name],_28d=_28c["property"]||ivar_name;
var _28e=_28c["getter"]||_28d,_28f="(id)"+_28e+"\n{\nreturn "+ivar_name+";\n}";
if(_286.atoms.length!==0){
_286.atoms[_286.atoms.length]=",\n";
}
_286.atoms[_286.atoms.length]=this.method(new _261(_28f));
if(_28c["readonly"]){
continue;
}
var _290=_28c["setter"];
if(!_290){
var _291=_28d.charAt(0)=="_"?1:0;
_290=(_291?"_":"")+"set"+_28d.substr(_291,1).toUpperCase()+_28d.substring(_291+1)+":";
}
var _292="(void)"+_290+"(id)newValue\n{\n";
if(_28c["copy"]){
_292+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_292+=ivar_name+" = newValue;\n}";
}
if(_286.atoms.length!==0){
_286.atoms[_286.atoms.length]=",\n";
}
_286.atoms[_286.atoms.length]=this.method(new _261(_292));
}
}else{
_27f.previous();
}
_281.atoms[_281.atoms.length]="objj_registerClassPair(the_class);\n";
}
while((_282=_27f.skip_whitespace())){
if(_282==_24c){
this._classMethod=true;
if(_287.atoms.length!==0){
_287.atoms[_287.atoms.length]=", ";
}
_287.atoms[_287.atoms.length]=this.method(_27f);
}else{
if(_282==_24d){
this._classMethod=false;
if(_286.atoms.length!==0){
_286.atoms[_286.atoms.length]=", ";
}
_286.atoms[_286.atoms.length]=this.method(_27f);
}else{
if(_282==_259){
if((_282=_27f.next())==_23f){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_282+"\"."));
}
}
}
}
}
if(_286.atoms.length!==0){
_281.atoms[_281.atoms.length]="class_addMethods(the_class, [";
_281.atoms[_281.atoms.length]=_286;
_281.atoms[_281.atoms.length]="]);\n";
}
if(_287.atoms.length!==0){
_281.atoms[_281.atoms.length]="class_addMethods(meta_class, [";
_281.atoms[_281.atoms.length]=_287;
_281.atoms[_281.atoms.length]="]);\n";
}
_281.atoms[_281.atoms.length]="}";
this._currentClass="";
};
_26a.prototype._import=function(_293){
var _294="",_295=_293.skip_whitespace(),_296=(_295!==_253);
if(_295===_253){
while((_295=_293.next())&&_295!==_256){
_294+=_295;
}
if(!_295){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_295.charAt(0)===_258){
_294=_295.substr(1,_295.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_295+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_294;
this._buffer.atoms[this._buffer.atoms.length]=_296?"\", YES);":"\", NO);";
this._dependencies.push(new _297(new CFURL(_294),_296));
};
_26a.prototype.method=function(_298){
var _299=new _267(),_29a,_29b="",_29c=[],_29d=[null];
while((_29a=_298.skip_whitespace())&&_29a!=_254){
if(_29a==_24e){
var type="";
_29b+=_29a;
_29a=_298.skip_whitespace();
if(_29a==_25c){
while((_29a=_298.skip_whitespace())&&_29a!=_25d){
type+=_29a;
}
_29a=_298.skip_whitespace();
}
_29d[_29c.length+1]=type||null;
_29c[_29c.length]=_29a;
}else{
if(_29a==_25c){
var type="";
while((_29a=_298.skip_whitespace())&&_29a!=_25d){
type+=_29a;
}
_29d[0]=type||null;
}else{
if(_29a==_24f){
if((_29a=_298.skip_whitespace())!=_250||_298.next()!=_250||_298.next()!=_250){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_29b+=_29a;
}
}
}
}
var _29e=0,_29f=_29c.length;
_299.atoms[_299.atoms.length]="new objj_method(sel_getUid(\"";
_299.atoms[_299.atoms.length]=_29b;
_299.atoms[_299.atoms.length]="\"), function";
this._currentSelector=_29b;
if(this._flags&_26a.Flags.IncludeDebugSymbols){
_299.atoms[_299.atoms.length]=" $"+this._currentClass+"__"+_29b.replace(/:/g,"_");
}
_299.atoms[_299.atoms.length]="(self, _cmd";
for(;_29e<_29f;++_29e){
_299.atoms[_299.atoms.length]=", ";
_299.atoms[_299.atoms.length]=_29c[_29e];
}
_299.atoms[_299.atoms.length]=")\n{ with(self)\n{";
_299.atoms[_299.atoms.length]=this.preprocess(_298,NULL,_255,_254);
_299.atoms[_299.atoms.length]="}\n}";
if(this._flags&_26a.Flags.IncludeDebugSymbols){
_299.atoms[_299.atoms.length]=","+JSON.stringify(_29d);
}
_299.atoms[_299.atoms.length]=")";
this._currentSelector="";
return _299;
};
_26a.prototype.preprocess=function(_2a0,_2a1,_2a2,_2a3,_2a4){
var _2a5=_2a1?_2a1:new _267(),_2a6=0,_2a7="";
if(_2a4){
_2a4[0]=_2a5;
var _2a8=false,_2a9=[0,0,0];
}
while((_2a7=_2a0.next())&&((_2a7!==_2a2)||_2a6)){
if(_2a4){
if(_2a7===_25b){
++_2a9[2];
}else{
if(_2a7===_254){
++_2a9[0];
}else{
if(_2a7===_255){
--_2a9[0];
}else{
if(_2a7===_25c){
++_2a9[1];
}else{
if(_2a7===_25d){
--_2a9[1];
}else{
if((_2a7===_24e&&_2a9[2]--===0||(_2a8=(_2a7===_25a)))&&_2a9[0]===0&&_2a9[1]===0){
_2a0.push();
var _2aa=_2a8?_2a0.skip_whitespace(true):_2a0.previous(),_2ab=_25e.test(_2aa);
if(_2ab||_260.test(_2aa)&&_25e.test(_2a0.previous())){
_2a0.push();
var last=_2a0.skip_whitespace(true),_2ac=true,_2ad=false;
if(last==="+"||last==="-"){
if(_2a0.previous()!==last){
_2ac=false;
}else{
last=_2a0.skip_whitespace(true);
_2ad=true;
}
}
_2a0.pop();
_2a0.pop();
if(_2ac&&((!_2ad&&(last===_255))||last===_25d||last===_25a||last===_250||_25f.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_260.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2ab){
_2a4[1]=":";
}else{
_2a4[1]=_2aa;
if(!_2a8){
_2a4[1]+=":";
}
var _2a6=_2a5.atoms.length;
while(_2a5.atoms[_2a6--]!==_2aa){
}
_2a5.atoms.length=_2a6;
}
return !_2a8;
}
if(_2a8){
return NO;
}
}
_2a0.pop();
if(_2a8){
return NO;
}
}
}
}
}
}
}
_2a9[2]=MAX(_2a9[2],0);
}
if(_2a3){
if(_2a7===_2a3){
++_2a6;
}else{
if(_2a7===_2a2){
--_2a6;
}
}
}
if(_2a7===_240){
var _2ae="";
while((_2a7=_2a0.next())&&_2a7!==_25c&&!(/^\w/).test(_2a7)){
_2ae+=_2a7;
}
if(_2a7===_25c){
if(_2a3===_25c){
++_2a6;
}
_2a5.atoms[_2a5.atoms.length]="function"+_2ae+"(";
if(_2a4){
++_2a9[1];
}
}else{
_2a5.atoms[_2a5.atoms.length]=_2a7+"= function";
}
}else{
if(_2a7==_259){
this.directive(_2a0,_2a5);
}else{
if(_2a7==_257){
this.brackets(_2a0,_2a5);
}else{
_2a5.atoms[_2a5.atoms.length]=_2a7;
}
}
}
}
if(_2a4){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2a1){
return _2a5;
}
};
_26a.prototype.selector=function(_2af,_2b0){
var _2b1=_2b0?_2b0:new _267();
_2b1.atoms[_2b1.atoms.length]="sel_getUid(\"";
if(_2af.skip_whitespace()!=_25c){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2b2=_2af.skip_whitespace();
if(_2b2==_25d){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2b0.atoms[_2b0.atoms.length]=_2b2;
var _2b3,_2b4=true;
while((_2b3=_2af.next())&&_2b3!=_25d){
if(_2b4&&/^\d+$/.test(_2b3)||!(/^(\w|$|\:)/.test(_2b3))){
if(!(/\S/).test(_2b3)){
if(_2af.skip_whitespace()==_25d){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2b3+"' in @selector()."));
}
}
_2b1.atoms[_2b1.atoms.length]=_2b3;
_2b4=(_2b3==_24e);
}
_2b1.atoms[_2b1.atoms.length]="\")";
if(!_2b0){
return _2b1;
}
};
_26a.prototype.error_message=function(_2b5){
return _2b5+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _297(aURL,_2b6){
this._URL=aURL;
this._isLocal=_2b6;
};
_2.FileDependency=_297;
_297.prototype.URL=function(){
return this._URL;
};
_297.prototype.isLocal=function(){
return this._isLocal;
};
_297.prototype.toMarkedString=function(){
var _2b7=this.URL().absoluteString();
return (this.isLocal()?_1f9:_1f8)+";"+_2b7.length+";"+_2b7;
};
_297.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2b8=0,_2b9=1,_2ba=2,_2bb=0;
function _26e(_2bc,_2bd,aURL,_2be){
if(arguments.length===0){
return this;
}
this._code=_2bc;
this._function=_2be||NULL;
this._URL=_19e(aURL||new CFURL("(Anonymous"+(_2bb++)+")"));
this._fileDependencies=_2bd;
if(_2bd.length){
this._fileDependencyStatus=_2b8;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_2ba;
}
if(this._function){
return;
}
this.setCode(_2bc);
};
_2.Executable=_26e;
_26e.prototype.path=function(){
return this.URL().path();
};
_26e.prototype.URL=function(){
return this._URL;
};
_26e.prototype.functionParameters=function(){
var _2bf=["global","objj_executeFile","objj_importFile"];
return _2bf;
};
_26e.prototype.functionArguments=function(){
var _2c0=[_1,this.fileExecuter(),this.fileImporter()];
return _2c0;
};
_26e.prototype.execute=function(){
var _2c1=_2c2;
_2c2=CFBundle.bundleContainingURL(this.URL());
var _2c3=this._function.apply(_1,this.functionArguments());
_2c2=_2c1;
return _2c3;
};
_26e.prototype.code=function(){
return this._code;
};
_26e.prototype.setCode=function(code){
this._code=code;
var _2c4=this.functionParameters().join(",");
this._function=new Function(_2c4,code);
};
_26e.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_26e.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_2ba;
};
var _2c5=0,_2c6=[],_2c7={};
_26e.prototype.loadFileDependencies=function(_2c8){
var _2c9=this._fileDependencyStatus;
if(_2c9===_2ba){
return _2c8();
}
this._fileDependencyCallbacks.push(_2c8);
if(_2c9===_2b8){
if(_2c5){
throw "Can't load";
}
_2ca(this);
}
};
function _2ca(_2cb){
_2c6.push(_2cb);
_2cb._fileDependencyStatus=_2b9;
var _2cc=_2cb.fileDependencies(),_8c=0,_2cd=_2cc.length,_2ce=_2cb.referenceURL(),_2cf=_2ce.absoluteString(),_2d0=_2cb.fileExecutableSearcher();
_2c5+=_2cd;
for(;_8c<_2cd;++_8c){
var _2d1=_2cc[_8c],_2d2=_2d1.isLocal(),URL=_2d1.URL(),_2d3=(_2d2&&(_2cf+" ")||"")+URL;
if(_2c7[_2d3]){
if(--_2c5===0){
_2d4();
}
continue;
}
_2c7[_2d3]=YES;
_2d0(URL,_2d2,_2d5);
}
};
function _2d5(_2d6){
--_2c5;
if(_2d6._fileDependencyStatus===_2b8){
_2ca(_2d6);
}else{
if(_2c5===0){
_2d4();
}
}
};
function _2d4(){
var _2d7=_2c6,_8c=0,_2d8=_2d7.length;
_2c6=[];
for(;_8c<_2d8;++_8c){
_2d7[_8c]._fileDependencyStatus=_2ba;
}
for(_8c=0;_8c<_2d8;++_8c){
var _2d9=_2d7[_8c],_2da=_2d9._fileDependencyCallbacks,_2db=0,_2dc=_2da.length;
for(;_2db<_2dc;++_2db){
_2da[_2db]();
}
_2d9._fileDependencyCallbacks=[];
}
};
_26e.prototype.referenceURL=function(){
if(this._referenceURL===_44){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_26e.prototype.fileImporter=function(){
return _26e.fileImporterForURL(this.referenceURL());
};
_26e.prototype.fileExecuter=function(){
return _26e.fileExecuterForURL(this.referenceURL());
};
_26e.prototype.fileExecutableSearcher=function(){
return _26e.fileExecutableSearcherForURL(this.referenceURL());
};
var _2dd={};
_26e.fileExecuterForURL=function(aURL){
var _2de=_19e(aURL),_2df=_2de.absoluteString(),_2e0=_2dd[_2df];
if(!_2e0){
_2e0=function(aURL,_2e1,_2e2){
_26e.fileExecutableSearcherForURL(_2de)(aURL,_2e1,function(_2e3){
if(!_2e3.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_2e3.execute(_2e2);
});
};
_2dd[_2df]=_2e0;
}
return _2e0;
};
var _2e4={};
_26e.fileImporterForURL=function(aURL){
var _2e5=_19e(aURL),_2e6=_2e5.absoluteString(),_2e7=_2e4[_2e6];
if(!_2e7){
_2e7=function(aURL,_2e8,_2e9){
_140();
_26e.fileExecutableSearcherForURL(_2e5)(aURL,_2e8,function(_2ea){
_2ea.loadFileDependencies(function(){
_2ea.execute();
_141();
if(_2e9){
_2e9();
}
});
});
};
_2e4[_2e6]=_2e7;
}
return _2e7;
};
var _2eb={},_2ec={};
_26e.fileExecutableSearcherForURL=function(_2ed){
var _2ee=_2ed.absoluteString(),_2ef=_2eb[_2ee],_2f0={};
if(!_2ef){
_2ef=function(aURL,_2f1,_2f2){
var _2f3=(_2f1&&_2ed||"")+aURL,_2f4=_2ec[_2f3];
if(_2f4){
return _2f5(_2f4);
}
var _2f6=(aURL instanceof CFURL)&&aURL.scheme();
if(_2f1||_2f6){
if(!_2f6){
aURL=new CFURL(aURL,_2ed);
}
_18b.resolveResourceAtURL(aURL,NO,_2f5);
}else{
_18b.resolveResourceAtURLSearchingIncludeURLs(aURL,_2f5);
}
function _2f5(_2f7){
if(!_2f7){
throw new Error("Could not load file at "+aURL);
}
_2ec[_2f3]=_2f7;
_2f2(new _2f8(_2f7.URL()));
};
};
_2eb[_2ee]=_2ef;
}
return _2ef;
};
var _2f9={};
function _2f8(aURL,_2fa){
aURL=_19e(aURL);
var _2fb=aURL.absoluteString(),_2fc=_2f9[_2fb];
if(_2fc){
return _2fc;
}
_2f9[_2fb]=this;
var _2fd=_18b.resourceAtURL(aURL).contents(),_2fe=NULL,_2ff=aURL.pathExtension();
if(_2fa){
_2fe=_2fa;
}else{
if(_2fd.match(/^@STATIC;/)){
_2fe=_300(_2fd,aURL);
}else{
if(_2ff==="j"||!_2ff){
_2fe=_2.preprocess(_2fd,aURL,_26a.Flags.IncludeDebugSymbols);
}else{
_2fe=new _26e(_2fd,[],aURL);
}
}
}
_26e.apply(this,[_2fe.code(),_2fe.fileDependencies(),aURL,_2fe._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_2f8;
_2f8.prototype=new _26e();
_2f8.prototype.execute=function(_301){
if(this._hasExecuted&&!_301){
return;
}
this._hasExecuted=YES;
_26e.prototype.execute.call(this);
};
_2f8.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _300(_302,aURL){
var _303=new _f8(_302);
var _304=NULL,code="",_305=[];
while(_304=_303.getMarker()){
var text=_303.getString();
if(_304===_1f7){
code+=text;
}else{
if(_304===_1f8){
_305.push(new _297(new CFURL(text),NO));
}else{
if(_304===_1f9){
_305.push(new _297(new CFURL(text),YES));
}
}
}
}
return new _26e(code,_305,aURL);
};
var _306=1,_307=2,_308=4,_309=8;
objj_ivar=function(_30a,_30b){
this.name=_30a;
this.type=_30b;
};
objj_method=function(_30c,_30d,_30e){
this.name=_30c;
this.method_imp=_30d;
this.types=_30e;
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
class_getName=function(_30f){
if(_30f==Nil){
return "";
}
return _30f.name;
};
class_isMetaClass=function(_310){
if(!_310){
return NO;
}
return ((_310.info&(_307)));
};
class_getSuperclass=function(_311){
if(_311==Nil){
return Nil;
}
return _311.super_class;
};
class_setSuperclass=function(_312,_313){
_312.super_class=_313;
_312.isa.super_class=_313.isa;
};
class_addIvar=function(_314,_315,_316){
var _317=_314.allocator.prototype;
if(typeof _317[_315]!="undefined"){
return NO;
}
_314.ivars.push(new objj_ivar(_315,_316));
_317[_315]=NULL;
return YES;
};
class_addIvars=function(_318,_319){
var _31a=0,_31b=_319.length,_31c=_318.allocator.prototype;
for(;_31a<_31b;++_31a){
var ivar=_319[_31a],name=ivar.name;
if(typeof _31c[name]==="undefined"){
_318.ivars.push(ivar);
_31c[name]=NULL;
}
}
};
class_copyIvarList=function(_31d){
return _31d.ivars.slice(0);
};
class_addMethod=function(_31e,_31f,_320,_321){
if(_31e.method_hash[_31f]){
return NO;
}
var _322=new objj_method(_31f,_320,_321);
_31e.method_list.push(_322);
_31e.method_dtable[_31f]=_322;
if(!((_31e.info&(_307)))&&(((_31e.info&(_307)))?_31e:_31e.isa).isa===(((_31e.info&(_307)))?_31e:_31e.isa)){
class_addMethod((((_31e.info&(_307)))?_31e:_31e.isa),_31f,_320,_321);
}
return YES;
};
class_addMethods=function(_323,_324){
var _325=0,_326=_324.length,_327=_323.method_list,_328=_323.method_dtable;
for(;_325<_326;++_325){
var _329=_324[_325];
if(_323.method_hash[_329.name]){
continue;
}
_327.push(_329);
_328[_329.name]=_329;
}
if(!((_323.info&(_307)))&&(((_323.info&(_307)))?_323:_323.isa).isa===(((_323.info&(_307)))?_323:_323.isa)){
class_addMethods((((_323.info&(_307)))?_323:_323.isa),_324);
}
};
class_getInstanceMethod=function(_32a,_32b){
if(!_32a||!_32b){
return NULL;
}
var _32c=_32a.method_dtable[_32b];
return _32c?_32c:NULL;
};
class_getClassMethod=function(_32d,_32e){
if(!_32d||!_32e){
return NULL;
}
var _32f=(((_32d.info&(_307)))?_32d:_32d.isa).method_dtable[_32e];
return _32f?_32f:NULL;
};
class_copyMethodList=function(_330){
return _330.method_list.slice(0);
};
class_replaceMethod=function(_331,_332,_333){
if(!_331||!_332){
return NULL;
}
var _334=_331.method_dtable[_332],_335=NULL;
if(_334){
_335=_334.method_imp;
}
_334.method_imp=_333;
return _335;
};
var _336=function(_337){
var meta=(((_337.info&(_307)))?_337:_337.isa);
if((_337.info&(_307))){
_337=objj_getClass(_337.name);
}
if(_337.super_class&&!((((_337.super_class.info&(_307)))?_337.super_class:_337.super_class.isa).info&(_308))){
_336(_337.super_class);
}
if(!(meta.info&(_308))&&!(meta.info&(_309))){
meta.info=(meta.info|(_309))&~(0);
objj_msgSend(_337,"initialize");
meta.info=(meta.info|(_308))&~(_309);
}
};
var _338=new objj_method("forward",function(self,_339){
return objj_msgSend(self,"forward::",_339,arguments);
});
class_getMethodImplementation=function(_33a,_33b){
if(!((((_33a.info&(_307)))?_33a:_33a.isa).info&(_308))){
_336(_33a);
}
var _33c=_33a.method_dtable[_33b];
if(!_33c){
_33c=_338;
}
var _33d=_33c.method_imp;
return _33d;
};
var _33e={};
objj_allocateClassPair=function(_33f,_340){
var _341=new objj_class(),_342=new objj_class(),_343=_341;
if(_33f){
_343=_33f;
while(_343.superclass){
_343=_343.superclass;
}
_341.allocator.prototype=new _33f.allocator;
_341.method_store.prototype=new _33f.method_store;
_341.method_dtable=_341.method_store.prototype;
_342.method_store.prototype=new _33f.isa.method_store;
_342.method_dtable=_342.method_store.prototype;
_341.super_class=_33f;
_342.super_class=_33f.isa;
}else{
_341.allocator.prototype=new objj_object();
}
_341.isa=_342;
_341.name=_340;
_341.info=_306;
_341._UID=objj_generateObjectUID();
_342.isa=_343.isa;
_342.name=_340;
_342.info=_307;
_342._UID=objj_generateObjectUID();
return _341;
};
var _2c2=nil;
objj_registerClassPair=function(_344){
_1[_344.name]=_344;
_33e[_344.name]=_344;
_1a3(_344,_2c2);
};
class_createInstance=function(_345){
if(!_345){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _346=new _345.allocator();
_346.isa=_345;
_346._UID=objj_generateObjectUID();
return _346;
};
var _347=function(){
};
_347.prototype.member=false;
with(new _347()){
member=true;
}
if(new _347().member){
var _348=class_createInstance;
class_createInstance=function(_349){
var _34a=_348(_349);
if(_34a){
var _34b=_34a.isa,_34c=_34b;
while(_34b){
var _34d=_34b.ivars;
count=_34d.length;
while(count--){
_34a[_34d[count].name]=NULL;
}
_34b=_34b.super_class;
}
_34a.isa=_34c;
}
return _34a;
};
}
object_getClassName=function(_34e){
if(!_34e){
return "";
}
var _34f=_34e.isa;
return _34f?class_getName(_34f):"";
};
objj_lookUpClass=function(_350){
var _351=_33e[_350];
return _351?_351:Nil;
};
objj_getClass=function(_352){
var _353=_33e[_352];
if(!_353){
}
return _353?_353:Nil;
};
objj_getMetaClass=function(_354){
var _355=objj_getClass(_354);
return (((_355.info&(_307)))?_355:_355.isa);
};
ivar_getName=function(_356){
return _356.name;
};
ivar_getTypeEncoding=function(_357){
return _357.type;
};
objj_msgSend=function(_358,_359){
if(_358==nil){
return nil;
}
var isa=_358.isa;
if(!((((isa.info&(_307)))?isa:isa.isa).info&(_308))){
_336(isa);
}
var _35a=isa.method_dtable[_359];
if(!_35a){
_35a=_338;
}
var _35b=_35a.method_imp;
switch(arguments.length){
case 2:
return _35b(_358,_359);
case 3:
return _35b(_358,_359,arguments[2]);
case 4:
return _35b(_358,_359,arguments[2],arguments[3]);
}
return _35b.apply(_358,arguments);
};
objj_msgSendSuper=function(_35c,_35d){
var _35e=_35c.super_class;
arguments[0]=_35c.receiver;
if(!((((_35e.info&(_307)))?_35e:_35e.isa).info&(_308))){
_336(_35e);
}
var _35f=_35e.method_dtable[_35d];
if(!_35f){
_35f=_338;
}
var _360=_35f.method_imp;
return _360.apply(_35c.receiver,arguments);
};
method_getName=function(_361){
return _361.name;
};
method_getImplementation=function(_362){
return _362.method_imp;
};
method_setImplementation=function(_363,_364){
var _365=_363.method_imp;
_363.method_imp=_364;
return _365;
};
method_exchangeImplementations=function(lhs,rhs){
var _366=method_getImplementation(lhs),_367=method_getImplementation(rhs);
method_setImplementation(lhs,_367);
method_setImplementation(rhs,_366);
};
sel_getName=function(_368){
return _368?_368:"<null selector>";
};
sel_getUid=function(_369){
return _369;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_36a){
return _36a;
};
_140();
var _36b=new CFURL(window.location.href),_36c=document.getElementsByTagName("base"),_36d=_36c.length;
if(_36d>0){
var _36e=_36c[_36d-1],_36f=_36e&&_36e.getAttribute("href");
if(_36f){
_36b=new CFURL(_36f,_36b);
}
}
var _370=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1a2=new CFURL(".",new CFURL(_370,_36b)).absoluteURL(),_371=new CFURL("..",_1a2).absoluteURL();
if(_1a2===_371){
_371=new CFURL(_371.schemeAndAuthority());
}
_18b.resourceAtURL(_371,YES);
_2.pageURL=_36b;
_2.bootstrap=function(){
_372();
};
function _372(){
_18b.resolveResourceAtURL(_1a2,YES,function(_373){
var _374=_18b.includeURLs(),_8c=0,_375=_374.length;
for(;_8c<_375;++_8c){
_373.resourceAtURL(_374[_8c],YES);
}
_26e.fileImporterForURL(_1a2)(_370.lastPathComponent(),YES,function(){
_141();
_376(main);
});
});
};
var _377=NO;
function _376(_378){
if(_377){
return _378();
}
if(window.addEventListener){
window.addEventListener("load",_378,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_378);
}
}
};
_376(function(){
_377=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _19e(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1a2);
};
objj_importFile=_26e.fileImporterForURL(_1a2);
objj_executeFile=_26e.fileExecuterForURL(_1a2);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
