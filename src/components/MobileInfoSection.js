import React from 'react';
import Info from './Info';

const mobileInfoArray = [
    "<span>1<hr></span><span>Download the Moodagent app here:</span><br> <span><button>Install</button> </span>", 
    "<span>2<hr></span><span>Follow the on-screen instructions to create your accout.</span>",
    "<span>3<hr></span><span>Tell us what you like to listen to.<br> You can choose from the suggested artists or search for anyone you want, as long as you pick at least three. You might wanna pick even more - this will be the foundation of your personalized experience on Moodagent.</span>",
    "<span>4<hr></span><span>Start listening. The more you listen, the more you ❤️, the more moodagents you create, the better your personalized recommendations will become.</span>"
];

export default function MobileInfoSection() {
    return (
        <div className="mobile-info-section">
            <header>Getting strated</header>
            <h3>Moodagent on mobile:</h3>
            <ol className="list-items">
                {mobileInfoArray.map(info => <Info info={info} />)}
            </ol>
        </div>
    )
}
