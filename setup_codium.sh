#!/bin/bash

source ./utils.sh

set -e

CODE_DIR=${1:-VSCodium}
EXT_PARENT=${2:-.vscode-oss}

echo $CODE_DIR

if yorn "link user directory?"; then
  for i in `ls $MCONF/code/user -A`
  do
    create_link "$MCONF/code/user/$i" "$HOME/.config/$CODE_DIR/User/$i"
  done
fi

if yorn "link extensions?"; then
  create_link "$MCONF/code/extensions" "$HOME/$EXT_PARENT/extensions"
fi
