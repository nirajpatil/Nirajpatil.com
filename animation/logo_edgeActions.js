/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_right_socket}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left_socket}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "logo");