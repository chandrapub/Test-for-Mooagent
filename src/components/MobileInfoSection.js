import React from 'react';
import MobileInfo from './MobileInfo';

const mobileInfoArray = [
    "Download the Moodagent app here: <br><button>Install</button>", 
    "Follow the on-screen instructions to create your accout.",
    "Tell us what you like to listen to.<br> You can choose from the suggested artists or search for anyone you want, as long as you pick at least three. You might wanna pick even more - this will be the foundation of your personalized experience on Moodagent.",
    "Start listening. The more you listen, the more you ❤️, the more moodagents you create, the better your personalized recommendations will become."
]

export default function MobileInfoSection() {
    return (
        <div className="mobile-info-section">
            <header>Getting strated</header>
            <h3>Moodagent on mobile:</h3>
            <ol className="mobile-list-items">
                {mobileInfoArray.map(info => <MobileInfo info={info} />)}
            </ol>
        </div>
    )
}
