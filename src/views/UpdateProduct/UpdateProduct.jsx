import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const nav = useNavigate()
    const { productId } = useParams()
    const [state, setState] = React.useState({
        title: "",
        category: "",
        price: 0,
        description: "",
    })
    useEffect(() => {
        fetch('/api/products/' + productId).then(res => res.json()).then(data => setState(data.product))
    }, [productId])
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
        const res = await fetch('/api/products', {
            method: 'post',
            body: JSON.stringify(state)
        })
        const data = await res.json()
        if (res.status === 201) {
            alert('success')
            nav('/')

        } else {
            alert('error')
            setErrors(data)
        }
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

export default UpdateProduct
