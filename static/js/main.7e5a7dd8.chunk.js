(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(10),r=n.n(a),c=n(7),l=n(6),i=n(8),s=n(2),u=n(3),d=n(5),b=n(4),f=n(1),h=(n(17),function(t){var e=t.toDo,n=t.done;return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"Todo List"}),Object(o.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),j=(n(18),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={term:""},t.onSearchChange=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchChange(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onSearchChange})}}]),n}(f.Component)),m=n(11),p=(n(19),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c=t.important,l="todo-list-item";return t.done&&(l+=" done"),c&&(l+=" important"),Object(o.jsxs)("span",{className:l,children:[Object(o.jsx)("span",{className:"todo-list-item-label",onClick:r,children:e}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a,children:Object(o.jsx)("i",{className:"fa fa-exclamation"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(o.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(f.Component)),g=(n(20),function(t){var e=t.todos,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c=e.map((function(t){var e=t.id,c=Object(m.a)(t,["id"]);return Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(p,Object(l.a)(Object(l.a)({},c),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleDone:function(){return r(e)}}))},e)}));return Object(o.jsx)("ul",{className:"list-group todo-list",children:c})}),O=(n(21),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filterButton,n=t.onFilterChange,a=this.buttons.map((function(t){var a=t.name,r=t.label,c=e===a?"btn-info":"btn-outline-secondary";return Object(o.jsx)("button",{type:"button",className:"btn ".concat(c),onClick:function(){return n(a)},children:r},a)}));return Object(o.jsx)("div",{className:"btn-group",children:a})}}]),n}(f.Component)),v=(n(22),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onItemAdded(t.state.label),t.setState({label:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(o.jsx)("input",{type:"text",className:"form-control",onChange:this.onLabelChange,value:this.state.label,placeholder:"What needs to be done"}),Object(o.jsx)("button",{className:"btn btn-outline-secondary",children:"Add Item"})]})}}]),n}(f.Component)),x=(n(23),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={todoData:[t.createTodoItem("Eat a pie"),t.createTodoItem("Eat a soup"),t.createTodoItem("Eat more food"),t.createTodoItem("Have a lunch"),t.createTodoItem("Drink banana shake"),t.createTodoItem("\u0421\u0432\u043e\u0431\u043e\u0434\u0443 \u041d\u0430\u0432\u0430\u043b\u044c\u043d\u043e\u043c\u0443"),t.createTodoItem("\u0428\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442")],term:"",filterButton:""},t.deleteItem=function(e){t.setState((function(t){return{todoData:t.todoData.filter((function(t){return t.id!==e}))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(i.a)(e),[n])}}))},t.onToggleDone=function(e){console.log("id passed: ",e),t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"done")}}))},t.onToggleImportant=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"important")}}))},t.search=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))},t.onSearchChange=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filterButton:e})},t}return Object(u.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(l.a)(Object(l.a)({},a),{},Object(c.a)({},n,!a[n]));return[].concat(Object(i.a)(t.slice(0,o)),[r],Object(i.a)(t.slice(o+1)))}},{key:"filterTodos",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filterButton,r=this.filterTodos(this.search(e,n),a),c=e.filter((function(t){return!0===t.done})).length,l=e.length-c;return Object(o.jsxs)("div",{className:"todo-app",children:[Object(o.jsx)(h,{toDo:l,done:c}),Object(o.jsxs)("div",{className:"top-panel d-flex",children:[Object(o.jsx)(j,{onSearchChange:this.onSearchChange}),Object(o.jsx)(O,{filterButton:a,onFilterChange:this.onFilterChange})]}),Object(o.jsx)(g,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(o.jsx)(v,{onItemAdded:this.addItem,blablup:3})]})}}]),n}(f.Component));r.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7e5a7dd8.chunk.js.map