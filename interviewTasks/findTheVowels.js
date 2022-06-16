//Count the vowels in the string
let testStr = "My name is Kamila, what is your name?";

// const findTheVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     let currentLetter = str[i].toLowerCase();
//     for (j = 0; j < vowels.length; j++) {
//       let currentVowel = vowels[j];
//       console.log({ currentLetter, currentVowel });
//       if (currentLetter === currentVowel) {
//         console.log("Vowel is found");
//         count++;
//         console.log("Total count is", count);
//       }
//     }
//   }
//   console.log(count);
//   return count;
// };

// const findTheVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// };
// findTheVowels(testStr);

console.log("answer", testStr.split("").filter((e) => e.toLowerCase() === "a" || e.toLowerCase() === "e" || e.toLowerCase() === "i" || e.toLowerCase() === "o" || e.toLowerCase() === "u").length);

//findTheVowels(testStr);
