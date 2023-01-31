import {
    BASE_DISTANCE,
    BASE_FEE, BULK_ITEM_SURCHARGE, BULK_ITEM_THRESHOLD,
    CART_SURCHARGE,     EXTRA_DISTANCE,
    EXTRA_FEE,
    EXTRA_ITEM_SURCHARGE, EXTRA_ITEM_THRESHOLD,
    FREE_DELIVERY_THRESHOLD,     MAX_DELIVERY_FEE, RUSH_HOUR_DAY, RUSH_HOUR_END, RUSH_HOUR_FACTOR,
    RUSH_HOUR_START,
} from './constants';

/**
 * Calculates the cart surcharge based on the cart value.
 * @param cart The cart value.
 * @returns The cart surcharge.
 */
const calculateCartSurcharge = (cart: Cart): number => {
    return cart < CART_SURCHARGE ? CART_SURCHARGE - cart : 0;
};

/**
 * Calculates the item surcharge based on the number of items.
 * @param items The number of items.
 * @returns The item surcharge.
 */
const calculateItemsSurcharge = (items: Items): number => {
    let surcharge = 0;

    if (items >= EXTRA_ITEM_THRESHOLD) {
        surcharge += (1 + items - EXTRA_ITEM_THRESHOLD) * EXTRA_ITEM_SURCHARGE;
    }

    if (items > BULK_ITEM_THRESHOLD) {
        surcharge += BULK_ITEM_SURCHARGE; // TODO: it may be 1.2€ per item
    }

    return surcharge;
};

/**
 * Calculates the raw delivery fee based on the distance.
 * @param distance The distance.
 * @returns The raw delivery fee.
 */
const calculateDeliveryFee = (distance: Distance): number => {
    if (distance < BASE_DISTANCE) return BASE_FEE;

    const extraDistanceFree = Math.ceil((distance - BASE_DISTANCE) / EXTRA_DISTANCE) * EXTRA_FEE;

    return Math.min(BASE_FEE + extraDistanceFree, MAX_DELIVERY_FEE);
};

/**
 * Returns true if the order is placed during rush hour.
 * @param orderTime The order time.
 * @returns True if the order is placed during rush hour.
 */
const isRushHour = (orderTime: OrderTime): boolean => {
    return (
        orderTime.getDay() === RUSH_HOUR_DAY &&
        orderTime.getHours() >= RUSH_HOUR_START &&
        orderTime.getHours() < RUSH_HOUR_END
    );
};

/**
 * Calculates the final delivery fee based on the distance and the order time.
 * @param cartInp The cart value.
 * @param distanceInp The distance.
 * @param itemsInp The number of items.
 * @param orderTimeInp The order time.
 */
export const calculateFee = (
    cartInp: Cart, distanceInp: Distance,
    itemsInp: Items, orderTimeInp: OrderTime,
): number => {
    const cartSurcharge = calculateCartSurcharge(cartInp);
    const itemsSurcharge = calculateItemsSurcharge(itemsInp);
    const deliveryFee = calculateDeliveryFee(distanceInp);

    if (cartInp >= FREE_DELIVERY_THRESHOLD) return 0;

    let fee = cartSurcharge + itemsSurcharge + deliveryFee;

    if (isRushHour(orderTimeInp)) fee *= RUSH_HOUR_FACTOR;

    return Math.min(fee, MAX_DELIVERY_FEE);
};
