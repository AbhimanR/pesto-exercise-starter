/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
const permutateWithoutRepetitions = (inputArr) => {
  const result = [];

  const permute = (arr, permutation = []) => {
    if (arr.length === 0) {
      result.push(permutation);
    } else {
      for (let i = 0; i < arr.length; ++i) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), permutation.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

export { permutateWithoutRepetitions };
