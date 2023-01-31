import { NumericInput } from '@blueprintjs/core';
import React from 'react';

/**
 * InputField component, a wrapper around Blueprint's NumericInput
 * @param props must include a value, onChange, and label, can include other optional props
 */
export const InputField = (props) => {
    const { value, onChange, intent } = props;

    return (
        <NumericInput
            fill
            asyncControl
            min={0}
            value={value}
            onValueChange={onChange}
            stepSize={1}
            intent={intent}
            {...props}
        />
    );
};
