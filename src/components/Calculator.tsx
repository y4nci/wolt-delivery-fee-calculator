import { Button } from '@blueprintjs/core';
import React, { useState } from 'react';

import { calculateFee } from '../lib/calculateFee';
import { areInputsValid } from '../lib/validation';
import { InputService } from '../services/inputService';
import { WarningService } from '../services/warningService';

/**
 * The component that contains the button that calculates the fee and the fee itself.
 */
export const Calculator = () => {
    const [fee, setFee] = useState<Fee>(null);

    const calculate = () => {
        const { cart, distance, items, orderTime } = InputService.getInstance().getInputs();
        const totalFee = calculateFee(cart, distance, items, orderTime);
        return totalFee;
    };

    return (
        <div className="calculator flexCenterColumn">
            <Button style={{ fontSize: 'large' }} intent="primary"
                onClick={() => {
                    const [isValid, invalids] = areInputsValid();

                    if (!isValid) {
                        new WarningService().warn(invalids);
                        return;
                    }
                    setFee(calculate());
                }}
                icon="calculator"
            >Calculate</Button>
            {fee !== null &&
                <div className="fee">
                    <p>In total:&nbsp;</p>
                    <p className="feeAmount">{fee}€</p>
                </div>
            }
        </div>
    );
};
