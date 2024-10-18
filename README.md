# Microbit Morse Code Sender

> A script that allows you to send morse code between two Microbits.

This is no way practical, but it's cool to see that it's at least possible.

> Open this page at [https://EsotericEnderman.github.io/microbit-morse-code-sender/](https://EsotericEnderman.github.io/microbit-morse-code-sender/)

## Usage

See the morse code chart below for help:

![Morse Code](assets/Morse%20Code.png)

1. Button **A** is short signal.
2. Button **B** is a long signal.
3. Begin by typing out a letter using the **A** and **B** buttons.
4. When you are done, type the termination sequence **AAAAB**. This will add the letter to what will be sent.
5. To send the current string, type the *end* character by typing **ABAB**. This will send the string to all other Microbits on the radio frequency.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/EsotericEnderman/microbit-morse-code-sender** and import

## Edit This Project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/EsotericEnderman/microbit-morse-code-sender** and click import

## Metadata (Used for Search, Rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
