(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{413:function(e,t,a){e.exports=a(768)},610:function(e,t,a){},766:function(e,t,a){},768:function(e,t,a){"use strict";a.r(t);a(414),a(423);var n=a(0),r=a.n(n),c=a(71),l=a.n(c),u=(a(610),a(786)),i=a(778),o=a(785),s=a(779),m=a(65),d=a(102),p=a(92),v=a(783),E=a(787),f=a(769),g=a(777),b=a(145),D=[{id:1,start:"2019-08-05T08:15:00+04:00",end:"2019-08-05T14:00:00+04:00",type:0,comment:"\u041a\u043e\u043c\u043c\u0435\u0442\u0430\u0440\u0438\u0439 \u043a \u0441\u043e\u0431\u044b\u0442\u0438\u044e. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0434\u043b\u0438\u043d\u043d\u044b\u043c"},{id:2,start:"2019-08-05T14:30:00+04:00",end:"2019-08-05T17:30:00+04:00",type:1,comment:null},{id:3,start:"2020-07-01T12:00:00.834Z",end:"2020-07-01T15:00:00.834Z",type:1,comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat risus, fringilla eget suscipit eu, tempor eu nisi. Suspendisse quam dui, consequat quis tempus vel, tristique a risus. Aliquam facilisis purus quis maximus dignissim. Mauris mi risus, mollis condimentum semper sit amet, interdum a nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque venenatis elit nec pretium imperdiet. Nunc ut eros enim. Quisque eros nulla, rhoncus vitae convallis ut, aliquet ut nisl. Phasellus placerat massa eu mattis faucibus. Mauris laoreet, urna in consequat egestas, tortor ex molestie lectus, sit amet suscipit urna diam a dui. Vivamus maximus vitae nunc ac molestie. Sed dapibus ligula non mauris vestibulum pulvinar."},{id:4,start:"2020-07-02T08:00:00.834Z",end:"2020-07-02T10:00:00.834Z",type:1,comment:null}],O=8,j=18,y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=["8am","8:30am","9am","9:30am","10am","10:30am","11am","11:30am","12pm","12:30pm","1pm","1:30pm","2pm","2:30pm","3pm","3:30pm","4pm","4:30pm","5pm","5:30pm"],S=[{color:"teal",value:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043e \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"},{color:"green",value:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043e \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"},{color:"blue",value:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043e \u0432\u0430\u043c\u0438"},{color:"violet",value:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c"},{color:"yellow",value:"\u041d\u0435\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f (\u043f\u0435\u0440\u0435\u0440\u044b\u0432)"}],T=a(402);function C(e,t){var a=new Date(e);return t.filter((function(t){var n=t.start,r=t.end,c=new Date(n),l=new Date(r);return c.toDateString()===a.toDateString()||l.toDateString()===a.toDateString()||e>c.getTime()&&e<l.getTime()}))}function N(e,t){var a=e.start,n=e.end,r=new Date(a),c=new Date(n),l=new Date(t.setHours(O)),u=new Date(t.setHours(j));return{top:l>r?0:100*(r-l)/(u-l)+"%",height:100*((c<u?c:u)-(r>l?r:l))/(u-l)+"%"}}function _(e){var t=new Date(e).toTimeString().split(":");return"".concat(t[0],":").concat(t[1])}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",a=e.split("-"),n=t.split(":");return a[1]-=1,a?Object(T.a)(Date,Object(p.a)(a).concat(Object(p.a)(n))):null}function A(e){var t=e.getMonth()+1,a=e.getDate();return[e.getFullYear(),(t>9?"":"0")+t,(a>9?"":"0")+a].join("-")}var x=function(e){var t=e.date,a=e.events;return r.a.createElement("div",{className:"events-layer__col"},a.map((function(e){return r.a.createElement(b.a,{key:e.id,className:"event-block",style:N(e,t),color:S[e.type].color,title:e.comment},r.a.createElement("p",null,t.setHours(O)<new Date(e.start)?_(e.start):O+":00"," -",t.setHours(j)>new Date(e.end)?_(e.end):j+":00"),r.a.createElement("p",null,e.comment))})))};var q=function(){var e,t=Object(n.useState)(new Date((new Date).setHours(0,0,0,0))),a=Object(d.a)(t,2),c=a[0],l=a[1],u=Object(m.c)((function(e){return e.events.items})),i=function(e){for(var t=e.getDay(),a=[],n=0;n<7;n++)a.push(new Date(e.valueOf()+24*(n-t)*60*60*1e3));return a}(c);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"calendar-wrapper"},r.a.createElement(E.a,{as:"h1",textAlign:"center"},"Calendar"),r.a.createElement(E.a,{as:"h2",textAlign:"center",content:(e=i,e[0].getFullYear()!==e[6].getFullYear()?"".concat(e[0].getDate()," ").concat(h[e[0].getMonth()]," ").concat(e[0].getFullYear()," - \n      ").concat(e[6].getDate()," ").concat(h[e[6].getMonth()]," ").concat(e[6].getFullYear()):e[0].getMonth()!==e[6].getMonth()?"".concat(e[0].getDate()," ").concat(h[e[0].getMonth()]," - \n      ").concat(e[6].getDate()," ").concat(h[e[6].getMonth()]," ").concat(e[6].getFullYear()):"".concat(e[0].getDate()," - ").concat(e[6].getDate()," \n      ").concat(h[e[6].getMonth()]," ").concat(e[6].getFullYear()))}),r.a.createElement("div",{className:"calendar-navigation"},r.a.createElement(f.a,{circular:!0,icon:"arrow left",onClick:function(){return l(new Date(c.setDate(c.getDate()-7)))}}),r.a.createElement(g.a,{type:"date",value:A(c),onChange:function(e,t){var a=t.value;return a?l(k(a)):null}}),r.a.createElement(f.a,{circular:!0,icon:"arrow right",onClick:function(){return l(new Date(c.setDate(c.getDate()+7)))}})),r.a.createElement("div",{className:"events-layer"},i.map((function(e){return r.a.createElement(x,{key:e,date:e,events:C(e,u)})}))),r.a.createElement(v.a,{definition:!0,celled:!0,className:"calendar"},r.a.createElement(v.a.Header,null,r.a.createElement(v.a.Row,null,r.a.createElement(v.a.HeaderCell,null),i.map((function(e){return r.a.createElement(v.a.HeaderCell,{key:e},"".concat(y[e.getDay()],", ").concat(h[e.getMonth()]," ").concat(e.getDate()))})))),r.a.createElement(v.a.Body,null,w.map((function(e){return function(e){return r.a.createElement(n.Fragment,{key:e},r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Cell,null,e),Object(p.a)(Array(7)).map((function(e,t){return r.a.createElement(v.a.Cell,{key:t})}))),r.a.createElement(v.a.Row,null,Object(p.a)(Array(8)).map((function(e,t){return r.a.createElement(v.a.Cell,{key:t})}))))}(e)}))))))},M=a(784),F=a(781),I=a(32),V=a(780),L=function(e){return{type:"ADD_EVENT_SUCCEED",payload:e}},H=S.map((function(e,t){var a=e.value;return{key:a,value:t,text:a}}));var Y=function(e){var t=e.closeHandler,a=Object(n.useState)({startDate:"",startTime:"",endDate:"",endTime:"",comment:"",type:0}),c=Object(d.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),p=s[0],v=s[1],E=Object(m.b)(),g=Object(m.c)((function(e){return e.events.items}));return r.a.createElement(V.a,{onSubmit:function(e){e.preventDefault();var a=function(e,t){var a=e.startDate,n=e.startTime,r=e.endDate,c=e.endTime,l=[],u=t.map((function(e){var t=e.start,a=e.end;return{start:new Date(t),end:new Date(a)}})),i=k(a,n),o=k(r,c);return u.find((function(e){return i>e.start&&i<e.end||o>e.start&&o<e.end||e.start>i&&e.start<o&&e.end>i&&e.end<o}))&&l.push("New event shouldn't cross with existing"),i>=o&&l.push("Event can't start before it's over"),l}(l,g);if(a.length)v(a);else{var n=k(l.startDate,l.startTime),r=k(l.endDate,l.endTime),c=D.reduce((function(e,t){var a=t.id;return e<a?a++:e}),0);E({type:"ADD_EVENT",payload:{id:c,start:n,end:r,comment:l.comment,type:l.type}}),t()}}},r.a.createElement(V.a.Group,{widths:"equal"},r.a.createElement(b.a,null,"Start:",r.a.createElement(V.a.Input,{type:"date",value:l.startDate,onChange:function(e,t){var a=t.value;return u(Object(I.a)(Object(I.a)({},l),{},{startDate:a}))},required:!0}),r.a.createElement(V.a.Input,{type:"time",value:l.startTime,onChange:function(e,t){var a=t.value;return u(Object(I.a)(Object(I.a)({},l),{},{startTime:a}))},required:!0})),r.a.createElement(b.a,null,"End:",r.a.createElement(V.a.Input,{type:"date",value:l.endDate,onChange:function(e,t){var a=t.value;return u(Object(I.a)(Object(I.a)({},l),{},{endDate:a}))},required:!0}),r.a.createElement(V.a.Input,{type:"time",value:l.endTime,onChange:function(e,t){var a=t.value;return u(Object(I.a)(Object(I.a)({},l),{},{endTime:a}))},required:!0}))),r.a.createElement(V.a.TextArea,{label:"Comment:",value:l.comment,onChange:function(e,t){var a=t.value;return u(Object(I.a)(Object(I.a)({},l),{},{comment:a}))}}),r.a.createElement(V.a.Select,{label:"Type:",placeholder:"Pick the type",value:l.type,onChange:function(e,t){var a=t.value;return u(Object(I.a)(Object(I.a)({},l),{},{type:+a}))},required:!0,options:H}),Boolean(p.length)&&r.a.createElement(o.a,{negative:!0,list:p}),r.a.createElement(f.a,{type:"submit",positive:!0},"Add"),r.a.createElement(f.a,{onClick:t,negative:!0},"Cancel"))};var J=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1];return r.a.createElement("aside",{className:"sidebar"},r.a.createElement(E.a,{as:"h2",inverted:!0},"Legend"),r.a.createElement(M.a,{inverted:!0},r.a.createElement(M.a.Item,null,r.a.createElement(M.a.Icon,{name:"circle"}),r.a.createElement(M.a.Content,null,"\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f")),S.map((function(e){var t=e.color,a=e.value;return r.a.createElement(M.a.Item,{key:t},r.a.createElement(M.a.Icon,{name:"circle",color:t}),r.a.createElement(M.a.Content,null,a))}))),r.a.createElement(f.a,{onClick:function(){return c(!0)},primary:!0},"+ Add new event"),r.a.createElement(F.a,{open:a,onClose:function(){return c(!1)},size:"tiny"},r.a.createElement(E.a,{icon:"plus",content:"Add new event"}),r.a.createElement(F.a.Content,null,r.a.createElement(Y,{closeHandler:function(){return c(!1)}}))))};a(766);var P=function(){var e=Object(m.c)((function(e){return e.events})),t=Object(m.b)();return Object(n.useEffect)((function(){t({type:"EVENTS_LOADING"})}),[t]),r.a.createElement(r.a.Fragment,null,"loading"===e.loadingState&&r.a.createElement(u.a,{active:!0},r.a.createElement(i.a,null,"Loading")),"failed"===e.loadingState&&r.a.createElement(o.a,{negative:!0},r.a.createElement(o.a.Header,null,"Looks like, something went wrong"),r.a.createElement("p",null,e.error)),"succeed"===e.loadingState&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{as:"main",className:"application"},r.a.createElement(q,null)),r.a.createElement(J,null)))},U=(a(767),a(64)),G=a(401),R={loadingState:"",error:null,items:[]},Z=Object(U.c)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"EVENTS_LOADING":return Object(I.a)(Object(I.a)({},e),{},{loadingState:"loading",error:null});case"EVENTS_LOAD_SUCCEED":return Object(I.a)(Object(I.a)({},e),{},{loadingState:"succeed",items:n,error:null});case"EVENTS_LOAD_FAILED":return Object(I.a)(Object(I.a)({},e),{},{loadingState:"failed",error:n,items:[]});case"ADD_EVENT_SUCCEED":return Object(I.a)(Object(I.a)({},e),{},{loadingState:"succeed",error:null,items:[].concat(Object(p.a)(e.items),[n])});default:return e}}}),B=a(77),X=a.n(B),z=a(103),Q=X.a.mark(te),W=X.a.mark(ae),K=X.a.mark(ne),$=X.a.mark(re),ee=function(e,t){return new Promise((function(a){return setTimeout((function(){return a(t)}),e)}))};function te(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(z.a)((function(){return ee(500,D)}));case 2:return e=t.sent,t.next=5,Object(z.b)({type:"EVENTS_LOAD_SUCCEED",payload:e});case 5:case"end":return t.stop()}}),Q)}function ae(e){var t,a;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(z.a)((function(){return ee(500,t)}));case 3:return a=n.sent,n.next=6,Object(z.b)(L(a));case 6:case"end":return n.stop()}}),W)}function ne(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)("EVENTS_LOADING",te);case 2:case"end":return e.stop()}}),K)}function re(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)("ADD_EVENT",ae);case 2:case"end":return e.stop()}}),$)}var ce=Object(G.a)(),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,ue=Object(U.e)(Z,le(Object(U.a)(ce)));ce.run(re),ce.run(ne);var ie=ue;l.a.render(r.a.createElement(m.a,{store:ie},r.a.createElement(P,null)),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.bde2ec3c.chunk.js.map