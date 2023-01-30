/**
 * If the cart value is less than 10€, a small order surcharge is added to the delivery price
 */
export const CART_SURCHARGE = 10;

/**
 * If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including
 * the fifth item.
 */
export const EXTRA_ITEM_THRESHOLD = 5;
export const EXTRA_ITEM_SURCHARGE = 0.5;

/**
 * An extra "bulk" fee applies for more than 12 items of 1,20€
 */
export const BULK_ITEM_THRESHOLD = 12;
export const BULK_ITEM_SURCHARGE = 1.2;

/**
 * A delivery fee for the first 1000 meters (=1km) is 2€.
 */
export const BASE_DISTANCE = 1000;
export const BASE_FEE = 2;

/**
 * If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to
 * travel before reaching the destination.
 */
export const EXTRA_DISTANCE = 500;
export const EXTRA_FEE = 1;

/**
 * The delivery fee can never be more than 15€, including possible surcharges.
 */
export const MAX_DELIVERY_FEE = 15;

/**
 * The delivery is free (0€) when the cart value is equal or more than 100€.
 */
export const FREE_DELIVERY_THRESHOLD = 100;

/**
 * During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be
 * multiplied by 1.2x. However, the fee still cannot be more than the max (15€).
 */
export const RUSH_HOUR_FACTOR = 1.2;
export const RUSH_HOUR_START = 15;
export const RUSH_HOUR_END = 19;
export const RUSH_HOUR_DAY = 5;
