import{t as s}from"./data.js";import{d as b,r as l,f as c,o as g,c as v,j as o,u,a as w,w as p,i as d}from"./index.js";const h={style:{"margin-top":"20px"}},B=b({__name:"radio",setup(k){const n=l(),i=l(),a=t=>{const{setCurrentRow:e}=n.value.getTableRef();e(t)},_=t=>{i.value=t},f=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const m=c("pure-table"),r=c("el-button");return g(),v("div",null,[o(m,{ref_key:"tableRef",ref:n,data:u(s),columns:f,"highlight-current-row":"",onPageCurrentChange:_},null,8,["data"]),w("div",h,[o(r,{onClick:e[0]||(e[0]=C=>a(u(s)[1]))},{default:p(()=>[d("Select second row")]),_:1}),o(r,{onClick:e[1]||(e[1]=C=>a())},{default:p(()=>[d("Clear selection")]),_:1})])])}}});export{B as _};
