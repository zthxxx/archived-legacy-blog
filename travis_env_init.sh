#!/bin/bash

__COMMENTS__='
# OS: ubuntu 14.04 trusty
# nodejs: 6.9.1
# npm: 3.10.8
# sudo: required
# need "GIT_USER_NAME" "GIT_USER_EMAIL" "GIT_REPO_TOKEN" "BAIDU_ANALYTICS" "BAIDU_URL_SUBMIT_TOKEN" "DuoShuo_SHORT_NAME" variable in env.
# env variable "icarus_opacity_disable" to control icarus opacity version display enable or disable.
# how to use: in travis, use the script to run, eg:
#    source travis_env_init.sh
#    sh travis_env_init.sh
#    ./travis_env_init.sh
'


node --version
npm --version

echo "Hexo environment pre install start."
echo "${__COMMENTS__}"

npm install -g minimatch > /dev/null
npm install -g graceful-fs > /dev/null
npm install -g gulp > /dev/null
npm install -g hexo > /dev/null
npm install -g hexo-cli > /dev/null
npm install > /dev/null

echo "hexo and packages install complete."

# Set git config 
git config --global user.name "${GIT_USER_NAME}"
git config --global user.email "${GIT_USER_EMAIL}"
sed -i'' "s~git@github.com:~https://${GIT_REPO_TOKEN}@github.com/~" _config.yml
# Set baidu initiative push config
sed -i'' "s~token: # baidu zhanzhang initiative push token~token: ${BAIDU_URL_SUBMIT_TOKEN} ~" _config.yml

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
    background_images_folder="./source/images/background"
    background_images_count=$(source rename_BGI.sh "${background_images_folder}/horizontal")
    if [ $? -eq 0 ]
    then
        sed -i'' "s~enable: false # Is choose the opacity version of this theme~enable: true # ~" "${theme_config_file}"
        sed -i'' "s~horizontal_img_count: 0~horizontal_img_count: ${background_images_count} ~" "${theme_config_file}"
    fi
    background_images_count=$(source rename_BGI.sh "${background_images_folder}/vertical")
    if [ $? -eq 0 ]
    then
        sed -i'' "s~enable: false # Is choose the opacity version of this theme~enable: true # ~" "${theme_config_file}"
        sed -i'' "s~vertical_img_count: 0~vertical_img_count: ${background_images_count} ~" "${theme_config_file}"
    fi
fi

echo "Hexo environment pre install complete OK."
