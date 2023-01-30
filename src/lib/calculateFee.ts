import {
    BASE_DISTANCE,
    BASE_FEE, BULK_ITEM_SURCHARGE, BULK_ITEM_THRESHOLD,
    CART_SURCHARGE,     EXTRA_DISTANCE,
    EXTRA_FEE,
    EXTRA_ITEM_SURCHARGE, EXTRA_ITEM_THRESHOLD,
    FREE_DELIVERY_THRESHOLD,     MAX_DELIVERY_FEE, RUSH_HOUR_DAY, RUSH_HOUR_END, RUSH_HOUR_FACTOR,
    RUSH_HOUR_START,
} from '@constants';

const calculateCartSurcharge = (cart: Cart): number => {
    return cart < CART_SURCHARGE ? CART_SURCHARGE - cart : 0;
};

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

const calculateDeliveryFee = (distance: Distance): number => {
    if (distance < BASE_DISTANCE) return BASE_FEE;

    const extraDistanceFree = Math.ceil((distance - BASE_DISTANCE) / EXTRA_DISTANCE) * EXTRA_FEE;

    return Math.min(BASE_FEE + extraDistanceFree, MAX_DELIVERY_FEE);
};

const isRushHour = (orderTime: OrderTime): boolean => {
    return (
        orderTime.getDay() === RUSH_HOUR_DAY &&
        orderTime.getHours() >= RUSH_HOUR_START &&
        orderTime.getHours() < RUSH_HOUR_END
    );
};

export const calculateFee = (
    cartInp: Cart, distanceInp: Distance,
    itemsInp: Items, orderTimeInp: OrderTime,
): number => {
    const cartSurcharge = calculateCartSurcharge(cartInp);
    const itemsSurcharge = calculateItemsSurcharge(itemsInp);
    const deliveryFee = calculateDeliveryFee(distanceInp);

    if (cartSurcharge >= FREE_DELIVERY_THRESHOLD) return 0;

    let fee = cartSurcharge + itemsSurcharge + deliveryFee;

    if (isRushHour(orderTimeInp)) fee *= RUSH_HOUR_FACTOR;

    return Math.min(fee, MAX_DELIVERY_FEE);
};
