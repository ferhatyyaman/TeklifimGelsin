import React from 'react'
import "../../styles/BasketCard.scss"
import { useDispatch, useSelector } from 'react-redux';
import {removeItem } from '../redux/features/basketSlice';
import { addSavedItem } from '../redux/features/savedItemsSlice';
import { useRouter } from 'next/navigation'



export default function BasketCard({onClose}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items: basketItems } = useSelector(state => state.basket);

  const handleRemoveFromBasket = (item) => {
      dispatch(removeItem(item));
  };
  const handleSave = () => {
    basketItems.forEach(item => {
      dispatch(addSavedItem(item));
      router.push('/Save');
    });
  };
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
                            <button onClick={() => handleRemoveFromBasket(item)}>Remove</button>
                        </div>
                    ))}
                    
                </div>
            ) : (
                <p>No items in the basket</p>
            )}

            <div className="basket-Save">
            <button className="basket-Save-Btn" onClick={handleSave}>Save</button>
            </div>
        </div>
  )
}
