import { createMockedModel } from '../../test-utils';
import toHaveRelationship from './to-have-relationship';


describe('toHaveRelationship', () => {
  let PerfectModel;

  beforeEach(() => {
    expect.extend({ toHaveRelationship });
    PerfectModel = createMockedModel(
      'Ball',
      {
        relations: {
          balls: {
            model: 'Ball',
          },
        },
      },
    );
  });

  it('throws if missing arguments', () => {
    expect(() => expect(PerfectModel).toHaveRelationship('balls')).toThrow();
    expect(() => expect(PerfectModel).toHaveRelationship()).toThrow();
    expect(() => expect().toHaveRelationship()).toThrow();
  });

  it('throws if the model does not have relationship', () => {
    const ErrModel = createMockedModel('Ball', {});
    expect(() => expect(ErrModel).toHaveRelationship('balls', 'Ball')).toThrow();
  });

  it('throws if the model does not matches relationship', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        trees: {
          model: 'Ball',
        },
      },
    });
    expect(() => expect(ErrModel).toHaveRelationship('balls', 'Ball')).toThrow();
  });

  it('throws if the model does not have matching relationship model', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          model: 'Tree',
        },
      },
    });
    expect(() => expect(ErrModel).toHaveRelationship('balls', 'Ball')).toThrow();
  });

  it('pass in negative assertion', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          model: 'Tree',
        },
      },
    });
    expect(ErrModel).not.toHaveRelationship('balls', 'Ball');
  });

  it('pass in positive assertion', () => {
    expect(PerfectModel).toHaveRelationship('balls', 'Ball');
  });
});

