const startDay = 1;
const endDay = 7;

const randomDay = Math.floor(Math.random() * (endDay - startDay + 1))+ startDay;

let dayName;

switch (randomDay) {
    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName = "Wednesday";
        break;

    case 4: 
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break; 
    
    case 6:
        dayName = "Saturday";
        break;
    
    case 7:
        dayName = "Sunday";
        break; 

    default:
        dayName = "Unknown";      
    
}

console.log(`your lucky day is: ${dayName}`);