import{d as A,D as B,ao as F,n as D,h as a,u as K,F as p,aV as N,aW as c,aX as d,aa as j,U as G,r as L,a as Q,i as C,q as T,o as V,c as U,w as R,e as I,t as M,j as W,_ as X}from"./index-ceadd577.js";const i="stay",h="hs-on",f="hs-off",_="hs-range",g="both-left-sides",S="both-right-sides";let H="right",b=[],s=[];const Z={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},z=A({name:"ReSelector",props:Z,emits:["selectedVal"],setup(l,{emit:m}){const o=j(),y=l.value,v=B(()=>l.disabled),q=B(()=>{const e=[];let t=0,n=y;for(y!==Math.floor(y)&&n--;t<n;t++)e.push(h);for(;t<l.max.length;t++)e.push(f);return e}),w=e=>{if(!l.disabled){if(s.length===1){b.length<1&&b.push({index:e});let t=b[0].index;if(e>t)for(H="right",N(!1,S,document.querySelector(".hs-select__item"+s[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),_),t++;else for(H="left",N(!0,S,document.querySelector(".hs-select__item"+s[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),_),t--}c(document.querySelector("."+f+e),h)}},u=e=>{if(l.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(i))return!1;if(d(t,h),s.length===1){const n=b[0].index;if(e>=n)for(let r=0;r<=e;r++)d(document.querySelector(".hs-select__item"+r),_);else for(;e<=n;)d(document.querySelector(".hs-select__item"+e),_),e++}},x=(e,t)=>{if(l.disabled)return;const n=s.length;n<2?(s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g),s[1]&&(H==="right"?c(document.querySelector(".hs-select__item"+s[1].index),S):c(document.querySelector(".hs-select__item"+s[1].index),g)),n===1&&(H==="right"?m("selectedVal",{left:s[0].item,right:s[1].item,whole:s}):m("selectedVal",{left:s[1].item,right:s[0].item,whole:s}))):D(()=>{s.forEach(r=>{d(document.querySelector("."+f+r.index),h,i),d(document.querySelector(".hs-select__item"+r.index),g,S)}),s=[],b=[];for(let r=0;r<=l.max.length;r++){const $=document.querySelector(".hs-select__item"+r);$&&d($,_)}s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g)})},E=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"传入的数组长度必须是2";for(e.sort((t,n)=>t-n),c(o.refs["hsdiv"+l.HsKey+e[0]],h,i),c(o.refs["hstd"+l.HsKey+e[0]],g),c(o.refs["hsdiv"+l.HsKey+e[1]],h,i),c(o.refs["hstd"+l.HsKey+e[1]],S);e[1]>=e[0];)c(o.refs["hstd"+l.HsKey+e[0]],_),e[0]++}};return F(()=>{D(()=>{E(l.echo)})}),()=>a(p,null,[a("table",{cellspacing:"0",cellpadding:"0"},[a("tbody",null,[a("tr",null,[l.max.map((e,t)=>a("td",{"data-index":l.HsKey,ref:`hstd${l.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>w(t),onMouseleave:()=>u(t),onClick:()=>x(t,e),style:{cursor:K(v)?"auto":"pointer",textAlign:"center"},key:t},[a("div",{ref:`hsdiv${l.HsKey}${t}`,class:`hs-item ${[K(q)[t]+t]}`},[a("span",null,[e])])]))])])])])}}),J=G(z),O={class:"card-header"},P={key:0,class:"mt-3"},Y=A({name:"Selector",__name:"index",setup(l){const m=L(""),o=L([{title:"基本使用",echo:[],disabled:!1},{title:"回显模式",echo:[2,7],disabled:!0}]),y=({left:v,right:q})=>{m.value=`${v}-${q}`};return(v,q)=>{const w=Q("el-card");return V(),C("div",null,[(V(!0),C(p,null,T(o.value,(u,x)=>(V(),U(w,{class:"box-card",key:x,shadow:"never"},{header:R(()=>[I("div",O,[I("span",null,M(u.title),1)])]),default:R(()=>[a(K(J),{HsKey:x,echo:u.echo,onSelectedVal:y,disabled:u.disabled},null,8,["HsKey","echo","disabled"]),u.disabled?W("",!0):(V(),C("h4",P,"选中范围："+M(m.value),1))]),_:2},1024))),128))])}}});const ee=X(Y,[["__scopeId","data-v-2c78a51a"]]);export{ee as default};
