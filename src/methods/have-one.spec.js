import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('haveOne assertion', () => {
  const PerfectModel = createMockedModel(
    'Ball',
    {
      relations: {
        balls: {
          type: 'hasOne',
          model: 'Ball',
          foreignKey: 'ballId',
        },
      },
    },
  );

  function haveOne(subject, ...args) {
    return () => chai
      .expect(subject)
      .to
      .haveOne(...args);
  }

  chai.use(loopbackChai);

  it('throws if missing arguments', () => {
    expect(haveOne(
      PerfectModel,
      'balls',
    )).toThrow();
    expect(haveOne(PerfectModel)).toThrow();
    expect(haveOne()).toThrow();
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
    expect(haveOne(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('pass in perfect relationship', () => {
    expect(haveOne(PerfectModel, 'balls', 'Ball')).not.toThrow();
  });
});
