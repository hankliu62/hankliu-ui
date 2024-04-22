const hankliuUi = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

hankliuUi.locales = {};

req.keys().forEach((mod) => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  hankliuUi.locales[matches[1]] = req(mod).default;
});

module.exports = hankliuUi;
