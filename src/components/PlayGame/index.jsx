import styles from './playgame.module.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PlayGame() {
    const [cars, setCars] = useState([]);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [smashCount, setSmashCount] = useState(0);
    const [passCount, setPassCount] = useState(0);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/cars')
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
        fetch(`http://localhost:3001/cars/${car.id}/smash`, { method: 'POST' })
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
        fetch(`http://localhost:3001/cars/${car.id}/pass`, { method: 'POST' })
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
                <h1>Loading...</h1>
                <p>If it is taking a long time, it is possible that the server is not working correctly. Try again later.</p>
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
                                            <td><img src={`cars_img/${item.id}.webp`} alt={`${item.year} ${item.brand} ${item.model}`} /></td>
                                            <td>
                                                <Link to={item.moreinfo} target="_blank" className={styles.moreinfo}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
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
                <img src={`cars_img/${car.id}.webp`} alt={`${car.brand} ${car.model}`} />
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg>
                    See History
                    </button>
            </section>
        </main>
    );
}

export default PlayGame;