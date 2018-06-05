import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('propertyOfType assertion', () => {
  function propertyOfType(properties, ...args) {
    return () => {
      chai.expect(createMockedModel(
        'MockedModel',
        { properties },
      ))
        .to.be.a.propertyOfType(...args);
    };
  }

  chai.use(loopbackChai);

  it('throws if property is of wrong type', () => {
    expect(propertyOfType({
      foo: Object,
    }, 'foo', String)).toThrow();
  });

  it('throws if property is missing', () => {
    expect(propertyOfType({
      foo: Object,
    }, 'bar', Object)).toThrow();
  });

  it('throws if missing prop type', () => {
    expect(propertyOfType({
      foo: Object,
    }, 'bar')).toThrow();
  });

  it('throws if missing prop name', () => {
    expect(propertyOfType({
      foo: Object,
    })).toThrow();
  });

  it('pass with perfect property', () => {
    expect(propertyOfType({
      foo: Object,
    }, 'foo', Object)).not.toThrow();
  });

  it('pass when type argument is a string', () => {
    expect(propertyOfType({
      foo: Object,
    }, 'foo', 'Object')).not.toThrow();
  });

  it('pass when property is a object with type', () => {
    expect(propertyOfType({
      foo: { type: 'object' },
    }, 'foo', Object)).not.toThrow();
    expect(propertyOfType({
      foo: { type: Object },
    }, 'foo', Object)).not.toThrow();
  });
});
