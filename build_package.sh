#!/bin/bash

# * compile components
npx cross-env NODE_ENV=production babel ./src/components -d dist/components --source-maps inline --copy-files --compact --minified

# * copy /src/sass to /dist/sass
mkdir ./dist/sass && cp -R ./src/sass ./dist/sass

# * copy /src/assets to /dist/assets
mkdir ./dist/assets && cp -R ./src/assets ./dist/assets