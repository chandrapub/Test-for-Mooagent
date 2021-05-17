import React from 'react';
import DesktopInfoSection from './DesktopInfoSection';
import DesktopPlayer from '../assets/images/DesktopPlayer.png';

export default function MobileVersion() {
    return (
        <div className="desktop-section">
            <div className="desktop-image-section"><img src={DesktopPlayer} alt="Player" /></div>
            <DesktopInfoSection />
        </div>
    )
}
