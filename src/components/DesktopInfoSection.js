import React from 'react';
import Info from './Info';

const desktopInfoArray = [
    "<span>1<hr></span><span>If you already have a Moodagent account, continue to the next step. If not, follow the steps above to create your account using our mobile app.</span>", 
    "<span>2<hr></span><span>Download the Moodagent desktop app for Mac or Windows here:</span> <br> <span><button>macOS</button> <button>Windows</button> </span>",
    "<span>3<hr></span><span>Install as directed on your device.</span>",
    "<span>4<hr></span><span>Launch the desktop app and log in with your email and password Hint: If you created your account using Apple or Facebook. You never had to choose a password. Just click ‘Forgot password?’ to get a verification code and enter that along with your chosen password.</span>",
    "<span>5<hr></span><span>Start listening Now that you’re rocking the desktop app, you can explore and discover at the office, at home, or when your phone just needs a break.</span>"
]

export default function MobileInfoSection() {
    return (
        <div className="desktop-info-section">
            <h3>Moodagent on desktop:</h3>
            <ol className="list-items">
                {desktopInfoArray.map(info => <Info info={info} />)}
            </ol>
        </div>
    )
}
