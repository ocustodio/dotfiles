import{_ as d,u as a,c as l}from"./seventv.useUserAgent.3.0.9.js";import{_ as f}from"./seventv.ChatModule.vue_vue_type_script_setup_true_lang.3.0.9.js";import{u as _}from"./seventv.main.3.0.9.js";import{g as F}from"./seventv.useModule.3.0.9.js";import{e as g,$ as B,l as m,f as M,m as P,s as T,F as h}from"./seventv.index.3.0.9.js";import"./seventv.ChatMessage.3.0.9.js";import"./seventv.useChannelContext.3.0.9.js";import"./seventv.useChatEmotes.3.0.9.js";const C=g({__name:"YouTubeSite",setup(E){const u=B(()=>d(()=>import("./seventv.ModuleWrapper.3.0.9.js"),["./seventv.ModuleWrapper.3.0.9.js","./seventv.index.3.0.9.js","./seventv.useUserAgent.3.0.9.js"],import.meta.url)),n=_(),s=l();s.preferredFormat=n.avifSupported?"AVIF":"WEBP",n.setPreferredImageFormat(s.preferredFormat),n.setPlatform("YOUTUBE",["7TV","FFZ","BTTV"],[]);const o=Object.assign({"./modules/chat/ChatModule.vue":f});for(const t in o){const r=t.split("/"),e=r.splice(r.length-2,1).pop();o[e]=o[t],delete o[t]}function p(t,r){const e=F(t);e&&(e.instance=r)}return(t,r)=>(m(!0),M(h,null,P(Object.entries(a(o)),([e,c])=>(m(),T(a(u),{key:e,mod:c,onMounted:i=>p(e,i)},null,8,["mod","onMounted"]))),128))}});export{C as default};
