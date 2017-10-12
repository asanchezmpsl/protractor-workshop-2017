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
  
  public async goToSignIn(email: string, password: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.buttonSignIn.click();
  }
}
