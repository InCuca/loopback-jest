import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('belongsTo assertion', () => {
  const PerfectModel = createMockedModel(
    'Ball',
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

  function belongsTo(subject, ...args) {
    return () => chai
      .expect(subject)
      .to
      .belongsTo(...args);
  }

  chai.use(loopbackChai);

  it('throws if missing arguments', () => {
    expect(belongsTo(
      PerfectModel,
      'balls',
    )).toThrow();
    expect(belongsTo(PerfectModel)).toThrow();
    expect(belongsTo()).toThrow();
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
    expect(belongsTo(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('pass in perfect relationship', () => {
    expect(belongsTo(PerfectModel, 'balls', 'Ball')).not.toThrow();
  });
});
