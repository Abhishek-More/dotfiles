"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9480],{72669:(e,t,a)=>{a.d(t,{M:()=>c});var i=a(87083),r=a(38709),o=a(77081),s=a(88284),l=a(4888);const n="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";var u=a(13274);const c=function({onClick:e,name:t,images:a,canEdit:c,placeholderType:m,shape:g=l.bg.SQUARE,dragUri:p=""}){const[h,f]=(0,r.P)(a),v=(0,o.b)(h,f)===o.g.loaded,b=(0,i.P)({itemUris:[p],dragLabelText:t});return(0,u.jsxs)("div",{className:n,"data-testid":`${m}-image`,draggable:!!p,onDragStart:b,children:[(0,u.jsx)(l.bI,{loading:"eager",name:t,images:a,placeholderType:m,shape:g}),c&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(s.a,{overlay:v,onClick:e,rounded:g===l.bg.CIRCLE})})]})}},54542:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ea});var i=a(79474),r=a(61343),o=a(78270),s=a(63275),l=a(97500),n=a.n(l),d=a(89551),u=a(79543),c=a(81891),m=a(67278),g=a(62502),p=a(1369);const h="profile-userOverview-container",f="profile-userOverview-section",v="profile-userOverview-subPage",b="profile-userOverview-topTrackSubPage",x="profile-userOverview-title",k="profile-userOverview-header";var y=a(13274);const j=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.SR,[t]),o=a?.profiles;return i?(0,y.jsx)(c.A,{hasError:null!==r,errorMessage:d.R.get("error.not_found.title.page")}):(0,y.jsx)(m.$,{className:n()("contentSpacing",v),title:d.R.get("followers"),total:o?.length,showAll:!0,children:o?.map(((e,t)=>(0,y.jsx)(u.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},R=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.mH,[t]),o=a?.profiles;return i?(0,y.jsx)(c.A,{hasError:null!==r,errorMessage:d.R.get("error.not_found.title.page")}):(0,y.jsx)(m.$,{className:n()("contentSpacing",v),title:d.R.get("following"),total:o?.length,showAll:!0,children:o?.map(((e,t)=>(0,y.jsx)(u.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};a(1137);var I=a(58703),_=a(85980),N=a(42551),w=a(94080),T=a(38233),A=a(34295),P=a(42156),C=a(46570),S=a(63392),E=a(19935),O=a(72669),U=a(4888),M=a(79698),D=a(52842),L=a(88514),F=a(36528),H=a(45803),B=a(18331),W=a(23934),J=a(38709),$=a(77081);const V="profile-userEditDetails-image",Q="valcBm4lLe9qFBcg0sFY",K="tAIzXn8C9KriGwGuBfWg",G="PsrXxenHUFXYM1ub1xWw",z="U_VWfeeLWnDPhUTxCmrQ",Z=function({onClickEdit:e,onClickRemove:t,name:a,images:i,canEdit:r}){const[o,s]=(0,J.P)(i),l=(0,$.b)(o,s)===$.g.loaded;return(0,y.jsxs)("div",{className:V,children:[(0,y.jsx)(U.bI,{loading:"eager",name:a,images:i,placeholderType:"user",shape:U.bg.CIRCLE}),r&&(0,y.jsxs)("div",{className:n()(Q,{[G]:l}),children:[(0,y.jsx)("button",{className:K,"aria-haspopup":"true",onClick:e,type:"button",children:(0,y.jsx)(L.E,{variant:"bodyMedium",children:d.R.get("user.edit-details.choose-photo")})}),(0,y.jsx)("div",{className:n()(z,"icon"),children:(0,y.jsx)(W.G,{size:"xlarge","aria-hidden":!0})}),(0,y.jsx)("button",{className:K,onClick:t,type:"button",children:(0,y.jsx)(L.E,{variant:"bodyMedium",children:d.R.get("user.edit-details.remove-photo")})})]})]})};var q=a(29821),Y=a(47586),X=a(59043);const ee={paths:""},te={encode(e,t=X.Writer.create()){for(const a of e.paths)t.uint32(10).string(a);return t},decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...ee};for(r.paths=[];a.pos<i;){const e=a.uint32();if(e>>>3==1)r.paths.push(a.string());else a.skipType(7&e)}return r},fromJSON(e){const t={...ee};if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(String(a));return t},fromPartial(e){const t={...ee};if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(a);return t},toJSON(e){const t={};return e.paths?t.paths=e.paths.map((e=>e)):t.paths=[],t}};a(34380);var ae=a(21364),ie=a(84686).hp;const re={value:0},oe={value:!1},se={value:""};const le={encode:(e,t=X.Writer.create())=>(t.uint32(8).int32(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...re};for(;a.pos<i;){const e=a.uint32();if(e>>>3==1)r.value=a.int32();else a.skipType(7&e)}return r},fromJSON(e){const t={...re};return void 0!==e.value&&null!==e.value?t.value=Number(e.value):t.value=0,t},fromPartial(e){const t={...re};return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=0,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},ne={encode:(e,t=X.Writer.create())=>(t.uint32(8).bool(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...oe};for(;a.pos<i;){const e=a.uint32();if(e>>>3==1)r.value=a.bool();else a.skipType(7&e)}return r},fromJSON(e){const t={...oe};return void 0!==e.value&&null!==e.value?t.value=Boolean(e.value):t.value=!1,t},fromPartial(e){const t={...oe};return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=!1,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},de={encode:(e,t=X.Writer.create())=>(t.uint32(10).string(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...se};for(;a.pos<i;){const e=a.uint32();if(e>>>3==1)r.value=a.string();else a.skipType(7&e)}return r},fromJSON(e){const t={...se};return void 0!==e.value&&null!==e.value?t.value=String(e.value):t.value="",t},fromPartial(e){const t={...se};return void 0!==e.value&&null!==e.value?t.value=e.value:t.value="",t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}};X.util.Long!==ae.A&&(X.util.Long=ae.A,(0,X.configure)());const ue=globalThis;ue.atob,ue.btoa;const ce={maxWidth:0,maxHeight:0,url:""},me={},ge={},pe={encode:(e,t=X.Writer.create())=>(t.uint32(8).int32(e.maxWidth),t.uint32(16).int32(e.maxHeight),t.uint32(26).string(e.url),t),decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...ce};for(;a.pos<i;){const e=a.uint32();switch(e>>>3){case 1:r.maxWidth=a.int32();break;case 2:r.maxHeight=a.int32();break;case 3:r.url=a.string();break;default:a.skipType(7&e)}}return r},fromJSON(e){const t={...ce};return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=Number(e.maxWidth):t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=Number(e.maxHeight):t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=String(e.url):t.url="",t},fromPartial(e){const t={...ce};return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=e.maxWidth:t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=e.maxHeight:t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=e.url:t.url="",t},toJSON(e){const t={};return void 0!==e.maxWidth&&(t.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(t.maxHeight=e.maxHeight),void 0!==e.url&&(t.url=e.url),t}},he={encode(e,t=X.Writer.create()){void 0!==e.username&&void 0!==e.username&&de.encode({value:e.username},t.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&de.encode({value:e.name},t.uint32(18).fork()).ldelim();for(const a of e.images)pe.encode(a,t.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&ne.encode({value:e.verified},t.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&ne.encode({value:e.editProfileDisabled},t.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&ne.encode({value:e.reportAbuseDisabled},t.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&ne.encode({value:e.abuseReportedName},t.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&ne.encode({value:e.abuseReportedImage},t.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&ne.encode({value:e.hasSpotifyName},t.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&ne.encode({value:e.hasSpotifyImage},t.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&le.encode({value:e.color},t.uint32(90).fork()).ldelim(),t},decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...me};for(r.images=[];a.pos<i;){const e=a.uint32();switch(e>>>3){case 1:r.username=de.decode(a,a.uint32()).value;break;case 2:r.name=de.decode(a,a.uint32()).value;break;case 3:r.images.push(pe.decode(a,a.uint32()));break;case 4:r.verified=ne.decode(a,a.uint32()).value;break;case 5:r.editProfileDisabled=ne.decode(a,a.uint32()).value;break;case 6:r.reportAbuseDisabled=ne.decode(a,a.uint32()).value;break;case 7:r.abuseReportedName=ne.decode(a,a.uint32()).value;break;case 8:r.abuseReportedImage=ne.decode(a,a.uint32()).value;break;case 9:r.hasSpotifyName=ne.decode(a,a.uint32()).value;break;case 10:r.hasSpotifyImage=ne.decode(a,a.uint32()).value;break;case 11:r.color=le.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return r},fromJSON(e){const t={...me};if(t.images=[],void 0!==e.username&&null!==e.username?t.username=String(e.username):t.username=void 0,void 0!==e.name&&null!==e.name?t.name=String(e.name):t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(pe.fromJSON(a));return void 0!==e.verified&&null!==e.verified?t.verified=Boolean(e.verified):t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=Boolean(e.editProfileDisabled):t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=Boolean(e.abuseReportedName):t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=Boolean(e.abuseReportedImage):t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=Boolean(e.hasSpotifyName):t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=Boolean(e.hasSpotifyImage):t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=Number(e.color):t.color=void 0,t},fromPartial(e){const t={...me};if(t.images=[],void 0!==e.username&&null!==e.username?t.username=e.username:t.username=void 0,void 0!==e.name&&null!==e.name?t.name=e.name:t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(pe.fromPartial(a));return void 0!==e.verified&&null!==e.verified?t.verified=e.verified:t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=e.editProfileDisabled:t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=e.reportAbuseDisabled:t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=e.abuseReportedName:t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=e.abuseReportedImage:t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=e.hasSpotifyName:t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=e.hasSpotifyImage:t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=e.color:t.color=void 0,t},toJSON(e){const t={};return void 0!==e.username&&(t.username=e.username),void 0!==e.name&&(t.name=e.name),e.images?t.images=e.images.map((e=>e?pe.toJSON(e):void 0)):t.images=[],void 0!==e.verified&&(t.verified=e.verified),void 0!==e.editProfileDisabled&&(t.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(t.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(t.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(t.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(t.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(t.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(t.color=e.color),t}},fe={encode:(e,t=X.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&te.encode(e.mask,t.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&he.encode(e.userProfile,t.uint32(18).fork()).ldelim(),t),decode(e,t){const a=e instanceof Uint8Array?new X.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...ge};for(;a.pos<i;){const e=a.uint32();switch(e>>>3){case 1:r.mask=te.decode(a,a.uint32());break;case 2:r.userProfile=he.decode(a,a.uint32());break;default:a.skipType(7&e)}}return r},fromJSON(e){const t={...ge};return void 0!==e.mask&&null!==e.mask?t.mask=te.fromJSON(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=he.fromJSON(e.userProfile):t.userProfile=void 0,t},fromPartial(e){const t={...ge};return void 0!==e.mask&&null!==e.mask?t.mask=te.fromPartial(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=he.fromPartial(e.userProfile):t.userProfile=void 0,t},toJSON(e){const t={};return void 0!==e.mask&&(t.mask=e.mask?te.toJSON(e.mask):void 0),void 0!==e.userProfile&&(t.userProfile=e.userProfile?he.toJSON(e.userProfile):void 0),t}},ve=`${q.I_}/identity`;async function be(e,t,{name:a,imageUploadToken:i}){void 0!==a&&await async function(e,t,a){const i=fe.encode(fe.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(ve).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,Y.v)(t))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(i.finish()).withoutMarket().send()}(e,t,a),void 0!==i&&(null!==i?await async function(e,t,a){await e.build().withHost(ve).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,Y.v)(t))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,t,i):await async function(e,t){await e.build().withHost(ve).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,Y.v)(t))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,t))}var xe=a(11142);const ke={type:"error",get message(){return d.R.get("user.edit-details.error.file-size-exceeded",10)}},ye={type:"error",get message(){return d.R.get("user.edit-details.error.too-small",300,300)}},je={type:"error",get message(){return d.R.get("user.edit-details.error.missing-name")}},Re={type:"error",get message(){return d.R.get("user.edit-details.error.failed-to-save")}},Ie={type:"error",get message(){return d.R.get("user.edit-details.error.file-upload-failed")}};function _e(e){return{type:"setLoading",loading:e}}function Ne(e){return{type:"setMessage",message:e}}function we(e,t){switch(t.type){case"setName":return{...e,name:t.name};case"setMessage":return{...e,message:t.message,loading:!1};case"setLoading":return{...e,loading:t.loading,message:null};case"setImageData":return{...e,imageData:t.data,removeImage:!1};case"setImageToken":return{...e,imageToken:t.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}var Te=a(48624),Ae=a(93260),Pe=a(77162);const Ce="profile-userEditDetails-container",Se="profile-userEditDetails-content",Ee="profile-userEditDetails-header",Oe="profile-userEditDetails-closeButton",Ue="vAeyAmeLkDEDKdL9Hou0",Me="dnmzO6yYKkxUV8jl7O1Z",De="profile-userEditDetails-nameInput",Le="profile-userEditDetails-name",Fe="profile-userEditDetails-label",He="profile-userEditDetails-labelText",Be="dMhJaxli87_22jb_3d9x",We="profile-userEditDetails-saveButton",Je="profile-userEditDetails-disclaimer",$e=i.memo((function({uri:e,name:t,image:a,onClose:r,shouldOpenImagePicker:o,userCapabilities:s}){const[l,u]=(0,Ae.p$)(),[c,m]=function({name:e,image:t}){return(0,i.useReducer)(we,{loading:!1,message:null,name:e,image:t})}({name:t,image:a}),g=(0,i.useMemo)((()=>{const e=c.imageData||c.image;return e?[{url:e,width:300,height:300}]:[]}),[c.image,c.imageData]);(0,i.useEffect)((()=>{o&&u()}),[u,o]);const p=(0,i.useCallback)((e=>{e===Ae.il.FILE_TOO_BIG?m(Ne(ke)):e===Ae.il.IMAGE_TOO_SMALL&&m(Ne(ye))}),[m]),h=(0,i.useCallback)((()=>{m({type:"removeImage"})}),[m]),f=(0,i.useCallback)((async t=>{t.preventDefault();if(0!==c.name.trim().length){m(_e(!0));try{const t=c.removeImage?null:c.imageToken;await async function(e,{name:t,imageUploadToken:a}){await be(xe.n.getInstance(),e,{name:t,imageUploadToken:a})}(e,{name:c.name,imageUploadToken:t}),r({name:c.name,image:c.imageData||c.image})}catch(e){m(Ne(Re))}}else m(Ne(je))}),[m,r,c.image,c.imageData,c.imageToken,c.name,c.removeImage,e]);return(0,y.jsx)(Te.A,{isOpen:!0,contentLabel:d.R.get("user.edit-details.title"),onRequestClose:()=>r(),children:(0,y.jsxs)("div",{className:Ce,children:[(0,y.jsxs)("div",{className:Ee,children:[(0,y.jsx)(L.E,{as:"h1",variant:"titleSmall",children:d.R.get("user.edit-details.title")}),(0,y.jsx)("button",{className:Oe,onClick:()=>r(),"aria-label":d.R.get("close"),children:(0,y.jsx)(F.M,{size:"small"})})]}),c.message&&(0,y.jsx)(Pe.z,{isErrorMessage:"error"===c.message.type,message:c.message.message}),(0,y.jsxs)("form",{className:Se,onSubmit:f,children:[s.edit_image&&(0,y.jsx)(Ae.uU,{isOpen:l,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:t,imageDataUrl:a}=e;if(m(Ne(null)),m({type:"setImageData",data:a}),t)try{m(_e(!0));const e=await async function(e){const t=await xe.n.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!t.body)throw new Error("No upload token recieved");return t.body.uploadToken}(t);m({type:"setImageToken",token:e}),m(_e(!1))}catch{m(Ne(Ie))}},onError:p}),(0,y.jsxs)("div",{className:Ue,children:[(0,y.jsx)(Z,{name:t,images:g,onClickEdit:u,onClickRemove:h,canEdit:s.edit_image}),c.loading&&(0,y.jsx)("div",{className:Me,children:(0,y.jsx)(H.I,{})})]}),(0,y.jsxs)("div",{className:Le,children:[(0,y.jsx)("label",{htmlFor:"user-edit-name",className:Fe,children:(0,y.jsx)(L.E,{variant:"marginalBold",className:He,children:d.R.get("user.edit-details.name-label")})}),(0,y.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:n()(De,Be),onChange:e=>{m(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:d.R.get("user.edit-details.name-placeholder"),maxLength:32,value:c.name,disabled:!s.edit_name})]}),(0,y.jsx)("div",{className:We,children:(0,y.jsx)(B.$,{colorSet:"invertedLight",onClick:f,disabled:c.loading,children:d.R.get("save")})}),(0,y.jsx)(L.E,{as:"p",variant:"marginalBold",className:Je,children:d.R.get("image-upload.legal-disclaimer")})]})]})})}));var Ve=a(76839),Qe=a(75995),Ke=a(82383),Ge=a(44093),ze=a(41546),Ze=a(85078),qe=a(43083),Ye=a(52745),Xe=a(47177),et=a(2018),tt=a(51057),at=a(74282),it=a(81555),rt=a(63952),ot=a(94926),st=a(8661),lt=a(71449),nt=a(64280),dt=a(54594),ut=a(85905);const ct=i.memo((function({openModal:e,spec:t,logger:a,name:r,backgroundColor:o,isCurrentUser:s,uri:l}){const[n,u]=(0,lt.Y)(l),c=(0,ot.W)(),m=!(0,st.n)(),g=(0,i.useCallback)((()=>{c({targetUri:l,intent:n?"unfollow":"follow",type:"click"});const e=t.actionBarFactory().followButtonFactory();n?(u(!1),a.logInteraction(e.hitUnfollow({itemToBeUnfollowed:l}))):(u(!0),a.logInteraction(e.hitFollow({itemToBeFollowed:l})))}),[n,a,c,u,t,l]),p=(0,i.useCallback)((()=>{const e=t.actionBarFactory().contextMenuButtonFactory().hitUiReveal();a.logInteraction(e)}),[a,t]),h=(0,ut.j)();return(0,y.jsx)(nt.E,{backgroundColor:o,children:(0,y.jsxs)(dt.S,{children:[!s&&(0,y.jsx)(it.e,{children:(0,y.jsx)(rt.W,{isFollowing:Boolean(n),onClick:g,disabled:m})}),(0,y.jsx)(at.b,{menu:(0,y.jsx)(S.B,{uri:l,onEditProfileCallback:e}),children:(0,y.jsx)(tt.e,{label:d.R.get("more.label.context",r),onClick:p,size:h})})]})})}));var mt=a(83623),gt=a(36981),pt=a(62358),ht=a(56788),ft=a(44191),vt=a(33570),bt=a(75108),xt=a(48378),kt=a(16247),yt=a(25973);const jt=i.memo((function({tracks:e,hasHeaderRow:t=!1,nrTracksVisible:a,uri:r}){const o=(0,Y.v)(r),l=(0,s.du)(o,"tracks").toURI(),n=(0,i.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:u}=(0,xt.P)({uri:l,pages:[{items:e.map((e=>({type:yt.c.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),c=(0,i.useCallback)(((e,t)=>{const a=(0,Xe.g)(e?.albumOfTrack?.coverArt?.sources,{desiredSize:40});return(0,y.jsx)(ht.MJ,{index:t,uri:(0,vt.a)(e),duration_ms:e.duration.totalMilliseconds,name:e.name,artists:e.artists.items.map((({uri:e,profile:{name:t}})=>({uri:e,name:t}))),album:e.albumOfTrack,isPlayable:!0,isExplicit:e.contentRating?.label===kt.x7.Explicit,isMOGEFRestricted:e.contentRating?.label===kt.x7.NineteenPlus,imgUrl:a?.url||"",contextUri:l,usePlayContextItem:u},t+e.uri)}),[l,u]),m=(0,i.useMemo)((()=>[pt.$C.INDEX,pt.$C.TITLE_AND_ARTIST,pt.$C.ALBUM,pt.$C.DURATION]),[]),g=(0,i.useCallback)((e=>({uri:e.uri})),[]),p=(0,ft.A)()?0:void 0;return(0,y.jsx)(bt.pZ,{value:"user-top-tracks-tracklist",children:(0,y.jsx)(pt.S4,{ariaLabel:d.R.get("top_tracks_this_month"),renderRow:c,nrTracks:n.length,tracks:n,resolveItem:g,headerTop:p,hasHeaderRow:t,columns:m,columnPersistenceKey:"user-top-tracks-tracklist"})})}),((e,t)=>e.tracks===t.tracks)),Rt=i.memo((function({tracks:e,title:t,tagline:a,seeAllUri:r,className:o,uri:s,spec:l}){const n=(0,gt.s)(),d=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]),u=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]);if(!e||0===e.totalCount||0===e.items.length)return null;const c=e.totalCount>4;return(0,y.jsxs)("section",{className:o,children:[(0,y.jsx)(mt.U,{title:t,tagline:a,seeAllUri:r,hasMoreElements:c,onClickTitle:d,onClickSeeAll:u}),(0,y.jsx)(qe.r,{spec:l,children:(0,y.jsx)(jt,{tracks:e.items,uri:s,nrTracksVisible:4})})]})}),((e,t)=>e.tracks===t.tracks));function It(e,t){switch(t.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var _t=a(85966),Nt=a(47850),wt=a(38143),Tt=a(88202),At=a(94418),Pt=a(78172),Ct=a(60327),St=(a(62355),a(48117),a(50578)),Et=a(34757);const Ot=new St.l("userTopContent","query","feb6d55177e2cbce2ac59214f9493f1ef2e4368eec01b3d4c3468fa1b97336e2",null);function Ut(e){return"Artist"===e.__typename}function Mt(e){if("ArtistPageV2"!==e?.topArtists?.__typename)return null;const t=e.topArtists.items.map((e=>e.data)).filter(Ut);return 0===t.length?null:{totalCount:e.topArtists.totalCount,items:t}}function Dt(e){return"Track"===e.__typename}function Lt(e){if("TrackPageV2"!==e?.topTracks?.__typename)return null;const t=e.topTracks.items.map((e=>e.data)).filter(Dt).filter((e=>null!==e.albumOfTrack));return 0===t.length?null:{totalCount:e.topTracks.totalCount,items:t}}const Ft=kt.xE.Affinity,Ht=kt.Nm.ShortTerm;function Bt({includeTopArtists:e,includeTopTracks:t,topArtistsLimit:a,topTracksLimit:i}){const{data:r,loading:o,error:s}=(l={includeTopArtists:e,topArtistsInput:{offset:0,limit:a,sortBy:Ft,timeRange:Ht},includeTopTracks:t,topTracksInput:{offset:0,limit:i,sortBy:Ft,timeRange:Ht}},n={enabled:e||t,gcTime:18e5,staleTime:3e5},(0,Et.I)(Ot,l,n));var l,n;return null!==s?{topTracks:null,topArtists:null,loading:o,error:new Error("Failed loading user top content!")}:{topTracks:Lt(r?.me?.profile??null),topArtists:Mt(r?.me?.profile??null),loading:o,error:null}}const Wt=18e5,Jt=3e5,$t=(0,N.Mz)(Ke.mB,(e=>e?.images||[])),Vt=({uri:e,isCurrentUser:t})=>{const a=(0,_.d4)(Ke.mB)?.uri,r=(0,_.d4)(Ke.Mn),o=(0,_.d4)($t),l=(0,_.wA)(),m=(0,I.jE)(),v=(0,w.NC)(Ct.DGB,{loadingValue:!0}),b=(0,i.useMemo)((()=>(0,Xe.g)(o)),[o]),[{isModalOpen:x,modalVariant:k,shouldOpenImagePicker:j},R]=function(){const[e,t]=(0,i.useReducer)(It,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,t]}(),{data:N,loading:L,queryKey:F}=(0,p.Z)(g.E$,[{uri:e,playlists:10,artists:10,episodes:10}],{gcTime:Wt,staleTime:Jt}),H=(0,Ve.V)();(0,Pt.N)(At.mc.OPERATION_COMPLETE,(()=>{m.invalidateQueries({queryKey:F})})),(0,Ze.l)(ze.UV.OPERATION_COMPLETE,(()=>{m.invalidateQueries({queryKey:F})}));const B=N?.public_playlists,W=N?.is_verified,J=N?.recently_played_artists,$=t?b?.url||"":N?.image_url||"",V=(0,Y.v)(e),Q=(t?r:N?.name)||"",K=(0,Qe.H)(N?.image_url||null),{spec:G,logger:z}=(0,Ye.r)(T._,{data:{uri:e}}),Z=(0,i.useMemo)((()=>G.sectionTopTracksFactory()),[G]),q=!H&&(!1!==N?.show_follows||t),X=t&&v,{data:ee,loading:te}=(0,p.Z)(g.mH,[e],{enabled:q,gcTime:Wt,staleTime:Jt}),ae=ee?.profiles,{data:ie,loading:re}=(0,p.Z)(g.SR,[e],{enabled:q,gcTime:Wt,staleTime:Jt}),oe=ie?.profiles,se=ae?.some((e=>e.uri===a)),{topArtists:le,topTracks:ne,loading:de}=Bt({includeTopArtists:X,includeTopTracks:X,topArtistsLimit:10,topTracksLimit:4}),ue=(0,i.useCallback)((e=>{R({type:"CLOSE_MODAL"}),e&&(l((0,Ge.IE)(e.name)),l((0,Ge.ZQ)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[R,l]),ce=(0,i.useCallback)((()=>{R({type:"OPEN_MODAL"});const e=G.headerFactory().usernameFactory().hitUiReveal();z.logInteraction(e)}),[z,R,G]),me=(0,i.useCallback)((()=>{R({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=G.headerFactory().profileImageFactory().hitUiReveal();z.logInteraction(e)}),[z,R,G]),ge=(0,i.useMemo)((()=>[{url:$}]),[$]),pe=(0,i.useCallback)((()=>{const e=G.headerFactory().usernameFactory().hitUiReveal();z.logInteraction(e)}),[z,G]),he=(0,i.useCallback)(((e,t)=>{if(!t)return;const a=G.headerFactory().followersLinkFactory().hitUiNavigate({destination:t});z.logInteraction(a)}),[z,G]),fe=(0,i.useCallback)(((e,t)=>{if(!t)return;const a=G.headerFactory().followersLinkFactory().hitUiNavigate({destination:t});z.logInteraction(a)}),[z,G]);if(!N||L||te||re||de)return(0,y.jsx)(c.A,{hasError:!1,errorMessage:d.R.get("error.not_found.title.page")});const ve=n()("contentSpacing",f),be=q&&!!oe?.length,xe=q&&!!ae?.length;return(0,y.jsxs)("div",{className:h,children:[(0,y.jsx)(E.Q,{children:Q}),(0,y.jsxs)(U.z4,{backgroundColor:K,children:[(0,y.jsx)(M.h,{children:(0,y.jsx)(D.X,{text:Q})}),(0,y.jsx)(C.h,{menu:(0,y.jsx)(S.B,{uri:N.uri}),children:(0,y.jsx)(_t.X,{children:(0,y.jsx)(O.M,{canEdit:t&&!N.edit_image_disabled,name:Q,images:ge,onClick:me,placeholderType:"user",shape:U.bg.CIRCLE})})}),(0,y.jsxs)(U.Y$,{children:[(0,y.jsx)(Nt.B,{children:W?(0,y.jsx)(wt.M,{text:d.R.get("card.tag.profile")}):d.R.get("card.tag.profile")}),(0,y.jsx)(C.h,{menu:(0,y.jsx)(S.B,{uri:N.uri}),children:(0,y.jsx)(U.mm,{canEdit:t&&!N.edit_name_disabled,editTitle:d.R.get("playlist.edit-details.title"),onClick:ce,children:Q})}),(0,y.jsx)(U.tV,{totalFollowers:N.followers_count,totalFollowing:N.following_count,publicPlaylists:N.total_public_playlists_count,userUri:e,onCreatorClick:pe,onTotalFollowersClick:he,onTotalFollowingClick:fe,theyFollowUs:se})]})]}),(0,y.jsx)(ct,{openModal:ce,spec:G,logger:z,name:Q,backgroundColor:K,isCurrentUser:t,uri:e}),(0,y.jsxs)(qe.r,{spec:G,children:[t&&(0,y.jsxs)(y.Fragment,{children:[null!==le&&(0,y.jsx)(Tt.p,{className:ve,total:le.totalCount,title:d.R.get("top_artists_this_month"),tagline:d.R.get("only_visible_to_you"),seeAllUri:(0,s.Qj)(V,["top","artists"]).toURI(),id:"top-artists",index:0,children:le.items.map(((e,t)=>(0,y.jsx)(A.a,{index:t,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))}),(0,y.jsx)(Rt,{className:ve,title:d.R.get("top_tracks_this_month"),tagline:d.R.get("only_visible_to_you"),seeAllUri:(0,s.Qj)(V,["top","tracks"]).toURI(),uri:e,tracks:ne,spec:Z})]}),(0,y.jsx)(Tt.p,{className:ve,total:N.total_public_playlists_count,title:d.R.get("public_playlists"),seeAllUri:(0,s.Qj)(V,["playlists"]).toURI(),id:"playlists",index:1,children:B?.map(((e,t)=>(0,y.jsx)(P.B,{index:t,uri:e.uri,name:e.name,images:[{url:(0,et.m)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?d.R.get("user.followers",e.followers_count):""},e.uri)))}),J?.length?(0,y.jsx)(Tt.p,{className:ve,total:J?.length,title:d.R.get("recently_played_artists"),seeAllUri:(0,s.Qj)(V,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:J?.map(((e,t)=>(0,y.jsx)(A.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,be?(0,y.jsx)(Tt.p,{className:ve,title:d.R.get("followers"),total:oe?.length,seeAllUri:(0,s.Qj)(V,["followers"]).toURI(),id:"followers",index:3,children:oe?.map(((e,t)=>(0,y.jsx)(u.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,xe?(0,y.jsx)(Tt.p,{className:ve,title:d.R.get("following"),total:ae?.length,seeAllUri:(0,s.Qj)(V,["following"]).toURI(),id:"following",index:4,children:ae?.map(((e,t)=>(0,y.jsx)(u.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,t&&x&&("editProfile"===k?(0,y.jsx)($e,{uri:e,name:Q,image:$,onClose:ue,shouldOpenImagePicker:j,userCapabilities:{edit_image:!N?.edit_image_disabled,edit_name:!N?.edit_name_disabled}}):null)]})]})},Qt=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.Eo,[{uri:t}]),{public_playlists:o,total_public_playlists_count:s=0}=a||{};return i?(0,y.jsx)(c.A,{hasError:null!==r,errorMessage:d.R.get("error.not_found.title.page")}):(0,y.jsx)(m.$,{className:n()("contentSpacing",v),total:s,title:d.R.get("public_playlists"),showAll:!0,children:o?.map(((e,t)=>(0,y.jsx)(P.B,{index:t,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?d.R.get("user.followers",e.followers_count):"",images:[{url:(0,et.m)({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Kt=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.sL,[{uri:t,limit:50}]),o=a?.artists;return i?(0,y.jsx)(c.A,{hasError:null!==r,errorMessage:d.R.get("error.not_found.title.page")}):(0,y.jsx)(m.$,{className:n()("contentSpacing",v),total:o?.length,title:d.R.get("recently_played_artists"),showAll:!0,children:o?.map(((e,t)=>(0,y.jsx)(A.a,{index:t,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Gt=()=>{const{topArtists:e,loading:t,error:a}=Bt({includeTopArtists:!0,includeTopTracks:!1,topArtistsLimit:100,topTracksLimit:0});return t?(0,y.jsx)(c.A,{hasError:null!==a,errorMessage:d.R.get("error.not_found.title.page")}):null===e?null:(0,y.jsx)(m.$,{className:n()("contentSpacing",v),total:e.items.length,title:d.R.get("top_artists_this_month"),tagline:d.R.get("only_visible_to_you"),showAll:!0,children:e.items.map(((e,t)=>(0,y.jsx)(A.a,{index:t,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))})},zt=({isCurrentUser:e})=>e?(0,y.jsx)(Gt,{}):(0,y.jsx)(c.A,{hasError:!0,errorMessage:d.R.get("error.not_found.title.page")}),Zt=({uri:e})=>{const{topTracks:t,loading:a,error:i}=Bt({includeTopArtists:!1,includeTopTracks:!0,topArtistsLimit:0,topTracksLimit:100});return a?(0,y.jsx)(c.A,{hasError:null!==i,errorMessage:d.R.get("error.not_found.title.page")}):null===t?null:(0,y.jsxs)("div",{className:n()("contentSpacing",v,b),children:[(0,y.jsxs)("div",{className:x,children:[(0,y.jsx)(L.E,{as:"h1",variant:"titleSmall",className:k,children:d.R.get("top_tracks_this_month")}),(0,y.jsx)(L.E,{as:"p",variant:"bodySmall",children:d.R.get("only_visible_to_you")})]}),(0,y.jsx)(jt,{tracks:t.items,uri:e,hasHeaderRow:!0})]})},qt=({uri:e,isCurrentUser:t})=>t?(0,y.jsx)(Zt,{uri:e}):(0,y.jsx)(c.A,{hasError:!0,errorMessage:d.R.get("error.not_found.title.page")});var Yt=a(96568);var Xt=a(61792);const ea=(0,i.memo)((function(){const{userId:e=""}=(0,r.g)(),t=decodeURIComponent(e),a=(0,s.Qj)(t).toURI(),i=(e=>{const t=(0,Ve.V)(),a=(0,Yt.C)()?.username;return!t&&a===e})(t);return(0,y.jsx)("section",{children:(0,y.jsxs)(r.BV,{children:[(0,y.jsx)(r.qh,{path:"playlists",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE_PLAYLISTS,children:(0,y.jsx)(Qt,{uri:a})})}),(0,y.jsx)(r.qh,{path:"top/tracks",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE_TOP_TRACKS,children:(0,y.jsx)(qt,{uri:a,isCurrentUser:i})})}),(0,y.jsx)(r.qh,{path:"top/artists",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE_TOP_ARTISTS,children:(0,y.jsx)(zt,{isCurrentUser:i})})}),(0,y.jsx)(r.qh,{path:"recently-played-artists",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,y.jsx)(Kt,{uri:a})})}),(0,y.jsx)(r.qh,{path:"following",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE_FOLLOWING,children:(0,y.jsx)(R,{uri:a})})}),(0,y.jsx)(r.qh,{path:"followers",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE_FOLLOWERS,children:(0,y.jsx)(j,{uri:a})})}),(0,y.jsx)(r.qh,{path:"/",element:(0,y.jsx)(Xt.e,{pageId:o.$h.PROFILE,children:(0,y.jsx)(Vt,{uri:a,isCurrentUser:i})})})]})})}))},96568:(e,t,a)=>{a.d(t,{C:()=>o});a(1137);var i=a(85980),r=a(25973);const o=()=>{const e=(0,i.d4)((e=>e.session?.user));return e?{type:r.c.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:t,height:a})=>({url:e,width:t||void 0,height:a||void 0})))}:null}},33570:(e,t,a)=>{a.d(t,{a:()=>i});const i=e=>e?.linked_from?.uri||e.uri},77081:(e,t,a)=>{a.d(t,{b:()=>o,g:()=>r});var i=a(79474);let r=function(e){return e[e.loading=0]="loading",e[e.loaded=1]="loaded",e[e.error=2]="error",e}({});function o(e,t){const a=e?r.loading:r.error,[o,s]=(0,i.useState)(a);return(0,i.useEffect)((()=>{const a=()=>{s(r.loaded)},i=()=>{s(r.error)};if(!e)return s(r.error),()=>{};s(r.loading);const o=document.createElement("img");return o.addEventListener("load",a),o.addEventListener("error",i),o.setAttribute("src",e),t&&o.setAttribute("srcSet",t),()=>{o.removeEventListener("load",a),o.removeEventListener("error",i)}}),[e,t]),o}}}]);
//# sourceMappingURL=xpui-routes-profile.js.map