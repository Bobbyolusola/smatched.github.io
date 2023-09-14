import React from "react";
import styles from "./WebMonetization.module.css";

const WebMonetization = () => {

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.innerBox}>
                        <div className={styles.rightFirstBox}>Mobile App Monetization</div>
                        <div className={styles.leftFirstBox}>Image</div>
                    </div>
                </div>

                <div className={styles.secondContainerBox}>
                    <div className={styles.topContainerBox}>
                        <div className={styles.monetize}>How to monetize your Mobile App?</div>
                        <div className={styles.platform}></div>
                    </div>

                    <div className={styles.downContainerBox}>
                        <div className={styles.smatchedSolution}></div>
                        <div className={styles.imgArrow}>
                            <img src="/img/arrow_1.png" alt="" />
                        </div>
                        <div className={styles.userRewards}></div>
                    </div>

                </div>

                <div className={styles.thirdContainerBox}>
                    <div className={styles.rightThirdBox}>
                        <img src="/img/Group_n.png" alt=""/>
                    </div>
                    <div className={styles.leftThirdBox}>
                    </div>
                </div>
                <div className={styles.arrow22}>
                    <img src="/img/arrow_22.png" alt="" />
                </div>

                <div className={styles.fourthContainerBox}>
                    <div className={styles.innerFourthContainerBox}>
                        <div className={styles.topFourthBox}>
                            <h5> Discover the best offerwall Website Solution </h5>
                        </div>
                        <div className={styles.lowerFourthBox}>
                            <h5>
                                Image
                            </h5>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WebMonetization;