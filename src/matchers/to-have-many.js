import getMessage from '../get-message';
import { isHasMany } from '../relationship-checkers';

export default function toHaveMany(received, ...args) {
  const pass = isHasMany(
    received.definition.settings,
    ...args,
  );
  return { pass, message: getMessage(pass, 'have many', ...args) };
}
