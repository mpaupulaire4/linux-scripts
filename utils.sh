MCONF=$(pwd)

function yorn {
    while true; do
        read -p "$* [y/n]: " yn
        case $yn in
            [Yy]*) return 0  ;;
            [Nn]*) echo "Aborted" ; return  1 ;;
        esac
    done
}

function create_link {
  if [[ -L "$2" ]]; then
    if [[ ! -e "$2" ]]; then
      unlink $2
    elif [ "$1" == "$(readlink "$2")" ]; then
      echo "$2 -> $1"
      return 0
    elif yorn "$2 is already a symlink, unlink it?"; then
      unlink $2
    fi
  fi
  ln -siv $1 $2
}
