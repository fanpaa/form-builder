let knightPosition = [1, 7];
let observer = null;

function emitChange() {
  console.log("emitChange");
  observer(knightPosition);
}

export function observe(o) {
  console.log(o);
  console.log(observer);

  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  console.log(observer);
  console.log(typeof observer);

  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;
  
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  }
