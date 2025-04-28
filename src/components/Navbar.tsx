'use client';
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation'
export default function BasicDemo() {
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url:'/page'
        },
        {
            label: 'About',
            icon: 'pi pi-info-circle',
            url:'/about'
        },
        {
            label: 'Projects',
            icon: 'pi pi-star',
            url:'/projects'
        },
        {
            label: 'Skills',
            icon: 'pi pi-book',
            url:'/skills'
        },
        {
            label: 'Contact',
            icon: 'pi pi-linkedin',
            url:'https://www.linkedin.com/in/maicon-alves-03700419b/'
        },
    ];

    const end = (
        <div className="flex align-items-center gap-2">
            <Button label="Download CV" icon="pi pi-download" onClick={donwloadCV} />
        </div>
    );

    function donwloadCV(){
        window.location.href = 'https://github.com'
    }
    
    return (
        <div>
            <Menubar model={items} end={end}/>
        </div>
    )
}
        