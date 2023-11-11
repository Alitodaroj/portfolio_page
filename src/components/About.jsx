import React, { useState, useEffect } from "react";
import '../About.css';

const Typewriter = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayText.length < text.length) {
                setDisplayText(current => current + text[current.length])
            } else {
            clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [displayText, text, speed]);
    return (
        <div>{displayText}</div>
    )
}

export default function About() {
    return (
        <section id="about">
            <div className="mt-4">
                <div className="profile">
                    <img src="https://i.imgur.com/3nrrF0O.jpg" alt='bio pic' class='img-fluid rounded-circle'></img>
                </div>
                <h1 className="success">
                <Typewriter text="Hi, I'm Alan!" speed={100} />
                </h1>
                    <h3 className="p-3">I love to build amazing apps. I am a freelance software engineer interested in making network connections and learning as much about coding as I can. In my previous roles, I learned valuable methods to tackle unique problems and overcome adversity in a number of difficult situations. I devised how to create unique solutions to unique problems and was pushed to grow as a result of the various situations I faced. My ability to adapt and thrive in a number of different environments has allowed me to excel in a number of roles.
                    </h3>
            </div>
        </section>
    )
}