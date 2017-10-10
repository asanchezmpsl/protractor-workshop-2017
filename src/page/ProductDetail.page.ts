import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get buttonAddCart(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public goToAddCart(): promise.Promise<void> {
    return this.buttonAddCart.click();
  }
}
