(this.webpackJsonp1components=this.webpackJsonp1components||[]).push([[0],{1:function(t,n,e){t.exports={container:"PhoneBook_container__2lchy",form:"PhoneBook_form__annpn",label:"PhoneBook_label__ZNdLZ",input:"PhoneBook_input__1gcyU",btn:"PhoneBook_btn__ezaOG",contactList:"PhoneBook_contactList__31jl-",contactsItem:"PhoneBook_contactsItem__gPXnr",findField:"PhoneBook_findField__Eciez",findInput:"PhoneBook_findInput__1wY7j",listBtn:"PhoneBook_listBtn__shWsm"}},18:function(t,n,e){},25:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var a=e(2),c=e.n(a),o=e(11),i=e.n(o),s=(e(18),e(13)),r=e(3),l=e(4),u=e(7),d=e(6),h=e(12),m=e(5),b=e(9),j=e.n(b),f=e(1),p=e.n(f),O=e(0),_=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={name:"",number:""},t.handleNewValue=function(n){var e=n.target,a=e.value,c=e.name;t.setState(Object(m.a)({},c,a))},t.handleNewContact=function(){var n,e=t.state;t.props.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," already in contacts")):(n=Object(h.a)({id:j()()},e),t.props.handleSubmit(n)),t.setState({name:"",number:""})},t}return Object(l.a)(e,[{key:"render",value:function(){var t=this,n=this.props.options;return Object(O.jsxs)("form",{className:p.a.form,children:[n.map((function(n){return Object(O.jsxs)("label",{className:p.a.label,children:[n,Object(O.jsx)("input",{type:"text",name:n,value:t.state[n],onChange:t.handleNewValue,className:p.a.input},n)]},n)})),Object(O.jsx)("button",{onClick:this.handleNewContact,disabled:!this.state.name||!this.state.number,className:p.a.btn,children:"Add contact"})]})}}]),e}(a.Component),C=e(9),v=function(t){var n=t.contactsList,e=t.handleClick,a=function(t){return e(t.target.id)};return Object(O.jsx)("div",{className:p.a.contactList,children:Object(O.jsx)("ul",{children:n.map((function(t){return Object(O.jsxs)("li",{className:p.a.contactsItem,width:"70px",children:[t.name,": ",t.number,Object(O.jsx)("button",{id:t.id,onClick:a,className:p.a.listBtn,children:"X"})]},C())}))})})},x=function(t){var n=t.filterList,e=t.handleCnange;return Object(O.jsxs)("label",{className:p.a.findField,children:["Find contacts by name: ",Object(O.jsx)("input",{type:"text",name:"",value:n,onChange:e,className:p.a.findInput})]})},k=(e(25),function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSaveContact=function(n){t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(s.a)(e))}}))},t.handleFilterValue=function(n){t.setState({filter:n.currentTarget.value})},t.handleDeleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(l.a)(e,[{key:"render",value:function(){var t=this.state,n=t.contacts,e=t.filter,a=e.toLocaleLowerCase(),c=n.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(O.jsxs)("div",{className:p.a.container,children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(_,{options:["name","number"],handleSubmit:this.handleSaveContact,contacts:n}),Object(O.jsx)("h2",{children:"Contacts: "}),Object(O.jsx)(x,{handleCnange:this.handleFilterValue,filterList:e}),Object(O.jsx)(v,{contactsList:c,handleClick:this.handleDeleteContact})]})}}]),e}(a.Component)),g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),a(t),c(t),o(t),i(t)}))};e(26);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.d9d7fbec.chunk.js.map