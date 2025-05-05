'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Style from  "../styles/about.module.css";

export default function Portfolio() {
    const router = useRouter();
    
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-6xl font-bold text-cyan-300 leading-tight mb-6'>Portfolio</h2>
            </div>
        </div>
    );
}
