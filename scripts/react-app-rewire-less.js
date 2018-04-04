const path = require('path');
const { getLoader, loaderNameMatches } = require('react-app-rewired');

function createRewireLess(lessLoaderOptions = {}) {
  return function (config, env) {
    const lessExtension = /\.less$/;

    const fileLoader = getLoader(
      config.module.rules,
      rule => loaderNameMatches(rule, 'file-loader')
    );
    fileLoader.exclude.push(lessExtension);

    const cssRules = getLoader(
      config.module.rules,
      rule => String(rule.test) === String(/\.css$/)
    );

    let lessRules;
    if (env === 'production') {
      lessRules = {
        test: lessExtension,
        loader: [
          // TODO: originally this part is wrapper in extract-text-webpack-plugin
          //       which we cannot do, so some things like relative publicPath
          //       will not work.
          //       https://github.com/timarney/react-app-rewired/issues/33
          ...cssRules.loader,
          {
            loader: 'string-replace-loader',
            options: {
              multiple: [
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.eot',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.eot',
                },
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.svg',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.svg',
                },
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.ttf',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.ttf',
                },
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.woff',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.woff',
                },
              ]
            },
          },
          { loader: 'less-loader', options: lessLoaderOptions }
        ]
      };
    } else {
      lessRules = {
        test: lessExtension,
        use: [
          ...cssRules.use,
          {
            loader: 'string-replace-loader',
            options: {
              multiple: [
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.eot',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.eot',
                },
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.svg',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.svg',
                },
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.ttf',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.ttf',
                },
                {
                  search: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i.woff',
                  replace: '/assets/fonts/font_148784_v4ggb6wrjmkotj4i.woff',
                },
              ]
            },
          },
          { loader: 'less-loader', options: lessLoaderOptions }
        ]
      };
    }

    const oneOfRule = config.module.rules.find((rule) => rule.oneOf !== undefined);
    if (oneOfRule) {
      oneOfRule.oneOf.unshift(lessRules);
    }
    else {
      // Fallback to previous behaviour of adding to the end of the rules list.
      config.module.rules.push(lessRules);
    }

    return config;
  };
}

const rewireLess = createRewireLess();

rewireLess.withLoaderOptions = createRewireLess;

module.exports = rewireLess;
