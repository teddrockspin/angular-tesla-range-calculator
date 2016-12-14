export class AngularTeslaRangeCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-tesla-range-calculator-app h1')).getText();
  }
}
