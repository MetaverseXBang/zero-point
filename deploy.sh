#!/usr/bin/env sh

# abort on errors
set -e

git subtree pull --prefix dist origin gh-pages --allow-unrelated-histories

# build
npm run build

git add dist -f

git commit -m 'deploy'

git subtree push --prefix dist origin gh-pages
