(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{238:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("c6638966",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(238)},253:function(t,e,n){var o=n(51)(!1);o.push([t.i,"button[data-v-67ddf998]{outline:none}.highlight-underline[data-v-67ddf998]{--bg-opacity:1;background-color:#41b883;background-color:rgba(65,184,131,var(--bg-opacity));position:absolute;bottom:-2px;height:2px;transition:left .15s,width .15s}.code-group[data-v-67ddf998]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}",""]),t.exports=o},277:function(t,e,n){"use strict";n.r(e);n(27),n(11);var o={data:function(){return{tabs:[],activeTabIndex:0}},watch:{activeTabIndex:function(t,e){this.switchTab(t)}},mounted:function(){this.tabs=this.$slots.default.filter((function(slot){return Boolean(slot.componentOptions)})).map((function(slot){return{label:slot.componentOptions.propsData.label,elm:slot.elm}})),this.$nextTick(this.updateHighlighteUnderlinePosition)},methods:{switchTab:function(i){this.tabs.forEach((function(t){t.elm.classList.remove("active")})),this.tabs[i].elm.classList.add("active")},updateTabs:function(i){this.activeTabIndex=i,this.updateHighlighteUnderlinePosition()},updateHighlighteUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.width="".concat(t.clientWidth,"px")}}}},r=(n(252),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group"},[n("div",{staticClass:"rounded-t-md border-b-2 border-gray-700 px-2 bg-gray-800 text-sm text-white relative"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:label,ref:"tabs",refInFor:!0,staticClass:"px-4 py-3 text-gray-400 font-bold font-mono",class:[t.activeTabIndex===i&&"active"],on:{click:function(e){return t.updateTabs(i)}}},[t._v(t._s(label))])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"highlight-underline"})],2),t._v(" "),t._t("default")],2)}),[],!1,null,"67ddf998",null);e.default=component.exports}}]);