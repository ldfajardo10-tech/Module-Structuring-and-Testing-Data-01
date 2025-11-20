function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  
for (let i = 0; i < stringOfCharacters.length; i++) { // we create a for loop so it can find and count the characters
  if (stringOfCharacters[i] === findCharacter) {
    count++;
  }
}
return count;

}

module.exports = countChar;
