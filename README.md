# favorites

Adds an icon to the header so favorites are accessible from everywhere.

## Features

- Icon shows in header if user logged in and user has favorites

## Development

- for development using browserify
    *  cd to claimweb and cli: `gulp watch --module favorites`
    *  writes to `./modules/<module>/src` folder
- for production build
    *  cli: `gulp --module favorites`
    *  build css and js into `./js` folder