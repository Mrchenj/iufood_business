const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave:true,
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
    config.resolve.alias
          .set('assets',resolve('src/assets'))
          .set('coms',resolve('src/components'))
          .set('layout',resolve('src/layout'))
          .set('base',resolve('src/base'))
          .set('static',resolve('src/static'));


    config.module
          .rule('less')
          .use('less-loader')
          .tap(
            options => (options, {
             includePaths: [path.resolve(__dirname, 'node_modules')],
             modifyVars: {
              // 直接覆盖变量
              'text-color': '#111',
              'border-color': '#eee'
              // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
              //'hack': `true; @import "your-less-file-path.less";`
              }
            })
          )

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
