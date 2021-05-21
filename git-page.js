// var ghpages = require('gh-pages');
import * as ghpages from 'gh-pages'
ghpages.publish('build', function(e) {
  console.log(e)
});