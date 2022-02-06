import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes, 
  } from "react-router-dom";

import { Shop } from './components/Shop';
import { Footer } from './components/Footer'


function App(props){
    return (
        <Router>

    <div className='layout'>
        
        <header className='menu'>
            <ul className='menu__list'>
                <div className='menu__list-right'>
                    <li className='menu__li'> <Link to="shop">Burger</Link></li>
                    <li className='menu__li'><Link to="footer">Search</Link></li>
                </div>
                <div className='menu__logo'>

                </div>
                
                <div className='menu__list-left'>
                    <li className='menu__li'><Link to="/">Favore</Link></li>
                    <li className='menu__li'>Cart</li>
                </div>

            </ul>
        </header>
        

        <hr className='layout__hr'></hr>
        

        
            <Routes>
            <Route exact path="shop" element={<Shop/>}/>
            {/* <Route exact path="footer" element={<Footer/>}/> */}
            <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main> } />
            </Routes>

            <hr className='layout__hr'></hr>
            <Footer/>

    </div>
    </Router>

    )
};

export  default App;