(window.webpackJsonpalquran=window.webpackJsonpalquran||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/loader.557336d4.gif"},33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(29),l=t.n(i),c=(t(38),t(7)),s=t(8),o=t(10),m=t(9),u=t(11),h=t(30),d=t(6),p=t(14),f=t.n(p),g=t(15),v=t.n(g),y=(t(56),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={surah:[],isLoading:!0},t.getPostApi=function(){f.a.get("http://api.alquran.cloud/surah").then((function(e){console.log(e.data.data),t.setState({surah:e.data.data,isLoading:!1})})).catch((function(e){console.log(e)}))},t.handleSubmit=function(e){t.props.history.push("/Ayat/".concat(e))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPostApi()}},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("div",{className:"isLoading"},r.a.createElement("img",{src:v.a,alt:"logo"})):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Qur'an App"))),r.a.createElement("div",{className:"card-first"},this.state.surah.map((function(a){return r.a.createElement("div",{className:"card",key:a.number,onClick:function(){return e.handleSubmit(a.number)}},r.a.createElement("div",{className:"number-surah"},a.number),r.a.createElement("div",{className:"detail-surah"},r.a.createElement("p",null,a.englishName),r.a.createElement("p",null,a.numberOfAyahs," Ayah - ",a.revelationType)))}))))}}]),a}(n.Component)),b=(t(57),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={ayat:[],number:0,name:"",englishName:"",englishNameTranslation:"",revelationType:"",numberOfAyahs:0,isLoading:!0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("http://api.alquran.cloud/surah/".concat(a)).then((function(a){console.log(a.data),e.setState({ayat:a.data.data.ayahs,number:a.data.data.number,name:a.data.data.name,englishName:a.data.data.englishName,englishNameTranslation:a.data.data.englishNameTranslation,revelationType:a.data.data.revelationType,numberOfAyahs:a.data.data.numberOfAyahs,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("div",{className:"isLoading"},r.a.createElement("img",{src:v.a,alt:"logo"})):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"selected-surah"},r.a.createElement("div",{className:"circle-item number-of-ayah"},this.state.numberOfAyahs,r.a.createElement("span",null,"Ayah")),r.a.createElement("div",{className:"name-of-surah"},r.a.createElement("p",{className:"title-surah"},this.state.englishName),r.a.createElement("p",{className:"title-ayah"},this.state.englishNameTranslation)),r.a.createElement("div",{className:"circle-item surah-place"},this.state.revelationType))),r.a.createElement("div",{className:"container",id:"scrolling_div"},r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"bismillah font-uthmani hide"},"\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"),r.a.createElement("ul",null,this.state.ayat.map((function(e){return r.a.createElement("li",{id:"ayah1",key:e.numberInSurah},r.a.createElement("div",{className:"content-ayah font-uthmani"},e.text),r.a.createElement("div",{className:"number-ayah"},e.numberInSurah))}))))))}}]),a}(n.Component)),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{path:"/",exact:!0,component:y}),r.a.createElement(d.a,{path:"/Ayat/:id",component:b})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.6affe0f7.chunk.js.map