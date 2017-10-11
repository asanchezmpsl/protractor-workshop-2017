import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get textOrder(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public goToOrderResume(): promise.Promise<string> {
    return this.textOrder.getText();
  }
}
