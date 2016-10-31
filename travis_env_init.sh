#!/bin/bash

__COMMENTS__='
# OS: ubuntu 14.04 trusty
# nodejs: 6.9.1
# npm: 3.10.8
# sudo: required
# need "GIT_USER_NAME" "GIT_USER_EMAIL" "GIT_REPO_TOKEN" "BAIDU_ANALYTICS" "DuoShuo_SHORT_NAME" variable in env.
# env variable "icarus_opacity_disable" to control icarus opacity version display enable or disable.
# how to use: in travis, use the script to run, eg:
#    sh travis_env_init.sh
#    ./travis_env_init.sh
#    source travis_env_init.sh
'


node --version
npm --version

echo "Hexo environment pre install start."
echo "${__COMMENTS__}"

npm install -g hexo > /dev/null
npm install -g hexo-cli > /dev/null
npm install > /dev/null

echo "hexo and packages install complete."
pwd

git config --global user.name "${GIT_USER_NAME}"
git config --global user.email "${GIT_USER_EMAIL}"
sed -i'' "s~git@github.com:~https://${GIT_REPO_TOKEN}@github.com/~" _config.yml

theme_config_file="themes/icarus/_config.yml"
cp "${theme_config_file}.example" "${theme_config_file}"
# Set icarus theme config
# Set baidu statistics open token
sed -i'' "s~baidu_analytics: ~baidu_analytics: ${BAIDU_ANALYTICS} ~" "${theme_config_file}"
# Set duoShuo commentary short name
sed -i'' "s~duoshuo: ~duoshuo: ${DuoShuo_SHORT_NAME} ~" "${theme_config_file}"
# Set icarus theme opacity version config
if [ ! ${icarus_opacity_disable} ]
then
    echo "Enable icarus opacity version."
    ls -al
    background_images_count=$(source rename_BGI.sh)
    if [ $? -eq 0 ]
    then
        sed -i'' "s~enable: false # Is choose the opacity version of this theme~enable: true # ~" "${theme_config_file}"
        sed -i'' "s~background_images_count: 0 ~background_images_count: ${background_images_count} ~" "${theme_config_file}"
    fi
fi

ls -al source/images/background/
cat "${theme_config_file}"

echo "Hexo environment pre install complete OK."
