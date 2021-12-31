import React from 'react'
import { ReactComponent as SiteLogo } from '../../assets/svg/logo.svg';
import styles from './header.style.module.css'
const Header = () => {
    return (
        <header>
            <div className={styles.header_top}>
                <div className={styles.header_top_left}>
                    <div>icon1</div>
                    <div>icon2</div>
                </div>
                <div className={styles.header_top_left} >
                    <input />
                    <SiteLogo />
                </div>
            </div>

        </header>
    )
}

export default Header
