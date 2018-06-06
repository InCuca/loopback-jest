// import {getMatchers} from 'jest';
import loopbackJest from '.';

loopbackJest(expect);

describe('loopback-jest', () => {
  const assertion = expect({});

  it('install toBeModel matcher', () => {
    expect(assertion.toBeModel).toBeDefined();
  });

  it('install toHaveRelationship', () => {
    expect(assertion.toHaveRelationship).toBeDefined();
  });
});
