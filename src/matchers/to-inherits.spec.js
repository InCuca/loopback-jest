import loopback from 'loopback';
import { createMockedModel } from '../../test-utils';

import toInherits from './to-inherits';

describe('toInherits', () => {
  let Foo;
  let Bar;

  beforeEach(() => {
    expect.extend({ toInherits });
    Bar = createMockedModel('Bar');
    Foo = createMockedModel('Foo', {
      base: 'Bar',
    });
  });

  it('throws without arguments', () => {
    expect(() => expect(Foo).toInherits()).toThrow();
  });

  it('throws with a model without base', () => {
    expect(() => expect(Bar).toInherits(loopback.User)).toThrow();
  });

  it('throws with a model with another base', () => {
    expect(() => expect(Foo).toInherits(loopback.User)).toThrow();
  });

  it('pass negative assertion', () => {
    expect(Bar).not.toInherits(Foo);
  });

  it('pass in positive assertion', () => {
    expect(Foo).toInherits(Bar);
  });
});
