#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy a'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nujovich/portfolio.git main:gh-pages

cd -