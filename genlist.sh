#!/bin/bash

set -e
source ./utils.sh

pacman -Qqen > $MCONF/pkglist.txt
if yorn 'Generate foreign pkg list?'; then
  pacman -Qqem > $MCONF/fpkglist.txt
fi
