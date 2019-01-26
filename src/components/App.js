import React from 'react';

import Article from './Article'
import article from '../fixtures'

function App() {
    return (
        <div>
            <h1>App name 1</h1>
            <Article article={article[0]} foo='bar' flag />
        </div>
    )
}

export default App