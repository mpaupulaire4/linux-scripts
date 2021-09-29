#!/bin/bash

source ./utils.sh

set -e

hook_dir = '/etc/pacman.d/hooks'

echo "Set HookDir to $hook_dir/"
sudo nan /etc/pacman.conf

mkdir -p $hook_dir
cp -i $MCONF/pkglists.hook $hook_dir/

create_link "$MCONF/pkglist.txt" "/etc/pkglist.txt"
create_link "$MCONF/fpkglist.txt" "/etc/fpkglist.txt"
