(this["webpackJsonptest-react-mastery"]=this["webpackJsonptest-react-mastery"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(17),c=n.n(a),r=n(8),o=n.n(r),u=n(18),d=n(3),l=n(4),m=n(6),j=n(5),b=n(0),h=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.handleTextChange=function(t){e.setState({term:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"search-bar ui segment",children:Object(b.jsx)("form",{onSubmit:this.handleSubmit,className:"ui form",children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Video Search"}),Object(b.jsx)("input",{type:"text",value:this.state.term,onChange:this.handleTextChange})]})})})}}]),n}(i.a.Component),v=n(19),p=n.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAgfgEVnmpMVnyD8MtoQ-J3cvxurJbuopw"}}),O=(n(44),function(e){var t=e.video,n=e.onVideoSelect;return Object(b.jsxs)("div",{onClick:function(){return n(t)},className:"video-item item",children:[Object(b.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.medium.url}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"header",children:t.snippet.title})})]})}),x=function(e){var t=e.videos,n=e.onVideoSelect;if(0==t.length)return Object(b.jsx)("div",{});var s=t.map((function(e){return Object(b.jsx)(O,{video:e,onVideoSelect:n})}));return Object(b.jsx)("div",{className:"ui segment relaxed divided list",children:s})},f=function(e){var t=e.video;if(null==t)return Object(b.jsx)("div",{});var n="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("div",{className:"ui embed",children:Object(b.jsx)("iframe",{src:n})}),Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(b.jsx)("p",{children:t.snippet.description})]})]})},S=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(u.a)(o.a.mark((function t(n){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:n}});case 2:s=t.sent,e.setState({videos:s.data.items});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ui container",children:[Object(b.jsx)(h,{onFormSubmit:this.onTermSubmit}),Object(b.jsx)(f,{video:this.state.selectedVideo}),Object(b.jsx)(x,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})]})}}]),n}(i.a.Component);c.a.render(Object(b.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cb791bc8.chunk.js.map