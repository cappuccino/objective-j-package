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
var _149=_147.path.split("/"),_14a=_147.pathComponents;
_8c=0,count=_149.length;
for(;_8c<count;++_8c){
var _14b=_149[_8c];
if(_14b){
_14a.push(_14b);
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
CFURL=function(aURL,_14c){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_14c){
return aURL;
}
var _14d=aURL.baseURL();
if(_14d){
_14c=new CFURL(_14d.absoluteURL(),_14c);
}
aURL=aURL.string();
}
if(_13f>0){
var _14e=aURL+" "+(_14c&&_14c.UID()||"");
if(_71.call(_13d,_14e)){
return _13d[_14e];
}
_13d[_14e]=this;
}
if(aURL.match(/^data:/)){
var _14f={},_8c=_143.length;
while(_8c--){
_14f[_143[_8c]]="";
}
_14f.url=aURL;
_14f.scheme="data";
_14f.pathComponents=[];
this._parts=_14f;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_14c;
};
CFURL.prototype.UID=function(){
return this._UID;
};
var _150={};
CFURL.prototype.mappedURL=function(){
return _150[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_151,_152){
_150[_151.absoluteString()]=_152;
};
CFURL.prototype.schemeAndAuthority=function(){
var _153="",_154=this.scheme();
if(_154){
_153+=_154+":";
}
var _155=this.authority();
if(_155){
_153+="//"+_155;
}
return _153;
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
function _156(aURL){
aURL=aURL.standardizedURL();
var _157=aURL.baseURL();
if(!_157){
return aURL;
}
var _158=((aURL)._parts||_144(aURL)),_159,_15a=_157.absoluteURL(),_15b=((_15a)._parts||_144(_15a));
if(_158.scheme||_158.authority){
_159=_158;
}else{
_159={};
_159.scheme=_15b.scheme;
_159.authority=_15b.authority;
_159.userInfo=_15b.userInfo;
_159.user=_15b.user;
_159.password=_15b.password;
_159.domain=_15b.domain;
_159.portNumber=_15b.portNumber;
_159.queryString=_158.queryString;
_159.fragment=_158.fragment;
var _15c=_158.pathComponents;
if(_15c.length&&_15c[0]==="/"){
_159.path=_158.path;
_159.pathComponents=_15c;
}else{
var _15d=_15b.pathComponents,_15e=_15d.concat(_15c);
if(!_157.hasDirectoryPath()&&_15d.length){
_15e.splice(_15d.length-1,1);
}
if(_15c.length&&_15c[0]===".."){
_15f(_15e,YES);
}
_159.pathComponents=_15e;
_159.path=_160(_15e,_15c.length<=0||aURL.hasDirectoryPath());
}
}
var _161=_162(_159),_163=new CFURL(_161);
_163._parts=_159;
_163._standardizedURL=_163;
_163._standardizedString=_161;
_163._absoluteURL=_163;
_163._absoluteString=_161;
return _163;
};
function _160(_164,_165){
var path=_164.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_165){
path+="/";
}
return path;
};
function _15f(_166,_167){
var _168=0,_169=0,_16a=_166.length,_16b=_167?_166:[];
for(;_168<_16a;++_168){
var _16c=_166[_168];
if(_16c===""||_16c==="."){
continue;
}
if(_16c!==".."||_169===0||_16b[_169-1]===".."){
_16b[_169]=_16c;
_169++;
continue;
}
if(_169>0&&_16b[_169-1]!=="/"){
--_169;
}
}
_16b.length=_169;
return _16b;
};
function _162(_16d){
var _16e="",_16f=_16d.scheme;
if(_16f){
_16e+=_16f+":";
}
var _170=_16d.authority;
if(_170){
_16e+="//"+_170;
}
_16e+=_16d.path;
var _171=_16d.queryString;
if(_171){
_16e+="?"+_171;
}
var _172=_16d.fragment;
if(_172){
_16e+="#"+_172;
}
return _16e;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_156(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _173=((this)._parts||_144(this)),_174=_173.pathComponents,_175=_15f(_174,NO);
var _176=_160(_175,this.hasDirectoryPath());
if(_173.path===_176){
this._standardizedURL=this;
}else{
var _177=_178(_173);
_177.pathComponents=_175;
_177.path=_176;
var _179=new CFURL(_162(_177),this.baseURL());
_179._parts=_177;
_179._standardizedURL=_179;
this._standardizedURL=_179;
}
}
return this._standardizedURL;
};
function _178(_17a){
var _17b={},_17c=_143.length;
while(_17c--){
var _17d=_143[_17c];
_17b[_17d]=_17a[_17d];
}
return _17b;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _17e=((this)._parts||_144(this)).authority;
if(_17e){
return _17e;
}
var _17f=this.baseURL();
return _17f&&_17f.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _180=this._hasDirectoryPath;
if(_180===_44){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _181=this.lastPathComponent();
_180=_181==="."||_181==="..";
this._hasDirectoryPath=_180;
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
var _182=this.pathComponents(),_183=_182.length;
if(!_183){
this._lastPathComponent="";
}else{
this._lastPathComponent=_182[_183-1];
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
var _184=this.lastPathComponent();
if(!_184){
return NULL;
}
_184=_184.replace(/^\.*/,"");
var _185=_184.lastIndexOf(".");
return _185<=0?"":_184.substring(_185+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_144(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _186=this._scheme;
if(_186===_44){
_186=((this)._parts||_144(this)).scheme;
if(!_186){
var _187=this.baseURL();
_186=_187&&_187.scheme();
}
this._scheme=_186;
}
return _186;
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
function _188(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _188(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_189){
_188(this).setValueForKey(aKey,_189);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_18a.resourceAtURL(this).contents());
return data;
};
function _f8(_18b){
this._string=_18b;
var _18c=_18b.indexOf(";");
this._magicNumber=_18b.substr(0,_18c);
this._location=_18b.indexOf(";",++_18c);
this._version=_18b.substring(_18c,this._location++);
};
_f8.prototype.magicNumber=function(){
return this._magicNumber;
};
_f8.prototype.version=function(){
return this._version;
};
_f8.prototype.getMarker=function(){
var _18d=this._string,_18e=this._location;
if(_18e>=_18d.length){
return null;
}
var next=_18d.indexOf(";",_18e);
if(next<0){
return null;
}
var _18f=_18d.substring(_18e,next);
if(_18f==="e"){
return null;
}
this._location=next+1;
return _18f;
};
_f8.prototype.getString=function(){
var _190=this._string,_191=this._location;
if(_191>=_190.length){
return null;
}
var next=_190.indexOf(";",_191);
if(next<0){
return null;
}
var size=parseInt(_190.substring(_191,next),10),text=_190.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _192=0,_193=1<<0,_194=1<<1,_195=1<<2,_196=1<<3,_197=1<<4;
var _198={},_199={},_19a=new Date().getTime(),_19b=0,_19c=0;
CFBundle=function(aURL){
aURL=_19d(aURL).asDirectoryPathURL();
var _19e=aURL.absoluteString(),_19f=_198[_19e];
if(_19f){
return _19f;
}
_198[_19e]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._loadStatus=_192;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _6c(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_19d(aURL));
while(aURL.path()!=="/"){
var _1a0=_198[aURL.absoluteString()];
if(_1a0){
return _1a0;
}
aURL=new CFURL("..",aURL);
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1a1);
};
function _1a2(_1a3,_1a4){
if(_1a4){
_199[_1a3.name]=_1a4;
}
};
CFBundle.bundleForClass=function(_1a5){
return _199[_1a5.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1a6,_1a7,_1a8){
if(_1a7){
_1a6=_1a6+"."+_1a7;
}
if(_1a8){
_1a6=_1a8+"/"+_1a6;
}
var _1a9=(new CFURL(_1a6,this.resourcesDirectoryURL())).mappedURL();
return _1a9.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1aa=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1aa){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1aa,this.mostEligibleEnvironmentURL());
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
var _1ab=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_8c=_1ab.length,_1ac=this.mostEligibleEnvironment();
while(_8c--){
if(_1ab[_8c]===_1ac){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1ad){
_1ad=_1ad||this.environments();
var _1ae=CFBundle.environments(),_8c=0,_1af=_1ae.length,_1b0=_1ad.length;
for(;_8c<_1af;++_8c){
var _1b1=0,_1b2=_1ae[_8c];
for(;_1b1<_1b0;++_1b1){
if(_1b2===_1ad[_1b1]){
return _1b2;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_193;
};
CFBundle.prototype.load=function(_1b3){
if(this._loadStatus!==_192){
return;
}
this._loadStatus=_193|_194;
var self=this,_1b4=this.bundleURL(),_1b5=new CFURL("..",_1b4);
if(_1b5.absoluteString()===_1b4.absoluteString()){
_1b5=_1b5.schemeAndAuthority();
}
_18a.resolveResourceAtURL(_1b5,YES,function(_1b6){
var _1b7=_1b4.absoluteURL().lastPathComponent();
self._staticResource=_1b6._children[_1b7]||new _18a(_1b4,_1b6,YES,NO);
function _1b8(_1b9){
self._loadStatus&=~_194;
self._infoDictionary=_1b9.request.responsePropertyList();
if(!self._infoDictionary){
_1bb(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_19c=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1bf(self,_1b3);
};
function _1ba(){
self._loadStatus=_192;
_1bb(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _a3(new CFURL("Info.plist",self.bundleURL()),_1b8,_1ba);
});
};
function _1bb(_1bc,_1bd){
_1be(_1bc._staticResource);
_1bc._eventDispatcher.dispatchEvent({type:"error",error:_1bd,bundle:_1bc});
};
function _1bf(_1c0,_1c1){
if(!_1c0.mostEligibleEnvironment()){
return _1c2();
}
_1c3(_1c0,_1c4,_1c2);
_1c5(_1c0,_1c4,_1c2);
if(_1c0._loadStatus===_193){
return _1c4();
}
function _1c2(_1c6){
var _1c7=_1c0._loadRequests,_1c8=_1c7.length;
while(_1c8--){
_1c7[_1c8].abort();
}
this._loadRequests=[];
_1c0._loadStatus=_192;
_1bb(_1c0,_1c6||new Error("Could not recognize executable code format in Bundle "+_1c0));
};
function _1c4(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_19c){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_19b/_19c),0),_19c,_1c0.path());
}
if(_1c0._loadStatus===_193){
_1c0._loadStatus=_197;
}else{
return;
}
_1be(_1c0._staticResource);
function _1c9(){
_1c0._eventDispatcher.dispatchEvent({type:"load",bundle:_1c0});
};
if(_1c1){
_1ca(_1c0,_1c9);
}else{
_1c9();
}
};
};
function _1c3(_1cb,_1cc,_1cd){
var _1ce=_1cb.executableURL();
if(!_1ce){
return;
}
_1cb._loadStatus|=_195;
new _a3(_1ce,function(_1cf){
try{
_19b+=_1cf.request.responseText().length;
_1d0(_1cb,_1cf.request.responseText(),_1ce);
_1cb._loadStatus&=~_195;
_1cc();
}
catch(anException){
_1cd(anException);
}
},_1cd);
};
function _1d1(_1d2){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1d2.mostEligibleEnvironmentURL());
};
function _1d3(_1d4){
if(_1d5===_1d6){
return new CFURL("dataURLs.txt",_1d4.mostEligibleEnvironmentURL());
}
if(_1d5===_1d7||_1d5===_1d8){
return new CFURL("MHTMLPaths.txt",_1d4.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1c5(_1d9,_1da,_1db){
if(!_1d9.hasSpritedImages()){
return;
}
_1d9._loadStatus|=_196;
if(!_1dc()){
return _1dd(_1d1(_1d9),function(){
_1c5(_1d9,_1da,_1db);
});
}
var _1de=_1d3(_1d9);
if(!_1de){
_1d9._loadStatus&=~_196;
return _1da();
}
new _a3(_1de,function(_1df){
try{
_19b+=_1df.request.responseText().length;
_1d0(_1d9,_1df.request.responseText(),_1de);
_1d9._loadStatus&=~_196;
_1da();
}
catch(anException){
_1db(anException);
}
},_1db);
};
var _1e0=[],_1d5=-1,_1e1=0,_1d6=1,_1d7=2,_1d8=3;
function _1dc(){
return _1d5!==-1;
};
function _1dd(_1e2,_1e3){
if(_1dc()){
return;
}
_1e0.push(_1e3);
if(_1e0.length>1){
return;
}
_1e0.push(function(){
var size=0,_1e4=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_1e4){
return;
}
switch(_1d5){
case _1d6:
size=_1e4.valueForKey("data");
break;
case _1d7:
case _1d8:
size=_1e4.valueForKey("mhtml");
break;
}
_19c+=size;
});
_1e5([_1d6,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1d7,_1e2+"!test",_1d8,_1e2+"?"+_19a+"!test"]);
};
function _1e6(){
var _1e7=_1e0.length;
while(_1e7--){
_1e0[_1e7]();
}
};
function _1e5(_1e8){
if(_1e8.length<2){
_1d5=_1e1;
_1e6();
return;
}
var _1e9=new Image();
_1e9.onload=function(){
if(_1e9.width===1&&_1e9.height===1){
_1d5=_1e8[0];
_1e6();
}else{
_1e9.onerror();
}
};
_1e9.onerror=function(){
_1e5(_1e8.slice(2));
};
_1e9.src=_1e8[1];
};
function _1ca(_1ea,_1eb){
var _1ec=[_1ea._staticResource];
function _1ed(_1ee){
for(;_1ee<_1ec.length;++_1ee){
var _1ef=_1ec[_1ee];
if(_1ef.isNotFound()){
continue;
}
if(_1ef.isFile()){
var _1f0=new _2f7(_1ef.URL());
if(_1f0.hasLoadedFileDependencies()){
_1f0.execute();
}else{
_1f0.addEventListener("dependenciesload",function(){
_1ed(_1ee);
});
_1f0.loadFileDependencies();
return;
}
}else{
if(_1ef.URL().absoluteString()===_1ea.resourcesDirectoryURL().absoluteString()){
continue;
}
var _1f1=_1ef.children();
for(var name in _1f1){
if(_71.call(_1f1,name)){
_1ec.push(_1f1[name]);
}
}
}
}
_1eb();
};
_1ed(0);
};
var _1f2="@STATIC",_1f3="p",_1f4="u",_1f5="c",_1f6="t",_1f7="I",_1f8="i";
function _1d0(_1f9,_1fa,_1fb){
var _1fc=new _f8(_1fa);
if(_1fc.magicNumber()!==_1f2){
throw new Error("Could not read static file: "+_1fb);
}
if(_1fc.version()!=="1.0"){
throw new Error("Could not read static file: "+_1fb);
}
var _1fd,_1fe=_1f9.bundleURL(),file=NULL;
while(_1fd=_1fc.getMarker()){
var text=_1fc.getString();
if(_1fd===_1f3){
var _1ff=new CFURL(text,_1fe),_200=_18a.resourceAtURL(new CFURL(".",_1ff),YES);
file=new _18a(_1ff,_200,NO,YES);
}else{
if(_1fd===_1f4){
var URL=new CFURL(text,_1fe),_201=_1fc.getString();
if(_201.indexOf("mhtml:")===0){
_201="mhtml:"+new CFURL(_201.substr("mhtml:".length),_1fe);
if(_1d5===_1d8){
var _202=URLString.indexOf("!"),_203=URLString.substring(0,_202),_204=URLString.substring(_202);
_201=_203+"?"+_19a+_204;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_201));
var _200=_18a.resourceAtURL(new CFURL(".",URL),YES);
new _18a(URL,_200,NO,YES);
}else{
if(_1fd===_1f6){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_205,_206){
this._eventDispatcher.addEventListener(_205,_206);
};
CFBundle.prototype.removeEventListener=function(_207,_208){
this._eventDispatcher.removeEventListener(_207,_208);
};
CFBundle.prototype.onerror=function(_209){
throw _209.error;
};
CFBundle.prototype.bundlePath=function(){
return this._bundleURL.absoluteURL().path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_20a){
return this.resourceURL(_20a).absoluteString();
};
var _20b={};
function _18a(aURL,_20c,_20d,_20e){
this._parent=_20c;
this._eventDispatcher=new _6c(this);
var name=aURL.absoluteURL().lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_20e;
if(_20d){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_20c){
_20b[name]=this;
}
this._isDirectory=!!_20d;
this._isNotFound=NO;
if(_20c){
_20c._children[name]=this;
}
if(_20d){
this._children={};
}else{
this._contents="";
}
};
_18a.rootResources=function(){
return _20b;
};
_2.StaticResource=_18a;
function _1be(_20f){
_20f._isResolved=YES;
_20f._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_20f});
};
_18a.prototype.resolve=function(){
if(this.isDirectory()){
var _210=new CFBundle(this.URL());
_210.onerror=function(){
};
_210.load(NO);
}else{
var self=this;
function _211(_212){
self._contents=_212.request.responseText();
_1be(self);
};
function _213(){
self._isNotFound=YES;
_1be(self);
};
new _a3(this.URL(),_211,_213);
}
};
_18a.prototype.name=function(){
return this._name;
};
_18a.prototype.URL=function(){
return this._URL;
};
_18a.prototype.contents=function(){
return this._contents;
};
_18a.prototype.children=function(){
return this._children;
};
_18a.prototype.parent=function(){
return this._parent;
};
_18a.prototype.isResolved=function(){
return this._isResolved;
};
_18a.prototype.write=function(_214){
this._contents+=_214;
};
function _215(_216){
var _217=_216.schemeAndAuthority(),_218=_20b[_217];
if(!_218){
_218=new _18a(new CFURL(_217),NULL,YES,YES);
}
return _218;
};
_18a.resourceAtURL=function(aURL,_219){
aURL=_19d(aURL).absoluteURL();
var _21a=_215(aURL),_21b=aURL.pathComponents(),_8c=0,_21c=_21b.length;
for(;_8c<_21c;++_8c){
var name=_21b[_8c];
if(_71.call(_21a._children,name)){
_21a=_21a._children[name];
}else{
if(_219){
_21a=new _18a(new CFURL(name,_21a.URL()),_21a,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _21a;
};
_18a.prototype.resourceAtURL=function(aURL,_21d){
return _18a.resourceAtURL(new CFURL(aURL,this.URL()),_21d);
};
_18a.resolveResourceAtURL=function(aURL,_21e,_21f){
aURL=_19d(aURL).absoluteURL();
_220(_215(aURL),_21e,aURL.pathComponents(),0,_21f);
};
_18a.prototype.resolveResourceAtURL=function(aURL,_221,_222){
_18a.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_221,_222);
};
function _220(_223,_224,_225,_226,_227){
var _228=_225.length;
for(;_226<_228;++_226){
var name=_225[_226],_229=_71.call(_223._children,name)&&_223._children[name];
if(!_229){
_229=new _18a(new CFURL(name,_223.URL()),_223,_226+1<_228||_224,NO);
_229.resolve();
}
if(!_229.isResolved()){
return _229.addEventListener("resolve",function(){
_220(_223,_224,_225,_226,_227);
});
}
if(_229.isNotFound()){
return _227(null,new Error("File not found: "+_225.join("/")));
}
if((_226+1<_228)&&_229.isFile()){
return _227(null,new Error("File is not a directory: "+_225.join("/")));
}
_223=_229;
}
_227(_223);
};
function _22a(aURL,_22b,_22c){
var _22d=_18a.includeURLs(),_22e=new CFURL(aURL,_22d[_22b]).absoluteURL();
_18a.resolveResourceAtURL(_22e,NO,function(_22f){
if(!_22f){
if(_22b+1<_22d.length){
_22a(aURL,_22b+1,_22c);
}else{
_22c(NULL);
}
return;
}
_22c(_22f);
});
};
_18a.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_230){
_22a(aURL,0,_230);
};
_18a.prototype.addEventListener=function(_231,_232){
this._eventDispatcher.addEventListener(_231,_232);
};
_18a.prototype.removeEventListener=function(_233,_234){
this._eventDispatcher.removeEventListener(_233,_234);
};
_18a.prototype.isNotFound=function(){
return this._isNotFound;
};
_18a.prototype.isFile=function(){
return !this._isDirectory;
};
_18a.prototype.isDirectory=function(){
return this._isDirectory;
};
_18a.prototype.toString=function(_235){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _236=this.name();
if(this.isDirectory()){
var _237=this._children;
for(var name in _237){
if(_237.hasOwnProperty(name)){
var _238=_237[name];
if(_235||!_238.isNotFound()){
_236+="\n\t"+_237[name].toString(_235).split("\n").join("\n\t");
}
}
}
}
return _236;
};
var _239=NULL;
_18a.includeURLs=function(){
if(_23a){
return _23a;
}
var _23a=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_23a=["Frameworks","Frameworks/Debug"];
}else{
_23a=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _23b=_23a.length;
while(_23b--){
_23a[_23b]=new CFURL(_23a[_23b]).asDirectoryPathURL();
}
return _23a;
};
var _23c="accessors",_23d="class",_23e="end",_23f="function",_240="implementation",_241="import",_242="each",_243="outlet",_244="action",_245="new",_246="selector",_247="super",_248="var",_249="in",_24a="=",_24b="+",_24c="-",_24d=":",_24e=",",_24f=".",_250="*",_251=";",_252="<",_253="{",_254="}",_255=">",_256="[",_257="\"",_258="@",_259="]",_25a="?",_25b="(",_25c=")",_25d=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_25e=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_25f=/^[a-zA-Z_$](\w|$)*$/;
function _260(_261){
this._index=-1;
this._tokens=(_261+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_260.prototype.push=function(){
this._context.push(this._index);
};
_260.prototype.pop=function(){
this._index=this._context.pop();
};
_260.prototype.peak=function(_262){
if(_262){
this.push();
var _263=this.skip_whitespace();
this.pop();
return _263;
}
return this._tokens[this._index+1];
};
_260.prototype.next=function(){
return this._tokens[++this._index];
};
_260.prototype.previous=function(){
return this._tokens[--this._index];
};
_260.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_260.prototype.skip_whitespace=function(_264){
var _265;
if(_264){
while((_265=this.previous())&&_25d.test(_265)){
}
}else{
while((_265=this.next())&&_25d.test(_265)){
}
}
return _265;
};
_2.Lexer=_260;
function _266(){
this.atoms=[];
};
_266.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_267,aURL,_268){
return new _269(_267,aURL,_268).executable();
};
_2.eval=function(_26a){
return eval(_2.preprocess(_26a).code());
};
var _269=function(_26b,aURL,_26c){
this._URL=new CFURL(aURL);
_26b=_26b.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _266();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _260(_26b);
this._flags=_26c;
this._classMethod=false;
this._executable=NULL;
this.preprocess(this._tokens,this._buffer);
};
_2.Preprocessor=_269;
_269.Flags={};
_269.Flags.IncludeDebugSymbols=1<<0;
_269.Flags.IncludeTypeSignatures=1<<1;
_269.prototype.executable=function(){
if(!this._executable){
this._executable=new _26d(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_269.prototype.accessors=function(_26e){
var _26f=_26e.skip_whitespace(),_270={};
if(_26f!=_25b){
_26e.previous();
return _270;
}
while((_26f=_26e.skip_whitespace())!=_25c){
var name=_26f,_271=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_26f=_26e.skip_whitespace())==_24a){
_271=_26e.skip_whitespace();
if(!/^\w+$/.test(_271)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_26f=_26e.next())!=_24d){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_271+=":";
}
_26f=_26e.skip_whitespace();
}
_270[name]=_271;
if(_26f==_25c){
break;
}
if(_26f!=_24e){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _270;
};
_269.prototype.brackets=function(_272,_273){
var _274=[];
while(this.preprocess(_272,NULL,NULL,NULL,_274[_274.length]=[])){
}
if(_274[0].length===1){
_273.atoms[_273.atoms.length]="[";
_273.atoms[_273.atoms.length]=_274[0][0];
_273.atoms[_273.atoms.length]="]";
}else{
var _275=new _266();
if(_274[0][0].atoms[0]==_247){
_273.atoms[_273.atoms.length]="objj_msgSendSuper(";
_273.atoms[_273.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_273.atoms[_273.atoms.length]="objj_msgSend(";
_273.atoms[_273.atoms.length]=_274[0][0];
}
_275.atoms[_275.atoms.length]=_274[0][1];
var _276=1,_277=_274.length,_278=new _266();
for(;_276<_277;++_276){
var pair=_274[_276];
_275.atoms[_275.atoms.length]=pair[1];
_278.atoms[_278.atoms.length]=", "+pair[0];
}
_273.atoms[_273.atoms.length]=", \"";
_273.atoms[_273.atoms.length]=_275;
_273.atoms[_273.atoms.length]="\"";
_273.atoms[_273.atoms.length]=_278;
_273.atoms[_273.atoms.length]=")";
}
};
_269.prototype.directive=function(_279,_27a,_27b){
var _27c=_27a?_27a:new _266(),_27d=_279.next();
if(_27d.charAt(0)==_257){
_27c.atoms[_27c.atoms.length]=_27d;
}else{
if(_27d===_23d){
_279.skip_whitespace();
return;
}else{
if(_27d===_240){
this.implementation(_279,_27c);
}else{
if(_27d===_241){
this._import(_279);
}else{
if(_27d===_246){
this.selector(_279,_27c);
}
}
}
}
}
if(!_27a){
return _27c;
}
};
_269.prototype.implementation=function(_27e,_27f){
var _280=_27f,_281="",_282=NO,_283=_27e.skip_whitespace(),_284="Nil",_285=new _266(),_286=new _266();
if(!(/^\w/).test(_283)){
throw new Error(this.error_message("*** Expected class name, found \""+_283+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_283+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_283+"\").super_class";
this._currentClass=_283;
this._currentSelector="";
if((_281=_27e.skip_whitespace())==_25b){
_281=_27e.skip_whitespace();
if(_281==_25c){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_283+"\"."));
}
if(_27e.skip_whitespace()!=_25c){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_283+"\"."));
}
_280.atoms[_280.atoms.length]="{\nvar the_class = objj_getClass(\""+_283+"\")\n";
_280.atoms[_280.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_283+"\\\"\");\n";
_280.atoms[_280.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_281==_24d){
_281=_27e.skip_whitespace();
if(!_25f.test(_281)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_281+"\"."));
}
_284=_281;
_281=_27e.skip_whitespace();
}
_280.atoms[_280.atoms.length]="{var the_class = objj_allocateClassPair("+_284+", \""+_283+"\"),\nmeta_class = the_class.isa;";
if(_281==_253){
var _287=0,_288=[],_289,_28a={};
while((_281=_27e.skip_whitespace())&&_281!=_254){
if(_281===_258){
_281=_27e.next();
if(_281===_23c){
_289=this.accessors(_27e);
}else{
if(_281!==_243){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_281+"')."));
}
}
}else{
if(_281==_251){
if(_287++==0){
_280.atoms[_280.atoms.length]="class_addIvars(the_class, [";
}else{
_280.atoms[_280.atoms.length]=", ";
}
var name=_288[_288.length-1];
_280.atoms[_280.atoms.length]="new objj_ivar(\""+name+"\")";
_288=[];
if(_289){
_28a[name]=_289;
_289=NULL;
}
}else{
_288.push(_281);
}
}
}
if(_288.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_287){
_280.atoms[_280.atoms.length]="]);\n";
}
if(!_281){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
for(ivar_name in _28a){
var _28b=_28a[ivar_name],_28c=_28b["property"]||ivar_name;
var _28d=_28b["getter"]||_28c,_28e="(id)"+_28d+"\n{\nreturn "+ivar_name+";\n}";
if(_285.atoms.length!==0){
_285.atoms[_285.atoms.length]=",\n";
}
_285.atoms[_285.atoms.length]=this.method(new _260(_28e));
if(_28b["readonly"]){
continue;
}
var _28f=_28b["setter"];
if(!_28f){
var _290=_28c.charAt(0)=="_"?1:0;
_28f=(_290?"_":"")+"set"+_28c.substr(_290,1).toUpperCase()+_28c.substring(_290+1)+":";
}
var _291="(void)"+_28f+"(id)newValue\n{\n";
if(_28b["copy"]){
_291+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_291+=ivar_name+" = newValue;\n}";
}
if(_285.atoms.length!==0){
_285.atoms[_285.atoms.length]=",\n";
}
_285.atoms[_285.atoms.length]=this.method(new _260(_291));
}
}else{
_27e.previous();
}
_280.atoms[_280.atoms.length]="objj_registerClassPair(the_class);\n";
}
while((_281=_27e.skip_whitespace())){
if(_281==_24b){
this._classMethod=true;
if(_286.atoms.length!==0){
_286.atoms[_286.atoms.length]=", ";
}
_286.atoms[_286.atoms.length]=this.method(_27e);
}else{
if(_281==_24c){
this._classMethod=false;
if(_285.atoms.length!==0){
_285.atoms[_285.atoms.length]=", ";
}
_285.atoms[_285.atoms.length]=this.method(_27e);
}else{
if(_281==_258){
if((_281=_27e.next())==_23e){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_281+"\"."));
}
}
}
}
}
if(_285.atoms.length!==0){
_280.atoms[_280.atoms.length]="class_addMethods(the_class, [";
_280.atoms[_280.atoms.length]=_285;
_280.atoms[_280.atoms.length]="]);\n";
}
if(_286.atoms.length!==0){
_280.atoms[_280.atoms.length]="class_addMethods(meta_class, [";
_280.atoms[_280.atoms.length]=_286;
_280.atoms[_280.atoms.length]="]);\n";
}
_280.atoms[_280.atoms.length]="}";
this._currentClass="";
};
_269.prototype._import=function(_292){
var _293="",_294=_292.skip_whitespace(),_295=(_294!==_252);
if(_294===_252){
while((_294=_292.next())&&_294!==_255){
_293+=_294;
}
if(!_294){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_294.charAt(0)===_257){
_293=_294.substr(1,_294.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_294+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_293;
this._buffer.atoms[this._buffer.atoms.length]=_295?"\", YES);":"\", NO);";
this._dependencies.push(new _296(new CFURL(_293),_295));
};
_269.prototype.method=function(_297){
var _298=new _266(),_299,_29a="",_29b=[],_29c=[null];
while((_299=_297.skip_whitespace())&&_299!=_253){
if(_299==_24d){
var type="";
_29a+=_299;
_299=_297.skip_whitespace();
if(_299==_25b){
while((_299=_297.skip_whitespace())&&_299!=_25c){
type+=_299;
}
_299=_297.skip_whitespace();
}
_29c[_29b.length+1]=type||null;
_29b[_29b.length]=_299;
}else{
if(_299==_25b){
var type="";
while((_299=_297.skip_whitespace())&&_299!=_25c){
type+=_299;
}
_29c[0]=type||null;
}else{
if(_299==_24e){
if((_299=_297.skip_whitespace())!=_24f||_297.next()!=_24f||_297.next()!=_24f){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_29a+=_299;
}
}
}
}
var _29d=0,_29e=_29b.length;
_298.atoms[_298.atoms.length]="new objj_method(sel_getUid(\"";
_298.atoms[_298.atoms.length]=_29a;
_298.atoms[_298.atoms.length]="\"), function";
this._currentSelector=_29a;
if(this._flags&_269.Flags.IncludeDebugSymbols){
_298.atoms[_298.atoms.length]=" $"+this._currentClass+"__"+_29a.replace(/:/g,"_");
}
_298.atoms[_298.atoms.length]="(self, _cmd";
for(;_29d<_29e;++_29d){
_298.atoms[_298.atoms.length]=", ";
_298.atoms[_298.atoms.length]=_29b[_29d];
}
_298.atoms[_298.atoms.length]=")\n{ with(self)\n{";
_298.atoms[_298.atoms.length]=this.preprocess(_297,NULL,_254,_253);
_298.atoms[_298.atoms.length]="}\n}";
if(this._flags&_269.Flags.IncludeDebugSymbols){
_298.atoms[_298.atoms.length]=","+JSON.stringify(_29c);
}
_298.atoms[_298.atoms.length]=")";
this._currentSelector="";
return _298;
};
_269.prototype.preprocess=function(_29f,_2a0,_2a1,_2a2,_2a3){
var _2a4=_2a0?_2a0:new _266(),_2a5=0,_2a6="";
if(_2a3){
_2a3[0]=_2a4;
var _2a7=false,_2a8=[0,0,0];
}
while((_2a6=_29f.next())&&((_2a6!==_2a1)||_2a5)){
if(_2a3){
if(_2a6===_25a){
++_2a8[2];
}else{
if(_2a6===_253){
++_2a8[0];
}else{
if(_2a6===_254){
--_2a8[0];
}else{
if(_2a6===_25b){
++_2a8[1];
}else{
if(_2a6===_25c){
--_2a8[1];
}else{
if((_2a6===_24d&&_2a8[2]--===0||(_2a7=(_2a6===_259)))&&_2a8[0]===0&&_2a8[1]===0){
_29f.push();
var _2a9=_2a7?_29f.skip_whitespace(true):_29f.previous(),_2aa=_25d.test(_2a9);
if(_2aa||_25f.test(_2a9)&&_25d.test(_29f.previous())){
_29f.push();
var last=_29f.skip_whitespace(true),_2ab=true,_2ac=false;
if(last==="+"||last==="-"){
if(_29f.previous()!==last){
_2ab=false;
}else{
last=_29f.skip_whitespace(true);
_2ac=true;
}
}
_29f.pop();
_29f.pop();
if(_2ab&&((!_2ac&&(last===_254))||last===_25c||last===_259||last===_24f||_25e.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_25f.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2aa){
_2a3[1]=":";
}else{
_2a3[1]=_2a9;
if(!_2a7){
_2a3[1]+=":";
}
var _2a5=_2a4.atoms.length;
while(_2a4.atoms[_2a5--]!==_2a9){
}
_2a4.atoms.length=_2a5;
}
return !_2a7;
}
if(_2a7){
return NO;
}
}
_29f.pop();
if(_2a7){
return NO;
}
}
}
}
}
}
}
_2a8[2]=MAX(_2a8[2],0);
}
if(_2a2){
if(_2a6===_2a2){
++_2a5;
}else{
if(_2a6===_2a1){
--_2a5;
}
}
}
if(_2a6===_23f){
var _2ad="";
while((_2a6=_29f.next())&&_2a6!==_25b&&!(/^\w/).test(_2a6)){
_2ad+=_2a6;
}
if(_2a6===_25b){
if(_2a2===_25b){
++_2a5;
}
_2a4.atoms[_2a4.atoms.length]="function"+_2ad+"(";
if(_2a3){
++_2a8[1];
}
}else{
_2a4.atoms[_2a4.atoms.length]=_2a6+"= function";
}
}else{
if(_2a6==_258){
this.directive(_29f,_2a4);
}else{
if(_2a6==_256){
this.brackets(_29f,_2a4);
}else{
_2a4.atoms[_2a4.atoms.length]=_2a6;
}
}
}
}
if(_2a3){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2a0){
return _2a4;
}
};
_269.prototype.selector=function(_2ae,_2af){
var _2b0=_2af?_2af:new _266();
_2b0.atoms[_2b0.atoms.length]="sel_getUid(\"";
if(_2ae.skip_whitespace()!=_25b){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2b1=_2ae.skip_whitespace();
if(_2b1==_25c){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2af.atoms[_2af.atoms.length]=_2b1;
var _2b2,_2b3=true;
while((_2b2=_2ae.next())&&_2b2!=_25c){
if(_2b3&&/^\d+$/.test(_2b2)||!(/^(\w|$|\:)/.test(_2b2))){
if(!(/\S/).test(_2b2)){
if(_2ae.skip_whitespace()==_25c){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2b2+"' in @selector()."));
}
}
_2b0.atoms[_2b0.atoms.length]=_2b2;
_2b3=(_2b2==_24d);
}
_2b0.atoms[_2b0.atoms.length]="\")";
if(!_2af){
return _2b0;
}
};
_269.prototype.error_message=function(_2b4){
return _2b4+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _296(aURL,_2b5){
this._URL=aURL;
this._isLocal=_2b5;
};
_2.FileDependency=_296;
_296.prototype.URL=function(){
return this._URL;
};
_296.prototype.isLocal=function(){
return this._isLocal;
};
_296.prototype.toMarkedString=function(){
var _2b6=this.URL().absoluteString();
return (this.isLocal()?_1f8:_1f7)+";"+_2b6.length+";"+_2b6;
};
_296.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2b7=0,_2b8=1,_2b9=2,_2ba=0;
function _26d(_2bb,_2bc,aURL,_2bd){
if(arguments.length===0){
return this;
}
this._code=_2bb;
this._function=_2bd||NULL;
this._URL=_19d(aURL||new CFURL("(Anonymous"+(_2ba++)+")"));
this._fileDependencies=_2bc;
if(_2bc.length){
this._fileDependencyStatus=_2b7;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_2b9;
}
if(this._function){
return;
}
this.setCode(_2bb);
};
_2.Executable=_26d;
_26d.prototype.path=function(){
return this.URL().path();
};
_26d.prototype.URL=function(){
return this._URL;
};
_26d.prototype.functionParameters=function(){
var _2be=["global","objj_executeFile","objj_importFile"];
return _2be;
};
_26d.prototype.functionArguments=function(){
var _2bf=[_1,this.fileExecuter(),this.fileImporter()];
return _2bf;
};
_26d.prototype.execute=function(){
var _2c0=_2c1;
_2c1=CFBundle.bundleContainingURL(this.URL());
var _2c2=this._function.apply(_1,this.functionArguments());
_2c1=_2c0;
return _2c2;
};
_26d.prototype.code=function(){
return this._code;
};
_26d.prototype.setCode=function(code){
this._code=code;
var _2c3=this.functionParameters().join(",");
this._function=new Function(_2c3,code);
};
_26d.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_26d.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_2b9;
};
var _2c4=0,_2c5=[],_2c6={};
_26d.prototype.loadFileDependencies=function(_2c7){
var _2c8=this._fileDependencyStatus;
if(_2c8===_2b9){
return _2c7();
}
this._fileDependencyCallbacks.push(_2c7);
if(_2c8===_2b7){
if(_2c4){
throw "Can't load";
}
_2c9(this);
}
};
function _2c9(_2ca){
_2c5.push(_2ca);
_2ca._fileDependencyStatus=_2b8;
var _2cb=_2ca.fileDependencies(),_8c=0,_2cc=_2cb.length,_2cd=_2ca.referenceURL(),_2ce=_2cd.absoluteString(),_2cf=_2ca.fileExecutableSearcher();
_2c4+=_2cc;
for(;_8c<_2cc;++_8c){
var _2d0=_2cb[_8c],_2d1=_2d0.isLocal(),URL=_2d0.URL(),_2d2=(_2d1&&(_2ce+" ")||"")+URL;
if(_2c6[_2d2]){
if(--_2c4===0){
_2d3();
}
continue;
}
_2c6[_2d2]=YES;
_2cf(URL,_2d1,_2d4);
}
};
function _2d4(_2d5){
--_2c4;
if(_2d5._fileDependencyStatus===_2b7){
_2c9(_2d5);
}else{
if(_2c4===0){
_2d3();
}
}
};
function _2d3(){
var _2d6=0,_2d7=_2c5.length;
for(;_2d6<_2d7;++_2d6){
_2c5[_2d6]._fileDependencyStatus=_2b9;
}
for(_2d6=0;_2d6<_2d7;++_2d6){
var _2d8=_2c5[_2d6],_2d9=_2d8._fileDependencyCallbacks,_2da=0,_2db=_2d9.length;
for(;_2da<_2db;++_2da){
_2d9[_2da]();
}
_2d8._fileDependencyCallbacks=[];
}
};
_26d.prototype.referenceURL=function(){
if(this._referenceURL===_44){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_26d.prototype.fileImporter=function(){
return _26d.fileImporterForURL(this.referenceURL());
};
_26d.prototype.fileExecuter=function(){
return _26d.fileExecuterForURL(this.referenceURL());
};
_26d.prototype.fileExecutableSearcher=function(){
return _26d.fileExecutableSearcherForURL(this.referenceURL());
};
var _2dc={};
_26d.fileExecuterForURL=function(aURL){
var _2dd=_19d(aURL),_2de=_2dd.absoluteString(),_2df=_2dc[_2de];
if(!_2df){
_2df=function(aURL,_2e0,_2e1){
_26d.fileExecutableSearcherForURL(_2dd)(aURL,_2e0,function(_2e2){
if(!_2e2.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_2e2.execute(_2e1);
});
};
_2dc[_2de]=_2df;
}
return _2df;
};
var _2e3={};
_26d.fileImporterForURL=function(aURL){
var _2e4=_19d(aURL),_2e5=_2e4.absoluteString(),_2e6=_2e3[_2e5];
if(!_2e6){
_2e6=function(aURL,_2e7,_2e8){
_140();
_26d.fileExecutableSearcherForURL(_2e4)(aURL,_2e7,function(_2e9){
_2e9.loadFileDependencies(function(){
_2e9.execute();
_141();
if(_2e8){
_2e8();
}
});
});
};
_2e3[_2e5]=_2e6;
}
return _2e6;
};
var _2ea={},_2eb={};
_26d.fileExecutableSearcherForURL=function(_2ec){
var _2ed=_2ec.absoluteString(),_2ee=_2ea[_2ed],_2ef={};
if(!_2ee){
_2ee=function(aURL,_2f0,_2f1){
var _2f2=(_2f0&&_2ec||"")+aURL,_2f3=_2eb[_2f2];
if(_2f3){
return _2f4(_2f3);
}
var _2f5=(aURL instanceof CFURL)&&aURL.scheme();
if(_2f0||_2f5){
if(!_2f5){
aURL=new CFURL(aURL,_2ec);
}
_18a.resolveResourceAtURL(aURL,NO,_2f4);
}else{
_18a.resolveResourceAtURLSearchingIncludeURLs(aURL,_2f4);
}
function _2f4(_2f6){
if(!_2f6){
throw new Error("Could not load file at "+aURL);
}
_2eb[_2f2]=_2f6;
_2f1(new _2f7(_2f6.URL()));
};
};
_2ea[_2ed]=_2ee;
}
return _2ee;
};
var _2f8={};
function _2f7(aURL,_2f9){
aURL=_19d(aURL);
var _2fa=aURL.absoluteString(),_2fb=_2f8[_2fa];
if(_2fb){
return _2fb;
}
_2f8[_2fa]=this;
var _2fc=_18a.resourceAtURL(aURL).contents(),_2fd=NULL,_2fe=aURL.pathExtension();
if(_2f9){
_2fd=_2f9;
}else{
if(_2fc.match(/^@STATIC;/)){
_2fd=_2ff(_2fc,aURL);
}else{
if(_2fe==="j"||!_2fe){
_2fd=_2.preprocess(_2fc,aURL,_269.Flags.IncludeDebugSymbols);
}else{
_2fd=new _26d(_2fc,[],aURL);
}
}
}
_26d.apply(this,[_2fd.code(),_2fd.fileDependencies(),aURL,_2fd._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_2f7;
_2f7.prototype=new _26d();
_2f7.prototype.execute=function(_300){
if(this._hasExecuted&&!_300){
return;
}
this._hasExecuted=YES;
_26d.prototype.execute.call(this);
};
_2f7.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _2ff(_301,aURL){
var _302=new _f8(_301);
var _303=NULL,code="",_304=[];
while(_303=_302.getMarker()){
var text=_302.getString();
if(_303===_1f6){
code+=text;
}else{
if(_303===_1f7){
_304.push(new _296(new CFURL(text),NO));
}else{
if(_303===_1f8){
_304.push(new _296(new CFURL(text),YES));
}
}
}
}
return new _26d(code,_304,aURL);
};
var _305=1,_306=2,_307=4,_308=8;
objj_ivar=function(_309,_30a){
this.name=_309;
this.type=_30a;
};
objj_method=function(_30b,_30c,_30d){
this.name=_30b;
this.method_imp=_30c;
this.types=_30d;
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
class_getName=function(_30e){
if(_30e==Nil){
return "";
}
return _30e.name;
};
class_isMetaClass=function(_30f){
if(!_30f){
return NO;
}
return ((_30f.info&(_306)));
};
class_getSuperclass=function(_310){
if(_310==Nil){
return Nil;
}
return _310.super_class;
};
class_setSuperclass=function(_311,_312){
_311.super_class=_312;
_311.isa.super_class=_312.isa;
};
class_addIvar=function(_313,_314,_315){
var _316=_313.allocator.prototype;
if(typeof _316[_314]!="undefined"){
return NO;
}
_313.ivars.push(new objj_ivar(_314,_315));
_316[_314]=NULL;
return YES;
};
class_addIvars=function(_317,_318){
var _319=0,_31a=_318.length,_31b=_317.allocator.prototype;
for(;_319<_31a;++_319){
var ivar=_318[_319],name=ivar.name;
if(typeof _31b[name]==="undefined"){
_317.ivars.push(ivar);
_31b[name]=NULL;
}
}
};
class_copyIvarList=function(_31c){
return _31c.ivars.slice(0);
};
class_addMethod=function(_31d,_31e,_31f,_320){
if(_31d.method_hash[_31e]){
return NO;
}
var _321=new objj_method(_31e,_31f,_320);
_31d.method_list.push(_321);
_31d.method_dtable[_31e]=_321;
if(!((_31d.info&(_306)))&&(((_31d.info&(_306)))?_31d:_31d.isa).isa===(((_31d.info&(_306)))?_31d:_31d.isa)){
class_addMethod((((_31d.info&(_306)))?_31d:_31d.isa),_31e,_31f,_320);
}
return YES;
};
class_addMethods=function(_322,_323){
var _324=0,_325=_323.length,_326=_322.method_list,_327=_322.method_dtable;
for(;_324<_325;++_324){
var _328=_323[_324];
if(_322.method_hash[_328.name]){
continue;
}
_326.push(_328);
_327[_328.name]=_328;
}
if(!((_322.info&(_306)))&&(((_322.info&(_306)))?_322:_322.isa).isa===(((_322.info&(_306)))?_322:_322.isa)){
class_addMethods((((_322.info&(_306)))?_322:_322.isa),_323);
}
};
class_getInstanceMethod=function(_329,_32a){
if(!_329||!_32a){
return NULL;
}
var _32b=_329.method_dtable[_32a];
return _32b?_32b:NULL;
};
class_getClassMethod=function(_32c,_32d){
if(!_32c||!_32d){
return NULL;
}
var _32e=(((_32c.info&(_306)))?_32c:_32c.isa).method_dtable[_32d];
return _32e?_32e:NULL;
};
class_copyMethodList=function(_32f){
return _32f.method_list.slice(0);
};
class_replaceMethod=function(_330,_331,_332){
if(!_330||!_331){
return NULL;
}
var _333=_330.method_dtable[_331],_334=NULL;
if(_333){
_334=_333.method_imp;
}
_333.method_imp=_332;
return _334;
};
var _335=function(_336){
var meta=(((_336.info&(_306)))?_336:_336.isa);
if((_336.info&(_306))){
_336=objj_getClass(_336.name);
}
if(_336.super_class&&!((((_336.super_class.info&(_306)))?_336.super_class:_336.super_class.isa).info&(_307))){
_335(_336.super_class);
}
if(!(meta.info&(_307))&&!(meta.info&(_308))){
meta.info=(meta.info|(_308))&~(0);
objj_msgSend(_336,"initialize");
meta.info=(meta.info|(_307))&~(_308);
}
};
var _337=new objj_method("forward",function(self,_338){
return objj_msgSend(self,"forward::",_338,arguments);
});
class_getMethodImplementation=function(_339,_33a){
if(!((((_339.info&(_306)))?_339:_339.isa).info&(_307))){
_335(_339);
}
var _33b=_339.method_dtable[_33a];
if(!_33b){
_33b=_337;
}
var _33c=_33b.method_imp;
return _33c;
};
var _33d={};
objj_allocateClassPair=function(_33e,_33f){
var _340=new objj_class(),_341=new objj_class(),_342=_340;
if(_33e){
_342=_33e;
while(_342.superclass){
_342=_342.superclass;
}
_340.allocator.prototype=new _33e.allocator;
_340.method_store.prototype=new _33e.method_store;
_340.method_dtable=_340.method_store.prototype;
_341.method_store.prototype=new _33e.isa.method_store;
_341.method_dtable=_341.method_store.prototype;
_340.super_class=_33e;
_341.super_class=_33e.isa;
}else{
_340.allocator.prototype=new objj_object();
}
_340.isa=_341;
_340.name=_33f;
_340.info=_305;
_340._UID=objj_generateObjectUID();
_341.isa=_342.isa;
_341.name=_33f;
_341.info=_306;
_341._UID=objj_generateObjectUID();
return _340;
};
var _2c1=nil;
objj_registerClassPair=function(_343){
_1[_343.name]=_343;
_33d[_343.name]=_343;
_1a2(_343,_2c1);
};
class_createInstance=function(_344){
if(!_344){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _345=new _344.allocator();
_345.isa=_344;
_345._UID=objj_generateObjectUID();
return _345;
};
var _346=function(){
};
_346.prototype.member=false;
with(new _346()){
member=true;
}
if(new _346().member){
var _347=class_createInstance;
class_createInstance=function(_348){
var _349=_347(_348);
if(_349){
var _34a=_349.isa,_34b=_34a;
while(_34a){
var _34c=_34a.ivars;
count=_34c.length;
while(count--){
_349[_34c[count].name]=NULL;
}
_34a=_34a.super_class;
}
_349.isa=_34b;
}
return _349;
};
}
object_getClassName=function(_34d){
if(!_34d){
return "";
}
var _34e=_34d.isa;
return _34e?class_getName(_34e):"";
};
objj_lookUpClass=function(_34f){
var _350=_33d[_34f];
return _350?_350:Nil;
};
objj_getClass=function(_351){
var _352=_33d[_351];
if(!_352){
}
return _352?_352:Nil;
};
objj_getMetaClass=function(_353){
var _354=objj_getClass(_353);
return (((_354.info&(_306)))?_354:_354.isa);
};
ivar_getName=function(_355){
return _355.name;
};
ivar_getTypeEncoding=function(_356){
return _356.type;
};
objj_msgSend=function(_357,_358){
if(_357==nil){
return nil;
}
var isa=_357.isa;
if(!((((isa.info&(_306)))?isa:isa.isa).info&(_307))){
_335(isa);
}
var _359=isa.method_dtable[_358];
if(!_359){
_359=_337;
}
var _35a=_359.method_imp;
switch(arguments.length){
case 2:
return _35a(_357,_358);
case 3:
return _35a(_357,_358,arguments[2]);
case 4:
return _35a(_357,_358,arguments[2],arguments[3]);
}
return _35a.apply(_357,arguments);
};
objj_msgSendSuper=function(_35b,_35c){
var _35d=_35b.super_class;
arguments[0]=_35b.receiver;
if(!((((_35d.info&(_306)))?_35d:_35d.isa).info&(_307))){
_335(_35d);
}
var _35e=_35d.method_dtable[_35c];
if(!_35e){
_35e=_337;
}
var _35f=_35e.method_imp;
return _35f.apply(_35b.receiver,arguments);
};
method_getName=function(_360){
return _360.name;
};
method_getImplementation=function(_361){
return _361.method_imp;
};
method_setImplementation=function(_362,_363){
var _364=_362.method_imp;
_362.method_imp=_363;
return _364;
};
method_exchangeImplementations=function(lhs,rhs){
var _365=method_getImplementation(lhs),_366=method_getImplementation(rhs);
method_setImplementation(lhs,_366);
method_setImplementation(rhs,_365);
};
sel_getName=function(_367){
return _367?_367:"<null selector>";
};
sel_getUid=function(_368){
return _368;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_369){
return _369;
};
_140();
var _36a=new CFURL(window.location.href),_36b=document.getElementsByTagName("base"),_36c=_36b.length;
if(_36c>0){
var _36d=_36b[_36c-1],_36e=_36d&&_36d.getAttribute("href");
if(_36e){
_36a=new CFURL(_36e,_36a);
}
}
var _36f=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1a1=new CFURL(".",new CFURL(_36f,_36a)).absoluteURL(),_370=new CFURL("..",_1a1).absoluteURL();
if(_1a1===_370){
_370=new CFURL(_370.schemeAndAuthority());
}
_18a.resourceAtURL(_370,YES);
_2.pageURL=_36a;
_2.bootstrap=function(){
_371();
};
function _371(){
_18a.resolveResourceAtURL(_1a1,YES,function(_372){
var _373=_18a.includeURLs(),_8c=0,_374=_373.length;
for(;_8c<_374;++_8c){
_372.resourceAtURL(_373[_8c],YES);
}
_26d.fileImporterForURL(_1a1)(_36f.lastPathComponent(),YES,function(){
_141();
_375(main);
});
});
};
var _376=NO;
function _375(_377){
if(_376){
return _377();
}
if(window.addEventListener){
window.addEventListener("load",_377,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_377);
}
}
};
_375(function(){
_376=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _19d(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1a1);
};
objj_importFile=_26d.fileImporterForURL(_1a1);
objj_executeFile=_26d.fileExecuterForURL(_1a1);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
