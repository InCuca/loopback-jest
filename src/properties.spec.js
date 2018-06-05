import chai from 'chai';
import loopback from 'loopback';
import loopbackChai from './index';

describe('model assertion', () => {
  chai.use(loopbackChai);
  const mockedModel = new loopback.Model();

  it('do assert is a model', () => {
    expect(chai.expect(mockedModel).to.be.model).toBeTruthy();
  });
});
