"use strict";(self.webpackChunkreact_homework_08=self.webpackChunkreact_homework_08||[]).push([[951],{951:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(791),a=t(434),s=t(634),c=t(135),i="Contact_deleteBtn__L35yB",u="Contact_contact__4zmlP",o=t(184),m=function(n){var e=n.id,t=n.number,r=n.name,m=(0,a.I0)();return(0,o.jsxs)("div",{className:u,children:[(0,o.jsxs)("p",{children:[r," : ",t]}),(0,o.jsx)("button",{className:i,type:"button",onClick:function(){return m((0,s.GK)(e))},children:(0,o.jsx)(c.Xm5,{})})]})},l=function(n){return n.contacts.loading},d=function(n){return n.contacts.items},f="ContactsList_contactLi__uiqdW",_=function(){var n=(0,a.v9)(d),e=(0,a.v9)((function(n){return n.filter}));return null!==e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){var e=n.id,t=n.name,r=n.number;return(0,o.jsx)("li",{className:f,children:(0,o.jsx)(m,{id:e,name:t,number:r})},e)})):n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,o.jsx)("li",{className:f,children:(0,o.jsx)(m,{id:e,name:t,number:r})},e)}))},x="ContactForm_formContainer__TWEE2",v="ContactForm_formInput__GszVU",j="ContactForm_formBtn__qZGY3",h="ContactForm_addSvg__XsigT",p=function(){var n=(0,a.I0)();return(0,o.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault();var t=e.target,r=t.name.value,a=t.number.value;n((0,s.uK)({name:r,number:a})),t.reset()},children:[(0,o.jsx)("input",{className:v,name:"name",placeholder:"Name"}),(0,o.jsx)("input",{className:v,name:"number",placeholder:"Number"}),(0,o.jsxs)("button",{className:j,type:"submit",children:["Add contact"," ",(0,o.jsx)("span",{className:h,children:(0,o.jsx)(c.wEH,{})})]})]})},b="FindContact_findDiv__dvpsG",C="FindContact_findInput__SzYBK",N=t(12),F=function(){var n=(0,a.I0)();return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:b,children:(0,o.jsx)("input",{className:C,placeholder:"Find contacts by name...",onChange:function(e){return n((0,N.x)(e.target.value))},type:"text"})})})},g=t(289);function k(){var n=(0,a.I0)(),e=(0,a.v9)(l);return(0,r.useEffect)((function(){n((0,s.yF)())}),[n]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{}),(0,o.jsxs)("div",{className:g.Z.findContainer,children:[(0,o.jsx)("div",{children:e&&"Request in progress..."}),(0,o.jsx)(_,{})]}),(0,o.jsx)(F,{})]})}}}]);
//# sourceMappingURL=951.4210bde6.chunk.js.map