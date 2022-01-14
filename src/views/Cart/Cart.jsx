import styles from './cart.style.module.css'
import image from '../../assets/images/prodcut1.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decreaseItem, removeItem } from '../../redux/reducers/cart.reducer'
import { BiPlus } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const total_price = useSelector(
        (state) => state.cart.items.reduce(
            (price, item) => price + (item.price * item.count),
            0))
    const total_count = useSelector(
        (state) => state.cart.items.reduce(
            (count, item) => count + item.count,
            0))
    return (
        <div className={styles.Cart}>
            <div className={styles.Cart_Items}>
                {
                    items.map(item => (
                        <div key={item.id} className={styles.Cart_item}>
                            <div className={styles.Cart_item_image}>
                                <img width={'100%'} src={image} alt="product" />
                            </div>
                            <div className={styles.Cart_item_info}>
                                <div>{item.title}</div>
                                <div style={{
                                    flexFlow: 1
                                }}>{item.description}</div>
                                <div style={{
                                    display: 'flex',
                                    gap:5,
                                }}>
                                    <div onClick={() => dispatch(addToCart(item))}><BiPlus /></div>
                                    <div>{item.count}</div>
                                    <div onClick={() => dispatch(decreaseItem(item))}><BiMinus /></div>
                                    <div onClick={() => dispatch(removeItem(item))}><BiTrash /></div>

                                </div>
                            </div>
                            <div>تومن {item.price * item.count} </div>
                        </div>
                    ))
                }

            </div>
            <div className={styles.Cart_info}>
                <div className={styles.Cart_info_item}>
                    <div>{"قیمت کالاها "}</div>
                    <div> تومن {3000} </div>
                </div>
                <div className={styles.Cart_info_item}>
                    <div>{"تخقیف کالاها "}</div>
                    <div> تومن {3000} </div>
                </div>

                <div className={`${styles.Cart_info_item} ${styles.Cart_info_last_item}`}>
                    <div>{" جمع سبد خرید "}</div>
                    <div> تومن {3000} </div>
                </div>
            </div>
        </div>
    )
}
export default Cart
