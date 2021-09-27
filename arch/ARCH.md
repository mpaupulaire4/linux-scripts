# Arch Linux Docs
- yay instead of yauort


## Installation
[Disk Encryption](https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#LVM_on_LUKS) |
[Install Guide](https://wiki.archlinux.org/title/Installation_guide) |
[EFI Boot](https://wiki.archlinux.org/title/EFISTUB) |
[General](https://wiki.archlinux.org/title/General_recommendations)

- foloow Encryption for partition set up then with install guid. Swtich back for initramfs and boot.
- Decide if you are going to use `linux` or `linux-lts` kernels.
- see `efi.sh` for EFI boot script
- boot config located at `/etc/mkinitcpio.conf`, `mkinitcpio -p` to generate
- `lsblk -f` To get UUIDs where needed
- **clone this scripts repo to be able to run scipts**

### Pacstrap Packages
- `cryptsetup` for Disk encryption
- `lvm2` for logical volume changes and disk encryption
- `efibootmgr` for efi boot stuff
- `nano` for simle commandline file editing
- `intel-ucode` or `amd-ucode` for processor updates. Add `initrd=\cpu_manufacturer-ucode.img` before normal `initrd`
- `iwd` for internet
- `git`

##
