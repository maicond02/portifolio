'use client';
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

type NavbarProps = {
    onScrollTo: (section: string) => void;
  };

export default function Navbar({ onScrollTo }: NavbarProps) {
  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        onScrollTo("content");
      },
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      command: () => {
        onScrollTo("about");
      },
    },
    {
      label: 'Projects',
      icon: 'pi pi-star',
      command: () => {
        onScrollTo("projects");
      },
    },
    {
      label: 'Skills',
      icon: 'pi pi-book',
      command: () => {
        onScrollTo("skills");
      },
    },
    {
      label: 'Contact',
      icon: 'pi pi-linkedin',
      command: () => {
        onScrollTo("contact");
      },
    },
  ];

  const end = (
    <div className="flex align-items-center gap-2">
      <Button label="Download CV" icon="pi pi-download" onClick={donwloadCV} />
    </div>
  );

  function donwloadCV() {
    window.location.href = 'https://github.com';
  }

  return <Menubar model={items} end={end}/>;
}
