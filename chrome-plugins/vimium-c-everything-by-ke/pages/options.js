"use strict";function B(){var t=this,n=t.xh;n.ondragstart=function(n){(t.Bh=n.target).style.opacity="0.5"},n.ondragend=function(){var n=t.Bh;t.Bh=null,n&&(n.style.opacity="")},n.ondragover=function(t){return t.preventDefault()},n.ondrop=function(n){var i,e,o,r,s;for(n.preventDefault(),i=t.Bh,e=n.target;e&&e.classList.contains("exclusionRule");)e=e.parentElement;i&&e&&i!==e&&(t.xh.insertBefore(i,e),o=t.d_,r=i.querySelector(".pattern").vnode,s=e.querySelector(".pattern").vnode,o.splice(o.indexOf(r),1),o.splice(o.indexOf(s),0,r),t.nh())}}function V(t){var n=document.createElement("script");return n.src=t,document.head.appendChild(n),n}function C(){null==C.Vh&&(C.Vh=this.id,V("options_checker.js"))}function G(){function t(){var t,n,i,e,o,r=_.hg;for(t in r)"object"==typeof(i=(n=r[t]).al)&&i&&(n.al=N.Nc(n.th));e=false,o=false,_.hg.exclusionRules.d_.length>0?e=o=true:_.hg.keyMappings.fh&&(o=true),e&&!u.Exclusions&&u.r.$a("Exclusions"),o&&!u.Commands&&u.r.$a("Commands"),u.r.sc(1)}u.removeEventListener("unload",G),setTimeout(function(){if(u=chrome.extension.getBackgroundPage(),!u)return window.onbeforeunload=null,void window.close();N=u.l,N?(u.addEventListener("unload",G),"loading"===u.document.readyState?u.addEventListener("DOMContentLoaded",function n(){u.removeEventListener("DOMContentLoaded",n,true),setTimeout(t,100)},true):setTimeout(t,67)):u=null},200)}function E(t){var n=document.createEvent("MouseEvents");return n.initMouseEvent("click",true,true,window,1,0,0,0,0,false,false,false,false,0,null),t.dispatchEvent(n)}var M,D,L,H,A,F,z,P,I;_.vh=[],_.prototype.eh=function(t){t.call(this),window.VDom&&(VDom._[N.zc[this.th]]=this.dh())},_.Ch=function(){var t,n,i=_.hg,e=[];for(t in i)(n=i[t]).ih||n.ph(n.al,N.Nc(n.th))||e.push(n.th);if(e.length>0&&!confirm(s("dirtyOptions",[e.join("\n  * ")])))return false;for(t in i)if(!(n=i[t]).ih&&!n.lh())return false;for(t in i.vimSync.ih||i.vimSync.hh(),i.exclusionRules.ih||i.exclusionRules.hh(),i)i[t].ih||i[t].hh();return true},_.Gh=function(){var t,n=_.hg;for(t in n)if(!n[t].ih)return true;return false},_.prototype.ph=function(t,n){return t===n},M=(function(t){function n(i,e){var o,r,s=t.call(this,i,e)||this;return s.fh={min:(o=i.min)&&!isNaN(r=parseFloat(o))?r:null,max:(o=i.max)&&!isNaN(r=parseFloat(o))?r:null,default:N.Mc[s.th],ah:n.Eh},s.Jr.oninput=s.nh,s.Jr.onfocus=s.Mh.bind(s),s}return y(n,t),n.prototype.sh=function(t){this.Jr.value=""+t},n.prototype.dh=function(){return parseFloat(this.Jr.value)},n.prototype.Mh=function(){var t=this,n=this.Jr,i=function(n){return t.Dh(n)},e=function(){n.removeEventListener("wheel",i,{passive:false}),n.removeEventListener("blur",e),t.Lh=0};this.Lh=0,n.addEventListener("wheel",i,{passive:false}),n.addEventListener("blur",e)},n.prototype.Dh=function(t){var n,i,e,o,r,s,u,a;if(t.preventDefault(),n=this.Lh,!((i=Date.now())-n<100&&i+99>n&&n>0))return this.Lh=i,r=(e=this.Jr).value,"function"==typeof(u=(o=(t.deltaY||t.deltaX)>0)?e.stepUp:e.stepDown)?(u.call(e),s=e.value,e.value=r):(a=(u=parseFloat)(e.step)||1,i=(+e.value||0)+(o?a:-a),isNaN(a=u(e.max))||(i=Math.min(i,a)),isNaN(a=u(e.min))||(i=Math.max(i,a)),s=""+i),this.Hh(s,n>0,false)},n.Eh=function(t){return isNaN(t)&&(t=this.default),t=null!=this.min?Math.max(this.min,t):t,null!=this.max?Math.min(this.max,t):t},n})(_),D=(function(t){function n(i,e){var o=t.call(this,i,e)||this,r=o.Jr.dataset.converter||"",s=r?r.split(" "):[];return o.Jr.oninput=o.nh,o.Ah=s,o.Fh=false,s.indexOf("chars")>=0&&(o.fh=n.zh),o}return y(n,t),n.prototype.uh=function(){t.prototype.uh.call(this),this.Fh=this.Ah.indexOf("chars")>=0&&n.zh.ah(this.al)===this.al},n.prototype.sh=function(t,n){var i=t.replace(/ /g,"\xa0");true!==n?this.Jr.value=i:this.Hh(i,true,true)},n.prototype.dh=function(){var t=this.Jr.value.trim().replace(/\xa0/g," "),i=this.Ah;return t&&i.length>0&&(i.indexOf("lower")>=0&&(t=t.toLowerCase()),i.indexOf("upper")>=0&&(t=t.toUpperCase()),this.Fh&&(t=n.Ih(t))),t},n.Ih=function(t){var n,i,e,o="";for(n=0,i=t.replace(/\s/g,"");n<i.length;n++)o.includes(e=i[n])||(o+=e);return o},n.zh={ah:function(t){return n.Ih(t)}},n})(_),L=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return y(n,t),n.prototype.dh=function(){var n=t.prototype.dh.call(this);return n||(n=N.Mc[this.th],this.sh(n,true)),n},n})(D),D.prototype.Hh=M.prototype.Hh=function(t,n,i){n&&(this.Uh=true,document.activeElement!==this.Jr&&this.Jr.focus(),document.execCommand("undo")),this.Uh=i,this.Jr.select(),document.execCommand("insertText",false,t),this.Uh=false},H=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return y(n,t),n.prototype.sh=function(n,i){var e=this.Jr instanceof HTMLInputElement,o=JSON.stringify(n,null,e?1:2),r=e?o.replace(/(,?)\n\s*/g,function(t,n){return n?", ":""}):o;t.prototype.sh.call(this,r,i)},n.prototype.dh=function(){var n=t.prototype.dh.call(this),i=null;if(n)try{i=JSON.parse(n)}catch(t){}else i=N.Mc[this.th],this.sh(i,true);return i},n})(D),A=(function(t){function n(n,i){var e=t.call(this,n,i)||this;return e.Kh=true,O(function(){e.Jr.classList.add("masked")}),e.Wh=e.qh.bind(e),e.Jr.addEventListener("focus",e.Wh),e}return y(n,t),n.prototype.qh=function(){this.Wh&&(this.Jr.removeEventListener("focus",this.Wh),this.Jr.classList.remove("masked"),this.Wh=null,this.Kh=false,this.Jr.removeAttribute("placeholder"),this.uh())},n.prototype.sh=function(n,i){if(this.Kh){var e=this.Jr.dataset.mask||"";(e=s(e||"clickToUnmask")||e)&&(this.Jr.placeholder=e)}else t.prototype.sh.call(this,n,i)},n.prototype.dh=function(){return this.Kh?this.al:t.prototype.dh.call(this)},n})(D),H.prototype.ph=_.mh,F=(function(t){function n(i,e){var o=t.call(this,i,e)||this,r=i.dataset.map;return o.Qh=r?JSON.parse(r):o.Jr.dataset.allowNull?n.Xh:n.Yh,o.Zh=o.Qh.length-1,o.Zh>1&&"vimSync"!==o.th&&o.Jr.addEventListener("change",o.onTripleStatusesClicked.bind(o),true),o.Jr.onchange=o.nh,o}return y(n,t),n.prototype.sh=function(t){this.Jr.checked=t===this.Qh[this.Zh],this.Jr.indeterminate=this.Zh>1&&t===this.Qh[1],this.td=Math.max(0,this.Qh.indexOf(t))},n.prototype.dh=function(){var t=this.Jr.indeterminate?this.Qh[1]:this.Qh[this.Jr.checked?this.Zh:0];return"ignoreCapsLock"===this.th&&window.VDom&&VDom._&&(VDom._.i=t>1||1===t&&!N.Sc.o),t},n.prototype.onTripleStatusesClicked=function(t){t.preventDefault();var n=this.td;this.td=2===n?1:n?0:2,this.Jr.indeterminate=2===n,this.Jr.checked=2===this.td},n.Yh=[false,true],n.Xh=[false,null,true],n})(_),J.prototype.kh=function(n){var i,e,o,r,s,a;if(this.d_.length===n)for(n&&!u.Exclusions&&u.r.$a("Exclusions"),e=(i=t("#exclusionToolbar")).querySelectorAll("[data-model]"),i.style.visibility=n?"":"hidden",o=0,r=e.length;o<r;o++)(a=(s=_.hg[e[o].id]).Jr.parentNode.style).visibility=n||s.ih?"":"visible",a.display=!n&&s.ih?"none":""},D.prototype.ud=function(t,n,i){var e,o,r,s;null!=i||(i=!!t),o=(e=this.Jr).classList,r=e.parentElement,s=(s=e.nextElementSibling)&&s.classList.contains("tip")?s:null,O(function(){i?(null==s&&((s=document.createElement("div")).className="tip",r.insertBefore(s,e.nextElementSibling)),s.textContent=t,null!==n&&o.add(n||"has-error")):(o.remove("has-error"),o.remove("highlight"),s&&s.remove())})},T&&O(T),O(function(t){var n=document.documentElement.classList,i="DOMContentLoaded",e=function(){removeEventListener(i,e),N.Sc.d&&n.add("auto-dark"),N.Sc.m&&n.add("less-motion")};addEventListener(i,e),t.textContent=N.aa.ql},t(".version")),z=function(){function n(){this.Uh||((this.ih=this.ph(this.dh(),this.al))?B&&!_.Gh()&&(T.disabled=true,T.firstChild.data=s("o115"),x.disabled=false,B=false,window.onbeforeunload=null):B||(window.onbeforeunload=e,B=true,T.disabled=false,T.firstChild.data=s("o115_2"),x.disabled=true))}function i(t){var n,i,e,o=Object.create(null),r={N:6,d:o};for(n=0,i=t;n<i.length;n++)e=i[n],o[N.zc[e]]=N.Nc(e);N.jc(r)}function e(){return s("beforeUnload")}var o,r,a,c,f,h,l,d,p,g,m,v,b,T=t("#saveOptions"),x=t("#exportButton"),B=false;for(T.onclick=function(t){if(false===t||_.Ch()){var n=_.vh;_.vh=[],this.disabled=true,this.firstChild.data=s("o115_3"),x.disabled=false,B=false,window.onbeforeunload=null,0!==n.length&&setTimeout(i,100,n)}},o=false,(r=t("#advancedOptionsButton")).onclick=function(n,i){var e,r=this;null==i||"hash"===i&&false===N.Nc("showAdvancedOptions")?(o=!o,N.Pc("showAdvancedOptions",o)):o=N.Nc("showAdvancedOptions"),e=t("#advancedOptions"),O(function(){e.previousElementSibling.style.display=e.style.display=o?"":"none";var t=o?"Hide":"Show";r.firstChild.data=s(t)||t,r.setAttribute("aria-checked",""+o)},9)},r.onclick(null,true),a=w("[data-model]"),c={Number:M,Text:D,NonEmptyText:L,JSON:H,MaskedText:A,Boolean:F,ExclusionRules:J},f=a.length;0<=--f;)(h=new(0,c[(r=a[f]).dataset.model])(r,n)).uh(),_.hg[h.th]=h;for(O(function(){var t,n=_.hg;for(t in _.rh=false,n)n[t].sh(n[t].al)}),_.hg.exclusionRules.al.length>0&&O(function(t){t.style.visibility=""},t("#exclusionToolbar")),f=(a=w("[data-check]")).length;0<=--f;)(r=a[f]).addEventListener(r.dataset.check||"input",C);for(document.addEventListener("keyup",function(t){var n=t.target,i=t.keyCode;if(13===i){if(n instanceof HTMLAnchorElement)n.hasAttribute("href")||setTimeout(function(t){E(t),t.blur()},0,n);else if((t.ctrlKey||t.metaKey)&&(n.blur&&n.blur(),B))return T.onclick()}else{if(32!==i)return;n instanceof HTMLSpanElement&&n.parentElement instanceof HTMLLabelElement&&(t.preventDefault(),E(n.parentElement.control))}}),l=function(){var n,i,e=t("#"+this.dataset.autoResize),o=e.scrollHeight,r=e.scrollWidth,s=r-e.clientWidth;o<=e.clientHeight&&s<=0||(n=Math.max(Math.min(innerWidth,1024)-120,550),e.style.maxWidth=r>n?n+"px":"",e.style.height=e.style.width="",i=e.offsetHeight-e.clientHeight,o+=i=(s=r-e.clientWidth)>0?Math.max(26,i):i+18,s>0&&(e.style.width=e.offsetWidth+s+4+"px"),e.style.height=o+"px")},f=(a=w("[data-auto-resize]")).length;0<=--f;)a[f].onclick=l;for(l=function(t){var n=this.dataset.delay,i=null;"continue"!==n&&t&&t.preventDefault(),"event"===n&&(i=t||null),window.fd=["#"+this.id,i],"complete"!==document.readyState?window.addEventListener("load",function t(n){n.target===document&&(window.removeEventListener("load",t),V("options_ext.js"))}):V("options_ext.js")},f=(a=w("[data-delay]")).length;0<=--f;)a[f].onclick=l;if(S<53)for(l=function(t){t.target===this&&(t.preventDefault(),getSelection().selectAllChildren(this))},f=(a=w(".sel-all")).length;0<=--f;)a[f].onmousedown=l;for((d=_.hg.keyMappings).oh=function(){var t,n,i=N.mc.gc,e=i?s("openBgLogs",[s(1===i?"error":"errors",[i])]):"";N.Sc.l&&!e&&(t=Object.keys(u.c.ws).join(""),t+=(n=u.c._s)?Object.keys(n).join(""):"",/[^ -\xff]/.test(t))?this.ud(s("ignoredNonEN"),null):this.ud(e)},d.oh(),p=_.hg.linkHintCharacters,g=_.hg.linkHintNumbers,d=m=_.hg.filterLinkHints,p.oh=g.oh=function(){this.ud(!this.Jr.style.display&&this.al.length<4?s("hintCharsTooFew"):"")},d.oh=function(){O(function(t){var n=m.dh();t.style.display=g.Jr.style.display=n?"":"none",p.Jr.style.display=n?"none":"",p.oh(),g.oh()},t("#waitForEnterBox"))},d.oh(),d.Jr.addEventListener("change",d.oh.bind(d),true),(d=_.hg.vomnibarPage).oh=function(){var t=this.Jr,n=this.al,i=n.startsWith(location.protocol)||n.startsWith("front/");if(S<50)return O(function(){t.style.textDecoration=i?"":"line-through"}),this.ud(n===N.Mc.vomnibarPage?"":s("onlyExtVomnibar",[50]),null);if(n=N._.vomnibarPage_f||n,i);else{if(n.startsWith("file://"))return this.ud(s("fileVomnibar"),"highlight");if(n.startsWith("http://"))return this.ud(s("httpVomnibar"),"highlight")}return this.ud("")},d.oh(),(a=w("[data-permission]")).length>0&&(function(t){function n(){var t,n=this.querySelector("[data-permission]");this.onclick=null,n&&(t=n.dataset.permission,n.placeholder=s("lackPermission",[t?': "'+t+'"':""]))}var i,e,o,r,u=chrome.runtime.getManifest();for(i=0,e=u.permissions||[];i<e.length;i++)u[e[i]]=true;for(o=function(i){var e=t[i],o=e.dataset.permission;if("C"===o[0]){if(S>=+o.slice(1))return"continue";o=s("beforeChromium",[o.slice(1)])}else{if(o in u)return"continue";o=s("lackPermission",[o?":\n* "+o:""])}o=s("invalidOption",[o]),O(function(t){t.disabled=true,t instanceof HTMLInputElement&&"checkbox"===t.type?(t.nextElementSibling.tabIndex=-1,(t=t.parentElement).title=o):(t.value="",t.title=o,t.parentElement.onclick=n)},e)},r=t.length;0<=--r;)o(r)})(a),0===u.l.aa.es.length&&O(function(t){for(var n=t.length;0<=--n;)t[n].remove()},w(".require-shortcuts")),O(function(t){var n,i,e;for(n=t.length;0<=--n;)e=(i=t[n]).dataset.href,e=u.r.ba(e,null,-1),i.removeAttribute("data-href"),i.setAttribute("href",e)},w("[data-href]")),r=t("#openExtensionPage"),S<65&&(r.href="chrome://extensions/configureCommands"),r.onclick=function(t){t.preventDefault(),u.a.xr({u:this.href,r:1,p:true})},O(function(t){var i=t.children[1],e=s("NewTabAdapter");i.title=e+" - "+s("webstore")},t("#chromeExtVomnibar")),v=function(){var n=this;O(function(t){t.textContent=s(n.al?"o145_2":"o144")},t("#"+this.Jr.id+"Status"))},b=function(n){o||t("#advancedOptionsButton").onclick(null),n.preventDefault();var i=_.hg[this.getAttribute("for")].Jr.nextElementSibling;S<61?window.VDom?VDom.Yn(i):i.scrollIntoViewIfNeeded():i.scrollIntoView({block:"center"}),i.focus(),window.VCui&&(VDom.en(),VCui.ne(i.parentElement.parentElement))},f=(a=w(".ref-text")).length;0<=--f;)(d=_.hg[a[f].getAttribute("for")]).oh=v,d.oh(),a[f].onclick=b},P=function(){var n,i;z(),N.Sc.o||O(function(t){t.textContent="Cmd"},t("#Ctrl")),(n=_.hg.newTabUrl).fh={ah:function(t){var n=/^\/?pages\/[a-z]+.html\b/i.test(t)?chrome.runtime.getURL(t):u.r.ba(t.toLowerCase());return n=n.split("?",1)[0].split("#",1)[0],!t.startsWith("http")&&(n in N.Cc||/^(?!http|ftp)[a-z\-]+:\/?\/?newtab\b\/?/i.test(t))?N.Mc.newTabUrl:t}},n.fh.ah(n.al),(i=_.hg.ignoreKeyboardLayout).oh=function(){O(function(t){t.style.display=i.dh()?"none":""},t("#ignoreCapsLockBox"))},i.oh(),i.Jr.addEventListener("change",i.oh.bind(i),true),_.hg.userDefinedCss.oh=function(){var t,n;window.VDom&&VDom._&&(t=VCui.Lt,(n=t&&t.querySelector("style.debugged"))&&setTimeout(function(){var t,i,e,o,r,s;for(n.remove(),i=0,e=(t=VCui.Lt.querySelectorAll("iframe")).length;i<e;i++)r=(o=t[i]).classList.contains("HUD"),(s=o.contentDocument.querySelector("style.debugged"))&&(r?s.remove():s.classList.remove("debugged"));_.hg.userDefinedCss.Jr.classList.remove("debugging")},500))},_.hg.autoDarkMode.oh=function(){document.documentElement.classList.toggle("auto-dark",this.al)},_.hg.autoReduceMotion.oh=function(){document.documentElement.classList.toggle("less-motion",this.al)},_.hg.exclusionRules.bh=B,z=P=null,window.onhashchange()},t("#userDefinedCss").addEventListener("input",R(function(){var t,n,i,e,o,r,s,u,a,c,f,h,l,d,p,g,m,v,b,w;if(window.VDom&&VDom._){if(t=VCui.Lt,n=_.hg.userDefinedCss,i=t&&t.querySelector("style.debugged"))i.nextElementSibling&&t.appendChild(i);else{if(n.ih)return;(i=document.createElement("style")).className="debugged",e=function(){var t=localStorage.getItem("innerCSS"),n=t.indexOf("\n");t=t.substr(n+1,+t.slice(0,n).split(",")[2]),VCui.Kt(t),VCui.Lt.appendChild(i)},t?e():(VCui.Dt(i),i.remove(),setTimeout(e,200))}for(r=(o=n.dh())===n.al,s=N.Fc(o),r?n.Jr.classList.remove("debugging"):n.Jr.classList.add("debugging"),i.textContent=s.ui||"",a=0,c=(u=t?t.querySelectorAll("iframe"):[]).length;a<c;a++)h=(f=u[a]).classList.contains("HUD"),l=f.contentDocument,d=h?VCui.Tt.parentNode:l,(i=d.querySelector("style.debugged"))||(h?((p=N.Fc(N.Nc("userDefinedCss")).find||"")&&(g=N._.Bc.i,VCui.Tt.textContent=g.slice(0,-p.length-1)),(i=l.createElement("style")).type="text/css",i.parentNode||d.appendChild(i)):((i=l.querySelector("#custom"))||((i=l.createElement("style")).type="text/css",i.id="custom"),i.parentNode||l.head.appendChild(i)),i.classList.add("debugged")),i.textContent=h?s.find||"":(r?"":"\n.transparent { opacity: 1; }\n")+(s.omni&&s.omni+"\n"||""),v=(m=window.VCui)&&m.Ft,h&&v&&(b=localStorage.getItem("findCSS"),w=parseInt(b,10),v.i=v.i.slice(0,w-v.c.length-v.s.length-1)+"\n"+(s.find||""))}},1800,t("#userDefinedCss"),0));S<43&&t("select").classList.add("font-fix"),t("#importButton").onclick=function(){var n=t("#importOptions");n.onchange?n.onchange(null):E(t("#settingsFile"))},O(function(n){var i,e,o=N.aa.Xl;n.textContent=(u.p?["MS Edge"]:/\bChromium\b/.exec(navigator.appVersion)||["Chrome"])[0]+" "+S+s("comma")+(s(o)||o[0].toUpperCase()+o.slice(1)),u.p&&((i=t("#chromeExtVomnibar")).nextElementSibling.remove(),i.parentElement.classList.add("line-input"),i.remove(),(i=t("#shortcutHelper")).previousElementSibling.textContent=s("period"),i.remove(),(e=t("#openExtensionPage")).textContent=e.href="edge://extensions/shortcuts")},t("#browserName")),document.addEventListener("keydown",function(n){var i,e,o,r,s;if(32!==n.keyCode){if(!window.VKey||!VKey._||VApi.Xt())return;return i={c:" ",e:n,i:n.keyCode},e=VKey.at(i).toLowerCase(),1===(o=VKey.st(i))&&"f12"===e&&(t("#recommendedSettings").selected=true,(r=t("#importOptions")).onchange?r.onchange():setTimeout(function(){r.onchange&&r.onchange()},100)&&r.click()),void(o||"?"!==e||t("#showCommands").click())}"span"===(s=n.target).tagName&&"label"===s.parentElement.tagName&&n.preventDefault()}),window.onhashchange=function(){var n,i=location.hash;(i=i.slice("!"===i[1]?2:1))&&/^[a-z][a-z\d_-]*$/i.test(i)&&((n=t('[data-hash="'+i+'"]'))?n.onclick&&O(function(){n.onclick(null,"hash")}):(n=t("#"+i))&&O(function(){n.dataset.model&&n.classList.add("highlight");var t=function(t){if(!t||t.target===window){window.onload&&(window.onload=null,window.scrollTo(0,0));var i=n;window.VDom?VDom.Yn(i):(i.scrollIntoViewIfNeeded||i.scrollIntoView).call(i)}};if("complete"===document.readyState)return t();window.scrollTo(0,0),window.onload=t}))},N.Qc&&N.Qc()?N.Qc().then(P):P(),window.onunload=function(){u.removeEventListener("unload",G),u.r.sc(-1)},u.r.sc(1),u.addEventListener("unload",G),(I=u.c.Es["?"])&&5===I.hs||(function(){var n,i=u.c.Es,e="";for(n in i)5===i[n].hs&&(e=e&&e.length<n.length?e:n);e&&O(function(t){return t.textContent=e},t("#questionShortcut"))})(),document.addEventListener("click",function t(){window.VDom&&VCui.Lt&&(document.removeEventListener("click",t,true),VCui.Lt.addEventListener("click",function(t){var n,i=t.target;VApi&&i.classList.contains("HelpCommandName")&&(n=i.textContent.slice(1,-1),VApi.Bt({H:16,s:n}))},true))},true);