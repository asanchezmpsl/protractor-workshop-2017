import { $, ElementFinder } from 'protractor';

export class ProductDetailPage {
  private get addCartButton(): ElementFinder {
    // return $('.box-cart-bottom > button');
    return $('#add_to_cart');
  }

  public async addCart(): Promise<void> {
    return this.addCartButton.click();
  }
}
