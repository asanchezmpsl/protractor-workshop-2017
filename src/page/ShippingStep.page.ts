import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get proceedCheckOutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  private get agreeTermsCheckbox(): ElementFinder {
    return $('#cgv');
  }

  public async agreeTermsContinue() : Promise<void> {
    await this.agreeTermsCheckbox.click();
    await this.proceedCheckOutButton.click();
  }
}
