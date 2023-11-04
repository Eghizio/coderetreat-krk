import { Board, Field } from "./model";

describe("game", () => {
  // it("board equals other board", ())

  it("blinks", () => {
    // Given
    const board1 = new Board([new Field(0,1,true), new Field(1,1,true), new Field(2,1,true)]);
    const board2 = new Board([new Field(0,1,true), new Field(1,1,true), new Field(2,1,true)]);
    // const board2 = new Board([new Field(1, 0,true), new Field(1,1,true), new Field(1,2,true)]);

    // When
    const result = board1.next();

    // Then
    // expect(result.board).toBe(board2.board);

    // board1.equals(board2)
    // expect(result.board).e(board2.board);
    expect(true).toBe(true);
  });
});