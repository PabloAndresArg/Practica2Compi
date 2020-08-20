(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n\n.CodeMirror-linenumbers {}\n\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n\n/* Shown when moving in bi-directional text */\n\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n\n.cm-s-default .cm-quote {color: #090;}\n\n.cm-negative {color: #d44;}\n\n.cm-positive {color: #292;}\n\n.cm-header, .cm-strong {font-weight: bold;}\n\n.cm-em {font-style: italic;}\n\n.cm-link {text-decoration: underline;}\n\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n\n.cm-s-default .cm-atom {color: #219;}\n\n.cm-s-default .cm-number {color: #164;}\n\n.cm-s-default .cm-def {color: #00f;}\n\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n\n.cm-s-default .cm-variable-2 {color: #05a;}\n\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n\n.cm-s-default .cm-comment {color: #a50;}\n\n.cm-s-default .cm-string {color: #a11;}\n\n.cm-s-default .cm-string-2 {color: #f50;}\n\n.cm-s-default .cm-meta {color: #555;}\n\n.cm-s-default .cm-qualifier {color: #555;}\n\n.cm-s-default .cm-builtin {color: #30a;}\n\n.cm-s-default .cm-bracket {color: #997;}\n\n.cm-s-default .cm-tag {color: #170;}\n\n.cm-s-default .cm-attribute {color: #00c;}\n\n.cm-s-default .cm-hr {color: #999;}\n\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  font-variant-ligatures: contextual;\n}\n\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n\n.CodeMirror-crosshair { cursor: crosshair; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\n\nspan.CodeMirror-selectedtext { background: none; }\n\n/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: #EEFFFF;\n}\n\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: #546E7A;\n  border: none;\n}\n\n.cm-s-material .CodeMirror-guttermarker,\n.cm-s-material .CodeMirror-guttermarker-subtle,\n.cm-s-material .CodeMirror-linenumber {\n  color: #546E7A;\n}\n\n.cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line>span::-moz-selection, .cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::selection,\n.cm-s-material .CodeMirror-line>span::selection,\n.cm-s-material .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::-moz-selection,\n.cm-s-material .CodeMirror-line>span::-moz-selection,\n.cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material .cm-comment {\n  color: #546E7A;\n}\n\n.cm-s-material .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #DECB6B;\n}\n\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n\n.cm-s-eclipse span.cm-meta { color: #FF1717; }\n\n.cm-s-eclipse span.cm-keyword { line-height: 1em; font-weight: bold; color: #7F0055; }\n\n.cm-s-eclipse span.cm-atom { color: #219; }\n\n.cm-s-eclipse span.cm-number { color: #164; }\n\n.cm-s-eclipse span.cm-def { color: #00f; }\n\n.cm-s-eclipse span.cm-variable { color: black; }\n\n.cm-s-eclipse span.cm-variable-2 { color: #0000C0; }\n\n.cm-s-eclipse span.cm-variable-3, .cm-s-eclipse span.cm-type { color: #0000C0; }\n\n.cm-s-eclipse span.cm-property { color: black; }\n\n.cm-s-eclipse span.cm-operator { color: black; }\n\n.cm-s-eclipse span.cm-comment { color: #3F7F5F; }\n\n.cm-s-eclipse span.cm-string { color: #2A00FF; }\n\n.cm-s-eclipse span.cm-string-2 { color: #f50; }\n\n.cm-s-eclipse span.cm-qualifier { color: #555; }\n\n.cm-s-eclipse span.cm-builtin { color: #30a; }\n\n.cm-s-eclipse span.cm-bracket { color: #cc7; }\n\n.cm-s-eclipse span.cm-tag { color: #170; }\n\n.cm-s-eclipse span.cm-attribute { color: #00c; }\n\n.cm-s-eclipse span.cm-link { color: #219; }\n\n.cm-s-eclipse span.cm-error { color: #f00; }\n\n.cm-s-eclipse .CodeMirror-activeline-background { background: #e8f2ff; }\n\n.cm-s-eclipse .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n\n/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n\n.cm-s-dracula span.cm-variable-2 { color: white; }\n\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n\n.cm-s-twilight.CodeMirror { background: #141414; color: #f7f7f7; }\n\n/**/\n\n.cm-s-twilight div.CodeMirror-selected { background: #323232; }\n\n/**/\n\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n\n.cm-s-twilight .CodeMirror-line::selection, .cm-s-twilight .CodeMirror-line > span::selection, .cm-s-twilight .CodeMirror-line > span > span::selection { background: rgba(50, 50, 50, 0.99); }\n\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n\n.cm-s-twilight .CodeMirror-gutters { background: #222; border-right: 1px solid #aaa; }\n\n.cm-s-twilight .CodeMirror-guttermarker { color: white; }\n\n.cm-s-twilight .CodeMirror-guttermarker-subtle { color: #aaa; }\n\n.cm-s-twilight .CodeMirror-linenumber { color: #aaa; }\n\n.cm-s-twilight .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-twilight .cm-keyword { color: #f9ee98; }\n\n/**/\n\n.cm-s-twilight .cm-atom { color: #FC0; }\n\n.cm-s-twilight .cm-number { color:  #ca7841; }\n\n/**/\n\n.cm-s-twilight .cm-def { color: #8DA6CE; }\n\n.cm-s-twilight span.cm-variable-2, .cm-s-twilight span.cm-tag { color: #607392; }\n\n/**/\n\n.cm-s-twilight span.cm-variable-3, .cm-s-twilight span.cm-def, .cm-s-twilight span.cm-type { color: #607392; }\n\n/**/\n\n.cm-s-twilight .cm-operator { color: #cda869; }\n\n/**/\n\n.cm-s-twilight .cm-comment { color:#777; font-style:italic; font-weight:normal; }\n\n/**/\n\n.cm-s-twilight .cm-string { color:#8f9d6a; font-style:italic; }\n\n/**/\n\n.cm-s-twilight .cm-string-2 { color:#bd6b18; }\n\n/*?*/\n\n.cm-s-twilight .cm-meta { background-color:#141414; color:#f7f7f7; }\n\n/*?*/\n\n.cm-s-twilight .cm-builtin { color: #cda869; }\n\n/*?*/\n\n.cm-s-twilight .cm-tag { color: #997643; }\n\n/**/\n\n.cm-s-twilight .cm-attribute { color: #d6bb6d; }\n\n/*?*/\n\n.cm-s-twilight .cm-header { color: #FF6400; }\n\n.cm-s-twilight .cm-hr { color: #AEAEAE; }\n\n.cm-s-twilight .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }\n\n/**/\n\n.cm-s-twilight .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-twilight .CodeMirror-activeline-background { background: #27282E; }\n\n.cm-s-twilight .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n\n/*\n\n    Name:       Bespin\n    Author:     Mozilla / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}\n\n.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}\n\n.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}\n\n.cm-s-bespin .CodeMirror-linenumber {color: #666666;}\n\n.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}\n\n.cm-s-bespin span.cm-comment {color: #937121;}\n\n.cm-s-bespin span.cm-atom {color: #9b859d;}\n\n.cm-s-bespin span.cm-number {color: #9b859d;}\n\n.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}\n\n.cm-s-bespin span.cm-keyword {color: #cf6a4c;}\n\n.cm-s-bespin span.cm-string {color: #f9ee98;}\n\n.cm-s-bespin span.cm-variable {color: #54be0d;}\n\n.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}\n\n.cm-s-bespin span.cm-def {color: #cf7d34;}\n\n.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}\n\n.cm-s-bespin span.cm-bracket {color: #9d9b97;}\n\n.cm-s-bespin span.cm-tag {color: #cf6a4c;}\n\n.cm-s-bespin span.cm-link {color: #9b859d;}\n\n.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n\n.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }\n\nbody{\n\n    background-image: url('CIRCUITO1.jpg');\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    font-family: cursive;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzIiwibm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvdGhlbWUvbWF0ZXJpYWwuY3NzIiwibm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvdGhlbWUvZWNsaXBzZS5jc3MiLCJub2RlX21vZHVsZXMvY29kZW1pcnJvci90aGVtZS9kcmFjdWxhLmNzcyIsIm5vZGVfbW9kdWxlcy9jb2RlbWlycm9yL3RoZW1lL3R3aWxpZ2h0LmNzcyIsIm5vZGVfbW9kdWxlcy9jb2RlbWlycm9yL3RoZW1lL2Jlc3Bpbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQ0E5RSxXQUFXOztBQUVYO0VBQ0UsZ0VBQWdFO0VBQ2hFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGNBQWMsRUFBRSxvQ0FBb0M7QUFDdEQ7O0FBQ0E7O0VBRUUsY0FBYyxFQUFFLGtDQUFrQztBQUNwRDs7QUFFQTtFQUNFLHVCQUF1QixFQUFFLGlEQUFpRDtBQUM1RTs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0EseUJBQXlCOztBQUN6QjtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsMkJBQTJCLFlBQVksRUFBRTs7QUFDekMsa0NBQWtDLFdBQVcsRUFBRTs7QUFFL0MsV0FBVzs7QUFFWDtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUNBLDZDQUE2Qzs7QUFDN0M7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFD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Y0FBYyxDQUFDOztBQUM3RCxzQ0FBc0MsOEJBQThCLENBQUM7O0FBQ3JFLGtDQUFrQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQzs7QUFDekUscUNBQXFDLGNBQWMsQ0FBQzs7QUFDcEQsaUNBQWlDLHlDQUF5QyxDQUFDOztBQUUzRSw4QkFBOEIsY0FBYyxDQUFDOztBQUM3QywyQkFBMkIsY0FBYyxDQUFDOztBQUMxQyw2QkFBNkIsY0FBYyxDQUFDOztBQUU1QywrREFBK0QsY0FBYyxDQUFDOztBQUM5RSw4QkFBOEIsY0FBYyxDQUFDOztBQUM3Qyw2QkFBNkIsY0FBYyxDQUFDOztBQUU1QywrQkFBK0IsY0FBYyxDQUFDOztBQUM5QyxpQ0FBaUMsY0FBYyxDQUFDOztBQUNoRCwwQkFBMEIsY0FBYyxDQUFDOztBQUN6Qyw0QkFBNEIsbUJBQW1CLEVBQUUsY0FBYyxDQUFDOztBQUNoRSw4QkFBOEIsY0FBYyxDQUFDOztBQUM3QywwQkFBMEIsY0FBYyxDQUFDOztBQUN6QywyQkFBMkIsY0FBYyxDQUFDOztBQUUxQywyQ0FBMkMsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUM7O0FBQy9GLGlEQUFpRCxtQkFBbUIsRUFBRTs7QU54QnRFOztJQUVJLHNDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsb0JBQW9COztBQUV4QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIn5jb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yXCI7XG5AaW1wb3J0IFwifmNvZGVtaXJyb3IvdGhlbWUvbWF0ZXJpYWxcIjtcbkBpbXBvcnQgXCJ+Y29kZW1pcnJvci90aGVtZS9lY2xpcHNlXCI7XG5AaW1wb3J0IFwifmNvZGVtaXJyb3IvdGhlbWUvZHJhY3VsYVwiO1xuQGltcG9ydCBcIn5jb2RlbWlycm9yL3RoZW1lL3R3aWxpZ2h0XCI7XG5AaW1wb3J0IFwifmNvZGVtaXJyb3IvdGhlbWUvYmVzcGluXCI7XG5cbmJvZHl7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvQ0lSQ1VJVE8xLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuXG59XG5cbiIsIi8qIEJBU0lDUyAqL1xuXG4uQ29kZU1pcnJvciB7XG4gIC8qIFNldCBoZWlnaHQsIHdpZHRoLCBib3JkZXJzLCBhbmQgZ2xvYmFsIGZvbnQgcHJvcGVydGllcyBoZXJlICovXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi8qIFBBRERJTkcgKi9cblxuLkNvZGVNaXJyb3ItbGluZXMge1xuICBwYWRkaW5nOiA0cHggMDsgLyogVmVydGljYWwgcGFkZGluZyBhcm91bmQgY29udGVudCAqL1xufVxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZSxcbi5Db2RlTWlycm9yIHByZS5Db2RlTWlycm9yLWxpbmUtbGlrZSB7XG4gIHBhZGRpbmc6IDAgNHB4OyAvKiBIb3Jpem9udGFsIHBhZGRpbmcgb2YgY29udGVudCAqL1xufVxuXG4uQ29kZU1pcnJvci1zY3JvbGxiYXItZmlsbGVyLCAuQ29kZU1pcnJvci1ndXR0ZXItZmlsbGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIFRoZSBsaXR0bGUgc3F1YXJlIGJldHdlZW4gSCBhbmQgViBzY3JvbGxiYXJzICovXG59XG5cbi8qIEdVVFRFUiAqL1xuXG4uQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5Db2RlTWlycm9yLWxpbmVudW1iZXJzIHt9XG4uQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgcGFkZGluZzogMCAzcHggMCA1cHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjOTk5O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXIgeyBjb2xvcjogYmxhY2s7IH1cbi5Db2RlTWlycm9yLWd1dHRlcm1hcmtlci1zdWJ0bGUgeyBjb2xvcjogIzk5OTsgfVxuXG4vKiBDVVJTT1IgKi9cblxuLkNvZGVNaXJyb3ItY3Vyc29yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB3aWR0aDogMDtcbn1cbi8qIFNob3duIHdoZW4gbW92aW5nIGluIGJpLWRpcmVjdGlvbmFsIHRleHQgKi9cbi5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLXNlY29uZGFyeWN1cnNvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgc2lsdmVyO1xufVxuLmNtLWZhdC1jdXJzb3IgLkNvZGVNaXJyb3ItY3Vyc29yIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjN2U3O1xufVxuLmNtLWZhdC1jdXJzb3IgZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XG4gIHotaW5kZXg6IDE7XG59XG4uY20tZmF0LWN1cnNvci1tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjU1LCAyMCwgMC41KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG59XG4uY20tYW5pbWF0ZS1mYXQtY3Vyc29yIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTc7XG59XG5ALW1vei1rZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7fVxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAxMDAlIHt9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7fVxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAxMDAlIHt9XG59XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge31cbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgMTAwJSB7fVxufVxuXG4vKiBDYW4gc3R5bGUgY3Vyc29yIGRpZmZlcmVudCBpbiBvdmVyd3JpdGUgKG5vbi1pbnNlcnQpIG1vZGUgKi9cbi5Db2RlTWlycm9yLW92ZXJ3cml0ZSAuQ29kZU1pcnJvci1jdXJzb3Ige31cblxuLmNtLXRhYiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyB9XG5cbi5Db2RlTWlycm9yLXJ1bGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogLTUwcHg7IGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5Db2RlTWlycm9yLXJ1bGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4vKiBERUZBVUxUIFRIRU1FICovXG5cbi5jbS1zLWRlZmF1bHQgLmNtLWhlYWRlciB7Y29sb3I6IGJsdWU7fVxuLmNtLXMtZGVmYXVsdCAuY20tcXVvdGUge2NvbG9yOiAjMDkwO31cbi5jbS1uZWdhdGl2ZSB7Y29sb3I6ICNkNDQ7fVxuLmNtLXBvc2l0aXZlIHtjb2xvcjogIzI5Mjt9XG4uY20taGVhZGVyLCAuY20tc3Ryb25nIHtmb250LXdlaWdodDogYm9sZDt9XG4uY20tZW0ge2ZvbnQtc3R5bGU6IGl0YWxpYzt9XG4uY20tbGluayB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxuLmNtLXN0cmlrZXRocm91Z2gge3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO31cblxuLmNtLXMtZGVmYXVsdCAuY20ta2V5d29yZCB7Y29sb3I6ICM3MDg7fVxuLmNtLXMtZGVmYXVsdCAuY20tYXRvbSB7Y29sb3I6ICMyMTk7fVxuLmNtLXMtZGVmYXVsdCAuY20tbnVtYmVyIHtjb2xvcjogIzE2NDt9XG4uY20tcy1kZWZhdWx0IC5jbS1kZWYge2NvbG9yOiAjMDBmO31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLFxuLmNtLXMtZGVmYXVsdCAuY20tcHVuY3R1YXRpb24sXG4uY20tcy1kZWZhdWx0IC5jbS1wcm9wZXJ0eSxcbi5jbS1zLWRlZmF1bHQgLmNtLW9wZXJhdG9yIHt9XG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZS0yIHtjb2xvcjogIzA1YTt9XG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZS0zLCAuY20tcy1kZWZhdWx0IC5jbS10eXBlIHtjb2xvcjogIzA4NTt9XG4uY20tcy1kZWZhdWx0IC5jbS1jb21tZW50IHtjb2xvcjogI2E1MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1zdHJpbmcge2NvbG9yOiAjYTExO31cbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZy0yIHtjb2xvcjogI2Y1MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1tZXRhIHtjb2xvcjogIzU1NTt9XG4uY20tcy1kZWZhdWx0IC5jbS1xdWFsaWZpZXIge2NvbG9yOiAjNTU1O31cbi5jbS1zLWRlZmF1bHQgLmNtLWJ1aWx0aW4ge2NvbG9yOiAjMzBhO31cbi5jbS1zLWRlZmF1bHQgLmNtLWJyYWNrZXQge2NvbG9yOiAjOTk3O31cbi5jbS1zLWRlZmF1bHQgLmNtLXRhZyB7Y29sb3I6ICMxNzA7fVxuLmNtLXMtZGVmYXVsdCAuY20tYXR0cmlidXRlIHtjb2xvcjogIzAwYzt9XG4uY20tcy1kZWZhdWx0IC5jbS1ociB7Y29sb3I6ICM5OTk7fVxuLmNtLXMtZGVmYXVsdCAuY20tbGluayB7Y29sb3I6ICMwMGM7fVxuXG4uY20tcy1kZWZhdWx0IC5jbS1lcnJvciB7Y29sb3I6ICNmMDA7fVxuLmNtLWludmFsaWRjaGFyIHtjb2xvcjogI2YwMDt9XG5cbi5Db2RlTWlycm9yLWNvbXBvc2luZyB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZDsgfVxuXG4vKiBEZWZhdWx0IHN0eWxlcyBmb3IgY29tbW9uIGFkZG9ucyAqL1xuXG5kaXYuQ29kZU1pcnJvciBzcGFuLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHtjb2xvcjogIzBiMDt9XG5kaXYuQ29kZU1pcnJvciBzcGFuLkNvZGVNaXJyb3Itbm9ubWF0Y2hpbmdicmFja2V0IHtjb2xvcjogI2EyMjt9XG4uQ29kZU1pcnJvci1tYXRjaGluZ3RhZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTAsIDAsIC4zKTsgfVxuLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHtiYWNrZ3JvdW5kOiAjZThmMmZmO31cblxuLyogU1RPUCAqL1xuXG4vKiBUaGUgcmVzdCBvZiB0aGlzIGZpbGUgY29udGFpbnMgc3R5bGVzIHJlbGF0ZWQgdG8gdGhlIG1lY2hhbmljcyBvZlxuICAgdGhlIGVkaXRvci4gWW91IHByb2JhYmx5IHNob3VsZG4ndCB0b3VjaCB0aGVtLiAqL1xuXG4uQ29kZU1pcnJvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5Db2RlTWlycm9yLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDsgLyogVGhpbmdzIHdpbGwgYnJlYWsgaWYgdGhpcyBpcyBvdmVycmlkZGVuICovXG4gIC8qIDMwcHggaXMgdGhlIG1hZ2ljIG1hcmdpbiB1c2VkIHRvIGhpZGUgdGhlIGVsZW1lbnQncyByZWFsIHNjcm9sbGJhcnMgKi9cbiAgLyogU2VlIG92ZXJmbG93OiBoaWRkZW4gaW4gLkNvZGVNaXJyb3IgKi9cbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7IG1hcmdpbi1yaWdodDogLTMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7IC8qIFByZXZlbnQgZHJhZ2dpbmcgZnJvbSBoaWdobGlnaHRpbmcgdGhlIGVsZW1lbnQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkNvZGVNaXJyb3Itc2l6ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yaWdodDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLyogVGhlIGZha2UsIHZpc2libGUgc2Nyb2xsYmFycy4gVXNlZCB0byBmb3JjZSByZWRyYXcgZHVyaW5nIHNjcm9sbGluZ1xuICAgYmVmb3JlIGFjdHVhbCBzY3JvbGxpbmcgaGFwcGVucywgdGh1cyBwcmV2ZW50aW5nIHNoYWtpbmcgYW5kXG4gICBmbGlja2VyaW5nIGFydGlmYWN0cy4gKi9cbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIsIC5Db2RlTWlycm9yLWhzY3JvbGxiYXIsIC5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uQ29kZU1pcnJvci12c2Nyb2xsYmFyIHtcbiAgcmlnaHQ6IDA7IHRvcDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uQ29kZU1pcnJvci1oc2Nyb2xsYmFyIHtcbiAgYm90dG9tOiAwOyBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIge1xuICByaWdodDogMDsgYm90dG9tOiAwO1xufVxuLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIGxlZnQ6IDA7IGJvdHRvbTogMDtcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAzO1xufVxuLkNvZGVNaXJyb3ItZ3V0dGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuLkNvZGVNaXJyb3ItZ3V0dGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBib3R0b206IDA7XG4gIHotaW5kZXg6IDQ7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItZWx0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHotaW5kZXg6IDQ7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciA6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH1cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCB9XG5cbi5Db2RlTWlycm9yLWxpbmVzIHtcbiAgY3Vyc29yOiB0ZXh0O1xuICBtaW4taGVpZ2h0OiAxcHg7IC8qIHByZXZlbnRzIGNvbGxhcHNpbmcgYmVmb3JlIGZpcnN0IGRyYXcgKi9cbn1cbi5Db2RlTWlycm9yIHByZS5Db2RlTWlycm9yLWxpbmUsXG4uQ29kZU1pcnJvciBwcmUuQ29kZU1pcnJvci1saW5lLWxpa2Uge1xuICAvKiBSZXNldCBzb21lIHN0eWxlcyB0aGF0IHRoZSByZXN0IG9mIHRoZSBwYWdlIG1pZ2h0IGhhdmUgc2V0ICovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwOyBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtZm9udC12YXJpYW50LWxpZ2F0dXJlczogY29udGV4dHVhbDtcbiAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogY29udGV4dHVhbDtcbn1cbi5Db2RlTWlycm9yLXdyYXAgcHJlLkNvZGVNaXJyb3ItbGluZSxcbi5Db2RlTWlycm9yLXdyYXAgcHJlLkNvZGVNaXJyb3ItbGluZS1saWtlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbn1cblxuLkNvZGVNaXJyb3ItbGluZWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IDA7IGJvdHRvbTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuLkNvZGVNaXJyb3ItbGluZXdpZGdldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMC4xcHg7IC8qIEZvcmNlIHdpZGdldCBtYXJnaW5zIHRvIHN0YXkgaW5zaWRlIG9mIHRoZSBjb250YWluZXIgKi9cbn1cblxuLkNvZGVNaXJyb3Itd2lkZ2V0IHt9XG5cbi5Db2RlTWlycm9yLXJ0bCBwcmUgeyBkaXJlY3Rpb246IHJ0bDsgfVxuXG4uQ29kZU1pcnJvci1jb2RlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogRm9yY2UgY29udGVudC1ib3ggc2l6aW5nIGZvciB0aGUgZWxlbWVudHMgd2hlcmUgd2UgZXhwZWN0IGl0ICovXG4uQ29kZU1pcnJvci1zY3JvbGwsXG4uQ29kZU1pcnJvci1zaXplcixcbi5Db2RlTWlycm9yLWd1dHRlcixcbi5Db2RlTWlycm9yLWd1dHRlcnMsXG4uQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5Db2RlTWlycm9yLW1lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLkNvZGVNaXJyb3ItY3Vyc29yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5Db2RlTWlycm9yLW1lYXN1cmUgcHJlIHsgcG9zaXRpb246IHN0YXRpYzsgfVxuXG5kaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5kaXYuQ29kZU1pcnJvci1kcmFnY3Vyc29ycyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5Db2RlTWlycm9yLWZvY3VzZWQgZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2Q5ZDlkOTsgfVxuLkNvZGVNaXJyb3ItZm9jdXNlZCAuQ29kZU1pcnJvci1zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNkN2Q0ZjA7IH1cbi5Db2RlTWlycm9yLWNyb3NzaGFpciB7IGN1cnNvcjogY3Jvc3NoYWlyOyB9XG4uQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxuLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjotbW96LXNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6ICNkN2Q0ZjA7IH1cblxuLmNtLXNlYXJjaGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIC40KTtcbn1cblxuLyogVXNlZCB0byBmb3JjZSBhIGJvcmRlciBtb2RlbCBmb3IgYSBub2RlICovXG4uY20tZm9yY2UtYm9yZGVyIHsgcGFkZGluZy1yaWdodDogLjFweDsgfVxuXG5AbWVkaWEgcHJpbnQge1xuICAvKiBIaWRlIHRoZSBjdXJzb3Igd2hlbiBwcmludGluZyAqL1xuICAuQ29kZU1pcnJvciBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuLyogU2VlIGlzc3VlICMyOTAxICovXG4uY20tdGFiLXdyYXAtaGFjazphZnRlciB7IGNvbnRlbnQ6ICcnOyB9XG5cbi8qIEhlbHAgdXNlcnMgdXNlIG1hcmtzZWxlY3Rpb24gdG8gc2FmZWx5IHN0eWxlIHRleHQgYmFja2dyb3VuZCAqL1xuc3Bhbi5Db2RlTWlycm9yLXNlbGVjdGVkdGV4dCB7IGJhY2tncm91bmQ6IG5vbmU7IH1cbiIsIi8qXG4gIE5hbWU6ICAgICAgIG1hdGVyaWFsXG4gIEF1dGhvcjogICAgIE1hdHRpYSBBc3RvcmlubyAoaHR0cDovL2dpdGh1Yi5jb20vZXF1aW51c29jaW8pXG4gIFdlYnNpdGU6ICAgIGh0dHBzOi8vbWF0ZXJpYWwtdGhlbWUuc2l0ZS9cbiovXG5cbi5jbS1zLW1hdGVyaWFsLkNvZGVNaXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xuICBjb2xvcjogI0VFRkZGRjtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJhY2tncm91bmQ6ICMyNjMyMzg7XG4gIGNvbG9yOiAjNTQ2RTdBO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlcixcbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlci1zdWJ0bGUsXG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgY29sb3I6ICM1NDZFN0E7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWN1cnNvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0ZGQ0MwMDtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMjAzLCAxOTYsIDAuMik7XG59XG5cbi5jbS1zLW1hdGVyaWFsLkNvZGVNaXJyb3ItZm9jdXNlZCBkaXYuQ29kZU1pcnJvci1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAyMDMsIDE5NiwgMC4yKTtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbGluZTo6c2VsZWN0aW9uLFxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbGluZT5zcGFuOjpzZWxlY3Rpb24sXG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lPnNwYW4+c3Bhbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDIwMywgMTk2LCAwLjIpO1xufVxuXG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbixcbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmU+c3Bhbjo6LW1vei1zZWxlY3Rpb24sXG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lPnNwYW4+c3Bhbjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMjAzLCAxOTYsIDAuMik7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLWtleXdvcmQge1xuICBjb2xvcjogI0M3OTJFQTtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLW9wZXJhdG9yIHtcbiAgY29sb3I6ICM4OURERkY7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS12YXJpYWJsZS0yIHtcbiAgY29sb3I6ICNFRUZGRkY7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS12YXJpYWJsZS0zLFxuLmNtLXMtbWF0ZXJpYWwgLmNtLXR5cGUge1xuICBjb2xvcjogI2YwNzE3ODtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLWJ1aWx0aW4ge1xuICBjb2xvcjogI0ZGQ0I2Qjtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLWF0b20ge1xuICBjb2xvcjogI0Y3OEM2Qztcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLW51bWJlciB7XG4gIGNvbG9yOiAjRkY1MzcwO1xufVxuXG4uY20tcy1tYXRlcmlhbCAuY20tZGVmIHtcbiAgY29sb3I6ICM4MkFBRkY7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS1zdHJpbmcge1xuICBjb2xvcjogI0MzRTg4RDtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLXN0cmluZy0yIHtcbiAgY29sb3I6ICNmMDcxNzg7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS1jb21tZW50IHtcbiAgY29sb3I6ICM1NDZFN0E7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS12YXJpYWJsZSB7XG4gIGNvbG9yOiAjZjA3MTc4O1xufVxuXG4uY20tcy1tYXRlcmlhbCAuY20tdGFnIHtcbiAgY29sb3I6ICNGRjUzNzA7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS1tZXRhIHtcbiAgY29sb3I6ICNGRkNCNkI7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS1hdHRyaWJ1dGUge1xuICBjb2xvcjogI0M3OTJFQTtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLXByb3BlcnR5IHtcbiAgY29sb3I6ICNDNzkyRUE7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5jbS1xdWFsaWZpZXIge1xuICBjb2xvcjogI0RFQ0I2Qjtcbn1cblxuLmNtLXMtbWF0ZXJpYWwgLmNtLXZhcmlhYmxlLTMsXG4uY20tcy1tYXRlcmlhbCAuY20tdHlwZSB7XG4gIGNvbG9yOiAjREVDQjZCO1xufVxuXG5cbi5jbS1zLW1hdGVyaWFsIC5jbS1lcnJvciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjUzNzA7XG59XG5cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLW1hdGNoaW5nYnJhY2tldCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iLCIuY20tcy1lY2xpcHNlIHNwYW4uY20tbWV0YSB7IGNvbG9yOiAjRkYxNzE3OyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20ta2V5d29yZCB7IGxpbmUtaGVpZ2h0OiAxZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzdGMDA1NTsgfVxuLmNtLXMtZWNsaXBzZSBzcGFuLmNtLWF0b20geyBjb2xvcjogIzIxOTsgfVxuLmNtLXMtZWNsaXBzZSBzcGFuLmNtLW51bWJlciB7IGNvbG9yOiAjMTY0OyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20tZGVmIHsgY29sb3I6ICMwMGY7IH1cbi5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS12YXJpYWJsZSB7IGNvbG9yOiBibGFjazsgfVxuLmNtLXMtZWNsaXBzZSBzcGFuLmNtLXZhcmlhYmxlLTIgeyBjb2xvcjogIzAwMDBDMDsgfVxuLmNtLXMtZWNsaXBzZSBzcGFuLmNtLXZhcmlhYmxlLTMsIC5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS10eXBlIHsgY29sb3I6ICMwMDAwQzA7IH1cbi5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS1wcm9wZXJ0eSB7IGNvbG9yOiBibGFjazsgfVxuLmNtLXMtZWNsaXBzZSBzcGFuLmNtLW9wZXJhdG9yIHsgY29sb3I6IGJsYWNrOyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20tY29tbWVudCB7IGNvbG9yOiAjM0Y3RjVGOyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20tc3RyaW5nIHsgY29sb3I6ICMyQTAwRkY7IH1cbi5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS1zdHJpbmctMiB7IGNvbG9yOiAjZjUwOyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20tcXVhbGlmaWVyIHsgY29sb3I6ICM1NTU7IH1cbi5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS1idWlsdGluIHsgY29sb3I6ICMzMGE7IH1cbi5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS1icmFja2V0IHsgY29sb3I6ICNjYzc7IH1cbi5jbS1zLWVjbGlwc2Ugc3Bhbi5jbS10YWcgeyBjb2xvcjogIzE3MDsgfVxuLmNtLXMtZWNsaXBzZSBzcGFuLmNtLWF0dHJpYnV0ZSB7IGNvbG9yOiAjMDBjOyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20tbGluayB7IGNvbG9yOiAjMjE5OyB9XG4uY20tcy1lY2xpcHNlIHNwYW4uY20tZXJyb3IgeyBjb2xvcjogI2YwMDsgfVxuXG4uY20tcy1lY2xpcHNlIC5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7IGJhY2tncm91bmQ6ICNlOGYyZmY7IH1cbi5jbS1zLWVjbGlwc2UgLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHsgb3V0bGluZToxcHggc29saWQgZ3JleTsgY29sb3I6YmxhY2sgIWltcG9ydGFudDsgfVxuIiwiLypcblxuICAgIE5hbWU6ICAgICAgIGRyYWN1bGFcbiAgICBBdXRob3I6ICAgICBNaWNoYWVsIEthbWluc2t5IChodHRwOi8vZ2l0aHViLmNvbS9ta2FtaW5za3kxMSlcblxuICAgIE9yaWdpbmFsIGRyYWN1bGEgY29sb3Igc2NoZW1lIGJ5IFplbm8gUm9jaGEgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vcm9jaGEvZHJhY3VsYS10aGVtZSlcblxuKi9cblxuXG4uY20tcy1kcmFjdWxhLkNvZGVNaXJyb3IsIC5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJhMzYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmOGY4ZjIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1ndXR0ZXJzIHsgY29sb3I6ICMyODJhMzY7IH1cbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItY3Vyc29yIHsgYm9yZGVyLWxlZnQ6IHNvbGlkIHRoaW4gI2Y4ZjhmMDsgfVxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHsgY29sb3I6ICM2RDhBODg7IH1cbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApOyB9XG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWxpbmU6OnNlbGVjdGlvbiwgLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6c2VsZWN0aW9uLCAuY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTsgfVxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7IH1cbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1jb21tZW50IHsgY29sb3I6ICM2MjcyYTQ7IH1cbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1zdHJpbmcsIC5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1zdHJpbmctMiB7IGNvbG9yOiAjZjFmYThjOyB9XG4uY20tcy1kcmFjdWxhIHNwYW4uY20tbnVtYmVyIHsgY29sb3I6ICNiZDkzZjk7IH1cbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS12YXJpYWJsZSB7IGNvbG9yOiAjNTBmYTdiOyB9XG4uY20tcy1kcmFjdWxhIHNwYW4uY20tdmFyaWFibGUtMiB7IGNvbG9yOiB3aGl0ZTsgfVxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLWRlZiB7IGNvbG9yOiAjNTBmYTdiOyB9XG4uY20tcy1kcmFjdWxhIHNwYW4uY20tb3BlcmF0b3IgeyBjb2xvcjogI2ZmNzljNjsgfVxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLWtleXdvcmQgeyBjb2xvcjogI2ZmNzljNjsgfVxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLWF0b20geyBjb2xvcjogI2JkOTNmOTsgfVxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLW1ldGEgeyBjb2xvcjogI2Y4ZjhmMjsgfVxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLXRhZyB7IGNvbG9yOiAjZmY3OWM2OyB9XG4uY20tcy1kcmFjdWxhIHNwYW4uY20tYXR0cmlidXRlIHsgY29sb3I6ICM1MGZhN2I7IH1cbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1xdWFsaWZpZXIgeyBjb2xvcjogIzUwZmE3YjsgfVxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLXByb3BlcnR5IHsgY29sb3I6ICM2NmQ5ZWY7IH1cbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1idWlsdGluIHsgY29sb3I6ICM1MGZhN2I7IH1cbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS12YXJpYWJsZS0zLCAuY20tcy1kcmFjdWxhIHNwYW4uY20tdHlwZSB7IGNvbG9yOiAjZmZiODZjOyB9XG5cbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyB9XG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLW1hdGNoaW5nYnJhY2tldCB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuIiwiLmNtLXMtdHdpbGlnaHQuQ29kZU1pcnJvciB7IGJhY2tncm91bmQ6ICMxNDE0MTQ7IGNvbG9yOiAjZjdmN2Y3OyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IGRpdi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogIzMyMzIzMjsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjk5KTsgfVxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgMC45OSk7IH1cblxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItZ3V0dGVycyB7IGJhY2tncm91bmQ6ICMyMjI7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYWE7IH1cbi5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciB7IGNvbG9yOiB3aGl0ZTsgfVxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjYWFhOyB9XG4uY20tcy10d2lsaWdodCAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHsgY29sb3I6ICNhYWE7IH1cbi5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWN1cnNvciB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7IH1cblxuLmNtLXMtdHdpbGlnaHQgLmNtLWtleXdvcmQgeyBjb2xvcjogI2Y5ZWU5ODsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuY20tYXRvbSB7IGNvbG9yOiAjRkMwOyB9XG4uY20tcy10d2lsaWdodCAuY20tbnVtYmVyIHsgY29sb3I6ICAjY2E3ODQxOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1kZWYgeyBjb2xvcjogIzhEQTZDRTsgfVxuLmNtLXMtdHdpbGlnaHQgc3Bhbi5jbS12YXJpYWJsZS0yLCAuY20tcy10d2lsaWdodCBzcGFuLmNtLXRhZyB7IGNvbG9yOiAjNjA3MzkyOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IHNwYW4uY20tdmFyaWFibGUtMywgLmNtLXMtdHdpbGlnaHQgc3Bhbi5jbS1kZWYsIC5jbS1zLXR3aWxpZ2h0IHNwYW4uY20tdHlwZSB7IGNvbG9yOiAjNjA3MzkyOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1vcGVyYXRvciB7IGNvbG9yOiAjY2RhODY5OyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1jb21tZW50IHsgY29sb3I6Izc3NzsgZm9udC1zdHlsZTppdGFsaWM7IGZvbnQtd2VpZ2h0Om5vcm1hbDsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuY20tc3RyaW5nIHsgY29sb3I6IzhmOWQ2YTsgZm9udC1zdHlsZTppdGFsaWM7IH0gLyoqL1xuLmNtLXMtdHdpbGlnaHQgLmNtLXN0cmluZy0yIHsgY29sb3I6I2JkNmIxODsgfSAvKj8qL1xuLmNtLXMtdHdpbGlnaHQgLmNtLW1ldGEgeyBiYWNrZ3JvdW5kLWNvbG9yOiMxNDE0MTQ7IGNvbG9yOiNmN2Y3Zjc7IH0gLyo/Ki9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1idWlsdGluIHsgY29sb3I6ICNjZGE4Njk7IH0gLyo/Ki9cbi5jbS1zLXR3aWxpZ2h0IC5jbS10YWcgeyBjb2xvcjogIzk5NzY0MzsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuY20tYXR0cmlidXRlIHsgY29sb3I6ICNkNmJiNmQ7IH0gLyo/Ki9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1oZWFkZXIgeyBjb2xvcjogI0ZGNjQwMDsgfVxuLmNtLXMtdHdpbGlnaHQgLmNtLWhyIHsgY29sb3I6ICNBRUFFQUU7IH1cbi5jbS1zLXR3aWxpZ2h0IC5jbS1saW5rIHsgY29sb3I6I2FkOTM2MTsgZm9udC1zdHlsZTppdGFsaWM7IHRleHQtZGVjb3JhdGlvbjpub25lOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1lcnJvciB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7IH1cblxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHsgYmFja2dyb3VuZDogIzI3MjgyRTsgfVxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHsgb3V0bGluZToxcHggc29saWQgZ3JleTsgY29sb3I6d2hpdGUgIWltcG9ydGFudDsgfVxuIiwiLypcblxuICAgIE5hbWU6ICAgICAgIEJlc3BpblxuICAgIEF1dGhvcjogICAgIE1vemlsbGEgLyBKYW4gVC4gU290dFxuXG4gICAgQ29kZU1pcnJvciB0ZW1wbGF0ZSBieSBKYW4gVC4gU290dCAoaHR0cHM6Ly9naXRodWIuY29tL2lkbGViZXJnL2Jhc2UxNi1jb2RlbWlycm9yKVxuICAgIE9yaWdpbmFsIEJhc2UxNiBjb2xvciBzY2hlbWUgYnkgQ2hyaXMgS2VtcHNvbiAoaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi9iYXNlMTYpXG5cbiovXG5cbi5jbS1zLWJlc3Bpbi5Db2RlTWlycm9yIHtiYWNrZ3JvdW5kOiAjMjgyMTFjOyBjb2xvcjogIzlkOWI5Nzt9XG4uY20tcy1iZXNwaW4gZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQge2JhY2tncm91bmQ6ICMzNjMxMmUgIWltcG9ydGFudDt9XG4uY20tcy1iZXNwaW4gLkNvZGVNaXJyb3ItZ3V0dGVycyB7YmFja2dyb3VuZDogIzI4MjExYzsgYm9yZGVyLXJpZ2h0OiAwcHg7fVxuLmNtLXMtYmVzcGluIC5Db2RlTWlycm9yLWxpbmVudW1iZXIge2NvbG9yOiAjNjY2NjY2O31cbi5jbS1zLWJlc3BpbiAuQ29kZU1pcnJvci1jdXJzb3Ige2JvcmRlci1sZWZ0OiAxcHggc29saWQgIzc5Nzk3NyAhaW1wb3J0YW50O31cblxuLmNtLXMtYmVzcGluIHNwYW4uY20tY29tbWVudCB7Y29sb3I6ICM5MzcxMjE7fVxuLmNtLXMtYmVzcGluIHNwYW4uY20tYXRvbSB7Y29sb3I6ICM5Yjg1OWQ7fVxuLmNtLXMtYmVzcGluIHNwYW4uY20tbnVtYmVyIHtjb2xvcjogIzliODU5ZDt9XG5cbi5jbS1zLWJlc3BpbiBzcGFuLmNtLXByb3BlcnR5LCAuY20tcy1iZXNwaW4gc3Bhbi5jbS1hdHRyaWJ1dGUge2NvbG9yOiAjNTRiZTBkO31cbi5jbS1zLWJlc3BpbiBzcGFuLmNtLWtleXdvcmQge2NvbG9yOiAjY2Y2YTRjO31cbi5jbS1zLWJlc3BpbiBzcGFuLmNtLXN0cmluZyB7Y29sb3I6ICNmOWVlOTg7fVxuXG4uY20tcy1iZXNwaW4gc3Bhbi5jbS12YXJpYWJsZSB7Y29sb3I6ICM1NGJlMGQ7fVxuLmNtLXMtYmVzcGluIHNwYW4uY20tdmFyaWFibGUtMiB7Y29sb3I6ICM1ZWE2ZWE7fVxuLmNtLXMtYmVzcGluIHNwYW4uY20tZGVmIHtjb2xvcjogI2NmN2QzNDt9XG4uY20tcy1iZXNwaW4gc3Bhbi5jbS1lcnJvciB7YmFja2dyb3VuZDogI2NmNmE0YzsgY29sb3I6ICM3OTc5Nzc7fVxuLmNtLXMtYmVzcGluIHNwYW4uY20tYnJhY2tldCB7Y29sb3I6ICM5ZDliOTc7fVxuLmNtLXMtYmVzcGluIHNwYW4uY20tdGFnIHtjb2xvcjogI2NmNmE0Yzt9XG4uY20tcy1iZXNwaW4gc3Bhbi5jbS1saW5rIHtjb2xvcjogIzliODU5ZDt9XG5cbi5jbS1zLWJlc3BpbiAuQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7fVxuLmNtLXMtYmVzcGluIC5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7IGJhY2tncm91bmQ6ICM0MDQwNDA7IH1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pablo\Documents\GitHub\COMPI1_PRACTICA2\CompiPr2\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map