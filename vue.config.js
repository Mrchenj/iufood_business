const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave:true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 'dialog-width': '620px',
          hack: `true; @import "${path.join(__dirname,'/src/theme/iuTheme.less')}"`
        }
      }
    }
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
    config.resolve.alias
          .set('assets',resolve('src/assets'))
          .set('coms',resolve('src/components'))
          .set('layout',resolve('src/layout'))
          .set('base',resolve('src/base'))
          .set('static',resolve('src/static'));
    }
};


  

function addStyleResource(rule) {
  rule.use('sass-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/CSS/base.scss'),
      ],
    });
}
