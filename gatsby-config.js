module.exports = {
  pathPrefix: `/ALG101-too-weak-to-leetcode/public`,
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        cli: true,
        contentPath: 'slides',
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['mdx-deck', 'gatsby-theme-mdx-deck', '@mdx-deck/themes'],
      },
    },
  ],
};