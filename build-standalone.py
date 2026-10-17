"""Wrap dot-drop.html (written as a Claude artifact body) into a full page for GitHub Pages.
Run after editing dot-drop.html:  python3 build-standalone.py"""
src = open("dot-drop.html", encoding="utf-8").read()
head = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<!-- Generated from dot-drop.html by build-standalone.py. Edit dot-drop.html, not this file. -->\n'
        '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
        'body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n</head>\n<body>\n')
open("index.html", "w", encoding="utf-8").write(head + src + "\n</body>\n</html>\n")
print("wrote index.html")
