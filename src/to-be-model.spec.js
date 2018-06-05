import loopback from 'loopback';
import toBeModel from './to-be-model';

describe('toBeModel', () => {
  let mockedModel;

  beforeAll(() => {
    mockedModel = new loopback.Model();
    expect.extend({ toBeModel });
  });

  it('do assert is a model', () => {
    expect(mockedModel).toBeModel();
  });

  it('assert is not a model', () => {
    expect({}).not.toBeModel();
  });

  it('throw is not a model', () => {
    expect(() => expect({}).toBeModel()).toThrow();
  });

  it('throw is a model', () => {
    expect(() => expect(mockedModel).not.toBeModel()).toThrow();
  });
});
