export const calculateTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
};