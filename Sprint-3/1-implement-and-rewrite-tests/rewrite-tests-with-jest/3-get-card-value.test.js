// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Aces", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return a rank between (2-10) for any card !== A, J, Q, K", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  const jackOfClubs = getCardValue("J♣");
  expect(jackOfClubs).toEqual(10);
});
// Case 4: Handle Ace (A): The first test i made works for this one too

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card strings", () => {
  expect(() => getCardValue("Invalid")).toThrow(); 
  expect(() => getCardValue("100♥")).toThrow();
});
