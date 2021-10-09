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

echo "install packages"
FPKGS=(`cat "$MCONF/fpkglist.txt"`)
PKGS=(`cat "$MCONF/pkglist.txt"`)
CFPKGS=(`pacman -Qqem`)
needed=($(arraydiff FPKGS[@] CFPKGS[@]))

yay -S --needed "${PKGS[@]}"
if [ ${#needed[@]} != 0 ]; then
  yay -S --needed "${needed[@]}"
fi
