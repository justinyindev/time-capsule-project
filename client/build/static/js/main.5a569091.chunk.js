(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=a(15),l=a(19),s=a(60),u=a(69),m=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(41),d=a(147),f=a(142),g=a(150),b=a(146),v=a(145),h=a(139),E=a(141),y=a(149),x=a(143),j=a(144),O=a(66),C=a.n(O),k=a(67),w=a.n(k),N=a(65),I=a.n(N),T=a(61),D=a.n(T),S=a(12),W=a.n(S),_=a(21),A=a(30),L=a.n(A),F="https://time-capsules-project.herokuapp.com/posts",z=function(e){return L.a.patch("".concat(F,"/").concat(e,"/likePost"))},R=function(e,t){return L.a.patch("".concat(F,"/").concat(e),t)},B=function(e){return L.a.delete("".concat(F,"/").concat(e))},M=function(e){return function(){var t=Object(_.a)(W.a.mark((function t(a){var n,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,L.a.post(F,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t){return function(){var a=Object(_.a)(W.a.mark((function a(n){var r,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},H=a(136),J=Object(H.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),K=function(e){var t=e.post,a=e.setCurrentId,n=Object(i.b)(),c=J();return r.a.createElement(h.a,{className:c.card},r.a.createElement(E.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(f.a,{variant:"h6"},t.creator),r.a.createElement(f.a,{variant:"body2"},D()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(y.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(I.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(f.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(x.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(j.a,{className:c.cardActions},r.a.createElement(y.a,{size:"small",color:"black",onClick:function(){return n((e=t._id,function(){var t=Object(_.a)(W.a.mark((function t(a){var n,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(C.a,{fontSize:"small"})," \xa0Like\xa0",t.likeCount," "),r.a.createElement(y.a,{size:"small",color:"Secondary",onClick:function(){return n((e=t._id,function(){var t=Object(_.a)(W.a.mark((function t(a){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(w.a,{fontSize:"small"})," Delete")))},U=Object(H.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},font:{color:"white",fontWeight:"bold",padding:5},loading:{padding:5,display:"flex",color:"white"},actionDiv:{textAlign:"center"}}})),V=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=U();return a.length?r.a.createElement(b.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(b.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(K,{post:e,setCurrentId:t}))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h6",className:n.font},"Waiting for a capsule"),r.a.createElement(v.a,{className:n.loading}))},q=a(16),G=a(108),Q=a(148),X=a(68),Y=a.n(X),Z=Object(H.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),borderRadius:15},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},font:{fontWeight:"bold"},buttonSubmit:{backgroundColor:"#ffc000",marginBottom:10,"&:hover":{backgroundColor:"pink"}}}})),$=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),o=Object(p.a)(c,2),l=o[0],s=o[1],u=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),m=Object(i.b)(),d=Z();Object(n.useEffect)((function(){u&&s(u)}),[u]);var g=function(){a(0),s({creator:"",title:"",message:"",tags:"",selectedFile:""})},b=function(){var e=Object(_.a)(W.a.mark((function e(a){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(m(M(l)),g()):(m(P(t,l)),g());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(G.a,{className:d.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:b},r.a.createElement(f.a,{variant:"h6",className:d.font},t?'Editing "'.concat(u.title,'"'):"Creating a Time Capsule"),r.a.createElement(Q.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:l.creator,onChange:function(e){return s(Object(q.a)(Object(q.a)({},l),{},{creator:e.target.value}))}}),r.a.createElement(Q.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return s(Object(q.a)(Object(q.a)({},l),{},{title:e.target.value}))}}),r.a.createElement(Q.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:l.message,onChange:function(e){return s(Object(q.a)(Object(q.a)({},l),{},{message:e.target.value}))}}),r.a.createElement(Q.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:l.tags,onChange:function(e){return s(Object(q.a)(Object(q.a)({},l),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:d.fileInput},r.a.createElement(Y.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(q.a)(Object(q.a)({},l),{},{selectedFile:t}))}})),r.a.createElement(y.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(y.a,{variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0},"Clear")))},ee=a(40),te=Object(H.a)((function(e){return Object(ee.a)({headingDiv:{borderRadius:25,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{fontFamily:"Readex Pro",color:"#fff",margin:10,fontWeight:500},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mobile:{flexDirection:"column-reverse"}})})),ae=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(i.b)(),l=te();return Object(n.useEffect)((function(){o(function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get(F);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(d.a,{className:l.headingDiv,position:"static",color:"inherit"},r.a.createElement(f.a,{className:l.heading,variant:"h2",align:"center"},"Time Capsules")),r.a.createElement(g.a,{in:!0},r.a.createElement(d.a,null,r.a.createElement(b.a,{container:!0,className:l.mobile,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(b.a,{item:!0,xs:12,sm:7},r.a.createElement(V,{setCurrentId:c})),r.a.createElement(b.a,{item:!0,xs:12,sm:4},r.a.createElement($,{currentId:a,setCurrentId:c}))))))},ne=(a(106),Object(l.e)(m,Object(l.d)(Object(l.a)(s.a))));o.a.render(r.a.createElement(i.a,{store:ne},r.a.createElement(ae,null)),document.getElementById("root"))},76:function(e,t,a){e.exports=a(107)}},[[76,1,2]]]);
//# sourceMappingURL=main.5a569091.chunk.js.map