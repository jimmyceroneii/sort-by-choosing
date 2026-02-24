type Pair = [string, string];

const generatePairs = (list: string[]): Pair[] => {
  const pairs: Pair[] = [];

  if (list.length <= 1) {
    return pairs;
  }

  for (let i = 1; i < list.length; i++) {
    pairs.push([list[0], list[i]]);
  }

  return pairs.concat(generatePairs(list.slice(1)));
};

const randomize = <T>(values: T[]): T[] => {
  const shuffled = [...values];
  let index = shuffled.length;

  while (index !== 0) {
    const randomIndex = Math.floor(Math.random() * index);
    index--;
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

export const generateRandomPairs = (input: string): Pair[] => {
  const items = input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const pairs = generatePairs(items);
  return randomize(pairs);
};

export const parseInputList = (input: string): string[] => {
  return input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};
