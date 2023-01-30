/**
 * Value of the shopping cart in euros.
 * - **FLOAT**
 */
declare type Cart = number;

/**
 * The distance between the store and customer’s location in meters.
 * - **INTEGER**
 */
type Distance = number;

/**
 * The number of items in the customer's shopping cart.
 * - **INTEGER**
 */
type Items = number;

/**
 * The date/time when the order is being made (see rules-section how rush hours affect the delivery price)
 * - **Date**
 */
declare type OrderTime = Date;
