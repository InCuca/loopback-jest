import { createMockedModel } from '../test-utils';

import toHaveOne from './to-have-one';

describe('toHaveOne', () => {
  let mockedModel;

  beforeEach(() => {
    expect.extend({ toHaveOne });
    mockedModel = createMockedModel(
      'MockedModel',
      {
        relations: {
          balls: {
            type: 'hasOne',
            model: 'Ball',
            foreignKey: 'mockedModelId',
          },
        },
      },
    );
  });

  it('throws if missing minimum arguments', () => {
    expect(() => expect(mockedModel).toHaveOne()).toThrow();
  });

  it('throws if the model does not have matching relationship type', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          type: 'hasMany',
          model: 'Ball',
        },
      },
    });
    expect(() => expect(ErrModel).toHaveOne('Ball', 'balls')).toThrow();
  });

  it('throws if the model does not have matching model name', () => {
    expect(() => expect(mockedModel).toHaveOne('Tree', 'balls')).toThrow();
  });

  it('throws if the model does not have matching relationship', () => {
    expect(() => expect(mockedModel).toHaveOne('Ball', 'trees')).toThrow();
  });

  it('throws if the model does not have matching foreignKey', () => {
    expect(() => expect(mockedModel).toHaveOne('Ball', 'balls', 'treeId')).toThrow();
  });

  it('pass in negative assertion', () => {
    expect(mockedModel).not.toHaveOne('Tree', 'trees');
    expect(mockedModel).not.toHaveOne('Tree', 'trees', 'treeid');
  });

  it('pass in positive assertion', () => {
    expect(mockedModel).toHaveOne('Ball', 'balls');
    expect(mockedModel).toHaveOne('Ball', 'balls', 'mockedModelId');
  });
});
