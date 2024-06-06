import styles from './playgame.module.scss';
import React, { useEffect, useState } from 'react';

function PlayGame() {
    const [cars, setCars] = useState([]);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [smashCount, setSmashCount] = useState(0);
    const [passCount, setPassCount] = useState(0);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

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
        setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
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
                                            <td>{item.brand} {item.model}<span>{item.year}</span><span>{item.country}</span></td>
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
                            Go back to game
                        </button>
                    </section>
                </section>
            </main>
        )
    }

    return (
        <main id={styles.playgame}>
            <span id={styles.carindex}>{currentCarIndex+1} / {cars.length}</span>
            <div id={styles.card}>
                <h1>{car.brand} {car.model}</h1>
                <img src={`cars_img/${car.id}.webp`} alt={`${car.brand} ${car.model}`} />
                <div id={styles.details}>
                    <div className={styles.detcol}>
                        <h2>Brand</h2>
                        <h3>{car.brand}</h3>
                    </div>
                    <div className={styles.detcol}>
                        <h2>Model</h2>
                        <h3>{car.model}</h3>
                    </div>
                    <div className={styles.detcol}>
                        <h2>Year</h2>
                        <h3>{car.year}</h3>
                    </div>
                    <div className={styles.detcol}>
                        <h2>Country</h2>
                        <h3>{car.country}</h3>
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
                    See history
                    </button>
            </section>
        </main>
    );
}

export default PlayGame;