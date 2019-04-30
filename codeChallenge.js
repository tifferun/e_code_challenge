// Below is the array input. This array is used to hold the log data in a string form //

const input = [
    "a=45",
    "b=32",
    "c=586",
    "c=34",
    "a=34",
    "asd=394",
    "as=2",
    "aa=54",
    "cs=4843",
    "a=6"
];

// Below is the variable valueArary. This is an empty array to store the data once the 
// split has taken place and the input array becomes an array of objects with key value pairs 

const valueArray = [];

// Below evokes the function processLog and takes in the parameter of input 

processLog(input);

// Below is the function porcoessLog. This is the main function. 

function processLog() {


    // Below is a for loop to run through each index of the input array and 
    // split the each index at the "=" symbol starting at the first index 
    // tmp = ["a", "45"] .... as an example of the zero index of this set of data
    // and creating a funciton log_input that takes in two paramenters 

    for (let i = 0; i < input.length; i++) {
        let tmp = input[i].split("=");
        log_input(tmp[0], tmp[1]);
    }

    // Below is the function log_input with the parameters tag, value 
    // The variable called 'entry' is an object that takes in the properties tag and count. 
    // Count is also turned into an integer with the parseInt function
    // ParseInt passes in value to show that count:value is a number 
    // The entry object is than pushed into the valueArray 

    function log_input(tag, value) {
        const entry = {
            tag: tag,
            count: parseInt(value)
        };
        valueArray.push(entry);
    }

    console.log(valueArray);


    // Below is the function log_unique. The purpose of this function is to return a collection of tags and 
    // their associated integers with duplicates removed. 
    // In the case of duplication during input the last tag value should be stored. 

    const log_unique = function () {

        // Below is the creation of an empty array called tempArray  

        const tempArray = [];

        // Below is the for loop that is intended to loop throught the entire valueArray 

        for (i = 0; i < valueArray.length; i++) {
            // Below I am trying to check to see if the temp array has an object with the same tag in it already //
            // ?? This is something that I was confused as to how to do. I am not sure how to write this code with an object yet. 
            // I can create a unique array if I am using only a string. 
            if (tempArray.tag[i] === tempArray.tag[i]) {

            // Rigth here is where I would want to execute the condition of: 
            // if it does not have the same tag then I want it to add the object from the values array to the temp array 
            // I am not sure how to wrie this code yet.    
            }
            else {
            // Rigth here is where I would want to execute the condition of: 
            // if it does have the same tag then I would not want to add it as it is a duplicate and
            // I am trying to create a new unique array of tags:count
            // I am not sure how to wrie this code yet.  
            }

            // I also wanted to find a way to make sure that in the case of duplication only the last
            // tag value would be stored 

            // Below the tempArray is returned so it can be used outside of the function as well 

            return tempArray;
        }
    }


    // Below is the function log_sorted. 
    //The purpose of this function return a sorted collection of unique tag names with 
    //the the tags in an ascending order (A to Z). 
    //If the “reverse” parameter is true than the tags would be in the ascending order (A to Z)
    //If the "reverse" parameter is false than the tags would be in the descending order (Z to A)
    // I know this still needs correcting. I'm learning :) 

    const log_sorted = function (sort) {

        log_unique(unqiueValues); {

            if (uniqueValues === true) {
                uniqueValues.sort();
            }

            if (uniqueValues === false) {
                uniqueValues.reverse();
            }
            f
        }
    }

    // Below is the function log_sum. 
    // After the duplicates have been removed it will add all of the 
    // remaining integers together to get one grand total
    // I found multiple ways to add integers within an array. I was trying to get 
    // I know the code below still needs corrections. I could get the 
    // accumulator to work with very basic code but wasn't sure yet how to get it to work
    // with multiple functions taking place and how to access the second index on each 
    // Individual array of the object... these are just some ideas of ways to get a sum total 
    // of an array of numbers... I know I don't need them all and I know that it still needs 
    // correcting in order to work 

    const log_sum = function () {

        log_unique(uniqueValues);
        const Sum = [];

        for (let i = 0; i < valueArray.length; i++) {
            function add(accumulator, a) {
                return accumulator + a;
            }
        }

        function getSum(total, num) {
            return total + num;
        }

        function myFunction(item) {
            uniqueArray.reduce(getSum);
        }
    }

    // Below calls the log_sorted function and stores it in a variable called sortedValues;

    const sortedValues = {
        log_sorted();
    }


    // Below calls the log_sum function and stores it in a variable called valuesSum;

    const valuesSum = {
        log_sum();
    }

    //Below is where the sortedValues and valuesSum are returned 

    return {
        sortedValues,
        valuesSum
    }
}