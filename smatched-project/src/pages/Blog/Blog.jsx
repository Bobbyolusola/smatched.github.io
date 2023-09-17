import React from "react";
import styles from "./Blog.module.css";


const Blog = () => {

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.innerBox}>  </div>
                </div>

                <div className={styles.secondContainerBox}>
                    <div className={styles.rightSecondBox}>
                        Exploring Offerwall Solutions...
                    </div>
                    <div className={styles.leftSecondBox}>
                        Images
                    </div>
                </div>

                <div className={styles.thirdContainerBox}>
                    <div className={styles.rightThirdBox}>
                        Right
                    </div>
                    <div className={styles.leftThirdBox}>
                        Left
                    </div>
                </div>
                <div className={styles.horizontalLine}>
                    <div className={styles.innerHorizontalLine}>
                        NOTE: Developer will put a scroll arrow here
                        {/*<img src="/img/Vector.png" alt="" />*/}
                        {/*<div className={styles.midLine}></div>*/}
                        {/*<img src="/img/Vector2.png" alt=""/>*/}
                    </div>

                </div>

                <div className={styles.FourthContainerBox}>
                     <div className={styles.rightFourthBox}> Stay up to date </div>
                     <div className={styles.leftFourthBox}>
                         <img src="/img/Frame_1000004524.png" alt=""/>
                     </div>
                </div>

            </div>

        </>
    )
}

export default Blog;