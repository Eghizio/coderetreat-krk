type SurviveFn = (neighbours: number) => boolean

const survive: SurviveFn = () => true;

describe("game", () => {
  test("Cell should survive for 2 neighbours", () => {
    // Given
    const neighbours = 2;

    // When
    const result = survive(neighbours);

    // Then
    expect(result).toBe(true);
  });
});