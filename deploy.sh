#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add dist -f

git commit -m 'deploy'

git push origin `git subtree split --prefix dist main`:gh-pages --force
