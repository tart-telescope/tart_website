---
sidebar_position : 1
---

# TART Intro

Découvrons **TART en moins de 5 minutes**.

Le Transient Array Radio Telescope (TART) est un radiotélescope à synthèse d'ouverture, il utilise 24 récepteurs radio pour créer des images du ciel radio à 1,575 GHz. Les antennes regardent tout le ciel à la fois. Les données de ces récepteurs sont corrélées par la station de base TART et les visibilités sont générées en temps réel. Le TART fonctionne exactement de la même manière que les grands radiotélescopes comme MeerKAT, SKA et VLA, et fournit une excellente plate-forme pour comprendre et développer de nouveaux algorithmes pour la radioastronomie.

## L'interface web du télescope

Chaque télescope TART possède une interface web. Ce sont des applications Web qui obtiennent des données de l'[API Web TART] (./basics/tart-api) et créent des images et vous permettent de contrôler le télescope. Voici l'interface Web du [Dunedin New Zealand TART](https://tart.elec.ac.nz/signal/home).

## Les composants d'un télescope TART

Un TART se compose de 24 récepteurs radio (montés sur des modules radio), disposés par groupes de 6 dans un hub radio. Ces hubs radio sont connectés au baststation. Toutes les données du télescope sont traitées sur la station de base et mises à disposition via l'[API Web TART](./basics/tart-api).

## Utiliser les outils de TART

Certains outils de ligne de commande sont disponibles dans le cadre du [paquet python tart_tools](https://github.com/tart-telescope/tart_modules). Ces outils de ligne de commande vous permettent de télécharger des données, de créer des images, etc.


## Création d'images

Vous pouvez utiliser des outils de ligne de commande et plus encore pour créer des images à partir du télescope TART. Celles-ci sont décrites dans [Création d'images](./basics/making-images).
