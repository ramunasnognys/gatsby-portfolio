(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7oih":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=(a("ucuu"),a("rY4l")),s=a("Wbzz"),d=function(){var e=Object(s.c)("362580002").site.siteMetadata.copyright;return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"bold"},e)))};t.a=function(e){var t=e.children,a="undefined"!=typeof window?void 0===localStorage?"light":localStorage.getItem("jlmode"):"light",s=Object(i.useState)(a),l=s[0],o=s[1];return Object(i.useEffect)((function(){null===l|void 0===l&&(o("light"),localStorage.setItem("jlmode","light")),"dark"===l&&"undefined"!=typeof window?(localStorage.setItem("jlmode","dark"),document.body.classList.remove("light"),document.body.classList.add(l)):"light"===l&&"undefined"!=typeof window&&(localStorage.setItem("jlmode","light"),document.body.classList.remove("dark"),document.body.classList.add(l))}),[l]),r.a.createElement("div",null,r.a.createElement(n.a,{mode:l,setMode:o}),r.a.createElement("div",{className:"content"},t),r.a.createElement(d,null))}},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),l=i(a("pVnL")),o=i(a("q1tI")),c=i(a("17x9")),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],g=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=j([].concat(t.fluid))),t.fixed&&(t.fixed=j([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,i=I(t||a||[]);return i&&i.src},I=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=g(e),a=m(t);return p[a]||!1},M="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function C(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&o.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function j(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+o+s+d+a+i+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=o.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=o.default.createElement(L,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?o.default.createElement("picture",null,r(i),d):d})),L=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,g=e.loading,f=e.draggable,m=e.ariaHidden,I=(0,d.default)(e,u);return o.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:i,src:r},I,{onLoad:s,onError:c,ref:t,loading:g,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!M&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(M||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=g(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=g(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,M=e.durationFadeIn,y=e.Tag,b=e.itemProp,S=e.loading,j=e.draggable,A=m||p;if(!A)return null;var E=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:E?1:0,transition:z?"opacity "+M+"ms":"none"},d),D="boolean"==typeof h?"lightgray":h,O={transitionDelay:M+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&O,d,u),H={title:t,alt:this.state.isVisible?"":a,style:P,className:f,itemProp:b},k=this.state.isHydrated?I(A):A[0];if(m)return o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),D&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&O)}),k.base64&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:H,imageVariants:A,generateSources:v}),k.tracedSVG&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:H,imageVariants:A,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,C(A),o.default.createElement(L,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:S},k,{imageVariants:A}))}}));if(p){var R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete R.display,o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},D&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:D,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},z&&O)}),k.base64&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:H,imageVariants:A,generateSources:v}),k.tracedSVG&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:H,imageVariants:A,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,C(A),o.default.createElement(L,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:S},k,{imageVariants:A}))}}))}return null},t}(o.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),D=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function O(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}z.propTypes={resolutions:T,sizes:D,fixed:O(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:O(c.default.oneOfType([D,c.default.arrayOf(D)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=z;t.default=P},M1Io:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyANCnZpZXdCb3g9Ii0xMiAwIDQ0OCA0NDguMDQ0NTUiIA0KaGVpZ2h0PSIxOCIgDQp3aWR0aD0iMTgiIA0KZmlsbD0iIzAwMCIgDQp4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0ibTIyNC4wMjM0MzggNDQ4LjAzMTI1Yzg1LjcxNDg0My45MDIzNDQgMTY0LjAxMTcxOC00OC40ODgyODEgMjAwLjExNzE4Ny0xMjYuMjMwNDY5LTIyLjcyMjY1NiA5LjkxNDA2My00Ny4zMzIwMzEgMTQuNzY5NTMxLTcyLjExNzE4NyAxNC4yMzA0NjktOTcuMTU2MjUtLjEwOTM3NS0xNzUuODkwNjI2LTc4Ljg0Mzc1LTE3Ni0xNzYgLjk3MjY1Ni02NS43MTg3NSAzNy4yMzQzNzQtMTI1LjgzMjAzMSA5NC45MTAxNTYtMTU3LjM1MTU2Mi0xNS41NTQ2ODgtMS45ODA0NjktMzEuMjMwNDY5LTIuODY3MTg4LTQ2LjkxMDE1Ni0yLjY0ODQzOC0xMjMuNzE0ODQ0IDAtMjI0LjAwMDAwMDUgMTAwLjI4OTA2Mi0yMjQuMDAwMDAwNSAyMjQgMCAxMjMuNzE0ODQ0IDEwMC4yODUxNTY1IDIyNCAyMjQuMDAwMDAwNSAyMjR6bTAgMCIvPg0KPC9zdmc+"},Uch9:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyANCiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIA0KICAgICAgaGVpZ2h0PSIxOCIgDQogICAgICB3aWR0aD0iMTgiICANCiAgICAgIHZpZXdCb3g9IjAgMCAyNCAyNCIgDQogICAgICBmaWxsPSJub25lIiANCiAgICAgIHN0cm9rZT0iI2ZmZiIgDQogICAgICBzdHJva2VXaWR0aD0iMiIgDQogICAgICBzdHJva2VMaW5lY2FwPSJyb3VuZCIgDQogICAgICBzdHJva2VMaW5lam9pbj0icm91bmQiIA0KICAgICAgY2xhc3NOYW1lPSJmZWF0aGVyIGZlYXRoZXItc3VuIj4NCiAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjUiPjwvY2lyY2xlPg0KICAgICAgICA8bGluZSB4MT0iMTIiIHkxPSIxIiB4Mj0iMTIiIHkyPSIzIj48L2xpbmU+DQogICAgICAgIDxsaW5lIHgxPSIxMiIgeTE9IjIxIiB4Mj0iMTIiIHkyPSIyMyI+PC9saW5lPg0KICAgICAgICA8bGluZSB4MT0iNC4yMiIgeTE9IjQuMjIiIHgyPSI1LjY0IiB5Mj0iNS42NCI+PC9saW5lPg0KICAgICAgICA8bGluZSB4MT0iMTguMzYiIHkxPSIxOC4zNiIgeDI9IjE5Ljc4IiB5Mj0iMTkuNzgiPjwvbGluZT4NCiAgICAgICAgPGxpbmUgeDE9IjEiIHkxPSIxMiIgeDI9IjMiIHkyPSIxMiI+PC9saW5lPg0KICAgICAgICA8bGluZSB4MT0iMjEiIHkxPSIxMiIgeDI9IjIzIiB5Mj0iMTIiPjwvbGluZT4NCiAgICAgICAgPGxpbmUgeDE9IjQuMjIiIHkxPSIxOS43OCIgeDI9IjUuNjQiIHkyPSIxOC4zNiI+PC9saW5lPg0KICAgICAgICA8bGluZSB4MT0iMTguMzYiIHkxPSI1LjY0IiB4Mj0iMTkuNzgiIHkyPSI0LjIyIj48L2xpbmU+DQo8L3N2Zz4NCg=="},rY4l:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz");var s=function(){return r.a.createElement("button",{className:"btn"},"Menu")},d=a("M1Io"),l=a.n(d),o=a("Uch9"),c=a.n(o);t.a=function(e){console.log();return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(n.a,{to:"/"}," ","ram",r.a.createElement("span",null),"nog")),r.a.createElement("div",{className:"header__menu"},r.a.createElement("a",{className:"modebtn",onClick:function(){return"light"===e.mode?e.setMode("dark"):e.setMode("light")}},"light"===e.mode?r.a.createElement("img",{src:l.a,alt:"Light mode"}):r.a.createElement("img",{src:c.a,alt:"Dark mode"})),r.a.createElement(s,null))))))}},ucuu:function(e,t,a){}}]);
//# sourceMappingURL=da9df79e0916b6a258401bd04050366377f56fee-f91174b8a9bc30f37434.js.map