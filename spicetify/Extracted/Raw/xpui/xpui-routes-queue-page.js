"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7790],{81594:(e,i,t)=>{t.d(i,{U:()=>Q});var s=t(80388),n=t(79474),r=t(89551),a=(t(62355),t(48117),t(63512),t(60608),t(1137),t(45689),t(97500)),l=t.n(a),o=t(61343),u=t(88514),c=t(66123),d=t(25740),m=t(2940),x=t(98678),h=t(67318),p=t(43515);var g=t(19606),y=t(967);const j="main-topBar-contentArea",b="queue-tabBar-headerIsCentered",f="queue-tabBar-headerItem",C="queue-tabBar-moreButton",v="queue-tabBar-moreButtonActive",k="yxf_6IsQEmHjijEBUMTP",N="queue-tabBar-active",P="queue-tabBar-headerItemLink",I="queue-tabBar-header",R="queue-tabBar-chevron";var E=t(13274);const w=({items:e,activeItemId:i})=>(0,E.jsx)(g.W,{children:e.map((e=>e.disabled?(0,E.jsx)(y.D,{disabled:!0,role:"menuitemradio",className:k,onClick:e.handleClick,children:e.title},e.uri):(0,E.jsx)(y.D,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>l()(k,{[N]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var U=t(96467);const A=(0,n.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:s}){const a=(0,n.useRef)(null),[g,y]=(0,n.useState)([]),[k,A]=(0,n.useState)(0),[S,O]=(0,n.useState)([]),T=function(){const[e,i]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,n.useContext)(h.bi),s=(0,x.YQ)((e=>{e?.width&&i(e.width)}),250);return(0,p.w)({refOrElement:t,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:q}=(0,o.zy)(),F=i.find((e=>e.to===q));return(0,n.useEffect)((()=>{a.current&&A(a.current.clientWidth)}),[T]),(0,n.useEffect)((()=>{if(!a.current)return;const e=Array.from(a.current.children).map((e=>e.clientWidth));y(e)}),[i]),(0,n.useEffect)((()=>{if(!a.current)return;if(g.slice(0,-1).reduce(((e,i)=>e+i),0)<=k)return void O([]);const e=g.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;g.forEach(((e,s)=>{k>=t+e?t+=e:i.push(s)})),O(i)}),[k,g]),(0,E.jsx)("nav",{className:l()(s,j),"aria-label":t,children:(0,E.jsxs)("ul",{className:e?b:I,ref:a,children:[i.filter(((e,i)=>!S.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,E.jsx)(n.Fragment,{children:i((0,E.jsx)("li",{className:f,children:e.disabled?(0,E.jsx)("div",{className:P,children:(0,E.jsx)(u.E,{variant:"bodySmallBold",children:e.title})}):(0,E.jsx)(U.k,{end:!0,className:({isActive:e})=>l()(P,{[N]:e}),to:e.to,onClick:e.handleClick,children:(0,E.jsx)(u.E,{variant:"bodySmallBold",children:e.title})})}))},e.to)})),S.length||0===g.length?(0,E.jsx)("li",{className:f,children:(0,E.jsx)(m.tz,{renderInline:!0,menu:(0,E.jsx)(w,{items:i.filter(((e,i)=>S.includes(i))),activeItemId:F?.itemId}),children:(e,i,t)=>(0,E.jsxs)("button",{className:l()(C,{[v]:F}),type:"button",onClick:i,ref:t,children:[(0,E.jsx)(u.E,{variant:"bodySmallBold",children:F?F.title:r.R.get("more")}),e?(0,E.jsx)(c.J,{size:"small",className:R,"aria-hidden":"true"}):(0,E.jsx)(d.y,{size:"small",className:R,"aria-hidden":"true"})]})})}):null]})})}));var S=t(53475),O=t(87901),T=t(20510);const q="queue-tabBar-nav",F=()=>{const e=(0,T.U)(),i=(0,n.useCallback)((e=>(0,E.jsx)(O.u,{placement:"bottomEnd",arrow:"topStart",title:r.R.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,n.useMemo)((()=>[{title:r.R.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:r.R.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,E.jsx)(S.g,{children:(0,E.jsx)(A,{className:q,links:t})})},Q=({children:e})=>{const i=(0,s.yM)();return(0,E.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,E.jsx)(F,{})]})}},82959:(e,i,t)=>{t.r(i),t.d(i,{default:()=>xe});var s=t(79474),n=t(97500),r=t.n(n),a=t(88514),l=t(49084),o=t(78270),u=t(89551),c=t(19935),d=t(53326),m=t(27813),x=t(75108),h=t(30520),p=t(48378),g=t(52745),y=t(94398),j=t(13274);const b=({onClick:e})=>(0,j.jsx)(y.n,{onClick:e,size:"small",children:u.R.get("queue.clear-queue")});var f=t(16797),C=t(39505),v=t(37892),k=t(62358),N=t(75839),P=t(94926),I=t(33570),R=t(34131),E=t(25973),w=t(47177),U=(t(1137),t(39481)),A=t(49125),S=t(63275),O=t(46570),T=t(3315),q=t(38991),F=t(75732),Q=t(67553),$=t(65980),D=t(58032),M=t(42956),L=t(87083),B=t(41057),_=t(73575),K=t(35919),G=t(37576),H=t(55437),z=t(43083),W=t(36981),Y=t(16629),J=t(43446),Z=t(76171),X=t(18830),V=t(59914);let ee=function(e){return e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad",e}({});const ie=s.memo((function({uri:e,uid:i,contextUri:t,name:n,duration_ms:r,artists:a,index:l,rowNumberOffset:o,imgUrl:c,isExplicit:d,isPlayable:m,isMOGEFRestricted:p,album:y,type:b,section:f,usePlayContextItem:C,isAutoPlay:k=!1,isEnhanced:N,queueSpec:P,trackContextUri:I}){const R=(0,W.s)(),E=(0,h.K)(),{triggerPlay:w,togglePlay:ie}=C({uid:i,uri:e,index:l}),{spec:te}=(0,g.r)(A.i,{data:{position:l,reason:"",uri:e}}),{isActive:se,isPlaying:ne}=(0,H.te)(e),re=(0,s.useCallback)(((t,s)=>{i?w({loggingParams:s},(()=>E.skipToNext({uri:e,uid:i}))):w({loggingParams:s})}),[E,w,e,i]),ae=(0,s.useCallback)((t=>{i?ie({loggingParams:t},(()=>se?ne?E.pause():E.resume():E.skipToNext({uri:e,uid:i}))):ie({loggingParams:t})}),[E,ie,e,i,se,ne]),le=b===ee.TRACK,oe=b===ee.EPISODE,ue=b===ee.CHAPTER,ce=oe&&"video"===y?.mediaType,de=b===ee.LOCAL,me=b===ee.AD,xe=a?.map((e=>e.name)).join(u.R.getSeparator())||"",he=(0,G.T)(e),pe=(0,J.g)(e,m,(0,S.Pk)(e)),{badges:ge,hasBadges:ye}=(0,Y.b)({downloadAvailability:he,isExplicit:d,isMOGEFRestricted:p,isEnhanced:N}),je=(0,V.X)();let be;be=oe?(0,j.jsx)(q.b,{uri:e,uid:k?void 0:i,showUri:y.uri,contextUri:t}):ue?(0,j.jsx)(T.r,{uri:e,removeFromQueueData:{uid:k?void 0:i,contextUri:t}}):de?(0,j.jsx)(F.A,{uri:e,uid:k?void 0:i,contextUri:t}):me?null:(0,j.jsx)(Q.P,{uri:e,uid:k?void 0:i,albumUri:y.uri,artists:a,contextUri:t,recommendationContextUri:I,isSmartRecommendation:N});const fe=(0,s.useCallback)(((t,s)=>{const{meta:n,uris:r}=t,a=r.map((e=>({uri:e,uid:null})));let l;l=s===M.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},n.section===v.$.NowPlaying?E.addToQueue(a):n.origin===v.$.NowPlaying?E.insertIntoQueue(a,l):E.reorderQueue(a,l)}),[E,i,e]),Ce=(0,s.useCallback)(((t,s)=>{const{items:n}=t;let r;r=s===M.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},E.reorderQueue(n,r)}),[E,i,e]),ve=k?[]:[L.O[S.NQ.TRACK],L.O[S.NQ.EPISODE]];return(0,j.jsx)(x.pZ,{value:"row",index:l,children:(0,j.jsx)(O.h,{menu:be,children:(0,j.jsxs)(M.w,{uri:e,contextUri:t,index:l,onTriggerPlay:re,isActive:f===v.$.NowPlaying&&se,ariaRowIndex:l,isPlayable:pe,ageRestricted:p,spec:te,dragMetadata:{name:n,createdBy:xe,sectionId:f},onInsert:(i,t,s,n,r)=>{fe({uris:i,dropIndex:t,meta:r},s),P&&R.logInteraction(P.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,s)=>{Ce({items:e,dropIndex:i,meta:s},t),P&&R.logInteraction(P.dragSort())},allowedDropTypes:ve,children:[(0,j.jsx)($.yv,{ariaColIndex:0,children:(0,j.jsx)($.$H,{uri:e,playAriaLabel:u.R.get("tracklist.a11y.play",n,xe),isPlaying:f===v.$.NowPlaying&&ne,isActive:f===v.$.NowPlaying&&se,spec:te,onClick:(e,i)=>{ae(i)},children:(0,j.jsx)($.aJ,{children:l+o+1})})}),(0,j.jsxs)($.U6,{ariaColIndex:1,children:[(0,j.jsx)($.eY,{src:c,isVideo:ce,isEpisode:oe||ue}),(0,j.jsxs)($.l1,{children:[(0,j.jsx)($.pJ,{titleText:n,children:n}),ye&&(0,j.jsxs)($.Pe,{children:[ge.enhanced&&(0,j.jsx)(U.R,{size:"small",className:D.A.enhanced,title:u.R.get("web-player.smart-shuffle.icon-hover-label"),"aria-label":u.R.get("web-player.smart-shuffle.icon-hover-label")}),ge.download&&(0,j.jsx)(B._,{}),ge.explicit&&(0,j.jsx)(_.g,{}),ge.nineteen&&(0,j.jsx)(K.q,{className:D.A.nineteen,size:16})]}),(0,j.jsxs)($.pj,{children:[le&&(0,j.jsx)($.lw,{artists:a,spec:te}),(oe||de)&&!ce&&xe]})]})]}),(0,j.jsx)($.oi,{ariaColIndex:2,children:(0,j.jsx)($.gy,{nonInteractive:de,uri:y.uri,name:y.name,creatorUri:a?.[0]?.uri,spec:te,children:y.name})}),(0,j.jsxs)($.lH,{ariaColIndex:3,children:[N&&je&&(0,j.jsx)(z.r,{spec:te,children:(0,j.jsx)(X.o,{className:D.A.rowFeedback,contextUri:I,id:i??void 0,uri:e,isActive:f===v.$.NowPlaying&&se})}),!ue&&!N&&(0,j.jsx)(Z.d,{uri:e,type:b}),(0,j.jsx)($.Po,{duration:r}),(0,j.jsx)($.Y8,{menu:be,label:u.R.get("more.label.track",n,xe),spec:te})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name&&e.isEnhanced===i.isEnhanced)),te=s.memo((function({tracks:e,ariaLabel:i,contextUri:t,currentlyPlayingContextUri:n=t,rowNumberOffset:r=0,section:a,usePlayContextItem:l}){const o=(0,P.W)(),c=(0,h.K)(),d=(0,s.useCallback)(((e,i)=>{o({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e).then(i)}),[c,o]),m=(0,s.useCallback)(((e,i)=>{if((0,R.p0)(e)){const s=(0,w.g)(e.show?.images,{desiredSize:40});return(0,j.jsx)(ie,{index:i,rowNumberOffset:r,imgUrl:s?.url||"",uri:(0,I.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ee.EPISODE,section:a,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${r}${e.uid}`)}if((0,R.dS)(e)){const s=(0,w.g)(e.images||void 0,{desiredSize:40});return(0,j.jsx)(ie,{index:i,rowNumberOffset:r,imgUrl:s?.url||"",uri:(0,I.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ee.CHAPTER,section:a,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${r}${e.uid}`)}if((0,R.NE)(e)){const s=(0,w.g)(e.images||void 0,{desiredSize:40});return(0,j.jsx)(ie,{index:i,rowNumberOffset:r,imgUrl:s?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??u.R.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ee.AD,section:a,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${r}${e.uid}`)}if((0,R.v_)(e)||(0,R.vC)(e)){const s=(0,w.g)(e?.album?.images,{desiredSize:40}),o=e.type===E.c.TRACK?e:null;return(0,j.jsx)(ie,{index:i,rowNumberOffset:r,imgUrl:s?.url||"",uri:(0,I.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:o?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:o?.is19PlusOnly??!1,type:o?.isLocal?ee.LOCAL:ee.TRACK,section:a,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,N.N)(e),trackContextUri:e.metadata?.context_uri??n},`${i}${r}${e.uid}`)}return(0,j.jsx)(k.nd,{height:`${k.FL}px`})}),[r,t,n,a,l]),x=(0,s.useMemo)((()=>[k.$C.INDEX,k.$C.TITLE_AND_ARTIST,k.$C.ALBUM,k.$C.DURATION]),[]),p=(0,s.useCallback)((e=>({uri:e.uri,uid:e.uid??e.uri})),[]);return(0,j.jsx)(k.S4,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:d,renderRow:m,resolveItem:p,columns:x})}));var se=t(91032);const ne="queue-queuePage-queuePage",re="queue-queuePage-header",ae="queue-queuePage-subHeader",le="queue-queuePage-nextFrom",oe="queue-queuePage-nextInQueue",ue=()=>{const{uri:e,description:i,current:t,nextUp:n,queued:y,isEmpty:k,hasQueuedTracks:N,hasNextTracks:P}=(0,se.H)(),{spec:I,logger:R,UBIFragment:E}=(0,g.r)(l.i,{data:{identifier:o.$h.NOWPLAYING_QUEUE,uri:e??""}}),w=(0,s.useMemo)((()=>I.nowPlayingSectionFactory()),[I]),U=(0,s.useMemo)((()=>I.nextInQueueSectionFactory()),[I]),A=(0,s.useMemo)((()=>I.nextFromSectionFactory()),[I]),S=(0,h.K)(),[O,T]=(0,s.useState)(!1),q=(0,s.useCallback)((()=>{T(!1)}),[T]),F=(0,s.useCallback)((()=>{S.clearQueue(),T(!1)}),[S]),Q=(0,s.useCallback)((()=>{let e;const i=U.clearQueueButtonFactory();y.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:y.length}),R.logInteraction(e))}),[R,U,y.length]),$=(0,s.useCallback)((async()=>{Q(),T(!0)}),[Q]),{usePlayContextItem:D}=(0,p.P)({uri:e??""},{featureIdentifier:"queue"}),M=(0,s.useCallback)((async()=>{if(!P)return;const i=I.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});R.logInteraction(i)}),[P,R,I,e]);return k?(0,j.jsx)(C.K,{}):(0,j.jsxs)("div",{className:ne,children:[(0,j.jsx)(c.Q,{children:u.R.get("queue.page-title")}),(0,j.jsx)(E,{spec:I,children:(0,j.jsx)(m.Z,{className:re,emptyStateComponent:(0,j.jsx)(a.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:re,children:u.R.get("playback-control.queue")})})}),t&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:ae,children:u.R.get("queue.now-playing")}),(0,j.jsx)(E,{spec:w,children:(0,j.jsx)(x.pZ,{value:"now-playing",children:(0,j.jsx)(te,{ariaLabel:u.R.get("queue.now-playing"),tracks:[t],contextUri:e,section:v.$.NowPlaying,usePlayContextItem:D})})})]}),N&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:r()(oe,ae),children:[(0,j.jsx)(a.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",children:u.R.get("queue.next-in-queue")}),N&&(0,j.jsx)(b,{onClick:$})]}),(0,j.jsx)(E,{spec:U,children:(0,j.jsx)(x.pZ,{value:"next-in-queue",children:(0,j.jsx)(te,{ariaLabel:u.R.get("queue.next-in-queue"),tracks:y,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",currentlyPlayingContextUri:e,section:v.$.NextInQueue,usePlayContextItem:D})})})]}),P&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:ae,children:i&&!(0,se.K)(t)?(0,j.jsxs)("span",{className:"standalone-ellipsis-one-line",children:[u.R.get("queue.next-from")," ",(0,j.jsx)(d.Link,{className:le,to:e,onClick:M,children:i})]}):u.R.get("queue.next-up")}),(0,j.jsx)(E,{spec:A,children:(0,j.jsx)(x.pZ,{value:"next-up",children:(0,j.jsx)(te,{ariaLabel:u.R.get("queue.next-up"),tracks:n,rowNumberOffset:1+(y?.length||0),contextUri:"spotify:app:queue:NextUp",currentlyPlayingContextUri:e,section:v.$.NextUp,usePlayContextItem:D})})})]}),(0,j.jsx)(f.p,{itemCount:y?.length||0,isOpen:O,onClose:q,onConfirm:F})]})};var ce=t(81594),de=t(20510),me=t(2038);const xe=()=>(0,de.U)()?(0,j.jsx)(me.InstrumentedRedirect,{to:"/history"}):(0,j.jsx)(ce.U,{children:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(ue,{})})})},33570:(e,i,t)=>{t.d(i,{a:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map