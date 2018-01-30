function Plane() {
  this._Flying = true;
}

Plane.prototype = {

land: function() { this._Flying = false; },
isFlying: function() { return this._Flying; }

}
