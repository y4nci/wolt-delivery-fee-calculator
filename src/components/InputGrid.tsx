import { DateInput } from '@blueprintjs/datetime';
import React, { useState } from 'react';

import { dateFormatter, dateParser } from '../lib/dateUtils';
import { isCartValid, isDistanceValid, isItemsValid } from '../lib/validation';
import { InputService } from '../services/inputService';
import { InputField } from './InputField';

/**
 * Includes all the input fields for the cart, distance, item count and date
 */
export const InputGrid = () => {
    // TODO: get rid of these states
    const [cartValue, setCartValue] = useState<Cart>(null);
    const [distanceValue, setDistanceValue] = useState<Distance>(null);
    const [itemsValue, setItemsValue] = useState<Items>(null);
    const [orderDateValue, setOrderDateValue] = useState<OrderTime>(new Date());
    const [cartIntent, setCartIntent] = useState('primary');
    const [distanceIntent, setDistanceIntent] = useState('primary');
    const [itemsIntent, setItemsIntent] = useState('primary');

    return (
        <div className="inputGrid">
            <div className="alignSelfCenter marginBottom24">Cart Value</div>
            <div className="alignSelfCenter50">
                <InputField
                    value={cartValue}
                    onChange={(valueAsNumber) => {
                        if (!isCartValid(valueAsNumber)) {
                            setCartIntent('danger');
                        } else {
                            setCartIntent('primary');
                        }
                        InputService.getInstance().setCart(valueAsNumber);
                        setCartValue(valueAsNumber);
                    }}
                    intent={cartIntent}
                    leftIcon="euro"
                    placeholder="€"
                />
            </div>
            <div className="alignSelfCenter marginBottom24">Delivery Distance</div>
            <div className="alignSelfCenter50">
                <InputField
                    value={distanceValue}
                    onChange={(valueAsNumber) => {
                        if (!isDistanceValid(valueAsNumber)) {
                            setDistanceIntent('danger');
                        } else {
                            setDistanceIntent('primary');
                        }
                        InputService.getInstance().setDistance(valueAsNumber);
                        setDistanceValue(valueAsNumber);
                    }}
                    intent={distanceIntent}
                    leftIcon="map"
                    placeholder="m"
                />
            </div>
            <div className="alignSelfCenter marginBottom24">Item Count</div>
            <div className="alignSelfCenter50">
                <InputField
                    value={itemsValue}
                    onChange={(valueAsNumber) => {
                        if (!isItemsValid(valueAsNumber)) {
                            setItemsIntent('danger');
                        } else {
                            setItemsIntent('primary');
                        }
                        InputService.getInstance().setItems(valueAsNumber);
                        setItemsValue(valueAsNumber);
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
                    placeholder="DD/MM/YYYY"
                    formatDate={date => dateFormatter(date)}
                    parseDate={str => dateParser(str)}
                    value={orderDateValue}
                    onChange={(selectedDate) => {
                        InputService.getInstance().setOrderTime(selectedDate);
                        setOrderDateValue(selectedDate);
                    }}
                    timePickerProps={{
                        showArrowButtons: true,
                        precision: 'minute',
                    }}
                />
            </div>
        </div>
    );
};
