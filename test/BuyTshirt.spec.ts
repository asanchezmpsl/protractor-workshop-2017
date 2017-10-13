import { browser } from 'protractor';
import { MenuContentPage, 
  AddressStepPage, 
  BankPaymentPage, 
  OrderResumePage, 
  PaymentStepPage, 
  ProductAddedModalPage, 
  ProductDetailPage, 
  ProductListPage, 
  ShippingStepPage, 
  SignInStepPage, 
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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productlistPage.goToProduct();
    await(browser.sleep(9000));
    await productdetailPage.addCart();
    await(browser.sleep(3000));
    await productaddedmodalPage.proceedCheckout();

    await(browser.sleep(9000));
    await productaddedmodalPage.proceedCheckout();

    await(browser.sleep(3000));

    await summarystepPage.goToProceedCheckOut();
    
    await(browser.sleep(6000));

    await signinstepPage.goToSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(6000));

    await addressstepPage.goToProceedcheckoutButton();
    await(browser.sleep(6000));

    await shippingstepPage.agreeTermsContinue();
    await(browser.sleep(6000));
    await bankpaymentPage.goToPayBankWire();
    await(browser.sleep(6000));
    await paymentstepPage.confirmOrder();
    await(browser.sleep(6000));

    await expect(orderrResumePage.getResumeText()).toBe('Your order on My Store is complete.');
  });
});
