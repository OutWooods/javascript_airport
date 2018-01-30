function Plane() {
  var _Flying;
}

Plane.prototype = {

land: function() { this._Flying = false; },
isFlying: function() { return this._Flying; }

}
