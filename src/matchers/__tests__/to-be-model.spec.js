import loopback from 'loopback';
import toBeModel from '../to-be-model';

describe('toBeModel', () => {
  let model;

  beforeAll(() => {
    model = new loopback.Model();
    expect.extend({ toBeModel });
  });

  it('do assert is a model', () => {
    expect(model).toBeModel();
  });

  it('assert is not a model', () => {
    expect({}).not.toBeModel();
  });

  it('throw is not a model', () => {
    expect(() => expect({}).toBeModel()).toThrow();
  });

  it('throw is a model', () => {
    expect(() => expect(model).not.toBeModel()).toThrow();
  });
});
