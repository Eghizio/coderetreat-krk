type SurviveFn = (neighbours: number) => boolean

const survive: SurviveFn = (neighbours) => {
  return neighbours >= 2;
};

describe("game", () => {
  test("Cell should survive for 2 neighbours", () => {
    // Given
    const neighbours = 2;

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
});