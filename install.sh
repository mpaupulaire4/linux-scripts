#!/bin/bash

set -e
source ./utils.sh

echo "Settting Up DNS Resolution"
sudo ln -sf /run/systemd/resolve/stub-resolve.conf /etc/resolve.conf
touch .pkgignore

echo 'Updating'
sudo pacman -Syu

if yorn 'Install YAY?'; then
  sudo pacman -S --needed git base-devel --asdeps
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si
  cd ..
  rm -rf yay

  yay -Y --gendb
  yay -S yay
fi

if yorn 'Configure Reflector?'; then
  sudo mkdir -p /etc/xdg/reflector
  yay -S reflector --needed
  sudo cp -i $MCONF/reflector.conf /etc/xdg/reflector/reflector.conf
  sudo systemctl enable reflector.service
fi

if yorn 'Configure Bluetooth?'; then
  yay -S bluez --needed
  sudo systemctl enable bluetooth.service
fi

if yorn 'Install NVM and Node?'; then
  yay -S nvm --needed
  source /usr/share/nvm/init-nvm.sh
  nvm install 'lts/*'
  nvm install-latest-npm
  npm install -g yarn
fi

if yorn 'Install xorg?'; then
  yay -S xorg-server xf86-video-intel xorg-xrandr --needed
fi

if yorn 'Install Display Manager and Window Manager?'; then
  yay -S ly i3-gaps i3lock --needed
  sudo systemctl enable ly.service
fi

if yorn 'Install and enable power management?'; then
  yay -S tlp
  sudo systemctl enable tlp
fi

if yorn 'Install pkgs from pkglist?'; then
  sudo pacman -S --needed - < .pkgs
fi
