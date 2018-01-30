describe("Airport", function() {
   var airport;
   var plane;

  beforeEach(function() {
    airport = new Airport();

  });

  it("should call land on plane", function() {
    plane = jasmine.createSpyObj('Plane', ['land']);
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

});
