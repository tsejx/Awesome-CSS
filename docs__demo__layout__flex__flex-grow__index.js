(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"4IlW":function(e,a,E){"use strict";var t={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var a=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||a>=t.F1&&a<=t.F12)return!1;switch(a){case t.ALT:case t.CAPS_LOCK:case t.CONTEXT_MENU:case t.CTRL:case t.DOWN:case t.END:case t.ESC:case t.HOME:case t.INSERT:case t.LEFT:case t.MAC_FF_META:case t.META:case t.NUMLOCK:case t.NUM_CENTER:case t.PAGE_DOWN:case t.PAGE_UP:case t.PAUSE:case t.PRINT_SCREEN:case t.RIGHT:case t.SHIFT:case t.UP:case t.WIN_KEY:case t.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=t.ZERO&&e<=t.NINE)return!0;if(e>=t.NUM_ZERO&&e<=t.NUM_MULTIPLY)return!0;if(e>=t.A&&e<=t.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case t.SPACE:case t.QUESTION_MARK:case t.NUM_PLUS:case t.NUM_MINUS:case t.NUM_PERIOD:case t.NUM_DIVISION:case t.SEMICOLON:case t.DASH:case t.EQUALS:case t.COMMA:case t.PERIOD:case t.SLASH:case t.APOSTROPHE:case t.SINGLE_QUOTE:case t.OPEN_SQUARE_BRACKET:case t.BACKSLASH:case t.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};a["a"]=t},Gp2Z:function(e,a,E){"use strict";E.r(a);E("QCje");var t=E("fyUT"),c=E("tJVT"),s=E("q1tI"),n=E.n(s),r=E("rZqG"),N=(E("hvDo"),()=>{var e=Object(r["a"])({0:1,1:2,2:3,3:4,4:5}),a=Object(c["a"])(e,2),E=a[0],s=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex-grow-input-group"},n.a.createElement(t["a"],{size:"small",value:E[0],onChange:e=>s({0:e})}),n.a.createElement(t["a"],{size:"small",value:E[1],onChange:e=>s({1:e})}),n.a.createElement(t["a"],{size:"small",value:E[2],onChange:e=>s({2:e})}),n.a.createElement(t["a"],{size:"small",value:E[3],onChange:e=>s({3:e})}),n.a.createElement(t["a"],{size:"small",value:E[4],onChange:e=>s({4:e})})),n.a.createElement("div",{className:"flex-grow"},n.a.createElement("div",{className:"item",style:{flexGrow:E[0]}},"1"),n.a.createElement("div",{className:"item",style:{flexGrow:E[1]}},"2"),n.a.createElement("div",{className:"item",style:{flexGrow:E[2]}},"3"),n.a.createElement("div",{className:"item",style:{flexGrow:E[3]}},"4"),n.a.createElement("div",{className:"item",style:{flexGrow:E[4]}},"5")))});a["default"]=()=>n.a.createElement(N,null)},hvDo:function(e,a,E){},rZqG:function(e,a,E){"use strict";var t=E("q1tI"),c=function(e,a){var E="function"===typeof Symbol&&e[Symbol.iterator];if(!E)return e;var t,c,s=E.call(e),n=[];try{while((void 0===a||a-- >0)&&!(t=s.next()).done)n.push(t.value)}catch(r){c={error:r}}finally{try{t&&!t.done&&(E=s["return"])&&E.call(s)}finally{if(c)throw c.error}}return n},s=function(e){void 0===e&&(e={});var a=c(Object(t["useState"])(e),2),E=a[0],s=a[1],n=Object(t["useCallback"])((function(e){s((function(a){return Object.assign({},a,e instanceof Function?e(a):e)}))}),[s]);return[E,n]};a["a"]=s}}]);