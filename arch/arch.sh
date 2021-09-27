set -e

echo 'Updating'
pacman -Syu

echo 'Installing Some Basic Packages'
pacman -S cryptsetup lvm2 efibootmgr nano iwd git sudo reflector

echo 'Create a password for the root user'
passwrd

echo 'Adding User mpaupulaire'
useradd -m -G wheel -s /usr/bin/zsh mpaupulaire

echo 'Moving Iwd config (setting up internet)'
cat ./iwd-main.conf > /etc/iwd/main.conf
systemctl enable systemd-networkd.service

echo 'Set User mpaupulaire password'
passwrd mpaupulaire

echo 'Edit sudoers file'
EDITOR=nano visudo

echo 'Config reflector'
cat ./reflector.conf > /etc/xdg/reflector/reflector.conf
systemctl enable reflector.service

echo 'Install LightDM'
pacman -S lightdm lightdm-gtk-greeter

echo 'Sound (ALSA)'
pacman -S alsa-utils
