import React from 'react'
import { HomeBanners, CategoryItems, Container } from '../../components'
import styles from './home.style.module.css'
import productImage from '../../assets/images/prodcut1.jpg'
const products = [
    { id: 1, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 1, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 1, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 1, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
    { id: 1, title: 'kafhs meli', price: 30000, image: productImage, description: 'kafh ba davam' },
]

const Home = () => {
    return (
        <div>
            <HomeBanners />
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
