'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Style from  "../styles/about.module.css";

export default function About() {
    const router = useRouter();
    const headerProjects = (
        <div className='flex place-content-between pt-4 pl-4 pr-4'>
            <h2 className='text-2xl font-bold'>Total Projects</h2>
            <i className="pi pi-star" style={{ fontSize: '2rem' }}></i>
        </div>
    );
    const headerCertificates = (
        <div className='flex place-content-between pt-4 pl-4 pr-4'>
            <h2 className='text-2xl font-bold'>Certificates</h2>
            <i className="pi pi-book" style={{ fontSize: '2rem' }}></i>
        </div>
    );
    const headerExperience = (
        <div className='flex place-content-between pt-4 pl-4 pr-4'>
            <h2 className='text-2xl font-bold'>Experience</h2>
            <i className="pi pi-globe" style={{ fontSize: '2rem' }}></i>
        </div>
    );
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-6xl font-bold text-cyan-300 leading-tight mb-6'>About me</h2>
            </div>
            <div className='text-center'>
                <p>Full Stack Developer with experience in building scalable and innovative solutions using technologies such as Java, Spring Boot, Angular, and Python.</p>
                <p>I’ve contributed to projects at a multinational company (3M), where I enhanced my technical skills and collaborated within multidisciplinary teams.</p>
                <p>Passionate about continuous learning and committed to applying best practices in software engineering, I strive to deliver efficient and high-impact solutions.</p>
            </div>
            <div className='flex justify-center mt-4'>
                <Button label="Download CV" icon="pi pi-download"/>
                <Button label="View Projects" icon="pi pi-star" text />
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 mt-6 w-4xl gap-6'>
                    <div className='h-full'>
                        <Card header={headerProjects} className="h-full">
                            <p className="m-0">
                                I have been developing <span className='font-bold text-cyan-300'>four</span> applications using modern technologies across both mobile and web platforms.
                            </p>
                        </Card>
                    </div>
                    <div className='h-full'>
                        <Card header={headerCertificates} className="h-full">
                            <p className="m-0">
                                I have earned <span className='font-bold text-cyan-300'>six</span> certificates that reflect my commitment to continuous learning and professional development in modern technologies and software engineering practices.
                            </p>
                        </Card>
                    </div>
                    <div className='h-full'>
                        <Card header={headerExperience} className="h-full">
                            <p className="m-0">
                                I have <span className='font-bold text-cyan-300'>three</span> years of experience in software development, working on scalable solutions and collaborating with cross-functional teams to deliver high-impact projects.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
