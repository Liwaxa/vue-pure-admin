import{useColumns as d}from"./columns14.js";import{d as _,r as f,f as n,o as w,h as g,w as k,a as y,j as C,u as e,aA as h}from"./index.js";const R={class:"w-[600px] m-4"},B=_({__name:"index",setup(V){const t=f(),{columns:s,pagination:o,selectValue:a,tableDataEdit:r,rowStyle:c,onRowClick:i}=d(t);return(b,l)=>{const p=n("pure-table"),u=n("el-select");return w(),g(u,{ref_key:"selectRef",ref:t,modelValue:e(a),"onUpdate:modelValue":l[0]||(l[0]=m=>h(a)?a.value=m:null),placeholder:"请选择",clearable:""},{empty:k(()=>[y("div",R,[C(p,{height:"355","row-key":"id","header-cell-style":{background:"#f5f7fa",color:"#303133"},"row-style":e(c),data:e(r).slice((e(o).currentPage-1)*e(o).pageSize,e(o).currentPage*e(o).pageSize),columns:e(s),pagination:e(o),onRowClick:e(i)},null,8,["row-style","data","columns","pagination","onRowClick"])])]),_:1},8,["modelValue"])}}});export{B as _};
