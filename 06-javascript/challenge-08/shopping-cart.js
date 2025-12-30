function createShoppingCart() {
  let items = [];
  let discountPercent = 0;

  return {

    addItem(product) {
      const existingItem = items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
        console.log(`Updated ${existingItem.name} quantity to ${existingItem.quantity}`);
      } else {
        items.push({ ...product });
        console.log(`Added ${product.name} to cart`);
      }
    },

    removeItem(id) {
      items = items.filter(item => item.id !== id);
      console.log(`Removed item with id ${id}`);
    },

    updateQuantity(id, quantity) {
      const item = items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        console.log(`Quantity updated: ${item.name} → ${quantity}`);
      }
    },

    getItems() {
      return items;
    },

    getTotal() {
      const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const discountedTotal = total - (total * discountPercent) / 100;
      return +discountedTotal.toFixed(2);
    },

    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    isEmpty() {
      return items.length === 0;
    },

    applyDiscount(code, percent) {
      if (code && percent > 0) {
        discountPercent = percent;
        console.log(`Discount applied: ${percent}% (${code})`);
      }
    },

    clear() {
      items = [];
      discountPercent = 0;
      console.log(`Cart cleared`);
    }
  };
}
