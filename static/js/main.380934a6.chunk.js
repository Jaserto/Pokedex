(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),i=(n(14),n(15),n(9)),o=n(2),l=n.n(o),d=n(5),j=n(3),h=(n(17),window.matchMedia("(prefers-color-scheme:dark").matches),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";localStorage.setItem("@pokedex-app/theme",e)},p=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var c,a,r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Array(n).fill().map((function(e,n){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(n+t+1)).then((function(e){return e.json()}))})),a=Array(n).fill().map((function(e,n){return"https://pokeres.bastionbot.org/images/pokemon/".concat(n+t+1,".png")})),e.next=4,Promise.all(c);case 4:return r=e.sent,s=r.map((function(e){return e.stats.map((function(e){var t=e.base_stat;return{name:e.stat.name,value:t}}))})),i=r.map((function(e,t){var n=e.name,c=e.types;return{id:e.id,sprites:e.sprites,name:n,types:c.map((function(e){return e.type.name})),stats:s[t],cover:a[t]}})),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=(n(18),n.p+"static/media/pokedex.79a9d098.svg"),m=(n(19),n(0)),x=function(e){var t=e.handleClick,n=e.theme;return console.log(t,n),Object(m.jsx)("button",{onClick:t,className:"switch-button",alt:"darker"===n?"Switch to light theme":"Switch to darker theme",title:"darker"===n?"Switch to light theme":"Switch to darker theme",children:"darker"===n?Object(m.jsx)("span",{children:"\u2600\ufe0f"}):Object(m.jsx)("span",{children:"\ud83c\udf19"})})},O=["grass","steel","fire","electric","water","ground","rock","fairy","poison","bug","dragon","psychic","flying","fighting","ghost"],f=Math.floor(Math.random()*O.length+1),v=function(e){var t=e.handleClick,n=e.theme;return Object(m.jsx)("div",{className:"header-contend",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("a",{href:"https://www.flaticon.com/br/autores/roundicons-freebies",title:"Roundicons Freebies",children:Object(m.jsx)("img",{src:b,alt:"Pok\xe9dex",id:"pokedex"})}),Object(m.jsxs)("div",{className:"header-text",children:[Object(m.jsxs)("div",{className:"header-title",children:[Object(m.jsx)("h1",{className:"h1-"+O[f],children:"Pok\xe9dex"}),Object(m.jsx)(x,{handleClick:t,theme:n})]}),Object(m.jsxs)("p",{children:["by"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/jos3s/",children:Object(m.jsx)("b",{children:"Javier Serna"})})," ","with"," ",Object(m.jsx)("a",{href:"https://pokeapi.co",title:"Pokeapi",children:Object(m.jsx)("b",{children:"PokeAPI"})}),", in 2021 -",Object(m.jsxs)("a",{href:"https://github.com/jaserto/pokedex",children:[" ",Object(m.jsx)("b",{children:"Github"})]})]})]})]})})},k=(n(21),function(e){var t=e.text,n=e.onClick,c=e.disabled,a=e.type;return Object(m.jsx)("button",{onClick:n,className:"button ".concat(a),disabled:c,children:t})}),g=(n(22),function(e){var t=e.searchValue,n=e.handleChange;return Object(m.jsx)("input",{type:"search",value:t,onChange:n,className:"text-input",placeholder:"Type your search"})}),y=(n(23),n(24),n(25),function(e){var t=e.type,n=e.children;return Object(m.jsx)("div",{className:"tag ".concat(t),children:n})}),w=function(e){if(2===e.length)return e;var t=e.split("-");return 1===t.length?t[0][0]:t[0][0]+t[1][0]},N=function(e){var t=e.name,n=e.id,c=e.cover,a=e.types,r=e.stats;return Object(m.jsxs)("div",{className:"card ".concat(a[0]),children:[Object(m.jsx)("img",{src:c,alt:t}),Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsxs)("h3",{children:[t," - #",n]}),Object(m.jsx)("div",{className:"card-tags tags-types",children:a.map((function(e,t){return Object(m.jsx)(y,{type:e,children:Object(m.jsx)("p",{children:e})},e)}))}),Object(m.jsxs)("div",{className:"card-stats",children:[Object(m.jsx)("p",{className:"stats-text",children:"Basic stats:"}),Object(m.jsx)("div",{className:"card-tags  tag-stats",children:r.map((function(e,t){return t<3?Object(m.jsx)(y,{type:"stat",children:Object(m.jsxs)("p",{alt:e.name.split("-").join(" "),children:[w(e.name),": ",e.value]})},e.name):Object(m.jsx)(m.Fragment,{})}))})]})]})]})},C=function(e){var t=e.pokemons;return Object(m.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(m.jsx)(N,{name:e.name,cover:e.sprites.front_default,id:e.id,types:e.types,stats:e.stats},e.name)}))})},S=function(){document.title="Pok\xe9dex - Jos3s";var e=function(){var e=localStorage.getItem("@pokedex-app/theme");return console.log(e),"light"===e||"darker"===e?e:h&&"darker"===e||!h&&"darker"===e||h&&null==e?(u("darker"),"darker"):void 0}(),t=Object(c.useState)(e),n=Object(j.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),o=Object(j.a)(s,2),b=o[0],x=o[1],O=Object(c.useState)([]),f=Object(j.a)(O,2),y=f[0],w=f[1],N=Object(c.useState)(0),S=Object(j.a)(N,2),F=S[0],I=S[1],P=Object(c.useState)(7),L=Object(j.a)(P,1)[0],J=Object(c.useState)(""),M=Object(j.a)(J,2),A=M[0],D=M[1],B=Object(c.useState)("name"),E=Object(j.a)(B,2),T=E[0],V=E[1],_=F+L===889,G=0===F,R=A?y.filter((function(e){return"name"===T?e.name.toLowerCase().includes(A.toLowerCase()):"id"===T?e.id.toString().includes(A):e.types.join(" ").toLowerCase().includes(A.toLowerCase())})):b,Y=Object(c.useCallback)(function(){var e=Object(d.a)(l.a.mark((function e(t,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:c=e.sent,x(c.slice(t,n)),w(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),q=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F+L,e.next=3,p(t,L);case 3:n=e.sent,b.push.apply(b,Object(i.a)(n)),x(b),I(t),w(b);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Y(0,L)}),[Y,L]),Object(m.jsxs)("section",{className:"container ".concat(a),children:[Object(m.jsx)(v,{handleClick:function(){var e="light"===a?"darker":"light";u(e),r(e)},theme:a}),Object(m.jsxs)("div",{className:"search-container",children:[!!A&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:["Search: ",A]}),R.length>0?Object(m.jsx)("p",{children:Object(m.jsxs)("i",{children:[" ",R.length," pok\xe9mos finds"]})}):Object(m.jsx)("p",{})]}),Object(m.jsx)(g,{searchValue:A,handleChange:function(e){var t=e.target.value;D(t)}}),Object(m.jsxs)("div",{onChange:function(e){var t=e.target.value;console.log(t),V(t)},className:"filter-container",children:[Object(m.jsx)("p",{children:"Search for:"}),Object(m.jsxs)("label",{htmlFor:"radio-name",children:[Object(m.jsx)("span",{children:"Name"}),Object(m.jsx)("input",{type:"radio",name:"filter",value:"name",id:"radio-name",defaultChecked:"name"===T})]}),Object(m.jsxs)("label",{htmlFor:"radio-ID",children:[Object(m.jsx)("span",{children:"ID"}),Object(m.jsx)("input",{type:"radio",name:"filter",value:"id",id:"radio-ID"})]}),Object(m.jsxs)("label",{htmlFor:"radio-type",children:[Object(m.jsx)("span",{children:"Type"}),Object(m.jsx)("input",{type:"radio",name:"filter",value:"type",id:"radio-type"})]})]})]}),R.length>0&&Object(m.jsx)(C,{pokemons:R}),0===R.length&&Object(m.jsx)("p",{children:"Your search found no pok\xe9mons"}),Object(m.jsx)("div",{className:"button-container",children:!A&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{onClick:function(){var e=F-L;b.splice(F,L),x(b),I(e)},text:"Load less pok\xe9mons",disabled:G,type:"secondary"}),Object(m.jsx)(k,{onClick:q,text:"Load more pok\xe9mons",disable:_,type:"primary"})]})})]})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.380934a6.chunk.js.map