import isRelationship from './is-relationship';

describe('isRelationship', () => {
  it('throws if there is not relationship type', () => {
    expect(() => isRelationship()).toThrow('missing relationship type');
  });

  it('throws if there is not received model', () => {
    expect(() => isRelationship('hasMany')).toThrow('missing received model');
  });

  it('throws if there is not model name', () => {
    expect(() => isRelationship('hasMany', {})).toThrow('missing model name');
  });

  it('throws if there is not relationship name', () => {
    expect(() => isRelationship('hasMany', {}, 'Model')).toThrow('missing relationship name');
  });

  it('returns false if settings relations do not match expected', () => {
    expect(isRelationship(
      'hasMany',
      { definition: { settings: { relations: {} } } },
      'Model',
      'balls',
    )).toBeFalsy();
  });

  it('returns false if settings relations do not match expected with foreignKey', () => {
    expect(isRelationship(
      'hasMany',
      { definition: { settings: { relations: {} } } },
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
      { definition: { settings: { relations } } },
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
      { definition: { settings: { relations } } },
      'Model',
      'balls',
      'ballId',
    )).toBeTruthy();
  });
});

