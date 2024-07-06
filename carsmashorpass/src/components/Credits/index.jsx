import { Link } from 'react-router-dom';
import styles from './credits.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Credits() {
    return (

        <main id={styles.credits}>
            
            <h1>Credits</h1>

            <p>Created by Gabriel Serrat Espejo</p>

            <section className={styles.cont}>

                <h2>Assets</h2>

                <ul>
                    <li>Racing Car free icon created by <Link target="_blank" to="https://www.flaticon.com/free-icon/racing-car_4745016">DinosoftLabs on Flaticon</Link></li>
                    <li>Car Tire free icon created by <Link target="_blank" to="https://www.flaticon.es/icono-gratis/llanta-de-carro_5266107">Freepik on Flaticon</Link></li>
                    <li>Font Awesome Free 6.5.2 by <Link target="_blank" to="https://fontawesome.com">@fontawesome</Link> <Link target="_blank" to="https://fontawesome.com/license/free">License</Link> - Copyright 2024 Fonticons, Inc.</li>
                    <li>Montserrat Font Family from <Link target="_blank" to="https://fonts.google.com/specimen/Montserrat/about?query=montserrat">Google Fonts (OPL License)</Link></li>
                    <li>Reset CSS by Meyer Web <Link to="https://meyerweb.com/eric/tools/css/reset/reset.css" target="_blank">reset.css</Link></li>
                    <li>Forza Wiki: <Link to="https://forza.fandom.com/wiki/Forza_Horizon_5/Cars" target="_blank">Forza Horizon 5 Cars</Link>. Forza Wiki made in <Link to="https://fandom.com/" target="_blank">Fandom &copy;</Link>. <Link to="https://forza.net/" target="_blank">Forza</Link> Games Franchise: <Link to="https://www.turn10studios.com/" target="_blank">Turn 10 Studios, Microsoft &copy;</Link> and <Link to="https://playground-games.com/" target="_blank">Playground Games, Microsoft &copy;</Link></li>
                </ul>

            </section>

            <section className={styles.cont}>

                <h2>Technologies</h2>

                <section id={styles.tech}>

                    <article>
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>Html5</p>
                    </article>

                    <article>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>Css3</p>
                    </article>

                    <article>
                        <FontAwesomeIcon icon={faJs} />
                        <p>Js</p>
                    </article>

                    <article>
                        <FontAwesomeIcon icon={faReact} />
                        <p>React</p>
                    </article>

                    <article>
                        <FontAwesomeIcon icon={faSass} />
                        <p>Sass</p>
                    </article>

                    <article>
                        <FontAwesomeIcon icon={faNodeJs} />
                        <p>Express</p>
                    </article>

                    <article>
                        <FontAwesomeIcon icon={faDatabase} />
                        <p>Postgres</p>
                    </article>

                </section>

            </section>

        </main>
        
    )
}

export default Credits