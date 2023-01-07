const { createDevServer } = require('@edgio/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Scully]',
    command: (port) => `npm run start -- --port ${port}`,
    ready: [/listening/i],
  })
}
