(function(g){var window=this;'use strict';var j4a=function(a,b){a.La("onAutonavCoundownStarted",b)},n6=function(a,b,c){g.N(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Df(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.ZG&&(b.lengthText?(e=b.lengthText||null,f=b.Gs||null):b.lengthSeconds&&(e=g.NL(b.lengthSeconds),f=g.NL(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.VG(d).type;var l=b instanceof g.ZG?b.isLivePlayback:null,m=b instanceof g.ZG?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,v=[],w=[];n&&v.push(n);p&&(v.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:v.join(" \u2022 "),aria_label:b.ariaLabel||
g.yJ("Xem $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.wm(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.jp};b instanceof g.YG&&(c.playlist_length=b.playlistLength);a.update(c)},o6=function(a){var b=a.R(),c=b.u;
g.X.call(this,{F:"a",L:"ytp-autonav-suggestion-card",T:{href:"{{url}}",target:c?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{F:"div",Ca:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],T:{style:"{{background}}"},S:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],Z:"{{duration}}"},{F:"div",Ca:["ytp-autonav-live-stamp"],Z:"Tr\u1ef1c ti\u1ebfp"},
{F:"div",Ca:["ytp-autonav-upcoming-stamp"],Z:"S\u1eafp di\u1ec5n ra"},{F:"div",L:"ytp-autonav-list-overlay",S:[{F:"div",L:"ytp-autonav-mix-text",Z:"T\u1ed5ng h\u1ee3p"},{F:"div",L:"ytp-autonav-mix-icon"}]}]},{F:"div",Ca:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],Z:"{{title}}"},{F:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],Z:"{{author}}"},{F:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],Z:"{{views_and_publish_time}}"}]});
this.G=a;this.suggestion=null;this.j=c;this.Na("click",this.onClick);this.Na("keypress",this.onKeyPress)},p6=function(a,b){b=void 0===b?!1:b;
g.X.call(this,{F:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.I=b;this.D=void 0;this.u=0;b=a.R();var d=b.u;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.P(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.K("web_rounded_thumbnails")&&e.push("rounded-thumbnail");this.j=new g.X({F:"div",L:"ytp-autonav-endscreen-upnext-container",T:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}",
"data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{F:"div",L:"ytp-autonav-endscreen-upnext-header"},{F:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",Z:"{{autoplayAlternativeHeader}}"},{F:"a",L:"ytp-autonav-endscreen-link-container",T:{href:"{{url}}",target:d?b.J:""},S:[{F:"div",Ca:e,T:{style:"{{background}}"},S:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],Z:"{{duration}}"},{F:"div",Ca:["ytp-autonav-live-stamp"],
Z:"Tr\u1ef1c ti\u1ebfp"},{F:"div",Ca:["ytp-autonav-upcoming-stamp"],Z:"S\u1eafp di\u1ec5n ra"}]},{F:"div",L:"ytp-autonav-endscreen-video-info",S:[{F:"div",L:"ytp-autonav-endscreen-premium-badge"},{F:"div",L:"ytp-autonav-endscreen-upnext-title",Z:"{{title}}"},{F:"div",L:"ytp-autonav-endscreen-upnext-author",Z:"{{author}}"},{F:"div",L:"ytp-autonav-view-and-date",Z:"{{views_and_publish_time}}"},{F:"div",L:"ytp-autonav-author-and-view",Z:"{{author_and_views}}"}]}]}]});g.M(this,this.j);this.j.xa(this.element);
d||this.P(this.j.ya("ytp-autonav-endscreen-link-container"),"click",this.KL);this.G.sb(this.element,this,115127);this.G.sb(this.j.ya("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.X({F:"div",L:"ytp-autonav-overlay"});g.M(this,this.overlay);this.overlay.xa(this.element);this.B=new g.X({F:"div",L:"ytp-autonav-endscreen-button-container"});g.M(this,this.B);this.B.xa(this.element);this.cancelButton=new g.X({F:"button",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",
b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],T:{"aria-label":"H\u1ee7y t\u1ef1 \u0111\u1ed9ng ph\u00e1t"},Z:"H\u1ee7y"});g.M(this,this.cancelButton);this.cancelButton.xa(this.B.element);this.cancelButton.Na("click",this.sU,this);this.G.sb(this.cancelButton.element,this,115129);this.playButton=new g.X({F:"a",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],
T:{href:"{{url}}",role:"button","aria-label":"Ph\u00e1t video ti\u1ebfp theo"},Z:"Ph\u00e1t ngay"});g.M(this,this.playButton);this.playButton.xa(this.B.element);this.playButton.Na("click",this.KL,this);this.G.sb(this.playButton.element,this,115130);this.C=new g.Vn(function(){k4a(c)},500);
g.M(this,this.C);this.JL();this.P(a,"autonavvisibility",this.JL)},q6=function(a){var b=a.G.Rj(!0,a.G.isFullscreen());
g.N(a.element,"ytp-autonav-endscreen-small-mode",a.Bg(b));g.N(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.qE);g.N(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.Ve());g.N(a.G.getRootNode(),"countdown-running",a.lj());g.N(a.element,"ytp-player-content",a.G.Ve());g.xl(a.overlay.element,{width:b.width+"px"});if(!a.lj()){a.G.Ve()?l4a(a,Math.round(m4a(a)/1E3)):l4a(a);b=!!a.suggestion&&!!a.suggestion.jp;var c=a.G.Ve()||!b;g.N(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.N(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.OK(a.B,a.G.Ve())}},k4a=function(a){var b=m4a(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);l4a(a,Math.ceil((b-c)/1E3));500>=b-c&&a.lj()?a.select(!0):a.lj()&&a.C.start()},m4a=function(a){if(a.G.isFullscreen()){var b;
a=null==(b=a.G.getVideoData())?void 0:b.Gx;return-1===a||void 0===a?8E3:a}return 0<=a.G.Fp()?a.G.Fp():g.LE(a.G.R().experiments,"autoplay_time")||1E4},l4a=function(a,b){b=void 0===b?-1:b;
a=a.j.ya("ytp-autonav-endscreen-upnext-header");g.oh(a);if(0<=b){b=String(b);var c="Video ti\u1ebfp theo sau $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Video ti\u1ebfp theo sau $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.nh("Video ti\u1ebfp theo sau $SECONDS".slice(0,d)));var e=g.mh("span");g.ao(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.th(e,b);a.appendChild(e);a.appendChild(g.nh("Video ti\u1ebfp theo sau $SECONDS".slice(d+c.length)));return}}g.th(a,"Ti\u1ebfp theo")},r6=
function(a,b){g.X.call(this,{F:"div",
Ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},s6=function(a){g.X.call(this,{F:"div",
Ca:["ytp-upnext","ytp-player-content"],T:{"aria-label":"{{aria_label}}"},S:[{F:"div",L:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},{F:"span",L:"ytp-upnext-top",S:[{F:"span",L:"ytp-upnext-header",Z:"Ti\u1ebfp theo"},{F:"span",L:"ytp-upnext-title",Z:"{{title}}"},{F:"span",L:"ytp-upnext-author",Z:"{{author}}"}]},{F:"a",L:"ytp-upnext-autoplay-icon",T:{role:"button",href:"{{url}}","aria-label":"Ph\u00e1t video ti\u1ebfp theo"},S:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},S:[{F:"circle",L:"ytp-svg-autoplay-circle",T:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",L:"ytp-svg-autoplay-ring",T:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",L:"ytp-svg-fill",T:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",L:"ytp-upnext-bottom",S:[{F:"span",L:"ytp-upnext-cancel"},{F:"span",L:"ytp-upnext-paused",
Z:"T\u1ef1 \u0111\u1ed9ng ph\u00e1t b\u1ecb t\u1ea1m d\u1eebng"}]}]});this.api=a;this.cancelButton=null;this.D=this.ya("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.Vn(this.HB,5E3,this);this.u=0;var b=this.ya("ytp-upnext-cancel");this.cancelButton=new g.X({F:"button",Ca:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":"H\u1ee7y t\u1ef1 \u0111\u1ed9ng ph\u00e1t"},Z:"H\u1ee7y"});g.M(this,this.cancelButton);this.cancelButton.Na("click",
this.tU,this);this.cancelButton.xa(b);this.cancelButton&&this.api.sb(this.cancelButton.element,this,115129);g.M(this,this.C);this.api.sb(this.element,this,18788);b=this.ya("ytp-upnext-autoplay-icon");this.P(b,"click",this.uU);this.api.sb(b,this,115130);this.LL();this.P(a,"autonavvisibility",this.LL);this.P(a,"mdxnowautoplaying",this.t1);this.P(a,"mdxautoplaycanceled",this.u1);g.N(this.element,"ytp-upnext-mobile",this.api.R().isMobile)},n4a=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.Gx;return-1===a||void 0===a?8E3:a}return 0<=a.api.Fp()?a.api.Fp():g.LE(a.api.R().experiments,"autoplay_time")||1E4},o4a=function(a,b){b=n4a(a,b);
var c=Math,d=c.min;var e=(0,g.U)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.lj()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.lj()&&a.j.start()},t6=function(a){r6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.X({F:"div",L:"ytp-suggestion-panel",S:[{F:"div",Ca:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],Z:"Video kh\u00e1c"}]});this.J=new g.X({F:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new p6(this.player);g.M(this,this.u);this.u.xa(this.element);a.getVideoData().rd?this.j=this.u:(this.j=new s6(a),g.qN(this.player,this.j.element,4),g.M(this,this.j));this.overlay=new g.X({F:"div",
L:"ytp-autonav-overlay-cancelled-state"});g.M(this,this.overlay);this.overlay.xa(this.element);this.C=new g.RD(this);g.M(this,this.C);g.M(this,this.table);this.table.xa(this.element);this.table.show();g.M(this,this.J);this.J.xa(this.table.element);this.hide()},u6=function(a){var b=a.Ve();
b!==a.D&&(a.D=b,a.player.X("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},p4a=function(a){r6.call(this,a,"subscribecard-endscreen");
this.j=new g.X({F:"div",L:"ytp-subscribe-card",S:[{F:"img",L:"ytp-author-image",T:{src:"{{profilePicture}}"}},{F:"div",L:"ytp-subscribe-card-right",S:[{F:"div",L:"ytp-author-name",Z:"{{author}}"},{F:"div",L:"html5-subscribe-button-container"}]}]});g.M(this,this.j);this.j.xa(this.element);var b=a.getVideoData();this.subscribeButton=new g.LO("\u0110\u0103ng k\u00fd",null,"H\u1ee7y \u0111\u0103ng k\u00fd",null,!0,!1,b.Bk,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.subscribeButton);this.subscribeButton.xa(this.j.ya("html5-subscribe-button-container"));
this.P(a,"videodatachange",this.Fa);this.Fa();this.hide()},v6=function(a){var b=a.R(),c=g.VD||g.CF?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.X.call(this,{F:"a",Ca:e,T:{href:"{{url}}",target:d?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{F:"div",L:"ytp-videowall-still-image",T:{style:"{{background}}"}},{F:"span",L:"ytp-videowall-still-info",S:[{F:"span",L:"ytp-videowall-still-info-bg",S:[{F:"span",L:"ytp-videowall-still-info-content",T:c,S:[{F:"span",L:"ytp-videowall-still-info-title",Z:"{{title}}"},{F:"span",
L:"ytp-videowall-still-info-author",Z:"{{author_and_views}}"},{F:"span",L:"ytp-videowall-still-info-live",Z:"Tr\u1ef1c ti\u1ebfp"},{F:"span",L:"ytp-videowall-still-info-duration",Z:"{{duration}}"}]}]}]},{F:"span",Ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{F:"span",L:"ytp-videowall-still-listlabel-icon"},"Danh s\u00e1ch ph\u00e1t",{F:"span",L:"ytp-videowall-still-listlabel-length",S:[" (",{F:"span",Z:"{{playlist_length}}"},")"]}]},{F:"span",Ca:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],S:[{F:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"T\u1ed5ng h\u1ee3p",{F:"span",L:"ytp-videowall-still-listlabel-length",Z:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.RD(this);g.M(this,this.j);this.Na("click",this.onClick);this.Na("keypress",this.onKeyPress);this.j.P(a,"videodatachange",this.onVideoDataChange);a.Bi(this.element,this);this.onVideoDataChange()},w6=function(a){r6.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.N=null;this.u=new g.RD(this);g.M(this,this.u);this.V=a.K("web_rounded_thumbnails");this.I=new g.Vn(function(){g.co(b.element,"ytp-show-tiles")},0);
g.M(this,this.I);var c=new g.X({F:"button",Ca:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":"Tr\u01b0\u1edbc"},S:[g.TK()]});g.M(this,c);c.xa(this.element);c.Na("click",this.yU,this);this.table=new g.LK({F:"div",L:"ytp-endscreen-content"});g.M(this,this.table);this.table.xa(this.element);c=new g.X({F:"button",Ca:["ytp-button","ytp-endscreen-next"],T:{"aria-label":"Ti\u1ebfp theo"},S:[g.UK()]});g.M(this,c);c.xa(this.element);c.Na("click",this.xU,this);a.getVideoData().rd?this.j=new p6(a,!0):
this.j=new s6(a);g.M(this,this.j);g.qN(this.player,this.j.element,4);this.hide()},x6=function(a){return g.rN(a.player)&&a.Qx()&&!a.C},y6=function(a){var b=a.Ve();
b!==a.J&&(a.J=b,a.player.X("autonavvisibility"))},z6=function(a,b){g.X.call(this,{F:"button",
Ca:["ytp-watch-on-youtube-button","ytp-button"],T:{title:"{{message}}"},Z:"{{content}}"});this.G=a;this.buttonType=this.buttonType=b;switch(this.buttonType){case 1:a="Xem l\u1ea1i tr\u00ean YouTube";b=156915;break;case 2:a="Ti\u1ebfp t\u1ee5c xem tr\u00ean YouTube";b=156942;break;default:a="Ti\u1ebfp t\u1ee5c xem tr\u00ean YouTube",b=156942}this.update({message:a,content:a});this.G.sb(this.element,this,b);this.Na("click",this.onClick)},A6=function(a){r6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new z6(a,1);g.M(this,this.watchButton);this.watchButton.xa(this.element);a.sb(this.element,this,156914);this.hide()},t4a=function(a){g.GN.call(this,a);
var b=this;this.endScreen=null;this.j=this.u=this.B=!1;this.listeners=new g.RD(this);g.M(this,this.listeners);this.env=a.R();var c;(null==(c=g.gN(a))?0:c.iz())?this.endScreen=new A6(a):q4a(a)?(this.B=!0,r4a(this),this.j?this.endScreen=new t6(a):this.endScreen=new w6(this.player)):this.env.Oe?this.endScreen=new p4a(this.player):this.endScreen=new r6(this.player);g.M(this,this.endScreen);g.qN(this.player,this.endScreen.element,4);s4a(this);this.listeners.P(a,"videodatachange",this.onVideoDataChange,
this);this.listeners.P(a,g.lA("endscreen"),function(d){b.onCueRangeEnter(d)});
this.listeners.P(a,g.mA("endscreen"),function(d){b.onCueRangeExit(d)})},r4a=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Hi&&a.u===b.rd)return!1;a.j=b.Hi;a.u=b.rd;return!0},q4a=function(a){a=a.R();
return!a.C&&a.Kc&&!a.Oe},s4a=function(a){a.player.yf("endscreen");
var b=a.player.getVideoData();b=new g.jA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.jA(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.je([b,c])};
g.vO.prototype.mA=g.ba(30,function(a){this.CJ!==a&&(this.CJ=a,this.Xm())});
g.jN.prototype.Fp=g.ba(4,function(){return this.app.Fp()});
g.wX.prototype.Fp=g.ba(3,function(){return this.getVideoData().xR});g.u(o6,g.X);o6.prototype.select=function(){(this.G.Cl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.sy||void 0)||this.G.K("web_player_endscreen_double_log_fix_killswitch"))&&this.G.ob(this.element)};
o6.prototype.onClick=function(a){g.eO(a,this.G,this.j,this.suggestion.sessionData||void 0)&&this.select()};
o6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.zx(a)||(this.select(),g.yx(a))}};g.u(p6,g.X);g.k=p6.prototype;g.k.TA=function(a){this.suggestion!==a&&(this.suggestion=a,n6(this.j,a),this.playButton.Ja("url",this.suggestion.wm()),q6(this))};
g.k.lj=function(){return 0<this.u};
g.k.Dw=function(){this.lj()||(this.u=Date.now(),k4a(this),j4a(this.G,m4a(this)),g.N(this.G.getRootNode(),"countdown-running",this.lj()))};
g.k.Ts=function(){this.Po();k4a(this);var a=this.j.ya("ytp-autonav-endscreen-upnext-header");a&&g.th(a,"Ti\u1ebfp theo")};
g.k.Po=function(){this.lj()&&(this.C.stop(),this.u=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.Po()};
g.k.KL=function(a){g.eO(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.ob(this.playButton.element):a.currentTarget===this.j.ya("ytp-autonav-endscreen-link-container")&&(a=this.j.ya("ytp-autonav-endscreen-link-container"),this.G.Ta(a,!0),this.G.ob(a)),this.select())};
g.k.sU=function(){this.G.ob(this.cancelButton.element);g.lN(this.G,!0);this.D&&this.G.La("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.r6)?void 0:c.command};
g.k.JL=function(){var a=this.G.Ve();this.I&&this.tb!==a&&g.OK(this,a);q6(this);this.G.Ta(this.element,a);this.G.Ta(this.cancelButton.element,a);this.G.Ta(this.j.ya("ytp-autonav-endscreen-link-container"),a);this.G.Ta(this.playButton.element,a)};
g.k.Bg=function(a){return 400>a.width||459>a.height};g.u(r6,g.X);g.k=r6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Qx=function(){return!1};
g.k.Ve=function(){return!1};
g.k.NP=function(){return!1};g.u(s6,g.X);g.k=s6.prototype;g.k.HB=function(){this.notification&&(this.C.stop(),this.xc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.TA=function(a){this.suggestion=a;n6(this,a,"hqdefault.jpg")};
g.k.LL=function(){g.OK(this,this.api.Ve());this.api.Ta(this.element,this.api.Ve());this.api.Ta(this.ya("ytp-upnext-autoplay-icon"),this.api.Ve());this.cancelButton&&this.api.Ta(this.cancelButton.element,this.api.Ve())};
g.k.E1=function(){window.focus();this.HB()};
g.k.Dw=function(a){var b=this;this.lj()||(g.Nx("a11y-announce","Ti\u1ebfp theo "+this.suggestion.title),this.u=(0,g.U)(),this.j=new g.Vn(function(){o4a(b,a)},25),o4a(this,a),j4a(this.api,n4a(this,a)));
g.fo(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.X.prototype.hide.call(this)};
g.k.lj=function(){return!!this.j};
g.k.Ts=function(){this.Po();this.u=(0,g.U)();o4a(this);g.co(this.element,"ytp-upnext-autoplay-paused")};
g.k.Po=function(){this.lj()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.R().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.HB(),this.notification=new Notification("Ti\u1ebfp theo",{body:this.suggestion.title,icon:this.suggestion.Df()}),this.B=this.P(this.notification,"click",this.E1),this.C.start())}this.Po();this.api.nextVideo(!1,a)};
g.k.uU=function(a){!g.sh(this.cancelButton.element,g.ux(a))&&g.eO(a,this.api)&&(this.api.Ve()&&this.api.ob(this.ya("ytp-upnext-autoplay-icon")),this.select())};
g.k.tU=function(){this.api.Ve()&&this.cancelButton&&this.api.ob(this.cancelButton.element);g.lN(this.api,!0)};
g.k.t1=function(a){this.api.getPresentingPlayerType();this.show();this.Dw(a)};
g.k.u1=function(){this.api.getPresentingPlayerType();this.Po();this.hide()};
g.k.ea=function(){this.Po();this.HB();g.X.prototype.ea.call(this)};g.u(t6,r6);g.k=t6.prototype;g.k.create=function(){r6.prototype.create.call(this);this.C.P(this.player,"appresize",this.ax);this.C.P(this.player,"onVideoAreaChange",this.ax);this.C.P(this.player,"videodatachange",this.onVideoDataChange);this.C.P(this.player,"autonavchange",this.ML);this.C.P(this.player,"autonavcancel",this.vU);this.onVideoDataChange()};
g.k.show=function(){r6.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.lN(this.player,!1);g.rN(this.player)&&this.Qx()&&!this.B?(u6(this),2===this.videoData.autonavState?this.player.R().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Dw():3===this.videoData.autonavState&&this.j.Ts()):(g.lN(this.player,!0),u6(this));this.ax()};
g.k.hide=function(){r6.prototype.hide.call(this);this.j.Ts();u6(this)};
g.k.ax=function(){var a=this.player.Rj(!0,this.player.isFullscreen());u6(this);q6(this.u);g.N(this.element,"ytp-autonav-cancelled-small-mode",this.Bg(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.TC(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.xl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.N(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.rI(this.videoData);b&&(this.j.TA(b),this.j!==this.u&&this.u.TA(b));for(b=0;b<u4a.length;++b){var c=u4a[b];if(a&&a[c]){this.videos[b]=new o6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,n6(d,c));g.M(this,this.videos[b]);this.videos[b].xa(this.J.element)}}}this.ax()}};
g.k.ML=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.Po(),this.tb&&this.ax()):(this.I=!0,this.Ve()&&(2===a?this.j.Dw():3===a&&this.j.Ts()))};
g.k.vU=function(a){a?this.ML(1):(this.B=null,this.I=!1)};
g.k.Qx=function(){return 1!==this.videoData.autonavState};
g.k.Bg=function(a){return(910>a.width||459>a.height)&&!this.TC(a)&&!(400>=a.width||360>=a.height)};
g.k.TC=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Ve=function(){return this.tb&&g.rN(this.player)&&this.Qx()&&!this.B};
var u4a=[1,3,2,4];g.u(p4a,r6);p4a.prototype.Fa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Bk;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.u(v6,g.X);v6.prototype.select=function(){(this.api.Cl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.sy||void 0)||this.api.K("web_player_endscreen_double_log_fix_killswitch"))&&this.api.ob(this.element)};
v6.prototype.onClick=function(a){g.eO(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
v6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.zx(a)||(this.select(),g.yx(a))}};
v6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.R();this.u=a.C?!1:b.u};g.u(w6,r6);g.k=w6.prototype;g.k.create=function(){r6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.hn();this.u.P(this.player,"appresize",this.hn);this.u.P(this.player,"onVideoAreaChange",this.hn);this.u.P(this.player,"videodatachange",this.onVideoDataChange);this.u.P(this.player,"autonavchange",this.jF);this.u.P(this.player,"autonavcancel",this.wU);a=this.videoData.autonavState;a!==this.N&&this.jF(a);this.u.P(this.element,"transitionend",this.Z2)};
g.k.destroy=function(){g.Ty(this.u);g.ef(this.stills);this.stills=[];r6.prototype.destroy.call(this);g.fo(this.element,"ytp-show-tiles");this.I.stop();this.N=this.videoData.autonavState};
g.k.Qx=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){r6.prototype.show.call(this);g.fo(this.element,"ytp-show-tiles");this.player.R().isMobile?g.Xn(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.lN(this.player,!1);x6(this)?(y6(this),2===this.videoData.autonavState?this.player.R().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Dw():3===this.videoData.autonavState&&this.j.Ts()):(g.lN(this.player,!0),y6(this))};
g.k.hide=function(){r6.prototype.hide.call(this);this.j.Ts();y6(this)};
g.k.Z2=function(a){g.ux(a)===this.element&&this.hn()};
g.k.hn=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.co(this.element,"ytp-endscreen-paginate");var a=this.G.Rj(!0,this.G.isFullscreen()),b=g.gN(this.G);b&&(b=b.Nf()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,q=e/2,v=b<=f-2&&n>=q*m,w=e<=h-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&w)n-=p*m,e+=2;else if(v)n-=q*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Hl(a,m,n);g.xl(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.j.TA(g.rI(this.videoData));this.j instanceof p6&&q6(this.j);g.N(this.element,"ytp-endscreen-takeover",x6(this));y6(this);m+=4;n+=4;for(f=c=0;f<
b;f++)for(h=0;h<e;h++)if(p=c,v=0,d&&f>=b-2&&h>=e-2?v=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(v=2):v=2),p=g.Fg(p+this.B,l),0!==v){q=this.stills[c];q||(q=new v6(this.player),this.stills[c]=q,a.appendChild(q.element));w=Math.floor(n*h/e);var y=Math.floor(m*f/b),A=Math.floor(n*(h+v)/e)-w-4,B=Math.floor(m*(f+v)/b)-y-4;g.Dl(q.element,y,w);g.Hl(q.element,B,A);g.xl(q.element,"transitionDelay",(h+f)/20+"s");g.N(q.element,"ytp-videowall-still-mini",1===v);g.N(q.element,"ytp-videowall-still-large",2<v);
this.V&&(v=Math.max(B,A),g.N(q.element,"ytp-videowall-still-round-large",256<=v),g.N(q.element,"ytp-videowall-still-round-medium",96<v&&256>v),g.N(q.element,"ytp-videowall-still-round-small",96>=v));p=this.videoData.suggestions[p];q.suggestion!==p&&(q.suggestion=p,v=q.api.R(),w=g.bo(q.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",n6(q,p,w),g.EF(v)&&(w=p.wm(),y={},v.ra&&g.SM(y,v.loaderUrl),w=g.wi(w,g.RM(y,"emb_rel_end")),q.Ja("url",w)),(p=(p=p.sessionData)&&p.itct)&&q.api.wk(q.element,
p));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.qh(e.element),g.df(e);this.stills.length=c}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.hn())};
g.k.xU=function(){this.B+=this.stills.length;this.hn()};
g.k.yU=function(){this.B-=this.stills.length;this.hn()};
g.k.NP=function(){return this.j.lj()};
g.k.jF=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Po(),this.tb&&this.hn()):(this.D=!0,this.tb&&x6(this)&&(2===a?this.j.Dw():3===a&&this.j.Ts()))};
g.k.wU=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Ta(this.stills[a].element,!0);this.jF(1)}else this.C=null,this.D=!1;this.hn()};
g.k.Ve=function(){return this.tb&&x6(this)};g.u(z6,g.X);z6.prototype.onClick=function(a){g.fO(this.getVideoUrl(),this.G,a);this.G.ob(this.element)};
z6.prototype.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.G.getVideoUrl(a,!1,!1,!0);var b=this.G.R();if(g.EF(b)||g.PF(b)){var c={};b.ra&&g.EF(b)&&g.SM(c,b.loaderUrl);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.RM(c,b);a=g.wi(a,c)}return a};
z6.prototype.show=function(){g.X.prototype.show.call(this);this.G.Ta(this.element,!0)};
z6.prototype.hide=function(){g.X.prototype.hide.call(this);this.G.Ta(this.element,!1)};g.u(A6,r6);A6.prototype.show=function(){if(3!==this.player.getPlayerState()){r6.prototype.show.call(this);var a;null==(a=g.gN(this.player))||a.mA(!0);this.player.Ta(this.element,!0)}};
A6.prototype.hide=function(){r6.prototype.hide.call(this);var a;null==(a=g.gN(this.player))||a.mA(!1);this.player.Ta(this.element,!1)};g.u(t4a,g.GN);g.k=t4a.prototype;g.k.At=function(){var a;if(null==(a=g.gN(this.player))?0:a.iz())return!0;a=this.player.getVideoData();var b=!!(a&&a.suggestions&&a.suggestions.length);b=!q4a(this.player)||b;var c=a.sf||g.PF(a.Oa),d=this.player.Ay();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Ve=function(){return this.endScreen.Ve()};
g.k.QZ=function(){return this.Ve()?this.endScreen.NP():!1};
g.k.ea=function(){this.player.yf("endscreen");g.GN.prototype.ea.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.jb().Yd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.aN?a=!1:(this.player.Cl(b.videoId,void 0,void 0,!0,!0,b),c&&c.aD("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.GN.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.GN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.At()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){s4a(this);this.B&&r4a(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new t6(this.player):this.endScreen=new w6(this.player),g.M(this,this.endScreen),g.qN(this.player,this.endScreen.element,4))};g.FN("endscreen",t4a);})(_yt_player);
