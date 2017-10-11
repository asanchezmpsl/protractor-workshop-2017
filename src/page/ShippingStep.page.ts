import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get proceedCheckOutButton(): ElementFinder {
    return $('#form > p > button > span');
  }
  private get agreeTermsCheckbox(): ElementFinder {
    return $('#cgv');
  }

  public goToAgreeTerms(): promise.Promise<void> {
    return this.agreeTermsCheckbox.click();
  }
  public goToProceedCheckout() : promise.Promise<void> {
    return this.proceedCheckOutButton.click();
  }
}
