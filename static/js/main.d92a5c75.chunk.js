(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{54:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(0),n=c(22),a=c.n(n),l=c(25),o=c(11),i=c(12),j=c(23),d=c.n(j),b=function(){return d.a.get("https://randomuser.me/api/?results=25")},h={form:{margin:30,marginTop:10,position:"relative"}};var m=function(e){return console.log(e),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-4"}),Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)("div",{style:h.form,children:Object(r.jsx)("form",{className:"form-inline",children:Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"Search",placeholder:"employee search","aria-label":"Search",onChange:e.onChange,style:h.form})})})}),Object(r.jsx)("div",{className:"col-md-4"})]})})})},O=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),l=Object(i.a)(a,2),j=l[0],d=l[1];Object(s.useEffect)((function(){b().then((function(e){console.log("results.data:",e.data),n(e.data.results),d(e.data.results)}))}),[]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{onChange:function(e){var t=e.target.value;if(console.log(e.target.value),""!==t){var r=Object(o.a)(j).filter((function(e){return e.name.first.toLowerCase().includes(t.toLowerCase())}));n(r)}else d(c)}}),Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Image"}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("a",{onClick:function(e){var t=Object(o.a)(c).sort((function(e,t){return e.name.first>t.name.first?1:-1}));n(t)},style:{color:"green",textAlign:"center"},children:"First Name"})}),Object(r.jsx)("th",{scope:"col",children:"Last Name"}),Object(r.jsx)("th",{scope:"col",children:"Email"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:e.picture.thumbnail})}),Object(r.jsx)("td",{children:e.name.first}),Object(r.jsx)("td",{children:e.name.last}),Object(r.jsx)("td",{children:e.email})]},e.email)}))})]})]})})},u=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{style:{backgroundColor:"#807b71",borderBottomWidth:10,borderBottomColor:"#cfccc8",borderBottomStyle:"solid",padding:20},children:Object(r.jsxs)("div",{className:"container",style:{color:"white",textAlign:"center",fontFamily:"Arial"},children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("h4",{children:"Click on filter by heading or use the search box to narrow your results."})]})})})};var x=function(){return Object(r.jsxs)(l.a,{basename:"/",children:[Object(r.jsx)(u,{}),Object(r.jsx)(O,{})]})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.d92a5c75.chunk.js.map