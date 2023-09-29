export const currencyFormatter = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  }).format(amount);
};
