
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import styles from '../styles/navbar.module.css'
export default function BasicDemo() {
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'About',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-envelope'
        },
        {
            label: 'Skills',
            icon: 'pi pi-envelope'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        },
    ];
    
    return (
        <div>
            <Menubar model={items} />
        </div>
    )
}
        