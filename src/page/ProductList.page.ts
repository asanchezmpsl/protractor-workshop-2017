import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get getProduct(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToProduct(): promise.Promise<void> {
    return this.getProduct.click();
  }
}
