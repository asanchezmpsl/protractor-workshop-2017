import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get payBankWire(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToPayBanlWire(): promise.Promise<void> {
    return this.payBankWire.click();
  }
}
