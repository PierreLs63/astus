(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{415:function(t,e,o){"use strict";o.d(e,"c",(function(){return f})),o.d(e,"d",(function(){return m})),o.d(e,"a",(function(){return y})),o.d(e,"b",(function(){return x}));o(34);var n=o(71);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(n))}function l(t){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:arguments.length>2?arguments[2]:void 0},origin:{type:String,default:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0"}},render:function(e,o){var l="transition".concat(o.props.group?"-group":""),data={props:{name:t,mode:o.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=o.props.origin,t.style.webkitTransformOrigin=o.props.origin}}};return o.props.leaveAbsolute&&(data.on.leave=r(data.on.leave,(function(t){var e=t.offsetTop,o=t.offsetLeft,n=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=o+"px",t.style.width=n+"px",t.style.height=r+"px"})),data.on.afterLeave=r(data.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,o=e.position,n=e.top,r=e.left,l=e.width,c=e.height;delete t._transitionInitialStyles,t.style.position=o||"",t.style.top=n||"",t.style.left=r||"",t.style.width=l||"",t.style.height=c||""}}))),o.props.hideOnLeave&&(data.on.leave=r(data.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(l,Object(n.a)(o.data,data),o.children)}}}function c(t,e){return{name:t,functional:!0,props:{mode:{type:String,default:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"}},render:function(o,r){return o("transition",Object(n.a)(r.data,{props:{name:t},on:e}),r.children)}}}var h=o(2),v=o(1),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height",o="offset".concat(Object(v.s)(e));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(h.a)({transition:t.style.transition,overflow:t.style.overflow},e,t.style[e])},enter:function(n){var r=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";var l="".concat(n[o],"px");n.style[e]="0",n.offsetHeight,n.style.transition=r.transition,t&&n._parent&&n._parent.classList.add(t),requestAnimationFrame((function(){n.style[e]=l}))},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=Object(h.a)({transition:"",overflow:t.style.overflow},e,t.style[e]),t.style.overflow="hidden",t.style[e]="".concat(t[o],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[e]="0"}))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){var o=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,null!=o&&(t.style[e]=o),delete t._initialStyle}},f=(l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition"),l("tab-reverse-transition"),l("menu-transition"),l("fab-transition","center center","out-in"),l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition"),l("fade-transition")),m=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition")),y=(l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",d())),x=c("expand-x-transition",d("",!0))},419:function(t,e,o){var content=o(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("59b49814",content,!0,{sourceMap:!1})},420:function(t,e,o){var n=o(26)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:8px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:11px;font-size:12px;height:22px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),n.locals={},t.exports=n},429:function(t,e,o){"use strict";o(15),o(14),o(20),o(16),o(21);var n=o(11),r=o(2),l=(o(6),o(17),o(419),o(33)),c=o(415),h=o(191),v=o(88),d=o(193),f=o(69),m=o(124),y=o(156),x=o(125),_=o(12);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(v.a,x.a,y.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return C(C(C(C({"v-chip":!0},y.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(y.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var o=Object(n.a)(e,2),r=o[0],l=o[1];t.$attrs.hasOwnProperty(r)&&Object(_.a)(r,l,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),n=o.tag,data=o.data;data.attrs=C(C({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,data),e)}})},644:function(t,e,o){"use strict";o.r(e);var n=o(429),r=o(408),l=o(412),c=o(187),h=o(407),v={name:"UiChip",data:function(){return{}},methods:{}},d=o(49),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mini-spacer"},[e(l.a,[e(h.a,{attrs:{justify:"center"}},[e(r.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"ui-title font-weight-bold"},[t._v("Chip")]),t._v(" "),e("p",[t._v("\n              Here you can check Demos we created based on WrapKit. Its quite\n              easy to Create your own dream website & dashboard in No-time.\n            ")])])])],1)],1)],1),t._v(" "),e("div",[e(l.a,[e("div",{staticClass:"text-center"},[e(n.a,{staticClass:"ma-2"},[t._v(" Default ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"primary"}},[t._v(" primary ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"accent"}},[t._v(" accent ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"secondary"}},[t._v(" secondary ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"error","text-color":"white"}},[t._v(" error ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"success","text-color":"white"}},[t._v("\n          success\n        ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"warning","text-color":"white"}},[t._v("\n          warning\n        ")])],1),t._v(" "),e("div",{staticClass:"text-center mt-12"},[e(n.a,{staticClass:"ma-2",attrs:{color:"primary",label:""}},[t._v(" Label ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"accent",label:""}},[t._v(" Label ")]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"warning",label:"","text-color":"white"}},[e(c.a,{attrs:{left:""}},[t._v(" mdi-label ")]),t._v("\n          Tags\n        ")],1),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{color:"error",label:""}},[e(c.a,{attrs:{left:""}},[t._v(" mdi-account-circle-outline ")]),t._v("\n          John Leider\n        ")],1),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{close:"",color:"success",label:"","text-color":"white"}},[e(c.a,{attrs:{left:""}},[t._v(" mdi-twitter ")]),t._v("\n          New Tweets\n        ")],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);