# Chaleur & réacteurs

Ces blocs traitent du système de **Chaleur** et de l'énergie nucléaire. Les chauffages produisent de la chaleur ; les machines thermiques (comme le Haut fourneau) la consomment ; les réacteurs génèrent de l'énergie et doivent être refroidis.

## Système de chaleur

La chaleur est une ressource distincte de l'énergie. Elle est produite par les chauffages et poussée vers le bloc situé devant eux. Les machines thermiques doivent être complètement chauffées avant de fonctionner.

## Chauffage électrique

![electric_heater](../../../img/industrial_elixir/machines/electric_heater_front.png)

Convertit **l'énergie en chaleur**. Machine de Niveau 4 (capacité 3000 E).

**Utilisation :** Insérez des objets **Coil** dans les 10 emplacements de coil. Chaque Coil convertit **10 E → 10 Chaleur par tick**. Le chauffage pousse la chaleur vers sa face avant vers une machine thermique adjacente.

## Chauffage à combustible solide

![solid_fuel_heater_generator](../../../img/industrial_elixir/machines/solid_fuel_heater_generator_front.png)

Brûle du combustible solide pour produire **10 Chaleur/tick** (pause quand la chaleur est pleine). Machine de Niveau 1.

**Utilisation :** Mettez un combustible solide dans l'emplacement d'entrée. Des cendres sont produites comme sous-produit dans l'emplacement de sortie. Pousse la chaleur vers sa face avant.


<AdUnit />

## Haut fourneau

![blast_furnace](../../../img/industrial_elixir/machines/blast_furnace_front.png)

Un convertisseur consommant chaleur + fluides. Machine de Niveau 1. Doit atteindre **50 000 Chaleur** pour fonctionner ; reçoit la chaleur d'un chauffage placé devant lui. Consomme du fluide par recette (par ex. air comprimé) et sort vers 2 emplacements. Temps de traitement : 6000 ticks.

### Recettes

| Entrée | Sortie principale | Sortie secondaire | Fluide |
|--------|-------------------|-------------------|--------|
| Lingot de fer | Lingot d'acier | Laitier | Air comprimé (1000 mB) |
| Vitre | Récipient vide | — | Air comprimé (1000 mB) |

## Générateur sacré (Réacteur sacré)

![sacred_generator](../../../img/industrial_elixir/machines/sacred_generator_front.png)

Une grille de réacteur 3×3. Sortie de Niveau 3, capacité 4096 E.

**Utilisation :**
1. Nécessite un **signal redstone** et une barre de combustible dans l'**emplacement central** (index 4).
2. Produit `nombreBarres × 128` E par impulsion et génère de la chaleur.
3. Les 8 emplacements extérieurs contiennent des composants de refroidissement (cellules de refroidissement, évents thermiques, échangeurs de chaleur) qui dissipent la chaleur et subissent de l'usure.
4. 4 emplacements de batterie (10–13).

> ⚠️ **Danger :** Si la chaleur atteint **5000**, le réacteur **fond** avec une explosion de rayon 100. Gardez-le refroidi !

### Composants du réacteur

| Composant | Rôle | Photo |
|-----------|------|-------|
| Essence sacrée | Barre de combustible (4 barres), durabilité 20000 | ![sacred_essence](../../../img/industrial_elixir/items/sacred_essence.png) |
| Fragment sacré | Barre de combustible (8 barres), durabilité 20000 | ![sacred_shard](../../../img/industrial_elixir/items/sacred_shard.png) |
| Cœur sacré | Barre de combustible (16 barres), durabilité 20000 | ![sacred_core](../../../img/industrial_elixir/items/sacred_core.png) |
| Cellule de refroidissement 10k | Refroidissement (12 refroid./t), durabilité 10000 | ![coolant_cell_10k](../../../img/industrial_elixir/items/coolant_cell_10k.png) |
| Cellule de refroidissement 30k | Refroidissement (12 refroid./t), durabilité 30000 | ![coolant_cell_30k](../../../img/industrial_elixir/items/coolant_cell_30k.png) |
| Cellule de refroidissement 60k | Refroidissement (12 refroid./t), durabilité 60000 | ![coolant_cell_60k](../../../img/industrial_elixir/items/coolant_cell_60k.png) |
| Évent thermique | Évacuation (6 refroid./t), durabilité 1000 | ![heat_vent](../../../img/industrial_elixir/items/heat_vent.png) |
| Évent thermique avancé | Évacuation (12 refroid./t), durabilité 1000 | ![advanced_heat_vent](../../../img/industrial_elixir/items/advanced_heat_vent.png) |
| Évent thermique overclocké | Évacuation, durabilité 1000 | ![overclocked_heat_vent](../../../img/industrial_elixir/items/overclocked_heat_vent.png) |

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
