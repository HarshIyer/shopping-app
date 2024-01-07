import React from 'react'
import Header from './Header';
import {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'


const LoginPage = () =>{
    const history = useHistory();
    
    const [rollnumber,setRollNumber] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:4000/login",{rollnumber,password})
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                alert("Login Successful");

                localStorage.setItem('isAuthenticated',true)
                localStorage.setItem('name',res.data)
                history.replace('/order'); 
            }
        })
        .catch((err)=>{
            console.log(err);
            if(err.response.status===304){
                alert("Invalid Credentials");
            }
            else if(err.response.status===404){
                alert("User does not exist. Register instead");
                history.replace("/register")
            }
        })
    }
    return(
        <div>
            <Header />
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h1 style={{textAlign:'center'}}>Login</h1>
                    <div className='login-form-label'>
                        <label for ="rollnumber">Roll Number</label><br></br>
                        <input onChange={(evt)=>setRollNumber(evt.target.value)} type = "text" className="login-form-input" name="rollnumber" style={{marginTop:'10px'}} placeholder="Enter your roll number"></input>
                    </div>
                    <div className='login-form-label'>
                        <label for ="password">Password</label><br></br>
                        <input onChange={(evt)=>setPassword(evt.target.value)} type = "password" className="login-form-input" name="password" style={{marginTop:'10px'}} placeholder="Enter your password"></input>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <button type="submit" className='login-form-btn'>Login</button>
                    </div>
                    <div style={{fontSize:'15px',display:'flex',justifyContent:'center',marginTop:'10px'}}>
                    <pre>Don't have an account?  </pre> <Link to="/register">Register</Link>
                    </div>
                </form>            
            </div>
        </div>
    )
}

export default LoginPage;