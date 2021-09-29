#!/bin/bash

source ./utils.sh

set -e

for i in `ls $MCONF/config -A`
do
  create_link "$MCONF/config/$i" "$HOME/.config/$i"
done
