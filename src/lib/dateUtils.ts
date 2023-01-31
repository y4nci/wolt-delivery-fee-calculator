/**
 * Formats the date to a string for order date input
 * @param date The date to format
 * @returns The formatted date
 */
export const dateFormatter = (date: OrderTime): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

/**
 * Parses the date from an input string for order date input
 * @param date The date to parse
 * @returns The parsed date
 */
export const dateParser = (date: string): OrderTime => {
    const [day, month, year] = date.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
