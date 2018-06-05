import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('relationship assertion', () => {
  const PerfectModel = createMockedModel(
    'Ball',
    {
      relations: {
        balls: {
          model: 'Ball',
        },
      },
    },
  );

  function relationship(subject, ...args) {
    return () => chai
      .expect(subject)
      .to
      .relationship(...args);
  }

  chai.use(loopbackChai);

  it('throws if missing arguments', () => {
    expect(relationship(
      PerfectModel,
      'balls',
    )).toThrow();
    expect(relationship(PerfectModel)).toThrow();
    expect(relationship()).toThrow();
  });

  it('throws if the model does not have relationship', () => {
    const ErrModel = createMockedModel('Ball', {});
    expect(relationship(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('throws if the model does not matching relationship', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        trees: {
          model: 'Ball',
        },
      },
    });
    expect(relationship(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('throws if the model does not have matching relationship model', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          model: 'Tree',
        },
      },
    });
    expect(relationship(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('pass in perfect relationship', () => {
    expect(relationship(PerfectModel, 'balls', 'Ball')).not.toThrow();
  });
});
