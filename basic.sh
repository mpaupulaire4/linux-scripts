set -e

source utils.sh

echo 'Updating'
pacman -Syu

echo 'Installing Some Basic Packages'
pacman -S cryptsetup lvm2 efibootmgr zsh nano iwd git sudo xdg-user-dirs grml-zsh-config --needed

echo 'Create a password for the root user'
passwd

echo 'Adding User mpaupulaire'
useradd -m -G wheel -s /usr/bin/zsh mpaupulaire

echo 'Set User mpaupulaire password'
passwd mpaupulaire

echo 'Setting Up Internet with IW'
mkdir /etc/iwd
cat $MCONF/iwd-main.conf > /etc/iwd/main.conf
systemctl enable systemd-networkd.service
systemctl enable systemd-resolved.service
systemctl enable iwd.service

echo 'Edit sudoers file'
EDITOR=nano visudo

echo 'FINISHED BASIC SETUP'
