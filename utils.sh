MCONF=$(pwd)

declare -a configs=()

function linkConfig {
  if [ ! -r "$HOME/$1" ]
  then
    ln -s $MCONF/$1 $HOME/$1
  fi
}

function linkConfigs {
  for i in "${configs[@]}"
  do
    linkConfigs "$i"
  done
}
