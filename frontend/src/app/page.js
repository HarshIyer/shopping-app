"use client"
import React,{useState} from 'react'
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import OrderPage from './components/OrderPage';
import LandingPage from './components/LandingPage';
import PreviousPurchases from './components/PreviousPurchases';
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { LocaleRouteNormalizer } from 'next/dist/server/future/normalizers/locale-route-normalizer';



const app =() =>{

  const [isAuthenticated,setIsAuthenticated] = useState(false)
  localStorage.setItem('isAuthenticated',false)

  return(
      <Router>
        <div>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path ="/login">
            <LoginPage />
          </Route>
          <Route exact path ="/register">
            <RegisterPage />
          </Route>
          <Route exact path ="/order">
            <OrderPage />
          </Route>
          <Route exact path ="/previous-purchases">
            <PreviousPurchases />
          </Route>
        </Switch>
        </div>
      </Router>
  )
}

export default app;