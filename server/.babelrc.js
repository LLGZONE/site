module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/stage-0',
    '@babel/typescript'
  ],
  plugins: ['add-module-exports']
};
