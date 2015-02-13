var triangles = function(side1,side2,side3){

  var sumSide1and2 = side1 + side2;
  var sumSide2and3 = side2 + side3;
  var sumSide1and3 = side1 + side3;

  if(sumSide1and2 < side3 || sumSide2and3 < side1 || sumSide1and3 < side2){
    return "not a triangle";
  }else if(side1 === side2 && side1 === side3){
    return "equilateral";
  }else if (side1 === side2 || side1 == side3 || side2 === side3){
    return "isosceles";
  }else{
    return "scalene";
  }



};
