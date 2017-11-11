# proglangdesign.github.io

A website for the #proglangdesign community on freenode

You can see this live at [proglangdesign.net](http://proglangdesign.net)

# Adding a language

1. Edit the languages.pld file.

# Rebuilding the TSV or HTML file

    npm install jtree
    # Check your additions to languages.pld for errors
    jtree check languages.pld
    jtree compile languages.pld html > index.html
    jtree compile languages.pld tsv > languages.tsv

