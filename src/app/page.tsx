import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className={styles.main}>
                hello world!
            </main>
            <footer>
                hello world!
            </footer>
        </div>
    );
}
