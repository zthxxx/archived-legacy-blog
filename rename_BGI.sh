#!/bin/bash
cd source/images/background

img_index=0
file_list=()

for file_name in *
do
    file_list[${#file_list[@]}]="${file_name}"
done

for file_name in "${file_list[@]}"
do
    index_name="img_${img_index}_"
    mv "${file_name}" "${index_name}${file_name}"
    let "img_index++"
done

img_index=0
file_list=()

for file_name in *
do
    file_list[${#file_list[@]}]="${file_name}"
done

for file_name in "${file_list[@]}"
do
    index_name="img_${img_index}.jpg"
    mv "${file_name}" "${index_name}"
    if [ $? -eq 0 ]
    then
        let "img_index++"
    fi
done
echo "Total: ${img_index} image files."
cd ../../..

