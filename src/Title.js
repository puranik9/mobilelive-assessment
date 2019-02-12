import React, { Component } from 'react';
import './App.css';

class Title extends Component {
    render() {
        return (
            <div className="Title">
                <h2 className="blue-text">mobileLIVE Written Assessment</h2>
                <p>The solution to the assessment was written in <i>JavaScript, React, HTML, & CSS</i>. You will find my thought process
                behind the solution on this page followed by instructions to run the program. I have also displayed my source
                code for the program and you can test it out yourself. If you have any issues, please contact me at
                <a href={"mailto:puranikkartik@gmail.com"} > puranikkartik@gmail.com</a> and I will get back to you as soon
                as possible.</p>
            </div>
        );
    }
}

export default Title;
