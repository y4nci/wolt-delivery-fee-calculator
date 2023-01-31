export class WarningService {
    constructor() {
        this.warn = this.warn.bind(this);
    }

    warn(): void {
        window.alert('Please make sure all your inputs are valid.\n\n' +
            '  Cart: a positive number\n' +
            '  Distance: a positive integer\n' +
            '  Items: a positive integer');
    }
}
