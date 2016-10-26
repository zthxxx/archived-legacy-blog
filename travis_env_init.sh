#!/bin/bash

__COMMENTS__='
# OS: ubuntu 14.04 trusty
# nodejs: 6.9.1
# npm: 3.10.8
# sudo: required
# need "GIT_USER_NAME" "GIT_USER_EMAIL" "REPO_TOKEN" "BAIDU_ANALYTICS" variable in env.
# how to use: in travis, use the script to run:
#    ./travis_env_init.sh
'


node --version
npm --version

echo "Hexo environment pre install start."

npm install -g hexo
npm install -g hexo-cli
npm install

git config --global user.name "${GIT_USER_NAME}"
git config --global user.email "${GIT_USER_EMAIL}"
sed -i'' "s~git@github.com:~https://${REPO_TOKEN}@github.com/~" _config.yml
cp themes/icarus/_config.yml.example themes/icarus/_config.yml
sed -i'' "s~baidu_analytics: ~baidu_analytics: ${BAIDU_ANALYTICS} ~" themes/icarus/_config.yml

echo "Hexo environment pre install complete OK."
