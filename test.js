"use strict";

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenza, Italy",
//   categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic bred", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thur: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   deliverOrder: function ({ starterIndex, mainIndex, address, time }) {
//     console.log(
//       `Your order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}`
//     );
//   },
// };
// const openingHours = {
//   thur: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

// const properties = Object.keys(openingHours);
// console.log(properties);

// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }

// const days = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];

// for (const day of days) {
//   const opened = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${opened}`);
// }

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 9.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //Task 1

// function task1(st1, st2) {
//   return st1[st1.length - 1] == st2[0] ? st1.slice(0, -1) + st2 : st1 + st2;
// }
// console.log(task1("abc", "cde"));

// //Task 2

// let task2 = (str) => str.slice(1, -1);
// console.log(task2("Uzbekistan"));

// // Task3

// function task3(string, num) {
//   let res = "";
//   if (num % 2 == 0 && num < 10) {
//     for (let i = 0; i < num; i++) res += string.slice(0, num);
//   }
//   if (num % 2 != 0) {
//     for (let i = 0; i < num; i++) res += string.slice(string.length - num);
//   }
//   if (num > string.length) {
//     num = num % string.length;
//     for (let i = 0; i < num; i++) res += string.slice(0, num);
//   }
//   return res;
// }

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// //5.
// const {odds:{team1, x: draw, team2}} = game
// console.log(team1, draw, team2 );
// console.log(game.odds);

// //7

// team1 < team2 && console.log('Team1 is likely to win');
// team1 > team2 && console.log('Team2 is likely to win');

// let res = new Map();

// res.set("name", "Classical Italiano");

// res
//   .set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// const time = 21;
// console.log(res.get(time > res.get("open") && time < res.get("close")));

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// const arr = [];
// for (const [key, values] of gameEvents) {
//   arr.push(values);
// }
// let events = new Set(arr);

// console.log(gameEvents.delete(64));
// console.log(gameEvents);
// function pyramid(row) {
//   for (let i = 1; i <= row; ++i) {
//     let space = " ".repeat(row - i);
//     let shape = "* ".repeat(i);
//     console.log(space + shape);
//   }
// }
// pyramid(5);

// let row = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= row; i++) {
//   // printing spaces
//   for (let j = 1; j <= row - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let star = 0;  star < i; star++) {
//     string += "* ";
//   }
//   string += "\n";
// }
// console.log(string);

// 3.Task

// function addArray(arr) {
//   let newArr;
//   for (let item of arr) {
//     if (typeof item == "object") {
//       newArr = arr.splice(arr.indexOf(item), 1);
//     }
//   }
//   return arr.concat(...newArr);
// }
// console.log(addArray([1, 2, 3, 4, [5, 6], 2, 5, [1, 3]]));

function largestNumber(arr) {
  var small = arr[0];
  console.log(small);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  return small;
}

console.log(largestNumber([5, 2, 3, 4, 5, 6, 7, 8, 9]));
