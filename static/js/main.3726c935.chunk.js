(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports={backgroundType:"plain",plainBackgroundMode:"daylight",devIntro:"Flight Atlas",devDesc:"Optimizing Global Transportation",gradientColors:"#EE7752, #E73C7E, #23A6D5, #23D5AB",backgroundImageUrl:"http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png",icons:[{image:"fa-regular fa-envelope",url:"https://forms.gle/r19qVbrxs3bEvnF87"},{image:"fab fa-x-twitter",url:"https://twitter.com/nimstr"},{image:"fab fa-linkedin",url:"https://www.linkedin.com/in/nimstr/"}]}},,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),s=(a(10),a(4)),c=a.n(s),l=(a(11),a(1));var d=class extends n.Component{constructor(e){super(e),this.componentWillMount=(()=>{if(this.checkIfPlainTypeEnabled())return!0;this.checkIfGradientTypeEnabled()?this.setState({appClass:"gradient",bgStyle:this.prepareGradientStyleSheets()}):this.checkIfImageTypeEnabled()&&this.setState({appClass:"full-bg-image",bgStyle:this.prepareBackgroundImageStyle()})}),this.checkIfNightModeEnabled=(()=>"plain"===this.state.backgroundType&&"nightlight"===this.state.appClass),this.checkIfDayModeEnabled=(()=>"plain"===this.state.backgroundType&&"daylight"===this.state.appClass),this.checkIfGradientTypeEnabled=(()=>"gradient"===this.state.backgroundType),this.checkIfPlainTypeEnabled=(()=>"plain"===this.state.backgroundType),this.checkIfImageTypeEnabled=(()=>"image"===this.state.backgroundType),this.prepareGradientStyleSheets=(()=>l.gradientColors?{background:"linear-gradient(-45deg, "+l.gradientColors+")",backgroundSize:"400% 400%"}:{background:"linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",backgroundSize:"400% 400%"}),this.prepareBackgroundImageStyle=(()=>l.backgroundImageUrl?{background:'url("'+l.backgroundImageUrl+'") no-repeat center center fixed',backgroundSize:"cover"}:{background:'url("/images/sample-background.jpg") no-repeat center center fixed',backgroundSize:"cover"}),this.getDefaultModeBasedOnBackgroundType=(()=>this.checkIfNightModeEnabled()?this.state.lightBackgroundModes[0]:this.checkIfDayModeEnabled()?this.state.darkBackgroundModes[0]:void 0),this.changeThemeMode=(e=>{this.checkIfNightModeEnabled()?this.setState({appClass:"daylight",backgroundIndex:0,backgroundMode:this.state.darkBackgroundModes[0]}):this.checkIfDayModeEnabled()&&this.setState({appClass:"nightlight",backgroundIndex:0,backgroundMode:this.state.lightBackgroundModes[0]})}),this.changeBackgroundBasedonMode=(()=>{}),this.state={darkBackgroundModes:["day","terminal","torquoise","alizarin","amythyst","carrot","peterriver"],lightBackgroundModes:["night","lightred","lightpurple","lightgreen","lightblue","lightyellow"],backgroundType:l.backgroundType||"plain",appClass:l.plainBackgroundMode||"daylight",devIntro:l.devIntro||"Lorem Ipsum",devDesc:l.devDesc||"Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",backgroundMode:"default",backgroundIndex:0,bgStyle:{},icons:l.icons||[]}}render(){const{appClass:e,bgStyle:t,backgroundMode:a,devIntro:n,devDesc:r,icons:i}=this.state;return o.a.createElement("div",{className:e,style:t},o.a.createElement("div",{className:a,onClick:this.changeBackgroundBasedonMode},o.a.createElement("main",{className:"App-main"},o.a.createElement("img",{src:"/images/globe.gif",alt:"Globe",style:{display:"block",margin:"0 auto",maxWidth:"100%"},onContextMenu:e=>e.preventDefault()}),o.a.createElement("h1",{className:"intro arvo-regular"},n),o.a.createElement("div",{className:"tagline"},o.a.createElement(c.a,null,r)),o.a.createElement("div",{className:"icons-social"},i.map(e=>o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url)},o.a.createElement("i",{className:"".concat(e.image)})))))))}};const g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const a=e.installing;null!=a&&(a.onstatechange=(()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):h(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(t,e)})}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.3726c935.chunk.js.map