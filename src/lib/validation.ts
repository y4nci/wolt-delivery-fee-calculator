/**
 * makes the necessary checks to validate the data
 */
import { InputService } from '../services/inputService';

export const isCartValid = (cart: Cart): boolean => {
    return cart && cart >= 0;
};

export const isDistanceValid = (distance: Distance): boolean => {
    return distance && !(distance < 0 || !Number.isInteger(distance));
};

export const isItemsValid = (items: Items): boolean => {
    return items && !(items < 0 || !Number.isInteger(items));
};

export const areInputsValid = (): boolean => {
    const { cart, distance, items } = InputService.getInstance().getInputs();

    return isCartValid(cart) && isDistanceValid(distance) && isItemsValid(items);
};
