export const mergeCollection = (
  collection1: number[],
  collection2: number[]
): number[] => {
  let result: number[] = [];
  let idxCol1 = 0;
  let idxCol2 = 0;

  while (idxCol1 < collection1.length && idxCol2 < collection2.length) {
    if (collection1[idxCol1] < collection2[idxCol2])
      result.push(collection1[idxCol1++]);
    else if (collection1[idxCol1] >= collection2[idxCol2])
      result.push(collection2[idxCol2++]);
  }

  if (idxCol1 < collection1.length) {
    while (idxCol1 < collection1.length) result.push(collection1[idxCol1++]);
  }

  if (idxCol2 < collection2.length) {
    while (idxCol2 < collection2.length) result.push(collection2[idxCol2++]);
  }

  return result;
};
