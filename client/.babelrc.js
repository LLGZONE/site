module.exports = api => {
  const env = api.env();
  // 服务端渲染时不加载css
  const importConfig =
    env === 'client'
      ? {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: env === 'client' ? 'css' : false
        }
      : {
          libraryName: 'antd'
        };
  return {
    presets: [
      [
        '@babel/env',
        {
          modules: env === 'ssr' ? false : 'commonjs',
          targets: {
            browsers: ['last 2 versions']
          }
        }
      ],
      '@babel/react',
      '@babel/typescript'
    ],
    plugins: [
      ['import', importConfig],
      env === 'ssr'
        ? 'dynamic-import-node'
        : '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-module-resolver',
        {
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx'],
          root: ['./']
        }
      ],
      'react-loadable/babel'
    ]
  };
};
