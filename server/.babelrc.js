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
    'add-module-exports',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          locales: '../client/locales'
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ]
  ]
};
