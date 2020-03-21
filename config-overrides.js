const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra')

const theme = require('./theme')

module.exports = override(
    
    addDecoratorsLegacy(),

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