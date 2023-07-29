export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('ens-us', {
    currency: 'usd',
    style: 'currency',
  }).format(amount);
}
