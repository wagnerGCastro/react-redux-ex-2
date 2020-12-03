// Sass: https://github.com/aze3ma/react-app-rewire-scss
const rewireSass = require('react-app-rewire-scss');

// Less: https://www.npmjs.com/package/react-app-rewire-less
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

    // Sass
    config = rewireSass(config, env);

    // Less
    config = rewireLess(config, env);
    // with loaderOptions
    // config = rewireLess.withLoaderOptions(someLoaderOptions)(config, env);


    return config;
}

