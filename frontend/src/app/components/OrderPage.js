import React,{useState} from 'react'
import Header from './Header';
import axios from 'axios'

const OrderPage = () =>{
    const name = localStorage.getItem('name')
    const [view,setview] = useState('none');
    const handleaddOrderClick = (event) => {
        event.preventDefault();
        setview('block');
    }

    const [quantity,setquantity] = useState(1);
    const [item,setitem] = useState('');
    const [method,setmethod] = useState('')

    const handlePlaceOrderClick= (event) =>{
        console.log(item+quantity+method)
        event.preventDefault();
        setview('none');
        axios.post("http://localhost:4000/placeorder",{item,quantity,method})
        .then((res)=>{
            console.log(res.status);
            if(res.status==200){
                alert('Order place successfully!');
                setquantity(0);
                setitem('');
                setmethod('');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div style={{width:'99vw'}}>
            <Header />
            <h1>Hello {name}!</h1>
            <button className='order-btn' onClick={handleaddOrderClick}>Add Order</button>
            <div style={{display:view,width:'100%',transition:'display 0.5s ease-out'}}>
                <form>
                    <div style={{marginLeft:'30%',marginRight:'30%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:'#81a4cd',padding:'20px',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div>
                    <label for="item">Item</label><br></br>
                    <select value= {item} onChange={(event)=>setitem(event.target.value)} name="item" id="item" style={{borderRadius:'5px',height:'40px',width:'300px'}}>
                        <option value="ChickenPuff">Chicken Puff</option>
                        <option value="Samosa">Samosa</option>
                        <option value="Frooti">Frooti</option>
                        <option value="Milkshake">Milkshake</option>
                    </select>
                    </div>
                    <div>
                        <label for="quantity">Quantity</label><br></br>
                        <input value={quantity} onChange={(event)=>setquantity(event.target.value)} type="number" id="quantity" name="quantity" min="1" max="5" style={{border:'1px solid grey',borderRadius:'5px',height:'40px',width:'300px'}}/>
                    </div>
                    <div>
                        <label for="mode">Mode</label><br></br>
                        <select value={method} onChange={(event)=>setmethod(event.target.value)} name="mode" id="mode" style={{borderRadius:'5px',height:'40px',width:'300px'}}>
                            <option value="Online">Online</option>
                            <option value="Cash On Delivery">Cash On Delivery</option>    
                        </select>
                    </div>
                    <div>
                        <button onClick={handlePlaceOrderClick} className="form-btn" style={{borderRadius:'5px',height:'40px',width:'200px',marginTop:'20px'}}>Place Order</button>
                    </div>
                    <div>
                        <button className="form-btn" onClick={(event)=>setview('none')} style={{borderRadius:'5px',height:'40px',width:'200px',marginTop:'20px'}}>Close</button>
                    </div>

                    </div>
                </form>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero perferendis expedita accusantium laborum tenetur veritatis beatae minus modi, quam laboriosam? Esse itaque expedita ratione non sint fugit fuga? Reiciendis.</h1>
        </div>

    )
}

export default OrderPage;