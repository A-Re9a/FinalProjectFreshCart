export function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { // You can change 'en-US' to another locale if needed
        style: 'currency',
        currency: 'USD' // You can change 'USD' to another currency code (e.g., 'EUR', 'GBP', 'JPY')
    }).format(number);
}
