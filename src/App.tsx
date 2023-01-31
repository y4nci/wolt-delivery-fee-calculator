import './css/App.css';

import React from 'react';

import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { InputGrid } from './components/InputGrid';

const App = () => {
    return (
        <div style={{ width: '100%' }}>
            <Header/>
            <div className="app">
                <InputGrid />
                <Calculator/>
            </div>
        </div>
    );
};

export default App;
