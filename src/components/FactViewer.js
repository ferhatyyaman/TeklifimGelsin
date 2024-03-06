import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/FactViewer.scss"
import BasketCard from './BasketCard';


export default function FactViewer() {
    const [fact, setFact] = useState(null);
    const [language, setLanguage] = useState('en');
    const [basketItems, setBasketItems] = useState([]);
    const [isBasketOpen, setIsBasketOpen] = useState(false);

    const fetchFact = async (mode) => {
        let url = '';
        if (mode === 'today') {
            url = `https://uselessfacts.jsph.pl/api/v2/facts/today?language=${language}`;
        } else if (mode === 'random') {
            url = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`;
        }

        try {
            const response = await axios.get(url);
            setFact(response.data);
        } catch (error) {
            console.error('Error fetching fact:', error);
        }
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    const toggleBasket = () => {
        setIsBasketOpen(!isBasketOpen);
    };
    const addToBasket = () => {
        if (fact) {
            setBasketItems([...basketItems, fact]);
            setIsBasketOpen(true); 
        }
    };

    
    const removeFromBasket = (index) => {
        const newBasketItems = [...basketItems];
        newBasketItems.splice(index, 1);
        setBasketItems(newBasketItems);
    };
  return (
    <div className="fact-viewer">
    <h2>Random Fact Viewer</h2>
    <select value={language} onChange={handleLanguageChange} className="factLanguage">
        <option value="en">English</option>
        <option value="de">German</option>
    </select>

    <div className="button-container">
        <button onClick={() => fetchFact('today')} className="submitButton">Fact of the Day</button>
        <button onClick={() => fetchFact('random')} className="submitButton">Random Fact</button>
    </div>

    {fact && (
        <div className="fact-card">
            <h3>Fact Details</h3>
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
      {isBasketOpen && <BasketCard basketItems={basketItems} onClose={toggleBasket} onRemove={removeFromBasket}/>}
</div>
  )
}
export const useClient = true;