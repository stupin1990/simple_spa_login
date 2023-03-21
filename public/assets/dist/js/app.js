(function(){"use strict";var r={812:function(r,e,s){var t=s(9242),o=s(3396),a=s(7139);const n={class:"navbar navbar-expand-lg bg-body-tertiary"},i={class:"container"},l=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),d={ref:"ref1",class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},m={key:0,class:"nav-item"},c={key:1,class:"nav-item"},p={key:2,class:"nav-item"},f={class:"container mt-2"},g={key:0,class:"alert alert-danger alert-dismissible mt-4",role:"alert"},w=["innerHTML"],b={key:1,class:"alert alert-success alert-dismissible mt-4",role:"alert"},v=(0,o._)("div",null,"You was successfully verified, now please log in!",-1),h=[v],_={key:2,class:"alert alert-success alert-dismissible mt-4",role:"alert"},y=(0,o._)("div",null,"Email with changing password link was successfully sent!",-1),k=[y],q={key:3,class:"alert alert-success alert-dismissible mt-4",role:"alert"},D=(0,o._)("div",null,"Your password was successfully changed, please log in!",-1),T=[D],F={key:4},L={key:5};function M(r,e,s,t,v,y){const D=(0,o.up)("router-link"),M=(0,o.up)("register-form"),O=(0,o.up)("login-form"),R=(0,o.up)("forgot-form"),U=(0,o.up)("reset-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("header",null,[(0,o._)("nav",n,[(0,o._)("div",i,[(0,o.Wm)(D,{class:"navbar-brand",to:"/",onClick:e[0]||(e[0]=r=>y.setForm("login"))},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(v.title),1)])),_:1}),l,(0,o._)("div",d,[(0,o._)("ul",u,[v.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("li",m,[(0,o.Wm)(D,{class:"nav-link",to:"/",onClick:e[1]||(e[1]=r=>y.setForm("login"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})])),v.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("li",c,[(0,o.Wm)(D,{class:"nav-link",to:"/registration",onClick:e[2]||(e[2]=r=>y.setForm("registration"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Registration")])),_:1})])),v.user?((0,o.wg)(),(0,o.iD)("li",p,[(0,o._)("a",{class:"nav-link","aria-current":"page",href:"#",onClick:e[3]||(e[3]=r=>y.logOut())},"Logout")])):(0,o.kq)("",!0)])],512)])])]),(0,o._)("div",f,[v.error?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("div",{innerHTML:v.error},null,8,w)])):(0,o.kq)("",!0),v.verified?((0,o.wg)(),(0,o.iD)("div",b,h)):(0,o.kq)("",!0),v.forgoted?((0,o.wg)(),(0,o.iD)("div",_,k)):(0,o.kq)("",!0),v.reseted?((0,o.wg)(),(0,o.iD)("div",q,T)):(0,o.kq)("",!0),v.user?((0,o.wg)(),(0,o.iD)("div",F," Hello "+(0,a.zw)(v.user)+"! ",1)):((0,o.wg)(),(0,o.iD)("div",L,["registration"==v.current_form?((0,o.wg)(),(0,o.j4)(M,{key:0,options:v.options},null,8,["options"])):(0,o.kq)("",!0),"login"==v.current_form?((0,o.wg)(),(0,o.j4)(O,{key:1,options:v.options,onForget:e[4]||(e[4]=r=>y.setForm("forgot")),onLogged:y.setLogin},null,8,["options","onLogged"])):(0,o.kq)("",!0),"forgot"==v.current_form?((0,o.wg)(),(0,o.j4)(R,{key:2,options:v.options,onForgot:y.afterResetSend},null,8,["options","onForgot"])):(0,o.kq)("",!0),"reset"==v.current_form?((0,o.wg)(),(0,o.j4)(U,{key:3,options:v.options,code:v.code,onReset:y.afterPassReset},null,8,["options","code","onReset"])):(0,o.kq)("",!0)]))])])}var O=s(4161),R={data(){let r=window.$_data;return delete window.$_data,{title:r?.title,user:r?.user,options:{headers:{"X-CSRF-TOKEN":r?.csrf}},verified:r?.verified,current_form:r.form??"login",code:r?.code,reseted:!1,forgoted:!1,error:""}},methods:{setForm(r){this.current_form=r},setLogin(r){console.log(r),this.user=r,this.current_form=""},async logOut(){try{const r=await O.Z.post("/app/logout",this.user,this.options);r?.data?.status?(this.user=null,this.current_form="login"):r?.data?.error&&(this.error=r?.data?.error)}catch(r){this.error="There was some error!",r?.error&&(this.error=r)}},afterResetSend(){this.forgoted=!0,this.current_form="login"},afterPassReset(){this.reseted=!0,this.current_form="login"}}},U=s(89);const S=(0,U.Z)(R,[["render",M]]);var $=S;const C=(0,o._)("h1",null,"Register new user",-1),P={key:0,class:"alert alert-success alert-dismissible mt-4",role:"alert"},H=(0,o._)("div",null,"We've sent a confirmation link to your email, please go through it!",-1),j=[H],Z={key:1,class:"alert alert-danger alert-dismissible mt-4",role:"alert"},V=["innerHTML"],x={key:2,class:"card-20 mt-4"},E={class:"mb-3"},W=(0,o._)("label",{for:"name",class:"form-label"},"User name",-1),I={class:"mb-3"},N=(0,o._)("label",{for:"email",class:"form-label"},"User email",-1),z={class:"mb-3"},Y=(0,o._)("label",{for:"password",class:"form-label"},"Password",-1),K={class:"mb-3"},X=(0,o._)("label",{for:"password2",class:"form-label"},"Password repeat",-1),A={type:"submit",class:"btn btn-primary",ref:"submit"};function B(r,e,s,a,n,i){return(0,o.wg)(),(0,o.iD)("div",null,[C,n.confirmed?((0,o.wg)(),(0,o.iD)("div",P,j)):(0,o.kq)("",!0),n.error?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",{innerHTML:n.error},null,8,V)])):(0,o.kq)("",!0),n.confirmed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("form",{class:"mb-4",onSubmit:e[4]||(e[4]=(0,t.iM)((r=>i.sendRegister(r)),["prevent"]))},[(0,o._)("div",E,[W,(0,o.wy)((0,o._)("input",{type:"text",name:"name",class:"form-control",id:"name",value:"",required:"","onUpdate:modelValue":e[0]||(e[0]=r=>n.user.name=r)},null,512),[[t.nr,n.user.name]])]),(0,o._)("div",I,[N,(0,o.wy)((0,o._)("input",{type:"email",name:"email",class:"form-control",value:"",id:"email",required:"","onUpdate:modelValue":e[1]||(e[1]=r=>n.user.email=r)},null,512),[[t.nr,n.user.email]])]),(0,o._)("div",z,[Y,(0,o.wy)((0,o._)("input",{type:"password",name:"password",class:"form-control",value:"",id:"password",required:"","onUpdate:modelValue":e[2]||(e[2]=r=>n.user.password=r)},null,512),[[t.nr,n.user.password]])]),(0,o._)("div",K,[X,(0,o.wy)((0,o._)("input",{type:"password",name:"password2",class:"form-control",value:"",id:"password2",required:"","onUpdate:modelValue":e[3]||(e[3]=r=>n.user.password2=r)},null,512),[[t.nr,n.user.password2]])]),(0,o._)("button",A,"Submit",512)],32)]))])}var G={name:"register-form",props:["options"],data(){return{user:{name:"",email:"",password:"",password2:""},confirmed:!1,error:""}},methods:{async sendRegister(){this.$refs.submit.disabled=!0,this.error="",this.confirmed=!1;try{const r=await O.Z.post("/register",this.user,this.options);r?.data?.status?this.confirmed=!0:r?.data?.error&&(this.error=r?.data?.error)}catch(r){this.error=r.message??"There was some error!"}this.$refs.submit.disabled=!1}}};const J=(0,U.Z)(G,[["render",B]]);var Q=J;const rr=(0,o._)("h1",null,"Log In",-1),er={key:0,class:"alert alert-danger alert-dismissible mt-4",role:"alert"},sr=["innerHTML"],tr={class:"card-20 mt-4"},or={class:"mb-3"},ar=(0,o._)("label",{for:"email",class:"form-label"},"Email",-1),nr={class:"mb-1"},ir=(0,o._)("label",{for:"password",class:"form-label"},"Password",-1),lr={class:"mb-4"},dr={type:"submit",class:"btn btn-primary",ref:"submit"};function ur(r,e,s,a,n,i){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[rr,n.error?((0,o.wg)(),(0,o.iD)("div",er,[(0,o._)("div",{innerHTML:n.error},null,8,sr)])):(0,o.kq)("",!0),(0,o._)("div",tr,[(0,o._)("form",{class:"mb-4",onSubmit:e[3]||(e[3]=(0,t.iM)((r=>i.logIn(r)),["prevent"]))},[(0,o._)("div",or,[ar,(0,o.wy)((0,o._)("input",{type:"email",name:"email",class:"form-control",value:"",id:"email",required:"","onUpdate:modelValue":e[0]||(e[0]=r=>n.user.email=r)},null,512),[[t.nr,n.user.email]])]),(0,o._)("div",nr,[ir,(0,o.wy)((0,o._)("input",{type:"password",name:"password",class:"form-control",value:"",id:"password",required:"","onUpdate:modelValue":e[1]||(e[1]=r=>n.user.password=r)},null,512),[[t.nr,n.user.password]])]),(0,o._)("div",lr,[(0,o.Wm)(l,{to:"/forgot",onClick:e[2]||(e[2]=r=>i.showForgotForm())},{default:(0,o.w5)((()=>[(0,o.Uk)("Forgot password")])),_:1})]),(0,o._)("button",dr,"Submit",512)],32)])])}var mr={name:"login-form",props:["options"],data(){return{user:{email:"",password:""},error:""}},methods:{showForgotForm(){this.$emit("forget")},async logIn(){this.$refs.submit.disabled=!0,this.error="";try{const r=await O.Z.post("/app/login",this.user,this.options);r?.data?.status?this.$emit("logged",r?.data?.user):r?.data?.error&&(this.error=r?.data?.error)}catch(r){this.error=r.message??"There was some error!"}this.$refs.submit.disabled=!1}}};const cr=(0,U.Z)(mr,[["render",ur]]);var pr=cr;const fr=(0,o._)("h1",null,"Forgot password",-1),gr={key:0,class:"alert alert-danger alert-dismissible mt-4",role:"alert"},wr=["innerHTML"],br={class:"card-20 mt-4"},vr=(0,o._)("div",{class:"mb-3"}," Please enter your email and we send you a link for changing password. ",-1),hr={class:"mb-3"},_r=(0,o._)("label",{for:"email",class:"form-label"},"Email",-1),yr={type:"submit",class:"btn btn-primary",ref:"submit"};function kr(r,e,s,a,n,i){return(0,o.wg)(),(0,o.iD)("div",null,[fr,n.error?((0,o.wg)(),(0,o.iD)("div",gr,[(0,o._)("div",{innerHTML:n.error},null,8,wr)])):(0,o.kq)("",!0),(0,o._)("div",br,[(0,o._)("form",{class:"mb-4",onSubmit:e[1]||(e[1]=(0,t.iM)((r=>i.sendChangePass(r)),["prevent"]))},[vr,(0,o._)("div",hr,[_r,(0,o.wy)((0,o._)("input",{type:"email",name:"email",class:"form-control",value:"",id:"email",required:"","onUpdate:modelValue":e[0]||(e[0]=r=>n.email=r)},null,512),[[t.nr,n.email]])]),(0,o._)("button",yr,"Submit",512)],32)])])}var qr={name:"forgot-form",props:["options"],data(){return{email:"",error:""}},methods:{async sendChangePass(){this.$refs.submit.disabled=!0,this.error="";try{const r=await O.Z.post("/password/send",{email:this.email},this.options);r?.data?.status?this.$emit("forgot"):r?.data?.error&&(this.error=r?.data?.error)}catch(r){this.error=r.message??"There was some error!"}this.$refs.submit.disabled=!1}}};const Dr=(0,U.Z)(qr,[["render",kr]]);var Tr=Dr;const Fr=(0,o._)("h1",null,"Reset password",-1),Lr={key:0,class:"alert alert-danger alert-dismissible mt-4",role:"alert"},Mr=["innerHTML"],Or={class:"card-20 mt-4"},Rr={class:"mb-3"},Ur=(0,o._)("label",{for:"password",class:"form-label"},"New password",-1),Sr={class:"mb-3"},$r=(0,o._)("label",{for:"password2",class:"form-label"},"New password repeat",-1),Cr={type:"submit",class:"btn btn-primary",ref:"submit"};function Pr(r,e,s,a,n,i){return(0,o.wg)(),(0,o.iD)("div",null,[Fr,n.error?((0,o.wg)(),(0,o.iD)("div",Lr,[(0,o._)("div",{innerHTML:n.error},null,8,Mr)])):(0,o.kq)("",!0),(0,o._)("div",Or,[(0,o._)("form",{class:"mb-4",onSubmit:e[2]||(e[2]=(0,t.iM)((r=>i.sendResetPass(r)),["prevent"]))},[(0,o._)("div",Rr,[Ur,(0,o.wy)((0,o._)("input",{type:"password",name:"new_password",class:"form-control",value:"",id:"password",required:"","onUpdate:modelValue":e[0]||(e[0]=r=>n.user.password=r)},null,512),[[t.nr,n.user.password]])]),(0,o._)("div",Sr,[$r,(0,o.wy)((0,o._)("input",{type:"password",name:"password2",class:"form-control",value:"",id:"password2",required:"","onUpdate:modelValue":e[1]||(e[1]=r=>n.user.password2=r)},null,512),[[t.nr,n.user.password2]])]),(0,o._)("button",Cr,"Submit",512)],32)])])}var Hr={name:"reset-form",props:["options","code"],data(){return{user:{password:"",password2:"",code:this.code},error:""}},methods:{async sendResetPass(){this.$refs.submit.disabled=!0,this.error="";try{const r=await O.Z.post("/password/change",this.user,this.options);r?.data?.status?this.$emit("reset"):r?.data?.error&&(this.error=r?.data?.error)}catch(r){this.error=r.message??"There was some error!"}this.$refs.submit.disabled=!1}}};const jr=(0,U.Z)(Hr,[["render",Pr]]);var Zr=jr,Vr=[Q,pr,Tr,Zr],xr=s(678);const Er=[{path:"/",name:"Home",component:pr},{path:"/registration",name:"Register",component:Q},{path:"/forgot",name:"Forgot",component:Tr}],Wr=(0,xr.p7)({history:(0,xr.PO)(),routes:Er});var Ir=Wr;const Nr=(0,t.ri)($);Vr.forEach((r=>{Nr.component(r.name,r)})),Nr.use(Ir).mount("#app")}},e={};function s(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={exports:{}};return r[t](a,a.exports,s),a.exports}s.m=r,function(){var r=[];s.O=function(e,t,o,a){if(!t){var n=1/0;for(u=0;u<r.length;u++){t=r[u][0],o=r[u][1],a=r[u][2];for(var i=!0,l=0;l<t.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((function(r){return s.O[r](t[l])}))?t.splice(l--,1):(i=!1,a<n&&(n=a));if(i){r.splice(u--,1);var d=o();void 0!==d&&(e=d)}}return e}a=a||0;for(var u=r.length;u>0&&r[u-1][2]>a;u--)r[u]=r[u-1];r[u]=[t,o,a]}}(),function(){s.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return s.d(e,{a:e}),e}}(),function(){s.d=function(r,e){for(var t in e)s.o(e,t)&&!s.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){s.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};s.O.j=function(e){return 0===r[e]};var e=function(e,t){var o,a,n=t[0],i=t[1],l=t[2],d=0;if(n.some((function(e){return 0!==r[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var u=l(s)}for(e&&e(t);d<n.length;d++)a=n[d],s.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return s.O(u)},t=self["webpackChunkvue"]=self["webpackChunkvue"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(812)}));t=s.O(t)})();
//# sourceMappingURL=app.js.map