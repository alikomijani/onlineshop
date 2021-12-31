import { ProductList } from '..'
import styles from './category.items.style.module.css'

const CategoryItems = ({ title, products = [] }) => {
    return (
        <div className={styles.category_items}>
            <h2 className={styles.category_title}>{title}</h2>
            <ProductList productList={products} />
        </div>
    )
}

export default CategoryItems
