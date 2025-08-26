Refactor summary (inline CSS/JS -> external files)
=================================================

index.html                                     css: 72031 bytes   js: 7705 bytes
about.html                                     css: 88833 bytes   js: 9510 bytes
benefits.html                                  css: 107775 bytes   js: 14878 bytes
blogs.html                                     css: 53325 bytes   js: 5903 bytes
contactus.html                                 css: 77584 bytes   js: 8359 bytes
faq.html                                       css: 82615 bytes   js: 9348 bytes
gallery.html                                   css: 51185 bytes   js: 5903 bytes
products.html                                  css: 85555 bytes   js: 27424 bytes
recipes.html                                   css: 57895 bytes   js: 27951 bytes
whereToBuy.html                                css: 82124 bytes   js: 8845 bytes
from-farm-to-table.html                        css: 56945 bytes   js: 5903 bytes
how-to-identify-genuine-country-eggs.html      css: 56945 bytes   js: 5903 bytes
raising-happy-hens.html                        css: 56945 bytes   js: 9367 bytes
The-Benefits-of-Free-Range-Brown-Eggs.html     css: 56945 bytes   js: 5903 bytes
the-role-of-herbal-feed-in-poultry-immunity.html  css: 56945 bytes   js: 5903 bytes
Why-herbal-farming-is-the-future-of-poultry.html  css: 56945 bytes   js: 5903 bytes

Notes:
- All inline <style> blocks moved into assets/css/<page>.css
- All inline <script> (without src) moved into assets/js/<page>.js
- Updated HTML now references those external files before </head>
- DOM structure and class/id names were left untouched.
