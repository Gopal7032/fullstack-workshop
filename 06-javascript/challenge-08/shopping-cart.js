function createShoppingCart() {
  let items = [];
  let discountPercent = 0;

  return {

    // Add item to cart
    addItem(product) {
      const existingItem = items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        items.push({ ...product });
      }
    },

    // Remove item by id
    removeItem(id) {
      items = items.filter(item => item.id !== id);
    },

    // Update quantity of an item
    updateQuantity(id, quantity) {
      const item = items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    // Get all items
    getItems() {
      return items;
    },

    // Get total price (with discount applied)
    getTotal() {
      const total = items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      return +(total - (total * discountPercent) / 100).toFixed(2);
    },

    // Get total quantity of all items
    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    // Check if cart is empty
    isEmpty() {
      return items.length === 0;
    },

    // Apply discount
    applyDiscount(code, percent) {
      if (code && percent > 0) {
        discountPercent = percent;
      }
    },

    // Clear cart
    clear() {
      items = [];
      discountPercent = 0;
    }
  };
}

//TEST
const cart = createShoppingCart();

cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });
cart.addItem({ id: 2, name: "Mouse", price: 29, quantity: 2 });
cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });

console.log(cart.getItems());
// Laptop quantity = 2, Mouse quantity = 2

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(cart.getTotal());       // 2997
console.log(cart.getItemCount());   // 3
console.log(cart.isEmpty());        // false

cart.applyDiscount("SAVE10", 10);
console.log(cart.getTotal());       // 2697.30

cart.clear();
console.log(cart.isEmpty());        // true