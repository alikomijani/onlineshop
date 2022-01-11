import { useEffect, useState } from 'react'
import { HomeBanners, CategoryItems, Container, OfferBanner } from '../../components'
import styles from './home.style.module.css'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/api/products').then(res => res.json()).then(data => setProducts(data.products))
    }, [])
    return (
        <div>
            <HomeBanners />
            <OfferBanner bgColor="#ef394e" products={products} />
            <section>
                <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
            <div style={{ marginTop: 12 }}>
                <OfferBanner bgColor='#6bb927' products={products} />
            </div>
            <section>
                <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
            <section>
                there is category icons
            </section>
            <section>
                <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
            <section>
                <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
        </div>
    )
}

export default Home
