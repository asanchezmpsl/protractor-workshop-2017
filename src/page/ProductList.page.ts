import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private get productButton(): ElementFinder {
    return $('#color_1');
    // return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public async goToProduct(): Promise<void> {
    await this.productButton.click();
  }
}
