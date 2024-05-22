import { Link } from 'react-router-dom';
import styles from './home.module.scss';

function Home() {
    return (
        
        <main id={styles.home}>

            <img id={styles.logo} src='CarSmashOrPass_logo.png' alt='Car Smash Or Pass Logo' title='Car Smash Or Pass Logo' />

            <h1>Car <span>Smash</span> Or <span>Pass</span></h1>

            <Link to="/play">
                <button id={styles.playbtn}>Play Game</button>
            </Link>

            <Link to="/scoreboard">
                <button>Scoreboard</button>
            </Link>

            <Link to="/credits">
                <button>Credits</button>
            </Link>

        </main>
        
    )
}

export default Home