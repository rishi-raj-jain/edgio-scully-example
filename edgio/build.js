const { DeploymentBuilder } = require('@edgio/core/deploy')

module.exports = async function build(options) {
  const builder = new DeploymentBuilder()
  builder.clearPreviousBuildOutput()
  await builder.exec('npm run build')
  await builder.build()
}
