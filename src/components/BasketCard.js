import React from 'react'
import { useState, useEffect } from 'react';
import "../../styles/BasketCard.scss"

export default function BasketCard({ basketItems, onClose, onRemove }) {

  return (
    <div className="basket-card">
            <div className="basket-Header">
            <h3>Card</h3>
            <img src="/cart.png" alt="Basket" width="34" height="34" />
            <button onClick={onClose} className="close-button">X</button>
            </div>

            {basketItems && basketItems.length > 0 ? (
                <div className="item-added">
                    {basketItems.map((item, index) => (
                        <div key={index} className="item-added-container">
                            <p>{item.text}</p>
                            <button onClick={() => onRemove(index)}>Remove</button>
                        </div>
                    ))}
                    
                </div>
            ) : (
                <p>No items in the basket</p>
            )}

            <div className="basket-Save">
            <button className="basket-Save-Btn">Save</button>
            </div>
        </div>
  )
}
