import React, { Component } from 'react';
import './App.css';
import CodeSnippet from "./CodeSnippet";

class Question extends Component {

    constructor() {
        super();

        this.state = {
            current: 7,
            imove: -2,
            start: 3,
            end: 7,
            result: 0,
            loading: false
        };

        this.cycle = this.cycle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    cycle(current, imove, start, end) {

        console.log("entered");
        //Check if parameter values are entered or not
        if(imove === '' || current === '' || start === '' || end === '') {
            alert("Please enter the required values");
            return;
        }

        this.setState({
            loading: true
        });

        let arr = [];
        let cycleArr = [];
        let finalPosition;
        let currIndex;

        if(!(current >= start && current <= end)) {
            alert("Error: Current value must be between start and end");
            this.setState({
                loading: false,
                current: ''
            })
        } else if(imove > (end-start)) {
            alert("Error: # of moves must be less than or equal to length of array");
            this.setState({
                loading: false,
                imove: ''
            })
        }

        //populate both arrays with start to end elements
        for(let i=start; i<=end; i++) {
            arr.push(i);
            cycleArr.push(i);
        }

        for(let i=0; i<cycleArr.length; i++) {
            //loop until current value is seen
            if(cycleArr[i] == current) {
                currIndex = i; //keep record of current value index
                let places = 0;
                //for rightward shifting
                if(imove > 0) {
                    while(places<imove) {
                        cycleArr.unshift(cycleArr.pop());
                        places++;
                        currIndex++; //update current value index
                        //if index exceeds array length, go to start
                        if(currIndex>=cycleArr.length) {
                            currIndex = 0;
                        }
                    }
                    //for leftward shifting
                } else {
                    while(places>imove) {
                        cycleArr.push(cycleArr.shift());
                        places--;
                        currIndex--; //update current value index
                        //if index goes below zero
                        if(currIndex < 0) {
                            currIndex = cycleArr.length-1;
                        }
                    }
                }
                break;
            }
        }

        //final position is shifted current value index in original array
        finalPosition = arr[currIndex];
        //return finalPosition;
        setTimeout(() => {
            this.setState({
                loading: false,
                result: finalPosition
            });
        }, 1000)

    }

    reset() {
        if(this.state.current !== undefined && this.state.imove !== undefined && this.state.start !== undefined && this.state.end !== undefined) {
            this.setState({
                current: '',
                imove: '',
                start: '',
                end: '',
                result: ''
            });
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="Question">
                <h3 className="blue-text">Question</h3>
                <p>Write a <code className="code-styled">function</code> to return the final position after
                    increasing or decreasing an <code className="code-styled">int</code> with a min (starting point)
                    and max (ending point) number.</p>
                <h4 className="blue-text">Method Objective</h4>
                <ul><li>The first parameter is the current position.</li>
                    <li>The 2nd parameter is the # of moves (negative means going backwards or left).</li>
                    <li>The 3rd parameter is the first number of the array, 4th is the last.</li>
                    <li>If end / start of array is reached, loop from the other end again.</li>
                </ul>
                <h4 className="blue-text">Thought process</h4>
                <p>The idea is to first populate two different arrays with elements from
                    <code className="code-styled">start</code> to <code className="code-styled">end</code>.
                    Then loop through the cycle array until the current value is seen, and when it is seen,
                    shift the cycle array left or right for the given number of moves depending on the sign of
                    <code className="code-styled">imove</code>. Keep track of the index of the current value in the new shifted array.
                    The final position is the value of the element in new current index in the original array.</p>
                <h4 className="blue-text">Instructions</h4>
                <ol>
                    <li>Enter appropriate values for the different input parameters. Some examples are provided below.</li>
                    <li>Hit the <code className="code-styled">Run Code</code> button to compile the program.</li>
                    <li>Simply wait and see and the result on your screen.</li>
                    <li>Hit the <code className="code-styled">Reset</code> button to start over.</li>
                    <li>Enjoy!</li>
                </ol>
                <h4 className="blue-text">Examples</h4>
                <ul>
                    <li>this.cycle(3,1,1,5); // [1,2,<b>3</b>,<b>4</b>,5] , result is 4</li>
                    <li>this.cycle(7,-2,3,7); // [3,4,<b>5</b>,6,<b>7</b>] , result is 5</li>
                    <li>this.cycle(3,-3,1,5); // [1,2,<b>3</b>,4,<b>5</b>] , result is 5</li>
                    <li>this.cycle(3,3,1,5); // [<b>1</b>,2,<b>3</b>,4,5] , result is 1</li>
                </ul>
                <div className="Answer">
                    <h4 className="blue-text">Code</h4>
                    <CodeSnippet/>
                    <div className="input-group">
                        <h4 className="blue-text">Parameters</h4>
                        <div className="input-item">
                            <label htmlFor="current">Current</label>
                            <input type="number" name="current" required placeholder="Enter value" value={this.state.current} onChange={this.handleInputChange}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="imove"># of Moves</label>
                            <input type="number" name="imove" required placeholder="Enter value" value={this.state.imove} onChange={this.handleInputChange}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="start">Start</label>
                            <input type="number" name="start" required placeholder="Enter value" value={this.state.start} onChange={this.handleInputChange}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="end">End</label>
                            <input type="number" name="end" required placeholder="Enter value" value={this.state.end} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="input-result">
                        {this.state.loading && <h1>Compiling...</h1>}
                        {this.state.result && !this.state.loading && <h1>The result is {this.state.result}</h1>}
                    </div>
                    <div className="input-button">
                        <button className="button" type="submit" onClick={() => this.cycle(this.state.current, this.state.imove, this.state.start, this.state.end)}>
                            Run Code
                        </button>
                        <button className="button" onClick={this.reset}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;
