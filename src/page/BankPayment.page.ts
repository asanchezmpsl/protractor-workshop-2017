import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get payBankWireButton(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToPayBankWire(): promise.Promise<void> {
    return this.payBankWireButton.click();
  }
}
