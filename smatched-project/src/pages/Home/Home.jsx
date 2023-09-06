import React from "react";
import styles from "./Home.module.css";


const Home = () => {

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.innerBox}>
                        <div className={styles.rightFirstBox}>Boost Monetization <br/> Retain Users.</div>
                        <div className={styles.leftFirstBox}>Image</div>
                    </div>
                </div>

                <div className={styles.secondContainerBox}>
                    <div className={styles.rightSecondBox}>
                        Image
                    </div>
                    <div className={styles.leftSecondBox}>
                        Smatched provides an alternative Subscription Model
                    </div>
                </div>

                <div className={styles.thirdContainerBox}>
                    <div className={styles.rightThirdBox}>
                        Image
                    </div>
                    <div className={styles.leftThirdBox}>
                        Why partner with Smatched?
                    </div>
                </div>

                <div className={styles.FourthContainerBox}>
                     <div className={styles.topFourthBox}> How it works </div>
                     <div className={styles.lowerFourthBox}>
                         <div className={styles.lowerFourthBox1}>Box one</div>
                         <div className={styles.lowerFourthBox1}>Box two</div>
                         <div className={styles.lowerFourthBox1}>Box three</div>
                         <div className={styles.lowerFourthBox1}>Box four</div>
                     </div>
                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#120040" fill-opacity="1" d="M0,96L120,117.3C240,139,480,181,720,181.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div className={styles.lastContainer}>
                <div className={styles.lastContainerBox}>
                    <div className={styles.rightLastContainer}></div>
                    <div className={styles.leftLastContainer}></div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home;