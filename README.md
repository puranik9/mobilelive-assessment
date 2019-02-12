# mobileLIVE Written Assessment

The solution to the assessment was written in JavaScript, React, HTML, & CSS. You will find my thought process behind the solution on this page followed by instructions to run the program. I have also displayed my source code for the program and you can test it out yourself. If you have any issues, please contact me at puranikkartik@gmail.com and I will get back to you as soon as possible.

## Instructions to run program

1. Clone or Download (.zip) this repository
2. In your terminal, cd into the `mobilelive-assessment` directory
3. If you don't have npm installed, please do so here: `https://www.npmjs.com/get-npm`
4. Run `npm install`
5. Run `npm start`
6. Open `http://localhost:3000` in your favorite browser
7. Hit the `Run Code` button to compile the program and simply wait to see the result on your screen.
8. Hit the `Reset` button to start over.
9. Enjoy!

## Question

Write a `function` to return the final position after increasing or decreasing an `int` with a min (starting point) and max (ending point) number.

## Method Objective

The first parameter is the current position.

The 2nd parameter is the # of moves (negative means going backwards or left).

The 3rd parameter is the first number of the array, 4th is the last.

If end / start of array is reached, loop from the other end again.

## Thought process

The idea is to first populate two different arrays with elements from `start` to `end`. Then loop through the cycle array until the current value is seen, and when it is seen, shift the cycle array left or right for the given number of moves depending on the sign of `imove`. Keep track of the index of the current value in the new shifted array. The final position is the value of the element in new current index in the original array.

## Examples

this.cycle(3,1,1,5); // [1,2,**3**,**4**,5] , result is 4

this.cycle(7,-2,3,7); // [3,4,**5**,6,**7**] , result is 5

this.cycle(3,-3,1,5); // [1,2,**3**,4,**5**] , result is 5

this.cycle(3,3,1,5); // [**1**,2,**3**,4,5] , result is 1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).