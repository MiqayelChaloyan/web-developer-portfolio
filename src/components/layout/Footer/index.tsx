import React from 'react';

import Link from 'next/link';

// import styles from './Footer.module.sass';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id='footer'>
            {/* <div className={styles.footer}>
                <div>
                    <Link href='#about-us' aria-label='About us' className={styles.icon}>
                        <p className={`${styles.info_web} ${inter.className}`}>{t('footer.about-us')}</p>
                    </Link>
                    <Link href='#branches' aria-label='Branches' className={styles.icon}>
                        <p className={`${styles.info_web} ${inter.className}`}>{t('footer.branches')}</p>
                    </Link>
                    <Link href='#' aria-label='Programs' className={styles.icon}>
                        <p className={`${styles.info_web} ${inter.className}`}>{t('footer.programs')}</p>
                    </Link>
                    <Link href='#co-workers' aria-label='Co-workers' className={styles.icon}>
                        <p className={`${styles.info_web} ${inter.className}`}> {t('footer.partners')}</p>
                    </Link>
                </div>
                <div>
                    <h2 className={`${styles.addres} ${inter.className}`}>{t('adress.street')}</h2>
                    <div className={styles.phone_numbers}>
                        <Link href='tel:+37477543455' aria-label='+374 (77) 54 34 55' className={styles.icon}>
                            <p className={`${styles.info_web} ${inter.className}`}>+374 (77) 54 34 55,</p>
                        </Link>
                        <Link href='tel:+37433543455' aria-label='+374 (33) 54 34 55' className={styles.icon}>
                            <p className={`${styles.info_web} ${inter.className} ${styles.phone}`}>+374 (33) 54 34 55,</p>
                        </Link>
                        <Link href='tel:010543455' aria-label='(010) 54 34 55' className={styles.icon}>
                            <p className={`${styles.info_web} ${inter.className} ${styles.phone}`}>(010) 54 34 55</p>
                        </Link>
                    </div>
                    <div>
                        <h2 className={`${styles.hosts_title} ${inter.className}`}>{t('texts.follow-us')}</h2>
                        <div className={styles.hosts}>
                            <Link href={Hosts.facebook} aria-label='Facebook' className={styles.icon} target="_blank">
                                <Facebook width='40' height='40' fill='white' />
                            </Link>
                            <Link href={Hosts.gmail} aria-label='Gmail' className={styles.icon} target="_blank">
                                <Gmail width='40' height='40' fill='white' />
                            </Link>
                            <Link href={Hosts.instagram} aria-label='Instagram' className={styles.icon} target="_blank">
                                <Instagram width='40' height='40' fill='white' />
                            </Link>
                            <Link href={Hosts.linkedin} aria-label='LinkedIn' className={styles.icon} target="_blank">
                                <Linkedin width='40' height='40' fill='white' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.logo_footer}>
                        <LogoFooter width='274' height='75' fill='white' />
                    </div>
                    <p className={`${styles.reserved} ${inter.className}`}>{`©️ ${currentYear}  ${t('texts.rights')}`}</p>
                </div>
            </div> */}
            <p>footer</p>
        </footer>
    );
};

export default Footer;