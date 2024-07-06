import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (

        <footer id={styles.footer}>

            <section>

                <Link to="/credits">
                    <FontAwesomeIcon icon={faCircleInfo} />
                </Link>

            </section>

            <section>

                <Link target='_blank' to="https://github.com/gabriser/CarSmashOrPass">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>

            </section>

        </footer>

    )
}

export default Footer