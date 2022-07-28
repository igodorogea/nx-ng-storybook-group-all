const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/foo/src/app/**/*.stories.mdx',
    '../../../apps/foo/src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }
    return config;
  },
};
