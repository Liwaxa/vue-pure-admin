import{d as b,E as k,r as w,bz as u,f as a,o as d,h as C,w as t,j as s,I as i,i as V,a as m,t as x,c as B,F as S,q as z,bv as P,L as N,bJ as U}from"./index.js";const j={class:"card-header"},H=b({name:"PermissionPage",__name:"index",setup(E){var n;const o=k(()=>({width:"85vw",justifyContent:"start"})),l=w((n=u())==null?void 0:n.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:l.value,password:"admin123"}).then(r=>{r.success&&(P().removeItem("async-routes"),N().clearAllCachePage(),U())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),y=a("el-select"),g=a("el-card"),h=a("el-space");return d(),C(h,{direction:"vertical",size:"large"},{default:t(()=>[s(v,{style:i(o.value),size:"large",effect:"dark"},{default:t(()=>[V(" 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ")]),_:1},8,["style"]),s(g,{shadow:"never",style:i(o.value)},{header:t(()=>[m("div",j,[m("span",null,"当前角色："+x(l.value),1)])]),default:t(()=>[s(y,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),onChange:p},{default:t(()=>[(d(),B(S,null,z(_,e=>s(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{H as default};
