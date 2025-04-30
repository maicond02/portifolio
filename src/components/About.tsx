'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function About() {
    const router = useRouter();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 px-6'>
            About me
        </div>
    );
}
