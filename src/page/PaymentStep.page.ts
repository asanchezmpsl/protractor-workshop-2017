import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get confirmOrderButton(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public confirmOrder(): promise.Promise<void> {
    return this.confirmOrderButton.click();
  }
}
