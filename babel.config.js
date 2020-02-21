module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // style: true,
      style: name => `${name}/style/less`,
    }, 'vant'],
    // ["import", {
    //   "libraryName": "view-design",
    //   "libraryDirectory": "src/components"
    // }],
  ],
};
