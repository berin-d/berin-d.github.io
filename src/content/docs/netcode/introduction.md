---
title: NetCode Unity - Essentiel
description: A guide in my new Starlight docs site.
author: 'Berin'
---

## Table des matières

#### Base
1. [Introduction](#introduction)

#### Fonctionnalité
2. [Network Object](#network-object)
3. [Network Transform](#network-transform)

#### Annexes
4. [Ressources](#ressources)

---

## Introduction

> **Concepte :**
> Les jeux multijoueurs sont des jeux qui se déroulent entre plusieurs instances de jeu différentes. Chaque instance possède sa propre copie du monde de jeu et ses propres comportements au sein de ce monde

![alt text](../../../assets/netcode/image.png)

--- 

## Network Object

> **Définition**  
> Un NetworkObject est un composant spécial que tu ajoutes à un GameObject pour le rendre visible et synchronisable sur le réseau (entre le serveur et les clients).

#### Network Object - Ownership
- Quand un joueur se connecte, le **serveur spawn un NetworkObject** pour ce joueur
- Ce NetworkObject a un `OwnerClientId` qui correspond à l'ID du client propriétaire
- Sur le client propriétaire, `IsOwner` retourne `true`
- Sur tous les autres clients et le serveur, `IsOwner` retourne `false`


### 1. Network Object - Hiérarchie
- Tu dois ajouter le component `NetworkObject` à l'entité qui devra être synchroniser avec le serveur
-----------
```
(GameObject)
├── NetworkObject 
```

---

## Network Transform

> **Définition**
> Le composant NetworkTransform synchronise les mouvements (ou rotations) des objets du jeu sur le réseau.



#### Network Transform - Hiérarchie
----

```
(GameObject)
├── NetworkObject
├── NetworkTransform (pour synchroniser la position & rotation)
```

## Ressources

- [Unity : Get started with Netcode for GameObjects](https://learn.unity.com/tutorial/get-started-with-netcode-for-gameobjects)
