import { $, browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, OrderResumePage, PaymentStepPage, 
  ProductAddedModalPage, ProductDetailPage, ProductListPage, ShippingStepPage, SignInStepPage, 
  SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productlistPage: ProductListPage = new ProductListPage();
  const productdetailPage: ProductDetailPage = new ProductDetailPage();
  const productaddedmodalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summarystepPage: SummaryStepPage = new SummaryStepPage();
  const signinstepPage: SignInStepPage = new SignInStepPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });
  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productlistPage.goToProduct();
    await(browser.sleep(6000));
    await productdetailPage.goToAddCart();
    await(browser.sleep(3000));
    await productaddedmodalPage.goToProceedCheckOut();
    await(browser.sleep(3000));
    await summarystepPage.goToProceedCheckOut();
    await(browser.sleep(3000));

    await signinstepPage.goToSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));
    
    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
