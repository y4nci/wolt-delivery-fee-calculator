import { Icon, Intent } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import React, { useState } from 'react';

import { dateFormatter, dateParser } from '../lib/dateUtils';
import { isCartValid, isDistanceValid, isItemsValid, isOrderTimeValid } from '../lib/validation';
import { InputService } from '../services/inputService';
import { InputField } from './InputField';

/**
 * Includes all the input fields for the cart, distance, item count and date
 */
export const InputGrid = () => {
    const [cartIntent, setCartIntent] = useState('primary');
    const [distanceIntent, setDistanceIntent] = useState('primary');
    const [itemsIntent, setItemsIntent] = useState('primary');
    const [orderTimeIntent, setOrderTimeIntent] = useState('primary');

    return (
        <div className="inputGrid">
            <div className="alignSelfCenter marginBottom24">Cart Value</div>
            <div className="alignSelfCenter50">
                <InputField
                    id="cartInput"
                    onChange={(valueAsNumber) => {
                        if (!isCartValid(valueAsNumber)) {
                            setCartIntent('danger');
                        } else {
                            setCartIntent('primary');
                        }
                        InputService.getInstance().setCart(valueAsNumber);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            document.getElementById('distanceInput').focus();
                        }
                    }}
                    intent={cartIntent}
                    leftIcon="euro"
                    placeholder="€"
                />
            </div>
            <div className="alignSelfCenter marginBottom24">Delivery Distance</div>
            <div className="alignSelfCenter50">
                <InputField
                    id="distanceInput"
                    onChange={(valueAsNumber) => {
                        if (!isDistanceValid(valueAsNumber)) {
                            setDistanceIntent('danger');
                        } else {
                            setDistanceIntent('primary');
                        }
                        InputService.getInstance().setDistance(valueAsNumber);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            document.getElementById('itemsInput').focus();
                        }
                    }}
                    intent={distanceIntent}
                    leftIcon="map"
                    placeholder="m"
                />
            </div>
            <div className="alignSelfCenter marginBottom24">Item Count</div>
            <div className="alignSelfCenter50">
                <InputField
                    id="itemsInput"
                    onChange={(valueAsNumber) => {
                        if (!isItemsValid(valueAsNumber)) {
                            setItemsIntent('danger');
                        } else {
                            setItemsIntent('primary');
                        }
                        InputService.getInstance().setItems(valueAsNumber);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            document.getElementById('orderTimeInput').focus();
                        }
                    }}
                    intent={itemsIntent}
                    leftIcon="shopping-cart"
                    placeholder="items"
                />
            </div>
            <div className="alignSelfCenter">Order Time</div>
            <div className="alignSelfCenter" style={{ marginTop: '8px' }}>
                <DateInput
                    highlightCurrentDay
                    fill
                    closeOnSelection={false}
                    popoverProps={{ position: 'bottom' }}
                    placeholder={dateFormatter(new Date())}
                    formatDate={date => dateFormatter(date)}
                    parseDate={str => dateParser(str)}
                    onChange={(selectedDate) => {
                        if (!isOrderTimeValid(selectedDate)) {
                            setOrderTimeIntent('danger');
                        } else {
                            setOrderTimeIntent('primary');
                        }
                        InputService.getInstance().setOrderTime(selectedDate);
                    }}
                    timePickerProps={{
                        showArrowButtons: true,
                        precision: 'minute',
                    }}
                    shortcuts
                    inputProps={{
                        id: 'orderTimeInput',
                        leftElement: <Icon icon="calendar"/>,
                        intent: orderTimeIntent as Intent,
                    }}
                />
            </div>
        </div>
    );
};
