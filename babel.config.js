module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-inline-import',
        'babel-plugin-root-import',
        {
          extensions: ['.svg'],
          paths: [
            {
              rootPathSuffix: './src',
              rootPathPrefix: '~/',
            },
          ],
        },
      ],
    ],
  };
};
