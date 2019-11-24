(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{39:function(e,t,a){e.exports=a(67)},44:function(e,t,a){},45:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),l=(a(44),a(35)),i=a(16),s=a(17),h=a(19),m=a(18),u=a(13),d=a(20),p=(a(45),a(14)),f=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(0===this.props.contacts.length)var t=o.a.createElement("div",{className:"alert alert-primary",role:"alert"},"No hay contactos en la agenda.");return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("h1",null,"Libreta de contactos"),t,this.props.contacts.map((function(t){return o.a.createElement("div",{className:"row mt-3",key:t.phone},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.name),o.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.phone)),o.a.createElement("div",{className:"card-footer"},o.a.createElement(p.a,{variant:"outline-danger",onClick:function(){return e.props.action(t.phone)}},"Borrar")))))})))}}]),t}(o.a.Component),v=a(15),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).openModal=function(){return a.setState({show:!0})},a.closeModal=function(){return a.setState({show:!1})},a.addContact=function(){fetch("contacts/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,phone:a.state.phone})}).then((function(e){a.refreshContacts()}))},a.state={contacts:[],show:!1,name:"",phone:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleChildFunc=a.handleChildFunc.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(l.a)({},n,a))}},{key:"handleSubmit",value:function(e){this.addContact(),this.closeModal(),this.setState({name:""}),this.setState({phone:""}),e.preventDefault()}},{key:"refreshContacts",value:function(){var e=this;fetch("contacts").then((function(e){return e.json()})).then((function(t){e.setState({contacts:t})})).catch(console.log)}},{key:"componentDidMount",value:function(){this.refreshContacts()}},{key:"handleChildFunc",value:function(e){var t=this;fetch("contact/".concat(e),{method:"DELETE"}).then((function(e){t.refreshContacts()}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{show:this.state.show,onHide:this.closeModal},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement(v.a.Title,null,"Nuevo contacto")),o.a.createElement(v.a.Body,null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"formGroup"},o.a.createElement("label",{htmlFor:"name"},"Nombre"),o.a.createElement("input",{type:"text",id:"name",name:"name",className:"form-control",value:this.state.name,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"phone"},"Tel\xe9fono"),o.a.createElement("input",{type:"text",id:"phone",name:"phone",className:"form-control",value:this.state.phone,onChange:this.handleChange})))),o.a.createElement(v.a.Footer,null,o.a.createElement(p.a,{variant:"secondary",onClick:this.closeModal},"Cerrar"),o.a.createElement(p.a,{variant:"primary",onClick:this.handleSubmit},"Guardar contacto"))),o.a.createElement("div",{className:"container mt-5 mb-5"},o.a.createElement("div",{className:"row"},o.a.createElement(p.a,{variant:"primary",onClick:this.openModal},"A\xf1adir contacto")),o.a.createElement(f,{contacts:this.state.contacts,action:this.handleChildFunc})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f8c42afa.chunk.js.map