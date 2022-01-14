import styles from './cart.style.module.css'
import image from '../../assets/images/prodcut1.jpg'
const Cart = ({ }) => {
    const items = [{
        id: 1,
        category: "shoes",
        title: "product1",
        price: 100,
        image: image,
        description: "sample",
    }]
    return (
        <div className={styles.Cart}>
            <div className={styles.Cart_Items}>
                {
                    items.map(item => (
                        <div className={styles.Cart_item}>
                            <div className={styles.Cart_item_image}>
                                <img width={'100%'} src={image} alt="product" />
                            </div>
                            <div className={styles.Cart_item_info}>
                                <div>{item.title}</div>
                                <div>{item.description}</div>
                                <div>
                                    
                                </div>
                            </div>
                            <div>تومن {item.price}</div>
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
