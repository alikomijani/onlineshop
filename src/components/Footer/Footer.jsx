import React from 'react'
import styles from './footer.style.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div>
                    {"دیجی کالا"}
                    <ul>
                        <li>{"بلاگ دیجی کالا"}</li>
                        <li>{"درباره دیجی کالا"}</li>
                        <li>{"تماس با ما"}</li>
                        <li>{"همکاری با ما"}</li>
                        <li>{"ثبت‌نام سوپرمارکت"}</li>
                    </ul>
                </div>
                <div>link</div>
                <div>about</div>
            </div>
        </footer>
    )
}

export default Footer
