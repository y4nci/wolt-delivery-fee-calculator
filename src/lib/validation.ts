/**
 * makes the necessary checks to validate the data
 */
import { InputService } from '../services/inputService';

/**
 * Checks if the cart value input is valid.
 * The input must be a number and must be greater than 0.
 * @param cart The cart value input.
 * @returns True if the input is valid, false otherwise.
 */
export const isCartValid = (cart: Cart): boolean => {
    return cart != null && cart >= 0;
};

/**
 * Checks if the distance input is valid.
 * The input must be an integer and must be greater than 0.
 * @param distance The distance input.
 * @returns True if the input is valid, false otherwise.
 */
export const isDistanceValid = (distance: Distance): boolean => {
    return distance != null && distance >= 0 && Number.isInteger(distance);
};

/**
 * Checks if the item count input is valid.
 * The input must be an integer and must be greater than 0.
 * @param items The item count input.
 * @returns True if the input is valid, false otherwise.
 */
export const isItemsValid = (items: Items): boolean => {
    return items != null && items >= 0 && Number.isInteger(items);
};

/**
 * Checks whether the inputs are valid.
 * Fetches the inputs from the input service.
 * @returns True if the inputs are valid, false otherwise.
 */
export const areInputsValid = (): [boolean, string[]] => {
    const { cart, distance, items } = InputService.getInstance().getInputs();
    let invalids: string[] = [];
    let isValid = true;

    if (!isCartValid(cart)) {
        isValid = false;
        invalids.push('cart');
    }
    if (!isDistanceValid(distance)) {
        isValid = false;
        invalids.push('distance');
    }
    if (!isItemsValid(items)) {
        isValid = false;
        invalids.push('items');
    }

    return [isValid, invalids];
};
