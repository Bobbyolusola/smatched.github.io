import React from "react";
import styles from "./Header.module.css";

const Header = () => {

    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <div className={styles.right}>
                        <div className={styles.logo}>
                            <img src="/img/Horizontal container.png" alt=''/>
                        </div>
                        <div className={styles.menu}>
                            <span>Product</span>
                            <span>Our Mission</span>
                            <span>Influencer</span>
                            <span>For Business</span>
                            <span>Blog</span>
                        </div>
                    </div>
                    <div className={styles.left}>
                        <button className={styles.btn}>How it works</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;