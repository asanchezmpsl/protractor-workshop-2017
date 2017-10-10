import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get buttonProceedCheckOut(): ElementFinder {
    return $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public goToProceedCheckOut(): promise.Promise<void> {
    return this.buttonProceedCheckOut.click();
  }
}
