import PostList from '../components/PostList';
import styles from  '../styles/home.module.css';


function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Bem-Vindo ao Blog PostFlix</h1>
            </header>
            <main className={styles.main}>
                <PostList />
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    );
}

export default Home;