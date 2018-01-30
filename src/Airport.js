function Airport() {
  this._hangar = [];
};

Airport.prototype = {
    land: function(plane) {
      console.log(plane.isFlying())
      if (!plane.isFlying()) {
        throw new Error("Cannot land plane if it has already landed");
      }
      plane.land();
      this._hangar.push(plane);
    },
    hangar: function() { return this._hangar; }
}
