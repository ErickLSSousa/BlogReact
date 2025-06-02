import PostList from '../components/PostList';
import styles from  './components/home.module.css';


function Home() {
    return (
        <div className={styles.container}>
            <header>
                <h1>Bem-Vindo ao Blog PostFlix</h1>
            </header>
            <main>
                <PostList />
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Home;