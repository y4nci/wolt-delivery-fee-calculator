import './css/App.css';

import React from 'react';

import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { InputGrid } from './components/InputGrid';
import { LearnButton } from './components/Learn';

const App = () => {
    return (
        <div style={{ width: '100%' }}>
            <div>
                <Header/>
                <div className="app">
                    <InputGrid />
                    <Calculator/>
                </div>
            </div>

            <LearnButton/>
        </div>
    );
};

export default App;
