#!/bin/bash

commonOperation() {
  sudo ln -sf /usr/bin/nvim /usr/bin/vim
  chsh -s /bin/fish
  chmod +x ./config.sh
  . config.sh
}

if [[ $OSTYPE == 'linux-gnu' ]]; then
  if [ -f /etc/redhat-release ]; then
    echo 'Redhat Linux detected.'

  elif [ -f /etc/SuSE-release ]; then
    echo 'Suse Linux detected.'

  elif [ -f /etc/arch-release ]; then
    echo 'Arch Linux detected.'

    sudo cp -f ./pacman/pacman.conf /etc
    sudo cp -f ./pacman/mirrorlist /etc/pacman.d

    sudo pacman -Syyu
    sudo pacman -S \
      base-devel iw wpa_supplicant dhcpcd networkmanager nm-connection-editor libnm libnma \
      neovim emacs code \
      xorg xorg-xinit lightdm lightdm-gtk-greeter i3 \
      alacritty fish picom ranger polybar dmenu \
      alsa-utils alsa-firmware alsa-tools alsa-plugins alsa-lib  \
      pulseaudio pulseaudio-alsa pavucontrol \
      fcitx fcitx-im fcitx-configtool fcitx-sunpinyin \
      jdk8-openjdk openjdk8-doc openjdk8-src maven plantuml \
      clang nodejs python python-pip go \
      chromium libreoffice virtualbox qq-linux baidunetdisk-bin zathura zathura-pdf-poppler \
      kdenlive vlc mplayer gthumb simplescreenrecorder screenkey gimp dia \
      v2ray qv2ray figlet neofetch acpi tlp \
      nginx nginx-src openssh vsftpd docker mariadb \
      gptfdisk ntfs-3g dosfstools dosemu \
      nmap tcpdump inetutils bind-tools \
      wqy-microhei wqy-zenhei wqy-bitmapfont wqy-microhei-lite \
      grub-customizer

    sudo systemctl enable tlp
    sudo systemctl enable lightdm
    sudo systemctl enable alsa-restore
    sudo systemctl enable alsa-state
    #sudo systemctl enable mariadb
    #sudo systemctl enable nginx
    #sudo systemctl enable docker
    commonOperation

    # Xorg: https://wiki.archlinux.org/index.php/Xorg

  elif [ -f /etc/mandrake-release ]; then
    echo 'Mandrake Linux detected.'

  elif [ -f /etc/debian_version ]; then
    echo 'Debian/Ubuntu Linux detected.'

    sudo apt autoremove
    sudo apt -f install
    sudo apt update
    sudo apt upgrade
    sudo apt install \
      iw nmap tcpdump dnsutils \
      neovim emacs code \
      i3 fish compton ranger \
      fcitx fcitx-imlist fcitx-config-common fcitx-sunpinyin \
      openjdk-8-jdk openjdk-8-doc openjdk-8-source maven plantuml \
      clang-format nodejs python3 python3-pip golang \
      chromium libreoffice virtualbox zathura zathura-pdf-poppler \
      kdenlive vlc mplayer gthumb simplescreenrecorder screenkey gimp dia \
      figlet neofetch acpi tlp \
      nginx nginx-doc openssh-client openssh-server openssh-sftp-server vsftpd \
      mariadb-server mariadb-client \
      ntfs-3g dosfstools dosemu \
      fonts-wqy-microhei fonts-wqy-zenhei ttf-wqy-microhei ttf-wqy-zenhei

    sudo systemctl enable tlp
    #sudo systemctl enable mariadb
    #sudo systemctl enable nginx
    #sudo systemctl enable docker
    commonOperation
  else
    echo 'Unknown Linux distribution.'
  fi

elif
  [[ '$OSTYPE' == 'darwin'* ]]
then
  echo 'Mac OS (Darwin) detected.'
elif [[ '$OSTYPE' == 'freebsd'* ]]; then
  echo 'FreeBSD detected.'
else
  echo 'Unknown operating system.'
fi
