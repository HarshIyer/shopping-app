import React from 'react'
import Header from './Header';

const OrderPage = () =>{
    const name = localStorage.getItem('name')
    return(
        <div>
            <Header />
            <h1>Hello {name}!</h1>
        </div>
    )
}

export default OrderPage;