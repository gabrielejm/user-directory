(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),i=n(13),a=n.n(i),o=(n(20),n(21),n(3)),j=(n(22),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"header-top",children:Object(c.jsxs)("div",{className:"header-text",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("p",{children:"Click on Name to filter alphabetically or use the search box to narrow your results!"})]})})})}),l=(n(23),function(e){var t=e.users,n=e.sortbyName;return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Image"}),Object(c.jsx)("th",{onClick:function(){return n()},children:"Name"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Dob"})]})}),Object(c.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.name,r=e.picture,s=e.phone,i=e.email,a=e.dob;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:r.medium})}),Object(c.jsxs)("td",{children:[n.first," ",n.last]}),Object(c.jsx)("td",{children:s}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:a.date})]},t.uuid)})):Object(c.jsx)(c.Fragment,{})})]})})}),u=(n(24),function(e){var t=e.handleChange;return console.log(t),Object(c.jsx)("div",{className:"div",children:Object(c.jsx)("form",{className:"size",children:Object(c.jsx)("input",{className:"form-control",onChange:function(e){return t(e)},type:"text",placeholder:"Search employees"})})})}),d=n(14),b=n.n(d),h=function(){return b.a.get("https://randomuser.me/api/?results=200&nat=us")},O=function(){var e=Object(r.useState)([{}]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)([{}]),a=Object(o.a)(i,2),d=a[0],b=a[1],O=Object(r.useState)(n),x=Object(o.a)(O,2),f=(x[0],x[1]),m=Object(r.useState)(),p=Object(o.a)(m,2);p[0],p[1];Object(r.useEffect)((function(){h().then((function(e){s(e.data.results),b(e.data.results)})).catch((function(e){return console.log(e)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{}),Object(c.jsx)(u,{handleChange:function(e){var t=e.target.value,c=n.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));b(c)}}),Object(c.jsx)(l,{users:d,sortbyName:function(){var e=n.sort((function(e,t){var n=e.name.first,c=t.name.first,r=n.toUpperCase(),s=c.toUpperCase();return r<s?-1:r>s?1:0}));f(e),console.log(e)}})]})};var x=function(){return Object(c.jsx)(O,{})},f=(n(43),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))});a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.67b75822.chunk.js.map