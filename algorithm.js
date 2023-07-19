function countVietnameseChars(inputStr) {
  let count = 0;
  let i = 0;

  while (i < inputStr.length) {
    if (i + 1 < inputStr.length) {
      if (inputStr[i] === "a" && inputStr[i + 1] === "w") {
        count++;
        i += 2;
        continue;
      } else if (inputStr[i] === "d" && inputStr[i + 1] === "d") {
        count++;
        i += 2;
        continue;
      } else if (inputStr[i] === "o" && inputStr[i + 1] === "o") {
        count++;
        i += 1;
        continue;
      } else if (inputStr[i] === "w") {
        count++;
        i += 2;
        continue;
      }
    }

    if (["o", "w"].includes(inputStr[i])) {
      i++;
    } else {
      i++;
    }
  }

  return count;
}

// Test
const inputStr = "hfdawhwhcoomdd";
const result = countVietnameseChars(inputStr);
console.log("Output:", result); // Output: 4
