import { createMockedModel } from '../../test-utils';

import toBelongsTo from './to-belongs-to';

describe('toBelongsTo', () => {
  let mockedModel;

  beforeEach(() => {
    expect.extend({ toBelongsTo });
    mockedModel = createMockedModel(
      'MockedModel',
      {
        relations: {
          balls: {
            type: 'belongsTo',
            model: 'Ball',
            foreignKey: 'ballId',
          },
        },
      },
    );
  });

  it('throws if missing minimum arguments', () => {
    expect(() => expect(mockedModel).toBelongsTo()).toThrow();
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
    expect(() => expect(ErrModel).toBelongsTo('Ball', 'balls')).toThrow();
  });

  it('throws if the model does not have matching model name', () => {
    expect(() => expect(mockedModel).toBelongsTo('Tree', 'balls')).toThrow();
  });

  it('throws if the model does not have matching relationship', () => {
    expect(() => expect(mockedModel).toBelongsTo('Ball', 'trees')).toThrow();
  });

  it('throws if the model does not have matching foreignKey', () => {
    expect(() => expect(mockedModel).toBelongsTo('Ball', 'balls', 'treeId')).toThrow();
  });

  it('pass in negative assertion', () => {
    expect(mockedModel).not.toBelongsTo('Tree', 'trees');
    expect(mockedModel).not.toBelongsTo('Tree', 'trees', 'treesId');
  });

  it('pass in positive assertion', () => {
    expect(mockedModel).toBelongsTo('Ball', 'balls');
    expect(mockedModel).toBelongsTo('Ball', 'balls', 'ballId');
  });
});
