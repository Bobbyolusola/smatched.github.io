import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

    return(
        <>
                <div className={styles.footerContainer}>
                    <div className={styles.topFooterContainer}>
                        <div className={styles.topFooterBox}>
                            <div className={styles.topFooterBox1}>

                                    <img className={styles.smatchedLogoIcon} alt=""
                                        src="/img/Horizontal_container.png"
                                    />
                                <div className={styles.smatchedUnleash}>
                                    Smatched – Unleash your data’s value
                                </div>
                                <div className={styles.social}>
                                    <img
                                        className={styles.socialMediaIconfacebook}
                                        alt=""
                                        src="/img/social-media-iconlinkedin.svg"
                                    />
                                    <img
                                        className={styles.socialMediaIconfacebook}
                                        alt=""
                                        src="/img/social-media-iconfacebook.svg"
                                    />
                                    <img
                                        className={styles.socialMediaIconfacebook}
                                        alt=""
                                        src="/img/social-media-iconinstagram.svg"

                                    />
                                    <img
                                        className={styles.socialMediaIconfacebook}
                                        alt=""
                                        src="/img/social-media-icontiktok.svg"
                                    />
                                    <img
                                        className={styles.socialMediaIconfacebook}
                                        alt=""
                                        src="/img/social-media-iconyoutube.svg"
                                    />
                                </div>

                            </div>


                            <div className={styles.topFooterBox2}>
                                <div className={styles.supportedBy}>
                                    <div className={styles.text}>Supported by</div>
                                    <img
                                        className={styles.srhHeidelbergGrnderInstitutIcon}
                                        alt=""
                                        src="/img/2702705613-srhheidelberggrnderinstitutlogosrhheidelberg-1@2x.png"
                                    />
                                    <img
                                        className={styles.xsosuj1p4uyke1i1q8fo1Icon}
                                        alt=""
                                        src="/img/xsosuj1p4uyke1i1q8fo-1@2x.png"
                                    />
                                    <img
                                        className={styles.startProTectNeg95x3521Icon}
                                        alt=""
                                        src="/img/start-pro-tect-neg-95x352-1@2x.png"
                                    />
                                </div>
                                <div className={styles.company}>
                                    <div className={styles.text}>Company</div>
                                    <div className={styles.ourMission}>Our mission</div>
                                </div>
                                <div className={styles.services}>
                                    <div className={styles.text}>Services</div>
                                    <div className={styles.links}>
                                        <div>Product</div>
                                        <div>For influencer</div>
                                        <div>For Business</div>
                                    </div>
                                </div>
                                <div className={styles.legal}>
                                    <div className={styles.text}>Legal</div>
                                    <div className={styles.link1}>
                                        <div className={styles.imprint}>Imprint</div>
                                        <div className={styles.imprint}>Data Security</div>
                                        <div className={styles.imprint}>ToC</div>
                                        <div className={styles.imprint}>Cookies</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className={styles.lowerFooterContainer}>
                        <div className={styles.lowerFooterBox}>
                            <hr />
                            <div className={styles.copyRights}> Copyright © 2023 Smatched. All Rights Reserved. </div>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default Footer;