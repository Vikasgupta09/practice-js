/**
 * Prototype
 * ---------
 * Every object in JS has a property called Prototype
 * The newly created object automatically inherits from this parent
 * JS engine attachs object to {hidden property and functions} -> another object
 * __proto__ is that another object which is called as prototype.
 *
 * Definition: Object that is assigned to each and every object in JS.
 *
 * Prototype Chaining:
 *  let arr = [1,2,3];
 * arr.__proto__ === Array.prototype
 * arr.__proto__.__proto__ === Object.prototype
 * arr.__proto__.__proto__.__proto__ === null
 *
 *
 * Prototypal Inheritance
 * ----------------------
 * Inheritance using prototype
 * In JS everything we define inherits something from prototype chain as shown in above chaining.
 *
 */

// This is only to understand the concept, should not be used in production code
let objectA = {
  name: "Name A",
  type: "Type A",
  print: () => {
    console.log(this.name + " - " + this.type);
  }
};

let objectB = {
  name: "Name B"
};

objectB.__proto__ = objectA; // objectB in using prototypal inheritance to inherit objectA properties



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'calculateScore' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING text
 *  2. STRING prefixString
 *  3. STRING suffixString
 */

function calculateScore(text, prefixString, suffixString) {
    // Write your code here
    let prefixScore = lengthLongestString(text, prefixString);
    let suffixScore = lengthLongestString(text, suffixString);
    const totalScore = prefixScore + suffixScore;
    console.log(totalScore);
    let textLength = text.length;
    let textString = '';

    for(let len = 0; len <= textLength-totalScore; len++) {
        for (let i = 0; i <= textLength-totalScore; i++) {
            for ( let j = 0; j <= totalScore; j++) {
                textString = text.slice(i, i + j + len);
                console.log(textString);
                prefixScore = lengthLongestString(textString, prefixString);
                suffixScore = lengthLongestString(textString, suffixString);
                let finalScore = prefixScore + suffixScore;
                if (finalScore === totalScore) {
                    return textString;
                }
            }
        }
    }
    
    return textString;
}
/**
 * Function to get length of longest substring
 */
function lengthLongestString(string1, string2) {
    const s1 = [...string1];
    const s2 = [...string2];

    // Approach: using DP, create matrix of all substring lengths+1
    // initially fill first row and col with 0 (initializing all with 0 works same)
    // and then find the biggest length of all common substring
    const subStringMatrix = new Array(s1.length+1).fill(0).map(() => {
        return new Array(s2.length+1).fill(0);
    });

    let longestSubstringLength = 0;
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if(s1[i-1] === s2[j-1]) {
                subStringMatrix[i][j] = subStringMatrix[i-1][j-1] + 1;
            }

            if (subStringMatrix[i][j] > longestSubstringLength) {
                longestSubstringLength = subStringMatrix[i][j];
            }
        }
    }
    return longestSubstringLength;
}

function main() {