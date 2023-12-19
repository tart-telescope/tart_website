# Instructions for Translating Documentation

Here are some instructions for those helping to translate parts of the TART documentation website. This is done using this github repository. There are two approaches, one easy, and the other harder.

## The easy way (small changes)

Create a copy of the file that you would like to 
## The harder way (via git)

This way you will use the power of git to help with the translation of the site. You will need your own github account.

* Fork the tart_website repository. Go to (https://github.com/tart-telescope/tart_website) and click the fork button. You will now have your own copy of the reposotory. ```https://github.com/<YourUserName>/tart_website```
* Next, clone the repo by opening the terminal on your computer and running the command:

    git clone https://github.com/<YourUserName>/tart_website
    
* Create a destination folder for your content: Here we assume that french is the target language (replace fr with the language you are translating to)

    mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

* Copy the file you want to translate 

    cp docs/basics/hardware.md i18n/fr/docusaurus-plugin-content-docs/current/basics/hardware.md

* Translate i18n/fr/docusaurus-plugin-content-docs/current/basics/hardware.md into French.
