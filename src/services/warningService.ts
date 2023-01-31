export class WarningService {
    constructor() {
        this.warn = this.warn.bind(this);
    }

    pluralSuffix(count: number): string {
        return count === 1 ? '' : 's';
    }

    warn(invalids: string[]): void {
        window.alert('Please make sure the following input value' + this.pluralSuffix(invalids.length) + ' are valid: '
            + invalids.join(', '));
    }
}
