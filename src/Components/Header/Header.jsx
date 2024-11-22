// Done

import './Header.css'
import React from "react";

export default function Header() {
    
    return (
        <header>
            <h1 className='header-title'>Pokemon Memory Game</h1>
            <p className='header-desc'>Improves Rusty Old Memory</p>
            <p className='header-desc'>Score Point by clicking a different card after each shuffle</p>
        </header>
    )
}