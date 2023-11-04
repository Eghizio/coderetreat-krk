// type Field = "👾" | "";

export class Board {
  board: Set<Field>;

  constructor(fields: Field[]) {
    this.board = new Set(fields);
  }

  next(): Board {
    return this;
  }

  equals(other: Board): boolean {
    const sizeMatch = this.board.size === other.board.size;
    const elementsMatch = [...this.board].every((x) => other.board.has(x));;
    
    return sizeMatch && elementsMatch;
  }
}

export class Field {
  x: number;
  y: number;
  alive: boolean;

  constructor(x: number, y: number, alive = false) {
    this.x = x;
    this.y = y;
    this.alive = alive;
  }

  equals(other: Field): boolean {
    return this.x === other.x && this.y === other.y && this.alive === other.alive;
  }
}
