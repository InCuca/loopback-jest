import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('haveMany assertion', () => {
  const PerfectModel = createMockedModel(
    'Ball',
    {
      relations: {
        balls: {
          type: 'hasMany',
          model: 'Ball',
          foreignKey: 'ballId',
        },
      },
    },
  );

  function haveMany(subject, ...args) {
    return () => chai
      .expect(subject)
      .to
      .haveMany(...args);
  }

  chai.use(loopbackChai);

  it('throws if missing arguments', () => {
    expect(haveMany(
      PerfectModel,
      'balls',
    )).toThrow();
    expect(haveMany(PerfectModel)).toThrow();
    expect(haveMany()).toThrow();
  });

  it('throws if the model does not have matching relationship type', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          type: 'belongsTo',
          model: 'Ball',
        },
      },
    });
    expect(haveMany(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('pass in perfect relationship', () => {
    expect(haveMany(PerfectModel, 'balls', 'Ball')).not.toThrow();
  });
});
