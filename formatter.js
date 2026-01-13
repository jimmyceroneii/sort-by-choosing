const choicesList = [
  "Problem: Customer support is asynchronous",
  "Problem: There are tiered monetary rewards via government payouts",
  "Problem: Fitted sheets are hard to put in",
  "Problem: Fantasy football is not fractionalized",
  "Problem: cloud services promote the false idea you don’t need backups",
  "Problem: Websites are analogous to physical locations yet lack context switches to give us cues",
  "Problem: Dog poop at night is hard to see (leash light)",
  "Problem: Retirement is a far off risk(In Obsidian)",
  "Problem: Friend groups are insular and make it hard to make friends in a new place",
  "Problem: Robot weapons are probably bad for humanity",
];

const listOfPairs = [];

const generatePairs = (listsPairs) => {
  if (listsPairs.length <= 1) {
    return listOfPairs;
  }

  for (let i = 1; i < listsPairs.length; i++) {
    listOfPairs.push([listsPairs[0], listsPairs[i]]);
  }

  return generatePairs(listsPairs.splice(1));
};

function randomize(values) {
  let index = values.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
}

console.log(randomize(generatePairs(choicesList)));
