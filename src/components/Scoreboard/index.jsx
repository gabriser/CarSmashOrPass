import React, { useState, useEffect } from 'react';
import styles from './scoreboard.module.scss';
import { Link } from 'react-router-dom';

function Scoreboard() {
    const [view, setView] = useState('all'); // Estado para manejar la vista de la tabla
    const [smashedCars, setSmashedCars] = useState([]);
    const [passedCars, setPassedCars] = useState([]);
    const [allCars, setAllCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null); // Estado para el coche seleccionado
    let i = 1;

    const fetchSmashedCars = async () => {
        const response = await fetch('http://localhost:3001/cars/mostsmashed');
        const data = await response.json();
        setSmashedCars(data);
    };

    const fetchPassedCars = async () => {
        const response = await fetch('http://localhost:3001/cars/mostpassed');
        const data = await response.json();
        setPassedCars(data);
    };

    const fetchAllCars = async () => {
        const response = await fetch('http://localhost:3001/cars/ordered');
        const data = await response.json();
        setAllCars(data);
    };

    useEffect(() => {
        fetchSmashedCars();
        fetchPassedCars();
        fetchAllCars();
    }, []);

    if (smashedCars.length === 0) {
        return (
            <div id={styles.loading}>
                <h1>Loading...</h1>
                <p>If it is taking a long time, it is possible that the server is not working correctly. Try again later.</p>
            </div>
        );
    }

    const handleKeyDown = (event, car) => {
        if (event.key === 'Enter') {
            setSelectedCar(car);
        }
    };

    const renderCarCard = (car) => (
        <div className={`${styles.card}`} tabIndex="0">
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
    );

    return (
        <main id={styles.scoreboard}>

            {selectedCar ? (
                <section id={styles.cardetail}>
                    {renderCarCard(selectedCar)}
                    <section id={styles.contbackscoreboardbtn}>
                        <button id={styles.backscoreboardbtn} onClick={() => setSelectedCar(null)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224z" /></svg>
                            Back to Scoreboard
                        </button>
                    </section>
                </section>
            ) : (
                <>
                    <h1>Scoreboard</h1>

                    <section id={styles.contbtn}>
                        <button id={styles.smashbtn} onClick={() => setView('smashed')}>Most Smashed</button>
                        <button id={styles.allbtn} onClick={() => setView('all')}>All</button>
                        <button id={styles.passbtn} onClick={() => setView('passed')}>Most Passed</button>
                    </section>

                    {view === 'smashed' && (
                        <section id={styles.smashtable}>
                            <h2>Most Smashed</h2>
                            <div className={styles.tablescroll}>
                                <table>
                                    <tbody>
                                        {smashedCars.map(car => (
                                            <tr key={car.id}>
                                                <td>{i++}</td>
                                                <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                                <td>
                                                    <span onClick={() => setSelectedCar(car)} onKeyDown={(event) => handleKeyDown(event, car)} className={styles.moreinfo} tabIndex="0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                                                        {car.year} {car.brand} {car.model}
                                                    </span>
                                                </td>
                                                <td>{car.smash}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {view === 'passed' && (
                        <section id={styles.passtable}>
                            <h2>Most Passed</h2>
                            <div className={styles.tablescroll}>
                                <table>
                                    <tbody>
                                        {passedCars.map(car => (
                                            <tr key={car.id}>
                                                <td>{i++}</td>
                                                <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                                <td>
                                                    <span onClick={() => setSelectedCar(car)} onKeyDown={(event) => handleKeyDown(event, car)} className={styles.moreinfo} tabIndex="0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                                                        {car.year} {car.brand} {car.model}
                                                    </span>
                                                </td>
                                                <td>{car.pass}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {view === 'all' && (
                        <section id={styles.alltable}>
                            <h2>All Cars</h2>
                            <div className={styles.tablescroll}>
                                <table>
                                    <tbody>
                                        {allCars.map(car => (
                                            <tr key={car.id}>
                                                <td>{i++}</td>
                                                <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                                <td>
                                                    <span onClick={() => setSelectedCar(car)} onKeyDown={(event) => handleKeyDown(event, car)} className={styles.moreinfo} tabIndex="0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                                                        {car.year} {car.brand} {car.model}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span id={styles.allsmash}>{car.smash}</span><br/>
                                                    <span id={styles.allpass}>{car.pass}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}
                </>
            )}
        </main>
    );
}

export default Scoreboard;