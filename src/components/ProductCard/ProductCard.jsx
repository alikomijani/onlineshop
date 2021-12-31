import styles from './product.card.style.module.css'
const ProductCard = ({ name, price, imageSrc }) => {
    return (
        <div className={styles.product_card}>
            <img className={styles.product_card__image} src={imageSrc} alt="product" />
            <p className={styles.product_card__title}>{name}</p>
            <p className={styles.product_card__price}>${price}</p>
        </div>
    )
}

export default ProductCard
