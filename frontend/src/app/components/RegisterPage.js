import React,{useState} from 'react'
import Header from './Header';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useHistory } from "react-router-dom";


const RegisterPage = () =>{

    const history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:4000/register",{rollnumber,password,name})
        .then((res)=>{
            if(res.status==200){
                alert("Registration Successful");
                history.replace("/login")
            }
        })
        .catch((err)=>{
            console.log(err);
            if(err.response.status===304){
                alert("User already exists. Login instead");
                history.replace("/login")
            }
        })
    }
    const [rollnumber,setRollNumber] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    return(
        <div>
            <Header />
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h1 style={{textAlign:'center'}}>Register</h1>
                    <div className='login-form-label'>
                        <label for ="name">Name</label><br></br>
                        <input onChange={(evt)=>setName(evt.target.value)} type = "text" className="login-form-input" name="name" style={{marginTop:'10px'}} placeholder="Enter your name"></input>
                    </div>
                    <div className='login-form-label'>
                        <label for ="rollnumber">Roll Number</label><br></br>
                        <input onChange={(evt)=>setRollNumber(evt.target.value)} type = "text" className="login-form-input" name="rollnumber" style={{marginTop:'10px'}} placeholder="Enter your roll number"></input>
                    </div>

                    <div className='login-form-label'>
                    <label for ="password">Password</label><br></br>
                    <input onChange={(evt)=>setPassword(evt.target.value)} type = "password" className="login-form-input" name="password" style={{marginTop:'10px'}} placeholder="Enter your password"></input>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <button type="submit" className='login-form-btn'>Register</button>
                    </div>
                    <div style={{fontSize:'15px',display:'flex',justifyContent:'center',marginTop:'10px'}}>
                    <pre>Already have an account? </pre> <Link to="/login">Login</Link>
                    </div>
                </form>            
            </div>
        </div>
    )
}

export default RegisterPage