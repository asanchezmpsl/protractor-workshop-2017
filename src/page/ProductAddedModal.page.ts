import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get checkOut(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public goToProceedCheckOut(): promise.Promise<void> {
    return this.checkOut.click();
  }
}
