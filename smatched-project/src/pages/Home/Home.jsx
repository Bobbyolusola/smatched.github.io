import React from "react";
import styles from "./Home.module.css";


const Home = () => {

    return (
        <>
            <h1 className={styles.mainContainer}> Home Page</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#120040" fill-opacity="1" d="M0,96L120,117.3C240,139,480,181,720,181.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div className={styles.secondContainer }>

            </div>
            <hr />
        </>
    )
}

export default Home;