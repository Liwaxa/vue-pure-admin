import{S as m}from"./sortable.esm.js";import{r as o,K as i,b,p as t}from"./index.js";import{a as v}from"./data2.js";function S(){const l=o(i(v,!0)),e=o([{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}]),p=o([{label:"ID",prop:a=>e.value[a].prop},{label:"日期",prop:a=>e.value[a].prop},{label:"姓名",prop:a=>e.value[a].prop}]),n=a=>{a.preventDefault(),t(()=>{const s=document.querySelector(".el-table__header-wrapper tr");m.create(s,{animation:300,delay:0,onEnd:({newIndex:u,oldIndex:r})=>{const c=e.value[r];e.value.splice(r,1),e.value.splice(u,0,c)}})})};return b(()=>{t(()=>{n(event)})}),{columns:p,dataList:l,columnsDrag:e}}export{S as useColumns};
