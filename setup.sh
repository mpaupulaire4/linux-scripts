#!/bin/bash

echo '\n\nInstalling Fira Code\n\n'

sudo apt install fonts-firacode


echo '\n\nInstalling NVM and Node\n\n'

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install-latest-npm
npm install -g yarn



echo '\n\nInstalling ohmyzsh\n\n'

sudo apt install zsh

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"



echo '\n\nInstalling Brave Browser\n\n'

sudo apt install apt-transport-https curl gnupg

curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -

echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list

sudo apt update

sudo apt install brave-browser



echo '\n\ Setup Git \n\n'

git config --global user.name "Michel Pupulaire"
git config --global user.email mpaupulaire4@gmail.com
git config --global core.editor "code --wait"
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait $MERGED"
git config --global pull.rebase true



echo '\n\ Settting up QMK for Keyboard Config \n\n'

sudo apt install -y git python3-pip.local/bin:$PATH

python3 -m pip install --user qmk

git clone https://github.com/mpaupulaire4/qmk_firmware.git Personal/qmk_firmware

qmk setup

qmk config user.keyboard=crkbd
qmk config user.keymap=mpaupulaire



echo '\n\ Settting up Docker \n\n'

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


# MANUAL INSTALL
# Bitwarden
# VS Code
# Insomnia
