import getMessage from './get-message';
import isRelationship from './is-relationship';

export default function (msgType, type) {
  return (...args) => {
    const pass = isRelationship(type, ...args);
    return { pass, message: getMessage(pass, msgType, ...args) };
  };
}
