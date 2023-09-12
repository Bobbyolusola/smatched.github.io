import React from "react";
import styles from "./NewsPaper.module.css";

const NewsPaper = () => {

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.innerBox}>
                        <div className={styles.rightFirstBox}>Newspaper Publishing <br/>  Industry .</div>
                        <div className={styles.leftFirstBox}>Image</div>
                    </div>
                </div>

                <div className={styles.secondContainerBox}>
                    <div className={styles.rightSecondBox}>
                        Smatched can help you
                    </div>
                    <div className={styles.leftSecondBox}>
                        <div className={styles.empowerRevenue}>
                            <div className={styles.empower}></div>
                            <div className={styles.revenue}></div>
                        </div>
                        <div className={styles.unlockSubscription}>
                            <div className={styles.unlock}></div>
                            <div className={styles.subscription}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.thirdContainerBox}>
                    <div className={styles.rightThirdBox}>
                        <img src="/img/Group_n.png" alt=""/>
                    </div>
                    <div className={styles.leftThirdBox}>
                    </div>
                </div>

                <div className={styles.fourthContainerBox}>
                    <div className={styles.innerFourthContainerBox}>
                        <div className={styles.topFourthBox}>
                            <h3> Image </h3>
                        </div>
                        <div className={styles.lowerFourthBox}>
                            <h5>
                                Embrace change, ensure sustainability
                            </h5>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsPaper;