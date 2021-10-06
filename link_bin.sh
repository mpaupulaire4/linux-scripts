#!/bin/bash

source ./utils.sh

set -e

mkdir -p $HOME/.local/bin

for i in `ls $MCONF/bin -A`
do
  create_link "$MCONF/bin/$i" "$HOME/.local/bin/$i"
done
