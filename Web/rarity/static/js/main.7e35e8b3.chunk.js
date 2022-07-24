(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var i=[{name:"Ethereum Mainnet",short_name:"eth",chain:"ETH",network:"mainnet",chain_id:1,network_id:1,rpc_url:"https://mainnet.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Ropsten",short_name:"rop",chain:"ETH",network:"ropsten",chain_id:3,network_id:3,rpc_url:"https://ropsten.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Rinkeby",short_name:"rin",chain:"ETH",network:"rinkeby",chain_id:4,network_id:4,rpc_url:"https://rinkeby.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum G\xf6rli",short_name:"gor",chain:"ETH",network:"goerli",chain_id:5,network_id:5,rpc_url:"https://goerli.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"RSK Mainnet",short_name:"rsk",chain:"RSK",network:"mainnet",chain_id:30,network_id:30,rpc_url:"https://public-node.rsk.co",native_currency:{symbol:"RSK",name:"RSK",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Kovan",short_name:"kov",chain:"ETH",network:"kovan",chain_id:42,network_id:42,rpc_url:"https://kovan.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Classic Mainnet",short_name:"etc",chain:"ETC",network:"mainnet",chain_id:61,network_id:1,rpc_url:"https://ethereumclassic.network",native_currency:{symbol:"ETH",name:"Ether Classic",decimals:"18",contractAddress:"",balance:""}},{name:"POA Network Sokol",short_name:"poa",chain:"POA",network:"sokol",chain_id:77,network_id:77,rpc_url:"https://sokol.poa.network",native_currency:{symbol:"POA",name:"POA",decimals:"18",contractAddress:"",balance:""}},{name:"POA Network Core",short_name:"skl",chain:"POA",network:"core",chain_id:99,network_id:99,rpc_url:"https://core.poa.network",native_currency:{symbol:"POA",name:"POA",decimals:"18",contractAddress:"",balance:""}},{name:"xDAI Chain",short_name:"xdai",chain:"POA",network:"dai",chain_id:100,network_id:100,rpc_url:"https://dai.poa.network",native_currency:{symbol:"xDAI",name:"xDAI",decimals:"18",contractAddress:"",balance:""}},{name:"Callisto Mainnet",short_name:"clo",chain:"callisto",network:"mainnet",chain_id:820,network_id:1,rpc_url:"https://clo-geth.0xinfra.com/",native_currency:{symbol:"CLO",name:"CLO",decimals:"18",contractAddress:"",balance:""}},{name:"Polygon Testnet Mumbai",chain:"Polygon",network:"mumbai",rpc_url:"https://rpc-mumbai.maticvigil.com",native_currency:{name:"MATIC",symbol:"MATIC",decimals:"18",contractAddress:"",balance:""},short_name:"maticmum",chain_id:80001,network_id:80001},{name:"Polygon Mainnet",chain:"Polygon",network:"mainnet",rpc_url:"https://rpc-mainnet.maticvigil.com",native_currency:{name:"MATIC",symbol:"MATIC",decimals:"18",contractAddress:"",balance:""},short_name:"MATIC",chain_id:137,network_id:137},{name:"Avalanche Fuji Testnet",chain:"AVAX",network:"fuji",rpc_url:"https://api.avax-test.network/ext/bc/C/rpc",native_currency:{name:"Avalanche",symbol:"AVAX",decimals:"18",contractAddress:"",balance:""},short_name:"Fuji",chain_id:43113,network_id:1},{name:"Avalanche Mainnet",chain:"AVAX",network:"mainnet",rpc_url:"https://api.avax.network/ext/bc/C/rpc",native_currency:{name:"Avalanche",symbol:"AVAX",decimals:"18",contractAddress:"",balance:""},short_name:"Avalanche",chain_id:43114,network_id:43114},{name:"Arbitrum One",chain_id:42161,network_id:42161,network:"mainnet",short_name:"arb1",chain:"ETH",native_currency:{name:"Ether",symbol:"AETH",decimals:"18",contractAddress:"",balance:""},rpc_url:"https://arbitrum-mainnet.infura.io/v3/%API_KEY%"},{name:"Optimism",chain:"ETH",rpc_url:"https://mainnet.optimism.io/",network:"mainnet",native_currency:{name:"Ether",symbol:"OETH",decimals:"18",contractAddress:"",balance:""},short_name:"oeth",chain_id:10,network_id:10}]},197:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var i=t(11),r=t(78),o=t(292);var a={spec:{magicValue:"0x1626ba7e",abi:[{constant:!0,inputs:[{name:"_hash",type:"bytes32"},{name:"_sig",type:"bytes"}],name:"isValidSignature",outputs:[{name:"magicValue",type:"bytes4"}],payable:!1,stateMutability:"view",type:"function"}]},isValidSignature:function(n,e,t,c,s,l){return void 0===s&&(s=a.spec.abi),void 0===l&&(l=a.spec.magicValue),Object(i.b)(this,void 0,Promise,function(){var a;return Object(i.d)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,new r.a(n,s,c).isValidSignature(o.b.arrayify(t),e)];case 1:return a=i.sent(),[3,3];case 2:return i.sent(),[2,!1];case 3:return[2,a.toLowerCase()===l.toLowerCase()]}})})}}},204:function(n,e,t){n.exports=t(367)},211:function(n,e){},268:function(n,e){},270:function(n,e){},285:function(n,e){},293:function(n,e){},320:function(n,e){},322:function(n,e){},345:function(n,e){},347:function(n,e){},348:function(n,e){},349:function(n,e){},367:function(n,e,t){"use strict";t.r(e);var i=t(11),r=t(10),o=t.n(r),a=t(185),c=t(15),s=t(291),l=t(192),d=t.n(l),u=t(40),p={white:"255, 255, 255",black:"0, 0, 0",dark:"12, 12, 13",grey:"169, 169, 188",darkGrey:"113, 119, 138",lightGrey:"212, 212, 212",blue:"101, 127, 230",lightBlue:"64, 153, 255",yellow:"250, 188, 45",orange:"246, 133, 27",green:"84, 209, 146",pink:"255, 51, 102",red:"214, 75, 71",purple:"110, 107, 233"},h={tiny:"10px",small:"14px",medium:"16px",large:"18px",h1:"60px",h2:"50px",h3:"40px",h4:"32px",h5:"24px",h6:"20px"},b={normal:400,medium:500,semibold:600,bold:700,extrabold:800},m="all 0.1s ease-in-out",f="all 0.2s ease-in-out",g="all 0.15s ease-in-out",w="0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",x="0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",v="\n\n  html, body, #root {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: "+{OpenSans:'"Open Sans", sans-serif'}.OpenSans+";\n    font-style: normal;\n    font-stretch: normal;\n    font-weight: "+b.normal+";\n    font-size: "+h.medium+";\n    background-color: rgb("+p.white+");\n    color: rgb("+p.dark+");\n    overflow-y:auto;\n    text-rendering: optimizeLegibility;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  \t-webkit-text-size-adjust: 100%;\n    -webkit-overflow-scrolling: touch;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;  \n  }\n\n  button {\n    border-style: none;\n    line-height: 1em;\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n\n  [tabindex] {\n    outline: none;\n    width: 100%;\n    height: 100%;\n  }\n\n  a, p, h1, h2, h3, h4, h5, h6 {\n  \ttext-decoration: none;\n  \tmargin: 0;\n    padding: 0;\n    margin: 0.7em 0;\n  }\n\n  h1 {\n    font-size: "+h.h1+"\n  }\n  h2 {\n    font-size: "+h.h2+"\n  }\n  h3 {\n    font-size: "+h.h3+"\n  }\n  h4 {\n    font-size: "+h.h4+"\n  }\n  h5 {\n    font-size: "+h.h5+"\n  }\n  h6 {\n    font-size: "+h.h6+'\n  }\n\n  a {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;  \n    text-decoration: none;\n    color: inherit;\n    outline: none;\n  }\n\n  b,\n  strong {\n    font-weight: inherit;\n    font-weight: bolder;\n  }\n\n  ul, li {\n  \tlist-style: none;\n  \tmargin: 0;\n  \tpadding: 0;\n  }\n\n  * {\n    box-sizing: border-box !important;\n  }\n\n\n  input {\n    -webkit-appearance: none;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n  audio,\n  canvas,\n  progress,\n  video {\n    display: inline-block;\n  }\n\n  input[type="color"],\n  input[type="date"],\n  input[type="datetime"],\n  input[type="datetime-local"],\n  input[type="email"],\n  input[type="month"],\n  input[type="number"],\n  input[type="password"],\n  input[type="search"],\n  input[type="tel"],\n  input[type="text"],\n  input[type="time"],\n  input[type="url"],\n  input[type="week"],\n  select:focus,\n  textarea {\n    font-size: 16px;\n  }\n',y=Object(c.c)(O||(O=Object(i.e)(["\n  0% {\n    transform: scale(1.0);\n  }\n  5% {\n    transform: scale(1.0);\n  }\n  50% {\n    transform: scale(0.8);\n  }\n  95% {\n    transform: scale(1.0);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n"],["\n  0% {\n    transform: scale(1.0);\n  }\n  5% {\n    transform: scale(1.0);\n  }\n  50% {\n    transform: scale(0.8);\n  }\n  95% {\n    transform: scale(1.0);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n"]))),j=c.b.svg(_||(_=Object(i.e)(["\n  width: ",";\n  height: ",";\n  animation: "," 1s infinite cubic-bezier(0.25, 0, 0.75, 1);\n  transform: translateZ(0);\n"],["\n  width: ",";\n  height: ",";\n  animation: "," 1s infinite cubic-bezier(0.25, 0, 0.75, 1);\n  transform: translateZ(0);\n"])),function(n){return n.size+"px"},function(n){return n.size+"px"},y),k=function(n){var e=n.size,t=n.color,i="rgb("+p[t]+")";return r.createElement(j,{viewBox:"0 0 186 187",size:e},r.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M60,10.34375 C32.3857625,10.34375 10,32.7295125 10,60.34375 L10,126.34375 C10,153.957987 32.3857625,176.34375 60,176.34375 L126,176.34375 C153.614237,176.34375 176,153.957987 176,126.34375 L176,60.34375 C176,32.7295125 153.614237,10.34375 126,10.34375 L60,10.34375 Z M60,0.34375 L126,0.34375 C159.137085,0.34375 186,27.206665 186,60.34375 L186,126.34375 C186,159.480835 159.137085,186.34375 126,186.34375 L60,186.34375 C26.862915,186.34375 0,159.480835 0,126.34375 L0,60.34375 C0,27.206665 26.862915,0.34375 60,0.34375 Z",id:"Rectangle-Copy",fill:i,fillRule:"nonzero"}),r.createElement("rect",{id:"Rectangle",fill:i,x:"44",y:"44.34375",width:"98",height:"98",rx:"35"})))};k.propTypes={size:u.number,color:u.string},k.defaultProps={size:40,color:"lightBlue"};var O,_,E=k,A=c.b.div(P||(P=Object(i.e)(["\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  margin: 0 8px;\n  top: calc((100% - 15px) / 2);\n"],["\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  margin: 0 8px;\n  top: calc((100% - 15px) / 2);\n"]))),z=c.b.div(S||(S=Object(i.e)(["\n  transition: ",";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(",", 0.1);\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n"],["\n  transition: ",";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(",", 0.1);\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n"])),g,p.white),C=c.b.button(I||(I=Object(i.e)(["\n  transition: ",";\n  position: relative;\n  border: none;\n  border-style: none;\n  box-sizing: border-box;\n  background-color: ",";\n  border: ",";\n  color: ",";\n  box-shadow: ",";\n  border-radius: 8px;\n  font-size: ",";\n  font-weight: ",";\n  padding: ",";\n  cursor: ",";\n  will-change: transform;\n\n  &:disabled {\n    opacity: 0.6;\n    box-shadow: ",";\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      transform: ",";\n      box-shadow: ",";\n    }\n\n    &:hover "," {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n\n  &:active {\n    transform: ",";\n    box-shadow: ",";\n    color: ",";\n\n    & "," {\n      opacity: 0.8;\n    }\n  }\n\n  & "," {\n    right: ",";\n    left: ",";\n    display: ",";\n    mask: ",";\n    background-color: ",";\n    transition: 0.15s ease;\n  }\n"],["\n  transition: ",";\n  position: relative;\n  border: none;\n  border-style: none;\n  box-sizing: border-box;\n  background-color: ",";\n  border: ",";\n  color: ",";\n  box-shadow: ",";\n  border-radius: 8px;\n  font-size: ",";\n  font-weight: ",";\n  padding: ",";\n  cursor: ",";\n  will-change: transform;\n\n  &:disabled {\n    opacity: 0.6;\n    box-shadow: ",";\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      transform: ",";\n      box-shadow: ",";\n    }\n\n    &:hover "," {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n\n  &:active {\n    transform: ",";\n    box-shadow: ",";\n    color: ",";\n\n    & "," {\n      opacity: 0.8;\n    }\n  }\n\n  & "," {\n    right: ",";\n    left: ",";\n    display: ",";\n    mask: ",";\n    background-color: ",";\n    transition: 0.15s ease;\n  }\n"])),g,function(n){var e=n.outline,t=n.color;return e?"transparent":"rgb("+p[t]+")"},function(n){var e=n.outline,t=n.color;return e?"1px solid rgb("+p[t]+")":"none"},function(n){var e=n.outline,t=n.color;return e?"rgb("+p[t]+")":"rgb("+p.white+")"},function(n){return n.outline?"none":""+w},h.medium,b.semibold,function(n){var e=n.icon,t=n.left;return e?t?"7px 12px 8px 28px":"7px 28px 8px 12px":"8px 12px"},function(n){return n.disabled?"auto":"pointer"},function(n){return n.outline?"none":""+w},function(n){return n.disabled?"none":"translateY(-1px)"},function(n){var e=n.disabled,t=n.outline;return e?""+w:t?"none":""+x},z,function(n){return n.disabled?"none":"translateY(1px)"},function(n){return n.outline?"none":""+w},function(n){var e=n.outline,t=n.color;return e?"rgb("+p[t]+")":"rgba("+p.white+", 0.24)"},A,A,function(n){return n.left?"auto":"0"},function(n){return n.left?"0":"auto"},function(n){return n.icon?"block":"none"},function(n){var e=n.icon;return e?"url("+e+") center no-repeat":"none"},function(n){var e=n.outline,t=n.color;return e?"rgb("+p[t]+")":"rgb("+p.white+")"}),T=function(n){return r.createElement(C,Object(i.a)({},n,{type:n.type,outline:n.outline,color:n.color,disabled:n.disabled,icon:n.icon,left:n.left}),r.createElement(z,null),r.createElement(A,null),n.fetching?r.createElement(E,{size:20,color:"white"}):n.children)};T.defaultProps={fetching:!1,outline:!1,type:"button",color:"lightBlue",disabled:!1,icon:null,left:!1};var P,S,I,R=T,M=c.b.div(L||(L=Object(i.e)(["\n  position: relative;\n  width: 100%;\n  height: ",";\n  max-width: ",";\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: ",";\n"],["\n  position: relative;\n  width: 100%;\n  height: ",";\n  max-width: ",";\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: ",";\n"])),function(n){return n.spanHeight?"100%":"auto"},function(n){return n.maxWidth+"px"},function(n){return n.center?"center":"flex-start"}),H=function(n){var e=n.children,t=n.spanHeight,o=n.maxWidth,a=n.center;return r.createElement(M,Object(i.a)({},n,{spanHeight:t,maxWidth:o,center:a}),e)};H.propTypes={children:u.node.isRequired,spanHeight:u.bool,maxWidth:u.number,center:u.bool},H.defaultProps={spanHeight:!1,maxWidth:600,center:!1};var L,q=H,K=Object(c.c)(D||(D=Object(i.e)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"],["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),V=c.b.div(B||(B=Object(i.e)(["\n  will-change: transform, opacity;\n  animation: "," 0.7s ease 0s normal 1;\n  min-height: 200px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: ",";\n"],["\n  will-change: transform, opacity;\n  animation: "," 0.7s ease 0s normal 1;\n  min-height: 200px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: ",";\n"])),K,function(n){return n.center?"center":"flex-start"}),Y=function(n){var e=n.children,t=n.center;return r.createElement(V,Object(i.a)({},n,{center:t}),e)};Y.propTypes={children:u.node.isRequired,center:u.bool},Y.defaultProps={center:!1};var D,B,U,W,N,F,X,Z,G=Y,J=c.b.div(U||(U=Object(i.e)(["\n  transition: opacity 0.1s ease-in-out;\n  text-align: center;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  margin-left: -50vw;\n  top: ",";\n  left: 50%;\n  z-index: 2;\n  will-change: opacity;\n  background-color: ",";\n  opacity: ",";\n  visibility: ",";\n  pointer-events: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  transition: opacity 0.1s ease-in-out;\n  text-align: center;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  margin-left: -50vw;\n  top: ",";\n  left: 50%;\n  z-index: 2;\n  will-change: opacity;\n  background-color: ",";\n  opacity: ",";\n  visibility: ",";\n  pointer-events: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),function(n){var e=n.offset;return e?"-"+e+"px":0},function(n){var e=n.opacity,t=.4;return"number"===typeof e&&(t=e),"rgba(0, 0, 0, "+t+")"},function(n){return n.show?1:0},function(n){return n.show?"visible":"hidden"},function(n){return n.show?"auto":"none"}),Q=c.b.div(W||(W=Object(i.e)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),$=c.b.div(N||(N=Object(i.e)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]))),nn=c.b.div(F||(F=Object(i.e)(["\n  transition: ",";\n  position: absolute;\n  width: ",";\n  height: ",";\n  right: ",";\n  top: ",';\n  opacity: 0.5;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &:before,\n  &:after {\n    position: absolute;\n    content: " ";\n    height: ',";\n    width: 2px;\n    background: ",";\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"],["\n  transition: ",";\n  position: absolute;\n  width: ",";\n  height: ",";\n  right: ",";\n  top: ",';\n  opacity: 0.5;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &:before,\n  &:after {\n    position: absolute;\n    content: " ";\n    height: ',";\n    width: 2px;\n    background: ",";\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"])),m,function(n){return n.size+"px"},function(n){return n.size+"px"},function(n){return n.size/1.6667+"px"},function(n){return n.size/1.6667+"px"},function(n){return n.size+"px"},function(n){var e=n.color;return"rgb("+p[e]+")"}),en=c.b.div(X||(X=Object(i.e)(["\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  padding: 25px;\n  background-color: rgb(",");\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"],["\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  padding: 25px;\n  background-color: rgb(",");\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),p.white),tn=c.b.div(Z||(Z=Object(i.e)(["\n  position: relative;\n  width: 100%;\n  position: relative;\n  word-wrap: break-word;\n"],["\n  position: relative;\n  width: 100%;\n  position: relative;\n  word-wrap: break-word;\n"]))),rn={offset:0},on=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.state=Object(i.a)({},rn),e.toggleModal=function(){return Object(i.b)(e,void 0,void 0,function(){var n,e;return Object(i.d)(this,function(t){return n="undefined"!==typeof window?document:"",(e=n?n.body||n.getElementsByTagName("body")[0]:"")&&(this.props.show?e.style.position="":e.style.position="fixed"),this.props.toggleModal(),[2]})})},e}return Object(i.c)(e,n),e.prototype.componentDidUpdate=function(){if(this.lightbox){var n=this.lightbox.getBoundingClientRect(),e=n.top>0?n.top:0;e!==rn.offset&&e!==this.state.offset&&this.setState({offset:e})}},e.prototype.render=function(){var n=this,e=this.state.offset,t=this.props,i=t.children,o=t.show,a=t.opacity;return r.createElement(J,{show:o,offset:e,opacity:a,ref:function(e){return n.lightbox=e}},r.createElement(Q,null,r.createElement($,{onClick:this.toggleModal}),r.createElement(en,null,r.createElement(nn,{size:25,color:"dark",onClick:this.toggleModal}),r.createElement(tn,null,i))))},e.propTypes={children:u.node.isRequired,show:u.bool.isRequired,toggleModal:u.func.isRequired,opacity:u.number},e}(r.Component),an=c.b.div(sn||(sn=Object(i.e)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  overflow: hidden;\n  & img {\n    width: 100%;\n  }\n"],["\n  width: ",";\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  overflow: hidden;\n  & img {\n    width: 100%;\n  }\n"])),function(n){return n.size+"px"},function(n){return n.size+"px"}),cn=function(n){var e=n.address.toLowerCase()||"",t=window.blockies.create({seed:e}).toDataURL();return r.createElement(an,Object(i.a)({},n,{size:n.size}),r.createElement("img",{src:t,alt:n.address}))};cn.defaultProps={address:"0x0000000000000000000000000000000000000000",size:30};var sn,ln,dn,un,pn,hn,bn,mn,fn=cn,gn=t(55),wn=c.b.div(ln||(ln=Object(i.e)(["\n  margin-top: -1px;\n  margin-bottom: 1px;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n"],["\n  margin-top: -1px;\n  margin-bottom: 1px;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n"]))),xn=c.b.div(dn||(dn=Object(i.e)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-weight: 500;\n"],["\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-weight: 500;\n"]))),vn=Object(c.b)(xn)(un||(un=Object(i.e)(["\n  flex-direction: column;\n  text-align: left;\n  align-items: flex-start;\n  & p {\n    font-size: 0.8em;\n    margin: 0;\n    padding: 0;\n  }\n  & p:nth-child(2) {\n    font-weight: bold;\n  }\n"],["\n  flex-direction: column;\n  text-align: left;\n  align-items: flex-start;\n  & p {\n    font-size: 0.8em;\n    margin: 0;\n    padding: 0;\n  }\n  & p:nth-child(2) {\n    font-weight: bold;\n  }\n"]))),yn=Object(c.b)(fn)(pn||(pn=Object(i.e)(["\n  margin-right: 10px;\n"],["\n  margin-right: 10px;\n"]))),jn=c.b.p(hn||(hn=Object(i.e)(["\n  transition: ",";\n  font-weight: bold;\n  margin: ",";\n"],["\n  transition: ",";\n  font-weight: bold;\n  margin: ",";\n"])),f,function(n){return n.connected?"-2px auto 0.7em":"0"}),kn=c.b.div(bn||(bn=Object(i.e)(["\n  transition: ",";\n  font-weight: bold;\n  color: red;\n"],["\n  transition: ",";\n  font-weight: bold;\n  color: red;\n"])),f),On=c.b.div(mn||(mn=Object(i.e)(["\n  transition: ",";\n  font-size: 12px;\n  font-family: monospace;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  opacity: 0.7;\n  cursor: pointer;\n\n  opacity: ",";\n  visibility: ",";\n  pointer-events: ",";\n\n  &:hover {\n    transform: translateY(-1px);\n    opacity: 0.5;\n  }\n"],["\n  transition: ",";\n  font-size: 12px;\n  font-family: monospace;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  opacity: 0.7;\n  cursor: pointer;\n\n  opacity: ",";\n  visibility: ",";\n  pointer-events: ",";\n\n  &:hover {\n    transform: translateY(-1px);\n    opacity: 0.5;\n  }\n"])),g,function(n){return n.connected?1:0},function(n){return n.connected?"visible":"hidden"},function(n){return n.connected?"auto":"none"}),_n=function(n){var e=n.connected,t=n.address,i=n.chainId,r=n.killSession,a=null;try{a=i?Object(gn.b)(i).name:null}catch(c){console.error(c)}return o.a.createElement(wn,null,e&&o.a.createElement(vn,null,a?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Connected to"),o.a.createElement("p",null,a)):o.a.createElement(kn,null,o.a.createElement("p",null,"Chain not supported."),o.a.createElement("p",null,"Please switch to a supported chain in your wallet."))),t&&o.a.createElement(xn,null,o.a.createElement(yn,{address:t}),o.a.createElement(jn,{connected:e},Object(gn.a)(t)),o.a.createElement(On,{connected:e,onClick:r},"Disconnect")))},En=t(202),An=t.n(En).a.create({baseURL:"https://ethereum-api.xyz",timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json"}});var zn=function(n,e){return Object(i.b)(void 0,void 0,Promise,function(){var t;return Object(i.d)(this,function(i){switch(i.label){case 0:return[4,An.get("/account-nonce?address="+n+"&chainId="+e)];case 1:return t=i.sent(),[2,t.data.result]}})})},Cn=function(){return Object(i.b)(void 0,void 0,Promise,function(){var n;return Object(i.d)(this,function(e){switch(e.label){case 0:return[4,An.get("/gas-prices")];case 1:return n=e.sent(),[2,n.data.result]}})})},Tn=t(17),Pn=t.n(Tn);function Sn(n){return new Pn.a(""+n).toString(16)}var In,Rn,Mn,Hn,Ln,qn,Kn,Vn,Yn,Dn,Bn,Un,Wn,Nn,Fn,Xn,Zn,Gn=c.b.div(In||(In=Object(i.e)(["\n  position: relative;\n  width: 100%;\n  /* height: 100%; */\n  min-height: 100vh;\n  text-align: center;\n"],["\n  position: relative;\n  width: 100%;\n  /* height: 100%; */\n  min-height: 100vh;\n  text-align: center;\n"]))),Jn=Object(c.b)(G)(Rn||(Rn=Object(i.e)(["\n  width: 100%;\n  height: 100%;\n  padding: 0 16px;\n"],["\n  width: 100%;\n  height: 100%;\n  padding: 0 16px;\n"]))),Qn=Object(c.b)(q)(Mn||(Mn=Object(i.e)(["\n  height: 600px;\n"],["\n  height: 600px;\n"]))),$n=Object(c.b)(q)(Hn||(Hn=Object(i.e)(["\n  width: 250px;\n  margin: 50px 0;\n"],["\n  width: 250px;\n  margin: 50px 0;\n"]))),ne=Object(c.b)(R)(Ln||(Ln=Object(i.e)(["\n  border-radius: 8px;\n  font-size: ",";\n  height: 44px;\n  width: 100%;\n  margin: 12px 0;\n"],["\n  border-radius: 8px;\n  font-size: ",";\n  height: 44px;\n  width: 100%;\n  margin: 12px 0;\n"])),h.medium),ee=c.b.div(qn||(qn=Object(i.e)(["\n  height: 100%;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  word-break: break-word;\n"],["\n  height: 100%;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  word-break: break-word;\n"]))),te=c.b.div(Kn||(Kn=Object(i.e)(["\n  width: 100%;\n  position: relative;\n  word-wrap: break-word;\n"],["\n  width: 100%;\n  position: relative;\n  word-wrap: break-word;\n"]))),ie=c.b.div(Vn||(Vn=Object(i.e)(["\n  margin: 1em 0;\n  font-size: 20px;\n  font-weight: 700;\n"],["\n  margin: 1em 0;\n  font-size: 20px;\n  font-weight: 700;\n"]))),re=c.b.p(Yn||(Yn=Object(i.e)(["\n  margin-top: 30px;\n"],["\n  margin-top: 30px;\n"]))),oe=Object(c.b)(Qn)(Dn||(Dn=Object(i.e)(["\n  height: 100%;\n  & h3 {\n    padding-top: 30px;\n  }\n"],["\n  height: 100%;\n  & h3 {\n    padding-top: 30px;\n  }\n"]))),ae=Object(c.b)(ee)(Bn||(Bn=Object(i.e)(["\n  flex-direction: column;\n  text-align: left;\n"],["\n  flex-direction: column;\n  text-align: left;\n"]))),ce=c.b.div(Un||(Un=Object(i.e)(["\n  width: 100%;\n  display: flex;\n  margin: 6px 0;\n"],["\n  width: 100%;\n  display: flex;\n  margin: 6px 0;\n"]))),se=c.b.div(Wn||(Wn=Object(i.e)(["\n  width: 30%;\n  font-weight: 700;\n"],["\n  width: 30%;\n  font-weight: 700;\n"]))),le=c.b.div(Nn||(Nn=Object(i.e)(["\n  width: 70%;\n  font-family: monospace;\n"],["\n  width: 70%;\n  font-family: monospace;\n"]))),de=c.b.div(Fn||(Fn=Object(i.e)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),ue=Object(c.b)(R)(Xn||(Xn=Object(i.e)(["\n  border-radius: 8px;\n  font-size: ",";\n  height: 44px;\n  width: 100%;\n  max-width: 175px;\n  margin: 12px;\n"],["\n  border-radius: 8px;\n  font-size: ",";\n  height: 44px;\n  width: 100%;\n  max-width: 175px;\n  margin: 12px;\n"])),h.medium),pe={connector:null,fetching:!1,connected:!1,chainId:1,showModal:!1,pendingRequest:!1,uri:"",accounts:[],address:"",result:null,assets:[]},he=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.state=Object(i.a)({},pe),e.connect=function(){return Object(i.b)(e,void 0,void 0,function(){var n;return Object(i.d)(this,function(e){switch(e.label){case 0:return"https://bridge.walletconnect.org",n=new s.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:d.a}),[4,this.setState({connector:n})];case 1:return e.sent(),n.connected?[3,3]:[4,n.createSession()];case 2:e.sent(),e.label=3;case 3:return[4,this.subscribeToEvents()];case 4:return e.sent(),[2]}})})},e.subscribeToEvents=function(){var n=e.state.connector;if(n){if(n.on("session_update",function(n,t){return Object(i.b)(e,void 0,void 0,function(){var e,r,o;return Object(i.d)(this,function(i){if(console.log('connector.on("session_update")'),n)throw n;return e=t.params[0],r=e.chainId,o=e.accounts,this.onSessionUpdate(o,r),[2]})})}),n.on("connect",function(n,t){if(console.log('connector.on("connect")'),n)throw n;e.onConnect(t)}),n.on("disconnect",function(n,t){if(console.log('connector.on("disconnect")'),n)throw n;e.onDisconnect()}),n.connected){var t=n.chainId,r=n.accounts,o=r[0];e.setState({connected:!0,chainId:t,accounts:r,address:o}),e.onSessionUpdate(r,t)}e.setState({connector:n})}},e.killSession=function(){return Object(i.b)(e,void 0,void 0,function(){var n;return Object(i.d)(this,function(e){return(n=this.state.connector)&&n.killSession(),this.resetApp(),[2]})})},e.resetApp=function(){return Object(i.b)(e,void 0,void 0,function(){return Object(i.d)(this,function(n){switch(n.label){case 0:return[4,this.setState(Object(i.a)({},pe))];case 1:return n.sent(),[2]}})})},e.onConnect=function(n){return Object(i.b)(e,void 0,void 0,function(){var e,t,r,o;return Object(i.d)(this,function(i){switch(i.label){case 0:return e=n.params[0],t=e.chainId,r=e.accounts,o=r[0],[4,this.setState({connected:!0,chainId:t,accounts:r,address:o})];case 1:return i.sent(),[2]}})})},e.onDisconnect=function(){return Object(i.b)(e,void 0,void 0,function(){return Object(i.d)(this,function(n){return this.resetApp(),[2]})})},e.onSessionUpdate=function(n,t){return Object(i.b)(e,void 0,void 0,function(){var e;return Object(i.d)(this,function(i){switch(i.label){case 0:return e=n[0],[4,this.setState({chainId:t,accounts:n,address:e})];case 1:return i.sent(),[2]}})})},e.toggleModal=function(){return e.setState({showModal:!e.state.showModal})},e.testSendTransaction=function(){return Object(i.b)(e,void 0,void 0,function(){var n,e,t,r,o,a,c,s,l,d,u,p,h,b,m,f,g,w;return Object(i.d)(this,function(i){switch(i.label){case 0:return n=this.state,e=n.connector,t=n.address,r=n.chainId,e?(o=t,a=t,[4,zn(t,r)]):[2];case 1:return c=i.sent(),s=Object(gn.c)(Sn(c)),[4,Cn()];case 2:l=i.sent(),d=l.slow.price,u=Object(gn.c)(Sn(function(n,e){return void 0===e&&(e=18),new Pn.a(""+n).times(new Pn.a("10").pow(e)).toString()}(d,9))),21e3,p=Object(gn.c)(Sn(21e3)),h=0,b=Object(gn.c)(Sn(h)),"0x",m={from:o,to:a,nonce:s,gasPrice:u,gasLimit:p,value:b,data:"0x"},i.label=3;case 3:return i.trys.push([3,5,,6]),this.toggleModal(),this.setState({pendingRequest:!0}),[4,e.sendTransaction(m)];case 4:return f=i.sent(),g={method:"eth_sendTransaction",txHash:f,from:t,to:t,value:h+" ETH"},this.setState({connector:e,pendingRequest:!1,result:g||null}),[3,6];case 5:return w=i.sent(),console.error(w),this.setState({connector:e,pendingRequest:!1,result:null}),[3,6];case 6:return[2]}})})},e.render=function(){var n=e.state,t=n.assets,i=n.address,o=n.connected,a=n.chainId,c=n.fetching,s=n.showModal,l=n.pendingRequest,d=n.result;return r.createElement(Gn,null,r.createElement(q,{maxWidth:1e3,spanHeight:!0},r.createElement(_n,{connected:o,address:i,chainId:a,killSession:e.killSession}),r.createElement(Jn,null,i||t.length?r.createElement(oe,null,r.createElement(de,null,r.createElement(ue,{left:!0,onClick:e.testSendTransaction},"eth_sendTransaction"))):r.createElement($n,null,r.createElement(ne,{left:!0,onClick:e.connect,fetching:c},"Connect to WalletConnect")))),r.createElement(on,{show:s,toggleModal:e.toggleModal},l?r.createElement(te,null,r.createElement(ie,null,"Pending Call Request"),r.createElement(ee,null,r.createElement(E,null),r.createElement(re,null,"Approve or reject request using your wallet"))):d?r.createElement(te,null,r.createElement(ie,null,"Call Request Approved"),r.createElement(ae,null,Object.keys(d).map(function(n){return r.createElement(ce,{key:n},r.createElement(se,null,n),r.createElement(le,null,d[n].toString()))}))):r.createElement(te,null,r.createElement(ie,null,"Call Request Rejected"))))},e}return Object(i.c)(e,n),e}(r.Component),be=Object(c.a)(Zn||(Zn=Object(i.e)(["\n  ","\n"],["\n  ","\n"])),v);a.render(r.createElement(r.Fragment,null,r.createElement(be,null),r.createElement(he,null)),document.getElementById("walletconnectRoot"))},55:function(n,e,t){"use strict";(function(n){t.d(e,"a",function(){return o}),t.d(e,"c",function(){return a}),t.d(e,"b",function(){return c});var i=t(11),r=(t(292),t(14),t(99),t(42),t(196));t(197);function o(n,e){return void 0===n&&(n=""),void 0===e&&(e=10),n.slice(0,e)+"..."+n.slice(-e)}function a(n){return""===(n="0x"===n.substring(0,2)?n.substring(2):n)?"":"0x"+(n=n.length%2!==0?"0"+n:n)}function c(n){var e=r.a.filter(function(e){return e.chain_id===n})[0];if(!e)throw new Error("ChainId missing or not supported");var t=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_VERSION:"1.0"}).REACT_APP_INFURA_PROJECT_ID;if(e.rpc_url.includes("infura.io")&&e.rpc_url.includes("%API_KEY%")&&t){var o=e.rpc_url.replace("%API_KEY%",t);return Object(i.a)(Object(i.a)({},e),{rpc_url:o})}return e}}).call(this,t(19).Buffer)}},[[204,2,1]]]);
//# sourceMappingURL=main.7e35e8b3.chunk.js.map