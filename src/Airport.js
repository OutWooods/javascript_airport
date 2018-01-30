function Airport() {
  _hangar = [];
};

Airport.prototype = {
    land: function(plane) {
      if (!plane.isFlying()) {
        throw new Error("Cannot land plane if it has already landed");
      }
      plane.land();
      _hangar.push(plane);
    },
    hangar: function() { return _hangar; }
}
