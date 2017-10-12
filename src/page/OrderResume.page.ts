import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get orderLabel(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getResumeText(): promise.Promise<string> {
    return this.orderLabel.getText();
  }
}
