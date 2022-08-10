function areaTriangle(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area.toFixed(2);
}
console.log(areaTriangle(3, 3, 4));