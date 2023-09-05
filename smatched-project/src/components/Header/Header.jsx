import React, {useState} from "react";
import styles from "./Header.module.css";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"
import {lists} from "../../businessList.js";
import {Link} from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <div className={styles.right}>

                        <div className={styles.logo}>
                            <img src="/img/Horizontal container.png" alt=''/>
                        </div>

                        <div className={styles.topMenu}>
                            <div>Product</div>
                            <div>Our Mission</div>
                            <div>Influencer</div>

                            <div className={styles.dropDown}>
                                <div className={styles.dropDownBtn} onClick={(e) => setIsOpen ((prev) => !prev)}>
                                    For Business
                                    {!isOpen ? (
                                        <AiOutlineDown className={styles.arrowDown} />
                                    ) : (
                                        <AiOutlineUp className={styles.arrowDown} />
                                    )}
                                </div>
                                {isOpen && (
                                    <div className={styles.dropDownContent}>
                                        <div className={styles.dropDownItem}>Game Industry</div>
                                        <div className={styles.dropDownItem}>Nonprofit Companies</div>
                                        <div className={styles.dropDownItem}>Newspaper Publishing</div>
                                        <div className={styles.dropDownItem}>Mobile App Monetization</div>
                                        <div className={styles.dropDownItem}>Website Monetization</div>
                                    </div>
                                )}
                            </div>


                            {/*<ul className={styles.dropDown}>*/}
                            {/*    <ul className={styles.dropDownBtn} onClick={(e) => setIsOpen ((prev) => !prev)}>*/}
                            {/*        For Business*/}
                            {/*        {!isOpen ? (*/}
                            {/*            <AiOutlineDown className={styles.arrowDown} />*/}
                            {/*        ) : (*/}
                            {/*            <AiOutlineUp className="h-8" />*/}
                            {/*        )}*/}
                            {/*    {isActive && (*/}
                            {/*        <ul className={styles.dropDownContent}>*/}
                            {/*            <li className={styles.dropDownItem}>Game Industry</li>*/}
                            {/*            <li className={styles.dropDownItem}>Nonprofit Companies</li>*/}
                            {/*            <li className={styles.dropDownItem}>Newspaper Publishing</li>*/}
                            {/*            <li className={styles.dropDownItem}>Mobile App Monetization</li>*/}
                            {/*            <li className={styles.dropDownItem}>Website Monetization</li>*/}
                            {/*        </ul>*/}
                            {/*    )}*/}
                            {/*</ul>*/}

                            {/*<ul className={styles.dropDown}>*/}
                            {/*<ul className={styles.dropDownBtn} onClick={(e) => setIsOpen ((prev) => !prev)}>*/}
                            {/*    For Business*/}
                            {/*    {!isOpen ? (*/}
                            {/*        <AiOutlineDown className={styles.arrowDown} />*/}
                            {/*        ) : (*/}
                            {/*            <AiOutlineUp className="h-8" />*/}
                            {/*        )}*/}

                            {/*{isOpen && (*/}
                            {/*    <ul className={styles.businessLists}>*/}
                            {/*        {lists.map((item, i) => (*/}
                            {/*            <ul>*/}
                            {/*                <li>{item.url ? <Link to={item.url}>{item.title}</Link> : item.title}*/}
                            {/*                </li>*/}
                            {/*            </ul>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*)}*/}
                            {/*</ul>*/}
                            {/*{isOpen && (*/}
                            {/*    <ul className={styles.s}>*/}
                            {/*        <li className={styles.dropDownItem}>Game Industry</li>*/}
                            {/*        <li className={styles.dropDownItem}>Nonprofit Companies</li>*/}
                            {/*        <li className={styles.dropDownItem}>Newspaper Publishing</li>*/}
                            {/*        <li className={styles.dropDownItem}>Mobile App Monetization</li>*/}
                            {/*        <li className={styles.dropDownItem}>Website Monetization</li>*/}
                            {/*    </ul>*/}
                            {/*)}*/}
                            {/*</ul>*/}

                            <div>Blog</div>
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


