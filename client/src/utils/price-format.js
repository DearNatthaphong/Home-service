export function formatPrice(priceString) {
  const price = Number(priceString).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${price} บาท`;
}
