import React from 'react';
import MobileInfoSection from './MobileInfoSection';
import MoodagentImage from '../assets/images/MoodagentImage.png';

export default function MobileVersion() {
    return (
        <div className="mobile-section">
            <MobileInfoSection />
            <div className="mobile-image-section"><img src={MoodagentImage} alt="Moodagent" /></div>
        </div>
    )
}
