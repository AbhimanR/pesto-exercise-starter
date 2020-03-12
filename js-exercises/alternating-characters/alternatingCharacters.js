function alternatingCharacters(arr) {
  let index = 0;
  const result = [];
  arr.forEach(element => {
    let count = 0;
    for (let i = 1; i < element.length; ++i) {
      if (element[i] === element[i - 1]) count += 1;
    }
    result[index++] = count;
  });
  return result;
}

export { alternatingCharacters };
