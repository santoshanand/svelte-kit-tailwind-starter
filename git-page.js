// var ghpages = require('gh-pages');
import * as ghpages from 'gh-pages'
ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/santoshanand/svelte-kit-tailwind-starter.git'
}, function(e) {
  console.log(e)
});