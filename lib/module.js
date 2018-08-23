const { resolve } = require('path')

module.exports = function NuxtAmplify (moduleOptions) {
  this.addVendor(['aws-amplify'])
  this.addPlugin({
    src: resolve(__dirname, 'aws-amplify-plugin.js'),
    fileName: 'nuxt-amplify.js',
    options: moduleOptions
  })
}

module.exports.meta = require('../package.json')
