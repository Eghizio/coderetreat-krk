import { dupa } from "./first";

describe("test", () => {
  it("adds", () => {
    // Given
    const a = 2;
    const b = 3;

    // When
    const result = dupa(a, b);

    // Then
    expect(result).toBe(5);
  });
})