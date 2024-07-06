import React, { useState, useEffect } from 'react';
import styles from './scoreboard.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faRectangleList, faCar } from '@fortawesome/free-solid-svg-icons';

function Scoreboard() {
    const [view, setView] = useState('all'); // Estado para manejar la vista de la tabla
    const [smashedCars, setSmashedCars] = useState([]);
    const [passedCars, setPassedCars] = useState([]);
    const [allCars, setAllCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null); // Estado para el coche seleccionado
    let i = 1;

    const C_API_URL = import.meta.env.VITE_API_URL;

    const fetchSmashedCars = async () => {
        const response = await fetch(`${C_API_URL}/cars/mostsmashed`);
        const data = await response.json();
        setSmashedCars(data);
    };

    const fetchPassedCars = async () => {
        const response = await fetch(`${C_API_URL}/cars/mostpassed`);
        const data = await response.json();
        setPassedCars(data);
    };

    const fetchAllCars = async () => {
        const response = await fetch(`${C_API_URL}/cars/ordered`);
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
                <img id={styles.loadingicon} src='CarTire.png' alt='Car Tyre Loading Icon' title='Car Tyre Loading Icon' />
                <h1>Loading...</h1>
                <p>If it is taking a long time, <br />it is possible that the server is not working correctly.</p>
                <p>Try again later.</p>
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
    );

    return (
        <main id={styles.scoreboard}>

            {selectedCar ? (
                <section id={styles.cardetail}>
                    {renderCarCard(selectedCar)}
                    <section id={styles.contbackscoreboardbtn}>
                        <button id={styles.backscoreboardbtn} onClick={() => setSelectedCar(null)}>
                            <FontAwesomeIcon icon={faRectangleList} />
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
                                                <td><img src={`${C_API_URL}/cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                                <td>
                                                    <span onClick={() => setSelectedCar(car)} onKeyDown={(event) => handleKeyDown(event, car)} className={styles.moreinfo} tabIndex="0">
                                                        <FontAwesomeIcon icon={faCar} />
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
                                                <td><img src={`${C_API_URL}/cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                                <td>
                                                    <span onClick={() => setSelectedCar(car)} onKeyDown={(event) => handleKeyDown(event, car)} className={styles.moreinfo} tabIndex="0">
                                                        <FontAwesomeIcon icon={faCar} />
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
                                                <td><img src={`${C_API_URL}/cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                                <td>
                                                    <span onClick={() => setSelectedCar(car)} onKeyDown={(event) => handleKeyDown(event, car)} className={styles.moreinfo} tabIndex="0">
                                                        <FontAwesomeIcon icon={faCar} />
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