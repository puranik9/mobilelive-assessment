import React, { Component } from 'react';
import Highlight from 'react-highlight'
import './App.css';

class CodeSnippet extends Component {
    render() {
        return (
            <div className="code-box">
                <Highlight className="code-snippet">
                <code>{`
const cycle = (current, imove, start, end) => {

    //Check if number of moves exist
    if (imove == 0) {
        return current;
    }
    let arr = [];
    let cycleArr = [];
    let finalPosition;
    let currIndex

    //populate both arrays with start to end elements
    for (let i = start; i <= end; i++) {
        arr.push(i);
        cycleArr.push(i);
    }

    for (let i = 0; i < cycleArr.length; i++) {
        //loop until current value is seen
        if (cycleArr[i] == current) {
            currIndex = i; //keep record of current value index
            let places = 0;
            //for rightward shifting
            if (imove > 0) {
                while (places < imove) {
                    cycleArr.unshift(cycleArr.pop());
                    places++;
                    currIndex++; //update current value index
                    //if index exceeds array length, go to start
                    if (currIndex >= 5) {
                        currIndex = 0;
                    }
                }
            }
            //for leftward shifting
            else {
                while (places > imove) {
                    cycleArr.push(cycleArr.shift());
                    places--;
                    currIndex--; //update current value index
                    //if index goes below zero
                    if (currIndex < 0) {
                        currIndex = cycleArr.length - 1;
                    }
                }
            }
            break;
        }
    }

    //final position is shifted current value index in original array
    finalPosition = arr[currIndex];
    return finalPosition;

}`
                }</code>
                </Highlight>
            </div>
        );
    }
}

export default CodeSnippet;
