import isRelationship from './is-relationship';
import getMessage from './get-message';
import getRelationMatcher from './get-relation-matcher';

jest.mock('./is-relationship');
jest.mock('./get-message');

describe('get-relation-matcher high order', () => {
  it('calls isRelationship with type and args', () => {
    const args = [1, 2, 3];
    getRelationMatcher('fooMsg', 'foo')(...args);
    expect(isRelationship).toBeCalledWith('foo', ...args);
  });

  it('calls getMessage with pass, msgType and args', () => {
    const args = [1, 2, 3];
    const pass = true;
    isRelationship.mockReturnValue(pass);
    getRelationMatcher('fooMsg', 'foo')(...args);
    expect(getMessage).toBeCalledWith(
      pass,
      'fooMsg',
      ...args,
    );
  });

  it('returns jest expect object', () => {
    const args = [1, 2, 3];
    const pass = true;
    const message = () => {};
    isRelationship.mockReturnValue(pass);
    getMessage.mockReturnValue(message);
    const evaluated = getRelationMatcher('fooMsg', 'foo')(...args);
    expect(evaluated).toMatchObject({
      pass,
      message,
    });
  });
});
