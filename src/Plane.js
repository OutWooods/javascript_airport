function Plane() {
  this._Flying = true;

  return {
    land: function() { this._Flying = false; },
    isFlying: function() { return this._Flying; }
  }
}

// // Plane.prototype = {
// //    land: function() { this._Flying = false; },
//   isFlying: function() { return this._Flying; }
// // }
