type SurviveFn = (neighbours: number) => boolean

const survive: SurviveFn = (neighbours) => {
  return neighbours == 2 || neighbours == 3;
};

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
});