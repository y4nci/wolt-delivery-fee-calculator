import { Button } from '@blueprintjs/core';
import React, { useState } from 'react';

import { calculateFee } from '../lib/calculateFee';
import { areInputsValid } from '../lib/validation';
import { InputService } from '../services/inputService';
import { WarningService } from '../services/warningService';

export const Calculator = () => {
    const [fee, setFee] = useState<Fee>(null);

    const calculate = () => {
        const { cart, distance, items, orderTime } = InputService.getInstance().getInputs();
        const totalFee = calculateFee(cart, distance, items, orderTime);
        return totalFee;
    };

    return (
        <div className="calculator">
            <Button minimal style={{ fontSize: 'large' }} fill intent="primary" onClick={() => {
                if (!areInputsValid()) {
                    new WarningService().warn();
                    return;
                }
                setFee(calculate());
            }}>Calculate</Button>
            <div className="fee">
                {fee !== null ? `Fee: ${fee}€` : ''}
            </div>
        </div>
    );
};
