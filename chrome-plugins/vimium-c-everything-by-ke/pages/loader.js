"use strict";var VimiumInjector=null;chrome.runtime&&chrome.runtime.getManifest&&(function(){var c,n,r,e,t,a,m,u,d=document.currentScript,i=d.parentElement,l=[d],f=chrome.runtime.getURL(""),h=location.pathname.toLowerCase();for(c=0,n=chrome.runtime.getManifest().content_scripts[0].js;c<n.length;c++)r=n[c],(e=document.createElement("script")).async=false,e.src="/"===r[0]||0===r.lastIndexOf(f,0)?r:"/"+r,l.push(e);l[l.length-1].onload=function(){var o,c;for(o=l.length;0<=--o;)l[o].remove();(c=window.VDom)&&(c.E=0)},setTimeout(function(){var o,c;for(o=0,c=l;o<c.length;o++)i.appendChild(c[o])},100),(t=chrome.extension.getBackgroundPage())&&t.l&&(t.l.qc(),h.indexOf("options")<0&&(a=t.l.Tc.s)&&(" "+a+" ").indexOf(" dark ")>=0&&((m=document.createElement("style")).textContent="body { background: #000; color: #aab0b6; }",document.head.appendChild(m))),h.indexOf("blank")>0&&chrome.i18n.getMessage("lang1")&&(u=(0,chrome.i18n.getMessage)("vBlank"))&&(document.title=u)})();