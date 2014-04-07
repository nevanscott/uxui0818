---
layout: notes
title: Using Colors in CSS
permalink: /notes/colors/
---


Colors can be specified in CSS in a variety of ways:


Color Keywords
--------------

These are used less frequently, but are handy for basic colors like `black` and `white`. There are quite a few of these, please consult the <a href="http://msdn.microsoft.com/en-us/library/ie/aa358802(v=vs.85).aspx">MSDN Documentation</a> for a more complete list.


Hex Codes (RGB)
---------------

"Hex" values are so-called because they use hexadecimal, or base-16, to describe the color values for red, green, and blue. Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.

Thus `#FF0000` is red (full red, no green, no blue), `#00FF00` is green (no red, full green, no blue), `#0000FF` is blue (no red, no green, full blue). `#00FFFF` is a blue-green.

Hex values can be abbreviated to only 3 digits if each digit is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.


RGB Color Values
----------------

These express exactly the same range of colors as in Hex, but do so using decimal rather than hexadecimal, in this format: `rgb(0,0,0)`. The first value is red, the second green, the third blue -- the same order as with Hex. Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.

FF in base-16 is equivalent to 255 in base-10.

In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.

White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.


RGBa Colors
-----------

RGBa works identically to RGB, expect that it takes a 4th value called the "alpha" or "alpha channel" value. This is a value between 0 and 1 which will be used to determine a color's opacity on the page, with 0 being completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

Thus, `rgba(0,0,0,.25)` is black at 25% opacity and `rgba(255, 255, 255, 0.8)` is white at 80% opacity.

The alpha value can be in decimal form but cannot use a percentage. When a decimal is used, the leading zero is optional.


HSL Colors
----------

These use a similar notation to RGB values, but specify colors using hue, saturation, and lightness.

**Hue** is expressed as a degree angle measure, with red being at `0`, green at `120`, and blue at `240`. Note that the degree unit is implied, and that the angle wraps around, so `360` also refers to red, and `-120` is the same as `240` (blue).

**Saturation** is expressed as a percentage, with `100%` being a fully saturated color, and `0%` being a shade of gray (no hue).

**Lightness** is also expressed as a percentage, `0%` being black, and `100%` being white. `50%` lightness is the "normal" color range: anything above `50%` gives a white tint, anything below `50%` gives a black shade.

As an example, red is `hsl(0, 100%, 50%)`, which is equivalent to `#FF0000`.


HSLa Colors
-----------

As with RGBa, HSLa is exactly like HSL for the first 3 values, but takes a 4th alpha-channel value.

Thus, `hsla(240, 100%, 50%, 0.5)` is a bright blue shown at 50% opacity.

Note that changing the opacity allows whatever colors are "behind" an element to shine through, which can alter the visible color significantly, especially at lower opacities.