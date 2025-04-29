'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import profilePicture from '../assets/perfilpicture.jpg';
import Image from 'next/image';
import { Button } from 'primereact/button';

export default function Content() {
    const router = useRouter();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 px-6'>
            <div className='flex justify-end md:mr-10'>
                <div className='max-w-xl space-y-4'>
                    <h2 className='text-6xl font-bold leading-tight'>Full stack</h2>
                    <h2 className='text-6xl font-bold text-cyan-300 leading-tight'>developer</h2>
                    <h1 className='text-3xl mt-4 text-gray-300'>
                        Hey, I'm <span className='text-white'>Maicon Alves</span>!
                    </h1>
                    <p className='text-gray-400'>
                        I work as a Fullstack Developer, always eager to learn and improve,
                    </p>
                    <p className='text-gray-400'>
                        fully committed to delivering <span className='text-cyan-300'>high-quality</span> solutions.
                    </p>
                    <div>
                        <Button label="Projects" icon="pi pi-star"/>
                        <Button label="Contact" icon="pi pi-phone" text />
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>
                            <Button  icon="pi pi-linkedin" outlined/>
                        </div>
                        <div className='mr-2'>
                            <Button  icon="pi pi-github" outlined  />
                        </div>
                        <div className='mr-2'>
                            <Button  icon="pi pi-envelope" outlined  />
                        </div>
                    </div>
                </div>
            </div>
                <div className='flex justify-center md:justify-start'>
                    <Image
                    src={profilePicture}
                    width={400}
                    height={400}
                    alt='Profile picture'
                    className='rounded-2xl shadow-xl'
                    />
                </div>
        </div>
    );
}
