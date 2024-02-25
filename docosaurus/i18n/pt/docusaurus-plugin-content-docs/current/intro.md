---
sidebar_position: 1
---

import Carousel from '@site/src/components/Carousel';


# Introdução ao TART

Vamos descobrir **TART em menos de 5 minutos**

O Transient Array Radio Telescope (TART) é um radiotelescópio de síntese de abertura que usa 24 ou 32 receptores de rádio para criar imagens do céu de rádio a 1,575 GHz. As antenas olham para todo o céu de uma só vez. Os dados desses receptores são correlacionados pela estação base TART e as visibilidades são geradas em tempo real. O TART opera exatamente da mesma maneira que grandes radiotelescópios como o MeerKAT, SKA e VLA funcionam, e fornece uma excelente plataforma para compreensão e desenvolvimento de novos algoritmos para radioastronomia.

|       |      |
| ---   | ---- |
| ![tart array](pathname:///img/tart_array.jpg) | ![DiSkO image](pathname:///img/signal.svg) |


## A interface web do telescópio

Cada telescópio TART possui uma interface web. São aplicativos web que obtêm dados da [API web TART](./basics/tart-api) e criam imagens e permitem controlar o telescópio. Aqui está a interface web do [TART Dunedin New Zealand](https://tart.elec.ac.nz/signal/home).

Os componentes de um telescópio TART

Um TART consiste em 24 receptores de rádio (montados em módulos de rádio), cada um com uma antena disposta em conjunto. Esses hubs de rádio estão conectados à estação bast. Mais informações na página [hardware TART](./basics/hardware).

Todos os dados do telescópio são processados ​​na estação base e disponibilizados através da [TART web API](./basics/tart-api).

## Usando as ferramentas tortas

Existem algumas ferramentas de linha de comando disponíveis como parte do [pacote python tart_tools](https://github.com/tart-telescope/tart_modules). Essas ferramentas de linha de comando permitem fazer coisas como baixar dados, criar imagens, etc.

## Criando Imagens

Você pode usar ferramentas de linha de comando e muito mais para criar imagens do telescópio TART. Eles são descritos em [Fazendo Imagens](./basics/making-images).

## Entrando em contato com a equipe TART

O contato principal da equipe TART é Tim Molteno. Seu e-mail é tim_at_elec_dot_ac_dot_nz.
