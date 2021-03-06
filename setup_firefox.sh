#!/bin/bash

source ./utils.sh

set -e

PROFILE_PATH=$1
LINKS=(
  'extensions'
  'user-overrides.js'
  'user.js'
  'prefsCleaaner.sh'
  'updater.sh'
)

if  [ -z ${PROFILE_PATH} ]; then
  echo "Once in the profile manager create a new profile."
  echo "Take note of the path to profile directory."
  echo "**Run this Script again with that path.**"
  echo "**Warning: all profile data will be deleted**"
  read -p "Press enter to continue"
  firefox -no-remote -P
  exit 0
fi



for i in "${LINKS[@]}"; do
  create_link $MCONF/firefox/$i $PROFILE_PATH/$i
done
