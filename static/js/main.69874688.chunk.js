(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(14),a(6)),l=a(1),i=a(2),u=a(4),m=a(3),p=a(5),d=[{id:0,nume:"Andrei",score:0},{id:1,nume:"Andreea",score:0},{id:2,nume:"Costin",score:0},{id:3,nume:"Carmen",score:0}],h=(a(16),function(e){e.players.slice();for(var t=0,a=0;a<e.playersNo;a++)t+=e.players[a].score;return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,e.playersNo)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,t))))}),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={time:0,isRunning:!1},a.handleStart=function(){a.setState({isRunning:!a.state.isRunning})},a.tick=function(){a.state.isRunning&&a.setState({time:a.state.time+1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.Id=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.Id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},this.state.time),r.a.createElement("button",{onClick:this.handleStart},"Start"),r.a.createElement("button",null,"Reset"))}}]),t}(n.Component),f=function(e){var t=e.players,a=e.playersNo,n=e.title;return r.a.createElement("header",null,r.a.createElement(h,{playersNo:a,players:t}),r.a.createElement("h1",null,n),r.a.createElement("span",{className:"stats"}),r.a.createElement(y,null))},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={score:a.props.score},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return e.props.SetScore(e.props.id,-1)}},"-"),r.a.createElement("span",{className:"counter-score"},this.props.score),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return e.props.SetScore(e.props.id,1)}},"+"))}}]),t}(n.Component),b=function(e){return console.log("in Icon isMax : "+e.isMax),r.a.createElement("svg",{viewBox:"0 0 44 35",className:!0===e.isMax?"is-high-score":""},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"}))},E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).log=function(){return console.log(a.props.name+" rendered. isMax: "+a.props.isMax)},a.removeP=function(){return a.props.removePlayer(a.props.id)},a.state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.log(),r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement(b,{isMax:this.props.isMax}),r.a.createElement("button",{className:"remove-player",onClick:this.removeP},"\u2716 ")," ",this.props.name),r.a.createElement(v,{SetScore:this.props.SetScore,score:this.props.score,id:this.props.id}))}}]),t}(n.PureComponent),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.setState({value:e.target.value})},a.addPlayer=function(){return a.props.addPlayers},a.handleSubmit=function(e){e.preventDefault(),console.log("submit called"),a.props.addPlayers(a.state.value),a.setState({value:""})},a.state={value:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Enter a player's name",value:this.state.value,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Add Player"}))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:d},a.generateStaticId=function(){var e=a.state.players.length-1;return function(){return++e}},a.AddPlayerToPlayers=function(e){console.log("adding player "+e+" to Players array");a.generateStaticId();var t=Object(c.a)(a.state.players).concat([{nume:e,id:1+Math.max.apply(Math,Object(c.a)(a.state.players.map(function(e){return e.id}))),score:0}]);a.setState({players:t})},a.SetPlayersScore=function(e,t){a.setState({players:a.state.players.map(function(a){return a=a.id===e?Object.assign(a,{score:a.score+t}):a,console.log(a.score),a})})},a.setIsMax=function(e,t){return 0!==e&&e===t},a.removePlayer=function(e){a.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a=this,n=this.state.players;console.log(n),t=n[0].score;for(var o=0;o<n.length;o++)t<n[o].score&&(t=n[o].score,e=n[o].nume,!0);return console.log("max no found "+t),console.log("max element found "+e),r.a.createElement("div",{className:"scoreboard"},r.a.createElement(f,{title:"SCOREBOARD",playersNo:this.state.players.length,players:this.state.players}),this.state.players.map(function(e){return r.a.createElement(E,{key:e.id.toString(),id:e.id,name:e.nume,removePlayer:a.removePlayer,score:e.score,SetScore:a.SetPlayersScore,isMax:a.setIsMax(e.score,t)})}),r.a.createElement(g,{addPlayers:this.AddPlayerToPlayers}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.69874688.chunk.js.map