import toBeModel from './to-be-model';
import toHaveRelationship from './to-have-relationship';
import toHavePropertyOfType from './to-have-property-of-type';
import toBelongsTo from './to-belongs-to';

export default function setup(expect) {
  expect.extend({
    toBeModel,
    toHaveRelationship,
    toHavePropertyOfType,
    toBelongsTo,
  });
}
