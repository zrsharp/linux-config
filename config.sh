#!/bin/bash

echo -n 'This will overwrite the original configuration. Do you want to continue?(yes/no, default=yes): '

read op

if [ -z $op ] || [ $op == 'yes' ] || [ $op == 'y' ] || [ $op == 'Y' ]; then

  for file_name in $(ls -A ./inhome); do
    full_path=$PWD/'inhome'/$file_name
    echo $file_name '====>' $(echo ~)/$file_name
    ln -sf $full_path ~
  done

  for file_name in $(ls -A ./inconfig); do
    full_path=$PWD/'inconfig'/$file_name
    echo $file_name '====>' $(echo ~)/.config/$file_name
    rm -rf ~/.config/$file_name
    ln -sf $full_path ~/.config
  done
fi
