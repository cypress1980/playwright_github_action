class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.zipCodeInput = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.thankYouMessage = '.complete-header';
    }

    async fillCheckoutInfo(firstName, lastName, zipCode) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.zipCodeInput, zipCode);
        await this.page.click(this.continueButton);
    }

    async finishOrder() {
        await this.page.click(this.finishButton);
    }

    async getConfirmationMessage() {
        return await this.page.textContent(this.thankYouMessage);
    }
}

module.exports = CheckoutPage;