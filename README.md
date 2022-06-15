# SaladBind [![Discord](https://img.shields.io/discord/868937321402204220?color=5865f2&label=chat&logo=discord&logoColor=7289da)](https://discord.gg/litdevs)

<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/Vukkyy/vukmoji/master/emojis/static/vukkyminer.png">

If you want to contribute to SaladBind, please read our [contributing guide](CONTRIBUTING.md). Do **NOT** make your own SaladBind version unless you have a good reason to! We welcome any contributions!

## Table of Contents

[Features](#Features) <br>
[Installation](#Installation) <br>
[Configuration](#Configuration) <br>
[Miner Setup Guide](#Miner-Setup-Guide) <br>
[Compiling](#Compiling)

**This application is not affiliated with Salad Technologies.** It is made by LIT Devs, for the entire Salad community.

We have a [Discord server](https://discord.gg/zpsN7swhfD) if you want to talk to us!

## Features

<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/Vukkyy/vukmoji/master/emojis/static/vukkywoah.png">

- Switch between miners, pools, and algorithms
- Shows only miners and algorithms that are supported by your GPU
- Easy to use interface
- Built-in configuration editor
- Automatic updates for the miners and the app itself
- Three methods of setting up SaladBind: scanning for the Rig ID, getting it from your Salad Auth token, and entering your Rig ID manually
- Discord Rich Presence
- No extra programs needed
- Set advanced miner arguments
- Save your advanced miner arguments
- Immediately restart mining with old settings using a command line argument.

## Installation

<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/Vukkyy/vukmoji/master/emojis/static/vukkyhappy.png">

### Windows

Download the file from [GitHub Releases](https://github.com/LITdevs/SaladBind/releases/latest).

There's a video tutorial, which you can find [here](https://www.youtube.com/watch?v=u_dOOn75_mA), if you prefer digesting information via video rather than text.

### Arch-based Linux distros

SaladBind is available on the AUR! Install the `saladbind` package through the AUR manager of your choice.

Is Arch not your favorite distro? That's unfortunate! You can try contacting us, or downloading the binary manually as explained below.

### macOS and other Linux distros

Download the file from [GitHub Releases](https://github.com/LITdevs/SaladBind/releases/latest). For these platforms, you'll need to run SaladBind from the terminal, due to how SaladBind works. If you need help with using the terminal, don't be afraid to Google a bit - you'll have to use `cd` to be in the same folder that SaladBind is in.

Use these commands to start SaladBind, for macOS or Linux respectively:

```bash
chmod +x ./saladbind-macos # You only need to run this once
./saladbind-macos
```

```bash
chmod +x ./saladbind-linux # You only need to run this once
./saladbind-linux
```

## Configuration

<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/Vukkyy/vukmoji/master/emojis/static/vukkythink.png">

Once you start SaladBind for the first time, it will ask you if you want to enable Discord Rich Presence. Here is what it looks like: 

[![Discord Rich Presence](https://theblueburger.github.io/i/F6Jm5hS.png)](https://theblueburger.github.io/i/F6Jm5hS.png)

Then, it'll prompt you to enter your mining details.

You can do this by letting SaladBind search your log file, entering your Salad Auth token, or enter your Rig ID manually.

### Automatic (Read from Salad logs)

SaladBind will search your Salad's log file for your Rig ID and save it automatically.

1. Make sure that "Override GPU Compatibility Detection" is enabled in your Salad settings. If this is disabled, Salad might not log your Prohashing details.
2. Start mining with the Salad app normally for 5-15 minutes (the "Chopping" stage)
3. Choose Automatic on SaladBind (Read from Salad logs)

### Automatic (Get with Salad Auth token)

You will be prompted to enter your access token.
To get your access token, log in to [https://app.salad.io/](https://app.salad.io) and follow these steps depending on your browser:

#### Chromium and derivatives

1. Click the lock symbol in the address bar
2. Open `Cookies` and uncollapse `app-api.salad.io`
3. Look for `sAccessToken` and copy it (right click and click `Select all` as it is very long)
4. Paste the token into the terminal (on Windows, right-click in the SaladBind window to paste)

#### Firefox

1. Go to [app-api.salad.io/api/v1/profile/referral-code](https://app-api.salad.io/api/v1/profile/referral-code)
2. Open the devtools by pressing F12
3. Click on `Storage` and make sure that `Cookies` is uncollapsed
4. Double click the value box next to `sAccessToken` and copy it
5. Paste the token into the terminal (on Windows, right-click in the SaladBind window to paste)

### Manual

1. Start mining with the Salad app normally, if you have already been mining for over ~3h you need to restart Salad 
2. Mine for around 5-15 minutes (the "Chopping" stage)
3. Find your Salad logs. A guide can be found [here](https://support.salad.com/hc/en-us/articles/360042215512-How-To-Find-Your-Salad-Log-Files)
4. Search for "rig ID" in the main.log file and copy it. Both the Ethermine worker ID and NiceHash rig ID are supported
5. Paste the Rig ID into the terminal (on Windows, right-click in the SaladBind window to paste)
6. Next, look for a line in the logs that looks like <br>`PhoenixMiner.exe -rmode 0 -rvram 1 -log 0 -pool stratum+tcp://prohashing.com:3339 -pool2 stratum+tcp://eu.prohashing.com:3339 -wal salad -pass o=006a68e5-c33c-40f0-9531-fb216829612f,n=006a68e5-c33c-40f0-9531-fb216829612f` <br>
Copy the part after `o=` until the `,n=` as demonstrated here: `006a68e5-c33c-40f0-9531-fb216829612f`
7. Paste the Prohashing id into the terminal (on Windows, right-click in the SaladBind window to paste)

**If you don’t want to use the Prohashing pool, you can skip steps 6 & 7**<br>
However, using the Prohashing pool is recommended when possible.


You are now ready to go!

### Miner Setup Guide

If you don't know what miner, algorithm or pool to pick, we have a [handy guide](MINERS.md).

## Command line arguments

SaladBind offers some command line arguments.

- `-d` for dumping debug data
- `-l` for starting mining with the latest settings

## Compiling

If you don't want to use our pre-compiled binaries you can compile SaladBind yourself. You'll need to install [Node.js](https://nodejs.org/).

1. Clone the repository
2. Open a terminal in the folder and run `npm install`
3. Run `npm run compile` (This may display a warning, but it's safe to ignore it)
4. Your compiled binaries will be in the `bin` folder
