export const randomizer = (arr: Array<any>): any => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // Return undefined if the input is not an array or the array is empty
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const selectRandomItems = (
  arr: Array<any>,
  n: null | number = null
): Array<any> => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return []; // Return an empty array if the input is not an array or the array is empty
  }

  if (n === undefined || null === n || n < 1) {
    n = Math.floor(Math.random() * arr.length) + 1; // Set n to 1 if it is undefined, null, or less than 1
  }

  const randomItems: Array<any> = [];
  while (randomItems.length < n) {
    const item = randomizer(arr);
    if (randomItems.includes(item)) {
      continue;
    }
    randomItems.push(item);
  }
  return randomItems;
};
