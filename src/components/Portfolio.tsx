'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import Styles from '../styles/portfolio.module.css'

export default function Portfolio() {
    const router = useRouter();
    const [active, setActive] = useState('Projects');
    const selectButton = (label:string) => {
        setActive(label);
    }
    const buttons = [
        { icon: 'pi pi-star', label: 'Projects' },
        { icon: 'pi pi-book', label: 'Certificates' },
        { icon: 'pi pi-globe', label: 'Career' },
      ];
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-6xl font-bold text-cyan-300 leading-tight mb-6'>Portfolio</h2>
            </div>
            <div className='flex gap-4 justify-center'>
            <span className={Styles.card}>
                {buttons.map(({ icon, label }) => {
                    const isSelected = active === label;
                    return (
                    <Button
                        key={label}
                        icon={icon}
                        label={label}
                        className="w-xl h-24"
                        outlined={isSelected}
                        text={!isSelected}
                        onClick={() => selectButton(label)}
                    />
                    );
                })}
            </span>
            </div>
        </div>
    );
}
