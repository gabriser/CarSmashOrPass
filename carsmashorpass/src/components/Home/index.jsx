import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay, faRectangleList } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        
        <main id={styles.home}>

            <img id={styles.logo} src='CarSmashOrPass_logo.png' alt='Car Smash Or Pass Logo' title='Car Smash Or Pass Logo' />

            <h1>Car <span>Smash</span> Or <span>Pass</span></h1>

            <Link to="/play" tabIndex="-1">
                <button id={styles.playbtn}>
                    <FontAwesomeIcon icon={faPlay} />
                    Play Game
                </button>
            </Link>

            <Link to="/scoreboard" tabIndex="-1">
                <button>
                    <FontAwesomeIcon icon={faRectangleList} />
                    Scoreboard
                </button>
            </Link>

            <Link to="/credits" tabIndex="-1">
                <button>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    Credits
                </button>
            </Link>

        </main>
        
    )
}

export default Home