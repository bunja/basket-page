import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    receiveBasketInfo,
    removeItem,
    upItem,
    downItem
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

    // const removeItem = (itemId) => {
    //   console.log("itemId", itemId);
    // };


    return (
        <div className="app">
            <div className="container">
                <div className="name">AKQA</div>
                <div className="your-basket">Your Basket</div>
                <p>Items you have added to your basket are shown below.</p>
                <p>Adjust the quantities or remove items before counting your purchase</p>

                <table>
                    <tr className="header">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Cost</th>
                    </tr>
                    {items.map(item => {
                        return (

                            <tr key={item.id} className="item-row">
                                <td>{item.product}</td>
                                <td>${item.price}</td>
                                <td className="qty"> 
                                    <div className="item-qty">{item.qty}</div>
                                    <div className="arrow">
                                        <div  onClick={() => {
                                            dispatch(upItem(item.id));
                                        }}><div className="arrow-up"></div></div>
                                        <div  onClick={() => {
                                            dispatch(downItem(item.id));
                                        }}><div className="arrow-down"></div></div>
                                    </div>
                                    
                                </td>
                                <td>${item.cost}</td>
                                <td><span onClick={() => {
                                    dispatch(removeItem(item.id));
                                }}>🗑️</span></td>
                            </tr>
                        );
                    })}

                    <tr className="subtotal">
                        <td  colspan="3">Subtotal</td>
                        <td>${subtotal}</td>
                    </tr>
                    <tr>
                        <td colspan="3">VAT @ 20%</td>
                        <td>${vat}</td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td colspan="3">Total Cost</td>
                        <td>${total}</td>
                    </tr>
                </table>
                <button className="myButton" onClick={() => {
                    console.log("basket", basket)
                }}>Buy Now</button>
            </div>
        </div>
    );
}

export default App;
