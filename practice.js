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
