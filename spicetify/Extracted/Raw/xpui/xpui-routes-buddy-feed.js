"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7564],{54830:(e,s,i)=>{i.r(s),i.d(s,{default:()=>Ss});var a=i(79474),n=i(97947),t=i(18089),l=i(89551),r=i(1445),c=i(40048),d=i(50118),o=i(5545),u=i(1878),m=i(92912),f=i(94926),x=i(67318),h=i(36981),b=i(52745),j=(i(1137),i(77173)),g=i(97500),N=i.n(g),y=i(88514),p=i(63275),k=i(98862),v=i(46570),C=i(99297),E=i(90365),S=i(71314),I=i(60527),L=i(67553),w=i(63392),R=i(53326),T=i(56125),O=i(87083),A=i(26504),U=i(75108),B=i(48378),_=i(25973),P=i(20396),D=i(15395),F=i(13274);const z=e=>{const{timestamp:s,isNowPlaying:i}=e;return i?(0,F.jsx)(c.Zp,{label:l.R.get("time.now"),children:(0,F.jsx)(P.A,{"aria-label":l.R.get("time.now"),size:"small"})}):(0,F.jsx)("span",{children:(0,D.Z)(s)})},Z="main-buddyFeed-friendActivity",M="VLKqDIGaQn2bILzJKSZ0",Q="main-buddyFeed-friendsFeedContainer",Y="main-buddyFeed-avatarContainer",K="main-buddyFeed-overlay",W="main-buddyFeed-playIcon",H="main-buddyFeed-activityMetadata",q="main-buddyFeed-usernameAndTimestamp",J="main-buddyFeed-username",G="main-buddyFeed-timestamp",V="main-buddyFeed-artistAndTrackName",X="main-buddyFeed-playbackContextIcon",$="main-buddyFeed-playbackContext",ee="main-buddyFeed-playbackContextLink",se="main-buddyFeed-addFriendPlaceholder",ie="main-buddyFeed-addFriendPlaceholderBtn",ae="main-buddyFeed-emptyBuddyFeed",ne="main-buddyFeed-addFriendPlaceholderText",te="PjDcsgAPmXlcTBJRGpIu",le="IRpPQFA57qgQ5jicWWaD",re="Hm3nIbegLclY1uCAmnx_",ce="bhRoVUHjWdo9mgUkU6fe",de="BliqfY7vu_qE2C9zs5Ou",oe="qdYWuHZd4HdSWfd4pSQB",ue="DhvYWKjDc7uyF3HfkDJJ",me="ralK8s_OmE8a8zWcfNKM",fe=e=>Date.now()-e<9e5,xe=(e,s)=>{const i=(0,p.o_)(e)?.type;switch(i){case p.NQ.PLAYLIST:case p.NQ.PLAYLIST_V2:return(0,F.jsx)(S.W,{uri:e});case p.NQ.EPISODE:case p.NQ.SHOW:return(0,F.jsx)(I.H,{uri:e});case p.NQ.ALBUM:return(0,F.jsx)(C.h,{uri:e,artistUri:s});case p.NQ.ARTIST:return(0,F.jsx)(E.t,{uri:e});default:return null}},he=e=>{switch(e){case p.NQ.ALBUM:return _.c.ALBUM;case p.NQ.ARTIST:return _.c.ARTIST;case p.NQ.SHOW:return _.c.SHOW;case p.NQ.EPISODE:return _.c.EPISODE;case p.NQ.PLAYLIST:case p.NQ.PLAYLIST_V2:return _.c.PLAYLIST;default:return}},be=e=>{const{show:s=!0,spec:i,friend:n}=e,t=(0,a.useMemo)((()=>n.user.imageUrl?[{url:n.user.imageUrl,width:0,height:0}]:[]),[n.user.imageUrl]),r=(0,f.W)(),c=(0,h.s)(),d=n.track,o=d.uri,{togglePlay:u,isPlaying:m,isActive:x}=(0,B.P)({uri:o},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}),b=(0,p.o_)(d.context?.uri),j=b?.type,g=(0,a.useCallback)((()=>{u(),r({intent:m?"pause":"play",type:"click",itemIdSuffix:"buddyfeed_play",targetUri:o});const e=i.friendRowFactory().playButtonFactory();x?m?c.logInteraction(e.hitPause({itemToBePaused:o})):c.logInteraction(e.hitResume({itemToBeResumed:o})):c.logInteraction(e.hitPlay({itemToBePlayed:o}))}),[r,m,o,i,x,u,c]),C=(0,a.useCallback)(((e,s)=>{c.logInteraction(i.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:s}))}),[c,i]),S=(0,O.P)({itemUris:[o],dragLabelText:d.name}),I=(0,O.P)({itemUris:[d.artist?.uri],dragLabelText:d.artist?.name}),_=(0,O.P)({itemUris:[d.context?.uri],dragLabelText:d.context?.name});return s?(0,F.jsxs)("div",{className:N()(Z),children:[(0,F.jsx)(v.h,{menu:xe(d.context?.uri,d.artist?.uri),children:(0,F.jsxs)("div",{className:Y,children:[(0,F.jsx)(k.e,{label:n.user.name,width:40,userIconSize:"small",images:t,withBadge:fe(n.timestamp)}),(0,F.jsx)(T.x,{className:K,iconClassName:W,isPlaying:m,isLocked:!1,onClick:g,playAriaLabel:m?l.R.get("pause"):`${l.R.get("play")} ${d.artist.name} ${d.name}`})]})}),(0,F.jsxs)("div",{className:N()(H),children:[(0,F.jsxs)("div",{className:q,children:[(0,F.jsx)(y.E,{as:"p",variant:"bodySmallBold",className:N()(J,"ellipsis-one-line"),children:(0,F.jsx)(U.pZ,{value:"/buddyfeed_user_profile",children:(0,F.jsx)(v.h,{menu:(0,F.jsx)(w.B,{uri:n.user.uri}),children:(0,F.jsx)(R.Link,{title:n.user.name,to:n.user.uri,dir:"auto",onClick:()=>C("profile_link",n.user.uri),children:n.user.name})})})}),(0,F.jsx)(y.E,{as:"p",variant:"marginal",className:N()(G),children:(0,F.jsx)(z,{timestamp:n.timestamp,isNowPlaying:fe(n.timestamp)})})]}),(0,F.jsxs)(y.E,{as:"p",variant:"marginal",className:V,children:[(0,F.jsx)(U.pZ,{value:"/buddyfeed_track",children:(0,F.jsx)(v.h,{menu:(0,F.jsx)(L.P,{uri:d.uri,contextUri:d.context?.uri,albumUri:d.album?.uri,artists:[d.artist]}),children:(0,F.jsx)(R.Link,{title:d.name,to:o,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:S,onClick:()=>C("track_link",o),children:d.name})})}),(0,F.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,F.jsx)(U.pZ,{value:"/buddyfeed_artist",children:(0,F.jsx)(v.h,{menu:d.artist?(0,F.jsx)(E.t,{uri:d.artist.uri}):null,children:(0,F.jsx)(R.Link,{title:d.artist?.name,to:d.artist?.uri,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:I,onClick:()=>C("artist_link",d.artist?.uri),children:d.artist?.name})})})]}),(0,F.jsx)(y.E,{as:"p",variant:"marginal",className:N()("ellipsis-one-line",$),children:(0,F.jsx)(U.pZ,{value:"/buddyfeed_context",children:(0,F.jsx)(v.h,{menu:xe(d.context?.uri,d.artist?.uri),children:(0,F.jsxs)(R.Link,{title:d.context?.name,to:d.context?.uri,className:ee,draggable:!0,onDragStart:_,onClick:()=>C("context_link",d.context?.uri),children:[(0,F.jsx)(A.s,{type:he(j),iconSize:16,className:X}),(0,F.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:d.context?.name})]})})})})]})]},n.user.uri):null};function je({friends:e,spec:s}){return(0,F.jsx)(j.ZI,{flipKey:e.map((e=>e.user.uri)).join(""),children:(0,F.jsx)("ol",{children:e.map(((e,i)=>(0,F.jsx)(j.lf,{flipId:e.user.uri,children:(0,F.jsx)("li",{children:(0,F.jsx)(be,{friend:e,show:i<100,spec:s},e.user.uri)})},e.user.uri)))})})}var ge=i(39522),Ne=i(18331),ye=i(67878),pe=i(89909),ke=i(3043),ve=(i(62355),i(48117),i(98678)),Ce=i(67970),Ee=i(36528),Se=i(94418),Ie=i(88854),Le=i(78172);const we="w5nHQ74JGTytKwWanjvB",Re="u11kJflcqt7CSXo9qL_T",Te="MmENkh6tW0MyjTtTtPHZ",Oe="Gl0dkNQbAyNjVZ1IpghI",Ae=({name:e,following:s,imageUrl:i,uri:t})=>{const c=(0,Ie.f)(),d=(0,f.W)(),o=a.createRef(),[u,m]=(0,a.useState)(s);(0,Le.N)(Se.mc.OPERATION_COMPLETE,(e=>{if(e.data.uris.includes(t))switch(e.data.operation){case Se.JK.FOLLOW_USER:m(!0);break;case Se.JK.UNFOLLOW_USER:m(!1)}}));const x=(0,a.useCallback)((()=>{u?c.unfollowUsers([t]):(c.followUsers([t]),d({intent:"follow",type:"click",itemIdSuffix:"buddyfeed"})),o.current&&o.current.blur()}),[u,o,t,c,d]);return(0,a.useEffect)((()=>{m(s)}),[s]),(0,F.jsxs)("div",{className:we,children:[(0,F.jsx)(k.e,{label:e,width:40,userIconSize:"small",images:(0,a.useMemo)((()=>[{width:40,height:40,url:i}]),[i])}),(0,F.jsxs)("div",{className:N()(Re,"ellipsis-one-line"),children:[(0,F.jsx)(y.E,{as:"p",variant:"bodySmallBold",className:"ellipsis-one-line",children:e}),u&&(0,F.jsx)(y.E,{as:"p",variant:"marginal",className:"ellipsis-one-line",children:l.R.get("following")})]}),(0,F.jsx)("div",{className:Te,children:(0,F.jsx)(r.a,{className:Oe,size:"sm",ref:o,onClick:x,ariaLabel:u?l.R.get("buddy-feed.button.remove-friend"):l.R.get("buddy-feed.button.add-friend"),icon:u?Ee.M:n.k})})]})},Ue="main-buddyFeed-friendsList";function Be({facebookFriends:e}){return(0,F.jsx)("div",{className:Ue,children:e.map((({uri:e,following:s,title:i,image:a})=>(0,F.jsx)(Ae,{uri:e,name:i,imageUrl:a,following:s},`fb-friend-${e}`)))})}var _e=i(35963);const Pe="main-buddyFeed-loadingFriends";function De(){return(0,F.jsx)("div",{className:Pe,children:Array(20).fill(0).map(((e,s)=>(0,F.jsx)(_e.Y,{isLoading:!0,charCount:100,as:"p",variant:"titleSmall"},s)))})}var Fe=i(49036),ze=i(37414);const Ze="pZFwflwH1vXVCmAO5vbz",Me="yPL55nV5rC97vJhAf7ke",Qe="qpgo9DQ9rVZbO5pLJog5",Ye="A3hvkJOGkBNa6zWj6oZa",Ke="pIyez6N1SF3jW0U5VUx4",We="lIxuZR4lYTrEKkMYedty",He="VEmC3OHK3uAasHvO5OuA",qe="wzGPtuvvLpOpY1PDu4Qv",Je="YoJTUV4hazVCFNbfKoNq",Ge=({onBackButtonClick:e})=>{const[s,i]=(0,a.useState)(""),{isLoading:n,friends:t}=(e=>{const s=(0,ze.C)(),i=e.trim().toLowerCase(),{data:a,isLoading:n}=(0,Fe.I)({queryKey:["useFacebookFriends"],queryFn:async()=>(await s.fetchFacebookFriends()).sort(((e,s)=>e.title>s.title?1:-1))});return{isLoading:n,friends:a?.filter((({title:e})=>-1!==e.trim().toLowerCase().indexOf(i)))??[]}})(s),c=(0,ve.YQ)((e=>{i(e.target.value)}),100),d=(0,a.useCallback)((e=>{null!==e&&e.focus()}),[]);return(0,F.jsxs)("div",{className:Ze,children:[(0,F.jsx)(r.a,{ariaLabel:l.R.get("buddy-feed.button.back"),onClick:e,ref:d,className:Me,icon:ge.g,size:"sm",testId:"back-to-friends"}),(0,F.jsxs)("div",{className:Qe,children:[(0,F.jsx)("div",{className:Ye,children:(0,F.jsx)(ye.G,{className:Ke,size:"large"})}),(0,F.jsx)("div",{className:We,children:n?(0,F.jsx)(_e.Y,{isLoading:!0,charCount:25,as:"p",variant:"bodySmall"}):(0,F.jsx)(y.E,{as:"p",variant:"bodySmall",children:l.R.get("buddy-feed.number-of-friends",t.length)})})]}),n?(0,F.jsx)(De,{}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:He,children:[(0,F.jsx)(Ce.C,{className:Je,size:"small",role:"presentation"}),(0,F.jsx)("input",{onChange:c,className:qe,placeholder:l.R.get("buddy-feed.find-in-playlists")})]}),(0,F.jsx)(Be,{facebookFriends:t})]})]})};var Ve=i(82668);function Xe({isOpen:e,onClose:s,onConfirm:i}){return(0,F.jsx)(Ve.T,{onClose:s,"aria-label":l.R.get("web-player.buddy-feed.connect-with-facebook-title"),onConfirm:i,titleText:l.R.get("web-player.buddy-feed.connect-with-facebook-title"),descriptionText:l.R.get("web-player.buddy-feed.connect-with-facebook-description"),cancelText:l.R.get("queue.cancel-button"),confirmText:l.R.get("web-player.buddy-feed.connect-button"),isOpen:e})}let $e=function(e){return e[e.LOADING=0]="LOADING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED",e}({});const es="EmZCbU1_B_J9RAHebolL",ss="Ym6Yyx83U7mNKOMw9dxw",is="NXcZaSipzomJ6d4_nM94",as="b9rqRkvRvhrSY4FYHQVC",ns="xHc_2FQr3NxfCgfDSVhY",ts="QAJYN0xWh3h2A5d8_C1g",ls="PKhH1CknobkjJdVITsb4",rs="HgRmCE3NxfiYNtv6pF3H",cs="HnA5mipUMkheAlbxqCn_",ds="mvp0xhvZTo0xv0TIwi9u",os=e=>{const s=(0,f.W)(),{onBackButtonClick:i,feedIsEmpty:n,goToAddFriends:t=!1}=e,c=function(){const e=(0,ze.C)(),[s,i]=(0,a.useState)($e.LOADING);return(0,a.useEffect)((()=>e.subscribeToFacebookConnectionState((e=>{i(e.connection?$e.CONNECTED:$e.DISCONNECTED)})).cancel),[e]),s}(),d=(0,ze.C)(),[o,u]=(0,a.useState)(!1),[m,x]=(0,a.useState)(!1),[h,b]=(0,a.useState)(!1),j=(0,a.useCallback)((e=>{null!==e&&e.focus()}),[]),g=(0,a.useCallback)((()=>{location.reload()}),[]);if(m)return(0,F.jsxs)("div",{className:cs,children:[(0,F.jsx)(r.a,{onClick:i,ref:j,className:is,ariaLabel:l.R.get("buddy-feed.button.back"),icon:ge.g,size:"sm"}),(0,F.jsxs)("div",{className:ds,children:[(0,F.jsx)(y.E,{as:"h1",variant:"bodyMediumBold",className:ss,children:l.R.get("error-dialog.generic.header")}),(0,F.jsx)(y.E,{as:"p",variant:"bodySmall",className:as,children:l.R.get("error-dialog.generic.body")}),(0,F.jsx)(Ne.$,{colorSet:"invertedLight",onClick:g,children:l.R.get("error.reload")})]})]});const N=(t||h)&&c===$e.CONNECTED;return(0,F.jsxs)("div",{className:es,children:[N&&(0,F.jsx)(Ge,{onBackButtonClick:()=>{n&&b(!1),i()}}),!N&&(0,F.jsxs)("div",{className:ts,children:[(0,F.jsx)(r.a,{ariaLabel:l.R.get("buddy-feed.button.back"),onClick:i,className:is,ref:j,icon:ge.g,size:"sm"}),(0,F.jsx)(y.E,{as:"h1",variant:"bodyMediumBold",className:ss,children:l.R.get("buddy-feed.friend-activity")}),(0,F.jsx)(y.E,{as:"p",variant:"bodySmall",className:as,children:l.R.get("buddy-feed.facebook.connect-with-friends-default")}),(0,F.jsx)("div",{className:ls,children:(0,F.jsx)(Ne.$,{className:rs,size:"small",iconLeading:ye.G,UNSAFE_colorSet:(0,pe.mA)("#2374E1",ke.ONy),onClick:()=>{s({intent:"connect-to-facebook",type:"click",itemIdSuffix:"buddyfeed"}),c!==$e.CONNECTED?u(!0):b(!0)},children:l.R.get("buddy-feed.facebook.button")})}),(0,F.jsx)(y.E,{as:"p",variant:"marginal",className:ns,children:l.R.get("buddy-feed.facebook.disclaimer")}),(0,F.jsx)(Xe,{isOpen:o,onClose:()=>{u(!1)},onConfirm:()=>{d.connectToFacebook().then((()=>{b(!0),u(!1)})).catch((()=>{x(!0)}))}})]})]})};var us=i(48581),ms=i(9771);const fs=({showOnlineIndicator:e})=>(0,F.jsxs)("div",{className:te,children:[(0,F.jsxs)("div",{className:le,children:[(0,F.jsx)(ms.v,{size:"medium"}),e?(0,F.jsx)("div",{className:re}):null]}),(0,F.jsxs)("div",{className:ce,children:[(0,F.jsx)("div",{className:N()(de,oe)}),(0,F.jsx)("div",{className:de}),(0,F.jsx)("div",{className:de})]})]}),xs=()=>(0,F.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:ae,children:[(0,F.jsx)(y.E,{as:"p",className:ne,children:l.R.get("buddy-feed.let-followers-see-your-listening")}),(0,F.jsx)(fs,{showOnlineIndicator:!0}),(0,F.jsx)(fs,{showOnlineIndicator:!0}),(0,F.jsx)(fs,{}),(0,F.jsx)(y.E,{as:"p",className:ne,children:l.R.get("buddy-feed.enable-share-listening-activity")}),(0,F.jsx)(us.N_,{to:"/preferences",className:ue,children:(0,F.jsx)(Ne.$,{colorSet:"invertedLight",className:me,children:l.R.get("desktop.settings.settings")})})]});var hs=i(66535),bs=i(29439);const js="jUF2eKgYMm64aYykubct",gs="zhL_lhJqzKfJVy7L5VuY",Ns="XqquM_o2eODcnD8Y4QhS",ys="UGtycHBJ4egymBSmD_lX",ps="ND2ydDPzwQZB7HyaGCN8",ks="D9YN554UFGJle2CPP1TA",vs="v7Zcy9UKVUTDZIMKB6ZF",Cs="RX3U6eAasqazEkuFdnj0",Es=({children:e,page:s})=>{const i=0===s,a=e.filter(((e,i)=>i!==s));return(0,F.jsx)(hs.A,{component:null,children:a.map((e=>(0,F.jsx)(bs.A,{in:i,timeout:500,classNames:{enter:i?js:ps,enterActive:i?gs:ks,exit:i?Ns:vs,exitActive:i?ys:Cs},children:e},i?"first-page":"second-page")))})},Ss=({friends:e})=>{const s=(0,f.W)(),i=(0,h.s)(),{spec:j}=(0,b.r)(t.W,{});(0,a.useEffect)((()=>{s({intent:"view",type:"impression",itemIdSuffix:"buddyfeed"})}),[s]),(0,a.useEffect)((()=>{i.logImpression(j.impression())}),[i,j]);const[g,N]=(0,a.useState)(!1),y=()=>{g||i.logInteraction(j.addFriendButtonFactory().hitUiReveal()),N(!g)},p=0===e.length,k=(0,a.useCallback)((()=>{i.logInteraction(j.closeButtonFactory().hitUiHide())}),[i,j]);return(0,F.jsx)(x.ql.Provider,{value:"buddy_feed",children:(0,F.jsx)(d._,{label:l.R.get("buddy-feed.friend-activity"),children:(0,F.jsxs)(Es,{page:g?1:0,children:[(0,F.jsx)("div",{className:M,children:(0,F.jsx)(os,{onBackButtonClick:y,feedIsEmpty:p,goToAddFriends:g})}),(0,F.jsx)("div",{className:Q,children:(0,F.jsxs)(o.w,{children:[(0,F.jsx)(u.a,{title:l.R.get("buddy-feed.friend-activity"),panel:m.Z.BuddyFeed,onClose:k,actions:(0,F.jsx)(c.Zp,{label:l.R.get("buddy-feed.add-friends"),children:(0,F.jsx)(r.a,{ariaLabel:l.R.get("buddy-feed.add-friends"),testId:"add-friends-button",size:"sm",onClick:y,icon:n.k})})}),(0,F.jsx)("div",{className:se,children:(0,F.jsx)(r.a,{ariaLabel:l.R.get("buddy-feed.add-friends"),className:ie,size:"sm",onClick:y,icon:n.k})}),p?(0,F.jsx)(xs,{}):(0,F.jsx)(je,{friends:e,spec:j})]})})]})})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed.js.map