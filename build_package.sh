#!/bin/bash

# * clean /dist
rm ./dist -rf

# * compile /src/components - keep dir structure and copy nonJS files
./node_modules/.bin/babel ./src/components -d dist/components --copy-files --compact --minified

# * copy /src/sass to /dist/sass
rm ./dist/sass -rf
mkdir ./dist/sass
cp ./src/sass/* ./dist/sass -r

# * copy /src/assets to /dist/assets
rm ./dist/assets -rf
mkdir ./dist/assets
cp ./src/assets/* ./dist/assets -r
