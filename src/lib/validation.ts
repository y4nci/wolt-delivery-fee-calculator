/**
 * makes the necessary checks to validate the data
 */
import { InputService } from '../services/inputService';

export const isCartValid = (cart: Cart): boolean => {
    return cart != null && cart >= 0;
};

export const isDistanceValid = (distance: Distance): boolean => {
    return distance != null && distance >= 0 && Number.isInteger(distance);
};

export const isItemsValid = (items: Items): boolean => {
    return items != null && items >= 0 && Number.isInteger(items);
};

export const areInputsValid = (): [boolean, string[]] => {
    const { cart, distance, items } = InputService.getInstance().getInputs();
    let invalids: string[] = [];
    let isValid = true;

    if (!isCartValid(cart)) {
        isValid = false;
        invalids.push('Cart Value');
    }
    if (!isDistanceValid(distance)) {
        isValid = false;
        invalids.push('Delivery Distance');
    }
    if (!isItemsValid(items)) {
        isValid = false;
        invalids.push('Item Count');
    }

    return [isValid, invalids];
};
