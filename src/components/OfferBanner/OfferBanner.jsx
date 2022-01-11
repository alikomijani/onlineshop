import { useRef } from 'react'
import { ProductList } from '..'
import styles from './offer.banner.style.module.css'
import offer from '../../assets/images/offer.png'
const OfferBanner = ({ products = [], bgColor }) => {
    const parent = useRef()
    const scroll = (scrollOffset) => {
        let i = 0
        let cancel = setInterval(() => {
            i++;
            if (i < Math.abs(scrollOffset)) {
                parent.current.scrollLeft -= -1 * scrollOffset / Math.abs(scrollOffset);
            } else {
                clearInterval(cancel)
            }
        }, 1)
    };
    return (
        <section style={{
            backgroundColor: bgColor
        }} className={styles.OfferBanner}>
            <div className={styles.parent}>
                <img width={170} src={offer} alt='offer' />
                <div className={styles.OfferBanner_ProductList}>
                    <div onClick={() => scroll(-100)} className={styles.product_list_navigation_next} />
                    <ProductList parentRef={parent} productList={products} />
                    <div onClick={() => scroll(100)} className={styles.product_list_navigation_back} />
                </div>
            </div>

        </section>
    )
}

export default OfferBanner
