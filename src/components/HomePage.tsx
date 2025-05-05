'use client';
import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import About from "../components/About";
import Portfolio from "./Portfolio";
import { useRef } from "react";

export default function HomePage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (section: string) => {
        const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
            content: contentRef,
            about: aboutRef,
            projects: projectsRef,
            skills: skillsRef,
            contact: contactRef,
        };
    
        sectionMap[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div>
            <header>
                <div className="fixed top-0 right-0 left-0 z-10">
                    <Navbar onScrollTo={scrollToSection}/>
                </div>
            </header>
            <main>
                <div ref={contentRef} className={`${styles.main} scroll-mt-20 mt-20`}>
                    <Content />
                </div>
                <div ref={aboutRef} className={`${styles.main} scroll-mt-20`}>
                    <About />
                </div>
                <div ref={projectsRef} className={`${styles.main} scroll-mt-30`}>
                    <Portfolio />
                </div>
                <div ref={skillsRef} className={`${styles.main} scroll-mt-30`}>
                    Skills
                </div>
                <div ref={contactRef} className={`${styles.main} scroll-mt-30`}>
                    Contact
                </div>
            </main>
            <footer>
                hello world!
            </footer>
        </div>
    );
}
