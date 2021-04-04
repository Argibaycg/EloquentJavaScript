"use strict";

let size = 100;
let line = "";

for (let i = 1; i <= size; i++) {
  if (i % 2 === 0) {
    for (line = "# "; line.length < size; line += "# ") {
      continue;
    }
    console.log(line);
  } else {
    for (line = " #"; line.length < size; line += " #") {
      continue;
    }
    console.log(line);
  }
}

//PAGE SOLUTION
/*
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
}*/
