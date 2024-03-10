import React, { useState } from 'react';
import Link from 'next/link';
import "../../styles/Header.scss"
import BasketCard from './BasketCard';

export default function Header() {

    const [isBasketOpen, setIsBasketOpen] = useState(false); 

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen); 
  };
  return (
    <header className="header">
    <div className="logo">
        <Link href="/Fact">
            Random Fact App
        </Link>
    </div>
    <nav className="nav">
        <ul>
            
            <li>
                <Link href="/Save">
                    Saved
                </Link>
            </li>
            <li>
                <a onClick={toggleBasket}>
                    Basket
                </a>
            </li>
            <li>
                <Link href="/">
                    Exit
                </Link>
            </li>
        </ul>
    </nav>
    {isBasketOpen && <BasketCard onClose={() => setIsBasketOpen(false)} />}
</header>
  )
}
