# Notes
## TODO
- Configure i3 (Window Manager)
- Kitty (Terminal)
- Ranger (file explorer)
- Firefox
- Rofi (run menu thing)
- ZSH (get rc squared away. ohmyzsh or custom config)
- Configure Dunst (Notifications)

## From Old Setup File
### Setting up QMK
```zsh
sudo apt install -y git python3-pip.local/bin:$PATH

python3 -m pip install --user qmk

git clone https://github.com/mpaupulaire4/qmk_firmware.git Personal/qmk_firmware

qmk setup

qmk config user.keyboard=crkbd
qmk config user.keymap=mpaupulaire
```
### Setting Up Docker
```
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
sudp apt update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo usermod -aG docker $USER
newgrp docker
```
