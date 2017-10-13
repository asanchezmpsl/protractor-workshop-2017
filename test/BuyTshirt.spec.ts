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
    await productlistPage.goToProduct();
    await productdetailPage.addCart();
    await productaddedmodalPage.proceedCheckout();

    await summarystepPage.goToProceedCheckOut();
    
    await signinstepPage.goToSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressstepPage.goToProceedcheckoutButton();

    await shippingstepPage.agreeTermsContinue();
    await bankpaymentPage.goToPayBankWire();
    await paymentstepPage.confirmOrder();

    await expect(orderrResumePage.getResumeText()).toBe('Your order on My Store is complete.');
  });
});
