import React, { useState } from "react";
import "./About.css";

const About = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div className="about__container">
            <span>{item}</span>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
            <span>
                “Freedom is the freedom to say that two plus two make four. If that is
                granted, all else follows.”
            </span>
            <span>− George Orwell, 1984</span>
        </div>
    );
}



/*class AboutUgly extends React.Component {
    state = {
        item: 1
    };
    incrementItem = () => {
        this.setState(state => {
            return {
                item: state.item + 1
            };
        });
    };
    decrementItem = () => {
        this.setState(state => {
            return {
                item: state.item - 1
            };
        });
    };

    render() {
        const { item } = this.state;
        return (
            <div className="about__container">
                <span>{item}</span>
                <button onClick={this.incrementItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
                <span>
                “Freedom is the freedom to say that two plus two make four. If that is
                granted, all else follows.”
            </span>
                <span>− George Orwell, 1984</span>
            </div>
        )
    }
}*/

export default About;