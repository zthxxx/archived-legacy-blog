#!/bin/bash

__COMMENTS__='
# Usage:
# source range_background_images.sh ${background_images_folder}
# 
# Script will rename all files in specified background_images_folder to style as "img_[number].jpg"  eg: img_0.jpg img_1.jpg ...
'

run_path=$(pwd)
img_folder_path="$1"
cd "${img_folder_path}"

# 获取数组中给定元素的下标
# 参数：1 数组 [*]; 2 元素
# 返回：元素在数组中的下标，从 0 开始；-1 表示未找到
# 例子：
#    获取数组 array 中元素 i3 的下标
#    array=(i1,i2,i3)
#    arr_item_index "${array[*]}" "i3"
#    返回 2
# 注意：数组作为参数使用时需要先转换
function arr_item_index()
{
  local _xrsh_tmp
  local _xrsh_cnt=0
  local _xrsh_array=`echo "$1"`
  for _xrsh_tmp in ${_xrsh_array[*]}; do
    if test "$2" = "$_xrsh_tmp"; then
      echo $_xrsh_cnt
      return 0
    fi
    _xrsh_cnt=$(( $_xrsh_cnt + 1 ))
  done
  echo "-1"
  return -1
}

img_index=0
file_list=()
for file_name in *
do
    file_list[${#file_list[@]}]="${file_name}"
done

for img_index in `seq 0 $((${#file_list[*]}-1))`
do
    index_name="img_${img_index}.jpg"
    if [ -f ${index_name} ];then
        file_index=`arr_item_index "${file_list[*]}" "${index_name}"`
        if (( ${file_index} >= 0 ));then
            unset file_list[${file_index}]
            file_list=("${file_list[@]}")
        else
            break
        fi
    else
        mv "${file_list[-1]}" "${index_name}" 2> /dev/null
        unset file_list[-1]
    fi
    let "img_index++"
done

echo "${img_index}"
cd "${run_path}"
