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
cat ./reflector.conf > /etc/xdg/reflector/reflector.conf
systemctl enable reflector.service

echo 'Sound (ALSA)'
yay -S alsa-utils sof-firmware

echo 'Install LightDM'
yay -S lightdm lightdm-webkit2-greeter lightdm-wibkit-theme-aether light-locker
systemctl enable lightdm.service
echo 'Change the greeter-session to the appropriate greeter'
sudo nano /etc/lightdm/lightdm.conf
echo 'Change the greeter-session to the appropriate greeter'
sudo nano /etc/lightdm/lightdm-webkit2-greeter.conf

echo 'Install i3'
yay -S i3-gaps
systemctl enable lightdm.service
echo 'Change the greeter-session to the appropriate greeter'
sudo nano /etc/lightdm/lightdm.conf
echo 'Change the greeter-session to the appropriate greeter'
sudo nano /etc/lightdm/lightdm-webkit2-greeter.conf
