#!/bin/bash

source ./utils.sh

set -e

PROFILE_PATH=$1

if  [ -z ${PROFILE_PATH} ]; then
  echo "Once in the profile manager create a new profile."
  echo "Take note of the path to profile directory."
  echo "**Run this Script again with that path.**"
  echo "**Warning: all profile data will be deleted**"
  read -p "Press enter to continue"
  firefox -no-remote -P
  exit 0
fi

# echo $PROFILE_PATH
rm -rI $PROFILE_PATH/*

create_links $MCONF/firefox $PROFILE_PATH
firefox -no-remote --profile $PROFILE_PATH
