import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get buttonCheckOut(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToProceedCkeckOutButton(): promise.Promise<void> {
    return this.buttonCheckOut.click();
  }
}
