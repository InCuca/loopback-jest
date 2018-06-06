import toBeModel from './to-be-model';
import toHaveRelationship from './to-have-relationship';

export default function setup(expect) {
  expect.extend({
    toBeModel,
    toHaveRelationship,
  });
}
