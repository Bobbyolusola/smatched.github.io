import React from "react";
import styles from "./Monetization.module.css";

const Monetization = () => {

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
                    <div className={styles.topContainerBox}>
                        <div className={styles.monetize}>How to monetize Web Traffic more effectively with Smatched?</div>
                        <div className={styles.platform}>Our platform is the answer for users who have low willingness to pay
                            upfront, providing them with an opportunity to earn their way to valuable content without the need
                            for credit cards while you still make money from website traffic.</div>
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

export default Monetization;