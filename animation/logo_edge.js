/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'face',
            type:'image',
            tag:'img',
            rect:['0px','0px','150px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"symbole-eyeless.svg",'0px','0px']
         },
         {
            id:'left_socket',
            type:'ellipse',
            rect:['44px','67px','24px','24px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'right_socket',
            type:'ellipse',
            rect:['84px','67px','24px','24px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'left_eyeball',
            type:'ellipse',
            rect:['54px','77px','4px','4px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(233,233,233,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'right_eyeball',
            type:'ellipse',
            rect:['54px','77px','4px','4px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(233,233,233,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_right_eyeball}": [
            ["color", "background-color", 'rgba(233,233,233,1.00)'],
            ["style", "top", '77px'],
            ["style", "height", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '94px'],
            ["style", "width", '4px']
         ],
         "${_left_socket}": [
            ["style", "top", '67.05px'],
            ["style", "height", '23.7109375px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '44.02px'],
            ["style", "width", '23.7109375px']
         ],
         "${_left_eyeball}": [
            ["color", "background-color", 'rgba(233,233,233,1.00)'],
            ["style", "top", '76.67px'],
            ["style", "height", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '53.97px'],
            ["style", "width", '4px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '150px'],
            ["style", "height", '200px'],
            ["style", "overflow", 'hidden']
         ],
         "${_right_socket}": [
            ["style", "top", '67px'],
            ["style", "height", '23.7109375px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '84.39px'],
            ["style", "width", '23.7109375px']
         ],
         "${_face}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4321.03515625,
         autoPlay: true,
         timeline: [
            { id: "eid19", tween: [ "style", "${_right_eyeball}", "top", '77px', { fromValue: '77px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "style", "${_right_socket}", "left", '84px', { fromValue: '84.39px'}], position: 0, duration: 500 },
            { id: "eid44", tween: [ "style", "${_right_socket}", "left", '84px', { fromValue: '84.39px'}], position: 1887, duration: 250 },
            { id: "eid50", tween: [ "style", "${_right_socket}", "left", '84px', { fromValue: '84.39px'}], position: 2300, duration: 250 },
            { id: "eid54", tween: [ "style", "${_right_socket}", "left", '84px', { fromValue: '84.39px'}], position: 4071, duration: 250 },
            { id: "eid2", tween: [ "style", "${_left_socket}", "top", '78px', { fromValue: '67.05px'}], position: 0, duration: 250 },
            { id: "eid6", tween: [ "style", "${_left_socket}", "top", '67px', { fromValue: '78px'}], position: 250, duration: 250 },
            { id: "eid32", tween: [ "style", "${_left_socket}", "top", '78px', { fromValue: '67.05px'}], position: 1887, duration: 132 },
            { id: "eid33", tween: [ "style", "${_left_socket}", "top", '67px', { fromValue: '78px'}], position: 2019, duration: 118 },
            { id: "eid36", tween: [ "style", "${_left_socket}", "top", '78px', { fromValue: '67.05px'}], position: 2300, duration: 132 },
            { id: "eid37", tween: [ "style", "${_left_socket}", "top", '67px', { fromValue: '78px'}], position: 2432, duration: 118 },
            { id: "eid57", tween: [ "style", "${_left_socket}", "top", '78px', { fromValue: '67.05px'}], position: 4071, duration: 132 },
            { id: "eid58", tween: [ "style", "${_left_socket}", "top", '67px', { fromValue: '78px'}], position: 4203, duration: 118 },
            { id: "eid18", tween: [ "style", "${_right_eyeball}", "left", '94px', { fromValue: '94px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid3", tween: [ "style", "${_right_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 0, duration: 250 },
            { id: "eid13", tween: [ "style", "${_right_socket}", "height", '24px', { fromValue: '1px'}], position: 250, duration: 250 },
            { id: "eid42", tween: [ "style", "${_right_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 1887, duration: 132 },
            { id: "eid43", tween: [ "style", "${_right_socket}", "height", '24px', { fromValue: '1px'}], position: 2019, duration: 118 },
            { id: "eid46", tween: [ "style", "${_right_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 2300, duration: 132 },
            { id: "eid47", tween: [ "style", "${_right_socket}", "height", '24px', { fromValue: '1px'}], position: 2432, duration: 118 },
            { id: "eid55", tween: [ "style", "${_right_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 4071, duration: 132 },
            { id: "eid56", tween: [ "style", "${_right_socket}", "height", '24px', { fromValue: '1px'}], position: 4203, duration: 118 },
            { id: "eid4", tween: [ "style", "${_right_socket}", "top", '78px', { fromValue: '67px'}], position: 0, duration: 250 },
            { id: "eid11", tween: [ "style", "${_right_socket}", "top", '67px', { fromValue: '78px'}], position: 250, duration: 250 },
            { id: "eid40", tween: [ "style", "${_right_socket}", "top", '78px', { fromValue: '67px'}], position: 1887, duration: 132 },
            { id: "eid41", tween: [ "style", "${_right_socket}", "top", '67px', { fromValue: '78px'}], position: 2019, duration: 118 },
            { id: "eid48", tween: [ "style", "${_right_socket}", "top", '78px', { fromValue: '67px'}], position: 2300, duration: 132 },
            { id: "eid49", tween: [ "style", "${_right_socket}", "top", '67px', { fromValue: '78px'}], position: 2432, duration: 118 },
            { id: "eid52", tween: [ "style", "${_right_socket}", "top", '78px', { fromValue: '67px'}], position: 4071, duration: 132 },
            { id: "eid53", tween: [ "style", "${_right_socket}", "top", '67px', { fromValue: '78px'}], position: 4203, duration: 118 },
            { id: "eid26", tween: [ "style", "${_left_eyeball}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1", tween: [ "style", "${_left_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 0, duration: 250 },
            { id: "eid5", tween: [ "style", "${_left_socket}", "height", '24px', { fromValue: '1px'}], position: 250, duration: 250 },
            { id: "eid34", tween: [ "style", "${_left_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 1887, duration: 132 },
            { id: "eid35", tween: [ "style", "${_left_socket}", "height", '24px', { fromValue: '1px'}], position: 2019, duration: 118 },
            { id: "eid38", tween: [ "style", "${_left_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 2300, duration: 132 },
            { id: "eid39", tween: [ "style", "${_left_socket}", "height", '24px', { fromValue: '1px'}], position: 2432, duration: 118 },
            { id: "eid59", tween: [ "style", "${_left_socket}", "height", '1px', { fromValue: '23.7109375px'}], position: 4071, duration: 132 },
            { id: "eid60", tween: [ "style", "${_left_socket}", "height", '24px', { fromValue: '1px'}], position: 4203, duration: 118 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "logo");
