import React  from 'react'
import styles from './cart.menu.style.module.css'
import { Link } from 'react-router-dom'
import CartMenuItem from '../CartMenuItem/CartMenuItem'
import { useSelector, useDispatch } from 'react-redux'

const CartMenu = ({ show, setShow }) => {
    const items = useSelector(state => state.cart.items)
    const total_price = useSelector(
        (state) => state.cart.items.reduce(
            (price, item) => price + (item.price * item.count),
            0))
    const total_count = useSelector(
        (state) => state.cart.items.reduce(
            (count, item) => count + item.count,
            0))

    return (
        <div onMouseLeave={() => setShow(false)} style={{
            display: show ? 'block' : "none"
        }} className={styles.CartMenu}>
            <div className={styles.CartNav}>
                <Link className={styles.link} to='/cart'>
                    مشاهده سبد خرید
                </Link>
                <p>
                    {total_count} کالا
                </p>
            </div>
            <ul> {
                items.map(item => (
                    <li key={item.id}>
                        <CartMenuItem
                            title={item.title}
                            description={item.description}
                            src={item.image}
                            count={item.count}
                        />
                    </li>
                ))
            }
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
