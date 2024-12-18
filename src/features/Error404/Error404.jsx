import React from "react";
import "./Error404.css";

export default function Error404() {
    return (
        <div className="error-container">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
                alt="Sad Psyduck"
                className="error-image"
            />
            <h1>Page Not Found</h1>
            <p>
                Oh no! The page you're looking for doesn’t exist. It looks like even Psyduck is confused!
            </p>
            <button className="home-button" onClick={() => (window.location.href = "/")}>
                Go Back Home
            </button>
        </div>
    );
}
