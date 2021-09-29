#!/bin/bash

source ./utils.sh

set -e

for i in `ls $MCONF/home -A`
do
  create_link "$MCONF/home/$i" "$HOME/$i"
done
