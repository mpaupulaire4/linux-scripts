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
readarray -t FPKGS < ./fpkglist.txt
readarray -t PKGS < ./pkglist.txt
currFPKGS=($(pacman -Qqem))
currPKGS=($(pacman -Qqen))
needFPKG=($(arraydiff FPKGS[@] currFPKGS[@]))
needPKG=($(arraydiff PKGS[@] currPKGS[@]))
rmFPKG=($(arraydiff currFPKGS[@] FPKGS[@]))
rmPKG=($(arraydiff currPKGS[@] PKGS[@]))

if (( ${#needPKG[@]} != 0 )); then
  yay -S --needed "${needPKG[@]}"
fi

if (( ${#needFPKG[@]} != 0 )); then
  yay -S --needed "${needFPKG[@]}"
fi

if (( ${#rmPKG[@]} != 0 )); then
  yay -Rns "${rmPKG[@]}"
fi

if (( ${#rmFPKG[@]} != 0 )); then
  yay -Rns "${rmFPKG[@]}"
fi
