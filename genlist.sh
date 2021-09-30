#!/bin/bash

set -e
source ./utils.sh

pacman -Qqen > $MCONF/pkglist.txt
pacman -Qqem > $MCONF/fpkglist.txt
