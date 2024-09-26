// import {} from 'babel-plugin-module-resolver';

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@components/*': './app/components/*',
          '@http/*': './app/http/*',
          '@navigation/*': './app/navigation/*',
          '@screens/*': './app/screens/*',
          '@state/*': './app/state/*',
          '@types/*': './app/types/*',
          '@utils/*': './app/types/*'
        }
      }
    ]
  ]
};
