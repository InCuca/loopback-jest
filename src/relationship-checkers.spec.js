import * as checkers from './relationship-checkers';

describe('isRelationship', () => {
  const { isRelationship } = checkers;
  it('throws if there is not relationship type', () => {
    expect(() => isRelationship()).toThrow('missing relationship type');
  });

  it('throws if there is not model settings', () => {
    expect(() => isRelationship('hasMany')).toThrow('missing model settings');
  });

  it('throws if there is not model name', () => {
    expect(() => isRelationship('hasMany', {})).toThrow('missing model name');
  });

  it('throws if there is not relationship name', () => {
    expect(() => isRelationship('hasMany', {}, 'Model')).toThrow('missing relationship name');
  });

  it('returns false if settings relations do not match expected', () => {
    const relations = {};
    expect(isRelationship(
      'hasMany',
      { relations },
      'Model',
      'balls',
    )).toBeFalsy();
  });

  it('returns false if settings relations do not match expected with foreignKey', () => {
    const relations = {};
    expect(isRelationship(
      'hasMany',
      { relations },
      'Model',
      'balls',
      'ballId',
    )).toBeFalsy();
  });

  it('returns true if settings relations do match expected', () => {
    const relations = {
      balls: {
        type: 'hasMany',
        model: 'Model',
      },
    };
    expect(isRelationship(
      'hasMany',
      { relations },
      'Model',
      'balls',
    )).toBeTruthy();
  });

  it('returns true if settings relations do match expected with foreignKey', () => {
    const relations = {
      balls: {
        type: 'hasMany',
        model: 'Model',
        foreignKey: 'ballId',
      },
    };
    expect(isRelationship(
      'hasMany',
      { relations },
      'Model',
      'balls',
      'ballId',
    )).toBeTruthy();
  });
});

describe('relationship-checker exports', () => {
  it('exports isHasMany', () => {
    expect(checkers.isHasMany).toBeInstanceOf(Function);
  });

  it('exports isBelongsTo', () => {
    expect(checkers.isBelongsTo).toBeInstanceOf(Function);
  });
  //  TODO: Find some way to implement these tests
  /* eslint-disable global-require */
  // const checkers = require('./relationship-checkers');
  /* eslint-enable */
  // Object.keys(checkers).forEach((checker) => {
  //  it(`exports ${checker}`, () => {
  //    expect(checkers[checker]).toBeInstanceOf(Function);
  //  });
  //
  //  if (checker === 'isRelationship') return;
  //
  //  it.skip('calls isRelationship with type', () => {
  //    checkers[checker](); // throws because isRelationship is not mocked
  //    expect(checker.isRelationship).toBeCalledWith(expect.any(String));
  //  });
  // });
});

