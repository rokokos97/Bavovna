"use strict";(self.webpackChunkpet_project_frontend=self.webpackChunkpet_project_frontend||[]).push([[940],{9940:(e,s,r)=>{r.r(s),r.d(s,{default:()=>U});var a=r(5043);const l="RegisterForm_registerForm__sAOEi",o="RegisterForm_registerForm__titleBlock__In+b-",i="RegisterForm_registerForm__errorMessagesBlock__QlzBU",n="RegisterForm_registerForm__backToSignIn__VpIgO",t="RegisterForm_registerForm__backToSignInLink__hnk9+";var c=r(3516),d=r(3216),m=r(5475),_=r(5137),g=r(5993),h=r(5447),u=r(4110),p=r(347),x=r(6964);const j="ModalVerifyEmail_modalVerifyEmail__Bnc5b",k="ModalVerifyEmail_modalVerifyEmail__closeButton__GLs+p",B="ModalVerifyEmail_modalVerifyEmail__content__pN1Jd";var f=r(7712),v=r(579);const F=e=>{let{handleCloseModal:s,email:r}=e;return(0,v.jsxs)("div",{className:j,"data-testid":"ModalVerifyEmail",children:[(0,v.jsx)("button",{className:k,type:"button","aria-label":"close modal window",onClick:s,children:(0,v.jsx)(f.A,{})}),(0,v.jsxs)("p",{className:B,children:["We have sent an e-mail to ",r," please click on the link to confirm your e-mail address."]})]})};var b=r(5842);const N="RegisterFormBlock_registerFormBlock__P9VNj",C="RegisterFormBlock_registerFormBlock__form__Zwx9V",w="RegisterFormBlock_termsLink__oEgQ9",S="RegisterFormBlock_registerFormBlock__button__RJHO2",R="RegisterFormBlock_registerFormBlock__socialButtonsBlock__XOcCf",y="RegisterFormBlock_registerFormBlock__divider__JkGof",A="RegisterFormBlock_registerFormBlock__buttonsBlock__rs2dk",E="RegisterFormBlock_registerFormBlock__googleButton__pZazu",V="RegisterFormBlock_registerFormBlock__socialIcon__KhPVH";var I=r(1837),M=r(6224),P=r(3451),G=r(4920);const L=e=>{let{formik:s,googleRegister:r,isRegularSignUp:a,isGoogleSignUp:l}=e;const o=(0,_.d4)(g.om);return(0,v.jsxs)("section",{className:N,"data-testid":"RegisterFormBlock",children:[(0,v.jsxs)("form",{className:C,onSubmit:s.handleSubmit,children:[(0,v.jsx)(I.A,{label:"First name",name:"firstName",placeholder:"Enter your first name",value:s.values.firstName,onChange:s.handleChange,onBlur:s.handleBlur,error:s.errors.firstName,touched:s.touched,isSubmiting:s.isSubmitting}),(0,v.jsx)(I.A,{label:"Last name",name:"lastName",placeholder:"Enter your last name",value:s.values.lastName,onChange:s.handleChange,onBlur:s.handleBlur,error:s.errors.lastName,touched:s.touched}),(0,v.jsx)(I.A,{label:"Email",name:"email",placeholder:"example@ex.com",value:s.values.email.toLowerCase(),onChange:s.handleChange,onBlur:s.handleBlur,error:s.errors.email,touched:s.touched}),(0,v.jsx)(I.A,{type:"password",label:"Password",name:"password",placeholder:"**********",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,error:s.errors.password,touched:s.touched}),(0,v.jsx)(I.A,{type:"password",label:"Confirm password",name:"confirmPassword",placeholder:"**********",value:s.values.confirmPassword,onChange:s.handleChange,onBlur:s.handleBlur,error:s.errors.confirmPassword,touched:s.touched}),(0,v.jsxs)(M.A,{name:"license",value:s.values.license,onChange:s.handleChange,error:s.errors.license,children:["I agree to the\xa0",(0,v.jsx)(m.k2,{className:w,target:"_blank",title:"terms and conditions","aria-label":"open terms and conditions",to:"/help/faq",children:"Terms and conditions of use."})]}),(0,v.jsx)("button",{type:"submit",disabled:!s.isValid,className:S,children:o&&a?(0,v.jsx)(P.A,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{children:"Sign up"}),(0,v.jsx)("div",{})]})})]}),(0,v.jsxs)("div",{className:R,children:[(0,v.jsxs)("div",{className:y,children:[(0,v.jsx)("div",{}),(0,v.jsx)("span",{children:"or"}),(0,v.jsx)("div",{})]}),(0,v.jsxs)("div",{className:A,children:[(0,v.jsx)("div",{id:"signUpDiv"}),(0,v.jsx)("button",{className:E,type:"button",onClick:()=>r(),children:o&&l?(0,v.jsx)(P.A,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:V,children:(0,v.jsx)(G.A,{})}),(0,v.jsx)("span",{children:"Sign up with Google"})]})})]})]})]})};var O=r(5732);const U=()=>{const e=(0,_.wA)(),s=(0,_.d4)(g.vG),r=(0,_.d4)(g.mi),j=(0,d.Zp)(),k=(0,O.A)(s),[B,f]=(0,a.useState)(!1),[N,C]=(0,a.useState)(!1),[w,S]=(0,a.useState)(!1),[R,y]=(0,a.useState)(null),A=(0,c.Wx)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",license:!1},validationSchema:u.sO,onSubmit:s=>{f(!0),C(!1),y(s.email),e((0,g.Wd)({...s,email:s.email.toLowerCase()})).then((()=>{f(!0)})),A.resetForm()}}),E=(0,h.mg)({onSuccess:s=>{const r=s.access_token;p.A.get(r).then((s=>{e((0,g.i7)({firstName:s.given_name,lastName:s.family_name,email:s.email}))}))}}),V=()=>{S(!1),(0,b.u)(),j("/signIn")};return(0,a.useEffect)((()=>{r&&201===r.code&&(S(!0),(0,b.z)(),A.resetForm())}),[r]),(0,v.jsxs)("article",{className:l,children:[(0,v.jsxs)("section",{className:o,children:[(0,v.jsx)("p",{children:"Sign up"}),(0,v.jsx)("p",{children:"Welcome! Please enter your details"})]}),k?(0,v.jsx)("div",{className:i,children:(0,v.jsx)("p",{children:k})}):null,(0,v.jsx)(L,{formik:A,googleRegister:E,isRegularSignUp:B,isGoogleSignUp:N}),(0,v.jsxs)("p",{className:n,children:["Already have an account?\xa0",(0,v.jsx)(m.k2,{to:"/signIn",title:"go to sign in page","aria-label":"go to sign ip page",className:t,children:(0,v.jsx)("span",{children:"Sign in"})})]}),(0,v.jsx)(x.a,{isOpen:w,handleCloseModal:V,children:(0,v.jsx)(F,{handleCloseModal:V,email:R})})]})}}}]);
//# sourceMappingURL=940.cdcf3731.chunk.js.map