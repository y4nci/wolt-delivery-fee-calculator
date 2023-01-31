import { DatePicker } from '@blueprintjs/datetime';
import React, { useState } from 'react';

import { isCartValid, isDistanceValid, isItemsValid } from '../lib/validation';
import { InputService } from '../services/inputService';
import { InputField } from './InputField';

export const InputGrid = () => {
    const [cartValue, setCartValue] = useState<Cart>(null);
    const [distanceValue, setDistanceValue] = useState<Distance>(null);
    const [itemsValue, setItemsValue] = useState<Items>(null);
    const [orderDateValue, setOrderDateValue] = useState<OrderTime>(new Date());
    const [cartIntent, setCartIntent] = useState('primary');
    const [distanceIntent, setDistanceIntent] = useState('primary');
    const [itemsIntent, setItemsIntent] = useState('primary');

    return (
        <div className="inputGrid">
            <div className="alignSelfCenter">Cart Value</div>
            <div className="alignSelfCenter">
                <InputField
                    value={cartValue}
                    onChange={(valueAsNumber) => {
                        if (!isCartValid(valueAsNumber)) {
                            setCartIntent('danger');
                            return;
                        }
                        InputService.getInstance().setCart(valueAsNumber);
                        setCartValue(valueAsNumber);
                        setCartIntent('primary');
                    }}
                    intent={cartIntent}
                />
            </div>
            <div className="alignSelfCenter unit">€</div>
            <div className="alignSelfCenter">Delivery Distance</div>
            <div className="alignSelfCenter">
                <InputField
                    value={distanceValue}
                    onChange={(valueAsNumber) => {
                        if (!isDistanceValid(valueAsNumber)) {
                            setDistanceIntent('danger');
                            return;
                        }
                        InputService.getInstance().setDistance(valueAsNumber);
                        setDistanceValue(valueAsNumber);
                        setDistanceIntent('primary');
                    }}
                    intent={distanceIntent}
                />
            </div>
            <div className="alignSelfCenter unit">m</div>
            <div className="alignSelfCenter">Item Count</div>
            <div className="alignSelfCenter">
                <InputField
                    value={itemsValue}
                    onChange={(valueAsNumber) => {
                        if (!isItemsValid(valueAsNumber)) {
                            setItemsIntent('danger');
                            return;
                        }
                        InputService.getInstance().setItems(valueAsNumber);
                        setItemsValue(valueAsNumber);
                        setItemsIntent('primary');
                    }}
                    intent={itemsIntent}
                />
            </div>
            <div/>
            <div className="alignSelfCenter">Order Time</div>
            <div className="alignSelfCenter">
                <DatePicker
                    className="bp4-input noInput flexCenter"
                    value={orderDateValue}
                    onChange={(selectedDate) => {
                        InputService.getInstance().setOrderTime(selectedDate);
                        setOrderDateValue(selectedDate);
                    }}
                    timePrecision="minute"
                    timePickerProps={{
                        showArrowButtons: true,
                    }}
                />
            </div>
            <div/>
        </div>
    );
};
