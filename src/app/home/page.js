'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <h1>Welcome to the Home Page</h1>
            <div>
                <div><Link href="/chat?widget=video_query">Video Query</Link></div>
                <div>Content highlights</div>
                <div>Video generation</div>
                <div>Formative assessment</div>
                <div>Assessment feedback</div>
                <div>Mock HR</div>
                <div>Technical HR</div>
                <div>Spoken English</div>
                <div>
                    <Link href="/code-editor">
                        Coding Companion
                    </Link>
                </div>
            </div>
        </main>
    );
}
