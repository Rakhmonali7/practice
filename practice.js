"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bred", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  deliverOrder: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Your order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}`
    );
  },
};
restaurant.deliverOrder({
  starterIndex: 2,
  mainIndex: 2,
  time: "22:30",
  address: "Via De Rodsa, 21",
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
