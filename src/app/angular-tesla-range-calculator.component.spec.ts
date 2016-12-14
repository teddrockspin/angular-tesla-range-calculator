import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularTeslaRangeCalculatorAppComponent } from '../app/angular-tesla-range-calculator.component';

beforeEachProviders(() => [AngularTeslaRangeCalculatorAppComponent]);

describe('App: AngularTeslaRangeCalculator', () => {
  it('should create the app',
      inject([AngularTeslaRangeCalculatorAppComponent], (app: AngularTeslaRangeCalculatorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-tesla-range-calculator works!\'',
      inject([AngularTeslaRangeCalculatorAppComponent], (app: AngularTeslaRangeCalculatorAppComponent) => {
    expect(app.title).toEqual('angular-tesla-range-calculator works!');
  }));
});
