import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get checkoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public proceedCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
