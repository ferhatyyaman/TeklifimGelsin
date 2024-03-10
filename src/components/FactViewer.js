import React from 'react'
import { useState, useEffect } from 'react';
import "../../styles/FactViewer.scss"
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from './BasketCard';
import { fetchFact, setLanguage } from '../redux/features/factSlice';
import { addItem } from '../redux/features/basketSlice';



export default function FactViewer() {
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const { items: basketItems } = useSelector(state => state.basket);

    const { fact, language} = useSelector(state => state.fact);
    const dispatch = useDispatch();

    const handleLanguageChange = (e) => {
        dispatch(setLanguage(e.target.value));
    };
    const handleClose = () => {
        setIsBasketOpen(false);
      };

    const addToBasket = () => {
        if (fact) {
            const isAlreadyAdded = basketItems.some(item => item.id === fact.id);
            if (isAlreadyAdded) {
                alert("This fact is already added to the basket");
            } else {
                dispatch(addItem(fact));
                setIsBasketOpen(true);
            }
        }
    };

    useEffect(() => {
        dispatch(fetchFact('today'));
    }, []);
   
  return (
    <div className="fact-viewer">
    <h2>Fact Viewer</h2>
    <select value={language} onChange={handleLanguageChange} className="factLanguage">
        <option value="en" >English</option>
        <option value="de">German</option>
    </select>

    <div className="button-container">
                <button onClick={() => dispatch(fetchFact('today'))} className="submitButton">Fact of the Day</button>
                <button onClick={() => dispatch(fetchFact('random'))} className="submitButton">Random Fact</button>
            </div>

    {fact && (
        <div className="fact-card">
            <div className="fact-details">
              <div className="fact-details-text">
              <p>{fact.text}</p>
              </div>
                <div className="fact-details-link">
                <button onClick={addToBasket} className="basket-button">Add to Basket</button>
                           
                </div>
            </div>
        </div>
    )}
      {isBasketOpen && <BasketCard onClose={handleClose} />}
   
</div>
  )
}
export const useClient = true;