import React from 'react';
import '../Styles/Error.css'

function Error() {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <p>Please try again later.</p>
            <button onClick={() => window.location.reload()}>Retry</button>
        </div>
    );
}

export default Error;
