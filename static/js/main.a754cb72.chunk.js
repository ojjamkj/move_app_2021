(this.webpackJsonpmove_app_2021=this.webpackJsonpmove_app_2021||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),c=s.n(i),r=s(4),o=s.n(r),m=s(14),l=s(15),d=s(16),j=s(19),u=s(18),v=s(17),b=s.n(v),h=(s(43),s(0));var p=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"genres",children:i.map((function(e,t){}))}),Object(h.jsx)("p",{className:"movie__summary",children:a})]})]})},O=(s(45),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,a.setState({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a.setState((function(e){return{isLoading:!1}})),a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e),Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a754cb72.chunk.js.map