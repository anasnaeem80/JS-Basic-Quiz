//check if a triangle is equilateral, scalene, or isosceles
side1 = 12;
side2= 14;
side3= 8;

if (side1== side2 || side2==side3 || side1==side3) {
    console.log("Isosceles triangle")
}
if (side1==side2 && side1==side3 && side2==side3) {
    console.log("Equilateral Triagle")
}
else {
    console.log("Scalene Triangle")
}
