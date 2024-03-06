import React from 'react'
import Link from 'next/link';
import "../../styles/Header.scss"

export default function Header() {
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
                <Link href="/Card">
                    Card
                </Link>
            </li>
            <li>
                <Link href="/">
                    Login
                </Link>
            </li>
        </ul>
    </nav>
</header>
  )
}