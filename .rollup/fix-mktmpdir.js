import path from 'path';

const mktmpdir = path.resolve('node_modules/mktmpdir/lib/index.js')
export default {
  transform(code, id) {
    if (id !== mktmpdir) return null;
    return {
      code: code.replace(/\b0\d+\b/g, match => parseInt(match, 8)),
      map: { mappings: '' }
    };
  }
}
