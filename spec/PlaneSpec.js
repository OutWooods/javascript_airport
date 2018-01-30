describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should set flying to false on landing", function() {
    plane.land();
    expect(plane.isFlying()).toBe(false);
  });

  it("should set flying to false on landing", function() {
    plane.land();
    expect(plane.isFlying()).toBe(false);
  });

});
