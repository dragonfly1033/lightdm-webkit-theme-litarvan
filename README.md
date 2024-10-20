# dragonfly1033's changes
Added support for changing background in terminal from logged in session.

First: change owner and group of /usr/share/backgrounds so user can write to it without sudo (only once)

```bash sudo chown $(whoami) /usr/share/backgrounds```

```bash sudo chgrp $(whoami) /usr/share/backgrounds```

Then: whenever you want to change the background run this

```bash rm -rf /usr/share/backgrounds/*```

```bash cp /path/to/new/background /usr/share/backgrounds```

ensure that the random background setting is on. this method uses the fact that the random setting always checks the /usr/share/backgrounds directory in which we will only keep the one image we want to use. then we just clear the directory and copy another image in.

# Litarvan's LightDM WebKit2 theme

[![Arch Release](https://img.shields.io/badge/arch-3.2.0-blue.svg?style=flat-square)](https://www.archlinux.org/packages/community/any/lightdm-webkit-theme-litarvan/) &nbsp;[![Latest Release](https://img.shields.io/github/release/Litarvan/lightdm-webkit-theme-litarvan.svg?style=flat-square&label=github)](https://github.com/Litarvan/lightdm-webkit-theme-litarvan/releases) &nbsp;![Github downloads](https://img.shields.io/github/downloads/Litarvan/lightdm-webkit-theme-litarvan/total.svg?style=flat-square)

**=> Screenshots below**

# [Live testing (3.2.0)](https://litarvan.github.io/lightdm-webkit-theme-litarvan/)

# Customize release
Backgrounds can be added in `/usr/share/backgrounds` and chosen in the Theming view (bottom right corner of the Setup view).

Customize the OS logo within `/usr/share/lightdm-webkit/themes/litarvan/img/os.xxxxxxxx.png`

# Installation

## Arch Linux (3.2.0)

```
pacman -S --needed lightdm-webkit2-greeter lightdm-webkit-theme-litarvan
```

* If not already done, edit `/etc/lightdm/lightdm.conf` and set `greeter-session=lightdm-webkit2-greeter` .
* Then edit `/etc/lightdm/lightdm-webkit2-greeter.conf` and set `theme` or `webkit-theme` to `litarvan` .

## Manual (3.2.0)

* Install lightdm-webkit2-greeter using your dependency manager if not already done
* Download and unzip the [tar file](https://github.com/Litarvan/lightdm-webkit-theme-litarvan/releases) in `/usr/share/lightdm-webkit/themes/litarvan/`
* Edit `/etc/lightdm/lightdm-webkit2-greeter.conf` and set `theme` to `litarvan`.

# Building (latest features in development, future 3.3.0)

```
$ ./build.sh
```

Will generate a lightdm-webkit-theme-litarvan-3.2.0.tar.gz in the current folder.

# Screenshots

![Setup screenshot](https://litarvan.github.io/lightdm-webkit-theme-litarvan/setup_view.png)

![Splash screenshot](https://litarvan.github.io/lightdm-webkit-theme-litarvan/splash_view.png)

![Login screnshot](https://litarvan.github.io/lightdm-webkit-theme-litarvan/login_view.png)

![Desktops screenshot](https://litarvan.github.io/lightdm-webkit-theme-litarvan/desktops_view.png)

![Theming screenshot](https://litarvan.github.io/lightdm-webkit-theme-litarvan/theming_view.png)
