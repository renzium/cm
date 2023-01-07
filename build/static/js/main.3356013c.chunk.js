(this["webpackJsonpcoin-mercari-dashboard"]=this["webpackJsonpcoin-mercari-dashboard"]||[]).push([[8],{100:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c}));var n=a(24),o=a(178).a.jwtConfig;var r=Object(n.c)({name:"authentication",initialState:{userData:function(){var e=window.localStorage.getItem("userData");return e?JSON.parse(e):{}}()},reducers:{handleLogin:function(e,t){e.userData=t.payload,e[o.storageTokenKeyName]=t.payload[o.storageTokenKeyName],e[o.storageRefreshTokenKeyName]=t.payload[o.storageRefreshTokenKeyName],localStorage.setItem("userData",JSON.stringify(t.payload)),localStorage.setItem(o.storageTokenKeyName,JSON.stringify(t.payload.accessToken)),localStorage.setItem(o.storageRefreshTokenKeyName,JSON.stringify(t.payload.refreshToken)),window.location.reload(!1)},handleLogout:function(e){e.userData={},e[o.storageTokenKeyName]=null,e[o.storageRefreshTokenKeyName]=null,localStorage.removeItem("userData"),localStorage.removeItem(o.storageTokenKeyName),localStorage.removeItem(o.storageRefreshTokenKeyName)}}}),i=r.actions,s=i.handleLogin,c=i.handleLogout;t.a=r.reducer},106:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(44),o=a(66),r=a(24),i=a(15),s=a.n(i),c=Object(r.b)("layout/getBookmarks",Object(o.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/bookmarks/data");case 2:return t=e.sent,e.abrupt("return",{data:t.data.suggestions,bookmarks:t.data.bookmarks});case 4:case"end":return e.stop()}}),e)})))),u=Object(r.b)("layout/updateBookmarked",function(){var e=Object(o.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/bookmarks/update",{id:t});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=Object(r.c)({name:"layout",initialState:{query:"",bookmarks:[],suggestions:[]},reducers:{handleSearchQuery:function(e,t){e.query=t.payload}},extraReducers:function(e){e.addCase(c.fulfilled,(function(e,t){e.suggestions=t.payload.data,e.bookmarks=t.payload.bookmarks})).addCase(u.fulfilled,(function(e,t){var a;e.suggestions.find((function(e){e.id===t.payload&&(e.isBookmarked=!e.isBookmarked,a=e)}));var n=e.bookmarks.findIndex((function(e){return e.id===t.payload}));-1===n?e.bookmarks.push(a):e.bookmarks.splice(n,1)}))}});l.actions.handleSearchQuery;t.a=l.reducer},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(12),o=a(35),r=a(1),i=a(6),s=Object(r.createContext)(),c=function(e){var t=e.children,a=Object(r.useState)({}),c=Object(o.a)(a,2),u=c[0],l=c[1];return Object(r.useEffect)((function(){if("undefined"!==window){var e=function(e){return window.getComputedStyle(document.body).getPropertyValue(e).trim()},t={primary:{light:e("--bs-primary").concat("1a"),main:e("--bs-primary")},secondary:{light:e("--bs-secondary").concat("1a"),main:e("--bs-secondary")},success:{light:e("--bs-success").concat("1a"),main:e("--bs-success")},danger:{light:e("--bs-danger").concat("1a"),main:e("--bs-danger")},warning:{light:e("--bs-warning").concat("1a"),main:e("--bs-warning")},info:{light:e("--bs-info").concat("1a"),main:e("--bs-info")},dark:{light:e("--bs-dark").concat("1a"),main:e("--bs-dark")}};l(Object(n.a)({},t))}}),[]),Object(i.jsx)(s.Provider,{value:{colors:u},children:t})}},178:function(e,t,a){"use strict";var n=a(12),o=a(9),r=a(10),i=a(15),s=a.n(i),c={loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"},u=function(){function e(t){var a=this;Object(o.a)(this,e),this.jwtConfig=Object(n.a)({},c),this.isAlreadyFetchingAccessToken=!1,this.subscribers=[],this.jwtConfig=Object(n.a)(Object(n.a)({},this.jwtConfig),t),s.a.interceptors.request.use((function(e){var t=a.getToken();return t&&(e.headers.Authorization="".concat(a.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),s.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,n=e.response,o=t;return n&&401===n.status?(a.isAlreadyFetchingAccessToken||(a.isAlreadyFetchingAccessToken=!0,a.refreshToken().then((function(e){a.isAlreadyFetchingAccessToken=!1,a.setToken(e.data.accessToken),a.setRefreshToken(e.data.refreshToken),a.onAccessTokenFetched(e.data.accessToken)}))),new Promise((function(e){a.addSubscriber((function(t){o.headers.Authorization="".concat(a.jwtConfig.tokenType," ").concat(t),e(a.axios(o))}))}))):Promise.reject(e)}))}return Object(r.a)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return s.a.post.apply(s.a,[this.jwtConfig.loginEndpoint].concat(t))}},{key:"register",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return s.a.post.apply(s.a,[this.jwtConfig.registerEndpoint].concat(t))}},{key:"refreshToken",value:function(){return s.a.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();var l={jwt:new u({})}.jwt;t.a=l},20:function(e,t,a){"use strict";var n={app:{appName:"Vuexy",appLogoImage:a(215).default},layout:{isRTL:!1,skin:"light",routerTransition:"fadeIn",type:"vertical",contentWidth:"boxed",menu:{isHidden:!1,isCollapsed:!1},navbar:{type:"floating",backgroundColor:"white"},footer:{type:"static"},customizer:!1,scrollTop:!0}};t.a=n},215:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.b4b72a94.svg"},217:function(e,t,a){},227:function(e,t){},229:function(e,t){},242:function(e,t){},244:function(e,t){},272:function(e,t){},274:function(e,t){},275:function(e,t){},280:function(e,t){},282:function(e,t){},288:function(e,t){},290:function(e,t){},309:function(e,t){},321:function(e,t){},324:function(e,t){},341:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-11.1d46cc62.jpg"},342:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1-small.58bbb9cc.png"},343:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Pot1.430ec954.svg"},344:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Pot2.4c202bd9.svg"},345:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Pot3.b2940082.svg"},346:function(e,t){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(11),r=a.n(o),i=a(96),s=a(106),c=a(98),u={auth:a(100).a,navbar:s.a,layout:c.a},l=a(24),h=Object(l.a)({reducer:u,middleware:function(e){return e({serializableCheck:!1})}}),d=a(186),f=JSON.parse(localStorage.getItem("userData")),p=f?f.ability:null,m=new d.a(p||[{action:"read",subject:"Auth"}]),F=a(105),Y=a(99),W=a(115),y=a(95),b=a(181),g=a(357),A=a(182);y.a.use(b.a).use(A.a).use(g.e).init({lng:"en",backend:{loadPath:"/assets/data/locales/{{lng}}.json"},fallbackLng:"en",debug:!1,keySeparator:!1,react:{useSuspense:!1},interpolation:{escapeValue:!1,formatSeparator:","}});y.a;var k=a(6),j=function(){return Object(k.jsxs)("div",{className:"fallback-spinner app-loader",children:[Object(k.jsx)("img",{className:"fallback-logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAmdQTFRFAAAAFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW////0zExywAAAMt0Uk5TAAAHGS9NZXV8f3ZJLQwsZJXD2+v4/vfp2sSXZi4NARdUn9j22aNXFmK57/C8GghFrPL0hwodhOPiN7JsBQNIz/uWDrchAtY7QNPqYCi/5s7LzeSDD5n8+ZxqQSYcGyQ8lNKmYcklJ+eIUxJfXm06EZPt+kzgeL7FFR7uIBP9ok4/Y3p5hr0YpKlCCQuF8bBHRlaxyiIqOQaeH8AEMD3emtzRb13M5Y6J0N8QgjOuoBSlyHfCdPM+cDa7tlX17LqAgUrU1yOdi1wpobPAmiaBAAAAAWJLR0TMGteT0wAAAAlwSFlzAAAASAAAAEgARslrPgAAA5pJREFUWMPtmOlbElEUxj2aqKiZyqCmUoqFaZIhrjFpJmq2uIJllJlLuQdlZkn7itpqktFiWbZr+2raZqXzTzUsJiDMc+/kpx7e7/N7zr33Pe854Obmkkv/rwDcPeZ5cry8fby5HF8/D3cA1iT/+QELAoOCeQRFUQQ/JDRsYXhEJBseCBYtjooWUrbixyxZ6iHAxAGIYpfFUY4Uvzw8AQcHIF6RuJJyJkmSFB0GkJySSjlXmid6ZSBIz+AxsOJWydBZ5OpMBhSVtSYbg7U4holFrc1BNgfIPYMYWbl56CzIX8fIKlgvR2dt2DgbwNsUXVhUnFtCO5hXiu4KKFMo7Ujl0Zu3VGxVbVNtr+TsqNqZgGGK6ng7VI2Xn9RySbSVa1UYF1ZXY8vatXsr8hXZw2SlWdYoorBejJURAA2+jRY1Nds4jAhrwcsHgNY9ak25RRrCGlaUjhldAHvVThy1D6Odp2GNTnqa34bezn9hEU66en8yfj4D6ZvYHjajYksmSjjssj5bdGBGHdyDJlj7IbZzyPrYnRlGljaJ/HeYG4gPG2HxR1hPSOtDH402woIiMGAAqmPHTzjQyUyTcU8l4MBOnxFShANZjHG2DGcynnM+Fo2K0uHAKgsYYUu6cGBl3ak9jiTRmmDnO7EeIDL9ggNdvHTZFGlXeufCGnDVFLab+uYA5gb6a6bMCJ+Tyvqvm1/AHz+ApLUdBvorMOTcMOumgm+C3cI9J13G7YE7d3UAssF7980qsIwU7ZA7JszwgHa8mu7p2oeznPYoH680eGzaBZ4APHWw2z07jQcTDxsf7hjAyHPN7CHQ3YVTG0DfC37PNREA9L5cQ+uV1poW9xpjdTWmV2/96gbja4KAJElBvu1p1d6t7N0G/sO2J32z2Y/tqkHX9/aWLU2Z+e6QfKY6kHdirGf6FPuHEAZy80R6GghyWcP75oxmdPtB/4dZr6op+aBoCx8M8Nrx8RGPSv2EvDQArBhwEJWERigZLTdHelUL+r5Hcj5TzBqrRaUB6LjxzDBl1Aj6tWWP9zDThF+QWwMg2yuYmfY5Fn13AF1AKDMt9KsM/RUMFWt5jLRvnuidQS8Pbd+1TlHaUJ8fWL+FDe8VaUrHqJKJFswNFaCr8memhLAjEaNVQ0f9WSyooK/7NVETIpwuMGs0pGi48Tfb/zZAIO6oqO6enFq2fGxqcrypol+Hu87bF0jqddIuqU5PzsWQd8klNvoDvyPMtdEz+SgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMDRUMTE6NDY6MzErMDA6MDD8J4+TAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTA0VDExOjQ2OjMxKzAwOjAwjXo3LwAAAEZ0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi43LjgtOSAyMDE0LTA1LTEyIFExNiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ9yG7QAAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6aGVpZ2h0ADE5Mg8AcoUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTky06whCAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTI1NDM0Mzkx3E/xawAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAAFZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL21udGxvZy9mYXZpY29ucy8yMDE4LTA1LTA0LzI3MzcwOTI4MGJmYjk3MTIyMTZlZDYxMzNmNjhkMzY3Lmljby5wbmei92q4AAAAAElFTkSuQmCC",alt:"logo"}),Object(k.jsxs)("div",{className:"loading",children:[Object(k.jsx)("div",{className:"effect-1 effects"}),Object(k.jsx)("div",{className:"effect-2 effects"}),Object(k.jsx)("div",{className:"effect-3 effects"})]})]})},T=a(12),w=a(13),v=a(35),O=a(97),S=a(2),N=a.n(S),x=a(65),C=(a(217),["className","children","onClick"]);x.e.Ripple=function(e){var t=e.className,a=e.children,o=e.onClick,r=Object(O.a)(e,C),i=Object(n.useState)(!1),s=Object(v.a)(i,2),c=s[0],u=s[1],l=Object(n.useState)(!1),h=Object(v.a)(l,2),d=h[0],f=h[1],p=Object(n.useState)({x:-1,y:-1}),m=Object(v.a)(p,2),F=m[0],Y=m[1];return Object(n.useEffect)((function(){return u(!0),function(){return u(!1)}}),[]),Object(n.useEffect)((function(){c&&(-1!==F.x&&-1!==F.y?(f(!0),setTimeout((function(){return f(!1)}),500)):f(!1))}),[F]),Object(n.useEffect)((function(){c&&(d||Y({x:-1,y:-1}))}),[d]),Object(k.jsxs)(x.e,Object(T.a)(Object(T.a)({className:N()("waves-effect",Object(w.a)({},t,t)),onClick:function(e){var t=e.target.getBoundingClientRect();Y({x:e.clientX-t.left,y:e.clientY-t.top}),o&&o(e)}},r),{},{children:[a,d?Object(k.jsx)("span",{className:"waves-ripple",style:{left:F.x,top:F.y}}):null]}))};var I=a(15),R=a.n(I),M=a(185),E=new(a.n(M).a)(R.a),D=a(34),J=a.n(D),P={users:[{id:1,fullName:"John Doe",username:"johndoe",password:"admin",avatar:a(341).default,email:"admin@demo.com",role:"admin",ability:[{action:"manage",subject:"all"}],extras:{eCommerceCartItemsCount:5}},{id:2,fullName:"Jane Doe",username:"janedoe",password:"client",avatar:a(342).default,email:"client@demo.com",role:"client",ability:[{action:"read",subject:"ACL"},{action:"read",subject:"Auth"}],extras:{eCommerceCartItemsCount:5}}]},L={secret:"dd5f3089-40c3-403d-af14-d0c228b05cb4",refreshTokenSecret:"7c4c1c50-3230-45bf-9eae-c9b2e401c767",expireTime:"10m",refreshTokenExpireTime:"10m"};E.onPost("/jwt/login").reply((function(e){var t=JSON.parse(e.data),a=t.email,n=t.password,o={email:["Something went wrong"]},r=P.users.find((function(e){return e.email===a&&e.password===n}));if(r)try{var i=J.a.sign({id:r.id},L.secret,{expiresIn:L.expireTime}),s=J.a.sign({id:r.id},L.refreshTokenSecret,{expiresIn:L.refreshTokenExpireTime}),c=Object(T.a)({},r);return delete c.password,[200,{userData:c,accessToken:i,refreshToken:s}]}catch(u){o=u}else o={email:["Email or Password is Invalid"]};return[400,{error:o}]})),E.onPost("/jwt/register").reply((function(e){if(e.data.length>0){var t=JSON.parse(e.data),a=t.email,n=t.password,o=t.username,r=P.users.find((function(e){return e.email===a})),i=P.users.find((function(e){return e.username===o})),s={email:r?"This email is already in use.":null,username:i?"This username is already in use.":null};if(s.username||s.email)return[200,{error:s}];var c={email:a,password:n,username:o,fullName:"",avatar:null,role:"admin",ability:[{action:"manage",subject:"all"}]},u=P.users.length,l=0;u&&(l=P.users[u-1].id),c.id=l+1,P.users.push(c);var h=J.a.sign({id:c.id},L.secret,{expiresIn:L.expireTime}),d=Object.assign({},c);return delete d.password,[200,{user:d,accessToken:h}]}})),E.onPost("/jwt/refresh-token").reply((function(e){var t=JSON.parse(e.data).refreshToken;try{var a=J.a.verify(t,L.refreshTokenSecret).id,n=Object(T.a)({},P.users.find((function(e){return e.id===a}))),o=J.a.sign({id:n.id},L.secret,{expiresIn:L.expiresIn}),r=J.a.sign({id:n.id},L.refreshTokenSecret,{expiresIn:L.refreshTokenExpireTime});return delete n.password,[200,{userData:n,accessToken:o,refreshToken:r}]}catch(i){return[401,{error:"Invalid refresh token"}]}}));var G={pricing:{basicPlan:{title:"Mercari Silver",img:a(343).default,subtitle:"A simple start for everyone",monthlyPrice:10,yearlyPlan:{perMonth:0,totalAnnual:0},planBenefits:["Minimum  deposit of $500 to maximum investment deposit of $8500","Up to $6000 insurance back up","Withdraw profit instantly."],popular:!1},standardPlan:{title:"Mercari Gold",img:a(344).default,subtitle:"For personal and business owners",monthlyPrice:15,yearlyPlan:{perMonth:40,totalAnnual:480},planBenefits:["Minimum deposit of $8500 to maximum investment deposit of $55,000","Up to $45,000 insurance back up","Withdraw profit instantly","Personal Investment Advisor."],popular:!0},enterprisePlan:{title:"Mercari Diamond",img:a(345).default,subtitle:"Solution for big earners",monthlyPrice:20,yearlyPlan:{perMonth:80,totalAnnual:960},planBenefits:["Minimum deposit of $55,000","Up to $800,000 insurance back up","Withdraw profit instantly","Personal Investment Advisor."],popular:!1},qandA:[{question:"Does my subscription automatically renew?",ans:"Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."},{question:"Can I store the item on an intranet so everyone has access?",ans:"Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding."},{question:"Am I allowed to modify the item that I purchased?",ans:"Tart gummies drag\xe9e lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans souffl\xe9 cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu."}]}};E.onGet("/pricing/data").reply((function(){return[200,G.pricing]}));a(346);E.onAny().passThrough();a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=Object(n.lazy)((function(){return Promise.all([a.e(11),a.e(13)]).then(a.bind(null,793))}));r.a.render(Object(k.jsx)(i.a,{store:h,children:Object(k.jsx)(n.Suspense,{fallback:Object(k.jsx)(j,{}),children:Object(k.jsx)(Y.a.Provider,{value:m,children:Object(k.jsxs)(W.a,{children:[Object(k.jsx)(B,{}),Object(k.jsx)(F.b,{newestOnTop:!0})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){"use strict";a.d(t,"j",(function(){return s})),a.d(t,"l",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return l})),a.d(t,"g",(function(){return h})),a.d(t,"i",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"h",(function(){return p})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return F})),a.d(t,"k",(function(){return Y}));var n=a(24),o=a(20),r=Object(n.c)({name:"layout",initialState:{skin:function(){var e=window.localStorage.getItem("skin");return e?JSON.parse(e):o.a.layout.skin}(),isRTL:function(){var e=window.localStorage.getItem("direction");return e?JSON.parse(e):o.a.layout.isRTL}(),layout:o.a.layout.type,lastLayout:o.a.layout.type,menuCollapsed:function(){var e=window.localStorage.getItem("menuCollapsed");return e?JSON.parse(e):o.a.layout.menu.isCollapsed}(),footerType:o.a.layout.footer.type,navbarType:o.a.layout.navbar.type,menuHidden:o.a.layout.menu.isHidden,contentWidth:o.a.layout.contentWidth,routerTransition:o.a.layout.routerTransition,navbarColor:o.a.layout.navbar.backgroundColor},reducers:{handleRTL:function(e,t){e.isRTL=t.payload,window.localStorage.setItem("direction",JSON.stringify(t.payload))},handleSkin:function(e,t){e.skin=t.payload,window.localStorage.setItem("skin",JSON.stringify(t.payload))},handleLayout:function(e,t){e.layout=t.payload},handleFooterType:function(e,t){e.footerType=t.payload},handleNavbarType:function(e,t){e.navbarType=t.payload},handleMenuHidden:function(e,t){e.menuHidden=t.payload},handleLastLayout:function(e,t){e.lastLayout=t.payload},handleNavbarColor:function(e,t){e.navbarColor=t.payload},handleContentWidth:function(e,t){e.contentWidth=t.payload},handleMenuCollapsed:function(e,t){e.menuCollapsed=t.payload,window.localStorage.setItem("menuCollapsed",JSON.stringify(t.payload))},handleRouterTransition:function(e,t){e.routerTransition=t.payload}}}),i=r.actions,s=i.handleRTL,c=i.handleSkin,u=i.handleLayout,l=i.handleLastLayout,h=i.handleMenuHidden,d=i.handleNavbarType,f=i.handleFooterType,p=i.handleNavbarColor,m=i.handleContentWidth,F=i.handleMenuCollapsed,Y=i.handleRouterTransition;t.a=r.reducer},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1),o=a(180),r=Object(n.createContext)();Object(o.a)(r.Consumer)}},[[355,9,10]]]);
//# sourceMappingURL=main.3356013c.chunk.js.map