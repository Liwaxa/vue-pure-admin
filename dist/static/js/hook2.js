import{ak as f,r as l,b as F,j as T,f as W,bE as x,bH as H,m as o,b6 as j,a5 as L,Q as P}from"./index.js";import{_ as Y}from"./form.vue_vue_type_script_setup_true_lang3.js";import{a as B}from"./system.js";import{u as I}from"./hooks2.js";function E(){const r=f({name:"",code:"",status:""}),c=l(),m=l([]),i=l(!0),t=l({}),{switchStyle:g}=I(),s=f({total:0,pageSize:10,currentPage:1,background:!0}),p=[{label:"角色编号",prop:"id",minWidth:100},{label:"角色名称",prop:"name",minWidth:120},{label:"角色标识",prop:"code",minWidth:150},{label:"状态",minWidth:130,cellRenderer:e=>{var a;return T(W("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(a=t.value[e.index])==null?void 0:a.loading,modelValue:e.row.status,"onUpdate:modelValue":u=>e.row.status=u,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:g.value,onChange:()=>h(e)},null)}},{label:"备注",prop:"remark",minWidth:150},{label:"创建时间",minWidth:180,prop:"createTime",formatter:({createTime:e})=>x(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:240,slot:"operation"}];function h({row:e,index:a}){H.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.name}</strong>吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{t.value[a]=Object.assign({},t.value[a],{loading:!0}),setTimeout(()=>{t.value[a]=Object.assign({},t.value[a],{loading:!1}),o(`已${e.status===0?"停用":"启用"}${e.name}`,{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function v(e){o(`您删除了角色名称为${e.name}的这条数据`,{type:"success"}),n()}function b(e){}function y(e){}function C(e){}async function n(){i.value=!0;const{data:e}=await B(j(r));m.value=e.list,s.total=e.total,s.pageSize=e.pageSize,s.currentPage=e.currentPage,setTimeout(()=>{i.value=!1},500)}const S=e=>{e&&(e.resetFields(),n())};function D(e="新增",a){L({title:`${e}角色`,props:{formInline:{name:(a==null?void 0:a.name)??"",code:(a==null?void 0:a.code)??"",remark:(a==null?void 0:a.remark)??""}},width:"40%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>P(Y,{ref:c}),beforeSure:(u,{options:R})=>{const $=c.value.getRef(),k=R.props.formInline;function d(){o(`您${e}了角色名称为${k.name}的这条数据`,{type:"success"}),u(),n()}$.validate(z=>{z&&d()})}})}function M(){o("等菜单管理页面开发后完善")}return F(()=>{n()}),{form:r,loading:i,columns:p,dataList:m,pagination:s,onSearch:n,resetForm:S,openDialog:D,handleMenu:M,handleDelete:v,handleSizeChange:b,handleCurrentChange:y,handleSelectionChange:C}}export{E as useRole};
