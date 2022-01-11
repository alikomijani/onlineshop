import { ReactComponent as SiteLogo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import styles from './header.style.module.css'
import { BiUser } from 'react-icons/bi'
import { BiCart } from 'react-icons/bi'
const Header = () => {
    return (
        <>
            <header className={styles.Header}>
                <div className={styles.header_top}>
                    <div className={styles.header_top_left}>
                        <div><BiCart size={'28px'} /></div>
                        <div><BiUser size={'28px'} /></div>
                    </div>
                    <div className={styles.header_top_left} >
                        <input className={styles.input} />
                        <Link to='/'>
                            <SiteLogo />
                        </Link>
                    </div>
                </div>
            </header>
            <div style={{ height: 90}} />
        </>

    )
}

export default Header
