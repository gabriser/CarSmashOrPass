import { Link } from 'react-router-dom';
import styles from './credits.module.scss';

function Credits() {
    return (
        
        // <a href="https://www.flaticon.com/free-icons/sport-car" title="sport car icons">Sport car icons created by DinosoftLabs - Flaticon</a>
        // <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->

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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                        <p>Html5</p>
                    </article>

                    <article>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                        <p>Css3</p>
                    </article>

                    <article>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
                        <p>Js</p>
                    </article>

                    <article>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
                        <p>React</p>
                    </article>

                    <article>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M301.8 378.9c-.3 .6-.6 1.1 0 0zm249.1-87a131.2 131.2 0 0 0 -58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9a122.8 122.8 0 0 0 -5.3 19.1c-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.9 77.3-42.1 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4 .8-.7 1.3-.9 1.7 .3-.5 .5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4 .3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.8-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8 61.8-23.8 109.9-90.1 95.8-145.6C386.5 18.3 293-.2 204.6 31.2c-52.7 18.7-109.7 48.1-150.7 86.4-48.7 45.6-56.5 85.3-53.3 101.9 11.4 58.9 92.6 97.3 125.1 125.7-1.6 .9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4 .7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5a201.2 201.2 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.3 .3 0 0 0 .1 .2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.2-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.7 450.1 270 450.1 270a201.2 201.2 0 0 0 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.5 79.5 0 0 0 21.6-11.1c12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zm-429.2 144.7c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9 .8-.5 1.2-.7 1.2-.7 .9-.6 1.9-1.1 2.9-1.7 8.3 30.4 .3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5 .1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5a36.2 36.2 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.9 34.4z"/></svg>
                        <p>Sass</p>
                    </article>

                    <article>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
                        <p>Express</p>
                    </article>

                    <article>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
                        <p>Postgres</p>
                    </article>

                </section>

            </section>

        </main>
        
    )
}

export default Credits