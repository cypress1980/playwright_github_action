class InventoryPage {
    constructor(page) {
        this.page = page;
        this.backpackAddButton = '#add-to-cart-sauce-labs-backpack';
        this.cartButton = '.shopping_cart_link';
    }

    async addBackpackToCart() {
        await this.page.click(this.backpackAddButton);
    }

    async openCart() {
        await this.page.click(this.cartButton);
    }
}

module.exports = InventoryPage;