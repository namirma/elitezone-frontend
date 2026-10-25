// module.exports = {
//     plugins: [
//     //   require('tailwindcss'), // If you use Tailwind, add this or other CSS libraries here
//       require('@fullhuman/postcss-purgecss')({
//         content: [
//           './src/**/*.js',
//           './src/**/*.jsx',
//           './src/**/*.ts',
//           './src/**/*.tsx',
//           './public/index.html',
//         ],
//         defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//       }),
//       require('autoprefixer'),
//     ],
//   }