#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add dist -f

git commit -m 'deploy'

git subtree push -f --prefix dist origin gh-pages
