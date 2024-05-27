import styles from './playgame.module.scss';

function PlayGame() {
    return (
        
        <main id={styles.playgame}>

            <div id={styles.card}>
                <h1>Titulo aaa</h1>
                <img src='cars_img/1.webp' alt='' title='' />
                <div id={styles.details}>
                    <div className={styles.detcol}>
                        <h2>Brand</h2>
                        <h3>aaa</h3>
                    </div>
                    <div className={styles.detcol}>
                        <h2>Model</h2>
                        <h3>aaa</h3>
                    </div>
                    <div className={styles.detcol}>
                        <h2>Year</h2>
                        <h3>aaa</h3>
                    </div>
                    <div className={styles.detcol}>
                        <h2>Country</h2>
                        <h3>aaa</h3>
                    </div>
                </div>
            </div>

            <section id={styles.contbtn}>
                <button id={styles.smashbtn} onClick={(e)=>SmashCar()} >Smash</button>
                <button id={styles.passbtn} onClick={(e)=>PassCar()}>Pass</button>
            </section>

        </main>
        
    )
}

function SmashCar() {
    alert("smash");
}

function PassCar() {
    alert("pass");
}

export default PlayGame