#!/bin/bash

source ./utils.sh

set -e

CODE_DIR=${1:-VSCodium}
EXT_PARENT=${2:-.vscode-oss}

echo $CODE_DIR

create_links "$MCONF/code/user" "$HOME/.config/$CODE_DIR/User"

create_link "$MCONF/code/extensions" "$HOME/$EXT_PARENT/extensions"
