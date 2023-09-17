import React from "react";
import styles from "./AllArticles.module.css";


const AllArticles = () => {

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.innerContainer}>
                    <h3>All Articles</h3>
                    <div className={styles.firstContainerBox}>
                        <div className={styles.firstContainerBox1}></div>
                        <div className={styles.firstContainerBox1}></div>
                        <div className={styles.firstContainerBox1}></div>
                    </div>
                </div>
                <div className={styles.secondContainerBox}>
                    <div className={styles.innerSecondContainer}>
                        <div className={styles.arrowRight}>
                            <img src="/img/arrowRight.png" alt=""/>
                        </div>
                        <div className={styles.secondContainerBox1}> 1 </div>
                        <div className={styles.secondContainerBox2}> 2 </div>
                        <div className={styles.arrowLeft}>
                            <img src="/img/arrowLeft.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className={styles.thirdContainerBox}>
                     <div className={styles.rightThirdBox}> Stay up to date </div>
                     <div className={styles.leftThirdBox}>
                         <img src="/img/Frame_1000004524.png" alt=""/>
                     </div>
                </div>

            </div>

        </>
    )
}

export default AllArticles;