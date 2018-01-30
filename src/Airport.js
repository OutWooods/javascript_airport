function Airport() {
  _hangar = [];
};

Airport.prototype = {
    land: function(plane) {
      plane.land();
      _hangar.push(plane);
    },
    hangar: function() { return _hangar; }
}
