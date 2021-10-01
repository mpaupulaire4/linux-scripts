[![Version](https://vsmarketplacebadge.apphb.com/version/jock.svg.svg)](https://marketplace.visualstudio.com/items?itemName=jock.svg)

# svg

A Powerful SVG Language Support Extension.
Almost all the features you need to handle SVG.

## Features

### SVG Full Auto Completion.

![feature 1](https://github.com/lishu/vscode-svg2/raw/master/images/f1s.gif)

> Tip: All Completion list is context, will only show enable items.

### Document Symbol tree.

![feature 2](https://github.com/lishu/vscode-svg2/raw/master/images/f3.png)

### SVG Live Preview and Export PNG

![feature 3](https://github.com/lishu/vscode-svg2/raw/master/images/f2s.gif)

### MDN Reference for fast learn

![feature 4](https://github.com/lishu/vscode-svg2/raw/master/images/f3s.gif)

> Tip: Configure Trusted Domains add MDN to it get more fast action.

### Fast Color Picker

![feature 4](https://github.com/lishu/vscode-svg2/raw/master/images/f4s.gif)

### Rename Tag Name or Id Reference.

Cursor in Tag Name or Id Attribute or url(#id) Hit F2(Windows) Key, Rename it!

### In Id Reference Click Goto id="" element.

Hot Ctrl Key and Move mouse to a url(#id), That it!

### SVG Format Support
Formatting support using SVGO, which can prettify SVGs and sort tag attributes.
SVGO works as a group of plugins that can be activated or desactivated (which is default for most in this extension).
Information on the plugins can be found [here](https://www.npmjs.com/package/svgo).

### Minify SVG with SVGO

Open the **Command Palette** (`⇧⌘P` on Mac and `Ctrl+Shift+P` on Win/Linux) and run `Minify SVG`. This will reduce the filesize significantly by removing all unnecessary code from the image.

## Contributors

* [Laurent Tréguier](https://github.com/LaurentTreguier) for sharing SVG formatting features
* [Björn Ganslandt](https://github.com/Ansimorph) for sharing Minify SVG features
* [Amelia Bellamy-Royds](https://github.com/AmeliaBR) for Add the xmlns and xmlns:xlink attributes
* [Evan Demaris](https://github.com/evandemaris)
* [Trevor Burnham](https://github.com/TrevorBurnham)
* [Philipp Kief](https://github.com/PKief)

## Known Issues

SVG Version 2.0 is not included.

## Changelog

### 1.4.1 - 2020-11-02
- Fix IntelliSense enum options not correct after last complete rewrite.
- Add `vector-effect` attribute to `Presentation` category.

### 1.4.0 - 2020-10-22
- Editor add `Copy as Image Data Uri` command in Context Menu, now you can copy svg add parse it to `<img src="|" />` direct.
- Preview how can show `Crossline`.
- Preview how can show `Ruler`.

### 1.3.12 - 2020-10-18
- Emmet-Style auto complete has support full 2.0 definions.

### 1.3.11 - 2020-10-11
- Add svg elements & attributes to HTML Language Service Custom Data.
- Experimental add emmet-style auto complete, If you want to try this feature, configure 'svg.completion.emmet' to 'true'.

### 1.3.10 - 2020-09-17
- Fixed write top level comment has error message in output.

### 1.3.9 - 2020-09-04
- The previewer now supports up to 64x scaling.
- After 16x zoom, the pixel grid is automatically displayed.

### 1.3.8 - 2020-08-01
- Fixed top bar on svg preview covers top of preview

### [MORE](https://github.com/lishu/vscode-svg2/blob/master/Changelog.md)

## Donations
[Support me in paypal](https://www.paypal.me/jockli).

-----------------------------------------------------------------------------------------------------------
## For more information

* [MDN SVG Reference](https://developer.mozilla.org/en-US/docs/Web/SVG)

**Enjoy!**