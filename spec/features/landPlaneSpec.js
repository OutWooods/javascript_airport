describe("Airport Feature Test", function() {
   var airport;
   var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    plane_2 = new Plane();
  });

  it("Feature: land a plane", function() {
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
    expect(plane.isFlying()).toBe(false);
    expect(plane_2.isFlying()).toBe(true);
  });

  it("Feature: land a plane, then try to land again", function() {
    airport.land(plane);
    var message = "Cannot land plane if it has already landed"
    expect( function(){ airport.land(plane); } ).toThrow(new Error(message));
  });

});
