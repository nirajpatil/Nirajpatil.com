# Javascript

---
<a name="top"></a>
## Load Order
1. [modernizr.js](#modernizr)
1. [jquery-1.8.2.js](#jquery)
1. [jquery-ui-1.9.1.js](#jquery-ui)
1. [hashgrid.js](#hashgrid)
1. [header.js](#header)
1. [functions.js](#functions)


## On Compressed Files

If you add your own Javascript libraries, it's important to use **uncompressed** files. Storyteller performs it's own compression, and we've run into issues with compressing already compressed files.


## Script Information

<a name="modernizr"></a>
### Modernizr (modernizr.js)

[http://modernizr.com/](http://modernizr.com/)

Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser. It adds various classes to the HTML tag of your document that lets you use CSS specificity to apply styles to browsers that support specific CSS functionality. Modernizr runs quickly on page load to detect features; it then creates a JavaScript object with the results, and adds classes to the `html` element for you to target your CSS with.

_Example:_

    <html class="js flexbox flexboxlegacy no-rgba no-hsla multiplebgs no-backgroundsize borderimage borderradius">

We can see that this example browser supports multiple backgrounds, border-radius, and border-image properties, but not rgba, nor hsla properties; we can use these classes for properties that aren't supported to aid in graceful degradation in our CSS.

_Example:_

    <style type="text/css">
    div.alert { background-color: rgba(150,150,150,0.75); } // Transparent grey background
    .no-rgba div.alert { background-color: #969696; } // No transparency, or use a transparent .png
    </style>

Why make exceptions for properties that aren't supported instead of the other way around? The amount of unsupported properties will decrease as browser technology marches on, and people continue to adopt modern browsers (I'm looking at you IE8), so building for the future and making exceptions for the past is more efficient.

Modernizr is highly customizable; because we don't build many HTML5 applications, this default file only checks CSS3 compatibility. If you need Modernizr to check for more features, you can generate a new file at [modernizr.com](http://modernizr.com/).

#### HTML5 Shiv

Modernizr also comes with the html5shiv 3.6 which allows versions of IE (8 and lower) that don't support HTML5 elements (`<section>`, `<article>`, `<footer>`, etc.) to recognize them and allow them to be styled with CSS.

[Back to Top](#top)

---

<a name="jquery"></a>
### jQuery (jquery-1.8.2.js)

[jquery.com](http://jquery.com/)

jQuery is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. jQuery is designed to change the way that you write JavaScript.

[Back to Top](#top)

---

<a name="jquery-ui"></a>
### jQuery UI (jquery-ui-1.9.1.js)

[jqueryui.com](http://jqueryui.com/)

jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you're building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice.

This particular file is a custom built library that only includes the Tabs widget, we've never used it for anything else. If you want to include more jQuery UI functionality, you can build a new file on the [download page](http://jqueryui.com/download/)

[Back to Top](#top)

---

<a name="hashgrid"></a>
### #grid (hashgrid.js)

[hashgrid.com](http://hashgrid.com/)

This is a little visual grid tool that Analog created. It inserts a visual layout grid in web pages (holding down G key on your keyboard), allows you to hold it in place (G key + H key), and toggle between displaying it in the foreground or background (G + F key). This is for visual purposes only, it does not create a layout grid for content.

The grid overlay HTML is initialized within functions.js, and the layout of the grid is controlled with CSS within grid.css. 

**The function initializing the grid should be removed or commented out before the site is published.** It won't break the site if it is published, but it's not something that a user needs to see or stumble across.

#### #grid Off
![#grid off](http://cdn.sparkart.net/sparkart/gonzo/grid.png)

#### #grid On (holding down G key)
![#grid on](http://cdn.sparkart.net/sparkart/gonzo/grid-on.png)

[Back to Top](#top)

---

<a name="header"></a>
### Header (header.js)

This custom function toggles the visibility of a dropdown menu for small browser sizes. It currently toggles it for screen sizes under 620px wide, but can be modified on line 24.

[Back to Top](#top)

---

<a name="functions"></a>
### Functions (functions.js)

This file always goes last in the listing of javascript. It goes last because the functions within it depend on the libraries loaded before it. All of your custom functions will reside within this file. It's pre-populated with a call for hashgrid and a utility function to open any anchor tags with `rel="external"` in a new window.

[Back to Top](#top)