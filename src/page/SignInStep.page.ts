import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get email(): ElementFinder {
    return $('#email');
  }
  private get password(): ElementFinder {
    return $('#passwd');
  }
  private get buttonSignIn(): ElementFinder {
    return $('#SubmitLogin > span');
  }
  
  public goToSignIn(email: string, password: string): promise.Promise<void> {
    this.email.sendKeys(email);
    this.password.sendKeys(password);
    return this.buttonSignIn.click();
  }
}
