#!/bin/bash

source ./utils.sh

set -e

sudo mkdir -p /etc/pacman.d/hooks/
sudo cp -i $MCONF/pkglists.hook /etc/pacman.d/hooks/

sudo nano /etc/pacman.conf

create_link "$MCONF/pkglist.txt" "/etc/pkglist.txt"
create_link "$MCONF/fpkglist.txt" "/etc/fpkglist.txt"
