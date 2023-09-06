import React from "react";
import styles from "./Game.module.css";

const Game = () => {

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.innerBox}>
                        <div className={styles.rightFirstBox}>Enhance Your Game <br/> Monetization Model .</div>
                        <div className={styles.leftFirstBox}>Image</div>
                    </div>
                </div>

                <div className={styles.secondContainerBox}>
                    <div className={styles.rightSecondBox}>
                        Level up your in-game monetization strategy
                    </div>
                    <div className={styles.leftSecondBox}>
                        Image
                    </div>
                </div>

                <div className={styles.thirdContainerBox}>
                    <div className={styles.rightThirdBox}>
                        Image
                    </div>
                    <div className={styles.leftThirdBox}>
                        Are Adwalls the answer?
                    </div>
                </div>

                <div className={styles.FourthContainerBox}>
                    <div className={styles.innerFourthContainerBox}>
                        <div className={styles.topFourthBox}> How it works </div>
                        <div className={styles.lowerFourthBox}></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Game;