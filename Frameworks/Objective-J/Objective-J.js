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
CFHTTPRequest.prototype.open=function(_98,_99,_9a,_9b,_9c){
return this._nativeRequest.open(_98,_99,_9a,_9b,_9c);
};
CFHTTPRequest.prototype.send=function(_9d){
try{
return this._nativeRequest.send(_9d);
}
catch(anException){
this._eventDispatcher.dispatchEvent({type:"failure",request:this});
}
};
CFHTTPRequest.prototype.abort=function(){
return this._nativeRequest.abort();
};
CFHTTPRequest.prototype.addEventListener=function(_9e,_9f){
this._eventDispatcher.addEventListener(_9e,_9f);
};
CFHTTPRequest.prototype.removeEventListener=function(_a0,_a1){
this._eventDispatcher.removeEventListener(_a0,_a1);
};
function _8f(_a2){
var _a3=_a2._eventDispatcher;
_a3.dispatchEvent({type:"readystatechange",request:_a2});
var _a4=_a2._nativeRequest,_a5=["uninitialized","loading","loaded","interactive","complete"][_a2.readyState()];
_a3.dispatchEvent({type:_a5,request:_a2});
if(_a5==="complete"){
var _a6="HTTP"+_a2.status();
_a3.dispatchEvent({type:_a6,request:_a2});
var _a7=_a2.success()?"success":"failure";
_a3.dispatchEvent({type:_a7,request:_a2});
}
};
function _a8(_a9,_aa,_ab){
var _ac=new CFHTTPRequest();
if(_a9.pathExtension()==="plist"){
_ac.overrideMimeType("text/xml");
}
if(_2.asyncLoader){
_ac.onsuccess=_83(_aa);
_ac.onfailure=_83(_ab);
}else{
_ac.onsuccess=_aa;
_ac.onfailure=_ab;
}
_ac.open("GET",_a9.absoluteString(),_2.asyncLoader);
_ac.send("");
};
_2.asyncLoader=YES;
_2.Asynchronous=_83;
_2.determineAndDispatchHTTPRequestEvents=_8f;
var _ad=0;
objj_generateObjectUID=function(){
return _ad++;
};
CFPropertyList=function(){
this._UID=objj_generateObjectUID();
};
CFPropertyList.DTDRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?/i;
CFPropertyList.XMLRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?<\s*plist[^>]*\>/i;
CFPropertyList.FormatXMLDTD="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">";
CFPropertyList.Format280NorthMagicNumber="280NPLIST";
CFPropertyList.FormatOpenStep=1,CFPropertyList.FormatXML_v1_0=100,CFPropertyList.FormatBinary_v1_0=200,CFPropertyList.Format280North_v1_0=-1000;
CFPropertyList.sniffedFormatOfString=function(_ae){
if(_ae.match(CFPropertyList.XMLRE)){
return CFPropertyList.FormatXML_v1_0;
}
if(_ae.substr(0,CFPropertyList.Format280NorthMagicNumber.length)===CFPropertyList.Format280NorthMagicNumber){
return CFPropertyList.Format280North_v1_0;
}
return NULL;
};
CFPropertyList.dataFromPropertyList=function(_af,_b0){
var _b1=new CFMutableData();
_b1.setRawString(CFPropertyList.stringFromPropertyList(_af,_b0));
return _b1;
};
CFPropertyList.stringFromPropertyList=function(_b2,_b3){
if(!_b3){
_b3=CFPropertyList.Format280North_v1_0;
}
var _b4=_b5[_b3];
return _b4["start"]()+_b6(_b2,_b4)+_b4["finish"]();
};
function _b6(_b7,_b8){
var _b9=typeof _b7,_ba=_b7.valueOf(),_bb=typeof _ba;
if(_b9!==_bb){
_b9=_bb;
_b7=_ba;
}
if(_b7===YES||_b7===NO){
_b9="boolean";
}else{
if(_b9==="number"){
if(FLOOR(_b7)===_b7){
_b9="integer";
}else{
_b9="real";
}
}else{
if(_b9!=="string"){
if(_b7.slice){
_b9="array";
}else{
_b9="dictionary";
}
}
}
}
return _b8[_b9](_b7,_b8);
};
var _b5={};
_b5[CFPropertyList.FormatXML_v1_0]={"start":function(){
return CFPropertyList.FormatXMLDTD+"<plist version = \"1.0\">";
},"finish":function(){
return "</plist>";
},"string":function(_bc){
return "<string>"+_bd(_bc)+"</string>";
},"boolean":function(_be){
return _be?"<true/>":"<false/>";
},"integer":function(_bf){
return "<integer>"+_bf+"</integer>";
},"real":function(_c0){
return "<real>"+_c0+"</real>";
},"array":function(_c1,_c2){
var _c3=0,_c4=_c1.length,_c5="<array>";
for(;_c3<_c4;++_c3){
_c5+=_b6(_c1[_c3],_c2);
}
return _c5+"</array>";
},"dictionary":function(_c6,_c7){
var _c8=_c6._keys,_8c=0,_c9=_c8.length,_ca="<dict>";
for(;_8c<_c9;++_8c){
var key=_c8[_8c];
_ca+="<key>"+key+"</key>";
_ca+=_b6(_c6.valueForKey(key),_c7);
}
return _ca+"</dict>";
}};
var _cb="A",_cc="D",_cd="f",_ce="d",_cf="S",_d0="T",_d1="F",_d2="K",_d3="E";
_b5[CFPropertyList.Format280North_v1_0]={"start":function(){
return CFPropertyList.Format280NorthMagicNumber+";1.0;";
},"finish":function(){
return "";
},"string":function(_d4){
return _cf+";"+_d4.length+";"+_d4;
},"boolean":function(_d5){
return (_d5?_d0:_d1)+";";
},"integer":function(_d6){
var _d7=""+_d6;
return _ce+";"+_d7.length+";"+_d7;
},"real":function(_d8){
var _d9=""+_d8;
return _cd+";"+_d9.length+";"+_d9;
},"array":function(_da,_db){
var _dc=0,_dd=_da.length,_de=_cb+";";
for(;_dc<_dd;++_dc){
_de+=_b6(_da[_dc],_db);
}
return _de+_d3+";";
},"dictionary":function(_df,_e0){
var _e1=_df._keys,_8c=0,_e2=_e1.length,_e3=_cc+";";
for(;_8c<_e2;++_8c){
var key=_e1[_8c];
_e3+=_d2+";"+key.length+";"+key;
_e3+=_b6(_df.valueForKey(key),_e0);
}
return _e3+_d3+";";
}};
var _e4="xml",_e5="#document",_e6="plist",_e7="key",_e8="dict",_e9="array",_ea="string",_eb="true",_ec="false",_ed="real",_ee="integer",_ef="data";
var _f0=function(_f1,_f2,_f3){
var _f4=_f1;
_f4=(_f4.firstChild);
if(_f4!==NULL&&((_f4.nodeType)===8||(_f4.nodeType)===3)){
while((_f4=(_f4.nextSibling))&&((_f4.nodeType)===8||(_f4.nodeType)===3)){
}
}
if(_f4){
return _f4;
}
if((String(_f1.nodeName))===_e9||(String(_f1.nodeName))===_e8){
_f3.pop();
}else{
if(_f4===_f2){
return NULL;
}
_f4=_f1;
while((_f4=(_f4.nextSibling))&&((_f4.nodeType)===8||(_f4.nodeType)===3)){
}
if(_f4){
return _f4;
}
}
_f4=_f1;
while(_f4){
var _f5=_f4;
while((_f5=(_f5.nextSibling))&&((_f5.nodeType)===8||(_f5.nodeType)===3)){
}
if(_f5){
return _f5;
}
var _f4=(_f4.parentNode);
if(_f2&&_f4===_f2){
return NULL;
}
_f3.pop();
}
return NULL;
};
CFPropertyList.propertyListFromData=function(_f6,_f7){
return CFPropertyList.propertyListFromString(_f6.rawString(),_f7);
};
CFPropertyList.propertyListFromString=function(_f8,_f9){
if(!_f9){
_f9=CFPropertyList.sniffedFormatOfString(_f8);
}
if(_f9===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(_f8);
}
if(_f9===CFPropertyList.Format280North_v1_0){
return _fa(_f8);
}
return NULL;
};
var _cb="A",_cc="D",_cd="f",_ce="d",_cf="S",_d0="T",_d1="F",_d2="K",_d3="E";
function _fa(_fb){
var _fc=new _fd(_fb),_fe=NULL,key="",_ff=NULL,_100=NULL,_101=[],_102=NULL;
while(_fe=_fc.getMarker()){
if(_fe===_d3){
_101.pop();
continue;
}
var _103=_101.length;
if(_103){
_102=_101[_103-1];
}
if(_fe===_d2){
key=_fc.getString();
_fe=_fc.getMarker();
}
switch(_fe){
case _cb:
_ff=[];
_101.push(_ff);
break;
case _cc:
_ff=new CFMutableDictionary();
_101.push(_ff);
break;
case _cd:
_ff=parseFloat(_fc.getString());
break;
case _ce:
_ff=parseInt(_fc.getString(),10);
break;
case _cf:
_ff=_fc.getString();
break;
case _d0:
_ff=YES;
break;
case _d1:
_ff=NO;
break;
default:
throw new Error("*** "+_fe+" marker not recognized in Plist.");
}
if(!_100){
_100=_ff;
}else{
if(_102){
if(_102.slice){
_102.push(_ff);
}else{
_102.setValueForKey(key,_ff);
}
}
}
}
return _100;
};
function _bd(_104){
return _104.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
function _105(_106){
return _106.replace(/&quot;/g,"\"").replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
};
function _92(_107){
if(window.DOMParser){
return (new window.DOMParser().parseFromString(_107,"text/xml").documentElement);
}else{
if(window.ActiveXObject){
XMLNode=new ActiveXObject("Microsoft.XMLDOM");
var _108=_107.match(CFPropertyList.DTDRE);
if(_108){
_107=_107.substr(_108[0].length);
}
XMLNode.loadXML(_107);
return XMLNode;
}
}
return NULL;
};
CFPropertyList.propertyListFromXML=function(_109){
var _10a=_109;
if(_109.valueOf&&typeof _109.valueOf()==="string"){
_10a=_92(_109);
}
while(((String(_10a.nodeName))===_e5)||((String(_10a.nodeName))===_e4)){
_10a=(_10a.firstChild);
}
if(_10a!==NULL&&((_10a.nodeType)===8||(_10a.nodeType)===3)){
while((_10a=(_10a.nextSibling))&&((_10a.nodeType)===8||(_10a.nodeType)===3)){
}
}
if(((_10a.nodeType)===10)){
while((_10a=(_10a.nextSibling))&&((_10a.nodeType)===8||(_10a.nodeType)===3)){
}
}
if(!((String(_10a.nodeName))===_e6)){
return NULL;
}
var key="",_10b=NULL,_10c=NULL,_10d=_10a,_10e=[],_10f=NULL;
while(_10a=_f0(_10a,_10d,_10e)){
var _110=_10e.length;
if(_110){
_10f=_10e[_110-1];
}
if((String(_10a.nodeName))===_e7){
key=((String((_10a.firstChild).nodeValue)));
while((_10a=(_10a.nextSibling))&&((_10a.nodeType)===8||(_10a.nodeType)===3)){
}
}
switch(String((String(_10a.nodeName)))){
case _e9:
_10b=[];
_10e.push(_10b);
break;
case _e8:
_10b=new CFMutableDictionary();
_10e.push(_10b);
break;
case _ed:
_10b=parseFloat(((String((_10a.firstChild).nodeValue))));
break;
case _ee:
_10b=parseInt(((String((_10a.firstChild).nodeValue))),10);
break;
case _ea:
_10b=_105((_10a.firstChild)?((String((_10a.firstChild).nodeValue))):"");
break;
case _eb:
_10b=YES;
break;
case _ec:
_10b=NO;
break;
case _ef:
_10b=new CFMutableData();
_10b.bytes=(_10a.firstChild)?CFData.decodeBase64ToArray(((String((_10a.firstChild).nodeValue))),YES):[];
break;
default:
throw new Error("*** "+(String(_10a.nodeName))+" tag not recognized in Plist.");
}
if(!_10c){
_10c=_10b;
}else{
if(_10f){
if(_10f.slice){
_10f.push(_10b);
}else{
_10f.setValueForKey(key,_10b);
}
}
}
}
return _10c;
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
CFPropertyListCreateXMLData=function(_111){
return CFPropertyList.dataFromPropertyList(_111,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateFrom280NorthData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.Format280North_v1_0);
};
CFPropertyListCreate280NorthData=function(_112){
return CFPropertyList.dataFromPropertyList(_112,CFPropertyList.Format280North_v1_0);
};
CPPropertyListCreateFromData=function(data,_113){
return CFPropertyList.propertyListFromData(data,_113);
};
CPPropertyListCreateData=function(_114,_115){
return CFPropertyList.dataFromPropertyList(_114,_115);
};
CFDictionary=function(_116){
this._keys=[];
this._count=0;
this._buckets={};
this._UID=objj_generateObjectUID();
};
var _117=Array.prototype.indexOf,_71=Object.prototype.hasOwnProperty;
CFDictionary.prototype.copy=function(){
return this;
};
CFDictionary.prototype.mutableCopy=function(){
var _118=new CFMutableDictionary(),keys=this._keys,_119=this._count;
_118._keys=keys.slice();
_118._count=_119;
var _11a=0,_11b=this._buckets,_11c=_118._buckets;
for(;_11a<_119;++_11a){
var key=keys[_11a];
_11c[key]=_11b[key];
}
return _118;
};
CFDictionary.prototype.containsKey=function(aKey){
return _71.apply(this._buckets,[aKey]);
};
CFDictionary.prototype.containsValue=function(_11d){
var keys=this._keys,_11e=this._buckets,_8c=0,_11f=keys.length;
for(;_8c<_11f;++_8c){
if(_11e[keys]===_11d){
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
CFDictionary.prototype.countOfValue=function(_120){
var keys=this._keys,_121=this._buckets,_8c=0,_122=keys.length,_123=0;
for(;_8c<_122;++_8c){
if(_121[keys]===_120){
return ++_123;
}
}
return _123;
};
CFDictionary.prototype.keys=function(){
return this._keys.slice();
};
CFDictionary.prototype.valueForKey=function(aKey){
var _124=this._buckets;
if(!_71.apply(_124,[aKey])){
return nil;
}
return _124[aKey];
};
CFDictionary.prototype.toString=function(){
var _125="{\n",keys=this._keys,_8c=0,_126=this._count;
for(;_8c<_126;++_8c){
var key=keys[_8c];
_125+="\t"+key+" = \""+String(this.valueForKey(key)).split("\n").join("\n\t")+"\"\n";
}
return _125+"}";
};
CFMutableDictionary=function(_127){
CFDictionary.apply(this,[]);
};
CFMutableDictionary.prototype=new CFDictionary();
CFMutableDictionary.prototype.copy=function(){
return this.mutableCopy();
};
CFMutableDictionary.prototype.addValueForKey=function(aKey,_128){
if(this.containsKey(aKey)){
return;
}
++this._count;
this._keys.push(aKey);
this._buckets[aKey]=_128;
};
CFMutableDictionary.prototype.removeValueForKey=function(aKey){
var _129=-1;
if(_117){
_129=_117.call(this._keys,aKey);
}else{
var keys=this._keys,_8c=0,_12a=keys.length;
for(;_8c<_12a;++_8c){
if(keys[_8c]===aKey){
_129=_8c;
break;
}
}
}
if(_129===-1){
return;
}
--this._count;
this._keys.splice(_129,1);
delete this._buckets[aKey];
};
CFMutableDictionary.prototype.removeAllValues=function(){
this._count=0;
this._keys=[];
this._buckets={};
};
CFMutableDictionary.prototype.replaceValueForKey=function(aKey,_12b){
if(!this.containsKey(aKey)){
return;
}
this._buckets[aKey]=_12b;
};
CFMutableDictionary.prototype.setValueForKey=function(aKey,_12c){
if(_12c===nil||_12c===_44){
this.removeValueForKey(aKey);
}else{
if(this.containsKey(aKey)){
this.replaceValueForKey(aKey,_12c);
}else{
this.addValueForKey(aKey,_12c);
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
function _12d(_12e){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFMutableData.prototype.setPropertyList=function(_12f,_130){
_12d(this);
this._propertyList=_12f;
this._propertyListFormat=_130;
};
CFMutableData.prototype.setJSONObject=function(_131){
_12d(this);
this._JSONObject=_131;
};
CFMutableData.prototype.setRawString=function(_132){
_12d(this);
this._rawString=_132;
};
CFMutableData.prototype.setBytes=function(_133){
_12d(this);
this._bytes=_133;
};
CFMutableData.prototype.setBase64String=function(_134){
_12d(this);
this._base64=_134;
};
var _135=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],_136=[];
for(var i=0;i<_135.length;i++){
_136[_135[i].charCodeAt(0)]=i;
}
CFData.decodeBase64ToArray=function(_137,_138){
if(_138){
_137=_137.replace(/[^A-Za-z0-9\+\/\=]/g,"");
}
var pad=(_137[_137.length-1]=="="?1:0)+(_137[_137.length-2]=="="?1:0),_139=_137.length,_13a=[];
var i=0;
while(i<_139){
var bits=(_136[_137.charCodeAt(i++)]<<18)|(_136[_137.charCodeAt(i++)]<<12)|(_136[_137.charCodeAt(i++)]<<6)|(_136[_137.charCodeAt(i++)]);
_13a.push((bits&16711680)>>16);
_13a.push((bits&65280)>>8);
_13a.push(bits&255);
}
if(pad>0){
return _13a.slice(0,-1*pad);
}
return _13a;
};
CFData.encodeBase64Array=function(_13b){
var pad=(3-(_13b.length%3))%3,_13c=_13b.length+pad,_13d=[];
if(pad>0){
_13b.push(0);
}
if(pad>1){
_13b.push(0);
}
var i=0;
while(i<_13c){
var bits=(_13b[i++]<<16)|(_13b[i++]<<8)|(_13b[i++]);
_13d.push(_135[(bits&16515072)>>18]);
_13d.push(_135[(bits&258048)>>12]);
_13d.push(_135[(bits&4032)>>6]);
_13d.push(_135[bits&63]);
}
if(pad>0){
_13d[_13d.length-1]="=";
_13b.pop();
}
if(pad>1){
_13d[_13d.length-2]="=";
_13b.pop();
}
return _13d.join("");
};
CFData.decodeBase64ToString=function(_13e,_13f){
return CFData.bytesToString(CFData.decodeBase64ToArray(_13e,_13f));
};
CFData.bytesToString=function(_140){
return String.fromCharCode.apply(NULL,_140);
};
CFData.encodeBase64String=function(_141){
var temp=[];
for(var i=0;i<_141.length;i++){
temp.push(_141.charCodeAt(i));
}
return CFData.encodeBase64Array(temp);
};
var _142,_143,_144=0;
function _145(){
if(++_144!==1){
return;
}
_142={};
_143={};
};
function _146(){
_144=MAX(_144-1,0);
if(_144!==0){
return;
}
delete _142;
delete _143;
};
var _147=new RegExp("^"+"(?:"+"([^:/?#]+):"+")?"+"(?:"+"(//)"+"("+"(?:"+"("+"([^:@]*)"+":?"+"([^:@]*)"+")?"+"@"+")?"+"([^:/?#]*)"+"(?::(\\d*))?"+")"+")?"+"([^?#]*)"+"(?:\\?([^#]*))?"+"(?:#(.*))?");
var _148=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","portNumber","path","queryString","fragment"];
function _149(aURL){
if(aURL._parts){
return aURL._parts;
}
var _14a=aURL.string(),_14b=_14a.match(/^mhtml:/);
if(_14b){
_14a=_14a.substr("mhtml:".length);
}
if(_144>0&&_71.call(_143,_14a)){
aURL._parts=_143[_14a];
return aURL._parts;
}
aURL._parts={};
var _14c=aURL._parts,_14d=_147.exec(_14a),_8c=_14d.length;
while(_8c--){
_14c[_148[_8c]]=_14d[_8c]||NULL;
}
_14c.portNumber=parseInt(_14c.portNumber,10);
if(isNaN(_14c.portNumber)){
_14c.portNumber=-1;
}
_14c.pathComponents=[];
if(_14c.path){
var _14e=_14c.path.split("/"),_14f=_14c.pathComponents,_8c=0,_150=_14e.length;
for(;_8c<_150;++_8c){
var _151=_14e[_8c];
if(_151){
_14f.push(_151);
}else{
if(_8c===0){
_14f.push("/");
}
}
}
_14c.pathComponents=_14f;
}
if(_14b){
_14c.url="mhtml:"+_14c.url;
_14c.scheme="mhtml:"+_14c.scheme;
}
if(_144>0){
_143[_14a]=_14c;
}
return _14c;
};
CFURL=function(aURL,_152){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_152){
return aURL;
}
var _153=aURL.baseURL();
if(_153){
_152=new CFURL(_153.absoluteURL(),_152);
}
aURL=aURL.string();
}
if(_144>0){
var _154=aURL+" "+(_152&&_152.UID()||"");
if(_71.call(_142,_154)){
return _142[_154];
}
_142[_154]=this;
}
if(aURL.match(/^data:/)){
var _155={},_8c=_148.length;
while(_8c--){
_155[_148[_8c]]="";
}
_155.url=aURL;
_155.scheme="data";
_155.pathComponents=[];
this._parts=_155;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_152;
};
CFURL.prototype.UID=function(){
return this._UID;
};
var _156={};
CFURL.prototype.mappedURL=function(){
return _156[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_157,_158){
_156[_157.absoluteString()]=_158;
};
CFURL.prototype.schemeAndAuthority=function(){
var _159="",_15a=this.scheme();
if(_15a){
_159+=_15a+":";
}
var _15b=this.authority();
if(_15b){
_159+="//"+_15b;
}
return _159;
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
function _15c(aURL){
aURL=aURL.standardizedURL();
var _15d=aURL.baseURL();
if(!_15d){
return aURL;
}
var _15e=((aURL)._parts||_149(aURL)),_15f,_160=_15d.absoluteURL(),_161=((_160)._parts||_149(_160));
if(_15e.scheme||_15e.authority){
_15f=_15e;
}else{
_15f={};
_15f.scheme=_161.scheme;
_15f.authority=_161.authority;
_15f.userInfo=_161.userInfo;
_15f.user=_161.user;
_15f.password=_161.password;
_15f.domain=_161.domain;
_15f.portNumber=_161.portNumber;
_15f.queryString=_15e.queryString;
_15f.fragment=_15e.fragment;
var _162=_15e.pathComponents;
if(_162.length&&_162[0]==="/"){
_15f.path=_15e.path;
_15f.pathComponents=_162;
}else{
var _163=_161.pathComponents,_164=_163.concat(_162);
if(!_15d.hasDirectoryPath()&&_163.length){
_164.splice(_163.length-1,1);
}
if(_162.length&&_162[0]===".."){
_165(_164,YES);
}
_15f.pathComponents=_164;
_15f.path=_166(_164,_162.length<=0||aURL.hasDirectoryPath());
}
}
var _167=_168(_15f),_169=new CFURL(_167);
_169._parts=_15f;
_169._standardizedURL=_169;
_169._standardizedString=_167;
_169._absoluteURL=_169;
_169._absoluteString=_167;
return _169;
};
function _166(_16a,_16b){
var path=_16a.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_16b){
path+="/";
}
return path;
};
function _165(_16c,_16d){
var _16e=0,_16f=0,_170=_16c.length,_171=_16d?_16c:[];
for(;_16e<_170;++_16e){
var _172=_16c[_16e];
if(_172===""||_172==="."){
continue;
}
if(_172!==".."||_16f===0||_171[_16f-1]===".."){
_171[_16f]=_172;
_16f++;
continue;
}
if(_16f>0&&_171[_16f-1]!=="/"){
--_16f;
}
}
_171.length=_16f;
return _171;
};
function _168(_173){
var _174="",_175=_173.scheme;
if(_175){
_174+=_175+":";
}
var _176=_173.authority;
if(_176){
_174+="//"+_176;
}
_174+=_173.path;
var _177=_173.queryString;
if(_177){
_174+="?"+_177;
}
var _178=_173.fragment;
if(_178){
_174+="#"+_178;
}
return _174;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_44){
this._absoluteURL=_15c(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_44){
var _179=((this)._parts||_149(this)),_17a=_179.pathComponents,_17b=_165(_17a,NO);
var _17c=_166(_17b,this.hasDirectoryPath());
if(_179.path===_17c){
this._standardizedURL=this;
}else{
var _17d=_17e(_179);
_17d.pathComponents=_17b;
_17d.path=_17c;
var _17f=new CFURL(_168(_17d),this.baseURL());
_17f._parts=_17d;
_17f._standardizedURL=_17f;
this._standardizedURL=_17f;
}
}
return this._standardizedURL;
};
function _17e(_180){
var _181={},_182=_148.length;
while(_182--){
var _183=_148[_182];
_181[_183]=_180[_183];
}
return _181;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _184=((this)._parts||_149(this)).authority;
if(_184){
return _184;
}
var _185=this.baseURL();
return _185&&_185.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _186=this._hasDirectoryPath;
if(_186===_44){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _187=this.lastPathComponent();
_186=_187==="."||_187==="..";
this._hasDirectoryPath=_186;
}
return this._hasDirectoryPath;
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return ((this)._parts||_149(this)).fragment;
};
CFURL.prototype.lastPathComponent=function(){
if(this._lastPathComponent===_44){
var _188=this.pathComponents(),_189=_188.length;
if(!_189){
this._lastPathComponent="";
}else{
this._lastPathComponent=_188[_189-1];
}
}
return this._lastPathComponent;
};
CFURL.prototype.path=function(){
return ((this)._parts||_149(this)).path;
};
CFURL.prototype.pathComponents=function(){
return ((this)._parts||_149(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _18a=this.lastPathComponent();
if(!_18a){
return NULL;
}
_18a=_18a.replace(/^\.*/,"");
var _18b=_18a.lastIndexOf(".");
return _18b<=0?"":_18a.substring(_18b+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_149(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _18c=this._scheme;
if(_18c===_44){
_18c=((this)._parts||_149(this)).scheme;
if(!_18c){
var _18d=this.baseURL();
_18c=_18d&&_18d.scheme();
}
this._scheme=_18c;
}
return _18c;
};
CFURL.prototype.user=function(){
return ((this)._parts||_149(this)).user;
};
CFURL.prototype.password=function(){
return ((this)._parts||_149(this)).password;
};
CFURL.prototype.portNumber=function(){
return ((this)._parts||_149(this)).portNumber;
};
CFURL.prototype.domain=function(){
return ((this)._parts||_149(this)).domain;
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
function _18e(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _18e(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_18f){
_18e(this).setValueForKey(aKey,_18f);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_190.resourceAtURL(this).contents());
return data;
};
function _fd(_191){
this._string=_191;
var _192=_191.indexOf(";");
this._magicNumber=_191.substr(0,_192);
this._location=_191.indexOf(";",++_192);
this._version=_191.substring(_192,this._location++);
};
_fd.prototype.magicNumber=function(){
return this._magicNumber;
};
_fd.prototype.version=function(){
return this._version;
};
_fd.prototype.getMarker=function(){
var _193=this._string,_194=this._location;
if(_194>=_193.length){
return null;
}
var next=_193.indexOf(";",_194);
if(next<0){
return null;
}
var _195=_193.substring(_194,next);
if(_195==="e"){
return null;
}
this._location=next+1;
return _195;
};
_fd.prototype.getString=function(){
var _196=this._string,_197=this._location;
if(_197>=_196.length){
return null;
}
var next=_196.indexOf(";",_197);
if(next<0){
return null;
}
var size=parseInt(_196.substring(_197,next),10),text=_196.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _198=0,_199=1<<0,_19a=1<<1,_19b=1<<2,_19c=1<<3,_19d=1<<4;
var _19e={},_19f={},_1a0=new Date().getTime(),_1a1=0,_1a2=0;
CFBundle=function(aURL){
aURL=_1a3(aURL).asDirectoryPathURL();
var _1a4=aURL.absoluteString(),_1a5=_19e[_1a4];
if(_1a5){
return _1a5;
}
_19e[_1a4]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._isValid=NO;
this._loadStatus=_198;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _6c(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1a3(aURL));
var _1a6,_1a7=aURL.absoluteString();
while(!_1a6||_1a6!==_1a7){
var _1a8=_19e[_1a7];
if(_1a8&&_1a8._isValid){
return _1a8;
}
aURL=new CFURL("..",aURL);
_1a6=_1a7;
_1a7=aURL.absoluteString();
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1a9);
};
function _1aa(_1ab,_1ac){
if(_1ac){
_19f[_1ab.name]=_1ac;
}
};
CFBundle.bundleForClass=function(_1ad){
return _19f[_1ad.name]||CFBundle.mainBundle();
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL;
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1ae,_1af,_1b0){
if(_1af){
_1ae=_1ae+"."+_1af;
}
if(_1b0){
_1ae=_1b0+"/"+_1ae;
}
var _1b1=(new CFURL(_1ae,this.resourcesDirectoryURL())).mappedURL();
return _1b1.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_44){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_44){
var _1b2=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1b2){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1b2,this.mostEligibleEnvironmentURL());
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
var _1b3=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_8c=_1b3.length,_1b4=this.mostEligibleEnvironment();
while(_8c--){
if(_1b3[_8c]===_1b4){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1b5){
_1b5=_1b5||this.environments();
var _1b6=CFBundle.environments(),_8c=0,_1b7=_1b6.length,_1b8=_1b5.length;
for(;_8c<_1b7;++_8c){
var _1b9=0,_1ba=_1b6[_8c];
for(;_1b9<_1b8;++_1b9){
if(_1ba===_1b5[_1b9]){
return _1ba;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_199;
};
CFBundle.prototype.load=function(_1bb){
if(this._loadStatus!==_198){
return;
}
this._loadStatus=_199|_19a;
var self=this,_1bc=this.bundleURL(),_1bd=new CFURL("..",_1bc);
if(_1bd.absoluteString()===_1bc.absoluteString()){
_1bd=_1bd.schemeAndAuthority();
}
_190.resolveResourceAtURL(_1bd,YES,function(_1be){
var _1bf=_1bc.absoluteURL().lastPathComponent();
self._staticResource=_1be._children[_1bf]||new _190(_1bc,_1be,YES,NO);
function _1c0(_1c1){
self._loadStatus&=~_19a;
var _1c2=_1c1.request.responsePropertyList();
self._isValid=!!_1c2||CFBundle.mainBundle()===self;
if(_1c2){
self._infoDictionary=_1c2;
}
if(!self._infoDictionary){
_1c4(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1a2=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_1c8(self,_1bb);
};
function _1c3(){
self._isValid=CFBundle.mainBundle()===self;
self._loadStatus=_198;
_1c4(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _a8(new CFURL("Info.plist",self.bundleURL()),_1c0,_1c3);
});
};
function _1c4(_1c5,_1c6){
_1c7(_1c5._staticResource);
_1c5._eventDispatcher.dispatchEvent({type:"error",error:_1c6,bundle:_1c5});
};
function _1c8(_1c9,_1ca){
if(!_1c9.mostEligibleEnvironment()){
return _1cb();
}
_1cc(_1c9,_1cd,_1cb);
_1ce(_1c9,_1cd,_1cb);
if(_1c9._loadStatus===_199){
return _1cd();
}
function _1cb(_1cf){
var _1d0=_1c9._loadRequests,_1d1=_1d0.length;
while(_1d1--){
_1d0[_1d1].abort();
}
this._loadRequests=[];
_1c9._loadStatus=_198;
_1c4(_1c9,_1cf||new Error("Could not recognize executable code format in Bundle "+_1c9));
};
function _1cd(){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"&&_1a2){
OBJJ_PROGRESS_CALLBACK(MAX(MIN(1,_1a1/_1a2),0),_1a2,_1c9.path());
}
if(_1c9._loadStatus===_199){
_1c9._loadStatus=_19d;
}else{
return;
}
_1c7(_1c9._staticResource);
function _1d2(){
_1c9._eventDispatcher.dispatchEvent({type:"load",bundle:_1c9});
};
if(_1ca){
_1d3(_1c9,_1d2);
}else{
_1d2();
}
};
};
function _1cc(_1d4,_1d5,_1d6){
var _1d7=_1d4.executableURL();
if(!_1d7){
return;
}
_1d4._loadStatus|=_19b;
new _a8(_1d7,function(_1d8){
try{
_1a1+=_1d8.request.responseText().length;
_1d9(_1d4,_1d8.request.responseText(),_1d7);
_1d4._loadStatus&=~_19b;
_1d5();
}
catch(anException){
_1d6(anException);
}
},_1d6);
};
function _1da(_1db){
return "mhtml:"+new CFURL("MHTMLTest.txt",_1db.mostEligibleEnvironmentURL());
};
function _1dc(_1dd){
if(_1de===_1df){
return new CFURL("dataURLs.txt",_1dd.mostEligibleEnvironmentURL());
}
if(_1de===_1e0||_1de===_1e1){
return new CFURL("MHTMLPaths.txt",_1dd.mostEligibleEnvironmentURL());
}
return NULL;
};
function _1ce(_1e2,_1e3,_1e4){
if(!_1e2.hasSpritedImages()){
return;
}
_1e2._loadStatus|=_19c;
if(!_1e5()){
return _1e6(_1da(_1e2),function(){
_1ce(_1e2,_1e3,_1e4);
});
}
var _1e7=_1dc(_1e2);
if(!_1e7){
_1e2._loadStatus&=~_19c;
return _1e3();
}
new _a8(_1e7,function(_1e8){
try{
_1a1+=_1e8.request.responseText().length;
_1d9(_1e2,_1e8.request.responseText(),_1e7);
_1e2._loadStatus&=~_19c;
}
catch(anException){
_1e4(anException);
}
_1e3();
},_1e4);
};
var _1e9=[],_1de=-1,_1ea=0,_1df=1,_1e0=2,_1e1=3;
function _1e5(){
return _1de!==-1;
};
function _1e6(_1eb,_1ec){
if(_1e5()){
return;
}
_1e9.push(_1ec);
if(_1e9.length>1){
return;
}
_1e9.push(function(){
var size=0,_1ed=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_1ed){
return;
}
switch(_1de){
case _1df:
size=_1ed.valueForKey("data");
break;
case _1e0:
case _1e1:
size=_1ed.valueForKey("mhtml");
break;
}
_1a2+=size;
});
_1ee([_1df,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_1e0,_1eb+"!test",_1e1,_1eb+"?"+_1a0+"!test"]);
};
function _1ef(){
var _1f0=_1e9.length;
while(_1f0--){
_1e9[_1f0]();
}
};
function _1ee(_1f1){
if(_1f1.length<2){
_1de=_1ea;
_1ef();
return;
}
var _1f2=new Image();
_1f2.onload=function(){
if(_1f2.width===1&&_1f2.height===1){
_1de=_1f1[0];
_1ef();
}else{
_1f2.onerror();
}
};
_1f2.onerror=function(){
_1ee(_1f1.slice(2));
};
_1f2.src=_1f1[1];
};
function _1d3(_1f3,_1f4){
var _1f5=[_1f3._staticResource];
function _1f6(_1f7){
for(;_1f7<_1f5.length;++_1f7){
var _1f8=_1f5[_1f7];
if(_1f8.isNotFound()){
continue;
}
if(_1f8.isFile()){
var _1f9=new _30a(_1f8.URL());
if(_1f9.hasLoadedFileDependencies()){
_1f9.execute();
}else{
_1f9.loadFileDependencies(function(){
_1f6(_1f7);
});
return;
}
}else{
if(_1f8.URL().absoluteString()===_1f3.resourcesDirectoryURL().absoluteString()){
continue;
}
var _1fa=_1f8.children();
for(var name in _1fa){
if(_71.call(_1fa,name)){
_1f5.push(_1fa[name]);
}
}
}
}
_1f4();
};
_1f6(0);
};
var _1fb="@STATIC",_1fc="p",_1fd="u",_1fe="c",_1ff="t",_200="I",_201="i";
function _1d9(_202,_203,_204){
var _205=new _fd(_203);
if(_205.magicNumber()!==_1fb){
throw new Error("Could not read static file: "+_204);
}
if(_205.version()!=="1.0"){
throw new Error("Could not read static file: "+_204);
}
var _206,_207=_202.bundleURL(),file=NULL;
while(_206=_205.getMarker()){
var text=_205.getString();
if(_206===_1fc){
var _208=new CFURL(text,_207),_209=_190.resourceAtURL(new CFURL(".",_208),YES);
file=new _190(_208,_209,NO,YES);
}else{
if(_206===_1fd){
var URL=new CFURL(text,_207),_20a=_205.getString();
if(_20a.indexOf("mhtml:")===0){
_20a="mhtml:"+new CFURL(_20a.substr("mhtml:".length),_207);
if(_1de===_1e1){
var _20b=URLString.indexOf("!"),_20c=URLString.substring(0,_20b),_20d=URLString.substring(_20b);
_20a=_20c+"?"+_1a0+_20d;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_20a));
var _209=_190.resourceAtURL(new CFURL(".",URL),YES);
new _190(URL,_209,NO,YES);
}else{
if(_206===_1ff){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_20e,_20f){
this._eventDispatcher.addEventListener(_20e,_20f);
};
CFBundle.prototype.removeEventListener=function(_210,_211){
this._eventDispatcher.removeEventListener(_210,_211);
};
CFBundle.prototype.onerror=function(_212){
throw _212.error;
};
CFBundle.prototype.bundlePath=function(){
return this._bundleURL.absoluteURL().path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_213){
return this.resourceURL(_213).absoluteString();
};
var _214={};
function _190(aURL,_215,_216,_217){
this._parent=_215;
this._eventDispatcher=new _6c(this);
var name=aURL.absoluteURL().lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_217;
if(_216){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_215){
_214[name]=this;
}
this._isDirectory=!!_216;
this._isNotFound=NO;
if(_215){
_215._children[name]=this;
}
if(_216){
this._children={};
}else{
this._contents="";
}
};
_190.rootResources=function(){
return _214;
};
_2.StaticResource=_190;
function _1c7(_218){
_218._isResolved=YES;
_218._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_218});
};
_190.prototype.resolve=function(){
if(this.isDirectory()){
var _219=new CFBundle(this.URL());
_219.onerror=function(){
};
_219.load(NO);
}else{
var self=this;
function _21a(_21b){
self._contents=_21b.request.responseText();
_1c7(self);
};
function _21c(){
self._isNotFound=YES;
_1c7(self);
};
new _a8(this.URL(),_21a,_21c);
}
};
_190.prototype.name=function(){
return this._name;
};
_190.prototype.URL=function(){
return this._URL;
};
_190.prototype.contents=function(){
return this._contents;
};
_190.prototype.children=function(){
return this._children;
};
_190.prototype.parent=function(){
return this._parent;
};
_190.prototype.isResolved=function(){
return this._isResolved;
};
_190.prototype.write=function(_21d){
this._contents+=_21d;
};
function _21e(_21f){
var _220=_21f.schemeAndAuthority(),_221=_214[_220];
if(!_221){
_221=new _190(new CFURL(_220),NULL,YES,YES);
}
return _221;
};
_190.resourceAtURL=function(aURL,_222){
aURL=_1a3(aURL).absoluteURL();
var _223=_21e(aURL),_224=aURL.pathComponents(),_8c=0,_225=_224.length;
for(;_8c<_225;++_8c){
var name=_224[_8c];
if(_71.call(_223._children,name)){
_223=_223._children[name];
}else{
if(_222){
_223=new _190(new CFURL(name,_223.URL()),_223,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _223;
};
_190.prototype.resourceAtURL=function(aURL,_226){
return _190.resourceAtURL(new CFURL(aURL,this.URL()),_226);
};
_190.resolveResourceAtURL=function(aURL,_227,_228){
aURL=_1a3(aURL).absoluteURL();
_229(_21e(aURL),_227,aURL.pathComponents(),0,_228);
};
_190.prototype.resolveResourceAtURL=function(aURL,_22a,_22b){
_190.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_22a,_22b);
};
function _229(_22c,_22d,_22e,_22f,_230){
var _231=_22e.length;
for(;_22f<_231;++_22f){
var name=_22e[_22f],_232=_71.call(_22c._children,name)&&_22c._children[name];
if(!_232){
_232=new _190(new CFURL(name,_22c.URL()),_22c,_22f+1<_231||_22d,NO);
_232.resolve();
}
if(!_232.isResolved()){
return _232.addEventListener("resolve",function(){
_229(_22c,_22d,_22e,_22f,_230);
});
}
if(_232.isNotFound()){
return _230(null,new Error("File not found: "+_22e.join("/")));
}
if((_22f+1<_231)&&_232.isFile()){
return _230(null,new Error("File is not a directory: "+_22e.join("/")));
}
_22c=_232;
}
_230(_22c);
};
function _233(aURL,_234,_235){
var _236=_190.includeURLs(),_237=new CFURL(aURL,_236[_234]).absoluteURL();
_190.resolveResourceAtURL(_237,NO,function(_238){
if(!_238){
if(_234+1<_236.length){
_233(aURL,_234+1,_235);
}else{
_235(NULL);
}
return;
}
_235(_238);
});
};
_190.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_239){
_233(aURL,0,_239);
};
_190.prototype.addEventListener=function(_23a,_23b){
this._eventDispatcher.addEventListener(_23a,_23b);
};
_190.prototype.removeEventListener=function(_23c,_23d){
this._eventDispatcher.removeEventListener(_23c,_23d);
};
_190.prototype.isNotFound=function(){
return this._isNotFound;
};
_190.prototype.isFile=function(){
return !this._isDirectory;
};
_190.prototype.isDirectory=function(){
return this._isDirectory;
};
_190.prototype.toString=function(_23e){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _23f=this.name();
if(this.isDirectory()){
var _240=this._children;
for(var name in _240){
if(_240.hasOwnProperty(name)){
var _241=_240[name];
if(_23e||!_241.isNotFound()){
_23f+="\n\t"+_240[name].toString(_23e).split("\n").join("\n\t");
}
}
}
}
return _23f;
};
var _242=NULL;
_190.includeURLs=function(){
if(_243){
return _243;
}
var _243=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_243=["Frameworks","Frameworks/Debug"];
}else{
_243=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _244=_243.length;
while(_244--){
_243[_244]=new CFURL(_243[_244]).asDirectoryPathURL();
}
return _243;
};
var _245="accessors",_246="class",_247="end",_248="function",_249="implementation",_24a="import",_24b="each",_24c="outlet",_24d="action",_24e="new",_24f="selector",_250="super",_251="var",_252="in",_253="=",_254="+",_255="-",_256=":",_257=",",_258=".",_259="*",_25a=";",_25b="<",_25c="{",_25d="}",_25e=">",_25f="[",_260="\"",_261="@",_262="]",_263="?",_264="(",_265=")",_266=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_267=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_268=/^[a-zA-Z_$](\w|$)*$/;
function _269(_26a){
this._index=-1;
this._tokens=(_26a+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_269.prototype.push=function(){
this._context.push(this._index);
};
_269.prototype.pop=function(){
this._index=this._context.pop();
};
_269.prototype.peak=function(_26b){
if(_26b){
this.push();
var _26c=this.skip_whitespace();
this.pop();
return _26c;
}
return this._tokens[this._index+1];
};
_269.prototype.next=function(){
return this._tokens[++this._index];
};
_269.prototype.previous=function(){
return this._tokens[--this._index];
};
_269.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_269.prototype.skip_whitespace=function(_26d){
var _26e;
if(_26d){
while((_26e=this.previous())&&_266.test(_26e)){
}
}else{
while((_26e=this.next())&&_266.test(_26e)){
}
}
return _26e;
};
_2.Lexer=_269;
function _26f(){
this.atoms=[];
};
_26f.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_270,aURL,_271){
return new _272(_270,aURL,_271).executable();
};
_2.eval=function(_273){
return eval(_2.preprocess(_273).code());
};
var _272=function(_274,aURL,_275){
this._URL=new CFURL(aURL);
_274=_274.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _26f();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _269(_274);
this._flags=_275;
this._classMethod=false;
this._executable=NULL;
this._classLookupTable={};
this._classVars={};
var _276=new objj_class();
for(var i in _276){
this._classVars[i]=1;
}
this.preprocess(this._tokens,this._buffer);
};
_272.prototype.setClassInfo=function(_277,_278,_279){
this._classLookupTable[_277]={superClassName:_278,ivars:_279};
};
_272.prototype.getClassInfo=function(_27a){
return this._classLookupTable[_27a];
};
_272.prototype.allIvarNamesForClassName=function(_27b){
var _27c={},_27d=this.getClassInfo(_27b);
while(_27d){
for(var i in _27d.ivars){
_27c[i]=1;
}
_27d=this.getClassInfo(_27d.superClassName);
}
return _27c;
};
_2.Preprocessor=_272;
_272.Flags={};
_272.Flags.IncludeDebugSymbols=1<<0;
_272.Flags.IncludeTypeSignatures=1<<1;
_272.prototype.executable=function(){
if(!this._executable){
this._executable=new _27e(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_272.prototype.accessors=function(_27f){
var _280=_27f.skip_whitespace(),_281={};
if(_280!=_264){
_27f.previous();
return _281;
}
while((_280=_27f.skip_whitespace())!=_265){
var name=_280,_282=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @property attribute name not valid."));
}
if((_280=_27f.skip_whitespace())==_253){
_282=_27f.skip_whitespace();
if(!/^\w+$/.test(_282)){
throw new SyntaxError(this.error_message("*** @property attribute value not valid."));
}
if(name=="setter"){
if((_280=_27f.next())!=_256){
throw new SyntaxError(this.error_message("*** @property setter attribute requires argument with \":\" at end of selector name."));
}
_282+=":";
}
_280=_27f.skip_whitespace();
}
_281[name]=_282;
if(_280==_265){
break;
}
if(_280!=_257){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @property attribute list."));
}
}
return _281;
};
_272.prototype.brackets=function(_283,_284){
var _285=[];
while(this.preprocess(_283,NULL,NULL,NULL,_285[_285.length]=[])){
}
if(_285[0].length===1){
_284.atoms[_284.atoms.length]="[";
_284.atoms[_284.atoms.length]=_285[0][0];
_284.atoms[_284.atoms.length]="]";
}else{
var _286=new _26f();
if(_285[0][0].atoms[0]==_250){
_284.atoms[_284.atoms.length]="objj_msgSendSuper(";
_284.atoms[_284.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_284.atoms[_284.atoms.length]="objj_msgSend(";
_284.atoms[_284.atoms.length]=_285[0][0];
}
_286.atoms[_286.atoms.length]=_285[0][1];
var _287=1,_288=_285.length,_289=new _26f();
for(;_287<_288;++_287){
var pair=_285[_287];
_286.atoms[_286.atoms.length]=pair[1];
_289.atoms[_289.atoms.length]=", "+pair[0];
}
_284.atoms[_284.atoms.length]=", \"";
_284.atoms[_284.atoms.length]=_286;
_284.atoms[_284.atoms.length]="\"";
_284.atoms[_284.atoms.length]=_289;
_284.atoms[_284.atoms.length]=")";
}
};
_272.prototype.directive=function(_28a,_28b,_28c){
var _28d=_28b?_28b:new _26f(),_28e=_28a.next();
if(_28e.charAt(0)==_260){
_28d.atoms[_28d.atoms.length]=_28e;
}else{
if(_28e===_246){
_28a.skip_whitespace();
return;
}else{
if(_28e===_249){
this.implementation(_28a,_28d);
}else{
if(_28e===_24a){
this._import(_28a);
}else{
if(_28e===_24f){
this.selector(_28a,_28d);
}
}
}
}
}
if(!_28b){
return _28d;
}
};
_272.prototype.implementation=function(_28f,_290){
var _291=_290,_292="",_293=NO,_294=_28f.skip_whitespace(),_295="Nil",_296=new _26f(),_297=new _26f();
if(!(/^\w/).test(_294)){
throw new Error(this.error_message("*** Expected class name, found \""+_294+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_294+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_294+"\").super_class";
this._currentClass=_294;
this._currentSelector="";
if((_292=_28f.skip_whitespace())==_264){
_292=_28f.skip_whitespace();
if(_292==_265){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_294+"\"."));
}
if(_28f.skip_whitespace()!=_265){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_294+"\"."));
}
_291.atoms[_291.atoms.length]="{\nvar the_class = objj_getClass(\""+_294+"\")\n";
_291.atoms[_291.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_294+"\\\"\");\n";
_291.atoms[_291.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_292==_256){
_292=_28f.skip_whitespace();
if(!_268.test(_292)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_292+"\"."));
}
_295=_292;
_292=_28f.skip_whitespace();
}
_291.atoms[_291.atoms.length]="{var the_class = objj_allocateClassPair("+_295+", \""+_294+"\"),\nmeta_class = the_class.isa;";
if(_292==_25c){
var _298={},_299=0,_29a=[],_29b,_29c={};
while((_292=_28f.skip_whitespace())&&_292!=_25d){
if(_292===_261){
_292=_28f.next();
if(_292===_245){
_29b=this.accessors(_28f);
}else{
if(_292!==_24c){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_292+"')."));
}
}
}else{
if(_292==_25a){
if(_299++===0){
_291.atoms[_291.atoms.length]="class_addIvars(the_class, [";
}else{
_291.atoms[_291.atoms.length]=", ";
}
var name=_29a[_29a.length-1];
_291.atoms[_291.atoms.length]="new objj_ivar(\""+name+"\")";
_298[name]=1;
_29a=[];
if(_29b){
_29c[name]=_29b;
_29b=NULL;
}
}else{
_29a.push(_292);
}
}
}
if(_29a.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_299){
_291.atoms[_291.atoms.length]="]);\n";
}
if(!_292){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
this.setClassInfo(_294,_295==="Nil"?null:_295,_298);
var _298=this.allIvarNamesForClassName(_294);
for(ivar_name in _29c){
var _29d=_29c[ivar_name],_29e=_29d["property"]||ivar_name;
var _29f=_29d["getter"]||_29e,_2a0="(id)"+_29f+"\n{\nreturn "+ivar_name+";\n}";
if(_296.atoms.length!==0){
_296.atoms[_296.atoms.length]=",\n";
}
_296.atoms[_296.atoms.length]=this.method(new _269(_2a0),_298);
if(_29d["readonly"]){
continue;
}
var _2a1=_29d["setter"];
if(!_2a1){
var _2a2=_29e.charAt(0)=="_"?1:0;
_2a1=(_2a2?"_":"")+"set"+_29e.substr(_2a2,1).toUpperCase()+_29e.substring(_2a2+1)+":";
}
var _2a3="(void)"+_2a1+"(id)newValue\n{\n";
if(_29d["copy"]){
_2a3+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_2a3+=ivar_name+" = newValue;\n}";
}
if(_296.atoms.length!==0){
_296.atoms[_296.atoms.length]=",\n";
}
_296.atoms[_296.atoms.length]=this.method(new _269(_2a3),_298);
}
}else{
_28f.previous();
}
_291.atoms[_291.atoms.length]="objj_registerClassPair(the_class);\n";
}
if(!_298){
var _298=this.allIvarNamesForClassName(_294);
}
while((_292=_28f.skip_whitespace())){
if(_292==_254){
this._classMethod=true;
if(_297.atoms.length!==0){
_297.atoms[_297.atoms.length]=", ";
}
_297.atoms[_297.atoms.length]=this.method(_28f,this._classVars);
}else{
if(_292==_255){
this._classMethod=false;
if(_296.atoms.length!==0){
_296.atoms[_296.atoms.length]=", ";
}
_296.atoms[_296.atoms.length]=this.method(_28f,_298);
}else{
if(_292==_261){
if((_292=_28f.next())==_247){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_292+"\"."));
}
}
}
}
}
if(_296.atoms.length!==0){
_291.atoms[_291.atoms.length]="class_addMethods(the_class, [";
_291.atoms[_291.atoms.length]=_296;
_291.atoms[_291.atoms.length]="]);\n";
}
if(_297.atoms.length!==0){
_291.atoms[_291.atoms.length]="class_addMethods(meta_class, [";
_291.atoms[_291.atoms.length]=_297;
_291.atoms[_291.atoms.length]="]);\n";
}
_291.atoms[_291.atoms.length]="}";
this._currentClass="";
};
_272.prototype._import=function(_2a4){
var _2a5="",_2a6=_2a4.skip_whitespace(),_2a7=(_2a6!==_25b);
if(_2a6===_25b){
while((_2a6=_2a4.next())&&_2a6!==_25e){
_2a5+=_2a6;
}
if(!_2a6){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_2a6.charAt(0)===_260){
_2a5=_2a6.substr(1,_2a6.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_2a6+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_2a5;
this._buffer.atoms[this._buffer.atoms.length]=_2a7?"\", YES);":"\", NO);";
this._dependencies.push(new _2a8(new CFURL(_2a5),_2a7));
};
_272.prototype.method=function(_2a9,_2aa){
var _2ab=new _26f(),_2ac,_2ad="",_2ae=[],_2af=[null];
_2aa=_2aa||{};
while((_2ac=_2a9.skip_whitespace())&&_2ac!==_25c&&_2ac!==_25a){
if(_2ac==_256){
var type="";
_2ad+=_2ac;
_2ac=_2a9.skip_whitespace();
if(_2ac==_264){
while((_2ac=_2a9.skip_whitespace())&&_2ac!=_265){
type+=_2ac;
}
_2ac=_2a9.skip_whitespace();
}
_2af[_2ae.length+1]=type||null;
_2ae[_2ae.length]=_2ac;
if(_2ac in _2aa){
throw new SyntaxError(this.error_message("*** Method ( "+_2ad+" ) uses a parameter name that is already in use ( "+_2ac+" )"));
}
}else{
if(_2ac==_264){
var type="";
while((_2ac=_2a9.skip_whitespace())&&_2ac!=_265){
type+=_2ac;
}
_2af[0]=type||null;
}else{
if(_2ac==_257){
if((_2ac=_2a9.skip_whitespace())!=_258||_2a9.next()!=_258||_2a9.next()!=_258){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_2ad+=_2ac;
}
}
}
}
if(_2ac===_25a){
_2ac=_2a9.skip_whitespace();
if(_2ac!==_25c){
throw new SyntaxError(this.error_message("Invalid semi-colon in method declaration. "+"Semi-colons are allowed only to terminate the method signature, before the open brace."));
}
}
var _2b0=0,_2b1=_2ae.length;
_2ab.atoms[_2ab.atoms.length]="new objj_method(sel_getUid(\"";
_2ab.atoms[_2ab.atoms.length]=_2ad;
_2ab.atoms[_2ab.atoms.length]="\"), function";
this._currentSelector=_2ad;
if(this._flags&_272.Flags.IncludeDebugSymbols){
_2ab.atoms[_2ab.atoms.length]=" $"+this._currentClass+"__"+_2ad.replace(/:/g,"_");
}
_2ab.atoms[_2ab.atoms.length]="(self, _cmd";
for(;_2b0<_2b1;++_2b0){
_2ab.atoms[_2ab.atoms.length]=", ";
_2ab.atoms[_2ab.atoms.length]=_2ae[_2b0];
}
_2ab.atoms[_2ab.atoms.length]=")\n{ with(self)\n{";
_2ab.atoms[_2ab.atoms.length]=this.preprocess(_2a9,NULL,_25d,_25c);
_2ab.atoms[_2ab.atoms.length]="}\n}";
if(this._flags&_272.Flags.IncludeDebugSymbols){
_2ab.atoms[_2ab.atoms.length]=","+JSON.stringify(_2af);
}
_2ab.atoms[_2ab.atoms.length]=")";
this._currentSelector="";
return _2ab;
};
_272.prototype.preprocess=function(_2b2,_2b3,_2b4,_2b5,_2b6){
var _2b7=_2b3?_2b3:new _26f(),_2b8=0,_2b9="";
if(_2b6){
_2b6[0]=_2b7;
var _2ba=false,_2bb=[0,0,0];
}
while((_2b9=_2b2.next())&&((_2b9!==_2b4)||_2b8)){
if(_2b6){
if(_2b9===_263){
++_2bb[2];
}else{
if(_2b9===_25c){
++_2bb[0];
}else{
if(_2b9===_25d){
--_2bb[0];
}else{
if(_2b9===_264){
++_2bb[1];
}else{
if(_2b9===_265){
--_2bb[1];
}else{
if((_2b9===_256&&_2bb[2]--===0||(_2ba=(_2b9===_262)))&&_2bb[0]===0&&_2bb[1]===0){
_2b2.push();
var _2bc=_2ba?_2b2.skip_whitespace(true):_2b2.previous(),_2bd=_266.test(_2bc);
if(_2bd||_268.test(_2bc)&&_266.test(_2b2.previous())){
_2b2.push();
var last=_2b2.skip_whitespace(true),_2be=true,_2bf=false;
if(last==="+"||last==="-"){
if(_2b2.previous()!==last){
_2be=false;
}else{
last=_2b2.skip_whitespace(true);
_2bf=true;
}
}
_2b2.pop();
_2b2.pop();
if(_2be&&((!_2bf&&(last===_25d))||last===_265||last===_262||last===_258||_267.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_268.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_2bd){
_2b6[1]=":";
}else{
_2b6[1]=_2bc;
if(!_2ba){
_2b6[1]+=":";
}
var _2b8=_2b7.atoms.length;
while(_2b7.atoms[_2b8--]!==_2bc){
}
_2b7.atoms.length=_2b8;
}
return !_2ba;
}
if(_2ba){
return NO;
}
}
_2b2.pop();
if(_2ba){
return NO;
}
}
}
}
}
}
}
_2bb[2]=MAX(_2bb[2],0);
}
if(_2b5){
if(_2b9===_2b5){
++_2b8;
}else{
if(_2b9===_2b4){
--_2b8;
}
}
}
if(_2b9===_248){
var _2c0="";
while((_2b9=_2b2.next())&&_2b9!==_264&&!(/^\w/).test(_2b9)){
_2c0+=_2b9;
}
if(_2b9===_264){
if(_2b5===_264){
++_2b8;
}
_2b7.atoms[_2b7.atoms.length]="function"+_2c0+"(";
if(_2b6){
++_2bb[1];
}
}else{
_2b7.atoms[_2b7.atoms.length]=_2b9+"= function";
}
}else{
if(_2b9==_261){
this.directive(_2b2,_2b7);
}else{
if(_2b9==_25f){
this.brackets(_2b2,_2b7);
}else{
_2b7.atoms[_2b7.atoms.length]=_2b9;
}
}
}
}
if(_2b6){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_2b3){
return _2b7;
}
};
_272.prototype.selector=function(_2c1,_2c2){
var _2c3=_2c2?_2c2:new _26f();
_2c3.atoms[_2c3.atoms.length]="sel_getUid(\"";
if(_2c1.skip_whitespace()!=_264){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _2c4=_2c1.skip_whitespace();
if(_2c4==_265){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_2c2.atoms[_2c2.atoms.length]=_2c4;
var _2c5,_2c6=true;
while((_2c5=_2c1.next())&&_2c5!=_265){
if(_2c6&&/^\d+$/.test(_2c5)||!(/^(\w|$|\:)/.test(_2c5))){
if(!(/\S/).test(_2c5)){
if(_2c1.skip_whitespace()==_265){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_2c5+"' in @selector()."));
}
}
_2c3.atoms[_2c3.atoms.length]=_2c5;
_2c6=(_2c5==_256);
}
_2c3.atoms[_2c3.atoms.length]="\")";
if(!_2c2){
return _2c3;
}
};
_272.prototype.error_message=function(_2c7){
return _2c7+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
function _2a8(aURL,_2c8){
this._URL=aURL;
this._isLocal=_2c8;
};
_2.FileDependency=_2a8;
_2a8.prototype.URL=function(){
return this._URL;
};
_2a8.prototype.isLocal=function(){
return this._isLocal;
};
_2a8.prototype.toMarkedString=function(){
var _2c9=this.URL().absoluteString();
return (this.isLocal()?_201:_200)+";"+_2c9.length+";"+_2c9;
};
_2a8.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _2ca=0,_2cb=1,_2cc=2,_2cd=0;
function _27e(_2ce,_2cf,aURL,_2d0){
if(arguments.length===0){
return this;
}
this._code=_2ce;
this._function=_2d0||NULL;
this._URL=_1a3(aURL||new CFURL("(Anonymous"+(_2cd++)+")"));
this._fileDependencies=_2cf;
if(_2cf.length){
this._fileDependencyStatus=_2ca;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_2cc;
}
if(this._function){
return;
}
this.setCode(_2ce);
};
_2.Executable=_27e;
_27e.prototype.path=function(){
return this.URL().path();
};
_27e.prototype.URL=function(){
return this._URL;
};
_27e.prototype.functionParameters=function(){
var _2d1=["global","objj_executeFile","objj_importFile"];
return _2d1;
};
_27e.prototype.functionArguments=function(){
var _2d2=[_1,this.fileExecuter(),this.fileImporter()];
return _2d2;
};
_27e.prototype.execute=function(){
var _2d3=_2d4;
_2d4=CFBundle.bundleContainingURL(this.URL());
var _2d5=this._function.apply(_1,this.functionArguments());
_2d4=_2d3;
return _2d5;
};
_27e.prototype.code=function(){
return this._code;
};
_27e.prototype.setCode=function(code){
this._code=code;
var _2d6=this.functionParameters().join(",");
this._function=new Function(_2d6,code);
};
_27e.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_27e.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_2cc;
};
var _2d7=0,_2d8=[],_2d9={};
_27e.prototype.loadFileDependencies=function(_2da){
var _2db=this._fileDependencyStatus;
if(_2da){
if(_2db===_2cc){
return _2da();
}
this._fileDependencyCallbacks.push(_2da);
}
if(_2db===_2ca){
if(_2d7){
throw "Can't load";
}
_2dc(this);
}
};
function _2dc(_2dd){
_2d8.push(_2dd);
_2dd._fileDependencyStatus=_2cb;
var _2de=_2dd.fileDependencies(),_8c=0,_2df=_2de.length,_2e0=_2dd.referenceURL(),_2e1=_2e0.absoluteString(),_2e2=_2dd.fileExecutableSearcher();
_2d7+=_2df;
for(;_8c<_2df;++_8c){
var _2e3=_2de[_8c],_2e4=_2e3.isLocal(),URL=_2e3.URL(),_2e5=(_2e4&&(_2e1+" ")||"")+URL;
if(_2d9[_2e5]){
if(--_2d7===0){
_2e6();
}
continue;
}
_2d9[_2e5]=YES;
_2e2(URL,_2e4,_2e7);
}
};
function _2e7(_2e8){
--_2d7;
if(_2e8._fileDependencyStatus===_2ca){
_2dc(_2e8);
}else{
if(_2d7===0){
_2e6();
}
}
};
function _2e6(){
var _2e9=_2d8,_8c=0,_2ea=_2e9.length;
_2d8=[];
for(;_8c<_2ea;++_8c){
_2e9[_8c]._fileDependencyStatus=_2cc;
}
for(_8c=0;_8c<_2ea;++_8c){
var _2eb=_2e9[_8c],_2ec=_2eb._fileDependencyCallbacks,_2ed=0,_2ee=_2ec.length;
for(;_2ed<_2ee;++_2ed){
_2ec[_2ed]();
}
_2eb._fileDependencyCallbacks=[];
}
};
_27e.prototype.referenceURL=function(){
if(this._referenceURL===_44){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_27e.prototype.fileImporter=function(){
return _27e.fileImporterForURL(this.referenceURL());
};
_27e.prototype.fileExecuter=function(){
return _27e.fileExecuterForURL(this.referenceURL());
};
_27e.prototype.fileExecutableSearcher=function(){
return _27e.fileExecutableSearcherForURL(this.referenceURL());
};
var _2ef={};
_27e.fileExecuterForURL=function(aURL){
var _2f0=_1a3(aURL),_2f1=_2f0.absoluteString(),_2f2=_2ef[_2f1];
if(!_2f2){
_2f2=function(aURL,_2f3,_2f4){
_27e.fileExecutableSearcherForURL(_2f0)(aURL,_2f3,function(_2f5){
if(!_2f5.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_2f5.execute(_2f4);
});
};
_2ef[_2f1]=_2f2;
}
return _2f2;
};
var _2f6={};
_27e.fileImporterForURL=function(aURL){
var _2f7=_1a3(aURL),_2f8=_2f7.absoluteString(),_2f9=_2f6[_2f8];
if(!_2f9){
_2f9=function(aURL,_2fa,_2fb){
_145();
_27e.fileExecutableSearcherForURL(_2f7)(aURL,_2fa,function(_2fc){
_2fc.loadFileDependencies(function(){
_2fc.execute();
_146();
if(_2fb){
_2fb();
}
});
});
};
_2f6[_2f8]=_2f9;
}
return _2f9;
};
var _2fd={},_2fe={};
_27e.fileExecutableSearcherForURL=function(_2ff){
var _300=_2ff.absoluteString(),_301=_2fd[_300],_302={};
if(!_301){
_301=function(aURL,_303,_304){
var _305=(_303&&_2ff||"")+aURL,_306=_2fe[_305];
if(_306){
return _307(_306);
}
var _308=(aURL instanceof CFURL)&&aURL.scheme();
if(_303||_308){
if(!_308){
aURL=new CFURL(aURL,_2ff);
}
_190.resolveResourceAtURL(aURL,NO,_307);
}else{
_190.resolveResourceAtURLSearchingIncludeURLs(aURL,_307);
}
function _307(_309){
if(!_309){
throw new Error("Could not load file at "+aURL);
}
_2fe[_305]=_309;
_304(new _30a(_309.URL()));
};
};
_2fd[_300]=_301;
}
return _301;
};
var _30b={};
function _30a(aURL){
aURL=_1a3(aURL);
var _30c=aURL.absoluteString(),_30d=_30b[_30c];
if(_30d){
return _30d;
}
_30b[_30c]=this;
var _30e=_190.resourceAtURL(aURL).contents(),_30f=NULL,_310=aURL.pathExtension();
if(_30e.match(/^@STATIC;/)){
_30f=_311(_30e,aURL);
}else{
if(_310==="j"||!_310){
_30f=_2.preprocess(_30e,aURL,_272.Flags.IncludeDebugSymbols);
}else{
_30f=new _27e(_30e,[],aURL);
}
}
_27e.apply(this,[_30f.code(),_30f.fileDependencies(),aURL,_30f._function]);
this._hasExecuted=NO;
};
_2.FileExecutable=_30a;
_30a.prototype=new _27e();
_30a.prototype.execute=function(_312){
if(this._hasExecuted&&!_312){
return;
}
this._hasExecuted=YES;
_27e.prototype.execute.call(this);
};
_30a.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _311(_313,aURL){
var _314=new _fd(_313);
var _315=NULL,code="",_316=[];
while(_315=_314.getMarker()){
var text=_314.getString();
if(_315===_1ff){
code+=text;
}else{
if(_315===_200){
_316.push(new _2a8(new CFURL(text),NO));
}else{
if(_315===_201){
_316.push(new _2a8(new CFURL(text),YES));
}
}
}
}
var fn=_30a._lookupCachedFunction(aURL);
if(fn){
return new _27e(code,_316,aURL,fn);
}
return new _27e(code,_316,aURL);
};
var _317={};
_30a._cacheFunction=function(aURL,fn){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
_317[aURL]=fn;
};
_30a._lookupCachedFunction=function(aURL){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
return _317[aURL];
};
var _318=1,_319=2,_31a=4,_31b=8;
objj_ivar=function(_31c,_31d){
this.name=_31c;
this.type=_31d;
};
objj_method=function(_31e,_31f,_320){
this.name=_31e;
this.method_imp=_31f;
this.types=_320;
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
class_getName=function(_321){
if(_321==Nil){
return "";
}
return _321.name;
};
class_isMetaClass=function(_322){
if(!_322){
return NO;
}
return ((_322.info&(_319)));
};
class_getSuperclass=function(_323){
if(_323==Nil){
return Nil;
}
return _323.super_class;
};
class_setSuperclass=function(_324,_325){
_324.super_class=_325;
_324.isa.super_class=_325.isa;
};
class_addIvar=function(_326,_327,_328){
var _329=_326.allocator.prototype;
if(typeof _329[_327]!="undefined"){
return NO;
}
_326.ivars.push(new objj_ivar(_327,_328));
_329[_327]=NULL;
return YES;
};
class_addIvars=function(_32a,_32b){
var _32c=0,_32d=_32b.length,_32e=_32a.allocator.prototype;
for(;_32c<_32d;++_32c){
var ivar=_32b[_32c],name=ivar.name;
if(typeof _32e[name]==="undefined"){
_32a.ivars.push(ivar);
_32e[name]=NULL;
}
}
};
class_copyIvarList=function(_32f){
return _32f.ivars.slice(0);
};
class_addMethod=function(_330,_331,_332,_333){
if(_330.method_hash[_331]){
return NO;
}
var _334=new objj_method(_331,_332,_333);
_330.method_list.push(_334);
_330.method_dtable[_331]=_334;
if(!((_330.info&(_319)))&&(((_330.info&(_319)))?_330:_330.isa).isa===(((_330.info&(_319)))?_330:_330.isa)){
class_addMethod((((_330.info&(_319)))?_330:_330.isa),_331,_332,_333);
}
return YES;
};
class_addMethods=function(_335,_336){
var _337=0,_338=_336.length,_339=_335.method_list,_33a=_335.method_dtable;
for(;_337<_338;++_337){
var _33b=_336[_337];
if(_335.method_hash[_33b.name]){
continue;
}
_339.push(_33b);
_33a[_33b.name]=_33b;
}
if(!((_335.info&(_319)))&&(((_335.info&(_319)))?_335:_335.isa).isa===(((_335.info&(_319)))?_335:_335.isa)){
class_addMethods((((_335.info&(_319)))?_335:_335.isa),_336);
}
};
class_getInstanceMethod=function(_33c,_33d){
if(!_33c||!_33d){
return NULL;
}
var _33e=_33c.method_dtable[_33d];
return _33e?_33e:NULL;
};
class_getClassMethod=function(_33f,_340){
if(!_33f||!_340){
return NULL;
}
var _341=(((_33f.info&(_319)))?_33f:_33f.isa).method_dtable[_340];
return _341?_341:NULL;
};
class_copyMethodList=function(_342){
return _342.method_list.slice(0);
};
class_replaceMethod=function(_343,_344,_345){
if(!_343||!_344){
return NULL;
}
var _346=_343.method_dtable[_344],_347=NULL;
if(_346){
_347=_346.method_imp;
}
_346.method_imp=_345;
return _347;
};
var _348=function(_349){
var meta=(((_349.info&(_319)))?_349:_349.isa);
if((_349.info&(_319))){
_349=objj_getClass(_349.name);
}
if(_349.super_class&&!((((_349.super_class.info&(_319)))?_349.super_class:_349.super_class.isa).info&(_31a))){
_348(_349.super_class);
}
if(!(meta.info&(_31a))&&!(meta.info&(_31b))){
meta.info=(meta.info|(_31b))&~(0);
objj_msgSend(_349,"initialize");
meta.info=(meta.info|(_31a))&~(_31b);
}
};
var _34a=new objj_method("forward",function(self,_34b){
return objj_msgSend(self,"forward::",_34b,arguments);
});
class_getMethodImplementation=function(_34c,_34d){
if(!((((_34c.info&(_319)))?_34c:_34c.isa).info&(_31a))){
_348(_34c);
}
var _34e=_34c.method_dtable[_34d];
if(!_34e){
_34e=_34a;
}
var _34f=_34e.method_imp;
return _34f;
};
var _350={};
objj_allocateClassPair=function(_351,_352){
var _353=new objj_class(),_354=new objj_class(),_355=_353;
if(_351){
_355=_351;
while(_355.superclass){
_355=_355.superclass;
}
_353.allocator.prototype=new _351.allocator;
_353.method_store.prototype=new _351.method_store;
_353.method_dtable=_353.method_store.prototype;
_354.method_store.prototype=new _351.isa.method_store;
_354.method_dtable=_354.method_store.prototype;
_353.super_class=_351;
_354.super_class=_351.isa;
}else{
_353.allocator.prototype=new objj_object();
}
_353.isa=_354;
_353.name=_352;
_353.info=_318;
_353._UID=objj_generateObjectUID();
_354.isa=_355.isa;
_354.name=_352;
_354.info=_319;
_354._UID=objj_generateObjectUID();
return _353;
};
var _2d4=nil;
objj_registerClassPair=function(_356){
_1[_356.name]=_356;
_350[_356.name]=_356;
_1aa(_356,_2d4);
};
class_createInstance=function(_357){
if(!_357){
objj_exception_throw(new objj_exception(OBJJNilClassException,"*** Attempting to create object with Nil class."));
}
var _358=new _357.allocator();
_358.isa=_357;
_358._UID=objj_generateObjectUID();
return _358;
};
var _359=function(){
};
_359.prototype.member=false;
with(new _359()){
member=true;
}
if(new _359().member){
var _35a=class_createInstance;
class_createInstance=function(_35b){
var _35c=_35a(_35b);
if(_35c){
var _35d=_35c.isa,_35e=_35d;
while(_35d){
var _35f=_35d.ivars;
count=_35f.length;
while(count--){
_35c[_35f[count].name]=NULL;
}
_35d=_35d.super_class;
}
_35c.isa=_35e;
}
return _35c;
};
}
object_getClassName=function(_360){
if(!_360){
return "";
}
var _361=_360.isa;
return _361?class_getName(_361):"";
};
objj_lookUpClass=function(_362){
var _363=_350[_362];
return _363?_363:Nil;
};
objj_getClass=function(_364){
var _365=_350[_364];
if(!_365){
}
return _365?_365:Nil;
};
objj_getMetaClass=function(_366){
var _367=objj_getClass(_366);
return (((_367.info&(_319)))?_367:_367.isa);
};
ivar_getName=function(_368){
return _368.name;
};
ivar_getTypeEncoding=function(_369){
return _369.type;
};
objj_msgSend=function(_36a,_36b){
if(_36a==nil){
return nil;
}
var isa=_36a.isa;
if(!((((isa.info&(_319)))?isa:isa.isa).info&(_31a))){
_348(isa);
}
var _36c=isa.method_dtable[_36b];
if(!_36c){
_36c=_34a;
}
var _36d=_36c.method_imp;
switch(arguments.length){
case 2:
return _36d(_36a,_36b);
case 3:
return _36d(_36a,_36b,arguments[2]);
case 4:
return _36d(_36a,_36b,arguments[2],arguments[3]);
}
return _36d.apply(_36a,arguments);
};
objj_msgSendSuper=function(_36e,_36f){
var _370=_36e.super_class;
arguments[0]=_36e.receiver;
if(!((((_370.info&(_319)))?_370:_370.isa).info&(_31a))){
_348(_370);
}
var _371=_370.method_dtable[_36f];
if(!_371){
_371=_34a;
}
var _372=_371.method_imp;
return _372.apply(_36e.receiver,arguments);
};
method_getName=function(_373){
return _373.name;
};
method_getImplementation=function(_374){
return _374.method_imp;
};
method_setImplementation=function(_375,_376){
var _377=_375.method_imp;
_375.method_imp=_376;
return _377;
};
method_exchangeImplementations=function(lhs,rhs){
var _378=method_getImplementation(lhs),_379=method_getImplementation(rhs);
method_setImplementation(lhs,_379);
method_setImplementation(rhs,_378);
};
sel_getName=function(_37a){
return _37a?_37a:"<null selector>";
};
sel_getUid=function(_37b){
return _37b;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_37c){
return _37c;
};
objj_eval=function(_37d){
var url=_2.pageURL;
var _37e=_2.asyncLoader;
_2.asyncLoader=NO;
var _37f=_2.preprocess(_37d,url,0);
if(!_37f.hasLoadedFileDependencies()){
_37f.loadFileDependencies();
}
_1._objj_eval_scope={};
_1._objj_eval_scope.objj_executeFile=_27e.fileExecuterForURL(url);
_1._objj_eval_scope.objj_importFile=_27e.fileImporterForURL(url);
var code="with(_objj_eval_scope){"+_37f._code+"\n//*/\n}";
var _380;
_380=eval(code);
_2.asyncLoader=_37e;
return _380;
};
_2.objj_eval=objj_eval;
_145();
var _381=new CFURL(window.location.href),_382=document.getElementsByTagName("base"),_383=_382.length;
if(_383>0){
var _384=_382[_383-1],_385=_384&&_384.getAttribute("href");
if(_385){
_381=new CFURL(_385,_381);
}
}
var _386=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1a9=new CFURL(".",new CFURL(_386,_381)).absoluteURL(),_387=new CFURL("..",_1a9).absoluteURL();
if(_1a9===_387){
_387=new CFURL(_387.schemeAndAuthority());
}
_190.resourceAtURL(_387,YES);
_2.pageURL=_381;
_2.bootstrap=function(){
_388();
};
function _388(){
_190.resolveResourceAtURL(_1a9,YES,function(_389){
var _38a=_190.includeURLs(),_8c=0,_38b=_38a.length;
for(;_8c<_38b;++_8c){
_389.resourceAtURL(_38a[_8c],YES);
}
_27e.fileImporterForURL(_1a9)(_386.lastPathComponent(),YES,function(){
_146();
_391(function(){
var _38c=window.location.hash.substring(1),args=[];
if(_38c.length){
args=_38c.split("/");
for(var i=0,_38b=args.length;i<_38b;i++){
args[i]=decodeURIComponent(args[i]);
}
}
var _38d=window.location.search.substring(1).split("&"),_38e=new CFMutableDictionary();
for(var i=0,_38b=_38d.length;i<_38b;i++){
var _38f=_38d[i].split("=");
if(!_38f[0]){
continue;
}
if(_38f[1]==null){
_38f[1]=true;
}
_38e.setValueForKey(decodeURIComponent(_38f[0]),decodeURIComponent(_38f[1]));
}
main(args,_38e);
});
});
});
};
var _390=NO;
function _391(_392){
if(_390){
return _392();
}
if(window.addEventListener){
window.addEventListener("load",_392,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_392);
}
}
};
_391(function(){
_390=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1a3(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1a9);
};
objj_importFile=_27e.fileImporterForURL(_1a9);
objj_executeFile=_27e.fileExecuterForURL(_1a9);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
