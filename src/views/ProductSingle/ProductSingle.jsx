import { useEffect, useState } from 'react'
import { BiHeart } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiBellPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import styles from './product.single.style.module.css'
import { CategoryItems } from '../../components'
import productImage from '../../assets/images/prodcut1.jpg'
import { useParams } from 'react-router-dom';
const products = [
    { id: 1, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 2, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 3, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 4, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 5, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
]

const ProductSingle = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('/api/products/' + productId).then(res => res.json()).then(data => {
            setProduct(data.product)
        })
    }, [productId])
    return (
        <div style={{
            backgroundColor: "#fff",
            padding: 32
        }}>
            <section>
                <Link to='/'>home</Link>  / {product.category} / {product.title}
            </section>
            <section className={styles.product_details} style={{
                marginTop: 32
            }}>
                <div className={styles.product_left_side}>
                    <div className={styles.product_tools}>
                        <div>
                            <BiHeart size={'32px'} />
                        </div>
                        <div>
                            <BiShareAlt size={'32px'} />
                        </div>
                        <div>
                            <BiBellPlus size={'32px'} />
                        </div>
                    </div>
                    <div className={styles.product_image}>
                        <img src={product.image} alt={'p'} />
                    </div>
                </div>
                <div className={styles.product_description}>
                    <h2>{product.title}</h2>
                    <p>
                        {product.description}
                    </p>

                </div>
                <div className={styles.product_seller}>
                    <div>{product.price}</div>
                    <div>
                        <button className={styles.product_add_to_cart}>add to cart</button>
                    </div>
                </div>
            </section>
            <section style={{
                marginTop: 32
            }}>
                <CategoryItems title={'related products'} products={products} />
            </section>
            <section style={{
                marginTop: 32
            }}>
                <div>
                    comments
                </div>
            </section>
        </div>
    )
}

export default ProductSingle
