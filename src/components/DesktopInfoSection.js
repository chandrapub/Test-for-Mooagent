import React from 'react';
import MobileInfo from './MobileInfo';

const desktopInfoArray = [
    "If you already have a Moodagent account, continue to the next step. If not, follow the steps above to create your account using our mobile app.", 
    "Download the Moodagent desktop app for Mac or Windows here: <br> <button>macOS</button> <button>Windows</button>",
    "Install as directed on your device.",
    "Launch the desktop app and log in with your email and password Hint: If you created your account using Apple or Facebook. You never had to choose a password. Just click ‘Forgot password?’ to get a verification code and enter that along with your chosen password.",
    "Start listening Now that you’re rocking the desktop app, you can explore and discover at the office, at home, or when your phone just needs a break."
]

export default function MobileInfoSection() {
    return (
        <div className="desktop-info-section">
            <h3>Moodagent on desktop:</h3>
            <ol className="mobile-list-items">
                {desktopInfoArray.map(info => <MobileInfo info={info} />)}
            </ol>
        </div>
    )
}
