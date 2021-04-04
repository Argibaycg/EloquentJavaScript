"use strict";

function deepEqual(elementOne, elementTwo) {
  if (elementOne === elementTwo) {
    return true;
  }

  if (
    elementOne == null ||
    typeof elementOne != "object" ||
    elementTwo == null ||
    typeof elementTwo != "object"
  ) {
    return false;
  }

  for (const property in elementOne) {
    if (
      !(property in elementTwo) ||
      !deepEqual(elementOne[property], elementTwo[property])
    ) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(
  deepEqual(
    { perro: { edad: 2, raza: "caniche" } },
    { perro: { edad: 2, raza: "perroperro" } }
  )
);
