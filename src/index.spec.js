// import {getMatchers} from 'jest';
import loopbackJest from '.';

loopbackJest(expect);

describe('loopback-jest', () => {
  it('install toBeModel matcher', () => {
    const assertion = expect({});
    expect(assertion.toBeModel).toBeDefined();
  });
});
