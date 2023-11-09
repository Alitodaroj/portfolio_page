import React from "react";
import '../About.css';

export default function About() {
    return (
        <section id="about">
            <div className="mt-4">
                <div class="profile">
                    <img src="https://i.imgur.com/3nrrF0O.jpg" alt='bio pic' class='img-fluid rounded-circle'></img>
                </div>
                <h1 className="success">
                    Hi, I'm Alan. 
                    <h3 classname="p-3">I love to build amazing apps. I am a software engineer interested in making network connections and learning as much about coding as I can. In my previous roles, I learned valuable methods to tackle unique problems and overcome adversity in a number of difficult situations. I devised how to create unique solutions to unique problems and was pushed to grow as a result of the various situations I faced. My ability to adapt and thrive in a number of different environments has allowed me to excel in a number of roles.
                    </h3>
                </h1>
            </div>
        </section>
    )
}