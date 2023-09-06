import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

    return(
        <>
            <div>
                <div className={styles.footerContainer}>
                    <div className={styles.topFooterContainer}>
                        <div className={styles.topFooterBox}>
                            <div className={styles.topFooterBox1}></div>
                            <div className={styles.topFooterBox2}></div>
                        </div>
                    </div>

                    <div className={styles.lowerFooterContainer}>
                        <div className={styles.lowerFooterBox}>
                            <hr />
                            <div className={styles.copyRights}> Copyright © 2023 Smatched. All Rights Reserved. </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;