import{d as e}from"./data.js";import{d as m,f as a,o as d,h as _,w as o,j as g,u as t,a as i}from"./index.js";const u=i("video",{width:"180",height:"180",controls:""},[i("source",{src:"https://yiming_chang.gitee.io/pure-admin-doc/video/url.mov",type:"video/mp4"})],-1),x=m({__name:"imgPreview",setup(v){const s=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"视频",slot:"video"},{label:"图像",slot:"image"}];return(h,b)=>{const r=a("el-image"),l=a("pure-table");return d(),_(l,{data:t(e),columns:s},{video:o(()=>[u]),image:o(({row:n,index:p})=>[g(r,{"preview-teleported":"",loading:"lazy",src:n.image,"preview-src-list":t(e).map(c=>c.image),"initial-index":p,fit:"cover",class:"w-[100px] h-[100px]"},null,8,["src","preview-src-list","initial-index"])]),_:1},8,["data"])}}});export{x as _};
