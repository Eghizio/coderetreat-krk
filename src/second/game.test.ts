type SurviveFn = (neighbours: number) => boolean

const survive: SurviveFn = (neighbours) => {
  return neighbours == 2 || neighbours == 3;
};

class Cell {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}

const countNeighbours = ({ x, y }: Cell, cells: Cell[]) => {
  const neighbours = cells.filter(c => {
    const isNearby = Math.abs(x - c.x) <= 1 && Math.abs(y - c.y) <= 1;
    const isNotSelf = !(x === c.x && y === c.y);
    return isNearby && isNotSelf;
  });
  return neighbours.length;
};

const nextGeneration = (cells: Cell[]): Cell[] => [];

// TCR - Test and Commit or Revert!
describe("game", () => {
  describe("survive", () => {
    test("Cell should survive for 2 neighbours", () => {
      // Given
      const neighbours = 2;
  
      // When
      const result = survive(neighbours);
  
      // Then
      expect(result).toBe(true);
    });

    test("Cell should survive for 3 neighbours", () => {
      // Given
      const neighbours = 3;
  
      // When
      const result = survive(neighbours);
  
      // Then
      expect(result).toBe(true);
    });
  
    test("Cell should die for less than 2 neighbours", () => {
      // Given
      const neighbours = 1;
  
      // When
      const result = survive(neighbours);
  
      // Then
      expect(result).toBe(false);
    });
  
    test("Cell should die for more than 3 neighbours", () => {
      // Given
      const neighbours = 4;
  
      // When
      const result = survive(neighbours);
  
      // Then
      expect(result).toBe(false);
    });
  });

  describe("countNeighbours", () => {
    it("No neighbours on empty cells.", () => {
      // Given
      const cell: Cell = new Cell();
      const cells: Cell[] = [];

      // When
      const result = countNeighbours(cell, cells);

      // Then
      expect(result).toBe(0);
    });

    it("Should count 2 neighbours.", () => {
      // Given
      const cell: Cell = new Cell(0, 0);
      const cells: Cell[] = [new Cell(1, 0), new Cell(0, 1)];

      // When
      const result = countNeighbours(cell, cells);

      // Then
      expect(result).toBe(2);
    });

    it("Should count 1 neighbour", () => {
      // Given
      const cell: Cell = new Cell(0, 0);
      const cells: Cell[] = [new Cell(1, 0), new Cell(0, 1337)];

      // When
      const result = countNeighbours(cell, cells);

      // Then
      expect(result).toBe(1);
    });

    it("Should count 1 neighbour and shouldn't count itself", () => {
      // Given
      const cell: Cell = new Cell(0, 0);
      const cells: Cell[] = [new Cell(1, 0), new Cell(0, 0)];

      // When
      const result = countNeighbours(cell, cells);

      // Then
      expect(result).toBe(1);
    });
  });

  describe("nextGeneration", () => {
    it("Empty board stays empty", () => {
      // Given
      const cells: Cell[] = [];

      // When
      const nextCells = nextGeneration(cells);

      // Then
      expect(nextCells.length).toBe(0);
    });
  });
});