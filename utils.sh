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

function clean_link {
  if [[ -L "$1" && ! -e "$1" ]]; then
    unlink $1
    echo "$1 cleaned"
  fi
}


function create_links {
  for i in `ls $1 -A`; do
    create_link "$1/$i" "$2/$i"
  done

  find $2 -maxdepth 1 -type l -print0 | while IFS= read -r -d '' filename; do
    clean_link "$filename"
  done
}

function arraydiff() {
  awk 'BEGIN{RS=ORS=" "}
       {NR==FNR?a[$0]++:a[$0]--}
       END{for(k in a)if(a[k])print k}' <(echo -n "${!1}") <(echo -n "${!2}")
}
