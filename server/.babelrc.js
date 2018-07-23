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
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          locales: '../client/locales',
          entry: '../client/entry'
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ]
  ]
};
