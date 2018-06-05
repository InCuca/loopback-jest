import * as methods from '.';

describe('methods', () => {
  it('export relationship', () => {
    expect(methods).toHaveProperty('relationship');
  });

  it('export belongsTo', () => {
    expect(methods).toHaveProperty('belongsTo');
  });

  it('export haveMany', () => {
    expect(methods).toHaveProperty('haveMany');
  });

  it('export haveOne', () => {
    expect(methods).toHaveProperty('haveOne');
  });

  it('export propertyOfType', () => {
    expect(methods).toHaveProperty('propertyOfType');
  });

  it('export inherits', () => {
    expect(methods).toHaveProperty('inherits');
  });
});
