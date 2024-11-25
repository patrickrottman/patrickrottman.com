import{a as et,b as tt,c as nt,d as it,e as ot,f as rt}from"./chunk-3ZOD2GID.js";import{b as yt,f as Ct,g as wt,j as le,k as xt}from"./chunk-5RJKQSIH.js";import{A as xe,C as pt,D as ht,F as S,I as gt,J as ft,K as _t,M as bt,N as Mt,O as vt,P as oe,Q as re,a as $e,b as Je,d as at,f as st,k as lt,l as mt,u as ct,x as dt,y as ut}from"./chunk-7VPGMA5F.js";import{c as ke,d as ae,f as I,g as Pe,h as se}from"./chunk-ZSSD5RUB.js";import{$ as De,$b as Ge,Aa as W,Ac as T,Bb as x,Cb as Z,D as z,Da as y,Db as Qe,E as D,Ea as Le,Hb as l,Ib as m,Ja as Ne,Jb as k,K as Me,Kc as ne,La as He,M as ve,Mc as ie,Na as Be,Nb as $,Qb as p,Qc as Ze,Sb as F,Tb as V,Ub as f,Vb as P,Wb as Xe,X as Y,Xb as _,Y as ye,Yb as b,Z as U,a as fe,ab as C,ac as c,b as Re,ba as Q,bb as w,bc as We,ca as X,cb as je,db as ze,ea as g,gb as Ye,h as B,ha as s,hc as Ke,ic as J,jb as h,jc as ee,ka as Ae,kb as K,lb as q,m as j,n as Oe,nc as qe,o as _e,oc as te,pa as d,qa as u,qc as L,r as be,ra as Ee,sb as Ue,va as Fe,wb as Ce,xa as Ve,xb as we,yb as A,za as G,zb as E}from"./chunk-PPYGR6LQ.js";var kt=[{path:"",loadComponent:()=>import("./chunk-JCDEW4OD.js").then(i=>i.HomeComponent),title:"Patrick Rottman - Full Stack Software Engineer"},{path:"blog",loadComponent:()=>import("./chunk-CO2XJNQC.js").then(i=>i.BlogComponent),title:"Blog - Patrick Rottman"},{path:"p2p",loadComponent:()=>import("./chunk-5Z6FQILF.js").then(i=>i.P2pComponent),title:"P2P Ping Pong"},{path:"**",redirectTo:""}];var Lt="@",Nt=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=s(Ve,{optional:!0});loadingSchedulerFn=s(Ht,{optional:!0});_engine;constructor(e,t,n,r,a){this.doc=e,this.delegate=t,this.zone=n,this.animationType=r,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-HL3WJOG3.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new De(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new Te(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let v=a.createRenderer(e,t);r.use(v),this.scheduler?.notify(11)}).catch(a=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(t){je()};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Te=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,n){this.delegate.insertBefore(o,e,t,n)}removeChild(o,e,t){this.delegate.removeChild(o,e,t)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,n){this.delegate.setAttribute(o,e,t,n)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,n){this.delegate.setStyle(o,e,t,n)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(o,e,t)),this.delegate.listen(o,e,t)}shouldReplay(o){return this.replay!==null&&o.startsWith(Lt)}},Ht=new g("");function Pt(i="animations"){return He("NgAsyncAnimations"),Ae([{provide:Ye,useFactory:(o,e,t)=>new Nt(o,e,t,i),deps:[T,$e,W]},{provide:Ne,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Tt={providers:[qe({eventCoalescing:!0}),it(kt,ot()),Pt()]};var Bt=["*",[["mat-toolbar-row"]]],jt=["*","mat-toolbar-row"],zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=q({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),St=(()=>{class i{_elementRef=s(y);_platform=s(at);_document=s(T);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,r){if(t&1&&P(r,zt,5),t&2){let a;_(a=b())&&(n._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(Z(n.color?"mat-"+n.color:""),x("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:jt,decls:2,vars:0,template:function(t,n){t&1&&(V(Bt),f(0),f(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}"],encapsulation:2,changeDetection:0})}return i})();var It=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=X({imports:[S,S]})}return i})();var Kt=["mat-menu-item",""],qt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Zt=["mat-icon, [matMenuItemIcon]","*"];function $t(i,o){i&1&&(Ee(),l(0,"svg",2),k(1,"polygon",3),m())}var Jt=["*"];function en(i,o){if(i&1){let e=$();l(0,"div",0),p("click",function(){d(e);let n=F();return u(n.closed.emit("click"))})("@transformMenu.start",function(n){d(e);let r=F();return u(r._onAnimationStart(n))})("@transformMenu.done",function(n){d(e);let r=F();return u(r._onAnimationDone(n))}),l(1,"div",1),f(2),m()()}if(i&2){let e=F();Z(e._classList),E("id",e.panelId)("@transformMenu",e._panelAnimationState),A("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Se=new g("MAT_MENU_PANEL"),H=(()=>{class i{_elementRef=s(y);_document=s(T);_focusMonitor=s(xe);_parentMenu=s(Se,{optional:!0});_changeDetectorRef=s(te);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new j;_focused=new j;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(lt).load(gt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&p("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(A("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),x("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",L],disableRipple:[2,"disableRipple","disableRipple",L]},exportAs:["matMenuItem"],features:[Ce],attrs:Kt,ngContentSelectors:Zt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(V(qt),f(0),l(1,"span",0),f(2,1),m(),k(3,"div",1),we(4,$t,2,0,":svg:svg",2)),t&2&&(C(3),E("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),C(),Qe(n._triggersSubmenu?4:-1))},dependencies:[ft],encapsulation:2,changeDetection:0})}return i})();var tn=new g("MatMenuContent");var me={transformMenu:ke("transformMenu",[Pe("void",I({opacity:0,transform:"scale(0.8)"})),se("void => enter",ae("120ms cubic-bezier(0, 0, 0.2, 1)",I({opacity:1,transform:"scale(1)"}))),se("* => void",ae("100ms 25ms linear",I({opacity:0})))]),fadeInItems:ke("fadeInItems",[Pe("showing",I({opacity:1})),se("void => *",[I({opacity:0}),ae("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},ai=me.fadeInItems,si=me.transformMenu,nn=new g("mat-menu-default-options",{providedIn:"root",factory:on});function on(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var M=(()=>{class i{_elementRef=s(y);_changeDetectorRef=s(te);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_allItems;_directDescendantItems=new Le;_classList={};_panelAnimationState="void";_animationDone=new j;_isAnimating;parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=fe({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new G;close=this.closed;panelId=s(pt).getId("mat-menu-panel-");_injector=s(Fe);constructor(){let e=s(nn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ct(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Y(this._directDescendantItems),ye(e=>z(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(Y(this._directDescendantItems),ye(t=>z(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:mt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Be(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Re(fe({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(Y(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,r){if(t&1&&(P(r,tn,5),P(r,H,5),P(r,H,4)),t&2){let a;_(a=b())&&(n.lazyContent=a.first),_(a=b())&&(n._allItems=a),_(a=b())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&Xe(ze,5),t&2){let r;_(r=b())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&A("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",L],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:L(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ke([{provide:Se,useExisting:i}]),Ce],ngContentSelectors:Jt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(V(),we(0,en,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[me.transformMenu,me.fadeInItems]},changeDetection:0})}return i})(),At=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(le);return()=>i.scrollStrategies.reposition()}});function rn(i){return()=>i.scrollStrategies.reposition()}var an={provide:At,deps:[le],useFactory:rn},Rt=st({passive:!0});var Et=(()=>{class i{_overlay=s(le);_element=s(y);_viewContainerRef=s(Ue);_menuItemInstance=s(H,{optional:!0,self:!0});_dir=s(ht,{optional:!0});_focusMonitor=s(xe);_ngZone=s(W);_scrollStrategy=s(At);_changeDetectorRef=s(te);_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=B.EMPTY;_hoverSubscription=B.EMPTY;_menuCloseSubscription=B.EMPTY;_parentMaterialMenu;_parentInnerPadding;_handleTouchStart=e=>{ut(e)||(this._openedBy="touch")};_openedBy=void 0;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}_menu;menuData;restoreFocus=!0;menuOpened=new G;onMenuOpen=this.menuOpened;menuClosed=new G;onMenuClose=this.menuClosed;constructor(){let e=s(Se,{optional:!0});this._parentMaterialMenu=e instanceof M?e:void 0,this._element.nativeElement.addEventListener("touchstart",this._handleTouchStart,Rt)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Rt),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),n=t.getConfig(),r=n.positionStrategy;this._setPosition(e,r),n.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof M&&(e._startAnimation(),e._directDescendantItems.changes.pipe(U(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof M?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(D(n=>n.toState==="void"),Me(1),U(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe(n=>{this.menu instanceof M&&this.menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new wt({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr"})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,a)})})}_setPosition(e,t){let[n,r]=e.xPosition==="before"?["end","start"]:["start","end"],[a,v]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[ue,pe]=[a,v],[he,ge]=[n,r],O=0;if(this.triggersSubmenu()){if(ge=n=e.xPosition==="before"?"start":"end",r=he=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ie=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ie?Ie._getHostElement().offsetTop:0}O=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(ue=a==="top"?"bottom":"top",pe=v==="top"?"bottom":"top");t.withPositions([{originX:n,originY:ue,overlayX:he,overlayY:a,offsetY:O},{originX:r,originY:ue,overlayX:ge,overlayY:a,offsetY:O},{originX:n,originY:pe,overlayX:he,overlayY:v,offsetY:-O},{originX:r,originY:pe,overlayX:ge,overlayY:v,offsetY:-O}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:be(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(D(a=>a!==this._menuItemInstance),D(()=>this._menuOpen)):be();return z(e,n,r,t)}_handleMousedown(e){dt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(D(e=>e===this._menuItemInstance&&!e.disabled),ve(0,_e)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof M&&this.menu._isAnimating?this.menu._animationDone.pipe(Me(1),ve(0,_e),U(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new yt(e.templateRef,this._viewContainerRef)),this._portal}static \u0275fac=function(t){return new(t||i)};static \u0275dir=q({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&p("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&A("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]})}return i})(),Ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=X({providers:[an],imports:[_t,S,xt,Ct,S]})}return i})();var R=class i{darkMode=new Oe(this.getInitialTheme());isDarkMode$=this.darkMode.asObservable();constructor(){this.updateThemeClass(this.darkMode.value),this.watchSystemTheme()}getInitialTheme(){let o=localStorage.getItem("darkMode");return o!==null?o==="true":window.matchMedia("(prefers-color-scheme: dark)").matches}toggleTheme(){let o=!this.darkMode.value;this.darkMode.next(o),localStorage.setItem("darkMode",String(o)),this.updateThemeClass(o)}updateThemeClass(o){document.body.classList.toggle("dark-theme",o)}watchSystemTheme(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o=>{if(!localStorage.getItem("darkMode")){let e=o.matches;this.darkMode.next(e),this.updateThemeClass(e)}})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac,providedIn:"root"})};var ce=class i{constructor(o,e,t){this.themeService=o;this.viewportScroller=e;this.router=t}scrollToSection(o){this.router.url!=="/"?this.router.navigate(["/"]).then(()=>{setTimeout(()=>{this.viewportScroller.scrollToAnchor(o)},100)}):this.viewportScroller.scrollToAnchor(o)}navigateHome(){this.router.url!=="/"?this.router.navigate(["/"]).then(()=>{window.scrollTo(0,0)}):window.scrollTo(0,0)}static \u0275fac=function(e){return new(e||i)(w(R),w(Ze),w(tt))};static \u0275cmp=h({type:i,selectors:[["app-header"]],decls:43,vars:4,consts:[["menu","matMenu"],[1,"header"],[1,"header-content"],["role","button","tabindex","0",1,"profile-image",3,"click"],[1,"nav-links"],["mat-button","",3,"click"],["mat-button","","routerLink","/p2p"],[1,"actions"],["mat-icon-button","",3,"click"],["mat-icon-button","",1,"mobile-menu-button",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","","routerLink","/p2p"]],template:function(e,t){if(e&1){let n=$();l(0,"mat-toolbar",1)(1,"div",2)(2,"div",3),p("click",function(){return d(n),u(t.navigateHome())}),m(),l(3,"div",4)(4,"a",5),p("click",function(){return d(n),u(t.scrollToSection("summary"))}),c(5,"Summary"),m(),l(6,"a",5),p("click",function(){return d(n),u(t.scrollToSection("experience"))}),c(7,"Experience"),m(),l(8,"a",5),p("click",function(){return d(n),u(t.scrollToSection("skills"))}),c(9,"Skills"),m(),l(10,"a",5),p("click",function(){return d(n),u(t.scrollToSection("education"))}),c(11,"Education"),m(),l(12,"a",5),p("click",function(){return d(n),u(t.scrollToSection("contact"))}),c(13,"Contact"),m(),l(14,"a",6)(15,"mat-icon"),c(16,"sports_esports"),m(),c(17," P2P Pong "),m()(),l(18,"div",7)(19,"button",8),p("click",function(){return d(n),u(t.themeService.toggleTheme())}),l(20,"mat-icon"),c(21),J(22,"async"),m()(),l(23,"button",9)(24,"mat-icon"),c(25,"menu"),m()()()()(),l(26,"mat-menu",null,0)(28,"a",10),p("click",function(){return d(n),u(t.scrollToSection("summary"))}),c(29,"Summary"),m(),l(30,"a",10),p("click",function(){return d(n),u(t.scrollToSection("experience"))}),c(31,"Experience"),m(),l(32,"a",10),p("click",function(){return d(n),u(t.scrollToSection("skills"))}),c(33,"Skills"),m(),l(34,"a",10),p("click",function(){return d(n),u(t.scrollToSection("education"))}),c(35,"Education"),m(),l(36,"a",10),p("click",function(){return d(n),u(t.scrollToSection("contact"))}),c(37,"Contact"),m(),l(38,"a",11)(39,"mat-icon"),c(40,"sports_esports"),m(),l(41,"span"),c(42,"P2P Pong"),m()()()}if(e&2){let n=Ge(27);C(21),We(ee(22,2,t.themeService.isDarkMode$)?"light_mode":"dark_mode"),C(2),E("matMenuTriggerFor",n)}},dependencies:[ie,ne,It,St,vt,bt,Mt,re,oe,Ft,M,H,Et,rt,nt],styles:[".header.mat-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;background:var(--background-color);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:1rem 2rem;min-height:80px;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important}.header.mat-toolbar[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin:0 auto}.header.mat-toolbar[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;background-image:url(https://ca.slack-edge.com/T03SGJX1Q-U03F84DFM7Y-1a85a174f606-512);background-size:cover;background-position:center;cursor:pointer;transition:transform .2s ease}.header.mat-toolbar[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.header.mat-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;gap:2rem}@media (max-width: 768px){.header.mat-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{display:none}}.header.mat-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-color);text-decoration:none;font-weight:600;font-size:.875rem;letter-spacing:-.00875rem;transition:color .3s ease;font-family:inherit}.header.mat-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent-color)}.header.mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}@media (min-width: 769px){.header.mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .mobile-menu-button[_ngcontent-%COMP%]{display:none}}.header.mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .mobile-menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-color)}.header.mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-color)}[_nghost-%COMP%]     .mdc-menu-surface.mat-mdc-menu-panel{background-color:var(--background-color)}[_nghost-%COMP%]     .mdc-menu-surface.mat-mdc-menu-panel .mat-mdc-menu-content .mat-mdc-menu-item{font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;font-weight:600;font-size:.875rem;letter-spacing:-.00875rem;color:var(--text-color)}[_nghost-%COMP%]     .mdc-menu-surface.mat-mdc-menu-panel .mat-mdc-menu-content .mat-mdc-menu-item:hover{background-color:var(--card-bg)}[_nghost-%COMP%]     .mdc-menu-surface.mat-mdc-menu-panel .mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{font-family:inherit}"]})};var de=class i{constructor(o){this.themeService=o}static \u0275fac=function(e){return new(e||i)(w(R))};static \u0275cmp=h({type:i,selectors:[["app-root"]],decls:13,vars:4,consts:[[1,"app-container"],["href","https://github.com/patrickrottman/patrickrottman.com","target","_blank","rel","noopener noreferrer",1,"github-link"]],template:function(e,t){e&1&&(l(0,"div",0),J(1,"async"),k(2,"app-header"),l(3,"main"),k(4,"router-outlet"),m(),l(5,"footer")(6,"p"),c(7,"\xA9 2024 Patrick Rottman. All rights reserved."),m(),l(8,"a",1)(9,"mat-icon"),c(10,"code"),m(),l(11,"span"),c(12,"View Source"),m()()()()),e&2&&x("dark-theme",ee(1,2,t.themeService.isDarkMode$))},dependencies:[ie,ne,et,ce,re,oe],styles:[".app-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.app-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{flex:1;width:100%;max-width:1200px;margin:0 auto;padding:15px 24px;box-sizing:border-box}@media (max-width: 768px){.app-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:15px 16px}}.app-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{padding:2rem;text-align:center;color:var(--secondary-color);display:flex;flex-direction:column;align-items:center;gap:1rem}.app-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .github-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:var(--text-color);text-decoration:none;transition:color .3s ease;font-size:.875rem}.app-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .github-link[_ngcontent-%COMP%]:hover{color:var(--accent-color)}.app-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .github-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}"]})};Je(de,Tt).catch(i=>console.error(i));
