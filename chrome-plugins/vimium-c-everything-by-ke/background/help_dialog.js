"use strict";var HelpDialog={s:null,k:null,ii:function(e){var o,t,a,i,s,d,m,g,T,b,v,u,h,k,L,H,_=this;for(v in _.s||(o=l._.helpDialog,t=51===f,a=o.indexOf("</style>")+8,i=o.slice(0,a),s=o.slice(a).trim(),t&&(t&&(i=i.replace(/contain:\s?[\w\s]+/g,"contain: none !important")),l.Pc("helpDialog","")),s=s.replace(/\$(\w+)/g,function(e,o){return n(o)||("_"===o[0]?"":o)}),d=r.Ct({homePage:l.aa.Ha,version:l.aa.ql,release:r.ba("vimium://release"),reviewPage:(p?"https://microsoftedge.microsoft.com/addons/detail/aibcglbfblnogfjhbcmmpobjhnomhcdo":"https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/$id/reviews").replace("$id",chrome.runtime.id),webStore:n(p?"edgestore":"webstore"),browserHelp:p?"https://microsoftedgesupport.microsoft.com/hc":"https://support.google.com/chrome/answer/157179"}),s=s.replace(/\{\{(\w+)}}/g,function(e,o){return d[o]||e}),_.s=[i,s]),m=r.sa(),g=c.Es,T=!e,b=e,g)(h=(u=g[v]).ms).endsWith(".activateMode")?h=h.slice(0,-4):h.endsWith("Leave")?h=h.slice(0,-5)+"Unhover":h.includes("EditUrl")?h=h.replace("EditUrl","Url"):"quickNext"===h&&(h="nextTab"),(m[h]||(m[h]=[])).push([v,u]);return k=r.Ct({className:l.Sc.d,title:n(e?"cmdList":"help"),tip:b?n("tipClickToCopy"):"",lbPad:b?'\n\t\t<tr><td class="HelpTd TdBottom">&#160;</td></tr>':""}),H=(L=_.s)[1].replace(/\{\{(\w+)}}/g,function(e,o){var t=k[o];return null!=t?t:HelpDialog.N(o,m,T,b)}),_.k=null,L[0].replace("{{className}}",l.Sc.d)+H},N:function(e,o,t,a){var i,s,l,c,d,m,g,p,T,b,v,u,h,k,L,H=this.ed,f=n("cmdParams"),_=this.od,w="";for(i=0,s=this.ad[e];i<s.length;i++)if(c=o[l=s[i]],!t||c){if(d=1===this.nd[l],m=-2,g="",(p=_[l])||(T=l.replace(".","_"),b=n(T+"_p"),p=n(T).replace("<","&lt;").replace(">","&gt;")+(b?f.replace("*",b):" "),_[l]=p),c&&c.length>0){for(g='\n\t\t<span class="HelpKey">',v=0,u=c;v<u.length;v++)(k=(h=u[v])[1].vs)&&this.rd(k),T=k&&k.sd||r.ta(h[0]),(L=k&&k.ld)?w+=H(d,'\n\t\t<span class="HelpKey">'+T+"</span>\n\t",a?L+" ":L,a?l:""):(m>=0&&(g+='</span>, <span class="HelpKey">'),g+=T,m+=h[0].length+2);g+="</span>\n\t"}m<=12?w+=H(d,g,p,a?l:""):(w+=H(d,g,"",""),w+=H(d,"",p,a?l:""))}return w},ed:function(e,o,t,a){var n=e?'<tr class="HelpAdv">\n\t':"<tr>\n\t";return t?(n+='<td class="HelpTd HelpKeys">',n+=o,n+='</td>\n\t<td class="HelpTd HelpCommandInfo">',n+=t,a&&(n+='<span class="HelpCommandName" role="button">(',n+=a,n+=")</span>\n\t")):(n+='<td class="HelpTd HelpKeys HelpLongKeys" colspan="2">',n+=o),n+"</td>\n</tr>\n"},rd:function(e){var o,t,a;null==e.sd&&((o=this.k)?o||(o=this.k=new DOMParser):(t=document.createElement("template"),a=document.createElement("td"),t.content.appendChild(a),o=this.k=a),e.sd=e.ct?this.cd(e.ct,o):"",e.ld=e.q?this.cd(e.q,o):"")},md:{a:1,abbr:1,acronym:1,address:1,b:1,big:1,blockquote:1,br:1,cite:1,code:1,colgroup:1,dd:1,del:1,dfn:1,div:1,dl:1,dt:1,em:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,i:1,id:1,img:1,ins:1,kbd:1,li:1,ol:1,p:1,pre:1,samp:1,small:1,span:1,strong:1,sub:1,sup:1,table:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,tt:1,u:1,ul:1,var:1,__proto__:null},cd:function(e,o){var t,a,n,i,r,s,l,c,d,m,g;for(o.innerHTML=e,a=0,n=(t=o.querySelectorAll("*")).length;a<n;a++)if(((i=t[a]).tagName+"").toLowerCase()in this.md||i instanceof HTMLUnknownElement){for(r=[],l=(s=i.attributes).length,c=0;c<l;c++)d=s[c].name.toLowerCase(),/^on|[^\w\-]|href$|^is/i.test(d)&&r.push(s[c]);for(m=0,g=r;m<g.length;m++)i.removeAttributeNode(g[m])}else i.remove();return o.innerHTML},ad:{__proto__:null,pageNavigation:["scrollDown","scrollUp","scrollLeft","scrollRight","scrollToTop","scrollToBottom","scrollToLeft","scrollToRight","scrollPageDown","scrollPageUp","scrollPxDown","scrollPxUp","scrollPxLeft","scrollPxRight","scrollFullPageDown","scrollFullPageUp","reload","reloadTab","reloadGivenTab","zoomIn","zoomOut","toggleViewSource","copyCurrentUrl","copyCurrentTitle","switchFocus","simBackspace","LinkHints.activateModeToCopyLinkUrl","LinkHints.activateModeToCopyLinkText","openCopiedUrlInCurrentTab","openCopiedUrlInNewTab","goUp","goToRoot","focusInput","LinkHints.activate","LinkHints.activateModeToOpenInNewTab","LinkHints.activateModeToOpenInNewForegroundTab","LinkHints.activateModeWithQueue","LinkHints.activateModeToDownloadImage","LinkHints.activateModeToOpenImage","LinkHints.activateModeToDownloadLink","LinkHints.activateModeToOpenIncognito","LinkHints.activateModeToHover","LinkHints.activateModeToLeave","LinkHints.unhoverLast","LinkHints.activateModeToSearchLinkText","LinkHints.activateModeToEdit","goPrevious","goNext","nextFrame","mainFrame","parentFrame","enterInsertMode","enterVisualMode","enterVisualLineMode","Marks.activateCreateMode","Marks.activate","Marks.clearLocal","Marks.clearGlobal","openUrl","focusOrLaunch"],vomnibarCommands:["Vomnibar.activate","Vomnibar.activateInNewTab","Vomnibar.activateBookmarks","Vomnibar.activateBookmarksInNewTab","Vomnibar.activateHistory","Vomnibar.activateHistoryInNewTab","Vomnibar.activateTabSelection","Vomnibar.activateUrl","Vomnibar.activateUrlInNewTab","LinkHints.activateModeToOpenVomnibar","toggleVomnibarStyle"],historyNavigation:["goBack","goForward","reopenTab"],findCommands:["enterFindMode","performFind","performBackwardsFind","performAnotherFind","clearFindHistory"],tabManipulation:["nextTab","previousTab","firstTab","lastTab","createTab","duplicateTab","removeTab","removeRightTab","restoreTab","restoreGivenTab","discardTab","moveTabToNextWindow","moveTabToNewWindow","moveTabToIncognito","joinTabs","togglePinTab","toggleMuteTab","visitPreviousTab","closeTabsOnLeft","closeTabsOnRight","closeOtherTabs","moveTabLeft","moveTabRight","enableCSTemp","toggleCS","clearCS","copyWindowInfo"],misc:["showHelp","autoCopy","autoOpen","searchAs","searchInAnother","toggleLinkHintCharacters","toggleSwitchTemp","passNextKey","debugBackground","closeDownloadBar","blank"]},nd:{__proto__:null,toggleViewSource:1,clearFindHistory:1,scrollToLeft:1,scrollToRight:1,moveTabToNextWindow:1,moveTabToNewWindow:1,moveTabToIncognito:1,reloadGivenTab:1,focusOrLaunch:1,goUp:1,goToRoot:1,focusInput:1,"LinkHints.activateModeWithQueue":1,enableCSTemp:1,toggleCS:1,clearCS:1,"LinkHints.activateModeToDownloadImage":1,reopenTab:1,"LinkHints.activateModeToOpenImage":1,removeRightTab:1,"LinkHints.activateModeToDownloadLink":1,restoreGivenTab:1,discardTab:1,copyWindowInfo:1,"LinkHints.activateModeToOpenIncognito":1,passNextKey:1,goNext:1,goPrevious:1,"Marks.clearLocal":1,"Marks.clearGlobal":1,moveTabLeft:1,moveTabRight:1,closeTabsOnLeft:1,closeTabsOnRight:1,closeOtherTabs:1,scrollPxDown:1,scrollPxUp:1,scrollPxLeft:1,scrollPxRight:1,debugBackground:1,blank:1,"LinkHints.activateModeToHover":1,"LinkHints.unhoverLast":1,toggleLinkHintCharacters:1,toggleSwitchTemp:1,"LinkHints.activateModeToLeave":1,"Vomnibar.activateUrl":1,"Vomnibar.activateUrlInNewTab":1,closeDownloadBar:0},od:r.sa()};