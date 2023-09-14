import React from "react";
import styles from "./MobileMonetization.module.css";

const MobileMonetization = () => {

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
                    <div className={styles.innerSecondContainerBox}>
                        <div className={styles.monetize}>How to monetize your Mobile App?</div>
                        <div className={styles.dollarImg}>Image</div>
                    </div>
                </div>

                <div className={styles.thirdContainerBox}>
                    <div className={styles.innerThirdContainerBox}>
                        <div className={styles.mobileImg}>Image</div>
                        <div className={styles.unleash}>Unleash the potential of mobile game monetization models</div>
                    </div>
                </div>


                <div className={styles.fourthContainerBox}>
                    <div className={styles.innerFourthContainerBox}>
                        <div className={styles.innerFourthContainerBox1}>
                            <div className={styles.rightFourthBox}>
                                <h5> Monetize your app with a proven Revenue Generation Method </h5>
                            </div>
                            <div className={styles.leftFourthBox}>
                                <h5>
                                    Image
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MobileMonetization;