import Beverage from "./Beverage";

export default class Cart {
  cart: Beverage[] = [];
  count = Array<number>(100).fill(0);

  push(item: Beverage): void {
    if (this.count[item.id] === 0) this.cart.push(item);
    this.count[item.id] += 1;
  }

  getItems() {
    return this.cart;
  }

  getCount(id: number) {
    return this.count[id];
  }

  deleteItem(id: number) {
    this.count[id] = 0;
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  getTotalPrice() {
    return this.cart
      .map((item) => item.price * this.count[item.id])
      .reduce((sum, price) => sum + price, 0);
  }
}
