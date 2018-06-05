import chai from 'chai';
import loopbackChai from './index';
import * as properties from './properties';
import * as methods from './methods';
import * as dependencies from './helpers/assertion';

describe('index', () => {
  let assertions;
  beforeEach(() => {
    chai.use(loopbackChai);
    assertions = Object.getOwnPropertyNames(chai.Assertion.prototype);
  });

  // Properties
  Object.keys(properties).forEach(prop => it(`should declare prop ${prop} in Assertion prototype`, () => {
    expect(assertions).toContain(prop);
  }));

  // Methods
  Object.keys(methods).forEach(method => it(`should declare method ${method} in Assertion prototype`, () => {
    expect(assertions).toContain(method);
  }));

  it('uses addItemsOnAssertion helper', (done) => {
    dependencies.addItemsOnAssertion = jest.fn();
    chai.use((context) => {
      loopbackChai(context);
      expect(dependencies.addItemsOnAssertion).toBeCalled();
      done();
    });
  });
});
