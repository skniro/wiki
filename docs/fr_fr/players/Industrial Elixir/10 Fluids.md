# Fluides

Industrial Elixir ajoute trois fluides : la **Matière UU**, l'**Air Comprimé** et la **Source Chaude**. Ces trois fluides se comportent comme l'eau (densité 1000, viscosité 1000, température 300) et s'écoulent comme des liquides normaux.

## Matière UU

![fluid_uu_bucket](../../../img/industrial_elixir/items/fluid_uu_bucket.png) Seau de Matière UU

La **Matière UU** est un fluide de fin de partie utilisé pour dupliquer des objets. Elle est produite par le **Générateur de Matière** et consommée par le **Réplicateur**.

- **Production :** Le Générateur de Matière convertit **1 000 000 E par 1 mB** de Matière UU. Ajouter de la **Feraille** dans la fente d'entrée augmente la production par **5×** (jusqu'à 5000 d'amplificateur de feraille).
- **Consommation :** Le **Réplicateur** utilise la Matière UU (plus de l'énergie) pour dupliquer tout objet scanné dans un Cristal de Stockage de Motifs.
- **Stockage :** Peut être stockée dans le Seau de Matière UU ou la Cellule de Matière UU (`uu_cell`, 1000 mB).

## Air Comprimé

![fluid_air_bucket](../../../img/industrial_elixir/items/fluid_air_bucket.png) Seau d'Air Comprimé

L'**Air Comprimé** est un fluide utilisé par le **Haut Fourneau**. Chaque recette de Haut Fourneau consomme 1000 mB d'air comprimé.

- **Stockage :** Seau d'Air Comprimé ou Cellule d'Air (`air_cell`, 1000 mB).
- **Obtention :** Peut être mis en bouteille depuis une source d'air fluide, ou fabriqué en compressant une Cellule Vide dans le Compresseur (→ Cellule d'Air).

## Source Chaude

![hot_spring_bucket](../../../img/industrial_elixir/items/hot_spring_bucket.png) Seau de Source Chaude

L'eau de **Source Chaude** est un fluide chaud qui procure un effet de soin.

- **Régénération :** Se tenir dans un **bloc source** d'eau de source chaude confère **Régénération II pendant 3 secondes** (réappliqué tant que vous restez dedans).
- **Conversion des sources :** La règle de jeu `hot_spring_source_conversion` (par défaut `true`) contrôle si les sources d'eau chaude peuvent se générer à l'infini. Réglez-la avec la commande `/gamerule hot_spring_source_conversion true|false`. Lorsqu'elle est `false`, les blocs sources d'eau chaude ne se rechargent plus, vous ne pouvez donc pas créer de bassin infini de source chaude.
- **Stockage :** Seau de Source Chaude ou Cellule de Source Chaude (`hot_spring_cell`, 1000 mB).
- **Énergie :** Le **Générateur de Fluide** brûle la source chaude à 1 mB/t pour produire **1 E/t** (comme l'eau).

## Cellules et Seaux de Fluide

Tous les fluides peuvent être stockés et transportés dans des **seaux** (pile de 1) ou des **cellules** (pile de 16, 1000 mB chacune).

| Fluide | Seau | Cellule |
|--------|------|---------|
| Matière UU | ![fluid_uu_bucket](../../../img/industrial_elixir/items/fluid_uu_bucket.png) Seau de Matière UU | ![uu_cell](../../../img/industrial_elixir/items/uu_cell.png) Cellule de Matière UU |
| Air Comprimé | ![fluid_air_bucket](../../../img/industrial_elixir/items/fluid_air_bucket.png) Seau d'Air Comprimé | ![air_cell](../../../img/industrial_elixir/items/air_cell.png) Cellule d'Air |
| Source Chaude | ![hot_spring_bucket](../../../img/industrial_elixir/items/hot_spring_bucket.png) Seau de Source Chaude | ![hot_spring_cell](../../../img/industrial_elixir/items/hot_spring_cell.png) Cellule de Source Chaude |

Le mod dispose également de cellules pour les fluides vanilla :

| Cellule | Fluide |
|---------|--------|
| ![empty_cell](../../../img/industrial_elixir/items/empty_cell.png) Cellule Vide | Vide (peut être remplie) |
| ![water_cell](../../../img/industrial_elixir/items/water_cell.png) Cellule d'Eau | Eau |
| ![lava_cell](../../../img/industrial_elixir/items/lava_cell.png) Cellule de Lave | Lave |

## Transport des Fluides

Les fluides sont déplacés avec les **tuyaux à fluides** (voir [Système d'Énergie](./02%20Energy%20System)) et stockés dans le **Réservoir de Fluide** (16 seaux). Les machines de traitement des fluides possèdent chacune un réservoir intégré de 16 seaux et consomment 1000 mB par fabrication.

### Générateur de Fluide

![fluid_generator](../../../img/industrial_elixir/machines/fluid_generator_front.png)

| Fluide | Consommation | Production |
|--------|--------------|------------|
| Lave | 2 mB/t | 20 E/t |
| Eau | 1 mB/t | 1 E/t |
| Source Chaude | 1 mB/t | 1 E/t |

## Eau de Source Chaude dans les Escaliers

Certaines marches (Escaliers en Caoutchouc et Escaliers en Pierre de Roches « Source Chaude ») peuvent être **remplies d'eau de source chaude** en plus de l'eau normale. Faites un clic droit sur une marche avec un Seau de Source Chaude pour la remplir de source chaude ; avec un seau d'eau pour un remplissage normal.

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
