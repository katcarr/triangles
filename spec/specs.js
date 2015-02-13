describe("triangles", function(){
  it("will return 'equliateral' if all sides are the same", function(){
    expect(triangles(4,4,4)).to.equal("equilateral");
  });

  it("will return 'isosceles' if two sides are equal", function(){
    expect(triangles(4,2,4)).to.equal("isosceles");
  });

  it("will return 'scalene' if no sides are equal", function(){
    expect(triangles(5,6,8)).to.equal("scalene");
  });

  it("will return 'not a triangle' if the length of a side is greater than the sum of the other 2", function(){
    expect(triangles(2,3,12)).to.equal("not a triangle");
  });

  // it("will return 'right '+ isosceles or scalene if it is a right triangle", function(){
  //   expect(triangles(5,12,13)).to.equal("right scalene")
  // });


});
