(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(81)},81:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(19),c=a.n(l),o=a(17),s=a.n(o),u=a(20),i=a(7),m=a(87),E=a(85),p=a(86),y=a(84),d=a(41),f=(a(55),d.a.initializeApp({apiKey:"AIzaSyBokiZNosf0_pr4jhTuCSx578vuS7xcEHw",authDomain:"oceancurrents-development.firebaseapp.com",projectId:"oceancurrents-development",storageBucket:"oceancurrents-development",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_FIREBASE_API_KEY:"AIzaSyBokiZNosf0_pr4jhTuCSx578vuS7xcEHw",REACT_APP_FIREBASE_AUTH_DOMAIN:"oceancurrents-development.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"oceancurrents-development",REACT_APP_FIREBASE_STORAGE_BUCKET:"oceancurrents-development",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"382884566892",REACT_APP_FIREBASE_APP_ID:"1:382884566892:web:2b58c88ef1cd2cd5578549",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-TLX9Z0Q9G6",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoibXNhbnR1Y2NpIiwiYSI6ImNrcDZ3NWRwbjA3Y2cyem42eHJ1ZGd0cncifQ.sZ_gc01HdERx0i8yXGPWQA",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyA7nG-TxYNqgTHZJaFJx0XMD6TW6eM2ZEM"}).REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_FIREBASE_API_KEY:"AIzaSyBokiZNosf0_pr4jhTuCSx578vuS7xcEHw",REACT_APP_FIREBASE_AUTH_DOMAIN:"oceancurrents-development.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"oceancurrents-development",REACT_APP_FIREBASE_STORAGE_BUCKET:"oceancurrents-development",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"382884566892",REACT_APP_FIREBASE_APP_ID:"1:382884566892:web:2b58c88ef1cd2cd5578549",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-TLX9Z0Q9G6",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoibXNhbnR1Y2NpIiwiYSI6ImNrcDZ3NWRwbjA3Y2cyem42eHJ1ZGd0cncifQ.sZ_gc01HdERx0i8yXGPWQA",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyA7nG-TxYNqgTHZJaFJx0XMD6TW6eM2ZEM"}).REACT_APP_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_FIREBASE_API_KEY:"AIzaSyBokiZNosf0_pr4jhTuCSx578vuS7xcEHw",REACT_APP_FIREBASE_AUTH_DOMAIN:"oceancurrents-development.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"oceancurrents-development",REACT_APP_FIREBASE_STORAGE_BUCKET:"oceancurrents-development",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"382884566892",REACT_APP_FIREBASE_APP_ID:"1:382884566892:web:2b58c88ef1cd2cd5578549",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-TLX9Z0Q9G6",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoibXNhbnR1Y2NpIiwiYSI6ImNrcDZ3NWRwbjA3Y2cyem42eHJ1ZGd0cncifQ.sZ_gc01HdERx0i8yXGPWQA",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyA7nG-TxYNqgTHZJaFJx0XMD6TW6eM2ZEM"}).REACT_APP_MEASUREMENT_ID})),b=f.auth(),A=n.a.createContext();function T(){return Object(r.useContext)(A)}function _(e){var t=e.children,a=Object(r.useState)(),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(r.useState)(!0),u=Object(i.a)(s,2),m=u[0],E=u[1];Object(r.useEffect)(function(){return b.onAuthStateChanged(function(e){o(e),E(!1)})},[]);var p={currentUser:c,signup:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},resetPassword:function(e){return b.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return n.a.createElement(A.Provider,{value:p},!m&&t)}var P=a(6),g=a(11);function v(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),l=T().signup,c=Object(r.useState)(""),o=Object(i.a)(c,2),d=o[0],f=o[1],b=Object(r.useState)(!1),A=Object(i.a)(b,2),_=A[0],v=A[1],R=Object(P.g)();function S(){return(S=Object(u.a)(s.a.mark(function r(n){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",f("Passwords do not match."));case 3:return r.prev=3,f(""),v(!0),r.next=8,l(e.current.value,t.current.value);case 8:R.push("/"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),f("Failed to create an account.");case 14:v(!1);case 15:case"end":return r.stop()}},r,null,[[3,11]])}))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Sign up"),d&&n.a.createElement(E.a,{varient:"danger"},d),n.a.createElement(p.a,{onSubmit:function(e){return S.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(p.a.Group,{id:"password-confirm"},n.a.createElement(p.a.Label,null,"Password Confirmation"),n.a.createElement(p.a.Control,{type:"password",ref:a,required:!0})),n.a.createElement(y.a,{disabled:_,className:"w-100",type:"submit"},"Sign Up"))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",n.a.createElement(g.b,{to:"/login"},"Login"))))}var R=a(29),S=[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"},{saturation:"-100"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40},{visibility:"off"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry",stylers:[{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{color:"#7f8d89"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#7f8d89"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"all",stylers:[{color:"#2b3638"},{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2b3638"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.icon",stylers:[{visibility:"off"}]}],h=["places"];var w=function(){var e=Object(R.b)({googleMapsApiKey:"AIzaSyA7nG-TxYNqgTHZJaFJx0XMD6TW6eM2ZEM",libraries:h}),t=e.isLoaded,a=e.loadError,r={styles:S,disableDefaultUI:!0,zoomControl:!0};return a?"Error loading maps":t?n.a.createElement(n.a.Fragment,null,n.a.createElement(R.a,{mapContainerStyle:{width:"100vw",height:"100vh"},zoom:12,center:{lat:28.185654,lng:-82.680748},options:r})):"Loading Maps"};function I(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],T());a.currentUser,a.logout,Object(P.g)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,null))}function O(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=T().login,l=Object(r.useState)(""),c=Object(i.a)(l,2),o=c[0],d=c[1],f=Object(r.useState)(!1),b=Object(i.a)(f,2),A=b[0],_=b[1],v=Object(P.g)();function R(){return(R=Object(u.a)(s.a.mark(function r(n){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,d(""),_(!0),r.next=6,a(e.current.value,t.current.value);case 6:v.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),d("Failed to log in");case 12:_(!1);case 13:case"end":return r.stop()}},r,null,[[1,9]])}))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Login"),o&&n.a.createElement(E.a,{varient:"danger"},o),n.a.createElement(p.a,{onSubmit:function(e){return R.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(y.a,{disabled:A,className:"w-100",type:"submit"},"Login")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(g.b,{to:"/forgot-password"},"Forgot password?"))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.a.createElement(g.b,{to:"/signup"},"Sign up"))))}function j(){var e=Object(r.useRef)(),t=T().resetPassword,a=Object(r.useState)(),l=Object(i.a)(a,2),c=l[0],o=l[1],d=Object(r.useState)(),f=Object(i.a)(d,2),b=f[0],A=f[1],_=Object(r.useState)(!1),P=Object(i.a)(_,2),v=P[0],R=P[1];function S(){return(S=Object(u.a)(s.a.mark(function a(r){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,A(""),o(""),R(!0),a.next=7,t(e.current.value);case 7:A("Check your inbox for further instructions..."),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),o("Failed to reset password");case 13:R(!1);case 14:case"end":return a.stop()}},a,null,[[1,10]])}))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),c&&n.a.createElement(E.a,{varient:"danger"},c),b&&n.a.createElement(E.a,{varient:"sucess"},b),n.a.createElement(p.a,{onSubmit:function(e){return S.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(y.a,{disabled:v,className:"w-100",type:"submit"},"Reset Password")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(g.b,{to:"/login"},"Login"))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.a.createElement(g.b,{to:"/signup"},"Sign up"))))}function C(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),l=T(),c=l.currentUser,o=l.updatePassword,s=l.updateEmail,u=Object(r.useState)(""),d=Object(i.a)(u,2),f=d[0],b=d[1],A=Object(r.useState)(!1),_=Object(i.a)(A,2),v=_[0],R=_[1],S=Object(P.g)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),f&&n.a.createElement(E.a,{varient:"danger"},f),n.a.createElement(p.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==a.current.value)return b("Passwords do not match.");var n=[];R(!0),e.current.value!==c.email&&n.push(s(e.current.value)),t.current.value&&n.push(o(t.current.value)),Promise.all(n).then(function(){S.push("/")}).catch(function(){b("Failed to update account")}).finally(function(){R(!1)})}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0,defaultValue:c.email})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),n.a.createElement(p.a.Group,{id:"password-confirm"},n.a.createElement(p.a.Label,null,"Password Confirmation"),n.a.createElement(p.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),n.a.createElement(y.a,{disabled:v,className:"w-100",type:"submit"},"Update profile"))),n.a.createElement("div",{className:"w-100 text-center mt-2"},n.a.createElement(g.b,{to:"/"},"Cancel"))))}var N=a(46);function x(e){var t=e.component,a=Object(N.a)(e,["component"]),r=T().currentUser;return n.a.createElement(P.b,Object.assign({},a,{render:function(e){return r?n.a.createElement(t,e):n.a.createElement(P.a,{to:"/login"})}}))}var G=a(45),B=a.n(G);var D=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(r.useEffect)(function(){B.a.get("https://jsonplaceholder.typicode.com/posts").then(function(e){console.log(e),l(e.data)}).catch(function(e){console.log(e)})},[]),n.a.createElement("div",null,n.a.createElement("ul",null,a.map(function(e){return n.a.createElement("li",{key:e.id},e.title)})))};var F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Some Daily Weather"),n.a.createElement(D,null))},M=function(){return n.a.createElement(g.a,null,n.a.createElement(_,null,n.a.createElement(P.d,null,n.a.createElement(x,{exact:!0,path:"/",component:I}),n.a.createElement(x,{path:"/update-profile",component:C}),n.a.createElement(x,{path:"/weather",component:F}),n.a.createElement(P.b,{path:"/signup",component:v}),n.a.createElement(P.b,{path:"/login",component:O}),n.a.createElement(P.b,{path:"/forgot-password",component:j}))))};a(80);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8c9e3feb.chunk.js.map