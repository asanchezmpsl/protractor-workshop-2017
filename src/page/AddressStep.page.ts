import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get checkoutButton(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToProceedcheckoutButton(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
