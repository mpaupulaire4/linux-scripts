#!/bin/sh

set -e
source ./utils.sh

echo 'Updating'
sudo pacman -Syu

echo 'Install YAY'
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
cd ..
rm -rf yay

yay
yay -Y --gendb
yay -S yay

echo 'Config reflector'
yay -S reflector
mkdir -p /etc/xdg/reflector
cat $MCONF/reflector.conf > /etc/xdg/reflector/reflector.conf
systemctl enable reflector.service

echo 'Install NVM and Node'
yay -S nvm
echo 'source /usr/share/nvm/init-nvm.sh' >> $HOME/.zshrc
source $HOME/.zshrc
nvm install 'lts/*'
nvm install-latest-npm
npm install -g yarn


echo 'Install LightDM'
yay -S lightdm lightdm-webkit2-greeter lightdm-wibkit-theme-aether light-locker i3-gaps
systemctl enable lightdm.service
echo 'Change the greeter-session to the appropriate greeter'
sudo nano /etc/lightdm/lightdm.conf
echo 'Change the greeter-session to the appropriate greeter'
sudo nano /etc/lightdm/lightdm-webkit2-greeter.conf

# echo 'Install Fira Code'
# yay -S ttf-fira-code
# echo 'Sound (ALSA)'
# yay -S alsa-utils sof-firmware
