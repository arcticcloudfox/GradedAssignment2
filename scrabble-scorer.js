// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

let word = '';
let scoreChoice = '';

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

// function oldScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = 0;

// 	for (let i = 0; i < word.length; i++) {

// 	  for (const pointValue in oldPointStructure) {

// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }

// 	  }
// 	}
// 	return letterPoints;
//  }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let userInput = input.question("Let's play some scrabble! Enter a word:");
  word = word + userInput
  word.toUpperCase();
};


let newPointStructure = transform(oldPointStructure);

// let simpleScoreObj = {
// 'name': 'Simple Score',
// 'description': 'Each letter is worth 1 point.',
// scoringFunction: function simpleScorer(word) {
//   word = word.toUpperCase();
//   let simplePoints = 0
//   for (let index = 0; index < word.length; index++) {
//     simplePoints += 1;
//   }
//   return simplePoints;
//  }
// };
// let simpleScorer = {
// 'name': 'Simple Score',
// 'description': 'Each letter is worth 1 point.',
// scoringFunction: function simpleScrabbleScorer(word) {
//   word = word.toUpperCase();
//   let simplePoints = 0
//   for (let index = 0; index < word.length; index++) {
//     simplePoints += 1;
//   }
//   return simplePoints;
//  }
// };
let simpleScorer = function (word) {
  word = word.toUpperCase();
  let simplePoints = 0
  for (let index = 0; index < word.length; index++) {
    simplePoints += 1;
  }
  return simplePoints;
};

let vowelBonusScorer = function (word) {
  word = word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let vowelPoints = 0;
  for (let index = 0; index < word.length; index++) {
    if (vowels.includes(word[index])) {
      vowelPoints += 3
    } else {
      vowelPoints += 1

    }
  }
  return vowelPoints;
};

let scrabbleScorer = function (word) {
  letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    for (const item in newPointStructure) {
      letterPoints += item;
    }
  }
  return letterPoints;
}

// let vowelBonusScorer = {
//   'name': 'Bonus Vowels',
//   'description': 'Vowels are 3 pts, consonants are 1 pt.',
//   scoringFunction:  function (word) {
//     word = word.toUpperCase();
//     let vowels = ['A', 'E', 'I', 'O', 'U'];
//     let vowelPoints = 0;
//     for (let index = 0; index < word.length; index++) {
//       if(vowels.includes(word[index])) {
//         vowelPoints += 3
//       } else {
//         vowelPoints += 1

//       }
//     }
//     return vowelPoints;
//   }
// };

// let scrabbleScorer = {
//   'name': 'Scrabble',
//   'description': 'The traditional scoring algorithm.',
//   scoringFunction: function (word, newPointStructure) {
//     letterPoints = 0;
//     for (let i = 0; i < word.length; i++) {
//       for (const item in newPointStructure) {
//         letterPoints += item;
//       }
//     }
//     return letterPoints;
//   }
// };
// const scoringAlgorithms = [simpleScoreObj, vowelBonusScorer, scrabbleScorer];
const scoringAlgorithms = [{
  'name': 'Simple Score',
  'description': 'Each letter is worth 1 point.',
  scorerFunction: function simpleScorer(word) {
    word = word.toUpperCase();
    let simplePoints = 0
    for (let index = 0; index < word.length; index++) {
      simplePoints += 1;
    }
    return simplePoints;
  }
},
{
  'name': 'Bonus Vowels',
  'description': 'Vowels are 3 pts, consonants are 1 pt.',
  scorerFunction: function vowelBonusScorer(word) {
    word = word.toUpperCase();
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let vowelPoints = 0;
    for (let index = 0; index < word.length; index++) {
      if (vowels.includes(word[index])) {
        vowelPoints += 3
      } else {
        vowelPoints += 1

      }
    }
    return vowelPoints;
  }

},
{
  'name': 'Scrabble',
  'description': 'The traditional scoring algorithm.',
  scorerFunction: function scrabbleScorer(word) {
    letterPoints = 0;
    for (let i = 0; i < word.length; i++) {
      for (const item in newPointStructure) {
        letterPoints += item;
      }
    }
    return letterPoints;
  }
}];
function scorerPrompt() {
  console.log(`0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);
  let userChoice = input.question("Which scoring algorithm would you like to use?");
  scoreChoice = scoreChoice + userChoice;

  if (scoreChoice == 0) {
    console.log(`Entered 0, 1, or 2: ${scoreChoice}`);
    console.log("Algorithm name:", scoringAlgorithms[0].name);
    console.log("Scoring result:", scoringAlgorithms[0].scorerFunction(word));
  } else if (scoreChoice == 1) {
    console.log(`Entered 0, 1, or 2: ${scoreChoice}`);
    console.log("Algorithm name:", scoringAlgorithms[1].name);
    console.log("Scoring result:", scoringAlgorithms[1].scorerFunction(word));
  } else if (scoreChoice == 2) {
    console.log(`Entered 0, 1, or 2: ${scoreChoice}`);
    console.log("Algorithm name:", scoringAlgorithms[2].name);
    console.log("Scoring result:", scoringAlgorithms[2].scorerFunction(word));
  } else {
    console.log("Sorry, invalid input please try again.");
    return userChoice;
  }
};


function transform(oldPointStructure) {
  let newScoreArr = [];
  for (const key in oldPointStructure) {
    if (oldPointStructure.hasOwnProperty(key)) {
      let newScoreObj = {};
      newScoreObj[key] = oldPointStructure[key];
      newScoreArr.push(newScoreObj);
    }
  }
};
console.log(transform(oldPointStructure));

function runProgram() {
  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
