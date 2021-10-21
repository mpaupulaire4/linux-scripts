#!/bin/bash

set -e

source utils.sh

echo 'Updating'
pacman -Syu

echo 'Installing Some Basic Packages'
pacman -S cryptsetup lvm2 efibootmgr zsh micro iwd git sudo xdg-user-dirs grml-zsh-config intel-ucode dhcpcd --needed

echo 'Create a password for the root user'
passwd

echo 'Adding User mpaupulaire'
useradd -m -G wheel -s /usr/bin/zsh mpaupulaire

echo 'Set User mpaupulaire password'
passwd mpaupulaire

echo 'Setting Up Internet'
systemctl enable systemd-networkd.service
systemctl enable systemd-resolved.service
systemctl enable dhcpcd.service
systemctl enable iwd.service

echo 'Edit sudoers file'
EDITOR=micro visudo

echo 'FINISHED BASIC SETUP'
