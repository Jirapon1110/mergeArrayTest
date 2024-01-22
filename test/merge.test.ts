import { mergeCollection } from "../src/merge";

describe("mergeArrays", () => {
  it("merges two arrays", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const merged = mergeCollection(arr1, arr2);

    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("merges two arrays with different lengths", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6, 8, 10];
    const merged = mergeCollection(arr1, arr2);

    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
  });

  it("merges two arrays with duplicate elements", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 5, 6];
    const merged = mergeCollection(arr1, arr2);

    expect(merged).toEqual([1, 2, 3, 4, 5, 5, 6]);
  });
});
