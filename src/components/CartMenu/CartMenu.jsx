import React from 'react'
import styles from './cart.menu.style.module.css'
import { Link } from 'react-router-dom'
import CartMenuItem from '../CartMenuItem/CartMenuItem'
const CartMenu = ({show , setShow}) => {
    const total_price=10
    return (
        <div onMouseLeave={()=>setShow(false)} style={{
            display:show ? 'block':"none"
        }} className={styles.CartMenu}>
            <div className={styles.CartNav}>
                <Link className={styles.link} to='/cart'>
                    مشاهده سبد خرید
                </Link>
                <p>
                    ۱ کالا
                </p>
            </div>
            <ul>
                <li>
                    <CartMenuItem />
                </li>
                <li>
                    <CartMenuItem />
                </li>
            </ul>
            <div className={styles.CartMenu_order}>
                <div>
                    <Link to={'/cart'} className={styles.order_button}>ثبت سفارش</Link>
                </div>
                <div>
                    <div>
                        {"مبلغ قابل پرداخت"}
                    </div>
                    <div>{total_price}</div>
                </div>
            </div>
        </div>
    )
}

export default CartMenu
