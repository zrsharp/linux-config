"use strict";var Commands={t:function(e,t){var o,n,a,i,s=t,l=e.length;if(l<=s)return null;for(o=r.sa();s<l;)0===(n=(a=e[s++]).indexOf("="))||"__proto__"===a||"$"===a[0]&&!"$if=$key=$desc=$count=".includes(a.slice(0,n+1))?this.i(0===n?"Missing":"Unsupported","option key:",a):n<0?o[a]=true:(i=a.slice(n+1),o[a=a.slice(0,n)]=i&&this.u(i));return a?o:null},u:function(e){try{return JSON.parse(e)}catch(e){}return e},f:function(e,t,o){var n,a,i,s,c,u,d;if(o||(o=this.H[e]),a=null,s=o[2],n=o.length<4?null:r.Ct(o[3]),t){if(t.$count?(c=parseFloat(t.$count)||1,delete t.$count,t.count=c):"count"in t&&(t.count=1===o[0]?1:(parseFloat(t.count)||1)*(n&&n.count||1)),(t.$desc||t.$key)&&(a={ct:t.$key||"",q:t.$desc||""},delete t.$key,delete t.$desc),i=t.$if){if(i.sys&&i.sys!==l.aa.Xl||i.browser&&!(1&i.browser))return null;delete t.$if}n&&r.y(t,n),2!==o[0]||o[1]||("number"!=typeof(d=u=t.mode)&&(d=0|this.os[t.action||d||0]),d>33&&(d=65===d?t.url?64:d:38===d?t.join?55:d:d>79?d-16:d),u!==d&&(t.mode=d),s=d>63?1:s)}else t=n;return{hs:o[0],ps:o[1],ms:e,vs:a,De:t,gs:s}},Bs:function(e){var t,o,n,a,i,s,u,d,m,p,g,b=0,T=0,v=r.sa(),f=r.sa(),k=null,_=r.sa(),h=this,w=h.H,y=r.na,U="color:red",M="Shortcut %c%s",L=e.replace(/\\\\?\n/g,function(e){return 3===e.length?"\\\n":""}).replace(/[\t ]+/g," ").split("\n");if("unmapAll"!==L[0]&&"unmapall"!==L[0])for(k=r.sa(),n=(d=h.Vs.split(" ")).length;0<n;)v[d[n-=2]]=h.f(d[n+1]),k[d[n]]=1;else n=1;for(a=L.length;n<a;n++)if((e=L[n].trim())&&e.charCodeAt(0)>35){if("map"===(t=(o=e.split(" "))[0]))if((t=r.cc(o[1]||""))&&"__proto__"!==t)if(t in v&&!(k&&t in k))h.i("Key %c%s",U,t,"has been mapped to",v[t].ms);else if(o.length<3)h.i("Lacking command when mapping %c%s",U,t);else if(i=w[o[2]]){if(!((s=t.charCodeAt(0))>47&&s<58||45===s)){(u=h.f(o[2],h.t(o,3),i))&&(v[t]=u,k&&delete k[t]);continue}h.i("Invalid key: %c%s",U,t,"(the first char can not be '-' or number)")}else h.i("Command %c%s",U,o[2],"doesn't exist!");else h.i("Unsupported key sequence %c%s",U,t||'""','for "'+(o[2]||"")+'"');else{if("unmapAll"===t||"unmapall"===t){v=r.sa(),f=r.sa(),k=null,_=r.sa(),b=0,T>0&&h.i("All key mappings is unmapped, but there %s been %c%d error%s%c before this instruction",T>1?"have":"has",U,T,T>1?"s":"","color:auto");continue}if("mapkey"===t||"mapKey"===t)if(m=/<(?!<[^:])([acms]-){0,4}.\w*?(:[a-z])?>|./g,3!==o.length)h.i("MapKey needs "+(o.length>3?"only":"both")+" source and target keys",e);else if((t=o[1]).length>1&&t.match(m).length>1||o[2].length>1&&o[2].match(m).length>1)h.i("MapKey: a source / target key should be a single key:",e);else{if(!((t=y(t))in _)){_[t]=y(o[2]),b++;continue}t=_[y(t)],h.i("This key %c%s",U,o[1],"has been mapped to another key:",t.length>1?"<"+t+">":t)}else if("shortcut"===t||"command"===t)if(t=o[1],o.length<3)h.i("Lacking command name and options in shortcut:",e);else if(!t.startsWith("userCustomized")&&l.aa.es.indexOf(t)<0)h.i(M,U,t,"is not a valid name");else if(t in f)h.i(M,U,t,"has been configured");else{if(!(t=h.Fs(f,t,h.t(o,2))))continue;h.i(M,U,o[1],t)}else if("unmap"!==t)h.i("Unknown mapping command: %c%s",U,t,"in",e);else if(2!==o.length)h.i("Unmap needs one mapped key:",e);else{if((t=r.cc(o[1]))in v){k&&delete k[t],delete v[t];continue}h.i("Unmapping: %c%s",U,t,"has not been mapped")}}++T}for(p=0,g=l.aa.es;p<g.length;p++)(t=g[p]).startsWith("user")||f[t]||(u=h.f(t))&&(f[t]=u);c.Es=v,c.Ks=k,c.ds=f,c._s=l.Tc.k=b>0?_:null,l.mc.gc=l.mc.gc>0?~T:T},Fs:function(e,t,o){var n,a=1,i=o&&o.command||(a=0,t.startsWith("user")?"":t),r=i?1:0;return r&&i in this.H&&(a&&delete o.command,(n=this.f(i,o))&&(e[t]=n),r=2),r<1?'requires a "command" option':r>1?"":"gets an unknown command"},Ws:function(e){var t,o,n,a,i,s,u,d,m,p,g,b,T=c,v=T.ws=r.sa(),f=r.uc,k=r.na,_=T.Ks,h=Object.keys(T.Es),w=_?h.filter(function(e){return!(e in _)}):h,y=w.length,U=_?w.concat(Object.keys(_)):h,M=Commands,L=l.mc,x=L.gc;for(x<0&&(L.gc=~x),t=10;0<=--t;)v[t]=1;for(v["-"]=1,o=0;o<U.length;o++)if(0!=(i=(a=(n=U[o]).match(f)).length-1)){for(d=u=v,m=0;(d=u[k(a[m])])&&m<i;)m++,u=d;if(null!=d&&(o>=y||0===d))o>=y?delete T.Es[n]:e&&M.js(n,a.slice(0,m+1).join(""));else{for(null!=d&&e&&M.js(d,n);m<i;)u=u[k(a[m++])]=r.sa();u[k(a[i])]=0}}else{if((s=k(n))in v){if(o>=y){delete T.Es[n];continue}e&&M.js(v[s],n)}v[s]=0}for(n in e&&L.gc?console.log("%cKey Mappings: %o errors found.","background-color:#fffbe5",L.gc):x<0&&console.log("The new key mappings have no errors"),c.Ks=null,p=Exclusions?Exclusions.d():null,g=function(e){var t,o;for(t in e)0!==(o=e[t])?g(o):true===p||0!==v[t]||p&&t in p||delete e[t]},v)0!==(b=v[n])&&1!==b&&g(b)},i:function(){console.log.apply(console,arguments)},js:function(e,t){console.log("inactive key:",e,"with",t),++l.mc.gc},Qi:function(e,t){var o,n,i,s,l=e.command;(o=(l=l?l+"":"")?this.H[l]:null)&&((t.tab?a.Ac(t.tab.id,t.frameId||0)||(a.Ac(t.tab.id)||[null])[0]:null)||o[1])&&(i=this.f(l,n=e.options),s=e.count,i&&(s="-"!==s?parseInt(s,10)||1:-1,n&&"object"==typeof n?r.Ct(n):n=null))},Vs:"? showHelp j scrollDown k scrollUp h scrollLeft l scrollRight gg scrollToTop G scrollToBottom zH scrollToLeft zL scrollToRight <c-e> scrollDown <c-y> scrollUp d scrollPageDown u scrollPageUp r reload gs toggleViewSource R reloadGivenTab <a-R> reopenTab <a-r> reloadTab <a-t> createTab <a-c> previousTab <a-s-c> nextTab <a-v> nextTab i enterInsertMode v enterVisualMode V enterVisualLineMode <f8> enterVisualMode H goBack L goForward gu goUp gU goToRoot gi focusInput f LinkHints.activate F LinkHints.activateModeToOpenInNewTab <a-f> LinkHints.activateModeWithQueue / enterFindMode n performFind N performBackwardsFind <a-n> performAnotherFind [[ goPrevious ]] goNext yy copyCurrentUrl yf LinkHints.activateModeToCopyLinkUrl p openCopiedUrlInCurrentTab P openCopiedUrlInNewTab K nextTab J previousTab gt nextTab gT previousTab ^ visitPreviousTab << moveTabLeft >> moveTabRight g0 firstTab g$ lastTab W moveTabToNextWindow t createTab yt duplicateTab x removeTab X restoreTab <a-p> togglePinTab <a-m> toggleMuteTab o Vomnibar.activate O Vomnibar.activateInNewTab T Vomnibar.activateTabSelection b Vomnibar.activateBookmarks B Vomnibar.activateBookmarksInNewTab ge Vomnibar.activateUrl gE Vomnibar.activateUrlInNewTab gf nextFrame gF mainFrame gn toggleVomnibarStyle <f1> simBackspace <s-f1> switchFocus <f2> switchFocus m Marks.activateCreateMode ` Marks.activate",H:{__proto__:null,"LinkHints.activate":[2,0,0,{mode:0}],"LinkHints.activateMode":[2,0,0,{mode:0}],"LinkHints.activateModeToCopyLinkText":[2,0,0,{mode:38}],"LinkHints.activateModeToCopyLinkUrl":[2,0,0,{mode:40}],"LinkHints.activateModeToDownloadImage":[2,0,0,{mode:35}],"LinkHints.activateModeToDownloadLink":[2,0,0,{mode:42}],"LinkHints.activateModeToEdit":[2,0,1,{mode:66}],"LinkHints.activateModeToHover":[2,0,0,{mode:32}],"LinkHints.activateModeToLeave":[2,0,0,{mode:33}],"LinkHints.activateModeToUnhover":[2,0,0,{mode:33}],"LinkHints.activateModeToOpenImage":[2,0,0,{mode:36}],"LinkHints.activateModeToOpenIncognito":[2,0,0,{mode:43}],"LinkHints.activateModeToOpenInNewForegroundTab":[2,0,0,{mode:3}],"LinkHints.activateModeToOpenInNewTab":[2,0,0,{mode:2}],"LinkHints.activateModeToOpenVomnibar":[2,0,1,{mode:65}],"LinkHints.activateModeToSearchLinkText":[2,0,0,{mode:37}],"LinkHints.activateModeWithQueue":[2,0,0,{mode:18}],"LinkHints.unhoverLast":[3,0,1],"Marks.activate":[4,0,0],"Marks.activateCreateMode":[4,0,0,{mode:"create"}],"Marks.clearGlobal":[37,1,1],"Marks.clearLocal":[37,1,1,{local:true}],"Vomnibar.activate":[9,1,0],"Vomnibar.activateBookmarks":[9,1,1,{mode:"bookm",autoSelect:1}],"Vomnibar.activateBookmarksInNewTab":[9,1,1,{mode:"bookm",newtab:1,autoSelect:1}],"Vomnibar.activateEditUrl":[9,1,0,{url:true}],"Vomnibar.activateEditUrlInNewTab":[9,1,0,{url:true,newtab:1}],"Vomnibar.activateHistory":[9,1,1,{mode:"history",autoSelect:1}],"Vomnibar.activateHistoryInNewTab":[9,1,1,{mode:"history",newtab:1,autoSelect:1}],"Vomnibar.activateInNewTab":[9,1,0,{newtab:1}],"Vomnibar.activateTabSelection":[9,1,1,{mode:"tab",newtab:1,autoSelect:1}],"Vomnibar.activateUrl":[9,1,0,{url:true}],"Vomnibar.activateUrlInNewTab":[9,1,0,{url:true,newtab:1}],autoCopy:[16,0,1],autoOpen:[17,0,1],blank:[0,1,1],clearCS:[16,1,1,{type:"images"}],clearFindHistory:[35,1,1],closeDownloadBar:[12,1,1,{all:1}],closeOtherTabs:[19,1,1,{other:true}],closeTabsOnLeft:[19,1,0,{count:-1e6}],closeTabsOnRight:[19,1,0,{count:1e6}],copyCurrentTitle:[34,1,1,{type:"title"}],copyCurrentUrl:[34,1,1],copyWindowInfo:[34,1,0,{type:"window"}],createTab:[10,1,20],debugBackground:[24,1,1,{reuse:1,url:"chrome://extensions/?id=$id",id_mask:"$id"}],discardTab:[23,1,0],duplicateTab:[11,1,20],editText:[20,0,0],enableCSTemp:[15,1,0,{type:"images",incognito:true}],enterFindMode:[8,1,1,{active:true,selected:true}],enterInsertMode:[6,1,1],enterVisualLineMode:[7,1,1,{mode:"line"}],enterVisualMode:[7,1,1],firstTab:[17,1,0,{absolute:true}],focusInput:[19,0,0],focusOrLaunch:[24,1,1,{reuse:1}],goBack:[0,0,0,{count:-1}],goForward:[0,0,0],goNext:[3,1,1],goPrevious:[3,1,1,{rel:"prev"}],goToRoot:[30,1,0],goUp:[30,1,0,{count:-1}],joinTabs:[14,1,1],lastTab:[17,1,0,{count:-1,absolute:true}],mainFrame:[32,1,1],moveTabLeft:[31,1,0,{count:-1}],moveTabRight:[31,1,0],moveTabToIncognito:[12,1,1,{incognito:true}],moveTabToNewWindow:[12,1,0],moveTabToNextWindow:[13,1,0],nextFrame:[1,1,0],nextTab:[17,1,0],openCopiedUrlInCurrentTab:[24,1,1,{reuse:0,copied:true}],openCopiedUrlInNewTab:[24,1,20,{copied:true}],openUrl:[24,1,20],parentFrame:[2,1,0],passNextKey:[12,0,0],performAnotherFind:[8,1,0,{index:"other"}],performBackwardsFind:[8,1,0,{count:-1}],performFind:[8,1,0],previousTab:[17,1,0,{count:-1}],quickNext:[17,1,0],reload:[14,0,1],reloadGivenTab:[28,1,0,{single:true}],reloadTab:[28,1,0],removeRightTab:[20,1,0],removeTab:[18,1,0],reopenTab:[29,1,1],restoreGivenTab:[22,1,0],restoreTab:[21,1,25],scrollDown:[6,0,0],scrollFullPageDown:[6,0,0,{view:2}],scrollFullPageUp:[6,0,0,{dir:-1,view:2}],scrollLeft:[6,0,0,{dir:-1,axis:"x"}],scrollPageDown:[6,0,0,{dir:.5,view:2}],scrollPageUp:[6,0,0,{dir:-.5,view:2}],scrollPxDown:[6,0,0,{view:1}],scrollPxLeft:[6,0,0,{dir:-1,axis:"x",view:1}],scrollPxRight:[6,0,0,{axis:"x",view:1}],scrollPxUp:[6,0,0,{dir:-1,view:1}],scrollRight:[6,0,0,{axis:"x"}],scrollTo:[6,0,0,{dest:"min"}],scrollToBottom:[6,0,0,{dest:"max"}],scrollToLeft:[6,0,0,{axis:"x",dest:"min"}],scrollToRight:[6,0,0,{axis:"x",dest:"max"}],scrollToTop:[6,0,0,{dest:"min"}],scrollUp:[6,0,0,{dir:-1}],searchAs:[18,0,1,{copied:true,selected:true}],searchInAnother:[25,1,1],showHelp:[5,1,1],showTip:[40,1,1],simBackspace:[19,0,1,{act:"backspace"}],switchFocus:[19,0,1,{act:"switch"}],toggleCS:[15,1,0,{type:"images"}],toggleLinkHintCharacters:[4,1,1,{key:"linkHintCharacters"}],toggleMuteTab:[27,1,1],togglePinTab:[26,1,0],toggleSwitchTemp:[4,1,1],toggleViewSource:[36,1,1],toggleVomnibarStyle:[38,1,1,{style:"dark"}],visitPreviousTab:[33,1,0],zoomIn:[42,1,0],zoomOut:[42,1,0,{count:-1}]},os:{focus:34,hover:32,input:66,leave:33,unhover:33,text:38,"copy-text":38,url:40,image:36}},c=c||{Es:null,Ks:null,ws:null,ds:null,_s:null,Ts:{l:1,h:0,j:3,k:2,$:5,0:4,"}":7,"{":6,")":9,"(":8,w:11,W:11,e:13,b:12,B:12,G:15,g:{g:14},o:20,a:{w:26,s:24},y:31,Y:32,C:33,p:34,P:35,n:47,N:46,f1:48,"a-f1":48,v:51,V:52,c:53,"/":55,"c-e":62,"c-y":61,"c-down":62,"c-up":61}};a.us&&(1&l.mc.vc&&(Commands.Bs(l.Nc("keyMappings")),Commands.Ws(true),l.Nc("vimSync")||l.mc.dc||(Commands=null)),chrome.commands.onCommand.addListener(a.Os)),Commands&&(l.Uc.keyMappings=function(e){null!=e&&Commands.Bs(e),Commands.Ws(null!=e),l.jc({N:9,m:c._s,k:c.ws}),l.Dc({N:47,d:{k:c._s}})});