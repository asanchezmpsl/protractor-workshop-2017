import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get buttonProceedCheckOut(): ElementFinder {
    return $('.cart_navigation span');
  }

  public goToProceedCheckOut(): promise.Promise<void> {
    return this.buttonProceedCheckOut.click();
  }
}
