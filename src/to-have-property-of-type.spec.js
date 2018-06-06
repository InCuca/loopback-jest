import { createMockedModel } from '../test-utils';
import toHavePropertyOfType from './to-have-property-of-type';

describe('toHavePropertyOfType', () => {
  let mockedModel;

  beforeEach(() => {
    expect.extend({ toHavePropertyOfType });
    mockedModel = createMockedModel(
      'MockedModel',
      { properties: { foo: Object } },
    );
  });

  it('throws if property is of wrong type', () => {
    expect(() => expect(mockedModel).toHavePropertyOfType('foo', String)).toThrow();
  });

  it('throws if property is missing', () => {
    expect(() => expect(mockedModel).toHavePropertyOfType('bar', Object)).toThrow();
  });

  it('throws if missing prop type', () => {
    expect(() => expect(mockedModel).toHavePropertyOfType('foo')).toThrow();
  });

  it('throws if missing prop name', () => {
    expect(() => expect(mockedModel).toHavePropertyOfType()).toThrow();
  });

  it('pass in negative assertion', () => {
    const invalidModel = createMockedModel(
      'MockedModel',
      { properties: { foo: Object } },
    );
    expect(invalidModel).not.toHavePropertyOfType('foo', String);
    expect(invalidModel).not.toHavePropertyOfType('bar', Object);
    expect(invalidModel).not.toHavePropertyOfType('bar', String);
  });

  it('pass in positive assertion', () => {
    expect(mockedModel).toHavePropertyOfType('foo', Object);
  });

  it('pass when type argument is a string', () => {
    expect(mockedModel).toHavePropertyOfType('foo', 'Object');
  });

  it('pass when property is a object with type', () => {
    const model = createMockedModel(
      'MockedModel',
      {
        properties:
        { foo: { type: 'object' } },
      },
    );
    const modelObj = createMockedModel(
      'MockedModel',
      {
        properties:
          { foo: { type: Object } },
      },
    );
    expect(model).toHavePropertyOfType('foo', 'Object');
    expect(modelObj).toHavePropertyOfType('foo', 'Object');
  });
});
