#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/samuelmodlin/twitch-brief.git master:gh-pages
cd -