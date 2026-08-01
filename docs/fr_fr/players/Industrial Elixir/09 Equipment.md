# Équipement

Industrial Elixir ajoute une armure et des outils en bronze, une puissante armure quantique et un jetpack électrique.

## Équipement en Bronze

Le bronze est un matériau de tier début-milieu (niveau de minage du fer).

### Outils en Bronze

| Outil | Durabilité | Dégâts d'attaque | Vitesse | Photo |
|-------|-----------|------------------|---------|-------|
| Épée en Bronze | 340 | 5,0 | −2,4 | ![bronze_sword](../../../img/industrial_elixir/items/bronze_sword.png) |
| Pelle en Bronze | 340 | 3,5 | −3,0 | ![bronze_shovel](../../../img/industrial_elixir/items/bronze_shovel.png) |
| Pioche en Bronze | 340 | 3,0 | −2,8 | ![bronze_pickaxe](../../../img/industrial_elixir/items/bronze_pickaxe.png) |
| Hache en Bronze | 340 | 8,0 | −3,1 | ![bronze_axe](../../../img/industrial_elixir/items/bronze_axe.png) |
| Houe en Bronze | 340 | 0,0 | −1,0 | ![bronze_hoe](../../../img/industrial_elixir/items/bronze_hoe.png) |

- **Caractéristiques du matériau d'outil :** durabilité 340, vitesse de minage 6,0, bonus de dégâts d'attaque 2,0, enchantabilité 14, niveau de minage du fer.
- Réparés avec des lingots de bronze (tag `bronze_tool_materials`).

### Armure en Bronze

| Pièce | Défense | Photo |
|-------|---------|-------|
| Casque en Bronze | 2 | ![bronze_helmet](../../../img/industrial_elixir/items/bronze_helmet.png) |
| Plastron en Bronze | 6 | ![bronze_chestplate](../../../img/industrial_elixir/items/bronze_chestplate.png) |
| Jambières en Bronze | 5 | ![bronze_leggings](../../../img/industrial_elixir/items/bronze_leggings.png) |
| Bottes en Bronze | 2 | ![bronze_boots](../../../img/industrial_elixir/items/bronze_boots.png) |

- **Caractéristiques du matériau d'armure :** multiplicateur de durabilité 15, enchantabilité 9, sans solidité ni résistance au recul.
- Réparée avec des lingots de bronze (tag `repairs_bronze_armor`).


<AdUnit />

## Armure Quantique

La **Combinaison Quantique** est l'armure motorisée de plus haut niveau. Chaque pièce stocke **10 000 000 E**, se recharge au **Tier 5 (8192 E/t)** et est incassable. Sa barre de durabilité cyan indique son niveau d'énergie.

| Pièce | Défense de base | Photo |
|-------|-----------------|-------|
| Casque Quantique | 4 | ![quantum_helmet](../../../img/industrial_elixir/items/quantum_helmet.png) |
| Plastron Quantique | 10 | ![quantum_chestplate](../../../img/industrial_elixir/items/quantum_chestplate.png) |
| Jambières Quantiques | 7 | ![quantum_leggings](../../../img/industrial_elixir/items/quantum_leggings.png) |
| Bottes Quantiques | 4 | ![quantum_boots](../../../img/industrial_elixir/items/quantum_boots.png) |

- **Caractéristiques du matériau d'armure :** multiplicateur de durabilité 37, enchantabilité 25, solidité 5,0, résistance au recul 0,1, armure complète 37.
- Lorsqu'elle est alimentée, chaque pièce accorde des bonus d'armure/solidité/résistance au recul ; les Jambières accordent aussi **+0,15 de vitesse de déplacement**.

### Capacités des Pièces

| Pièce | Capacité | Coût en énergie |
|-------|----------|-----------------|
| Casque | Recharge l'air sous-marin quand il est bas | 1 000 E par recharge |
| Casque | Recharge la faim quand elle est ≤ 7 gommes | 10 000 E |
| Casque | Supprime l'Empoisonnement | 10 000 × (amplificateur+1) E |
| Casque | Supprime le Wither | 25 000 × (amplificateur+1) E |
| Casque | Vision nocturne activable | 25 000 E pour activer |
| Plastron | Vol / vol stationnaire en jetpack | 25 E/t en vol, 37 E/t en vol stationnaire |
| Plastron | Éteint le feu | gratuit |
| Jambières | Vitesse de sprint ×3 (×9 sur glace) | passif (nécessite de l'énergie) |
| Jambières | Grâce du Dauphin en nageant | passif (nécessite de l'énergie) |
| Bottes | Saut amplifié | 1 000 E |
| Bottes | Annule les dégâts de chute | (distanceChute − 12) × 900 E |

### Absorption des Dégâts

Lorsqu'elle est alimentée, l'armure absorbe les dégâts entrants, dépensant de l'énergie au lieu des points de vie. Chaque pièce réduit les dégâts (Casque 15 %, Plastron 44 %, Jambières 30 %, Bottes 15 %) — l'ensemble complet est pratiquement immunisé tant que l'énergie dure. Coût : `900 + 30 × dégâts` par pièce.

## Jetpack Électrique

![electric_jetpack](../../../img/industrial_elixir/items/electric_jetpack.png)

Un plastron motorisé qui permet de voler.

- **Capacité :** 300 000 E, **Tier 3** (512 E/t en entrée), incassable.
- **Vol :** Maintenez saut pour voler (25 E/t), double-appui pour le mode vol stationnaire (37 E/t).
- Éteint le feu gratuitement.
- Utilise la même physique de vol que le Plastron Quantique (poussée verticale 0,30, avant 0,08, mode vol stationnaire).


<AdUnit />

## Raccourcis Clavier & Contrôles

Le mod ajoute une catégorie **Industrial Elixir** au menu Contrôles (Options → Contrôles… → Raccourcis clavier). Il enregistre trois touches, toutes utilisées comme *modificateurs* pour les capacités de l'armure motorisée :

| Raccourci clavier | Touche par défaut | Description |
|-------------------|-------------------|-------------|
| Touche de changement de mode | `M` | Modificateur pour les capacités de l'armure |
| Touche ALT | `Alt gauche` | Modificateur pour les capacités de l'armure |
| Touche d'amplification | `Ctrl gauche` | Modificateur pour les capacités de l'armure |

### Combinaisons de Touches

| Combinaison | Action | Requiert |
|-------------|--------|----------|
| Maintenir `M` + appuyer sur `Alt gauche` | Activer/désactiver la vision nocturne | Casque Quantique (25 000 E) |
| Maintenir `Ctrl gauche` + appuyer sur `Espace` | Saut amplifié | Bottes Quantiques (1 000 E) |
| Maintenir `M` + appuyer sur `Espace` | Activer/désactiver le mode vol stationnaire | Plastron Quantique / Jetpack Électrique |
| Maintenir `Espace` / `Z` / `Q` / `D` | Poussée du jetpack / avant / latéral | Plastron Quantique / Jetpack Électrique |

En portant le Plastron Quantique ou le Jetpack Électrique, maintenir `Espace` (saut) vous propulse vers le haut, `Z` vous déplace vers l'avant, et `Q`/`D` permettent les déplacements latéraux — ces entrées sont envoyées au serveur pour piloter la physique de vol.

## Bateaux & Panneaux

Le mod ajoute des véhicules aquatiques et des panneaux en bois de caoutchouc :

| Objet | Utilisation | Photo |
|-------|-------------|-------|
| Bateau en Caoutchouc | Bateau classique | ![rubber_boat](../../../img/industrial_elixir/items/rubber_boat.png) |
| Bateau de Transport en Caoutchouc | Bateau avec coffre | ![rubber_chest_boat](../../../img/industrial_elixir/items/rubber_chest_boat.png) |
| Panneau en Caoutchouc | Panneau à poser | ![rubber_sign](../../../img/industrial_elixir/items/rubber_sign.png) |
| Panneau Suspendu en Caoutchouc | Panneau suspendu | ![rubber_hanging_sign](../../../img/industrial_elixir/items/rubber_hanging_sign.png) |

## Outils à Main

| Objet | Utilisation | Photo |
|-------|-------------|-------|
| Marteau | Opération de laminage (durabilité 80) | ![tool_rolling](../../../img/industrial_elixir/items/tool_rolling.png) |
| Couteau | Opération de découpe (durabilité 80) | ![tool_cutting](../../../img/industrial_elixir/items/tool_cutting.png) |

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
