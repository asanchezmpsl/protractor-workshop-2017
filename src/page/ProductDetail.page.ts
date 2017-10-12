import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get addCartButton(): ElementFinder {
    return $('#add_to_cart');
  }

  public addCart(): promise.Promise<void> {
    return this.addCartButton.click();
  }
}
