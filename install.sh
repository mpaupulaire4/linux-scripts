#!/bin/bash

set -e
source ./utils.sh

echo 'Updating'
sudo pacman -Syu

if yorn 'Install YAY?'; then
  sudo pacman -S --needed git base-devel --asdeps
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si
  cd ..
  rm -rf yay

  yay
  yay -Y --gendb
  yay -S yay
fi

if yorn 'Configure Reflector?'; then
  mkdir -p /etc/xdg/reflector
  yay -S reflector --needed
  sudo cp -i $MCONF/reflector.conf /etc/xdg/reflector/reflector.conf
  sudo systemctl enable reflector.service
fi

if yorn 'Configure Reflector?'; then
  yay -S bluez bluez-utils --needed
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

if yorn 'Install LightDM?'; then
  yay -S lightdm lightdm-webkit2-greeter lightdm-webkit-theme-aether light-locker i3-gaps --needed
  sudo systemctl enable lightdm.service
  echo 'Change the greeter-session to the appropriate greeter'
  sudo nano /etc/lightdm/lightdm.conf
  echo 'Change the greeter-session to the appropriate greeter'
  sudo nano /etc/lightdm/lightdm-webkit2-greeter.conf
fi

if yorn 'Install and enable power management?'; then
  yay -S tlp tlpui
  sudo systemctl enable tlp
fi

if yorn 'Link dotfiles DIR?'; then
  source ./link_home.sh
fi

if yorn 'Link Config DIR?'; then
  source ./link_config.sh
fi

if yorn 'Install pkgs from pkglist?'; then
  pacman -S --needed - < pkglist.txt
fi

if yorn 'Install foreign pkgs from fpkglist?'; then
  yay -S --needed - < fpkglist.txt
fi
