const { override, fixBabelImports, addLessLoader } = require('customize-cra')

const theme = require('./theme')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // 自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    })
)