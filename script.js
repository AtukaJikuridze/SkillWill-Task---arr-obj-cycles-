const myArr = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

const getYoungest = (usersArr) => {
  const youngest = usersArr.sort((a, b) => a.age - b.age)[0];
  return youngest;
};
getYoungest(myArr);
console.log(getYoungest(myArr));

//---------------2----------------//

const user = {
  name: "Avto",
  lastName: "Jikuridze",
  age: 19,
};

const copyMyArr = (userObj) => {
  const newUser = { ...userObj };
  return newUser;
};
const copiedUser = copyMyArr(user);

console.log(copiedUser);

// --------------- 3 ---------------  //

const diceGame = () => {
  // even = playerA გაგორების ჯერია
  // odd = playerB გაგორების ჯერია
  let playerA = [];
  let playerB = [];
  let winner;

  const randomTurnGenerator = Math.ceil(Math.random() * 2);
  let whoStarts = randomTurnGenerator % 2 === 0 ? "PlayerA" : "PlayerB";

  for (
    let i = whoStarts === "PlayerA" ? 1 : 2;
    !playerA.includes(3) && !playerB.includes(3);
    i++
  ) {
    let whosTurn = i % 2 === 0 ? "PlayerA" : "PlayerB";

    const randomDiceNum = Math.ceil(Math.random() * 6);
    console.log(`${whosTurn} - მ გააგორა : ${randomDiceNum}`);

    if (whosTurn === "PlayerA") {
      playerA.push(randomDiceNum);
      if (randomDiceNum === 3) {
        winner = "PlayerA";
        console.log(`Winner !! ${winner}`);

        break;
      }
    } else {
      playerB.push(randomDiceNum);
      if (randomDiceNum === 3) {
        winner = "PlayerB";
        console.log(`Winner !! ${winner}`);

        break;
      }
    }
  }
  return `თამაში დასრულდა, გამარჯვებულია ${winner}`;
};

console.log(diceGame());
