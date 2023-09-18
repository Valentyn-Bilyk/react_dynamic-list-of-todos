(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),d=c(8),i=c(1),o=(c(13),c(14),c(4)),r=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=c===e;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:n&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":!l,"fa-eye-slash":l})})})})})]},t)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.selectedOption,n=e.setSelectedOption;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(e.target.value)},children:Object.entries(s).map((function(e){var t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("option",{value:s,children:c},c)}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(""),n(s.All)}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],o=Object(i.useState)(!0),u=Object(l.a)(o,2),b=u[0],O=u[1];return Object(i.useEffect)((function(){var e;t&&(e=null===t||void 0===t?void 0:t.userId,h("/users/".concat(e))).then(d).finally((function(){return O(!1)}))})),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(m,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:r()({"has-text-danger":!(null!==t&&void 0!==t&&t.completed),"has-text-success":null===t||void 0===t?void 0:t.completed}),children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})};var x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),o=Object(l.a)(n,2),r=o[0],x=o[1],f=Object(i.useState)(!0),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(""),g=Object(l.a)(y,2),S=g[0],k=g[1],T=Object(i.useState)(""),C=Object(l.a)(T,2),w=C[0],_=C[1];Object(i.useEffect)((function(){h("/todos").then(a).finally((function(){return N(!1)}))}));var A=function(e,t,c){var a=Object(d.a)(e);if(c&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),t)switch(t){case s.Active:return a.filter((function(e){return!e.completed}));case s.Completed:return a.filter((function(e){return e.completed}));default:return a}return a}(c,S,w);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:w,setQuery:_,selectedOption:S,setSelectedOption:k})}),Object(j.jsx)("div",{className:"block",children:p?Object(j.jsx)(m,{}):Object(j.jsx)(u,{todos:A,selectedTodo:r,setSelectedTodo:x})})]})})}),r&&Object(j.jsx)(O,{selectedTodo:r,setSelectedTodo:x})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.10f64aea.chunk.js.map