'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import Styles from '../styles/portfolio.module.css'
import { Card } from 'primereact/card';

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
      const cards = [
        {id:0, title:'Agenda', content:'Projeto de agenda', header: 'img'},
        {id:1, title:'Teste', content:'Projeto de teste', header: 'img'},
        {id:2, title:'Teste2', content:'Projeto de teste 2', header: 'img'}
      ]
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
            <div className={`grid grid-cols-3 w-full gap-6 p-12 projects ${active === 'Projects' ? '' : 'hidden'}`}>
                {cards.map(({ title, content }) => (
                    <Card key={title} title={title}>
                    <p>{content}</p>
                    </Card>
                ))}
            </div>

            <div className={`certificates ${active === 'Certificates' ? '' : 'hidden'}`}>

                <p>Certificates</p>

            </div>

            <div className={`career ${active === 'Career' ? '' : 'hidden'}`}>
                <p>Career</p>
            </div>

        </div>
    );
}
