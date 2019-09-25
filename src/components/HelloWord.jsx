import React, { useState } from 'react';

const HelloWord = () => {
    const [active, setActive] = useState(true);
    
    const handleClick = () => {
        setActive (!active);
    }

    return (
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>OCULTAME ESTE</h1>
            }
        </div>
    );
}

export default HelloWord;