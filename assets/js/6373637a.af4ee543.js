"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1889],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6963:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o={id:"client_credentials",title:"Client Credentials"},c=void 0,s={unversionedId:"client_credentials",id:"client_credentials",isDocsHomePage:!1,title:"Client Credentials",description:"The Client Credentials flow is used in server-to-server authentication.",source:"@site/docs/client_credentials.md",sourceDirName:".",slug:"/client_credentials",permalink:"/SpotifyAPI-NET/docs/client_credentials",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/client_credentials.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1643139158,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"client_credentials",title:"Client Credentials"},sidebar:"docs",previous:{title:"Introduction",permalink:"/SpotifyAPI-NET/docs/auth_introduction"},next:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/implicit_grant"}},l=[{value:"Request token once",id:"request-token-once",children:[]},{value:"Request Token On-Demand",id:"request-token-on-demand",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Client Credentials flow is used in server-to-server authentication.\nOnly endpoints that do not access user information can be accessed.")),(0,a.kt)("p",null,"By supplying your ",(0,a.kt)("inlineCode",{parentName:"p"},"SPOTIFY_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SPOTIFY_CLIENT_SECRET"),", you get an access token."),(0,a.kt)("h2",{id:"request-token-once"},"Request token once"),(0,a.kt)("p",null,"To request an access token, build a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientCredentialsRequest")," and send it via ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthClient"),". This access token will expire after some time and you need to repeat the process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static async Task Main()\n{\n  var config = SpotifyClientConfig.CreateDefault();\n\n  var request = new ClientCredentialsRequest("CLIENT_ID", "CLIENT_SECRET");\n  var response = await new OAuthClient(config).RequestToken(request);\n\n  var spotify = new SpotifyClient(config.WithToken(response.AccessToken));\n}\n')),(0,a.kt)("h2",{id:"request-token-on-demand"},"Request Token On-Demand"),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialsAuthenticator"),", which will make sure the Spotify instance will always have an up-to-date access token by automatically refreshing the token on demand."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static async Task Main()\n{\n  var config = SpotifyClientConfig\n    .CreateDefault()\n    .WithAuthenticator(new ClientCredentialsAuthenticator("CLIENT_ID", "CLIENT_SECRET"));\n\n  var spotify = new SpotifyClient(config);\n}\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Thread safety is not guaranteed when using ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialsAuthenticator"),"."))))}u.isMDXComponent=!0}}]);