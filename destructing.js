let a = {
  start: { x: 4.5, y: 2.6},
  end: { x: 3.1, y: 7}
}

const { start: { x: startX, y: startY }} = a;

console.log(startX); // 4.5