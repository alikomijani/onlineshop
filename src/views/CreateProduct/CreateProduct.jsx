import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/setup'
import { createProduct } from '../../api/products.api'
const CreateProduct = () => {
    const nav = useNavigate()
    const [state, setState] = React.useState({
        title: "",
        category: "",
        price: 0,
        description: "",
    })
    const [errors, setErrors] = React.useState({
        title: "",
        category: "",
        price: "",
        description: "",
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        createProduct(state)
        .then(data => { })
        .catch(res => {
            if (res.status === 400) {
                setErrors(res.data)
            }
        })

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div style={{
                    margin: 20
                }}>
                    <label style={{
                        minWidth: 150,
                        display: "inline-block"
                    }} htmlFor='title'>title</label>
                    <input id={"title"} name='title' value={state.title} onChange={handleChange} />
                    <small>{errors.title}</small>
                </div>
                <div style={{
                    margin: 20
                }}>
                    <label style={{
                        minWidth: 150,
                        display: "inline-block"
                    }} htmlFor='category'>category</label>
                    <input id={"category"} name='category' value={state.category} onChange={handleChange} />
                </div>
                <div style={{
                    margin: 20
                }}>
                    <label style={{
                        minWidth: 150,
                        display: "inline-block",
                        color: errors.price ? "red" : 'black'
                    }} htmlFor='price'>price</label>
                    <input style={{
                        backgroundColor: errors.price ? "red" : 'white'
                    }} id={"price"} name='price' type={'number'} value={state.price} onChange={handleChange} />
                    <div>
                        <small style={{
                            color: "red"
                        }}>{errors.price}</small>
                    </div>


                </div>
                <div style={{
                    margin: 20
                }}>
                    <label style={{
                        minWidth: 150,
                        display: "inline-block"
                    }} htmlFor='description'>description</label>
                    <textarea id={"description"} name='description' rows={4} value={state.description} onChange={handleChange} />
                </div>
                <div style={{
                    margin: 20
                }}>
                    <button type='submit'>
                        save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
