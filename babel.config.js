module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@environments': './src/environments/',
            '@src': './src/',
            '@models': './src/models/',
            '@components': './src/components/',
            '@services': './src/services/',
            '@router': './src/router/',
            '@screens': './src/screens/',
            '@config': './src/config/',
            '@assets': './assets/'
          },
        },
      ],
    ],
  };
};


