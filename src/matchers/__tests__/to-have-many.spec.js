import { createMockedModel } from '../../../test-utils';

import toHaveMany from '../to-have-many';

describe('toHaveMany', () => {
  let mockedModel;

  beforeEach(() => {
    expect.extend({ toHaveMany });
    mockedModel = createMockedModel(
      'MockedModel',
      {
        relations: {
          balls: {
            type: 'hasMany',
            model: 'Ball',
            foreignKey: 'mockedModelId',
          },
        },
      },
    );
  });

  it('throws if missing minimum arguments', () => {
    expect(() => expect(mockedModel).toHaveMany()).toThrow();
  });

  it('throws if the model does not have matching relationship type', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          type: 'hasOne',
          model: 'Ball',
        },
      },
    });
    expect(() => expect(ErrModel).toHaveMany('Ball', 'balls')).toThrow();
  });

  it('throws if the model does not have matching model name', () => {
    expect(() => expect(mockedModel).toHaveMany('Tree', 'balls')).toThrow();
  });

  it('throws if the model does not have matching relationship', () => {
    expect(() => expect(mockedModel).toHaveMany('Ball', 'trees')).toThrow();
  });

  it('throws if the model does not have matching foreignKey', () => {
    expect(() => expect(mockedModel).toHaveMany('Ball', 'balls', 'treeId')).toThrow();
  });

  it('pass in negative assertion', () => {
    expect(mockedModel).not.toHaveMany('Tree', 'trees');
    expect(mockedModel).not.toHaveMany('Tree', 'trees', 'treesId');
  });

  it('pass in positive assertion', () => {
    expect(mockedModel).toHaveMany('Ball', 'balls');
    expect(mockedModel).toHaveMany('Ball', 'balls', 'mockedModelId');
  });
});
