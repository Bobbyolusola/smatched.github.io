import React, {useRef, useState,} from "react";
import styles from "./Header.module.css";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"
import {lists} from "../../businessList.js";
import {Link} from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";

const Header = () => {

    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const businessRef = useRef();

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== businessRef.current) {
            setOpen(false);
        }
    });

    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <div className={styles.right}>

                        <div className={styles.logo}>
                            <img src="/img/Horizontal_container.png" alt=''/>
                        </div>

                        <div className={styles.topMenu}>
                            <div className={styles.topMenuItem}>Product</div>
                            <div className={styles.topMenuItem}>Our Mission</div>
                            <div className={styles.topMenuItem}>Influencer</div>
                            <div className={styles.topMenuItem}>
                            <div className={styles.dropDown}>
                                <div
                                    ref = {businessRef}
                                    onClick = {() => setOpen(!open)}>
                                    For Business

                                    {!open ? (
                                        <AiOutlineDown className={styles.arrowDown} />
                                    ) : (
                                        <AiOutlineUp className={styles.arrowDown} />
                                    )}

                                </div>
                                {open &&
                                    <div ref={menuRef} className={styles.dropDownBtn}>
                                        <ul>
                                            {lists.map((item) => (
                                                <li onClick = {() =>setOpen(false)} >{item.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                }

                                </div>
                            </div>

                            {/*{lists.map((item, i) => (*/}
                            {/*    <ul>*/}
                            {/*        <li>{item.url ? <Link to={item.url}>{item.title}</Link> : item.title}*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*))}*/}


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


