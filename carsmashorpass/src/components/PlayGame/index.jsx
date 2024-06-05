import styles from './playgame.module.scss';
import React, { useEffect, useState } from 'react';

function PlayGame() {
    const [cars, setCars] = useState([]);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [smashCount, setSmashCount] = useState(0);
    const [passCount, setPassCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const handleSmash = () => {
        setSmashCount(smashCount + 1);
        const car = cars[currentCarIndex];
        fetch(`http://localhost:3001/cars/${car.id}/smash`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setCars(cars.map(c => c.id === car.id ? { ...c, smash: c.smash + 1 } : c));
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
                }
            })
            .catch(error => console.error('Error passing car:', error));

        goToNextCar();
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
        </main>
    );
}

export default PlayGame;