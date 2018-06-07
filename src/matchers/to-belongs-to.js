import getMessage from '../get-message';
import { isBelongsTo } from '../relationship-checkers';

export default function toBelongsTo(received, ...args) {
  const pass = isBelongsTo(
    received.definition.settings,
    ...args,
  );
  return { pass, message: getMessage(pass, ...args) };
}
