import toBeModel from './to-be-model';
import toHaveRelationship from './to-have-relationship';
import toHavePropertyOfType from './to-have-property-of-type';

export default function setup(expect) {
  expect.extend({
    toBeModel,
    toHaveRelationship,
    toHavePropertyOfType,
  });
}
