#!/bin/bash

source ./utils.sh

set -e

HOOK_DIR='/etc/pacman.d/hooks'

echo "Set HookDir to $HOOK_DIR/"
sudo nan /etc/pacman.conf

mkdir -p $HOOK_DIR
cp -i $MCONF/pkglists.hook $HOOK_DIR/

create_link "$MCONF/pkglist.txt" "/etc/pkglist.txt"
create_link "$MCONF/fpkglist.txt" "/etc/fpkglist.txt"
