(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{33:function(e,a,t){e.exports=t(67)},38:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},63:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=t.n(r),s=t(3),o=t(1),m=t(4),i=t(5),u=t(7),d=t(6),p=(t(38),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{className:"option",value:e.city},e.city_name)}))},e.renderRestaurant=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name," | ",e.locality)}))},e.handleCity=function(a){var t=a.target.value,n="".concat("https://edumato-rest-api.herokuapp.com/restaurants?city=").concat(t);fetch(n,{Method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({restaurants:a})}))},e.handleRest=function(a){console.log(a.target.value),console.log(e.props.history.push("/details/".concat(a.target.value)))},e.state={location:"",restaurants:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"img-fluid first-rectangle"},l.a.createElement("div",{className:"first-ellipse"},l.a.createElement("div",{className:"text-in-ellipse"},"e!")),l.a.createElement("div",{className:"heading"},"Find the best restaurants,cafes, bars"),l.a.createElement("div",{className:"locationSelector"},l.a.createElement("select",{className:"locationDropDown",onChange:this.handleCity}," //handleCity is called whenever the value is changing to get the list of restaurants at that particular city",l.a.createElement("option",null,"----Select City-----"),this.renderCity(this.state.location)),l.a.createElement("select",{className:"restinput ",onChange:this.handleRest},l.a.createElement("option",null,"----Select Restaurant-----"),this.renderRestaurant(this.state.restaurants)))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumato-rest-api.herokuapp.com/location",{Method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({location:a})}))}}]),t}(n.Component)),E=Object(o.e)(p),h=(t(44),function(e){return l.a.createElement("div",null,l.a.createElement("h1",{className:"quick-searches"},"Quick Searches"),l.a.createElement("h3",{className:"second-text"},"Discover restaurants by type of meal"),l.a.createElement("div",{className:"row grid-layout"},function(e){var a=e.quickData;if(a)return a.map((function(e){return l.a.createElement(s.b,{to:"/list/".concat(e.mealtype),className:"col-lg-4 col-md-6 col-sm-12 ",key:e._id},l.a.createElement("div",{className:"row second-box"},l.a.createElement("div",{className:"col-6 image-box"},l.a.createElement("img",{src:"/images/".concat(e.name,".png"),className:"image"})),l.a.createElement("div",{className:"second-heading col-6"},e.name,l.a.createElement("div",{className:"second-para "},"Start your day with exclusive ",e.name," options"))))}))}(e)))}),v=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={mealtype:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h,{quickData:this.state.mealtype})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumato-rest-api.herokuapp.com/mealtype",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({mealtype:a})}))}}]),t}(n.Component),b=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(v,null))},f=(t(45),function(){return l.a.createElement("div",{className:"header-nav-bar"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Edumato"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(s.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement(s.b,{to:"/ViewBooking",className:"nav-link"},"Orders"))))))}),g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("hr",null),l.a.createElement("center",null,l.a.createElement("h3",null,"\xa9 HBweb ",e.year," ",e.month))))},N=t(9),y=t.n(N),k=(t(63),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-mid-12"},function(e){var a=e.listdata;return a?a.map((function(e){return l.a.createElement("div",{className:"item",key:e._id},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("img",{className:"Image",src:e.thumb})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"hotel_name"},l.a.createElement(s.b,{to:"/details/".concat(e._id)},e.name)),l.a.createElement("div",{className:"city_name"},e.city_name),l.a.createElement("div",{className:"city_name"},e.locality),l.a.createElement("div",{className:"city_name"},e.address))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("div",{className:"cuisine_block"}," Cuisine "),l.a.createElement("div",{className:"cuisine_block"}," Cost Per Two ")),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("div",{className:"cuisine_out"},e.Cuisine[0].name," | ",e.Cuisine[1].name),l.a.createElement("div",{className:"cuisine_out"},"Rs. ",e.cost))))})):l.a.createElement("h3",null,"Loading....")}(e))))}),C="https://edumato-rest-api.herokuapp.com/restaurantList",O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).costfilter=function(a){var t,n=a.target.value.split(","),l=Number(n[0]),r=Number(n[1]),c=sessionStorage.getItem("mealid");console.log(c),t=""==n?"".concat(C,"/").concat(c):"".concat(C,"/").concat(c,"?lcost=").concat(l,"&hcost=").concat(r),y.a.get(t).then((function(a){e.props.costdata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"Cost Filter",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{onChange:this.costfilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cost"}),"All"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"100,300",name:"cost"}),"100-300"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"301,500",name:"cost"}),"301-500"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"501,800",name:"cost"}),"501-800"),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),j="https://edumato-rest-api.herokuapp.com/restaurantList",x=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).cuisinefilter=function(a){var t,n=a.target.value,l=sessionStorage.getItem("mealid");console.log(l),t=""==n?"".concat(j,"/").concat(l):"".concat(j,"/").concat(l,"?cuisine=").concat(n),y.a.get(t).then((function(a){e.props.cuisinedata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"Cuisine Filter",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{onChange:this.cuisinefilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cost"}),"All"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"cost"}),"North Indian"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"2",name:"cost"}),"South Indian"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3",name:"cost"}),"Chinese"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"4",name:"cost"}),"Fast Food"),l.a.createElement("br",null),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"4",name:"cost"}),"Street Food"),l.a.createElement("br",null)))}}]),t}(n.Component),S=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this)).state={hotelist:"",mealname:""},n}return Object(i.a)(t,[{key:"setDataAsPerFilter",value:function(e){this.setState({hotelist:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement(O,{costdata:function(a){e.setDataAsPerFilter(a)}}),l.a.createElement(x,{cuisinedata:function(a){e.setDataAsPerFilter(a)}})),l.a.createElement("div",{className:"col-md-10"},l.a.createElement("center",null,l.a.createElement("h3",null," Here are the options for ",this.state.mealname," ")),l.a.createElement(k,{listdata:this.state.hotelist}))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;sessionStorage.setItem("mealid",a),y.a.get("".concat("https://edumato-rest-api.herokuapp.com/mealtype")).then((function(t){for(var n=0;n<t.data.length;n++)t.data[n]._id===Number(a)?(e.setState({mealname:t.data[n].name.toUpperCase()}),n=t.data.length):e.setState({mealname:"Wrong Input"})})),y.a.get("".concat("https://edumato-rest-api.herokuapp.com/restaurants?mealtype=").concat(a)).then((function(a){e.setState({hotelist:a.data})}))}}]),t}(n.Component),w=t(14),_=t.n(w),D=t(17),P=t(16),F=(t(65),t(66),function(e){return l.a.createElement(l.a.Fragment,null,function(e){var a=e.restData;return a?l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"Second-Rectangle row"},l.a.createElement("button",{type:"button",class:"btn btn-primary button","data-toggle":"modal","data-target":"#exampleModal"},l.a.createElement("img",{className:"image-container img-fluid",src:a.thumb})),l.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Image Gallery for ",a.name),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("img",{className:"img-fluid",src:a.thumb})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"img-fluid",src:a.thumb})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"img-fluid",src:a.thumb}))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))))),l.a.createElement("div",{className:"The-Big-Chilli-Cakery col-md-12"},l.a.createElement("h3",null,a.name),l.a.createElement("h3",null,a.locality),l.a.createElement("h3",null,a.address))),l.a.createElement("div",{className:"row"},l.a.createElement(P.d,null,l.a.createElement(P.b,null,l.a.createElement(P.a,null,"About"),l.a.createElement(P.a,null,"Contact")),l.a.createElement(P.c,null,l.a.createElement("p",null,a.name),l.a.createElement("p",null,a.type[0].name," | ",a.type[1].name),l.a.createElement("p",null,a.Cuisine[0].name," | ",a.Cuisine[1].name)),l.a.createElement(P.c,null,l.a.createElement("p",null,a.address),l.a.createElement("p",null,"Call us: 5454545467")))),l.a.createElement("div",{className:"row"},l.a.createElement(s.b,{to:"/list/".concat(sessionStorage.getItem("mealid")),className:"btn btn-danger button2"},"Back"),l.a.createElement(s.b,{to:"/booking/".concat(a._id),className:"btn btn-success"},"Place Order"))):l.a.createElement("h2",null,"Loading....")}(e))}),M=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={details:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{restData:this.state.details}))}},{key:"componentDidMount",value:function(){var e=Object(D.a)(_.a.mark((function e(){var a,t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("".concat("https://edumato-rest-api.herokuapp.com/restaurantdetails","/").concat(a));case 3:t=e.sent,this.setState({details:t.data[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),I=Object(o.e)((function(e){console.log("functional>>>>",e.location.search.split("=")[1]);return l.a.createElement("div",null,l.a.createElement("alert",{className:"alert alert-success",style:{marginTop:"20px",marginLeft:"10px",position:"absolute"}},e.location.search.split("=")[1]),l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h3",null,"Order Details")),l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Order Id"),l.a.createElement("th",null,"Rest Name"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"No. Person"))),l.a.createElement("body",null,function(e){var a=e.orderdata;if(a)return a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.rest_id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.address),l.a.createElement("td",null,e.person))}))}(e)))))})),T=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={orders:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(I,{orderdata:this.state.orders})}},{key:"componentDidMount",value:function(){var e=Object(D.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("https://edumato-rest-api.herokuapp.com/orders"));case 2:a=e.sent,this.setState({orders:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),A=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this)).handleChangeName=function(e){console.log(e.target.value),n.setState({name:e.target.value})},n.handleChangePhone=function(e){console.log(e.target.value),n.setState({phone:e.target.value})},n.handleChangePerson=function(e){console.log(e.target.value),n.setState({person:e.target.value})},n.handleSubmit=function(){fetch("https://edumato-rest-api.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.history.push("/viewBooking?message=Success"))},n.state={order_id:Math.floor(1e4*Math.random()),rest_name:"",name:"",phone:"",person:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(_.a.mark((function e(){var a,t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("".concat("https://edumato-rest-api.herokuapp.com/restaurantdetails","/").concat(a));case 3:t=e.sent,this.setState({rest_name:t.data[0].name});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card   mb-3",style:{marginTop:"20px"}},l.a.createElement("div",{className:"card-header"},"Place Your Order"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Order_Id"),l.a.createElement("input",{type:"text",name:"order_id",value:this.state.order_id,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rest name"),l.a.createElement("input",{type:"text",name:"rest_name",value:this.state.rest_name,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,className:"form-control",onChange:this.handleChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone"),l.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChangePhone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Person"),l.a.createElement("select",{type:"text",name:"person",value:this.state.person,className:"form-control",onchange:this.handleChangePerson},l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three"))),l.a.createElement(s.b,{to:"/details/".concat(this.props.match.params.id),className:"btn btn-danger"},"Back"),"\xa0",l.a.createElement("button",{className:"btn btn-success",onClick:this.handleSubmit},"Submit"))))}}]),t}(n.Component),R=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(o.a,{exact:!0,path:"/",component:b}),l.a.createElement(o.a,{path:"/list/:id",component:S}),l.a.createElement(o.a,{path:"/details/:id",component:M}),l.a.createElement(o.a,{path:"/viewBooking",component:T}),l.a.createElement(o.a,{path:"/booking/:id",component:A}),l.a.createElement(g,{year:2020,month:"march"})))};c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6271b7ce.chunk.js.map