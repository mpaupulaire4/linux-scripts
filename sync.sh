#!/bin/bash

source ./utils.sh

set -e

echo "Link Home"
create_links "$MCONF/home" "$HOME"
echo "Link Config"
mkdir -p "$HOME/.config"
create_links "$MCONF/config" "$HOME/.config"
echo "Link Bin"
mkdir -p "$HOME/.local/bin"
create_links "$MCONF/bin" "$HOME/.local/bin"
