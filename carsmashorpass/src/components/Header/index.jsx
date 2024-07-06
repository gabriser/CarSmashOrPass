import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRectangleList } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (

        <header id={styles.header}>

            <section>

                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>

            </section>

            <section>

            <Link to="/scoreboard">
                <FontAwesomeIcon icon={faRectangleList} />
            </Link>

            </section>

        </header>

    )
}

export default Header