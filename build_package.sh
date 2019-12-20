#!/bin/bash

npm run clean

# * compile components
npx babel ./src/components -d dist/components --source-maps inline --copy-files --compact --minified

# * copy /src/sass to /dist/sass
mkdir ./dist/sass
cp ./src/sass/* ./dist/sass -r

# * copy /src/assets to /dist/assets
mkdir ./dist/assets
cp ./src/assets/* ./dist/assets -r
