import React from 'react';

export default function MobileInfo({info}) {
    return (
        <li className="info" dangerouslySetInnerHTML={{ __html: info }} />
    )
}
