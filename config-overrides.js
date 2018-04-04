const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('./scripts/react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);
  config = rewireLess(config, env);
  // with loaderOptions
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      'primary-color': '#1DA57A',
      'link-color': '#1DA57A',
      'border-radius-base': '2px',
    },
  })(config, env);
  return config;
};
