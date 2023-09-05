import React, {useState} from "react";
import styles from "./Header.module.css";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <div className={styles.right}>

                        <div className={styles.logo}>
                            <img src="/img/Horizontal container.png" alt=''/>
                        </div>

                        <div className={styles.topMenu}>
                            <ul>Product</ul>
                            <ul>Our Mission</ul>
                            <ul>Influencer</ul>

                            <ul className={styles.dropDown}>
                                <ul className={styles.dropDownBtn}
                                onClick = {(e) =>
                                    setIsActive (!isActive)
                                }>
                                    For Business <img className={styles.arrowDown} src='/img/arrow-down-s-line (1).svg' alt='' />
                                </ul>
                                {isActive && (
                                    <ul className={styles.dropDownContent}>
                                        <li className={styles.dropDownItem}>Game Industry</li>
                                        <li className={styles.dropDownItem}>Nonprofit Companies</li>
                                        <li className={styles.dropDownItem}>Newspaper Publishing Industry</li>
                                        <li className={styles.dropDownItem}>Mobile App Monetization</li>
                                        <li className={styles.dropDownItem}>Website Monetization</li>
                                    </ul>
                                )}
                            </ul>

                            <ul>Blog</ul>
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


