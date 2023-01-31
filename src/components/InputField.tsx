import { NumericInput } from '@blueprintjs/core';
import React from 'react';

export const InputField = (props: { value: any, onChange: any, intent: any }) => {
    const { value, onChange, intent } = props;

    return (
        <NumericInput
            fill
            asyncControl
            placeholder="Enter a number..."
            min={0}
            value={value}
            onValueChange={onChange}
            stepSize={1}
            intent={intent}
        />
    );
};
