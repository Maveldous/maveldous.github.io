(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);_&&_(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var _=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24c7":function(t,e,a){"use strict";var s=a("58de"),i=a.n(s);i.a},"30d4":function(t,e,a){"use strict";var s=a("ccde"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("headerComponent"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("keep-alive",[a("router-view")],1)],1)],1)},n=[],o=a("5530"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"startWindow"},[a("div",{staticClass:"startWindow__wrapper",class:{header:t.HEADER_STATE}},[a("div",{staticClass:"startWindow__main"},[a("h1",{directives:[{name:"show",rawName:"v-show",value:!t.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__main-title"},[t._v(" "+t._s(t.MAIN_LANG.header.title)+" "+t._s(t.HEADER_NAME)+"! ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__main-text"},[t._v(" "+t._s(t.MAIN_LANG.header.text)+" ")]),a("form",{staticClass:"startWindow__form"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.HEADER_STATE,expression:"HEADER_STATE"}],staticClass:"startWindow__form-socialmedia"},[t._m(0),t._m(1),t._m(2)]),a("input",{directives:[{name:"show",rawName:"v-show",value:!t.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__form-input",attrs:{type:"text",placeholder:"Введите свое имя"},on:{input:t.updateName}}),a("div",{staticClass:"startWindow__form-btnBlock"},[a("router-link",{staticClass:"router-link",attrs:{to:"/"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.HEADER_STATE,expression:"HEADER_STATE"}],staticClass:"startWindow__form-btnHome",on:{click:function(e){return e.preventDefault(),t.headerUpdate(!1)}}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"})])],1)]),a("button",{staticClass:"startWindow__form-btn",on:{click:function(e){return e.preventDefault(),t.TOGGLE_LANG(!1)}}},[t._v("ENG")]),a("button",{staticClass:"startWindow__form-btn",on:{click:function(e){return e.preventDefault(),t.TOGGLE_LANG(!0)}}},[t._v("RUS")])],1)]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__main-btn",on:{click:function(e){return e.preventDefault(),t.headerUpdate(!0)}}},[t._v(" "+t._s(t.MAIN_LANG.header.btn)+" ")])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"startWindow__form-item"},[a("a",{attrs:{href:"https://t.me/Maveldous"}},[a("i",{staticClass:"fab fa-telegram-plane"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"startWindow__form-item"},[a("a",{attrs:{href:"https://www.linkedin.com/in/naumov-artem-progdev/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"startWindow__form-item"},[a("a",{attrs:{href:"https://github.com/Maveldous"}},[a("i",{staticClass:"fab fa-github"})])])}],l=(a("4160"),a("d3b7"),a("159b"),a("2f62")),_={name:"Header",data:function(){return{}},computed:Object(o["a"])({},Object(l["c"])(["HEADER_NAME","HEADER_STATE","MAIN_LANG"])),methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["TOGGLE_STATE_TRUE","TOGGLE_LANG"])),{},{updateName:function(t){this.$store.commit("UPDATE_NAME",t.target.value)},headerUpdate:function(t){var e,a=2e3;t&&(this.TOGGLE_STATE_TRUE(),e=document.querySelectorAll(".startWindow__form-item, .main__title, .background"),a=1e3),new Promise((function(t){setTimeout((function(){t()}),a)})).then((function(){t||(e=document.querySelectorAll(".main__title, .background")),e.forEach((function(t,e){setTimeout((function(){t.classList.add("animation")}),1e3*e)}))}))}})},u=_,m=(a("6b40"),a("2877")),p=Object(m["a"])(u,r,c,!1,null,"2385cdb4",null),f=p.exports,d={name:"App",components:{headerComponent:f},computed:Object(o["a"])({},Object(l["c"])(["HEADER_NAME"])),methods:Object(o["a"])({},Object(l["d"])(["CHANGE_LANG","UPDATE_NAME"])),created:function(){var t=this;this.CHANGE_LANG(!0),window.addEventListener("unload",(function(){localStorage.setItem("name",t.HEADER_NAME)})),this.UPDATE_NAME(localStorage.getItem("name"))}},b=d,v=(a("5c0b"),Object(m["a"])(b,i,n,!1,null,null,null)),A=v.exports,h=a("8c4f"),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"about"},[s("div",{staticClass:"about__warapper wrapper"},[s("div",{staticClass:"border"}),s("div",{staticClass:"about__inner inner"},[s("h1",{staticClass:"about__title title"},[t._v(" "+t._s(t.MAIN_LANG.mainPage.text1)+" ")]),s("p",{staticClass:"about__text"},[t._v(" "+t._s(t.MAIN_LANG.header.title)+" "+t._s(t.HEADER_NAME)+t._s(t.MAIN_LANG.aboutMe.text)+" ")])])]),s("img",{staticClass:"bonfire",attrs:{src:a("960f"),alt:""}})])},j=[],C={name:"Header",data:function(){return{}},computed:Object(o["a"])({},Object(l["c"])(["MAIN_LANG","HEADER_NAME"])),methods:{}},N=C,g=(a("f35c"),Object(m["a"])(N,E,j,!1,null,null,null)),w=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("div",{staticClass:"main__warapper"},[a("h1",{staticClass:"main__title"},[t._v(t._s(t.MAIN_LANG.mainPage.title))])]),a("nav",{staticClass:"main__nav"},[a("ul",{staticClass:"main__nav-items"},[a("li",{staticClass:"main__nav-item"},[a("router-link",{attrs:{to:"/about"}},[t._v(" "+t._s(t.MAIN_LANG.mainPage.text1))])],1),a("li",{staticClass:"main__nav-item"},[a("router-link",{attrs:{to:"/skills"}},[t._v(" "+t._s(t.MAIN_LANG.mainPage.text2))])],1),a("li",{staticClass:"main__nav-item"},[a("router-link",{attrs:{to:"/works"}},[t._v(" "+t._s(t.MAIN_LANG.mainPage.text3))])],1),a("li",{staticClass:"main__nav-item"},[a("a",{on:{click:function(e){return e.preventDefault(),t.TOGGLE_STATE_TRUE(e)}}},[t._v(" "+t._s(t.MAIN_LANG.mainPage.text4)+" ")])])])]),a("div",{staticClass:"background",attrs:{alt:""}})])},T=[],G={name:"Header",data:function(){return{}},computed:Object(o["a"])({},Object(l["c"])(["MAIN_LANG"])),methods:Object(o["a"])({},Object(l["b"])(["TOGGLE_STATE_TRUE"]))},M=G,k=(a("ae52"),Object(m["a"])(M,x,T,!1,null,"316cb96b",null)),O=k.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"skills"},[s("div",{staticClass:"skills__warapper wrapper"},[s("div",{staticClass:"border"}),s("div",{staticClass:"skills__inner inner"},[s("h1",{staticClass:"skills__title title"},[t._v(t._s(t.MAIN_LANG.mainPage.text2))]),t._m(0)])]),s("img",{staticClass:"bonfire",attrs:{src:a("960f"),alt:""}})])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"skills__list"},[a("li",{staticClass:"skills__item item1"},[t._v("Vue.js/Vue-router/Vuex")]),a("li",{staticClass:"skills__item item2"},[t._v("Gulp/Webpack")]),a("li",{staticClass:"skills__item item3"},[t._v("JavaScript/TypeScript/JQuery")]),a("li",{staticClass:"skills__item item4"},[t._v("HTML5/CSS3(SCSS/SASS)")]),a("li",{staticClass:"skills__item item5"},[t._v("Git")]),a("li",{staticClass:"skills__item item6"},[t._v("Photoshop/Figma/Zeplin")]),a("li",{staticClass:"skills__item item7"},[t._v("Linux advanced user")])])}],I={computed:Object(o["a"])({},Object(l["c"])(["MAIN_LANG"]))},P=I,y=(a("30d4"),Object(m["a"])(P,S,L,!1,null,null,null)),H=y.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"works"},[s("h1",{staticClass:"works__title title"},[t._v(t._s(t.MAIN_LANG.mainPage.text3))]),s("mapComponent"),s("button",{staticClass:"works__btn",on:{click:function(e){return e.preventDefault(),t.TOGGLE_MAP_VISION(e)}}},[t._v(t._s(t.MAIN_LANG.works.btn))]),s("img",{staticClass:"bonfire",attrs:{src:a("960f"),alt:""}})],1)},R=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"map",class:{show:t.GET_MAP_VISION}},[a("div",{staticClass:"project__box box1"},[a("p",{staticClass:"project__box-text"},[a("a",{staticClass:"box__text-ref",attrs:{href:"https://maveldous.github.io/Some_projects/Aimation/"}},[t._v(" "+t._s(t.MAIN_LANG.works.project1)+" ")]),a("a",{staticClass:"box__text-git",attrs:{href:"https://github.com/Maveldous/Animations"}},[t._v("github")])]),a("div",{staticClass:"project__box-hide"})]),a("div",{staticClass:"project__box box2"},[a("p",{staticClass:"project__box-text"},[a("a",{staticClass:"box__text-ref",attrs:{href:"https://maveldous.github.io/Some_projects/VueVideo/"}},[t._v(" "+t._s(t.MAIN_LANG.works.project2)+" ")]),a("a",{staticClass:"box__text-git",attrs:{href:"https://github.com/Maveldous/VueVideo"}},[t._v("github")])]),a("div",{staticClass:"project__box-hide"})]),a("div",{staticClass:"project__box box3"},[a("p",{staticClass:"project__box-text"},[a("a",{staticClass:"box__text-ref",attrs:{href:"https://maveldous.github.io/Some_projects/TimersProject"}},[t._v(" "+t._s(t.MAIN_LANG.works.project3)+" ")]),a("a",{staticClass:"box__text-git",attrs:{href:"https://github.com/Maveldous/TimersPage"}},[t._v("github")])]),a("div",{staticClass:"project__box-hide"})]),a("div",{staticClass:"project__box box4"},[a("p",{staticClass:"project__box-text"},[a("a",{staticClass:"box__text-ref",attrs:{href:"https://maveldous.github.io/Some_projects/LandingProject"}},[t._v(" "+t._s(t.MAIN_LANG.works.project4)+" ")]),a("a",{staticClass:"box__text-git",attrs:{href:"https://github.com/Maveldous/landingPageProject"}},[t._v("github")])]),a("div",{staticClass:"project__box-hide"})])])},W=[],U={name:"Map",computed:Object(o["a"])({},Object(l["c"])(["MAIN_LANG","GET_MAP_VISION"]))},$=U,F=(a("24c7"),Object(m["a"])($,V,W,!1,null,null,null)),J=F.exports,q={name:"works",data:function(){return{}},components:{mapComponent:J},computed:Object(o["a"])({},Object(l["c"])(["MAIN_LANG"])),methods:Object(o["a"])({},Object(l["b"])(["TOGGLE_MAP_VISION"]))},B=q,Q=(a("9975"),Object(m["a"])(B,D,R,!1,null,null,null)),Z=Q.exports;s["a"].use(h["a"]);var z=new h["a"]({routes:[{path:"/",name:"main",component:O},{path:"/About",name:"about",component:w,props:!0},{path:"/Skills",name:"skills",component:H},{path:"/Works",name:"works",component:Z}]}),K=z;a("b0c0");s["a"].use(l["a"]);var X=new l["a"].Store({state:{name:"",state:!1,mapVision:!1,lang:{},engLang:{header:{title:"Hello",text:"Enter your name and select a language",btn:"Confirm"},mainPage:{title:"Portfolio",text1:"About me",text2:"My skills",text3:"My works",text4:"Exit"},aboutMe:{text:'! My name is Naumov Artem. I have been doing front-end development for over a year. Most of this time I worked as a freelancer or creating my own pet-projects.\n                Despite my passion for the web, I have never forgotten about other PLs, so now I can boast of a good experience of working with C ++ and C #. I\'am familiar and have worked with many concepts, principles of programming, such as: Rest API, Solid, OOP, Functional programming and etc. Most of my skills are listed in the "My Skills" section. From soft skills, I can single out: communication skills, teamwork, good time management and a responsible approach to any business. Since this is the section "About Me", I can add a little about my hobbies, namely: love of playing chess, reading foreign or classical literature, as well as playing sports with friends. In general, that\'s all, thank you for your time with this text and hope to work with you soon!'},works:{btn:"Show all",project1:"Animation project",project2:"Videoplayer",project3:"Timers project",project4:"Landing project",project5:"Project5",project6:"Project6",project7:"Project7",project8:"Project8",project9:"Project9"}},rusLang:{header:{title:"Здравствуйте",text:"Введите свое имя и выберите язык",btn:"Подтвердить"},mainPage:{title:"Портфолио",text1:"Обо мне",text2:"Мои навыки",text3:"Мои работы",text4:"Выход"},aboutMe:{text:'! Меня зовут Наумов Артем. Более года я занимаюсь front-end разработкой. Большую часть этого времени проработал на фрилансе или создавая свои pet-проекты.\n                Не смотря на мою увлеченность вэбом, никогда не забывал про другие ЯПы, поэтому сейчас могу похвастаться хорошим опытом работы с C++ и С#. Знаком и работал с многими концепциями, принципами программирования, такими как: Rest API, Solid, OOP, Functional programming и etc. Большая часть моих навыков указана в разделе "Мои навыки". Из soft skills могу выделить коммуникативные навыки, работа в команде, хороший тайм менеджмент и ответственный подход к любому делу. Так как это раздел "О себе", могу добавить немного про свои увлечения, а именно: любовь к игре в шахматы, чтение зарубежной или классической литературы, а так же занятия спортом с друзьями. В целом, это все, спасибо за уделенное время этому тексту и надеюсь на скорую работу с вами!'},works:{btn:"Показать все",project1:"Animation project",project2:"Videoplayer",project3:"Timers project",project4:"Landing project",project5:"Project5",project6:"Project6",project7:"Project7",project8:"Project8",project9:"Project9"}}},getters:{HEADER_NAME:function(t){return t.name},HEADER_STATE:function(t){return t.state},GET_MAP_VISION:function(t){return t.mapVision},MAIN_LANG:function(t){return t.lang}},mutations:{CHANGE_STATE_TRUE:function(t){t.state=!t.state},CHANGE_MAP_VISION:function(t){t.mapVision=!t.mapVision},UPDATE_NAME:function(t,e){t.name=e},CHANGE_LANG:function(t,e){t.lang=e?t.rusLang:t.engLang}},actions:{TOGGLE_STATE_TRUE:function(t){var e=t.commit;e("CHANGE_STATE_TRUE")},TOGGLE_LANG:function(t,e){var a=t.commit;a("CHANGE_LANG",e)},TOGGLE_MAP_VISION:function(t){var e=t.commit;e("CHANGE_MAP_VISION")}}}),Y=X;a("f27b");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(A)},store:Y,router:K}).$mount("#app")},"58de":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"6b40":function(t,e,a){"use strict";var s=a("b6f1"),i=a.n(s);i.a},"94b7":function(t,e,a){},"960f":function(t,e,a){t.exports=a.p+"img/Bonfire2.67b42845.gif"},9975:function(t,e,a){"use strict";var s=a("bb22"),i=a.n(s);i.a},"9c0c":function(t,e,a){},ae52:function(t,e,a){"use strict";var s=a("94b7"),i=a.n(s);i.a},b6f1:function(t,e,a){},b8e9:function(t,e,a){},bb22:function(t,e,a){},ccde:function(t,e,a){},f27b:function(t,e,a){},f35c:function(t,e,a){"use strict";var s=a("b8e9"),i=a.n(s);i.a}});
//# sourceMappingURL=app.36062766.js.map