"use strict";

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
  // Below is the function log_input with the parameters tag, value
  // The variable called 'entry' is an object that takes in the properties tag and count.
  // Count is also turned into an integer with the parseInt function
  // ParseInt passes in value to show that count:value is a number
  // The entry object is than pushed into the valueArray

  function log_input(tag, value) {
    var count = parseInt(value, 10);

    // Abort if there is an error (issue with parsing)
    if (!isFinite(count))
      return;

    // FYI: This would be better / more performant for the entire program
    // if this was a map instead of array. Then duplicates would automatically
    // be removed simply by the constraint hashes (maps/objects) have where the
    // keys must be unique

    // i.e. valueMap[tag] = value;

    valueArray.push({
      tag,
      count
    });
  }

  // FYI: We wouldn't need this if you had instead used a "valueMap" instead of "valueArray"
  function get_unique() {
    // Declare our map (Hash/Dictionary in other languages)
    var entryMap = {};

    // Iterate every log entry and add the tag = value
    // to our map. As the map MUST have unique keys
    // if there is a duplicate it will just overwrite
    // what is already there... fulfilling the need to
    // the remove duplicates and taking the last value
    for (var i = 0; i < valueArray.length; i++) {
      var entry = valueArray[i];
      entryMap[entry.tag] = entry.count;
    }

    return entryMap;
  }

  // Below is the function log_unique. The purpose of this function is to return a collection of tags and
  // their associated integers with duplicates removed.
  // In the case of duplication during input the last tag value should be stored.

  function log_unique() {
    var uniqueEntries = get_unique();

    // Now that we have boiled down our data into our map
    // we know that the only thing contained in the map
    // are unique keys (tags). Now we iterate each unique
    // key and its corresponding value and log it
    var tags = Object.keys(uniqueEntries);
    for (var i = 0, il = tags.length; i < il; i++) {
      var tag   = tags[i],
          value = uniqueEntries[tag];

      console.log("Entry: ", tag, value);
    }

    return uniqueEntries;
  }

  // Below is the function log_sorted.
  //The purpose of this function return a sorted collection of unique tag names with
  //the the tags in an ascending order (A to Z).
  //If the “reverse” parameter is true than the tags would be in the ascending order (A to Z)
  //If the "reverse" parameter is false than the tags would be in the descending order (Z to A)
  // I know this still needs correcting. I'm learning :)

  function log_sorted(reverse) {
    var uniqueEntries = get_unique(),
        tags          = Object.keys(uniqueEntries);

    tags.sort();
    if (reverse)
      tags.reverse();

    tags.forEach((tag) => {
      console.log('Tag: ', tag);
    });

    return tags;
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

  function log_sum() {
    var uniqueEntries = get_unique(),
        tags          = Object.keys(uniqueEntries);

    // Here we use "reduce", with the initial "total" of "0",
    // We are iterating the tags themselves, so we retrieve
    // the value of the tag by accessing that key in the map (uniqueEntries[tag])
    var sum = tags.reduce((total, tag) => (total + uniqueEntries[tag]), 0);
    console.log('Sum: ', sum);
    return sum;

    // Naming conventions should be decided on and stuck to
    // Generally (in most languages) a reference/variable
    // starting with an upper-case letter is defining a module, class, or interface
    const Sum = [];

    for (let i = 0; i < valueArray.length; i++) {
      // This is not doing anything as you are never calling the function
      // Also, FYI: Generating functions in loops (though sometimes required)
      // is bad practice in Javascript
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

  // Below is a for loop to run through each index of the input array and
  // split the each index at the "=" symbol starting at the first index
  // tmp = ["a", "45"] .... as an example of the zero index of this set of data
  // and creating a funciton log_input that takes in two paramenters

  for (var i = 0, il = input.length; i < il; i++) {
    var line = input[i];
    if (!line)
      continue;

    var tmp = line.split("=");
    if (tmp.length !== 2)
      continue;

    log_input(tmp[0].trim(), tmp[1].trim());
  }

  // Below calls the log_sorted function and stores it in a variable called sortedValues;

  // This is invalid syntax.
  // Maps/objects/hashes require "key: value" pairs
  // here you are just saying "put values in map"
  // ... which values are assigned which keys?
  // Are there any resulting value from the function call?
  // Also, semi-colons are not allowed in a map/object definition
  // const sortedValues = {
  //   log_sorted();
  // }


  // Below calls the log_sum function and stores it in a variable called valuesSum;

  // This is invalid syntax.
  // const valuesSum = {
  //   log_sum();
  // }

  //Below is where the sortedValues and valuesSum are returned

  return {
    values:       valueArray,
    uniqueValues: log_unique(),
    sortedValues: log_sorted(),
    valuesSum:    log_sum()
  }
}