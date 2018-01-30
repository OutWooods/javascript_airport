function Plane() {
  var _Flying = false
}

Plane.prototype = {

land: function() { this._Flying = false; },
isFlying: function() { return this._Flying; }

}
