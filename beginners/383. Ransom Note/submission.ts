// This submission is a recursive solution that takes 100ms and uses 47.5MB of memory.
// It ranks better than  91% of the submissions in the time complexity and
// better than 45% of submissions in the space complexity

// I tried to improve it with a non recursive solution (loop) but it did not improve time or space complexity:

// function canConstruct(ransomNote: string, magazine: string): boolean {
//     if(magazine.length < ransomNote.length) return false;
//     let currentChar
//     for (let i = 0; i<ransomNote.length; i++) {
//         currentChar = ransomNote.charAt(i);
//         if(!magazine.includes(currentChar)) return false;
//         else magazine = magazine.replace(new RegExp(currentChar, "i"), '')
//     }
//     return true
// };

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;
  let result: boolean = recursiveLookup([...magazine], [...ransomNote]);
  return result;
}

function recursiveLookup(
  letterArray: string[],
  searchLetterArray: string[]
): boolean {
  if (searchLetterArray.length === 0) return true;
  if (!letterArray.includes(searchLetterArray[0])) return false;
  letterArray.splice(letterArray.indexOf(searchLetterArray[0]), 1);
  searchLetterArray.shift();
  return recursiveLookup(letterArray, searchLetterArray);
}
