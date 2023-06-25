import{u as d}from"./index-026bd28f.js";import{u as b}from"./hooks-82c6b5e4.js";import{d as h}from"./iphone-bcaa848c.js";import{d as k,H as u,a,c as j,w as t,o as l,e as o,h as n,i as v,q as _,f as x,t as w,F as g,s as q,v as B,_ as C}from"./index-ceadd577.js";const f=i=>(q("data-v-ab6caab2"),i=i(),B(),i),I=f(()=>o("div",{class:"card-header"},[o("span",{class:"font-medium"},"时间线")],-1)),S={class:"flex"},T=f(()=>o("div",{class:"message"}," vue-pure-admin是基于Vue3.0+TypeScript+Vite+Element-Plus编写的一套后台管理系统 ",-1)),V=k({name:"TimeLine",__name:"timeline",setup(i){const{lastBuildTime:s}={pkg:{dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.0.7","@logicflow/core":"^1.2.9","@logicflow/extension":"^1.2.9","@pureadmin/descriptions":"^1.1.1","@pureadmin/table":"^2.3.2","@pureadmin/utils":"^1.9.6","@vueuse/core":"^10.2.0","@vueuse/motion":"^2.0.0","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","animate.css":"^4.1.1",axios:"^1.4.0","china-area-data":"^5.0.1",cropperjs:"^1.5.13",dayjs:"^1.11.8",echarts:"^5.4.2","el-table-infinite-scroll":"^3.0.1","element-plus":"^2.3.7","intro.js":"^7.0.1","js-cookie":"^3.0.5",jsbarcode:"^3.11.5","md-editor-v3":"2.7.2","mint-filter":"^4.0.3",mitt:"^3.0.0",mockjs:"^1.1.0",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.1.4","pinyin-pro":"^3.15.2",qrcode:"^1.5.3",qs:"^6.11.2","responsive-storage":"^2.2.0",sortablejs:"^1.15.0",swiper:"^9.4.1",typeit:"^8.7.1","v-contextmenu":"3.0.0","v3-infinite-loading":"^1.2.2","version-rocket":"^1.6.7",vue:"^3.3.4","vue-i18n":"^9.2.2","vue-json-pretty":"^2.2.4","vue-pdf-embed":"^1.1.6","vue-router":"^4.2.2","vue-tippy":"^6.2.0","vue-types":"^5.1.0","vue-virtual-scroller":"2.0.0-beta.7","vue-waterfall-plugin-next":"^2.2.1","vue3-danmaku":"^1.4.0",vuedraggable:"^4.1.0",xgplayer:"^3.0.4",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^17.6.6","@commitlint/config-conventional":"^17.6.6","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.9","@iconify/vue":"^4.1.1","@intlify/unplugin-vue-i18n":"^0.11.0","@pureadmin/theme":"^3.1.0","@types/intro.js":"^5.1.1","@types/js-cookie":"^3.0.3","@types/mockjs":"^1.0.7","@types/node":"^18.16.18","@types/nprogress":"0.2.0","@types/qrcode":"^1.5.0","@types/qs":"^6.9.7","@types/sortablejs":"^1.15.1","@typescript-eslint/eslint-plugin":"^5.60.0","@typescript-eslint/parser":"^5.60.0","@vitejs/plugin-vue":"^4.2.3","@vitejs/plugin-vue-jsx":"^3.0.1","@vue/eslint-config-prettier":"^7.1.0","@vue/eslint-config-typescript":"^11.0.3",autoprefixer:"^10.4.14",cloc:"^2.11.0",cssnano:"^6.0.1",eslint:"^8.43.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.15.1",husky:"^8.0.3","lint-staged":"^13.2.2",picocolors:"^1.0.0",postcss:"^8.4.24","postcss-html":"^1.5.0","postcss-import":"^15.1.0","postcss-scss":"^4.0.6",prettier:"^2.8.8","pretty-quick":"^3.1.3",rimraf:"^5.0.1","rollup-plugin-visualizer":"^5.9.2",sass:"^1.63.6","sass-loader":"^13.3.2",stylelint:"^15.9.0","stylelint-config-html":"^1.1.0","stylelint-config-recess-order":"^4.2.0","stylelint-config-recommended":"^12.0.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^33.0.0","stylelint-config-standard-scss":"^9.0.0","stylelint-order":"^6.0.3","stylelint-prettier":"^3.0.0","stylelint-scss":"^5.0.1",svgo:"^3.0.2",tailwindcss:"^3.3.2",terser:"^5.18.1",typescript:"5.0.4",vite:"^4.3.9","vite-plugin-cdn-import":"^0.3.5","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"2.9.6","vite-plugin-remove-console":"^2.1.1","vite-svg-loader":"^4.0.0","vue-eslint-parser":"^9.3.1","vue-tsc":"^1.8.1"},name:"vue-pure-admin",version:"4.4.0"},lastBuildTime:"2023-06-25 18:38:46"},c=[{content:"支持圆点闪动",timestamp:s,icon:u(d())},{content:"支持方形闪动",timestamp:s,icon:u(d({borderRadius:0,background:"#67C23A"}))},{content:"支持默认颜色",timestamp:s},{content:"支持自定义颜色",timestamp:s,color:"#F56C6C"},{content:"支持自定义图标",timestamp:s,color:"transparent",icon:b(h,{color:"#0bbd87"})}];return(F,R)=>{const p=a("el-timeline-item"),m=a("el-timeline"),y=a("el-card");return l(),j(y,{shadow:"never"},{header:t(()=>[I]),default:t(()=>[o("div",S,[n(m,null,{default:t(()=>[(l(),v(g,null,_(c,(e,r)=>n(p,{key:r,icon:e.icon,color:e.color,timestamp:e.timestamp},{default:t(()=>[x(w(e.content),1)]),_:2},1032,["icon","color","timestamp"])),64))]),_:1}),n(m,{class:"pl-40"},{default:t(()=>[(l(),v(g,null,_(c,(e,r)=>n(p,{key:r,icon:e.icon,color:e.color,timestamp:e.timestamp,placement:"bottom"},{default:t(()=>[T]),_:2},1032,["icon","color","timestamp"])),64))]),_:1})])]),_:1})}}});const z=C(V,[["__scopeId","data-v-ab6caab2"]]);export{z as default};
