---
sidebar_position: 1
---

# TART Présentation

Découvrons **TART en moins de 5 minutes**. Le TART est un radiotélescope à synthèse d'ouverture, il utilise 24 récepteurs radio pour créer des images du ciel radio à 1,575 GHz.

## Premiers pas avec l'API TART

Il n'est pas nécessaire de se connecter pour capturer les données des télescopes. L'authentification n'est nécessaire que pour les requêtes API qui modifient les propriétés du télescope (comme le téléchargement des gains et des phases d'étalonnage). L'API du télescope est documentée en ligne (https://tart.elec.ac.nz/signal/doc/) et montre les appels d'API reposants qui peuvent être effectués.
Pour obtenir des données d'imagerie, essayez le (https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis)
wget -O test.json  https://tart.elec.ac.nz/signal/api/v1/imaging/vis
Cela téléchargera les dernières visibilités dans un fichier appelé test.json
