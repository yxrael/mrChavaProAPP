/**
  * Metro configuration for React Native
  * https://github.com/facebook/react-native
  *
  * @format
  */
 const {getDefaultConfig} = require('@react-native/metro-config');

 module.exports = (async() => {
    const {
        transformer,
        resolver,
    } = await getDefaultConfig(__dirname);
    return {
        transformer: {
            ...transformer,
            getTransformOptions: async () => ({ transform: { experimentalImportSupport: false, inlineRequires: true, }, }),
        },
        resolver,
    }
})();
