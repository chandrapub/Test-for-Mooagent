import React from 'react';

export default function MobileInfo({info}) {
    return (
        <li className="mobile-info" dangerouslySetInnerHTML={{ __html: info }} />
    )
}
