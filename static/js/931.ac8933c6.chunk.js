"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{7931:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var r=n(885),s=n(2791),i=n(3504),o=n(6871),t=n(5705),l=n(3978),d=n(7205),m=n(3793),u=n(8723),c=n(5953),h=n(6015),p=n(403),x=n(4565),w=n(803),f=n(2733),g=n(1089),v=g.Ry({email:g.Z_().email("Invalid email").required("Email is required"),password:g.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),Z=n(184);function j(){var e=(0,f.uf)(),a=(0,r.Z)(e,1)[0],n=(0,s.useState)(null),g=(0,r.Z)(n,2),j=g[0],b=g[1],S=(0,o.s0)(),k=(0,t.TA)({initialValues:{email:"",password:""},validationSchema:v,onSubmit:function(e){var a=e.email,n=e.password;C({email:a,password:n})}}),C=function(e){var n=e.email,r=e.password;a({email:n,password:r}).unwrap().then((function(e){return localStorage.setItem("token",e.token)})).then((function(){return S("/contacts")})).catch((function(e){400===e.status?b("Invalid signup data"):b("Something went wrong...")}))};return(0,Z.jsxs)(w.Z,{component:"main",maxWidth:"xs",children:[(0,Z.jsx)(m.ZP,{}),(0,Z.jsxs)(h.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(p.Z,{})}),(0,Z.jsx)(x.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,Z.jsxs)(h.Z,{component:"form",onSubmit:k.handleSubmit,sx:{mt:1},children:[(0,Z.jsx)(u.Z,{margin:"normal",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:k.values.email,onChange:k.handleChange,error:Boolean(k.errors.email),helperText:k.errors.email}),(0,Z.jsx)(u.Z,{margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:k.values.password,onChange:k.handleChange,error:Boolean(k.errors.password),helperText:k.errors.password}),(0,Z.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!(k.isValid&&k.dirty),children:"Sign In"}),(0,Z.jsx)(c.ZP,{container:!0,children:(0,Z.jsx)(c.ZP,{item:!0,children:(0,Z.jsx)(i.rU,{to:"/register",children:"Don't have an account? Sign Up"})})})]})]}),j&&(0,Z.jsx)("div",{children:j})]})}}}]);
//# sourceMappingURL=931.ac8933c6.chunk.js.map