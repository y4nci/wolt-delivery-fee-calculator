export class WarningService {
    invalidCartMessage = 'The cart value must be a number greater than 0.\n';

    invalidDistanceMessage = 'The distance value must be an integer greater than 0.\n';

    invalidItemsMessage = 'The number of items must be an integer greater than 0.\n';

    constructor() {
        this.warn = this.warn.bind(this);
    }

    pluralSuffix(count: number): string {
        return count === 1 ? '' : 's';
    }

    /**
     * shows a warning message to the user if the inputs are invalid
     * @param invalids the invalid inputs
     */
    warn(invalids: string[]): void {
        let warning = '';

        if (invalids.includes('cart')) {
            warning += this.invalidCartMessage;
        }

        if (invalids.includes('distance')) {
            warning += this.invalidDistanceMessage;
        }

        if (invalids.includes('items')) {
            warning += this.invalidItemsMessage;
        }

        if (warning) {
            alert(warning);
        }
    }
}
