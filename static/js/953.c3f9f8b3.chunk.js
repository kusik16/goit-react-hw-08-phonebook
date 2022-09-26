"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{2953:function(e,a,r){r.r(a),r.d(a,{default:function(){return g}});var s=r(885),i=r(2791),n=r(3504),t=r(6871),l=r(5705),o=r(3978),m=r(7205),d=r(3793),c=r(8723),u=r(5953),h=r(6015),x=r(403),p=r(4565),f=r(803),N=r(2733),Z=r(1089),w=Z.Ry({firstName:Z.Z_().min(2,"First Name should contain 2-60 characters").max(60,"First Name should contain 2-60 characters").required("First Name is required"),lastName:Z.Z_().min(2,"Last Name should contain 2-60 characters").max(60,"Last Name should contain 2-60 characters").required("Last Name is required"),email:Z.Z_().email("Invalid email").required("Email is required"),password:Z.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),j=r(184);function g(){var e=(0,N.OE)(),a=(0,s.Z)(e,1)[0],r=(0,i.useState)(null),Z=(0,s.Z)(r,2),g=Z[0],v=Z[1],b=(0,t.s0)(),C=(0,l.TA)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:w,onSubmit:function(e){var a=e.firstName,r=e.lastName,s=e.email,i=e.password;P({firstName:a,lastName:r,email:s,password:i})}}),P=function(e){v("");var r=e.firstName,s=e.lastName,i=e.email,n=e.password,t={name:"".concat(r," ").concat(s),email:i,password:n};a(t).unwrap().then((function(e){return localStorage.setItem("token",e.token)})).then((function(){return b("/contacts")})).catch((function(e){400===e.status?v("Invalid signup data"):v("Something went wrong...")}))};return(0,j.jsxs)(f.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(d.ZP,{}),(0,j.jsxs)(h.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(o.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,j.jsx)(x.Z,{})}),(0,j.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,j.jsxs)(h.Z,{component:"form",sx:{mt:3},onSubmit:C.handleSubmit,children:[(0,j.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(c.Z,{fullWidth:!0,name:"firstName",id:"firstName",label:"First Name",autoFocus:!0,value:C.values.firstName,onChange:C.handleChange,error:Boolean(C.errors.firstName),helperText:C.errors.firstName})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(c.Z,{fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoFocus:!0,value:C.values.lastName,onChange:C.handleChange,error:Boolean(C.errors.lastName),helperText:C.errors.lastName})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(c.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:C.values.email,onChange:C.handleChange,error:Boolean(C.errors.email),helperText:C.errors.email})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(c.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:C.values.password,onChange:C.handleChange,error:Boolean(C.errors.password),helperText:C.errors.password})})]}),(0,j.jsx)(m.Z,{disabled:!(C.isValid&&C.dirty),type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,j.jsx)(u.ZP,{container:!0,justifyContent:"flex-end",children:(0,j.jsx)(u.ZP,{item:!0,children:(0,j.jsx)(n.rU,{to:"/login",children:"Already have an account? Sign in"})})})]})]}),g&&(0,j.jsx)("div",{children:g})]})}}}]);
//# sourceMappingURL=953.c3f9f8b3.chunk.js.map