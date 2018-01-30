// Note: Variables created without the keyword var, are always global, even if
// they are created inside a function.

// Flavour 1 - closure ////////////////////////////////////////
// In JavaScript, all functions have access to the scope "above"
// them - so Flavour 1 works without the use of 'this'.
// This is a closure - a function that has access to the parent scope, even
// after the parent function has closed.
// See here: https://www.w3schools.com/js/js_function_closures.asp
//
// function Plane() {
//   var _Flying = true;
//
//   return {
//     land: function() { _Flying = false; },
//     isFlying: function() { return _Flying; }
//   }
// }

// Flavour 2 ////////////////////////////////////////////////
// function Plane() {
//   this._Flying = true;
//
//   this.land = function() { this._Flying = false; },
//   this.isFlying = function() { return this._Flying; }
// }

// Flavour 3 - prototypes ///////////////////////////////////
function Plane() {
  this._Flying = true;
}

 Plane.prototype = {
    land: function() { this._Flying = false; },
    isFlying: function() { return this._Flying; }
 }
