import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

import {
  receiveBasketInfo
} from "./actions";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(receiveBasketInfo());
  }, []);

  const basket = useSelector(state => state && state.basket);

  if (basket == null) {
    return (
      <div>ЖОПА</div>
    );
  }
  const items = basket.items;
  const vat = basket.vat;
  const subtotal = basket.subtotal;
  const total = basket.total;

  
  

  return (
    <div className="App">
      <div class="container">
        <h1>AKQA</h1>
        <h2>Your Basket</h2>
        <p>Items you have added to your basket are shown below.</p>
        <p>Adjust the quantities or remove items before counting your purchase</p>

        <table>
            <tr class="header">
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Cost</th>
            </tr>
            {items.map(item => {
                    return (
                        
                        <tr key={item.id} className="item-row">
                            <td>{item.product}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.cost}</td>
                            <td>button</td>
                        </tr>
                    );
                })}
            
            <tr>
                <td colspan="3">Subtotal</td>
                <td>{subtotal}</td>
            </tr>
            <tr>
                <td colspan="3">VAT @ 20%</td>
                <td>{vat}</td>
            </tr>
            <tr></tr>
            <tr>
                <td colspan="3">Total Cost</td>
                <td>{total}</td>
            </tr>
        </table>
        <button>Buy Now</button>
    </div>
    </div>
  );
}

export default App;
