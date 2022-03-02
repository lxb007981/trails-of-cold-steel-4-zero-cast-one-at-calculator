import{d as B,r as s,o as F,c as A,a as e,w as i,v as f,b as m,t as x,e as T,f as M,F as w,g as N}from"./vendor.4048b8b8.js";const L=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const l of u)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function d(u){const l={};return u.integrity&&(l.integrity=u.integrity),u.referrerpolicy&&(l.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?l.credentials="include":u.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(u){if(u.ep)return;u.ep=!0;const l=d(u);fetch(u.href,l)}};L();const G=e("h3",null,"\u96F6\u9A71\u52A8\u6240\u9700\u901F\u5EA6\u8BA1\u7B97",-1),I=e("p",null,"\u9A71\u52A8\u56DE\u8DEF\u53CA\u9970\u54C1",-1),O=e("label",{for:"cast1"},"\u9A71\u52A81",-1),Q=e("label",{for:"cast2"},"\u9A71\u52A82",-1),W=e("label",{for:"cast3"},"\u9A71\u52A83",-1),q=e("label",{for:"DiabolosGem"},"\u9B54\u738B\u73E0",-1),K=e("label",{for:"QuickCaliberV"},"\u8FC5\u6377\u673A\u82AFV",-1),j=e("label",{for:"WisdomAnima"},"\u667A\u4E4B\u6838\u5FC3",-1),z=e("label",{for:"EchoCairn"},"\u54CD\u4E4B\u6838\u5FC3",-1),H=e("p",null,"\u9009\u62E9\u901F\u5EA6buff",-1),J=e("option",{selected:"",value:"1"}," \u65E0buff ",-1),R=e("option",{value:"1.15"}," SPD UP\uFF08\u5C0F\uFF09 ",-1),X=e("option",{value:"1.3"}," SPD UP\uFF08\u4E2D\uFF09 ",-1),Y=e("option",{value:"1.45"}," SPD UP\uFF08\u5927\uFF09 ",-1),Z=[J,R,X,Y],ee=e("p",null,"\u9009\u62E9\u76EE\u6807\u9B54\u6CD5",-1),ue=e("option",{value:"13"}," \u5730\u6C34\u98CE\u706B\u5927\u9B54\u6CD5 ",-1),te=e("option",{selected:"",value:"14"}," \u65F6\u7A7A\u5E7B\u5927\u9B54\u6CD5 ",-1),oe=[ue,te],le=e("br",null,null,-1),se={key:0},ne=B({setup(b){const c=s(!1),d=s(!1),r=s(!1),u=s(!1),l=s(!1),p=s(!1),v=s(!1),n=s(!1),a=s("14"),_=s(0),h=s("1");function D(){const C=parseInt(a.value,10),t=d.value?4/5:1,o=r.value?3/4:1,y=u.value?2/3:1,V=l.value?1/2:1,$=p.value?2/3:1,k=v.value?1/2:1,U=n.value?1/2:1,P=parseFloat(h.value);let E=Math.ceil(Math.ceil(C*100*t*o*y*V*$*k*U+1e-5)/P)-10,S=!0;for(;S;){const g=Math.floor(Math.floor(C*100/Math.floor(E*P))*t*o*y*V*$*k*U);console.log(g),g<1?(S=!1,_.value=E):E+=1}c.value=!0}return(C,t)=>(F(),A("div",null,[G,e("div",null,[I,i(e("input",{id:"cast1","onUpdate:modelValue":t[0]||(t[0]=o=>d.value=o),type:"checkbox",value:"4/5"},null,512),[[f,d.value]]),O,i(e("input",{id:"cast2","onUpdate:modelValue":t[1]||(t[1]=o=>r.value=o),type:"checkbox",value:"3/4"},null,512),[[f,r.value]]),Q,i(e("input",{id:"cast3","onUpdate:modelValue":t[2]||(t[2]=o=>u.value=o),type:"checkbox",value:"2/3"},null,512),[[f,u.value]]),W,i(e("input",{id:"DiabolosGem","onUpdate:modelValue":t[3]||(t[3]=o=>l.value=o),type:"checkbox",value:"1/2"},null,512),[[f,l.value]]),q,i(e("input",{id:"QuickCaliberV","onUpdate:modelValue":t[4]||(t[4]=o=>p.value=o),type:"checkbox",value:"2/3"},null,512),[[f,p.value]]),K,i(e("input",{id:"WisdomAnima","onUpdate:modelValue":t[5]||(t[5]=o=>v.value=o),type:"checkbox",value:"1/2"},null,512),[[f,v.value]]),j,i(e("input",{id:"EchoCairn","onUpdate:modelValue":t[6]||(t[6]=o=>n.value=o),type:"checkbox",value:"1/2"},null,512),[[f,n.value]]),z,H,i(e("select",{"onUpdate:modelValue":t[7]||(t[7]=o=>h.value=o)},Z,512),[[m,h.value]])]),e("div",null,[ee,i(e("select",{"onUpdate:modelValue":t[8]||(t[8]=o=>a.value=o)},oe,512),[[m,a.value]])]),le,e("div",null,[e("button",{onClick:D}," \u8BA1\u7B97 ")]),c.value?(F(),A("div",se," \u6240\u9700\u8981\u7684\u901F\u5EA6\u662F"+x(_.value),1)):T("",!0)]))}}),ae=e("h3",null,"1\u786C\u76F4\u6240\u9700\u901F\u5EA6\u8BA1\u7B97",-1),ie=e("p",null,"\u94C3\u94DB\u4E2A\u6570",-1),ce=e("option",{selected:"",value:"0"}," 0 ",-1),de=e("option",{value:"1"}," 1 ",-1),re=e("option",{value:"2"}," 2 ",-1),pe=[ce,de,re],ve=e("p",null,"\u9009\u62E9\u901F\u5EA6buff",-1),fe=e("option",{selected:"",value:"1"}," \u65E0buff ",-1),_e=e("option",{value:"1.15"}," SPD UP\uFF08\u5C0F\uFF09 ",-1),he=e("option",{value:"1.3"}," SPD UP\uFF08\u4E2D\uFF09 ",-1),me=e("option",{value:"1.45"}," SPD UP\uFF08\u5927\uFF09 ",-1),Fe=[fe,_e,he,me],Ae=e("p",null,"\u9009\u62E9\u76EE\u6807\u9B54\u6CD5",-1),be=e("option",{value:"12"}," \u5730\u6C34\u98CE\u706B\u5927\u9B54\u6CD5 ",-1),Ce=e("option",{selected:"",value:"14"}," \u65F6\u7A7A\u5E7B\u5927\u9B54\u6CD5 ",-1),Ee=[be,Ce],Be=e("br",null,null,-1),De={key:0},ye=B({setup(b){const c=s(!1),d=s("14"),r=s(0),u=s("1"),l=s("0");function p(){const v=parseInt(d.value,10),n=parseFloat(u.value),a=(1/2)**parseInt(l.value,10);let _=Math.ceil(Math.ceil(v*100*a/2+1e-5)/n+1e-5)-10,h=!0;for(;h;)Math.floor(Math.floor(v*100/Math.floor(_*n))*a)<2?(h=!1,r.value=_):_+=1;c.value=!0}return(v,n)=>(F(),A("div",null,[ae,e("div",null,[ie,i(e("select",{"onUpdate:modelValue":n[0]||(n[0]=a=>l.value=a)},pe,512),[[m,l.value]]),ve,i(e("select",{"onUpdate:modelValue":n[1]||(n[1]=a=>u.value=a)},Fe,512),[[m,u.value]])]),e("div",null,[Ae,i(e("select",{"onUpdate:modelValue":n[2]||(n[2]=a=>d.value=a)},Ee,512),[[m,d.value]])]),Be,e("div",null,[e("button",{onClick:p}," \u8BA1\u7B97 ")]),c.value?(F(),A("div",De," \u6240\u9700\u8981\u7684\u901F\u5EA6\u662F"+x(r.value),1)):T("",!0)]))}}),Ve=B({setup(b){return(c,d)=>(F(),A(w,null,[M(ne),M(ye)],64))}});N(Ve).mount("#app");