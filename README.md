# **html 360°** modeling in browser

This project implements html5-ready variants of original flash movie from [this site](http://prosecret.ru/3d_new.html) using some new technologies (as for the year 2011). The main goal was to simplify the process of editing such 3d-models and to allow importing some object's parameters to JS or PHP. This project is the product of one-man-working process (except for some frameworks, that were used).

## Features

* There are 3 implementations of 360°-models:
  * **[360-flash](http://kanner.github.io/html-three-sixty/360-flash/)**: flash-based implementation with color-picking and importing color variables from flash to js/html;
  * **[360-html5](http://kanner.github.io/html-three-sixty/360-html5/)**: html5 canvas implementation with same features and possibility to use mouse and keyboard to control rotation (arrows, spacebar);
  * **[360-html5-images](http://kanner.github.io/html-three-sixty/360-html5-images/)**: interesting js-based implementation using images of the model (without some features from above).
* html5-ready (360-html5, 360-html5-images).
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE6+), 360-flash require flash-player to be pre-installed into browser.
* MIT license

## Frameworks and original sources

* [UIZE JavaScript Framework](http://uize.com/examples/3d-rotation-viewer.html)
* [Giuseppe Sicari Chrome experiments](http://www.giuseppesicari.it/progetti/javascript-3d-model-viewer/)
