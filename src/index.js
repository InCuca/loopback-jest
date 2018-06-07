import toBeModel from './to-be-model';
import toHaveRelationship from './to-have-relationship';
import toHavePropertyOfType from './to-have-property-of-type';
import toBelongsTo from './to-belongs-to';
import toHaveOne from './to-have-one';
import toHaveMany from './to-have-many';

export default function setup(expect) {
  expect.extend({
    toBeModel,
    toHaveRelationship,
    toHavePropertyOfType,
    toBelongsTo,
    toHaveOne,
    toHaveMany,
  });
}
