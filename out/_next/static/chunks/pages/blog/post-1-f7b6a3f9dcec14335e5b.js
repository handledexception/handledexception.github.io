_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(n),f=r,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,u=new Array(i);u[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"===typeof e?e:r,u[1]=s;for(var c=2;c<i;c++)u[c]=n[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},"B+V0":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("MX0m"),a=n.n(r),i=n("q1tI"),u=n.n(i),s=u.a.createElement,l=function(e){var t=e.meta,n=e.isBlogPost;return s(u.a.Fragment,null,s("h1",{className:"jsx-2519636429 "+((n?"great-title":null)||"")},t.title),s("div",{className:"jsx-2519636429 details"},n?null:s("p",{className:"jsx-2519636429"},t.description),s("span",{className:"jsx-2519636429"},t.date),s("span",{role:"img","aria-label":"one coffee",className:"jsx-2519636429"},"\u2615 ",t.readTime+" min read")),s(a.a,{id:"2519636429"},["h1.jsx-2519636429{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-2519636429{font-size:2rem;}",".details.jsx-2519636429 span.jsx-2519636429{color:#bdbdbd;margin-right:1rem;}",".details.jsx-2519636429{margin-bottom:1rem;}"]))}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},NrF9:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"default",(function(){return f}));var r=n("wx14"),a=n("Ff2n"),i=n("q1tI"),u=n.n(i),s=n("7ljp"),l=n("Pv+M"),c=["components"],o=(u.a.createElement,{title:"Direct3D 11 Lesson 1",description:"Getting started with Direct3D 11.",date:"July 5, 2021",readTime:2}),m={meta:o},p=function(e){var t=e.children;return Object(s.a)(l.a,{meta:o},t)};function f(e){var t=e.components,n=Object(a.a)(e,c);return Object(s.a)(p,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("h2",null,"My Headline"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre"},'typedef struct stuff_s {\n    int id;\n    const char* name;\n} struct_t;\n\nint main(int argc, char **argv) {\n    printf("Hello, world!");\n    return 0;\n}\n')),Object(s.a)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus pellentesque dolor non egestas. In sed tristique elit. Cras vehicula, nisl vel ultricies gravida, augue nibh laoreet arcu, et tincidunt augue dui non elit. Vestibulum semper posuere magna, quis molestie mauris faucibus ut. Praesent ornare velit sit amet enim semper lacinia. Aenean nec sem lacus. Cras porta nunc nec leo lacinia sagittis. Aliquam ornare gravida cursus. Etiam ultrices massa quis erat scelerisque rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin lacinia sodales augue, non mattis ipsum pretium non. Morbi vehicula tempor blandit. Nam rhoncus, massa a maximus imperdiet, tortor risus aliquet tortor, nec lacinia eros nisi volutpat massa. Maecenas ut augue ipsum."),Object(s.a)("p",null,"Sed vehicula libero pulvinar\ntincidunt ligula non, luctus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas arcu purus, aliquam ac molestie ac, luctus eget sem. Sed pellentesque massa eros, condimentum commodo ligula cursus ut. Mauris sit amet molestie ipsum. Nullam venenatis est at purus mollis consectetur. Phasellus a ipsum a quam ullamcorper aliquet. Nunc gravida bibendum placerat."),Object(s.a)("h2",null,"My Headline"),Object(s.a)("p",null,"Fusce lacinia mauris vel massa tincidunt dignissim. Proin tempus nunc sed efficitur porta. Nunc ornare tellus scelerisque velit euismod, ut mollis diam tristique. Phasellus vel diam egestas augue ullamcorper gravida. Sed id mattis ligula, id suscipit nisl. Ut placerat in est vel rutrum. Integer tempor condimentum lectus, pretium cursus dolor venenatis sit amet. Ut venenatis lectus massa, eu tincidunt ipsum congue et. Curabitur mollis lacinia magna eu hendrerit. Mauris finibus leo ut orci vehicula feugiat. Etiam at ultrices velit. Aliquam faucibus congue lorem, at bibendum felis dapibus a. Pellentesque ornare dignissim magna, vitae molestie massa."))}f.isMDXComponent=!0},"Pv+M":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),a=n.n(r),i=n("B+V0"),u=a.a.createElement;function s(e){var t=e.children,n=e.meta;return u(a.a.Fragment,null,u(i.a,{meta:n,isBlogPost:!0}),u("article",null,t))}},Qw2f:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post-1",function(){return n("NrF9")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["Qw2f",0,1,2]]]);