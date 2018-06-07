import * as checkers from './relationship-checkers';

describe('isRelationship and exported shortcuts', () => {
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
    expect(checkers.isHasMany(
      { relations },
      'Model',
      'balls',
      'ballId',
    )).toBeTruthy();
  });
});
