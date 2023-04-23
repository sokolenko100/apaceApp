module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js', //?
          '.android.tsx',
          '.ios.js', //?
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@bridges': './src/bridges',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@test-mocks': './__mocks__',
          '@test-helpers': './__helpers__',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'react-remove-properties',
          {
            properties: ['testID'],
          },
        ],
      ],
    },
  },
};
