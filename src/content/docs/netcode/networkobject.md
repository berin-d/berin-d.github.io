---
title: NetCode Unity - Network Object
description: A guide in my new Starlight docs site.
author: 'AfterLife Studio'
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