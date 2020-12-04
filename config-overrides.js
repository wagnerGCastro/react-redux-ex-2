const path = require('path');

// Sass: https://github.com/aze3ma/react-app-rewire-scss
const rewireSass = require('react-app-rewire-scss');

// Less: https://www.npmjs.com/package/react-app-rewire-less
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // Sass
    config = rewireSass(config, env);

    // Less
    config = rewireLess(config, env);

    return config;
}


// customize-cra

const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

// Alias: https://medium.com/@suraj.93p/creating-path-aliases-in-create-react-app-with-react-app-rewired-c2cde81b472
module.exports =  override(
    addWebpackAlias({
        ['@assets']: path.resolve(__dirname, './assets'),
        ['@components']: path.resolve(__dirname, './src/components'),
        ['@store']: path.resolve(__dirname, './src/store'),
        ['@views']: path.resolve(__dirname, './src/views')
    }),
)