import chai from 'chai';
import loopback from 'loopback';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('inherits assertion', () => {
  function inherits(subject, model) {
    return () => chai.expect(subject).to.inherits(model);
  }

  chai.use(loopbackChai);

  it('throw with a model without base', () => {
    expect(inherits(
      createMockedModel('Foo', {}),
      loopback.User,
    )).toThrow();
  });

  it('throw with a model with another base', () => {
    const Foo = createMockedModel('Foo', {});
    expect(inherits(
      createMockedModel('Foo', { base: 'User' }),
      Foo,
    )).toThrow();
  });

  it('pass with a model base that matches the argument', () => {
    const Bar = createMockedModel('Bar', {});
    const Foo = createMockedModel('Foo', { base: Bar });
    expect(inherits(Foo, Bar)).not.toThrow();
  });
});
