(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"Statistics_wrapper__MuFte"}},,,function(e,t,a){},,,,,function(e,t,a){e.exports={btn:"Button_btn__33KTs"}},function(e,t,a){e.exports={text:"Notification_text__1pT9q"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(5),r=a.n(s),o=a(6),i=a(7),d=a(8),b=a(12),l=a(11),u=a(4),j=a.n(u),p=a(0),h=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("section",{className:j.a.section,children:[t&&Object(p.jsx)("h1",{className:j.a.title,children:t}),a]})},f=a(9),m=a.n(f),x=function(e){var t=e.name,a=e.onLeaveFeedback;return Object(p.jsx)("button",{type:"button",name:t,onClick:a,className:m.a.btn,children:t})},O=function(e){var t=e.btnNames,a=e.onLeaveFeedback;return Object(p.jsx)("div",{className:"btnWrapper",children:t.map((function(e){return Object(p.jsx)(x,{name:e,onLeaveFeedback:a},e)}))})},k=a(1),v=a.n(k),g=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(p.jsxs)("div",{className:v.a.wrapper,children:[Object(p.jsxs)("span",{className:v.a.span,children:["Good: ",t]}),Object(p.jsxs)("span",{className:v.a.span,children:["Neutral: ",a]}),Object(p.jsxs)("span",{className:v.a.span,children:["Bad: ",n]}),Object(p.jsxs)("span",{className:v.a.span,children:["Total: ",c]}),Object(p.jsxs)("span",{className:v.a.span,children:["Positive feedback: ",s,"%"]})]})},N=a(10),F=a.n(N),P=function(e){var t=e.message;return Object(p.jsx)("p",{className:F.a.text,children:t})};P.defaultProps={message:"No feedback"};var _=P,w=(a(18),function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.floor(e.state.good/e.countTotalFeedback()*100)},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"appWrapper",children:[Object(p.jsx)(h,{title:"Please leave feedback",children:Object(p.jsx)(O,{onLeaveFeedback:this.addFeedback,btnNames:Object.keys(this.state)})}),Object(p.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()>0?Object(p.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(_,{message:"No feedback"})})]})}}]),a}(n.Component)),T=w;r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.1e535965.chunk.js.map