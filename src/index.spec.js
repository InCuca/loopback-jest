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

  it('install toHavePropertyOfType', () => {
    expect(assertion.toHavePropertyOfType).toBeDefined();
  });

  it('install toBelongsTo matcher', () => {
    expect(assertion.toBelongsTo).toBeDefined();
  });

  it('install toHaveOne matcher', () => {
    expect(assertion.toHaveOne).toBeDefined();
  });

  it('install toHaveMany matcher', () => {
    expect(assertion.toHaveMany).toBeDefined();
  });
});
