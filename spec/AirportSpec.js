describe("Airport", function() {
   var airport;
   var plane;

  beforeEach(function() {
    airport = new Airport();
    // plane = new Plane();
  });

  it("should call land on plane", function() {
    plane = jasmine.createSpyObj('Plane',{ 'land': true, 'isFlying': true });
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("should have one more plane in hangar", function() {
    plane = jasmine.createSpyObj('Plane',{ 'land': true, 'isFlying': true });
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
  });

  it("shouldn\'t instruct plane to land if it\'s on the ground", function() {
    plane = jasmine.createSpyObj('Plane',{ 'land': true, 'isFlying': false });
    expect( function(){ airport.land(plane); } ).toThrow(new Error("Cannot land plane if it has already landed"));
  });

});
