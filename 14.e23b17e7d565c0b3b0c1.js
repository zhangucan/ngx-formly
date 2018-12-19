(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Swt":function(n,s){n.exports="import { Component, ViewChild, ViewContainerRef } from '@angular/core';\nimport { FieldWrapper } from '@ngx-formly/core';\n\nimport { trigger, state, style, transition, animate, group } from '@angular/animations';\n\nconst SlideInOutAnimation = [\n  trigger('slideInOut', [\n    state('in', style({\n      'max-height': '500px', 'opacity': '1', 'visibility': 'visible',\n    })),\n    state('out', style({\n      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden',\n    })),\n    transition('in => out', [group([\n      animate('400ms ease-in-out', style({\n        'opacity': '0',\n      })),\n      animate('600ms ease-in-out', style({\n        'max-height': '0px',\n      })),\n      animate('700ms ease-in-out', style({\n        'visibility': 'hidden',\n      })),\n    ],\n    )]),\n    transition('out => in', [group([\n      animate('1ms ease-in-out', style({\n        'visibility': 'visible',\n      })),\n      animate('600ms ease-in-out', style({\n        'max-height': '500px',\n      })),\n      animate('800ms ease-in-out', style({\n        'opacity': '1',\n      })),\n    ],\n    )]),\n  ]),\n];\n\n@Component({\n  selector: 'formly-wrapper-animation',\n  template: `\n    <div [@slideInOut]=\"field.hide ? 'out' : 'in'\">\n      <ng-container #fieldComponent></ng-container>\n    </div>\n  `,\n  animations: [SlideInOutAnimation],\n})\nexport class AnimationWrapperComponent extends FieldWrapper {\n  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;\n}\n"},"9UU8":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){var n=this;this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"firstName",type:"input",templateOptions:{label:"First name",placeholder:"Type in here to display the hidden field using slideInOut animation"}},{key:"lastname",type:"input",hideExpression:function(s){return!n.model.firstName},templateOptions:{label:"Last name"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Hide fields with `@angular/animations`",component:o,files:[{file:"app.component.html",content:a("TV33"),filecontent:a("EW5P")},{file:"app.component.ts",content:a("h03v"),filecontent:a("Q0R9")},{file:"animation-wrapper.component.ts",content:a("WIMR"),filecontent:a("3Swt")},{file:"app.module.ts",content:a("NCey"),filecontent:a("PiAB")}]}]},c=function(){},l=a("NcP4"),i=a("goW2"),u=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),y=a("Bbog"),g=a("fFVA"),b=a("Nntq"),h=a("L0Z1"),v=a("grA4"),w=a("UFMs"),x=a("mrSG"),C=a("HkYz"),O=a("ihYY"),F=(Object(O.trigger)("slideInOut",[Object(O.state)("in",Object(O.style)({"max-height":"500px",opacity:"1",visibility:"visible"})),Object(O.state)("out",Object(O.style)({"max-height":"0px",opacity:"0",visibility:"hidden"})),Object(O.transition)("in => out",[Object(O.group)([Object(O.animate)("400ms ease-in-out",Object(O.style)({opacity:"0"})),Object(O.animate)("600ms ease-in-out",Object(O.style)({"max-height":"0px"})),Object(O.animate)("700ms ease-in-out",Object(O.style)({visibility:"hidden"}))])]),Object(O.transition)("out => in",[Object(O.group)([Object(O.animate)("1ms ease-in-out",Object(O.style)({visibility:"visible"})),Object(O.animate)("600ms ease-in-out",Object(O.style)({"max-height":"500px"})),Object(O.animate)("800ms ease-in-out",Object(O.style)({opacity:"1"}))])])]),function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(x.__extends)(s,n),s}(C.c)),M=t["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"slideInOut",definitions:[{type:0,name:"in",styles:{type:6,styles:{"max-height":"500px",opacity:"1",visibility:"visible"},offset:null},options:void 0},{type:0,name:"out",styles:{type:6,styles:{"max-height":"0px",opacity:"0",visibility:"hidden"},offset:null},options:void 0},{type:1,expr:"in => out",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{opacity:"0"},offset:null},timings:"400ms ease-in-out"},{type:4,styles:{type:6,styles:{"max-height":"0px"},offset:null},timings:"600ms ease-in-out"},{type:4,styles:{type:6,styles:{visibility:"hidden"},offset:null},timings:"700ms ease-in-out"}],options:null}],options:null},{type:1,expr:"out => in",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{visibility:"visible"},offset:null},timings:"1ms ease-in-out"},{type:4,styles:{type:6,styles:{"max-height":"500px"},offset:null},timings:"600ms ease-in-out"},{type:4,styles:{type:6,styles:{opacity:"1"},offset:null},timings:"800ms ease-in-out"}],options:null}],options:null}],options:{}}]}});function A(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[],[[24,"@slideInOut",0]],null,null,null,null)),(n()(),t["\u0275eld"](2,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null))],null,function(n,s){n(s,1,0,s.component.field.hide?"out":"in")})}var W=t["\u0275ccf"]("formly-wrapper-animation",F,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-wrapper-animation",[],null,null,null,A,M)),t["\u0275did"](1,49152,null,0,F,[],null,null)],null,null)},{form:"form",field:"field",model:"model",options:"options"},{},[]),N=a("pMnS"),R=a("4o01"),_=a("Dl9q"),I=a("9Glx"),j=a("UcnZ"),S=a("wdLZ"),L=a("DAbo"),G=t["\u0275crt"]({encapsulation:0,styles:["formly-field {\n      display: block !important;\n    }"],data:{}});function V(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,_.b,_.a)),t["\u0275did"](6,966656,null,0,I.a,[j.a,S.a,L.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,I.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)})}var D=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,V,G)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),P=a("Ip0R"),B=a("M2Lx"),T=a("eDkP"),U=a("Fzqc"),E=a("v9Dh"),J=a("6LlJ"),Q=a("F6kA"),q=a("dWZg"),z=a("lLAP"),Y=a("4c35"),Z=a("qAlS"),H=a("Wf4p"),K=a("La40"),X=a("SMsm"),$=a("UodH"),nn=a("5QwG"),sn=a("Nsh5"),an=a("8mMr"),tn=a("LC5p"),pn=a("0/Q6"),on=a("mqvi"),en=a("XR12"),cn=a("1ey0"),ln=function(){function n(){}return n.prototype.run=function(n){n.templateManipulators.preWrapper.push(function(n){return"animation"})},n}(),un=function(){},rn=a("ZYCi"),kn=a("AMrk"),mn=a("me7w"),dn=a("N3PW"),fn=a("l4pn"),yn=a("Fv2i"),gn=a("wBYW"),bn=a("IE48"),hn=a("Ltwa"),vn=a("4Mh+"),wn=a("b7gF"),xn=a("DJQk"),Cn=a("zn1Q"),On=a("Q4Tx"),Fn=a("CgTb"),Mn=a("+oK5"),An=a("zdmU"),Wn=a("Ko9E"),Nn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return Rn});var Rn=t["\u0275cmf"](c,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[l.a,i.a,u.a,r.a,k.a,m.a,d.a,f.a,y.a,g.a,b.a,h.a,v.a,w.a,W,N.a,R.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,P.NgLocalization,P.NgLocaleLocalization,[t.LOCALE_ID,[2,P["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,B.c,B.c,[]),t["\u0275mpd"](4608,T.c,T.c,[T.i,T.e,t.ComponentFactoryResolver,T.h,T.f,t.Injector,t.NgZone,P.DOCUMENT,U.b]),t["\u0275mpd"](5120,T.j,T.k,[T.c]),t["\u0275mpd"](5120,E.b,E.c,[T.c]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](4608,Q.a,Q.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,L.b,L.b,[L.a]),t["\u0275mpd"](4608,S.a,S.a,[]),t["\u0275mpd"](4608,j.a,j.a,[L.b,S.a]),t["\u0275mpd"](1073742336,P.CommonModule,P.CommonModule,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,B.d,B.d,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,Y.g,Y.g,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,T.g,T.g,[]),t["\u0275mpd"](1073742336,H.l,H.l,[[2,H.d]]),t["\u0275mpd"](1073742336,E.e,E.e,[]),t["\u0275mpd"](1073742336,H.w,H.w,[]),t["\u0275mpd"](1073742336,K.i,K.i,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,$.c,$.c,[]),t["\u0275mpd"](1073742336,nn.b,nn.b,[]),t["\u0275mpd"](1073742336,sn.h,sn.h,[]),t["\u0275mpd"](1073742336,an.b,an.b,[]),t["\u0275mpd"](1073742336,H.m,H.m,[]),t["\u0275mpd"](1073742336,H.u,H.u,[]),t["\u0275mpd"](1073742336,tn.b,tn.b,[]),t["\u0275mpd"](1073742336,pn.c,pn.c,[]),t["\u0275mpd"](1073742336,on.a,on.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,en.a,en.a,[]),t["\u0275mpd"](1073742336,cn.a,cn.a,[]),t["\u0275mpd"](1073742336,un,un,[]),t["\u0275mpd"](1073742336,rn.r,rn.r,[[2,rn.x],[2,rn.o]]),t["\u0275mpd"](1073742336,c,c,[]),t["\u0275mpd"](1024,L.a,function(){return[{types:[{name:"formly-group",component:kn.a}]},{types:[{name:"input",component:mn.a,wrappers:["form-field"]},{name:"checkbox",component:dn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:fn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:yn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:gn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:bn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:hn.a},{name:"description",component:vn.a},{name:"validation-message",component:wn.a},{name:"fieldset",component:xn.a},{name:"addons",component:Cn.a},{name:"form-field",component:On.a}],manipulators:[{class:Fn.a,method:"run"},{class:Mn.a,method:"run"},{class:An.a,method:"run"},{class:Wn.a,method:"run"}]},{types:[{name:"formly-group",component:kn.a}]},{wrappers:[{name:"animation",component:F}],manipulators:[{class:ln,method:"run"}]}]},[]),t["\u0275mpd"](1024,rn.m,function(){return[[{path:"",component:Nn.a,data:e}]]},[])])})},EW5P:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},NCey:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AnimationWrapperComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./animation-wrapper.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AnimationWrapper</span> <span class="token punctuation" >{</span>\n  <span class="token function" >run</span><span class="token punctuation" >(</span>fc<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    fc<span class="token punctuation" >.</span>templateManipulators<span class="token punctuation" >.</span>preWrapper\n      <span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>field <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'animation\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'animation\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> AnimationWrapperComponent <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      manipulators<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> <span class="token keyword" >class</span><span class="token punctuation" >:</span> AnimationWrapper<span class="token punctuation" >,</span> method<span class="token punctuation" >:</span> <span class="token string" >\'run\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    AnimationWrapperComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},PiAB:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AnimationWrapperComponent } from './animation-wrapper.component';\nimport { AppComponent } from './app.component';\n\nexport class AnimationWrapper {\n  run(fc) {\n    fc.templateManipulators.preWrapper\n      .push(field => 'animation');\n  }\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'animation', component: AnimationWrapperComponent },\n      ],\n      manipulators: [\n        { class: AnimationWrapper, method: 'run' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    AnimationWrapperComponent,\n  ],\n})\nexport class AppModule { }\n"},Q0R9:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n  // formly-form: disable default hide behavior\n  styles: [`\n    ::ng-deep formly-field {\n      display: block !important;\n    }\n  `],\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      templateOptions: {\n        label: 'First name',\n        placeholder: 'Type in here to display the hidden field using slideInOut animation',\n      },\n    },\n    {\n      key: 'lastname',\n      type: 'input',\n      hideExpression: (model) => !this.model.firstName,\n      templateOptions: {\n        label: 'Last name',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},TV33:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},WIMR:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> ViewChild<span class="token punctuation" >,</span> ViewContainerRef <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldWrapper <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> trigger<span class="token punctuation" >,</span> state<span class="token punctuation" >,</span> style<span class="token punctuation" >,</span> transition<span class="token punctuation" >,</span> animate<span class="token punctuation" >,</span> group <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/animations\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> SlideInOutAnimation <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token function" >trigger</span><span class="token punctuation" >(</span><span class="token string" >\'slideInOut\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >[</span>\n    <span class="token function" >state</span><span class="token punctuation" >(</span><span class="token string" >\'in\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token string" >\'max-height\'</span><span class="token punctuation" >:</span> <span class="token string" >\'500px\'</span><span class="token punctuation" >,</span> <span class="token string" >\'opacity\'</span><span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span> <span class="token string" >\'visibility\'</span><span class="token punctuation" >:</span> <span class="token string" >\'visible\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token function" >state</span><span class="token punctuation" >(</span><span class="token string" >\'out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token string" >\'max-height\'</span><span class="token punctuation" >:</span> <span class="token string" >\'0px\'</span><span class="token punctuation" >,</span> <span class="token string" >\'opacity\'</span><span class="token punctuation" >:</span> <span class="token string" >\'0\'</span><span class="token punctuation" >,</span> <span class="token string" >\'visibility\'</span><span class="token punctuation" >:</span> <span class="token string" >\'hidden\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token function" >transition</span><span class="token punctuation" >(</span><span class="token string" >\'in => out\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >[</span><span class="token function" >group</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span>\n      <span class="token function" >animate</span><span class="token punctuation" >(</span><span class="token string" >\'400ms ease-in-out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        <span class="token string" >\'opacity\'</span><span class="token punctuation" >:</span> <span class="token string" >\'0\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token function" >animate</span><span class="token punctuation" >(</span><span class="token string" >\'600ms ease-in-out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        <span class="token string" >\'max-height\'</span><span class="token punctuation" >:</span> <span class="token string" >\'0px\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token function" >animate</span><span class="token punctuation" >(</span><span class="token string" >\'700ms ease-in-out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        <span class="token string" >\'visibility\'</span><span class="token punctuation" >:</span> <span class="token string" >\'hidden\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token function" >transition</span><span class="token punctuation" >(</span><span class="token string" >\'out => in\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >[</span><span class="token function" >group</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span>\n      <span class="token function" >animate</span><span class="token punctuation" >(</span><span class="token string" >\'1ms ease-in-out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        <span class="token string" >\'visibility\'</span><span class="token punctuation" >:</span> <span class="token string" >\'visible\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token function" >animate</span><span class="token punctuation" >(</span><span class="token string" >\'600ms ease-in-out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        <span class="token string" >\'max-height\'</span><span class="token punctuation" >:</span> <span class="token string" >\'500px\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token function" >animate</span><span class="token punctuation" >(</span><span class="token string" >\'800ms ease-in-out\'</span><span class="token punctuation" >,</span> <span class="token function" >style</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        <span class="token string" >\'opacity\'</span><span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-wrapper-animation\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token punctuation" >[</span>@slideInOut<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"field.hide ? \'out\' : \'in\'"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>ng<span class="token operator" >-</span>container #fieldComponent<span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ng<span class="token operator" >-</span>container<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n  animations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>SlideInOutAnimation<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AnimationWrapperComponent</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldWrapper</span> <span class="token punctuation" >{</span>\n  @<span class="token function" >ViewChild</span><span class="token punctuation" >(</span><span class="token string" >\'fieldComponent\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>read<span class="token punctuation" >:</span> ViewContainerRef<span class="token punctuation" >}</span><span class="token punctuation" >)</span> fieldComponent<span class="token punctuation" >:</span> ViewContainerRef<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n'},h03v:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n  <span class="token comment" spellcheck="true">// formly-form: disable default hide behavior</span>\n  styles<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token template-string" ><span class="token string" >`\n    ::ng-deep formly-field {\n      display: block !important;\n    }\n  `</span></span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'firstName\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'First name\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Type in here to display the hidden field using slideInOut animation\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'lastname\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      hideExpression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>model<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >.</span>firstName<span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Last name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}}]);