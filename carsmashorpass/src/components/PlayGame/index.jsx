import styles from './playgame.module.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faClockRotateLeft, faPlay } from '@fortawesome/free-solid-svg-icons';

function PlayGame() {
    const [cars, setCars] = useState([]);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [smashCount, setSmashCount] = useState(0);
    const [passCount, setPassCount] = useState(0);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    const C_API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${C_API_URL}/cars`)
            .then(response => response.json())
            .then(data => setCars(shuffleArray(data)))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleSmash = () => {
        if (buttonsDisabled) return; // evitar spam boton mientras hay animacion de carta
        setSmashCount(smashCount + 1);
        const car = cars[currentCarIndex];
        fetch(`${C_API_URL}/cars/${car.id}/smash`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setCars(cars.map(c => c.id === car.id ? { ...c, smash: c.smash + 1 } : c));
                    addToHistory(car, 'S');
                }
            })
            .catch(error => console.error('Error smashing car:', error));

        goToNextCar();
    };

    const handlePass = () => {
        if (buttonsDisabled) return; // evitar spam boton mientras hay animacion de carta
        setPassCount(passCount + 1);
        const car = cars[currentCarIndex];
        fetch(`${C_API_URL}/cars/${car.id}/pass`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setCars(cars.map(c => c.id === car.id ? { ...c, pass: c.pass + 1 } : c));
                    addToHistory(car, 'P');
                }
            })
            .catch(error => console.error('Error passing car:', error));

        goToNextCar();
    };

    const addToHistory = (car, action) => {
        setHistory([{ ...car, action }, ...history]);
    };

    const goToNextCar = () => {
        setIsAnimating(true);
        setButtonsDisabled(true);
        setTimeout(() => {
            setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
        }, 250);
        setTimeout(() => {
            setIsAnimating(false);
            setButtonsDisabled(false);
        }, 500);
    };

    if (cars.length === 0) {
        return (
            <div id={styles.loading}>
                <img id={styles.loadingicon} src='CarTire.png' alt='Car Tyre Loading Icon' title='Car Tyre Loading Icon' />
                <h1>Loading...</h1>
                <p>If it is taking a long time, <br />it is possible that the server is not working correctly.</p>
                <p>Try again later.</p>
            </div>
        );
    }

    const car = cars[currentCarIndex];

    if (showHistory) {
        return (
            <main id={styles.playgame}>
                <section id={styles.history}>
                    <h1>Your History</h1>
                    {history.length === 0 ? (
                        <p id={styles.nohistorytxt}>There is no history yet. <br/>Start playing and come back later.</p>
                    ) : (
                        <div className={styles.tablescroll}>
                            <table>
                                <tbody>
                                    {history.map((item, index) => (
                                        <tr key={index}>
                                            <td>{history.length - index}</td>
                                            <td><img src={`${C_API_URL}/cars_img/${item.id}.webp`} alt={`${item.year} ${item.brand} ${item.model}`} /></td>
                                            <td>
                                                <Link to={item.moreinfo} target="_blank" className={styles.moreinfo}>
                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                                    {item.year} {item.brand} {item.model}
                                                </Link>
                                            </td>
                                            <td className={item.action === 'S' ? styles.smashtd : styles.passtd}>{item.action}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <section id={styles.contbackgamebtn}>
                        <button id={styles.backgamebtn} onClick={() => setShowHistory(false)}>
                            <FontAwesomeIcon icon={faPlay} />
                            Back to Game
                        </button>
                    </section>
                </section>
            </main>
        )
    }

    return (
        <main id={styles.playgame}>
            <span id={styles.carindex}>{currentCarIndex+1} / {cars.length}</span>
            <div className={`${styles.card} ${isAnimating ? styles.animating : ''}`} tabIndex="0">
                <h1><span>{car.brand}</span> {car.model}</h1>
                <img src={`${C_API_URL}/cars_img/${car.id}.webp`} alt={`${car.brand} ${car.model}`} />
                <div id={styles.detflex}>
                    <div className={styles.details}>
                        <div className={styles.detcol}>
                            <h2>Year</h2>
                            <h3>{car.year}</h3>
                        </div>
                        <div className={styles.detcol}>
                            <h2>Country</h2>
                            <h3>{car.country}</h3>
                        </div>
                        <div className={styles.detcol}>
                            <h2>Engine</h2>
                            <h3>{car.engine}</h3>
                        </div>
                        <div className={styles.detcol}>
                            <h2>Power</h2>
                            <h3>{car.power} bhp</h3>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.detcol}>
                            <h2>Layout</h2>
                            <h3>{car.layout}</h3>
                        </div>
                        <div className={styles.detcol}>
                            <h2>Transmission</h2>
                            <h3>{car.transmission} speed</h3>
                        </div>
                        <div className={styles.detcol}>
                            <h2>Weight</h2>
                            <h3>{car.weight} kg</h3>
                        </div>
                        <div className={styles.detcol}>
                            <Link to={car.moreinfo} target="_blank" className={styles.moreinfo}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                Open Forza Wiki
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section id={styles.contbtn}>
                <button id={styles.smashbtn} onClick={handleSmash}><span>{smashCount}</span>Smash</button>
                <button id={styles.passbtn} onClick={handlePass}><span>{passCount}</span>Pass</button>
            </section>
            <section id={styles.conthistorybtn}>
                <button id={styles.historybtn} onClick={() => setShowHistory(true)}>
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                    See History
                    </button>
            </section>
        </main>
    );
}

export default PlayGame;