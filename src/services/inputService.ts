/**
 * the class that controls the inputs.
 */
export class InputService {
    /** contains the values of inputs: cart, distance, item count and order time */
    state;

    private static _instance = new InputService();

    private constructor() {
        if (this.state) return;

        this.state = {
            cart: null as Cart,
            distance: null as Distance,
            items: null as Items,
            orderTime: new Date() as OrderTime,
        };
    }

    static getInstance(): InputService {
        // eslint-disable-next-line no-underscore-dangle
        return this._instance || new InputService();
    }

    setCart(cart: Cart) {
        this.state.cart = cart;
    }

    setDistance(distance: Distance) {
        this.state.distance = distance;
    }

    setItems(items: Items) {
        this.state.items = items;
    }

    setOrderTime(orderTime: OrderTime) {
        this.state.orderTime = orderTime;
    }

    getCart(): Cart {
        return this.state.cart;
    }

    getDistance(): Distance {
        return this.state.distance;
    }

    getItems(): Items {
        return this.state.items;
    }

    getOrderTime(): OrderTime {
        return this.state.orderTime;
    }

    getInputs() {
        return this.state;
    }
}
