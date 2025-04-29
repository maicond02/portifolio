import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";
import Content from "../components/Content"

export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main >
                <div className={styles.main}>
                    <Content />
                </div>
                <div className={styles.main}>
                    olá
                </div>
            </main>
            <footer>
                hello world!
            </footer>
        </div>
    );
}
