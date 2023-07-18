import React from 'react';
import Link from 'next/link';

const Confirmation = () => {
    return (
        <div>
            <h1>Message Sent</h1>
            <p>I'll get back to you within a couple days, sit tight</p>
            <Link href="/">
                <a>Back to homepage</a>
            </Link>
        </div>
    );
};

export default Confirmation;
