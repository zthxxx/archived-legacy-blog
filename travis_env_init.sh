#!/bin/bash

__COMMENTS__='
# OS: ubuntu 14.04 trusty
# nodejs: 6.9.1
# npm: 3.10.8
# sudo: required
# need "GIT_USER_NAME" "GIT_USER_EMAIL" "GIT_REPO_TOKEN" "BAIDU_ANALYTICS" "DuoShuo_SHORT_NAME" variable in env.
# how to use: in travis, use the script to run, eg:
#    sh travis_env_init.sh
#    ./travis_env_init.sh
#    souce travis_env_init.sh
'


node --version
npm --version

echo "Hexo environment pre install start."
echo ${__COMMENTS__}

npm install -g hexo
npm install -g hexo-cli
npm install

git config --global user.name "${GIT_USER_NAME}"
git config --global user.email "${GIT_USER_EMAIL}"
sed -i'' "s~git@github.com:~https://${GIT_REPO_TOKEN}@github.com/~" _config.yml

cp themes/icarus/_config.yml.example themes/icarus/_config.yml
sed -i'' "s~baidu_analytics: ~baidu_analytics: ${BAIDU_ANALYTICS} ~" themes/icarus/_config.yml
sed -i'' "s~duoshuo: ~duoshuo: ${DuoShuo_SHORT_NAME} ~" themes/icarus/_config.yml
echo ${GIT_REPO_TOKEN}
echo "Hexo environment pre install complete OK."
