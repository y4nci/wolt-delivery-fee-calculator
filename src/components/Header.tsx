import { Divider } from '@blueprintjs/core';
import React from 'react';

export const Header = () => {
    return (
        <div className="header">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Wolt-app-icon-2019.png"
                alt="Wolt"
                className="logo"
                onClick={() => window.open('https://wolt.com/en')}
            />
            <Divider className="divider"/>
            <h1
                onClick={() => {
                    window.location.href = '/wolt-delivery-fee-calculator';
                }}
            >
                Delivery Fee Calculator
            </h1>
        </div>
    );
};

