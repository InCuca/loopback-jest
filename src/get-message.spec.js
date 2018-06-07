import getMessage from './get-message';

describe('getMessage', () => {
  it('returns correct message for has many relationship', () => {
    const opts = [
      'has many', 'Foo', 'foos', 'barId',
    ];
    const trueFn = getMessage(true, ...opts);
    const trueMsg = 'expected received model to ' +
      'not has many Foos through ' +
      'foos relationship and barId foreignKey';
    expect(trueFn()).toEqual(trueMsg);
    const falseFn = getMessage(false, ...opts);
    const falseMsg = 'expected received model to ' +
      'has many Foos through ' +
      'foos relationship and barId foreignKey';
    expect(falseFn()).toEqual(falseMsg);
  });
});
