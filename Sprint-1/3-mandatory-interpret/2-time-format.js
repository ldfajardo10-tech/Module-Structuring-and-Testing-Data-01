const movieLength = 2500000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? - six variable declarations

// b) How many function calls are there? - the log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents - Represents how many seconds remain from the movie. how many times is 60 in 8784? = 24 so that would be the remainder 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


// d) Interpret line 4, what does the expression assigned to totalMinutes mean? - Represent how many minutes of the movie have pass

// e) What do you think the variable result represents? Can you think of a better name for this variable? - Represents the film time elapsed and a better name could be : const time elapsed = 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer - yes, because the format is in hours, could works with any positive number.
