import { browser } from 'protractor';
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
  const addressstepPage: AddressStepPage = new AddressStepPage();
  const shippingstepPage: ShippingStepPage = new ShippingStepPage();
  const bankpaymentPage: BankPaymentPage = new BankPaymentPage();
  const paymentstepPage: PaymentStepPage = new PaymentStepPage();
  const orderrResumePage: OrderResumePage = new OrderResumePage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });
  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productlistPage.goToProduct();
    await(browser.sleep(9000));
    await productdetailPage.goToAddCart();
    await(browser.sleep(3000));
    await productaddedmodalPage.goToProceedCheckOut();

    await(browser.sleep(3000));

    await summarystepPage.goToProceedCheckOut();
    
    await(browser.sleep(6000));

    await signinstepPage.goToSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(6000));

    await addressstepPage.goToProceedCkeckOutButton();
    await(browser.sleep(6000));

    await shippingstepPage.goToAgreeTerms();
    await(browser.sleep(6000));
    
    await shippingstepPage.goToProceedCheckout();
    await(browser.sleep(6000));
    await bankpaymentPage.goToPayBanlWire();
    await(browser.sleep(6000));
    await paymentstepPage.goToConfirmOrderButton();
    await(browser.sleep(6000));

    await expect(orderrResumePage.goToOrderResume()).toBe('Your order on My Store is complete.');
  });
});
