module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 versions']
        }
      }
    ],
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    'react-loadable/babel',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx'],
        root: ['./']
      }
    ]
  ]
};
